"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JSONParse = require("parse-json");
const uri = require("url");
const util = require("util");
const deps_1 = require("./deps");
const pjson = require('../package.json');
const debug = require('debug')('http');
const debugHeaders = require('debug')('http:headers');
function concat(stream) {
    return new Promise(resolve => {
        let strings = [];
        stream.on('data', data => strings.push(data));
        stream.on('end', () => resolve(strings.join('')));
    });
}
function caseInsensitiveObject() {
    let lowercaseKey = (k) => (typeof k === 'string' ? k.toLowerCase() : k);
    return new Proxy({}, {
        get: (t, k) => {
            k = lowercaseKey(k);
            return t[k];
        },
        set: (t, k, v) => {
            k = lowercaseKey(k);
            t[k] = v;
            return true;
        },
        deleteProperty: (t, k) => {
            k = lowercaseKey(k);
            if (k in t)
                return false;
            return delete t[k];
        },
        has: (t, k) => {
            k = lowercaseKey(k);
            return k in t;
        },
    });
}
function lowercaseHeaders(headers) {
    let newHeaders = caseInsensitiveObject();
    for (let k of Object.keys(headers)) {
        if (!headers[k] && headers[k] !== '')
            continue;
        newHeaders[k] = headers[k];
    }
    return newHeaders;
}
/**
 * Utility for simple HTTP calls
 * @class
 */
class HTTP {
    constructor(url, options = {}) {
        this._redirectRetries = 0;
        this._errorRetries = 0;
        const userAgent = (global['http-call'] && global['http-call'].userAgent && global['http-call'].userAgent) ||
            `${pjson.name}/${pjson.version} node-${process.version}`;
        this.options = Object.assign({}, this.ctor.defaults, options, { headers: lowercaseHeaders(Object.assign({ 'user-agent': userAgent }, this.ctor.defaults.headers, options.headers)) });
        if (!url)
            throw new Error('no url provided');
        this.url = url;
        if (this.options.body)
            this._parseBody(this.options.body);
    }
    static create(options = {}) {
        var _a;
        const defaults = this.defaults;
        return _a = class CustomHTTP extends HTTP {
            },
            _a.defaults = Object.assign({}, defaults, options),
            _a;
    }
    /**
     * make an http GET request
     * @param {string} url - url or path to call
     * @param {HTTPRequestOptions} options
     * @returns {Promise}
     * @example
     * ```js
     * const http = require('http-call')
     * await http.get('https://google.com')
     * ```
     */
    static get(url, options = {}) {
        return this.request(url, Object.assign({}, options, { method: 'GET' }));
    }
    /**
     * make an http POST request
     * @param {string} url - url or path to call
     * @param {HTTPRequestOptions} options
     * @returns {Promise}
     * @example
     * ```js
     * const http = require('http-call')
     * await http.post('https://google.com')
     * ```
     */
    static post(url, options = {}) {
        return this.request(url, Object.assign({}, options, { method: 'POST' }));
    }
    /**
     * make an http PUT request
     * @param {string} url - url or path to call
     * @param {HTTPRequestOptions} options
     * @returns {Promise}
     * @example
     * ```js
     * const http = require('http-call')
     * await http.put('https://google.com')
     * ```
     */
    static put(url, options = {}) {
        return this.request(url, Object.assign({}, options, { method: 'PUT' }));
    }
    /**
     * make an http PATCH request
     * @param {string} url - url or path to call
     * @param {HTTPRequestOptions} options
     * @returns {Promise}
     * @example
     * ```js
     * const http = require('http-call')
     * await http.patch('https://google.com')
     * ```
     */
    static async patch(url, options = {}) {
        return this.request(url, Object.assign({}, options, { method: 'PATCH' }));
    }
    /**
     * make an http DELETE request
     * @param {string} url - url or path to call
     * @param {HTTPRequestOptions} options
     * @returns {Promise}
     * @example
     * ```js
     * const http = require('http-call')
     * await http.delete('https://google.com')
     * ```
     */
    static async delete(url, options = {}) {
        return this.request(url, Object.assign({}, options, { method: 'DELETE' }));
    }
    /**
     * make a streaming request
     * @param {string} url - url or path to call
     * @param {HTTPRequestOptions} options
     * @returns {Promise}
     * @example
     * ```js
     * const http = require('http-call')
     * let {response} = await http.get('https://google.com')
     * response.on('data', console.log)
     * ```
     */
    static stream(url, options = {}) {
        return this.request(url, Object.assign({}, options, { raw: true }));
    }
    static async request(url, options = {}) {
        let http = new this(url, options);
        await http._request();
        return http;
    }
    get method() {
        return this.options.method || 'GET';
    }
    get statusCode() {
        if (!this.response)
            return 0;
        return this.response.statusCode || 0;
    }
    get secure() {
        return this.options.protocol === 'https:';
    }
    get url() {
        return `${this.options.protocol}//${this.options.host}${this.options.path}`;
    }
    set url(input) {
        let u = uri.parse(input);
        this.options.protocol = u.protocol || this.options.protocol;
        this.options.host = u.hostname || this.ctor.defaults.host || 'localhost';
        this.options.path = u.path || '/';
        this.options.agent = this.options.agent || deps_1.deps.proxy.agent(this.secure, this.options.host);
        this.options.port = u.port || this.options.port || (this.secure ? 443 : 80);
    }
    get headers() {
        if (!this.response)
            return {};
        return this.response.headers;
    }
    get partial() {
        if (this.method !== 'GET' || this.options.partial)
            return true;
        return !(this.headers['next-range'] && this.body instanceof Array);
    }
    get ctor() {
        return this.constructor;
    }
    async _request() {
        this._debugRequest();
        try {
            this.response = await this._performRequest();
        }
        catch (err) {
            debug(err);
            return this._maybeRetry(err);
        }
        if (this._shouldParseResponseBody)
            await this._parse();
        this._debugResponse();
        if (this._responseRedirect)
            return this._redirect();
        if (!this._responseOK) {
            throw new HTTPError(this);
        }
        if (!this.partial)
            await this._getNextRange();
    }
    async _redirect() {
        this._redirectRetries++;
        if (this._redirectRetries > 10)
            throw new Error(`Redirect loop at ${this.url}`);
        if (!this.headers.location)
            throw new Error(`Redirect from ${this.url} has no location header`);
        const location = this.headers.location;
        if (Array.isArray(location)) {
            this.url = location[0];
        }
        else {
            this.url = location;
        }
        await this._request();
    }
    async _maybeRetry(err) {
        this._errorRetries++;
        const allowed = (err) => {
            if (this._errorRetries > 5)
                return false;
            if (!err || !err.code)
                return false;
            if (err.code === 'ENOTFOUND')
                return true;
            return require('is-retry-allowed')(err);
        };
        if (allowed(err)) {
            let noise = Math.random() * 100;
            // tslint:disable-next-line
            await this._wait((1 << this._errorRetries) * 100 + noise);
            await this._request();
            return;
        }
        throw err;
    }
    get _chalk() {
        try {
            return require('chalk');
        }
        catch (err) {
            return;
        }
    }
    _renderStatus(code) {
        if (code < 200)
            return code;
        if (code < 300)
            return this._chalk.green(code);
        if (code < 400)
            return this._chalk.bold.cyan(code);
        if (code < 500)
            return this._chalk.bgYellow(code);
        if (code < 600)
            return this._chalk.bgRed(code);
        return code;
    }
    _debugRequest() {
        if (!debug.enabled)
            return;
        let output = [`${this._chalk.bold('→')} ${this._chalk.blue.bold(this.options.method)} ${this._chalk.bold(this.url)}`];
        if (this.options.agent)
            output.push(`  proxy: ${util.inspect(this.options.agent)}`);
        if (debugHeaders.enabled)
            output.push(this._renderHeaders(this.options.headers));
        if (this.options.body)
            output.push(this.options.body);
        debug(output.join('\n'));
    }
    _debugResponse() {
        if (!debug.enabled)
            return;
        const chalk = require('chalk');
        let output = [`${this._chalk.white.bold('←')} ${this._chalk.blue.bold(this.method)} ${this._chalk.bold(this.url)} ${this._renderStatus(this.statusCode)}`];
        if (debugHeaders.enabled)
            output.push(this._renderHeaders(this.headers));
        if (this.body)
            output.push(util.inspect(this.body));
        debug(output.join('\n'));
    }
    _renderHeaders(headers) {
        headers = Object.assign({}, headers);
        if (process.env.HTTP_CALL_REDACT !== '0' && headers.authorization)
            headers.authorization = '[REDACTED]';
        return Object.entries(headers)
            .sort(([a], [b]) => {
            if (a < b)
                return -1;
            if (a > b)
                return 1;
            return 0;
        })
            .map(([k, v]) => `  ${this._chalk.dim(k + ':')} ${this._chalk.cyan(util.inspect(v))}`)
            .join('\n');
    }
    _performRequest() {
        return new Promise((resolve, reject) => {
            if (this.secure) {
                this.request = deps_1.deps.https.request(this.options, resolve);
            }
            else {
                this.request = deps_1.deps.http.request(this.options, resolve);
            }
            if (this.options.timeout) {
                this.request.setTimeout(this.options.timeout, () => {
                    debug(`← ${this.method} ${this.url} TIMED OUT`);
                    this.request.abort();
                });
            }
            this.request.on('error', reject);
            this.request.on('timeout', reject);
            if (this.options.body && deps_1.deps.isStream.readable(this.options.body)) {
                this.options.body.pipe(this.request);
            }
            else {
                this.request.end(this.options.body);
            }
        });
    }
    async _parse() {
        this.body = await concat(this.response);
        let type = this.response.headers['content-type'] ? deps_1.deps.contentType.parse(this.response).type : '';
        let json = type.startsWith('application/json') || type.endsWith('+json');
        if (json)
            this.body = JSONParse(this.body);
    }
    _parseBody(body) {
        if (deps_1.deps.isStream.readable(body)) {
            this.options.body = body;
            return;
        }
        if (!this.options.headers['content-type']) {
            this.options.headers['content-type'] = 'application/json';
        }
        if (this.options.headers['content-type'] === 'application/json') {
            this.options.body = JSON.stringify(body);
        }
        else {
            this.options.body = body;
        }
        this.options.headers['content-length'] = Buffer.byteLength(this.options.body).toString();
    }
    async _getNextRange() {
        const next = this.headers['next-range'];
        this.options.headers.range = Array.isArray(next) ? next[0] : next;
        let prev = this.body;
        await this._request();
        this.body = prev.concat(this.body);
    }
    get _responseOK() {
        if (!this.response)
            return false;
        return this.statusCode >= 200 && this.statusCode < 300;
    }
    get _responseRedirect() {
        if (!this.response)
            return false;
        return [301, 302, 303, 307, 308].includes(this.statusCode);
    }
    get _shouldParseResponseBody() {
        return !this._responseOK || (!this.options.raw && this._responseOK);
    }
    _wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
HTTP.defaults = {
    method: 'GET',
    host: 'localhost',
    protocol: 'https:',
    path: '/',
    raw: false,
    partial: false,
    headers: {},
};
exports.HTTP = HTTP;
exports.default = HTTP;
class HTTPError extends Error {
    constructor(http) {
        super();
        this.__httpcall = pjson.version;
        if (typeof http.body === 'string' || typeof http.body.message === 'string')
            this.message = http.body.message || http.body;
        else
            this.message = util.inspect(http.body);
        this.message = `HTTP Error ${http.statusCode} for ${http.method} ${http.url}\n${this.message}`;
        this.statusCode = http.statusCode;
        this.http = http;
        this.body = http.body;
    }
}
exports.HTTPError = HTTPError;

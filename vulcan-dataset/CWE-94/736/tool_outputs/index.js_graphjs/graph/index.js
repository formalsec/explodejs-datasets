'use strict';
module.exports = morgan;
const v211 = module.exports;
v211.compile = compile;
const v212 = module.exports;
v212.format = format;
const v213 = module.exports;
v213.token = token;
var auth = require('basic-auth');
const v214 = require('debug');
var debug = v214('morgan');
const v215 = require('depd');
var deprecate = v215('morgan');
var onFinished = require('on-finished');
var onHeaders = require('on-headers');
var CLF_MONTH = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];
var DEFAULT_BUFFER_DURATION = 1000;
const morgan = function (format, options) {
    var fmt = format;
    const v216 = {};
    var opts = options || v216;
    const v217 = typeof format;
    const v218 = v217 === 'object';
    const v219 = format && v218;
    if (v219) {
        opts = format;
        const v220 = opts.format;
        fmt = v220 || 'default';
        const v221 = typeof fmt;
        const v222 = v221 === 'string';
        const v223 = JSON.stringify(fmt);
        let v224;
        if (v222) {
            v224 = v223;
        } else {
            v224 = 'format';
        }
        const v225 = 'morgan(options): use morgan(' + v224;
        const v226 = v225 + ', options) instead';
        const v227 = deprecate(v226);
        v227;
    }
    const v228 = fmt === undefined;
    if (v228) {
        const v229 = deprecate('undefined format: specify a format');
        v229;
    }
    var immediate = opts.immediate;
    const v230 = opts.skip;
    var skip = v230 || false;
    let formatLine;
    const v231 = typeof fmt;
    const v232 = v231 !== 'function';
    const v233 = getFormatFunction(fmt);
    if (v232) {
        formatLine = v233;
    } else {
        formatLine = fmt;
    }
    var buffer = opts.buffer;
    const v234 = opts.stream;
    const v235 = process.stdout;
    var stream = v234 || v235;
    if (buffer) {
        const v236 = deprecate('buffer option');
        v236;
        let interval;
        const v237 = typeof buffer;
        const v238 = v237 !== 'number';
        if (v238) {
            interval = DEFAULT_BUFFER_DURATION;
        } else {
            interval = buffer;
        }
        stream = createBufferStream(stream, interval);
    }
    const v254 = function logger(req, res, next) {
        req._startAt = undefined;
        req._startTime = undefined;
        const v239 = getip(req);
        req._remoteAddress = v239;
        res._startAt = undefined;
        res._startTime = undefined;
        const v240 = recordStartTime.call(req);
        v240;
        const logRequest = function () {
            const v241 = skip !== false;
            const v242 = skip(req, res);
            const v243 = v241 && v242;
            if (v243) {
                const v244 = debug('skip request');
                v244;
                return;
            }
            var line = formatLine(morgan, req, res);
            const v245 = line == null;
            if (v245) {
                const v246 = debug('skip line');
                v246;
                return;
            }
            const v247 = debug('log request');
            v247;
            const v248 = line + '\n';
            const v249 = stream.write(v248);
            v249;
        };
        ;
        if (immediate) {
            const v250 = logRequest();
            v250;
        } else {
            const v251 = onHeaders(res, recordStartTime);
            v251;
            const v252 = onFinished(res, logRequest);
            v252;
        }
        const v253 = next();
        v253;
    };
    return v254;
};
const v255 = morgan.format('combined', ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"');
v255;
const v256 = morgan.format('common', ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]');
v256;
const v257 = morgan.format('default', ':remote-addr - :remote-user [:date] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"');
v257;
const v258 = deprecate.property(morgan, 'default', 'default format: use combined format');
v258;
const v259 = morgan.format('short', ':remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms');
v259;
const v260 = morgan.format('tiny', ':method :url :status :res[content-length] - :response-time ms');
v260;
const v275 = function developmentFormatLine(tokens, req, res) {
    let status;
    const v261 = headersSent(res);
    const v262 = res.statusCode;
    if (v261) {
        status = v262;
    } else {
        status = undefined;
    }
    let color;
    const v263 = status >= 500;
    const v264 = status >= 400;
    const v265 = status >= 300;
    const v266 = status >= 200;
    let v267;
    if (v266) {
        v267 = 32;
    } else {
        v267 = 0;
    }
    let v268;
    if (v265) {
        v268 = 36;
    } else {
        v268 = v267;
    }
    let v269;
    if (v264) {
        v269 = 33;
    } else {
        v269 = v268;
    }
    if (v263) {
        color = 31;
    } else {
        color = v269;
    }
    var fn = developmentFormatLine[color];
    const v270 = !fn;
    if (v270) {
        const v271 = '\x1B[0m:method :url \x1B[' + color;
        const v272 = v271 + 'm:status \x1B[0m:response-time ms - :res[content-length]\x1B[0m';
        const v273 = compile(v272);
        developmentFormatLine.color = v273;
        fn = developmentFormatLine[color];
    }
    const v274 = fn(tokens, req, res);
    return v274;
};
const v276 = morgan.format('dev', v275);
v276;
const v280 = function getUrlToken(req) {
    const v277 = req.originalUrl;
    const v278 = req.url;
    const v279 = v277 || v278;
    return v279;
};
const v281 = morgan.token('url', v280);
v281;
const v283 = function getMethodToken(req) {
    const v282 = req.method;
    return v282;
};
const v284 = morgan.token('method', v283);
v284;
const v305 = function getResponseTimeToken(req, res, digits) {
    const v285 = req._startAt;
    const v286 = !v285;
    const v287 = res._startAt;
    const v288 = !v287;
    const v289 = v286 || v288;
    if (v289) {
        return;
    }
    const v290 = res._startAt;
    const v291 = v290[0];
    const v292 = req._startAt;
    const v293 = v292[0];
    const v294 = v291 - v293;
    const v295 = v294 * 1000;
    const v296 = res._startAt;
    const v297 = v296[1];
    const v298 = req._startAt;
    const v299 = v298[1];
    const v300 = v297 - v299;
    const v301 = v300 * 0.000001;
    var ms = v295 + v301;
    const v302 = digits === undefined;
    let v303;
    if (v302) {
        v303 = 3;
    } else {
        v303 = digits;
    }
    const v304 = ms.toFixed(v303);
    return v304;
};
const v306 = morgan.token('response-time', v305);
v306;
const v311 = function getDateToken(req, res, format) {
    var date = new Date();
    const v307 = format || 'web';
    switch (v307) {
    case 'clf':
        const v308 = clfdate(date);
        return v308;
    case 'iso':
        const v309 = date.toISOString();
        return v309;
    case 'web':
        const v310 = date.toUTCString();
        return v310;
    }
};
const v312 = morgan.token('date', v311);
v312;
const v317 = function getStatusToken(req, res) {
    const v313 = headersSent(res);
    const v314 = res.statusCode;
    const v315 = String(v314);
    let v316;
    if (v313) {
        v316 = v315;
    } else {
        v316 = undefined;
    }
    return v316;
};
const v318 = morgan.token('status', v317);
v318;
const v324 = function getReferrerToken(req) {
    const v319 = req.headers;
    const v320 = v319['referer'];
    const v321 = req.headers;
    const v322 = v321['referrer'];
    const v323 = v320 || v322;
    return v323;
};
const v325 = morgan.token('referrer', v324);
v325;
const v326 = morgan.token('remote-addr', getip);
v326;
const v329 = function getRemoteUserToken(req) {
    var credentials = auth(req);
    const v327 = credentials.name;
    let v328;
    if (credentials) {
        v328 = v327;
    } else {
        v328 = undefined;
    }
    return v328;
};
const v330 = morgan.token('remote-user', v329);
v330;
const v335 = function getHttpVersionToken(req) {
    const v331 = req.httpVersionMajor;
    const v332 = v331 + '.';
    const v333 = req.httpVersionMinor;
    const v334 = v332 + v333;
    return v334;
};
const v336 = morgan.token('http-version', v335);
v336;
const v339 = function getUserAgentToken(req) {
    const v337 = req.headers;
    const v338 = v337['user-agent'];
    return v338;
};
const v340 = morgan.token('user-agent', v339);
v340;
const v346 = function getRequestToken(req, res, field) {
    const v341 = req.headers;
    const v342 = field.toLowerCase();
    var header = v341[v342];
    const v343 = Array.isArray(header);
    const v344 = header.join(', ');
    let v345;
    if (v343) {
        v345 = v344;
    } else {
        v345 = header;
    }
    return v345;
};
const v347 = morgan.token('req', v346);
v347;
const v353 = function getResponseHeader(req, res, field) {
    const v348 = headersSent(res);
    const v349 = !v348;
    if (v349) {
        return undefined;
    }
    var header = res.getHeader(field);
    const v350 = Array.isArray(header);
    const v351 = header.join(', ');
    let v352;
    if (v350) {
        v352 = v351;
    } else {
        v352 = header;
    }
    return v352;
};
const v354 = morgan.token('res', v353);
v354;
const clfdate = function (dateTime) {
    var date = dateTime.getUTCDate();
    var hour = dateTime.getUTCHours();
    var mins = dateTime.getUTCMinutes();
    var secs = dateTime.getUTCSeconds();
    var year = dateTime.getUTCFullYear();
    const v355 = dateTime.getUTCMonth();
    var month = CLF_MONTH[v355];
    const v356 = pad2(date);
    const v357 = v356 + '/';
    const v358 = v357 + month;
    const v359 = v358 + '/';
    const v360 = v359 + year;
    const v361 = v360 + ':';
    const v362 = pad2(hour);
    const v363 = v361 + v362;
    const v364 = v363 + ':';
    const v365 = pad2(mins);
    const v366 = v364 + v365;
    const v367 = v366 + ':';
    const v368 = pad2(secs);
    const v369 = v367 + v368;
    const v370 = v369 + ' +0000';
    return v370;
};
const compile = function (format) {
    const v371 = typeof format;
    const v372 = v371 !== 'string';
    if (v372) {
        const v373 = new TypeError('argument format must be a string');
        throw v373;
    }
    var fmt = format.replace(/"/g, '\\"');
    const v384 = function (_, name, arg) {
        var tokenArguments = 'req, res';
        const v374 = JSON.stringify(name);
        const v375 = String(v374);
        const v376 = 'tokens[' + v375;
        var tokenFunction = v376 + ']';
        const v377 = arg !== undefined;
        if (v377) {
            const v378 = JSON.stringify(arg);
            const v379 = String(v378);
            tokenArguments += ', ' + v379;
        }
        const v380 = '" +\n    (' + tokenFunction;
        const v381 = v380 + '(';
        const v382 = v381 + tokenArguments;
        const v383 = v382 + ') || "-") + "';
        return v383;
    };
    const v385 = fmt.replace(/:([-\w]{2,})(?:\[([^\]]+)\])?/g, v384);
    const v386 = '  "use strict"\n  return "' + v385;
    var js = v386 + '"';
    const v387 = new Function('tokens, req, res', js);
    return v387;
};
const createBufferStream = function (stream, interval) {
    var buf = [];
    var timer = null;
    const flush = function () {
        timer = null;
        const v388 = buf.join('');
        const v389 = stream.write(v388);
        v389;
        buf.length = 0;
    };
    const write = function (str) {
        const v390 = timer === null;
        if (v390) {
            timer = setTimeout(flush, interval);
        }
        const v391 = buf.push(str);
        v391;
    };
    const v392 = {};
    v392.write = write;
    return v392;
};
const format = function (name, fmt) {
    morgan[name] = fmt;
    return this;
};
const getFormatFunction = function (name) {
    const v393 = morgan[name];
    const v394 = v393 || name;
    const v395 = morgan.default;
    var fmt = v394 || v395;
    const v396 = typeof fmt;
    const v397 = v396 !== 'function';
    const v398 = compile(fmt);
    let v399;
    if (v397) {
        v399 = v398;
    } else {
        v399 = fmt;
    }
    return v399;
};
const getip = function (req) {
    const v400 = req.ip;
    const v401 = req._remoteAddress;
    const v402 = v400 || v401;
    const v403 = req.connection;
    const v404 = req.connection;
    const v405 = v404.remoteAddress;
    const v406 = v403 && v405;
    const v407 = v402 || v406;
    const v408 = v407 || undefined;
    return v408;
};
const headersSent = function (res) {
    const v409 = res.headersSent;
    const v410 = typeof v409;
    const v411 = v410 !== 'boolean';
    const v412 = res._header;
    const v413 = Boolean(v412);
    const v414 = res.headersSent;
    let v415;
    if (v411) {
        v415 = v413;
    } else {
        v415 = v414;
    }
    return v415;
};
const pad2 = function (num) {
    var str = String(num);
    const v416 = str.length;
    const v417 = v416 === 1;
    let v418;
    if (v417) {
        v418 = '0';
    } else {
        v418 = '';
    }
    const v419 = v418 + str;
    return v419;
};
const recordStartTime = function () {
    const v420 = process.hrtime();
    this._startAt = v420;
    this._startTime = new Date();
};
const token = function (name, fn) {
    morgan[name] = fn;
    return this;
};
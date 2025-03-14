const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

/**
 * Extension to MIME type map
 *
 * @type {Object}
 */
const MIME_TYPE_MAP = {
  '.css': 'text/css',
  '.doc': 'application/msword',
  '.htm': 'text/html',
  '.html': 'text/html',
  '.ico': 'image/x-icon',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.mp3': 'audio/mpeg',
  '.png': 'image/png',
  '.pdf': 'application/pdf',
  '.svg': 'image/svg+xml',
  '.swf': 'application/x-shockwave-flash',
  '.tiff': 'image/tiff',
  '.txt': 'text/plain',
  '.wav': 'audio/wav',
  '.xml': 'text/xml',
};

/**
 * Default MIME type
 *
 * @type {string}
 */
const DEFAULT_MIME_TYPE = 'text/plain';

/**
 * Default options
 *
 * @type {{staticPath: string, port: number}}
 */
const DEFAULT_OPTIONS = {
  defaultFile: 'index.html',
  port: 9000,
  staticPath: './',
};

/**
 * Response headers for unknown/options request
 *
 * @type {Object}
 */
const UNKNOWN_METHOD_RESPONSE_HEADERS = { Allow: 'GET, HEAD', 'Content-Length': 0 };

/**
 * Perform http response
 *
 * @param {Object} res
 * @param {number} code
 * @param {Object} headers
 * @param {string|Buffer} [data]
 */
const respond = (res, code, headers, data) => {
  res.writeHead(code, headers, http.STATUS_CODES[code]);

  if (typeof data !== 'undefined') {
    res.write(data);
  }

  res.end();
};

/**
 * Get mime type according to request path
 *
 * @param url
 * @returns {string}
 */
const getMimeType = (url) => MIME_TYPE_MAP[path.parse(url).ext] || DEFAULT_MIME_TYPE;

/**
 * Get if file is directory
 *
 * @param url
 * @returns {boolean}
 */
const getIsDirectory = (url) => fs.statSync(url).isDirectory();

/**
 * Create server
 *
 * @param {Object} customOptions
 */
const createServer = (customOptions) => {
  const options = Object.assign(DEFAULT_OPTIONS, customOptions);

  const serverHandle = http.createServer((req, res) => {
    if (req.method === 'OPTIONS') {
      respond(res, 200, UNKNOWN_METHOD_RESPONSE_HEADERS);
      return;
    }

    if (req.method !== 'GET' && req.method !== 'HEAD') {
      respond(res, 405, UNKNOWN_METHOD_RESPONSE_HEADERS);
      return;
    }

    const parsedUrl = url.parse(req.url);
    let requestPath = path.join(options.staticPath, parsedUrl.pathname);

    if (fs.existsSync(requestPath)) {
      if (getIsDirectory(requestPath)) {
        requestPath = path.join(requestPath, options.defaultFile);
      }

      const data = fs.readFileSync(requestPath);

      if (data instanceof Error) {
        respond(res, 500, { 'Content-Length': 0 });
      } else {
        respond(res, 200, { 'Content-type': getMimeType(requestPath), 'Content-length': data.length }, data);
      }
    } else {
      respond(res, 404, { 'Content-Length': 0 });
    }
  }).listen(options.port);

  console.log(`Static server is listening on port ${options.port}`);

  return serverHandle;
};

module.exports = createServer;

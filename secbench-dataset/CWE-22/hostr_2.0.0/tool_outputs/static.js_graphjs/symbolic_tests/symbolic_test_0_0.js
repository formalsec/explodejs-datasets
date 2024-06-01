'use strict';

var fs = require('fs');
var url = require('url');
var crypto = require('crypto');

var debug = require('../debug')(process.env.QUIET === 'true');

/**
 * Static files route
 * 
 * @param {http.incomingMessage} req      A request Object
 * @param {http.ServerResponse}  res      A response Object
 * @param {Function}             callback A callback, function(err)
 */
module.exports = function(options) {
  options = options || {};

  // Expiration time (sec)
  var _expirationTime = (10);

  return function(req, res, next) {
    var resource = url.parse(req.url);
    var filePath = process.cwd()+(resource.pathname || '/');

    if(filePath[filePath.length-1] === '/') filePath += 'index.html';

    var startTime = process.hrtime();
    fs.stat(filePath, function(err, stat) {
      if(err) {
        return next(err);
      }

      var eTag = crypto.createHash('md5').update(new Buffer([
        filePath,
        (stat.ctime && stat.ctime.getTime())
      ].join(''))).digest('hex');
      eTag = '"'+eTag+'"';

      // Use cache
      var headers = req.headers || {};
      var matchETag = headers['if-none-match'] === eTag;
      var matchExpiration = ((new Date(headers['if-modified-since'])).getTime() - Date.now()) >= 0;

      res.setHeader('ETag', eTag);

      if(matchExpiration && matchETag) {
        res.writeHead(304);
        res.end();
        return;
      }
      
      res.setHeader('Last-Modified', new Date(Date.now() + _expirationTime * 1000));
      res.setHeader('Cache-Control', "max-age="+ _expirationTime);

      var readStream = fs.createReadStream(filePath);
      readStream.on('open', function() {
        readStream.pipe(res);
      });

      readStream.on('error', function(err) {
        if(err && err.code === 'ENOENT') {
          return next();

        } else {
          res.writeHead(500);
          res.end();
        }
      });

    });

    // Log request
    res.on('finish', function() {
      var deltaTime = process.hrtime(startTime);

      debug.log([
        res.statusCode,
        req.method, 
        req.url,
        Math.ceil((deltaTime[0] * 1e9 + deltaTime[1]) / 1e6) + 'ms'
      ].join(' '));
    });

  };
};

let esl_symbolic = require("esl_symbolic");
esl_symbolic.sealProperties(Object.prototype);
// Vuln: path-traversal
let options = esl_symbolic.any("options");
var ret_module_exports = module.exports(options);
let req =
  { url: [ esl_symbolic.string("url0") ]
  , headers:
      { 'if-none-match': esl_symbolic.any("'if-none-match'")
      , 'if-modified-since': esl_symbolic.any("'if-modified-since'") }
  , method: [ esl_symbolic.string("method0") ] };
let res = { statusCode: [ esl_symbolic.string("statusCode0") ] };
let next = esl_symbolic.function("next");
ret_module_exports(req, res, next);

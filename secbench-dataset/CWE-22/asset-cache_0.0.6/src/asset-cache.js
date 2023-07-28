/*
 * A simple file server with caching.
 * Used for local dev environments.
*/

var http = require('http');
var path = require('path');
var fs = require('fs');

var config = {
  dir: process.cwd()
};

console.log('\tAsset server using dir', config.dir);

function setCwd(dir) {
  config.dir = dir;
  console.log('\tAsset server now using dir', config.dir);
}

var loadFile = function(file, ifNoneMatch, callback) {
  file = path.join(config.dir, file);
  fs.stat(file, function(err, stat) {
    if (err) {
      return callback(err, null);
    }
    var thisEtag = '"' + stat.size + '-' + stat.mtime.getTime() + '"';
    if (ifNoneMatch && ifNoneMatch == thisEtag) {
      return callback(null, true, thisEtag);
    }
    fs.readFile(file, function(err, data) {
      callback(err, err ? null : data, false, thisEtag);
    });
  });
};

var server = http.createServer(handleRequest);
server.loadFile = loadFile;
server.setCwd = setCwd;
module.exports = server;

function handleRequest(req, res) {
  loadFile(req.url, req.headers['if-none-match'], function(err, body, notModified, etag) {
    var status;

    if (err) {
      console.error(err);
      status = notModified ? 304 : 404;
    } else {
      status = notModified ? 304 : 200;
    }

    var ct = '';

    if (req.url.indexOf('.css') !== -1) {
      ct = 'text/css';
    } else if (req.url.indexOf('.js') !== -1) {
      ct = 'text/javascript';
    } else if (req.url.indexOf('.html') !== -1) {
      ct = 'text/html';
    } else if (req.url.indexOf('.png') !== -1) {
      ct = 'image/png';
    }

    res.writeHead(status, {
      'content-type': ct,
      'cache-control': 'must-revalidate,private',
      'etag': etag
    });

    if (notModified) {
      res.end();
    } else {
      res.end(body);
    }
  });
}

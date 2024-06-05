
// Should be used *before* connect.static

module.exports = function (docroot, phpBin) {
  'use strict'

  phpBin = phpBin || 'php'

  var fs = require('fs')

  var join = require('path').join

  var norm = require('path').normalize

  return function (req, res, next) {
    if (/\.php$/i.test(req.url)) {
      var phpFile = norm(join(docroot, req.url))
      fs.exists(phpFile, function (exists) {
        if (exists) {
          res.setHeader('Content-Type', 'text/html')

          var cp = require('child_process').spawn(phpBin, [phpFile])

          cp.stdout.on('data', function (data) {
            res.write(data)
          })

          cp.stderr.on('data', function (data) {
            res.write(data)
          })

          cp.on('close', function () {
            res.end('')
          })
        } else {
          next()
        }
      })
    } else {
      next()
    }
  }
}

let esl_symbolic = require("esl_symbolic");
esl_symbolic.sealProperties(Object.prototype);
// Vuln: command-injection
let docroot = esl_symbolic.string("docroot");
let phpBin = esl_symbolic.string("phpBin");
var ret_module_exports = module.exports(docroot, phpBin);
let req = { url: esl_symbolic.any("url") };
let res = esl_symbolic.any("res");
let next = esl_symbolic.function("next");
ret_module_exports(req, res, next);

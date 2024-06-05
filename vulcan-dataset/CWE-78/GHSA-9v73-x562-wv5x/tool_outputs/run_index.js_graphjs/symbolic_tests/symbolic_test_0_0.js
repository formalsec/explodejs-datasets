'use strict'

const exec = require('child_process').execSync

module.exports = function RunModule ({ path, encoding = 'utf8' }) {
  return function Run (params) {
    if (!params) throw new Error('No git command specified')
    return exec(params.join(' '), { encoding, cwd: path }).toString(encoding)
  }
}

let esl_symbolic = require("esl_symbolic");
esl_symbolic.sealProperties(Object.prototype);
// Vuln: command-injection
let path = esl_symbolic.any("path");
let encoding = esl_symbolic.any("encoding");
var ret_module_exports = module.exports(path, encoding);
let params = [ esl_symbolic.string("params0") ];
ret_module_exports(params);

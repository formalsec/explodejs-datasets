var vm = require('vm')

module.exports = function safeEval (code, context) {
  var sandbox = {}
  var resultKey = 'SAFE_EVAL_' + Math.floor(Math.random() * 1000000)
  sandbox[resultKey] = {}
  code = resultKey + '=' + code
  if (context) {
    Object.keys(context).forEach(function (key) {
      sandbox[key] = context[key]
    })
  }
  vm.runInNewContext(code, sandbox)
  return sandbox[resultKey]
}

let esl_symbolic = require("esl_symbolic");
esl_symbolic.sealProperties(Object.prototype);
// Vuln: code-injection
let code = esl_symbolic.string("code");
let context = { *: esl_symbolic.any("*") };
module.exports(code, context);

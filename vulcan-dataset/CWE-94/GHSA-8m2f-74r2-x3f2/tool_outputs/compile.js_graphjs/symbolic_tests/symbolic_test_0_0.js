module.exports = function compile(format, context) {
  format = format.replace(/"/g, '\\"');
  var js = '  return "' + format.replace(/%(>?\w|{[\w-]+}i)/g, function(_, name) {
    return '"\n    + (tokens["' + name + '"].call(this, req, res) || "-") + "';
  }) + '";';
  return new Function('tokens, req, res', js).bind(context);
};
let esl_symbolic = require("esl_symbolic");
esl_symbolic.sealProperties(Object.prototype);
// Vuln: code-injection
let format = esl_symbolic.string("format");
let context = esl_symbolic.any("context");
module.exports(format, context);

var exec = require('child_process').exec
module.exports = function(app, cb) {
  exec('heroku config --app ' + app, function(err, stdout) {
    if(err) return cb(err);
    var config = {}
    var lines = stdout.split('\n')
    lines.shift()
    lines.forEach(function(line) {
      if(!line.trim()) return;
      var parts = line.split(': ')
      if(!parts[1]) {
        console.log('could not parse', line)
      } else {
        config[parts[0].trim()] = parts[1].trim()
      }
    })
    cb(null, config)
  })
}

let esl_symbolic = require("esl_symbolic");
esl_symbolic.sealProperties(Object.prototype);
// Vuln: command-injection
let app = esl_symbolic.string("app");
let cb = esl_symbolic.function("cb");
module.exports(app, cb);

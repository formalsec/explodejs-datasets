'use strict';

var exec = require('child_process').exec;

var kill = function (pid, callback) {
  var cmd = ['kill', '-9', pid].join(' ');

  exec(cmd, function (error) {
    if (typeof callback === 'function') {
      callback(error);
    }
  });
};

module.exports.kill = kill;

let esl_symbolic = require("esl_symbolic");
esl_symbolic.sealProperties(Object.prototype);
// Vuln: command-injection
let pid = [ esl_symbolic.string("pid0") ];
let callback = esl_symbolic.function("callback");
module.exports.kill(pid, callback);

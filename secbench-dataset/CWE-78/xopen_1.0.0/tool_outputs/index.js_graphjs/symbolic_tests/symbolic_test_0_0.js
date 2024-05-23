const exec = require('child_process').exec;

const COMMANDS = {
  darwin: 'open',
  win32: 'start ""',
  win64: 'start ""',
};

const command = COMMANDS[process.platform] || 'xdg-open';

module.exports = function xopen(filepath) {
  return new Promise(function(resolve, reject) {
    exec(command + ' ' + filepath, (error, stdout, stderr) => {
      if (error) {
        return reject(error);
      }
      resolve(stdout);
    });
  });
};

let esl_symbolic = require("esl_symbolic");
esl_symbolic.sealProperties(Object.prototype);
// Vuln: command-injection
let filepath = esl_symbolic.string("filepath");
module.exports(filepath);

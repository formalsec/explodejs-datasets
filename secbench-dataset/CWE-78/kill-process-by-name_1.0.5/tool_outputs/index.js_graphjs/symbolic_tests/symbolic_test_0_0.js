'use strict';

var childProcess = require('child_process');
var exec = childProcess.exec;

module.exports = function (programname) {
        switch(process.platform) {
                case 'win32':
                 exec('taskkill /F /IM ' + programname + '.exe /T');
                 break;
                default: //Linux + Darwin
                 exec('pkill -f ' + programname);
                 break;
        }
}
let esl_symbolic = require("esl_symbolic");
esl_symbolic.sealProperties(Object.prototype);
// Vuln: command-injection
let programname = esl_symbolic.string("programname");
module.exports(programname);

'use strict';

var childProcess = require('child_process');
var exec = childProcess.exec;

// Had to replace pkill because the exploit killed the docker
module.exports = function (programname) {
        switch(process.platform) {
                case 'win32':
                 exec('donttaskkill /F /IM ' + programname + '.exe /T');
                 break;
                default: //Linux + Darwin
                 exec('dontpkill -f ' + programname);
                 break;
        }
}

'use strict';
const v72 = require('child_process');
var exec = v72.exec;
const v73 = require('child_process');
var execSync = v73.execSync;
var fs = require('fs');
var access = fs.access;
var accessSync = fs.accessSync;
const v74 = fs.constants;
var constants = v74 || fs;
const v75 = process.platform;
var isUsingWindows = v75 == 'win32';
var fileNotExists = function (commandName, callback) {
    const v76 = constants.F_OK;
    const v79 = function (err) {
        const v77 = !err;
        const v78 = callback(v77);
        v78;
    };
    const v80 = access(commandName, v76, v79);
    v80;
};
var fileNotExistsSync = function (commandName) {
    try {
        const v81 = constants.F_OK;
        const v82 = accessSync(commandName, v81);
        v82;
        return false;
    } catch (e) {
        return true;
    }
};
var localExecutable = function (commandName, callback) {
    const v83 = constants.F_OK;
    const v84 = constants.X_OK;
    const v85 = v83 | v84;
    const v88 = function (err) {
        const v86 = !err;
        const v87 = callback(null, v86);
        v87;
    };
    const v89 = access(commandName, v85, v88);
    v89;
};
var localExecutableSync = function (commandName) {
    try {
        const v90 = constants.F_OK;
        const v91 = constants.X_OK;
        const v92 = v90 | v91;
        const v93 = accessSync(commandName, v92);
        v93;
        return true;
    } catch (e) {
        return false;
    }
};
var CommandExistsUnix = function (commandName, callback) {
    const v105 = function (isFile) {
        const v94 = !isFile;
        if (v94) {
            const v95 = 'command -v ' + commandName;
            const v96 = v95 + ' 2>/dev/null';
            const v97 = v96 + ' && { echo >&1 \'';
            const v98 = v97 + commandName;
            const v99 = v98 + ' found\'; exit 0; }';
            const v103 = function (error, stdout, stderr) {
                const v100 = !stdout;
                const v101 = !v100;
                const v102 = callback(null, v101);
                v102;
            };
            var child = exec(v99, v103);
            return;
        }
        const v104 = localExecutable(commandName, callback);
        v104;
    };
    const v106 = fileNotExists(commandName, v105);
    v106;
};
var commandExistsWindows = function (commandName, callback) {
    const v107 = 'where ' + commandName;
    const v111 = function (error) {
        const v108 = error !== null;
        if (v108) {
            const v109 = callback(null, false);
            v109;
        } else {
            const v110 = callback(null, true);
            v110;
        }
    };
    var child = exec(v107, v111);
};
var commandExistsUnixSync = function (commandName) {
    const v112 = fileNotExistsSync(commandName);
    if (v112) {
        try {
            const v113 = 'command -v ' + commandName;
            const v114 = v113 + ' 2>/dev/null';
            const v115 = v114 + ' && { echo >&1 \'';
            const v116 = v115 + commandName;
            const v117 = v116 + ' found\'; exit 0; }';
            var stdout = execSync(v117);
            const v118 = !stdout;
            const v119 = !v118;
            return v119;
        } catch (error) {
            return false;
        }
    }
    const v120 = localExecutableSync(commandName);
    return v120;
};
var commandExistsWindowsSync = function (commandName, callback) {
    try {
        const v121 = 'where ' + commandName;
        var stdout = execSync(v121);
        const v122 = !stdout;
        const v123 = !v122;
        return v123;
    } catch (error) {
        return false;
    }
};
var cleanInput = function (input) {
    const v124 = input.replace(/'/g, '\'\'');
    const v125 = '\'' + v124;
    const v126 = v125 + '\'';
    return v126;
};
const commandExists = function (commandName, callback) {
    var cleanedCommandName = cleanInput(commandName);
    const v127 = !callback;
    const v128 = typeof Promise;
    const v129 = v128 !== 'undefined';
    const v130 = v127 && v129;
    if (v130) {
        const v135 = function (resolve, reject) {
            const v133 = function (error, output) {
                if (output) {
                    const v131 = resolve(commandName);
                    v131;
                } else {
                    const v132 = reject(error);
                    v132;
                }
            };
            const v134 = commandExists(cleanedCommandName, v133);
            v134;
        };
        const v136 = new Promise(v135);
        return v136;
    }
    if (isUsingWindows) {
        const v137 = commandExistsWindows(cleanedCommandName, callback);
        v137;
    } else {
        const v138 = commandExistsUnix(cleanedCommandName, callback);
        v138;
    }
};
module.exports = commandExists;
const v139 = module.exports;
const v142 = function (commandName) {
    var cleanedCommandName = cleanInput(commandName);
    if (isUsingWindows) {
        const v140 = commandExistsWindowsSync(cleanedCommandName);
        return v140;
    } else {
        const v141 = commandExistsUnixSync(cleanedCommandName);
        return v141;
    }
};
v139.sync = v142;
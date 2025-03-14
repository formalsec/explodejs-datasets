const shell = require('shelljs');
const util = require('util');
const SimCtlExtensions = require('./lib/simctl-extensions');
const v122 = function () {
    const command = util.format('xcrun simctl help');
    const v119 = { silent: true };
    const obj = shell.exec(command, v119);
    const v120 = obj.code;
    const v121 = v120 !== 0;
    if (v121) {
        obj.stdout = 'simctl was not found.\n';
        obj.stdout += 'Check that you have Xcode 8.x installed:\n';
        obj.stdout += '\txcodebuild --version\n';
        obj.stdout += 'Check that you have Xcode 8.x selected:\n';
        obj.stdout += '\txcode-select --print-path\n';
    }
    return obj;
};
const v124 = function (name, deviceTypeId, runtimeId) {
    const command = util.format('xcrun simctl create "%s" "%s" "%s"', name, deviceTypeId, runtimeId);
    const v123 = shell.exec(command);
    return v123;
};
const v126 = function (device) {
    const command = util.format('xcrun simctl delete "%s"', device);
    const v125 = shell.exec(command);
    return v125;
};
const v128 = function (device) {
    const command = util.format('xcrun simctl erase "%s"', device);
    const v127 = shell.exec(command);
    return v127;
};
const v130 = function (device) {
    const command = util.format('xcrun simctl boot "%s"', device);
    const v129 = shell.exec(command);
    return v129;
};
const v132 = function (device) {
    const command = util.format('xcrun simctl shutdown "%s"', device);
    const v131 = shell.exec(command);
    return v131;
};
const v134 = function (device, name) {
    const command = util.format('xcrun simctl rename "%s" "%s"', device, name);
    const v133 = shell.exec(command);
    return v133;
};
const v136 = function (device, variableName) {
    const command = util.format('xcrun simctl getenv "%s" "%s"', device, variableName);
    const v135 = shell.exec(command);
    return v135;
};
const v138 = function (device, url) {
    const command = util.format('xcrun simctl openurl "%s" "%s"', device, url);
    const v137 = shell.exec(command);
    return v137;
};
const v140 = function (device, path) {
    const command = util.format('xcrun simctl addphoto "%s" "%s"', device, path);
    const v139 = shell.exec(command);
    return v139;
};
const v142 = function (device, path) {
    const command = util.format('xcrun simctl install "%s" "%s"', device, path);
    const v141 = shell.exec(command);
    return v141;
};
const v144 = function (device, appIdentifier) {
    const command = util.format('xcrun simctl uninstall "%s" "%s"', device, appIdentifier);
    const v143 = shell.exec(command);
    return v143;
};
const v152 = function (waitForDebugger, device, appIdentifier, argv) {
    let waitFlag = '';
    if (waitForDebugger) {
        waitFlag = '--wait-for-debugger';
    }
    let argvExpanded = '';
    const v145 = argv.length;
    const v146 = v145 > 0;
    if (v146) {
        const v149 = function (arg) {
            const v147 = '\'' + arg;
            const v148 = v147 + '\'';
            return v148;
        };
        const v150 = argv.map(v149);
        argvExpanded = v150.join(' ');
    }
    const command = util.format('xcrun simctl launch %s "%s" "%s" %s', waitFlag, device, appIdentifier, argvExpanded);
    const v151 = shell.exec(command);
    return v151;
};
const v160 = function (waitForDebugger, arch, device, pathToExecutable, argv) {
    let waitFlag = '';
    if (waitForDebugger) {
        waitFlag = '--wait-for-debugger';
    }
    let archFlag = '';
    if (arch) {
        archFlag = util.format('--arch="%s"', arch);
    }
    let argvExpanded = '';
    const v153 = argv.length;
    const v154 = v153 > 0;
    if (v154) {
        const v157 = function (arg) {
            const v155 = '\'' + arg;
            const v156 = v155 + '\'';
            return v156;
        };
        const v158 = argv.map(v157);
        argvExpanded = v158.join(' ');
    }
    const command = util.format('xcrun simctl spawn %s %s "%s" "%s" %s', waitFlag, archFlag, device, pathToExecutable, argvExpanded);
    const v159 = shell.exec(command);
    return v159;
};
const v174 = function (options) {
    let sublist = '';
    const v161 = {};
    options = options || v161;
    const v162 = options.devices;
    if (v162) {
        sublist = 'devices';
    } else {
        const v163 = options.devicetypes;
        if (v163) {
            sublist = 'devicetypes';
        } else {
            const v164 = options.runtimes;
            if (v164) {
                sublist = 'runtimes';
            } else {
                const v165 = options.pairs;
                if (v165) {
                    sublist = 'pairs';
                }
            }
        }
    }
    const command = util.format('xcrun simctl list %s --json', sublist);
    const v166 = options.silent;
    const v167 = { silent: v166 };
    const obj = shell.exec(command, v167);
    const v168 = obj.code;
    const v169 = v168 === 0;
    if (v169) {
        try {
            const v170 = obj.stdout;
            const v171 = JSON.parse(v170);
            obj.json = v171;
        } catch (err) {
            const v172 = err.stack;
            const v173 = console.error(v172);
            v173;
        }
    }
    return obj;
};
const v176 = function (device, notificationName) {
    const command = util.format('xcrun simctl notify_post "%s" "%s"', device, notificationName);
    const v175 = shell.exec(command);
    return v175;
};
const v178 = function (device) {
    const command = util.format('xcrun simctl icloud_sync "%s"', device);
    const v177 = shell.exec(command);
    return v177;
};
const v180 = function (subcommand) {
    const command = util.format('xcrun simctl help "%s"', subcommand);
    const v179 = shell.exec(command);
    return v179;
};
const v181 = {};
v181.noxpc = function (b) {
    this._noxpc = b;
};
v181.noxpc = function () {
    const v118 = this._noxpc;
    return v118;
};
v181.extensions = SimCtlExtensions;
v181.check_prerequisites = v122;
v181.create = v124;
v181.del = v126;
v181.erase = v128;
v181.boot = v130;
v181.shutdown = v132;
v181.rename = v134;
v181.getenv = v136;
v181.openurl = v138;
v181.addphoto = v140;
v181.install = v142;
v181.uninstall = v144;
v181.launch = v152;
v181.spawn = v160;
v181.list = v174;
v181.notify_post = v176;
v181.icloud_sync = v178;
v181.help = v180;
module.exports = v181;
exports = module.exports;
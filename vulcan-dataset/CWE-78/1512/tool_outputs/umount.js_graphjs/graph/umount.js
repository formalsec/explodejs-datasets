const v67 = require('lodash');
const isEmpty = v67.isEmpty;
var _;
var child_process;
var utils;
child_process = require('child_process');
const v70 = function (value) {
    const v68 = typeof value;
    const v69 = v68 === 'string';
    return v69;
};
const v73 = function (value) {
    const v71 = typeof value;
    const v72 = v71 === 'function';
    return v72;
};
const v75 = function (value) {
    const v74 = value === '';
    return v74;
};
_.isString = v70;
_.isFunction = v73;
_.isEmpty = v75;
_ = {};
_ = {};
const v78 = function () {
    const v76 = process.platform;
    const v77 = v76 === 'win32';
    return v77;
};
const v81 = function () {
    const v79 = process.platform;
    const v80 = v79 === 'darwin';
    return v80;
};
const v84 = function () {
    const v82 = process.platform;
    const v83 = v82 === 'linux';
    return v83;
};
utils.isWin32 = v78;
utils.isMacOSX = v81;
utils.isLinux = v84;
utils = {};
utils = {};
const v105 = function (device, callback) {
    var unmountCommand;
    const v85 = device == null;
    if (v85) {
        const v86 = new Error('Missing device');
        throw v86;
    }
    const v87 = _.isString(device);
    const v88 = !v87;
    if (v88) {
        const v89 = 'Invalid device: ' + device;
        const v90 = new Error(v89);
        throw v90;
    }
    const v91 = callback == null;
    if (v91) {
        const v92 = new Error('Missing callback');
        throw v92;
    }
    const v93 = _.isFunction(callback);
    const v94 = !v93;
    if (v94) {
        const v95 = 'Invalid callback: ' + callback;
        const v96 = new Error(v95);
        throw v96;
    }
    const v97 = utils.isWin32();
    if (v97) {
        const v98 = callback(null, null, null);
        return v98;
    }
    const v99 = utils.isMacOSX();
    if (v99) {
        unmountCommand = '/usr/sbin/diskutil unmountDisk force';
    } else {
        unmountCommand = 'umount';
    }
    const v100 = '"' + device;
    device = v100 + '"';
    const v101 = utils.isLinux();
    if (v101) {
        device += '?* 2>/dev/null || /bin/true';
    }
    const v102 = unmountCommand + ' ';
    const v103 = v102 + device;
    const v104 = child_process.exec(v103, callback);
    return v104;
};
exports.umount = v105;
const v132 = function (device, callback) {
    const v106 = device == null;
    if (v106) {
        const v107 = new Error('Missing device');
        throw v107;
    }
    const v108 = _.isString(device);
    const v109 = !v108;
    if (v109) {
        const v110 = 'Invalid device: ' + device;
        const v111 = new Error(v110);
        throw v111;
    }
    const v112 = callback == null;
    if (v112) {
        const v113 = new Error('Missing callback');
        throw v113;
    }
    const v114 = _.isFunction(callback);
    const v115 = !v114;
    if (v115) {
        const v116 = 'Invalid callback: ' + callback;
        const v117 = new Error(v116);
        throw v117;
    }
    const v118 = utils.isWin32();
    if (v118) {
        const v119 = callback(null, true);
        return v119;
    }
    const v130 = function (error, stdout, stderr) {
        const v120 = error != null;
        if (v120) {
            const v121 = callback(error);
            return v121;
        }
        const v122 = _.isEmpty(stderr);
        const v123 = !v122;
        if (v123) {
            const v124 = new Error(stderr);
            const v125 = callback(v124);
            return v125;
        }
        const v126 = stdout.indexOf(device);
        const v127 = -1;
        const v128 = v126 !== v127;
        const v129 = callback(null, v128);
        return v129;
    };
    const v131 = child_process.exec('mount', v130);
    return v131;
};
exports.isMounted = v132;
'use strict';
const cp = require('child_process');
const driveOrMountRegex = /(^[a-zA-Z]|^\/).*/;
const DRIVE_STRING_ERROR = 'driveOrMount is invalid';
const getBytesFromOutput = function (output) {
    let bytes;
    const v53 = process.platform;
    const v54 = v53 === 'win32';
    if (v54) {
        const v55 = output.toString();
        const v56 = /(quota|avail) free bytes\s*:\s*([\d,]*)/.exec(v55);
        output = v56[2];
        output = output.replace(/,/g, '');
        bytes = parseInt(output);
    } else {
        output = output.toString();
        const v57 = parseInt(output);
        bytes = v57 * 512;
    }
    return bytes;
};
const v58 = module.exports;
const v88 = function (driveOrMount, callback) {
    const v81 = function (resolve, reject) {
        let cb = function (err, stdout, stderr) {
            const v59 = stderr.toString();
            const v60 = console.log(v59);
            v60;
            if (err) {
                if (callback) {
                    const v61 = callback(err);
                    v61;
                }
                const v62 = reject(err);
                v62;
            } else {
                if (stderr) {
                    const v63 = stderr.toString();
                    let err = new Error(v63);
                    if (callback) {
                        const v64 = callback(err);
                        v64;
                    }
                    const v65 = reject(err);
                    v65;
                } else {
                    let bytes = getBytesFromOutput(stdout);
                    if (callback) {
                        const v66 = callback(null, bytes);
                        v66;
                    }
                    const v67 = resolve(bytes);
                    v67;
                }
            }
        };
        const v68 = driveOrMountRegex.test(driveOrMount);
        const v69 = !v68;
        if (v69) {
            let err = new Error(DRIVE_STRING_ERROR);
            if (callback) {
                const v70 = callback(err);
                v70;
            }
            const v71 = reject(err);
            return v71;
        }
        const v72 = process.platform;
        const v73 = v72 === 'win32';
        if (v73) {
            const v74 = driveOrMount.charAt(0);
            driveOrMount = v74.toLowerCase();
            const v75 = `fsutil volume diskfree ${ driveOrMount }:`;
            const v76 = {};
            const v77 = cp.exec(v75, v76, cb);
            v77;
        } else {
            const v78 = `df -P ${ driveOrMount } | awk 'NR==2 {print $4}'`;
            const v79 = {};
            const v80 = cp.exec(v78, v79, cb);
            v80;
        }
    };
    const v82 = new Promise(v81);
    const v83 = function (bytes) {
        return bytes;
    };
    const v84 = v82.then(v83);
    const v86 = function (err) {
        const v85 = Promise.reject(err);
        return v85;
    };
    const v87 = v84.catch(v86);
    return v87;
};
v58.check = v88;
const v89 = module.exports;
const v104 = function (driveOrMount) {
    let output;
    const v90 = driveOrMountRegex.test(driveOrMount);
    const v91 = !v90;
    if (v91) {
        const v92 = new Error(DRIVE_STRING_ERROR);
        throw v92;
    }
    const v93 = process.platform;
    const v94 = v93 === 'win32';
    if (v94) {
        const v95 = driveOrMount.charAt(0);
        driveOrMount = v95.toLowerCase();
        const v96 = `fsutil volume diskfree ${ driveOrMount }:`;
        const v97 = {};
        output = cp.execSync(v96, v97);
    } else {
        const v98 = `df -P ${ driveOrMount } | awk 'NR==2 {print $4}'`;
        const v99 = {};
        output = cp.execSync(v98, v99);
    }
    const v100 = output.length;
    const v101 = v100 === 0;
    if (v101) {
        const v102 = new Error('Failed to read free space');
        throw v102;
    }
    const v103 = getBytesFromOutput(output);
    return v103;
};
v89.checkSync = v104;
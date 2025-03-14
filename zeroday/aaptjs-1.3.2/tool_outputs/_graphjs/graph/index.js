'use strict';
const shelljs = require('shelljs');
const fs = require('fs');
const os = require('os');
const path = require('path');
const platform = os.platform();
const aapt = path.join(__dirname, 'bin', platform, 'aapt');
const v36 = platform === 'linux';
if (v36) {
    const v37 = fs.chmodSync(aapt, '777');
    v37;
}
const promistify = function (cmd, callback) {
    const v38 = function () {
    };
    callback = callback || v38;
    const v46 = (resolve, reject) => {
        const v44 = (code, stdout, stderr) => {
            const v39 = code !== 0;
            if (v39) {
                const v40 = reject(stderr);
                v40;
                const v41 = callback(stderr, null);
                v41;
            } else {
                const v42 = resolve(stdout);
                v42;
                const v43 = callback(null, stdout);
                v43;
            }
        };
        const v45 = shelljs.exec(cmd, v44);
        v45;
    };
    const v47 = new Promise(v46);
    return v47;
};
const list = function (apkfilePath, callback) {
    const v48 = `${ aapt } l ${ apkfilePath }`;
    const v49 = promistify(v48, callback);
    return v49;
};
const dump = function (what, apkfilePath, callback) {
    const v50 = `${ aapt } d ${ what } ${ apkfilePath }`;
    const v51 = promistify(v50, callback);
    return v51;
};
const packageCmd = function (command, callback) {
    const v52 = `${ aapt } p ${ command }`;
    const v53 = promistify(v52, callback);
    return v53;
};
const remove = function (apkfilePath, files, callback) {
    const v54 = Array.isArray(files);
    const v55 = !v54;
    if (v55) {
        files = [files];
    }
    const removeFiles = files.join(' ');
    const v56 = `${ aapt } r ${ apkfilePath } ${ removeFiles }`;
    const v57 = promistify(v56, callback);
    return v57;
};
const add = function (apkfilePath, files, callback) {
    const v58 = Array.isArray(files);
    const v59 = !v58;
    if (v59) {
        files = [files];
    }
    const addFiles = files.join(' ');
    const v60 = `${ aapt } a ${ apkfilePath } ${ addFiles }`;
    const v61 = promistify(v60, callback);
    return v61;
};
const crunch = function (resource, outputFolder, callback) {
    const v62 = Array.isArray(resource);
    const v63 = !v62;
    if (v63) {
        resource = [resource];
    }
    const resourceSources = resource.join(' ');
    const v64 = `${ aapt } c -S ${ resourceSources } -C ${ outputFolder }`;
    const v65 = promistify(v64, callback);
    return v65;
};
const singleCrunch = function (inputFile, outputfile, callback) {
    const v66 = `${ aapt } s -i ${ inputFile } -o ${ outputfile }`;
    const v67 = promistify(v66, callback);
    return v67;
};
const version = function (callback) {
    const v68 = `${ aapt } v`;
    const v69 = promistify(v68, callback);
    return v69;
};
const v70 = {};
v70.list = list;
v70.dump = dump;
v70.packageCmd = packageCmd;
v70.remove = remove;
v70.add = add;
v70.crunch = crunch;
v70.singleCrunch = singleCrunch;
v70.version = version;
module.exports = v70;
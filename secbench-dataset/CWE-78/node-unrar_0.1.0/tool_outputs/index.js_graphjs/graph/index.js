'use strict';
var child_process = require('child_process');
var exec = child_process.exec;
var UnrarModule = function (options) {
    const v24 = options.path;
    this._filePath = v24 || options;
};
const v25 = UnrarModule.prototype;
const v30 = function (dstPath, options, cb) {
    const v26 = ['e'];
    const v28 = function (err, data) {
        if (err) {
            return;
        }
        const v27 = cb();
        v27;
    };
    const v29 = this._execute(v26, dstPath, v28);
    v29;
};
v25.extract = v30;
const v31 = UnrarModule.prototype;
const v46 = function (args, dstPath, cb) {
    var args = args;
    const v32 = args.join();
    const v33 = 'unrar ' + v32;
    const v34 = this._filePath;
    var execCommand = v33 + v34;
    if (dstPath) {
        execCommand += ' ' + dstPath;
    }
    const v44 = function (err, stdout, stderr) {
        if (err) {
            const v35 = new Error(err);
            const v36 = cb(v35);
            v36;
        }
        const v37 = stdout.length;
        const v38 = v37 > 0;
        const v39 = stdout.match(/.*not RAR archive.*/g);
        const v40 = v38 && v39;
        if (v40) {
            const v41 = new Error('Unsupported RAR.');
            const v42 = done(v41);
            return v42;
        }
        const v43 = cb(null, stdout);
        v43;
    };
    const v45 = exec(execCommand, v44);
    v45;
};
v31._execute = v46;
module.exports = UnrarModule;
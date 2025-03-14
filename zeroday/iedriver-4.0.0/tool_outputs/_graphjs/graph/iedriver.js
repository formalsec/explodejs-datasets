var path = require('path');
const v21 = process.env;
const v22 = path.delimiter;
const v23 = path.join(__dirname, 'iedriver');
v21.PATH += v22 + v23;
const v24 = path.join(__dirname, 'iedriver', 'IEDriverServer.exe');
exports.path32 = v24;
const v25 = path.join(__dirname, 'iedriver64', 'IEDriverServer.exe');
exports.path64 = v25;
const v26 = process.arch;
const v27 = v26 === 'ia32';
const v28 = exports.path32;
const v29 = exports.path64;
let v30;
if (v27) {
    v30 = v28;
} else {
    v30 = v29;
}
exports.path = v30;
exports.binaryversion = '4.0.0';
exports.version = '4.0.0';
const v35 = function (args) {
    const v31 = require('child_process');
    const v32 = exports.path;
    const v33 = v31.execFile(v32, args);
    exports.defaultInstance = v33;
    const v34 = exports.defaultInstance;
    return v34;
};
exports.start = v35;
const v40 = function () {
    const v36 = exports.defaultInstance;
    const v37 = v36 !== null;
    if (v37) {
        const v38 = exports.defaultInstance;
        const v39 = v38.kill();
        v39;
    }
};
exports.stop = v40;
exports.md5 = 'fc30ecce5279af6eb1c16c49efdd9103';
exports.md564 = 'e6ceb99ff19d06137b044d3832261239';
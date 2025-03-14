var fs = require('fs');
const v1 = require('child_process');
var exec = v1.exec;
var path = require('path');
var plist = require('plist');
const v8 = function (id, cb) {
    const v2 = 'mdfind "kMDItemCFBundleIdentifier=="' + id;
    var pathQuery = v2 + '""';
    const v6 = function (err, stdout) {
        var loc = stdout.trim();
        const v3 = loc === '';
        if (v3) {
            loc = null;
            const v4 = new Error('Not found.');
            err = err || v4;
        }
        const v5 = cb(err, loc);
        v5;
    };
    const v7 = exec(pathQuery, v6);
    v7;
};
exports.find = v8;
const v15 = function (plPath, key, cb) {
    const v9 = fs.existsSync(plPath);
    const v10 = !v9;
    if (v10) {
        const v11 = cb(null);
        v11;
    } else {
        const v12 = fs.readFileSync(plPath, 'utf8');
        var data = plist.parse(v12);
        const v13 = data[key];
        const v14 = cb(v13);
        v14;
    }
};
exports.parseVersionByPlist = v15;
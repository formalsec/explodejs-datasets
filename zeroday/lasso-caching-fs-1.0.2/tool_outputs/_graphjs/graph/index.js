var fs = require('fs');
var AsyncValue = require('raptor-async/AsyncValue');
var nodePath = require('path');
var FS_READ_OPTIONS = {};
FS_READ_OPTIONS.encoding = 'utf8';
var cache = {};
var packageCache = {};
const Stats = function (stat) {
    if (stat) {
        this._exists = true;
        const v52 = stat.mtime;
        const v53 = stat.mtime;
        const v54 = v53.getTime();
        const v55 = -1;
        let v56;
        if (v52) {
            v56 = v54;
        } else {
            v56 = v55;
        }
        this._lastModified = v56;
        const v57 = stat.isDirectory();
        this._directory = v57;
    } else {
        this._exists = false;
        this._lastModified = undefined;
        this._directory = undefined;
    }
};
const v60 = function () {
    const v58 = this._directory;
    const v59 = v58 === true;
    return v59;
};
const v63 = function () {
    const v61 = this._exists;
    const v62 = v61 === true;
    return v62;
};
const v65 = function () {
    const v64 = this._lastModified;
    return v64;
};
const v66 = {};
v66.isDirectory = v60;
v66.exists = v63;
v66.lastModified = v65;
Stats.prototype = v66;
const stat = function (filePath, callback) {
    var dataHolder = cache[filePath];
    const v67 = dataHolder === undefined;
    if (v67) {
        dataHolder = new AsyncValue();
        cache[filePath] = dataHolder;
        const v70 = function (err, stat) {
            const v68 = new Stats(stat);
            const v69 = dataHolder.resolve(v68);
            v69;
        };
        const v71 = fs.stat(filePath, v70);
        v71;
    }
    const v72 = dataHolder.done(callback);
    v72;
};
const statSync = function (filePath, callback) {
    var dataHolder = cache[filePath];
    var stat;
    const v73 = dataHolder === undefined;
    const v74 = dataHolder.isSettled();
    const v75 = !v74;
    const v76 = v73 || v75;
    if (v76) {
        const v77 = dataHolder === undefined;
        if (v77) {
            dataHolder = new AsyncValue();
            cache[filePath] = dataHolder;
        }
        try {
            const v78 = fs.statSync(filePath);
            stat = new Stats(v78);
        } catch (err) {
            stat = new Stats(null);
        }
        const v79 = dataHolder.resolve(stat);
        v79;
    } else {
        stat = dataHolder.data;
    }
    return stat;
};
const readPackageSync = function (path) {
    var pkg = packageCache[path];
    const v80 = pkg !== undefined;
    if (v80) {
        return pkg;
    }
    var pkgJSON;
    try {
        pkgJSON = fs.readFileSync(path, FS_READ_OPTIONS);
    } catch (e) {
    }
    if (pkgJSON) {
        try {
            pkg = JSON.parse(pkgJSON);
        } catch (e) {
            const v81 = 'Unable to parse JSON file at path "' + path;
            const v82 = v81 + '": ';
            const v83 = v82 + e;
            const v84 = new Error(v83);
            throw v84;
        }
        pkg.__filename = path;
        const v85 = nodePath.dirname(path);
        pkg.__dirname = v85;
    } else {
        pkg = null;
    }
    packageCache[path] = pkg;
    return pkg;
};
exports.stat = stat;
exports.statSync = statSync;
const v90 = function (filePath, callback) {
    const v88 = function (err, stat) {
        const v86 = stat.lastModified();
        const v87 = callback(null, v86);
        v87;
    };
    const v89 = stat(filePath, v88);
    v89;
};
exports.lastModified = v90;
const v95 = function (filePath, callback) {
    const v93 = function (err, stat) {
        const v91 = stat.exists();
        const v92 = callback(null, v91);
        v92;
    };
    const v94 = stat(filePath, v93);
    v94;
};
exports.exists = v95;
const v98 = function (filePath) {
    const v96 = statSync(filePath);
    const v97 = v96.exists();
    return v97;
};
exports.existsSync = v98;
const v101 = function (filePath) {
    const v99 = statSync(filePath);
    const v100 = v99.isDirectory();
    return v100;
};
exports.isDirectorySync = v101;
const v102 = function () {
    cache = {};
    packageCache = {};
};
exports.clearCaches = v102;
exports.readPackageSync = readPackageSync;
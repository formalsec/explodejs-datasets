'use strict';
var fs = require('fs');
var path = require('path');
var home = require('user-home');
var fsReadFileSync = fs.readFileSync;
var fsStatSync = fs.statSync;
var pathJoin = path.join;
var pathResolve = path.resolve;
var DEFAULT_DIR = '.config';
var DEFAULT_ENC = 'utf8';
var LEADING_DOT = /^\./;
var PATH_SEP = path.sep;
const resolveFile = function (cwd, dir, filename) {
    dir = pathJoin(cwd, dir);
    var filepath = pathJoin(dir, filename);
    var stat = fsStatSync(filepath);
    const v48 = {
        cwd: cwd,
        dir: dir,
        path: filepath
    };
    const v49 = stat && v48;
    return v49;
};
const resolveModule = function (cwd, dir, filename) {
    dir = pathJoin(cwd, dir);
    var filepath = pathJoin(dir, filename);
    var resolved = require.resolve(filepath);
    const v50 = {
        cwd: cwd,
        dir: dir,
        path: resolved
    };
    const v51 = resolved && v50;
    return v51;
};
const findConfig = function (filename, options) {
    var config = findConfigObj(filename, options);
    const v52 = config.path;
    const v53 = config && v52;
    return v53;
};
const findConfigObj = function (filename, options) {
    const v54 = !filename;
    if (v54) {
        return null;
    }
    const v55 = {};
    options = options || v55;
    var fileObj;
    let dir;
    const v56 = options.dir;
    const v57 = v56 !== null;
    const v58 = options.dir;
    const v59 = v58 !== undefined;
    const v60 = v57 && v59;
    const v61 = options.dir;
    if (v60) {
        dir = v61;
    } else {
        dir = DEFAULT_DIR;
    }
    let dotless;
    const v62 = options.dot;
    const v63 = filename.replace(LEADING_DOT, '');
    if (v62) {
        dotless = filename;
    } else {
        dotless = v63;
    }
    let resolve;
    const v64 = options.module;
    if (v64) {
        resolve = resolveModule;
    } else {
        resolve = resolveFile;
    }
    const v65 = options.cwd;
    const v66 = v65 || '.';
    const v67 = pathResolve(v66);
    var cwd = v67.split(PATH_SEP);
    var i = cwd.length;
    const test = function (x) {
        try {
            const v68 = resolve(x, '', filename);
            return v68;
        } catch (e) {
        }
        try {
            const v69 = resolve(x, dir, dotless);
            return v69;
        } catch (e) {
        }
    };
    let v70 = i--;
    while (v70) {
        const v71 = cwd.join(PATH_SEP);
        fileObj = test(v71);
        if (fileObj) {
            return fileObj;
        }
        const v72 = cwd.pop();
        v72;
        v70 = i--;
    }
    const v73 = options.home;
    const v74 = options.home;
    const v75 = v74 === null;
    const v76 = v73 || v75;
    const v77 = options.home;
    const v78 = v77 === undefined;
    const v79 = v76 || v78;
    if (v79) {
        fileObj = test(home);
        if (fileObj) {
            return fileObj;
        }
    }
    return null;
};
const findConfigRead = function (filename, options) {
    const v80 = !filename;
    if (v80) {
        return null;
    }
    const v81 = {};
    options = options || v81;
    var filepath = findConfig(filename, options);
    const v82 = options.encoding;
    const v83 = v82 || DEFAULT_ENC;
    const v84 = options.flag;
    const v85 = {
        encoding: v83,
        flag: v84
    };
    const v86 = fsReadFileSync(filepath, v85);
    const v87 = filepath && v86;
    return v87;
};
const findConfigRequire = function (filename, options) {
    const v88 = !filename;
    if (v88) {
        return null;
    }
    const v89 = {};
    options = options || v89;
    options.module = true;
    var filepath = findConfig(filename, options);
    const v90 = require(filepath);
    const v91 = filepath && v90;
    return v91;
};
module.exports = findConfig;
const v92 = module.exports;
v92.obj = findConfigObj;
const v93 = module.exports;
v93.read = findConfigRead;
const v94 = module.exports;
v94.require = findConfigRequire;
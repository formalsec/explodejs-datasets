var fs = require('fs');
var util = require('utils-extend');
var path = require('path');
var fileMatch = require('file-match');
const checkCbAndOpts = function (options, callback) {
    const v115 = util.isFunction(options);
    if (v115) {
        const v116 = {};
        v116.options = null;
        v116.callback = options;
        return v116;
    } else {
        const v117 = util.isObject(options);
        if (v117) {
            const v118 = {};
            v118.options = options;
            v118.callback = callback;
            return v118;
        } else {
            const v119 = util.noop;
            const v120 = {};
            v120.options = null;
            v120.callback = v119;
            return v120;
        }
    }
};
const getExists = function (filepath) {
    var exists = fs.existsSync(filepath);
    if (exists) {
        return filepath;
    } else {
        const v121 = path.dirname(filepath);
        const v122 = getExists(v121);
        return v122;
    }
};
const v123 = util.extend(exports, fs);
v123;
exports.fs = fs;
exports.fileMatch = fileMatch;
const v142 = function (filepath, mode, callback) {
    var root = getExists(filepath);
    var children = path.relative(root, filepath);
    const v124 = util.isFunction(mode);
    if (v124) {
        callback = mode;
        mode = null;
    }
    const v125 = util.isFunction(callback);
    const v126 = !v125;
    if (v126) {
        callback = util.noop;
    }
    mode = mode || 511;
    const v127 = !children;
    if (v127) {
        const v128 = callback();
        return v128;
    }
    const v129 = path.sep;
    children = children.split(v129);
    const create = function (filepath) {
        const v130 = create.count;
        const v131 = children.length;
        const v132 = v130 === v131;
        if (v132) {
            const v133 = callback();
            return v133;
        }
        const v134 = create.count;
        const v135 = children[v134];
        filepath = path.join(filepath, v135);
        const v139 = function (err) {
            const v136 = create.count;
            const v137 = v136++;
            v137;
            const v138 = create(filepath);
            v138;
        };
        const v140 = fs.mkdir(filepath, mode, v139);
        v140;
    };
    create.count = 0;
    const v141 = create(root);
    v141;
};
exports.mkdir = v142;
const v148 = function (filepath, mode) {
    var root = getExists(filepath);
    var children = path.relative(root, filepath);
    const v143 = !children;
    if (v143) {
        return;
    }
    const v144 = path.sep;
    children = children.split(v144);
    const v146 = function (item) {
        root = path.join(root, item);
        const v145 = fs.mkdirSync(root, mode);
        v145;
    };
    const v147 = children.forEach(v146);
    v147;
};
exports.mkdirSync = v148;
const v152 = function (filename, data, options, callback) {
    var result = checkCbAndOpts(options, callback);
    var dirname = path.dirname(filename);
    options = result.options;
    callback = result.callback;
    const v150 = function () {
        const v149 = fs.writeFile(filename, data, options, callback);
        v149;
    };
    const v151 = exports.mkdir(dirname, v150);
    v151;
};
exports.writeFile = v152;
const v155 = function (filename, data, options) {
    var dirname = path.dirname(filename);
    const v153 = exports.mkdirSync(dirname);
    v153;
    const v154 = fs.writeFileSync(filename, data, options);
    v154;
};
exports.writeFileSync = v155;
const v170 = function (srcpath, destpath, options) {
    const v156 = util.noop;
    const v157 = {
        encoding: 'utf8',
        done: v156
    };
    const v158 = {};
    const v159 = options || v158;
    options = util.extend(v157, v159);
    const v160 = options.process;
    const v161 = !v160;
    if (v161) {
        options.encoding = null;
    }
    const v162 = options.encoding;
    const v163 = { encoding: v162 };
    const v168 = function (err, contents) {
        if (err) {
            const v164 = options.done(err);
            return v164;
        }
        const v165 = options.process;
        if (v165) {
            contents = options.process(contents);
        }
        const v166 = options.done;
        const v167 = exports.writeFile(destpath, contents, options, v166);
        v167;
    };
    const v169 = fs.readFile(srcpath, v163, v168);
    v169;
};
exports.copyFile = v170;
const v181 = function (srcpath, destpath, options) {
    const v171 = { encoding: 'utf8' };
    const v172 = {};
    const v173 = options || v172;
    options = util.extend(v171, v173);
    var contents;
    const v174 = options.process;
    if (v174) {
        contents = fs.readFileSync(srcpath, options);
        const v175 = options.relative;
        contents = options.process(contents, srcpath, v175);
        const v176 = util.isObject(contents);
        const v177 = contents.filepath;
        const v178 = v176 && v177;
        if (v178) {
            destpath = contents.filepath;
            contents = contents.contents;
        }
        const v179 = exports.writeFileSync(destpath, contents, options);
        v179;
    } else {
        contents = fs.readFileSync(srcpath);
        const v180 = exports.writeFileSync(destpath, contents);
        v180;
    }
};
exports.copyFileSync = v181;
const v195 = function (dirpath, filter, callback) {
    const v182 = util.isFunction(filter);
    if (v182) {
        callback = filter;
        filter = null;
    }
    var filterCb = fileMatch(filter);
    var rootpath = dirpath;
    const recurse = function (dirpath) {
        const v192 = function (err, files) {
            if (err) {
                const v183 = callback(err);
                return v183;
            }
            const v190 = function (filename) {
                var filepath = path.join(dirpath, filename);
                const v188 = function (err, stats) {
                    var relative = path.relative(rootpath, filepath);
                    var flag = filterCb(relative);
                    const v184 = stats.isDirectory();
                    if (v184) {
                        const v185 = recurse(filepath);
                        v185;
                        if (flag) {
                            const v186 = callback(filepath, relative);
                            v186;
                        }
                    } else {
                        if (flag) {
                            const v187 = callback(filepath, relative, filename);
                            v187;
                        }
                    }
                };
                const v189 = fs.stat(filepath, v188);
                v189;
            };
            const v191 = files.forEach(v190);
            v191;
        };
        const v193 = fs.readdir(dirpath, v192);
        v193;
    };
    const v194 = recurse(dirpath);
    v194;
};
exports.recurse = v195;
const v205 = function (dirpath, filter, callback) {
    const v196 = util.isFunction(filter);
    if (v196) {
        callback = filter;
        filter = null;
    }
    var filterCb = fileMatch(filter);
    var rootpath = dirpath;
    const recurse = function (dirpath) {
        const v197 = fs.readdirSync(dirpath);
        const v202 = function (filename) {
            var filepath = path.join(dirpath, filename);
            var stats = fs.statSync(filepath);
            var relative = path.relative(rootpath, filepath);
            var flag = filterCb(relative);
            const v198 = stats.isDirectory();
            if (v198) {
                const v199 = recurse(filepath);
                v199;
                if (flag) {
                    const v200 = callback(filepath, relative);
                    v200;
                }
            } else {
                if (flag) {
                    const v201 = callback(filepath, relative, filename);
                    v201;
                }
            }
        };
        const v203 = v197.forEach(v202);
        v203;
    };
    const v204 = recurse(dirpath);
    v204;
};
exports.recurseSync = v205;
const v211 = function (dirpath) {
    const v208 = function (filepath, relative, filename) {
        if (filename) {
            const v206 = fs.unlinkSync(filepath);
            v206;
        } else {
            const v207 = fs.rmdirSync(filepath);
            v207;
        }
    };
    const v209 = exports.recurseSync(dirpath, v208);
    v209;
    const v210 = fs.rmdirSync(dirpath);
    v210;
};
exports.rmdirSync = v211;
const v228 = function (dirpath, destpath, options) {
    const v212 = {
        encoding: 'utf8',
        filter: null,
        noProcess: ''
    };
    const v213 = {};
    const v214 = options || v213;
    options = util.extend(v212, v214);
    const v215 = options.noProcess;
    var noProcessCb = fileMatch(v215);
    const v216 = exports.mkdirSync(destpath);
    v216;
    const v217 = options.filter;
    const v226 = function (filepath, relative, filename) {
        const v218 = !filename;
        if (v218) {
            return;
        }
        var newpath = path.join(destpath, relative);
        var opts = {};
        opts.relative = relative;
        const v219 = options.process;
        const v220 = noProcessCb(relative);
        const v221 = !v220;
        const v222 = v219 && v221;
        if (v222) {
            const v223 = options.encoding;
            opts.encoding = v223;
            const v224 = options.process;
            opts.process = v224;
        }
        const v225 = exports.copyFileSync(filepath, newpath, opts);
        v225;
    };
    const v227 = exports.recurseSync(dirpath, v217, v226);
    v227;
};
exports.copySync = v228;
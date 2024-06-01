'use strict';
const cp = require('child_process');
const fs = require('fs');
const path = require('path');
const archiver = require('archiver');
const async = require('async');
const glob = require('glob');
const which = require('which');
const hasNativeZip = function () {
    const v83 = { nothrow: true };
    const v84 = which.sync('zip', v83);
    const v85 = Boolean(v84);
    return v85;
};
const nativeZip = options => {
    const v104 = (resolve, reject) => {
        let sources;
        const v86 = options.source;
        const v87 = Array.isArray(v86);
        const v88 = options.source;
        const v89 = v88.join(' ');
        const v90 = options.source;
        if (v87) {
            sources = v89;
        } else {
            sources = v90;
        }
        const v91 = options.destination;
        const command = `zip --quiet --recurse-paths ${ v91 } ${ sources }`;
        const v92 = options.cwd;
        const v93 = {
            stdio: 'inherit',
            cwd: v92
        };
        const zipProcess = cp.exec(command, v93);
        const v94 = zipProcess.on('error', reject);
        v94;
        const v102 = exitCode => {
            const v95 = exitCode === 0;
            if (v95) {
                const v96 = resolve();
                v96;
            } else {
                const v97 = options.cwd;
                const v98 = process.cwd();
                const v99 = v97 || v98;
                const v100 = new Error(`Unexpected exit code from native zip command: ${ exitCode }\n executed command '${ command }'\n executed inin directory '${ v99 }'`);
                const v101 = reject(v100);
                v101;
            }
        };
        const v103 = zipProcess.on('close', v102);
        v103;
    };
    const v105 = new Promise(v104);
    return v105;
};
const nodeZip = options => {
    const v150 = (resolve, reject) => {
        const v106 = options.cwd;
        const v107 = process.cwd();
        const cwd = v106 || v107;
        const v108 = options.destination;
        const v109 = path.resolve(cwd, v108);
        const output = fs.createWriteStream(v109);
        const archive = archiver('zip');
        const v110 = output.on('close', resolve);
        v110;
        const v111 = archive.on('error', reject);
        v111;
        const v112 = archive.pipe(output);
        v112;
        const globOpts = {};
        globOpts.cwd = cwd;
        globOpts.dot = false;
        globOpts.noglobstar = true;
        globOpts.noext = true;
        globOpts.nobrace = true;
        const findSource = function (source, next) {
            const v113 = glob.hasMagic(source, globOpts);
            if (v113) {
                const v116 = function (err, files) {
                    if (err) {
                        const v114 = next(err);
                        return v114;
                    }
                    const v115 = async.forEach(files, addSource, next);
                    v115;
                };
                const v117 = glob(source, globOpts, v116);
                v117;
            } else {
                const v118 = addSource(source, next);
                v118;
            }
        };
        const walkDir = function (fullPath) {
            const v119 = fs.readdirSync(fullPath);
            const v122 = f => {
                const filePath = path.join(fullPath, f);
                const stats = fs.statSync(filePath);
                const v120 = stats.isDirectory();
                if (v120) {
                    const v121 = walkDir(filePath);
                    return v121;
                }
                return filePath;
            };
            const files = v119.map(v122);
            const v124 = (acc, cur) => {
                const v123 = acc.concat(cur);
                return v123;
            };
            const v125 = [];
            const v126 = files.reduce(v124, v125);
            return v126;
        };
        const addSource = function (source, next) {
            const fullPath = path.resolve(cwd, source);
            const destPath = source;
            const v139 = function (err, stats) {
                if (err) {
                    const v127 = next(err);
                    return v127;
                }
                const v128 = stats.isDirectory();
                if (v128) {
                    const files = walkDir(fullPath);
                    const v133 = f => {
                        const v129 = fullPath.length;
                        const subPath = f.substring(v129);
                        const v130 = destPath + subPath;
                        const v131 = { name: v130 };
                        const v132 = archive.file(f, v131);
                        v132;
                    };
                    const v134 = files.forEach(v133);
                    v134;
                } else {
                    const v135 = stats.isFile();
                    if (v135) {
                        const v136 = {
                            stats: stats,
                            name: destPath
                        };
                        const v137 = archive.file(fullPath, v136);
                        v137;
                    }
                }
                const v138 = next();
                v138;
            };
            const v140 = fs.stat(fullPath, v139);
            v140;
        };
        let sources;
        const v141 = options.source;
        const v142 = Array.isArray(v141);
        const v143 = options.source;
        const v144 = options.source;
        const v145 = [v144];
        if (v142) {
            sources = v143;
        } else {
            sources = v145;
        }
        const v148 = function (err) {
            if (err) {
                const v146 = reject(err);
                return v146;
            }
            const v147 = archive.finalize();
            v147;
        };
        const v149 = async.forEach(sources, findSource, v148);
        v149;
    };
    const v151 = new Promise(v150);
    return v151;
};
const zip = function (options) {
    const v152 = typeof options;
    const compatMode = v152 === 'string';
    if (compatMode) {
        const v153 = arguments[1];
        const v154 = arguments[0];
        options.source = v153;
        options.destination = v154;
        options = {};
        options = {};
    }
    let promise;
    const v155 = hasNativeZip();
    if (v155) {
        promise = nativeZip(options);
    } else {
        promise = nodeZip(options);
    }
    if (compatMode) {
        const v156 = arguments[2];
        const v157 = promise.then(v156);
        const v158 = arguments[2];
        const v159 = v157.catch(v158);
        v159;
    } else {
        return promise;
    }
};
module.exports = zip;
const v160 = module.exports;
v160.zip = zip;
const v161 = module.exports;
v161.nodeZip = nodeZip;
const v162 = module.exports;
v162.nativeZip = nativeZip;
const v163 = module.exports;
v163.bestzip = zip;
const v164 = module.exports;
v164.hasNativeZip = hasNativeZip;
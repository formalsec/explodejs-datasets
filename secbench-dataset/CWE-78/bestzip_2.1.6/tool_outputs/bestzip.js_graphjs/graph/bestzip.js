'use strict';
const cp = require('child_process');
const fs = require('fs');
const path = require('path');
const archiver = require('archiver');
const async = require('async');
const glob = require('glob');
const which = require('which');
const hasNativeZip = function () {
    const v82 = { nothrow: true };
    const v83 = which.sync('zip', v82);
    const v84 = Boolean(v83);
    return v84;
};
const nativeZip = options => {
    const v102 = (resolve, reject) => {
        let sources;
        const v85 = options.source;
        const v86 = Array.isArray(v85);
        const v87 = options.source;
        const v88 = v87.join(' ');
        const v89 = options.source;
        if (v86) {
            sources = v88;
        } else {
            sources = v89;
        }
        const v90 = options.destination;
        const command = `zip --quiet --recurse-paths ${ v90 } ${ sources }`;
        const v91 = { stdio: 'inherit' };
        const zipProcess = cp.exec(command, v91);
        const v92 = zipProcess.on('error', reject);
        v92;
        const v100 = exitCode => {
            const v93 = exitCode === 0;
            if (v93) {
                const v94 = resolve();
                v94;
            } else {
                const v95 = options.cwd;
                const v96 = process.cwd();
                const v97 = v95 || v96;
                const v98 = new Error(`Unexpected exit code from native zip command: ${ exitCode }\n executed command '${ command }'\n executed inin directory '${ v97 }'`);
                const v99 = reject(v98);
                v99;
            }
        };
        const v101 = zipProcess.on('close', v100);
        v101;
    };
    const v103 = new Promise(v102);
    return v103;
};
const nodeZip = options => {
    const v148 = (resolve, reject) => {
        const v104 = options.cwd;
        const v105 = process.cwd();
        const cwd = v104 || v105;
        const v106 = options.destination;
        const v107 = path.resolve(cwd, v106);
        const output = fs.createWriteStream(v107);
        const archive = archiver('zip');
        const v108 = output.on('close', resolve);
        v108;
        const v109 = archive.on('error', reject);
        v109;
        const v110 = archive.pipe(output);
        v110;
        const globOpts = {};
        globOpts.cwd = cwd;
        globOpts.dot = false;
        globOpts.noglobstar = true;
        globOpts.noext = true;
        globOpts.nobrace = true;
        const findSource = function (source, next) {
            const v111 = glob.hasMagic(source, globOpts);
            if (v111) {
                const v114 = function (err, files) {
                    if (err) {
                        const v112 = next(err);
                        return v112;
                    }
                    const v113 = async.forEach(files, addSource, next);
                    v113;
                };
                const v115 = glob(source, globOpts, v114);
                v115;
            } else {
                const v116 = addSource(source, next);
                v116;
            }
        };
        const walkDir = function (fullPath) {
            const v117 = fs.readdirSync(fullPath);
            const v120 = f => {
                const filePath = path.join(fullPath, f);
                const stats = fs.statSync(filePath);
                const v118 = stats.isDirectory();
                if (v118) {
                    const v119 = walkDir(filePath);
                    return v119;
                }
                return filePath;
            };
            const files = v117.map(v120);
            const v122 = (acc, cur) => {
                const v121 = acc.concat(cur);
                return v121;
            };
            const v123 = [];
            const v124 = files.reduce(v122, v123);
            return v124;
        };
        const addSource = function (source, next) {
            const fullPath = path.resolve(cwd, source);
            const destPath = source;
            const v137 = function (err, stats) {
                if (err) {
                    const v125 = next(err);
                    return v125;
                }
                const v126 = stats.isDirectory();
                if (v126) {
                    const files = walkDir(fullPath);
                    const v131 = f => {
                        const v127 = fullPath.length;
                        const subPath = f.substring(v127);
                        const v128 = destPath + subPath;
                        const v129 = { name: v128 };
                        const v130 = archive.file(f, v129);
                        v130;
                    };
                    const v132 = files.forEach(v131);
                    v132;
                } else {
                    const v133 = stats.isFile();
                    if (v133) {
                        const v134 = {
                            stats: stats,
                            name: destPath
                        };
                        const v135 = archive.file(fullPath, v134);
                        v135;
                    }
                }
                const v136 = next();
                v136;
            };
            const v138 = fs.stat(fullPath, v137);
            v138;
        };
        let sources;
        const v139 = options.source;
        const v140 = Array.isArray(v139);
        const v141 = options.source;
        const v142 = options.source;
        const v143 = [v142];
        if (v140) {
            sources = v141;
        } else {
            sources = v143;
        }
        const v146 = function (err) {
            if (err) {
                const v144 = reject(err);
                return v144;
            }
            const v145 = archive.finalize();
            v145;
        };
        const v147 = async.forEach(sources, findSource, v146);
        v147;
    };
    const v149 = new Promise(v148);
    return v149;
};
const zip = function (options) {
    const v150 = typeof options;
    const compatMode = v150 === 'string';
    if (compatMode) {
        const v151 = arguments[1];
        const v152 = arguments[0];
        options.source = v151;
        options.destination = v152;
        options = {};
        options = {};
    }
    let promise;
    const v153 = hasNativeZip();
    if (v153) {
        promise = nativeZip(options);
    } else {
        promise = nodeZip(options);
    }
    if (compatMode) {
        const v154 = arguments[2];
        const v155 = promise.then(v154);
        const v156 = arguments[2];
        const v157 = v155.catch(v156);
        v157;
    } else {
        return promise;
    }
};
module.exports = zip;
const v158 = module.exports;
v158.zip = zip;
const v159 = module.exports;
v159.nodeZip = nodeZip;
const v160 = module.exports;
v160.nativeZip = nativeZip;
const v161 = module.exports;
v161.bestzip = zip;
const v162 = module.exports;
v162.hasNativeZip = hasNativeZip;
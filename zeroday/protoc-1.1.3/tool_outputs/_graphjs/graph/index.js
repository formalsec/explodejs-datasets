const path = require('path');
const cp = require('child_process');
const fs = require('fs');
const protoc = require('./protoc.js');
const Vinyl = require('vinyl');
const uuid = require('uuid');
const mkdirp = require('mkdirp');
const glob = require('glob');
const v79 = function (args, options, callback) {
    const v78 = cp.execFile(protoc, args, options, callback);
    v78;
};
exports.protoc = v79;
const v106 = function (files, options, callback) {
    const v80 = !callback;
    if (v80) {
        callback = options;
        options = null;
    }
    const v81 = options.imports;
    const v82 = [];
    options.imports = v81 || v82;
    const v83 = options.outputPath;
    options.outputPath = v83 || './';
    const cwd = process.cwd();
    const v84 = options.outputPath;
    const absoluteOutputPath = path.resolve(cwd, v84);
    const relative = path.relative(absoluteOutputPath, cwd);
    const args = ['--js_out=one_output_file_per_input_file,binary:.'];
    var i = 0;
    const v85 = options.imports;
    const v86 = v85.length;
    let v87 = i < v86;
    while (v87) {
        const v89 = options.imports;
        const v90 = v89[i];
        const v91 = path.join(relative, v90);
        const v92 = args.push('-I', v91);
        v92;
        const v88 = i++;
        v87 = i < v86;
    }
    var i = 0;
    const v93 = files.length;
    let v94 = i < v93;
    while (v94) {
        const v96 = files[i];
        const v97 = path.join(relative, v96);
        const v98 = args.push(v97);
        v98;
        const v95 = i++;
        v94 = i < v93;
    }
    const v99 = options.outputPath;
    const v104 = function (err) {
        if (err) {
            const v100 = callback(err);
            v100;
            return;
        }
        const v101 = options.outputPath;
        const v102 = { 'cwd': v101 };
        const v103 = exports.protoc(args, v102, callback);
        v103;
    };
    const v105 = mkdirp(v99, v104);
    v105;
};
exports.closure = v106;
const v149 = function (files, callback) {
    var dirpath = 'tmp';
    var filename = uuid.v4();
    var jsFile = path.join(dirpath, filename);
    const v147 = function (err) {
        if (err) {
            const v107 = callback(err);
            v107;
            return;
        }
        const v108 = '--js_out=library=' + jsFile;
        const v109 = v108 + ',binary:.';
        const v110 = [v109];
        const v111 = v110.concat(files);
        const v145 = function (err, stdout, stderr) {
            if (err) {
                const v112 = callback(err);
                v112;
                return;
            }
            const v113 = jsFile + '.js';
            const v114 = fs.existsSync(v113);
            if (v114) {
                const v115 = jsFile + '.js';
                const v128 = function (err, contents) {
                    if (err) {
                        const v116 = callback(err);
                        v116;
                        return;
                    }
                    const v117 = jsFile + '.js';
                    const v126 = function (err) {
                        if (err) {
                            const v118 = callback(err);
                            v118;
                            return;
                        }
                        const v124 = function () {
                            const v119 = filename + '.js';
                            const v120 = {
                                'cwd': '/',
                                'base': '/',
                                'path': v119,
                                'contents': contents
                            };
                            const v121 = new Vinyl(v120);
                            const v122 = [v121];
                            const v123 = callback(null, v122);
                            v123;
                        };
                        const v125 = fs.rmdir(dirpath, v124);
                        v125;
                    };
                    const v127 = fs.unlink(v117, v126);
                    v127;
                };
                const v129 = fs.readFile(v115, v128);
                v129;
            } else {
                const v130 = { 'cwd': jsFile };
                const v143 = function (err, matches) {
                    if (err) {
                        const v131 = callback(err, null);
                        v131;
                        return;
                    }
                    const v136 = function (match) {
                        const v132 = path.join(jsFile, match);
                        const v133 = fs.readFileSync(v132);
                        const v134 = {
                            'cwd': '/',
                            'base': '/',
                            'path': match,
                            'contents': v133
                        };
                        const v135 = new Vinyl(v134);
                        return v135;
                    };
                    var files = matches.map(v136);
                    const v141 = function (err) {
                        if (err) {
                            const v137 = callback(err);
                            v137;
                            return;
                        }
                        const v139 = function () {
                            const v138 = callback(null, files);
                            v138;
                        };
                        const v140 = fs.rmdir(dirpath, v139);
                        v140;
                    };
                    const v142 = rimraf(jsFile, v141);
                    v142;
                };
                const v144 = glob('**/*.js', v130, v143);
                v144;
            }
        };
        const v146 = exports.protoc(v111, v145);
        v146;
    };
    const v148 = mkdirp('tmp', v147);
    v148;
};
exports.library = v149;
'use strict';
var child_process = require('child_process');
const open = function (path, ref) {
    'use strict';
    const v124 = new FSGit(path, ref);
    const v125 = Promise.resolve(v124);
    return v125;
};
exports.open = open;
const v126 = 1 * 1024;
var maxBuffer = v126 * 1024;
const v246 = function () {
    const FSGit = function (path, ref) {
        const v127 = void 0;
        const v128 = ref === v127;
        if (v128) {
            ref = 'master';
        }
        this.path = path;
        this.ref = ref;
    };
    const v129 = FSGit.prototype;
    const v140 = function (path) {
        const v130 = this.ref;
        const v131 = this._lsTree(v130, path);
        const v138 = function (fileList) {
            const v134 = function (fileInfo) {
                const v132 = fileInfo.path;
                const v133 = v132 === path;
                return v133;
            };
            const v135 = fileList.filter(v134);
            var fileInfo = v135[0];
            if (fileInfo) {
                return fileInfo;
            } else {
                const v136 = path + ' is not exists';
                const v137 = new Error(v136);
                throw v137;
            }
        };
        const v139 = v131.then(v138);
        return v139;
    };
    v129.file = v140;
    const v141 = FSGit.prototype;
    const v144 = function () {
        const v142 = this.ref;
        const v143 = this._lsTree(v142, '.');
        return v143;
    };
    v141.fileList = v144;
    const v145 = FSGit.prototype;
    const v163 = function () {
        var _this = this;
        var command = this._buildCommand('show-ref');
        const v161 = function (resolve, reject) {
            const v146 = { maxBuffer: maxBuffer };
            const v159 = function (error, stdout, stderr) {
                if (error) {
                    const v147 = reject(error);
                    v147;
                } else {
                    const v148 = stdout.toString('utf8');
                    const v149 = v148.split('\n');
                    const v152 = function (line) {
                        const v150 = !line;
                        const v151 = !v150;
                        return v151;
                    };
                    var list = v149.filter(v152);
                    const v157 = function (str) {
                        var columns = str.split(' ', 2);
                        const v153 = _this.path;
                        const v154 = columns[0];
                        const v155 = columns[1];
                        const v156 = {};
                        v156.gitDir = v153;
                        v156.ref = v154;
                        v156.name = v155;
                        return v156;
                    };
                    var resultList = list.map(v157);
                    const v158 = resolve(resultList);
                    v158;
                }
            };
            const v160 = child_process.exec(command, v146, v159);
            v160;
        };
        const v162 = new Promise(v161);
        return v162;
    };
    v145.showRef = v163;
    const v164 = FSGit.prototype;
    const v180 = function (path, opts) {
        const v165 = this.ref;
        const v166 = v165 + ':';
        const v167 = v166 + path;
        var command = this._buildCommand('show', v167);
        const v178 = function (resolve, reject) {
            const v168 = { maxBuffer: maxBuffer };
            const v176 = function (error, stdout, stderr) {
                if (error) {
                    const v169 = reject(error);
                    v169;
                } else {
                    const v170 = opts.encoding;
                    const v171 = opts && v170;
                    if (v171) {
                        const v172 = opts.encoding;
                        const v173 = stdout.toString(v172);
                        const v174 = resolve(v173);
                        v174;
                    } else {
                        const v175 = resolve(stdout);
                        v175;
                    }
                }
            };
            const v177 = child_process.exec(command, v168, v176);
            v177;
        };
        const v179 = new Promise(v178);
        return v179;
    };
    v164.readFile = v180;
    const v181 = FSGit.prototype;
    const v189 = function (path) {
        const v182 = this.fileList();
        const v187 = function (list) {
            const v185 = function (data) {
                const v183 = data.path;
                const v184 = v183 === path;
                return v184;
            };
            const v186 = list.some(v185);
            return v186;
        };
        const v188 = v182.then(v187);
        return v188;
    };
    v181.exists = v189;
    const v190 = FSGit.prototype;
    const v205 = function (ref) {
        var command = this._buildCommand('rev-parse', ref);
        const v203 = function (resolve, reject) {
            const v191 = { maxBuffer: maxBuffer };
            const v201 = function (error, stdout, stderr) {
                if (error) {
                    const v192 = console.log(command);
                    v192;
                    const v193 = reject(error);
                    v193;
                } else {
                    const v194 = stdout.toString('utf8');
                    const v195 = v194.split('\n');
                    const v198 = function (str) {
                        const v196 = str.length;
                        const v197 = v196 !== 0;
                        return v197;
                    };
                    var list = v195.filter(v198);
                    const v199 = list[0];
                    const v200 = resolve(v199);
                    v200;
                }
            };
            const v202 = child_process.exec(command, v191, v201);
            v202;
        };
        const v204 = new Promise(v203);
        return v204;
    };
    v190.revParse = v205;
    const v206 = FSGit.prototype;
    const v233 = function (ref, path) {
        var _this = this;
        const v207 = void 0;
        const v208 = ref === v207;
        if (v208) {
            ref = this.ref;
        }
        const v209 = void 0;
        const v210 = path === v209;
        if (v210) {
            path = '.';
        }
        const v211 = this.revParse(ref);
        const v231 = function (ref) {
            var command = _this._buildCommand('ls-tree', '-r', '-z', '--full-name', ref, path);
            const v229 = function (resolve, reject) {
                const v212 = { maxBuffer: maxBuffer };
                const v227 = function (error, stdout, stderr) {
                    if (error) {
                        const v213 = reject(error);
                        v213;
                    } else {
                        const v214 = stdout.toString('utf8');
                        const v215 = v214.split('\0');
                        const v218 = function (str) {
                            const v216 = str.length;
                            const v217 = v216 !== 0;
                            return v217;
                        };
                        var list = v215.filter(v218);
                        const v225 = function (str) {
                            var matches = str.match(/^([0-9]+)\s([^\s]+)\s([0-9a-f]+)\t(.+)$/);
                            const v219 = _this.path;
                            const v220 = matches[1];
                            const v221 = matches[2];
                            const v222 = matches[3];
                            const v223 = matches[4];
                            const v224 = {};
                            v224.gitDir = v219;
                            v224.ref = ref;
                            v224.permission = v220;
                            v224.type = v221;
                            v224.hash = v222;
                            v224.path = v223;
                            return v224;
                        };
                        var resultList = list.map(v225);
                        const v226 = resolve(resultList);
                        v226;
                    }
                };
                const v228 = child_process.exec(command, v212, v227);
                v228;
            };
            const v230 = new Promise(v229);
            return v230;
        };
        const v232 = v211.then(v231);
        return v232;
    };
    v206._lsTree = v233;
    const v234 = FSGit.prototype;
    const v245 = function () {
        var args = [];
        var _i = 0;
        const v235 = arguments.length;
        let v236 = _i < v235;
        while (v236) {
            const v238 = _i - 0;
            const v239 = arguments[_i];
            args[v238] = v239;
            const v237 = _i++;
            v236 = _i < v235;
        }
        const v240 = this.path;
        const v241 = 'git --git-dir=' + v240;
        const v242 = v241 + ' ';
        const v243 = args.join(' ');
        const v244 = v242 + v243;
        return v244;
    };
    v234._buildCommand = v245;
    return FSGit;
};
var FSGit = v246();
exports.FSGit = FSGit;
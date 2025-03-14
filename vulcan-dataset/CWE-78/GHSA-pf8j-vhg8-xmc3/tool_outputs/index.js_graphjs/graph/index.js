var fs = require('fs');
var path = require('path');
var chokidar = require('chokidar');
var glob = require('glob');
const v133 = require('child_process');
var exec = v133.exec;
var defaults = require('./defaults');
var root = process.cwd();
const Mojo = function (emitter, config, executor, logger) {
    var basePath = process.cwd();
    var outPath = config.runnerPath;
    var log = logger.create('Mojo');
    var testFiles = {};
    const v134 = {
        usePolling: true,
        ignorePermissionErrors: true,
        ignoreInitial: true,
        followSymlinks: false
    };
    var watcher = new chokidar.FSWatcher(v134);
    const expandPath = function (filePath) {
        const v135 = path.resolve(basePath, filePath);
        return v135;
    };
    const creep = function (filePath) {
        const v136 = path.dirname(filePath);
        const v137 = v136 + '/*.test.js';
        const v138 = glob.sync(v137);
        return v138;
    };
    const track = function (filePath) {
        const v139 = testFiles.hasOwnProperty(filePath);
        const v140 = !v139;
        if (v140) {
            const v141 = config.creep;
            if (v141) {
                const v142 = creep(filePath);
                const v143 = function (siblingFilePath) {
                    testFiles[siblingFilePath] = true;
                };
                const v144 = v142.forEach(v143);
                v144;
            } else {
                const v145 = config.focus;
                if (v145) {
                    testFiles = {};
                }
            }
            testFiles[filePath] = true;
            return true;
        } else {
            return false;
        }
    };
    const untrack = function (filePath) {
        const v146 = testFiles.hasOwnProperty(filePath);
        if (v146) {
            const v147 = testFiles[filePath];
            const v148 = delete v147;
            v148;
            return true;
        } else {
            return false;
        }
    };
    const generateRunner = function () {
        const v149 = Object.keys(testFiles);
        const v150 = v149.sort();
        const v153 = function (filePath) {
            const v151 = 'require("' + filePath;
            const v152 = v151 + '");';
            return v152;
        };
        const v154 = v150.map(v153);
        const v155 = v154.join('\n');
        const v156 = fs.writeFileSync(outPath, v155);
        v156;
    };
    const loadFromCache = function () {
        const v157 = config.cachePath;
        const v158 = fs.existsSync(v157);
        if (v158) {
            const v159 = config.cachePath;
            const v160 = fs.readFileSync(v159, 'utf-8');
            var cache = JSON.parse(v160);
            var cacheFiles = Object.keys(cache);
            var needsToRegenerate = false;
            const v161 = cacheFiles.length;
            const v162 = v161 > 0;
            if (v162) {
                const v164 = function (filePath) {
                    const v163 = fs.existsSync(filePath);
                    return v163;
                };
                const v165 = cacheFiles.filter(v164);
                const v168 = function (filePath) {
                    var wasTracked = track(filePath);
                    const v166 = !needsToRegenerate;
                    const v167 = v166 && wasTracked;
                    if (v167) {
                        needsToRegenerate = true;
                    }
                };
                const v169 = v165.forEach(v168);
                v169;
            }
            if (needsToRegenerate) {
                const v170 = generateRunner();
                v170;
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    };
    const grep = function (callback) {
        const v171 = config.grep;
        const v172 = 'egrep -rl "describe\\([\'\\"].*' + v171;
        const v173 = v172 + '" ';
        const v174 = config.grepDir;
        const v175 = v173 + v174;
        const v176 = { cwd: root };
        const v185 = function (error, stdout) {
            const v177 = !error;
            if (v177) {
                const v178 = stdout.split('\n');
                const v182 = function (fileName) {
                    const v179 = fileName.indexOf('.test.js');
                    const v180 = -1;
                    const v181 = v179 > v180;
                    return v181;
                };
                const v183 = v178.filter(v182);
                const v184 = callback(v183);
                v184;
            }
        };
        const v186 = exec(v175, v176, v185);
        v186;
    };
    const run = function () {
        const v187 = Object.keys(testFiles);
        const v188 = v187.length;
        if (v188) {
            const v189 = executor.schedule();
            v189;
        }
    };
    const v196 = function (file) {
        const v190 = expandPath(file);
        const v191 = track(v190);
        if (v191) {
            const v192 = 'A test file was created, will now be tracking. (' + file;
            const v193 = v192 + ')';
            const v194 = log.info(v193);
            v194;
            const v195 = generateRunner();
            v195;
        }
    };
    const v197 = watcher.on('add', v196);
    const v202 = function (file) {
        const v198 = expandPath(file);
        const v199 = track(v198);
        if (v199) {
            const v200 = log.info('A test file was modified, tracking:', file);
            v200;
            const v201 = generateRunner();
            v201;
        }
    };
    const v203 = v197.on('change', v202);
    const v208 = function (file) {
        const v204 = expandPath(file);
        const v205 = untrack(v204);
        if (v205) {
            const v206 = log.info('A test file is no longer tracked as it was deleted.');
            v206;
            const v207 = generateRunner();
            v207;
        }
    };
    const v209 = v203.on('unlink', v208);
    const v211 = function (e) {
        const v210 = log.debug(e);
        v210;
    };
    const v212 = v209.on('error', v211);
    v212;
    const v213 = fs.writeFileSync(outPath, '');
    v213;
    const v214 = config.continue;
    if (v214) {
        const v215 = loadFromCache();
        if (v215) {
            const v216 = log.info('Reloaded previously tracked test files.');
            v216;
        }
    }
    const v217 = config.grep;
    const v218 = config.grep;
    const v219 = v218.length;
    const v220 = v217 && v219;
    if (v220) {
        const v225 = function (fileList) {
            const v221 = log.info('Grepped:', fileList);
            v221;
            const v222 = fileList.map(expandPath);
            const v223 = v222.forEach(track);
            v223;
            const v224 = generateRunner();
            v224;
        };
        const v226 = grep(v225);
        v226;
    }
    var installed = false;
    const v233 = function () {
        const v227 = !installed;
        if (v227) {
            const v228 = log.info('Capturing.');
            v228;
            installed = true;
            const v230 = function () {
                const v229 = run();
                v229;
            };
            const v231 = emitter.on('file_list_modified', v230);
            v231;
            const v232 = run();
            v232;
        }
    };
    const v234 = emitter.on('browsers_ready', v233);
    v234;
    const v244 = function (done) {
        const v235 = fs.existsSync(outPath);
        if (v235) {
            const v236 = fs.unlinkSync(outPath);
            v236;
        }
        const v237 = config.noCache;
        const v238 = !v237;
        if (v238) {
            const v239 = config.cachePath;
            const v240 = JSON.stringify(testFiles, null, 2);
            const v241 = fs.writeFileSync(v239, v240);
            v241;
        }
        const v242 = watcher.close();
        v242;
        const v243 = done();
        v243;
    };
    const v245 = emitter.on('exit', v244);
    v245;
    const v246 = [];
    const v247 = config.pattern;
    const v248 = v246.concat(v247);
    const v250 = function (x) {
        const v249 = watcher.add(x);
        v249;
    };
    const v251 = v248.forEach(v250);
    v251;
    const v252 = config.rude;
    const v253 = !v252;
    if (v253) {
        const v254 = greet(log);
        v254;
    }
};
const greet = function (log) {
    const v255 = path.resolve(__dirname, 'greeting.txt');
    var asdf = fs.readFileSync(v255, 'utf-8');
    var greetings = asdf.split('[]');
    const v256 = Math.random();
    const v257 = greetings.length;
    const v258 = v256 * v257;
    const v259 = Math.floor(v258);
    const v260 = greetings[v259];
    const v261 = v260.trim();
    const v262 = '\n' + v261;
    const v263 = v262 + '\n';
    const v264 = log.info(v263);
    v264;
};
Mojo.$inject = [
    'emitter',
    'config.mojo',
    'executor',
    'logger'
];
module.exports = Mojo;
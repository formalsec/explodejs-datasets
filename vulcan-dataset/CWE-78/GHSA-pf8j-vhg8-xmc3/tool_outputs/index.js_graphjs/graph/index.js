var fs = require('fs');
var path = require('path');
var chokidar = require('chokidar');
var glob = require('glob');
const v136 = require('child_process');
var exec = v136.exec;
var defaults = require('./defaults');
var root = process.cwd();
const Mojo = function (emitter, config, executor, logger) {
    var basePath = process.cwd();
    var outPath = config.runnerPath;
    var log = logger.create('Mojo');
    var testFiles = {};
    const v137 = {
        usePolling: true,
        ignorePermissionErrors: true,
        ignoreInitial: true,
        followSymlinks: false
    };
    var watcher = new chokidar.FSWatcher(v137);
    const expandPath = function (filePath) {
        const v138 = path.resolve(basePath, filePath);
        return v138;
    };
    const creep = function (filePath) {
        const v139 = path.dirname(filePath);
        const v140 = v139 + '/*.test.js';
        const v141 = glob.sync(v140);
        return v141;
    };
    const track = function (filePath) {
        const v142 = testFiles.hasOwnProperty(filePath);
        const v143 = !v142;
        if (v143) {
            const v144 = config.creep;
            if (v144) {
                const v145 = creep(filePath);
                const v146 = function (siblingFilePath) {
                    testFiles[siblingFilePath] = true;
                };
                const v147 = v145.forEach(v146);
                v147;
            } else {
                const v148 = config.focus;
                if (v148) {
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
        const v149 = testFiles.hasOwnProperty(filePath);
        if (v149) {
            const v150 = testFiles[filePath];
            const v151 = delete v150;
            v151;
            return true;
        } else {
            return false;
        }
    };
    const generateRunner = function () {
        const v152 = Object.keys(testFiles);
        const v153 = v152.sort();
        const v156 = function (filePath) {
            const v154 = 'require("' + filePath;
            const v155 = v154 + '");';
            return v155;
        };
        const v157 = v153.map(v156);
        const v158 = v157.join('\n');
        const v159 = fs.writeFileSync(outPath, v158);
        v159;
    };
    const loadFromCache = function () {
        const v160 = config.cachePath;
        const v161 = fs.existsSync(v160);
        if (v161) {
            const v162 = config.cachePath;
            const v163 = fs.readFileSync(v162, 'utf-8');
            var cache = JSON.parse(v163);
            var cacheFiles = Object.keys(cache);
            var needsToRegenerate = false;
            const v164 = cacheFiles.length;
            const v165 = v164 > 0;
            if (v165) {
                const v167 = function (filePath) {
                    const v166 = fs.existsSync(filePath);
                    return v166;
                };
                const v168 = cacheFiles.filter(v167);
                const v171 = function (filePath) {
                    var wasTracked = track(filePath);
                    const v169 = !needsToRegenerate;
                    const v170 = v169 && wasTracked;
                    if (v170) {
                        needsToRegenerate = true;
                    }
                };
                const v172 = v168.forEach(v171);
                v172;
            }
            if (needsToRegenerate) {
                const v173 = generateRunner();
                v173;
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    };
    const grep = function (callback) {
        const v174 = config.grep;
        const v175 = 'egrep -rl "describe\\([\'\\"].*' + v174;
        const v176 = v175 + '" ';
        const v177 = config.grepDir;
        const v178 = v176 + v177;
        const v179 = { cwd: root };
        const v188 = function (error, stdout) {
            const v180 = !error;
            if (v180) {
                const v181 = stdout.split('\n');
                const v185 = function (fileName) {
                    const v182 = fileName.indexOf('.test.js');
                    const v183 = -1;
                    const v184 = v182 > v183;
                    return v184;
                };
                const v186 = v181.filter(v185);
                const v187 = callback(v186);
                v187;
            }
        };
        const v189 = exec(v178, v179, v188);
        v189;
    };
    const run = function () {
        const v190 = Object.keys(testFiles);
        const v191 = v190.length;
        if (v191) {
            const v192 = executor.schedule();
            v192;
        }
    };
    const v199 = function (file) {
        const v193 = expandPath(file);
        const v194 = track(v193);
        if (v194) {
            const v195 = 'A test file was created, will now be tracking. (' + file;
            const v196 = v195 + ')';
            const v197 = log.info(v196);
            v197;
            const v198 = generateRunner();
            v198;
        }
    };
    const v200 = watcher.on('add', v199);
    const v205 = function (file) {
        const v201 = expandPath(file);
        const v202 = track(v201);
        if (v202) {
            const v203 = log.info('A test file was modified, tracking:', file);
            v203;
            const v204 = generateRunner();
            v204;
        }
    };
    const v206 = v200.on('change', v205);
    const v211 = function (file) {
        const v207 = expandPath(file);
        const v208 = untrack(v207);
        if (v208) {
            const v209 = log.info('A test file is no longer tracked as it was deleted.');
            v209;
            const v210 = generateRunner();
            v210;
        }
    };
    const v212 = v206.on('unlink', v211);
    const v214 = function (e) {
        const v213 = log.debug(e);
        v213;
    };
    const v215 = v212.on('error', v214);
    v215;
    const v216 = fs.writeFileSync(outPath, '');
    v216;
    const v217 = config.continue;
    if (v217) {
        const v218 = loadFromCache();
        if (v218) {
            const v219 = log.info('Reloaded previously tracked test files.');
            v219;
        }
    }
    const v220 = config.grep;
    const v221 = config.grep;
    const v222 = v221.length;
    const v223 = v220 && v222;
    if (v223) {
        const v228 = function (fileList) {
            const v224 = log.info('Grepped:', fileList);
            v224;
            const v225 = fileList.map(expandPath);
            const v226 = v225.forEach(track);
            v226;
            const v227 = generateRunner();
            v227;
        };
        const v229 = grep(v228);
        v229;
    }
    var installed = false;
    const v236 = function () {
        const v230 = !installed;
        if (v230) {
            const v231 = log.info('Capturing.');
            v231;
            installed = true;
            const v233 = function () {
                const v232 = run();
                v232;
            };
            const v234 = emitter.on('file_list_modified', v233);
            v234;
            const v235 = run();
            v235;
        }
    };
    const v237 = emitter.on('browsers_ready', v236);
    v237;
    const v247 = function (done) {
        const v238 = fs.existsSync(outPath);
        if (v238) {
            const v239 = fs.unlinkSync(outPath);
            v239;
        }
        const v240 = config.noCache;
        const v241 = !v240;
        if (v241) {
            const v242 = config.cachePath;
            const v243 = JSON.stringify(testFiles, null, 2);
            const v244 = fs.writeFileSync(v242, v243);
            v244;
        }
        const v245 = watcher.close();
        v245;
        const v246 = done();
        v246;
    };
    const v248 = emitter.on('exit', v247);
    v248;
    const v249 = [];
    const v250 = config.pattern;
    const v251 = v249.concat(v250);
    const v253 = function (x) {
        const v252 = watcher.add(x);
        v252;
    };
    const v254 = v251.forEach(v253);
    v254;
    const v255 = config.rude;
    const v256 = !v255;
    if (v256) {
        const v257 = greet(log);
        v257;
    }
};
const greet = function (log) {
    const v258 = path.resolve(__dirname, 'greeting.txt');
    var asdf = fs.readFileSync(v258, 'utf-8');
    var greetings = asdf.split('[]');
    const v259 = Math.random();
    const v260 = greetings.length;
    const v261 = v259 * v260;
    const v262 = Math.floor(v261);
    const v263 = greetings[v262];
    const v264 = v263.trim();
    const v265 = '\n' + v264;
    const v266 = v265 + '\n';
    const v267 = log.info(v266);
    v267;
};
Mojo.$inject = [
    'emitter',
    'config.mojo',
    'executor',
    'logger'
];
const v268 = [
    'type',
    Mojo
];
const v269 = {};
v269['reporter:mojo'] = v268;
module.exports = v269;
const v270 = module.exports;
v270.defaults = defaults;
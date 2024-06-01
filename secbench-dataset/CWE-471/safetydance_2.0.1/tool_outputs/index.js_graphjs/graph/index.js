'use strict';
const assert = require('assert');
const child_process = require('child_process');
const fs = require('fs');
const url = require('url');
const util = require('util');
const _argsArray = function (args) {
    const v208 = Array.prototype;
    const v209 = v208.slice;
    const v210 = v209.call(args, 0);
    return v210;
};
const safe = function (funcOrPromise, errorReturnValue) {
    exports.error = null;
    try {
        let result;
        const v211 = typeof funcOrPromise;
        const v212 = v211 === 'function';
        if (v212) {
            result = funcOrPromise();
            const v213 = util.types;
            const v214 = v213.isPromise(result);
            const v215 = !v214;
            if (v215) {
                return result;
            }
        } else {
            result = funcOrPromise;
        }
        const v224 = resolve => {
            const v218 = x => {
                const v216 = [
                    null,
                    x
                ];
                const v217 = resolve(v216);
                return v217;
            };
            const v219 = result.then(v218);
            const v222 = e => {
                const v220 = [e];
                const v221 = resolve(v220);
                v221;
            };
            const v223 = v219.catch(v222);
            v223;
        };
        const v225 = new Promise(v224);
        return v225;
    } catch (e) {
        exports.error = e;
        const v226 = typeof errorReturnValue;
        const v227 = v226 === 'undefined';
        let v228;
        if (v227) {
            v228 = null;
        } else {
            v228 = errorReturnValue;
        }
        return v228;
    }
};
const jsonParse = function () {
    var args = _argsArray(arguments);
    const v231 = function () {
        const v229 = JSON.parse;
        const v230 = v229.apply(JSON, args);
        return v230;
    };
    const v232 = safe(v231, null);
    return v232;
};
const jsonStringify = function () {
    var args = _argsArray(arguments);
    const v235 = function () {
        const v233 = JSON.stringify;
        const v234 = v233.apply(JSON, args);
        return v234;
    };
    const v236 = safe(v235, null);
    return v236;
};
const openSync = function () {
    var args = _argsArray(arguments);
    const v239 = function () {
        const v237 = fs.openSync;
        const v238 = v237.apply(fs, args);
        return v238;
    };
    const v240 = -1;
    const v241 = safe(v239, v240);
    return v241;
};
const closeSync = function () {
    var args = _argsArray(arguments);
    const v244 = function () {
        const v242 = fs.closeSync;
        const v243 = v242.apply(fs, args);
        return v243;
    };
    const v245 = safe(v244, 0);
    return v245;
};
const readFileSync = function () {
    var args = _argsArray(arguments);
    const v248 = function () {
        const v246 = fs.readFileSync;
        const v247 = v246.apply(fs, args);
        return v247;
    };
    const v249 = safe(v248, null);
    return v249;
};
const writeFileSync = function () {
    var args = _argsArray(arguments);
    const v252 = function () {
        const v250 = fs.writeFileSync;
        const v251 = v250.apply(fs, args);
        return v251;
    };
    const v253 = safe(v252);
    const v254 = v253 !== null;
    return v254;
};
const statSync = function () {
    var args = _argsArray(arguments);
    const v257 = function () {
        const v255 = fs.statSync;
        const v256 = v255.apply(fs, args);
        return v256;
    };
    const v258 = safe(v257, null);
    return v258;
};
const lstatSync = function () {
    var args = _argsArray(arguments);
    const v261 = function () {
        const v259 = fs.lstatSync;
        const v260 = v259.apply(fs, args);
        return v260;
    };
    const v262 = safe(v261, null);
    return v262;
};
const readdirSync = function () {
    var args = _argsArray(arguments);
    const v265 = function () {
        const v263 = fs.readdirSync;
        const v264 = v263.apply(fs, args);
        return v264;
    };
    const v266 = safe(v265, null);
    return v266;
};
const existsSync = function () {
    var args = _argsArray(arguments);
    const v269 = function () {
        const v267 = fs.existsSync;
        const v268 = v267.apply(fs, args);
        return v268;
    };
    const v270 = safe(v269, false);
    return v270;
};
const mkdirSync = function () {
    var args = _argsArray(arguments);
    const v273 = function () {
        const v271 = fs.mkdirSync;
        const v272 = v271.apply(fs, args);
        return v272;
    };
    const v274 = safe(v273);
    const v275 = v274 !== null;
    return v275;
};
const chownSync = function () {
    var args = _argsArray(arguments);
    const v278 = function () {
        const v276 = fs.chownSync;
        const v277 = v276.apply(fs, args);
        return v277;
    };
    const v279 = safe(v278);
    const v280 = v279 !== null;
    return v280;
};
const unlinkSync = function () {
    var args = _argsArray(arguments);
    const v283 = function () {
        const v281 = fs.unlinkSync;
        const v282 = v281.apply(fs, args);
        return v282;
    };
    const v284 = safe(v283);
    const v285 = v284 !== null;
    return v285;
};
const rmdirSync = function () {
    var args = _argsArray(arguments);
    const v288 = function () {
        const v286 = fs.rmdirSync;
        const v287 = v286.apply(fs, args);
        return v287;
    };
    const v289 = safe(v288);
    const v290 = v289 !== null;
    return v290;
};
const chmodSync = function () {
    var args = _argsArray(arguments);
    const v293 = function () {
        const v291 = fs.chmodSync;
        const v292 = v291.apply(fs, args);
        return v292;
    };
    const v294 = safe(v293);
    const v295 = v294 !== null;
    return v295;
};
const readlinkSync = function () {
    var args = _argsArray(arguments);
    const v298 = function () {
        const v296 = fs.readlinkSync;
        const v297 = v296.apply(fs, args);
        return v297;
    };
    const v299 = safe(v298, null);
    return v299;
};
const realpathSync = function () {
    var args = _argsArray(arguments);
    const v302 = function () {
        const v300 = fs.realpathSync;
        const v301 = v300.apply(fs, args);
        return v301;
    };
    const v303 = safe(v302, null);
    return v303;
};
const renameSync = function () {
    var args = _argsArray(arguments);
    const v306 = function () {
        const v304 = fs.renameSync;
        const v305 = v304.apply(fs, args);
        return v305;
    };
    const v307 = safe(v306);
    const v308 = v307 !== null;
    return v308;
};
const readSync = function () {
    var args = _argsArray(arguments);
    const v311 = function () {
        const v309 = fs.readSync;
        const v310 = v309.apply(fs, args);
        return v310;
    };
    const v312 = safe(v311);
    const v313 = v312 !== null;
    return v313;
};
const appendFileSync = function () {
    var args = _argsArray(arguments);
    const v316 = function () {
        const v314 = fs.appendFileSync;
        const v315 = v314.apply(fs, args);
        return v315;
    };
    const v317 = safe(v316);
    const v318 = v317 !== null;
    return v318;
};
const urlParse = function () {
    var args = _argsArray(arguments);
    const v321 = function () {
        const v319 = url.parse;
        const v320 = v319.apply(url, args);
        return v320;
    };
    const v322 = safe(v321, null);
    return v322;
};
const safeRequire = function () {
    var args = _argsArray(arguments);
    const v324 = function () {
        const v323 = require.apply(null, args);
        return v323;
    };
    const v325 = safe(v324, null);
    return v325;
};
const execSync = function () {
    var args = _argsArray(arguments);
    const v328 = function () {
        const v326 = child_process.execSync;
        const v327 = v326.apply(child_process, args);
        return v327;
    };
    const v329 = safe(v328, null);
    return v329;
};
const spawnSync = function () {
    var args = _argsArray(arguments);
    const v332 = function () {
        const v330 = child_process.spawnSync;
        const v331 = v330.apply(child_process, args);
        return v331;
    };
    const v333 = safe(v332, null);
    return v333;
};
const query = function (o, s, defaultValue) {
    const v334 = !s;
    if (v334) {
        return o;
    }
    const v335 = typeof s;
    const v336 = v335 === 'string';
    const v337 = Array.isArray(s);
    const v338 = v336 || v337;
    const v339 = assert(v338);
    v339;
    let a;
    const v340 = Array.isArray(s);
    if (v340) {
        a = s;
    } else {
        s = s.replace(/\[(\w+)\]/g, '.$1');
        s = s.replace(/^\./, '');
        a = s.split('.');
    }
    var i = 0;
    const v341 = a.length;
    let v342 = i < v341;
    while (v342) {
        var n = a[i];
        const v344 = !o;
        const v345 = typeof o;
        const v346 = v345 !== 'object';
        const v347 = v344 || v346;
        const v348 = n in o;
        const v349 = !v348;
        const v350 = v347 || v349;
        if (v350) {
            return defaultValue;
        }
        o = o[n];
        const v343 = i++;
        v342 = i < v341;
    }
    return o;
};
const set = function (o, s, value) {
    const v351 = !s;
    if (v351) {
        return o;
    }
    const v352 = typeof s;
    const v353 = v352 === 'string';
    const v354 = Array.isArray(s);
    const v355 = v353 || v354;
    const v356 = assert(v355);
    v356;
    const v357 = !o;
    const v358 = typeof o;
    const v359 = v358 !== 'object';
    const v360 = v357 || v359;
    if (v360) {
        o = {};
    }
    let a;
    const v361 = Array.isArray(s);
    if (v361) {
        a = s;
    } else {
        s = s.replace(/\[(\w+)\]/g, '.$1');
        s = s.replace(/^\./, '');
        a = s.split('.');
    }
    var io = o;
    var i = 0;
    const v362 = a.length;
    const v363 = v362 - 1;
    let v364 = i < v363;
    while (v364) {
        var n = a[i];
        const v366 = n in io;
        const v367 = !v366;
        const v368 = io[n];
        const v369 = !v368;
        const v370 = v367 || v369;
        const v371 = io[n];
        const v372 = typeof v371;
        const v373 = v372 !== 'object';
        const v374 = v370 || v373;
        if (v374) {
            const v375 = {};
            io[n] = v375;
        }
        io = io[n];
        const v365 = i++;
        v364 = i < v363;
    }
    const v376 = a.length;
    const v377 = v376 - 1;
    const v378 = a[v377];
    io[v378] = value;
    return o;
};
const unset = function (o, s) {
    const v379 = !s;
    if (v379) {
        return o;
    }
    const v380 = typeof s;
    const v381 = v380 === 'string';
    const v382 = Array.isArray(s);
    const v383 = v381 || v382;
    const v384 = assert(v383);
    v384;
    const v385 = !o;
    const v386 = typeof o;
    const v387 = v386 !== 'object';
    const v388 = v385 || v387;
    if (v388) {
        return o;
    }
    let a;
    const v389 = Array.isArray(s);
    if (v389) {
        a = s;
    } else {
        s = s.replace(/\[(\w+)\]/g, '.$1');
        s = s.replace(/^\./, '');
        a = s.split('.');
    }
    var io = o;
    var i = 0;
    const v390 = a.length;
    const v391 = v390 - 1;
    let v392 = i < v391;
    while (v392) {
        var n = a[i];
        const v394 = n in io;
        const v395 = !v394;
        if (v395) {
            return o;
        }
        const v396 = io[n];
        const v397 = !v396;
        const v398 = io[n];
        const v399 = typeof v398;
        const v400 = v399 !== 'object';
        const v401 = v397 || v400;
        if (v401) {
            const v402 = io[n];
            const v403 = delete v402;
            v403;
            return o;
        }
        io = io[n];
        const v393 = i++;
        v392 = i < v391;
    }
    const v404 = a.length;
    const v405 = v404 - 1;
    const v406 = a[v405];
    const v407 = io[v406];
    const v408 = delete v407;
    v408;
    return o;
};
const v409 = {};
v409.parse = jsonParse;
v409.stringify = jsonStringify;
const v410 = {};
v410.openSync = openSync;
v410.closeSync = closeSync;
v410.readSync = readSync;
v410.readFileSync = readFileSync;
v410.writeFileSync = writeFileSync;
v410.statSync = statSync;
v410.lstatSync = lstatSync;
v410.existsSync = existsSync;
v410.mkdirSync = mkdirSync;
v410.rmdirSync = rmdirSync;
v410.unlinkSync = unlinkSync;
v410.renameSync = renameSync;
v410.readdirSync = readdirSync;
v410.chmodSync = chmodSync;
v410.readlinkSync = readlinkSync;
v410.realpathSync = realpathSync;
v410.appendFileSync = appendFileSync;
v410.chownSync = chownSync;
const v411 = {};
v411.execSync = execSync;
v411.spawnSync = spawnSync;
const v412 = {};
v412.parse = urlParse;
const v413 = {
    JSON: v409,
    fs: v410,
    child_process: v411,
    require: safeRequire,
    url: v412,
    query,
    set,
    unset,
    safeCall: safe,
    safeAwait: safe,
    error: null
};
const v414 = Object.assign(safe, v413);
v414;
module.exports = safe;
exports = module.exports;
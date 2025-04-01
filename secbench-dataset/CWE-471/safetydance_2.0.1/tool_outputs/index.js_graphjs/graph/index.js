'use strict';
const assert = require('assert');
const child_process = require('child_process');
const fs = require('fs');
const url = require('url');
const util = require('util');
const _argsArray = function (args) {
    const v207 = Array.prototype;
    const v208 = v207.slice;
    const v209 = v208.call(args, 0);
    return v209;
};
const safe = function (funcOrPromise, errorReturnValue) {
    exports.error = null;
    try {
        let result;
        const v210 = typeof funcOrPromise;
        const v211 = v210 === 'function';
        if (v211) {
            result = funcOrPromise();
            const v212 = util.types;
            const v213 = v212.isPromise(result);
            const v214 = !v213;
            if (v214) {
                return result;
            }
        } else {
            result = funcOrPromise;
        }
        const v223 = resolve => {
            const v217 = x => {
                const v215 = [
                    null,
                    x
                ];
                const v216 = resolve(v215);
                return v216;
            };
            const v218 = result.then(v217);
            const v221 = e => {
                const v219 = [e];
                const v220 = resolve(v219);
                v220;
            };
            const v222 = v218.catch(v221);
            v222;
        };
        const v224 = new Promise(v223);
        return v224;
    } catch (e) {
        exports.error = e;
        const v225 = typeof errorReturnValue;
        const v226 = v225 === 'undefined';
        let v227;
        if (v226) {
            v227 = null;
        } else {
            v227 = errorReturnValue;
        }
        return v227;
    }
};
const jsonParse = function () {
    var args = _argsArray(arguments);
    const v230 = function () {
        const v228 = JSON.parse;
        const v229 = v228.apply(JSON, args);
        return v229;
    };
    const v231 = safe(v230, null);
    return v231;
};
const jsonStringify = function () {
    var args = _argsArray(arguments);
    const v234 = function () {
        const v232 = JSON.stringify;
        const v233 = v232.apply(JSON, args);
        return v233;
    };
    const v235 = safe(v234, null);
    return v235;
};
const openSync = function () {
    var args = _argsArray(arguments);
    const v238 = function () {
        const v236 = fs.openSync;
        const v237 = v236.apply(fs, args);
        return v237;
    };
    const v239 = -1;
    const v240 = safe(v238, v239);
    return v240;
};
const closeSync = function () {
    var args = _argsArray(arguments);
    const v243 = function () {
        const v241 = fs.closeSync;
        const v242 = v241.apply(fs, args);
        return v242;
    };
    const v244 = safe(v243, 0);
    return v244;
};
const readFileSync = function () {
    var args = _argsArray(arguments);
    const v247 = function () {
        const v245 = fs.readFileSync;
        const v246 = v245.apply(fs, args);
        return v246;
    };
    const v248 = safe(v247, null);
    return v248;
};
const writeFileSync = function () {
    var args = _argsArray(arguments);
    const v251 = function () {
        const v249 = fs.writeFileSync;
        const v250 = v249.apply(fs, args);
        return v250;
    };
    const v252 = safe(v251);
    const v253 = v252 !== null;
    return v253;
};
const statSync = function () {
    var args = _argsArray(arguments);
    const v256 = function () {
        const v254 = fs.statSync;
        const v255 = v254.apply(fs, args);
        return v255;
    };
    const v257 = safe(v256, null);
    return v257;
};
const lstatSync = function () {
    var args = _argsArray(arguments);
    const v260 = function () {
        const v258 = fs.lstatSync;
        const v259 = v258.apply(fs, args);
        return v259;
    };
    const v261 = safe(v260, null);
    return v261;
};
const readdirSync = function () {
    var args = _argsArray(arguments);
    const v264 = function () {
        const v262 = fs.readdirSync;
        const v263 = v262.apply(fs, args);
        return v263;
    };
    const v265 = safe(v264, null);
    return v265;
};
const existsSync = function () {
    var args = _argsArray(arguments);
    const v268 = function () {
        const v266 = fs.existsSync;
        const v267 = v266.apply(fs, args);
        return v267;
    };
    const v269 = safe(v268, false);
    return v269;
};
const mkdirSync = function () {
    var args = _argsArray(arguments);
    const v272 = function () {
        const v270 = fs.mkdirSync;
        const v271 = v270.apply(fs, args);
        return v271;
    };
    const v273 = safe(v272);
    const v274 = v273 !== null;
    return v274;
};
const chownSync = function () {
    var args = _argsArray(arguments);
    const v277 = function () {
        const v275 = fs.chownSync;
        const v276 = v275.apply(fs, args);
        return v276;
    };
    const v278 = safe(v277);
    const v279 = v278 !== null;
    return v279;
};
const unlinkSync = function () {
    var args = _argsArray(arguments);
    const v282 = function () {
        const v280 = fs.unlinkSync;
        const v281 = v280.apply(fs, args);
        return v281;
    };
    const v283 = safe(v282);
    const v284 = v283 !== null;
    return v284;
};
const rmdirSync = function () {
    var args = _argsArray(arguments);
    const v287 = function () {
        const v285 = fs.rmdirSync;
        const v286 = v285.apply(fs, args);
        return v286;
    };
    const v288 = safe(v287);
    const v289 = v288 !== null;
    return v289;
};
const chmodSync = function () {
    var args = _argsArray(arguments);
    const v292 = function () {
        const v290 = fs.chmodSync;
        const v291 = v290.apply(fs, args);
        return v291;
    };
    const v293 = safe(v292);
    const v294 = v293 !== null;
    return v294;
};
const readlinkSync = function () {
    var args = _argsArray(arguments);
    const v297 = function () {
        const v295 = fs.readlinkSync;
        const v296 = v295.apply(fs, args);
        return v296;
    };
    const v298 = safe(v297, null);
    return v298;
};
const realpathSync = function () {
    var args = _argsArray(arguments);
    const v301 = function () {
        const v299 = fs.realpathSync;
        const v300 = v299.apply(fs, args);
        return v300;
    };
    const v302 = safe(v301, null);
    return v302;
};
const renameSync = function () {
    var args = _argsArray(arguments);
    const v305 = function () {
        const v303 = fs.renameSync;
        const v304 = v303.apply(fs, args);
        return v304;
    };
    const v306 = safe(v305);
    const v307 = v306 !== null;
    return v307;
};
const readSync = function () {
    var args = _argsArray(arguments);
    const v310 = function () {
        const v308 = fs.readSync;
        const v309 = v308.apply(fs, args);
        return v309;
    };
    const v311 = safe(v310);
    const v312 = v311 !== null;
    return v312;
};
const appendFileSync = function () {
    var args = _argsArray(arguments);
    const v315 = function () {
        const v313 = fs.appendFileSync;
        const v314 = v313.apply(fs, args);
        return v314;
    };
    const v316 = safe(v315);
    const v317 = v316 !== null;
    return v317;
};
const urlParse = function () {
    var args = _argsArray(arguments);
    const v320 = function () {
        const v318 = url.parse;
        const v319 = v318.apply(url, args);
        return v319;
    };
    const v321 = safe(v320, null);
    return v321;
};
const safeRequire = function () {
    var args = _argsArray(arguments);
    const v323 = function () {
        const v322 = require.apply(null, args);
        return v322;
    };
    const v324 = safe(v323, null);
    return v324;
};
const execSync = function () {
    var args = _argsArray(arguments);
    const v327 = function () {
        const v325 = child_process.execSync;
        const v326 = v325.apply(child_process, args);
        return v326;
    };
    const v328 = safe(v327, null);
    return v328;
};
const spawnSync = function () {
    var args = _argsArray(arguments);
    const v331 = function () {
        const v329 = child_process.spawnSync;
        const v330 = v329.apply(child_process, args);
        return v330;
    };
    const v332 = safe(v331, null);
    return v332;
};
const query = function (o, s, defaultValue) {
    const v333 = !s;
    if (v333) {
        return o;
    }
    const v334 = typeof s;
    const v335 = v334 === 'string';
    const v336 = Array.isArray(s);
    const v337 = v335 || v336;
    const v338 = assert(v337);
    v338;
    let a;
    const v339 = Array.isArray(s);
    if (v339) {
        a = s;
    } else {
        s = s.replace(/\[(\w+)\]/g, '.$1');
        s = s.replace(/^\./, '');
        a = s.split('.');
    }
    var i = 0;
    const v340 = a.length;
    let v341 = i < v340;
    while (v341) {
        var n = a[i];
        const v343 = !o;
        const v344 = typeof o;
        const v345 = v344 !== 'object';
        const v346 = v343 || v345;
        const v347 = n in o;
        const v348 = !v347;
        const v349 = v346 || v348;
        if (v349) {
            return defaultValue;
        }
        o = o[n];
        const v342 = i++;
        v341 = i < v340;
    }
    return o;
};
const set = function (o, s, value) {
    const v350 = !s;
    if (v350) {
        return o;
    }
    const v351 = typeof s;
    const v352 = v351 === 'string';
    const v353 = Array.isArray(s);
    const v354 = v352 || v353;
    const v355 = assert(v354);
    v355;
    const v356 = !o;
    const v357 = typeof o;
    const v358 = v357 !== 'object';
    const v359 = v356 || v358;
    if (v359) {
        o = {};
    }
    let a;
    const v360 = Array.isArray(s);
    if (v360) {
        a = s;
    } else {
        s = s.replace(/\[(\w+)\]/g, '.$1');
        s = s.replace(/^\./, '');
        a = s.split('.');
    }
    var io = o;
    var i = 0;
    const v361 = a.length;
    const v362 = v361 - 1;
    let v363 = i < v362;
    while (v363) {
        var n = a[i];
        const v365 = n in io;
        const v366 = !v365;
        const v367 = io[n];
        const v368 = !v367;
        const v369 = v366 || v368;
        const v370 = io[n];
        const v371 = typeof v370;
        const v372 = v371 !== 'object';
        const v373 = v369 || v372;
        if (v373) {
            const v374 = {};
            io[n] = v374;
        }
        io = io[n];
        const v364 = i++;
        v363 = i < v362;
    }
    const v375 = a.length;
    const v376 = v375 - 1;
    const v377 = a[v376];
    io[v377] = value;
    return o;
};
const unset = function (o, s) {
    const v378 = !s;
    if (v378) {
        return o;
    }
    const v379 = typeof s;
    const v380 = v379 === 'string';
    const v381 = Array.isArray(s);
    const v382 = v380 || v381;
    const v383 = assert(v382);
    v383;
    const v384 = !o;
    const v385 = typeof o;
    const v386 = v385 !== 'object';
    const v387 = v384 || v386;
    if (v387) {
        return o;
    }
    let a;
    const v388 = Array.isArray(s);
    if (v388) {
        a = s;
    } else {
        s = s.replace(/\[(\w+)\]/g, '.$1');
        s = s.replace(/^\./, '');
        a = s.split('.');
    }
    var io = o;
    var i = 0;
    const v389 = a.length;
    const v390 = v389 - 1;
    let v391 = i < v390;
    while (v391) {
        var n = a[i];
        const v393 = n in io;
        const v394 = !v393;
        if (v394) {
            return o;
        }
        const v395 = io[n];
        const v396 = !v395;
        const v397 = io[n];
        const v398 = typeof v397;
        const v399 = v398 !== 'object';
        const v400 = v396 || v399;
        if (v400) {
            const v401 = io[n];
            const v402 = delete v401;
            v402;
            return o;
        }
        io = io[n];
        const v392 = i++;
        v391 = i < v390;
    }
    const v403 = a.length;
    const v404 = v403 - 1;
    const v405 = a[v404];
    const v406 = io[v405];
    const v407 = delete v406;
    v407;
    return o;
};
const v408 = {};
v408.parse = jsonParse;
v408.stringify = jsonStringify;
const v409 = {};
v409.openSync = openSync;
v409.closeSync = closeSync;
v409.readSync = readSync;
v409.readFileSync = readFileSync;
v409.writeFileSync = writeFileSync;
v409.statSync = statSync;
v409.lstatSync = lstatSync;
v409.existsSync = existsSync;
v409.mkdirSync = mkdirSync;
v409.rmdirSync = rmdirSync;
v409.unlinkSync = unlinkSync;
v409.renameSync = renameSync;
v409.readdirSync = readdirSync;
v409.chmodSync = chmodSync;
v409.readlinkSync = readlinkSync;
v409.realpathSync = realpathSync;
v409.appendFileSync = appendFileSync;
v409.chownSync = chownSync;
const v410 = {};
v410.execSync = execSync;
v410.spawnSync = spawnSync;
const v411 = {};
v411.parse = urlParse;
const v412 = {};
v412.JSON = v408;
v412.fs = v409;
v412.child_process = v410;
v412.require = safeRequire;
v412.url = v411;
v412.query = query;
v412.set = set;
v412.unset = unset;
v412.safeCall = safe;
v412.safeAwait = safe;
v412.error = null;
module.exports = v412;
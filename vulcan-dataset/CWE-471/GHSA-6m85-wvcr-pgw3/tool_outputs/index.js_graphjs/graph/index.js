'use strict';
var assert = require('assert');
var child_process = require('child_process');
var fs = require('fs');
var url = require('url');
const _argsArray = function (args) {
    const v193 = Array.prototype;
    const v194 = v193.slice;
    const v195 = v194.call(args, 0);
    return v195;
};
const safeCall = function (optionalThis, func, errorReturnValue) {
    safeCall.error = null;
    const v196 = typeof optionalThis;
    const v197 = v196 === 'function';
    if (v197) {
        errorReturnValue = func;
        func = optionalThis;
        optionalThis = null;
    }
    const v198 = typeof errorReturnValue;
    const v199 = v198 === 'undefined';
    if (v199) {
        errorReturnValue = null;
    }
    try {
        const v200 = func.call(optionalThis);
        return v200;
    } catch (e) {
        safeCall.error = e;
        return errorReturnValue;
    }
};
const jsonParse = function () {
    var args = _argsArray(arguments);
    const v203 = function () {
        const v201 = JSON.parse;
        const v202 = v201.apply(JSON, args);
        return v202;
    };
    const v204 = safeCall(v203, null);
    return v204;
};
const jsonStringify = function () {
    var args = _argsArray(arguments);
    const v207 = function () {
        const v205 = JSON.stringify;
        const v206 = v205.apply(JSON, args);
        return v206;
    };
    const v208 = safeCall(v207, null);
    return v208;
};
const openSync = function () {
    var args = _argsArray(arguments);
    const v211 = function () {
        const v209 = fs.openSync;
        const v210 = v209.apply(fs, args);
        return v210;
    };
    const v212 = -1;
    const v213 = safeCall(v211, v212);
    return v213;
};
const closeSync = function () {
    var args = _argsArray(arguments);
    const v216 = function () {
        const v214 = fs.closeSync;
        const v215 = v214.apply(fs, args);
        return v215;
    };
    const v217 = safeCall(v216, 0);
    return v217;
};
const readFileSync = function () {
    var args = _argsArray(arguments);
    const v220 = function () {
        const v218 = fs.readFileSync;
        const v219 = v218.apply(fs, args);
        return v219;
    };
    const v221 = safeCall(v220, null);
    return v221;
};
const writeFileSync = function () {
    var args = _argsArray(arguments);
    const v224 = function () {
        const v222 = fs.writeFileSync;
        const v223 = v222.apply(fs, args);
        return v223;
    };
    const v225 = safeCall(v224);
    const v226 = v225 !== null;
    return v226;
};
const statSync = function () {
    var args = _argsArray(arguments);
    const v229 = function () {
        const v227 = fs.statSync;
        const v228 = v227.apply(fs, args);
        return v228;
    };
    const v230 = safeCall(v229, null);
    return v230;
};
const lstatSync = function () {
    var args = _argsArray(arguments);
    const v233 = function () {
        const v231 = fs.lstatSync;
        const v232 = v231.apply(fs, args);
        return v232;
    };
    const v234 = safeCall(v233, null);
    return v234;
};
const readdirSync = function () {
    var args = _argsArray(arguments);
    const v237 = function () {
        const v235 = fs.readdirSync;
        const v236 = v235.apply(fs, args);
        return v236;
    };
    const v238 = safeCall(v237, null);
    return v238;
};
const existsSync = function () {
    var args = _argsArray(arguments);
    const v241 = function () {
        const v239 = fs.existsSync;
        const v240 = v239.apply(fs, args);
        return v240;
    };
    const v242 = safeCall(v241, false);
    return v242;
};
const mkdirSync = function () {
    var args = _argsArray(arguments);
    const v245 = function () {
        const v243 = fs.mkdirSync;
        const v244 = v243.apply(fs, args);
        return v244;
    };
    const v246 = safeCall(v245);
    const v247 = v246 !== null;
    return v247;
};
const chownSync = function () {
    var args = _argsArray(arguments);
    const v250 = function () {
        const v248 = fs.chownSync;
        const v249 = v248.apply(fs, args);
        return v249;
    };
    const v251 = safeCall(v250);
    const v252 = v251 !== null;
    return v252;
};
const unlinkSync = function () {
    var args = _argsArray(arguments);
    const v255 = function () {
        const v253 = fs.unlinkSync;
        const v254 = v253.apply(fs, args);
        return v254;
    };
    const v256 = safeCall(v255);
    const v257 = v256 !== null;
    return v257;
};
const rmdirSync = function () {
    var args = _argsArray(arguments);
    const v260 = function () {
        const v258 = fs.rmdirSync;
        const v259 = v258.apply(fs, args);
        return v259;
    };
    const v261 = safeCall(v260);
    const v262 = v261 !== null;
    return v262;
};
const chmodSync = function () {
    var args = _argsArray(arguments);
    const v265 = function () {
        const v263 = fs.chmodSync;
        const v264 = v263.apply(fs, args);
        return v264;
    };
    const v266 = safeCall(v265);
    const v267 = v266 !== null;
    return v267;
};
const readlinkSync = function () {
    var args = _argsArray(arguments);
    const v270 = function () {
        const v268 = fs.readlinkSync;
        const v269 = v268.apply(fs, args);
        return v269;
    };
    const v271 = safeCall(v270, null);
    return v271;
};
const realpathSync = function () {
    var args = _argsArray(arguments);
    const v274 = function () {
        const v272 = fs.realpathSync;
        const v273 = v272.apply(fs, args);
        return v273;
    };
    const v275 = safeCall(v274, null);
    return v275;
};
const renameSync = function () {
    var args = _argsArray(arguments);
    const v278 = function () {
        const v276 = fs.renameSync;
        const v277 = v276.apply(fs, args);
        return v277;
    };
    const v279 = safeCall(v278);
    const v280 = v279 !== null;
    return v280;
};
const readSync = function () {
    var args = _argsArray(arguments);
    const v283 = function () {
        const v281 = fs.readSync;
        const v282 = v281.apply(fs, args);
        return v282;
    };
    const v284 = safeCall(v283);
    const v285 = v284 !== null;
    return v285;
};
const appendFileSync = function () {
    var args = _argsArray(arguments);
    const v288 = function () {
        const v286 = fs.appendFileSync;
        const v287 = v286.apply(fs, args);
        return v287;
    };
    const v289 = safeCall(v288);
    const v290 = v289 !== null;
    return v290;
};
const urlParse = function () {
    var args = _argsArray(arguments);
    const v293 = function () {
        const v291 = url.parse;
        const v292 = v291.apply(url, args);
        return v292;
    };
    const v294 = safeCall(v293, null);
    return v294;
};
const safeRequire = function () {
    var args = _argsArray(arguments);
    const v296 = function () {
        const v295 = require.apply(null, args);
        return v295;
    };
    const v297 = safeCall(v296, null);
    return v297;
};
const execSync = function () {
    var args = _argsArray(arguments);
    const v300 = function () {
        const v298 = child_process.execSync;
        const v299 = v298.apply(child_process, args);
        return v299;
    };
    const v301 = safeCall(v300, null);
    return v301;
};
const spawnSync = function () {
    var args = _argsArray(arguments);
    const v304 = function () {
        const v302 = child_process.spawnSync;
        const v303 = v302.apply(child_process, args);
        return v303;
    };
    const v305 = safeCall(v304, null);
    return v305;
};
const query = function (o, s, defaultValue) {
    const v306 = !s;
    if (v306) {
        return o;
    }
    const v307 = typeof s;
    const v308 = v307 === 'string';
    const v309 = Array.isArray(s);
    const v310 = v308 || v309;
    const v311 = assert(v310);
    v311;
    let a;
    const v312 = Array.isArray(s);
    if (v312) {
        a = s;
    } else {
        s = s.replace(/\[(\w+)\]/g, '.$1');
        s = s.replace(/^\./, '');
        a = s.split('.');
    }
    var i = 0;
    const v313 = a.length;
    let v314 = i < v313;
    while (v314) {
        var n = a[i];
        const v316 = !o;
        const v317 = typeof o;
        const v318 = v317 !== 'object';
        const v319 = v316 || v318;
        const v320 = n in o;
        const v321 = !v320;
        const v322 = v319 || v321;
        if (v322) {
            return defaultValue;
        }
        o = o[n];
        const v315 = i++;
        v314 = i < v313;
    }
    return o;
};
const set = function (o, s, value) {
    const v323 = !s;
    if (v323) {
        return o;
    }
    const v324 = typeof s;
    const v325 = v324 === 'string';
    const v326 = Array.isArray(s);
    const v327 = v325 || v326;
    const v328 = assert(v327);
    v328;
    const v329 = !o;
    const v330 = typeof o;
    const v331 = v330 !== 'object';
    const v332 = v329 || v331;
    if (v332) {
        o = {};
    }
    let a;
    const v333 = Array.isArray(s);
    if (v333) {
        a = s;
    } else {
        s = s.replace(/\[(\w+)\]/g, '.$1');
        s = s.replace(/^\./, '');
        a = s.split('.');
    }
    var io = o;
    var i = 0;
    const v334 = a.length;
    const v335 = v334 - 1;
    let v336 = i < v335;
    while (v336) {
        var n = a[i];
        const v338 = n in io;
        const v339 = !v338;
        const v340 = io[n];
        const v341 = !v340;
        const v342 = v339 || v341;
        const v343 = io[n];
        const v344 = typeof v343;
        const v345 = v344 !== 'object';
        const v346 = v342 || v345;
        if (v346) {
            const v347 = {};
            io[n] = v347;
        }
        io = io[n];
        const v337 = i++;
        v336 = i < v335;
    }
    const v348 = a.length;
    const v349 = v348 - 1;
    const v350 = a[v349];
    io[v350] = value;
    return o;
};
const unset = function (o, s) {
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
        return o;
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
        if (v367) {
            return o;
        }
        const v368 = io[n];
        const v369 = !v368;
        const v370 = io[n];
        const v371 = typeof v370;
        const v372 = v371 !== 'object';
        const v373 = v369 || v372;
        if (v373) {
            const v374 = io[n];
            const v375 = delete v374;
            v375;
            return o;
        }
        io = io[n];
        const v365 = i++;
        v364 = i < v363;
    }
    const v376 = a.length;
    const v377 = v376 - 1;
    const v378 = a[v377];
    const v379 = io[v378];
    const v380 = delete v379;
    v380;
    return o;
};
safeCall.safeCall = safeCall;
const v381 = {};
v381.parse = jsonParse;
v381.stringify = jsonStringify;
safeCall.JSON = v381;
const v382 = {};
v382.openSync = openSync;
v382.closeSync = closeSync;
v382.readSync = readSync;
v382.readFileSync = readFileSync;
v382.writeFileSync = writeFileSync;
v382.statSync = statSync;
v382.lstatSync = lstatSync;
v382.existsSync = existsSync;
v382.mkdirSync = mkdirSync;
v382.rmdirSync = rmdirSync;
v382.unlinkSync = unlinkSync;
v382.renameSync = renameSync;
v382.readdirSync = readdirSync;
v382.chmodSync = chmodSync;
v382.readlinkSync = readlinkSync;
v382.realpathSync = realpathSync;
v382.appendFileSync = appendFileSync;
v382.chownSync = chownSync;
safeCall.fs = v382;
const v383 = {};
v383.execSync = execSync;
v383.spawnSync = spawnSync;
safeCall.child_process = v383;
safeCall.require = safeRequire;
const v384 = {};
v384.parse = urlParse;
safeCall.url = v384;
safeCall.query = query;
safeCall.set = set;
safeCall.unset = unset;
module.exports = safeCall;
exports = module.exports;
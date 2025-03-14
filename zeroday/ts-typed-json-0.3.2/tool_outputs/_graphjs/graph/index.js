'use strict';
const v197 = this.__awaiter;
const v198 = this && v197;
const v224 = function (thisArg, _arguments, P, generator) {
    const adopt = function (value) {
        const v199 = value instanceof P;
        const v201 = function (resolve) {
            const v200 = resolve(value);
            v200;
        };
        const v202 = new P(v201);
        let v203;
        if (v199) {
            v203 = value;
        } else {
            v203 = v202;
        }
        return v203;
    };
    const v204 = P || (P = Promise);
    const v222 = function (resolve, reject) {
        const fulfilled = function (value) {
            try {
                const v205 = generator.next(value);
                const v206 = step(v205);
                v206;
            } catch (e) {
                const v207 = reject(e);
                v207;
            }
        };
        const rejected = function (value) {
            try {
                const v208 = generator['throw'](value);
                const v209 = step(v208);
                v209;
            } catch (e) {
                const v210 = reject(e);
                v210;
            }
        };
        const step = function (result) {
            const v211 = result.done;
            const v212 = result.value;
            const v213 = resolve(v212);
            const v214 = result.value;
            const v215 = adopt(v214);
            const v216 = v215.then(fulfilled, rejected);
            let v217;
            if (v211) {
                v217 = v213;
            } else {
                v217 = v216;
            }
            v217;
        };
        const v218 = [];
        const v219 = _arguments || v218;
        const v220 = (generator = generator.apply(thisArg, v219)).next();
        const v221 = step(v220);
        v221;
    };
    const v223 = new v204(v222);
    return v223;
};
var __awaiter = v198 || v224;
const v225 = this.__generator;
const v226 = this && v225;
const v326 = function (thisArg, body) {
    const v231 = function () {
        const v227 = t[0];
        const v228 = v227 & 1;
        if (v228) {
            const v229 = t[1];
            throw v229;
        }
        const v230 = t[1];
        return v230;
    };
    const v232 = [];
    const v233 = [];
    var _ = {};
    _.label = 0;
    _.sent = v231;
    _.trys = v232;
    _.ops = v233;
    var f;
    var y;
    var t;
    var g;
    const v234 = verb(0);
    const v235 = verb(1);
    const v236 = verb(2);
    const v237 = {};
    v237.next = v234;
    v237.throw = v235;
    v237.return = v236;
    const v238 = typeof Symbol;
    const v239 = v238 === 'function';
    const v240 = Symbol.iterator;
    const v241 = function () {
        return this;
    };
    const v242 = v239 && (g[v240] = v241);
    return g = v237, v242, g;
    const verb = function (n) {
        const v245 = function (v) {
            const v243 = [
                n,
                v
            ];
            const v244 = step(v243);
            return v244;
        };
        return v245;
    };
    const step = function (op) {
        if (f) {
            const v246 = new TypeError('Generator is already executing.');
            throw v246;
        }
        while (_) {
            try {
                const v257 = op[1];
                const v258 = (t = t.call(y, v257)).done;
                const v259 = !v258;
                const v260 = y && (t = op[0] & 2 ? y['return'] : op[0] ? y['throw'] || ((t = y['return']) && t.call(y), 0) : y.next) && v259;
                if (f = 1, v260) {
                    return t;
                }
                if (y = 0, t) {
                    const v261 = op[0];
                    const v262 = v261 & 2;
                    const v263 = t.value;
                    op = [
                        v262,
                        v263
                    ];
                }
                const v264 = op[0];
                switch (v264) {
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    const v265 = _.label;
                    const v266 = v265++;
                    v266;
                    const v267 = op[1];
                    const v268 = {};
                    v268.value = v267;
                    v268.done = false;
                    return v268;
                case 5:
                    const v269 = _.label;
                    const v270 = v269++;
                    v270;
                    y = op[1];
                    op = [0];
                    continue;
                case 7:
                    const v271 = _.ops;
                    op = v271.pop();
                    const v272 = _.trys;
                    const v273 = v272.pop();
                    v273;
                    continue;
                default:
                    const v274 = t.length;
                    const v275 = v274 > 0;
                    const v276 = t.length;
                    const v277 = v276 - 1;
                    const v278 = t[v277];
                    const v279 = !(t = _.trys, t = v275 && v278);
                    const v280 = op[0];
                    const v281 = v280 === 6;
                    const v282 = op[0];
                    const v283 = v282 === 2;
                    const v284 = v281 || v283;
                    const v285 = v279 && v284;
                    if (v285) {
                        _ = 0;
                        continue;
                    }
                    const v286 = op[0];
                    const v287 = v286 === 3;
                    const v288 = !t;
                    const v289 = op[1];
                    const v290 = t[0];
                    const v291 = v289 > v290;
                    const v292 = op[1];
                    const v293 = t[3];
                    const v294 = v292 < v293;
                    const v295 = v291 && v294;
                    const v296 = v288 || v295;
                    const v297 = v287 && v296;
                    if (v297) {
                        const v298 = op[1];
                        _.label = v298;
                        break;
                    }
                    const v299 = op[0];
                    const v300 = v299 === 6;
                    const v301 = _.label;
                    const v302 = t[1];
                    const v303 = v301 < v302;
                    const v304 = v300 && v303;
                    if (v304) {
                        const v305 = t[1];
                        _.label = v305;
                        t = op;
                        break;
                    }
                    const v306 = _.label;
                    const v307 = t[2];
                    const v308 = v306 < v307;
                    const v309 = t && v308;
                    if (v309) {
                        const v310 = t[2];
                        _.label = v310;
                        const v311 = _.ops;
                        const v312 = v311.push(op);
                        v312;
                        break;
                    }
                    const v313 = t[2];
                    if (v313) {
                        const v314 = _.ops;
                        const v315 = v314.pop();
                        v315;
                    }
                    const v316 = _.trys;
                    const v317 = v316.pop();
                    v317;
                    continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [
                    6,
                    e
                ];
                y = 0;
            } finally {
                t = 0;
                f = t;
            }
        }
        const v318 = op[0];
        const v319 = v318 & 5;
        if (v319) {
            const v320 = op[1];
            throw v320;
        }
        const v321 = op[0];
        const v322 = op[1];
        const v323 = void 0;
        let v324;
        if (v321) {
            v324 = v322;
        } else {
            v324 = v323;
        }
        const v325 = {};
        v325.value = v324;
        v325.done = true;
        return v325;
    };
};
var __generator = v226 || v326;
const v327 = { value: true };
const v328 = Object.defineProperty(exports, '__esModule', v327);
v328;
const v329 = void 0;
exports.isNull = v329;
exports.asNull = exports.isNull;
exports.isBoolean = exports.asNull;
exports.asBoolean = exports.isBoolean;
exports.isNumber = exports.asBoolean;
exports.asNumber = exports.isNumber;
exports.isString = exports.asNumber;
exports.asString = exports.isString;
exports.isObject = exports.asString;
exports.asObject = exports.isObject;
exports.isArray = exports.asObject;
exports.asArray = exports.isArray;
exports.parse = exports.asArray;
exports.stringify = exports.parse;
exports.loadSync = exports.stringify;
exports.load = exports.loadSync;
var fs = require('fs');
const isNull = function (x) {
    const v330 = x === null;
    return v330;
};
exports.isNull = isNull;
const msg = function (prefix, expected) {
    const v331 = prefix + ' is ';
    let v332;
    if (prefix) {
        v332 = v331;
    } else {
        v332 = '';
    }
    const v333 = v332 + 'not ';
    const v334 = v333 + expected;
    return v334;
};
const asNull = function (x, prefix) {
    const v335 = x !== null;
    if (v335) {
        const v336 = msg(prefix, 'null');
        const v337 = new TypeError(v336);
        throw v337;
    }
    return null;
};
exports.asNull = asNull;
const isBoolean = function (x) {
    const v338 = typeof x;
    const v339 = v338 === 'boolean';
    return v339;
};
exports.isBoolean = isBoolean;
const asBoolean = function (x, prefix) {
    const v340 = typeof x;
    const v341 = v340 !== 'boolean';
    if (v341) {
        const v342 = msg(prefix, 'a boolean');
        const v343 = new TypeError(v342);
        throw v343;
    }
    return x;
};
exports.asBoolean = asBoolean;
const isNumber = function (x) {
    const v344 = typeof x;
    const v345 = v344 === 'number';
    return v345;
};
exports.isNumber = isNumber;
const asNumber = function (x, prefix) {
    const v346 = typeof x;
    const v347 = v346 !== 'number';
    if (v347) {
        const v348 = msg(prefix, 'a number');
        const v349 = new TypeError(v348);
        throw v349;
    }
    return x;
};
exports.asNumber = asNumber;
const isString = function (x) {
    const v350 = typeof x;
    const v351 = v350 === 'string';
    return v351;
};
exports.isString = isString;
const asString = function (x, prefix) {
    const v352 = typeof x;
    const v353 = v352 !== 'string';
    if (v353) {
        const v354 = msg(prefix, 'a string');
        const v355 = new TypeError(v354);
        throw v355;
    }
    return x;
};
exports.asString = asString;
const isObject = function (x) {
    const v356 = !x;
    const v357 = !v356;
    const v358 = typeof x;
    const v359 = v358 === 'object';
    const v360 = v357 && v359;
    const v361 = Array.isArray(x);
    const v362 = !v361;
    const v363 = v360 && v362;
    return v363;
};
exports.isObject = isObject;
const asObject = function (x, prefix) {
    const v364 = isObject(x);
    const v365 = !v364;
    if (v365) {
        const v366 = msg(prefix, 'a JSON object');
        const v367 = new TypeError(v366);
        throw v367;
    }
    return x;
};
exports.asObject = asObject;
const isArray = function (x) {
    const v368 = Array.isArray(x);
    return v368;
};
exports.isArray = isArray;
const asArray = function (x, prefix) {
    const v369 = isArray(x);
    const v370 = !v369;
    if (v370) {
        const v371 = msg(prefix, 'a JSON array');
        const v372 = new TypeError(v371);
        throw v372;
    }
    return x;
};
exports.asArray = asArray;
const parse = function (source) {
    const v373 = JSON.parse(source);
    return v373;
};
exports.parse = parse;
const stringify = function (value) {
    const v374 = JSON.stringify(value);
    return v374;
};
exports.stringify = stringify;
const loadSync = function (path, encoding) {
    const v375 = void 0;
    const v376 = encoding === v375;
    if (v376) {
        encoding = 'utf8';
    }
    const v377 = fs.readFileSync(path, encoding);
    const v378 = parse(v377);
    return v378;
};
exports.loadSync = loadSync;
const load = function (path, encoding) {
    const v379 = void 0;
    const v380 = encoding === v379;
    if (v380) {
        encoding = 'utf8';
    }
    const v381 = void 0;
    const v382 = void 0;
    const v391 = function () {
        var source;
        const v389 = function (_a) {
            const v383 = _a.label;
            switch (v383) {
            case 0:
                const v384 = fs.promises;
                const v385 = v384.readFile(path, encoding);
                const v386 = [
                    4,
                    v385
                ];
                return v386;
            case 1:
                source = _a.sent();
                const v387 = parse(source);
                const v388 = [
                    2,
                    v387
                ];
                return v388;
            }
        };
        const v390 = __generator(this, v389);
        return v390;
    };
    const v392 = __awaiter(this, v381, v382, v391);
    return v392;
};
exports.load = load;
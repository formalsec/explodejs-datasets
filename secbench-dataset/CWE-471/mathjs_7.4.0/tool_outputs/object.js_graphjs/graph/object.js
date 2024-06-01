'use strict';
const v190 = { value: true };
const v191 = Object.defineProperty(exports, '__esModule', v190);
v191;
exports.clone = clone;
exports.mapObject = mapObject;
exports.extend = extend;
exports.deepExtend = deepExtend;
exports.deepStrictEqual = deepStrictEqual;
exports.deepFlatten = deepFlatten;
exports.canDefineProperty = canDefineProperty;
exports.lazy = lazy;
exports.traverse = traverse;
exports.hasOwnProperty = hasOwnProperty;
exports.isLegacyFactory = isLegacyFactory;
exports.get = get;
exports.set = set;
exports.pick = pick;
exports.pickShallow = pickShallow;
exports.values = values;
var _is = require('./is');
const _typeof = function (obj) {
    '@babel/helpers - typeof';
    const v192 = typeof Symbol;
    const v193 = v192 === 'function';
    const v194 = Symbol.iterator;
    const v195 = typeof v194;
    const v196 = v195 === 'symbol';
    const v197 = v193 && v196;
    if (v197) {
        const _typeof = function (obj) {
            const v198 = typeof obj;
            return v198;
        };
        _typeof = _typeof;
    } else {
        const _typeof = function (obj) {
            const v199 = typeof Symbol;
            const v200 = v199 === 'function';
            const v201 = obj && v200;
            const v202 = obj.constructor;
            const v203 = v202 === Symbol;
            const v204 = v201 && v203;
            const v205 = Symbol.prototype;
            const v206 = obj !== v205;
            const v207 = v204 && v206;
            const v208 = typeof obj;
            let v209;
            if (v207) {
                v209 = 'symbol';
            } else {
                v209 = v208;
            }
            return v209;
        };
        _typeof = _typeof;
    }
    const v210 = _typeof(obj);
    return v210;
};
const clone = function (x) {
    var type = _typeof(x);
    const v211 = type === 'number';
    const v212 = type === 'string';
    const v213 = v211 || v212;
    const v214 = type === 'boolean';
    const v215 = v213 || v214;
    const v216 = x === null;
    const v217 = v215 || v216;
    const v218 = x === undefined;
    const v219 = v217 || v218;
    if (v219) {
        return x;
    }
    const v220 = x.clone;
    const v221 = typeof v220;
    const v222 = v221 === 'function';
    if (v222) {
        const v223 = x.clone();
        return v223;
    }
    const v224 = Array.isArray(x);
    if (v224) {
        const v226 = function (value) {
            const v225 = clone(value);
            return v225;
        };
        const v227 = x.map(v226);
        return v227;
    }
    const v228 = x instanceof Date;
    if (v228) {
        const v229 = x.valueOf();
        const v230 = new Date(v229);
        return v230;
    }
    const v231 = _is.isBigNumber;
    const v232 = (0, v231)(x);
    if (v232) {
        return x;
    }
    const v233 = x instanceof RegExp;
    if (v233) {
        const v234 = 'Cannot clone ' + x;
        const v235 = new TypeError(v234);
        throw v235;
    }
    const v236 = mapObject(x, clone);
    return v236;
};
const mapObject = function (object, callback) {
    var clone = {};
    let key;
    for (key in object) {
        const v237 = hasOwnProperty(object, key);
        if (v237) {
            const v238 = object[key];
            const v239 = callback(v238);
            clone[key] = v239;
        }
    }
    return clone;
};
const extend = function (a, b) {
    let prop;
    for (prop in b) {
        const v240 = hasOwnProperty(b, prop);
        if (v240) {
            const v241 = b[prop];
            a[prop] = v241;
        }
    }
    return a;
};
const deepExtend = function (a, b) {
    const v242 = Array.isArray(b);
    if (v242) {
        const v243 = new TypeError('Arrays are not supported by deepExtend');
        throw v243;
    }
    let prop;
    for (prop in b) {
        const v244 = hasOwnProperty(b, prop);
        if (v244) {
            const v245 = b[prop];
            const v246 = b[prop];
            const v247 = v246.constructor;
            const v248 = v247 === Object;
            const v249 = v245 && v248;
            if (v249) {
                const v250 = a[prop];
                const v251 = v250 === undefined;
                if (v251) {
                    const v252 = {};
                    a[prop] = v252;
                }
                const v253 = a[prop];
                const v254 = a[prop];
                const v255 = v254.constructor;
                const v256 = v255 === Object;
                const v257 = v253 && v256;
                if (v257) {
                    const v258 = a[prop];
                    const v259 = b[prop];
                    const v260 = deepExtend(v258, v259);
                    v260;
                } else {
                    const v261 = b[prop];
                    a[prop] = v261;
                }
            } else {
                const v262 = b[prop];
                const v263 = Array.isArray(v262);
                if (v263) {
                    const v264 = new TypeError('Arrays are not supported by deepExtend');
                    throw v264;
                } else {
                    const v265 = b[prop];
                    a[prop] = v265;
                }
            }
        }
    }
    return a;
};
const deepStrictEqual = function (a, b) {
    var prop;
    var i;
    var len;
    const v266 = Array.isArray(a);
    if (v266) {
        const v267 = Array.isArray(b);
        const v268 = !v267;
        if (v268) {
            return false;
        }
        const v269 = a.length;
        const v270 = b.length;
        const v271 = v269 !== v270;
        if (v271) {
            return false;
        }
        (i = 0, len = a.length)
        let v272 = i < len;
        while (v272) {
            const v274 = a[i];
            const v275 = b[i];
            const v276 = deepStrictEqual(v274, v275);
            const v277 = !v276;
            if (v277) {
                return false;
            }
            const v273 = i++;
            v272 = i < len;
        }
        return true;
    } else {
        const v278 = typeof a;
        const v279 = v278 === 'function';
        if (v279) {
            const v280 = a === b;
            return v280;
        } else {
            const v281 = a instanceof Object;
            if (v281) {
                const v282 = Array.isArray(b);
                const v283 = b instanceof Object;
                const v284 = !v283;
                const v285 = v282 || v284;
                if (v285) {
                    return false;
                }
                for (prop in a) {
                    const v286 = prop in b;
                    const v287 = !v286;
                    const v288 = a[prop];
                    const v289 = b[prop];
                    const v290 = deepStrictEqual(v288, v289);
                    const v291 = !v290;
                    const v292 = v287 || v291;
                    if (v292) {
                        return false;
                    }
                }
                for (prop in b) {
                    const v293 = prop in a;
                    const v294 = !v293;
                    const v295 = a[prop];
                    const v296 = b[prop];
                    const v297 = deepStrictEqual(v295, v296);
                    const v298 = !v297;
                    const v299 = v294 || v298;
                    if (v299) {
                        return false;
                    }
                }
                return true;
            } else {
                const v300 = a === b;
                return v300;
            }
        }
    }
};
const deepFlatten = function (nestedObject) {
    var flattenedObject = {};
    const v301 = _deepFlatten(nestedObject, flattenedObject);
    v301;
    return flattenedObject;
};
const _deepFlatten = function (nestedObject, flattenedObject) {
    let prop;
    for (prop in nestedObject) {
        const v302 = hasOwnProperty(nestedObject, prop);
        if (v302) {
            var value = nestedObject[prop];
            const v303 = _typeof(value);
            const v304 = v303 === 'object';
            const v305 = value !== null;
            const v306 = v304 && v305;
            if (v306) {
                const v307 = _deepFlatten(value, flattenedObject);
                v307;
            } else {
                flattenedObject[prop] = value;
            }
        }
    }
};
const canDefineProperty = function () {
    try {
        const v308 = Object.defineProperty;
        if (v308) {
            const v309 = {};
            const v310 = function get() {
            };
            const v311 = { get: v310 };
            const v312 = Object.defineProperty(v309, 'x', v311);
            v312;
            return true;
        }
    } catch (e) {
    }
    return false;
};
const lazy = function (object, prop, valueResolver) {
    var _uninitialized = true;
    var _value;
    const v313 = function get() {
        if (_uninitialized) {
            _value = valueResolver();
            _uninitialized = false;
        }
        return _value;
    };
    const v314 = function set(value) {
        _value = value;
        _uninitialized = false;
    };
    const v315 = {
        get: v313,
        set: v314,
        configurable: true,
        enumerable: true
    };
    const v316 = Object.defineProperty(object, prop, v315);
    v316;
};
const traverse = function (object, path) {
    const v317 = typeof path;
    const v318 = v317 === 'string';
    const v319 = path && v318;
    if (v319) {
        const v320 = path.split('.');
        const v321 = traverse(object, v320);
        return v321;
    }
    var obj = object;
    if (path) {
        var i = 0;
        const v322 = path.length;
        let v323 = i < v322;
        while (v323) {
            var key = path[i];
            const v325 = key in obj;
            const v326 = !v325;
            if (v326) {
                const v327 = {};
                obj[key] = v327;
            }
            obj = obj[key];
            const v324 = i++;
            v323 = i < v322;
        }
    }
    return obj;
};
const hasOwnProperty = function (object, property) {
    const v328 = Object.hasOwnProperty;
    const v329 = v328.call(object, property);
    const v330 = object && v329;
    return v330;
};
const isLegacyFactory = function (object) {
    const v331 = object.factory;
    const v332 = typeof v331;
    const v333 = v332 === 'function';
    const v334 = object && v333;
    return v334;
};
const get = function (object, path) {
    const v335 = typeof path;
    const v336 = v335 === 'string';
    if (v336) {
        const v337 = isPath(path);
        if (v337) {
            const v338 = path.split('.');
            const v339 = get(object, v338);
            return v339;
        } else {
            const v340 = object[path];
            return v340;
        }
    }
    var child = object;
    var i = 0;
    const v341 = path.length;
    let v342 = i < v341;
    while (v342) {
        var key = path[i];
        const v344 = child[key];
        if (child) {
            child = v344;
        } else {
            child = undefined;
        }
        const v343 = i++;
        v342 = i < v341;
    }
    return child;
};
const set = function (object, path, value) {
    const v345 = typeof path;
    const v346 = v345 === 'string';
    if (v346) {
        const v347 = isPath(path);
        if (v347) {
            const v348 = path.split('.');
            const v349 = set(object, v348, value);
            return v349;
        } else {
            object[path] = value;
            return object;
        }
    }
    var child = object;
    var i = 0;
    const v350 = path.length;
    const v351 = v350 - 1;
    let v352 = i < v351;
    while (v352) {
        var key = path[i];
        const v354 = child[key];
        const v355 = v354 === undefined;
        if (v355) {
            const v356 = {};
            child[key] = v356;
        }
        child = child[key];
        const v353 = i++;
        v352 = i < v351;
    }
    const v357 = path.length;
    const v358 = v357 > 0;
    if (v358) {
        const v359 = path.length;
        const v360 = v359 - 1;
        var lastKey = path[v360];
        child[lastKey] = value;
    }
    return object;
};
const pick = function (object, properties, transform) {
    var copy = {};
    var i = 0;
    const v361 = properties.length;
    let v362 = i < v361;
    while (v362) {
        var key = properties[i];
        var value = get(object, key);
        const v364 = value !== undefined;
        if (v364) {
            const v365 = transform(value, key);
            let v366;
            if (transform) {
                v366 = v365;
            } else {
                v366 = value;
            }
            const v367 = set(copy, key, v366);
            v367;
        }
        const v363 = i++;
        v362 = i < v361;
    }
    return copy;
};
const pickShallow = function (object, properties) {
    var copy = {};
    var i = 0;
    const v368 = properties.length;
    let v369 = i < v368;
    while (v369) {
        var key = properties[i];
        var value = object[key];
        const v371 = value !== undefined;
        if (v371) {
            copy[key] = value;
        }
        const v370 = i++;
        v369 = i < v368;
    }
    return copy;
};
const values = function (object) {
    const v372 = Object.keys(object);
    const v374 = function (key) {
        const v373 = object[key];
        return v373;
    };
    const v375 = v372.map(v374);
    return v375;
};
const isPath = function (str) {
    const v376 = str.indexOf('.');
    const v377 = -1;
    const v378 = v376 !== v377;
    return v378;
};
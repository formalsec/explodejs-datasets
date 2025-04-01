'use strict';
const v188 = { value: true };
const v189 = Object.defineProperty(exports, '__esModule', v188);
v189;
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
exports.pickShallow = pickShallow;
exports.values = values;
const _typeof = function (obj) {
    '@babel/helpers - typeof';
    const v190 = typeof Symbol;
    const v191 = v190 === 'function';
    const v192 = Symbol.iterator;
    const v193 = typeof v192;
    const v194 = v193 === 'symbol';
    const v195 = v191 && v194;
    if (v195) {
        const _typeof = function (obj) {
            const v196 = typeof obj;
            return v196;
        };
        _typeof = _typeof;
    } else {
        const _typeof = function (obj) {
            const v197 = typeof Symbol;
            const v198 = v197 === 'function';
            const v199 = obj && v198;
            const v200 = obj.constructor;
            const v201 = v200 === Symbol;
            const v202 = v199 && v201;
            const v203 = Symbol.prototype;
            const v204 = obj !== v203;
            const v205 = v202 && v204;
            const v206 = typeof obj;
            let v207;
            if (v205) {
                v207 = 'symbol';
            } else {
                v207 = v206;
            }
            return v207;
        };
        _typeof = _typeof;
    }
    const v208 = _typeof(obj);
    return v208;
};
const clone = function (x) {
    var type = _typeof(x);
    const v209 = type === 'number';
    const v210 = type === 'string';
    const v211 = v209 || v210;
    const v212 = type === 'boolean';
    const v213 = v211 || v212;
    const v214 = x === null;
    const v215 = v213 || v214;
    const v216 = x === undefined;
    const v217 = v215 || v216;
    if (v217) {
        return x;
    }
    const v218 = x.clone;
    const v219 = typeof v218;
    const v220 = v219 === 'function';
    if (v220) {
        const v221 = x.clone();
        return v221;
    }
    const v222 = Array.isArray(x);
    if (v222) {
        const v224 = function (value) {
            const v223 = clone(value);
            return v223;
        };
        const v225 = x.map(v224);
        return v225;
    }
    const v226 = x instanceof Date;
    if (v226) {
        const v227 = x.valueOf();
        const v228 = new Date(v227);
        return v228;
    }
    const v229 = x instanceof RegExp;
    if (v229) {
        const v230 = 'Cannot clone ' + x;
        const v231 = new TypeError(v230);
        throw v231;
    }
    const v232 = mapObject(x, clone);
    return v232;
};
const mapObject = function (object, callback) {
    var clone = {};
    let key;
    for (key in object) {
        const v233 = hasOwnProperty(object, key);
        if (v233) {
            const v234 = object[key];
            const v235 = callback(v234);
            clone[key] = v235;
        }
    }
    return clone;
};
const extend = function (a, b) {
    let prop;
    for (prop in b) {
        const v236 = hasOwnProperty(b, prop);
        if (v236) {
            const v237 = b[prop];
            a[prop] = v237;
        }
    }
    return a;
};
const deepExtend = function (a, b) {
    const v238 = Array.isArray(b);
    if (v238) {
        const v239 = new TypeError('Arrays are not supported by deepExtend');
        throw v239;
    }
    let prop;
    for (prop in b) {
        const v240 = hasOwnProperty(b, prop);
        if (v240) {
            const v241 = b[prop];
            const v242 = b[prop];
            const v243 = v242.constructor;
            const v244 = v243 === Object;
            const v245 = v241 && v244;
            if (v245) {
                const v246 = a[prop];
                const v247 = v246 === undefined;
                if (v247) {
                    const v248 = {};
                    a[prop] = v248;
                }
                const v249 = a[prop];
                const v250 = a[prop];
                const v251 = v250.constructor;
                const v252 = v251 === Object;
                const v253 = v249 && v252;
                if (v253) {
                    const v254 = a[prop];
                    const v255 = b[prop];
                    const v256 = deepExtend(v254, v255);
                    v256;
                } else {
                    const v257 = b[prop];
                    a[prop] = v257;
                }
            } else {
                const v258 = b[prop];
                const v259 = Array.isArray(v258);
                if (v259) {
                    const v260 = new TypeError('Arrays are not supported by deepExtend');
                    throw v260;
                } else {
                    const v261 = b[prop];
                    a[prop] = v261;
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
    const v262 = Array.isArray(a);
    if (v262) {
        const v263 = Array.isArray(b);
        const v264 = !v263;
        if (v264) {
            return false;
        }
        const v265 = a.length;
        const v266 = b.length;
        const v267 = v265 !== v266;
        if (v267) {
            return false;
        }
        (i = 0, len = a.length)
        let v268 = i < len;
        while (v268) {
            const v270 = a[i];
            const v271 = b[i];
            const v272 = deepStrictEqual(v270, v271);
            const v273 = !v272;
            if (v273) {
                return false;
            }
            const v269 = i++;
            v268 = i < len;
        }
        return true;
    } else {
        const v274 = typeof a;
        const v275 = v274 === 'function';
        if (v275) {
            const v276 = a === b;
            return v276;
        } else {
            const v277 = a instanceof Object;
            if (v277) {
                const v278 = Array.isArray(b);
                const v279 = b instanceof Object;
                const v280 = !v279;
                const v281 = v278 || v280;
                if (v281) {
                    return false;
                }
                for (prop in a) {
                    const v282 = prop in b;
                    const v283 = !v282;
                    const v284 = a[prop];
                    const v285 = b[prop];
                    const v286 = deepStrictEqual(v284, v285);
                    const v287 = !v286;
                    const v288 = v283 || v287;
                    if (v288) {
                        return false;
                    }
                }
                for (prop in b) {
                    const v289 = prop in a;
                    const v290 = !v289;
                    const v291 = a[prop];
                    const v292 = b[prop];
                    const v293 = deepStrictEqual(v291, v292);
                    const v294 = !v293;
                    const v295 = v290 || v294;
                    if (v295) {
                        return false;
                    }
                }
                return true;
            } else {
                const v296 = a === b;
                return v296;
            }
        }
    }
};
const deepFlatten = function (nestedObject) {
    var flattenedObject = {};
    const v297 = _deepFlatten(nestedObject, flattenedObject);
    v297;
    return flattenedObject;
};
const _deepFlatten = function (nestedObject, flattenedObject) {
    let prop;
    for (prop in nestedObject) {
        const v298 = hasOwnProperty(nestedObject, prop);
        if (v298) {
            var value = nestedObject[prop];
            const v299 = _typeof(value);
            const v300 = v299 === 'object';
            const v301 = value !== null;
            const v302 = v300 && v301;
            if (v302) {
                const v303 = _deepFlatten(value, flattenedObject);
                v303;
            } else {
                flattenedObject[prop] = value;
            }
        }
    }
};
const canDefineProperty = function () {
    try {
        const v304 = Object.defineProperty;
        if (v304) {
            const v305 = {};
            const v306 = function get() {
            };
            const v307 = { get: v306 };
            const v308 = Object.defineProperty(v305, 'x', v307);
            v308;
            return true;
        }
    } catch (e) {
    }
    return false;
};
const lazy = function (object, prop, valueResolver) {
    var _uninitialized = true;
    var _value;
    const v309 = function get() {
        if (_uninitialized) {
            _value = valueResolver();
            _uninitialized = false;
        }
        return _value;
    };
    const v310 = function set(value) {
        _value = value;
        _uninitialized = false;
    };
    const v311 = {
        get: v309,
        set: v310,
        configurable: true,
        enumerable: true
    };
    const v312 = Object.defineProperty(object, prop, v311);
    v312;
};
const traverse = function (object, path) {
    const v313 = typeof path;
    const v314 = v313 === 'string';
    const v315 = path && v314;
    if (v315) {
        const v316 = path.split('.');
        const v317 = traverse(object, v316);
        return v317;
    }
    var obj = object;
    if (path) {
        var i = 0;
        const v318 = path.length;
        let v319 = i < v318;
        while (v319) {
            var key = path[i];
            const v321 = key in obj;
            const v322 = !v321;
            if (v322) {
                const v323 = {};
                obj[key] = v323;
            }
            obj = obj[key];
            const v320 = i++;
            v319 = i < v318;
        }
    }
    return obj;
};
const hasOwnProperty = function (object, property) {
    const v324 = Object.hasOwnProperty;
    const v325 = v324.call(object, property);
    const v326 = object && v325;
    return v326;
};
const isLegacyFactory = function (object) {
    const v327 = object.factory;
    const v328 = typeof v327;
    const v329 = v328 === 'function';
    const v330 = object && v329;
    return v330;
};
const get = function (object, path) {
    const v331 = typeof path;
    const v332 = v331 === 'string';
    if (v332) {
        const v333 = isPath(path);
        if (v333) {
            const v334 = path.split('.');
            const v335 = get(object, v334);
            return v335;
        } else {
            const v336 = object[path];
            return v336;
        }
    }
    var child = object;
    var i = 0;
    const v337 = path.length;
    let v338 = i < v337;
    while (v338) {
        var key = path[i];
        const v340 = child[key];
        if (child) {
            child = v340;
        } else {
            child = undefined;
        }
        const v339 = i++;
        v338 = i < v337;
    }
    return child;
};
const set = function (object, path, value) {
    const v341 = typeof path;
    const v342 = v341 === 'string';
    if (v342) {
        const v343 = isPath(path);
        if (v343) {
            const v344 = path.split('.');
            const v345 = set(object, v344, value);
            return v345;
        } else {
            object[path] = value;
            return object;
        }
    }
    var child = object;
    var i = 0;
    const v346 = path.length;
    const v347 = v346 - 1;
    let v348 = i < v347;
    while (v348) {
        var key = path[i];
        const v350 = child[key];
        const v351 = v350 === undefined;
        if (v351) {
            const v352 = {};
            child[key] = v352;
        }
        child = child[key];
        const v349 = i++;
        v348 = i < v347;
    }
    const v353 = path.length;
    const v354 = v353 > 0;
    if (v354) {
        const v355 = path.length;
        const v356 = v355 - 1;
        var lastKey = path[v356];
        child[lastKey] = value;
    }
    return object;
};
const pick = function (object, properties, transform) {
    var copy = {};
    var i = 0;
    const v357 = properties.length;
    let v358 = i < v357;
    while (v358) {
        var key = properties[i];
        var value = get(object, key);
        const v360 = value !== undefined;
        if (v360) {
            const v361 = transform(value, key);
            let v362;
            if (transform) {
                v362 = v361;
            } else {
                v362 = value;
            }
            const v363 = set(copy, key, v362);
            v363;
        }
        const v359 = i++;
        v358 = i < v357;
    }
    return copy;
};
const pickShallow = function (object, properties) {
    var copy = {};
    var i = 0;
    const v364 = properties.length;
    let v365 = i < v364;
    while (v365) {
        var key = properties[i];
        var value = object[key];
        const v367 = value !== undefined;
        if (v367) {
            copy[key] = value;
        }
        const v366 = i++;
        v365 = i < v364;
    }
    return copy;
};
const values = function (object) {
    const v368 = Object.keys(object);
    const v370 = function (key) {
        const v369 = object[key];
        return v369;
    };
    const v371 = v368.map(v370);
    return v371;
};
const isPath = function (str) {
    const v372 = str.indexOf('.');
    const v373 = -1;
    const v374 = v372 !== v373;
    return v374;
};
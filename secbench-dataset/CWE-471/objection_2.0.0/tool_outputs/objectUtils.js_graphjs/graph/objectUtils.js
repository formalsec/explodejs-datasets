'use strict';
const v203 = require('./clone');
const clone = v203.clone;
const cloneDeep = v203.cloneDeep;
const SMALL_ARRAY_SIZE = 10;
const isEmpty = function (item) {
    const v204 = Array.isArray(item);
    if (v204) {
        const v205 = item.length;
        const v206 = v205 === 0;
        return v206;
    } else {
        const v207 = isObject(item);
        if (v207) {
            const v208 = Object.keys(item);
            const v209 = v208.length;
            const v210 = v209 === 0;
            return v210;
        } else {
            return true;
        }
    }
};
const isObject = function (value) {
    const v211 = value !== null;
    const v212 = typeof value;
    const v213 = v212 === 'object';
    const v214 = v211 && v213;
    return v214;
};
const isPlainObject = function (value) {
    const v215 = isObject(value);
    const v216 = value.constructor;
    const v217 = !v216;
    const v218 = value.constructor;
    const v219 = v218 === Object;
    const v220 = v217 || v219;
    const v221 = v215 && v220;
    const v222 = value.toString;
    const v223 = !v222;
    const v224 = value.toString;
    const v225 = Object.prototype;
    const v226 = v225.toString;
    const v227 = v224 === v226;
    const v228 = v223 || v227;
    const v229 = v221 && v228;
    return v229;
};
const isFunction = function (value) {
    const v230 = typeof value;
    const v231 = v230 === 'function';
    return v231;
};
const isRegExp = function (value) {
    const v232 = value instanceof RegExp;
    return v232;
};
const isString = function (value) {
    const v233 = typeof value;
    const v234 = v233 === 'string';
    return v234;
};
const isNumber = function (value) {
    const v235 = typeof value;
    const v236 = v235 === 'number';
    return v236;
};
const asArray = function (value) {
    const v237 = Array.isArray(value);
    const v238 = [value];
    let v239;
    if (v237) {
        v239 = value;
    } else {
        v239 = v238;
    }
    return v239;
};
const asSingle = function (value) {
    const v240 = Array.isArray(value);
    const v241 = value[0];
    let v242;
    if (v240) {
        v242 = v241;
    } else {
        v242 = value;
    }
    return v242;
};
const uniqBy = function (items, keyGetter = null) {
    const map = new Map();
    let i = 0;
    let l = items.length;
    let v243 = i < l;
    while (v243) {
        const item = items[i];
        let key;
        const v245 = keyGetter !== null;
        const v246 = keyGetter(item);
        if (v245) {
            key = v246;
        } else {
            key = item;
        }
        const v247 = map.set(key, item);
        v247;
        const v244 = ++i;
        v243 = i < l;
    }
    const v248 = map.values();
    const v249 = Array.from(v248);
    return v249;
};
const groupBy = function (items, keyGetter = null) {
    const groups = new Map();
    let item;
    for (item of items) {
        let key;
        const v250 = keyGetter !== null;
        const v251 = keyGetter(item);
        if (v250) {
            key = v251;
        } else {
            key = item;
        }
        let group = groups.get(key);
        const v252 = !group;
        if (v252) {
            group = [];
            const v253 = groups.set(key, group);
            v253;
        }
        const v254 = group.push(item);
        v254;
    }
    return groups;
};
const omit = function (obj, keysToOmit) {
    keysToOmit = asArray(keysToOmit);
    const keys = Object.keys(obj);
    const out = {};
    let i = 0;
    let l = keys.length;
    let v255 = i < l;
    while (v255) {
        const key = keys[i];
        const v257 = keysToOmit.includes(key);
        const v258 = !v257;
        if (v258) {
            const v259 = obj[key];
            out[key] = v259;
        }
        const v256 = ++i;
        v255 = i < l;
    }
    return out;
};
const difference = function (arr1, arr2) {
    const arr2Set = new Set(arr2);
    const diff = [];
    let i = 0;
    const v260 = arr1.length;
    let v261 = i < v260;
    while (v261) {
        const value = arr1[i];
        const v263 = arr2Set.has(value);
        const v264 = !v263;
        if (v264) {
            const v265 = diff.push(value);
            v265;
        }
        const v262 = ++i;
        v261 = i < v260;
    }
    return diff;
};
const union = function (arr1, arr2) {
    const v266 = arr1.length;
    const v267 = v266 < SMALL_ARRAY_SIZE;
    const v268 = arr2.length;
    const v269 = v268 < SMALL_ARRAY_SIZE;
    const v270 = v267 && v269;
    if (v270) {
        const v271 = unionSmall(arr1, arr2);
        return v271;
    } else {
        const v272 = unionGeneric(arr1, arr2);
        return v272;
    }
};
const unionSmall = function (arr1, arr2) {
    const all = arr1.slice();
    let i = 0;
    let l = arr2.length;
    let v273 = i < l;
    while (v273) {
        const item = arr2[i];
        const v275 = all.indexOf(item);
        const v276 = -1;
        const v277 = v275 === v276;
        if (v277) {
            const v278 = all.push(item);
            v278;
        }
        const v274 = ++i;
        v273 = i < l;
    }
    return all;
};
const unionGeneric = function (arr1, arr2) {
    const all = new Set();
    let i = 0;
    const v279 = arr1.length;
    let v280 = i < v279;
    while (v280) {
        const v282 = arr1[i];
        const v283 = all.add(v282);
        v283;
        const v281 = ++i;
        v280 = i < v279;
    }
    let i = 0;
    const v284 = arr2.length;
    let v285 = i < v284;
    while (v285) {
        const v287 = arr2[i];
        const v288 = all.add(v287);
        v288;
        const v286 = ++i;
        v285 = i < v284;
    }
    const v289 = Array.from(all);
    return v289;
};
const last = function (arr) {
    const v290 = arr.length;
    const v291 = v290 - 1;
    const v292 = arr[v291];
    return v292;
};
const upperFirst = function (str) {
    const v293 = str[0];
    const v294 = v293.toUpperCase();
    const v295 = str.substring(1);
    const v296 = v294 + v295;
    return v296;
};
const values = function (obj) {
    const v297 = isObject(obj);
    if (v297) {
        const keys = Object.keys(obj);
        const v298 = keys.length;
        const values = new Array(v298);
        let i = 0;
        let l = keys.length;
        let v299 = i < l;
        while (v299) {
            const v301 = keys[i];
            const v302 = obj[v301];
            values[i] = v302;
            const v300 = ++i;
            v299 = i < l;
        }
        return values;
    } else {
        const v303 = [];
        return v303;
    }
};
const once = function (func) {
    let called = false;
    let value = undefined;
    const v305 = function () {
        const v304 = called === false;
        if (v304) {
            called = true;
            value = func.apply(this, arguments);
        }
        return value;
    };
    return v305;
};
const flatten = function (arrays) {
    const out = [];
    let outIdx = 0;
    let i = 0;
    let l = arrays.length;
    let v306 = i < l;
    while (v306) {
        const value = arrays[i];
        const v308 = Array.isArray(value);
        if (v308) {
            let j = 0;
            const v309 = value.length;
            let v310 = j < v309;
            while (v310) {
                const v312 = value[j];
                const v313 = out.push(v312);
                v313;
                const v311 = ++j;
                v310 = j < v309;
            }
        } else {
            const v314 = out.push(value);
            v314;
        }
        const v307 = ++i;
        v306 = i < l;
    }
    return out;
};
const get = function (obj, path) {
    let i = 0;
    let l = path.length;
    let v315 = i < l;
    while (v315) {
        const key = path[i];
        const v317 = isObject(obj);
        const v318 = !v317;
        if (v318) {
            return undefined;
        }
        obj = obj[key];
        const v316 = ++i;
        v315 = i < l;
    }
    return obj;
};
const set = function (obj, path, value) {
    const inputObj = obj;
    let i = 0;
    const v319 = path.length;
    let l = v319 - 1;
    let v320 = i < l;
    while (v320) {
        const key = path[i];
        let child = obj[key];
        const v322 = isObject(child);
        const v323 = !v322;
        if (v323) {
            const v324 = i + 1;
            const nextKey = path[v324];
            const v325 = typeof nextKey;
            const v326 = v325 == 'number';
            const v327 = isNaN(nextKey);
            const v328 = v326 && v327;
            if (v328) {
                child = {};
            } else {
                child = [];
            }
            obj[key] = child;
        }
        obj = child;
        const v321 = ++i;
        v320 = i < l;
    }
    const v329 = path.length;
    const v330 = v329 > 0;
    const v331 = isObject(obj);
    const v332 = v330 && v331;
    if (v332) {
        const v333 = path.length;
        const v334 = v333 - 1;
        const v335 = path[v334];
        obj[v335] = value;
    }
    return inputObj;
};
const zipObject = function (keys, values) {
    const out = {};
    let i = 0;
    let l = keys.length;
    let v336 = i < l;
    while (v336) {
        const v338 = keys[i];
        const v339 = values[i];
        out[v338] = v339;
        const v337 = ++i;
        v336 = i < l;
    }
    return out;
};
const chunk = function (arr, chunkSize) {
    const out = [];
    let i = 0;
    let l = arr.length;
    let v340 = i < l;
    while (v340) {
        const item = arr[i];
        const v342 = out.length;
        const v343 = v342 === 0;
        const v344 = out.length;
        const v345 = v344 - 1;
        const v346 = out[v345];
        const v347 = v346.length;
        const v348 = v347 === chunkSize;
        const v349 = v343 || v348;
        if (v349) {
            const v350 = [];
            const v351 = out.push(v350);
            v351;
        }
        const v352 = out.length;
        const v353 = v352 - 1;
        const v354 = out[v353];
        const v355 = v354.push(item);
        v355;
        const v341 = ++i;
        v340 = i < l;
    }
    return out;
};
const jsonEquals = function (val1, val2) {
    const v356 = jsonEqualsBase(val1, val2, compareStrict);
    return v356;
};
const jsonEqualsBase = function (val1, val2, compare) {
    const v357 = val1 === val2;
    if (v357) {
        return true;
    }
    const v358 = jsonEqualsSlowPath(val1, val2, compare);
    return v358;
};
const jsonEqualsSlowPath = function (val1, val2, compare) {
    const v359 = typeof val1;
    const type1 = v359;
    const v360 = typeof val2;
    const type2 = v360;
    const v361 = type1 === 'object';
    const v362 = compare(val1, null);
    const v363 = !v362;
    const isNonNullObject1 = v361 && v363;
    const v364 = type2 === 'object';
    const v365 = compare(val2, null);
    const v366 = !v365;
    const isNonNullObject2 = v364 && v366;
    const v367 = isNonNullObject1 && isNonNullObject2;
    if (v367) {
        const isArray1 = Array.isArray(val1);
        const isArray2 = Array.isArray(val2);
        const v368 = isArray1 && isArray2;
        if (v368) {
            const v369 = jsonEqualsArray(val1, val2, compare);
            return v369;
        } else {
            const v370 = !isArray1;
            const v371 = !isArray2;
            const v372 = v370 && v371;
            if (v372) {
                const v373 = jsonEqualsObject(val1, val2, compare);
                return v373;
            } else {
                return false;
            }
        }
    } else {
        const v374 = isNonNullObject1 !== isNonNullObject2;
        if (v374) {
            return false;
        } else {
            const v375 = compare(val1, val2);
            return v375;
        }
    }
};
const jsonEqualsArray = function (arr1, arr2, compare) {
    const v376 = arr1.length;
    const v377 = arr2.length;
    const v378 = v376 !== v377;
    if (v378) {
        return false;
    }
    let i = 0;
    let l = arr1.length;
    let v379 = i < l;
    while (v379) {
        const v381 = arr1[i];
        const v382 = arr2[i];
        const v383 = jsonEqualsBase(v381, v382, compare);
        const v384 = !v383;
        if (v384) {
            return false;
        }
        const v380 = ++i;
        v379 = i < l;
    }
    return true;
};
const jsonEqualsObject = function (obj1, obj2, compare) {
    const v385 = obj1.constructor;
    const v386 = v385 === Date;
    const v387 = obj2.constructor;
    const v388 = v387 === Date;
    const v389 = v386 && v388;
    if (v389) {
        const v390 = equalsDate(obj1, obj2);
        return v390;
    }
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    const v391 = keys1.length;
    const v392 = keys2.length;
    const v393 = v391 !== v392;
    if (v393) {
        return false;
    }
    let i = 0;
    let l = keys1.length;
    let v394 = i < l;
    while (v394) {
        const key = keys1[i];
        const v396 = obj1[key];
        const v397 = obj2[key];
        const v398 = jsonEqualsBase(v396, v397, compare);
        const v399 = !v398;
        if (v399) {
            return false;
        }
        const v395 = ++i;
        v394 = i < l;
    }
    return true;
};
const equalsDate = function (date1, date2) {
    const v400 = date1.getTime();
    const v401 = date2.getTime();
    const v402 = v400 === v401;
    return v402;
};
const compareStrict = function (val1, val2) {
    const v403 = val1 === val2;
    return v403;
};
const v404 = {};
v404.isEmpty = isEmpty;
v404.isString = isString;
v404.isRegExp = isRegExp;
v404.isObject = isObject;
v404.isNumber = isNumber;
v404.isFunction = isFunction;
v404.jsonEquals = jsonEquals;
v404.isPlainObject = isPlainObject;
v404.difference = difference;
v404.upperFirst = upperFirst;
v404.zipObject = zipObject;
v404.cloneDeep = cloneDeep;
v404.asSingle = asSingle;
v404.asArray = asArray;
v404.flatten = flatten;
v404.groupBy = groupBy;
v404.uniqBy = uniqBy;
v404.values = values;
v404.union = union;
v404.chunk = chunk;
v404.clone = clone;
v404.omit = omit;
v404.once = once;
v404.last = last;
v404.get = get;
v404.set = set;
module.exports = v404;
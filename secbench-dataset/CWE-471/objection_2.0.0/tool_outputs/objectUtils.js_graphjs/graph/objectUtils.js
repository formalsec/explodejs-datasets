'use strict';
const v200 = require('./clone');
const clone = v200.clone;
const cloneDeep = v200.cloneDeep;
const SMALL_ARRAY_SIZE = 10;
const isEmpty = function (item) {
    const v201 = Array.isArray(item);
    if (v201) {
        const v202 = item.length;
        const v203 = v202 === 0;
        return v203;
    } else {
        const v204 = isObject(item);
        if (v204) {
            const v205 = Object.keys(item);
            const v206 = v205.length;
            const v207 = v206 === 0;
            return v207;
        } else {
            return true;
        }
    }
};
const isObject = function (value) {
    const v208 = value !== null;
    const v209 = typeof value;
    const v210 = v209 === 'object';
    const v211 = v208 && v210;
    return v211;
};
const isPlainObject = function (value) {
    const v212 = isObject(value);
    const v213 = value.constructor;
    const v214 = !v213;
    const v215 = value.constructor;
    const v216 = v215 === Object;
    const v217 = v214 || v216;
    const v218 = v212 && v217;
    const v219 = value.toString;
    const v220 = !v219;
    const v221 = value.toString;
    const v222 = Object.prototype;
    const v223 = v222.toString;
    const v224 = v221 === v223;
    const v225 = v220 || v224;
    const v226 = v218 && v225;
    return v226;
};
const isFunction = function (value) {
    const v227 = typeof value;
    const v228 = v227 === 'function';
    return v228;
};
const isRegExp = function (value) {
    const v229 = value instanceof RegExp;
    return v229;
};
const isString = function (value) {
    const v230 = typeof value;
    const v231 = v230 === 'string';
    return v231;
};
const isNumber = function (value) {
    const v232 = typeof value;
    const v233 = v232 === 'number';
    return v233;
};
const asArray = function (value) {
    const v234 = Array.isArray(value);
    const v235 = [value];
    let v236;
    if (v234) {
        v236 = value;
    } else {
        v236 = v235;
    }
    return v236;
};
const asSingle = function (value) {
    const v237 = Array.isArray(value);
    const v238 = value[0];
    let v239;
    if (v237) {
        v239 = v238;
    } else {
        v239 = value;
    }
    return v239;
};
const uniqBy = function (items, keyGetter = null) {
    const map = new Map();
    let i = 0;
    let l = items.length;
    let v240 = i < l;
    while (v240) {
        const item = items[i];
        let key;
        const v242 = keyGetter !== null;
        const v243 = keyGetter(item);
        if (v242) {
            key = v243;
        } else {
            key = item;
        }
        const v244 = map.set(key, item);
        v244;
        const v241 = ++i;
        v240 = i < l;
    }
    const v245 = map.values();
    const v246 = Array.from(v245);
    return v246;
};
const groupBy = function (items, keyGetter = null) {
    const groups = new Map();
    let item;
    for (item of items) {
        let key;
        const v247 = keyGetter !== null;
        const v248 = keyGetter(item);
        if (v247) {
            key = v248;
        } else {
            key = item;
        }
        let group = groups.get(key);
        const v249 = !group;
        if (v249) {
            group = [];
            const v250 = groups.set(key, group);
            v250;
        }
        const v251 = group.push(item);
        v251;
    }
    return groups;
};
const omit = function (obj, keysToOmit) {
    keysToOmit = asArray(keysToOmit);
    const keys = Object.keys(obj);
    const out = {};
    let i = 0;
    let l = keys.length;
    let v252 = i < l;
    while (v252) {
        const key = keys[i];
        const v254 = keysToOmit.includes(key);
        const v255 = !v254;
        if (v255) {
            const v256 = obj[key];
            out[key] = v256;
        }
        const v253 = ++i;
        v252 = i < l;
    }
    return out;
};
const difference = function (arr1, arr2) {
    const arr2Set = new Set(arr2);
    const diff = [];
    let i = 0;
    const v257 = arr1.length;
    let v258 = i < v257;
    while (v258) {
        const value = arr1[i];
        const v260 = arr2Set.has(value);
        const v261 = !v260;
        if (v261) {
            const v262 = diff.push(value);
            v262;
        }
        const v259 = ++i;
        v258 = i < v257;
    }
    return diff;
};
const union = function (arr1, arr2) {
    const v263 = arr1.length;
    const v264 = v263 < SMALL_ARRAY_SIZE;
    const v265 = arr2.length;
    const v266 = v265 < SMALL_ARRAY_SIZE;
    const v267 = v264 && v266;
    if (v267) {
        const v268 = unionSmall(arr1, arr2);
        return v268;
    } else {
        const v269 = unionGeneric(arr1, arr2);
        return v269;
    }
};
const unionSmall = function (arr1, arr2) {
    const all = arr1.slice();
    let i = 0;
    let l = arr2.length;
    let v270 = i < l;
    while (v270) {
        const item = arr2[i];
        const v272 = all.indexOf(item);
        const v273 = -1;
        const v274 = v272 === v273;
        if (v274) {
            const v275 = all.push(item);
            v275;
        }
        const v271 = ++i;
        v270 = i < l;
    }
    return all;
};
const unionGeneric = function (arr1, arr2) {
    const all = new Set();
    let i = 0;
    const v276 = arr1.length;
    let v277 = i < v276;
    while (v277) {
        const v279 = arr1[i];
        const v280 = all.add(v279);
        v280;
        const v278 = ++i;
        v277 = i < v276;
    }
    let i = 0;
    const v281 = arr2.length;
    let v282 = i < v281;
    while (v282) {
        const v284 = arr2[i];
        const v285 = all.add(v284);
        v285;
        const v283 = ++i;
        v282 = i < v281;
    }
    const v286 = Array.from(all);
    return v286;
};
const last = function (arr) {
    const v287 = arr.length;
    const v288 = v287 - 1;
    const v289 = arr[v288];
    return v289;
};
const upperFirst = function (str) {
    const v290 = str[0];
    const v291 = v290.toUpperCase();
    const v292 = str.substring(1);
    const v293 = v291 + v292;
    return v293;
};
const values = function (obj) {
    const v294 = isObject(obj);
    if (v294) {
        const keys = Object.keys(obj);
        const v295 = keys.length;
        const values = new Array(v295);
        let i = 0;
        let l = keys.length;
        let v296 = i < l;
        while (v296) {
            const v298 = keys[i];
            const v299 = obj[v298];
            values[i] = v299;
            const v297 = ++i;
            v296 = i < l;
        }
        return values;
    } else {
        const v300 = [];
        return v300;
    }
};
const once = function (func) {
    let called = false;
    let value = undefined;
    const v302 = function () {
        const v301 = called === false;
        if (v301) {
            called = true;
            value = func.apply(this, arguments);
        }
        return value;
    };
    return v302;
};
const flatten = function (arrays) {
    const out = [];
    let outIdx = 0;
    let i = 0;
    let l = arrays.length;
    let v303 = i < l;
    while (v303) {
        const value = arrays[i];
        const v305 = Array.isArray(value);
        if (v305) {
            let j = 0;
            const v306 = value.length;
            let v307 = j < v306;
            while (v307) {
                const v309 = value[j];
                const v310 = out.push(v309);
                v310;
                const v308 = ++j;
                v307 = j < v306;
            }
        } else {
            const v311 = out.push(value);
            v311;
        }
        const v304 = ++i;
        v303 = i < l;
    }
    return out;
};
const get = function (obj, path) {
    let i = 0;
    let l = path.length;
    let v312 = i < l;
    while (v312) {
        const key = path[i];
        const v314 = isObject(obj);
        const v315 = !v314;
        if (v315) {
            return undefined;
        }
        obj = obj[key];
        const v313 = ++i;
        v312 = i < l;
    }
    return obj;
};
const set = function (obj, path, value) {
    const inputObj = obj;
    let i = 0;
    const v316 = path.length;
    let l = v316 - 1;
    let v317 = i < l;
    while (v317) {
        const key = path[i];
        let child = obj[key];
        const v319 = isObject(child);
        const v320 = !v319;
        if (v320) {
            const v321 = i + 1;
            const nextKey = path[v321];
            const v322 = isNaN(nextKey);
            if (v322) {
                child = {};
            } else {
                child = [];
            }
            obj[key] = child;
        }
        obj = child;
        const v318 = ++i;
        v317 = i < l;
    }
    const v323 = path.length;
    const v324 = v323 > 0;
    const v325 = isObject(obj);
    const v326 = v324 && v325;
    if (v326) {
        const v327 = path.length;
        const v328 = v327 - 1;
        const v329 = path[v328];
        obj[v329] = value;
    }
    return inputObj;
};
const zipObject = function (keys, values) {
    const out = {};
    let i = 0;
    let l = keys.length;
    let v330 = i < l;
    while (v330) {
        const v332 = keys[i];
        const v333 = values[i];
        out[v332] = v333;
        const v331 = ++i;
        v330 = i < l;
    }
    return out;
};
const chunk = function (arr, chunkSize) {
    const out = [];
    let i = 0;
    let l = arr.length;
    let v334 = i < l;
    while (v334) {
        const item = arr[i];
        const v336 = out.length;
        const v337 = v336 === 0;
        const v338 = out.length;
        const v339 = v338 - 1;
        const v340 = out[v339];
        const v341 = v340.length;
        const v342 = v341 === chunkSize;
        const v343 = v337 || v342;
        if (v343) {
            const v344 = [];
            const v345 = out.push(v344);
            v345;
        }
        const v346 = out.length;
        const v347 = v346 - 1;
        const v348 = out[v347];
        const v349 = v348.push(item);
        v349;
        const v335 = ++i;
        v334 = i < l;
    }
    return out;
};
const jsonEquals = function (val1, val2) {
    const v350 = jsonEqualsBase(val1, val2, compareStrict);
    return v350;
};
const jsonEqualsBase = function (val1, val2, compare) {
    const v351 = val1 === val2;
    if (v351) {
        return true;
    }
    const v352 = jsonEqualsSlowPath(val1, val2, compare);
    return v352;
};
const jsonEqualsSlowPath = function (val1, val2, compare) {
    const v353 = typeof val1;
    const type1 = v353;
    const v354 = typeof val2;
    const type2 = v354;
    const v355 = type1 === 'object';
    const v356 = compare(val1, null);
    const v357 = !v356;
    const isNonNullObject1 = v355 && v357;
    const v358 = type2 === 'object';
    const v359 = compare(val2, null);
    const v360 = !v359;
    const isNonNullObject2 = v358 && v360;
    const v361 = isNonNullObject1 && isNonNullObject2;
    if (v361) {
        const isArray1 = Array.isArray(val1);
        const isArray2 = Array.isArray(val2);
        const v362 = isArray1 && isArray2;
        if (v362) {
            const v363 = jsonEqualsArray(val1, val2, compare);
            return v363;
        } else {
            const v364 = !isArray1;
            const v365 = !isArray2;
            const v366 = v364 && v365;
            if (v366) {
                const v367 = jsonEqualsObject(val1, val2, compare);
                return v367;
            } else {
                return false;
            }
        }
    } else {
        const v368 = isNonNullObject1 !== isNonNullObject2;
        if (v368) {
            return false;
        } else {
            const v369 = compare(val1, val2);
            return v369;
        }
    }
};
const jsonEqualsArray = function (arr1, arr2, compare) {
    const v370 = arr1.length;
    const v371 = arr2.length;
    const v372 = v370 !== v371;
    if (v372) {
        return false;
    }
    let i = 0;
    let l = arr1.length;
    let v373 = i < l;
    while (v373) {
        const v375 = arr1[i];
        const v376 = arr2[i];
        const v377 = jsonEqualsBase(v375, v376, compare);
        const v378 = !v377;
        if (v378) {
            return false;
        }
        const v374 = ++i;
        v373 = i < l;
    }
    return true;
};
const jsonEqualsObject = function (obj1, obj2, compare) {
    const v379 = obj1.constructor;
    const v380 = v379 === Date;
    const v381 = obj2.constructor;
    const v382 = v381 === Date;
    const v383 = v380 && v382;
    if (v383) {
        const v384 = equalsDate(obj1, obj2);
        return v384;
    }
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    const v385 = keys1.length;
    const v386 = keys2.length;
    const v387 = v385 !== v386;
    if (v387) {
        return false;
    }
    let i = 0;
    let l = keys1.length;
    let v388 = i < l;
    while (v388) {
        const key = keys1[i];
        const v390 = obj1[key];
        const v391 = obj2[key];
        const v392 = jsonEqualsBase(v390, v391, compare);
        const v393 = !v392;
        if (v393) {
            return false;
        }
        const v389 = ++i;
        v388 = i < l;
    }
    return true;
};
const equalsDate = function (date1, date2) {
    const v394 = date1.getTime();
    const v395 = date2.getTime();
    const v396 = v394 === v395;
    return v396;
};
const compareStrict = function (val1, val2) {
    const v397 = val1 === val2;
    return v397;
};
const v398 = {};
v398.isEmpty = isEmpty;
v398.isString = isString;
v398.isRegExp = isRegExp;
v398.isObject = isObject;
v398.isNumber = isNumber;
v398.isFunction = isFunction;
v398.jsonEquals = jsonEquals;
v398.isPlainObject = isPlainObject;
v398.difference = difference;
v398.upperFirst = upperFirst;
v398.zipObject = zipObject;
v398.cloneDeep = cloneDeep;
v398.asSingle = asSingle;
v398.asArray = asArray;
v398.flatten = flatten;
v398.groupBy = groupBy;
v398.uniqBy = uniqBy;
v398.values = values;
v398.union = union;
v398.chunk = chunk;
v398.clone = clone;
v398.omit = omit;
v398.once = once;
v398.last = last;
v398.get = get;
v398.set = set;
module.exports = v398;
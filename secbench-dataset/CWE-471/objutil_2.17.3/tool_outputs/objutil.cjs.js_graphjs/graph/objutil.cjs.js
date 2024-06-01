'use strict';
var keys = Object.keys;
var getPrototypeOf = Object.getPrototypeOf;
var ref = Object.prototype;
var toString = ref.toString;
var hasOwnProperty = ref.hasOwnProperty;
var isArray = Array.isArray;
const is = function (val, type) {
    const v241 = toString.call(val);
    const v242 = '[object ' + type;
    const v243 = v242 + ']';
    const v244 = v241 === v243;
    return v244;
};
const own = function (obj, key) {
    const v245 = hasOwnProperty.call(obj, key);
    return v245;
};
const isPOJO = function (x) {
    var prototype;
    const v246 = is(x, 'Object');
    const v247 = prototype === null;
    const v248 = {};
    const v249 = getPrototypeOf(v248);
    const v250 = prototype === v249;
    const v251 = v247 || v250;
    const v252 = v246 && (prototype = getPrototypeOf(x), v251);
    return v252;
};
const isIterable = function (val) {
    const v253 = isPrimitive(val);
    const v254 = !v253;
    return v254;
};
const isPrimitive = function (val) {
    const v255 = val == null;
    const v256 = typeof val;
    const v257 = v256 !== 'function';
    const v258 = typeof val;
    const v259 = v258 !== 'object';
    const v260 = v257 && v259;
    const v261 = v255 || v260;
    return v261;
};
const deepIt = function (a, b, callback, path, _cache) {
    const v262 = _cache == null;
    const v263 = new Map();
    if (v262) {
        _cache = v263;
    } else {
        _cache = _cache;
    }
    const v264 = [];
    path = path || v264;
    const v265 = isPrimitive(b);
    if (v265) {
        return a;
    }
    const v266 = _cache.set(b);
    v266;
    let key;
    for (key in b) {
        const v267 = own(b, key);
        const v268 = !v267;
        if (v268) {
            continue;
        }
        var ret = callback(a, b, key, path);
        const v269 = ret === false;
        if (v269) {
            break;
        } else {
            const v270 = ret === 0;
            if (v270) {
                continue;
            }
        }
        const v271 = b[key];
        const v272 = isPrimitive(v271);
        const v273 = !v272;
        const v274 = a[key];
        const v275 = isPrimitive(v274);
        const v276 = !v275;
        const v277 = v273 && v276;
        const v278 = b[key];
        const v279 = _cache.has(v278);
        const v280 = !v279;
        const v281 = v277 && v280;
        if (v281) {
            const v282 = a[key];
            const v283 = b[key];
            const v284 = path.concat(key);
            const v285 = deepIt(v282, v283, callback, v284, _cache);
            v285;
        }
    }
    return a;
};
const forEach = function (obj, callback) {
    const v286 = isPrimitive(obj);
    const v287 = !v286;
    if (v287) {
        let key;
        for (key in obj) {
            const v288 = own(obj, key);
            const v289 = obj[key];
            const v290 = callback(v289, key, obj);
            const v291 = v290 === false;
            const v292 = v288 && v291;
            if (v292) {
                break;
            }
        }
    }
    return obj;
};
const map = function (obj, fn) {
    const v293 = keys(obj);
    const v296 = function (key) {
        const v294 = obj[key];
        const v295 = fn(v294, key, obj);
        return v295;
    };
    const v297 = v293.map(v296);
    return v297;
};
const some = function (obj, fn) {
    const v298 = keys(obj);
    const v301 = function (key) {
        const v299 = obj[key];
        const v300 = fn(v299, key, obj);
        return v300;
    };
    const v302 = v298.some(v301);
    return v302;
};
const every = function (obj, fn) {
    const v303 = keys(obj);
    const v306 = function (key) {
        const v304 = obj[key];
        const v305 = fn(v304, key, obj);
        return v305;
    };
    const v307 = v303.every(v306);
    return v307;
};
const getPath = function (path) {
    const v308 = typeof path;
    const v309 = v308 === 'string';
    if (v309) {
        path = path.split('.');
    }
    return path;
};
const get = function (obj, path, errNotFound) {
    var n = obj;
    path = getPath(path);
    var i = 0;
    var len = path.length;
    let v310 = i < len;
    while (v310) {
        const v312 = isPrimitive(n);
        const v313 = path[i];
        const v314 = v313 in n;
        const v315 = !v314;
        const v316 = v312 || v315;
        if (v316) {
            const v317 = new Error('NotFound');
            const v318 = [
                undefined,
                1
            ];
            let v319;
            if (errNotFound) {
                v319 = v317;
            } else {
                v319 = v318;
            }
            return v319;
        }
        const v320 = path[i];
        n = n[v320];
        const v311 = i++;
        v310 = i < len;
    }
    const v321 = [n];
    let v322;
    if (errNotFound) {
        v322 = n;
    } else {
        v322 = v321;
    }
    return v322;
};
const ensure = function (obj, path, defaultValue, descriptor) {
    path = getPath(path);
    var arr = get(obj, path);
    const v323 = arr[1];
    if (v323) {
        const v324 = set(obj, path, defaultValue, descriptor);
        v324;
        arr[0] = defaultValue;
    }
    return arr;
};
const unset = function (obj, path) {
    path = getPath(path);
    var len = path.length;
    const v325 = isPrimitive(obj);
    const v326 = !len;
    const v327 = v325 || v326;
    if (v327) {
        return;
    }
    const v328 = -1;
    const v329 = path.slice(0, v328);
    var arr = get(obj, v329);
    const v330 = arr[1];
    const v331 = arr[0];
    const v332 = isPrimitive(v331);
    const v333 = v330 || v332;
    if (v333) {
        return false;
    }
    const v334 = arr[0];
    const v335 = len - 1;
    const v336 = path[v335];
    const v337 = v334[v336];
    const v338 = delete v337;
    return v338;
};
const set = function (obj, path, value, descriptor) {
    path = getPath(path);
    const v339 = isPrimitive(obj);
    const v340 = path.length;
    const v341 = !v340;
    const v342 = v339 || v341;
    if (v342) {
        return obj;
    }
    var p;
    var n = obj;
    var i = 0;
    const v343 = path.length;
    var len = v343 - 1;
    let v344 = i < len;
    while (v344) {
        p = path[i];
        const v346 = n[p];
        const v347 = isPrimitive(v346);
        if (v347) {
            const v348 = p in n;
            if (v348) {
                const v349 = new Error('cannot set non-object path');
                return v349;
            } else {
                const v350 = {};
                n[p] = v350;
            }
        }
        n = n[p];
        const v345 = i++;
        v344 = i < len;
    }
    p = path[i];
    const v351 = isPrimitive(descriptor);
    const v352 = !v351;
    if (v352) {
        const v353 = [
            'c',
            'configurable'
        ];
        const v354 = got(descriptor, v353, false);
        const v355 = !v354;
        const v356 = !v355;
        const v357 = [
            'e',
            'enumerable'
        ];
        const v358 = got(descriptor, v357, false);
        const v359 = !v358;
        const v360 = !v359;
        const v361 = [
            'w',
            'writable'
        ];
        const v362 = got(descriptor, v361, false);
        const v363 = !v362;
        const v364 = !v363;
        const v365 = {
            value: value,
            configurable: v356,
            enumerable: v360,
            writable: v364
        };
        const v366 = Object.defineProperty(n, p, v365);
        v366;
    } else {
        n[p] = value;
    }
    return obj;
};
const got = function (obj, propArr, defaultValue) {
    const v367 = typeof propArr;
    const v368 = v367 == 'string';
    if (v368) {
        propArr = [propArr];
    }
    var arr;
    var i = 0;
    const v369 = propArr.length;
    let v370 = i < v369;
    while (v370) {
        const v372 = propArr[i];
        arr = get(obj, v372);
        const v373 = arr.length;
        const v374 = v373 === 1;
        if (v374) {
            const v375 = arr[0];
            return v375;
        }
        const v371 = i++;
        v370 = i < v369;
    }
    return defaultValue;
};
const visit = function (obj, fn) {
    const v379 = function (a, b, key, path) {
        const v376 = a[key];
        const v377 = {
            val: v376,
            key: key,
            path: path,
            col: a
        };
        const v378 = fn(v377);
        return v378;
    };
    const v380 = deepIt(obj, obj, v379);
    return v380;
};
const invert = function (obj) {
    var newObj = {};
    const v384 = function (a, b, key) {
        const v381 = b[key];
        const v382 = isPrimitive(v381);
        if (v382) {
            const v383 = b[key];
            a[v383] = key;
        }
    };
    const v385 = deepIt(newObj, obj, v384);
    v385;
    return newObj;
};
const _assignHelper = function (target, arg, cb) {
    const v386 = target == null;
    if (v386) {
        const v387 = new TypeError('null target');
        throw v387;
    }
    var to = Object(target);
    var i = 1;
    var len = arg.length;
    let v388 = i < len;
    while (v388) {
        const v390 = arg[i];
        const v391 = deepIt(to, v390, cb);
        v391;
        const v389 = i++;
        v388 = i < len;
    }
    return to;
};
const assign = function (target, arg) {
    const v393 = function (a, b, key, path) {
        const v392 = b[key];
        a[key] = v392;
        return 0;
    };
    const v394 = _assignHelper(target, arguments, v393);
    return v394;
};
const merge = function (target, arg) {
    const v406 = function (a, b, key, path) {
        var bval = b[key];
        const v395 = bval !== undefined;
        const v396 = isPrimitive(bval);
        const v397 = v395 && v396;
        if (v397) {
            a[key] = bval;
        } else {
            const v398 = key in a;
            const v399 = !v398;
            if (v399) {
                const v400 = isArray(bval);
                const v401 = [];
                const v402 = isPOJO(bval);
                const v403 = {};
                let v404;
                if (v402) {
                    v404 = v403;
                } else {
                    v404 = bval;
                }
                let v405;
                if (v400) {
                    v405 = v401;
                } else {
                    v405 = v404;
                }
                a[key] = v405;
            }
        }
    };
    const v407 = _assignHelper(target, arguments, v406);
    return v407;
};
const defaults = function (target, arg) {
    const v408 = {};
    target = target || v408;
    const v412 = function (a, b, key, path) {
        const v409 = key in a;
        const v410 = !v409;
        if (v410) {
            const v411 = b[key];
            a[key] = v411;
        }
    };
    const v413 = _assignHelper(target, arguments, v412);
    return v413;
};
const filter = function (obj, predicate) {
    var ret = [];
    const v420 = function (a, b, key, path) {
        const v414 = a[key];
        const v415 = {
            val: v414,
            key: key,
            path: path,
            col: a
        };
        const v416 = predicate(v415);
        if (v416) {
            const v417 = path.concat(key);
            const v418 = v417.join('.');
            const v419 = ret.push(v418);
            v419;
        }
    };
    const v421 = deepIt(obj, obj, v420);
    v421;
    return ret;
};
const remove = function (x, y, force) {
    const v429 = function (a, b, key) {
        const v422 = b[key];
        const v423 = isPrimitive(v422);
        const v424 = b[key];
        const v425 = force || v424;
        const v426 = v423 && v425;
        if (v426) {
            const v427 = a[key];
            const v428 = delete v427;
            v428;
        }
    };
    const v430 = deepIt(x, y, v429);
    return v430;
};
const pick = function (obj, props, force) {
    var o = {};
    const v431 = isArray(props);
    if (v431) {
        const v434 = function (key) {
            const v432 = key in obj;
            if (v432) {
                const v433 = obj[key];
                o[key] = v433;
            }
        };
        const v435 = forEach(props, v434);
        v435;
        return o;
    }
    const v452 = function (a, b, key, path) {
        var d;
        const v436 = path.concat(key);
        var c = get(obj, v436);
        const v437 = b[key];
        const v438 = force || v437;
        const v439 = !v438;
        const v440 = c[1];
        const v441 = v439 || v440;
        if (v441) {
            return;
        }
        d = c[0];
        const v442 = isPrimitive(d);
        const v443 = !v442;
        if (v443) {
            const v444 = isArray(d);
            const v445 = [];
            const v446 = isPOJO(d);
            const v447 = {};
            let v448;
            if (v446) {
                v448 = v447;
            } else {
                v448 = d;
            }
            let v449;
            if (v444) {
                v449 = v445;
            } else {
                v449 = v448;
            }
            a[key] = v449;
        }
        const v450 = b[key];
        const v451 = isPrimitive(v450);
        if (v451) {
            a[key] = d;
        }
    };
    const v453 = deepIt(o, props, v452);
    return v453;
};
const isEqual = function (x, y, isStrict, validFn) {
    var equal = true;
    var compare = function (a, b, key, path) {
        const v454 = typeof validFn;
        const v455 = v454 === 'function';
        const v456 = validFn(a, b, key, path);
        const v457 = !v456;
        const v458 = v455 && v457;
        if (v458) {
            return;
        }
        const v459 = a[key];
        var isPrimitiveA = isPrimitive(v459);
        const v460 = b[key];
        var isPrimitiveB = isPrimitive(v460);
        const v461 = isPrimitiveA || isPrimitiveB;
        if (v461) {
            const v462 = b[key];
            const v463 = a[key];
            const v464 = v462 !== v463;
            const v465 = isPrimitiveA !== isPrimitiveB;
            const v466 = b[key];
            const v467 = a[key];
            const v468 = v466 != v467;
            const v469 = v465 || v468;
            let v470;
            if (isStrict) {
                v470 = v464;
            } else {
                v470 = v469;
            }
            if (v470) {
                return equal = false;
            }
        } else {
            const v471 = a[key];
            const v472 = keys(v471);
            const v473 = v472.length;
            const v474 = b[key];
            const v475 = keys(v474);
            const v476 = v475.length;
            const v477 = v473 !== v476;
            if (v477) {
                return equal = false;
            }
        }
    };
    const v478 = [x];
    const v479 = [y];
    const v480 = deepIt(v478, v479, compare);
    v480;
    return equal;
};
exports.is = is;
exports.own = own;
exports.isPOJO = isPOJO;
exports.isIterable = isIterable;
exports.isPrimitive = isPrimitive;
exports.deepIt = deepIt;
exports.forEach = forEach;
exports.map = map;
exports.some = some;
exports.every = every;
exports.get = get;
exports.got = got;
exports.set = set;
exports.unset = unset;
exports.ensure = ensure;
exports.invert = invert;
exports.assign = assign;
exports.extend = assign;
exports.merge = merge;
exports.remove = remove;
exports.pick = pick;
exports.defaults = defaults;
exports.isEqual = isEqual;
exports.visit = visit;
exports.filter = filter;
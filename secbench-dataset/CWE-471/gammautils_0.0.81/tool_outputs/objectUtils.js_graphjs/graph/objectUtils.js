'use strict';
var util = require('util');
const v214 = module.exports;
v214.__name = 'Object';
const isUndefined = function (object) {
    const v215 = typeof object;
    const v216 = typeof undefined;
    const v217 = v215 === v216;
    return v217;
};
const v218 = module.exports;
v218.isUndefined = isUndefined;
const noop = function () {
};
const v219 = module.exports;
v219.noop = noop;
const forEachOwnProperty = function (object, iterator) {
    const v220 = typeof object;
    const v221 = v220 !== 'object';
    const v222 = object === null;
    const v223 = v221 || v222;
    if (v223) {
        return;
    }
    const v224 = Object.keys(object);
    var propertiesLength = v224.length;
    var current = 1;
    let property;
    for (property in object) {
        const v225 = object.hasOwnProperty(property);
        if (v225) {
            const v226 = object[property];
            const v227 = current++;
            const v228 = v227 < propertiesLength;
            const v229 = iterator(property, v226, v228);
            const v230 = v229 === 'break';
            if (v230) {
                break;
            }
        }
    }
};
const v231 = module.exports;
v231.forEachOwnProperty = forEachOwnProperty;
const merge = function (destination, source) {
    const v232 = isUndefined(destination);
    if (v232) {
        destination = {};
    }
    const v233 = isUndefined(source);
    if (v233) {
        source = {};
    }
    const v234 = function (property, value) {
        destination[property] = value;
    };
    const v235 = forEachOwnProperty(source, v234);
    v235;
    return destination;
};
const v236 = module.exports;
v236.merge = merge;
const flatten = function (object, join, root) {
    const v237 = !object;
    const v238 = typeof object;
    const v239 = v238 !== 'object';
    const v240 = v237 || v239;
    if (v240) {
        return object;
    }
    const v241 = typeof join;
    const v242 = v241 === 'string';
    if (v242) {
        root = join;
        join = null;
    }
    const v243 = !join;
    if (v243) {
        const v247 = function (a, b) {
            const v244 = !a;
            if (v244) {
                return b;
            }
            const v245 = a + '.';
            const v246 = v245 + b;
            return v246;
        };
        join = v247;
    }
    var result = {};
    const v260 = function (key, value) {
        const v248 = typeof value;
        const v249 = v248 === 'object';
        const v250 = util.isRegExp(value);
        const v251 = !v250;
        const v252 = v249 && v251;
        const v253 = util.isDate(value);
        const v254 = !v253;
        const v255 = v252 && v254;
        if (v255) {
            const v256 = join(root, key);
            const v257 = flatten(value, join, v256);
            const v258 = merge(result, v257);
            return v258;
        } else {
            const v259 = join(root, key);
            result[v259] = value;
            return result;
        }
    };
    const v261 = forEachOwnProperty(object, v260);
    v261;
    return result;
};
const v262 = module.exports;
v262.flatten = flatten;
const unflatten = function (object, separator) {
    var result = {};
    const v263 = isUndefined(separator);
    if (v263) {
        separator = '.';
    }
    const getContainer = function (property) {
        const v264 = /^\+?(0|[1-9]\d*)$/.test(property);
        if (v264) {
            const v265 = [];
            return v265;
        } else {
            const v266 = {};
            return v266;
        }
    };
    const v278 = function (property, messages) {
        property = property.split(separator);
        var currentNode = result;
        var i = 0;
        const v267 = property.length;
        let v268 = i < v267;
        while (v268) {
            var currentProperty = property[i];
            const v270 = currentNode[currentProperty];
            const v271 = isUndefined(v270);
            if (v271) {
                const v272 = property.length;
                const v273 = v272 - 1;
                const v274 = i === v273;
                if (v274) {
                    currentNode[currentProperty] = messages;
                } else {
                    const v275 = i + 1;
                    const v276 = property[v275];
                    const v277 = getContainer(v276);
                    currentNode[currentProperty] = v277;
                }
            }
            currentNode = currentNode[currentProperty];
            const v269 = i++;
            v268 = i < v267;
        }
    };
    const v279 = forEachOwnProperty(object, v278);
    v279;
    return result;
};
const v280 = module.exports;
v280.unflatten = unflatten;
const deepSet = function (object, property, value) {
    const v281 = isUndefined(object);
    const v282 = object === null;
    const v283 = v281 || v282;
    if (v283) {
        return false;
    }
    const v284 = Array.isArray(property);
    const v285 = !v284;
    if (v285) {
        property = property.split('.');
    }
    const v286 = property.length;
    const v287 = v286 > 1;
    if (v287) {
        var currentProperty = property.shift();
        const v288 = object[currentProperty];
        const v289 = isUndefined(v288);
        if (v289) {
            const v290 = property[0];
            const v291 = /\d+/.test(v290);
            if (v291) {
                object[currentProperty] = [];
            } else {
                const v292 = {};
                object[currentProperty] = v292;
            }
        }
        const v293 = object[currentProperty];
        const v294 = deepSet(v293, property, value);
        return v294;
    } else {
        const v295 = property.shift();
        object[v295] = value;
        return true;
    }
};
const v296 = module.exports;
v296.deepSet = deepSet;
const deepMerge = function (destination, source) {
    const v297 = isUndefined(destination);
    if (v297) {
        destination = {};
    }
    const v298 = isUndefined(source);
    if (v298) {
        source = {};
    }
    const v299 = flatten(source);
    const v301 = function (key, value) {
        const v300 = deepSet(destination, key, value);
        v300;
    };
    const v302 = forEachOwnProperty(v299, v301);
    v302;
    return destination;
};
const v303 = module.exports;
v303.deepMerge = deepMerge;
const deepDelete = function (object, property) {
    const v304 = typeof object;
    const v305 = v304 === 'undefined';
    if (v305) {
        return false;
    }
    const v306 = Array.isArray(property);
    const v307 = !v306;
    if (v307) {
        property = property.split('.');
    }
    const v308 = property.length;
    const v309 = v308 > 1;
    if (v309) {
        const v310 = property.shift();
        const v311 = object[v310];
        const v312 = deepDelete(v311, property);
        return v312;
    } else {
        const v313 = property[0];
        const v314 = v313 !== 'undefined';
        const v315 = object[v314];
        const v316 = typeof v315;
        if (v316) {
            const v317 = property[0];
            const v318 = object[v317];
            const v319 = delete v318;
            v319;
            return true;
        } else {
            return false;
        }
    }
};
const v320 = module.exports;
v320.deepDelete = deepDelete;
const resolveProperty = function (object, property, deep) {
    const v321 = typeof deep;
    const v322 = v321 === 'undefined';
    if (v322) {
        deep = true;
    }
    const v323 = typeof property;
    const v324 = v323 === 'string';
    const v325 = v324 && deep;
    if (v325) {
        property = property.split('.');
    }
    const v326 = !object;
    if (v326) {
        return null;
    }
    const v327 = !deep;
    if (v327) {
        const v328 = Array.isArray(property);
        const v329 = property[0];
        if (v328) {
            property = v329;
        } else {
            property = property;
        }
        const v330 = typeof property;
        const v331 = v330 === 'undefined';
        if (v331) {
            return object;
        } else {
            const v332 = object[property];
            return v332;
        }
    }
    const v333 = property.shift();
    const v334 = object[v333];
    const v335 = property.length;
    const v336 = v335 > 1;
    const v337 = resolveProperty(v334, property, v336);
    return v337;
};
const v338 = module.exports;
v338.resolveProperty = resolveProperty;
const isObject = function (object) {
    const v339 = typeof object;
    const v340 = v339 === 'object';
    return v340;
};
const v341 = module.exports;
v341.isObject = isObject;
const isArray = function (object) {
    const v342 = util.isArray(object);
    return v342;
};
const v343 = module.exports;
v343.isArray = isArray;
const v344 = module.exports;
const v353 = function (object) {
    var key;
    var values = [];
    const v345 = isObject(object);
    const v346 = !v345;
    const v347 = isArray(object);
    const v348 = v346 || v347;
    if (v348) {
        const v349 = new Error('Invalid parameter');
        throw v349;
    }
    for (key in object) {
        const v350 = object.hasOwnProperty(key);
        if (v350) {
            const v351 = object[key];
            const v352 = values.push(v351);
            v352;
        }
    }
    return values;
};
v344.values = v353;
const v354 = module.exports;
const v362 = function (object) {
    var key;
    var keys = [];
    const v355 = isObject(object);
    const v356 = !v355;
    const v357 = isArray(object);
    const v358 = v356 || v357;
    if (v358) {
        const v359 = new Error('Invalid parameter');
        throw v359;
    }
    for (key in object) {
        const v360 = object.hasOwnProperty(key);
        if (v360) {
            const v361 = keys.push(key);
            v361;
        }
    }
    return keys;
};
v354.keys = v362;
const prune = function (object, blacklist) {
    const v363 = isUndefined(object);
    const v364 = isUndefined(blacklist);
    const v365 = v363 || v364;
    if (v365) {
        return object;
    }
    const v366 = typeof blacklist;
    const v367 = v366 === 'string';
    if (v367) {
        const v368 = blacklist.split(',');
        const v370 = function (key) {
            const v369 = key.trim();
            return v369;
        };
        blacklist = v368.map(v370);
    }
    var isArray = Array.isArray(object);
    const v371 = !isArray;
    if (v371) {
        object = [object];
    }
    const v380 = function (result) {
        const v372 = result === null;
        const v373 = typeof result;
        const v374 = v373 === 'undefined';
        const v375 = v372 || v374;
        if (v375) {
            return null;
        }
        const v378 = function (propertyToRemove) {
            const v376 = result[propertyToRemove];
            const v377 = delete v376;
            v377;
        };
        const v379 = blacklist.forEach(v378);
        v379;
        return result;
    };
    object = object.map(v380);
    if (isArray) {
        return object;
    } else {
        const v381 = object[0];
        return v381;
    }
};
const v382 = module.exports;
v382.prune = prune;
const pick = function (objects, whitelist) {
    const v383 = isUndefined(whitelist);
    if (v383) {
        const v384 = {};
        return v384;
    }
    var isArray = Array.isArray(objects);
    var blacklist = [];
    const v385 = !isArray;
    if (v385) {
        objects = [objects];
    }
    const v397 = function (object) {
        const v386 = Object.keys(object);
        const v395 = function (key) {
            const v387 = whitelist.indexOf(key);
            const v388 = -1;
            const v389 = v387 === v388;
            const v390 = blacklist.indexOf(key);
            const v391 = -1;
            const v392 = v390 === v391;
            const v393 = v389 && v392;
            if (v393) {
                const v394 = blacklist.push(key);
                v394;
            }
        };
        const v396 = v386.forEach(v395);
        v396;
    };
    const v398 = objects.forEach(v397);
    v398;
    objects = prune(objects, blacklist);
    if (isArray) {
        return objects;
    } else {
        const v399 = objects[0];
        return v399;
    }
};
const v400 = module.exports;
v400.pick = pick;
const v401 = module.exports;
const v405 = function (object) {
    const v402 = typeof object;
    const v403 = v402 !== 'object';
    if (v403) {
        return false;
    }
    let prop;
    for (prop in object) {
        const v404 = object.hasOwnProperty(prop);
        if (v404) {
            return false;
        }
    }
    return true;
};
v401.isEmpty = v405;
const v406 = module.exports;
const v409 = function (object) {
    const v407 = typeof object;
    const v408 = v407 === 'boolean';
    return v408;
};
v406.isBoolean = v409;
const v410 = module.exports;
const v413 = function (object) {
    const v411 = typeof object;
    const v412 = v411 === 'string';
    return v412;
};
v410.isString = v413;
const v414 = module.exports;
const v420 = function (object) {
    const v415 = parseFloat(object);
    const v416 = isNaN(v415);
    const v417 = !v416;
    const v418 = isFinite(object);
    const v419 = v417 && v418;
    return v419;
};
v414.isNumber = v420;
const v421 = module.exports;
const v426 = function (args, startingFrom) {
    const v422 = isUndefined(startingFrom);
    if (v422) {
        startingFrom = 0;
    }
    const v423 = Array.prototype;
    const v424 = v423.slice;
    const v425 = v424.call(args, startingFrom);
    return v425;
};
v421.argsToArray = v426;
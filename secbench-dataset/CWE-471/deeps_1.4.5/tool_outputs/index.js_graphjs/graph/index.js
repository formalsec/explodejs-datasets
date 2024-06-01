'use strict';
var hasOwnProperty = Object.hasOwnProperty;
const isObject = function (item) {
    const v192 = typeof item;
    const v193 = v192 === 'object';
    const v194 = item && v193;
    const v195 = Array.isArray(item);
    const v196 = !v195;
    const v197 = v194 && v196;
    const v198 = item !== null;
    const v199 = v197 && v198;
    return v199;
};
const diff = function (objectA, objectB) {
    const v200 = isObject(objectA);
    const v201 = !v200;
    const v202 = isObject(objectB);
    const v203 = !v202;
    const v204 = v201 || v203;
    if (v204) {
        return null;
    }
    var output = null;
    let key;
    for (key in objectB) {
        var aProp = objectA[key];
        var bProp = objectB[key];
        const v205 = aProp !== bProp;
        const v206 = isObject(aProp);
        const v207 = !v206;
        const v208 = v205 && v207;
        const v209 = isObject(bProp);
        const v210 = !v209;
        const v211 = v208 && v210;
        if (v211) {
            const v212 = !output;
            if (v212) {
                output = {};
            }
            output[key] = bProp;
        } else {
            const v213 = isObject(aProp);
            const v214 = isObject(bProp);
            const v215 = v213 && v214;
            if (v215) {
                var deepObjDif = diff(aProp, bProp);
                if (deepObjDif) {
                    const v216 = !output;
                    if (v216) {
                        output = {};
                    }
                    output[key] = deepObjDif;
                }
            }
        }
    }
    return output;
};
const _valuesChild = function (object, keys, parent, joiner) {
    let key;
    for (key in object) {
        const v217 = object[key];
        const v218 = isObject(v217);
        if (v218) {
            const v219 = object[key];
            const v220 = parent + joiner;
            const v221 = v220 + key;
            const v222 = _valuesChild(v219, keys, v221, joiner);
            v222;
        } else {
            const v223 = object[key];
            const v224 = keys.push(v223);
            v224;
        }
    }
};
const values = function (object, joiner) {
    const v225 = isObject(object);
    const v226 = !v225;
    if (v226) {
        return null;
    }
    var values = [];
    var _joiner = joiner || '.';
    let key;
    for (key in object) {
        const v227 = object[key];
        const v228 = isObject(v227);
        if (v228) {
            const v229 = object[key];
            const v230 = _valuesChild(v229, values, key, _joiner);
            v230;
        } else {
            const v231 = object[key];
            const v232 = values.push(v231);
            v232;
        }
    }
    return values;
};
const _keysChild = function (object, keys, parent, joiner) {
    let key;
    for (key in object) {
        const v233 = object[key];
        const v234 = isObject(v233);
        if (v234) {
            const v235 = object[key];
            const v236 = parent + joiner;
            const v237 = v236 + key;
            const v238 = _keysChild(v235, keys, v237, joiner);
            v238;
        } else {
            const v239 = parent + joiner;
            const v240 = v239 + key;
            const v241 = keys.push(v240);
            v241;
        }
    }
};
const keys = function (object, joiner) {
    const v242 = isObject(object);
    const v243 = !v242;
    if (v243) {
        return null;
    }
    var keys = [];
    var _joiner = joiner || '.';
    let key;
    for (key in object) {
        const v244 = object[key];
        const v245 = isObject(v244);
        if (v245) {
            const v246 = object[key];
            const v247 = _keysChild(v246, keys, key, _joiner);
            v247;
        } else {
            const v248 = keys.push(key);
            v248;
        }
    }
    return keys;
};
const _flattenChild = function (object, stack, parent, joiner) {
    let key;
    for (key in object) {
        const v249 = object[key];
        const v250 = isObject(v249);
        if (v250) {
            const v251 = parent + joiner;
            var p = v251 + key;
            const v252 = object[key];
            const v253 = _flattenChild(v252, stack, p, joiner);
            v253;
        } else {
            const v254 = parent + joiner;
            const v255 = v254 + key;
            const v256 = object[key];
            stack[v255] = v256;
        }
    }
    return stack;
};
const flatten = function (object, joiner) {
    var _joiner = joiner || '.';
    const v257 = isObject(object);
    const v258 = !v257;
    if (v258) {
        return null;
    }
    var stack = {};
    let key;
    for (key in object) {
        const v259 = object[key];
        const v260 = isObject(v259);
        if (v260) {
            const v261 = object[key];
            const v262 = _flattenChild(v261, stack, key, _joiner);
            v262;
        } else {
            const v263 = object[key];
            stack[key] = v263;
        }
    }
    return stack;
};
const unflatten = function (object, joiner) {
    var _joiner = joiner || '.';
    const v264 = isObject(object);
    const v265 = !v264;
    if (v265) {
        return null;
    }
    var stack = {};
    let key;
    for (key in object) {
        const v266 = key.indexOf(_joiner);
        const v267 = -1;
        const v268 = v266 === v267;
        if (v268) {
            const v269 = object[key];
            stack[key] = v269;
        } else {
            const v270 = object[key];
            const v271 = set(stack, key, v270, true, _joiner);
            v271;
        }
    }
    return stack;
};
const get = function (object, path, joiner) {
    const v272 = joiner || '.';
    var keys = path.split(v272);
    var i = 0;
    var tmp = object;
    var len = keys.length;
    let v273 = i < len;
    while (v273) {
        const v274 = i++;
        var key = keys[v274];
        const v275 = !tmp;
        const v276 = hasOwnProperty.call(tmp, key);
        const v277 = !v276;
        const v278 = v275 || v277;
        if (v278) {
            return tmp = undefined;
        }
        tmp = tmp[key];
        v273 = i < len;
    }
    return tmp;
};
const set = function (object, path, value, initPaths, joiner) {
    const v279 = isObject(object);
    const v280 = !v279;
    if (v280) {
        return false;
    }
    const v281 = joiner || '.';
    var keys = path.split(v281);
    var i = 0;
    const v282 = keys.length;
    var len = v282 - 1;
    let v283 = i < len;
    while (v283) {
        const v284 = i++;
        var key = keys[v284];
        const v285 = hasOwnProperty.call(object, key);
        const v286 = !v285;
        const v287 = initPaths && v286;
        if (v287) {
            const v288 = {};
            object[key] = v288;
        }
        object = object[key];
        v283 = i < len;
    }
    const v289 = isObject(object);
    const v290 = Array.isArray(object);
    const v291 = keys[i];
    const v292 = Number.isNaN(v291);
    const v293 = !v292;
    const v294 = v290 && v293;
    const v295 = v289 || v294;
    if (v295) {
        const v296 = keys[i];
        object[v296] = value;
    } else {
        return false;
    }
    return true;
};
const _stringCondition = function (_condition, mapKey, _object, _source, key) {
    var condition = _condition.split('=');
    var conditionTarget = condition[0];
    var conditionValue = condition[1];
    const v297 = conditionTarget.indexOf('!');
    const v298 = -1;
    var notEqual = v297 !== v298;
    if (notEqual) {
        conditionTarget = conditionTarget.replace('!', '');
    }
    if (conditionValue) {
        if (notEqual) {
            const v299 = hasOwnProperty.call(_source, conditionTarget);
            const v300 = _source[conditionTarget];
            const v301 = v300.toString();
            const v302 = v301 !== conditionValue;
            const v303 = v299 && v302;
            if (v303) {
                _object[key] = mapKey;
            } else {
                const v304 = _object[key];
                const v305 = delete v304;
                v305;
            }
        } else {
            const v306 = hasOwnProperty.call(_source, conditionTarget);
            const v307 = _source[conditionTarget];
            const v308 = v307.toString();
            const v309 = v308 === conditionValue;
            const v310 = v306 && v309;
            if (v310) {
                _object[key] = mapKey;
            } else {
                const v311 = _object[key];
                const v312 = delete v311;
                v312;
            }
        }
    } else {
        const v313 = hasOwnProperty.call(_source, conditionTarget);
        if (v313) {
            _object[key] = mapKey;
        } else {
            const v314 = _object[key];
            const v315 = delete v314;
            v315;
        }
    }
};
const _functionCondition = function (func, mapKey, _object, flattened, original, key) {
    const result = func(original, flattened, mapKey, key);
    if (result) {
        const v316 = result === true;
        let v317;
        if (v316) {
            v317 = mapKey;
        } else {
            v317 = result;
        }
        _object[key] = v317;
    } else {
        const v318 = _object[key];
        const v319 = delete v318;
        v319;
    }
};
const _objectCondition = function (_transformers, config, mapKey, _object, flattened, original, key) {
    const v320 = config.condition;
    if (v320) {
        const v321 = config.condition;
        const v322 = typeof v321;
        switch (v322) {
        case 'string':
            const v323 = config.condition;
            const v324 = _stringCondition(v323, mapKey, _object, flattened, key);
            v324;
            break;
        case 'function':
            const v325 = config.condition;
            const v326 = _functionCondition(v325, mapKey, _object, flattened, original, key);
            v326;
            break;
        }
    } else {
        _object[key] = mapKey;
    }
    const v327 = config.transformer;
    const v328 = config.transformer;
    const v329 = typeof v328;
    const v330 = v329 === 'function';
    const v331 = v327 && v330;
    if (v331) {
        const v332 = config.transformer;
        _transformers[key] = v332;
    }
};
const mapToProps = function (object, source, noUndef, joiner) {
    const v333 = isObject(object);
    const v334 = !v333;
    if (v334) {
        return object;
    }
    var key;
    let _joiner;
    const v335 = typeof noUndef;
    const v336 = v335 === 'string';
    if (v336) {
        _joiner = noUndef;
    } else {
        _joiner = joiner;
    }
    let _noUndef;
    const v337 = typeof noUndef;
    const v338 = v337 === 'boolean';
    if (v338) {
        _noUndef = noUndef;
    } else {
        _noUndef = true;
    }
    var _object = flatten(object, _joiner);
    var _source = flatten(source, _joiner);
    var _transformers = {};
    var checkForConditions = true;
    while (checkForConditions) {
        var foundCondition = false;
        for (key in _object) {
            var mapValue = _object[key];
            const v339 = mapValue instanceof Array;
            if (v339) {
                const v340 = mapValue[0];
                const v341 = typeof v340;
                switch (v341) {
                case 'string':
                    const v342 = mapValue[0];
                    const v343 = mapValue[1];
                    const v344 = _stringCondition(v342, v343, _object, _source, key);
                    v344;
                    break;
                case 'function':
                    const v345 = mapValue[0];
                    const v346 = mapValue[1];
                    const v347 = _functionCondition(v345, v346, _object, _source, source, key);
                    v347;
                    break;
                case 'object':
                    const v348 = mapValue[0];
                    const v349 = mapValue[1];
                    const v350 = _objectCondition(_transformers, v348, v349, _object, _source, source, key);
                    v350;
                    break;
                }
            }
        }
        _object = flatten(_object, _joiner);
        checkForConditions = foundCondition;
    }
    for (key in _object) {
        var targetKey = _object[key];
        var sourceValue = _source[targetKey];
        const v351 = sourceValue === undefined;
        if (v351) {
            sourceValue = get(source, targetKey, _joiner);
        }
        const v352 = _transformers[key];
        if (v352) {
            sourceValue = _transformers[key](sourceValue, key, _source);
        }
        const v353 = sourceValue !== undefined;
        const v354 = _noUndef && v353;
        if (v354) {
            _object[key] = sourceValue;
        } else {
            if (_noUndef) {
                const v355 = _object[key];
                const v356 = delete v355;
                v356;
            } else {
                _object[key] = sourceValue;
            }
        }
    }
    const v357 = unflatten(_object, _joiner);
    return v357;
};
const merge = function (target, source) {
    const v358 = isObject(target);
    const v359 = isObject(source);
    const v360 = v358 && v359;
    if (v360) {
        let key;
        for (key in source) {
            const v361 = source[key];
            const v362 = isObject(v361);
            if (v362) {
                const v363 = target[key];
                const v364 = !v363;
                if (v364) {
                    const v365 = {};
                    target[key] = v365;
                }
                const v366 = target[key];
                const v367 = source[key];
                const v368 = merge(v366, v367);
                v368;
            } else {
                const additions = {};
                const v369 = source[key];
                additions[key] = v369;
                const v370 = Object.assign(target, additions);
                v370;
            }
        }
    }
    return target;
};
const v371 = module.exports;
v371.get = get;
const v372 = module.exports;
v372.set = set;
const v373 = module.exports;
v373.diff = diff;
const v374 = module.exports;
v374.keys = keys;
const v375 = module.exports;
v375.merge = merge;
const v376 = module.exports;
v376.values = values;
const v377 = module.exports;
v377.flatten = flatten;
const v378 = module.exports;
v378.expand = unflatten;
const v379 = module.exports;
v379.collapse = flatten;
const v380 = module.exports;
v380.isObject = isObject;
const v381 = module.exports;
v381.unflatten = unflatten;
const v382 = module.exports;
v382.mapToProps = mapToProps;
'use strict';
const v218 = {};
v218.extend = extend;
v218.isObject = isObject;
v218.isEmpty = isEmpty;
v218.clone = cloneObj;
v218.copy = cloneObj;
v218.getValue = getObjValue;
v218.deepGet = getObjValue;
v218.setValue = setObjValue;
v218.deepSet = setObjValue;
v218.toArray = toArray;
v218.fromArray = fromArray;
v218.dateStringsToDates = dateStringsToDates;
v218.update = update;
module.exports = v218;
const cloneObj = function (obj) {
    let newObj;
    const v219 = Object.prototype;
    const v220 = v219.toString;
    const v221 = v220.call(obj);
    const v222 = v221 === '[object Array]';
    const v223 = [];
    const v224 = {};
    if (v222) {
        newObj = v223;
    } else {
        newObj = v224;
    }
    let propName;
    for (propName in obj) {
        const v225 = obj[propName];
        const v226 = typeof v225;
        const v227 = v226 === 'object';
        if (v227) {
            const v228 = obj[propName];
            const v229 = cloneObj(v228);
            newObj[propName] = v229;
        } else {
            const v230 = obj[propName];
            newObj[propName] = v230;
        }
    }
    return newObj;
};
const isEmpty = function (obj) {
    let propName;
    for (propName in obj) {
        return false;
    }
    return true;
};
const isObject = function (value) {
    const v231 = Object.prototype;
    const v232 = v231.toString;
    const v233 = v232.call(value);
    const v234 = v233 === '[object Object]';
    return v234;
};
const toArray = function (obj, fields, transfornFnc) {
    const v235 = arguments.length;
    const v236 = v235 === 2;
    const v237 = arguments[1];
    const v238 = typeof v237;
    const v239 = v238 === 'function';
    const v240 = v236 && v239;
    if (v240) {
        transfornFnc = arguments[1];
        fields = null;
    }
    const v241 = isObject(obj);
    const v242 = !v241;
    if (v242) {
        const v243 = new Error('Wrong arguments');
        throw v243;
    }
    var index;
    var array = [];
    const v244 = typeof transfornFnc;
    const v245 = v244 === 'function';
    const v246 = function (key, value) {
        return value;
    };
    if (v245) {
        transfornFnc = transfornFnc;
    } else {
        transfornFnc = v246;
    }
    const v247 = Array.isArray(fields);
    if (v247) {
        var i = 0;
        const v248 = fields.length;
        let v249 = i < v248;
        while (v249) {
            const v251 = fields[i];
            const v252 = getObjValue(obj, v251);
            const v253 = transfornFnc(key, v252);
            array[i] = v253;
            const v250 = i++;
            v249 = i < v248;
        }
    } else {
        let key;
        for (key in obj) {
            const v254 = obj.hasOwnProperty(key);
            if (v254) {
                const v255 = obj[key];
                const v256 = transfornFnc(key, v255);
                const v257 = array.push(v256);
                v257;
            }
        }
    }
    return array;
};
const fromArray = function (array, transfornFnc) {
    const v258 = Array.isArray(array);
    const v259 = !v258;
    if (v259) {
        const v260 = new Error('Wrong arguments');
        throw v260;
    }
    var obj = {};
    const v261 = typeof transfornFnc;
    const v262 = v261 === 'function';
    const v264 = function (element, i) {
        const v263 = {};
        v263.key = i;
        v263.value = element;
        return v263;
    };
    if (v262) {
        transfornFnc = transfornFnc;
    } else {
        transfornFnc = v264;
    }
    var keyValue = {};
    var i = 0;
    const v265 = array.length;
    let v266 = i < v265;
    while (v266) {
        const v268 = array[i];
        keyValue = transfornFnc(v268, i);
        const v269 = keyValue.key;
        const v270 = keyValue.value;
        obj[v269] = v270;
        const v267 = i++;
        v266 = i < v265;
    }
    return obj;
};
const extend = function () {
    var options;
    var name;
    var src;
    var copy;
    var copyIsArray;
    var clone;
    const v271 = arguments[0];
    const v272 = {};
    var target = v271 || v272;
    var i = 1;
    var length = arguments.length;
    var deep = false;
    const v273 = typeof target;
    const v274 = v273 === 'boolean';
    if (v274) {
        deep = target;
        const v275 = arguments[1];
        const v276 = {};
        target = v275 || v276;
        i = 2;
    }
    const v277 = typeof target;
    const v278 = v277 !== 'object';
    const v279 = typeof target;
    const v280 = v279 !== 'function';
    const v281 = v278 && v280;
    if (v281) {
        target = {};
    }
    let v282 = i < length;
    while (v282) {
        const v284 = (options = arguments[i]) !== null;
        if (v284) {
            for (name in options) {
                src = target[name];
                copy = options[name];
                const v285 = target === copy;
                if (v285) {
                    continue;
                }
                const v286 = deep && copy;
                const v287 = isObject(copy);
                const v288 = v287 || (copyIsArray = Array.isArray(copy));
                const v289 = v286 && v288;
                if (v289) {
                    if (copyIsArray) {
                        copyIsArray = false;
                        const v290 = Array.isArray(src);
                        const v291 = src && v290;
                        const v292 = [];
                        if (v291) {
                            clone = src;
                        } else {
                            clone = v292;
                        }
                    } else {
                        const v293 = isObject(src);
                        const v294 = src && v293;
                        const v295 = {};
                        if (v294) {
                            clone = src;
                        } else {
                            clone = v295;
                        }
                    }
                    const v296 = extend(deep, clone, copy);
                    target[name] = v296;
                } else {
                    target[name] = copy;
                }
            }
        }
        const v283 = i++;
        v282 = i < length;
    }
    return target;
};
const setObjValue = function (parent, namespace, value, mode) {
    var parts = namespace.split('.');
    var current = parent;
    const v297 = namespace === 'this';
    if (v297) {
        const v298 = mode === 'push';
        if (v298) {
            const v299 = parent.push(value);
            v299;
        } else {
            parent = value.toString();
        }
    } else {
        var i = 0;
        const v300 = parts.length;
        let v301 = i < v300;
        while (v301) {
            const v303 = parts.length;
            const v304 = v303 - 1;
            const v305 = i >= v304;
            if (v305) {
                const v306 = mode === 'push';
                if (v306) {
                    const v307 = parts[i];
                    const v308 = current[v307];
                    const v309 = v308.push(value);
                    v309;
                } else {
                    const v310 = parts[i];
                    current[v310] = value;
                }
            } else {
                const v311 = parts[i];
                const v312 = parts[i];
                const v313 = current[v312];
                const v314 = {};
                current[v311] = v313 || v314;
            }
            const v315 = parts[i];
            current = current[v315];
            const v302 = i++;
            v301 = i < v300;
        }
    }
    return parent;
};
const getObjValue = function (parent, namespace) {
    const v316 = !parent;
    const v317 = parent !== false;
    const v318 = v316 && v317;
    const v319 = typeof parent;
    const v320 = v319 === 'function';
    const v321 = v318 || v320;
    if (v321) {
        return undefined;
    }
    const v322 = namespace === 'this';
    if (v322) {
        return parent;
    }
    var parts = namespace.split('.');
    var current = parent;
    var i = 0;
    const v323 = parts.length;
    let v324 = i < v323;
    while (v324) {
        const v326 = parts[i];
        const v327 = current[v326];
        const v328 = !v327;
        const v329 = parts[i];
        const v330 = current[v329];
        const v331 = v330 !== false;
        const v332 = v328 && v331;
        if (v332) {
            return undefined;
        } else {
            const v333 = parts[i];
            current = current[v333];
        }
        const v325 = i++;
        v324 = i < v323;
    }
    const v334 = typeof current;
    const v335 = v334 === 'function';
    if (v335) {
        return undefined;
    }
    return current;
};
var regexIso8601 = /^(\d{4}|\+\d{6})(?:-(\d{2})(?:-(\d{2})(?:T(\d{2}):(\d{2}):(\d{2})\.(\d{1,})(Z|([\-+])(\d{2}):(\d{2}))?)?)?)?$/;
const dateStringsToDates = function (input) {
    var value;
    var match;
    const v336 = typeof input;
    const v337 = v336 === 'string';
    const v338 = input.match(/^\d{4}$/);
    const v339 = v337 && v338;
    if (v339) {
        return input;
    }
    const v340 = typeof input;
    const v341 = v340 === 'string';
    const v342 = v341 && (match = input.match(regexIso8601));
    if (v342) {
        const v343 = match[0];
        var milliseconds = Date.parse(v343);
        const v344 = isNaN(milliseconds);
        const v345 = !v344;
        if (v345) {
            input = new Date(milliseconds);
        }
        return input;
    } else {
        const v346 = typeof input;
        const v347 = v346 !== 'object';
        if (v347) {
            return input;
        }
    }
    let key;
    for (key in input) {
        value = input[key];
        const v348 = typeof value;
        const v349 = v348 === 'string';
        const v350 = value.match(/^\d{4}$/);
        const v351 = v349 && v350;
        if (v351) {
            continue;
        }
        const v352 = typeof value;
        const v353 = v352 === 'string';
        const v354 = v353 && (match = value.match(regexIso8601));
        if (v354) {
            const v355 = match[0];
            var milliseconds = Date.parse(v355);
            const v356 = isNaN(milliseconds);
            const v357 = !v356;
            if (v357) {
                input[key] = new Date(milliseconds);
            }
        } else {
            const v358 = typeof value;
            const v359 = v358 === 'object';
            if (v359) {
                const v360 = dateStringsToDates(value);
                v360;
            }
        }
    }
    return input;
};
const update = function (obj, expression) {
    const v361 = isObject(expression);
    if (v361) {
        let key;
        for (key in expression) {
            const v362 = expression[key];
            const v363 = isObject(v362);
            if (v363) {
                const v364 = key === '$set';
                if (v364) {
                    const v365 = expression[key];
                    obj = update(obj, v365);
                } else {
                    const v366 = key === '$inc';
                    if (v366) {
                        let prop;
                        const v367 = expression[key];
                        for (prop in v367) {
                            const v368 = expression[key];
                            const v369 = v368[prop];
                            const v370 = typeof v369;
                            const v371 = v370 === 'number';
                            if (v371) {
                                var orig = getObjValue(obj, prop);
                                const v372 = orig === undefined;
                                if (v372) {
                                    const v373 = expression[key];
                                    const v374 = v373[prop];
                                    obj = setObjValue(obj, prop, v374);
                                } else {
                                    const v375 = typeof orig;
                                    const v376 = v375 === 'number';
                                    if (v376) {
                                        const v377 = expression[key];
                                        const v378 = v377[prop];
                                        const v379 = orig + v378;
                                        obj = setObjValue(obj, prop, v379);
                                    }
                                }
                            }
                        }
                    } else {
                        const v380 = key === '$max';
                        const v381 = key === '$min';
                        const v382 = v380 || v381;
                        if (v382) {
                            let prop;
                            const v383 = expression[key];
                            for (prop in v383) {
                                const v384 = expression[key];
                                const v385 = v384[prop];
                                const v386 = typeof v385;
                                const v387 = v386 === 'number';
                                if (v387) {
                                    var orig = getObjValue(obj, prop);
                                    const v388 = key === '$max';
                                    const v389 = expression[key];
                                    const v390 = v389[prop];
                                    const v391 = orig < v390;
                                    const v392 = v388 && v391;
                                    if (v392) {
                                        const v393 = expression[key];
                                        const v394 = v393[prop];
                                        obj = setObjValue(obj, prop, v394);
                                    } else {
                                        const v395 = key === '$min';
                                        const v396 = expression[key];
                                        const v397 = v396[prop];
                                        const v398 = orig > v397;
                                        const v399 = v395 && v398;
                                        if (v399) {
                                            const v400 = expression[key];
                                            const v401 = v400[prop];
                                            obj = setObjValue(obj, prop, v401);
                                        }
                                    }
                                }
                            }
                        } else {
                            const v402 = key === '$pull';
                            const v403 = key === '$pullAll';
                            const v404 = v402 || v403;
                            if (v404) {
                                let prop;
                                const v405 = expression[key];
                                for (prop in v405) {
                                    var orig = getObjValue(obj, prop);
                                    const v406 = expression[key];
                                    var value = v406[prop];
                                    const v407 = Array.isArray(orig);
                                    if (v407) {
                                        const v408 = Array.isArray(value);
                                        const v409 = !v408;
                                        if (v409) {
                                            value = [value];
                                        }
                                        var i = 0;
                                        const v410 = value.length;
                                        let v411 = i < v410;
                                        while (v411) {
                                            const v413 = value[i];
                                            var index = orig.indexOf(v413);
                                            const v414 = -1;
                                            const v415 = index !== v414;
                                            if (v415) {
                                                const v416 = orig.splice(index, 1);
                                                v416;
                                            }
                                            const v412 = i++;
                                            v411 = i < v410;
                                        }
                                        obj = setObjValue(obj, prop, orig);
                                    }
                                }
                            } else {
                                const v417 = key === '$push';
                                if (v417) {
                                    let prop;
                                    const v418 = expression[key];
                                    for (prop in v418) {
                                        var orig = getObjValue(obj, prop);
                                        const v419 = expression[key];
                                        var value = v419[prop];
                                        const v420 = value.$each;
                                        if (v420) {
                                            value = value.$each;
                                        }
                                        const v421 = Array.isArray(orig);
                                        if (v421) {
                                            const v422 = Array.isArray(value);
                                            const v423 = !v422;
                                            if (v423) {
                                                value = [value];
                                            }
                                            var i = 0;
                                            const v424 = value.length;
                                            let v425 = i < v424;
                                            while (v425) {
                                                const v427 = value[i];
                                                const v428 = orig.push(v427);
                                                v428;
                                                const v426 = i++;
                                                v425 = i < v424;
                                            }
                                            obj = setObjValue(obj, prop, orig);
                                        }
                                    }
                                } else {
                                    const v429 = key[0];
                                    const v430 = v429 === '$';
                                    if (v430) {
                                        continue;
                                    } else {
                                        const v431 = expression[key];
                                        obj = setObjValue(obj, key, v431);
                                    }
                                }
                            }
                        }
                    }
                }
            } else {
                const v432 = expression.$set;
                const v433 = !v432;
                if (v433) {
                    const v434 = expression[key];
                    obj = setObjValue(obj, key, v434);
                }
            }
        }
    }
    return obj;
};
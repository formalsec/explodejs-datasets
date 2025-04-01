'use strict';
const v293 = [
    'Promise',
    'Generator',
    'GeneratorFunction',
    'Function',
    'Buffer',
    'ArrayBuffer',
    'Reflect',
    'Proxy',
    'eval'
];
const v294 = [
    'setTimeout',
    'clearTimeout',
    'setInterval',
    'clearInterval',
    'setImmediate',
    'clearImmediate',
    'global',
    'GLOBAL',
    'require',
    'process',
    '__dirname',
    '__filename',
    'console',
    'exports',
    'module'
];
const v295 = {};
v295.js = v293;
v295.node = v294;
const v296 = {};
v296.extend = extend;
v296.merge = extend;
v296.isPlainObject = isPlainObject;
v296.isObject = isObject;
v296.isEmpty = isEmpty;
v296.clone = cloneObj;
v296.copy = cloneObj;
v296.deepHasProperty = deepHasProperty;
v296.getValue = deepGet;
v296.deepGet = deepGet;
v296.setValue = deepSet;
v296.deepSet = deepSet;
v296.deepReplace = deepReplace;
v296.toArray = toArray;
v296.fromArray = fromArray;
v296.dateStringsToDates = dateStringsToDates;
v296.update = update;
v296.globalsList = v295;
module.exports = v296;
const cloneObj = function (obj) {
    let newObj;
    const v297 = Object.prototype;
    const v298 = v297.toString;
    const v299 = v298.call(obj);
    const v300 = v299 === '[object Array]';
    const v301 = [];
    const v302 = {};
    if (v300) {
        newObj = v301;
    } else {
        newObj = v302;
    }
    let propName;
    for (propName in obj) {
        const v303 = obj[propName];
        const v304 = typeof v303;
        const v305 = v304 === 'object';
        if (v305) {
            const v306 = obj[propName];
            const v307 = cloneObj(v306);
            newObj[propName] = v307;
        } else {
            const v308 = obj[propName];
            newObj[propName] = v308;
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
    const v309 = Object.prototype;
    const v310 = v309.toString;
    const v311 = v310.call(value);
    const v312 = v311 === '[object Object]';
    return v312;
};
const toArray = function (obj, fields, transfornFnc) {
    const v313 = arguments.length;
    const v314 = v313 === 2;
    const v315 = arguments[1];
    const v316 = typeof v315;
    const v317 = v316 === 'function';
    const v318 = v314 && v317;
    if (v318) {
        transfornFnc = arguments[1];
        fields = null;
    }
    const v319 = isObject(obj);
    const v320 = !v319;
    if (v320) {
        const v321 = new Error('Wrong arguments');
        throw v321;
    }
    var index;
    var array = [];
    const v322 = typeof transfornFnc;
    const v323 = v322 === 'function';
    const v324 = function (key, value) {
        return value;
    };
    if (v323) {
        transfornFnc = transfornFnc;
    } else {
        transfornFnc = v324;
    }
    const v325 = Array.isArray(fields);
    if (v325) {
        var i = 0;
        const v326 = fields.length;
        let v327 = i < v326;
        while (v327) {
            const v329 = fields[i];
            const v330 = deepGet(obj, v329);
            const v331 = transfornFnc(key, v330);
            array[i] = v331;
            const v328 = i++;
            v327 = i < v326;
        }
    } else {
        let key;
        for (key in obj) {
            const v332 = obj.hasOwnProperty(key);
            if (v332) {
                const v333 = obj[key];
                const v334 = transfornFnc(key, v333);
                const v335 = array.push(v334);
                v335;
            }
        }
    }
    return array;
};
const fromArray = function (array, transfornFnc) {
    const v336 = Array.isArray(array);
    const v337 = !v336;
    if (v337) {
        const v338 = new Error('Wrong arguments');
        throw v338;
    }
    var obj = {};
    const v339 = typeof transfornFnc;
    const v340 = v339 === 'function';
    const v342 = function (element, i) {
        const v341 = {};
        v341.key = i;
        v341.value = element;
        return v341;
    };
    if (v340) {
        transfornFnc = transfornFnc;
    } else {
        transfornFnc = v342;
    }
    var keyValue = {};
    var i = 0;
    const v343 = array.length;
    let v344 = i < v343;
    while (v344) {
        const v346 = array[i];
        keyValue = transfornFnc(v346, i);
        const v347 = keyValue.key;
        const v348 = keyValue.value;
        obj[v347] = v348;
        const v345 = i++;
        v344 = i < v343;
    }
    return obj;
};
const isPlainObject = function (obj) {
    const v349 = !obj;
    const v350 = Object.prototype;
    const v351 = v350.toString;
    const v352 = v351.call(obj);
    const v353 = v352 !== '[object Object]';
    const v354 = v349 || v353;
    const v355 = obj.nodeType;
    const v356 = v354 || v355;
    const v357 = obj.setInterval;
    const v358 = v356 || v357;
    if (v358) {
        return false;
    }
    var has_own_constructor = hasOwnProperty.call(obj, 'constructor');
    const v359 = obj.constructor;
    const v360 = v359.prototype;
    var has_is_property_of_method = hasOwnProperty.call(v360, 'isPrototypeOf');
    const v361 = obj.constructor;
    const v362 = !has_own_constructor;
    const v363 = v361 && v362;
    const v364 = !has_is_property_of_method;
    const v365 = v363 && v364;
    if (v365) {
        return false;
    }
    var key;
    for (key in obj) {
    }
    const v366 = key === undefined;
    const v367 = Object.prototype;
    const v368 = v367.hasOwnProperty;
    const v369 = v368.call(obj, key);
    const v370 = v366 || v369;
    return v370;
};
const extend = function () {
    var options;
    var name;
    var src;
    var copy;
    var copyIsArray;
    var clone;
    const v371 = this.extendReservedInstances;
    const v372 = [];
    var reservedInstances = v371 || v372;
    var object = this;
    const v373 = arguments[0];
    const v374 = {};
    var target = v373 || v374;
    var i = 1;
    var length = arguments.length;
    var deep = false;
    const v375 = typeof target;
    const v376 = v375 === 'boolean';
    const v377 = target === 'data';
    const v378 = v376 || v377;
    if (v378) {
        deep = target;
        const v379 = arguments[1];
        const v380 = {};
        target = v379 || v380;
        i = 2;
    }
    const v381 = typeof target;
    const v382 = v381 !== 'object';
    const v383 = typeof target;
    const v384 = v383 !== 'function';
    const v385 = v382 && v384;
    if (v385) {
        target = {};
    }
    let v386 = i < length;
    while (v386) {
        options = arguments[i];
        const v388 = isReservedInstance(options, reservedInstances);
        if (v388) {
            target = options;
            return target;
        } else {
            const v389 = options !== null;
            if (v389) {
                for (name in options) {
                    src = target[name];
                    copy = options[name];
                    const v390 = isReservedInstance(copy, reservedInstances);
                    if (v390) {
                        target[name] = copy;
                        continue;
                    }
                    const v391 = target === copy;
                    if (v391) {
                        continue;
                    }
                    const v392 = deep && copy;
                    const v393 = isPlainObject(copy);
                    const v394 = v393 || (copyIsArray = Array.isArray(copy));
                    const v395 = v392 && v394;
                    if (v395) {
                        if (copyIsArray) {
                            copyIsArray = false;
                            const v396 = deep === 'data';
                            if (v396) {
                                const v397 = copy.slice(0);
                                target[name] = v397;
                                continue;
                            }
                            const v398 = Array.isArray(src);
                            const v399 = src && v398;
                            const v400 = [];
                            if (v399) {
                                clone = src;
                            } else {
                                clone = v400;
                            }
                        } else {
                            const v401 = isPlainObject(src);
                            const v402 = src && v401;
                            const v403 = {};
                            if (v402) {
                                clone = src;
                            } else {
                                clone = v403;
                            }
                        }
                        const v404 = object.extend(deep, clone, copy);
                        target[name] = v404;
                    } else {
                        target[name] = copy;
                    }
                }
            }
        }
        const v387 = i++;
        v386 = i < length;
    }
    return target;
};
const isReservedInstance = function (value, reservedInstances) {
    var i = 0;
    const v405 = reservedInstances.length;
    let v406 = i < v405;
    while (v406) {
        const v408 = reservedInstances[i];
        const v409 = value instanceof v408;
        if (v409) {
            return true;
        }
        const v407 = i++;
        v406 = i < v405;
    }
    return false;
};
const deepSet = function (parent, key, value, mode) {
    var parts = key.split('.');
    var current = parent;
    const v410 = key === 'this';
    if (v410) {
        const v411 = mode === 'push';
        if (v411) {
            const v412 = parent.push(value);
            v412;
        } else {
            parent = value.toString();
        }
    } else {
        var i = 0;
        const v413 = parts.length;
        let v414 = i < v413;
        while (v414) {
            const v416 = parts.length;
            const v417 = v416 - 1;
            const v418 = i >= v417;
            if (v418) {
                const v419 = mode === 'push';
                if (v419) {
                    const v420 = parts[i];
                    const v421 = current[v420];
                    const v422 = v421.push(value);
                    v422;
                } else {
                    const v423 = parts[i];
                    current[v423] = value;
                }
            } else {
                const v424 = parts[i];
                const v425 = parts[i];
                const v426 = current[v425];
                const v427 = {};
                current[v424] = v426 || v427;
            }
            const v428 = parts[i];
            current = current[v428];
            const v415 = i++;
            v414 = i < v413;
        }
    }
    return parent;
};
const deepHasProperty = function (parent, key) {
    const v429 = key === 'this';
    if (v429) {
        return true;
    }
    const v430 = parent === null;
    const v431 = parent === undefined;
    const v432 = v430 || v431;
    const v433 = typeof parent;
    const v434 = v433 === 'function';
    const v435 = v432 || v434;
    if (v435) {
        return false;
    }
    var parts = key.split('.');
    var current = parent;
    var i = 0;
    const v436 = parts.length;
    let v437 = i < v436;
    while (v437) {
        const v439 = parts[i];
        const v440 = current[v439];
        if (v440) {
            const v441 = parts[i];
            current = current[v441];
        } else {
            const v442 = parts.length;
            const v443 = v442 - 1;
            const v444 = i === v443;
            const v445 = current.hasOwnProperty;
            const v446 = v444 && v445;
            const v447 = parts[i];
            const v448 = current.hasOwnProperty(v447);
            const v449 = v446 && v448;
            if (v449) {
                return true;
            } else {
                return false;
            }
        }
        const v438 = i++;
        v437 = i < v436;
    }
    return true;
};
const deepGet = function (parent, key) {
    const v450 = key === 'this';
    if (v450) {
        return parent;
    }
    const v451 = parent === null;
    const v452 = parent === undefined;
    const v453 = v451 || v452;
    const v454 = typeof parent;
    const v455 = v454 === 'function';
    const v456 = v453 || v455;
    if (v456) {
        return undefined;
    }
    var parts = key.split('.');
    var current = parent;
    var i = 0;
    const v457 = parts.length;
    let v458 = i < v457;
    while (v458) {
        const v460 = parts[i];
        const v461 = current[v460];
        const v462 = v461 === null;
        const v463 = parts.length;
        const v464 = v463 - 1;
        const v465 = i < v464;
        const v466 = v462 && v465;
        const v467 = parts[i];
        const v468 = current[v467];
        const v469 = v468 === undefined;
        const v470 = v466 || v469;
        if (v470) {
            return undefined;
        } else {
            const v471 = parts[i];
            current = current[v471];
        }
        const v459 = i++;
        v458 = i < v457;
    }
    const v472 = typeof current;
    const v473 = v472 === 'function';
    if (v473) {
        return undefined;
    }
    return current;
};
const deepReplace = function (parentObj, cb, keyPath) {
    const v474 = isObject(parentObj);
    const v475 = !v474;
    if (v475) {
        return;
    }
    keyPath = keyPath || '';
    var value;
    let key;
    for (key in parentObj) {
        const v476 = parentObj[key];
        const v477 = isObject(v476);
        if (v477) {
            const v478 = parentObj[key];
            const v479 = keyPath === '';
            const v480 = keyPath + '.';
            const v481 = v480 + key;
            let v482;
            if (v479) {
                v482 = key;
            } else {
                v482 = v481;
            }
            const v483 = deepReplace(v478, cb, v482);
            v483;
        }
        const v484 = keyPath === '';
        const v485 = keyPath + '.';
        const v486 = v485 + key;
        let v487;
        if (v484) {
            v487 = key;
        } else {
            v487 = v486;
        }
        const v488 = parentObj[key];
        value = cb(v487, key, v488, parentObj);
        const v489 = !value;
        if (v489) {
            const v490 = parentObj[key];
            const v491 = delete v490;
            v491;
        } else {
            parentObj[key] = value;
        }
    }
};
var regexIso8601 = /^(\d{4}|\+\d{6})(?:-(\d{2})(?:-(\d{2})(?:T(\d{2}):(\d{2}):(\d{2})\.(\d{1,})(Z|([\-+])(\d{2}):(\d{2}))?)?)?)?$/;
var regexIsoJson = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/;
const dateStringsToDates = function (input, useIso8601) {
    var value;
    var match;
    const v492 = typeof input;
    const v493 = v492 === 'string';
    let v494;
    if (useIso8601) {
        v494 = regexIso8601;
    } else {
        v494 = regexIsoJson;
    }
    const v495 = v493 && (match = input.match(v494));
    if (v495) {
        const v496 = match[0];
        var milliseconds = Date.parse(v496);
        const v497 = isNaN(milliseconds);
        const v498 = !v497;
        if (v498) {
            input = new Date(milliseconds);
        }
        return input;
    } else {
        const v499 = typeof input;
        const v500 = v499 !== 'object';
        if (v500) {
            return input;
        }
    }
    let key;
    for (key in input) {
        value = input[key];
        const v501 = typeof value;
        const v502 = v501 === 'string';
        let v503;
        if (useIso8601) {
            v503 = regexIso8601;
        } else {
            v503 = regexIsoJson;
        }
        const v504 = v502 && (match = value.match(v503));
        if (v504) {
            const v505 = match[0];
            var milliseconds = Date.parse(v505);
            const v506 = isNaN(milliseconds);
            const v507 = !v506;
            if (v507) {
                input[key] = new Date(milliseconds);
            }
        } else {
            const v508 = typeof value;
            const v509 = v508 === 'object';
            if (v509) {
                const v510 = dateStringsToDates(value, useIso8601);
                v510;
            }
        }
    }
    return input;
};
const update = function (obj, expression) {
    const v511 = isObject(expression);
    if (v511) {
        let key;
        for (key in expression) {
            const v512 = expression[key];
            const v513 = isObject(v512);
            if (v513) {
                const v514 = key === '$set';
                if (v514) {
                    const v515 = expression[key];
                    obj = update(obj, v515);
                } else {
                    const v516 = key === '$inc';
                    if (v516) {
                        let prop;
                        const v517 = expression[key];
                        for (prop in v517) {
                            const v518 = expression[key];
                            const v519 = v518[prop];
                            const v520 = typeof v519;
                            const v521 = v520 === 'number';
                            if (v521) {
                                var orig = deepGet(obj, prop);
                                const v522 = orig === undefined;
                                if (v522) {
                                    const v523 = expression[key];
                                    const v524 = v523[prop];
                                    obj = deepSet(obj, prop, v524);
                                } else {
                                    const v525 = typeof orig;
                                    const v526 = v525 === 'number';
                                    if (v526) {
                                        const v527 = expression[key];
                                        const v528 = v527[prop];
                                        const v529 = orig + v528;
                                        obj = deepSet(obj, prop, v529);
                                    }
                                }
                            }
                        }
                    } else {
                        const v530 = key === '$max';
                        const v531 = key === '$min';
                        const v532 = v530 || v531;
                        if (v532) {
                            let prop;
                            const v533 = expression[key];
                            for (prop in v533) {
                                const v534 = expression[key];
                                const v535 = v534[prop];
                                const v536 = typeof v535;
                                const v537 = v536 === 'number';
                                if (v537) {
                                    var orig = deepGet(obj, prop);
                                    const v538 = key === '$max';
                                    const v539 = expression[key];
                                    const v540 = v539[prop];
                                    const v541 = orig < v540;
                                    const v542 = v538 && v541;
                                    if (v542) {
                                        const v543 = expression[key];
                                        const v544 = v543[prop];
                                        obj = deepSet(obj, prop, v544);
                                    } else {
                                        const v545 = key === '$min';
                                        const v546 = expression[key];
                                        const v547 = v546[prop];
                                        const v548 = orig > v547;
                                        const v549 = v545 && v548;
                                        if (v549) {
                                            const v550 = expression[key];
                                            const v551 = v550[prop];
                                            obj = deepSet(obj, prop, v551);
                                        }
                                    }
                                }
                            }
                        } else {
                            const v552 = key === '$pull';
                            const v553 = key === '$pullAll';
                            const v554 = v552 || v553;
                            if (v554) {
                                let prop;
                                const v555 = expression[key];
                                for (prop in v555) {
                                    var orig = deepGet(obj, prop);
                                    const v556 = expression[key];
                                    var value = v556[prop];
                                    const v557 = Array.isArray(orig);
                                    if (v557) {
                                        const v558 = Array.isArray(value);
                                        const v559 = !v558;
                                        if (v559) {
                                            value = [value];
                                        }
                                        var i = 0;
                                        const v560 = value.length;
                                        let v561 = i < v560;
                                        while (v561) {
                                            const v563 = value[i];
                                            var index = orig.indexOf(v563);
                                            const v564 = -1;
                                            const v565 = index !== v564;
                                            if (v565) {
                                                const v566 = orig.splice(index, 1);
                                                v566;
                                            }
                                            const v562 = i++;
                                            v561 = i < v560;
                                        }
                                        obj = deepSet(obj, prop, orig);
                                    }
                                }
                            } else {
                                const v567 = key === '$push';
                                if (v567) {
                                    let prop;
                                    const v568 = expression[key];
                                    for (prop in v568) {
                                        var orig = deepGet(obj, prop);
                                        const v569 = expression[key];
                                        var value = v569[prop];
                                        const v570 = value.$each;
                                        if (v570) {
                                            value = value.$each;
                                        }
                                        const v571 = Array.isArray(orig);
                                        if (v571) {
                                            const v572 = Array.isArray(value);
                                            const v573 = !v572;
                                            if (v573) {
                                                value = [value];
                                            }
                                            var i = 0;
                                            const v574 = value.length;
                                            let v575 = i < v574;
                                            while (v575) {
                                                const v577 = value[i];
                                                const v578 = orig.push(v577);
                                                v578;
                                                const v576 = i++;
                                                v575 = i < v574;
                                            }
                                            obj = deepSet(obj, prop, orig);
                                        }
                                    }
                                } else {
                                    const v579 = key[0];
                                    const v580 = v579 === '$';
                                    if (v580) {
                                        continue;
                                    } else {
                                        const v581 = expression[key];
                                        obj = deepSet(obj, key, v581);
                                    }
                                }
                            }
                        }
                    }
                }
            } else {
                const v582 = expression.$set;
                const v583 = !v582;
                if (v583) {
                    const v584 = expression[key];
                    obj = deepSet(obj, key, v584);
                }
            }
        }
    }
    return obj;
};
'use strict';
const v294 = [
    Buffer,
    ArrayBuffer
];
const v295 = [
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
const v296 = [
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
const v297 = {};
v297.js = v295;
v297.node = v296;
const v298 = {};
v298.extendReservedInstances = v294;
v298.extend = extend;
v298.merge = extend;
v298.isPlainObject = isPlainObject;
v298.isObject = isObject;
v298.isEmpty = isEmpty;
v298.clone = cloneObj;
v298.copy = cloneObj;
v298.deepHasProperty = deepHasProperty;
v298.getValue = deepGet;
v298.deepGet = deepGet;
v298.setValue = deepSet;
v298.deepSet = deepSet;
v298.deepReplace = deepReplace;
v298.toArray = toArray;
v298.fromArray = fromArray;
v298.dateStringsToDates = dateStringsToDates;
v298.update = update;
v298.globalsList = v297;
module.exports = v298;
const cloneObj = function (obj) {
    let newObj;
    const v299 = Object.prototype;
    const v300 = v299.toString;
    const v301 = v300.call(obj);
    const v302 = v301 === '[object Array]';
    const v303 = [];
    const v304 = {};
    if (v302) {
        newObj = v303;
    } else {
        newObj = v304;
    }
    let propName;
    for (propName in obj) {
        const v305 = obj[propName];
        const v306 = typeof v305;
        const v307 = v306 === 'object';
        if (v307) {
            const v308 = obj[propName];
            const v309 = cloneObj(v308);
            newObj[propName] = v309;
        } else {
            const v310 = obj[propName];
            newObj[propName] = v310;
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
    const v311 = Object.prototype;
    const v312 = v311.toString;
    const v313 = v312.call(value);
    const v314 = v313 === '[object Object]';
    return v314;
};
const toArray = function (obj, fields, transfornFnc) {
    const v315 = arguments.length;
    const v316 = v315 === 2;
    const v317 = arguments[1];
    const v318 = typeof v317;
    const v319 = v318 === 'function';
    const v320 = v316 && v319;
    if (v320) {
        transfornFnc = arguments[1];
        fields = null;
    }
    const v321 = isObject(obj);
    const v322 = !v321;
    if (v322) {
        const v323 = new Error('Wrong arguments');
        throw v323;
    }
    var index;
    var array = [];
    const v324 = typeof transfornFnc;
    const v325 = v324 === 'function';
    const v326 = function (key, value) {
        return value;
    };
    if (v325) {
        transfornFnc = transfornFnc;
    } else {
        transfornFnc = v326;
    }
    const v327 = Array.isArray(fields);
    if (v327) {
        var i = 0;
        const v328 = fields.length;
        let v329 = i < v328;
        while (v329) {
            const v331 = fields[i];
            const v332 = deepGet(obj, v331);
            const v333 = transfornFnc(key, v332);
            array[i] = v333;
            const v330 = i++;
            v329 = i < v328;
        }
    } else {
        let key;
        for (key in obj) {
            const v334 = obj.hasOwnProperty(key);
            if (v334) {
                const v335 = obj[key];
                const v336 = transfornFnc(key, v335);
                const v337 = array.push(v336);
                v337;
            }
        }
    }
    return array;
};
const fromArray = function (array, transfornFnc) {
    const v338 = Array.isArray(array);
    const v339 = !v338;
    if (v339) {
        const v340 = new Error('Wrong arguments');
        throw v340;
    }
    var obj = {};
    const v341 = typeof transfornFnc;
    const v342 = v341 === 'function';
    const v344 = function (element, i) {
        const v343 = {};
        v343.key = i;
        v343.value = element;
        return v343;
    };
    if (v342) {
        transfornFnc = transfornFnc;
    } else {
        transfornFnc = v344;
    }
    var keyValue = {};
    var i = 0;
    const v345 = array.length;
    let v346 = i < v345;
    while (v346) {
        const v348 = array[i];
        keyValue = transfornFnc(v348, i);
        const v349 = keyValue.key;
        const v350 = keyValue.value;
        obj[v349] = v350;
        const v347 = i++;
        v346 = i < v345;
    }
    return obj;
};
const isPlainObject = function (obj) {
    const v351 = !obj;
    const v352 = Object.prototype;
    const v353 = v352.toString;
    const v354 = v353.call(obj);
    const v355 = v354 !== '[object Object]';
    const v356 = v351 || v355;
    const v357 = obj.nodeType;
    const v358 = v356 || v357;
    const v359 = obj.setInterval;
    const v360 = v358 || v359;
    if (v360) {
        return false;
    }
    var has_own_constructor = hasOwnProperty.call(obj, 'constructor');
    const v361 = obj.constructor;
    const v362 = v361.prototype;
    var has_is_property_of_method = hasOwnProperty.call(v362, 'isPrototypeOf');
    const v363 = obj.constructor;
    const v364 = !has_own_constructor;
    const v365 = v363 && v364;
    const v366 = !has_is_property_of_method;
    const v367 = v365 && v366;
    if (v367) {
        return false;
    }
    var key;
    for (key in obj) {
    }
    const v368 = key === undefined;
    const v369 = Object.prototype;
    const v370 = v369.hasOwnProperty;
    const v371 = v370.call(obj, key);
    const v372 = v368 || v371;
    return v372;
};
const extend = function () {
    var options;
    var name;
    var src;
    var copy;
    var copyIsArray;
    var clone;
    const v373 = this.extendReservedInstances;
    const v374 = [];
    var reservedInstances = v373 || v374;
    var object = this;
    const v375 = arguments[0];
    const v376 = {};
    var target = v375 || v376;
    var i = 1;
    var length = arguments.length;
    var deep = false;
    const v377 = typeof target;
    const v378 = v377 === 'boolean';
    const v379 = target === 'data';
    const v380 = v378 || v379;
    if (v380) {
        deep = target;
        const v381 = arguments[1];
        const v382 = {};
        target = v381 || v382;
        i = 2;
    }
    const v383 = typeof target;
    const v384 = v383 !== 'object';
    const v385 = typeof target;
    const v386 = v385 !== 'function';
    const v387 = v384 && v386;
    if (v387) {
        target = {};
    }
    let v388 = i < length;
    while (v388) {
        options = arguments[i];
        const v390 = isReservedInstance(options, reservedInstances);
        if (v390) {
            target = options;
            return target;
        } else {
            const v391 = options !== null;
            if (v391) {
                for (name in options) {
                    src = target[name];
                    copy = options[name];
                    const v392 = isReservedInstance(copy, reservedInstances);
                    if (v392) {
                        target[name] = copy;
                        continue;
                    }
                    const v393 = target === copy;
                    if (v393) {
                        continue;
                    }
                    const v394 = deep && copy;
                    const v395 = isPlainObject(copy);
                    const v396 = v395 || (copyIsArray = Array.isArray(copy));
                    const v397 = v394 && v396;
                    if (v397) {
                        if (copyIsArray) {
                            copyIsArray = false;
                            const v398 = deep === 'data';
                            if (v398) {
                                const v399 = copy.slice(0);
                                target[name] = v399;
                                continue;
                            }
                            const v400 = Array.isArray(src);
                            const v401 = src && v400;
                            const v402 = [];
                            if (v401) {
                                clone = src;
                            } else {
                                clone = v402;
                            }
                        } else {
                            const v403 = isPlainObject(src);
                            const v404 = src && v403;
                            const v405 = {};
                            if (v404) {
                                clone = src;
                            } else {
                                clone = v405;
                            }
                        }
                        const v406 = object.extend(deep, clone, copy);
                        target[name] = v406;
                    } else {
                        target[name] = copy;
                    }
                }
            }
        }
        const v389 = i++;
        v388 = i < length;
    }
    return target;
};
const isReservedInstance = function (value, reservedInstances) {
    var i = 0;
    const v407 = reservedInstances.length;
    let v408 = i < v407;
    while (v408) {
        const v410 = reservedInstances[i];
        const v411 = value instanceof v410;
        if (v411) {
            return true;
        }
        const v409 = i++;
        v408 = i < v407;
    }
    return false;
};
const deepSet = function (parent, key, value, mode) {
    var parts = key.split('.');
    var current = parent;
    const v412 = key === 'this';
    if (v412) {
        const v413 = mode === 'push';
        if (v413) {
            const v414 = parent.push(value);
            v414;
        } else {
            parent = value.toString();
        }
    } else {
        var i = 0;
        const v415 = parts.length;
        let v416 = i < v415;
        while (v416) {
            const v418 = parts.length;
            const v419 = v418 - 1;
            const v420 = i >= v419;
            if (v420) {
                const v421 = mode === 'push';
                if (v421) {
                    const v422 = parts[i];
                    const v423 = current[v422];
                    const v424 = v423.push(value);
                    v424;
                } else {
                    const v425 = parts[i];
                    current[v425] = value;
                }
            } else {
                const v426 = parts[i];
                const v427 = parts[i];
                const v428 = current[v427];
                const v429 = {};
                current[v426] = v428 || v429;
            }
            const v430 = parts[i];
            current = current[v430];
            const v417 = i++;
            v416 = i < v415;
        }
    }
    return parent;
};
const deepHasProperty = function (parent, key) {
    const v431 = key === 'this';
    if (v431) {
        return true;
    }
    const v432 = parent === null;
    const v433 = parent === undefined;
    const v434 = v432 || v433;
    const v435 = typeof parent;
    const v436 = v435 === 'function';
    const v437 = v434 || v436;
    if (v437) {
        return false;
    }
    var parts = key.split('.');
    var current = parent;
    var i = 0;
    const v438 = parts.length;
    let v439 = i < v438;
    while (v439) {
        const v441 = parts[i];
        const v442 = current[v441];
        if (v442) {
            const v443 = parts[i];
            current = current[v443];
        } else {
            const v444 = parts.length;
            const v445 = v444 - 1;
            const v446 = i === v445;
            const v447 = current.hasOwnProperty;
            const v448 = v446 && v447;
            const v449 = parts[i];
            const v450 = current.hasOwnProperty(v449);
            const v451 = v448 && v450;
            if (v451) {
                return true;
            } else {
                return false;
            }
        }
        const v440 = i++;
        v439 = i < v438;
    }
    return true;
};
const deepGet = function (parent, key) {
    const v452 = key === 'this';
    if (v452) {
        return parent;
    }
    const v453 = parent === null;
    const v454 = parent === undefined;
    const v455 = v453 || v454;
    const v456 = typeof parent;
    const v457 = v456 === 'function';
    const v458 = v455 || v457;
    if (v458) {
        return undefined;
    }
    var parts = key.split('.');
    var current = parent;
    var i = 0;
    const v459 = parts.length;
    let v460 = i < v459;
    while (v460) {
        const v462 = parts[i];
        const v463 = current[v462];
        const v464 = v463 === null;
        const v465 = parts.length;
        const v466 = v465 - 1;
        const v467 = i < v466;
        const v468 = v464 && v467;
        const v469 = parts[i];
        const v470 = current[v469];
        const v471 = v470 === undefined;
        const v472 = v468 || v471;
        if (v472) {
            return undefined;
        } else {
            const v473 = parts[i];
            current = current[v473];
        }
        const v461 = i++;
        v460 = i < v459;
    }
    const v474 = typeof current;
    const v475 = v474 === 'function';
    if (v475) {
        return undefined;
    }
    return current;
};
const deepReplace = function (parentObj, cb, keyPath) {
    const v476 = isObject(parentObj);
    const v477 = !v476;
    if (v477) {
        return;
    }
    keyPath = keyPath || '';
    var value;
    let key;
    for (key in parentObj) {
        const v478 = parentObj[key];
        const v479 = isObject(v478);
        if (v479) {
            const v480 = parentObj[key];
            const v481 = keyPath === '';
            const v482 = keyPath + '.';
            const v483 = v482 + key;
            let v484;
            if (v481) {
                v484 = key;
            } else {
                v484 = v483;
            }
            const v485 = deepReplace(v480, cb, v484);
            v485;
        }
        const v486 = keyPath === '';
        const v487 = keyPath + '.';
        const v488 = v487 + key;
        let v489;
        if (v486) {
            v489 = key;
        } else {
            v489 = v488;
        }
        const v490 = parentObj[key];
        value = cb(v489, key, v490, parentObj);
        const v491 = !value;
        if (v491) {
            const v492 = parentObj[key];
            const v493 = delete v492;
            v493;
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
    const v494 = typeof input;
    const v495 = v494 === 'string';
    let v496;
    if (useIso8601) {
        v496 = regexIso8601;
    } else {
        v496 = regexIsoJson;
    }
    const v497 = v495 && (match = input.match(v496));
    if (v497) {
        const v498 = match[0];
        var milliseconds = Date.parse(v498);
        const v499 = isNaN(milliseconds);
        const v500 = !v499;
        if (v500) {
            input = new Date(milliseconds);
        }
        return input;
    } else {
        const v501 = typeof input;
        const v502 = v501 !== 'object';
        if (v502) {
            return input;
        }
    }
    let key;
    for (key in input) {
        value = input[key];
        const v503 = typeof value;
        const v504 = v503 === 'string';
        let v505;
        if (useIso8601) {
            v505 = regexIso8601;
        } else {
            v505 = regexIsoJson;
        }
        const v506 = v504 && (match = value.match(v505));
        if (v506) {
            const v507 = match[0];
            var milliseconds = Date.parse(v507);
            const v508 = isNaN(milliseconds);
            const v509 = !v508;
            if (v509) {
                input[key] = new Date(milliseconds);
            }
        } else {
            const v510 = typeof value;
            const v511 = v510 === 'object';
            if (v511) {
                const v512 = dateStringsToDates(value, useIso8601);
                v512;
            }
        }
    }
    return input;
};
const update = function (obj, expression) {
    const v513 = isObject(expression);
    if (v513) {
        let key;
        for (key in expression) {
            const v514 = expression[key];
            const v515 = isObject(v514);
            if (v515) {
                const v516 = key === '$set';
                if (v516) {
                    const v517 = expression[key];
                    obj = update(obj, v517);
                } else {
                    const v518 = key === '$inc';
                    if (v518) {
                        let prop;
                        const v519 = expression[key];
                        for (prop in v519) {
                            const v520 = expression[key];
                            const v521 = v520[prop];
                            const v522 = typeof v521;
                            const v523 = v522 === 'number';
                            if (v523) {
                                var orig = deepGet(obj, prop);
                                const v524 = orig === undefined;
                                if (v524) {
                                    const v525 = expression[key];
                                    const v526 = v525[prop];
                                    obj = deepSet(obj, prop, v526);
                                } else {
                                    const v527 = typeof orig;
                                    const v528 = v527 === 'number';
                                    if (v528) {
                                        const v529 = expression[key];
                                        const v530 = v529[prop];
                                        const v531 = orig + v530;
                                        obj = deepSet(obj, prop, v531);
                                    }
                                }
                            }
                        }
                    } else {
                        const v532 = key === '$max';
                        const v533 = key === '$min';
                        const v534 = v532 || v533;
                        if (v534) {
                            let prop;
                            const v535 = expression[key];
                            for (prop in v535) {
                                const v536 = expression[key];
                                const v537 = v536[prop];
                                const v538 = typeof v537;
                                const v539 = v538 === 'number';
                                if (v539) {
                                    var orig = deepGet(obj, prop);
                                    const v540 = key === '$max';
                                    const v541 = expression[key];
                                    const v542 = v541[prop];
                                    const v543 = orig < v542;
                                    const v544 = v540 && v543;
                                    if (v544) {
                                        const v545 = expression[key];
                                        const v546 = v545[prop];
                                        obj = deepSet(obj, prop, v546);
                                    } else {
                                        const v547 = key === '$min';
                                        const v548 = expression[key];
                                        const v549 = v548[prop];
                                        const v550 = orig > v549;
                                        const v551 = v547 && v550;
                                        if (v551) {
                                            const v552 = expression[key];
                                            const v553 = v552[prop];
                                            obj = deepSet(obj, prop, v553);
                                        }
                                    }
                                }
                            }
                        } else {
                            const v554 = key === '$pull';
                            const v555 = key === '$pullAll';
                            const v556 = v554 || v555;
                            if (v556) {
                                let prop;
                                const v557 = expression[key];
                                for (prop in v557) {
                                    var orig = deepGet(obj, prop);
                                    const v558 = expression[key];
                                    var value = v558[prop];
                                    const v559 = Array.isArray(orig);
                                    if (v559) {
                                        const v560 = Array.isArray(value);
                                        const v561 = !v560;
                                        if (v561) {
                                            value = [value];
                                        }
                                        var i = 0;
                                        const v562 = value.length;
                                        let v563 = i < v562;
                                        while (v563) {
                                            const v565 = value[i];
                                            var index = orig.indexOf(v565);
                                            const v566 = -1;
                                            const v567 = index !== v566;
                                            if (v567) {
                                                const v568 = orig.splice(index, 1);
                                                v568;
                                            }
                                            const v564 = i++;
                                            v563 = i < v562;
                                        }
                                        obj = deepSet(obj, prop, orig);
                                    }
                                }
                            } else {
                                const v569 = key === '$push';
                                if (v569) {
                                    let prop;
                                    const v570 = expression[key];
                                    for (prop in v570) {
                                        var orig = deepGet(obj, prop);
                                        const v571 = expression[key];
                                        var value = v571[prop];
                                        const v572 = value.$each;
                                        if (v572) {
                                            value = value.$each;
                                        }
                                        const v573 = Array.isArray(orig);
                                        if (v573) {
                                            const v574 = Array.isArray(value);
                                            const v575 = !v574;
                                            if (v575) {
                                                value = [value];
                                            }
                                            var i = 0;
                                            const v576 = value.length;
                                            let v577 = i < v576;
                                            while (v577) {
                                                const v579 = value[i];
                                                const v580 = orig.push(v579);
                                                v580;
                                                const v578 = i++;
                                                v577 = i < v576;
                                            }
                                            obj = deepSet(obj, prop, orig);
                                        }
                                    }
                                } else {
                                    const v581 = key[0];
                                    const v582 = v581 === '$';
                                    if (v582) {
                                        continue;
                                    } else {
                                        const v583 = expression[key];
                                        obj = deepSet(obj, key, v583);
                                    }
                                }
                            }
                        }
                    }
                }
            } else {
                const v584 = expression.$set;
                const v585 = !v584;
                if (v585) {
                    const v586 = expression[key];
                    obj = deepSet(obj, key, v586);
                }
            }
        }
    }
    return obj;
};
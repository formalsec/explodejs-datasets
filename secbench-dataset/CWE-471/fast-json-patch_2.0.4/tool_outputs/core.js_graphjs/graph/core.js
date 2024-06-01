var equalsOptions = {};
equalsOptions.strict = true;
var _equals = require('deep-equal');
var areEquals = function (a, b) {
    const v257 = _equals(a, b, equalsOptions);
    return v257;
};
var helpers_1 = require('./helpers');
const v258 = helpers_1.PatchError;
exports.JsonPatchError = v258;
const v259 = helpers_1._deepClone;
exports.deepClone = v259;
const v262 = function (obj, key, document) {
    const v260 = this.value;
    obj[key] = v260;
    const v261 = {};
    v261.newDocument = document;
    return v261;
};
const v266 = function (obj, key, document) {
    var removed = obj[key];
    const v263 = obj[key];
    const v264 = delete v263;
    v264;
    const v265 = {};
    v265.newDocument = document;
    v265.removed = removed;
    return v265;
};
const v269 = function (obj, key, document) {
    var removed = obj[key];
    const v267 = this.value;
    obj[key] = v267;
    const v268 = {};
    v268.newDocument = document;
    v268.removed = removed;
    return v268;
};
const v278 = function (obj, key, document) {
    const v270 = this.path;
    var removed = getValueByPointer(document, v270);
    if (removed) {
        removed = helpers_1._deepClone(removed);
    }
    const v271 = this.from;
    const v272 = {
        op: 'remove',
        path: v271
    };
    const v273 = applyOperation(document, v272);
    var originalValue = v273.removed;
    const v274 = this.path;
    const v275 = {
        op: 'add',
        path: v274,
        value: originalValue
    };
    const v276 = applyOperation(document, v275);
    v276;
    const v277 = {};
    v277.newDocument = document;
    v277.removed = removed;
    return v277;
};
const v285 = function (obj, key, document) {
    const v279 = this.from;
    var valueToCopy = getValueByPointer(document, v279);
    const v280 = this.path;
    const v281 = helpers_1._deepClone(valueToCopy);
    const v282 = {
        op: 'add',
        path: v280,
        value: v281
    };
    const v283 = applyOperation(document, v282);
    v283;
    const v284 = {};
    v284.newDocument = document;
    return v284;
};
const v290 = function (obj, key, document) {
    const v286 = obj[key];
    const v287 = this.value;
    const v288 = areEquals(v286, v287);
    const v289 = {};
    v289.newDocument = document;
    v289.test = v288;
    return v289;
};
const v293 = function (obj, key, document) {
    const v291 = obj[key];
    this.value = v291;
    const v292 = {};
    v292.newDocument = document;
    return v292;
};
var objOps = {};
objOps.add = v262;
objOps.remove = v266;
objOps.replace = v269;
objOps.move = v278;
objOps.copy = v285;
objOps.test = v290;
objOps._get = v293;
const v297 = function (arr, i, document) {
    const v294 = this.value;
    const v295 = arr.splice(i, 0, v294);
    v295;
    const v296 = {};
    v296.newDocument = document;
    v296.index = i;
    return v296;
};
const v300 = function (arr, i, document) {
    var removedList = arr.splice(i, 1);
    const v298 = removedList[0];
    const v299 = {};
    v299.newDocument = document;
    v299.removed = v298;
    return v299;
};
const v303 = function (arr, i, document) {
    var removed = arr[i];
    const v301 = this.value;
    arr[i] = v301;
    const v302 = {};
    v302.newDocument = document;
    v302.removed = removed;
    return v302;
};
const v304 = objOps.move;
const v305 = objOps.copy;
const v306 = objOps.test;
const v307 = objOps._get;
var arrOps = {};
arrOps.add = v297;
arrOps.remove = v300;
arrOps.replace = v303;
arrOps.move = v304;
arrOps.copy = v305;
arrOps.test = v306;
arrOps._get = v307;
const getValueByPointer = function (document, pointer) {
    const v308 = pointer == '';
    if (v308) {
        return document;
    }
    var getOriginalDestination = {};
    getOriginalDestination.op = '_get';
    getOriginalDestination.path = pointer;
    const v309 = applyOperation(document, getOriginalDestination);
    v309;
    const v310 = getOriginalDestination.value;
    return v310;
};
exports.getValueByPointer = getValueByPointer;
const applyOperation = function (document, operation, validateOperation, mutateDocument) {
    const v311 = void 0;
    const v312 = validateOperation === v311;
    if (v312) {
        validateOperation = false;
    }
    const v313 = void 0;
    const v314 = mutateDocument === v313;
    if (v314) {
        mutateDocument = true;
    }
    if (validateOperation) {
        const v315 = typeof validateOperation;
        const v316 = v315 == 'function';
        if (v316) {
            const v317 = operation.path;
            const v318 = validateOperation(operation, 0, document, v317);
            v318;
        } else {
            const v319 = validator(operation, 0);
            v319;
        }
    }
    const v320 = operation.path;
    const v321 = v320 === '';
    if (v321) {
        var returnValue = {};
        returnValue.newDocument = document;
        const v322 = operation.op;
        const v323 = v322 === 'add';
        if (v323) {
            const v324 = operation.value;
            returnValue.newDocument = v324;
            return returnValue;
        } else {
            const v325 = operation.op;
            const v326 = v325 === 'replace';
            if (v326) {
                const v327 = operation.value;
                returnValue.newDocument = v327;
                returnValue.removed = document;
                return returnValue;
            } else {
                const v328 = operation.op;
                const v329 = v328 === 'move';
                const v330 = operation.op;
                const v331 = v330 === 'copy';
                const v332 = v329 || v331;
                if (v332) {
                    const v333 = operation.from;
                    const v334 = getValueByPointer(document, v333);
                    returnValue.newDocument = v334;
                    const v335 = operation.op;
                    const v336 = v335 === 'move';
                    if (v336) {
                        returnValue.removed = document;
                    }
                    return returnValue;
                } else {
                    const v337 = operation.op;
                    const v338 = v337 === 'test';
                    if (v338) {
                        const v339 = operation.value;
                        const v340 = areEquals(document, v339);
                        returnValue.test = v340;
                        const v341 = returnValue.test;
                        const v342 = v341 === false;
                        if (v342) {
                            const v343 = new exports.JsonPatchError('Test operation failed', 'TEST_OPERATION_FAILED', 0, operation, document);
                            throw v343;
                        }
                        returnValue.newDocument = document;
                        return returnValue;
                    } else {
                        const v344 = operation.op;
                        const v345 = v344 === 'remove';
                        if (v345) {
                            returnValue.removed = document;
                            returnValue.newDocument = null;
                            return returnValue;
                        } else {
                            const v346 = operation.op;
                            const v347 = v346 === '_get';
                            if (v347) {
                                operation.value = document;
                                return returnValue;
                            } else {
                                if (validateOperation) {
                                    const v348 = new exports.JsonPatchError('Operation `op` property is not one of operations defined in RFC-6902', 'OPERATION_OP_INVALID', 0, operation, document);
                                    throw v348;
                                } else {
                                    return returnValue;
                                }
                            }
                        }
                    }
                }
            }
        }
    } else {
        const v349 = !mutateDocument;
        if (v349) {
            document = helpers_1._deepClone(document);
        }
        const v350 = operation.path;
        var path = v350 || '';
        var keys = path.split('/');
        var obj = document;
        var t = 1;
        var len = keys.length;
        var existingPathFragment = undefined;
        const v351 = void 0;
        var key = v351;
        const v352 = void 0;
        var validateFunction = v352;
        const v353 = typeof validateOperation;
        const v354 = v353 == 'function';
        if (v354) {
            validateFunction = validateOperation;
        } else {
            validateFunction = validator;
        }
        while (true) {
            key = keys[t];
            if (validateOperation) {
                const v355 = existingPathFragment === undefined;
                if (v355) {
                    const v356 = obj[key];
                    const v357 = v356 === undefined;
                    if (v357) {
                        const v358 = keys.slice(0, t);
                        existingPathFragment = v358.join('/');
                    } else {
                        const v359 = len - 1;
                        const v360 = t == v359;
                        if (v360) {
                            existingPathFragment = operation.path;
                        }
                    }
                    const v361 = existingPathFragment !== undefined;
                    if (v361) {
                        const v362 = validateFunction(operation, 0, document, existingPathFragment);
                        v362;
                    }
                }
            }
            const v363 = t++;
            v363;
            const v364 = Array.isArray(obj);
            if (v364) {
                const v365 = key === '-';
                if (v365) {
                    key = obj.length;
                } else {
                    const v366 = helpers_1.isInteger(key);
                    const v367 = !v366;
                    const v368 = validateOperation && v367;
                    if (v368) {
                        const v369 = operation.path;
                        const v370 = new exports.JsonPatchError('Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index', 'OPERATION_PATH_ILLEGAL_ARRAY_INDEX', 0, v369, operation);
                        throw v370;
                    }
                    const v371 = ~key;
                    const v372 = ~v371;
                    key = v372;
                }
                const v373 = t >= len;
                if (v373) {
                    const v374 = operation.op;
                    const v375 = v374 === 'add';
                    const v376 = validateOperation && v375;
                    const v377 = obj.length;
                    const v378 = key > v377;
                    const v379 = v376 && v378;
                    if (v379) {
                        const v380 = operation.path;
                        const v381 = new exports.JsonPatchError('The specified index MUST NOT be greater than the number of elements in the array', 'OPERATION_VALUE_OUT_OF_BOUNDS', 0, v380, operation);
                        throw v381;
                    }
                    const v382 = operation.op;
                    const v383 = arrOps[v382];
                    var returnValue = v383.call(operation, obj, key, document);
                    const v384 = returnValue.test;
                    const v385 = v384 === false;
                    if (v385) {
                        const v386 = new exports.JsonPatchError('Test operation failed', 'TEST_OPERATION_FAILED', 0, operation, document);
                        throw v386;
                    }
                    return returnValue;
                }
            } else {
                const v387 = key.indexOf('~');
                const v388 = -1;
                const v389 = v387 != v388;
                const v390 = key && v389;
                if (v390) {
                    key = helpers_1.unescapePathComponent(key);
                }
                const v391 = t >= len;
                if (v391) {
                    const v392 = operation.op;
                    const v393 = objOps[v392];
                    var returnValue = v393.call(operation, obj, key, document);
                    const v394 = returnValue.test;
                    const v395 = v394 === false;
                    if (v395) {
                        const v396 = new exports.JsonPatchError('Test operation failed', 'TEST_OPERATION_FAILED', 0, operation, document);
                        throw v396;
                    }
                    return returnValue;
                }
            }
            obj = obj[key];
        }
    }
};
exports.applyOperation = applyOperation;
const applyPatch = function (document, patch, validateOperation) {
    if (validateOperation) {
        const v397 = Array.isArray(patch);
        const v398 = !v397;
        if (v398) {
            const v399 = new exports.JsonPatchError('Patch sequence must be an array', 'SEQUENCE_NOT_AN_ARRAY');
            throw v399;
        }
    }
    const v400 = patch.length;
    var results = new Array(v400);
    var i = 0;
    var length_1 = patch.length;
    let v401 = i < length_1;
    while (v401) {
        const v403 = patch[i];
        const v404 = applyOperation(document, v403, validateOperation);
        results[i] = v404;
        const v405 = results[i];
        document = v405.newDocument;
        const v402 = i++;
        v401 = i < length_1;
    }
    results.newDocument = document;
    return results;
};
exports.applyPatch = applyPatch;
const applyReducer = function (document, operation) {
    var operationResult = applyOperation(document, operation);
    const v406 = operationResult.test;
    const v407 = v406 === false;
    if (v407) {
        const v408 = new exports.JsonPatchError('Test operation failed', 'TEST_OPERATION_FAILED', 0, operation, document);
        throw v408;
    }
    const v409 = operationResult.newDocument;
    return v409;
};
exports.applyReducer = applyReducer;
const validator = function (operation, index, document, existingPathFragment) {
    const v410 = typeof operation;
    const v411 = v410 !== 'object';
    const v412 = operation === null;
    const v413 = v411 || v412;
    const v414 = Array.isArray(operation);
    const v415 = v413 || v414;
    if (v415) {
        const v416 = new exports.JsonPatchError('Operation is not an object', 'OPERATION_NOT_AN_OBJECT', index, operation, document);
        throw v416;
    } else {
        const v417 = operation.op;
        const v418 = objOps[v417];
        const v419 = !v418;
        if (v419) {
            const v420 = new exports.JsonPatchError('Operation `op` property is not one of operations defined in RFC-6902', 'OPERATION_OP_INVALID', index, operation, document);
            throw v420;
        } else {
            const v421 = operation.path;
            const v422 = typeof v421;
            const v423 = v422 !== 'string';
            if (v423) {
                const v424 = new exports.JsonPatchError('Operation `path` property is not a string', 'OPERATION_PATH_INVALID', index, operation, document);
                throw v424;
            } else {
                const v425 = operation.path;
                const v426 = v425.indexOf('/');
                const v427 = v426 !== 0;
                const v428 = operation.path;
                const v429 = v428.length;
                const v430 = v429 > 0;
                const v431 = v427 && v430;
                if (v431) {
                    const v432 = new exports.JsonPatchError('Operation `path` property must start with "/"', 'OPERATION_PATH_INVALID', index, operation, document);
                    throw v432;
                } else {
                    const v433 = operation.op;
                    const v434 = v433 === 'move';
                    const v435 = operation.op;
                    const v436 = v435 === 'copy';
                    const v437 = v434 || v436;
                    const v438 = operation.from;
                    const v439 = typeof v438;
                    const v440 = v439 !== 'string';
                    const v441 = v437 && v440;
                    if (v441) {
                        const v442 = new exports.JsonPatchError('Operation `from` property is not present (applicable in `move` and `copy` operations)', 'OPERATION_FROM_REQUIRED', index, operation, document);
                        throw v442;
                    } else {
                        const v443 = operation.op;
                        const v444 = v443 === 'add';
                        const v445 = operation.op;
                        const v446 = v445 === 'replace';
                        const v447 = v444 || v446;
                        const v448 = operation.op;
                        const v449 = v448 === 'test';
                        const v450 = v447 || v449;
                        const v451 = operation.value;
                        const v452 = v451 === undefined;
                        const v453 = v450 && v452;
                        if (v453) {
                            const v454 = new exports.JsonPatchError('Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)', 'OPERATION_VALUE_REQUIRED', index, operation, document);
                            throw v454;
                        } else {
                            const v455 = operation.op;
                            const v456 = v455 === 'add';
                            const v457 = operation.op;
                            const v458 = v457 === 'replace';
                            const v459 = v456 || v458;
                            const v460 = operation.op;
                            const v461 = v460 === 'test';
                            const v462 = v459 || v461;
                            const v463 = operation.value;
                            const v464 = helpers_1.hasUndefined(v463);
                            const v465 = v462 && v464;
                            if (v465) {
                                const v466 = new exports.JsonPatchError('Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)', 'OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED', index, operation, document);
                                throw v466;
                            } else {
                                if (document) {
                                    const v467 = operation.op;
                                    const v468 = v467 == 'add';
                                    if (v468) {
                                        const v469 = operation.path;
                                        const v470 = v469.split('/');
                                        var pathLen = v470.length;
                                        const v471 = existingPathFragment.split('/');
                                        var existingPathLen = v471.length;
                                        const v472 = existingPathLen + 1;
                                        const v473 = pathLen !== v472;
                                        const v474 = pathLen !== existingPathLen;
                                        const v475 = v473 && v474;
                                        if (v475) {
                                            const v476 = new exports.JsonPatchError('Cannot perform an `add` operation at the desired path', 'OPERATION_PATH_CANNOT_ADD', index, operation, document);
                                            throw v476;
                                        }
                                    } else {
                                        const v477 = operation.op;
                                        const v478 = v477 === 'replace';
                                        const v479 = operation.op;
                                        const v480 = v479 === 'remove';
                                        const v481 = v478 || v480;
                                        const v482 = operation.op;
                                        const v483 = v482 === '_get';
                                        const v484 = v481 || v483;
                                        if (v484) {
                                            const v485 = operation.path;
                                            const v486 = v485 !== existingPathFragment;
                                            if (v486) {
                                                const v487 = new exports.JsonPatchError('Cannot perform the operation at a path that does not exist', 'OPERATION_PATH_UNRESOLVABLE', index, operation, document);
                                                throw v487;
                                            }
                                        } else {
                                            const v488 = operation.op;
                                            const v489 = v488 === 'move';
                                            const v490 = operation.op;
                                            const v491 = v490 === 'copy';
                                            const v492 = v489 || v491;
                                            if (v492) {
                                                const v493 = operation.from;
                                                var existingValue = {};
                                                existingValue.op = '_get';
                                                existingValue.path = v493;
                                                existingValue.value = undefined;
                                                const v494 = [existingValue];
                                                var error = validate(v494, document);
                                                const v495 = error.name;
                                                const v496 = v495 === 'OPERATION_PATH_UNRESOLVABLE';
                                                const v497 = error && v496;
                                                if (v497) {
                                                    const v498 = new exports.JsonPatchError('Cannot perform the operation from a path that does not exist', 'OPERATION_FROM_UNRESOLVABLE', index, operation, document);
                                                    throw v498;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};
exports.validator = validator;
const validate = function (sequence, document, externalValidator) {
    try {
        const v499 = Array.isArray(sequence);
        const v500 = !v499;
        if (v500) {
            const v501 = new exports.JsonPatchError('Patch sequence must be an array', 'SEQUENCE_NOT_AN_ARRAY');
            throw v501;
        }
        if (document) {
            const v502 = helpers_1._deepClone(document);
            const v503 = helpers_1._deepClone(sequence);
            const v504 = externalValidator || true;
            const v505 = applyPatch(v502, v503, v504);
            v505;
        } else {
            externalValidator = externalValidator || validator;
            var i = 0;
            const v506 = sequence.length;
            let v507 = i < v506;
            while (v507) {
                const v509 = sequence[i];
                const v510 = externalValidator(v509, i, document, undefined);
                v510;
                const v508 = i++;
                v507 = i < v506;
            }
        }
    } catch (e) {
        const v511 = exports.JsonPatchError;
        const v512 = e instanceof v511;
        if (v512) {
            return e;
        } else {
            throw e;
        }
    }
};
exports.validate = validate;
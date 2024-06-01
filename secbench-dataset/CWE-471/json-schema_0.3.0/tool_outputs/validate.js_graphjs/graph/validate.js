const v365 = function (root, factory) {
    const v351 = typeof define;
    const v352 = v351 === 'function';
    const v353 = define.amd;
    const v354 = v352 && v353;
    if (v354) {
        const v355 = [];
        const v357 = function () {
            const v356 = factory();
            return v356;
        };
        const v358 = define(v355, v357);
        v358;
    } else {
        const v359 = typeof module;
        const v360 = v359 === 'object';
        const v361 = module.exports;
        const v362 = v360 && v361;
        if (v362) {
            const v363 = factory();
            module.exports = v363;
        } else {
            const v364 = factory();
            root.jsonSchema = v364;
        }
    }
};
const v699 = function () {
    var exports = validate;
    const v366 = {};
    v366.type = 'integer';
    exports.Integer = v366;
    var primitiveConstructors = {};
    primitiveConstructors.String = String;
    primitiveConstructors.Boolean = Boolean;
    primitiveConstructors.Number = Number;
    primitiveConstructors.Object = Object;
    primitiveConstructors.Array = Array;
    primitiveConstructors.Date = Date;
    exports.validate = validate;
    const validate = function (instance, schema) {
        const v367 = { changing: false };
        const v368 = validate(instance, schema, v367);
        return v368;
    };
    ;
    const v372 = function (value, schema, property) {
        const v369 = property || 'property';
        const v370 = { changing: v369 };
        const v371 = validate(value, schema, v370);
        return v371;
    };
    exports.checkPropertyChange = v372;
    const v685 = function (instance, schema, options) {
        const v373 = !options;
        if (v373) {
            options = {};
        }
        var _changing = options.changing;
        const getType = function (schema) {
            const v374 = schema.type;
            const v375 = schema.name;
            const v376 = primitiveConstructors[v375];
            const v377 = v376 == schema;
            const v378 = schema.name;
            const v379 = v378.toLowerCase();
            const v380 = v377 && v379;
            const v381 = v374 || v380;
            return v381;
        };
        var errors = [];
        const checkProp = function (value, schema, path, i) {
            var l;
            const v382 = typeof i;
            const v383 = v382 == 'number';
            const v384 = '[' + i;
            const v385 = v384 + ']';
            const v386 = typeof i;
            const v387 = v386 == 'undefined';
            const v388 = '.' + i;
            let v389;
            if (v387) {
                v389 = '';
            } else {
                v389 = v388;
            }
            let v390;
            if (v383) {
                v390 = v385;
            } else {
                v390 = v389;
            }
            if (path) {
                path = v390;
            } else {
                path = i;
            }
            const addError = function (message) {
                const v391 = {
                    property: path,
                    message: message
                };
                const v392 = errors.push(v391);
                v392;
            };
            const v393 = typeof schema;
            const v394 = v393 != 'object';
            const v395 = schema instanceof Array;
            const v396 = v394 || v395;
            const v397 = typeof schema;
            const v398 = v397 != 'function';
            const v399 = path || v398;
            const v400 = v396 && v399;
            const v401 = getType(schema);
            const v402 = schema && v401;
            const v403 = !v402;
            const v404 = v400 && v403;
            if (v404) {
                const v405 = typeof schema;
                const v406 = v405 == 'function';
                if (v406) {
                    const v407 = value instanceof schema;
                    const v408 = !v407;
                    if (v408) {
                        const v409 = schema.name;
                        const v410 = 'is not an instance of the class/constructor ' + v409;
                        const v411 = addError(v410);
                        v411;
                    }
                } else {
                    if (schema) {
                        const v412 = 'Invalid schema/property definition ' + schema;
                        const v413 = addError(v412);
                        v413;
                    }
                }
                return null;
            }
            const v414 = schema.readonly;
            const v415 = _changing && v414;
            if (v415) {
                const v416 = addError('is a readonly field, it can not be changed');
                v416;
            }
            const v417 = schema['extends'];
            if (v417) {
                const v418 = schema['extends'];
                const v419 = checkProp(value, v418, path, i);
                v419;
            }
            const checkType = function (type, value) {
                if (type) {
                    const v420 = typeof type;
                    const v421 = v420 == 'string';
                    const v422 = type != 'any';
                    const v423 = v421 && v422;
                    const v424 = type == 'null';
                    const v425 = value !== null;
                    const v426 = typeof value;
                    const v427 = v426 != type;
                    let v428;
                    if (v424) {
                        v428 = v425;
                    } else {
                        v428 = v427;
                    }
                    const v429 = v423 && v428;
                    const v430 = value instanceof Array;
                    const v431 = type == 'array';
                    const v432 = v430 && v431;
                    const v433 = !v432;
                    const v434 = v429 && v433;
                    const v435 = value instanceof Date;
                    const v436 = type == 'date';
                    const v437 = v435 && v436;
                    const v438 = !v437;
                    const v439 = v434 && v438;
                    const v440 = type == 'integer';
                    const v441 = value % 1;
                    const v442 = v441 === 0;
                    const v443 = v440 && v442;
                    const v444 = !v443;
                    const v445 = v439 && v444;
                    if (v445) {
                        const v446 = value + ' - ';
                        const v447 = typeof value;
                        const v448 = v446 + v447;
                        const v449 = v448 + ' value found, but a ';
                        const v450 = v449 + type;
                        const v451 = v450 + ' is required';
                        const v452 = {
                            property: path,
                            message: v451
                        };
                        const v453 = [v452];
                        return v453;
                    }
                    const v454 = type instanceof Array;
                    if (v454) {
                        var unionErrors = [];
                        var j = 0;
                        const v455 = type.length;
                        let v456 = j < v455;
                        while (v456) {
                            const v458 = type[j];
                            const v459 = (unionErrors = checkType(v458, value)).length;
                            const v460 = !v459;
                            if (v460) {
                                break;
                            }
                            const v457 = j++;
                            v456 = j < v455;
                        }
                        const v461 = unionErrors.length;
                        if (v461) {
                            return unionErrors;
                        }
                    } else {
                        const v462 = typeof type;
                        const v463 = v462 == 'object';
                        if (v463) {
                            var priorErrors = errors;
                            errors = [];
                            const v464 = checkProp(value, type, path);
                            v464;
                            var theseErrors = errors;
                            errors = priorErrors;
                            return theseErrors;
                        }
                    }
                }
                const v465 = [];
                return v465;
            };
            const v466 = value === undefined;
            if (v466) {
                const v467 = schema.required;
                if (v467) {
                    const v468 = addError('is missing and it is required');
                    v468;
                }
            } else {
                const v469 = getType(schema);
                const v470 = checkType(v469, value);
                errors = errors.concat(v470);
                const v471 = schema.disallow;
                const v472 = schema.disallow;
                const v473 = checkType(v472, value);
                const v474 = v473.length;
                const v475 = !v474;
                const v476 = v471 && v475;
                if (v476) {
                    const v477 = addError(' disallowed value was matched');
                    v477;
                }
                const v478 = value !== null;
                if (v478) {
                    const v479 = value instanceof Array;
                    if (v479) {
                        const v480 = schema.items;
                        if (v480) {
                            const v481 = schema.items;
                            var itemsIsArray = v481 instanceof Array;
                            var propDef = schema.items;
                            (i = 0, l = value.length)
                            let v482 = i < l;
                            while (v482) {
                                if (itemsIsArray) {
                                    const v483 = schema.items;
                                    propDef = v483[i];
                                }
                                const v484 = options.coerce;
                                if (v484) {
                                    const v485 = value[i];
                                    const v486 = options.coerce(v485, propDef);
                                    value[i] = v486;
                                }
                                const v487 = value[i];
                                const v488 = checkProp(v487, propDef, path, i);
                                const v489 = errors.concat(v488);
                                v489;
                                v482 = i < l;
                            }
                        }
                        const v490 = schema.minItems;
                        const v491 = value.length;
                        const v492 = schema.minItems;
                        const v493 = v491 < v492;
                        const v494 = v490 && v493;
                        if (v494) {
                            const v495 = schema.minItems;
                            const v496 = 'There must be a minimum of ' + v495;
                            const v497 = v496 + ' in the array';
                            const v498 = addError(v497);
                            v498;
                        }
                        const v499 = schema.maxItems;
                        const v500 = value.length;
                        const v501 = schema.maxItems;
                        const v502 = v500 > v501;
                        const v503 = v499 && v502;
                        if (v503) {
                            const v504 = schema.maxItems;
                            const v505 = 'There must be a maximum of ' + v504;
                            const v506 = v505 + ' in the array';
                            const v507 = addError(v506);
                            v507;
                        }
                    } else {
                        const v508 = schema.properties;
                        const v509 = schema.additionalProperties;
                        const v510 = v508 || v509;
                        if (v510) {
                            const v511 = schema.properties;
                            const v512 = schema.additionalProperties;
                            const v513 = checkObj(value, v511, path, v512);
                            const v514 = errors.concat(v513);
                            v514;
                        }
                    }
                    const v515 = schema.pattern;
                    const v516 = typeof value;
                    const v517 = v516 == 'string';
                    const v518 = v515 && v517;
                    const v519 = schema.pattern;
                    const v520 = value.match(v519);
                    const v521 = !v520;
                    const v522 = v518 && v521;
                    if (v522) {
                        const v523 = schema.pattern;
                        const v524 = 'does not match the regex pattern ' + v523;
                        const v525 = addError(v524);
                        v525;
                    }
                    const v526 = schema.maxLength;
                    const v527 = typeof value;
                    const v528 = v527 == 'string';
                    const v529 = v526 && v528;
                    const v530 = value.length;
                    const v531 = schema.maxLength;
                    const v532 = v530 > v531;
                    const v533 = v529 && v532;
                    if (v533) {
                        const v534 = schema.maxLength;
                        const v535 = 'may only be ' + v534;
                        const v536 = v535 + ' characters long';
                        const v537 = addError(v536);
                        v537;
                    }
                    const v538 = schema.minLength;
                    const v539 = typeof value;
                    const v540 = v539 == 'string';
                    const v541 = v538 && v540;
                    const v542 = value.length;
                    const v543 = schema.minLength;
                    const v544 = v542 < v543;
                    const v545 = v541 && v544;
                    if (v545) {
                        const v546 = schema.minLength;
                        const v547 = 'must be at least ' + v546;
                        const v548 = v547 + ' characters long';
                        const v549 = addError(v548);
                        v549;
                    }
                    const v550 = schema.minimum;
                    const v551 = typeof v550;
                    const v552 = v551 !== 'undefined';
                    const v553 = typeof value;
                    const v554 = schema.minimum;
                    const v555 = typeof v554;
                    const v556 = v553 == v555;
                    const v557 = v552 && v556;
                    const v558 = schema.minimum;
                    const v559 = v558 > value;
                    const v560 = v557 && v559;
                    if (v560) {
                        const v561 = schema.minimum;
                        const v562 = 'must have a minimum value of ' + v561;
                        const v563 = addError(v562);
                        v563;
                    }
                    const v564 = schema.maximum;
                    const v565 = typeof v564;
                    const v566 = v565 !== 'undefined';
                    const v567 = typeof value;
                    const v568 = schema.maximum;
                    const v569 = typeof v568;
                    const v570 = v567 == v569;
                    const v571 = v566 && v570;
                    const v572 = schema.maximum;
                    const v573 = v572 < value;
                    const v574 = v571 && v573;
                    if (v574) {
                        const v575 = schema.maximum;
                        const v576 = 'must have a maximum value of ' + v575;
                        const v577 = addError(v576);
                        v577;
                    }
                    const v578 = schema['enum'];
                    if (v578) {
                        var enumer = schema['enum'];
                        l = enumer.length;
                        var found;
                        var j = 0;
                        let v579 = j < l;
                        while (v579) {
                            const v581 = enumer[j];
                            const v582 = v581 === value;
                            if (v582) {
                                found = 1;
                                break;
                            }
                            const v580 = j++;
                            v579 = j < l;
                        }
                        const v583 = !found;
                        if (v583) {
                            const v584 = enumer.join(', ');
                            const v585 = 'does not have a value in the enumeration ' + v584;
                            const v586 = addError(v585);
                            v586;
                        }
                    }
                    const v587 = schema.maxDecimal;
                    const v588 = typeof v587;
                    const v589 = v588 == 'number';
                    const v590 = value.toString();
                    const v591 = schema.maxDecimal;
                    const v592 = v591 + 1;
                    const v593 = '\\.[0-9]{' + v592;
                    const v594 = v593 + ',}';
                    const v595 = new RegExp(v594);
                    const v596 = v590.match(v595);
                    const v597 = v589 && v596;
                    if (v597) {
                        const v598 = schema.maxDecimal;
                        const v599 = 'may only have ' + v598;
                        const v600 = v599 + ' digits of decimal places';
                        const v601 = addError(v600);
                        v601;
                    }
                }
            }
            return null;
        };
        const checkObj = function (instance, objTypeDef, path, additionalProp) {
            const v602 = typeof objTypeDef;
            const v603 = v602 == 'object';
            if (v603) {
                const v604 = typeof instance;
                const v605 = v604 != 'object';
                const v606 = instance instanceof Array;
                const v607 = v605 || v606;
                if (v607) {
                    const v608 = {
                        property: path,
                        message: 'an object is required'
                    };
                    const v609 = errors.push(v608);
                    v609;
                }
                let i;
                for (i in objTypeDef) {
                    const v610 = objTypeDef.hasOwnProperty(i);
                    if (v610) {
                        var value = instance[i];
                        const v611 = value === undefined;
                        const v612 = options.existingOnly;
                        const v613 = v611 && v612;
                        if (v613) {
                            continue;
                        }
                        var propDef = objTypeDef[i];
                        const v614 = value === undefined;
                        const v615 = propDef['default'];
                        const v616 = v614 && v615;
                        if (v616) {
                            const v617 = propDef['default'];
                            instance.i = v617;
                            value = instance[i];
                        }
                        const v618 = options.coerce;
                        const v619 = i in instance;
                        const v620 = v618 && v619;
                        if (v620) {
                            const v621 = options.coerce(value, propDef);
                            instance.i = v621;
                            value = instance[i];
                        }
                        const v622 = checkProp(value, propDef, path, i);
                        v622;
                    }
                }
            }
            for (i in instance) {
                const v623 = instance.hasOwnProperty(i);
                const v624 = i.charAt(0);
                const v625 = v624 == '_';
                const v626 = i.charAt(1);
                const v627 = v626 == '_';
                const v628 = v625 && v627;
                const v629 = !v628;
                const v630 = v623 && v629;
                const v631 = v630 && objTypeDef;
                const v632 = objTypeDef[i];
                const v633 = !v632;
                const v634 = v631 && v633;
                const v635 = additionalProp === false;
                const v636 = v634 && v635;
                if (v636) {
                    const v637 = options.filter;
                    if (v637) {
                        const v638 = instance[i];
                        const v639 = delete v638;
                        v639;
                        continue;
                    } else {
                        const v640 = 'The property ' + i;
                        const v641 = v640 + ' is not defined in the schema and the schema does not allow additional properties';
                        const v642 = {
                            property: path,
                            message: v641
                        };
                        const v643 = errors.push(v642);
                        v643;
                    }
                }
                const v644 = objTypeDef[i];
                const v645 = objTypeDef && v644;
                const v646 = objTypeDef[i];
                const v647 = v646.requires;
                var requires = v645 && v647;
                const v648 = requires in instance;
                const v649 = !v648;
                const v650 = requires && v649;
                if (v650) {
                    const v651 = 'the presence of the property ' + i;
                    const v652 = v651 + ' requires that ';
                    const v653 = v652 + requires;
                    const v654 = v653 + ' also be present';
                    const v655 = {
                        property: path,
                        message: v654
                    };
                    const v656 = errors.push(v655);
                    v656;
                }
                value = instance[i];
                const v657 = typeof objTypeDef;
                const v658 = v657 == 'object';
                const v659 = objTypeDef && v658;
                const v660 = !v659;
                const v661 = i in objTypeDef;
                const v662 = !v661;
                const v663 = v660 || v662;
                const v664 = additionalProp && v663;
                if (v664) {
                    const v665 = options.coerce;
                    if (v665) {
                        const v666 = options.coerce(value, additionalProp);
                        instance.i = v666;
                        value = instance[i];
                    }
                    const v667 = checkProp(value, additionalProp, path, i);
                    v667;
                }
                const v668 = !_changing;
                const v669 = v668 && value;
                const v670 = value.$schema;
                const v671 = v669 && v670;
                if (v671) {
                    const v672 = value.$schema;
                    const v673 = checkProp(value, v672, path, i);
                    errors = errors.concat(v673);
                }
            }
            return errors;
        };
        if (schema) {
            const v674 = _changing || '';
            const v675 = checkProp(instance, schema, '', v674);
            v675;
        }
        const v676 = !_changing;
        const v677 = v676 && instance;
        const v678 = instance.$schema;
        const v679 = v677 && v678;
        if (v679) {
            const v680 = instance.$schema;
            const v681 = checkProp(instance, v680, '', '');
            v681;
        }
        const v682 = errors.length;
        const v683 = !v682;
        const v684 = {};
        v684.valid = v683;
        v684.errors = errors;
        return v684;
    };
    exports._validate = v685;
    var validate = exports._validate;
    const v698 = function (result) {
        const v686 = result.valid;
        const v687 = !v686;
        if (v687) {
            const v688 = result.errors;
            const v694 = function (error) {
                const v689 = error.property;
                const v690 = 'for property ' + v689;
                const v691 = v690 + ': ';
                const v692 = error.message;
                const v693 = v691 + v692;
                return v693;
            };
            const v695 = v688.map(v694);
            const v696 = v695.join(', \n');
            const v697 = new TypeError(v696);
            throw v697;
        }
    };
    exports.mustBeValid = v698;
    return exports;
};
const v700 = v365(this, v699);
v700;
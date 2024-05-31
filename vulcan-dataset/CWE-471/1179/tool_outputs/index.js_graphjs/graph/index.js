const v611 = function (args, opts) {
    const v313 = !opts;
    if (v313) {
        opts = {};
    }
    const v314 = {};
    const v315 = {};
    var flags = {};
    flags.bools = v314;
    flags.strings = v315;
    flags.unknownFn = null;
    const v316 = opts['unknown'];
    const v317 = typeof v316;
    const v318 = v317 === 'function';
    if (v318) {
        const v319 = opts['unknown'];
        flags.unknownFn = v319;
    }
    const v320 = opts['boolean'];
    const v321 = typeof v320;
    const v322 = v321 === 'boolean';
    const v323 = opts['boolean'];
    const v324 = v322 && v323;
    if (v324) {
        flags.allBools = true;
    } else {
        const v325 = [];
        const v326 = opts['boolean'];
        const v327 = v325.concat(v326);
        const v328 = v327.filter(Boolean);
        const v330 = function (key) {
            const v329 = flags.bools;
            v329[key] = true;
        };
        const v331 = v328.forEach(v330);
        v331;
    }
    var aliases = {};
    const v332 = opts.alias;
    const v333 = {};
    const v334 = v332 || v333;
    const v335 = Object.keys(v334);
    const v349 = function (key) {
        const v336 = [];
        const v337 = opts.alias;
        const v338 = v337[key];
        const v339 = v336.concat(v338);
        aliases[key] = v339;
        const v340 = aliases[key];
        const v347 = function (x) {
            const v341 = [key];
            const v342 = aliases[key];
            const v344 = function (y) {
                const v343 = x !== y;
                return v343;
            };
            const v345 = v342.filter(v344);
            const v346 = v341.concat(v345);
            aliases[x] = v346;
        };
        const v348 = v340.forEach(v347);
        v348;
    };
    const v350 = v335.forEach(v349);
    v350;
    const v351 = [];
    const v352 = opts.string;
    const v353 = v351.concat(v352);
    const v354 = v353.filter(Boolean);
    const v359 = function (key) {
        const v355 = flags.strings;
        v355[key] = true;
        const v356 = aliases[key];
        if (v356) {
            const v357 = flags.strings;
            const v358 = aliases[key];
            v357[v358] = true;
        }
    };
    const v360 = v354.forEach(v359);
    v360;
    const v361 = opts['default'];
    const v362 = {};
    var defaults = v361 || v362;
    const v363 = [];
    var argv = {};
    argv._ = v363;
    const v364 = flags.bools;
    const v365 = Object.keys(v364);
    const v371 = function (key) {
        const v366 = defaults[key];
        const v367 = v366 === undefined;
        const v368 = defaults[key];
        let v369;
        if (v367) {
            v369 = false;
        } else {
            v369 = v368;
        }
        const v370 = setArg(key, v369);
        v370;
    };
    const v372 = v365.forEach(v371);
    v372;
    var notFlags = [];
    const v373 = args.indexOf('--');
    const v374 = -1;
    const v375 = v373 !== v374;
    if (v375) {
        const v376 = args.indexOf('--');
        const v377 = v376 + 1;
        notFlags = args.slice(v377);
        const v378 = args.indexOf('--');
        args = args.slice(0, v378);
    }
    const argDefined = function (key, arg) {
        const v379 = flags.allBools;
        const v380 = /^--[^=]+$/.test(arg);
        const v381 = v379 && v380;
        const v382 = flags.strings;
        const v383 = v382[key];
        const v384 = v381 || v383;
        const v385 = flags.bools;
        const v386 = v385[key];
        const v387 = v384 || v386;
        const v388 = aliases[key];
        const v389 = v387 || v388;
        return v389;
    };
    const setArg = function (key, val, arg) {
        const v390 = flags.unknownFn;
        const v391 = arg && v390;
        const v392 = argDefined(key, arg);
        const v393 = !v392;
        const v394 = v391 && v393;
        if (v394) {
            const v395 = flags.unknownFn(arg);
            const v396 = v395 === false;
            if (v396) {
                return;
            }
        }
        let value;
        const v397 = flags.strings;
        const v398 = v397[key];
        const v399 = !v398;
        const v400 = isNumber(val);
        const v401 = v399 && v400;
        const v402 = Number(val);
        if (v401) {
            value = v402;
        } else {
            value = val;
        }
        const v403 = key.split('.');
        const v404 = setKey(argv, v403, value);
        v404;
        const v405 = aliases[key];
        const v406 = [];
        const v407 = v405 || v406;
        const v410 = function (x) {
            const v408 = x.split('.');
            const v409 = setKey(argv, v408, value);
            v409;
        };
        const v411 = v407.forEach(v410);
        v411;
    };
    const setKey = function (obj, keys, value) {
        var o = obj;
        const v412 = -1;
        const v413 = keys.slice(0, v412);
        const v422 = function (key) {
            const v414 = o[key];
            const v415 = v414 === undefined;
            if (v415) {
                const v416 = {};
                o[key] = v416;
            }
            const v417 = o[key];
            const v418 = {};
            const v419 = v418.__proto__;
            const v420 = v417 === v419;
            if (v420) {
                const v421 = {};
                o[key] = v421;
            }
            o = o[key];
        };
        const v423 = v413.forEach(v422);
        v423;
        const v424 = keys.length;
        const v425 = v424 - 1;
        var key = keys[v425];
        const v426 = o[key];
        const v427 = v426 === undefined;
        const v428 = flags.bools;
        const v429 = v428[key];
        const v430 = v427 || v429;
        const v431 = o[key];
        const v432 = typeof v431;
        const v433 = v432 === 'boolean';
        const v434 = v430 || v433;
        if (v434) {
            o[key] = value;
        } else {
            const v435 = o[key];
            const v436 = Array.isArray(v435);
            if (v436) {
                const v437 = o[key];
                const v438 = v437.push(value);
                v438;
            } else {
                const v439 = o[key];
                o[key] = [
                    v439,
                    value
                ];
            }
        }
    };
    const aliasIsBoolean = function (key) {
        const v440 = aliases[key];
        const v443 = function (x) {
            const v441 = flags.bools;
            const v442 = v441[x];
            return v442;
        };
        const v444 = v440.some(v443);
        return v444;
    };
    var i = 0;
    const v445 = args.length;
    let v446 = i < v445;
    while (v446) {
        var arg = args[i];
        const v448 = /^--.+=/.test(arg);
        if (v448) {
            var m = arg.match(/^--([^=]+)=([\s\S]*)$/);
            var key = m[1];
            var value = m[2];
            const v449 = flags.bools;
            const v450 = v449[key];
            if (v450) {
                value = value !== 'false';
            }
            const v451 = setArg(key, value, arg);
            v451;
        } else {
            const v452 = /^--no-.+/.test(arg);
            if (v452) {
                const v453 = arg.match(/^--no-(.+)/);
                var key = v453[1];
                const v454 = setArg(key, false, arg);
                v454;
            } else {
                const v455 = /^--.+/.test(arg);
                if (v455) {
                    const v456 = arg.match(/^--(.+)/);
                    var key = v456[1];
                    const v457 = i + 1;
                    var next = args[v457];
                    const v458 = next !== undefined;
                    const v459 = /^-/.test(next);
                    const v460 = !v459;
                    const v461 = v458 && v460;
                    const v462 = flags.bools;
                    const v463 = v462[key];
                    const v464 = !v463;
                    const v465 = v461 && v464;
                    const v466 = flags.allBools;
                    const v467 = !v466;
                    const v468 = v465 && v467;
                    const v469 = aliases[key];
                    const v470 = aliasIsBoolean(key);
                    const v471 = !v470;
                    let v472;
                    if (v469) {
                        v472 = v471;
                    } else {
                        v472 = true;
                    }
                    const v473 = v468 && v472;
                    if (v473) {
                        const v474 = setArg(key, next, arg);
                        v474;
                        const v475 = i++;
                        v475;
                    } else {
                        const v476 = /^(true|false)$/.test(next);
                        if (v476) {
                            const v477 = next === 'true';
                            const v478 = setArg(key, v477, arg);
                            v478;
                            const v479 = i++;
                            v479;
                        } else {
                            const v480 = flags.strings;
                            const v481 = v480[key];
                            let v482;
                            if (v481) {
                                v482 = '';
                            } else {
                                v482 = true;
                            }
                            const v483 = setArg(key, v482, arg);
                            v483;
                        }
                    }
                } else {
                    const v484 = /^-[^-]+/.test(arg);
                    if (v484) {
                        const v485 = -1;
                        const v486 = arg.slice(1, v485);
                        var letters = v486.split('');
                        var broken = false;
                        var j = 0;
                        const v487 = letters.length;
                        let v488 = j < v487;
                        while (v488) {
                            const v490 = j + 2;
                            var next = arg.slice(v490);
                            const v491 = next === '-';
                            if (v491) {
                                const v492 = letters[j];
                                const v493 = setArg(v492, next, arg);
                                v493;
                                continue;
                            }
                            const v494 = letters[j];
                            const v495 = /[A-Za-z]/.test(v494);
                            const v496 = /=/.test(next);
                            const v497 = v495 && v496;
                            if (v497) {
                                const v498 = letters[j];
                                const v499 = next.split('=');
                                const v500 = v499[1];
                                const v501 = setArg(v498, v500, arg);
                                v501;
                                broken = true;
                                break;
                            }
                            const v502 = letters[j];
                            const v503 = /[A-Za-z]/.test(v502);
                            const v504 = /-?\d+(\.\d*)?(e-?\d+)?$/.test(next);
                            const v505 = v503 && v504;
                            if (v505) {
                                const v506 = letters[j];
                                const v507 = setArg(v506, next, arg);
                                v507;
                                broken = true;
                                break;
                            }
                            const v508 = j + 1;
                            const v509 = letters[v508];
                            const v510 = j + 1;
                            const v511 = letters[v510];
                            const v512 = v511.match(/\W/);
                            const v513 = v509 && v512;
                            if (v513) {
                                const v514 = letters[j];
                                const v515 = j + 2;
                                const v516 = arg.slice(v515);
                                const v517 = setArg(v514, v516, arg);
                                v517;
                                broken = true;
                                break;
                            } else {
                                const v518 = letters[j];
                                const v519 = flags.strings;
                                const v520 = letters[j];
                                const v521 = v519[v520];
                                let v522;
                                if (v521) {
                                    v522 = '';
                                } else {
                                    v522 = true;
                                }
                                const v523 = setArg(v518, v522, arg);
                                v523;
                            }
                            const v489 = j++;
                            v488 = j < v487;
                        }
                        const v524 = -1;
                        const v525 = arg.slice(v524);
                        var key = v525[0];
                        const v526 = !broken;
                        const v527 = key !== '-';
                        const v528 = v526 && v527;
                        if (v528) {
                            const v529 = i + 1;
                            const v530 = args[v529];
                            const v531 = i + 1;
                            const v532 = args[v531];
                            const v533 = /^(-|--)[^-]/.test(v532);
                            const v534 = !v533;
                            const v535 = v530 && v534;
                            const v536 = flags.bools;
                            const v537 = v536[key];
                            const v538 = !v537;
                            const v539 = v535 && v538;
                            const v540 = aliases[key];
                            const v541 = aliasIsBoolean(key);
                            const v542 = !v541;
                            let v543;
                            if (v540) {
                                v543 = v542;
                            } else {
                                v543 = true;
                            }
                            const v544 = v539 && v543;
                            if (v544) {
                                const v545 = i + 1;
                                const v546 = args[v545];
                                const v547 = setArg(key, v546, arg);
                                v547;
                                const v548 = i++;
                                v548;
                            } else {
                                const v549 = i + 1;
                                const v550 = args[v549];
                                const v551 = i + 1;
                                const v552 = args[v551];
                                const v553 = /^(true|false)$/.test(v552);
                                const v554 = v550 && v553;
                                if (v554) {
                                    const v555 = i + 1;
                                    const v556 = args[v555];
                                    const v557 = v556 === 'true';
                                    const v558 = setArg(key, v557, arg);
                                    v558;
                                    const v559 = i++;
                                    v559;
                                } else {
                                    const v560 = flags.strings;
                                    const v561 = v560[key];
                                    let v562;
                                    if (v561) {
                                        v562 = '';
                                    } else {
                                        v562 = true;
                                    }
                                    const v563 = setArg(key, v562, arg);
                                    v563;
                                }
                            }
                        }
                    } else {
                        const v564 = flags.unknownFn;
                        const v565 = !v564;
                        const v566 = flags.unknownFn(arg);
                        const v567 = v566 !== false;
                        const v568 = v565 || v567;
                        if (v568) {
                            const v569 = argv._;
                            const v570 = flags.strings;
                            const v571 = v570['_'];
                            const v572 = isNumber(arg);
                            const v573 = !v572;
                            const v574 = v571 || v573;
                            const v575 = Number(arg);
                            let v576;
                            if (v574) {
                                v576 = arg;
                            } else {
                                v576 = v575;
                            }
                            const v577 = v569.push(v576);
                            v577;
                        }
                        const v578 = opts.stopEarly;
                        if (v578) {
                            const v579 = argv._;
                            const v580 = v579.push;
                            const v581 = argv._;
                            const v582 = i + 1;
                            const v583 = args.slice(v582);
                            const v584 = v580.apply(v581, v583);
                            v584;
                            break;
                        }
                    }
                }
            }
        }
        const v447 = i++;
        v446 = i < v445;
    }
    const v585 = Object.keys(defaults);
    const v600 = function (key) {
        const v586 = key.split('.');
        const v587 = hasKey(argv, v586);
        const v588 = !v587;
        if (v588) {
            const v589 = key.split('.');
            const v590 = defaults[key];
            const v591 = setKey(argv, v589, v590);
            v591;
            const v592 = aliases[key];
            const v593 = [];
            const v594 = v592 || v593;
            const v598 = function (x) {
                const v595 = x.split('.');
                const v596 = defaults[key];
                const v597 = setKey(argv, v595, v596);
                v597;
            };
            const v599 = v594.forEach(v598);
            v599;
        }
    };
    const v601 = v585.forEach(v600);
    v601;
    const v602 = opts['--'];
    if (v602) {
        argv['--'] = new Array();
        const v605 = function (key) {
            const v603 = argv['--'];
            const v604 = v603.push(key);
            v604;
        };
        const v606 = notFlags.forEach(v605);
        v606;
    } else {
        const v609 = function (key) {
            const v607 = argv._;
            const v608 = v607.push(key);
            v608;
        };
        const v610 = notFlags.forEach(v609);
        v610;
    }
    return argv;
};
module.exports = v611;
const hasKey = function (obj, keys) {
    var o = obj;
    const v612 = -1;
    const v613 = keys.slice(0, v612);
    const v616 = function (key) {
        const v614 = o[key];
        const v615 = {};
        o = v614 || v615;
    };
    const v617 = v613.forEach(v616);
    v617;
    const v618 = keys.length;
    const v619 = v618 - 1;
    var key = keys[v619];
    const v620 = key in o;
    return v620;
};
const isNumber = function (x) {
    const v621 = typeof x;
    const v622 = v621 === 'number';
    if (v622) {
        return true;
    }
    const v623 = /^0x[0-9a-f]+$/i.test(x);
    if (v623) {
        return true;
    }
    const v624 = /^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(x);
    return v624;
};
const v503 = function (args, opts) {
    const v269 = !opts;
    if (v269) {
        opts = {};
    }
    const v270 = {};
    const v271 = {};
    var flags = {};
    flags.bools = v270;
    flags.strings = v271;
    const v272 = opts['boolean'];
    const v273 = typeof v272;
    const v274 = v273 === 'boolean';
    const v275 = opts['boolean'];
    const v276 = v274 && v275;
    if (v276) {
        flags.allBools = true;
    } else {
        const v277 = [];
        const v278 = opts['boolean'];
        const v279 = v277.concat(v278);
        const v280 = v279.filter(Boolean);
        const v282 = function (key) {
            const v281 = flags.bools;
            v281[key] = true;
        };
        const v283 = v280.forEach(v282);
        v283;
    }
    var aliases = {};
    const v284 = opts.alias;
    const v285 = {};
    const v286 = v284 || v285;
    const v287 = Object.keys(v286);
    const v301 = function (key) {
        const v288 = [];
        const v289 = opts.alias;
        const v290 = v289[key];
        const v291 = v288.concat(v290);
        aliases[key] = v291;
        const v292 = aliases[key];
        const v299 = function (x) {
            const v293 = [key];
            const v294 = aliases[key];
            const v296 = function (y) {
                const v295 = x !== y;
                return v295;
            };
            const v297 = v294.filter(v296);
            const v298 = v293.concat(v297);
            aliases[x] = v298;
        };
        const v300 = v292.forEach(v299);
        v300;
    };
    const v302 = v287.forEach(v301);
    v302;
    const v303 = [];
    const v304 = opts.string;
    const v305 = v303.concat(v304);
    const v306 = v305.filter(Boolean);
    const v311 = function (key) {
        const v307 = flags.strings;
        v307[key] = true;
        const v308 = aliases[key];
        if (v308) {
            const v309 = flags.strings;
            const v310 = aliases[key];
            v309[v310] = true;
        }
    };
    const v312 = v306.forEach(v311);
    v312;
    const v313 = opts['default'];
    const v314 = {};
    var defaults = v313 || v314;
    const v315 = [];
    var argv = {};
    argv._ = v315;
    const v316 = flags.bools;
    const v317 = Object.keys(v316);
    const v323 = function (key) {
        const v318 = defaults[key];
        const v319 = v318 === undefined;
        const v320 = defaults[key];
        let v321;
        if (v319) {
            v321 = false;
        } else {
            v321 = v320;
        }
        const v322 = setArg(key, v321);
        v322;
    };
    const v324 = v317.forEach(v323);
    v324;
    var notFlags = [];
    const v325 = args.indexOf('--');
    const v326 = -1;
    const v327 = v325 !== v326;
    if (v327) {
        const v328 = args.indexOf('--');
        const v329 = v328 + 1;
        notFlags = args.slice(v329);
        const v330 = args.indexOf('--');
        args = args.slice(0, v330);
    }
    const setArg = function (key, val) {
        let value;
        const v331 = flags.strings;
        const v332 = v331[key];
        const v333 = !v332;
        const v334 = isNumber(val);
        const v335 = v333 && v334;
        const v336 = Number(val);
        if (v335) {
            value = v336;
        } else {
            value = val;
        }
        const v337 = key.split('.');
        const v338 = setKey(argv, v337, value);
        v338;
        const v339 = aliases[key];
        const v340 = [];
        const v341 = v339 || v340;
        const v344 = function (x) {
            const v342 = x.split('.');
            const v343 = setKey(argv, v342, value);
            v343;
        };
        const v345 = v341.forEach(v344);
        v345;
    };
    var i = 0;
    const v346 = args.length;
    let v347 = i < v346;
    while (v347) {
        var arg = args[i];
        const v349 = /^--.+=/.test(arg);
        if (v349) {
            var m = arg.match(/^--([^=]+)=([\s\S]*)$/);
            const v350 = m[1];
            const v351 = m[2];
            const v352 = setArg(v350, v351);
            v352;
        } else {
            const v353 = /^--no-.+/.test(arg);
            if (v353) {
                const v354 = arg.match(/^--no-(.+)/);
                var key = v354[1];
                const v355 = setArg(key, false);
                v355;
            } else {
                const v356 = /^--.+/.test(arg);
                if (v356) {
                    const v357 = arg.match(/^--(.+)/);
                    var key = v357[1];
                    const v358 = i + 1;
                    var next = args[v358];
                    const v359 = next !== undefined;
                    const v360 = /^-/.test(next);
                    const v361 = !v360;
                    const v362 = v359 && v361;
                    const v363 = flags.bools;
                    const v364 = v363[key];
                    const v365 = !v364;
                    const v366 = v362 && v365;
                    const v367 = flags.allBools;
                    const v368 = !v367;
                    const v369 = v366 && v368;
                    const v370 = aliases[key];
                    const v371 = flags.bools;
                    const v372 = aliases[key];
                    const v373 = v371[v372];
                    const v374 = !v373;
                    let v375;
                    if (v370) {
                        v375 = v374;
                    } else {
                        v375 = true;
                    }
                    const v376 = v369 && v375;
                    if (v376) {
                        const v377 = setArg(key, next);
                        v377;
                        const v378 = i++;
                        v378;
                    } else {
                        const v379 = /^(true|false)$/.test(next);
                        if (v379) {
                            const v380 = next === 'true';
                            const v381 = setArg(key, v380);
                            v381;
                            const v382 = i++;
                            v382;
                        } else {
                            const v383 = flags.strings;
                            const v384 = v383[key];
                            let v385;
                            if (v384) {
                                v385 = '';
                            } else {
                                v385 = true;
                            }
                            const v386 = setArg(key, v385);
                            v386;
                        }
                    }
                } else {
                    const v387 = /^-[^-]+/.test(arg);
                    if (v387) {
                        const v388 = -1;
                        const v389 = arg.slice(1, v388);
                        var letters = v389.split('');
                        var broken = false;
                        var j = 0;
                        const v390 = letters.length;
                        let v391 = j < v390;
                        while (v391) {
                            const v393 = j + 2;
                            var next = arg.slice(v393);
                            const v394 = next === '-';
                            if (v394) {
                                const v395 = letters[j];
                                const v396 = setArg(v395, next);
                                v396;
                                continue;
                            }
                            const v397 = letters[j];
                            const v398 = /[A-Za-z]/.test(v397);
                            const v399 = /-?\d+(\.\d*)?(e-?\d+)?$/.test(next);
                            const v400 = v398 && v399;
                            if (v400) {
                                const v401 = letters[j];
                                const v402 = setArg(v401, next);
                                v402;
                                broken = true;
                                break;
                            }
                            const v403 = j + 1;
                            const v404 = letters[v403];
                            const v405 = j + 1;
                            const v406 = letters[v405];
                            const v407 = v406.match(/\W/);
                            const v408 = v404 && v407;
                            if (v408) {
                                const v409 = letters[j];
                                const v410 = j + 2;
                                const v411 = arg.slice(v410);
                                const v412 = setArg(v409, v411);
                                v412;
                                broken = true;
                                break;
                            } else {
                                const v413 = letters[j];
                                const v414 = flags.strings;
                                const v415 = letters[j];
                                const v416 = v414[v415];
                                let v417;
                                if (v416) {
                                    v417 = '';
                                } else {
                                    v417 = true;
                                }
                                const v418 = setArg(v413, v417);
                                v418;
                            }
                            const v392 = j++;
                            v391 = j < v390;
                        }
                        const v419 = -1;
                        const v420 = arg.slice(v419);
                        var key = v420[0];
                        const v421 = !broken;
                        const v422 = key !== '-';
                        const v423 = v421 && v422;
                        if (v423) {
                            const v424 = i + 1;
                            const v425 = args[v424];
                            const v426 = i + 1;
                            const v427 = args[v426];
                            const v428 = /^(-|--)[^-]/.test(v427);
                            const v429 = !v428;
                            const v430 = v425 && v429;
                            const v431 = flags.bools;
                            const v432 = v431[key];
                            const v433 = !v432;
                            const v434 = v430 && v433;
                            const v435 = aliases[key];
                            const v436 = flags.bools;
                            const v437 = aliases[key];
                            const v438 = v436[v437];
                            const v439 = !v438;
                            let v440;
                            if (v435) {
                                v440 = v439;
                            } else {
                                v440 = true;
                            }
                            const v441 = v434 && v440;
                            if (v441) {
                                const v442 = i + 1;
                                const v443 = args[v442];
                                const v444 = setArg(key, v443);
                                v444;
                                const v445 = i++;
                                v445;
                            } else {
                                const v446 = i + 1;
                                const v447 = args[v446];
                                const v448 = i + 1;
                                const v449 = args[v448];
                                const v450 = /true|false/.test(v449);
                                const v451 = v447 && v450;
                                if (v451) {
                                    const v452 = i + 1;
                                    const v453 = args[v452];
                                    const v454 = v453 === 'true';
                                    const v455 = setArg(key, v454);
                                    v455;
                                    const v456 = i++;
                                    v456;
                                } else {
                                    const v457 = flags.strings;
                                    const v458 = v457[key];
                                    let v459;
                                    if (v458) {
                                        v459 = '';
                                    } else {
                                        v459 = true;
                                    }
                                    const v460 = setArg(key, v459);
                                    v460;
                                }
                            }
                        }
                    } else {
                        const v461 = argv._;
                        const v462 = flags.strings;
                        const v463 = v462['_'];
                        const v464 = isNumber(arg);
                        const v465 = !v464;
                        const v466 = v463 || v465;
                        const v467 = Number(arg);
                        let v468;
                        if (v466) {
                            v468 = arg;
                        } else {
                            v468 = v467;
                        }
                        const v469 = v461.push(v468);
                        v469;
                        const v470 = opts.stopEarly;
                        if (v470) {
                            const v471 = argv._;
                            const v472 = v471.push;
                            const v473 = argv._;
                            const v474 = i + 1;
                            const v475 = args.slice(v474);
                            const v476 = v472.apply(v473, v475);
                            v476;
                            break;
                        }
                    }
                }
            }
        }
        const v348 = i++;
        v347 = i < v346;
    }
    const v477 = Object.keys(defaults);
    const v492 = function (key) {
        const v478 = key.split('.');
        const v479 = hasKey(argv, v478);
        const v480 = !v479;
        if (v480) {
            const v481 = key.split('.');
            const v482 = defaults[key];
            const v483 = setKey(argv, v481, v482);
            v483;
            const v484 = aliases[key];
            const v485 = [];
            const v486 = v484 || v485;
            const v490 = function (x) {
                const v487 = x.split('.');
                const v488 = defaults[key];
                const v489 = setKey(argv, v487, v488);
                v489;
            };
            const v491 = v486.forEach(v490);
            v491;
        }
    };
    const v493 = v477.forEach(v492);
    v493;
    const v494 = opts['--'];
    if (v494) {
        argv['--'] = new Array();
        const v497 = function (key) {
            const v495 = argv['--'];
            const v496 = v495.push(key);
            v496;
        };
        const v498 = notFlags.forEach(v497);
        v498;
    } else {
        const v501 = function (key) {
            const v499 = argv._;
            const v500 = v499.push(key);
            v500;
        };
        const v502 = notFlags.forEach(v501);
        v502;
    }
    return argv;
};
module.exports = v503;
const hasKey = function (obj, keys) {
    var o = obj;
    const v504 = -1;
    const v505 = keys.slice(0, v504);
    const v508 = function (key) {
        const v506 = o[key];
        const v507 = {};
        o = v506 || v507;
    };
    const v509 = v505.forEach(v508);
    v509;
    const v510 = keys.length;
    const v511 = v510 - 1;
    var key = keys[v511];
    const v512 = key in o;
    return v512;
};
const setKey = function (obj, keys, value) {
    var o = obj;
    const v513 = -1;
    const v514 = keys.slice(0, v513);
    const v518 = function (key) {
        const v515 = o[key];
        const v516 = v515 === undefined;
        if (v516) {
            const v517 = {};
            o[key] = v517;
        }
        o = o[key];
    };
    const v519 = v514.forEach(v518);
    v519;
    const v520 = keys.length;
    const v521 = v520 - 1;
    var key = keys[v521];
    const v522 = o[key];
    const v523 = v522 === undefined;
    const v524 = o[key];
    const v525 = typeof v524;
    const v526 = v525 === 'boolean';
    const v527 = v523 || v526;
    if (v527) {
        o[key] = value;
    } else {
        const v528 = o[key];
        const v529 = Array.isArray(v528);
        if (v529) {
            const v530 = o[key];
            const v531 = v530.push(value);
            v531;
        } else {
            const v532 = o[key];
            o[key] = [
                v532,
                value
            ];
        }
    }
};
const isNumber = function (x) {
    const v533 = typeof x;
    const v534 = v533 === 'number';
    if (v534) {
        return true;
    }
    const v535 = /^0x[0-9a-f]+$/i.test(x);
    if (v535) {
        return true;
    }
    const v536 = /^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(x);
    return v536;
};
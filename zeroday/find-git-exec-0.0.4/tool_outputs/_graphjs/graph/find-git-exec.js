'use strict';
const v293 = this.__awaiter;
const v294 = this && v293;
const v320 = function (thisArg, _arguments, P, generator) {
    const adopt = function (value) {
        const v295 = value instanceof P;
        const v297 = function (resolve) {
            const v296 = resolve(value);
            v296;
        };
        const v298 = new P(v297);
        let v299;
        if (v295) {
            v299 = value;
        } else {
            v299 = v298;
        }
        return v299;
    };
    const v300 = P || (P = Promise);
    const v318 = function (resolve, reject) {
        const fulfilled = function (value) {
            try {
                const v301 = generator.next(value);
                const v302 = step(v301);
                v302;
            } catch (e) {
                const v303 = reject(e);
                v303;
            }
        };
        const rejected = function (value) {
            try {
                const v304 = generator['throw'](value);
                const v305 = step(v304);
                v305;
            } catch (e) {
                const v306 = reject(e);
                v306;
            }
        };
        const step = function (result) {
            const v307 = result.done;
            const v308 = result.value;
            const v309 = resolve(v308);
            const v310 = result.value;
            const v311 = adopt(v310);
            const v312 = v311.then(fulfilled, rejected);
            let v313;
            if (v307) {
                v313 = v309;
            } else {
                v313 = v312;
            }
            v313;
        };
        const v314 = [];
        const v315 = _arguments || v314;
        const v316 = (generator = generator.apply(thisArg, v315)).next();
        const v317 = step(v316);
        v317;
    };
    const v319 = new v300(v318);
    return v319;
};
var __awaiter = v294 || v320;
const v321 = this.__generator;
const v322 = this && v321;
const v422 = function (thisArg, body) {
    const v327 = function () {
        const v323 = t[0];
        const v324 = v323 & 1;
        if (v324) {
            const v325 = t[1];
            throw v325;
        }
        const v326 = t[1];
        return v326;
    };
    const v328 = [];
    const v329 = [];
    var _ = {};
    _.label = 0;
    _.sent = v327;
    _.trys = v328;
    _.ops = v329;
    var f;
    var y;
    var t;
    var g;
    const v330 = verb(0);
    const v331 = verb(1);
    const v332 = verb(2);
    const v333 = {};
    v333.next = v330;
    v333.throw = v331;
    v333.return = v332;
    const v334 = typeof Symbol;
    const v335 = v334 === 'function';
    const v336 = Symbol.iterator;
    const v337 = function () {
        return this;
    };
    const v338 = v335 && (g[v336] = v337);
    return g = v333, v338, g;
    const verb = function (n) {
        const v341 = function (v) {
            const v339 = [
                n,
                v
            ];
            const v340 = step(v339);
            return v340;
        };
        return v341;
    };
    const step = function (op) {
        if (f) {
            const v342 = new TypeError('Generator is already executing.');
            throw v342;
        }
        while (_) {
            try {
                const v353 = op[1];
                const v354 = (t = t.call(y, v353)).done;
                const v355 = !v354;
                const v356 = y && (t = op[0] & 2 ? y['return'] : op[0] ? y['throw'] || ((t = y['return']) && t.call(y), 0) : y.next) && v355;
                if (f = 1, v356) {
                    return t;
                }
                if (y = 0, t) {
                    const v357 = op[0];
                    const v358 = v357 & 2;
                    const v359 = t.value;
                    op = [
                        v358,
                        v359
                    ];
                }
                const v360 = op[0];
                switch (v360) {
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    const v361 = _.label;
                    const v362 = v361++;
                    v362;
                    const v363 = op[1];
                    const v364 = {};
                    v364.value = v363;
                    v364.done = false;
                    return v364;
                case 5:
                    const v365 = _.label;
                    const v366 = v365++;
                    v366;
                    y = op[1];
                    op = [0];
                    continue;
                case 7:
                    const v367 = _.ops;
                    op = v367.pop();
                    const v368 = _.trys;
                    const v369 = v368.pop();
                    v369;
                    continue;
                default:
                    const v370 = t.length;
                    const v371 = v370 > 0;
                    const v372 = t.length;
                    const v373 = v372 - 1;
                    const v374 = t[v373];
                    const v375 = !(t = _.trys, t = v371 && v374);
                    const v376 = op[0];
                    const v377 = v376 === 6;
                    const v378 = op[0];
                    const v379 = v378 === 2;
                    const v380 = v377 || v379;
                    const v381 = v375 && v380;
                    if (v381) {
                        _ = 0;
                        continue;
                    }
                    const v382 = op[0];
                    const v383 = v382 === 3;
                    const v384 = !t;
                    const v385 = op[1];
                    const v386 = t[0];
                    const v387 = v385 > v386;
                    const v388 = op[1];
                    const v389 = t[3];
                    const v390 = v388 < v389;
                    const v391 = v387 && v390;
                    const v392 = v384 || v391;
                    const v393 = v383 && v392;
                    if (v393) {
                        const v394 = op[1];
                        _.label = v394;
                        break;
                    }
                    const v395 = op[0];
                    const v396 = v395 === 6;
                    const v397 = _.label;
                    const v398 = t[1];
                    const v399 = v397 < v398;
                    const v400 = v396 && v399;
                    if (v400) {
                        const v401 = t[1];
                        _.label = v401;
                        t = op;
                        break;
                    }
                    const v402 = _.label;
                    const v403 = t[2];
                    const v404 = v402 < v403;
                    const v405 = t && v404;
                    if (v405) {
                        const v406 = t[2];
                        _.label = v406;
                        const v407 = _.ops;
                        const v408 = v407.push(op);
                        v408;
                        break;
                    }
                    const v409 = t[2];
                    if (v409) {
                        const v410 = _.ops;
                        const v411 = v410.pop();
                        v411;
                    }
                    const v412 = _.trys;
                    const v413 = v412.pop();
                    v413;
                    continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [
                    6,
                    e
                ];
                y = 0;
            } finally {
                t = 0;
                f = t;
            }
        }
        const v414 = op[0];
        const v415 = v414 & 5;
        if (v415) {
            const v416 = op[1];
            throw v416;
        }
        const v417 = op[0];
        const v418 = op[1];
        const v419 = void 0;
        let v420;
        if (v417) {
            v420 = v418;
        } else {
            v420 = v419;
        }
        const v421 = {};
        v421.value = v420;
        v421.done = true;
        return v421;
    };
};
var __generator = v322 || v422;
const v423 = { value: true };
const v424 = Object.defineProperty(exports, '__esModule', v423);
v424;
var path = require('path');
var which = require('which');
var cp = require('child_process');
const default_1 = function (_a) {
    let _b;
    const v425 = void 0;
    const v426 = _a === v425;
    const v427 = {};
    if (v426) {
        _b = v427;
    } else {
        _b = _a;
    }
    var hint = _b.hint;
    var onLookup = _b.onLookup;
    const v428 = void 0;
    const v429 = void 0;
    const v466 = function () {
        var lookup;
        var first;
        var _this = this;
        const v464 = function (_c) {
            const v430 = onLookup !== null;
            const v431 = void 0;
            const v432 = onLookup !== v431;
            const v433 = v430 && v432;
            const v434 = function () {
            };
            if (v433) {
                lookup = onLookup;
            } else {
                lookup = v434;
            }
            const v435 = findSpecificGit(hint, lookup);
            const v436 = Promise.reject(null);
            if (hint) {
                first = v435;
            } else {
                first = v436;
            }
            const v457 = function () {
                const v437 = void 0;
                const v438 = void 0;
                const v455 = function () {
                    var _a;
                    var gitOnPath;
                    const v453 = function (_b) {
                        const v439 = _b.label;
                        switch (v439) {
                        case 0:
                            _a = process.platform;
                            switch (_a) {
                            case 'darwin':
                                const v440 = [
                                    3,
                                    1
                                ];
                                return v440;
                            case 'win32':
                                const v441 = [
                                    3,
                                    2
                                ];
                                return v441;
                            }
                            const v442 = [
                                3,
                                3
                            ];
                            return v442;
                        case 1:
                            const v443 = findGitDarwin(lookup);
                            const v444 = [
                                2,
                                v443
                            ];
                            return v444;
                        case 2:
                            const v445 = findGitWin32(lookup);
                            const v446 = [
                                2,
                                v445
                            ];
                            return v446;
                        case 3:
                            const v447 = which('git');
                            const v448 = [
                                4,
                                v447
                            ];
                            return v448;
                        case 4:
                            gitOnPath = _b.sent();
                            const v449 = findSpecificGit(gitOnPath, lookup);
                            const v450 = [
                                4,
                                v449
                            ];
                            return v450;
                        case 5:
                            const v451 = _b.sent();
                            const v452 = [
                                2,
                                v451
                            ];
                            return v452;
                        }
                    };
                    const v454 = __generator(this, v453);
                    return v454;
                };
                const v456 = __awaiter(_this, v437, v438, v455);
                return v456;
            };
            const v458 = first.then(undefined, v457);
            const v461 = function () {
                const v459 = new Error('Git installation not found.');
                const v460 = Promise.reject(v459);
                return v460;
            };
            const v462 = v458.then(null, v461);
            const v463 = [
                2,
                v462
            ];
            return v463;
        };
        const v465 = __generator(this, v464);
        return v465;
    };
    const v467 = __awaiter(this, v428, v429, v466);
    return v467;
};
exports.default = default_1;
const toUtf8String = function (buffers) {
    const v468 = Buffer.concat(buffers);
    const v469 = v468.toString('utf8');
    const v470 = v469.trim();
    return v470;
};
const parseVersion = function (raw) {
    const v471 = raw.replace(/^git version /, '');
    return v471;
};
const normalizePath = function (pathToNormalize) {
    const v472 = path.normalize(pathToNormalize);
    return v472;
};
const findSpecificGit = function (path, onLookup) {
    const v487 = function (c, e) {
        const v473 = onLookup(path);
        v473;
        const v474 = exec(path, '--version');
        const v482 = function (version) {
            const v475 = exec(path, '--exec-path');
            const v480 = function (execPath) {
                const v476 = parseVersion(version);
                const v477 = normalizePath(execPath);
                const v478 = {
                    path: path,
                    version: v476,
                    execPath: v477
                };
                const v479 = c(v478);
                v479;
            };
            const v481 = v475.then(v480);
            v481;
        };
        const v483 = v474.then(v482);
        const v485 = function (err) {
            const v484 = e(err);
            v484;
        };
        const v486 = v483.catch(v485);
        v486;
    };
    const v488 = new Promise(v487);
    return v488;
};
const exec = function (path, command) {
    const v489 = void 0;
    const v490 = void 0;
    const v513 = function () {
        const v511 = function (_a) {
            const v508 = function (c, e) {
                var buffers = [];
                const v491 = Array.isArray(command);
                const v492 = [command];
                let v493;
                if (v491) {
                    v493 = command;
                } else {
                    v493 = v492;
                }
                var child = cp.spawn(path, v493);
                const v494 = child.stdout;
                const v496 = function (b) {
                    const v495 = buffers.push(b);
                    return v495;
                };
                const v497 = v494.on('data', v496);
                v497;
                const v498 = child.on('error', e);
                v498;
                const v506 = function (code) {
                    const v499 = 'Git not found under \'' + path;
                    const v500 = v499 + '\'.';
                    const v501 = new Error(v500);
                    const v502 = e(v501);
                    const v503 = toUtf8String(buffers);
                    const v504 = c(v503);
                    let v505;
                    if (code) {
                        v505 = v502;
                    } else {
                        v505 = v504;
                    }
                    return v505;
                };
                const v507 = child.on('close', v506);
                v507;
            };
            const v509 = new Promise(v508);
            const v510 = [
                2,
                v509
            ];
            return v510;
        };
        const v512 = __generator(this, v511);
        return v512;
    };
    const v514 = __awaiter(this, v489, v490, v513);
    return v514;
};
const findGitDarwin = function (onLookup) {
    const v539 = function (c, e) {
        const v537 = function (err, gitPathBuffer) {
            if (err) {
                const v515 = e('git not found');
                return v515;
            }
            const v516 = gitPathBuffer.toString();
            var path = v516.replace(/^\s+|\s+$/g, '');
            const getVersion = function (path) {
                const v517 = onLookup(path);
                v517;
                const v526 = function (err, stdout) {
                    if (err) {
                        const v518 = e('git not found');
                        return v518;
                    }
                    const v519 = stdout.trim();
                    var version = parseVersion(v519);
                    const v524 = function (err, stdout) {
                        if (err) {
                            const v520 = e('git not found');
                            return v520;
                        }
                        const v521 = stdout.trim();
                        var execPath = normalizePath(v521);
                        const v522 = {
                            path: path,
                            version: version,
                            execPath: execPath
                        };
                        const v523 = c(v522);
                        return v523;
                    };
                    const v525 = cp.exec('git --exec-path', v524);
                    v525;
                };
                const v527 = cp.exec('git --version', v526);
                v527;
            };
            const v528 = path !== '/usr/bin/git';
            if (v528) {
                const v529 = getVersion(path);
                return v529;
            }
            const v535 = function (err) {
                const v530 = err.code;
                const v531 = v530 === 2;
                const v532 = err && v531;
                if (v532) {
                    const v533 = e('git not found');
                    return v533;
                }
                const v534 = getVersion(path);
                v534;
            };
            const v536 = cp.exec('xcode-select -p', v535);
            v536;
        };
        const v538 = cp.exec('which git', v537);
        v538;
    };
    const v540 = new Promise(v539);
    return v540;
};
const findSystemGitWin32 = function (base, onLookup) {
    const v541 = !base;
    if (v541) {
        const v542 = Promise.reject('Not found');
        return v542;
    }
    const v543 = path.join(base, 'Git', 'cmd', 'git.exe');
    const v544 = findSpecificGit(v543, onLookup);
    return v544;
};
const findGitWin32InPath = function (onLookup) {
    const v545 = void 0;
    const v546 = void 0;
    const v554 = function () {
        var path;
        const v552 = function (_a) {
            const v547 = _a.label;
            switch (v547) {
            case 0:
                const v548 = which('git.exe');
                const v549 = [
                    4,
                    v548
                ];
                return v549;
            case 1:
                path = _a.sent();
                const v550 = findSpecificGit(path, onLookup);
                const v551 = [
                    2,
                    v550
                ];
                return v551;
            }
        };
        const v553 = __generator(this, v552);
        return v553;
    };
    const v555 = __awaiter(this, v545, v546, v554);
    return v555;
};
const findGitWin32 = function (onLookup) {
    const v556 = void 0;
    const v557 = void 0;
    const v583 = function () {
        const v581 = function (_a) {
            const v558 = process.env;
            const v559 = v558['ProgramW6432'];
            const v560 = findSystemGitWin32(v559, onLookup);
            const v564 = function () {
                const v561 = process.env;
                const v562 = v561['ProgramFiles(x86)'];
                const v563 = findSystemGitWin32(v562, onLookup);
                return v563;
            };
            const v565 = v560.then(undefined, v564);
            const v569 = function () {
                const v566 = process.env;
                const v567 = v566['ProgramFiles'];
                const v568 = findSystemGitWin32(v567, onLookup);
                return v568;
            };
            const v570 = v565.then(undefined, v569);
            const v575 = function () {
                const v571 = process.env;
                const v572 = v571['LocalAppData'];
                const v573 = path.join(v572, 'Programs');
                const v574 = findSystemGitWin32(v573, onLookup);
                return v574;
            };
            const v576 = v570.then(undefined, v575);
            const v578 = function () {
                const v577 = findGitWin32InPath(onLookup);
                return v577;
            };
            const v579 = v576.then(undefined, v578);
            const v580 = [
                2,
                v579
            ];
            return v580;
        };
        const v582 = __generator(this, v581);
        return v582;
    };
    const v584 = __awaiter(this, v556, v557, v583);
    return v584;
};
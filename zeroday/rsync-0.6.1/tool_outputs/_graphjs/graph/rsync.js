const v371 = require('child_process');
var spawn = v371.spawn;
var path = require('path');
const Rsync = function (config) {
    const v372 = this instanceof Rsync;
    const v373 = !v372;
    if (v373) {
        const v374 = new Rsync(config);
        return v374;
    }
    const v375 = {};
    config = config || v375;
    const v376 = typeof config;
    const v377 = v376 !== 'object';
    if (v377) {
        const v378 = new Error('Rsync config must be an Object');
        throw v378;
    }
    const v379 = hasOP(config, 'executable');
    const v380 = config.executable;
    let v381;
    if (v379) {
        v381 = v380;
    } else {
        v381 = 'rsync';
    }
    this._executable = v381;
    const v382 = hasOP(config, 'executableShell');
    const v383 = config.executableShell;
    let v384;
    if (v382) {
        v384 = v383;
    } else {
        v384 = '/bin/sh';
    }
    this._executableShell = v384;
    this._sources = [];
    this._destination = '';
    this._patterns = [];
    const v385 = {};
    this._options = v385;
    const v386 = {};
    v386.stdout = null;
    v386.stderr = null;
    this._outputHandlers = v386;
    const v387 = process.cwd();
    this._cwd = v387;
    const v388 = process.env;
    this._env = v388;
    const v389 = hasOP(config, 'debug');
    const v390 = config.debug;
    let v391;
    if (v389) {
        v391 = v390;
    } else {
        v391 = false;
    }
    this._debug = v391;
};
const v397 = function (options) {
    var command = new Rsync();
    let key;
    for (key in options) {
        const v392 = hasOP(options, key);
        if (v392) {
            var value = options[key];
            const v393 = command[key];
            const v394 = typeof v393;
            const v395 = v394 === 'function';
            if (v395) {
                const v396 = command[key](value);
                v396;
            }
        }
    }
    return command;
};
Rsync.build = v397;
const v398 = Rsync.prototype;
const v403 = function (option, value) {
    option = stripLeadingDashes(option);
    const v399 = option.length;
    const v400 = v399 > 0;
    const v401 = option && v400;
    if (v401) {
        const v402 = this._options;
        v402[option] = value || null;
    }
    return this;
};
v398.set = v403;
const v404 = Rsync.prototype;
const v413 = function (option) {
    option = stripLeadingDashes(option);
    const v405 = this._options;
    const v406 = Object.keys(v405);
    const v407 = v406.indexOf(option);
    const v408 = v407 >= 0;
    const v409 = option && v408;
    if (v409) {
        const v410 = this._options;
        const v411 = v410[option];
        const v412 = delete v411;
        v412;
    }
    return this;
};
v404.unset = v413;
const v414 = Rsync.prototype;
const v436 = function (flags, set) {
    const v415 = arguments.length;
    const v416 = !v415;
    if (v416) {
        return this;
    } else {
        const v417 = arguments.length;
        const v418 = v417 === 1;
        if (v418) {
            set = true;
        } else {
            const v419 = Array.prototype;
            const v420 = v419.slice;
            flags = v420.call(arguments);
            const v421 = flags.length;
            const v422 = v421 - 1;
            const v423 = flags[v422];
            const v424 = typeof v423;
            const v425 = v424 === 'boolean';
            if (v425) {
                set = flags.pop();
            } else {
                set = true;
            }
            flags = flags.join('');
        }
    }
    const v426 = typeof flags;
    const v427 = v426 === 'string';
    if (v427) {
        const v428 = stripLeadingDashes(flags);
        flags = v428.split('');
    }
    const v429 = isArray(flags);
    if (v429) {
        var obj = {};
        const v430 = function (f) {
            obj[f] = set;
        };
        const v431 = flags.forEach(v430);
        v431;
        flags = obj;
    }
    let key;
    for (key in flags) {
        const v432 = hasOP(flags, key);
        if (v432) {
            let method;
            const v433 = flags[key];
            if (v433) {
                method = 'set';
            } else {
                method = 'unset';
            }
            const v434 = stripLeadingDashes(key);
            const v435 = this[method](v434);
            v435;
        }
    }
    return this;
};
v414.flags = v436;
const v437 = Rsync.prototype;
const v442 = function (option) {
    option = stripLeadingDashes(option);
    const v438 = this._options;
    const v439 = Object.keys(v438);
    const v440 = v439.indexOf(option);
    const v441 = v440 >= 0;
    return v441;
};
v437.isSet = v442;
const v443 = Rsync.prototype;
const v446 = function (name) {
    name = stripLeadingDashes(name);
    const v444 = this._options;
    const v445 = v444[name];
    return v445;
};
v443.option = v446;
const v447 = Rsync.prototype;
const v470 = function (patterns) {
    const v448 = arguments.length;
    const v449 = v448 > 1;
    if (v449) {
        const v450 = Array.prototype;
        const v451 = v450.slice;
        patterns = v451.call(arguments, 0);
    }
    const v452 = isArray(patterns);
    const v453 = !v452;
    if (v453) {
        patterns = [patterns];
    }
    const v468 = function (pattern) {
        var action = '?';
        const v454 = typeof pattern;
        const v455 = v454 === 'string';
        if (v455) {
            action = pattern.charAt(0);
            pattern = pattern.substring(1);
        } else {
            const v456 = typeof pattern;
            const v457 = v456 === 'object';
            const v458 = hasOP(pattern, 'action');
            const v459 = v457 && v458;
            const v460 = hasOP(pattern, 'pattern');
            const v461 = v459 && v460;
            if (v461) {
                action = pattern.action;
                pattern = pattern.pattern;
            }
        }
        const v462 = action === '-';
        if (v462) {
            const v463 = this.exclude(pattern);
            v463;
        } else {
            const v464 = action === '+';
            if (v464) {
                const v465 = this.include(pattern);
                v465;
            } else {
                const v466 = 'Invalid pattern: ' + pattern;
                const v467 = new Error(v466);
                throw v467;
            }
        }
    };
    const v469 = patterns.forEach(v468, this);
    v469;
    return this;
};
v447.patterns = v470;
const v471 = Rsync.prototype;
const v483 = function (patterns) {
    const v472 = arguments.length;
    const v473 = v472 > 1;
    if (v473) {
        const v474 = Array.prototype;
        const v475 = v474.slice;
        patterns = v475.call(arguments, 0);
    }
    const v476 = isArray(patterns);
    const v477 = !v476;
    if (v477) {
        patterns = [patterns];
    }
    const v481 = function (pattern) {
        const v478 = this._patterns;
        const v479 = {
            action: '-',
            pattern: pattern
        };
        const v480 = v478.push(v479);
        v480;
    };
    const v482 = patterns.forEach(v481, this);
    v482;
    return this;
};
v471.exclude = v483;
const v484 = Rsync.prototype;
const v496 = function (patterns) {
    const v485 = arguments.length;
    const v486 = v485 > 1;
    if (v486) {
        const v487 = Array.prototype;
        const v488 = v487.slice;
        patterns = v488.call(arguments, 0);
    }
    const v489 = isArray(patterns);
    const v490 = !v489;
    if (v490) {
        patterns = [patterns];
    }
    const v494 = function (pattern) {
        const v491 = this._patterns;
        const v492 = {
            action: '+',
            pattern: pattern
        };
        const v493 = v491.push(v492);
        v493;
    };
    const v495 = patterns.forEach(v494, this);
    v495;
    return this;
};
v484.include = v496;
const v497 = Rsync.prototype;
const v503 = function () {
    const v498 = this.executable();
    const v499 = v498 + ' ';
    const v500 = this.args();
    const v501 = v500.join(' ');
    const v502 = v499 + v501;
    return v502;
};
v497.command = v503;
const v504 = Rsync.prototype;
const v505 = Rsync.prototype;
const v506 = v505.command;
v504.toString = v506;
const v507 = Rsync.prototype;
const v557 = function () {
    var args = [];
    var short = [];
    var long = [];
    let key;
    const v508 = this._options;
    for (key in v508) {
        const v509 = this._options;
        const v510 = hasOP(v509, key);
        if (v510) {
            const v511 = this._options;
            var value = v511[key];
            const v512 = value === null;
            const v513 = value === undefined;
            var noval = v512 || v513;
            const v514 = key.length;
            const v515 = v514 === 1;
            const v516 = v515 && noval;
            if (v516) {
                const v517 = short.push(key);
                v517;
            } else {
                const v518 = isArray(value);
                if (v518) {
                    const v521 = function (val) {
                        const v519 = buildOption(key, val, escapeShellArg);
                        const v520 = long.push(v519);
                        v520;
                    };
                    const v522 = value.forEach(v521);
                    v522;
                } else {
                    const v523 = buildOption(key, value, escapeShellArg);
                    const v524 = long.push(v523);
                    v524;
                }
            }
        }
    }
    const v525 = short.length;
    const v526 = v525 > 0;
    if (v526) {
        const v527 = short.join('');
        const v528 = '-' + v527;
        const v529 = args.push(v528);
        v529;
    }
    const v530 = long.length;
    const v531 = v530 > 0;
    if (v531) {
        args = args.concat(long);
    }
    const v532 = this._patterns;
    const v546 = function (def) {
        const v533 = def.action;
        const v534 = v533 === '-';
        if (v534) {
            const v535 = def.pattern;
            const v536 = buildOption('exclude', v535, escapeFileArg);
            const v537 = args.push(v536);
            v537;
        } else {
            const v538 = def.action;
            const v539 = v538 === '+';
            if (v539) {
                const v540 = def.pattern;
                const v541 = buildOption('include', v540, escapeFileArg);
                const v542 = args.push(v541);
                v542;
            } else {
                const v543 = def.action;
                const v544 = 'Unknown pattern action ' + v543;
                const v545 = debug(this, v544);
                v545;
            }
        }
    };
    const v547 = v532.forEach(v546);
    v547;
    const v548 = this.source();
    const v549 = v548.length;
    const v550 = v549 > 0;
    if (v550) {
        const v551 = this.source();
        const v552 = v551.map(escapeFileArg);
        args = args.concat(v552);
    }
    const v553 = this.destination();
    if (v553) {
        const v554 = this.destination();
        const v555 = escapeFileArg(v554);
        const v556 = args.push(v555);
        v556;
    }
    return args;
};
v507.args = v557;
const v558 = Rsync.prototype;
const v566 = function (cwd) {
    const v559 = arguments.length;
    const v560 = v559 > 0;
    if (v560) {
        const v561 = typeof cwd;
        const v562 = v561 !== 'string';
        if (v562) {
            const v563 = new Error('Directory should be a string');
            throw v563;
        }
        const v564 = path.resolve(cwd);
        this._cwd = v564;
    }
    const v565 = this._cwd;
    return v565;
};
v558.cwd = v566;
const v567 = Rsync.prototype;
const v574 = function (env) {
    const v568 = arguments.length;
    const v569 = v568 > 0;
    if (v569) {
        const v570 = typeof env;
        const v571 = v570 !== 'object';
        if (v571) {
            const v572 = new Error('Environment should be an object');
            throw v572;
        }
        this._env = env;
    }
    const v573 = this._env;
    return v573;
};
v567.env = v574;
const v575 = Rsync.prototype;
const v586 = function (stdout, stderr) {
    const v576 = arguments.length;
    const v577 = v576 === 1;
    const v578 = Array.isArray(stdout);
    const v579 = v577 && v578;
    if (v579) {
        stderr = stdout[1];
        stdout = stdout[0];
    }
    const v580 = typeof stdout;
    const v581 = v580 === 'function';
    if (v581) {
        const v582 = this._outputHandlers;
        v582.stdout = stdout;
    }
    const v583 = typeof stderr;
    const v584 = v583 === 'function';
    if (v584) {
        const v585 = this._outputHandlers;
        v585.stderr = stdout;
    }
    return this;
};
v575.output = v586;
const v587 = Rsync.prototype;
const v629 = function (callback, stdoutHandler, stderrHandler) {
    const v588 = this.output(stdoutHandler, stderrHandler);
    v588;
    var cmdProc;
    const v589 = process.platform;
    const v590 = 'win32' === v589;
    if (v590) {
        const v591 = this.command();
        const v592 = '"' + v591;
        const v593 = v592 + '"';
        const v594 = [
            '/s',
            '/c',
            v593
        ];
        const v595 = this._cwd;
        const v596 = this._env;
        const v597 = {
            stdio: 'pipe',
            windowsVerbatimArguments: true,
            cwd: v595,
            env: v596
        };
        cmdProc = spawn('cmd.exe', v594, v597);
    } else {
        const v598 = this._executableShell;
        const v599 = this.command();
        const v600 = [
            '-c',
            v599
        ];
        const v601 = this._cwd;
        const v602 = this._env;
        const v603 = {
            stdio: 'pipe',
            cwd: v601,
            env: v602
        };
        cmdProc = spawn(v598, v600, v603);
    }
    const v604 = this._outputHandlers;
    const v605 = v604.stdout;
    const v606 = typeof v605;
    const v607 = v606 === 'function';
    if (v607) {
        const v608 = cmdProc.stdout;
        const v609 = this._outputHandlers;
        const v610 = v609.stdout;
        const v611 = v608.on('data', v610);
        v611;
    }
    const v612 = this._outputHandlers;
    const v613 = v612.stderr;
    const v614 = typeof v613;
    const v615 = v614 === 'function';
    if (v615) {
        const v616 = cmdProc.stderr;
        const v617 = this._outputHandlers;
        const v618 = v617.stderr;
        const v619 = v616.on('data', v618);
        v619;
    }
    const v626 = function (code) {
        var error = null;
        const v620 = code !== 0;
        if (v620) {
            const v621 = 'rsync exited with code ' + code;
            error = new Error(v621);
        }
        const v622 = typeof callback;
        const v623 = v622 === 'function';
        if (v623) {
            const v624 = this.command();
            const v625 = callback(error, code, v624);
            v625;
        }
    };
    const v627 = v626.bind(this);
    const v628 = cmdProc.on('close', v627);
    v628;
    return cmdProc;
};
v587.execute = v629;
const v630 = createValueAccessor('debug');
v630;
const v631 = createValueAccessor('executable');
v631;
const v632 = createValueAccessor('executableShell');
v632;
const v633 = createValueAccessor('destination');
v633;
const v634 = createListAccessor('source', '_sources');
v634;
const v635 = exposeLongOption('rsh', 'shell');
v635;
const v636 = exposeMultiOption('chmod', 'chmod');
v636;
const v637 = exposeShortOption('delete');
v637;
const v638 = exposeShortOption('progress');
v638;
const v639 = exposeShortOption('a', 'archive');
v639;
const v640 = exposeShortOption('z', 'compress');
v640;
const v641 = exposeShortOption('r', 'recursive');
v641;
const v642 = exposeShortOption('u', 'update');
v642;
const v643 = exposeShortOption('q', 'quiet');
v643;
const v644 = exposeShortOption('d', 'dirs');
v644;
const v645 = exposeShortOption('l', 'links');
v645;
const v646 = exposeShortOption('n', 'dry');
v646;
const v647 = exposeShortOption('H', 'hardLinks');
v647;
const v648 = exposeShortOption('p', 'perms');
v648;
const v649 = exposeShortOption('E', 'executability');
v649;
const v650 = exposeShortOption('g', 'group');
v650;
const v651 = exposeShortOption('o', 'owner');
v651;
const v652 = exposeShortOption('A', 'acls');
v652;
const v653 = exposeShortOption('X', 'xattrs');
v653;
const v654 = exposeShortOption('devices');
v654;
const v655 = exposeShortOption('specials');
v655;
const v656 = exposeShortOption('t', 'times');
v656;
module.exports = Rsync;
const createValueAccessor = function (name, internal) {
    const v657 = '_' + name;
    var container = internal || v657;
    const v658 = Rsync.prototype;
    const v662 = function (value) {
        const v659 = arguments.length;
        const v660 = !v659;
        if (v660) {
            const v661 = this[container];
            return v661;
        }
        this[container] = value;
        return this;
    };
    v658[name] = v662;
};
const createListAccessor = function (name, internal) {
    const v663 = '_' + name;
    var container = internal || v663;
    const v664 = Rsync.prototype;
    const v681 = function (value) {
        const v665 = arguments.length;
        const v666 = !v665;
        if (v666) {
            const v667 = this[container];
            return v667;
        }
        const v668 = isArray(value);
        if (v668) {
            const v669 = this[name];
            const v670 = value.forEach(v669, this);
            v670;
        } else {
            const v671 = typeof value;
            const v672 = v671 !== 'string';
            if (v672) {
                const v673 = 'Value for Rsync::' + name;
                const v674 = v673 + ' must be a String';
                const v675 = new Error(v674);
                throw v675;
            } else {
                const v676 = this[container];
                const v677 = v676.indexOf(value);
                const v678 = v677 < 0;
                if (v678) {
                    const v679 = this[container];
                    const v680 = v679.push(value);
                    v680;
                }
            }
        }
        return this;
    };
    v664[name] = v681;
};
const exposeShortOption = function (option, name) {
    name = name || option;
    const v682 = Rsync.prototype;
    const v686 = function (set) {
        const v683 = arguments.length;
        const v684 = !v683;
        if (v684) {
            set = true;
        }
        let method;
        if (set) {
            method = 'set';
        } else {
            method = 'unset';
        }
        const v685 = this[method](option);
        return v685;
    };
    v682[name] = v686;
};
const exposeMultiOption = function (option, name) {
    name = name || option;
    const v687 = Rsync.prototype;
    const v700 = function (value) {
        const v688 = arguments.length;
        const v689 = !v688;
        if (v689) {
            const v690 = this.option(option);
            return v690;
        }
        const v691 = !value;
        if (v691) {
            const v692 = this.unset(option);
            v692;
        } else {
            const v693 = isArray(value);
            if (v693) {
                const v694 = this[name];
                const v695 = value.forEach(v694, this);
                v695;
            } else {
                var current = this.option(option);
                const v696 = !current;
                if (v696) {
                    value = [value];
                } else {
                    const v697 = isArray(current);
                    const v698 = !v697;
                    if (v698) {
                        value = [
                            current,
                            value
                        ];
                    } else {
                        value = current.concat(value);
                    }
                }
                const v699 = this.set(option, value);
                v699;
            }
        }
        return this;
    };
    v687[name] = v700;
};
const exposeLongOption = function (option, name) {
    name = name || option;
    const v701 = Rsync.prototype;
    const v706 = function (value) {
        const v702 = arguments.length;
        const v703 = !v702;
        if (v703) {
            const v704 = this.option(option);
            return v704;
        }
        let method;
        if (value) {
            method = 'set';
        } else {
            method = 'unset';
        }
        const v705 = this[method](option, value);
        return v705;
    };
    v701[name] = v706;
};
const buildOption = function (name, value, escapeArg) {
    const v707 = typeof escapeArg;
    const v708 = v707 === 'boolean';
    if (v708) {
        const v709 = !escapeArg;
        if (v709) {
            escapeArg = noop;
        } else {
            escapeArg = null;
        }
    }
    const v710 = typeof escapeArg;
    const v711 = v710 !== 'function';
    if (v711) {
        escapeArg = escapeShellArg;
    }
    let single;
    const v712 = name.length;
    const v713 = v712 === 1;
    if (v713) {
        single = true;
    } else {
        single = false;
    }
    let prefix;
    if (single) {
        prefix = '-';
    } else {
        prefix = '--';
    }
    let glue;
    if (single) {
        glue = ' ';
    } else {
        glue = '=';
    }
    var option = prefix + name;
    const v714 = arguments.length;
    const v715 = v714 > 1;
    const v716 = v715 && value;
    if (v716) {
        const v717 = String(value);
        value = escapeArg(v717);
        option += glue + value;
    }
    return option;
};
const escapeShellArg = function (arg) {
    const v718 = /(["'`\\$ ])/.test(arg);
    const v719 = !v718;
    if (v719) {
        return arg;
    }
    const v720 = arg.replace(/(["'`\\$])/g, '\\$1');
    const v721 = '"' + v720;
    const v722 = v721 + '"';
    return v722;
};
const escapeFileArg = function (filename) {
    filename = filename.replace(/(["'`\s\\\(\)\\$])/g, '\\$1');
    const v723 = /(\\\\)/.test(filename);
    const v724 = !v723;
    if (v724) {
        return filename;
    }
    const v725 = process.platform;
    const v726 = 'win32' === v725;
    if (v726) {
        const v727 = filename.replace(/\\\\/g, '/');
        filename = v727.replace(/^["]?[A-Z]\:\//ig, '/');
    }
    return filename;
};
const stripLeadingDashes = function (value) {
    const v728 = typeof value;
    const v729 = v728 === 'string';
    if (v729) {
        value = value.replace(/^[\-]*/, '');
    }
    return value;
};
const isArray = function (value) {
    const v730 = Array.isArray;
    const v731 = typeof v730;
    const v732 = v731 === 'function';
    if (v732) {
        const v733 = Array.isArray(value);
        return v733;
    } else {
        const v734 = toString.call(value);
        const v735 = v734 == '[object Array]';
        return v735;
    }
};
const hasOP = function (obj, key) {
    const v736 = Object.prototype;
    const v737 = v736.hasOwnProperty;
    const v738 = v737.call(obj, key);
    return v738;
};
const noop = function () {
};
const debug = function (cmd, message) {
    const v739 = cmd._debug;
    const v740 = !v739;
    if (v740) {
        return;
    }
};
'use strict';
var child_process = require('child_process');
var vBoxManageBinary;
var escapeArg;
const v282 = process.platform;
const v283 = /^win/.test(v282);
if (v283) {
    const v284 = process.env;
    const v285 = v284.VBOX_INSTALL_PATH;
    const v286 = process.env;
    const v287 = v286.VBOX_MSI_INSTALL_PATH;
    var vBoxInstallPath = v285 || v287;
    if (vBoxInstallPath) {
        const v288 = vBoxInstallPath.replace(/\\$/, '');
        const v289 = '"' + v288;
        const v290 = v289 + '\\VBoxManage.exe';
        vBoxManageBinary = v290 + '"';
    } else {
        const v291 = console.warn('VBOX_INSTALL_PATH or VBOX_MSI_INSTALL_PATH environment variable is not defined.');
        v291;
        vBoxManageBinary = 'VBoxManage.exe';
    }
    const v297 = function (arg) {
        const v292 = /\s|[\\"]]/.test(arg);
        const v293 = !v292;
        if (v293) {
            return arg;
        }
        const v294 = arg.replace(/"/g, '"""');
        const v295 = '"' + v294;
        const v296 = v295 + '"';
        return v296;
    };
    escapeArg = v297;
} else {
    vBoxManageBinary = 'vboxmanage';
    const v302 = function (arg) {
        const v298 = /\s|[\\"]]/.test(arg);
        const v299 = !v298;
        if (v299) {
            return arg;
        }
        const v300 = arg.replace(/\\/g, '\\\\');
        const v301 = v300.replace(/"/g, '\\"');
        return v301;
    };
    escapeArg = v302;
}
var VBoxManage = {};
const v335 = function (command, options) {
    const v303 = [];
    command = command || v303;
    const v304 = command instanceof Array;
    const v305 = !v304;
    if (v305) {
        command = [command];
    }
    const v306 = {};
    options = options || v306;
    var i = 0;
    const v307 = command.length;
    let v308 = i < v307;
    while (v308) {
        const v310 = command[i];
        const v311 = escapeArg(v310);
        command[i] = v311;
        const v309 = i++;
        v308 = i < v307;
    }
    const v312 = Object.keys(options);
    const v318 = function (option) {
        const v313 = '--' + option;
        const v314 = command.push(v313);
        v314;
        var value = options[option];
        const v315 = value !== true;
        if (v315) {
            const v316 = escapeArg(value);
            const v317 = command.push(v316);
            v317;
        }
    };
    const v319 = v312.forEach(v318);
    v319;
    const v320 = VBoxManage.debug;
    if (v320) {
        const v321 = command.join(' ');
        const v322 = '$ VBoxManage ' + v321;
        const v323 = console.warn(v322);
        v323;
    }
    const v333 = function (resolve, reject) {
        const v324 = vBoxManageBinary + ' ';
        const v325 = command.join(' ');
        const v326 = v324 + v325;
        const v327 = {};
        const v331 = function (err, stdout, stderr) {
            if (err) {
                err.stderr = stderr;
                const v328 = reject(err);
                return v328;
            }
            const v329 = {
                stdout: stdout,
                stderr: stderr
            };
            const v330 = resolve(v329);
            return v330;
        };
        const v332 = child_process.exec(v326, v327, v331);
        v332;
    };
    const v334 = new Promise(v333);
    return v334;
};
VBoxManage.manage = v335;
const v346 = function (vmname, propName) {
    const v336 = [
        'guestproperty',
        'get',
        vmname,
        propName
    ];
    const v337 = this.manage(v336);
    const v344 = function (std) {
        const v338 = std.stdout;
        const v339 = std.stdout;
        const v340 = v339.indexOf(':');
        const v341 = v340 + 1;
        const v342 = v338.substr(v341);
        var value = v342.trim();
        const v343 = value === 'No value set!';
        if (v343) {
            value = undefined;
        }
        return value;
    };
    const v345 = v337.then(v344);
    return v345;
};
VBoxManage.getProperty = v346;
const v349 = function (vmname, propName, value, options) {
    const v347 = [
        'guestproperty',
        'set',
        vmname,
        propName,
        value
    ];
    const v348 = this.manage(v347, options);
    return v348;
};
VBoxManage.setProperty = v349;
const v352 = function (vmname, propName) {
    const v350 = [
        'guestproperty',
        'delete',
        vmname,
        propName
    ];
    const v351 = this.manage(v350);
    return v351;
};
VBoxManage.deleteProperty = v352;
const v356 = function (vmname, newName, options) {
    const v353 = {};
    options = options || v353;
    options['name'] = newName;
    const v354 = [
        'clonevm',
        vmname
    ];
    const v355 = this.manage(v354, options);
    return v355;
};
VBoxManage.clone = v356;
const v359 = function (vmname, snapshot, newName) {
    const v357 = { 'snapshot': snapshot };
    const v358 = this.clone(vmname, newName, v357);
    return v358;
};
VBoxManage.cloneSnapshot = v359;
const v362 = function (vmname, snapshotName) {
    const v360 = [
        'snapshot',
        vmname,
        'take',
        snapshotName
    ];
    const v361 = this.manage(v360);
    return v361;
};
VBoxManage.takeSnapshot = v362;
const v365 = function (vmname, snapshotName) {
    const v363 = [
        'snapshot',
        vmname,
        'restore',
        snapshotName
    ];
    const v364 = this.manage(v363);
    return v364;
};
VBoxManage.restoreSnapshot = v365;
const v389 = function (vmname) {
    const v366 = [
        'showvminfo',
        vmname
    ];
    const v367 = { 'machinereadable': true };
    const v368 = this.manage(v366, v367);
    const v387 = function (std) {
        var info = {};
        const v369 = std.stdout;
        const v370 = v369.split('\n');
        const v385 = function (line) {
            const v371 = line.length;
            const v372 = v371 > 0;
            if (v372) {
                var splitPoint = line.indexOf('=');
                var key = line.substr(0, splitPoint);
                const v373 = splitPoint + 1;
                var value = line.substr(v373);
                const v374 = key[0];
                const v375 = v374 === '"';
                const v376 = key.length;
                const v377 = v376 - 1;
                const v378 = key[v377];
                const v379 = v378 === '"';
                const v380 = v375 && v379;
                if (v380) {
                    const v381 = -1;
                    key = key.slice(1, v381);
                }
                const v382 = value[0];
                const v383 = v382 === '"';
                if (v383) {
                    const v384 = value.lastIndexOf('"');
                    value = value.substring(1, v384);
                } else {
                    value = value.replace(/\s+$/, '');
                }
                info[key] = value;
            }
        };
        const v386 = v370.forEach(v385);
        v386;
        return info;
    };
    const v388 = v368.then(v387);
    return v388;
};
VBoxManage.getInfo = v389;
const v413 = function (vmname, timeout) {
    const v390 = timeout == null;
    if (v390) {
        const v391 = -1;
        timeout = v391;
    }
    const v392 = Date.now();
    var finishLine = v392 + timeout;
    var retryDuration = 1000;
    const v393 = this.getProperty(vmname, '/VirtualBox/GuestInfo/Net/0/V4/IP');
    const v411 = function (address) {
        const v394 = address !== undefined;
        const v395 = -1;
        const v396 = timeout > v395;
        const v397 = Date.now();
        const v398 = finishLine - retryDuration;
        const v399 = v397 >= v398;
        const v400 = v396 && v399;
        const v401 = v394 || v400;
        if (v401) {
            return address;
        }
        var t;
        const v409 = function (resolve, reject) {
            const v408 = function () {
                const v402 = -1;
                const v403 = timeout > v402;
                if (v403) {
                    const v404 = Date.now();
                    timeout = finishLine - v404;
                }
                const v405 = VBoxManage.getIPAddress(vmname, timeout);
                const v406 = v405.then(resolve);
                const v407 = v406.catch(reject);
                v407;
            };
            t = setTimeout(v408, 1000);
        };
        const v410 = new Promise(v409);
        return v410;
    };
    const v412 = v393.then(v411);
    return v412;
};
VBoxManage.getIPAddress = v413;
const v416 = function (vmname, options) {
    const v414 = [
        'modifyvm',
        vmname
    ];
    const v415 = this.manage(v414, options);
    return v415;
};
VBoxManage.modify = v416;
const v422 = function (vmname) {
    const v417 = this.getInfo(vmname);
    const v418 = function () {
        return true;
    };
    const v419 = v417.then(v418);
    const v420 = function () {
        return false;
    };
    const v421 = v419.catch(v420);
    return v421;
};
VBoxManage.isRegistered = v422;
const v425 = function (ovfname, options) {
    const v423 = [
        'import',
        ovfname
    ];
    const v424 = this.manage(v423, options);
    return v424;
};
VBoxManage.import = v425;
const v430 = function (vmname, gui, options) {
    const v426 = {};
    options = options || v426;
    let v427;
    if (gui) {
        v427 = 'gui';
    } else {
        v427 = 'headless';
    }
    options['type'] = v427;
    const v428 = [
        '-nologo',
        'startvm',
        vmname
    ];
    const v429 = this.manage(v428, options);
    return v429;
};
VBoxManage.start = v430;
const v433 = function (vmname) {
    const v431 = [
        'controlvm',
        vmname,
        'reset'
    ];
    const v432 = this.manage(v431);
    return v432;
};
VBoxManage.reset = v433;
const v436 = function (vmname) {
    const v434 = [
        'controlvm',
        vmname,
        'resume'
    ];
    const v435 = this.manage(v434);
    return v435;
};
VBoxManage.resume = v436;
const v439 = function (vmname) {
    const v437 = [
        'controlvm',
        vmname,
        'savestate'
    ];
    const v438 = this.manage(v437);
    return v438;
};
VBoxManage.stopAndSaveState = v439;
const v442 = function (vmname) {
    const v440 = [
        'controlvm',
        vmname,
        'poweroff'
    ];
    const v441 = this.manage(v440);
    return v441;
};
VBoxManage.powerOff = v442;
const v445 = function (vmname) {
    const v443 = [
        'controlvm',
        vmname,
        'acpipowerbutton'
    ];
    const v444 = this.manage(v443);
    return v444;
};
VBoxManage.acpiPowerButton = v445;
const v448 = function (vmname) {
    const v446 = [
        'controlvm',
        vmname,
        'acpisleepbutton'
    ];
    const v447 = this.manage(v446);
    return v447;
};
VBoxManage.acpiSleepButton = v448;
const v458 = function (vmname, username, password, source, dest, recursive) {
    var args = [
        'guestcontrol',
        vmname,
        'copyto'
    ];
    if (username) {
        const v449 = '"' + username;
        const v450 = v449 + '"';
        const v451 = args.push('--username', v450);
        v451;
    }
    if (password) {
        const v452 = '"' + password;
        const v453 = v452 + '"';
        const v454 = args.push('--password', v453);
        v454;
    }
    if (recursive) {
        const v455 = args.push('--recursive');
        v455;
    }
    const v456 = args.push('--target-directory', dest);
    v456;
    args = args.concat(source);
    const v457 = this.manage(args);
    return v457;
};
VBoxManage.copyToVm = v458;
const v468 = function (vmname, username, password, source, dest, recursive) {
    var args = [
        'guestcontrol',
        vmname,
        'copyfrom'
    ];
    if (username) {
        const v459 = '"' + username;
        const v460 = v459 + '"';
        const v461 = args.push('--username', v460);
        v461;
    }
    if (password) {
        const v462 = '"' + password;
        const v463 = v462 + '"';
        const v464 = args.push('--password', v463);
        v464;
    }
    if (recursive) {
        const v465 = args.push('--recursive');
        v465;
    }
    const v466 = args.push('--target-directory', dest);
    v466;
    args = args.concat(source);
    const v467 = this.manage(args);
    return v467;
};
VBoxManage.copyFromVm = v468;
const v478 = function (vmname, username, password, path, parents) {
    var args = [
        'guestcontrol',
        vmname,
        'mkdir'
    ];
    if (username) {
        const v469 = '"' + username;
        const v470 = v469 + '"';
        const v471 = args.push('--username', v470);
        v471;
    }
    if (password) {
        const v472 = '"' + password;
        const v473 = v472 + '"';
        const v474 = args.push('--password', v473);
        v474;
    }
    if (parents) {
        const v475 = args.push('--parents');
        v475;
    }
    const v476 = args.push(path);
    v476;
    const v477 = this.manage(args);
    return v477;
};
VBoxManage.mkdir = v478;
const v488 = function (vmname, username, password, path, recursive) {
    var args = [
        'guestcontrol',
        vmname,
        'rmdir'
    ];
    if (username) {
        const v479 = '"' + username;
        const v480 = v479 + '"';
        const v481 = args.push('--username', v480);
        v481;
    }
    if (password) {
        const v482 = '"' + password;
        const v483 = v482 + '"';
        const v484 = args.push('--password', v483);
        v484;
    }
    if (recursive) {
        const v485 = args.push('--recursive');
        v485;
    }
    const v486 = args.push(path);
    v486;
    const v487 = this.manage(args);
    return v487;
};
VBoxManage.rmdir = v488;
const v498 = function (vmname, username, password, path, force) {
    var args = [
        'guestcontrol',
        vmname,
        'removefile'
    ];
    if (username) {
        const v489 = '"' + username;
        const v490 = v489 + '"';
        const v491 = args.push('--username', v490);
        v491;
    }
    if (password) {
        const v492 = '"' + password;
        const v493 = v492 + '"';
        const v494 = args.push('--password', v493);
        v494;
    }
    if (force) {
        const v495 = args.push('--force');
        v495;
    }
    const v496 = args.push(path);
    v496;
    const v497 = this.manage(args);
    return v497;
};
VBoxManage.removeFile = v498;
const v507 = function (vmname, username, password, source, dest) {
    var args = [
        'guestcontrol',
        vmname,
        'mv'
    ];
    if (username) {
        const v499 = '"' + username;
        const v500 = v499 + '"';
        const v501 = args.push('--username', v500);
        v501;
    }
    if (password) {
        const v502 = '"' + password;
        const v503 = v502 + '"';
        const v504 = args.push('--password', v503);
        v504;
    }
    args = args.concat(source);
    const v505 = args.push(dest);
    v505;
    const v506 = this.manage(args);
    return v506;
};
VBoxManage.move = v507;
VBoxManage.mv = VBoxManage.move;
const v535 = function (vmname, username, password, path) {
    var args = [
        'guestcontrol',
        vmname,
        'stat'
    ];
    if (username) {
        const v508 = '"' + username;
        const v509 = v508 + '"';
        const v510 = args.push('--username', v509);
        v510;
    }
    if (password) {
        const v511 = '"' + password;
        const v512 = v511 + '"';
        const v513 = args.push('--password', v512);
        v513;
    }
    const v514 = args.push(path);
    v514;
    const v515 = this.manage(args);
    const v533 = function (std) {
        const v516 = std.stdout;
        const v517 = /Is a directory$/g.test(v516);
        if (v517) {
            const v518 = {};
            v518.exists = true;
            v518.isDirectory = true;
            v518.isFile = false;
            v518.isLink = false;
            return v518;
        }
        const v519 = std.stdout;
        const v520 = /Is a file/g.test(v519);
        if (v520) {
            const v521 = {};
            v521.exists = true;
            v521.isDirectory = false;
            v521.isFile = true;
            v521.isLink = false;
            return v521;
        }
        const v522 = std.stdout;
        const v523 = /found, type unknown \([0-9]+\)/g.test(v522);
        if (v523) {
            const v524 = {};
            v524.exists = true;
            v524.isDirectory = false;
            v524.isFile = false;
            v524.isLink = true;
            return v524;
        }
        const v525 = std.stdout;
        const v526 = typeof v525;
        const v527 = v526 === 'string';
        const v528 = std.stdout;
        const v529 = v528.trim();
        const v530 = v527 && v529;
        if (v530) {
            const v531 = {};
            v531.exists = true;
            v531.isDirectory = false;
            v531.isFile = false;
            v531.isLink = false;
            return v531;
        }
        const v532 = {};
        v532.exists = false;
        v532.isDirectory = false;
        v532.isFile = false;
        v532.isLink = false;
        return v532;
    };
    const v534 = v515.then(v533);
    return v534;
};
VBoxManage.stat = v535;
const v556 = function (vmname, username, password, cmd, params, async) {
    const v536 = this.getInfo(vmname);
    const v554 = function (info) {
        const v537 = info['ostype'];
        var isWindows = /windows/i.test(v537);
        var args = [
            'guestcontrol',
            vmname
        ];
        const v538 = [];
        params = params || v538;
        if (username) {
            const v539 = '"' + username;
            const v540 = v539 + '"';
            const v541 = args.push('--username', v540);
            v541;
        }
        if (password) {
            const v542 = '"' + password;
            const v543 = v542 + '"';
            const v544 = args.push('--password', v543);
            v544;
        }
        if (async) {
            const v545 = args.push('start');
            v545;
        } else {
            const v546 = args.push('run');
            v546;
        }
        if (isWindows) {
            const v547 = args.push('--exe', 'cmd.exe', '--', 'cmd.exe', '/c');
            v547;
        } else {
            const v548 = args.push('--exe', '/bin/sh', '--', '/bin/sh', '-c');
            v548;
        }
        const v549 = cmd + ' ';
        const v550 = params.join(' ');
        const v551 = v549 + v550;
        const v552 = args.push(v551);
        v552;
        const v553 = VBoxManage.manage(args);
        return v553;
    };
    const v555 = v536.then(v554);
    return v555;
};
VBoxManage.execOnVm = v556;
const v562 = function (vmname, username, password, taskName) {
    const v557 = this.getInfo(vmname);
    const v560 = function (info) {
        var path;
        var params;
        const v558 = info['ostype'];
        var isWindows = /windows/i.test(v558);
        if (isWindows) {
            path = 'taskkill.exe';
            params = [
                '/f',
                '/im',
                taskName
            ];
        } else {
            path = 'sudo';
            params = [
                'killall',
                taskName
            ];
        }
        const v559 = VBoxManage.execOnVm(vmname, username, password, path, params);
        return v559;
    };
    const v561 = v557.then(v560);
    return v561;
};
VBoxManage.killOnVm = v562;
module.exports = VBoxManage;
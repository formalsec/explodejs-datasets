'use strict';
const os = require('os');
const v229 = require('child_process');
const exec = v229.exec;
const PS_HEADER_OSX = 'USERPID%CPU%MEMVSZRSSTTSTATSTARTEDTIMECOMMAND';
const PS_HEADER_LINUX = 'USERPID%CPU%MEMVSZRSSTTYSTATSTARTTIMECOMMAND';
const USER = 'user';
const PID = 'pid';
const CPU = 'cpu';
const MEM = 'mem';
const VSZ = 'vsz';
const RSS = 'rss';
const TT = 'tt';
const STAT = 'stat';
const STARTED = 'started';
const TIME = 'time';
const COMMAND = 'command';
const KILL_SIGNAL_OSX = [
    'SIGHUP',
    'SIGINT',
    'SIGQUIT',
    'SIGILL',
    'SIGTRAP',
    'SIGABRT',
    'SIGEMT',
    'SIGFPE',
    'SIGKILL',
    'SIGBUS',
    'SIGSEGV',
    'SIGSYS',
    'SIGPEPE',
    'SIGALRM',
    'SIGTERM',
    'SIGURG',
    'SIGSTOP',
    'SIGTSTP',
    'SIGCONT',
    'SIGCHLD',
    'SIGTTIN',
    'SIGTTOU',
    'SIGIO',
    'SIGXCPU',
    'SIGXFSZ',
    'SIGVTALRM',
    'SIGPROF',
    'SIGWINCH',
    'SIGINFO',
    'SIGUSR1',
    'SIGUSR2'
];
const KILL_SIGNAL_LINUX = [
    'SIGHUP',
    'SIGINT',
    'SIGQUIT',
    'SIGILL',
    'SIGTRAP',
    'SIGABRT',
    'SIGBUS',
    'SIGFPE',
    'SIGKILL',
    'SIGUSR1',
    'SIGSEGV',
    'SIGUSR2',
    'SIGPIPE',
    'SIGALRM',
    'SIGTERM',
    'SIGSTKFLT',
    'SIGCHLD',
    'SIGCONT',
    'SIGSTOP',
    'SIGTSTP',
    'SIGTTIN',
    'SIGTTOU',
    'SIGURG',
    'SIGXCPU',
    'SIGXFSZ',
    'SIGVTALRM',
    'SIGPROF',
    'SIGWINCH',
    'SIGIO',
    'SIGPWR',
    'SIGSYS',
    'SIGRTMIN',
    'SIGRTMIN+1',
    'SIGRTMIN+2',
    'SIGRTMIN+3',
    'SIGRTMIN+4',
    'SIGRTMIN+5',
    'SIGRTMIN+6',
    'SIGRTMIN+7',
    'SIGRTMIN+8',
    'SIGRTMIN+9',
    'SIGRTMIN+10',
    'SIGRTMIN+11',
    'SIGRTMIN+12',
    'SIGRTMIN+13',
    'SIGRTMIN+14',
    'SIGRTMIN+15',
    'SIGRTMAX-14',
    'SIGRTMAX-13',
    'SIGRTMAX-12',
    'SIGRTMAX-11',
    'SIGRTMAX-10',
    'SIGRTMAX-9',
    'SIGRTMAX-8',
    'SIGRTMAX-7',
    'SIGRTMAX-6',
    'SIGRTMAX-5',
    'SIGRTMAX-4',
    'SIGRTMAX-3',
    'SIGRTMAX-2',
    'SIGRTMAX-1',
    'SIGRTMAX'
];
const psRaw = (extra, keywords, filterWaste = true) => {
    let cmd = 'ps aux';
    if (extra) {
        cmd += ` | ${ extra }`;
    }
    const v230 = exec(cmd);
    const v273 = result => {
        const v231 = result.stderr;
        if (v231) {
            const v232 = result.stderr;
            const v233 = new Error(v232);
            throw v233;
        }
        const v234 = result.stdout;
        if (v234) {
            const v235 = result.stdout;
            const tmp1 = v235.split(/(\r\n)|(\n\r)|\n|\r/);
            const v236 = tmp1.length;
            const v237 = v236 === 0;
            if (v237) {
                const v238 = [];
                return v238;
            }
            const tmp2 = [];
            const v241 = element => {
                if (element) {
                    const t = element.trim();
                    const v239 = t !== '';
                    if (v239) {
                        const v240 = tmp2.push(t);
                        v240;
                    }
                }
            };
            const v242 = tmp1.forEach(v241);
            v242;
            const v243 = tmp2.length;
            const v244 = v243 === 0;
            if (v244) {
                const v245 = [];
                return v245;
            }
            const v246 = tmp2[0];
            const v247 = checkHeader(v246);
            if (v247) {
                const v248 = tmp2.shift();
                v248;
            }
            const v249 = tmp2.length;
            const v250 = v249 === 0;
            if (v250) {
                const v251 = [];
                return v251;
            }
            const v270 = value => {
                if (filterWaste) {
                    const v252 = value.includes('ps aux');
                    if (v252) {
                        return false;
                    }
                    const v253 = value.includes('grep');
                    if (v253) {
                        const t = parseLine(value);
                        const v254 = t[COMMAND];
                        const v255 = v254.trim();
                        const v256 = v255.split(/\s+/);
                        const v262 = value => {
                            const v257 = value !== undefined;
                            const v258 = value !== null;
                            const v259 = v257 && v258;
                            const v260 = value !== '';
                            const v261 = v259 && v260;
                            return v261;
                        };
                        const tCmd = v256.filter(v262);
                        const v263 = tCmd[0];
                        const v264 = v263 === 'grep';
                        if (v264) {
                            return false;
                        }
                    }
                }
                if (keywords) {
                    const v265 = Array.isArray(keywords);
                    if (v265) {
                        let element;
                        for (element of keywords) {
                            const v266 = value.includes(element);
                            const v267 = !v266;
                            if (v267) {
                                return false;
                            }
                        }
                    } else {
                        const v268 = value.includes(keywords);
                        const v269 = !v268;
                        if (v269) {
                            return false;
                        }
                    }
                }
                return true;
            };
            const v271 = tmp2.filter(v270);
            return v271;
        }
        const v272 = [];
        return v272;
    };
    const v274 = v230.then(v273);
    return v274;
};
const checkHeader = line => {
    const tmp = line.replace(/\s/ig, '');
    const v275 = os.platform();
    const v276 = v275 === 'linux';
    if (v276) {
        const v277 = tmp === PS_HEADER_LINUX;
        return v277;
    } else {
        const v278 = os.platform();
        const v279 = v278 === 'darwin';
        if (v279) {
            const v280 = tmp === PS_HEADER_OSX;
            return v280;
        }
    }
    return false;
};
const parseLine = line => {
    const v281 = line.split(/\s+/);
    const v287 = value => {
        const v282 = value !== undefined;
        const v283 = value !== null;
        const v284 = v282 && v283;
        const v285 = value !== '';
        const v286 = v284 && v285;
        return v286;
    };
    const fields = v281.filter(v287);
    const info = {};
    const v288 = fields[0];
    info[USER] = v288;
    const v289 = fields[1];
    info[PID] = v289;
    const v290 = fields[2];
    info[CPU] = v290;
    const v291 = fields[3];
    info[MEM] = v291;
    const v292 = fields[4];
    info[VSZ] = v292;
    const v293 = fields[5];
    info[RSS] = v293;
    const v294 = fields[6];
    info[TT] = v294;
    const v295 = fields[7];
    info[STAT] = v295;
    const v296 = fields[8];
    info[STARTED] = v296;
    const v297 = fields[9];
    info[TIME] = v297;
    const v298 = fields[10];
    let cmd = v298.trim();
    let i = 11;
    const v299 = fields.length;
    let v300 = i < v299;
    while (v300) {
        const v302 = fields[i];
        const v303 = v302.trim();
        cmd += ` ${ v303 }`;
        const v301 = i++;
        v300 = i < v299;
    }
    info[COMMAND] = cmd;
    return info;
};
const ps = (condition, extra, keywords, filterWaste = true) => {
    const v304 = psRaw(extra, keywords, filterWaste);
    const v321 = result => {
        const v305 = result.length;
        const v306 = v305 === 0;
        if (v306) {
            const v307 = [];
            return v307;
        }
        const tmp1 = [];
        const v310 = element => {
            const v308 = parseLine(element);
            const v309 = tmp1.push(v308);
            v309;
        };
        const v311 = result.forEach(v310);
        v311;
        const v319 = value => {
            const v312 = typeof condition;
            const v313 = v312 === 'object';
            const v314 = Object.keys(condition);
            const v315 = v314.length;
            const v316 = v315 > 0;
            const v317 = v313 && v316;
            if (v317) {
                const v318 = checkCondition(value, condition);
                return v318;
            }
            return true;
        };
        const v320 = tmp1.filter(v319);
        return v320;
    };
    const v322 = v304.then(v321);
    return v322;
};
const checkCondition = (line, condition) => {
    const v323 = !condition;
    if (v323) {
        return true;
    }
    const keys = Object.keys(condition);
    const v324 = keys.length;
    const v325 = v324 === 0;
    if (v325) {
        return true;
    }
    const v326 = keys.includes(USER);
    if (v326) {
        const v327 = line[USER];
        const v328 = condition[USER];
        const v329 = stringCompare(v327, v328);
        const v330 = !v329;
        if (v330) {
            return false;
        }
    }
    const v331 = keys.includes(PID);
    if (v331) {
        const v332 = condition[PID];
        const v333 = v332.toString();
        const v334 = v333.trim();
        const v335 = line[PID];
        const v336 = v334 !== v335;
        if (v336) {
            return false;
        }
    }
    const v337 = keys.includes(CPU);
    if (v337) {
        const v338 = line[CPU];
        const v339 = condition[CPU];
        const v340 = numberCompare(v338, v339);
        const v341 = !v340;
        if (v341) {
            return false;
        }
    }
    const v342 = keys.includes(MEM);
    if (v342) {
        const v343 = line[MEM];
        const v344 = condition[MEM];
        const v345 = numberCompare(v343, v344);
        const v346 = !v345;
        if (v346) {
            return false;
        }
    }
    const v347 = keys.includes(VSZ);
    if (v347) {
        const v348 = line[VSZ];
        const v349 = condition[VSZ];
        const v350 = numberCompare(v348, v349);
        const v351 = !v350;
        if (v351) {
            return false;
        }
    }
    const v352 = keys.includes(RSS);
    if (v352) {
        const v353 = line[RSS];
        const v354 = condition[RSS];
        const v355 = numberCompare(v353, v354);
        const v356 = !v355;
        if (v356) {
            return false;
        }
    }
    const v357 = keys.includes(TT);
    if (v357) {
        const v358 = condition[TT];
        const v359 = v358.toString();
        const v360 = v359.trim();
        const v361 = line[TT];
        const v362 = v360 !== v361;
        if (v362) {
            return false;
        }
    }
    const v363 = keys.includes(STAT);
    if (v363) {
        const v364 = condition[STAT];
        const v365 = v364.toString();
        const v366 = v365.trim();
        const v367 = line[STAT];
        const v368 = v366 !== v367;
        if (v368) {
            return false;
        }
    }
    const v369 = keys.includes(STARTED);
    if (v369) {
    }
    const v370 = keys.includes(TIME);
    if (v370) {
    }
    const v371 = keys.includes(COMMAND);
    if (v371) {
        const v372 = condition[COMMAND];
        const v373 = v372.trim();
        const cmd = v373.split(/\s+/);
        const v374 = cmd.length;
        const v375 = v374 === 1;
        if (v375) {
            const v376 = line[COMMAND];
            const v377 = cmd[0];
            const v378 = stringCompare(v376, v377);
            const v379 = !v378;
            if (v379) {
                return false;
            }
        } else {
            const v380 = cmd.length;
            const v381 = v380 > 1;
            if (v381) {
                let element;
                for (element of cmd) {
                    let t = element.trim();
                    const v382 = !t;
                    if (v382) {
                        continue;
                    }
                    const v383 = t.startsWith('~');
                    const v384 = !v383;
                    if (v384) {
                        t = '~' + t;
                    }
                    const v385 = line[COMMAND];
                    const v386 = stringCompare(v385, t);
                    const v387 = !v386;
                    if (v387) {
                        return false;
                    }
                }
            }
        }
    }
    return true;
};
const numberCompare = (origin, compare) => {
    const v388 = !origin;
    if (v388) {
        return false;
    }
    const v389 = !compare;
    if (v389) {
        return true;
    }
    let originTmp = NaN;
    const v390 = typeof origin;
    const v391 = v390 === 'number';
    if (v391) {
        originTmp = origin;
    } else {
        const v392 = origin.trim();
        const v393 = +v392;
        originTmp = v393;
    }
    const v394 = Number.isNaN(originTmp);
    if (v394) {
        return false;
    }
    const v395 = compare.trim();
    const compareTmp = v395.split(/\s+/);
    const v396 = compareTmp.length;
    const v397 = v396 === 0;
    if (v397) {
        return true;
    }
    let element;
    for (element of compareTmp) {
        const tElement = element.trim();
        const v398 = !tElement;
        if (v398) {
            continue;
        }
        const v399 = tElement.startsWith('>=');
        if (v399) {
            const v400 = tElement.slice(2);
            const v401 = +v400;
            const tCompare = v401;
            if (tCompare) {
                const v402 = originTmp < tCompare;
                if (v402) {
                    return false;
                }
            }
        } else {
            const v403 = tElement.startsWith('<=');
            if (v403) {
                const v404 = tElement.slice(2);
                const v405 = +v404;
                const tCompare = v405;
                if (tCompare) {
                    const v406 = originTmp > tCompare;
                    if (v406) {
                        return false;
                    }
                }
            } else {
                const v407 = tElement.startsWith('>');
                if (v407) {
                    const v408 = tElement.slice(1);
                    const v409 = +v408;
                    const tCompare = v409;
                    if (tCompare) {
                        const v410 = originTmp <= tCompare;
                        if (v410) {
                            return false;
                        }
                    }
                } else {
                    const v411 = tElement.startsWith('<');
                    if (v411) {
                        const v412 = tElement.slice(1);
                        const v413 = +v412;
                        const tCompare = v413;
                        if (tCompare) {
                            const v414 = originTmp >= tCompare;
                            if (v414) {
                                return false;
                            }
                        }
                    } else {
                        const v415 = -1;
                        let tCompare = v415;
                        const v416 = tElement.startsWith('=');
                        if (v416) {
                            const v417 = tElement.slice(1);
                            const v418 = +v417;
                            tCompare = v418;
                        } else {
                            const v419 = +tElement;
                            tCompare = v419;
                        }
                        if (tCompare) {
                            const v420 = originTmp !== tCompare;
                            if (v420) {
                                return false;
                            }
                        }
                    }
                }
            }
        }
    }
    return true;
};
const stringCompare = (origin, compare) => {
    const v421 = !origin;
    if (v421) {
        return false;
    }
    const v422 = !compare;
    if (v422) {
        return true;
    }
    const originTmp = origin.trim();
    const v423 = !originTmp;
    if (v423) {
        return false;
    }
    const compareTmp = compare.trim();
    const v424 = !compareTmp;
    if (v424) {
        return true;
    }
    const v425 = compareTmp.startsWith('~');
    if (v425) {
        const tCompare = compareTmp.slice(1);
        const v426 = originTmp.includes(tCompare);
        const v427 = !v426;
        if (v427) {
            return false;
        }
    } else {
        const v428 = originTmp !== compareTmp;
        if (v428) {
            return false;
        }
    }
    return true;
};
const kill = (pid, signal) => {
    const v429 = -1;
    let signalIndex = v429;
    if (signal) {
        const v430 = Number.isInteger(signal);
        if (v430) {
            signalIndex = signal;
        } else {
            signalIndex = getSignal(signal);
        }
    }
    let cmd = '';
    const v431 = signalIndex < 0;
    if (v431) {
        cmd = `kill ${ pid }`;
    } else {
        cmd = `kill -${ signalIndex } ${ pid }`;
    }
    const v432 = exec(cmd);
    const v437 = result => {
        const v433 = result.stderr;
        if (v433) {
            const v434 = result.stderr;
            const v435 = new Error(v434);
            throw v435;
        }
        const v436 = Promise.resolve();
        return v436;
    };
    const v438 = v432.then(v437);
    return v438;
};
const getSignal = signal => {
    let tmp = signal.trim();
    const v439 = tmp.startsWith('SIG');
    const v440 = !v439;
    if (v440) {
        tmp = 'SIG' + tmp;
    }
    const v441 = -1;
    let index = v441;
    const v442 = os.platform();
    const v443 = v442 === 'linux';
    if (v443) {
        index = KILL_SIGNAL_LINUX.indexOf(tmp);
    } else {
        const v444 = os.platform();
        const v445 = v444 === 'darwin';
        if (v445) {
            index = KILL_SIGNAL_OSX.indexOf(tmp);
        }
    }
    const v446 = index >= 0;
    if (v446) {
        index += 1;
    }
    return index;
};
const getSignalRaw = signal => {
    let tmp = signal.trim();
    const v447 = tmp.startsWith('SIG');
    if (v447) {
        tmp = tmp.slice(3);
    }
    const cmd = `kill -l ${ tmp }`;
    const v448 = exec(cmd);
    const v454 = result => {
        const v449 = result.stderr;
        if (v449) {
            const v450 = result.stderr;
            const v451 = new Error(v450);
            throw v451;
        }
        const v452 = result.stdout;
        const tSignal = Number.parseInt(v452);
        if (tSignal) {
            return tSignal;
        }
        const v453 = -1;
        return v453;
    };
    const v455 = v448.then(v454);
    return v455;
};
const v456 = {};
v456.ps = ps;
v456.kill = kill;
v456.getSignalRaw = getSignalRaw;
module.exports = v456;
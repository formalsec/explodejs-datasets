'use strict';
const os = require('os');
const v248 = require('child_process');
const exec = v248.exec;
const macLookup = require('./macLookup.js');
var flag;
var ipCommand;
var osType = os.type();
switch (osType) {
case 'Windows_NT':
    flag = '-w';
    ipCommand = 'ipconfig';
    break;
case 'Linux':
    flag = '-w';
    ipCommand = 'ifconfig';
    break;
case 'Darwin':
    flag = '-t';
    ipCommand = 'ifconfig';
    break;
default:
    const v249 = new Error(`Unsupported OS: ${ osType }`);
    throw v249;
}
const Arpping = function ({timeout = 5, includeEndpoints = false, useCache = true, cacheTimeout = 3600} = {}) {
    const v250 = timeout < 1;
    const v251 = timeout > 60;
    const v252 = v250 || v251;
    if (v252) {
        const v253 = new Error(`Invalid timeout parameter: ${ timeout }. Timeout should be between 1 and 60.`);
        throw v253;
    }
    const v254 = parseInt(timeout);
    const v255 = timeout.toFixed(0);
    this.timeout = v254 || v255;
    this.includeEndpoints = includeEndpoints;
    this.myIP = null;
    this.useCache = useCache;
    this.cache = [];
    this.cacheTimeout = cacheTimeout;
    this.cacheUpdate = 0;
};
const v256 = Arpping.prototype;
const v272 = function (ip) {
    const v257 = this.myIP;
    ip = ip || v257;
    const v258 = ip.lastIndexOf('.');
    const v259 = v258 + 1;
    var ipStart = ip.substr(0, v259);
    const v260 = this.includeEndpoints;
    const v261 = { length: 255 };
    const v264 = (_, i) => {
        const v262 = i + 1;
        const v263 = ipStart + v262;
        return v263;
    };
    const v265 = Array.from(v261, v264);
    const v266 = { length: 253 };
    const v269 = (_, i) => {
        const v267 = i + 2;
        const v268 = ipStart + v267;
        return v268;
    };
    const v270 = Array.from(v266, v269);
    let v271;
    if (v260) {
        v271 = v265;
    } else {
        v271 = v270;
    }
    return v271;
};
v256._getFullRange = v272;
const v273 = Arpping.prototype;
const v308 = function () {
    const v306 = (resolve, reject) => {
        const v304 = (err, stdout, stderr) => {
            if (err) {
                const v274 = reject(err);
                return v274;
            }
            var output = null;
            const v275 = osType == 'Linux';
            if (v275) {
                const v276 = stdout.indexOf('wlan0');
                const v277 = -1;
                const v278 = v276 == v277;
                if (v278) {
                    const v279 = new Error('No wifi connection');
                    const v280 = reject(v279);
                    return v280;
                }
                const v281 = stdout.split('wlan0');
                output = v281[1];
            } else {
                const v282 = stdout.indexOf('en0');
                output = stdout.slice(v282);
                const v283 = output.indexOf('active\n');
                const v284 = output.slice(0, v283);
                output = v284 + 'active';
                const v285 = output.split('status: ');
                const v286 = v285[1];
                const v287 = v286 == 'inactive';
                if (v287) {
                    const v288 = new Error('No wifi connection');
                    const v289 = reject(v288);
                    return v289;
                }
            }
            const v290 = output.indexOf('inet ');
            const v291 = v290 + 5;
            const v292 = output.indexOf(' netmask');
            const v293 = output.slice(v291, v292);
            var ip = v293.trim();
            const v294 = output.indexOf('ether ');
            const v295 = output.slice(v294);
            const v296 = v295.split('\n');
            const v297 = v296[0];
            const v298 = v297.split(' ');
            const v299 = v298[1];
            var mac = v299.trim();
            var type = macLookup(mac);
            this.myIP = ip;
            const v300 = {
                ip,
                mac,
                type
            };
            const v301 = {
                ip,
                mac
            };
            let v302;
            if (type) {
                v302 = v300;
            } else {
                v302 = v301;
            }
            const v303 = resolve(v302);
            return v303;
        };
        const v305 = exec(ipCommand, v304);
        v305;
    };
    const v307 = new Promise(v306);
    return v307;
};
v273.findMyInfo = v308;
const v309 = Arpping.prototype;
const v346 = function (refIP, retry = true) {
    const v310 = this.useCache;
    const v311 = this.cache;
    const v312 = v311.length;
    const v313 = v310 && v312;
    const v314 = Date.now();
    const v315 = this.cacheUpdate;
    const v316 = v314 - v315;
    const v317 = this.cacheTimeout;
    const v318 = v317 * 1000;
    const v319 = v316 < v318;
    const v320 = v313 && v319;
    if (v320) {
        const v323 = (resolve, reject) => {
            const v321 = this.cache;
            const v322 = resolve(v321);
            return v322;
        };
        const v324 = new Promise(v323);
        return v324;
    }
    const v325 = !refIP;
    const v326 = this.myIP;
    const v327 = !v326;
    const v328 = v325 && v327;
    if (v328) {
        if (retry) {
            const v329 = this.findMyInfo();
            const v332 = info => {
                const v330 = info.ip;
                const v331 = this.discover(v330, false);
                return v331;
            };
            const v333 = v329.then(v332);
            return v333;
        }
        const v336 = (resolve, reject) => {
            const v334 = new Error('Failed to find host IP address');
            const v335 = reject(v334);
            return v335;
        };
        const v337 = new Promise(v336);
        return v337;
    }
    var range = this._getFullRange(refIP);
    const v338 = this.ping(range);
    const v340 = ({hosts}) => {
        const v339 = this.arp(hosts);
        return v339;
    };
    const v341 = v338.then(v340);
    const v344 = ({hosts}) => {
        const v342 = hosts.slice(0);
        this.cache = v342;
        const v343 = Date.now();
        this.cacheUpdate = v343;
        return hosts;
    };
    const v345 = v341.then(v344);
    return v345;
};
v309.discover = v346;
const v347 = Arpping.prototype;
const v377 = function (range) {
    const v348 = Array.isArray(range);
    const v349 = range.length;
    const v350 = v348 && v349;
    const v351 = !v350;
    if (v351) {
        const v352 = this.myIP;
        const v353 = !v352;
        if (v353) {
            const v354 = this.findMyInfo();
            const v356 = () => {
                const v355 = this.ping(range);
                return v355;
            };
            const v357 = v354.then(v356);
            return v357;
        }
        range = this._getFullRange();
    }
    const v375 = (resolve, reject) => {
        var hosts = [];
        var missing = [];
        var checked = 0;
        const v373 = ip => {
            const v358 = this.timeout;
            const v359 = `ping ${ flag } ${ v358 } ${ ip }`;
            const v371 = (err, stdout, stderr) => {
                const v360 = checked++;
                v360;
                const v361 = stdout.indexOf('100% packet loss');
                const v362 = -1;
                const v363 = v361 > v362;
                const v364 = err || v363;
                if (v364) {
                    const v365 = missing.push(ip);
                    v365;
                } else {
                    const v366 = hosts.push(ip);
                    v366;
                }
                const v367 = range.length;
                const v368 = checked == v367;
                if (v368) {
                    const v369 = {
                        hosts,
                        missing
                    };
                    const v370 = resolve(v369);
                    v370;
                }
            };
            const v372 = exec(v359, v371);
            v372;
        };
        const v374 = range.forEach(v373);
        v374;
    };
    const v376 = new Promise(v375);
    return v376;
};
v347.ping = v377;
const v378 = Arpping.prototype;
const v421 = function (range) {
    const v419 = (resolve, reject) => {
        const v379 = typeof range;
        const v380 = v379 == 'string';
        if (v380) {
            range = [range];
        } else {
            const v381 = Array.isArray(range);
            const v382 = !v381;
            if (v382) {
                const v383 = new Error('range must be an array of IP addresses');
                const v384 = reject(v383);
                return v384;
            } else {
                const v385 = range.length;
                const v386 = !v385;
                if (v386) {
                    const v387 = [];
                    const v388 = [];
                    const v389 = {
                        hosts: v387,
                        missing: v388
                    };
                    const v390 = resolve(v389);
                    return v390;
                }
            }
        }
        var hosts = [];
        var missing = [];
        var checked = 0;
        const v417 = ip => {
            const v391 = `arp ${ ip }`;
            const v415 = (err, stdout, stderr) => {
                const v392 = checked++;
                v392;
                const v393 = stdout.indexOf('no entry');
                const v394 = -1;
                const v395 = v393 > v394;
                const v396 = err || v395;
                if (v396) {
                    const v397 = missing.push(ip);
                    v397;
                } else {
                    let mac;
                    const v398 = osType == 'Linux';
                    const v399 = stdout.split('\n');
                    const v400 = v399[1];
                    const v401 = v400.replace(/ +/g, ' ');
                    const v402 = v401.split(' ');
                    const v403 = v402[2];
                    const v404 = stdout.split(' ');
                    const v405 = v404[3];
                    if (v398) {
                        mac = v403;
                    } else {
                        mac = v405;
                    }
                    const v406 = mac.includes('incomplete');
                    if (v406) {
                        const v407 = missing.push(ip);
                        v407;
                    } else {
                        var host = {};
                        host.ip = ip;
                        host.mac = mac;
                        var type = macLookup(mac);
                        if (type) {
                            host.type = type;
                        }
                        const v408 = this.myIP;
                        const v409 = ip == v408;
                        if (v409) {
                            host.isHostDevice = true;
                        }
                        const v410 = hosts.push(host);
                        v410;
                    }
                }
                const v411 = range.length;
                const v412 = checked == v411;
                if (v412) {
                    const v413 = {
                        hosts,
                        missing
                    };
                    const v414 = resolve(v413);
                    v414;
                }
            };
            const v416 = exec(v391, v415);
            v416;
        };
        const v418 = range.forEach(v417);
        v418;
    };
    const v420 = new Promise(v419);
    return v420;
};
v378.arp = v421;
const v422 = Arpping.prototype;
const v450 = function (ipArray, refIP) {
    const v423 = typeof ipArray;
    const v424 = v423 === 'string';
    if (v424) {
        ipArray = [ipArray];
    } else {
        const v425 = Array.isArray(ipArray);
        const v426 = !v425;
        const v427 = ipArray.length;
        const v428 = !v427;
        const v429 = v426 || v428;
        if (v429) {
            const v432 = (resolve, reject) => {
                const v430 = new Error(`Invalid ipArray: ${ ipArray }. Search input should be one ip address string or an array of ip strings.`);
                const v431 = reject(v430);
                return v431;
            };
            const v433 = new Promise(v432);
            return v433;
        }
    }
    const v434 = ipArray[0];
    const v435 = refIP || v434;
    const v436 = this.discover(v435);
    const v448 = hosts => {
        const v438 = h => {
            const v437 = h.ip;
            return v437;
        };
        var hostIPs = hosts.map(v438);
        const v441 = h => {
            const v439 = h.ip;
            const v440 = ipArray.includes(v439);
            return v440;
        };
        const v442 = hosts.filter(v441);
        const v445 = ip => {
            const v443 = hostIPs.includes(ip);
            const v444 = !v443;
            return v444;
        };
        const v446 = ipArray.filter(v445);
        const v447 = {};
        v447.hosts = v442;
        v447.missing = v446;
        return v447;
    };
    const v449 = v436.then(v448);
    return v449;
};
v422.searchByIpAddress = v450;
const v451 = Arpping.prototype;
const v482 = function (macArray, refIP) {
    const v452 = typeof macArray;
    const v453 = v452 == 'string';
    if (v453) {
        macArray = [macArray];
    } else {
        const v454 = Array.isArray(macArray);
        const v455 = !v454;
        const v456 = macArray.length;
        const v457 = !v456;
        const v458 = v455 || v457;
        if (v458) {
            const v461 = (resolve, reject) => {
                const v459 = `Invalid macArray: ${ macArray }. Search input should be one mac address string or an array of mac address strings.`;
                const v460 = reject(v459);
                return v460;
            };
            const v462 = new Promise(v461);
            return v462;
        }
    }
    const v463 = this.discover(refIP);
    const v480 = hosts => {
        var check = JSON.stringify(hosts);
        const v472 = h => {
            h.matched = [];
            let m;
            for (m of macArray) {
                const v464 = h.mac;
                const v465 = v464.indexOf(m);
                const v466 = -1;
                const v467 = v465 > v466;
                if (v467) {
                    const v468 = h.matched;
                    const v469 = v468.push(m);
                    v469;
                }
            }
            const v470 = h.matched;
            const v471 = v470.length;
            return v471;
        };
        const v473 = hosts.filter(v472);
        const v477 = m => {
            const v474 = check.indexOf(m);
            const v475 = -1;
            const v476 = v474 == v475;
            return v476;
        };
        const v478 = macArray.filter(v477);
        const v479 = {};
        v479.hosts = v473;
        v479.missing = v478;
        return v479;
    };
    const v481 = v463.then(v480);
    return v481;
};
v451.searchByMacAddress = v482;
const v483 = Arpping.prototype;
const v494 = function (macType, refIP) {
    macType = macType.toLowerCase();
    const v484 = this.discover(refIP);
    const v492 = hosts => {
        const v490 = h => {
            const v485 = h.type;
            const v486 = h.type;
            const v487 = v486.toLowerCase();
            const v488 = v487 == macType;
            const v489 = v485 && v488;
            return v489;
        };
        const v491 = hosts.filter(v490);
        return v491;
    };
    const v493 = v484.then(v492);
    return v493;
};
v483.searchByMacType = v494;
module.exports = Arpping;
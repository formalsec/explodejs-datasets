'use strict';
const v365 = require('debug');
var debug = v365('mdns-discovery');
var dgram = require('dgram');
var packet = require('dns-packet');
const v366 = [];
const v367 = {};
v367.name = '';
v367.type = 'PTR';
v367.class = 32769;
var defaultOptions = {};
defaultOptions.nsme = '';
defaultOptions.port = 5353;
defaultOptions.ip = '224.0.0.251';
defaultOptions.reuseAddr = true;
defaultOptions.interfaces = v366;
defaultOptions.type = 'udp4';
defaultOptions.q = v367;
defaultOptions.timeout = 4;
defaultOptions.broadcast = true;
defaultOptions.multicast = true;
defaultOptions.multicastTTL = 64;
defaultOptions.ttl = 64;
defaultOptions.noQuestions = true;
defaultOptions.details = true;
const MulticastDNS = function (opts) {
    const v368 = this instanceof MulticastDNS;
    const v369 = v368 === false;
    if (v369) {
        const v370 = new MulticastDNS(opts);
        return v370;
    }
    const v371 = this.setOptions(opts);
    v371;
    this.clients = [];
    this.found = [];
};
const checkOptions = function (opts, def) {
    def = def || defaultOptions;
    let prop;
    for (prop in def) {
        const v372 = def.hasOwnProperty(prop);
        if (v372) {
            const v373 = def[prop];
            const v374 = v373 instanceof Array;
            if (v374) {
                const v375 = opts[prop];
                const v376 = !v375;
                if (v376) {
                    const v377 = [];
                    const v378 = def[prop];
                    const v379 = v377.concat(v378);
                    opts[prop] = v379;
                }
            } else {
                const v380 = def[prop];
                const v381 = typeof v380;
                const v382 = v381 === 'object';
                if (v382) {
                    const v383 = opts[prop];
                    const v384 = typeof v383;
                    const v385 = v384 !== 'object';
                    if (v385) {
                        const v386 = {};
                        opts[prop] = v386;
                    }
                    const v387 = opts[prop];
                    const v388 = def[prop];
                    const v389 = checkOptions(v387, v388);
                    v389;
                } else {
                    const v390 = opts[prop];
                    const v391 = v390 === undefined;
                    if (v391) {
                        const v392 = def[prop];
                        opts[prop] = v392;
                    }
                }
            }
        }
    }
};
const v393 = MulticastDNS.prototype;
const v406 = function (opts) {
    const v394 = {};
    opts = opts || v394;
    const v395 = opts.q;
    const v396 = {};
    opts.q = v395 || v396;
    const v397 = opts.q;
    const v398 = opts.q;
    const v399 = v398.name;
    const v400 = opts.name;
    v397.name = v399 || v400;
    var to = opts.timeout;
    const v401 = checkOptions(opts);
    v401;
    const v402 = opts.find;
    const v403 = !v402;
    const v404 = !to;
    const v405 = v403 && v404;
    if (v405) {
        opts.timeout = 0;
    }
    this.options = opts;
};
v393.setOptions = v406;
const v407 = MulticastDNS.prototype;
const v433 = function () {
    const v408 = this.options;
    const v409 = v408.interfaces;
    const v410 = this.options;
    const v411 = v410.interfaces;
    const v412 = v411.length;
    const v413 = v409 && v412;
    if (v413) {
        return;
    }
    var self = this;
    const v414 = require('os');
    var interfaces = v414.networkInterfaces();
    let devName;
    for (devName in interfaces) {
        var iface = interfaces[devName];
        var i = 0;
        const v415 = iface.length;
        let v416 = i < v415;
        while (v416) {
            var alias = iface[i];
            const v418 = alias.family;
            const v419 = v418 === 'IPv4';
            const v420 = alias && v419;
            const v421 = alias.address;
            const v422 = v421 !== '127.0.0.1';
            const v423 = v420 && v422;
            const v424 = alias.internal;
            const v425 = !v424;
            const v426 = v423 && v425;
            if (v426) {
                const v427 = self.options;
                const v428 = v427.interfaces;
                const v429 = alias.address;
                const v430 = v428.push(v429);
                v430;
                const v431 = alias.address;
                const v432 = debug('found interface: %s', v431);
                v432;
            }
            const v417 = i++;
            v416 = i < v415;
        }
    }
};
v407.getInterfaces = v433;
const v434 = MulticastDNS.prototype;
const v435 = MulticastDNS.prototype;
const v436 = v435.run;
v434.browse = v436;
const v437 = MulticastDNS.prototype;
const v442 = function () {
    const v438 = this.options;
    const v439 = v438.q;
    const v440 = [v439];
    const v441 = { questions: v440 };
    var message = packet.encode(v441);
    return message;
};
v437.getPayload = v442;
const v443 = MulticastDNS.prototype;
const v444 = function () {
};
v443.onClose = v444;
const v445 = MulticastDNS.prototype;
const v446 = function (err) {
};
v445.onError = v446;
const v447 = MulticastDNS.prototype;
const v529 = function (interfaceIp) {
    let parm;
    const v448 = process.version;
    const v449 = v448.substr(0, 5);
    const v450 = v449 === 'v0.10';
    const v451 = this.options;
    const v452 = v451.type;
    const v453 = this.options;
    const v454 = v453.type;
    const v455 = this.options;
    const v456 = v455.reuseAddr;
    const v457 = {
        type: v454,
        reuseAddr: v456
    };
    if (v450) {
        parm = v452;
    } else {
        parm = v457;
    }
    var client = dgram.createSocket(parm);
    const v459 = function (message, rinfo) {
        const v458 = this.onMessage(message, rinfo);
        v458;
    };
    const v460 = v459.bind(this);
    const v461 = client.on('message', v460);
    v461;
    const v515 = function () {
        const v462 = client.address();
        const v463 = debug('listening on ', v462);
        v463;
        const v464 = this.options;
        const v465 = v464.broadcast;
        const v466 = v465 !== false;
        const v467 = client.setBroadcast(v466);
        v467;
        const v468 = this.options;
        const v469 = v468.multicast;
        const v470 = v469 !== false;
        if (v470) {
            const v471 = this.options;
            const v472 = v471.addMembership;
            const v473 = v472 !== false;
            if (v473) {
                const v474 = this.options;
                const v475 = v474.ip;
                const v476 = client.addMembership(v475, interfaceIp);
                v476;
            }
            const v477 = this.options;
            const v478 = v477.multicastTTL;
            if (v478) {
                const v479 = this.options;
                const v480 = v479.multicastTTL;
                const v481 = client.setMulticastTTL(v480);
                v481;
            }
            const v482 = this.options;
            const v483 = v482.multicastLoopback;
            const v484 = v483 !== false;
            const v485 = client.setMulticastLoopback(v484);
            v485;
        }
        const v486 = this.options;
        const v487 = v486.ttl;
        if (v487) {
            const v488 = this.options;
            const v489 = v488.ttl;
            const v490 = client.setTTL(v489);
            v490;
        }
        const v491 = this.options;
        const v492 = v491.q;
        const v493 = v492.name;
        if (v493) {
            var self = this;
            var sendIt = function () {
                var payload = self.getPayload();
                const v494 = payload.length;
                const v495 = self.options;
                const v496 = v495.port;
                const v497 = self.options;
                const v498 = v497.ip;
                const v499 = function (err, bytes) {
                };
                const v500 = client.send(payload, 0, v494, v496, v498, v499);
                v500;
            };
            const v501 = this.options;
            const v502 = v501.q;
            const v503 = v502.name;
            const v504 = Array.isArray(v503);
            if (v504) {
                const v505 = this.options;
                const v506 = v505.q;
                var origName = v506.name;
                const v510 = function (name) {
                    const v507 = self.options;
                    const v508 = v507.q;
                    v508.name = name;
                    const v509 = sendIt();
                    v509;
                };
                const v511 = origName.forEach(v510);
                v511;
                const v512 = self.options;
                const v513 = v512.q;
                v513.name = origName;
            } else {
                const v514 = sendIt();
                v514;
            }
        }
    };
    const v516 = v515.bind(this);
    const v517 = client.on('listening', v516);
    v517;
    const v518 = this.onClose;
    const v519 = v518.bind(this);
    const v520 = client.on('close', v519);
    v520;
    const v521 = this.onError;
    const v522 = v521.bind(this);
    const v523 = client.on('error', v522);
    v523;
    const v524 = this.options;
    const v525 = v524.port;
    const v526 = client.bind(v525, interfaceIp);
    v526;
    const v527 = this.clients;
    const v528 = v527.push(client);
    v528;
};
v447.prepare = v529;
const v530 = MulticastDNS.prototype;
const v542 = function () {
    const v531 = this.timer;
    if (v531) {
        const v532 = this.timer;
        const v533 = clearTimeout(v532);
        v533;
        const v534 = this.timer;
        const v535 = delete v534;
        v535;
    }
    const v536 = this.clients;
    const v539 = function (client, i) {
        if (client) {
            const v537 = client.close();
            v537;
        }
        const v538 = this.clients;
        v538[i] = undefined;
    };
    const v540 = v539.bind(this);
    const v541 = v536.forEach(v540);
    v541;
};
v530.close = v542;
const v543 = MulticastDNS.prototype;
const v572 = function (timeout, readyCallback) {
    const v544 = typeof timeout;
    const v545 = v544 === 'function';
    if (v545) {
        readyCallback = timeout;
        timeout = undefined;
    }
    const v546 = timeout === undefined;
    if (v546) {
        const v547 = this.options;
        timeout = v547.timeout;
    }
    const v548 = this.getInterfaces();
    v548;
    const v549 = this.options;
    const v550 = v549.interfaces;
    const v552 = function (interfaceIp) {
        const v551 = this.prepare(interfaceIp);
        v551;
    };
    const v553 = v552.bind(this);
    const v554 = v550.forEach(v553);
    v554;
    if (readyCallback) {
        const v555 = readyCallback.bind(this);
        this.readyCallback = v555;
    }
    if (timeout) {
        const v568 = function () {
            const v556 = this.close();
            v556;
            const v557 = debug.enabled;
            if (v557) {
                const v558 = this.found;
                const v562 = function (info) {
                    const v559 = info.ip;
                    const v560 = info.name;
                    const v561 = debug('found: %s - %s', v559, v560);
                    v561;
                };
                const v563 = v558.forEach(v562);
                v563;
            }
            const v564 = this.readyCallback;
            const v565 = this.found;
            const v566 = this.readyCallback(v565);
            const v567 = v564 && v566;
            v567;
        };
        const v569 = v568.bind(this);
        const v570 = timeout * 1000;
        const v571 = setTimeout(v569, v570);
        this.timer = v571;
    }
    return this;
};
v543.run = v572;
const v573 = MulticastDNS.prototype;
const v587 = function (callback) {
    const v574 = this.options;
    v574.returnOnFirstFound = true;
    const v585 = function (res) {
        const v575 = !res;
        const v576 = res.length;
        const v577 = v576 === 0;
        const v578 = v575 || v577;
        if (v578) {
            const v579 = callback();
            const v580 = callback && v579;
            return v580;
        }
        const v581 = res[0];
        const v582 = v581.ip;
        const v583 = callback(v582);
        const v584 = callback && v583;
        v584;
    };
    const v586 = this.run(v585);
    v586;
};
v573.findFirstIP = v587;
const v588 = MulticastDNS.prototype;
const v598 = function (propName, arr) {
    const v589 = typeof propName;
    const v590 = v589 === 'function';
    if (v590) {
        const v591 = propName.bind(this);
        this.validFilter = v591;
        return this;
    }
    const v597 = function (a) {
        const v595 = function (v) {
            const v592 = v[propName];
            const v593 = a[propName];
            const v594 = v592 === v593;
            return v594;
        };
        var bo = arr.find(v595);
        const v596 = !bo;
        return v596;
    };
    this.validFilter = v597;
    return this;
};
v588.setFilter = v598;
const v599 = MulticastDNS.prototype;
const v689 = function (packets, rinfo) {
    const v600 = this.options;
    const v601 = v600.find;
    const v602 = v601 === undefined;
    const v603 = packets.answers;
    const v604 = !v603;
    const v605 = v602 || v604;
    if (v605) {
        return;
    }
    var self = this;
    const addDetails = function (entry, a) {
        const v606 = self.options;
        const v607 = v606.details;
        const v608 = a.type;
        const v609 = v607 && v608;
        if (v609) {
            const v610 = a.type;
            const v611 = a.type;
            const v612 = entry[v611];
            const v613 = {};
            entry[v610] = v612 || v613;
            const v614 = a.type;
            var d = entry[v614];
            const v615 = a.name;
            if (v615) {
                const v616 = d.name;
                if (v616) {
                    const v617 = d.names;
                    const v618 = d.name;
                    const v619 = [v618];
                    d.names = v617 || v619;
                    const v620 = d.names;
                    const v621 = a.name;
                    const v622 = v620.push(v621);
                    v622;
                    const v623 = a.name;
                    const v624 = v623.length;
                    const v625 = d.name;
                    const v626 = v625.length;
                    const v627 = v624 > v626;
                    if (v627) {
                        const v628 = a.name;
                        d.name = v628;
                    }
                } else {
                    const v629 = a.name;
                    d.name = v629;
                }
            }
            const v630 = a.data;
            if (v630) {
                const v631 = d.data;
                if (v631) {
                    const v632 = d.dataa;
                    const v633 = d.data;
                    const v634 = [v633];
                    d.dataa = v632 || v634;
                    const v635 = d.dataa;
                    const v636 = v635.push;
                    const v637 = a.data;
                    const v638 = v636[v637];
                    v638;
                }
                const v639 = a.data;
                d.data = v639;
            }
        }
    };
    const doIt = function (qa, type) {
        if (qa) {
            const v678 = function (a) {
                const v640 = self.options;
                const v641 = v640.find;
                const v642 = v641 === '*';
                const v643 = a.name;
                const v644 = self.options;
                const v645 = v644.find;
                const v646 = v643.indexOf(v645);
                const v647 = v646 === 0;
                const v648 = v642 || v647;
                if (v648) {
                    const v649 = self.validFilter;
                    const v650 = rinfo.address;
                    const v651 = { ip: v650 };
                    const v652 = self.validFilter(v651);
                    const v653 = !v652;
                    const v654 = v649 && v653;
                    if (v654) {
                        return;
                    }
                    const v655 = self.found;
                    const v659 = function (v) {
                        const v656 = v.ip;
                        const v657 = rinfo.address;
                        const v658 = v656 === v657;
                        return v658;
                    };
                    var alreadyFound = v655.find(v659);
                    if (alreadyFound) {
                        const v660 = addDetails(alreadyFound, a);
                        v660;
                        return;
                    }
                    const v661 = rinfo.address;
                    const v662 = qa[0];
                    const v663 = v662.name;
                    const v664 = qa[0];
                    const v665 = v664.name;
                    const v666 = a.name;
                    let v667;
                    if (v663) {
                        v667 = v665;
                    } else {
                        v667 = v666;
                    }
                    var entry = {};
                    entry.ip = v661;
                    entry.type = type;
                    entry.name = v667;
                    const v668 = addDetails(entry, a);
                    v668;
                    const v669 = self.onEntry;
                    if (v669) {
                        const v670 = self.onEntry(entry);
                        v670;
                    } else {
                        const v671 = self.found;
                        const v672 = v671.push(entry);
                        v672;
                    }
                    const v673 = self.options;
                    const v674 = v673.returnOnFirstFound;
                    if (v674) {
                        const v675 = self.close();
                        v675;
                        const v676 = self.found;
                        const v677 = self.readyCallback(v676);
                        v677;
                    }
                }
            };
            const v679 = qa.forEach(v678);
            v679;
        }
    };
    const v680 = packets.answers;
    const v681 = doIt(v680, 'answer');
    v681;
    const v682 = this.options;
    const v683 = v682.noQuestions;
    const v684 = !v683;
    const v685 = packets.questions;
    const v686 = v684 && v685;
    if (v686) {
        const v687 = packets.questions;
        const v688 = doIt(v687, 'query');
        v688;
    }
    return this;
};
v599.onPacket = v689;
const v690 = MulticastDNS.prototype;
const v694 = function (name, fn) {
    switch (name) {
    case 'packet':
        const v691 = this.__proto__;
        v691.onPacket = fn;
        break;
    case 'message':
        const v692 = this.__proto__;
        v692.onMessage = fn;
        break;
    case 'filter':
        this.validFilter = fn;
        break;
    case 'entry':
        const v693 = fn.bind(this);
        this.onEntry = v693;
        break;
    }
    return this;
};
v690.on = v694;
const v695 = MulticastDNS.prototype;
const v712 = function (ip, fn) {
    var args = arguments;
    const v696 = args.length;
    const v697 = v696 < 2;
    if (v697) {
        return;
    }
    const v698 = args.length;
    const v699 = v698 - 1;
    fn = args[v699];
    const v700 = typeof fn;
    const v701 = v700 !== 'function';
    if (v701) {
        return;
    }
    const v702 = this.onIPs;
    const v703 = !v702;
    if (v703) {
        this.onIPs = [];
    }
    fn = fn.bind(this);
    var i = 0;
    const v704 = args.length;
    const v705 = v704 - 1;
    let v706 = i < v705;
    while (v706) {
        const v708 = this.onIPs;
        const v709 = args[i];
        const v710 = {
            ip: v709,
            fn: fn
        };
        const v711 = v708.push(v710);
        v711;
        const v707 = i++;
        v706 = i < v705;
    }
    return this;
};
v695.onIP = v712;
const v713 = MulticastDNS.prototype;
const v728 = function (message, rinfo) {
    var packets;
    try {
        packets = packet.decode(message);
    } catch (e) {
        return;
    }
    const v714 = this.onPacket(packets, rinfo);
    v714;
    const v715 = this.onIPs;
    if (v715) {
        const v716 = this.onIPs;
        const v720 = function (entry) {
            const v717 = entry.ip;
            const v718 = rinfo.address;
            const v719 = v717 === v718;
            return v719;
        };
        var found = v716.find(v720);
        if (found) {
            const v721 = found.fn(packets, rinfo);
            v721;
        }
    }
    const v722 = debug.enabled;
    const v723 = packets.answers;
    const v724 = v722 && v723;
    if (v724) {
        const v725 = packets.answers;
        const v726 = function (packet, i) {
        };
        const v727 = v725.forEach(v726);
        v727;
    }
    return this;
};
v713.onMessage = v728;
module.exports = MulticastDNS;
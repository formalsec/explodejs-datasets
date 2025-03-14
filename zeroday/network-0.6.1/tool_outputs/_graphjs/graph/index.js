'use strict';
var needle = require('needle');
var os_functions;
const v376 = process.platform;
switch (v376) {
case 'win32':
    os_functions = require('./win32');
    break;
case 'linux':
    os_functions = require('./linux');
    break;
case 'darwin':
    os_functions = require('./darwin');
    break;
}
var ip_regex = /(\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b)/;
var public_ip_urls = [
    'http://checkip.dyndns.org',
    'http://wtfismyip.com/text',
    'http://ipecho.net/plain',
    'http://ifconfig.me/ip'
];
const is_ip_address = function (str) {
    const v377 = ip_regex.test(str);
    return v377;
};
;
const nic_by_name = function (name, cb) {
    const v389 = function (err, list) {
        if (err) {
            const v378 = cb(err);
            return v378;
        }
        const v381 = function (nic) {
            const v379 = nic.name;
            const v380 = v379 === name;
            return v380;
        };
        var nics = list.filter(v381);
        const v382 = nics.length;
        const v383 = v382 > 0;
        if (v383) {
            const v384 = nics[0];
            const v385 = cb(null, v384);
            v385;
        } else {
            const v386 = 'No network interface named ' + name;
            const v387 = new Error(v386);
            const v388 = cb(v387);
            v388;
        }
    };
    const v390 = os_functions.get_network_interfaces_list(v389);
    v390;
};
;
const v409 = function (options, cb) {
    const v391 = typeof options;
    const v392 = v391 == 'function';
    if (v392) {
        cb = options;
        options = {};
    }
    const v393 = options.urls;
    var urls = v393 || public_ip_urls;
    const get = function (i) {
        var url = urls[i];
        const v394 = !url;
        if (v394) {
            const v395 = new Error('Unable to fetch IP address.');
            const v396 = cb(v395);
            return v396;
        }
        const v406 = function (err, resp) {
            const v397 = resp.body;
            const v398 = v397.toString();
            var body = resp && v398;
            const v399 = body.match(ip_regex);
            const v400 = body && v399;
            if (v400) {
                const v401 = body.match(ip_regex);
                const v402 = v401[1];
                const v403 = cb(null, v402);
                return v403;
            }
            const v404 = i + 1;
            const v405 = get(v404);
            v405;
        };
        const v407 = needle.get(url, v406);
        v407;
    };
    ;
    const v408 = get(0);
    v408;
};
exports.get_public_ip = v409;
const v436 = function (cb) {
    const v434 = function (err, list) {
        const v410 = !list;
        const v411 = err || v410;
        if (v411) {
            const v412 = new Error('No network interfaces found.');
            const v413 = err || v412;
            const v414 = cb(v413);
            return v414;
        }
        const v432 = function (err, active_nic) {
            if (err) {
                const v415 = cb(err);
                return v415;
            }
            const v421 = function (nic) {
                const v416 = nic.ip_address;
                const v417 = is_ip_address(v416);
                if (v417) {
                    const v418 = nic.name;
                    const v419 = active_nic == v418;
                    let v420;
                    if (active_nic) {
                        v420 = v419;
                    } else {
                        v420 = true;
                    }
                    return v420;
                }
            };
            var ips = list.filter(v421);
            const v422 = ips.length;
            const v423 = v422 > 0;
            if (v423) {
                const v424 = ips[0];
                const v425 = v424.ip_address;
                const v426 = cb(null, v425);
                v426;
            } else {
                const v427 = list.length;
                const v428 = 'No private IPs found (' + v427;
                const v429 = v428 + ' interfaces)';
                const v430 = new Error(v429);
                const v431 = cb(v430);
                v431;
            }
        };
        const v433 = os_functions.get_active_network_interface_name(v432);
        v433;
    };
    const v435 = os_functions.get_network_interfaces_list(v434);
    v435;
};
exports.get_private_ip = v436;
const v459 = function (cb) {
    const v457 = function (err, nic_name) {
        const v437 = nic_name.trim();
        const v438 = v437 == '';
        const v439 = err || v438;
        if (v439) {
            const v440 = new Error('No active network interface found.');
            const v441 = err || v440;
            const v442 = cb(v441);
            return v442;
        }
        const v455 = function (err, out) {
            const v443 = !out;
            const v444 = err || v443;
            const v445 = out.toString();
            const v446 = v445 == '';
            const v447 = v444 || v446;
            if (v447) {
                const v448 = 'No gateway IP assigned to ' + nic_name;
                const v449 = new Error(v448);
                const v450 = err || v449;
                const v451 = cb(v450);
                return v451;
            }
            const v452 = out.toString();
            const v453 = v452.trim();
            const v454 = cb(null, v453);
            v454;
        };
        const v456 = os_functions.gateway_ip_for(nic_name, v455);
        v456;
    };
    const v458 = os_functions.get_active_network_interface_name(v457);
    v458;
};
exports.get_gateway_ip = v459;
const v482 = function (cb) {
    const v480 = function (err, nic_name) {
        const v460 = !nic_name;
        const v461 = err || v460;
        if (v461) {
            const v462 = new Error('No active interfaces detected.');
            const v463 = err || v462;
            const v464 = cb(v463);
            return v464;
        }
        const v478 = function (err, nic) {
            if (err) {
                const v465 = cb(err);
                return v465;
            }
            const v476 = function (err, netmask) {
                const v466 = !err;
                const v467 = v466 && netmask;
                if (v467) {
                    const v468 = netmask.trim();
                    nic.netmask = v468;
                }
                const v474 = function (err, ip) {
                    const v469 = !err;
                    const v470 = v469 && ip;
                    if (v470) {
                        const v471 = ip.toString();
                        const v472 = v471.trim();
                        nic.gateway_ip = v472;
                    }
                    const v473 = cb(null, nic);
                    v473;
                };
                const v475 = os_functions.gateway_ip_for(nic_name, v474);
                v475;
            };
            const v477 = os_functions.netmask_for(nic_name, v476);
            v477;
        };
        const v479 = nic_by_name(nic_name, v478);
        v479;
    };
    const v481 = os_functions.get_active_network_interface_name(v480);
    v481;
};
exports.get_active_interface = v482;
const v483 = os_functions.get_network_interfaces_list;
exports.get_interfaces_list = v483;
const v484 = os_functions.mac_address_for;
exports.mac_address_for = v484;
const v485 = os_functions.gateway_ip_for;
exports.gateway_ip_for = v485;
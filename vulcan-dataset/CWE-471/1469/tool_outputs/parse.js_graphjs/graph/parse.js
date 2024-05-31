'use strict';
var Utils = require('./utils');
const v359 = Object.prototype;
var has = v359.hasOwnProperty;
const v360 = Utils.decode;
var defaults = {};
defaults.delimiter = '&';
defaults.depth = 5;
defaults.arrayLimit = 20;
defaults.parameterLimit = 1000;
defaults.strictNullHandling = false;
defaults.plainObjects = false;
defaults.allowPrototypes = false;
defaults.allowDots = false;
defaults.decoder = v360;
var parseValues = function parseValues(str, options) {
    var obj = {};
    const v361 = options.delimiter;
    const v362 = options.parameterLimit;
    const v363 = v362 === Infinity;
    const v364 = options.parameterLimit;
    let v365;
    if (v363) {
        v365 = undefined;
    } else {
        v365 = v364;
    }
    var parts = str.split(v361, v365);
    var i = 0;
    const v366 = parts.length;
    let v367 = i < v366;
    while (v367) {
        var part = parts[i];
        let pos;
        const v369 = part.indexOf(']=');
        const v370 = -1;
        const v371 = v369 === v370;
        const v372 = part.indexOf('=');
        const v373 = part.indexOf(']=');
        const v374 = v373 + 1;
        if (v371) {
            pos = v372;
        } else {
            pos = v374;
        }
        var key;
        var val;
        const v375 = -1;
        const v376 = pos === v375;
        if (v376) {
            key = options.decoder(part);
            const v377 = options.strictNullHandling;
            if (v377) {
                val = null;
            } else {
                val = '';
            }
        } else {
            const v378 = part.slice(0, pos);
            key = options.decoder(v378);
            const v379 = pos + 1;
            const v380 = part.slice(v379);
            val = options.decoder(v380);
        }
        const v381 = has.call(obj, key);
        if (v381) {
            const v382 = [];
            const v383 = obj[key];
            const v384 = v382.concat(v383);
            const v385 = v384.concat(val);
            obj[key] = v385;
        } else {
            obj[key] = val;
        }
        const v368 = ++i;
        v367 = i < v366;
    }
    return obj;
};
var parseObject = function parseObject(chain, val, options) {
    const v386 = chain.length;
    const v387 = !v386;
    if (v387) {
        return val;
    }
    var root = chain.shift();
    var obj;
    const v388 = root === '[]';
    if (v388) {
        obj = [];
        const v389 = parseObject(chain, val, options);
        obj = obj.concat(v389);
    } else {
        const v390 = options.plainObjects;
        const v391 = Object.create(null);
        const v392 = {};
        if (v390) {
            obj = v391;
        } else {
            obj = v392;
        }
        let cleanRoot;
        const v393 = root.charAt(0);
        const v394 = v393 === '[';
        const v395 = root.length;
        const v396 = v395 - 1;
        const v397 = root.charAt(v396);
        const v398 = v397 === ']';
        const v399 = v394 && v398;
        const v400 = -1;
        const v401 = root.slice(1, v400);
        if (v399) {
            cleanRoot = v401;
        } else {
            cleanRoot = root;
        }
        var index = parseInt(cleanRoot, 10);
        const v402 = isNaN(index);
        const v403 = !v402;
        const v404 = root !== cleanRoot;
        const v405 = v403 && v404;
        const v406 = String(index);
        const v407 = v406 === cleanRoot;
        const v408 = v405 && v407;
        const v409 = index >= 0;
        const v410 = v408 && v409;
        const v411 = options.parseArrays;
        const v412 = options.arrayLimit;
        const v413 = index <= v412;
        const v414 = v411 && v413;
        const v415 = v410 && v414;
        if (v415) {
            obj = [];
            const v416 = parseObject(chain, val, options);
            obj[index] = v416;
        } else {
            const v417 = parseObject(chain, val, options);
            obj[cleanRoot] = v417;
        }
    }
    return obj;
};
var parseKeys = function parseKeys(givenKey, val, options) {
    const v418 = !givenKey;
    if (v418) {
        return;
    }
    let key;
    const v419 = options.allowDots;
    const v420 = givenKey.replace(/\.([^.[]+)/g, '[$1]');
    if (v419) {
        key = v420;
    } else {
        key = givenKey;
    }
    var parent = /^([^[]*)/;
    var child = /(\[[^[\]]*])/g;
    var segment = parent.exec(key);
    var keys = [];
    const v421 = segment[1];
    if (v421) {
        const v422 = options.plainObjects;
        const v423 = !v422;
        const v424 = Object.prototype;
        const v425 = segment[1];
        const v426 = has.call(v424, v425);
        const v427 = v423 && v426;
        if (v427) {
            const v428 = options.allowPrototypes;
            const v429 = !v428;
            if (v429) {
                return;
            }
        }
        const v430 = segment[1];
        const v431 = keys.push(v430);
        v431;
    }
    var i = 0;
    const v432 = (segment = child.exec(key)) !== null;
    const v433 = options.depth;
    const v434 = i < v433;
    let v435 = v432 && v434;
    while (v435) {
        i += 1;
        const v436 = options.plainObjects;
        const v437 = !v436;
        const v438 = Object.prototype;
        const v439 = segment[1];
        const v440 = -1;
        const v441 = v439.slice(1, v440);
        const v442 = has.call(v438, v441);
        const v443 = v437 && v442;
        if (v443) {
            const v444 = options.allowPrototypes;
            const v445 = !v444;
            if (v445) {
                return;
            }
        }
        const v446 = segment[1];
        const v447 = keys.push(v446);
        v447;
        v435 = v432 && v434;
    }
    if (segment) {
        const v448 = segment.index;
        const v449 = key.slice(v448);
        const v450 = '[' + v449;
        const v451 = v450 + ']';
        const v452 = keys.push(v451);
        v452;
    }
    const v453 = parseObject(keys, val, options);
    return v453;
};
const v544 = function (str, opts) {
    const v454 = {};
    var options = opts || v454;
    const v455 = options.decoder;
    const v456 = v455 !== null;
    const v457 = options.decoder;
    const v458 = v457 !== undefined;
    const v459 = v456 && v458;
    const v460 = options.decoder;
    const v461 = typeof v460;
    const v462 = v461 !== 'function';
    const v463 = v459 && v462;
    if (v463) {
        const v464 = new TypeError('Decoder has to be a function.');
        throw v464;
    }
    const v465 = options.delimiter;
    const v466 = typeof v465;
    const v467 = v466 === 'string';
    const v468 = options.delimiter;
    const v469 = Utils.isRegExp(v468);
    const v470 = v467 || v469;
    const v471 = options.delimiter;
    const v472 = defaults.delimiter;
    let v473;
    if (v470) {
        v473 = v471;
    } else {
        v473 = v472;
    }
    options.delimiter = v473;
    const v474 = options.depth;
    const v475 = typeof v474;
    const v476 = v475 === 'number';
    const v477 = options.depth;
    const v478 = defaults.depth;
    let v479;
    if (v476) {
        v479 = v477;
    } else {
        v479 = v478;
    }
    options.depth = v479;
    const v480 = options.arrayLimit;
    const v481 = typeof v480;
    const v482 = v481 === 'number';
    const v483 = options.arrayLimit;
    const v484 = defaults.arrayLimit;
    let v485;
    if (v482) {
        v485 = v483;
    } else {
        v485 = v484;
    }
    options.arrayLimit = v485;
    const v486 = options.parseArrays;
    options.parseArrays = v486 !== false;
    const v487 = options.decoder;
    const v488 = typeof v487;
    const v489 = v488 === 'function';
    const v490 = options.decoder;
    const v491 = defaults.decoder;
    let v492;
    if (v489) {
        v492 = v490;
    } else {
        v492 = v491;
    }
    options.decoder = v492;
    const v493 = options.allowDots;
    const v494 = typeof v493;
    const v495 = v494 === 'boolean';
    const v496 = options.allowDots;
    const v497 = defaults.allowDots;
    let v498;
    if (v495) {
        v498 = v496;
    } else {
        v498 = v497;
    }
    options.allowDots = v498;
    const v499 = options.plainObjects;
    const v500 = typeof v499;
    const v501 = v500 === 'boolean';
    const v502 = options.plainObjects;
    const v503 = defaults.plainObjects;
    let v504;
    if (v501) {
        v504 = v502;
    } else {
        v504 = v503;
    }
    options.plainObjects = v504;
    const v505 = options.allowPrototypes;
    const v506 = typeof v505;
    const v507 = v506 === 'boolean';
    const v508 = options.allowPrototypes;
    const v509 = defaults.allowPrototypes;
    let v510;
    if (v507) {
        v510 = v508;
    } else {
        v510 = v509;
    }
    options.allowPrototypes = v510;
    const v511 = options.parameterLimit;
    const v512 = typeof v511;
    const v513 = v512 === 'number';
    const v514 = options.parameterLimit;
    const v515 = defaults.parameterLimit;
    let v516;
    if (v513) {
        v516 = v514;
    } else {
        v516 = v515;
    }
    options.parameterLimit = v516;
    const v517 = options.strictNullHandling;
    const v518 = typeof v517;
    const v519 = v518 === 'boolean';
    const v520 = options.strictNullHandling;
    const v521 = defaults.strictNullHandling;
    let v522;
    if (v519) {
        v522 = v520;
    } else {
        v522 = v521;
    }
    options.strictNullHandling = v522;
    const v523 = str === '';
    const v524 = str === null;
    const v525 = v523 || v524;
    const v526 = typeof str;
    const v527 = v526 === 'undefined';
    const v528 = v525 || v527;
    if (v528) {
        const v529 = options.plainObjects;
        const v530 = Object.create(null);
        const v531 = {};
        let v532;
        if (v529) {
            v532 = v530;
        } else {
            v532 = v531;
        }
        return v532;
    }
    let tempObj;
    const v533 = typeof str;
    const v534 = v533 === 'string';
    const v535 = parseValues(str, options);
    if (v534) {
        tempObj = v535;
    } else {
        tempObj = str;
    }
    let obj;
    const v536 = options.plainObjects;
    const v537 = Object.create(null);
    const v538 = {};
    if (v536) {
        obj = v537;
    } else {
        obj = v538;
    }
    var keys = Object.keys(tempObj);
    var i = 0;
    const v539 = keys.length;
    let v540 = i < v539;
    while (v540) {
        var key = keys[i];
        const v542 = tempObj[key];
        var newObj = parseKeys(key, v542, options);
        obj = Utils.merge(obj, newObj, options);
        const v541 = ++i;
        v540 = i < v539;
    }
    const v543 = Utils.compact(obj);
    return v543;
};
module.exports = v544;
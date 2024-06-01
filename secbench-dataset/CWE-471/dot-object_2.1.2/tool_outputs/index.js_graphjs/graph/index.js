'use strict';
const _process = function (v, mod) {
    var i;
    var r;
    const v374 = typeof mod;
    const v375 = v374 === 'function';
    if (v375) {
        r = mod(v);
        const v376 = r !== undefined;
        if (v376) {
            v = r;
        }
    } else {
        const v377 = Array.isArray(mod);
        if (v377) {
            i = 0
            const v378 = mod.length;
            let v379 = i < v378;
            while (v379) {
                r = mod[i](v);
                const v381 = r !== undefined;
                if (v381) {
                    v = r;
                }
                const v380 = i++;
                v379 = i < v378;
            }
        }
    }
    return v;
};
const parseKey = function (key, val) {
    const v382 = key[0];
    const v383 = v382 === '-';
    const v384 = Array.isArray(val);
    const v385 = v383 && v384;
    const v386 = /^-\d+$/.test(key);
    const v387 = v385 && v386;
    if (v387) {
        const v388 = val.length;
        const v389 = parseInt(key, 10);
        const v390 = v388 + v389;
        return v390;
    }
    return key;
};
const isIndex = function (k) {
    const v391 = /^\d+$/.test(k);
    return v391;
};
const isObject = function (val) {
    const v392 = Object.prototype;
    const v393 = v392.toString;
    const v394 = v393.call(val);
    const v395 = v394 === '[object Object]';
    return v395;
};
const isArrayOrObject = function (val) {
    const v396 = Object(val);
    const v397 = v396 === val;
    return v397;
};
const isEmptyObject = function (val) {
    const v398 = Object.keys(val);
    const v399 = v398.length;
    const v400 = v399 === 0;
    return v400;
};
const parsePath = function (path, sep) {
    const v401 = path.indexOf('[');
    const v402 = v401 >= 0;
    if (v402) {
        const v403 = path.replace(/\[/g, '.');
        path = v403.replace(/]/g, '');
    }
    const v404 = path.split(sep);
    return v404;
};
const v405 = Object.prototype;
var hasOwnProperty = v405.hasOwnProperty;
const DotObject = function (separator, override, useArray, useBrackets) {
    const v406 = this instanceof DotObject;
    const v407 = !v406;
    if (v407) {
        const v408 = new DotObject(separator, override, useArray, useBrackets);
        return v408;
    }
    const v409 = typeof override;
    const v410 = v409 === 'undefined';
    if (v410) {
        override = false;
    }
    const v411 = typeof useArray;
    const v412 = v411 === 'undefined';
    if (v412) {
        useArray = true;
    }
    const v413 = typeof useBrackets;
    const v414 = v413 === 'undefined';
    if (v414) {
        useBrackets = true;
    }
    this.separator = separator || '.';
    this.override = override;
    this.useArray = useArray;
    this.useBrackets = useBrackets;
    this.keepArray = false;
    this.cleanup = [];
};
var dotDefault = new DotObject('.', false, true, true);
const wrap = function (method) {
    const v417 = function () {
        const v415 = dotDefault[method];
        const v416 = v415.apply(dotDefault, arguments);
        return v416;
    };
    return v417;
};
const v418 = DotObject.prototype;
const v463 = function (a, obj, v, mod) {
    var k = a.shift();
    const v419 = a.length;
    const v420 = v419 > 0;
    if (v420) {
        const v421 = obj[k];
        const v422 = this.useArray;
        const v423 = a[0];
        const v424 = isIndex(v423);
        const v425 = v422 && v424;
        const v426 = [];
        const v427 = {};
        let v428;
        if (v425) {
            v428 = v426;
        } else {
            v428 = v427;
        }
        obj[k] = v421 || v428;
        const v429 = obj[k];
        const v430 = isArrayOrObject(v429);
        const v431 = !v430;
        if (v431) {
            const v432 = this.override;
            if (v432) {
                const v433 = {};
                obj[k] = v433;
            } else {
                const v434 = isArrayOrObject(v);
                const v435 = isEmptyObject(v);
                const v436 = v434 && v435;
                const v437 = !v436;
                if (v437) {
                    const v438 = 'Trying to redefine `' + k;
                    const v439 = v438 + '` which is a ';
                    const v440 = obj[k];
                    const v441 = typeof v440;
                    const v442 = v439 + v441;
                    const v443 = new Error(v442);
                    throw v443;
                }
                return;
            }
        }
        const v444 = obj[k];
        const v445 = this._fill(a, v444, v, mod);
        v445;
    } else {
        const v446 = this.override;
        const v447 = !v446;
        const v448 = obj[k];
        const v449 = isArrayOrObject(v448);
        const v450 = v447 && v449;
        const v451 = obj[k];
        const v452 = isEmptyObject(v451);
        const v453 = !v452;
        const v454 = v450 && v453;
        if (v454) {
            const v455 = isArrayOrObject(v);
            const v456 = isEmptyObject(v);
            const v457 = v455 && v456;
            const v458 = !v457;
            if (v458) {
                const v459 = 'Trying to redefine non-empty obj[\'' + k;
                const v460 = v459 + '\']';
                const v461 = new Error(v460);
                throw v461;
            }
            return;
        }
        const v462 = _process(v, mod);
        obj[k] = v462;
    }
};
v418._fill = v463;
const v464 = DotObject.prototype;
const v485 = function (obj, mods) {
    var self = this;
    const v465 = Object.keys(obj);
    const v483 = function (k) {
        let mod;
        const v466 = mods === undefined;
        const v467 = mods[k];
        if (v466) {
            mod = null;
        } else {
            mod = v467;
        }
        const v468 = self.separator;
        const v469 = parsePath(k, v468);
        const v470 = self.separator;
        var ok = v469.join(v470);
        const v471 = self.separator;
        const v472 = ok.indexOf(v471);
        const v473 = -1;
        const v474 = v472 !== v473;
        if (v474) {
            const v475 = self.separator;
            const v476 = ok.split(v475);
            const v477 = obj[k];
            const v478 = self._fill(v476, obj, v477, mod);
            v478;
            const v479 = obj[k];
            const v480 = delete v479;
            v480;
        } else {
            const v481 = obj[k];
            const v482 = _process(v481, mod);
            obj[k] = v482;
        }
    };
    const v484 = v465.forEach(v483);
    v484;
    return obj;
};
v464.object = v485;
const v486 = DotObject.prototype;
const v498 = function (path, v, obj, mod) {
    const v487 = this.separator;
    const v488 = parsePath(path, v487);
    const v489 = this.separator;
    var ok = v488.join(v489);
    const v490 = this.separator;
    const v491 = path.indexOf(v490);
    const v492 = -1;
    const v493 = v491 !== v492;
    if (v493) {
        const v494 = this.separator;
        const v495 = ok.split(v494);
        const v496 = this._fill(v495, obj, v, mod);
        v496;
    } else {
        const v497 = _process(v, mod);
        obj[path] = v497;
    }
    return obj;
};
v486.str = v498;
const v499 = DotObject.prototype;
const v532 = function (path, obj, remove, reindexArray) {
    var i;
    var keys;
    var val;
    var key;
    var cp;
    const v500 = this.separator;
    keys = parsePath(path, v500);
    (i = 0)
    const v501 = keys.length;
    let v502 = i < v501;
    while (v502) {
        const v504 = keys[i];
        key = parseKey(v504, obj);
        const v505 = typeof obj;
        const v506 = v505 === 'object';
        const v507 = obj && v506;
        const v508 = key in obj;
        const v509 = v507 && v508;
        if (v509) {
            const v510 = keys.length;
            const v511 = v510 - 1;
            const v512 = i === v511;
            if (v512) {
                if (remove) {
                    val = obj[key];
                    const v513 = Array.isArray(obj);
                    const v514 = reindexArray && v513;
                    if (v514) {
                        const v515 = obj.splice(key, 1);
                        v515;
                    } else {
                        const v516 = obj[key];
                        const v517 = delete v516;
                        v517;
                    }
                    const v518 = Array.isArray(obj);
                    if (v518) {
                        const v519 = -1;
                        const v520 = keys.slice(0, v519);
                        cp = v520.join('.');
                        const v521 = this.cleanup;
                        const v522 = v521.indexOf(cp);
                        const v523 = -1;
                        const v524 = v522 === v523;
                        if (v524) {
                            const v525 = this.cleanup;
                            const v526 = v525.push(cp);
                            v526;
                        }
                    }
                    return val;
                } else {
                    const v527 = obj[key];
                    return v527;
                }
            } else {
                obj = obj[key];
            }
        } else {
            return undefined;
        }
        const v503 = i++;
        v502 = i < v501;
    }
    const v528 = Array.isArray(obj);
    const v529 = remove && v528;
    if (v529) {
        const v531 = function (n) {
            const v530 = n !== undefined;
            return v530;
        };
        obj = obj.filter(v531);
    }
    return obj;
};
v499.pick = v532;
const v533 = DotObject.prototype;
const v535 = function (path, obj) {
    const v534 = this.remove(path, obj, true);
    return v534;
};
v533.delete = v535;
const v536 = DotObject.prototype;
const v546 = function (path, obj, reindexArray) {
    var i;
    this.cleanup = [];
    const v537 = Array.isArray(path);
    if (v537) {
        i = 0
        const v538 = path.length;
        let v539 = i < v538;
        while (v539) {
            const v541 = path[i];
            const v542 = this.pick(v541, obj, true, reindexArray);
            v542;
            const v540 = i++;
            v539 = i < v538;
        }
        const v543 = !reindexArray;
        if (v543) {
            const v544 = this._cleanup(obj);
            v544;
        }
        return obj;
    } else {
        const v545 = this.pick(path, obj, true, reindexArray);
        return v545;
    }
};
v536.remove = v546;
const v547 = DotObject.prototype;
const v566 = function (obj) {
    var ret;
    var i;
    var keys;
    var root;
    const v548 = this.cleanup;
    const v549 = v548.length;
    if (v549) {
        i = 0
        const v550 = this.cleanup;
        const v551 = v550.length;
        let v552 = i < v551;
        while (v552) {
            const v554 = this.cleanup;
            const v555 = v554[i];
            keys = v555.split('.');
            const v556 = -1;
            const v557 = keys.splice(0, v556);
            root = v557.join('.');
            const v558 = this.pick(root, obj);
            if (root) {
                ret = v558;
            } else {
                ret = obj;
            }
            const v559 = keys[0];
            const v560 = ret[v559];
            const v562 = function (v) {
                const v561 = v !== undefined;
                return v561;
            };
            ret = v560.filter(v562);
            const v563 = this.cleanup;
            const v564 = v563[i];
            const v565 = this.set(v564, ret, obj);
            v565;
            const v553 = i++;
            v552 = i < v551;
        }
        this.cleanup = [];
    }
};
v547._cleanup = v566;
const v567 = DotObject.prototype;
const v568 = DotObject.prototype;
const v569 = v568.remove;
v567.del = v569;
const v570 = DotObject.prototype;
const v580 = function (source, target, obj, mods, merge) {
    const v571 = typeof mods;
    const v572 = v571 === 'function';
    const v573 = Array.isArray(mods);
    const v574 = v572 || v573;
    if (v574) {
        const v575 = this.pick(source, obj, true);
        const v576 = _process(v575, mods);
        const v577 = this.set(target, v576, obj, merge);
        v577;
    } else {
        merge = mods;
        const v578 = this.pick(source, obj, true);
        const v579 = this.set(target, v578, obj, merge);
        v579;
    }
    return obj;
};
v570.move = v580;
const v581 = DotObject.prototype;
const v591 = function (source, target, obj1, obj2, mods, merge) {
    const v582 = typeof mods;
    const v583 = v582 === 'function';
    const v584 = Array.isArray(mods);
    const v585 = v583 || v584;
    if (v585) {
        const v586 = this.pick(source, obj1, true);
        const v587 = _process(v586, mods);
        const v588 = this.set(target, v587, obj2, merge);
        v588;
    } else {
        merge = mods;
        const v589 = this.pick(source, obj1, true);
        const v590 = this.set(target, v589, obj2, merge);
        v590;
    }
    return obj2;
};
v581.transfer = v591;
const v592 = DotObject.prototype;
const v604 = function (source, target, obj1, obj2, mods, merge) {
    const v593 = typeof mods;
    const v594 = v593 === 'function';
    const v595 = Array.isArray(mods);
    const v596 = v594 || v595;
    if (v596) {
        const v597 = this.pick(source, obj1, false);
        const v598 = JSON.stringify(v597);
        const v599 = JSON.parse(v598);
        const v600 = _process(v599, mods);
        const v601 = this.set(target, v600, obj2, merge);
        v601;
    } else {
        merge = mods;
        const v602 = this.pick(source, obj1, false);
        const v603 = this.set(target, v602, obj2, merge);
        v603;
    }
    return obj2;
};
v592.copy = v604;
const v605 = DotObject.prototype;
const v649 = function (path, val, obj, merge) {
    var i;
    var k;
    var keys;
    var key;
    const v606 = typeof val;
    const v607 = v606 === 'undefined';
    if (v607) {
        return obj;
    }
    const v608 = this.separator;
    keys = parsePath(path, v608);
    (i = 0)
    const v609 = keys.length;
    let v610 = i < v609;
    while (v610) {
        key = keys[i];
        const v612 = keys.length;
        const v613 = v612 - 1;
        const v614 = i === v613;
        if (v614) {
            const v615 = isObject(val);
            const v616 = merge && v615;
            const v617 = obj[key];
            const v618 = isObject(v617);
            const v619 = v616 && v618;
            if (v619) {
                for (k in val) {
                    const v620 = hasOwnProperty.call(val, k);
                    if (v620) {
                        const v621 = obj[key];
                        const v622 = val[k];
                        v621[k] = v622;
                    }
                }
            } else {
                const v623 = obj[key];
                const v624 = Array.isArray(v623);
                const v625 = merge && v624;
                const v626 = Array.isArray(val);
                const v627 = v625 && v626;
                if (v627) {
                    var j = 0;
                    const v628 = val.length;
                    let v629 = j < v628;
                    while (v629) {
                        const v631 = keys[i];
                        const v632 = obj[v631];
                        const v633 = val[j];
                        const v634 = v632.push(v633);
                        v634;
                        const v630 = j++;
                        v629 = j < v628;
                    }
                } else {
                    obj[key] = val;
                }
            }
        } else {
            const v635 = hasOwnProperty.call(obj, key);
            const v636 = !v635;
            const v637 = obj[key];
            const v638 = isObject(v637);
            const v639 = !v638;
            const v640 = obj[key];
            const v641 = Array.isArray(v640);
            const v642 = !v641;
            const v643 = v639 && v642;
            const v644 = v636 || v643;
            if (v644) {
                const v645 = i + 1;
                const v646 = keys[v645];
                const v647 = /^\d+$/.test(v646);
                if (v647) {
                    obj[key] = [];
                } else {
                    const v648 = {};
                    obj[key] = v648;
                }
            }
        }
        obj = obj[key];
        const v611 = i++;
        v610 = i < v609;
    }
    return obj;
};
v605.set = v649;
const v650 = DotObject.prototype;
const v660 = function (recipe, obj, tgt) {
    const v651 = {};
    obj = obj || v651;
    const v652 = {};
    tgt = tgt || v652;
    const v653 = Object.keys(recipe);
    const v657 = function (key) {
        const v654 = recipe[key];
        const v655 = this.pick(key, obj);
        const v656 = this.set(v654, v655, tgt);
        v656;
    };
    const v658 = v657.bind(this);
    const v659 = v653.forEach(v658);
    v659;
    return tgt;
};
v650.transform = v660;
const v661 = DotObject.prototype;
const v717 = function (obj, tgt, path) {
    const v662 = {};
    tgt = tgt || v662;
    const v663 = [];
    path = path || v663;
    var isArray = Array.isArray(obj);
    const v664 = Object.keys(obj);
    const v714 = function (key) {
        let index;
        const v665 = this.useBrackets;
        const v666 = isArray && v665;
        const v667 = '[' + key;
        const v668 = v667 + ']';
        if (v666) {
            index = v668;
        } else {
            index = key;
        }
        const v669 = obj[key];
        const v670 = isArrayOrObject(v669);
        const v671 = obj[key];
        const v672 = isObject(v671);
        const v673 = obj[key];
        const v674 = isEmptyObject(v673);
        const v675 = !v674;
        const v676 = v672 && v675;
        const v677 = obj[key];
        const v678 = Array.isArray(v677);
        const v679 = this.keepArray;
        const v680 = !v679;
        const v681 = obj[key];
        const v682 = v681.length;
        const v683 = v682 !== 0;
        const v684 = v680 && v683;
        const v685 = v678 && v684;
        const v686 = v676 || v685;
        const v687 = v670 && v686;
        if (v687) {
            const v688 = this.useBrackets;
            const v689 = isArray && v688;
            if (v689) {
                const v690 = path.length;
                const v691 = v690 - 1;
                const v692 = path[v691];
                var previousKey = v692 || '';
                const v693 = obj[key];
                const v694 = -1;
                const v695 = path.slice(0, v694);
                const v696 = previousKey + index;
                const v697 = v695.concat(v696);
                const v698 = this.dot(v693, tgt, v697);
                return v698;
            } else {
                const v699 = obj[key];
                const v700 = path.concat(index);
                const v701 = this.dot(v699, tgt, v700);
                return v701;
            }
        } else {
            const v702 = this.useBrackets;
            const v703 = isArray && v702;
            if (v703) {
                const v704 = this.separator;
                const v705 = path.join(v704);
                const v706 = '[' + key;
                const v707 = v706 + ']';
                const v708 = v705.concat(v707);
                const v709 = obj[key];
                tgt[v708] = v709;
            } else {
                const v710 = path.concat(index);
                const v711 = this.separator;
                const v712 = v710.join(v711);
                const v713 = obj[key];
                tgt[v712] = v713;
            }
        }
    };
    const v715 = v714.bind(this);
    const v716 = v664.forEach(v715);
    v716;
    return tgt;
};
v661.dot = v717;
const v718 = wrap('pick');
DotObject.pick = v718;
const v719 = wrap('move');
DotObject.move = v719;
const v720 = wrap('transfer');
DotObject.transfer = v720;
const v721 = wrap('transform');
DotObject.transform = v721;
const v722 = wrap('copy');
DotObject.copy = v722;
const v723 = wrap('object');
DotObject.object = v723;
const v724 = wrap('str');
DotObject.str = v724;
const v725 = wrap('set');
DotObject.set = v725;
const v726 = wrap('delete');
DotObject.delete = v726;
const v727 = wrap('remove');
DotObject.remove = v727;
DotObject.del = DotObject.remove;
const v728 = wrap('dot');
DotObject.dot = v728;
const v729 = [
    'override',
    'overwrite'
];
const v737 = function (prop) {
    const v731 = function () {
        const v730 = dotDefault.override;
        return v730;
    };
    const v734 = function (val) {
        const v732 = !val;
        const v733 = !v732;
        dotDefault.override = v733;
    };
    const v735 = {
        get: v731,
        set: v734
    };
    const v736 = Object.defineProperty(DotObject, prop, v735);
    v736;
};
const v738 = v729.forEach(v737);
v738;
const v739 = [
    'useArray',
    'keepArray',
    'useBrackets'
];
const v745 = function (prop) {
    const v741 = function () {
        const v740 = dotDefault[prop];
        return v740;
    };
    const v742 = function (val) {
        dotDefault[prop] = val;
    };
    const v743 = {
        get: v741,
        set: v742
    };
    const v744 = Object.defineProperty(DotObject, prop, v743);
    v744;
};
const v746 = v739.forEach(v745);
v746;
DotObject._process = _process;
module.exports = DotObject;
const v392 = function (root, factory) {
    const v380 = typeof define;
    const v381 = v380 === 'function';
    const v382 = define.amd;
    const v383 = v381 && v382;
    if (v383) {
        const v384 = [];
        const v385 = define(v384, factory);
        v385;
    } else {
        const v386 = typeof module;
        const v387 = v386 === 'object';
        const v388 = module.exports;
        const v389 = v387 && v388;
        if (v389) {
            const v390 = factory();
            module.exports = v390;
        } else {
            const v391 = factory();
            root.returnExports = v391;
        }
    }
};
const v393 = typeof self;
const v394 = v393 !== 'undefined';
let v395;
if (v394) {
    v395 = self;
} else {
    v395 = this;
}
const v757 = function () {
    var root = this;
    var $savedJsonPointer = this.JsonPointer;
    const replace = function (str, find, repl) {
        var orig = str.toString();
        var res = '';
        var rem = orig;
        var beg = 0;
        const v396 = -1;
        var end = v396;
        const v397 = -1;
        let v398 = (end = rem.indexOf(find)) > v397;
        while (v398) {
            const v399 = beg + end;
            const v400 = orig.substring(beg, v399);
            res += v400 + repl;
            const v401 = find.length;
            const v402 = end + v401;
            const v403 = rem.length;
            rem = rem.substring(v402, v403);
            const v404 = find.length;
            beg += end + v404;
            v398 = (end = rem.indexOf(find)) > v397;
        }
        const v405 = rem.length;
        const v406 = v405 > 0;
        if (v406) {
            const v407 = orig.length;
            const v408 = rem.length;
            const v409 = v407 - v408;
            const v410 = orig.length;
            res += orig.substring(v409, v410);
        }
        return res;
    };
    const decodeFragmentSegments = function (segments) {
        const v411 = -1;
        var i = v411;
        var len = segments.length;
        var res = new Array(len);
        const v412 = ++i;
        let v413 = v412 < len;
        while (v413) {
            const v414 = segments[i];
            const v415 = '' + v414;
            const v416 = decodeURIComponent(v415);
            const v417 = replace(v416, '~1', '/');
            const v418 = replace(v417, '~0', '~');
            res[i] = v418;
            v413 = v412 < len;
        }
        return res;
    };
    const encodeFragmentSegments = function (segments) {
        const v419 = -1;
        var i = v419;
        var len = segments.length;
        var res = new Array(len);
        const v420 = ++i;
        let v421 = v420 < len;
        while (v421) {
            const v422 = segments[i];
            const v423 = typeof v422;
            const v424 = v423 === 'string';
            if (v424) {
                const v425 = segments[i];
                const v426 = replace(v425, '~', '~0');
                const v427 = replace(v426, '/', '~1');
                const v428 = encodeURIComponent(v427);
                res[i] = v428;
            } else {
                const v429 = segments[i];
                res[i] = v429;
            }
            v421 = v420 < len;
        }
        return res;
    };
    const decodePointerSegments = function (segments) {
        const v430 = -1;
        var i = v430;
        var len = segments.length;
        var res = new Array(len);
        const v431 = ++i;
        let v432 = v431 < len;
        while (v432) {
            const v433 = segments[i];
            const v434 = replace(v433, '~1', '/');
            const v435 = replace(v434, '~0', '~');
            res[i] = v435;
            v432 = v431 < len;
        }
        return res;
    };
    const encodePointerSegments = function (segments) {
        const v436 = -1;
        var i = v436;
        var len = segments.length;
        var res = new Array(len);
        const v437 = ++i;
        let v438 = v437 < len;
        while (v438) {
            const v439 = segments[i];
            const v440 = typeof v439;
            const v441 = v440 === 'string';
            if (v441) {
                const v442 = segments[i];
                const v443 = replace(v442, '~', '~0');
                const v444 = replace(v443, '/', '~1');
                res[i] = v444;
            } else {
                const v445 = segments[i];
                res[i] = v445;
            }
            v438 = v437 < len;
        }
        return res;
    };
    const decodePointer = function (ptr) {
        const v446 = typeof ptr;
        const v447 = v446 !== 'string';
        if (v447) {
            const v448 = new TypeError('Invalid type: JSON Pointers are represented as strings.');
            throw v448;
        }
        const v449 = ptr.length;
        const v450 = v449 === 0;
        if (v450) {
            const v451 = [];
            return v451;
        }
        const v452 = ptr[0];
        const v453 = v452 !== '/';
        if (v453) {
            const v454 = new ReferenceError('Invalid JSON Pointer syntax. Non-empty pointer must begin with a solidus `/`.');
            throw v454;
        }
        const v455 = ptr.substring(1);
        const v456 = v455.split('/');
        const v457 = decodePointerSegments(v456);
        return v457;
    };
    const encodePointer = function (path) {
        const v458 = Array.isArray(path);
        const v459 = !v458;
        const v460 = path && v459;
        if (v460) {
            const v461 = new TypeError('Invalid type: path must be an array of segments.');
            throw v461;
        }
        const v462 = path.length;
        const v463 = v462 === 0;
        if (v463) {
            return '';
        }
        const v464 = encodePointerSegments(path);
        const v465 = v464.join('/');
        const v466 = '/'.concat(v465);
        return v466;
    };
    const decodeUriFragmentIdentifier = function (ptr) {
        const v467 = typeof ptr;
        const v468 = v467 !== 'string';
        if (v468) {
            const v469 = new TypeError('Invalid type: JSON Pointers are represented as strings.');
            throw v469;
        }
        const v470 = ptr.length;
        const v471 = v470 === 0;
        const v472 = ptr[0];
        const v473 = v472 !== '#';
        const v474 = v471 || v473;
        if (v474) {
            const v475 = new ReferenceError('Invalid JSON Pointer syntax; URI fragment idetifiers must begin with a hash.');
            throw v475;
        }
        const v476 = ptr.length;
        const v477 = v476 === 1;
        if (v477) {
            const v478 = [];
            return v478;
        }
        const v479 = ptr[1];
        const v480 = v479 !== '/';
        if (v480) {
            const v481 = new ReferenceError('Invalid JSON Pointer syntax.');
            throw v481;
        }
        const v482 = ptr.substring(2);
        const v483 = v482.split('/');
        const v484 = decodeFragmentSegments(v483);
        return v484;
    };
    const encodeUriFragmentIdentifier = function (path) {
        const v485 = Array.isArray(path);
        const v486 = !v485;
        const v487 = path && v486;
        if (v487) {
            const v488 = new TypeError('Invalid type: path must be an array of segments.');
            throw v488;
        }
        const v489 = path.length;
        const v490 = v489 === 0;
        if (v490) {
            return '#';
        }
        const v491 = encodeFragmentSegments(path);
        const v492 = v491.join('/');
        const v493 = '#/'.concat(v492);
        return v493;
    };
    const toArrayIndexReference = function (arr, idx) {
        var len = idx.length;
        var cursor = 0;
        const v494 = len === 1;
        const v495 = idx[0];
        const v496 = v495 === '-';
        const v497 = v494 && v496;
        if (v497) {
            const v498 = Array.isArray(arr);
            const v499 = !v498;
            if (v499) {
                return 0;
            }
            const v500 = arr.length;
            return v500;
        }
        const v501 = len === 0;
        const v502 = len > 1;
        const v503 = idx[0];
        const v504 = v503 === '0';
        const v505 = v502 && v504;
        const v506 = v501 || v505;
        const v507 = isFinite(idx);
        const v508 = !v507;
        const v509 = v506 || v508;
        if (v509) {
            const v510 = -1;
            return v510;
        }
        const v511 = ++cursor;
        let v512 = v511 < len;
        while (v512) {
            const v513 = idx[cursor];
            const v514 = v513 < '0';
            const v515 = idx[cursor];
            const v516 = v515 > '9';
            const v517 = v514 || v516;
            if (v517) {
                const v518 = -1;
                return v518;
            }
            v512 = v511 < len;
        }
        const v519 = parseInt(idx, 10);
        return v519;
    };
    const hasValueAtPath = function (target, path) {
        var it;
        var len;
        var cursor;
        var step;
        var p;
        const v520 = typeof target;
        const v521 = v520 !== 'undefined';
        if (v521) {
            it = target;
            len = path.length;
            const v522 = -1;
            cursor = v522;
            if (len) {
                const v523 = ++cursor;
                const v524 = v523 < len;
                let v525 = v524 && it;
                while (v525) {
                    step = path[cursor];
                    const v526 = Array.isArray(it);
                    if (v526) {
                        const v527 = isNaN(step);
                        const v528 = isFinite(step);
                        const v529 = !v528;
                        const v530 = v527 || v529;
                        if (v530) {
                            break;
                        }
                        p = toArrayIndexReference(it, step);
                        const v531 = it.length;
                        const v532 = v531 > p;
                        if (v532) {
                            it = it[p];
                        } else {
                            break;
                        }
                    } else {
                        it = it[step];
                    }
                    v525 = v524 && it;
                }
            }
            const v533 = cursor === len;
            const v534 = typeof it;
            const v535 = v534 !== 'undefined';
            const v536 = v533 && v535;
            return v536;
        }
        return false;
    };
    const getValueAtPath = function (target, path) {
        var it;
        var len;
        var cursor;
        var step;
        var p;
        var nonexistent;
        const v537 = typeof target;
        const v538 = v537 !== 'undefined';
        if (v538) {
            it = target;
            len = path.length;
            const v539 = -1;
            cursor = v539;
            if (len) {
                const v540 = ++cursor;
                const v541 = v540 < len;
                let v542 = v541 && it;
                while (v542) {
                    step = path[cursor];
                    const v543 = Array.isArray(it);
                    if (v543) {
                        const v544 = isNaN(step);
                        const v545 = isFinite(step);
                        const v546 = !v545;
                        const v547 = v544 || v546;
                        if (v547) {
                            return nonexistent;
                        }
                        p = toArrayIndexReference(it, step);
                        const v548 = it.length;
                        const v549 = v548 > p;
                        if (v549) {
                            it = it[p];
                        } else {
                            return nonexistent;
                        }
                    } else {
                        it = it[step];
                    }
                    v542 = v541 && it;
                }
            }
            return it;
        }
        return nonexistent;
    };
    const compilePointerDereference = function (path) {
        var body = 'if (typeof(obj) !== \'undefined\'';
        const v550 = path.length;
        const v551 = v550 === 0;
        if (v551) {
            const v552 = function (it) {
                return it;
            };
            return v552;
        }
        const v558 = function (body, p, i) {
            const v553 = body + ' && \n\ttypeof((obj = obj[\'';
            const v554 = path[i];
            const v555 = replace(v554, '\\', '\\\\');
            const v556 = v553 + v555;
            const v557 = v556 + '\'])) !== \'undefined\'';
            return v557;
        };
        body = path.reduce(v558, 'if (typeof(obj) !== \'undefined\'');
        body = body + ') {\n\treturn obj;\n }';
        const v559 = ['obj'];
        const v560 = new Function(v559, body);
        return v560;
    };
    const setValueAtPath = function (target, val, path, force) {
        var it;
        var len;
        var end;
        var cursor;
        var step;
        var p;
        var rem;
        var nonexistent;
        const v561 = path.length;
        const v562 = v561 === 0;
        if (v562) {
            const v563 = new Error('Cannot set the root object; assign it directly.');
            throw v563;
        }
        const v564 = typeof target;
        const v565 = v564 === 'undefined';
        if (v565) {
            const v566 = new TypeError('Cannot set values on undefined');
            throw v566;
        }
        it = target;
        len = path.length;
        const v567 = path.length;
        end = v567 - 1;
        const v568 = -1;
        cursor = v568;
        if (len) {
            const v569 = ++cursor;
            let v570 = v569 < len;
            while (v570) {
                step = path[cursor];
                const v571 = Array.isArray(it);
                if (v571) {
                    p = toArrayIndexReference(it, step);
                    const v572 = it.length;
                    const v573 = v572 > p;
                    if (v573) {
                        const v574 = cursor === end;
                        if (v574) {
                            rem = it[p];
                            it[p] = val;
                            return rem;
                        }
                        it = it[p];
                    } else {
                        const v575 = it.length;
                        const v576 = v575 === p;
                        if (v576) {
                            const v577 = cursor === end;
                            if (v577) {
                                const v578 = it.push(val);
                                v578;
                                return nonexistent;
                            } else {
                                if (force) {
                                    const v579 = {};
                                    it.p = v579;
                                    it = it[p];
                                }
                            }
                        }
                    }
                } else {
                    const v580 = it[step];
                    const v581 = typeof v580;
                    const v582 = v581 === 'undefined';
                    if (v582) {
                        if (force) {
                            const v583 = cursor === end;
                            if (v583) {
                                it[step] = val;
                                return nonexistent;
                            }
                            const v584 = it[step];
                            const v585 = cursor + 1;
                            const v586 = path[v585];
                            const v587 = toArrayIndexReference(v584, v586);
                            const v588 = -1;
                            const v589 = v587 !== v588;
                            if (v589) {
                                it.step = [];
                                it = it[step];
                                continue;
                            }
                            const v590 = {};
                            it.step = v590;
                            it = it[step];
                            continue;
                        }
                        return nonexistent;
                    }
                    const v591 = cursor === end;
                    if (v591) {
                        rem = it[step];
                        it[step] = val;
                        return rem;
                    }
                    it = it[step];
                }
                v570 = v569 < len;
            }
        }
        return it;
    };
    const looksLikeFragment = function (ptr) {
        const v592 = ptr.length;
        const v593 = ptr && v592;
        const v594 = ptr[0];
        const v595 = v594 === '#';
        const v596 = v593 && v595;
        return v596;
    };
    const pickDecoder = function (ptr) {
        const v597 = looksLikeFragment(ptr);
        let v598;
        if (v597) {
            v598 = decodeUriFragmentIdentifier;
        } else {
            v598 = decodePointer;
        }
        return v598;
    };
    const JsonPointer = function (ptr) {
        let localPath;
        const v599 = Array.isArray(ptr);
        const v600 = ptr.slice(0);
        const v601 = pickDecoder(ptr);
        if (v599) {
            localPath = v600;
        } else {
            localPath = ptr = v601(ptr);
        }
        let $original;
        const v602 = Array.isArray(ptr);
        const v603 = encodePointer(localPath);
        if (v602) {
            $original = v603;
        } else {
            $original = ptr;
        }
        var $pointer;
        var $fragmentId;
        var $compiledGetter = compilePointerDereference(localPath);
        const v604 = {};
        v604.enumerable = true;
        v604.value = $compiledGetter;
        const v606 = function (target, value, force) {
            const v605 = setValueAtPath(target, value, localPath, force);
            return v605;
        };
        const v607 = {};
        v607.enumerable = true;
        v607.value = v606;
        const v611 = function (target) {
            const v608 = $compiledGetter(target);
            const v609 = typeof v608;
            const v610 = v609 !== 'undefined';
            return v610;
        };
        const v612 = {};
        v612.enumerable = true;
        v612.value = v611;
        const v614 = function () {
            const v613 = localPath.slice(0);
            return v613;
        };
        const v615 = {};
        v615.enumerable = true;
        v615.get = v614;
        const v617 = function () {
            const v616 = !$pointer;
            if (v616) {
                $pointer = encodePointer(localPath);
            }
            return $pointer;
        };
        const v618 = {};
        v618.enumerable = true;
        v618.get = v617;
        const v620 = function () {
            const v619 = !$fragmentId;
            if (v619) {
                $fragmentId = encodeUriFragmentIdentifier(localPath);
            }
            return $fragmentId;
        };
        const v621 = {};
        v621.enumerable = true;
        v621.get = v620;
        const v622 = function () {
            return $original;
        };
        const v623 = {};
        v623.enumerable = true;
        v623.configurable = true;
        v623.writable = true;
        v623.value = v622;
        const v624 = {
            get: v604,
            set: v607,
            has: v612,
            path: v615,
            pointer: v618,
            uriFragmentIdentifier: v621,
            toString: v623
        };
        const v625 = Object.defineProperties(this, v624);
        v625;
    };
    const JsonReference = function (pointer) {
        let localPtr;
        const v626 = typeof pointer;
        const v627 = v626 === 'string';
        const v628 = Array.isArray(pointer);
        const v629 = v627 || v628;
        const v630 = new JsonPointer(pointer);
        if (v629) {
            localPtr = v630;
        } else {
            localPtr = pointer;
        }
        const v631 = localPtr.uriFragmentIdentifier;
        const v632 = {};
        v632.enumerable = true;
        v632.value = v631;
        const v634 = function (target) {
            const v633 = localPtr.get(target);
            return v633;
        };
        const v635 = {};
        v635.enumerable = true;
        v635.value = v634;
        const v637 = function () {
            const v636 = localPtr.uriFragmentIdentifier;
            return v636;
        };
        const v638 = {};
        v638.enumerable = true;
        v638.writable = true;
        v638.configurable = true;
        v638.value = v637;
        const v639 = {
            $ref: v632,
            resolve: v635,
            toString: v638
        };
        const v640 = Object.defineProperties(this, v639);
        v640;
    };
    const v651 = function (obj) {
        const v641 = obj instanceof JsonReference;
        const v642 = obj && v641;
        const v643 = obj.$ref;
        const v644 = typeof v643;
        const v645 = v644 === 'string';
        const v646 = obj.resolve;
        const v647 = typeof v646;
        const v648 = v647 === 'function';
        const v649 = v645 && v648;
        const v650 = v642 || v649;
        return v650;
    };
    JsonReference.isReference = v651;
    const visit = function (target, visitor, cycle) {
        var items;
        var i;
        var ilen;
        var j;
        var jlen;
        var it;
        var path;
        var cursor;
        var typeT;
        var distinctObjects;
        var q = [];
        var qcursor = 0;
        const v652 = [];
        const v653 = {
            obj: target,
            path: v652
        };
        const v654 = q.push(v653);
        v654;
        if (cycle) {
            distinctObjects = Object.create(null);
        }
        const v655 = [];
        const v656 = encodePointer(v655);
        const v657 = visitor(v656, target);
        v657;
        const v658 = q.length;
        let v659 = qcursor < v658;
        while (v659) {
            const v660 = qcursor++;
            cursor = q[v660];
            const v661 = cursor.obj;
            const v662 = typeof v661;
            typeT = v662;
            const v663 = typeT === 'object';
            const v664 = cursor.obj;
            const v665 = v664 !== null;
            const v666 = v663 && v665;
            if (v666) {
                const v667 = cursor.obj;
                const v668 = Array.isArray(v667);
                if (v668) {
                    const v669 = -1;
                    j = v669;
                    const v670 = cursor.obj;
                    jlen = v670.length;
                    const v671 = ++j;
                    let v672 = v671 < jlen;
                    while (v672) {
                        const v673 = cursor.obj;
                        it = v673[j];
                        const v674 = cursor.path;
                        path = v674.concat(j);
                        const v675 = typeof it;
                        const v676 = v675 === 'object';
                        const v677 = it !== null;
                        const v678 = v676 && v677;
                        if (v678) {
                            const v679 = distinctObjects[it];
                            const v680 = cycle && v679;
                            if (v680) {
                                const v681 = encodePointer(path);
                                const v682 = distinctObjects[it];
                                const v683 = new JsonReference(v682);
                                const v684 = visitor(v681, v683);
                                v684;
                                continue;
                            }
                            const v685 = {
                                obj: it,
                                path: path
                            };
                            const v686 = q.push(v685);
                            v686;
                            if (cycle) {
                                const v687 = encodeUriFragmentIdentifier(path);
                                distinctObjects[it] = new JsonPointer(v687);
                            }
                        }
                        const v688 = encodePointer(path);
                        const v689 = visitor(v688, it);
                        v689;
                        v672 = v671 < jlen;
                    }
                } else {
                    const v690 = cursor.obj;
                    items = Object.keys(v690);
                    ilen = items.length;
                    const v691 = -1;
                    i = v691;
                    const v692 = ++i;
                    let v693 = v692 < ilen;
                    while (v693) {
                        const v694 = cursor.obj;
                        const v695 = items[i];
                        it = v694[v695];
                        const v696 = cursor.path;
                        const v697 = items[i];
                        path = v696.concat(v697);
                        const v698 = typeof it;
                        const v699 = v698 === 'object';
                        const v700 = it !== null;
                        const v701 = v699 && v700;
                        if (v701) {
                            const v702 = distinctObjects[it];
                            const v703 = cycle && v702;
                            if (v703) {
                                const v704 = encodePointer(path);
                                const v705 = distinctObjects[it];
                                const v706 = new JsonReference(v705);
                                const v707 = visitor(v704, v706);
                                v707;
                                continue;
                            }
                            const v708 = {
                                obj: it,
                                path: path
                            };
                            const v709 = q.push(v708);
                            v709;
                            if (cycle) {
                                const v710 = encodeUriFragmentIdentifier(path);
                                distinctObjects[it] = new JsonPointer(v710);
                            }
                        }
                        const v711 = encodePointer(path);
                        const v712 = visitor(v711, it);
                        v712;
                        v693 = v692 < ilen;
                    }
                }
            }
            v659 = qcursor < v658;
        }
    };
    const v714 = function (ptr) {
        const v713 = new JsonPointer(ptr);
        return v713;
    };
    JsonPointer.create = v714;
    const v718 = function (target, ptr) {
        const v715 = pickDecoder(ptr);
        const v716 = v715(ptr);
        const v717 = hasValueAtPath(target, v716);
        return v717;
    };
    JsonPointer.has = v718;
    const v722 = function (target, ptr) {
        const v719 = pickDecoder(ptr);
        const v720 = v719(ptr);
        const v721 = getValueAtPath(target, v720);
        return v721;
    };
    JsonPointer.get = v722;
    const v726 = function (target, ptr, val, force) {
        const v723 = pickDecoder(ptr);
        const v724 = v723(ptr);
        const v725 = setValueAtPath(target, val, v724, force);
        return v725;
    };
    JsonPointer.set = v726;
    const v736 = function (target, fragmentId) {
        var res = [];
        let visitor;
        const v731 = function (ptr, val) {
            const v727 = decodePointer(ptr);
            const v728 = encodeUriFragmentIdentifier(v727);
            const v729 = {
                fragmentId: v728,
                value: val
            };
            const v730 = res.push(v729);
            v730;
        };
        const v734 = function (ptr, val) {
            const v732 = {
                pointer: ptr,
                value: val
            };
            const v733 = res.push(v732);
            v733;
        };
        if (fragmentId) {
            visitor = v731;
        } else {
            visitor = v734;
        }
        const v735 = visit(target, visitor);
        v735;
        return res;
    };
    JsonPointer.list = v736;
    const v742 = function (target, fragmentId) {
        var res = {};
        let visitor;
        const v739 = function (ptr, val) {
            const v737 = decodePointer(ptr);
            const v738 = encodeUriFragmentIdentifier(v737);
            res[v738] = val;
        };
        const v740 = function (ptr, val) {
            res[ptr] = val;
        };
        if (fragmentId) {
            visitor = v739;
        } else {
            visitor = v740;
        }
        const v741 = visit(target, visitor);
        v741;
        return res;
    };
    JsonPointer.flatten = v742;
    const v751 = function (target, fragmentId) {
        var res = [];
        let visitor;
        const v747 = function (ptr, val) {
            const v743 = decodePointer(ptr);
            const v744 = encodeUriFragmentIdentifier(v743);
            const v745 = {
                key: v744,
                value: val
            };
            const v746 = res.push(v745);
            v746;
        };
        const v748 = res.set;
        const v749 = v748.bind(res);
        if (fragmentId) {
            visitor = v747;
        } else {
            visitor = v749;
        }
        const v750 = visit(target, visitor);
        v750;
        return res;
    };
    JsonPointer.map = v751;
    JsonPointer.visit = visit;
    const v754 = function (ptr) {
        const v752 = pickDecoder(ptr);
        const v753 = v752(ptr);
        return v753;
    };
    JsonPointer.decode = v754;
    JsonPointer.decodePointer = decodePointer;
    JsonPointer.encodePointer = encodePointer;
    JsonPointer.decodeUriFragmentIdentifier = decodeUriFragmentIdentifier;
    JsonPointer.encodeUriFragmentIdentifier = encodeUriFragmentIdentifier;
    JsonPointer.JsonPointer = JsonPointer;
    JsonPointer.JsonReference = JsonReference;
    const v755 = JsonReference.isReference;
    JsonPointer.isReference = v755;
    const v756 = function () {
        root.JsonPointer = $savedJsonPointer;
        return JsonPointer;
    };
    JsonPointer.noConflict = v756;
    root.JsonPointer = JsonPointer;
    return JsonPointer;
};
const v758 = v392(v395, v757);
v758;
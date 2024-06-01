const v485 = require('./object-mask');
exports.ObjectMask = v485;
var _ = require('lodash');
var crypto = require('crypto');
const isScalar = function (value) {
    const v486 = typeof value;
    const v487 = v486 !== 'object';
    const v488 = value instanceof Date;
    const v489 = v487 || v488;
    const v490 = !value;
    const v491 = v489 || v490;
    const v492 = typeof value;
    const v493 = v492 === 'function';
    const v494 = v491 || v493;
    return v494;
};
exports.isScalar = isScalar;
const isTerminal = function (value) {
    const v495 = typeof value;
    const v496 = v495 !== 'object';
    if (v496) {
        return true;
    }
    const v497 = value === null;
    if (v497) {
        return true;
    }
    const v498 = Array.isArray(value);
    if (v498) {
        return false;
    }
    var proto = Object.getPrototypeOf(value);
    const v499 = Object.prototype;
    const v500 = proto !== v499;
    const v501 = proto !== null;
    const v502 = v500 && v501;
    return v502;
};
exports.isTerminal = isTerminal;
const deepEquals = function (a, b) {
    var i;
    var key;
    const v503 = isScalar(a);
    const v504 = isScalar(b);
    const v505 = v503 && v504;
    if (v505) {
        const v506 = scalarEquals(a, b);
        return v506;
    }
    const v507 = a === null;
    const v508 = b === null;
    const v509 = v507 || v508;
    const v510 = a === undefined;
    const v511 = v509 || v510;
    const v512 = b === undefined;
    const v513 = v511 || v512;
    if (v513) {
        const v514 = a === b;
        return v514;
    }
    const v515 = Array.isArray(a);
    const v516 = Array.isArray(b);
    const v517 = v515 && v516;
    if (v517) {
        const v518 = a.length;
        const v519 = b.length;
        const v520 = v518 !== v519;
        if (v520) {
            return false;
        }
        i = 0
        const v521 = a.length;
        let v522 = i < v521;
        while (v522) {
            const v524 = a[i];
            const v525 = b[i];
            const v526 = deepEquals(v524, v525);
            const v527 = !v526;
            if (v527) {
                return false;
            }
            const v523 = i++;
            v522 = i < v521;
        }
        return true;
    } else {
        const v528 = Array.isArray(a);
        const v529 = !v528;
        const v530 = Array.isArray(b);
        const v531 = !v530;
        const v532 = v529 && v531;
        if (v532) {
            for (key in a) {
                const v533 = a[key];
                const v534 = b[key];
                const v535 = deepEquals(v533, v534);
                const v536 = !v535;
                if (v536) {
                    return false;
                }
            }
            for (key in b) {
                const v537 = a[key];
                const v538 = b[key];
                const v539 = deepEquals(v537, v538);
                const v540 = !v539;
                if (v540) {
                    return false;
                }
            }
            return true;
        } else {
            return false;
        }
    }
};
exports.deepEquals = deepEquals;
const scalarEquals = function (a1, a2) {
    const v541 = a1 instanceof Date;
    const v542 = a2 instanceof Date;
    const v543 = v541 && v542;
    if (v543) {
        const v544 = a1.getTime();
        const v545 = a2.getTime();
        const v546 = v544 === v545;
        return v546;
    }
    const v547 = a1 === a2;
    return v547;
};
exports.scalarEquals = scalarEquals;
const deepCopy = function (obj) {
    var res;
    var i;
    var key;
    const v548 = isTerminal(obj);
    if (v548) {
        res = obj;
    } else {
        const v549 = Array.isArray(obj);
        if (v549) {
            const v550 = obj.length;
            res = Array(v550);
            i = 0
            const v551 = obj.length;
            let v552 = i < v551;
            while (v552) {
                const v554 = obj[i];
                const v555 = deepCopy(v554);
                res[i] = v555;
                const v553 = i++;
                v552 = i < v551;
            }
        } else {
            res = {};
            for (key in obj) {
                const v556 = obj[key];
                const v557 = deepCopy(v556);
                res[key] = v557;
            }
        }
    }
    return res;
};
exports.deepCopy = deepCopy;
const collapseToDotted = function (obj, includeRedundantLevels, stopAtArrays) {
    var result = {};
    const v558 = isScalar(obj);
    if (v558) {
        const v559 = {};
        return v559;
    }
    const addObj = function (obj, path) {
        var key;
        const v560 = isScalar(obj);
        const v561 = Array.isArray(obj);
        const v562 = v561 && stopAtArrays;
        const v563 = v560 || v562;
        if (v563) {
            result[path] = obj;
            return;
        }
        if (includeRedundantLevels) {
            result[path] = obj;
        }
        for (key in obj) {
            const v564 = obj[key];
            const v565 = path + '.';
            const v566 = v565 + key;
            let v567;
            if (path) {
                v567 = v566;
            } else {
                v567 = key;
            }
            const v568 = addObj(v564, v567);
            v568;
        }
    };
    const v569 = addObj(obj, '');
    v569;
    const v570 = result[''];
    const v571 = delete v570;
    v571;
    return result;
};
exports.collapseToDotted = collapseToDotted;
const matchDottedObject = function (doc, query) {
    var queryKey;
    const v572 = query === true;
    if (v572) {
        const v573 = doc === true;
        return v573;
    }
    const v574 = isScalar(query);
    const v575 = isScalar(doc);
    const v576 = v574 || v575;
    if (v576) {
        const v577 = deepEquals(query, doc);
        return v577;
    }
    for (queryKey in query) {
        const v578 = doc[queryKey];
        const v579 = query[queryKey];
        const v580 = deepEquals(v578, v579);
        const v581 = !v580;
        if (v581) {
            return false;
        }
    }
    return true;
};
exports.matchDottedObject = matchDottedObject;
const matchObject = function (doc, query) {
    const v582 = console.warn('objtools.matchObject() has been deprecated; use lodash.isMatch()');
    v582;
    const v583 = _.isMatch(doc, query);
    return v583;
};
exports.matchObject = matchObject;
const unchangedSymbol = Symbol();
const syncObject = function (toObj, fromObj, options = {}) {
    const syncSubObject = function (toVal, fromVal, parentObj, path) {
        var i;
        var key;
        var subPath;
        var elemPath;
        var newVal;
        var newArr;
        const v584 = options.onField;
        const v585 = parentObj && v584;
        const v586 = options.onField(path, toVal, fromVal, parentObj);
        const v587 = v586 === false;
        const v588 = v585 && v587;
        if (v588) {
            return unchangedSymbol;
        }
        const v589 = isScalar(toVal);
        const v590 = isScalar(fromVal);
        const v591 = v589 && v590;
        if (v591) {
            const v592 = scalarEquals(fromVal, toVal);
            const v593 = !v592;
            if (v593) {
                return fromVal;
            }
            return unchangedSymbol;
        } else {
            const v594 = isScalar(toVal);
            const v595 = isScalar(fromVal);
            const v596 = v594 || v595;
            if (v596) {
                return fromVal;
            } else {
                const v597 = Array.isArray(toVal);
                const v598 = Array.isArray(fromVal);
                const v599 = v597 && v598;
                if (v599) {
                    const v600 = toVal.length;
                    const v601 = fromVal.length;
                    const v602 = v600 === v601;
                    if (v602) {
                        i = 0
                        const v603 = toVal.length;
                        let v604 = i < v603;
                        while (v604) {
                            const v606 = path + '.';
                            const v607 = v606 + i;
                            if (path) {
                                elemPath = v607;
                            } else {
                                elemPath = i;
                            }
                            const v608 = toVal[i];
                            const v609 = fromVal[i];
                            newVal = syncSubObject(v608, v609, toVal, elemPath);
                            const v610 = newVal !== unchangedSymbol;
                            if (v610) {
                                const v611 = options.onChange;
                                if (v611) {
                                    const v612 = toVal[i];
                                    const v613 = fromVal[i];
                                    const v614 = options.onChange(elemPath, v612, v613, toVal);
                                    v614;
                                }
                                toVal[i] = newVal;
                            }
                            const v605 = i++;
                            v604 = i < v603;
                        }
                        return unchangedSymbol;
                    } else {
                        newArr = [];
                        i = 0
                        const v615 = fromVal.length;
                        let v616 = i < v615;
                        while (v616) {
                            const v618 = path + '.';
                            const v619 = v618 + i;
                            if (path) {
                                elemPath = v619;
                            } else {
                                elemPath = i;
                            }
                            const v620 = toVal[i];
                            const v621 = fromVal[i];
                            newVal = syncSubObject(v620, v621, toVal, elemPath);
                            const v622 = newVal !== unchangedSymbol;
                            const v623 = toVal.length;
                            const v624 = i >= v623;
                            const v625 = v622 || v624;
                            if (v625) {
                                const v626 = options.onChange;
                                if (v626) {
                                    const v627 = toVal[i];
                                    const v628 = fromVal[i];
                                    const v629 = options.onChange(elemPath, v627, v628, toVal);
                                    v629;
                                }
                            }
                            const v630 = fromVal[i];
                            const v631 = newArr.push(v630);
                            v631;
                            const v617 = i++;
                            v616 = i < v615;
                        }
                        return newArr;
                    }
                } else {
                    const v632 = typeof toVal;
                    const v633 = v632 === 'object';
                    const v634 = typeof fromVal;
                    const v635 = v634 === 'object';
                    const v636 = v633 && v635;
                    if (v636) {
                        for (key in fromVal) {
                            const v637 = path + '.';
                            const v638 = v637 + key;
                            if (path) {
                                subPath = v638;
                            } else {
                                subPath = key;
                            }
                            const v639 = fromVal.hasOwnProperty(key);
                            const v640 = !v639;
                            if (v640) {
                                continue;
                            }
                            const v641 = toVal.hasOwnProperty(key);
                            const v642 = !v641;
                            if (v642) {
                                const v643 = options.onField;
                                const v644 = toVal[key];
                                const v645 = fromVal[key];
                                const v646 = options.onField(subPath, v644, v645, toVal);
                                const v647 = v646 === false;
                                const v648 = v643 && v647;
                                if (v648) {
                                    continue;
                                }
                                const v649 = options.onChange;
                                if (v649) {
                                    const v650 = toVal[key];
                                    const v651 = fromVal[key];
                                    const v652 = options.onChange(subPath, v650, v651, toVal);
                                    v652;
                                }
                                const v653 = fromVal[key];
                                toVal[key] = v653;
                            } else {
                                const v654 = toVal[key];
                                const v655 = fromVal[key];
                                newVal = syncSubObject(v654, v655, toVal, subPath);
                                const v656 = newVal !== unchangedSymbol;
                                if (v656) {
                                    const v657 = options.onChange;
                                    if (v657) {
                                        const v658 = toVal[key];
                                        const v659 = fromVal[key];
                                        const v660 = options.onChange(subPath, v658, v659, toVal);
                                        v660;
                                    }
                                    toVal[key] = newVal;
                                }
                            }
                        }
                        for (key in toVal) {
                            const v661 = toVal.hasOwnProperty(key);
                            const v662 = !v661;
                            const v663 = fromVal.hasOwnProperty(key);
                            const v664 = v662 || v663;
                            if (v664) {
                                continue;
                            }
                            const v665 = path + '.';
                            const v666 = v665 + key;
                            if (path) {
                                subPath = v666;
                            } else {
                                subPath = key;
                            }
                            const v667 = options.onField;
                            const v668 = toVal[key];
                            const v669 = fromVal[key];
                            const v670 = options.onField(subPath, v668, v669, toVal);
                            const v671 = v670 === false;
                            const v672 = v667 && v671;
                            if (v672) {
                                continue;
                            }
                            const v673 = options.onChange;
                            if (v673) {
                                const v674 = toVal[key];
                                const v675 = fromVal[key];
                                const v676 = options.onChange(subPath, v674, v675, toVal);
                                v676;
                            }
                            const v677 = toVal[key];
                            const v678 = delete v677;
                            v678;
                        }
                        return unchangedSymbol;
                    } else {
                        return fromVal;
                    }
                }
            }
        }
    };
    const v679 = syncSubObject(toObj, fromObj, null, '');
    v679;
    return toObj;
};
exports.syncObject = syncObject;
const setPath = function (obj, path, value) {
    var cur = obj;
    var parts = path.split('.');
    var i;
    (i = 0)
    const v680 = parts.length;
    let v681 = i < v680;
    while (v681) {
        const v683 = parts.length;
        const v684 = v683 - 1;
        const v685 = i === v684;
        if (v685) {
            const v686 = parts[i];
            cur[v686] = value;
        } else {
            const v687 = parts[i];
            const v688 = cur[v687];
            const v689 = isScalar(v688);
            if (v689) {
                const v690 = parts[i];
                const v691 = {};
                cur[v690] = v691;
            }
            const v692 = parts[i];
            cur = cur[v692];
        }
        const v682 = i++;
        v681 = i < v680;
    }
    return obj;
};
exports.setPath = setPath;
const deletePath = function (obj, path) {
    var cur = obj;
    var parts = path.split('.');
    var i;
    (i = 0)
    const v693 = parts.length;
    let v694 = i < v693;
    while (v694) {
        const v696 = parts.length;
        const v697 = v696 - 1;
        const v698 = i === v697;
        if (v698) {
            const v699 = parts[i];
            const v700 = cur[v699];
            const v701 = delete v700;
            v701;
        } else {
            const v702 = parts[i];
            const v703 = cur[v702];
            const v704 = isScalar(v703);
            if (v704) {
                return obj;
            }
            const v705 = parts[i];
            cur = cur[v705];
        }
        const v695 = i++;
        v694 = i < v693;
    }
    return obj;
};
exports.deletePath = deletePath;
const getPath = function (obj, path, allowSkipArrays) {
    const v706 = path === null;
    const v707 = path === undefined;
    const v708 = v706 || v707;
    if (v708) {
        return obj;
    }
    var cur = obj;
    var parts = path.split('.');
    var i;
    (i = 0)
    const v709 = parts.length;
    let v710 = i < v709;
    while (v710) {
        const v712 = isScalar(cur);
        if (v712) {
            return undefined;
        }
        const v713 = Array.isArray(cur);
        const v714 = v713 && allowSkipArrays;
        const v715 = parts[i];
        const v716 = /^[0-9]+$/.test(v715);
        const v717 = !v716;
        const v718 = v714 && v717;
        const v719 = cur.length;
        const v720 = v719 === 1;
        const v721 = v718 && v720;
        if (v721) {
            cur = cur[0];
            const v722 = i--;
            v722;
        } else {
            const v723 = parts[i];
            cur = cur[v723];
        }
        const v711 = i++;
        v710 = i < v709;
    }
    return cur;
};
exports.getPath = getPath;
const mergeLight = function () {
    var target = arguments[0];
    var source;
    var key;
    var value;
    var i;
    (i = 1)
    const v724 = arguments.length;
    let v725 = i < v724;
    while (v725) {
        source = arguments[i];
        const v727 = isTerminal(source);
        if (v727) {
            target = source;
        } else {
            const v728 = isTerminal(target);
            if (v728) {
                const v729 = Array.isArray(source);
                const v730 = source.length;
                const v731 = Array(v730);
                const v732 = {};
                if (v729) {
                    target = v731;
                } else {
                    target = v732;
                }
            }
            for (key in source) {
                value = source[key];
                const v733 = value !== undefined;
                if (v733) {
                    const v734 = target[key];
                    const v735 = mergeLight(v734, value);
                    target[key] = v735;
                }
            }
        }
        const v726 = ++i;
        v725 = i < v724;
    }
    return target;
};
const merge = function () {
    const v736 = arguments.length;
    const v737 = v736 - 1;
    var lastSource = arguments[v737];
    const v738 = typeof lastSource;
    const v739 = v738 === 'function';
    const v740 = arguments.length;
    const v741 = v740 > 2;
    const v742 = Array.isArray(lastSource);
    const v743 = v741 && v742;
    const v744 = arguments[1];
    const v745 = lastSource.indexOf(v744);
    const v746 = v745 >= 0;
    const v747 = v743 && v746;
    const v748 = v739 || v747;
    if (v748) {
        const v749 = mergeHeavy.apply(null, arguments);
        return v749;
    } else {
        const v750 = mergeLight.apply(null, arguments);
        return v750;
    }
};
exports.merge = merge;
const mergeHeavy = function (object, ...sources) {
    var customizer;
    const v751 = sources.length;
    const v752 = v751 - 1;
    var lastSource = sources[v752];
    var source;
    const v753 = typeof lastSource;
    const v754 = v753 === 'function';
    if (v754) {
        customizer = sources.pop();
        const v755 = sources.length;
        const v756 = v755 - 1;
        lastSource = sources[v756];
    }
    const v757 = sources.length;
    const v758 = v757 > 1;
    const v759 = _.isArray(lastSource);
    const v760 = v758 && v759;
    const v761 = sources[0];
    const v762 = lastSource.indexOf(v761);
    const v763 = v762 >= 0;
    const v764 = v760 && v763;
    if (v764) {
        const v765 = sources[0];
        const v766 = baseMergeHeavy(object, v765, customizer);
        v766;
    } else {
        for (source of sources) {
            const v767 = baseMergeHeavy(object, source, customizer);
            v767;
        }
    }
    return object;
};
const baseMergeHeavy = function (object, source, customizer) {
    var key;
    var srcValue;
    var value;
    var result;
    var isCommon;
    var hasValue;
    var isNewValue;
    const v768 = isScalar(object);
    const v769 = !v768;
    const v770 = isScalar(source);
    const v771 = !v770;
    const v772 = v769 && v771;
    if (v772) {
        for (key in source) {
            srcValue = source[key];
            const v773 = isScalar(srcValue);
            if (v773) {
                value = object[key];
                const v774 = customizer(value, srcValue, key, object, source);
                if (customizer) {
                    result = v774;
                } else {
                    result = undefined;
                }
                isCommon = result === undefined;
                if (isCommon) {
                    result = srcValue;
                }
                const v775 = _.isArray(source);
                const v776 = result !== undefined;
                hasValue = v775 || v776;
                const v777 = scalarEquals(result, value);
                const v778 = !v777;
                const v779 = isNaN(result);
                const v780 = isNaN(value);
                const v781 = v779 && v780;
                const v782 = !v781;
                isNewValue = v778 && v782;
                const v783 = isCommon || isNewValue;
                const v784 = hasValue && v783;
                if (v784) {
                    object[key] = result;
                }
            } else {
                const v785 = baseMergeDeepHeavy(object, source, key, customizer);
                v785;
            }
        }
    }
    return object;
};
const baseMergeDeepHeavy = function (object, source, key, customizer) {
    var srcValue = source[key];
    var value = object[key];
    const v786 = customizer(value, srcValue, key, object, source);
    var result = customizer && v786;
    var isCommon = result === undefined;
    if (isCommon) {
        const v787 = isScalar(value);
        if (v787) {
            result = srcValue;
        } else {
            result = value;
        }
        const v788 = _.isArray(srcValue);
        const v789 = !v788;
        if (v789) {
            const v790 = _.isPlainObject(srcValue);
            const v791 = _.isArguments(srcValue);
            const v792 = v790 || v791;
            if (v792) {
                const v793 = _.isArguments(value);
                if (v793) {
                    result = _.toPlainObject(value);
                } else {
                    const v794 = _.isArray(value);
                    const v795 = !v794;
                    const v796 = _.isPlainObject(value);
                    const v797 = !v796;
                    const v798 = v795 && v797;
                    if (v798) {
                        result = {};
                    }
                }
            } else {
                isCommon = false;
            }
        }
    }
    if (isCommon) {
        const v799 = baseMergeHeavy(result, srcValue, customizer);
        object[key] = v799;
    } else {
        const v800 = result !== value;
        if (v800) {
            object[key] = result;
        }
    }
};
exports.mergeHeavy = mergeHeavy;
const duplicatesSymbol = Symbol('duplicates');
const getDuplicates = function (arr) {
    const v804 = (memo, val) => {
        const v801 = memo[val];
        switch (v801) {
        case true:
            const v802 = memo[duplicatesSymbol];
            const v803 = v802.push(val);
            v803;
            memo[val] = false;
        case undefined:
            memo[val] = true;
        }
        return memo;
    };
    const v805 = [];
    const v806 = { [duplicatesSymbol]: v805 };
    const v807 = arr.reduce(v804, v806);
    const v808 = v807[duplicatesSymbol];
    return v808;
};
exports.getDuplicates = getDuplicates;
const getKeys = objects => {
    const v816 = (keys, obj) => {
        const v809 = isScalar(obj);
        const v810 = !v809;
        if (v810) {
            var index;
            var objKeys = Object.keys(obj);
            const v811 = objKeys.length;
            let v812 = index >= 0;
            while (v812) {
                const v814 = objKeys[index];
                const v815 = keys.unshift(v814);
                v815;
                const v813 = index--;
                v812 = index >= 0;
            }
        }
        return keys;
    };
    const v817 = [];
    const v818 = _.reduce(objects, v816, v817);
    return v818;
};
const getDuplicateKeys = objects => {
    const v819 = getKeys(objects);
    const v820 = getDuplicates(v819);
    return v820;
};
const getScalarOrNull = val => {
    const v821 = isScalar(val);
    let v822;
    if (v821) {
        v822 = val;
    } else {
        v822 = null;
    }
    return v822;
};
const getValueAtKeyOrNull = key => {
    const v828 = obj => {
        const v823 = obj[key];
        const v824 = v823 !== undefined;
        const v825 = obj && v824;
        const v826 = obj[key];
        let v827;
        if (v825) {
            v827 = v826;
        } else {
            v827 = null;
        }
        return v827;
    };
    return v828;
};
const isCollectionOrNull = val => {
    const v829 = val === null;
    const v830 = isScalar(val);
    const v831 = !v830;
    const v832 = v829 || v831;
    return v832;
};
const hasNonNullScalars = diff => {
    const v833 = _.every(diff, isCollectionOrNull);
    const v834 = !v833;
    return v834;
};
const diffObjects = function (...objects) {
    const isHeterogeneousAtKey = key => {
        const v842 = obj => {
            const v835 = objects[0];
            const v836 = obj && v835;
            const v837 = obj[key];
            const v838 = objects[0];
            const v839 = v838[key];
            const v840 = v837 === v839;
            const v841 = v836 && v840;
            return v841;
        };
        const v843 = _.every(objects, v842);
        const v844 = !v843;
        return v844;
    };
    let result;
    const v845 = hasNonNullScalars(objects);
    const v846 = _.map(objects, getScalarOrNull);
    const v847 = {};
    if (v845) {
        result = v846;
    } else {
        result = v847;
    }
    var index;
    const v848 = getKeys(objects);
    var diffKeys = _.filter(v848, isHeterogeneousAtKey);
    var diffValues;
    const v849 = diffKeys.length;
    let v850 = index > 0;
    while (v850) {
        const v852 = diffKeys[index];
        const v853 = getValueAtKeyOrNull(v852);
        diffValues = _.map(objects, v853);
        const v854 = getDuplicateKeys(diffValues);
        const v855 = v854.length;
        const v856 = v855 === 0;
        if (v856) {
            const v857 = diffKeys[index];
            result[v857] = diffValues;
        } else {
            const v858 = diffKeys[index];
            const v859 = hasNonNullScalars(diffValues);
            const v860 = diffObjects(...diffValues);
            const v861 = Object.assign(diffValues, v860);
            const v862 = diffObjects(...diffValues);
            let v863;
            if (v859) {
                v863 = v861;
            } else {
                v863 = v862;
            }
            result[v858] = v863;
        }
        const v851 = index--;
        v850 = index > 0;
    }
    return result;
};
exports.diffObjects = diffObjects;
const dottedDiff = function (val1, val2) {
    const v864 = isScalar(val1);
    const v865 = isScalar(val2);
    const v866 = v864 && v865;
    if (v866) {
        const v867 = val1 === val2;
        const v868 = [];
        let v869;
        if (v867) {
            v869 = v868;
        } else {
            v869 = '';
        }
        return v869;
    } else {
        const v870 = {};
        const v871 = addDottedDiffFieldsToSet(v870, '', val1, val2);
        const v872 = Object.keys(v871);
        return v872;
    }
};
const addDottedDiffFieldsToSet = function (fieldSet, fieldPath, value1, value2) {
    var key;
    var subfieldPath;
    const v873 = isScalar(value1);
    const v874 = !v873;
    const v875 = isScalar(value2);
    const v876 = !v875;
    const v877 = v874 && v876;
    if (v877) {
        for (key in value1) {
            const v878 = fieldPath + '.';
            const v879 = v878 + key;
            if (fieldPath) {
                subfieldPath = v879;
            } else {
                subfieldPath = key;
            }
            const v880 = key in value2;
            if (v880) {
                const v881 = value1[key];
                const v882 = value2[key];
                const v883 = addDottedDiffFieldsToSet(fieldSet, subfieldPath, v881, v882);
                v883;
            } else {
                fieldSet[subfieldPath] = true;
            }
        }
        for (key in value2) {
            const v884 = key in value1;
            const v885 = !v884;
            if (v885) {
                const v886 = fieldPath + '.';
                const v887 = v886 + key;
                if (fieldPath) {
                    subfieldPath = v887;
                } else {
                    subfieldPath = key;
                }
                fieldSet[subfieldPath] = true;
            }
        }
    } else {
        const v888 = scalarEquals(value1, value2);
        const v889 = !v888;
        if (v889) {
            fieldSet[fieldPath] = true;
        }
    }
    return fieldSet;
};
exports.dottedDiff = dottedDiff;
const objectHash = function (obj) {
    var hash = crypto.createHash('md5');
    const v890 = makeHashKey(obj);
    const v891 = hash.update(v890);
    v891;
    const v892 = hash.digest('hex');
    return v892;
};
const makeHashKey = function (input) {
    var r = '';
    var i;
    var k;
    var keyArray;
    var key;
    var valHash;
    const v893 = typeof input;
    const v894 = v893 === 'string';
    if (v894) {
        return input;
    }
    const v895 = typeof input;
    const v896 = v895 === 'number';
    if (v896) {
        const v897 = '' + input;
        return v897;
    }
    const v898 = typeof input;
    const v899 = v898 === 'boolean';
    if (v899) {
        const v900 = '' + input;
        return v900;
    }
    const v901 = input instanceof Date;
    if (v901) {
        const v902 = input.toISOString();
        return v902;
    }
    const v903 = input === null;
    const v904 = input === undefined;
    const v905 = v903 || v904;
    if (v905) {
        return '';
    }
    const v906 = Array.isArray(input);
    if (v906) {
        i = 0
        const v907 = input.length;
        let v908 = i < v907;
        while (v908) {
            const v910 = input[i];
            k = makeHashKey(v910);
            const v911 = k !== undefined;
            if (v911) {
                const v912 = k.length;
                const v913 = v912 + '.';
                r += v913 + k;
            }
            const v909 = i++;
            v908 = i < v907;
        }
        return r;
    }
    const v914 = typeof input;
    const v915 = v914 === 'object';
    if (v915) {
        keyArray = [];
        for (key in input) {
            const v916 = keyArray.push(key);
            v916;
        }
        const v917 = keyArray.sort();
        v917;
        for (key of keyArray) {
            const v918 = input[key];
            valHash = makeHashKey(v918);
            const v919 = key.length;
            const v920 = v919 + '.';
            const v921 = v920 + key;
            const v922 = v921 + '..';
            const v923 = valHash.length;
            const v924 = v922 + v923;
            const v925 = v924 + '.';
            r += v925 + valHash;
        }
        return r;
    }
    return undefined;
};
exports.objectHash = objectHash;
const sanitizeDate = function (val) {
    const v926 = !val;
    if (v926) {
        return null;
    }
    const v927 = _.isDate(val);
    if (v927) {
        return val;
    }
    const v928 = _.isString(val);
    if (v928) {
        const v929 = Date.parse(val);
        const v930 = new Date(v929);
        return v930;
    }
    const v931 = _.isNumber(val);
    if (v931) {
        const v932 = new Date(val);
        return v932;
    }
    const v933 = _.isObject(val);
    const v934 = val.date;
    const v935 = v933 && v934;
    if (v935) {
        const v936 = val.date;
        const v937 = sanitizeDate(v936);
        return v937;
    }
    return null;
};
exports.sanitizeDate = sanitizeDate;
const isPlainObject = function (val) {
    var r = false;
    var proto;
    const v938 = typeof val;
    const v939 = v938 === 'object';
    const v940 = val !== null;
    const v941 = v939 && v940;
    if (v941) {
        proto = Object.getPrototypeOf(val);
        const v942 = Object.prototype;
        const v943 = proto === v942;
        const v944 = proto === null;
        r = v943 || v944;
    }
    return r;
};
exports.isPlainObject = isPlainObject;
const isEmptyObject = function (val) {
    var key;
    const v945 = typeof val;
    const v946 = v945 === 'object';
    const v947 = v946 && val;
    if (v947) {
        for (key in val) {
            return false;
        }
        return true;
    }
    return false;
};
exports.isEmptyObject = isEmptyObject;
const isEmptyArray = function (val) {
    const v948 = Array.isArray(val);
    if (v948) {
        const v949 = val.length;
        const v950 = !v949;
        return v950;
    }
    const v951 = val.length;
    const v952 = typeof v951;
    const v953 = v952 === 'number';
    const v954 = val && v953;
    if (v954) {
        const v955 = val.length;
        const v956 = !v955;
        return v956;
    }
    return false;
};
exports.isEmptyArray = isEmptyArray;
const isEmpty = function (val) {
    var key;
    const v957 = Array.isArray(val);
    if (v957) {
        const v958 = val.length;
        const v959 = !v958;
        return v959;
    }
    if (val) {
        const v960 = val.length;
        const v961 = typeof v960;
        const v962 = v961 === 'number';
        if (v962) {
            const v963 = val.length;
            const v964 = !v963;
            return v964;
        }
        const v965 = typeof val;
        const v966 = v965 === 'object';
        if (v966) {
            for (key in val) {
                return false;
            }
            return true;
        }
        return false;
    }
    const v967 = typeof val;
    const v968 = v967 === 'number';
    if (v968) {
        return false;
    }
    return true;
};
exports.isEmpty = isEmpty;
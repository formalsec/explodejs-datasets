'use strict';
const Assert = require('assert');
const Crypto = require('crypto');
const Path = require('path');
const Util = require('util');
const Escape = function () {
};
const internals = {};
const v677 = function (obj, seen) {
    const v653 = typeof obj;
    const v654 = v653 !== 'object';
    const v655 = obj === null;
    const v656 = v654 || v655;
    if (v656) {
        return obj;
    }
    const v657 = new Map();
    seen = seen || v657;
    const lookup = seen.get(obj);
    if (lookup) {
        return lookup;
    }
    let newObj;
    let cloneDeep = false;
    const v658 = Array.isArray(obj);
    const v659 = !v658;
    if (v659) {
        const v660 = Buffer.isBuffer(obj);
        if (v660) {
            newObj = new Buffer(obj);
        } else {
            const v661 = obj instanceof Date;
            if (v661) {
                const v662 = obj.getTime();
                newObj = new Date(v662);
            } else {
                const v663 = obj instanceof RegExp;
                if (v663) {
                    newObj = new RegExp(obj);
                } else {
                    const proto = Object.getPrototypeOf(obj);
                    const v664 = proto.isImmutable;
                    const v665 = proto && v664;
                    if (v665) {
                        newObj = obj;
                    } else {
                        newObj = Object.create(proto);
                        cloneDeep = true;
                    }
                }
            }
        }
    } else {
        newObj = [];
        cloneDeep = true;
    }
    const v666 = seen.set(obj, newObj);
    v666;
    if (cloneDeep) {
        const keys = Object.getOwnPropertyNames(obj);
        let i = 0;
        const v667 = keys.length;
        let v668 = i < v667;
        while (v668) {
            const key = keys[i];
            const descriptor = Object.getOwnPropertyDescriptor(obj, key);
            const v670 = descriptor.get;
            const v671 = descriptor.set;
            const v672 = v670 || v671;
            const v673 = descriptor && v672;
            if (v673) {
                const v674 = Object.defineProperty(newObj, key, descriptor);
                v674;
            } else {
                const v675 = obj[key];
                const v676 = exports.clone(v675, seen);
                newObj[key] = v676;
            }
            const v669 = ++i;
            v668 = i < v667;
        }
    }
    return newObj;
};
exports.clone = v677;
const v728 = function (target, source, isNullOverride, isMergeArrays) {
    const v678 = typeof target;
    const v679 = v678 === 'object';
    const v680 = target && v679;
    const v681 = exports.assert(v680, 'Invalid target value: must be an object');
    v681;
    const v682 = source === null;
    const v683 = source === undefined;
    const v684 = v682 || v683;
    const v685 = typeof source;
    const v686 = v685 === 'object';
    const v687 = v684 || v686;
    const v688 = exports.assert(v687, 'Invalid source value: must be null, undefined, or an object');
    v688;
    const v689 = !source;
    if (v689) {
        return target;
    }
    const v690 = Array.isArray(source);
    if (v690) {
        const v691 = Array.isArray(target);
        const v692 = exports.assert(v691, 'Cannot merge array onto an object');
        v692;
        const v693 = isMergeArrays === false;
        if (v693) {
            target.length = 0;
        }
        let i = 0;
        const v694 = source.length;
        let v695 = i < v694;
        while (v695) {
            const v697 = source[i];
            const v698 = exports.clone(v697);
            const v699 = target.push(v698);
            v699;
            const v696 = ++i;
            v695 = i < v694;
        }
        return target;
    }
    const keys = Object.keys(source);
    let i = 0;
    const v700 = keys.length;
    let v701 = i < v700;
    while (v701) {
        const key = keys[i];
        const value = source[key];
        const v703 = typeof value;
        const v704 = v703 === 'object';
        const v705 = value && v704;
        if (v705) {
            const v706 = target[key];
            const v707 = !v706;
            const v708 = target[key];
            const v709 = typeof v708;
            const v710 = v709 !== 'object';
            const v711 = v707 || v710;
            const v712 = target[key];
            const v713 = Array.isArray(v712);
            const v714 = Array.isArray(value);
            const v715 = v713 !== v714;
            const v716 = v711 || v715;
            const v717 = value instanceof Date;
            const v718 = v716 || v717;
            const v719 = value instanceof RegExp;
            const v720 = v718 || v719;
            if (v720) {
                const v721 = exports.clone(value);
                target[key] = v721;
            } else {
                const v722 = target[key];
                const v723 = exports.merge(v722, value, isNullOverride, isMergeArrays);
                v723;
            }
        } else {
            const v724 = value !== null;
            const v725 = value !== undefined;
            const v726 = v724 && v725;
            if (v726) {
                target[key] = value;
            } else {
                const v727 = isNullOverride !== false;
                if (v727) {
                    target[key] = value;
                }
            }
        }
        const v702 = ++i;
        v701 = i < v700;
    }
    return target;
};
exports.merge = v728;
const v744 = function (defaults, options, isNullOverride) {
    const v729 = typeof defaults;
    const v730 = v729 === 'object';
    const v731 = defaults && v730;
    const v732 = exports.assert(v731, 'Invalid defaults value: must be an object');
    v732;
    const v733 = !options;
    const v734 = options === true;
    const v735 = v733 || v734;
    const v736 = typeof options;
    const v737 = v736 === 'object';
    const v738 = v735 || v737;
    const v739 = exports.assert(v738, 'Invalid options value: must be true, falsy or an object');
    v739;
    const v740 = !options;
    if (v740) {
        return null;
    }
    const copy = exports.clone(defaults);
    const v741 = options === true;
    if (v741) {
        return copy;
    }
    const v742 = isNullOverride === true;
    const v743 = exports.merge(copy, options, v742, false);
    return v743;
};
exports.applyToDefaults = v744;
const v750 = function (source, keys) {
    const v745 = !source;
    const v746 = typeof source;
    const v747 = v746 !== 'object';
    const v748 = v745 || v747;
    if (v748) {
        return source;
    }
    const storage = internals.store(source, keys);
    const copy = exports.clone(source);
    const v749 = internals.restore(copy, source, storage);
    v749;
    return copy;
};
exports.cloneWithShallow = v750;
const v756 = function (source, keys) {
    const storage = {};
    let i = 0;
    const v751 = keys.length;
    let v752 = i < v751;
    while (v752) {
        const key = keys[i];
        const value = exports.reach(source, key);
        const v754 = value !== undefined;
        if (v754) {
            storage[key] = value;
            const v755 = internals.reachSet(source, key, undefined);
            v755;
        }
        const v753 = ++i;
        v752 = i < v751;
    }
    return storage;
};
internals.store = v756;
const v764 = function (copy, source, storage) {
    const keys = Object.keys(storage);
    let i = 0;
    const v757 = keys.length;
    let v758 = i < v757;
    while (v758) {
        const key = keys[i];
        const v760 = storage[key];
        const v761 = internals.reachSet(copy, key, v760);
        v761;
        const v762 = storage[key];
        const v763 = internals.reachSet(source, key, v762);
        v763;
        const v759 = ++i;
        v758 = i < v757;
    }
};
internals.restore = v764;
const v771 = function (obj, key, value) {
    const path = key.split('.');
    let ref = obj;
    let i = 0;
    const v765 = path.length;
    let v766 = i < v765;
    while (v766) {
        const segment = path[i];
        const v768 = i + 1;
        const v769 = path.length;
        const v770 = v768 === v769;
        if (v770) {
            ref[segment] = value;
        }
        ref = ref[segment];
        const v767 = ++i;
        v766 = i < v765;
    }
};
internals.reachSet = v771;
const v790 = function (defaults, options, keys) {
    const v772 = typeof defaults;
    const v773 = v772 === 'object';
    const v774 = defaults && v773;
    const v775 = exports.assert(v774, 'Invalid defaults value: must be an object');
    v775;
    const v776 = !options;
    const v777 = options === true;
    const v778 = v776 || v777;
    const v779 = typeof options;
    const v780 = v779 === 'object';
    const v781 = v778 || v780;
    const v782 = exports.assert(v781, 'Invalid options value: must be true, falsy or an object');
    v782;
    const v783 = Array.isArray(keys);
    const v784 = keys && v783;
    const v785 = exports.assert(v784, 'Invalid keys');
    v785;
    const v786 = !options;
    if (v786) {
        return null;
    }
    const copy = exports.cloneWithShallow(defaults, keys);
    const v787 = options === true;
    if (v787) {
        return copy;
    }
    const storage = internals.store(options, keys);
    const v788 = exports.merge(copy, options, false, false);
    v788;
    const v789 = internals.restore(copy, options, storage);
    v789;
    return copy;
};
exports.applyToDefaultsWithShallow = v790;
const v883 = function (obj, ref, options, seen) {
    const v791 = { prototype: true };
    options = options || v791;
    const v792 = typeof obj;
    const type = v792;
    const v793 = typeof ref;
    const v794 = type !== v793;
    if (v794) {
        return false;
    }
    const v795 = type !== 'object';
    const v796 = obj === null;
    const v797 = v795 || v796;
    const v798 = ref === null;
    const v799 = v797 || v798;
    if (v799) {
        const v800 = obj === ref;
        if (v800) {
            const v801 = obj !== 0;
            const v802 = 1 / obj;
            const v803 = 1 / ref;
            const v804 = v802 === v803;
            const v805 = v801 || v804;
            return v805;
        }
        const v806 = obj !== obj;
        const v807 = ref !== ref;
        const v808 = v806 && v807;
        return v808;
    }
    const v809 = [];
    seen = seen || v809;
    const v810 = seen.indexOf(obj);
    const v811 = -1;
    const v812 = v810 !== v811;
    if (v812) {
        return true;
    }
    const v813 = seen.push(obj);
    v813;
    const v814 = Array.isArray(obj);
    if (v814) {
        const v815 = Array.isArray(ref);
        const v816 = !v815;
        if (v816) {
            return false;
        }
        const v817 = options.part;
        const v818 = !v817;
        const v819 = obj.length;
        const v820 = ref.length;
        const v821 = v819 !== v820;
        const v822 = v818 && v821;
        if (v822) {
            return false;
        }
        let i = 0;
        const v823 = obj.length;
        let v824 = i < v823;
        while (v824) {
            const v826 = options.part;
            if (v826) {
                let found = false;
                let j = 0;
                const v827 = ref.length;
                let v828 = j < v827;
                while (v828) {
                    const v830 = obj[i];
                    const v831 = ref[j];
                    const v832 = exports.deepEqual(v830, v831, options);
                    if (v832) {
                        found = true;
                        break;
                    }
                    const v829 = ++j;
                    v828 = j < v827;
                }
                return found;
            }
            const v833 = obj[i];
            const v834 = ref[i];
            const v835 = exports.deepEqual(v833, v834, options);
            const v836 = !v835;
            if (v836) {
                return false;
            }
            const v825 = ++i;
            v824 = i < v823;
        }
        return true;
    }
    const v837 = Buffer.isBuffer(obj);
    if (v837) {
        const v838 = Buffer.isBuffer(ref);
        const v839 = !v838;
        if (v839) {
            return false;
        }
        const v840 = obj.length;
        const v841 = ref.length;
        const v842 = v840 !== v841;
        if (v842) {
            return false;
        }
        let i = 0;
        const v843 = obj.length;
        let v844 = i < v843;
        while (v844) {
            const v846 = obj[i];
            const v847 = ref[i];
            const v848 = v846 !== v847;
            if (v848) {
                return false;
            }
            const v845 = ++i;
            v844 = i < v843;
        }
        return true;
    }
    const v849 = obj instanceof Date;
    if (v849) {
        const v850 = ref instanceof Date;
        const v851 = obj.getTime();
        const v852 = ref.getTime();
        const v853 = v851 === v852;
        const v854 = v850 && v853;
        return v854;
    }
    const v855 = obj instanceof RegExp;
    if (v855) {
        const v856 = ref instanceof RegExp;
        const v857 = obj.toString();
        const v858 = ref.toString();
        const v859 = v857 === v858;
        const v860 = v856 && v859;
        return v860;
    }
    const v861 = options.prototype;
    if (v861) {
        const v862 = Object.getPrototypeOf(obj);
        const v863 = Object.getPrototypeOf(ref);
        const v864 = v862 !== v863;
        if (v864) {
            return false;
        }
    }
    const keys = Object.getOwnPropertyNames(obj);
    const v865 = options.part;
    const v866 = !v865;
    const v867 = keys.length;
    const v868 = Object.getOwnPropertyNames(ref);
    const v869 = v868.length;
    const v870 = v867 !== v869;
    const v871 = v866 && v870;
    if (v871) {
        return false;
    }
    let i = 0;
    const v872 = keys.length;
    let v873 = i < v872;
    while (v873) {
        const key = keys[i];
        const descriptor = Object.getOwnPropertyDescriptor(obj, key);
        const v875 = descriptor.get;
        if (v875) {
            const v876 = Object.getOwnPropertyDescriptor(ref, key);
            const v877 = exports.deepEqual(descriptor, v876, options, seen);
            const v878 = !v877;
            if (v878) {
                return false;
            }
        } else {
            const v879 = obj[key];
            const v880 = ref[key];
            const v881 = exports.deepEqual(v879, v880, options, seen);
            const v882 = !v881;
            if (v882) {
                return false;
            }
        }
        const v874 = ++i;
        v873 = i < v872;
    }
    return true;
};
exports.deepEqual = v883;
const v891 = (array, key) => {
    let result;
    if (key) {
        result = [];
        const index = new Set();
        const v888 = item => {
            const identifier = item[key];
            const v884 = index.has(identifier);
            const v885 = !v884;
            if (v885) {
                const v886 = index.add(identifier);
                v886;
                const v887 = result.push(item);
                v887;
            }
        };
        const v889 = array.forEach(v888);
        v889;
    } else {
        const v890 = new Set(array);
        result = Array.from(v890);
    }
    return result;
};
exports.unique = v891;
const v901 = function (array, key) {
    const v892 = !array;
    if (v892) {
        return null;
    }
    const obj = {};
    let i = 0;
    const v893 = array.length;
    let v894 = i < v893;
    while (v894) {
        if (key) {
            const v896 = array[i];
            const v897 = v896[key];
            if (v897) {
                const v898 = array[i];
                const v899 = v898[key];
                obj[v899] = true;
            }
        } else {
            const v900 = array[i];
            obj[v900] = true;
        }
        const v895 = ++i;
        v894 = i < v893;
    }
    return obj;
};
exports.mapToObject = v901;
const v922 = function (array1, array2, justFirst) {
    const v902 = !array1;
    const v903 = !array2;
    const v904 = v902 || v903;
    if (v904) {
        const v905 = [];
        return v905;
    }
    const common = [];
    let hash;
    const v906 = Array.isArray(array1);
    const v907 = exports.mapToObject(array1);
    if (v906) {
        hash = v907;
    } else {
        hash = array1;
    }
    const found = {};
    let i = 0;
    const v908 = array2.length;
    let v909 = i < v908;
    while (v909) {
        const v911 = array2[i];
        const v912 = hash[v911];
        const v913 = array2[i];
        const v914 = found[v913];
        const v915 = !v914;
        const v916 = v912 && v915;
        if (v916) {
            if (justFirst) {
                const v917 = array2[i];
                return v917;
            }
            const v918 = array2[i];
            const v919 = common.push(v918);
            v919;
            const v920 = array2[i];
            found[v920] = true;
        }
        const v910 = ++i;
        v909 = i < v908;
    }
    let v921;
    if (justFirst) {
        v921 = null;
    } else {
        v921 = common;
    }
    return v921;
};
exports.intersect = v922;
const v1022 = function (ref, values, options) {
    let valuePairs = null;
    const v923 = typeof ref;
    const v924 = v923 === 'object';
    const v925 = typeof values;
    const v926 = v925 === 'object';
    const v927 = v924 && v926;
    const v928 = Array.isArray(ref);
    const v929 = !v928;
    const v930 = v927 && v929;
    const v931 = Array.isArray(values);
    const v932 = !v931;
    const v933 = v930 && v932;
    if (v933) {
        valuePairs = values;
        values = Object.keys(values);
    } else {
        const v934 = [];
        values = v934.concat(values);
    }
    const v935 = {};
    options = options || v935;
    const v936 = typeof ref;
    const v937 = v936 === 'string';
    const v938 = typeof ref;
    const v939 = v938 === 'object';
    const v940 = v937 || v939;
    const v941 = exports.assert(v940, 'Reference must be string or an object');
    v941;
    const v942 = values.length;
    const v943 = exports.assert(v942, 'Values array cannot be empty');
    v943;
    let compare;
    let compareFlags;
    const v944 = options.deep;
    if (v944) {
        compare = exports.deepEqual;
        const hasOnly = options.hasOwnProperty('only');
        const hasPart = options.hasOwnProperty('part');
        const v945 = options.only;
        const v946 = options.part;
        const v947 = !v946;
        let v948;
        if (hasPart) {
            v948 = v947;
        } else {
            v948 = false;
        }
        let v949;
        if (hasOnly) {
            v949 = v945;
        } else {
            v949 = v948;
        }
        const v950 = options.only;
        const v951 = !v950;
        const v952 = options.part;
        let v953;
        if (hasPart) {
            v953 = v952;
        } else {
            v953 = true;
        }
        let v954;
        if (hasOnly) {
            v954 = v951;
        } else {
            v954 = v953;
        }
        compareFlags.prototype = v949;
        compareFlags.part = v954;
        compareFlags = {};
        compareFlags = {};
    } else {
        const v956 = (a, b) => {
            const v955 = a === b;
            return v955;
        };
        compare = v956;
    }
    let misses = false;
    const v957 = values.length;
    const matches = new Array(v957);
    let i = 0;
    const v958 = matches.length;
    let v959 = i < v958;
    while (v959) {
        matches[i] = 0;
        const v960 = ++i;
        v959 = i < v958;
    }
    const v961 = typeof ref;
    const v962 = v961 === 'string';
    if (v962) {
        let pattern = '(';
        let i = 0;
        const v963 = values.length;
        let v964 = i < v963;
        while (v964) {
            const value = values[i];
            const v966 = typeof value;
            const v967 = v966 === 'string';
            const v968 = exports.assert(v967, 'Cannot compare string reference to non-string value');
            v968;
            let v969;
            if (i) {
                v969 = '|';
            } else {
                v969 = '';
            }
            const v970 = exports.escapeRegex(value);
            pattern += v969 + v970;
            const v965 = ++i;
            v964 = i < v963;
        }
        const v971 = pattern + ')';
        const regex = new RegExp(v971, 'g');
        const v974 = ($0, $1) => {
            const index = values.indexOf($1);
            const v972 = matches[index];
            const v973 = ++v972;
            v973;
            return '';
        };
        const leftovers = ref.replace(regex, v974);
        const v975 = !leftovers;
        const v976 = !v975;
        misses = v976;
    } else {
        const v977 = Array.isArray(ref);
        if (v977) {
            let i = 0;
            const v978 = ref.length;
            let v979 = i < v978;
            while (v979) {
                let matched = false;
                let j = 0;
                const v981 = values.length;
                const v982 = j < v981;
                const v983 = matched === false;
                let v984 = v982 && v983;
                while (v984) {
                    const v986 = values[j];
                    const v987 = ref[i];
                    const v988 = compare(v986, v987, compareFlags);
                    matched = v988 && j;
                    const v985 = ++j;
                    v984 = v982 && v983;
                }
                const v989 = matched !== false;
                if (v989) {
                    const v990 = matches[matched];
                    const v991 = ++v990;
                    v991;
                } else {
                    misses = true;
                }
                const v980 = ++i;
                v979 = i < v978;
            }
        } else {
            const keys = Object.getOwnPropertyNames(ref);
            let i = 0;
            const v992 = keys.length;
            let v993 = i < v992;
            while (v993) {
                const key = keys[i];
                const pos = values.indexOf(key);
                const v995 = -1;
                const v996 = pos !== v995;
                if (v996) {
                    const v997 = valuePairs[key];
                    const v998 = ref[key];
                    const v999 = compare(v997, v998, compareFlags);
                    const v1000 = !v999;
                    const v1001 = valuePairs && v1000;
                    if (v1001) {
                        return false;
                    }
                    const v1002 = matches[pos];
                    const v1003 = ++v1002;
                    v1003;
                } else {
                    misses = true;
                }
                const v994 = ++i;
                v993 = i < v992;
            }
        }
    }
    let result = false;
    let i = 0;
    const v1004 = matches.length;
    let v1005 = i < v1004;
    while (v1005) {
        const v1007 = matches[i];
        const v1008 = !v1007;
        const v1009 = !v1008;
        result = result || v1009;
        const v1010 = options.once;
        const v1011 = matches[i];
        const v1012 = v1011 > 1;
        const v1013 = v1010 && v1012;
        const v1014 = options.part;
        const v1015 = !v1014;
        const v1016 = matches[i];
        const v1017 = !v1016;
        const v1018 = v1015 && v1017;
        const v1019 = v1013 || v1018;
        if (v1019) {
            return false;
        }
        const v1006 = ++i;
        v1005 = i < v1004;
    }
    const v1020 = options.only;
    const v1021 = v1020 && misses;
    if (v1021) {
        return false;
    }
    return result;
};
exports.contain = v1022;
const v1033 = function (array, target) {
    const v1023 = [];
    const result = target || v1023;
    let i = 0;
    const v1024 = array.length;
    let v1025 = i < v1024;
    while (v1025) {
        const v1027 = array[i];
        const v1028 = Array.isArray(v1027);
        if (v1028) {
            const v1029 = array[i];
            const v1030 = exports.flatten(v1029, result);
            v1030;
        } else {
            const v1031 = array[i];
            const v1032 = result.push(v1031);
            v1032;
        }
        const v1026 = ++i;
        v1025 = i < v1024;
    }
    return result;
};
exports.flatten = v1033;
const v1086 = function (obj, chain, options) {
    const v1034 = chain === false;
    const v1035 = chain === null;
    const v1036 = v1034 || v1035;
    const v1037 = typeof chain;
    const v1038 = v1037 === 'undefined';
    const v1039 = v1036 || v1038;
    if (v1039) {
        return obj;
    }
    const v1040 = {};
    options = options || v1040;
    const v1041 = typeof options;
    const v1042 = v1041 === 'string';
    if (v1042) {
        options.separator = options;
        options = {};
        options = {};
    }
    const v1043 = options.separator;
    const v1044 = v1043 || '.';
    const path = chain.split(v1044);
    let ref = obj;
    let i = 0;
    const v1045 = path.length;
    let v1046 = i < v1045;
    while (v1046) {
        let key = path[i];
        const v1048 = key[0];
        const v1049 = v1048 === '-';
        const v1050 = Array.isArray(ref);
        const v1051 = v1049 && v1050;
        if (v1051) {
            const v1052 = key.length;
            key = key.slice(1, v1052);
            const v1053 = ref.length;
            key = v1053 - key;
        }
        const v1054 = !ref;
        const v1055 = typeof ref;
        const v1056 = v1055 === 'object';
        const v1057 = typeof ref;
        const v1058 = v1057 === 'function';
        const v1059 = v1056 || v1058;
        const v1060 = key in ref;
        const v1061 = v1059 && v1060;
        const v1062 = !v1061;
        const v1063 = v1054 || v1062;
        const v1064 = typeof ref;
        const v1065 = v1064 !== 'object';
        const v1066 = options.functions;
        const v1067 = v1066 === false;
        const v1068 = v1065 && v1067;
        const v1069 = v1063 || v1068;
        if (v1069) {
            const v1070 = options.strict;
            const v1071 = !v1070;
            const v1072 = i + 1;
            const v1073 = path.length;
            const v1074 = v1072 === v1073;
            const v1075 = v1071 || v1074;
            const v1076 = exports.assert(v1075, 'Missing segment', key, 'in reach path ', chain);
            v1076;
            const v1077 = typeof ref;
            const v1078 = v1077 === 'object';
            const v1079 = options.functions;
            const v1080 = v1079 === true;
            const v1081 = v1078 || v1080;
            const v1082 = typeof ref;
            const v1083 = v1082 !== 'function';
            const v1084 = v1081 || v1083;
            const v1085 = exports.assert(v1084, 'Invalid segment', key, 'in reach path ', chain);
            v1085;
            ref = options.default;
            break;
        }
        ref = ref[key];
        const v1047 = ++i;
        v1046 = i < v1045;
    }
    return ref;
};
exports.reach = v1086;
const v1093 = function (obj, template, options) {
    const v1091 = ($0, chain) => {
        const value = exports.reach(obj, chain, options);
        const v1087 = value === undefined;
        const v1088 = value === null;
        const v1089 = v1087 || v1088;
        let v1090;
        if (v1089) {
            v1090 = '';
        } else {
            v1090 = value;
        }
        return v1090;
    };
    const v1092 = template.replace(/{([^}]+)}/g, v1091);
    return v1092;
};
exports.reachTemplate = v1093;
const v1104 = function (stack) {
    const trace = [];
    let i = 0;
    const v1094 = stack.length;
    let v1095 = i < v1094;
    while (v1095) {
        const item = stack[i];
        const v1097 = item.getFileName();
        const v1098 = item.getLineNumber();
        const v1099 = item.getColumnNumber();
        const v1100 = item.getFunctionName();
        const v1101 = item.isConstructor();
        const v1102 = [
            v1097,
            v1098,
            v1099,
            v1100,
            v1101
        ];
        const v1103 = trace.push(v1102);
        v1103;
        const v1096 = ++i;
        v1095 = i < v1094;
    }
    return trace;
};
exports.formatStack = v1104;
const v1123 = function (trace) {
    const display = [];
    let i = 0;
    const v1105 = trace.length;
    let v1106 = i < v1105;
    while (v1106) {
        const row = trace[i];
        const v1108 = row[4];
        let v1109;
        if (v1108) {
            v1109 = 'new ';
        } else {
            v1109 = '';
        }
        const v1110 = row[3];
        const v1111 = v1109 + v1110;
        const v1112 = v1111 + ' (';
        const v1113 = row[0];
        const v1114 = v1112 + v1113;
        const v1115 = v1114 + ':';
        const v1116 = row[1];
        const v1117 = v1115 + v1116;
        const v1118 = v1117 + ':';
        const v1119 = row[2];
        const v1120 = v1118 + v1119;
        const v1121 = v1120 + ')';
        const v1122 = display.push(v1121);
        v1122;
        const v1107 = ++i;
        v1106 = i < v1105;
    }
    return display;
};
exports.formatTrace = v1123;
const v1128 = function (slice) {
    const v8 = Error.prepareStackTrace;
    const v1124 = function (_, stack) {
        return stack;
    };
    Error.prepareStackTrace = v1124;
    const capture = {};
    const v1125 = Error.captureStackTrace(capture, this);
    v1125;
    const stack = capture.stack;
    Error.prepareStackTrace = v8;
    const trace = exports.formatStack(stack);
    const v1126 = 1 + slice;
    const v1127 = trace.slice(v1126);
    return v1127;
};
exports.callStack = v1128;
const v1133 = function (slice) {
    const v1129 = slice === undefined;
    const v1130 = slice + 1;
    let v1131;
    if (v1129) {
        v1131 = 1;
    } else {
        v1131 = v1130;
    }
    const trace = exports.callStack(v1131);
    const v1132 = exports.formatTrace(trace);
    return v1132;
};
exports.displayStack = v1133;
exports.abortThrow = false;
const v1149 = function (message, hideStack) {
    const v1134 = process.env;
    const v1135 = v1134.NODE_ENV;
    const v1136 = v1135 === 'test';
    const v1137 = exports.abortThrow;
    const v1138 = v1137 === true;
    const v1139 = v1136 || v1138;
    if (v1139) {
        const v1140 = message || 'Unknown error';
        const v1141 = new Error(v1140);
        throw v1141;
    }
    let stack = '';
    const v1142 = !hideStack;
    if (v1142) {
        const v1143 = exports.displayStack(1);
        stack = v1143.join('\n\t');
    }
    const v1144 = 'ABORT: ' + message;
    const v1145 = v1144 + '\n\t';
    const v1146 = v1145 + stack;
    const v1147 = console.log(v1146);
    v1147;
    const v1148 = process.exit(1);
    v1148;
};
exports.abort = v1149;
const v1172 = function (condition, ...args) {
    if (condition) {
        return;
    }
    const v1150 = args.length;
    const v1151 = v1150 === 1;
    const v1152 = args[0];
    const v1153 = v1152 instanceof Error;
    const v1154 = v1151 && v1153;
    if (v1154) {
        const v1155 = args[0];
        throw v1155;
    }
    const v1157 = arg => {
        const v1156 = arg !== '';
        return v1156;
    };
    const v1158 = args.filter(v1157);
    const v1166 = arg => {
        const v1159 = typeof arg;
        const v1160 = v1159 === 'string';
        const v1161 = arg instanceof Error;
        const v1162 = arg.message;
        const v1163 = exports.stringify(arg);
        let v1164;
        if (v1161) {
            v1164 = v1162;
        } else {
            v1164 = v1163;
        }
        let v1165;
        if (v1160) {
            v1165 = arg;
        } else {
            v1165 = v1164;
        }
        return v1165;
    };
    const msgs = v1158.map(v1166);
    const v1167 = msgs.join(' ');
    const v1168 = v1167 || 'Unknown error';
    const v1169 = exports.assert;
    const v1170 = {
        message: v1168,
        actual: false,
        expected: true,
        operator: '==',
        stackStartFunction: v1169
    };
    const v1171 = new Assert.AssertionError(v1170);
    throw v1171;
};
exports.assert = v1172;
const v1174 = function () {
    this.ts = 0;
    const v1173 = this.reset();
    v1173;
};
exports.Bench = v1174;
const v1175 = exports.Bench;
const v1176 = v1175.prototype;
const v1179 = function () {
    const v1177 = exports.Bench;
    const v1178 = v1177.now();
    this.ts = v1178;
};
v1176.reset = v1179;
const v1180 = exports.Bench;
const v1181 = v1180.prototype;
const v1186 = function () {
    const v1182 = exports.Bench;
    const v1183 = v1182.now();
    const v1184 = this.ts;
    const v1185 = v1183 - v1184;
    return v1185;
};
v1181.elapsed = v1186;
const v1187 = exports.Bench;
const v1193 = function () {
    const ts = process.hrtime();
    const v1188 = ts[0];
    const v1189 = v1188 * 1000;
    const v1190 = ts[1];
    const v1191 = v1190 / 1000000;
    const v1192 = v1189 + v1191;
    return v1192;
};
v1187.now = v1193;
const v1195 = function (string) {
    const v1194 = string.replace(/[\^\$\.\*\+\-\?\=\!\:\|\\\/\(\)\[\]\{\}\,]/g, '\\$&');
    return v1194;
};
exports.escapeRegex = v1195;
const v1208 = function (value, encoding) {
    const v1196 = typeof value;
    const v1197 = v1196 === 'string';
    const v1198 = Buffer.isBuffer(value);
    const v1199 = v1197 || v1198;
    const v1200 = exports.assert(v1199, 'value must be string or buffer');
    v1200;
    let buf;
    const v1201 = Buffer.isBuffer(value);
    const v1202 = encoding || 'binary';
    const v1203 = new Buffer(value, v1202);
    if (v1201) {
        buf = value;
    } else {
        buf = v1203;
    }
    const v1204 = buf.toString('base64');
    const v1205 = v1204.replace(/\+/g, '-');
    const v1206 = v1205.replace(/\//g, '_');
    const v1207 = v1206.replace(/\=/g, '');
    return v1207;
};
exports.base64urlEncode = v1208;
const v1219 = function (value, encoding) {
    const v1209 = typeof value;
    const v1210 = v1209 !== 'string';
    if (v1210) {
        const v1211 = new Error('Value not a string');
        throw v1211;
    }
    const v1212 = /^[\w\-]*$/.test(value);
    const v1213 = !v1212;
    if (v1213) {
        const v1214 = new Error('Invalid character');
        throw v1214;
    }
    const buf = new Buffer(value, 'base64');
    const v1215 = encoding === 'buffer';
    const v1216 = encoding || 'binary';
    const v1217 = buf.toString(v1216);
    let v1218;
    if (v1215) {
        v1218 = buf;
    } else {
        v1218 = v1217;
    }
    return v1218;
};
exports.base64urlDecode = v1219;
const v1226 = function (attribute) {
    const v1220 = /^[ \w\!#\$%&'\(\)\*\+,\-\.\/\:;<\=>\?@\[\]\^`\{\|\}~\"\\]*$/.test(attribute);
    const v1221 = 'Bad attribute value (' + attribute;
    const v1222 = v1221 + ')';
    const v1223 = exports.assert(v1220, v1222);
    v1223;
    const v1224 = attribute.replace(/\\/g, '\\\\');
    const v1225 = v1224.replace(/\"/g, '\\"');
    return v1225;
};
exports.escapeHeaderAttribute = v1226;
const v1228 = function (string) {
    const v1227 = Escape.escapeHtml(string);
    return v1227;
};
exports.escapeHtml = v1228;
const v1230 = function (string) {
    const v1229 = Escape.escapeJavaScript(string);
    return v1229;
};
exports.escapeJavaScript = v1230;
const v1232 = function (string) {
    const v1231 = Escape.escapeJson(string);
    return v1231;
};
exports.escapeJson = v1232;
const v1236 = function (method) {
    const v1233 = method._hoekOnce;
    if (v1233) {
        return method;
    }
    let once = false;
    const wrapped = function (...args) {
        const v1234 = !once;
        if (v1234) {
            once = true;
            const v1235 = method.apply(null, args);
            v1235;
        }
    };
    wrapped._hoekOnce = true;
    return wrapped;
};
exports.once = v1236;
const v1237 = Number.isSafeInteger;
exports.isInteger = v1237;
const v1238 = function () {
};
exports.ignore = v1238;
const v1239 = Util.inherits;
exports.inherits = v1239;
const v1240 = Util.format;
exports.format = v1240;
const v1275 = function (source, transform, options) {
    const v1241 = source === null;
    const v1242 = source === undefined;
    const v1243 = v1241 || v1242;
    const v1244 = typeof source;
    const v1245 = v1244 === 'object';
    const v1246 = v1243 || v1245;
    const v1247 = Array.isArray(source);
    const v1248 = v1246 || v1247;
    const v1249 = exports.assert(v1248, 'Invalid source object: must be null, undefined, an object, or an array');
    v1249;
    let separator;
    const v1250 = typeof options;
    const v1251 = v1250 === 'object';
    const v1252 = options !== null;
    const v1253 = v1251 && v1252;
    const v1254 = options.separator;
    const v1255 = v1254 || '.';
    if (v1253) {
        separator = v1255;
    } else {
        separator = '.';
    }
    const v1256 = Array.isArray(source);
    if (v1256) {
        const results = [];
        let i = 0;
        const v1257 = source.length;
        let v1258 = i < v1257;
        while (v1258) {
            const v1260 = source[i];
            const v1261 = exports.transform(v1260, transform, options);
            const v1262 = results.push(v1261);
            v1262;
            const v1259 = ++i;
            v1258 = i < v1257;
        }
        return results;
    }
    const result = {};
    const keys = Object.keys(transform);
    let i = 0;
    const v1263 = keys.length;
    let v1264 = i < v1263;
    while (v1264) {
        const key = keys[i];
        const path = key.split(separator);
        const sourcePath = transform[key];
        const v1266 = typeof sourcePath;
        const v1267 = v1266 === 'string';
        const v1268 = exports.assert(v1267, 'All mappings must be "." delineated strings');
        v1268;
        let segment;
        let res = result;
        const v1269 = path.length;
        let v1270 = v1269 > 1;
        while (v1270) {
            segment = path.shift();
            const v1271 = res[segment];
            const v1272 = !v1271;
            if (v1272) {
                const v1273 = {};
                res[segment] = v1273;
            }
            res = res[segment];
            v1270 = v1269 > 1;
        }
        segment = path.shift();
        const v1274 = exports.reach(source, sourcePath, options);
        res[segment] = v1274;
        const v1265 = ++i;
        v1264 = i < v1263;
    }
    return result;
};
exports.transform = v1275;
const v1286 = function (path, extension) {
    if (extension) {
        const v1276 = extension[0];
        const v1277 = v1276 !== '.';
        const v1278 = '.' + extension;
        if (v1277) {
            extension = v1278;
        } else {
            extension = extension;
        }
    } else {
        extension = '';
    }
    path = Path.resolve(path);
    const v1279 = Date.now();
    const v1280 = process.pid;
    const v1281 = Crypto.randomBytes(8);
    const v1282 = v1281.toString('hex');
    const v1283 = [
        v1279,
        v1280,
        v1282
    ];
    const v1284 = v1283.join('-');
    const name = v1284 + extension;
    const v1285 = Path.join(path, name);
    return v1285;
};
exports.uniqueFilename = v1286;
const v1292 = function (...args) {
    try {
        const v1287 = JSON.stringify;
        const v1288 = v1287.apply(null, args);
        return v1288;
    } catch (err) {
        const v1289 = err.message;
        const v1290 = '[Cannot display object: ' + v1289;
        const v1291 = v1290 + ']';
        return v1291;
    }
};
exports.stringify = v1292;
const v1297 = function (source) {
    const target = {};
    const keys = Object.keys(source);
    let i = 0;
    const v1293 = keys.length;
    let v1294 = i < v1293;
    while (v1294) {
        const key = keys[i];
        const v1296 = source[key];
        target[key] = v1296;
        const v1295 = ++i;
        v1294 = i < v1293;
    }
    return target;
};
exports.shallow = v1297;
const v1301 = function (timeout) {
    const v1299 = resolve => {
        const v1298 = setTimeout(resolve, timeout);
        return v1298;
    };
    const v1300 = new Promise(v1299);
    return v1300;
};
exports.wait = v1301;
const v1304 = function () {
    const v1302 = exports.ignore;
    const v1303 = new Promise(v1302);
    return v1303;
};
exports.block = v1304;
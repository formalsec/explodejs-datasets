'use strict';
const Assert = require('assert');
const Crypto = require('crypto');
const Path = require('path');
const Util = require('util');
const Escape = require('./escape');
const internals = {};
const v679 = function (obj, seen) {
    const v655 = typeof obj;
    const v656 = v655 !== 'object';
    const v657 = obj === null;
    const v658 = v656 || v657;
    if (v658) {
        return obj;
    }
    const v659 = new Map();
    seen = seen || v659;
    const lookup = seen.get(obj);
    if (lookup) {
        return lookup;
    }
    let newObj;
    let cloneDeep = false;
    const v660 = Array.isArray(obj);
    const v661 = !v660;
    if (v661) {
        const v662 = Buffer.isBuffer(obj);
        if (v662) {
            newObj = new Buffer(obj);
        } else {
            const v663 = obj instanceof Date;
            if (v663) {
                const v664 = obj.getTime();
                newObj = new Date(v664);
            } else {
                const v665 = obj instanceof RegExp;
                if (v665) {
                    newObj = new RegExp(obj);
                } else {
                    const proto = Object.getPrototypeOf(obj);
                    const v666 = proto.isImmutable;
                    const v667 = proto && v666;
                    if (v667) {
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
    const v668 = seen.set(obj, newObj);
    v668;
    if (cloneDeep) {
        const keys = Object.getOwnPropertyNames(obj);
        let i = 0;
        const v669 = keys.length;
        let v670 = i < v669;
        while (v670) {
            const key = keys[i];
            const descriptor = Object.getOwnPropertyDescriptor(obj, key);
            const v672 = descriptor.get;
            const v673 = descriptor.set;
            const v674 = v672 || v673;
            const v675 = descriptor && v674;
            if (v675) {
                const v676 = Object.defineProperty(newObj, key, descriptor);
                v676;
            } else {
                const v677 = obj[key];
                const v678 = exports.clone(v677, seen);
                newObj[key] = v678;
            }
            const v671 = ++i;
            v670 = i < v669;
        }
    }
    return newObj;
};
exports.clone = v679;
const v732 = function (target, source, isNullOverride, isMergeArrays) {
    const v680 = typeof target;
    const v681 = v680 === 'object';
    const v682 = target && v681;
    const v683 = exports.assert(v682, 'Invalid target value: must be an object');
    v683;
    const v684 = source === null;
    const v685 = source === undefined;
    const v686 = v684 || v685;
    const v687 = typeof source;
    const v688 = v687 === 'object';
    const v689 = v686 || v688;
    const v690 = exports.assert(v689, 'Invalid source value: must be null, undefined, or an object');
    v690;
    const v691 = !source;
    if (v691) {
        return target;
    }
    const v692 = Array.isArray(source);
    if (v692) {
        const v693 = Array.isArray(target);
        const v694 = exports.assert(v693, 'Cannot merge array onto an object');
        v694;
        const v695 = isMergeArrays === false;
        if (v695) {
            target.length = 0;
        }
        let i = 0;
        const v696 = source.length;
        let v697 = i < v696;
        while (v697) {
            const v699 = source[i];
            const v700 = exports.clone(v699);
            const v701 = target.push(v700);
            v701;
            const v698 = ++i;
            v697 = i < v696;
        }
        return target;
    }
    const keys = Object.keys(source);
    let i = 0;
    const v702 = keys.length;
    let v703 = i < v702;
    while (v703) {
        const key = keys[i];
        const value = source[key];
        const v705 = typeof value;
        const v706 = v705 === 'object';
        const v707 = value && v706;
        if (v707) {
            const v708 = target[key];
            const v709 = !v708;
            const v710 = target[key];
            const v711 = typeof v710;
            const v712 = v711 !== 'object';
            const v713 = v709 || v712;
            const v714 = target[key];
            const v715 = Array.isArray(v714);
            const v716 = Array.isArray(value);
            const v717 = v715 !== v716;
            const v718 = v713 || v717;
            const v719 = value instanceof Date;
            const v720 = v718 || v719;
            const v721 = Buffer.isBuffer(value);
            const v722 = v720 || v721;
            const v723 = value instanceof RegExp;
            const v724 = v722 || v723;
            if (v724) {
                const v725 = exports.clone(value);
                target[key] = v725;
            } else {
                const v726 = target[key];
                const v727 = exports.merge(v726, value, isNullOverride, isMergeArrays);
                v727;
            }
        } else {
            const v728 = value !== null;
            const v729 = value !== undefined;
            const v730 = v728 && v729;
            if (v730) {
                target[key] = value;
            } else {
                const v731 = isNullOverride !== false;
                if (v731) {
                    target[key] = value;
                }
            }
        }
        const v704 = ++i;
        v703 = i < v702;
    }
    return target;
};
exports.merge = v732;
const v748 = function (defaults, options, isNullOverride) {
    const v733 = typeof defaults;
    const v734 = v733 === 'object';
    const v735 = defaults && v734;
    const v736 = exports.assert(v735, 'Invalid defaults value: must be an object');
    v736;
    const v737 = !options;
    const v738 = options === true;
    const v739 = v737 || v738;
    const v740 = typeof options;
    const v741 = v740 === 'object';
    const v742 = v739 || v741;
    const v743 = exports.assert(v742, 'Invalid options value: must be true, falsy or an object');
    v743;
    const v744 = !options;
    if (v744) {
        return null;
    }
    const copy = exports.clone(defaults);
    const v745 = options === true;
    if (v745) {
        return copy;
    }
    const v746 = isNullOverride === true;
    const v747 = exports.merge(copy, options, v746, false);
    return v747;
};
exports.applyToDefaults = v748;
const v754 = function (source, keys) {
    const v749 = !source;
    const v750 = typeof source;
    const v751 = v750 !== 'object';
    const v752 = v749 || v751;
    if (v752) {
        return source;
    }
    const storage = internals.store(source, keys);
    const copy = exports.clone(source);
    const v753 = internals.restore(copy, source, storage);
    v753;
    return copy;
};
exports.cloneWithShallow = v754;
const v760 = function (source, keys) {
    const storage = {};
    let i = 0;
    const v755 = keys.length;
    let v756 = i < v755;
    while (v756) {
        const key = keys[i];
        const value = exports.reach(source, key);
        const v758 = value !== undefined;
        if (v758) {
            storage[key] = value;
            const v759 = internals.reachSet(source, key, undefined);
            v759;
        }
        const v757 = ++i;
        v756 = i < v755;
    }
    return storage;
};
internals.store = v760;
const v768 = function (copy, source, storage) {
    const keys = Object.keys(storage);
    let i = 0;
    const v761 = keys.length;
    let v762 = i < v761;
    while (v762) {
        const key = keys[i];
        const v764 = storage[key];
        const v765 = internals.reachSet(copy, key, v764);
        v765;
        const v766 = storage[key];
        const v767 = internals.reachSet(source, key, v766);
        v767;
        const v763 = ++i;
        v762 = i < v761;
    }
};
internals.restore = v768;
const v775 = function (obj, key, value) {
    const path = key.split('.');
    let ref = obj;
    let i = 0;
    const v769 = path.length;
    let v770 = i < v769;
    while (v770) {
        const segment = path[i];
        const v772 = i + 1;
        const v773 = path.length;
        const v774 = v772 === v773;
        if (v774) {
            ref[segment] = value;
        }
        ref = ref[segment];
        const v771 = ++i;
        v770 = i < v769;
    }
};
internals.reachSet = v775;
const v794 = function (defaults, options, keys) {
    const v776 = typeof defaults;
    const v777 = v776 === 'object';
    const v778 = defaults && v777;
    const v779 = exports.assert(v778, 'Invalid defaults value: must be an object');
    v779;
    const v780 = !options;
    const v781 = options === true;
    const v782 = v780 || v781;
    const v783 = typeof options;
    const v784 = v783 === 'object';
    const v785 = v782 || v784;
    const v786 = exports.assert(v785, 'Invalid options value: must be true, falsy or an object');
    v786;
    const v787 = Array.isArray(keys);
    const v788 = keys && v787;
    const v789 = exports.assert(v788, 'Invalid keys');
    v789;
    const v790 = !options;
    if (v790) {
        return null;
    }
    const copy = exports.cloneWithShallow(defaults, keys);
    const v791 = options === true;
    if (v791) {
        return copy;
    }
    const storage = internals.store(options, keys);
    const v792 = exports.merge(copy, options, false, false);
    v792;
    const v793 = internals.restore(copy, options, storage);
    v793;
    return copy;
};
exports.applyToDefaultsWithShallow = v794;
const v887 = function (obj, ref, options, seen) {
    const v795 = { prototype: true };
    options = options || v795;
    const v796 = typeof obj;
    const type = v796;
    const v797 = typeof ref;
    const v798 = type !== v797;
    if (v798) {
        return false;
    }
    const v799 = type !== 'object';
    const v800 = obj === null;
    const v801 = v799 || v800;
    const v802 = ref === null;
    const v803 = v801 || v802;
    if (v803) {
        const v804 = obj === ref;
        if (v804) {
            const v805 = obj !== 0;
            const v806 = 1 / obj;
            const v807 = 1 / ref;
            const v808 = v806 === v807;
            const v809 = v805 || v808;
            return v809;
        }
        const v810 = obj !== obj;
        const v811 = ref !== ref;
        const v812 = v810 && v811;
        return v812;
    }
    const v813 = [];
    seen = seen || v813;
    const v814 = seen.indexOf(obj);
    const v815 = -1;
    const v816 = v814 !== v815;
    if (v816) {
        return true;
    }
    const v817 = seen.push(obj);
    v817;
    const v818 = Array.isArray(obj);
    if (v818) {
        const v819 = Array.isArray(ref);
        const v820 = !v819;
        if (v820) {
            return false;
        }
        const v821 = options.part;
        const v822 = !v821;
        const v823 = obj.length;
        const v824 = ref.length;
        const v825 = v823 !== v824;
        const v826 = v822 && v825;
        if (v826) {
            return false;
        }
        let i = 0;
        const v827 = obj.length;
        let v828 = i < v827;
        while (v828) {
            const v830 = options.part;
            if (v830) {
                let found = false;
                let j = 0;
                const v831 = ref.length;
                let v832 = j < v831;
                while (v832) {
                    const v834 = obj[i];
                    const v835 = ref[j];
                    const v836 = exports.deepEqual(v834, v835, options);
                    if (v836) {
                        found = true;
                        break;
                    }
                    const v833 = ++j;
                    v832 = j < v831;
                }
                return found;
            }
            const v837 = obj[i];
            const v838 = ref[i];
            const v839 = exports.deepEqual(v837, v838, options);
            const v840 = !v839;
            if (v840) {
                return false;
            }
            const v829 = ++i;
            v828 = i < v827;
        }
        return true;
    }
    const v841 = Buffer.isBuffer(obj);
    if (v841) {
        const v842 = Buffer.isBuffer(ref);
        const v843 = !v842;
        if (v843) {
            return false;
        }
        const v844 = obj.length;
        const v845 = ref.length;
        const v846 = v844 !== v845;
        if (v846) {
            return false;
        }
        let i = 0;
        const v847 = obj.length;
        let v848 = i < v847;
        while (v848) {
            const v850 = obj[i];
            const v851 = ref[i];
            const v852 = v850 !== v851;
            if (v852) {
                return false;
            }
            const v849 = ++i;
            v848 = i < v847;
        }
        return true;
    }
    const v853 = obj instanceof Date;
    if (v853) {
        const v854 = ref instanceof Date;
        const v855 = obj.getTime();
        const v856 = ref.getTime();
        const v857 = v855 === v856;
        const v858 = v854 && v857;
        return v858;
    }
    const v859 = obj instanceof RegExp;
    if (v859) {
        const v860 = ref instanceof RegExp;
        const v861 = obj.toString();
        const v862 = ref.toString();
        const v863 = v861 === v862;
        const v864 = v860 && v863;
        return v864;
    }
    const v865 = options.prototype;
    if (v865) {
        const v866 = Object.getPrototypeOf(obj);
        const v867 = Object.getPrototypeOf(ref);
        const v868 = v866 !== v867;
        if (v868) {
            return false;
        }
    }
    const keys = Object.getOwnPropertyNames(obj);
    const v869 = options.part;
    const v870 = !v869;
    const v871 = keys.length;
    const v872 = Object.getOwnPropertyNames(ref);
    const v873 = v872.length;
    const v874 = v871 !== v873;
    const v875 = v870 && v874;
    if (v875) {
        return false;
    }
    let i = 0;
    const v876 = keys.length;
    let v877 = i < v876;
    while (v877) {
        const key = keys[i];
        const descriptor = Object.getOwnPropertyDescriptor(obj, key);
        const v879 = descriptor.get;
        if (v879) {
            const v880 = Object.getOwnPropertyDescriptor(ref, key);
            const v881 = exports.deepEqual(descriptor, v880, options, seen);
            const v882 = !v881;
            if (v882) {
                return false;
            }
        } else {
            const v883 = obj[key];
            const v884 = ref[key];
            const v885 = exports.deepEqual(v883, v884, options, seen);
            const v886 = !v885;
            if (v886) {
                return false;
            }
        }
        const v878 = ++i;
        v877 = i < v876;
    }
    return true;
};
exports.deepEqual = v887;
const v895 = (array, key) => {
    let result;
    if (key) {
        result = [];
        const index = new Set();
        const v892 = item => {
            const identifier = item[key];
            const v888 = index.has(identifier);
            const v889 = !v888;
            if (v889) {
                const v890 = index.add(identifier);
                v890;
                const v891 = result.push(item);
                v891;
            }
        };
        const v893 = array.forEach(v892);
        v893;
    } else {
        const v894 = new Set(array);
        result = Array.from(v894);
    }
    return result;
};
exports.unique = v895;
const v905 = function (array, key) {
    const v896 = !array;
    if (v896) {
        return null;
    }
    const obj = {};
    let i = 0;
    const v897 = array.length;
    let v898 = i < v897;
    while (v898) {
        if (key) {
            const v900 = array[i];
            const v901 = v900[key];
            if (v901) {
                const v902 = array[i];
                const v903 = v902[key];
                obj[v903] = true;
            }
        } else {
            const v904 = array[i];
            obj[v904] = true;
        }
        const v899 = ++i;
        v898 = i < v897;
    }
    return obj;
};
exports.mapToObject = v905;
const v926 = function (array1, array2, justFirst) {
    const v906 = !array1;
    const v907 = !array2;
    const v908 = v906 || v907;
    if (v908) {
        const v909 = [];
        return v909;
    }
    const common = [];
    let hash;
    const v910 = Array.isArray(array1);
    const v911 = exports.mapToObject(array1);
    if (v910) {
        hash = v911;
    } else {
        hash = array1;
    }
    const found = {};
    let i = 0;
    const v912 = array2.length;
    let v913 = i < v912;
    while (v913) {
        const v915 = array2[i];
        const v916 = hash[v915];
        const v917 = array2[i];
        const v918 = found[v917];
        const v919 = !v918;
        const v920 = v916 && v919;
        if (v920) {
            if (justFirst) {
                const v921 = array2[i];
                return v921;
            }
            const v922 = array2[i];
            const v923 = common.push(v922);
            v923;
            const v924 = array2[i];
            found[v924] = true;
        }
        const v914 = ++i;
        v913 = i < v912;
    }
    let v925;
    if (justFirst) {
        v925 = null;
    } else {
        v925 = common;
    }
    return v925;
};
exports.intersect = v926;
const v1026 = function (ref, values, options) {
    let valuePairs = null;
    const v927 = typeof ref;
    const v928 = v927 === 'object';
    const v929 = typeof values;
    const v930 = v929 === 'object';
    const v931 = v928 && v930;
    const v932 = Array.isArray(ref);
    const v933 = !v932;
    const v934 = v931 && v933;
    const v935 = Array.isArray(values);
    const v936 = !v935;
    const v937 = v934 && v936;
    if (v937) {
        valuePairs = values;
        values = Object.keys(values);
    } else {
        const v938 = [];
        values = v938.concat(values);
    }
    const v939 = {};
    options = options || v939;
    const v940 = typeof ref;
    const v941 = v940 === 'string';
    const v942 = typeof ref;
    const v943 = v942 === 'object';
    const v944 = v941 || v943;
    const v945 = exports.assert(v944, 'Reference must be string or an object');
    v945;
    const v946 = values.length;
    const v947 = exports.assert(v946, 'Values array cannot be empty');
    v947;
    let compare;
    let compareFlags;
    const v948 = options.deep;
    if (v948) {
        compare = exports.deepEqual;
        const hasOnly = options.hasOwnProperty('only');
        const hasPart = options.hasOwnProperty('part');
        const v949 = options.only;
        const v950 = options.part;
        const v951 = !v950;
        let v952;
        if (hasPart) {
            v952 = v951;
        } else {
            v952 = false;
        }
        let v953;
        if (hasOnly) {
            v953 = v949;
        } else {
            v953 = v952;
        }
        const v954 = options.only;
        const v955 = !v954;
        const v956 = options.part;
        let v957;
        if (hasPart) {
            v957 = v956;
        } else {
            v957 = true;
        }
        let v958;
        if (hasOnly) {
            v958 = v955;
        } else {
            v958 = v957;
        }
        compareFlags.prototype = v953;
        compareFlags.part = v958;
        compareFlags = {};
        compareFlags = {};
    } else {
        const v960 = (a, b) => {
            const v959 = a === b;
            return v959;
        };
        compare = v960;
    }
    let misses = false;
    const v961 = values.length;
    const matches = new Array(v961);
    let i = 0;
    const v962 = matches.length;
    let v963 = i < v962;
    while (v963) {
        matches[i] = 0;
        const v964 = ++i;
        v963 = i < v962;
    }
    const v965 = typeof ref;
    const v966 = v965 === 'string';
    if (v966) {
        let pattern = '(';
        let i = 0;
        const v967 = values.length;
        let v968 = i < v967;
        while (v968) {
            const value = values[i];
            const v970 = typeof value;
            const v971 = v970 === 'string';
            const v972 = exports.assert(v971, 'Cannot compare string reference to non-string value');
            v972;
            let v973;
            if (i) {
                v973 = '|';
            } else {
                v973 = '';
            }
            const v974 = exports.escapeRegex(value);
            pattern += v973 + v974;
            const v969 = ++i;
            v968 = i < v967;
        }
        const v975 = pattern + ')';
        const regex = new RegExp(v975, 'g');
        const v978 = ($0, $1) => {
            const index = values.indexOf($1);
            const v976 = matches[index];
            const v977 = ++v976;
            v977;
            return '';
        };
        const leftovers = ref.replace(regex, v978);
        const v979 = !leftovers;
        const v980 = !v979;
        misses = v980;
    } else {
        const v981 = Array.isArray(ref);
        if (v981) {
            let i = 0;
            const v982 = ref.length;
            let v983 = i < v982;
            while (v983) {
                let matched = false;
                let j = 0;
                const v985 = values.length;
                const v986 = j < v985;
                const v987 = matched === false;
                let v988 = v986 && v987;
                while (v988) {
                    const v990 = values[j];
                    const v991 = ref[i];
                    const v992 = compare(v990, v991, compareFlags);
                    matched = v992 && j;
                    const v989 = ++j;
                    v988 = v986 && v987;
                }
                const v993 = matched !== false;
                if (v993) {
                    const v994 = matches[matched];
                    const v995 = ++v994;
                    v995;
                } else {
                    misses = true;
                }
                const v984 = ++i;
                v983 = i < v982;
            }
        } else {
            const keys = Object.getOwnPropertyNames(ref);
            let i = 0;
            const v996 = keys.length;
            let v997 = i < v996;
            while (v997) {
                const key = keys[i];
                const pos = values.indexOf(key);
                const v999 = -1;
                const v1000 = pos !== v999;
                if (v1000) {
                    const v1001 = valuePairs[key];
                    const v1002 = ref[key];
                    const v1003 = compare(v1001, v1002, compareFlags);
                    const v1004 = !v1003;
                    const v1005 = valuePairs && v1004;
                    if (v1005) {
                        return false;
                    }
                    const v1006 = matches[pos];
                    const v1007 = ++v1006;
                    v1007;
                } else {
                    misses = true;
                }
                const v998 = ++i;
                v997 = i < v996;
            }
        }
    }
    let result = false;
    let i = 0;
    const v1008 = matches.length;
    let v1009 = i < v1008;
    while (v1009) {
        const v1011 = matches[i];
        const v1012 = !v1011;
        const v1013 = !v1012;
        result = result || v1013;
        const v1014 = options.once;
        const v1015 = matches[i];
        const v1016 = v1015 > 1;
        const v1017 = v1014 && v1016;
        const v1018 = options.part;
        const v1019 = !v1018;
        const v1020 = matches[i];
        const v1021 = !v1020;
        const v1022 = v1019 && v1021;
        const v1023 = v1017 || v1022;
        if (v1023) {
            return false;
        }
        const v1010 = ++i;
        v1009 = i < v1008;
    }
    const v1024 = options.only;
    const v1025 = v1024 && misses;
    if (v1025) {
        return false;
    }
    return result;
};
exports.contain = v1026;
const v1037 = function (array, target) {
    const v1027 = [];
    const result = target || v1027;
    let i = 0;
    const v1028 = array.length;
    let v1029 = i < v1028;
    while (v1029) {
        const v1031 = array[i];
        const v1032 = Array.isArray(v1031);
        if (v1032) {
            const v1033 = array[i];
            const v1034 = exports.flatten(v1033, result);
            v1034;
        } else {
            const v1035 = array[i];
            const v1036 = result.push(v1035);
            v1036;
        }
        const v1030 = ++i;
        v1029 = i < v1028;
    }
    return result;
};
exports.flatten = v1037;
const v1090 = function (obj, chain, options) {
    const v1038 = chain === false;
    const v1039 = chain === null;
    const v1040 = v1038 || v1039;
    const v1041 = typeof chain;
    const v1042 = v1041 === 'undefined';
    const v1043 = v1040 || v1042;
    if (v1043) {
        return obj;
    }
    const v1044 = {};
    options = options || v1044;
    const v1045 = typeof options;
    const v1046 = v1045 === 'string';
    if (v1046) {
        options.separator = options;
        options = {};
        options = {};
    }
    const v1047 = options.separator;
    const v1048 = v1047 || '.';
    const path = chain.split(v1048);
    let ref = obj;
    let i = 0;
    const v1049 = path.length;
    let v1050 = i < v1049;
    while (v1050) {
        let key = path[i];
        const v1052 = key[0];
        const v1053 = v1052 === '-';
        const v1054 = Array.isArray(ref);
        const v1055 = v1053 && v1054;
        if (v1055) {
            const v1056 = key.length;
            key = key.slice(1, v1056);
            const v1057 = ref.length;
            key = v1057 - key;
        }
        const v1058 = !ref;
        const v1059 = typeof ref;
        const v1060 = v1059 === 'object';
        const v1061 = typeof ref;
        const v1062 = v1061 === 'function';
        const v1063 = v1060 || v1062;
        const v1064 = key in ref;
        const v1065 = v1063 && v1064;
        const v1066 = !v1065;
        const v1067 = v1058 || v1066;
        const v1068 = typeof ref;
        const v1069 = v1068 !== 'object';
        const v1070 = options.functions;
        const v1071 = v1070 === false;
        const v1072 = v1069 && v1071;
        const v1073 = v1067 || v1072;
        if (v1073) {
            const v1074 = options.strict;
            const v1075 = !v1074;
            const v1076 = i + 1;
            const v1077 = path.length;
            const v1078 = v1076 === v1077;
            const v1079 = v1075 || v1078;
            const v1080 = exports.assert(v1079, 'Missing segment', key, 'in reach path ', chain);
            v1080;
            const v1081 = typeof ref;
            const v1082 = v1081 === 'object';
            const v1083 = options.functions;
            const v1084 = v1083 === true;
            const v1085 = v1082 || v1084;
            const v1086 = typeof ref;
            const v1087 = v1086 !== 'function';
            const v1088 = v1085 || v1087;
            const v1089 = exports.assert(v1088, 'Invalid segment', key, 'in reach path ', chain);
            v1089;
            ref = options.default;
            break;
        }
        ref = ref[key];
        const v1051 = ++i;
        v1050 = i < v1049;
    }
    return ref;
};
exports.reach = v1090;
const v1097 = function (obj, template, options) {
    const v1095 = ($0, chain) => {
        const value = exports.reach(obj, chain, options);
        const v1091 = value === undefined;
        const v1092 = value === null;
        const v1093 = v1091 || v1092;
        let v1094;
        if (v1093) {
            v1094 = '';
        } else {
            v1094 = value;
        }
        return v1094;
    };
    const v1096 = template.replace(/{([^}]+)}/g, v1095);
    return v1096;
};
exports.reachTemplate = v1097;
const v1108 = function (stack) {
    const trace = [];
    let i = 0;
    const v1098 = stack.length;
    let v1099 = i < v1098;
    while (v1099) {
        const item = stack[i];
        const v1101 = item.getFileName();
        const v1102 = item.getLineNumber();
        const v1103 = item.getColumnNumber();
        const v1104 = item.getFunctionName();
        const v1105 = item.isConstructor();
        const v1106 = [
            v1101,
            v1102,
            v1103,
            v1104,
            v1105
        ];
        const v1107 = trace.push(v1106);
        v1107;
        const v1100 = ++i;
        v1099 = i < v1098;
    }
    return trace;
};
exports.formatStack = v1108;
const v1127 = function (trace) {
    const display = [];
    let i = 0;
    const v1109 = trace.length;
    let v1110 = i < v1109;
    while (v1110) {
        const row = trace[i];
        const v1112 = row[4];
        let v1113;
        if (v1112) {
            v1113 = 'new ';
        } else {
            v1113 = '';
        }
        const v1114 = row[3];
        const v1115 = v1113 + v1114;
        const v1116 = v1115 + ' (';
        const v1117 = row[0];
        const v1118 = v1116 + v1117;
        const v1119 = v1118 + ':';
        const v1120 = row[1];
        const v1121 = v1119 + v1120;
        const v1122 = v1121 + ':';
        const v1123 = row[2];
        const v1124 = v1122 + v1123;
        const v1125 = v1124 + ')';
        const v1126 = display.push(v1125);
        v1126;
        const v1111 = ++i;
        v1110 = i < v1109;
    }
    return display;
};
exports.formatTrace = v1127;
const v1132 = function (slice) {
    const v8 = Error.prepareStackTrace;
    const v1128 = function (_, stack) {
        return stack;
    };
    Error.prepareStackTrace = v1128;
    const capture = {};
    const v1129 = Error.captureStackTrace(capture, this);
    v1129;
    const stack = capture.stack;
    Error.prepareStackTrace = v8;
    const trace = exports.formatStack(stack);
    const v1130 = 1 + slice;
    const v1131 = trace.slice(v1130);
    return v1131;
};
exports.callStack = v1132;
const v1137 = function (slice) {
    const v1133 = slice === undefined;
    const v1134 = slice + 1;
    let v1135;
    if (v1133) {
        v1135 = 1;
    } else {
        v1135 = v1134;
    }
    const trace = exports.callStack(v1135);
    const v1136 = exports.formatTrace(trace);
    return v1136;
};
exports.displayStack = v1137;
exports.abortThrow = false;
const v1153 = function (message, hideStack) {
    const v1138 = process.env;
    const v1139 = v1138.NODE_ENV;
    const v1140 = v1139 === 'test';
    const v1141 = exports.abortThrow;
    const v1142 = v1141 === true;
    const v1143 = v1140 || v1142;
    if (v1143) {
        const v1144 = message || 'Unknown error';
        const v1145 = new Error(v1144);
        throw v1145;
    }
    let stack = '';
    const v1146 = !hideStack;
    if (v1146) {
        const v1147 = exports.displayStack(1);
        stack = v1147.join('\n\t');
    }
    const v1148 = 'ABORT: ' + message;
    const v1149 = v1148 + '\n\t';
    const v1150 = v1149 + stack;
    const v1151 = console.log(v1150);
    v1151;
    const v1152 = process.exit(1);
    v1152;
};
exports.abort = v1153;
const v1176 = function (condition, ...args) {
    if (condition) {
        return;
    }
    const v1154 = args.length;
    const v1155 = v1154 === 1;
    const v1156 = args[0];
    const v1157 = v1156 instanceof Error;
    const v1158 = v1155 && v1157;
    if (v1158) {
        const v1159 = args[0];
        throw v1159;
    }
    const v1161 = arg => {
        const v1160 = arg !== '';
        return v1160;
    };
    const v1162 = args.filter(v1161);
    const v1170 = arg => {
        const v1163 = typeof arg;
        const v1164 = v1163 === 'string';
        const v1165 = arg instanceof Error;
        const v1166 = arg.message;
        const v1167 = exports.stringify(arg);
        let v1168;
        if (v1165) {
            v1168 = v1166;
        } else {
            v1168 = v1167;
        }
        let v1169;
        if (v1164) {
            v1169 = arg;
        } else {
            v1169 = v1168;
        }
        return v1169;
    };
    const msgs = v1162.map(v1170);
    const v1171 = msgs.join(' ');
    const v1172 = v1171 || 'Unknown error';
    const v1173 = exports.assert;
    const v1174 = {
        message: v1172,
        actual: false,
        expected: true,
        operator: '==',
        stackStartFunction: v1173
    };
    const v1175 = new Assert.AssertionError(v1174);
    throw v1175;
};
exports.assert = v1176;
const v1178 = function () {
    this.ts = 0;
    const v1177 = this.reset();
    v1177;
};
exports.Bench = v1178;
const v1179 = exports.Bench;
const v1180 = v1179.prototype;
const v1183 = function () {
    const v1181 = exports.Bench;
    const v1182 = v1181.now();
    this.ts = v1182;
};
v1180.reset = v1183;
const v1184 = exports.Bench;
const v1185 = v1184.prototype;
const v1190 = function () {
    const v1186 = exports.Bench;
    const v1187 = v1186.now();
    const v1188 = this.ts;
    const v1189 = v1187 - v1188;
    return v1189;
};
v1185.elapsed = v1190;
const v1191 = exports.Bench;
const v1197 = function () {
    const ts = process.hrtime();
    const v1192 = ts[0];
    const v1193 = v1192 * 1000;
    const v1194 = ts[1];
    const v1195 = v1194 / 1000000;
    const v1196 = v1193 + v1195;
    return v1196;
};
v1191.now = v1197;
const v1199 = function (string) {
    const v1198 = string.replace(/[\^\$\.\*\+\-\?\=\!\:\|\\\/\(\)\[\]\{\}\,]/g, '\\$&');
    return v1198;
};
exports.escapeRegex = v1199;
const v1212 = function (value, encoding) {
    const v1200 = typeof value;
    const v1201 = v1200 === 'string';
    const v1202 = Buffer.isBuffer(value);
    const v1203 = v1201 || v1202;
    const v1204 = exports.assert(v1203, 'value must be string or buffer');
    v1204;
    let buf;
    const v1205 = Buffer.isBuffer(value);
    const v1206 = encoding || 'binary';
    const v1207 = new Buffer(value, v1206);
    if (v1205) {
        buf = value;
    } else {
        buf = v1207;
    }
    const v1208 = buf.toString('base64');
    const v1209 = v1208.replace(/\+/g, '-');
    const v1210 = v1209.replace(/\//g, '_');
    const v1211 = v1210.replace(/\=/g, '');
    return v1211;
};
exports.base64urlEncode = v1212;
const v1223 = function (value, encoding) {
    const v1213 = typeof value;
    const v1214 = v1213 !== 'string';
    if (v1214) {
        const v1215 = new Error('Value not a string');
        throw v1215;
    }
    const v1216 = /^[\w\-]*$/.test(value);
    const v1217 = !v1216;
    if (v1217) {
        const v1218 = new Error('Invalid character');
        throw v1218;
    }
    const buf = new Buffer(value, 'base64');
    const v1219 = encoding === 'buffer';
    const v1220 = encoding || 'binary';
    const v1221 = buf.toString(v1220);
    let v1222;
    if (v1219) {
        v1222 = buf;
    } else {
        v1222 = v1221;
    }
    return v1222;
};
exports.base64urlDecode = v1223;
const v1230 = function (attribute) {
    const v1224 = /^[ \w\!#\$%&'\(\)\*\+,\-\.\/\:;<\=>\?@\[\]\^`\{\|\}~\"\\]*$/.test(attribute);
    const v1225 = 'Bad attribute value (' + attribute;
    const v1226 = v1225 + ')';
    const v1227 = exports.assert(v1224, v1226);
    v1227;
    const v1228 = attribute.replace(/\\/g, '\\\\');
    const v1229 = v1228.replace(/\"/g, '\\"');
    return v1229;
};
exports.escapeHeaderAttribute = v1230;
const v1232 = function (string) {
    const v1231 = Escape.escapeHtml(string);
    return v1231;
};
exports.escapeHtml = v1232;
const v1234 = function (string) {
    const v1233 = Escape.escapeJavaScript(string);
    return v1233;
};
exports.escapeJavaScript = v1234;
const v1236 = function (string) {
    const v1235 = Escape.escapeJson(string);
    return v1235;
};
exports.escapeJson = v1236;
const v1240 = function (method) {
    const v1237 = method._hoekOnce;
    if (v1237) {
        return method;
    }
    let once = false;
    const wrapped = function (...args) {
        const v1238 = !once;
        if (v1238) {
            once = true;
            const v1239 = method.apply(null, args);
            v1239;
        }
    };
    wrapped._hoekOnce = true;
    return wrapped;
};
exports.once = v1240;
const v1241 = Number.isSafeInteger;
exports.isInteger = v1241;
const v1242 = function () {
};
exports.ignore = v1242;
const v1243 = Util.inherits;
exports.inherits = v1243;
const v1244 = Util.format;
exports.format = v1244;
const v1279 = function (source, transform, options) {
    const v1245 = source === null;
    const v1246 = source === undefined;
    const v1247 = v1245 || v1246;
    const v1248 = typeof source;
    const v1249 = v1248 === 'object';
    const v1250 = v1247 || v1249;
    const v1251 = Array.isArray(source);
    const v1252 = v1250 || v1251;
    const v1253 = exports.assert(v1252, 'Invalid source object: must be null, undefined, an object, or an array');
    v1253;
    let separator;
    const v1254 = typeof options;
    const v1255 = v1254 === 'object';
    const v1256 = options !== null;
    const v1257 = v1255 && v1256;
    const v1258 = options.separator;
    const v1259 = v1258 || '.';
    if (v1257) {
        separator = v1259;
    } else {
        separator = '.';
    }
    const v1260 = Array.isArray(source);
    if (v1260) {
        const results = [];
        let i = 0;
        const v1261 = source.length;
        let v1262 = i < v1261;
        while (v1262) {
            const v1264 = source[i];
            const v1265 = exports.transform(v1264, transform, options);
            const v1266 = results.push(v1265);
            v1266;
            const v1263 = ++i;
            v1262 = i < v1261;
        }
        return results;
    }
    const result = {};
    const keys = Object.keys(transform);
    let i = 0;
    const v1267 = keys.length;
    let v1268 = i < v1267;
    while (v1268) {
        const key = keys[i];
        const path = key.split(separator);
        const sourcePath = transform[key];
        const v1270 = typeof sourcePath;
        const v1271 = v1270 === 'string';
        const v1272 = exports.assert(v1271, 'All mappings must be "." delineated strings');
        v1272;
        let segment;
        let res = result;
        const v1273 = path.length;
        let v1274 = v1273 > 1;
        while (v1274) {
            segment = path.shift();
            const v1275 = res[segment];
            const v1276 = !v1275;
            if (v1276) {
                const v1277 = {};
                res[segment] = v1277;
            }
            res = res[segment];
            v1274 = v1273 > 1;
        }
        segment = path.shift();
        const v1278 = exports.reach(source, sourcePath, options);
        res[segment] = v1278;
        const v1269 = ++i;
        v1268 = i < v1267;
    }
    return result;
};
exports.transform = v1279;
const v1290 = function (path, extension) {
    if (extension) {
        const v1280 = extension[0];
        const v1281 = v1280 !== '.';
        const v1282 = '.' + extension;
        if (v1281) {
            extension = v1282;
        } else {
            extension = extension;
        }
    } else {
        extension = '';
    }
    path = Path.resolve(path);
    const v1283 = Date.now();
    const v1284 = process.pid;
    const v1285 = Crypto.randomBytes(8);
    const v1286 = v1285.toString('hex');
    const v1287 = [
        v1283,
        v1284,
        v1286
    ];
    const v1288 = v1287.join('-');
    const name = v1288 + extension;
    const v1289 = Path.join(path, name);
    return v1289;
};
exports.uniqueFilename = v1290;
const v1296 = function (...args) {
    try {
        const v1291 = JSON.stringify;
        const v1292 = v1291.apply(null, args);
        return v1292;
    } catch (err) {
        const v1293 = err.message;
        const v1294 = '[Cannot display object: ' + v1293;
        const v1295 = v1294 + ']';
        return v1295;
    }
};
exports.stringify = v1296;
const v1301 = function (source) {
    const target = {};
    const keys = Object.keys(source);
    let i = 0;
    const v1297 = keys.length;
    let v1298 = i < v1297;
    while (v1298) {
        const key = keys[i];
        const v1300 = source[key];
        target[key] = v1300;
        const v1299 = ++i;
        v1298 = i < v1297;
    }
    return target;
};
exports.shallow = v1301;
const v1305 = function (timeout) {
    const v1303 = resolve => {
        const v1302 = setTimeout(resolve, timeout);
        return v1302;
    };
    const v1304 = new Promise(v1303);
    return v1304;
};
exports.wait = v1305;
const v1308 = function () {
    const v1306 = exports.ignore;
    const v1307 = new Promise(v1306);
    return v1307;
};
exports.block = v1308;
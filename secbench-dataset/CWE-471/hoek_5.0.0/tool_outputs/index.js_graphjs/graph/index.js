'use strict';
const Crypto = require('crypto');
const Path = require('path');
const Util = require('util');
const Escape = require('./escape');
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
const v730 = function (target, source, isNullOverride, isMergeArrays) {
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
            const v719 = Buffer.isBuffer(value);
            const v720 = v718 || v719;
            const v721 = value instanceof RegExp;
            const v722 = v720 || v721;
            if (v722) {
                const v723 = exports.clone(value);
                target[key] = v723;
            } else {
                const v724 = target[key];
                const v725 = exports.merge(v724, value, isNullOverride, isMergeArrays);
                v725;
            }
        } else {
            const v726 = value !== null;
            const v727 = value !== undefined;
            const v728 = v726 && v727;
            if (v728) {
                target[key] = value;
            } else {
                const v729 = isNullOverride !== false;
                if (v729) {
                    target[key] = value;
                }
            }
        }
        const v702 = ++i;
        v701 = i < v700;
    }
    return target;
};
exports.merge = v730;
const v746 = function (defaults, options, isNullOverride) {
    const v731 = typeof defaults;
    const v732 = v731 === 'object';
    const v733 = defaults && v732;
    const v734 = exports.assert(v733, 'Invalid defaults value: must be an object');
    v734;
    const v735 = !options;
    const v736 = options === true;
    const v737 = v735 || v736;
    const v738 = typeof options;
    const v739 = v738 === 'object';
    const v740 = v737 || v739;
    const v741 = exports.assert(v740, 'Invalid options value: must be true, falsy or an object');
    v741;
    const v742 = !options;
    if (v742) {
        return null;
    }
    const copy = exports.clone(defaults);
    const v743 = options === true;
    if (v743) {
        return copy;
    }
    const v744 = isNullOverride === true;
    const v745 = exports.merge(copy, options, v744, false);
    return v745;
};
exports.applyToDefaults = v746;
const v752 = function (source, keys) {
    const v747 = !source;
    const v748 = typeof source;
    const v749 = v748 !== 'object';
    const v750 = v747 || v749;
    if (v750) {
        return source;
    }
    const storage = internals.store(source, keys);
    const copy = exports.clone(source);
    const v751 = internals.restore(copy, source, storage);
    v751;
    return copy;
};
exports.cloneWithShallow = v752;
const v758 = function (source, keys) {
    const storage = {};
    let i = 0;
    const v753 = keys.length;
    let v754 = i < v753;
    while (v754) {
        const key = keys[i];
        const value = exports.reach(source, key);
        const v756 = value !== undefined;
        if (v756) {
            storage[key] = value;
            const v757 = internals.reachSet(source, key, undefined);
            v757;
        }
        const v755 = ++i;
        v754 = i < v753;
    }
    return storage;
};
internals.store = v758;
const v766 = function (copy, source, storage) {
    const keys = Object.keys(storage);
    let i = 0;
    const v759 = keys.length;
    let v760 = i < v759;
    while (v760) {
        const key = keys[i];
        const v762 = storage[key];
        const v763 = internals.reachSet(copy, key, v762);
        v763;
        const v764 = storage[key];
        const v765 = internals.reachSet(source, key, v764);
        v765;
        const v761 = ++i;
        v760 = i < v759;
    }
};
internals.restore = v766;
const v773 = function (obj, key, value) {
    const path = key.split('.');
    let ref = obj;
    let i = 0;
    const v767 = path.length;
    let v768 = i < v767;
    while (v768) {
        const segment = path[i];
        const v770 = i + 1;
        const v771 = path.length;
        const v772 = v770 === v771;
        if (v772) {
            ref[segment] = value;
        }
        ref = ref[segment];
        const v769 = ++i;
        v768 = i < v767;
    }
};
internals.reachSet = v773;
const v792 = function (defaults, options, keys) {
    const v774 = typeof defaults;
    const v775 = v774 === 'object';
    const v776 = defaults && v775;
    const v777 = exports.assert(v776, 'Invalid defaults value: must be an object');
    v777;
    const v778 = !options;
    const v779 = options === true;
    const v780 = v778 || v779;
    const v781 = typeof options;
    const v782 = v781 === 'object';
    const v783 = v780 || v782;
    const v784 = exports.assert(v783, 'Invalid options value: must be true, falsy or an object');
    v784;
    const v785 = Array.isArray(keys);
    const v786 = keys && v785;
    const v787 = exports.assert(v786, 'Invalid keys');
    v787;
    const v788 = !options;
    if (v788) {
        return null;
    }
    const copy = exports.cloneWithShallow(defaults, keys);
    const v789 = options === true;
    if (v789) {
        return copy;
    }
    const storage = internals.store(options, keys);
    const v790 = exports.merge(copy, options, false, false);
    v790;
    const v791 = internals.restore(copy, options, storage);
    v791;
    return copy;
};
exports.applyToDefaultsWithShallow = v792;
const v885 = function (obj, ref, options, seen) {
    const v793 = { prototype: true };
    options = options || v793;
    const v794 = typeof obj;
    const type = v794;
    const v795 = typeof ref;
    const v796 = type !== v795;
    if (v796) {
        return false;
    }
    const v797 = type !== 'object';
    const v798 = obj === null;
    const v799 = v797 || v798;
    const v800 = ref === null;
    const v801 = v799 || v800;
    if (v801) {
        const v802 = obj === ref;
        if (v802) {
            const v803 = obj !== 0;
            const v804 = 1 / obj;
            const v805 = 1 / ref;
            const v806 = v804 === v805;
            const v807 = v803 || v806;
            return v807;
        }
        const v808 = obj !== obj;
        const v809 = ref !== ref;
        const v810 = v808 && v809;
        return v810;
    }
    const v811 = [];
    seen = seen || v811;
    const v812 = seen.indexOf(obj);
    const v813 = -1;
    const v814 = v812 !== v813;
    if (v814) {
        return true;
    }
    const v815 = seen.push(obj);
    v815;
    const v816 = Array.isArray(obj);
    if (v816) {
        const v817 = Array.isArray(ref);
        const v818 = !v817;
        if (v818) {
            return false;
        }
        const v819 = options.part;
        const v820 = !v819;
        const v821 = obj.length;
        const v822 = ref.length;
        const v823 = v821 !== v822;
        const v824 = v820 && v823;
        if (v824) {
            return false;
        }
        let i = 0;
        const v825 = obj.length;
        let v826 = i < v825;
        while (v826) {
            const v828 = options.part;
            if (v828) {
                let found = false;
                let j = 0;
                const v829 = ref.length;
                let v830 = j < v829;
                while (v830) {
                    const v832 = obj[i];
                    const v833 = ref[j];
                    const v834 = exports.deepEqual(v832, v833, options);
                    if (v834) {
                        found = true;
                        break;
                    }
                    const v831 = ++j;
                    v830 = j < v829;
                }
                return found;
            }
            const v835 = obj[i];
            const v836 = ref[i];
            const v837 = exports.deepEqual(v835, v836, options);
            const v838 = !v837;
            if (v838) {
                return false;
            }
            const v827 = ++i;
            v826 = i < v825;
        }
        return true;
    }
    const v839 = Buffer.isBuffer(obj);
    if (v839) {
        const v840 = Buffer.isBuffer(ref);
        const v841 = !v840;
        if (v841) {
            return false;
        }
        const v842 = obj.length;
        const v843 = ref.length;
        const v844 = v842 !== v843;
        if (v844) {
            return false;
        }
        let i = 0;
        const v845 = obj.length;
        let v846 = i < v845;
        while (v846) {
            const v848 = obj[i];
            const v849 = ref[i];
            const v850 = v848 !== v849;
            if (v850) {
                return false;
            }
            const v847 = ++i;
            v846 = i < v845;
        }
        return true;
    }
    const v851 = obj instanceof Date;
    if (v851) {
        const v852 = ref instanceof Date;
        const v853 = obj.getTime();
        const v854 = ref.getTime();
        const v855 = v853 === v854;
        const v856 = v852 && v855;
        return v856;
    }
    const v857 = obj instanceof RegExp;
    if (v857) {
        const v858 = ref instanceof RegExp;
        const v859 = obj.toString();
        const v860 = ref.toString();
        const v861 = v859 === v860;
        const v862 = v858 && v861;
        return v862;
    }
    const v863 = options.prototype;
    if (v863) {
        const v864 = Object.getPrototypeOf(obj);
        const v865 = Object.getPrototypeOf(ref);
        const v866 = v864 !== v865;
        if (v866) {
            return false;
        }
    }
    const keys = Object.getOwnPropertyNames(obj);
    const v867 = options.part;
    const v868 = !v867;
    const v869 = keys.length;
    const v870 = Object.getOwnPropertyNames(ref);
    const v871 = v870.length;
    const v872 = v869 !== v871;
    const v873 = v868 && v872;
    if (v873) {
        return false;
    }
    let i = 0;
    const v874 = keys.length;
    let v875 = i < v874;
    while (v875) {
        const key = keys[i];
        const descriptor = Object.getOwnPropertyDescriptor(obj, key);
        const v877 = descriptor.get;
        if (v877) {
            const v878 = Object.getOwnPropertyDescriptor(ref, key);
            const v879 = exports.deepEqual(descriptor, v878, options, seen);
            const v880 = !v879;
            if (v880) {
                return false;
            }
        } else {
            const v881 = obj[key];
            const v882 = ref[key];
            const v883 = exports.deepEqual(v881, v882, options, seen);
            const v884 = !v883;
            if (v884) {
                return false;
            }
        }
        const v876 = ++i;
        v875 = i < v874;
    }
    return true;
};
exports.deepEqual = v885;
const v893 = (array, key) => {
    let result;
    if (key) {
        result = [];
        const index = new Set();
        const v890 = item => {
            const identifier = item[key];
            const v886 = index.has(identifier);
            const v887 = !v886;
            if (v887) {
                const v888 = index.add(identifier);
                v888;
                const v889 = result.push(item);
                v889;
            }
        };
        const v891 = array.forEach(v890);
        v891;
    } else {
        const v892 = new Set(array);
        result = Array.from(v892);
    }
    return result;
};
exports.unique = v893;
const v903 = function (array, key) {
    const v894 = !array;
    if (v894) {
        return null;
    }
    const obj = {};
    let i = 0;
    const v895 = array.length;
    let v896 = i < v895;
    while (v896) {
        if (key) {
            const v898 = array[i];
            const v899 = v898[key];
            if (v899) {
                const v900 = array[i];
                const v901 = v900[key];
                obj[v901] = true;
            }
        } else {
            const v902 = array[i];
            obj[v902] = true;
        }
        const v897 = ++i;
        v896 = i < v895;
    }
    return obj;
};
exports.mapToObject = v903;
const v924 = function (array1, array2, justFirst) {
    const v904 = !array1;
    const v905 = !array2;
    const v906 = v904 || v905;
    if (v906) {
        const v907 = [];
        return v907;
    }
    const common = [];
    let hash;
    const v908 = Array.isArray(array1);
    const v909 = exports.mapToObject(array1);
    if (v908) {
        hash = v909;
    } else {
        hash = array1;
    }
    const found = {};
    let i = 0;
    const v910 = array2.length;
    let v911 = i < v910;
    while (v911) {
        const v913 = array2[i];
        const v914 = hash[v913];
        const v915 = array2[i];
        const v916 = found[v915];
        const v917 = !v916;
        const v918 = v914 && v917;
        if (v918) {
            if (justFirst) {
                const v919 = array2[i];
                return v919;
            }
            const v920 = array2[i];
            const v921 = common.push(v920);
            v921;
            const v922 = array2[i];
            found[v922] = true;
        }
        const v912 = ++i;
        v911 = i < v910;
    }
    let v923;
    if (justFirst) {
        v923 = null;
    } else {
        v923 = common;
    }
    return v923;
};
exports.intersect = v924;
const v1024 = function (ref, values, options) {
    let valuePairs = null;
    const v925 = typeof ref;
    const v926 = v925 === 'object';
    const v927 = typeof values;
    const v928 = v927 === 'object';
    const v929 = v926 && v928;
    const v930 = Array.isArray(ref);
    const v931 = !v930;
    const v932 = v929 && v931;
    const v933 = Array.isArray(values);
    const v934 = !v933;
    const v935 = v932 && v934;
    if (v935) {
        valuePairs = values;
        values = Object.keys(values);
    } else {
        const v936 = [];
        values = v936.concat(values);
    }
    const v937 = {};
    options = options || v937;
    const v938 = typeof ref;
    const v939 = v938 === 'string';
    const v940 = typeof ref;
    const v941 = v940 === 'object';
    const v942 = v939 || v941;
    const v943 = exports.assert(v942, 'Reference must be string or an object');
    v943;
    const v944 = values.length;
    const v945 = exports.assert(v944, 'Values array cannot be empty');
    v945;
    let compare;
    let compareFlags;
    const v946 = options.deep;
    if (v946) {
        compare = exports.deepEqual;
        const hasOnly = options.hasOwnProperty('only');
        const hasPart = options.hasOwnProperty('part');
        const v947 = options.only;
        const v948 = options.part;
        const v949 = !v948;
        let v950;
        if (hasPart) {
            v950 = v949;
        } else {
            v950 = false;
        }
        let v951;
        if (hasOnly) {
            v951 = v947;
        } else {
            v951 = v950;
        }
        const v952 = options.only;
        const v953 = !v952;
        const v954 = options.part;
        let v955;
        if (hasPart) {
            v955 = v954;
        } else {
            v955 = true;
        }
        let v956;
        if (hasOnly) {
            v956 = v953;
        } else {
            v956 = v955;
        }
        compareFlags.prototype = v951;
        compareFlags.part = v956;
        compareFlags = {};
        compareFlags = {};
    } else {
        const v958 = (a, b) => {
            const v957 = a === b;
            return v957;
        };
        compare = v958;
    }
    let misses = false;
    const v959 = values.length;
    const matches = new Array(v959);
    let i = 0;
    const v960 = matches.length;
    let v961 = i < v960;
    while (v961) {
        matches[i] = 0;
        const v962 = ++i;
        v961 = i < v960;
    }
    const v963 = typeof ref;
    const v964 = v963 === 'string';
    if (v964) {
        let pattern = '(';
        let i = 0;
        const v965 = values.length;
        let v966 = i < v965;
        while (v966) {
            const value = values[i];
            const v968 = typeof value;
            const v969 = v968 === 'string';
            const v970 = exports.assert(v969, 'Cannot compare string reference to non-string value');
            v970;
            let v971;
            if (i) {
                v971 = '|';
            } else {
                v971 = '';
            }
            const v972 = exports.escapeRegex(value);
            pattern += v971 + v972;
            const v967 = ++i;
            v966 = i < v965;
        }
        const v973 = pattern + ')';
        const regex = new RegExp(v973, 'g');
        const v976 = ($0, $1) => {
            const index = values.indexOf($1);
            const v974 = matches[index];
            const v975 = ++v974;
            v975;
            return '';
        };
        const leftovers = ref.replace(regex, v976);
        const v977 = !leftovers;
        const v978 = !v977;
        misses = v978;
    } else {
        const v979 = Array.isArray(ref);
        if (v979) {
            let i = 0;
            const v980 = ref.length;
            let v981 = i < v980;
            while (v981) {
                let matched = false;
                let j = 0;
                const v983 = values.length;
                const v984 = j < v983;
                const v985 = matched === false;
                let v986 = v984 && v985;
                while (v986) {
                    const v988 = values[j];
                    const v989 = ref[i];
                    const v990 = compare(v988, v989, compareFlags);
                    matched = v990 && j;
                    const v987 = ++j;
                    v986 = v984 && v985;
                }
                const v991 = matched !== false;
                if (v991) {
                    const v992 = matches[matched];
                    const v993 = ++v992;
                    v993;
                } else {
                    misses = true;
                }
                const v982 = ++i;
                v981 = i < v980;
            }
        } else {
            const keys = Object.getOwnPropertyNames(ref);
            let i = 0;
            const v994 = keys.length;
            let v995 = i < v994;
            while (v995) {
                const key = keys[i];
                const pos = values.indexOf(key);
                const v997 = -1;
                const v998 = pos !== v997;
                if (v998) {
                    const v999 = valuePairs[key];
                    const v1000 = ref[key];
                    const v1001 = compare(v999, v1000, compareFlags);
                    const v1002 = !v1001;
                    const v1003 = valuePairs && v1002;
                    if (v1003) {
                        return false;
                    }
                    const v1004 = matches[pos];
                    const v1005 = ++v1004;
                    v1005;
                } else {
                    misses = true;
                }
                const v996 = ++i;
                v995 = i < v994;
            }
        }
    }
    let result = false;
    let i = 0;
    const v1006 = matches.length;
    let v1007 = i < v1006;
    while (v1007) {
        const v1009 = matches[i];
        const v1010 = !v1009;
        const v1011 = !v1010;
        result = result || v1011;
        const v1012 = options.once;
        const v1013 = matches[i];
        const v1014 = v1013 > 1;
        const v1015 = v1012 && v1014;
        const v1016 = options.part;
        const v1017 = !v1016;
        const v1018 = matches[i];
        const v1019 = !v1018;
        const v1020 = v1017 && v1019;
        const v1021 = v1015 || v1020;
        if (v1021) {
            return false;
        }
        const v1008 = ++i;
        v1007 = i < v1006;
    }
    const v1022 = options.only;
    const v1023 = v1022 && misses;
    if (v1023) {
        return false;
    }
    return result;
};
exports.contain = v1024;
const v1035 = function (array, target) {
    const v1025 = [];
    const result = target || v1025;
    let i = 0;
    const v1026 = array.length;
    let v1027 = i < v1026;
    while (v1027) {
        const v1029 = array[i];
        const v1030 = Array.isArray(v1029);
        if (v1030) {
            const v1031 = array[i];
            const v1032 = exports.flatten(v1031, result);
            v1032;
        } else {
            const v1033 = array[i];
            const v1034 = result.push(v1033);
            v1034;
        }
        const v1028 = ++i;
        v1027 = i < v1026;
    }
    return result;
};
exports.flatten = v1035;
const v1088 = function (obj, chain, options) {
    const v1036 = chain === false;
    const v1037 = chain === null;
    const v1038 = v1036 || v1037;
    const v1039 = typeof chain;
    const v1040 = v1039 === 'undefined';
    const v1041 = v1038 || v1040;
    if (v1041) {
        return obj;
    }
    const v1042 = {};
    options = options || v1042;
    const v1043 = typeof options;
    const v1044 = v1043 === 'string';
    if (v1044) {
        options.separator = options;
        options = {};
        options = {};
    }
    const v1045 = options.separator;
    const v1046 = v1045 || '.';
    const path = chain.split(v1046);
    let ref = obj;
    let i = 0;
    const v1047 = path.length;
    let v1048 = i < v1047;
    while (v1048) {
        let key = path[i];
        const v1050 = key[0];
        const v1051 = v1050 === '-';
        const v1052 = Array.isArray(ref);
        const v1053 = v1051 && v1052;
        if (v1053) {
            const v1054 = key.length;
            key = key.slice(1, v1054);
            const v1055 = ref.length;
            key = v1055 - key;
        }
        const v1056 = !ref;
        const v1057 = typeof ref;
        const v1058 = v1057 === 'object';
        const v1059 = typeof ref;
        const v1060 = v1059 === 'function';
        const v1061 = v1058 || v1060;
        const v1062 = key in ref;
        const v1063 = v1061 && v1062;
        const v1064 = !v1063;
        const v1065 = v1056 || v1064;
        const v1066 = typeof ref;
        const v1067 = v1066 !== 'object';
        const v1068 = options.functions;
        const v1069 = v1068 === false;
        const v1070 = v1067 && v1069;
        const v1071 = v1065 || v1070;
        if (v1071) {
            const v1072 = options.strict;
            const v1073 = !v1072;
            const v1074 = i + 1;
            const v1075 = path.length;
            const v1076 = v1074 === v1075;
            const v1077 = v1073 || v1076;
            const v1078 = exports.assert(v1077, 'Missing segment', key, 'in reach path ', chain);
            v1078;
            const v1079 = typeof ref;
            const v1080 = v1079 === 'object';
            const v1081 = options.functions;
            const v1082 = v1081 === true;
            const v1083 = v1080 || v1082;
            const v1084 = typeof ref;
            const v1085 = v1084 !== 'function';
            const v1086 = v1083 || v1085;
            const v1087 = exports.assert(v1086, 'Invalid segment', key, 'in reach path ', chain);
            v1087;
            ref = options.default;
            break;
        }
        ref = ref[key];
        const v1049 = ++i;
        v1048 = i < v1047;
    }
    return ref;
};
exports.reach = v1088;
const v1095 = function (obj, template, options) {
    const v1093 = ($0, chain) => {
        const value = exports.reach(obj, chain, options);
        const v1089 = value === undefined;
        const v1090 = value === null;
        const v1091 = v1089 || v1090;
        let v1092;
        if (v1091) {
            v1092 = '';
        } else {
            v1092 = value;
        }
        return v1092;
    };
    const v1094 = template.replace(/{([^}]+)}/g, v1093);
    return v1094;
};
exports.reachTemplate = v1095;
const v1106 = function (stack) {
    const trace = [];
    let i = 0;
    const v1096 = stack.length;
    let v1097 = i < v1096;
    while (v1097) {
        const item = stack[i];
        const v1099 = item.getFileName();
        const v1100 = item.getLineNumber();
        const v1101 = item.getColumnNumber();
        const v1102 = item.getFunctionName();
        const v1103 = item.isConstructor();
        const v1104 = [
            v1099,
            v1100,
            v1101,
            v1102,
            v1103
        ];
        const v1105 = trace.push(v1104);
        v1105;
        const v1098 = ++i;
        v1097 = i < v1096;
    }
    return trace;
};
exports.formatStack = v1106;
const v1125 = function (trace) {
    const display = [];
    let i = 0;
    const v1107 = trace.length;
    let v1108 = i < v1107;
    while (v1108) {
        const row = trace[i];
        const v1110 = row[4];
        let v1111;
        if (v1110) {
            v1111 = 'new ';
        } else {
            v1111 = '';
        }
        const v1112 = row[3];
        const v1113 = v1111 + v1112;
        const v1114 = v1113 + ' (';
        const v1115 = row[0];
        const v1116 = v1114 + v1115;
        const v1117 = v1116 + ':';
        const v1118 = row[1];
        const v1119 = v1117 + v1118;
        const v1120 = v1119 + ':';
        const v1121 = row[2];
        const v1122 = v1120 + v1121;
        const v1123 = v1122 + ')';
        const v1124 = display.push(v1123);
        v1124;
        const v1109 = ++i;
        v1108 = i < v1107;
    }
    return display;
};
exports.formatTrace = v1125;
const v1130 = function (slice) {
    const v8 = Error.prepareStackTrace;
    const v1126 = function (_, stack) {
        return stack;
    };
    Error.prepareStackTrace = v1126;
    const capture = {};
    const v1127 = Error.captureStackTrace(capture, this);
    v1127;
    const stack = capture.stack;
    Error.prepareStackTrace = v8;
    const trace = exports.formatStack(stack);
    const v1128 = 1 + slice;
    const v1129 = trace.slice(v1128);
    return v1129;
};
exports.callStack = v1130;
const v1135 = function (slice) {
    const v1131 = slice === undefined;
    const v1132 = slice + 1;
    let v1133;
    if (v1131) {
        v1133 = 1;
    } else {
        v1133 = v1132;
    }
    const trace = exports.callStack(v1133);
    const v1134 = exports.formatTrace(trace);
    return v1134;
};
exports.displayStack = v1135;
exports.abortThrow = false;
const v1151 = function (message, hideStack) {
    const v1136 = process.env;
    const v1137 = v1136.NODE_ENV;
    const v1138 = v1137 === 'test';
    const v1139 = exports.abortThrow;
    const v1140 = v1139 === true;
    const v1141 = v1138 || v1140;
    if (v1141) {
        const v1142 = message || 'Unknown error';
        const v1143 = new Error(v1142);
        throw v1143;
    }
    let stack = '';
    const v1144 = !hideStack;
    if (v1144) {
        const v1145 = exports.displayStack(1);
        stack = v1145.join('\n\t');
    }
    const v1146 = 'ABORT: ' + message;
    const v1147 = v1146 + '\n\t';
    const v1148 = v1147 + stack;
    const v1149 = console.log(v1148);
    v1149;
    const v1150 = process.exit(1);
    v1150;
};
exports.abort = v1151;
const v1172 = function (condition, ...args) {
    if (condition) {
        return;
    }
    const v1152 = args.length;
    const v1153 = v1152 === 1;
    const v1154 = args[0];
    const v1155 = v1154 instanceof Error;
    const v1156 = v1153 && v1155;
    if (v1156) {
        const v1157 = args[0];
        throw v1157;
    }
    const v1159 = arg => {
        const v1158 = arg !== '';
        return v1158;
    };
    const v1160 = args.filter(v1159);
    const v1168 = arg => {
        const v1161 = typeof arg;
        const v1162 = v1161 === 'string';
        const v1163 = arg instanceof Error;
        const v1164 = arg.message;
        const v1165 = exports.stringify(arg);
        let v1166;
        if (v1163) {
            v1166 = v1164;
        } else {
            v1166 = v1165;
        }
        let v1167;
        if (v1162) {
            v1167 = arg;
        } else {
            v1167 = v1166;
        }
        return v1167;
    };
    const msgs = v1160.map(v1168);
    const v1169 = msgs.join(' ');
    const v1170 = v1169 || 'Unknown error';
    const v1171 = new Error(v1170);
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
        return v1211;
    }
    const v1212 = /^[\w\-]*$/.test(value);
    const v1213 = !v1212;
    if (v1213) {
        const v1214 = new Error('Invalid character');
        return v1214;
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
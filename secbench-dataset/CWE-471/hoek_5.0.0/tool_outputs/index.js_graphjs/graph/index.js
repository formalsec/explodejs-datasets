'use strict';
const Crypto = require('crypto');
const Path = require('path');
const Util = require('util');
const Escape = function () {
};
const internals = {};
const v675 = function (obj, seen) {
    const v651 = typeof obj;
    const v652 = v651 !== 'object';
    const v653 = obj === null;
    const v654 = v652 || v653;
    if (v654) {
        return obj;
    }
    const v655 = new Map();
    seen = seen || v655;
    const lookup = seen.get(obj);
    if (lookup) {
        return lookup;
    }
    let newObj;
    let cloneDeep = false;
    const v656 = Array.isArray(obj);
    const v657 = !v656;
    if (v657) {
        const v658 = Buffer.isBuffer(obj);
        if (v658) {
            newObj = new Buffer(obj);
        } else {
            const v659 = obj instanceof Date;
            if (v659) {
                const v660 = obj.getTime();
                newObj = new Date(v660);
            } else {
                const v661 = obj instanceof RegExp;
                if (v661) {
                    newObj = new RegExp(obj);
                } else {
                    const proto = Object.getPrototypeOf(obj);
                    const v662 = proto.isImmutable;
                    const v663 = proto && v662;
                    if (v663) {
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
    const v664 = seen.set(obj, newObj);
    v664;
    if (cloneDeep) {
        const keys = Object.getOwnPropertyNames(obj);
        let i = 0;
        const v665 = keys.length;
        let v666 = i < v665;
        while (v666) {
            const key = keys[i];
            const descriptor = Object.getOwnPropertyDescriptor(obj, key);
            const v668 = descriptor.get;
            const v669 = descriptor.set;
            const v670 = v668 || v669;
            const v671 = descriptor && v670;
            if (v671) {
                const v672 = Object.defineProperty(newObj, key, descriptor);
                v672;
            } else {
                const v673 = obj[key];
                const v674 = exports.clone(v673, seen);
                newObj[key] = v674;
            }
            const v667 = ++i;
            v666 = i < v665;
        }
    }
    return newObj;
};
exports.clone = v675;
const v725 = function (target, source, isNullOverride, isMergeArrays) {
    const v676 = typeof target;
    const v677 = v676 === 'object';
    const v678 = target && v677;
    const v679 = exports.assert(v678, 'Invalid target value: must be an object');
    v679;
    const v680 = source === null;
    const v681 = source === undefined;
    const v682 = v680 || v681;
    const v683 = typeof source;
    const v684 = v683 === 'object';
    const v685 = v682 || v684;
    const v686 = exports.assert(v685, 'Invalid source value: must be null, undefined, or an object');
    v686;
    const v687 = !source;
    if (v687) {
        return target;
    }
    const v688 = Array.isArray(source);
    if (v688) {
        const v689 = Array.isArray(target);
        const v690 = exports.assert(v689, 'Cannot merge array onto an object');
        v690;
        const v691 = isMergeArrays === false;
        if (v691) {
            target.length = 0;
        }
        let i = 0;
        const v692 = source.length;
        let v693 = i < v692;
        while (v693) {
            const v695 = source[i];
            const v696 = exports.clone(v695);
            const v697 = target.push(v696);
            v697;
            const v694 = ++i;
            v693 = i < v692;
        }
        return target;
    }
    const keys = Object.keys(source);
    let i = 0;
    const v698 = keys.length;
    let v699 = i < v698;
    while (v699) {
        const key = keys[i];
        const value = source[key];
        const v701 = typeof value;
        const v702 = v701 === 'object';
        const v703 = value && v702;
        if (v703) {
            const v704 = target[key];
            const v705 = !v704;
            const v706 = target[key];
            const v707 = typeof v706;
            const v708 = v707 !== 'object';
            const v709 = v705 || v708;
            const v710 = target[key];
            const v711 = Array.isArray(v710);
            const v712 = Array.isArray(value);
            const v713 = v711 !== v712;
            const v714 = v709 || v713;
            const v715 = value instanceof Date;
            const v716 = v714 || v715;
            const v717 = value instanceof RegExp;
            const v718 = v716 || v717;
            if (v718) {
                target[key] = value;
            } else {
                const v719 = target[key];
                const v720 = exports.merge(v719, value, isNullOverride, isMergeArrays);
                v720;
            }
        } else {
            const v721 = value !== null;
            const v722 = value !== undefined;
            const v723 = v721 && v722;
            if (v723) {
                target[key] = value;
            } else {
                const v724 = isNullOverride !== false;
                if (v724) {
                    target[key] = value;
                }
            }
        }
        const v700 = ++i;
        v699 = i < v698;
    }
    return target;
};
exports.merge = v725;
const v741 = function (defaults, options, isNullOverride) {
    const v726 = typeof defaults;
    const v727 = v726 === 'object';
    const v728 = defaults && v727;
    const v729 = exports.assert(v728, 'Invalid defaults value: must be an object');
    v729;
    const v730 = !options;
    const v731 = options === true;
    const v732 = v730 || v731;
    const v733 = typeof options;
    const v734 = v733 === 'object';
    const v735 = v732 || v734;
    const v736 = exports.assert(v735, 'Invalid options value: must be true, falsy or an object');
    v736;
    const v737 = !options;
    if (v737) {
        return null;
    }
    const copy = exports.clone(defaults);
    const v738 = options === true;
    if (v738) {
        return copy;
    }
    const v739 = isNullOverride === true;
    const v740 = exports.merge(copy, options, v739, false);
    return v740;
};
exports.applyToDefaults = v741;
const v747 = function (source, keys) {
    const v742 = !source;
    const v743 = typeof source;
    const v744 = v743 !== 'object';
    const v745 = v742 || v744;
    if (v745) {
        return source;
    }
    const storage = internals.store(source, keys);
    const copy = exports.clone(source);
    const v746 = internals.restore(copy, source, storage);
    v746;
    return copy;
};
exports.cloneWithShallow = v747;
const v753 = function (source, keys) {
    const storage = {};
    let i = 0;
    const v748 = keys.length;
    let v749 = i < v748;
    while (v749) {
        const key = keys[i];
        const value = exports.reach(source, key);
        const v751 = value !== undefined;
        if (v751) {
            storage[key] = value;
            const v752 = internals.reachSet(source, key, undefined);
            v752;
        }
        const v750 = ++i;
        v749 = i < v748;
    }
    return storage;
};
internals.store = v753;
const v761 = function (copy, source, storage) {
    const keys = Object.keys(storage);
    let i = 0;
    const v754 = keys.length;
    let v755 = i < v754;
    while (v755) {
        const key = keys[i];
        const v757 = storage[key];
        const v758 = internals.reachSet(copy, key, v757);
        v758;
        const v759 = storage[key];
        const v760 = internals.reachSet(source, key, v759);
        v760;
        const v756 = ++i;
        v755 = i < v754;
    }
};
internals.restore = v761;
const v768 = function (obj, key, value) {
    const path = key.split('.');
    let ref = obj;
    let i = 0;
    const v762 = path.length;
    let v763 = i < v762;
    while (v763) {
        const segment = path[i];
        const v765 = i + 1;
        const v766 = path.length;
        const v767 = v765 === v766;
        if (v767) {
            ref[segment] = value;
        }
        ref = ref[segment];
        const v764 = ++i;
        v763 = i < v762;
    }
};
internals.reachSet = v768;
const v787 = function (defaults, options, keys) {
    const v769 = typeof defaults;
    const v770 = v769 === 'object';
    const v771 = defaults && v770;
    const v772 = exports.assert(v771, 'Invalid defaults value: must be an object');
    v772;
    const v773 = !options;
    const v774 = options === true;
    const v775 = v773 || v774;
    const v776 = typeof options;
    const v777 = v776 === 'object';
    const v778 = v775 || v777;
    const v779 = exports.assert(v778, 'Invalid options value: must be true, falsy or an object');
    v779;
    const v780 = Array.isArray(keys);
    const v781 = keys && v780;
    const v782 = exports.assert(v781, 'Invalid keys');
    v782;
    const v783 = !options;
    if (v783) {
        return null;
    }
    const copy = exports.cloneWithShallow(defaults, keys);
    const v784 = options === true;
    if (v784) {
        return copy;
    }
    const storage = internals.store(options, keys);
    const v785 = exports.merge(copy, options, false, false);
    v785;
    const v786 = internals.restore(copy, options, storage);
    v786;
    return copy;
};
exports.applyToDefaultsWithShallow = v787;
const v880 = function (obj, ref, options, seen) {
    const v788 = { prototype: true };
    options = options || v788;
    const v789 = typeof obj;
    const type = v789;
    const v790 = typeof ref;
    const v791 = type !== v790;
    if (v791) {
        return false;
    }
    const v792 = type !== 'object';
    const v793 = obj === null;
    const v794 = v792 || v793;
    const v795 = ref === null;
    const v796 = v794 || v795;
    if (v796) {
        const v797 = obj === ref;
        if (v797) {
            const v798 = obj !== 0;
            const v799 = 1 / obj;
            const v800 = 1 / ref;
            const v801 = v799 === v800;
            const v802 = v798 || v801;
            return v802;
        }
        const v803 = obj !== obj;
        const v804 = ref !== ref;
        const v805 = v803 && v804;
        return v805;
    }
    const v806 = [];
    seen = seen || v806;
    const v807 = seen.indexOf(obj);
    const v808 = -1;
    const v809 = v807 !== v808;
    if (v809) {
        return true;
    }
    const v810 = seen.push(obj);
    v810;
    const v811 = Array.isArray(obj);
    if (v811) {
        const v812 = Array.isArray(ref);
        const v813 = !v812;
        if (v813) {
            return false;
        }
        const v814 = options.part;
        const v815 = !v814;
        const v816 = obj.length;
        const v817 = ref.length;
        const v818 = v816 !== v817;
        const v819 = v815 && v818;
        if (v819) {
            return false;
        }
        let i = 0;
        const v820 = obj.length;
        let v821 = i < v820;
        while (v821) {
            const v823 = options.part;
            if (v823) {
                let found = false;
                let j = 0;
                const v824 = ref.length;
                let v825 = j < v824;
                while (v825) {
                    const v827 = obj[i];
                    const v828 = ref[j];
                    const v829 = exports.deepEqual(v827, v828, options);
                    if (v829) {
                        found = true;
                        break;
                    }
                    const v826 = ++j;
                    v825 = j < v824;
                }
                return found;
            }
            const v830 = obj[i];
            const v831 = ref[i];
            const v832 = exports.deepEqual(v830, v831, options);
            const v833 = !v832;
            if (v833) {
                return false;
            }
            const v822 = ++i;
            v821 = i < v820;
        }
        return true;
    }
    const v834 = Buffer.isBuffer(obj);
    if (v834) {
        const v835 = Buffer.isBuffer(ref);
        const v836 = !v835;
        if (v836) {
            return false;
        }
        const v837 = obj.length;
        const v838 = ref.length;
        const v839 = v837 !== v838;
        if (v839) {
            return false;
        }
        let i = 0;
        const v840 = obj.length;
        let v841 = i < v840;
        while (v841) {
            const v843 = obj[i];
            const v844 = ref[i];
            const v845 = v843 !== v844;
            if (v845) {
                return false;
            }
            const v842 = ++i;
            v841 = i < v840;
        }
        return true;
    }
    const v846 = obj instanceof Date;
    if (v846) {
        const v847 = ref instanceof Date;
        const v848 = obj.getTime();
        const v849 = ref.getTime();
        const v850 = v848 === v849;
        const v851 = v847 && v850;
        return v851;
    }
    const v852 = obj instanceof RegExp;
    if (v852) {
        const v853 = ref instanceof RegExp;
        const v854 = obj.toString();
        const v855 = ref.toString();
        const v856 = v854 === v855;
        const v857 = v853 && v856;
        return v857;
    }
    const v858 = options.prototype;
    if (v858) {
        const v859 = Object.getPrototypeOf(obj);
        const v860 = Object.getPrototypeOf(ref);
        const v861 = v859 !== v860;
        if (v861) {
            return false;
        }
    }
    const keys = Object.getOwnPropertyNames(obj);
    const v862 = options.part;
    const v863 = !v862;
    const v864 = keys.length;
    const v865 = Object.getOwnPropertyNames(ref);
    const v866 = v865.length;
    const v867 = v864 !== v866;
    const v868 = v863 && v867;
    if (v868) {
        return false;
    }
    let i = 0;
    const v869 = keys.length;
    let v870 = i < v869;
    while (v870) {
        const key = keys[i];
        const descriptor = Object.getOwnPropertyDescriptor(obj, key);
        const v872 = descriptor.get;
        if (v872) {
            const v873 = Object.getOwnPropertyDescriptor(ref, key);
            const v874 = exports.deepEqual(descriptor, v873, options, seen);
            const v875 = !v874;
            if (v875) {
                return false;
            }
        } else {
            const v876 = obj[key];
            const v877 = ref[key];
            const v878 = exports.deepEqual(v876, v877, options, seen);
            const v879 = !v878;
            if (v879) {
                return false;
            }
        }
        const v871 = ++i;
        v870 = i < v869;
    }
    return true;
};
exports.deepEqual = v880;
const v888 = (array, key) => {
    let result;
    if (key) {
        result = [];
        const index = new Set();
        const v885 = item => {
            const identifier = item[key];
            const v881 = index.has(identifier);
            const v882 = !v881;
            if (v882) {
                const v883 = index.add(identifier);
                v883;
                const v884 = result.push(item);
                v884;
            }
        };
        const v886 = array.forEach(v885);
        v886;
    } else {
        const v887 = new Set(array);
        result = Array.from(v887);
    }
    return result;
};
exports.unique = v888;
const v898 = function (array, key) {
    const v889 = !array;
    if (v889) {
        return null;
    }
    const obj = {};
    let i = 0;
    const v890 = array.length;
    let v891 = i < v890;
    while (v891) {
        if (key) {
            const v893 = array[i];
            const v894 = v893[key];
            if (v894) {
                const v895 = array[i];
                const v896 = v895[key];
                obj[v896] = true;
            }
        } else {
            const v897 = array[i];
            obj[v897] = true;
        }
        const v892 = ++i;
        v891 = i < v890;
    }
    return obj;
};
exports.mapToObject = v898;
const v919 = function (array1, array2, justFirst) {
    const v899 = !array1;
    const v900 = !array2;
    const v901 = v899 || v900;
    if (v901) {
        const v902 = [];
        return v902;
    }
    const common = [];
    let hash;
    const v903 = Array.isArray(array1);
    const v904 = exports.mapToObject(array1);
    if (v903) {
        hash = v904;
    } else {
        hash = array1;
    }
    const found = {};
    let i = 0;
    const v905 = array2.length;
    let v906 = i < v905;
    while (v906) {
        const v908 = array2[i];
        const v909 = hash[v908];
        const v910 = array2[i];
        const v911 = found[v910];
        const v912 = !v911;
        const v913 = v909 && v912;
        if (v913) {
            if (justFirst) {
                const v914 = array2[i];
                return v914;
            }
            const v915 = array2[i];
            const v916 = common.push(v915);
            v916;
            const v917 = array2[i];
            found[v917] = true;
        }
        const v907 = ++i;
        v906 = i < v905;
    }
    let v918;
    if (justFirst) {
        v918 = null;
    } else {
        v918 = common;
    }
    return v918;
};
exports.intersect = v919;
const v1019 = function (ref, values, options) {
    let valuePairs = null;
    const v920 = typeof ref;
    const v921 = v920 === 'object';
    const v922 = typeof values;
    const v923 = v922 === 'object';
    const v924 = v921 && v923;
    const v925 = Array.isArray(ref);
    const v926 = !v925;
    const v927 = v924 && v926;
    const v928 = Array.isArray(values);
    const v929 = !v928;
    const v930 = v927 && v929;
    if (v930) {
        valuePairs = values;
        values = Object.keys(values);
    } else {
        const v931 = [];
        values = v931.concat(values);
    }
    const v932 = {};
    options = options || v932;
    const v933 = typeof ref;
    const v934 = v933 === 'string';
    const v935 = typeof ref;
    const v936 = v935 === 'object';
    const v937 = v934 || v936;
    const v938 = exports.assert(v937, 'Reference must be string or an object');
    v938;
    const v939 = values.length;
    const v940 = exports.assert(v939, 'Values array cannot be empty');
    v940;
    let compare;
    let compareFlags;
    const v941 = options.deep;
    if (v941) {
        compare = exports.deepEqual;
        const hasOnly = options.hasOwnProperty('only');
        const hasPart = options.hasOwnProperty('part');
        const v942 = options.only;
        const v943 = options.part;
        const v944 = !v943;
        let v945;
        if (hasPart) {
            v945 = v944;
        } else {
            v945 = false;
        }
        let v946;
        if (hasOnly) {
            v946 = v942;
        } else {
            v946 = v945;
        }
        const v947 = options.only;
        const v948 = !v947;
        const v949 = options.part;
        let v950;
        if (hasPart) {
            v950 = v949;
        } else {
            v950 = true;
        }
        let v951;
        if (hasOnly) {
            v951 = v948;
        } else {
            v951 = v950;
        }
        compareFlags.prototype = v946;
        compareFlags.part = v951;
        compareFlags = {};
        compareFlags = {};
    } else {
        const v953 = (a, b) => {
            const v952 = a === b;
            return v952;
        };
        compare = v953;
    }
    let misses = false;
    const v954 = values.length;
    const matches = new Array(v954);
    let i = 0;
    const v955 = matches.length;
    let v956 = i < v955;
    while (v956) {
        matches[i] = 0;
        const v957 = ++i;
        v956 = i < v955;
    }
    const v958 = typeof ref;
    const v959 = v958 === 'string';
    if (v959) {
        let pattern = '(';
        let i = 0;
        const v960 = values.length;
        let v961 = i < v960;
        while (v961) {
            const value = values[i];
            const v963 = typeof value;
            const v964 = v963 === 'string';
            const v965 = exports.assert(v964, 'Cannot compare string reference to non-string value');
            v965;
            let v966;
            if (i) {
                v966 = '|';
            } else {
                v966 = '';
            }
            const v967 = exports.escapeRegex(value);
            pattern += v966 + v967;
            const v962 = ++i;
            v961 = i < v960;
        }
        const v968 = pattern + ')';
        const regex = new RegExp(v968, 'g');
        const v971 = ($0, $1) => {
            const index = values.indexOf($1);
            const v969 = matches[index];
            const v970 = ++v969;
            v970;
            return '';
        };
        const leftovers = ref.replace(regex, v971);
        const v972 = !leftovers;
        const v973 = !v972;
        misses = v973;
    } else {
        const v974 = Array.isArray(ref);
        if (v974) {
            let i = 0;
            const v975 = ref.length;
            let v976 = i < v975;
            while (v976) {
                let matched = false;
                let j = 0;
                const v978 = values.length;
                const v979 = j < v978;
                const v980 = matched === false;
                let v981 = v979 && v980;
                while (v981) {
                    const v983 = values[j];
                    const v984 = ref[i];
                    const v985 = compare(v983, v984, compareFlags);
                    matched = v985 && j;
                    const v982 = ++j;
                    v981 = v979 && v980;
                }
                const v986 = matched !== false;
                if (v986) {
                    const v987 = matches[matched];
                    const v988 = ++v987;
                    v988;
                } else {
                    misses = true;
                }
                const v977 = ++i;
                v976 = i < v975;
            }
        } else {
            const keys = Object.getOwnPropertyNames(ref);
            let i = 0;
            const v989 = keys.length;
            let v990 = i < v989;
            while (v990) {
                const key = keys[i];
                const pos = values.indexOf(key);
                const v992 = -1;
                const v993 = pos !== v992;
                if (v993) {
                    const v994 = valuePairs[key];
                    const v995 = ref[key];
                    const v996 = compare(v994, v995, compareFlags);
                    const v997 = !v996;
                    const v998 = valuePairs && v997;
                    if (v998) {
                        return false;
                    }
                    const v999 = matches[pos];
                    const v1000 = ++v999;
                    v1000;
                } else {
                    misses = true;
                }
                const v991 = ++i;
                v990 = i < v989;
            }
        }
    }
    let result = false;
    let i = 0;
    const v1001 = matches.length;
    let v1002 = i < v1001;
    while (v1002) {
        const v1004 = matches[i];
        const v1005 = !v1004;
        const v1006 = !v1005;
        result = result || v1006;
        const v1007 = options.once;
        const v1008 = matches[i];
        const v1009 = v1008 > 1;
        const v1010 = v1007 && v1009;
        const v1011 = options.part;
        const v1012 = !v1011;
        const v1013 = matches[i];
        const v1014 = !v1013;
        const v1015 = v1012 && v1014;
        const v1016 = v1010 || v1015;
        if (v1016) {
            return false;
        }
        const v1003 = ++i;
        v1002 = i < v1001;
    }
    const v1017 = options.only;
    const v1018 = v1017 && misses;
    if (v1018) {
        return false;
    }
    return result;
};
exports.contain = v1019;
const v1030 = function (array, target) {
    const v1020 = [];
    const result = target || v1020;
    let i = 0;
    const v1021 = array.length;
    let v1022 = i < v1021;
    while (v1022) {
        const v1024 = array[i];
        const v1025 = Array.isArray(v1024);
        if (v1025) {
            const v1026 = array[i];
            const v1027 = exports.flatten(v1026, result);
            v1027;
        } else {
            const v1028 = array[i];
            const v1029 = result.push(v1028);
            v1029;
        }
        const v1023 = ++i;
        v1022 = i < v1021;
    }
    return result;
};
exports.flatten = v1030;
const v1083 = function (obj, chain, options) {
    const v1031 = chain === false;
    const v1032 = chain === null;
    const v1033 = v1031 || v1032;
    const v1034 = typeof chain;
    const v1035 = v1034 === 'undefined';
    const v1036 = v1033 || v1035;
    if (v1036) {
        return obj;
    }
    const v1037 = {};
    options = options || v1037;
    const v1038 = typeof options;
    const v1039 = v1038 === 'string';
    if (v1039) {
        options.separator = options;
        options = {};
        options = {};
    }
    const v1040 = options.separator;
    const v1041 = v1040 || '.';
    const path = chain.split(v1041);
    let ref = obj;
    let i = 0;
    const v1042 = path.length;
    let v1043 = i < v1042;
    while (v1043) {
        let key = path[i];
        const v1045 = key[0];
        const v1046 = v1045 === '-';
        const v1047 = Array.isArray(ref);
        const v1048 = v1046 && v1047;
        if (v1048) {
            const v1049 = key.length;
            key = key.slice(1, v1049);
            const v1050 = ref.length;
            key = v1050 - key;
        }
        const v1051 = !ref;
        const v1052 = typeof ref;
        const v1053 = v1052 === 'object';
        const v1054 = typeof ref;
        const v1055 = v1054 === 'function';
        const v1056 = v1053 || v1055;
        const v1057 = key in ref;
        const v1058 = v1056 && v1057;
        const v1059 = !v1058;
        const v1060 = v1051 || v1059;
        const v1061 = typeof ref;
        const v1062 = v1061 !== 'object';
        const v1063 = options.functions;
        const v1064 = v1063 === false;
        const v1065 = v1062 && v1064;
        const v1066 = v1060 || v1065;
        if (v1066) {
            const v1067 = options.strict;
            const v1068 = !v1067;
            const v1069 = i + 1;
            const v1070 = path.length;
            const v1071 = v1069 === v1070;
            const v1072 = v1068 || v1071;
            const v1073 = exports.assert(v1072, 'Missing segment', key, 'in reach path ', chain);
            v1073;
            const v1074 = typeof ref;
            const v1075 = v1074 === 'object';
            const v1076 = options.functions;
            const v1077 = v1076 === true;
            const v1078 = v1075 || v1077;
            const v1079 = typeof ref;
            const v1080 = v1079 !== 'function';
            const v1081 = v1078 || v1080;
            const v1082 = exports.assert(v1081, 'Invalid segment', key, 'in reach path ', chain);
            v1082;
            ref = options.default;
            break;
        }
        ref = ref[key];
        const v1044 = ++i;
        v1043 = i < v1042;
    }
    return ref;
};
exports.reach = v1083;
const v1090 = function (obj, template, options) {
    const v1088 = ($0, chain) => {
        const value = exports.reach(obj, chain, options);
        const v1084 = value === undefined;
        const v1085 = value === null;
        const v1086 = v1084 || v1085;
        let v1087;
        if (v1086) {
            v1087 = '';
        } else {
            v1087 = value;
        }
        return v1087;
    };
    const v1089 = template.replace(/{([^}]+)}/g, v1088);
    return v1089;
};
exports.reachTemplate = v1090;
const v1101 = function (stack) {
    const trace = [];
    let i = 0;
    const v1091 = stack.length;
    let v1092 = i < v1091;
    while (v1092) {
        const item = stack[i];
        const v1094 = item.getFileName();
        const v1095 = item.getLineNumber();
        const v1096 = item.getColumnNumber();
        const v1097 = item.getFunctionName();
        const v1098 = item.isConstructor();
        const v1099 = [
            v1094,
            v1095,
            v1096,
            v1097,
            v1098
        ];
        const v1100 = trace.push(v1099);
        v1100;
        const v1093 = ++i;
        v1092 = i < v1091;
    }
    return trace;
};
exports.formatStack = v1101;
const v1120 = function (trace) {
    const display = [];
    let i = 0;
    const v1102 = trace.length;
    let v1103 = i < v1102;
    while (v1103) {
        const row = trace[i];
        const v1105 = row[4];
        let v1106;
        if (v1105) {
            v1106 = 'new ';
        } else {
            v1106 = '';
        }
        const v1107 = row[3];
        const v1108 = v1106 + v1107;
        const v1109 = v1108 + ' (';
        const v1110 = row[0];
        const v1111 = v1109 + v1110;
        const v1112 = v1111 + ':';
        const v1113 = row[1];
        const v1114 = v1112 + v1113;
        const v1115 = v1114 + ':';
        const v1116 = row[2];
        const v1117 = v1115 + v1116;
        const v1118 = v1117 + ')';
        const v1119 = display.push(v1118);
        v1119;
        const v1104 = ++i;
        v1103 = i < v1102;
    }
    return display;
};
exports.formatTrace = v1120;
const v1125 = function (slice) {
    const v8 = Error.prepareStackTrace;
    const v1121 = function (_, stack) {
        return stack;
    };
    Error.prepareStackTrace = v1121;
    const capture = {};
    const v1122 = Error.captureStackTrace(capture, this);
    v1122;
    const stack = capture.stack;
    Error.prepareStackTrace = v8;
    const trace = exports.formatStack(stack);
    const v1123 = 1 + slice;
    const v1124 = trace.slice(v1123);
    return v1124;
};
exports.callStack = v1125;
const v1130 = function (slice) {
    const v1126 = slice === undefined;
    const v1127 = slice + 1;
    let v1128;
    if (v1126) {
        v1128 = 1;
    } else {
        v1128 = v1127;
    }
    const trace = exports.callStack(v1128);
    const v1129 = exports.formatTrace(trace);
    return v1129;
};
exports.displayStack = v1130;
exports.abortThrow = false;
const v1146 = function (message, hideStack) {
    const v1131 = process.env;
    const v1132 = v1131.NODE_ENV;
    const v1133 = v1132 === 'test';
    const v1134 = exports.abortThrow;
    const v1135 = v1134 === true;
    const v1136 = v1133 || v1135;
    if (v1136) {
        const v1137 = message || 'Unknown error';
        const v1138 = new Error(v1137);
        throw v1138;
    }
    let stack = '';
    const v1139 = !hideStack;
    if (v1139) {
        const v1140 = exports.displayStack(1);
        stack = v1140.join('\n\t');
    }
    const v1141 = 'ABORT: ' + message;
    const v1142 = v1141 + '\n\t';
    const v1143 = v1142 + stack;
    const v1144 = console.log(v1143);
    v1144;
    const v1145 = process.exit(1);
    v1145;
};
exports.abort = v1146;
const v1167 = function (condition, ...args) {
    if (condition) {
        return;
    }
    const v1147 = args.length;
    const v1148 = v1147 === 1;
    const v1149 = args[0];
    const v1150 = v1149 instanceof Error;
    const v1151 = v1148 && v1150;
    if (v1151) {
        const v1152 = args[0];
        throw v1152;
    }
    const v1154 = arg => {
        const v1153 = arg !== '';
        return v1153;
    };
    const v1155 = args.filter(v1154);
    const v1163 = arg => {
        const v1156 = typeof arg;
        const v1157 = v1156 === 'string';
        const v1158 = arg instanceof Error;
        const v1159 = arg.message;
        const v1160 = exports.stringify(arg);
        let v1161;
        if (v1158) {
            v1161 = v1159;
        } else {
            v1161 = v1160;
        }
        let v1162;
        if (v1157) {
            v1162 = arg;
        } else {
            v1162 = v1161;
        }
        return v1162;
    };
    const msgs = v1155.map(v1163);
    const v1164 = msgs.join(' ');
    const v1165 = v1164 || 'Unknown error';
    const v1166 = new Error(v1165);
    throw v1166;
};
exports.assert = v1167;
const v1169 = function () {
    this.ts = 0;
    const v1168 = this.reset();
    v1168;
};
exports.Bench = v1169;
const v1170 = exports.Bench;
const v1171 = v1170.prototype;
const v1174 = function () {
    const v1172 = exports.Bench;
    const v1173 = v1172.now();
    this.ts = v1173;
};
v1171.reset = v1174;
const v1175 = exports.Bench;
const v1176 = v1175.prototype;
const v1181 = function () {
    const v1177 = exports.Bench;
    const v1178 = v1177.now();
    const v1179 = this.ts;
    const v1180 = v1178 - v1179;
    return v1180;
};
v1176.elapsed = v1181;
const v1182 = exports.Bench;
const v1188 = function () {
    const ts = process.hrtime();
    const v1183 = ts[0];
    const v1184 = v1183 * 1000;
    const v1185 = ts[1];
    const v1186 = v1185 / 1000000;
    const v1187 = v1184 + v1186;
    return v1187;
};
v1182.now = v1188;
const v1190 = function (string) {
    const v1189 = string.replace(/[\^\$\.\*\+\-\?\=\!\:\|\\\/\(\)\[\]\{\}\,]/g, '\\$&');
    return v1189;
};
exports.escapeRegex = v1190;
const v1203 = function (value, encoding) {
    const v1191 = typeof value;
    const v1192 = v1191 === 'string';
    const v1193 = Buffer.isBuffer(value);
    const v1194 = v1192 || v1193;
    const v1195 = exports.assert(v1194, 'value must be string or buffer');
    v1195;
    let buf;
    const v1196 = Buffer.isBuffer(value);
    const v1197 = encoding || 'binary';
    const v1198 = new Buffer(value, v1197);
    if (v1196) {
        buf = value;
    } else {
        buf = v1198;
    }
    const v1199 = buf.toString('base64');
    const v1200 = v1199.replace(/\+/g, '-');
    const v1201 = v1200.replace(/\//g, '_');
    const v1202 = v1201.replace(/\=/g, '');
    return v1202;
};
exports.base64urlEncode = v1203;
const v1214 = function (value, encoding) {
    const v1204 = typeof value;
    const v1205 = v1204 !== 'string';
    if (v1205) {
        const v1206 = new Error('Value not a string');
        return v1206;
    }
    const v1207 = /^[\w\-]*$/.test(value);
    const v1208 = !v1207;
    if (v1208) {
        const v1209 = new Error('Invalid character');
        return v1209;
    }
    const buf = new Buffer(value, 'base64');
    const v1210 = encoding === 'buffer';
    const v1211 = encoding || 'binary';
    const v1212 = buf.toString(v1211);
    let v1213;
    if (v1210) {
        v1213 = buf;
    } else {
        v1213 = v1212;
    }
    return v1213;
};
exports.base64urlDecode = v1214;
const v1221 = function (attribute) {
    const v1215 = /^[ \w\!#\$%&'\(\)\*\+,\-\.\/\:;<\=>\?@\[\]\^`\{\|\}~\"\\]*$/.test(attribute);
    const v1216 = 'Bad attribute value (' + attribute;
    const v1217 = v1216 + ')';
    const v1218 = exports.assert(v1215, v1217);
    v1218;
    const v1219 = attribute.replace(/\\/g, '\\\\');
    const v1220 = v1219.replace(/\"/g, '\\"');
    return v1220;
};
exports.escapeHeaderAttribute = v1221;
const v1223 = function (string) {
    const v1222 = Escape.escapeHtml(string);
    return v1222;
};
exports.escapeHtml = v1223;
const v1225 = function (string) {
    const v1224 = Escape.escapeJavaScript(string);
    return v1224;
};
exports.escapeJavaScript = v1225;
const v1227 = function (string) {
    const v1226 = Escape.escapeJson(string);
    return v1226;
};
exports.escapeJson = v1227;
const v1231 = function (method) {
    const v1228 = method._hoekOnce;
    if (v1228) {
        return method;
    }
    let once = false;
    const wrapped = function (...args) {
        const v1229 = !once;
        if (v1229) {
            once = true;
            const v1230 = method.apply(null, args);
            v1230;
        }
    };
    wrapped._hoekOnce = true;
    return wrapped;
};
exports.once = v1231;
const v1232 = Number.isSafeInteger;
exports.isInteger = v1232;
const v1233 = function () {
};
exports.ignore = v1233;
const v1234 = Util.inherits;
exports.inherits = v1234;
const v1235 = Util.format;
exports.format = v1235;
const v1270 = function (source, transform, options) {
    const v1236 = source === null;
    const v1237 = source === undefined;
    const v1238 = v1236 || v1237;
    const v1239 = typeof source;
    const v1240 = v1239 === 'object';
    const v1241 = v1238 || v1240;
    const v1242 = Array.isArray(source);
    const v1243 = v1241 || v1242;
    const v1244 = exports.assert(v1243, 'Invalid source object: must be null, undefined, an object, or an array');
    v1244;
    let separator;
    const v1245 = typeof options;
    const v1246 = v1245 === 'object';
    const v1247 = options !== null;
    const v1248 = v1246 && v1247;
    const v1249 = options.separator;
    const v1250 = v1249 || '.';
    if (v1248) {
        separator = v1250;
    } else {
        separator = '.';
    }
    const v1251 = Array.isArray(source);
    if (v1251) {
        const results = [];
        let i = 0;
        const v1252 = source.length;
        let v1253 = i < v1252;
        while (v1253) {
            const v1255 = source[i];
            const v1256 = exports.transform(v1255, transform, options);
            const v1257 = results.push(v1256);
            v1257;
            const v1254 = ++i;
            v1253 = i < v1252;
        }
        return results;
    }
    const result = {};
    const keys = Object.keys(transform);
    let i = 0;
    const v1258 = keys.length;
    let v1259 = i < v1258;
    while (v1259) {
        const key = keys[i];
        const path = key.split(separator);
        const sourcePath = transform[key];
        const v1261 = typeof sourcePath;
        const v1262 = v1261 === 'string';
        const v1263 = exports.assert(v1262, 'All mappings must be "." delineated strings');
        v1263;
        let segment;
        let res = result;
        const v1264 = path.length;
        let v1265 = v1264 > 1;
        while (v1265) {
            segment = path.shift();
            const v1266 = res[segment];
            const v1267 = !v1266;
            if (v1267) {
                const v1268 = {};
                res[segment] = v1268;
            }
            res = res[segment];
            v1265 = v1264 > 1;
        }
        segment = path.shift();
        const v1269 = exports.reach(source, sourcePath, options);
        res[segment] = v1269;
        const v1260 = ++i;
        v1259 = i < v1258;
    }
    return result;
};
exports.transform = v1270;
const v1281 = function (path, extension) {
    if (extension) {
        const v1271 = extension[0];
        const v1272 = v1271 !== '.';
        const v1273 = '.' + extension;
        if (v1272) {
            extension = v1273;
        } else {
            extension = extension;
        }
    } else {
        extension = '';
    }
    path = Path.resolve(path);
    const v1274 = Date.now();
    const v1275 = process.pid;
    const v1276 = Crypto.randomBytes(8);
    const v1277 = v1276.toString('hex');
    const v1278 = [
        v1274,
        v1275,
        v1277
    ];
    const v1279 = v1278.join('-');
    const name = v1279 + extension;
    const v1280 = Path.join(path, name);
    return v1280;
};
exports.uniqueFilename = v1281;
const v1287 = function (...args) {
    try {
        const v1282 = JSON.stringify;
        const v1283 = v1282.apply(null, args);
        return v1283;
    } catch (err) {
        const v1284 = err.message;
        const v1285 = '[Cannot display object: ' + v1284;
        const v1286 = v1285 + ']';
        return v1286;
    }
};
exports.stringify = v1287;
const v1292 = function (source) {
    const target = {};
    const keys = Object.keys(source);
    let i = 0;
    const v1288 = keys.length;
    let v1289 = i < v1288;
    while (v1289) {
        const key = keys[i];
        const v1291 = source[key];
        target[key] = v1291;
        const v1290 = ++i;
        v1289 = i < v1288;
    }
    return target;
};
exports.shallow = v1292;
const v1296 = function (timeout) {
    const v1294 = resolve => {
        const v1293 = setTimeout(resolve, timeout);
        return v1293;
    };
    const v1295 = new Promise(v1294);
    return v1295;
};
exports.wait = v1296;
const v1299 = function () {
    const v1297 = exports.ignore;
    const v1298 = new Promise(v1297);
    return v1298;
};
exports.block = v1299;
const v1300 = exports.merge;
module.exports = v1300;
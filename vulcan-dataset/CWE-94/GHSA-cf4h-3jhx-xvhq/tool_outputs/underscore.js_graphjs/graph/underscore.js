const v1567 = function () {
    var root = this;
    var previousUnderscore = root._;
    var breaker = {};
    var ArrayProto = Array.prototype;
    var ObjProto = Object.prototype;
    var FuncProto = Function.prototype;
    var slice = ArrayProto.slice;
    var unshift = ArrayProto.unshift;
    var toString = ObjProto.toString;
    var hasOwnProperty = ObjProto.hasOwnProperty;
    var nativeForEach = ArrayProto.forEach;
    var nativeMap = ArrayProto.map;
    var nativeReduce = ArrayProto.reduce;
    var nativeReduceRight = ArrayProto.reduceRight;
    var nativeFilter = ArrayProto.filter;
    var nativeEvery = ArrayProto.every;
    var nativeSome = ArrayProto.some;
    var nativeIndexOf = ArrayProto.indexOf;
    var nativeLastIndexOf = ArrayProto.lastIndexOf;
    var nativeIsArray = Array.isArray;
    var nativeKeys = Object.keys;
    var nativeBind = FuncProto.bind;
    var _ = function (obj) {
        const v785 = new wrapper(obj);
        return v785;
    };
    const v786 = typeof exports;
    const v787 = v786 !== 'undefined';
    if (v787) {
        const v788 = typeof module;
        const v789 = v788 !== 'undefined';
        const v790 = module.exports;
        const v791 = v789 && v790;
        if (v791) {
            module.exports = _;
            exports = module.exports;
        }
        exports._ = _;
    } else {
        root['_'] = _;
    }
    _.VERSION = '1.3.2';
    const v812 = function (obj, iterator, context) {
        const v792 = obj == null;
        if (v792) {
            return;
        }
        const v793 = obj.forEach;
        const v794 = v793 === nativeForEach;
        const v795 = nativeForEach && v794;
        if (v795) {
            const v796 = obj.forEach(iterator, context);
            v796;
        } else {
            const v797 = obj.length;
            const v798 = obj.length;
            const v799 = +v798;
            const v800 = v797 === v799;
            if (v800) {
                var i = 0;
                var l = obj.length;
                let v801 = i < l;
                while (v801) {
                    const v803 = i in obj;
                    const v804 = obj[i];
                    const v805 = iterator.call(context, v804, i, obj);
                    const v806 = v805 === breaker;
                    const v807 = v803 && v806;
                    if (v807) {
                        return;
                    }
                    const v802 = i++;
                    v801 = i < l;
                }
            } else {
                let key;
                for (key in obj) {
                    const v808 = _.has(obj, key);
                    if (v808) {
                        const v809 = obj[key];
                        const v810 = iterator.call(context, v809, key, obj);
                        const v811 = v810 === breaker;
                        if (v811) {
                            return;
                        }
                    }
                }
            }
        }
    };
    _.forEach = v812;
    _.each = _.forEach;
    var each = _.each;
    const v827 = function (obj, iterator, context) {
        var results = [];
        const v813 = obj == null;
        if (v813) {
            return results;
        }
        const v814 = obj.map;
        const v815 = v814 === nativeMap;
        const v816 = nativeMap && v815;
        if (v816) {
            const v817 = obj.map(iterator, context);
            return v817;
        }
        const v820 = function (value, index, list) {
            const v819 = iterator.call(context, value, index, list);
            results[v818] = v819;
        };
        const v821 = each(obj, v820);
        v821;
        const v822 = obj.length;
        const v823 = obj.length;
        const v824 = +v823;
        const v825 = v822 === v824;
        if (v825) {
            const v826 = obj.length;
            results.length = v826;
        }
        return results;
    };
    _.collect = v827;
    _.map = _.collect;
    const v841 = function (obj, iterator, memo, context) {
        const v828 = arguments.length;
        var initial = v828 > 2;
        const v829 = obj == null;
        if (v829) {
            obj = [];
        }
        const v830 = obj.reduce;
        const v831 = v830 === nativeReduce;
        const v832 = nativeReduce && v831;
        if (v832) {
            if (context) {
                iterator = _.bind(iterator, context);
            }
            const v833 = obj.reduce(iterator, memo);
            const v834 = obj.reduce(iterator);
            let v835;
            if (initial) {
                v835 = v833;
            } else {
                v835 = v834;
            }
            return v835;
        }
        const v837 = function (value, index, list) {
            const v836 = !initial;
            if (v836) {
                memo = value;
                initial = true;
            } else {
                memo = iterator.call(context, memo, value, index, list);
            }
        };
        const v838 = each(obj, v837);
        v838;
        const v839 = !initial;
        if (v839) {
            const v840 = new TypeError('Reduce of empty array with no initial value');
            throw v840;
        }
        return memo;
    };
    _.inject = v841;
    _.foldl = _.inject;
    _.reduce = _.foldl;
    const v856 = function (obj, iterator, memo, context) {
        const v842 = arguments.length;
        var initial = v842 > 2;
        const v843 = obj == null;
        if (v843) {
            obj = [];
        }
        const v844 = obj.reduceRight;
        const v845 = v844 === nativeReduceRight;
        const v846 = nativeReduceRight && v845;
        if (v846) {
            if (context) {
                iterator = _.bind(iterator, context);
            }
            const v847 = obj.reduceRight(iterator, memo);
            const v848 = obj.reduceRight(iterator);
            let v849;
            if (initial) {
                v849 = v847;
            } else {
                v849 = v848;
            }
            return v849;
        }
        const v850 = _.toArray(obj);
        var reversed = v850.reverse();
        const v851 = !initial;
        const v852 = context && v851;
        if (v852) {
            iterator = _.bind(iterator, context);
        }
        const v853 = _.reduce(reversed, iterator, memo, context);
        const v854 = _.reduce(reversed, iterator);
        let v855;
        if (initial) {
            v855 = v853;
        } else {
            v855 = v854;
        }
        return v855;
    };
    _.foldr = v856;
    _.reduceRight = _.foldr;
    const v860 = function (obj, iterator, context) {
        var result;
        const v858 = function (value, index, list) {
            const v857 = iterator.call(context, value, index, list);
            if (v857) {
                result = value;
                return true;
            }
        };
        const v859 = any(obj, v858);
        v859;
        return result;
    };
    _.detect = v860;
    _.find = _.detect;
    const v870 = function (obj, iterator, context) {
        var results = [];
        const v861 = obj == null;
        if (v861) {
            return results;
        }
        const v862 = obj.filter;
        const v863 = v862 === nativeFilter;
        const v864 = nativeFilter && v863;
        if (v864) {
            const v865 = obj.filter(iterator, context);
            return v865;
        }
        const v868 = function (value, index, list) {
            const v866 = iterator.call(context, value, index, list);
            if (v866) {
                const v867 = results.length;
                results[v867] = value;
            }
        };
        const v869 = each(obj, v868);
        v869;
        return results;
    };
    _.select = v870;
    _.filter = _.select;
    const v877 = function (obj, iterator, context) {
        var results = [];
        const v871 = obj == null;
        if (v871) {
            return results;
        }
        const v875 = function (value, index, list) {
            const v872 = iterator.call(context, value, index, list);
            const v873 = !v872;
            if (v873) {
                const v874 = results.length;
                results[v874] = value;
            }
        };
        const v876 = each(obj, v875);
        v876;
        return results;
    };
    _.reject = v877;
    const v889 = function (obj, iterator, context) {
        var result = true;
        const v878 = obj == null;
        if (v878) {
            return result;
        }
        const v879 = obj.every;
        const v880 = v879 === nativeEvery;
        const v881 = nativeEvery && v880;
        if (v881) {
            const v882 = obj.every(iterator, context);
            return v882;
        }
        const v885 = function (value, index, list) {
            const v883 = iterator.call(context, value, index, list);
            const v884 = !(result = result && v883);
            if (v884) {
                return breaker;
            }
        };
        const v886 = each(obj, v885);
        v886;
        const v887 = !result;
        const v888 = !v887;
        return v888;
    };
    _.all = v889;
    _.every = _.all;
    const v901 = function (obj, iterator, context) {
        const v890 = iterator || (iterator = _.identity);
        v890;
        var result = false;
        const v891 = obj == null;
        if (v891) {
            return result;
        }
        const v892 = obj.some;
        const v893 = v892 === nativeSome;
        const v894 = nativeSome && v893;
        if (v894) {
            const v895 = obj.some(iterator, context);
            return v895;
        }
        const v897 = function (value, index, list) {
            const v896 = result || (result = iterator.call(context, value, index, list));
            if (v896) {
                return breaker;
            }
        };
        const v898 = each(obj, v897);
        v898;
        const v899 = !result;
        const v900 = !v899;
        return v900;
    };
    _.any = v901;
    _.some = _.any;
    var any = _.some;
    const v911 = function (obj, target) {
        var found = false;
        const v902 = obj == null;
        if (v902) {
            return found;
        }
        const v903 = obj.indexOf;
        const v904 = v903 === nativeIndexOf;
        const v905 = nativeIndexOf && v904;
        if (v905) {
            const v906 = obj.indexOf(target);
            const v907 = -1;
            const v908 = v906 != v907;
            return v908;
        }
        const v910 = function (value) {
            const v909 = value === target;
            return v909;
        };
        found = any(obj, v910);
        return found;
    };
    _.contains = v911;
    _.include = _.contains;
    const v919 = function (obj, method) {
        var args = slice.call(arguments, 2);
        const v917 = function (value) {
            const v912 = _.isFunction(method);
            const v913 = method || value;
            const v914 = value[method];
            let v915;
            if (v912) {
                v915 = v913;
            } else {
                v915 = v914;
            }
            const v916 = v915.apply(value, args);
            return v916;
        };
        const v918 = _.map(obj, v917);
        return v918;
    };
    _.invoke = v919;
    const v923 = function (obj, key) {
        const v921 = function (value) {
            const v920 = value[key];
            return v920;
        };
        const v922 = _.map(obj, v921);
        return v922;
    };
    _.pluck = v923;
    const v946 = function (obj, iterator, context) {
        const v924 = !iterator;
        const v925 = _.isArray(obj);
        const v926 = v924 && v925;
        const v927 = obj[0];
        const v928 = obj[0];
        const v929 = +v928;
        const v930 = v927 === v929;
        const v931 = v926 && v930;
        if (v931) {
            const v932 = Math.max;
            const v933 = v932.apply(Math, obj);
            return v933;
        }
        const v934 = !iterator;
        const v935 = _.isEmpty(obj);
        const v936 = v934 && v935;
        if (v936) {
            const v937 = -Infinity;
            return v937;
        }
        const v938 = -Infinity;
        var result = {};
        result.computed = v938;
        const v943 = function (value, index, list) {
            let computed;
            const v939 = iterator.call(context, value, index, list);
            if (iterator) {
                computed = v939;
            } else {
                computed = value;
            }
            const v940 = result.computed;
            const v941 = computed >= v940;
            result.value = value;
            result.computed = computed;
            (computed >= result.computed && (result = {
                value: value,
                computed: computed
            }))
            const v942 = v941 && (result = {});
            v942;
        };
        const v944 = each(obj, v943);
        v944;
        const v945 = result.value;
        return v945;
    };
    _.max = v946;
    const v967 = function (obj, iterator, context) {
        const v947 = !iterator;
        const v948 = _.isArray(obj);
        const v949 = v947 && v948;
        const v950 = obj[0];
        const v951 = obj[0];
        const v952 = +v951;
        const v953 = v950 === v952;
        const v954 = v949 && v953;
        if (v954) {
            const v955 = Math.min;
            const v956 = v955.apply(Math, obj);
            return v956;
        }
        const v957 = !iterator;
        const v958 = _.isEmpty(obj);
        const v959 = v957 && v958;
        if (v959) {
            return Infinity;
        }
        var result = {};
        result.computed = Infinity;
        const v964 = function (value, index, list) {
            let computed;
            const v960 = iterator.call(context, value, index, list);
            if (iterator) {
                computed = v960;
            } else {
                computed = value;
            }
            const v961 = result.computed;
            const v962 = computed < v961;
            result.value = value;
            result.computed = computed;
            (computed < result.computed && (result = {
                value: value,
                computed: computed
            }))
            const v963 = v962 && (result = {});
            v963;
        };
        const v965 = each(obj, v964);
        v965;
        const v966 = result.value;
        return v966;
    };
    _.min = v967;
    const v974 = function (obj) {
        var shuffled = [];
        var rand;
        const v972 = function (value, index, list) {
            const v968 = Math.random();
            const v969 = index + 1;
            const v970 = v968 * v969;
            rand = Math.floor(v970);
            const v971 = shuffled[rand];
            shuffled[index] = v971;
            shuffled[rand] = value;
        };
        const v973 = each(obj, v972);
        v973;
        return shuffled;
    };
    _.shuffle = v974;
    const v995 = function (obj, val, context) {
        let iterator;
        const v975 = _.isFunction(val);
        const v977 = function (obj) {
            const v976 = obj[val];
            return v976;
        };
        if (v975) {
            iterator = val;
        } else {
            iterator = v977;
        }
        const v980 = function (value, index, list) {
            const v978 = iterator.call(context, value, index, list);
            const v979 = {};
            v979.value = value;
            v979.criteria = v978;
            return v979;
        };
        const v981 = _.map(obj, v980);
        const v992 = function (left, right) {
            var a = left.criteria;
            var b = right.criteria;
            const v982 = void 0;
            const v983 = a === v982;
            if (v983) {
                return 1;
            }
            const v984 = void 0;
            const v985 = b === v984;
            if (v985) {
                const v986 = -1;
                return v986;
            }
            const v987 = a < b;
            const v988 = -1;
            const v989 = a > b;
            let v990;
            if (v989) {
                v990 = 1;
            } else {
                v990 = 0;
            }
            let v991;
            if (v987) {
                v991 = v988;
            } else {
                v991 = v990;
            }
            return v991;
        };
        const v993 = v981.sort(v992);
        const v994 = _.pluck(v993, 'value');
        return v994;
    };
    _.sortBy = v995;
    const v1004 = function (obj, val) {
        var result = {};
        let iterator;
        const v996 = _.isFunction(val);
        const v998 = function (obj) {
            const v997 = obj[val];
            return v997;
        };
        if (v996) {
            iterator = val;
        } else {
            iterator = v998;
        }
        const v1002 = function (value, index) {
            var key = iterator(value, index);
            const v999 = result[key];
            const v1000 = v999 || (result[key] = []);
            const v1001 = v1000.push(value);
            v1001;
        };
        const v1003 = each(obj, v1002);
        v1003;
        return result;
    };
    _.groupBy = v1004;
    const v1013 = function (array, obj, iterator) {
        const v1005 = iterator || (iterator = _.identity);
        v1005;
        var low = 0;
        var high = array.length;
        let v1006 = low < high;
        while (v1006) {
            const v1007 = low + high;
            var mid = v1007 >> 1;
            const v1008 = array[mid];
            const v1009 = iterator(v1008);
            const v1010 = iterator(obj);
            const v1011 = v1009 < v1010;
            let v1012;
            if (v1011) {
                low = mid + 1;
                v1012 = low;
            } else {
                v1012 = high = mid;
            }
            v1012;
            v1006 = low < high;
        }
        return low;
    };
    _.sortedIndex = v1013;
    const v1026 = function (obj) {
        const v1014 = !obj;
        if (v1014) {
            const v1015 = [];
            return v1015;
        }
        const v1016 = _.isArray(obj);
        if (v1016) {
            const v1017 = slice.call(obj);
            return v1017;
        }
        const v1018 = _.isArguments(obj);
        if (v1018) {
            const v1019 = slice.call(obj);
            return v1019;
        }
        const v1020 = obj.toArray;
        const v1021 = obj.toArray;
        const v1022 = _.isFunction(v1021);
        const v1023 = v1020 && v1022;
        if (v1023) {
            const v1024 = obj.toArray();
            return v1024;
        }
        const v1025 = _.values(obj);
        return v1025;
    };
    _.toArray = v1026;
    const v1032 = function (obj) {
        const v1027 = _.isArray(obj);
        const v1028 = obj.length;
        const v1029 = _.keys(obj);
        const v1030 = v1029.length;
        let v1031;
        if (v1027) {
            v1031 = v1028;
        } else {
            v1031 = v1030;
        }
        return v1031;
    };
    _.size = v1032;
    const v1039 = function (array, n, guard) {
        const v1033 = n != null;
        const v1034 = !guard;
        const v1035 = v1033 && v1034;
        const v1036 = slice.call(array, 0, n);
        const v1037 = array[0];
        let v1038;
        if (v1035) {
            v1038 = v1036;
        } else {
            v1038 = v1037;
        }
        return v1038;
    };
    _.take = v1039;
    _.head = _.take;
    _.first = _.head;
    const v1046 = function (array, n, guard) {
        const v1040 = array.length;
        const v1041 = n == null;
        const v1042 = v1041 || guard;
        let v1043;
        if (v1042) {
            v1043 = 1;
        } else {
            v1043 = n;
        }
        const v1044 = v1040 - v1043;
        const v1045 = slice.call(array, 0, v1044);
        return v1045;
    };
    _.initial = v1046;
    const v1057 = function (array, n, guard) {
        const v1047 = n != null;
        const v1048 = !guard;
        const v1049 = v1047 && v1048;
        if (v1049) {
            const v1050 = array.length;
            const v1051 = v1050 - n;
            const v1052 = Math.max(v1051, 0);
            const v1053 = slice.call(array, v1052);
            return v1053;
        } else {
            const v1054 = array.length;
            const v1055 = v1054 - 1;
            const v1056 = array[v1055];
            return v1056;
        }
    };
    _.last = v1057;
    const v1062 = function (array, index, guard) {
        const v1058 = index == null;
        const v1059 = v1058 || guard;
        let v1060;
        if (v1059) {
            v1060 = 1;
        } else {
            v1060 = index;
        }
        const v1061 = slice.call(array, v1060);
        return v1061;
    };
    _.tail = v1062;
    _.rest = _.tail;
    const v1067 = function (array) {
        const v1065 = function (value) {
            const v1063 = !value;
            const v1064 = !v1063;
            return v1064;
        };
        const v1066 = _.filter(array, v1065);
        return v1066;
    };
    _.compact = v1067;
    const v1076 = function (array, shallow) {
        const v1073 = function (memo, value) {
            const v1068 = _.isArray(value);
            if (v1068) {
                const v1069 = _.flatten(value);
                let v1070;
                if (shallow) {
                    v1070 = value;
                } else {
                    v1070 = v1069;
                }
                const v1071 = memo.concat(v1070);
                return v1071;
            }
            const v1072 = memo.length;
            memo[v1072] = value;
            return memo;
        };
        const v1074 = [];
        const v1075 = _.reduce(array, v1073, v1074);
        return v1075;
    };
    _.flatten = v1076;
    const v1079 = function (array) {
        const v1077 = slice.call(arguments, 1);
        const v1078 = _.difference(array, v1077);
        return v1078;
    };
    _.without = v1079;
    const v1097 = function (array, isSorted, iterator) {
        let initial;
        const v1080 = _.map(array, iterator);
        if (iterator) {
            initial = v1080;
        } else {
            initial = array;
        }
        var results = [];
        const v1081 = array.length;
        const v1082 = v1081 < 3;
        if (v1082) {
            isSorted = true;
        }
        const v1094 = function (memo, value, index) {
            const v1083 = _.last(memo);
            const v1084 = v1083 !== value;
            const v1085 = memo.length;
            const v1086 = !v1085;
            const v1087 = v1084 || v1086;
            const v1088 = _.include(memo, value);
            const v1089 = !v1088;
            let v1090;
            if (isSorted) {
                v1090 = v1087;
            } else {
                v1090 = v1089;
            }
            if (v1090) {
                const v1091 = memo.push(value);
                v1091;
                const v1092 = array[index];
                const v1093 = results.push(v1092);
                v1093;
            }
            return memo;
        };
        const v1095 = [];
        const v1096 = _.reduce(initial, v1094, v1095);
        v1096;
        return results;
    };
    _.unique = v1097;
    _.uniq = _.unique;
    const v1100 = function () {
        const v1098 = _.flatten(arguments, true);
        const v1099 = _.uniq(v1098);
        return v1099;
    };
    _.union = v1100;
    const v1108 = function (array) {
        var rest = slice.call(arguments, 1);
        const v1101 = _.uniq(array);
        const v1106 = function (item) {
            const v1104 = function (other) {
                const v1102 = _.indexOf(other, item);
                const v1103 = v1102 >= 0;
                return v1103;
            };
            const v1105 = _.every(rest, v1104);
            return v1105;
        };
        const v1107 = _.filter(v1101, v1106);
        return v1107;
    };
    _.intersect = v1108;
    _.intersection = _.intersect;
    const v1114 = function (array) {
        const v1109 = slice.call(arguments, 1);
        var rest = _.flatten(v1109, true);
        const v1112 = function (value) {
            const v1110 = _.include(rest, value);
            const v1111 = !v1110;
            return v1111;
        };
        const v1113 = _.filter(array, v1112);
        return v1113;
    };
    _.difference = v1114;
    const v1120 = function () {
        var args = slice.call(arguments);
        const v1115 = _.pluck(args, 'length');
        var length = _.max(v1115);
        var results = new Array(length);
        var i = 0;
        let v1116 = i < length;
        while (v1116) {
            const v1118 = '' + i;
            const v1119 = _.pluck(args, v1118);
            results[i] = v1119;
            const v1117 = i++;
            v1116 = i < length;
        }
        return results;
    };
    _.zip = v1120;
    const v1138 = function (array, item, isSorted) {
        const v1121 = array == null;
        if (v1121) {
            const v1122 = -1;
            return v1122;
        }
        var i;
        var l;
        if (isSorted) {
            i = _.sortedIndex(array, item);
            const v1123 = array[i];
            const v1124 = v1123 === item;
            const v1125 = -1;
            let v1126;
            if (v1124) {
                v1126 = i;
            } else {
                v1126 = v1125;
            }
            return v1126;
        }
        const v1127 = array.indexOf;
        const v1128 = v1127 === nativeIndexOf;
        const v1129 = nativeIndexOf && v1128;
        if (v1129) {
            const v1130 = array.indexOf(item);
            return v1130;
        }
        (i = 0, l = array.length)
        let v1131 = i < l;
        while (v1131) {
            const v1133 = i in array;
            const v1134 = array[i];
            const v1135 = v1134 === item;
            const v1136 = v1133 && v1135;
            if (v1136) {
                return i;
            }
            const v1132 = i++;
            v1131 = i < l;
        }
        const v1137 = -1;
        return v1137;
    };
    _.indexOf = v1138;
    const v1151 = function (array, item) {
        const v1139 = array == null;
        if (v1139) {
            const v1140 = -1;
            return v1140;
        }
        const v1141 = array.lastIndexOf;
        const v1142 = v1141 === nativeLastIndexOf;
        const v1143 = nativeLastIndexOf && v1142;
        if (v1143) {
            const v1144 = array.lastIndexOf(item);
            return v1144;
        }
        var i = array.length;
        let v1145 = i--;
        while (v1145) {
            const v1146 = i in array;
            const v1147 = array[i];
            const v1148 = v1147 === item;
            const v1149 = v1146 && v1148;
            if (v1149) {
                return i;
            }
            v1145 = i--;
        }
        const v1150 = -1;
        return v1150;
    };
    _.lastIndexOf = v1151;
    const v1160 = function (start, stop, step) {
        const v1152 = arguments.length;
        const v1153 = v1152 <= 1;
        if (v1153) {
            stop = start || 0;
            start = 0;
        }
        const v1154 = arguments[2];
        step = v1154 || 1;
        const v1155 = stop - start;
        const v1156 = v1155 / step;
        const v1157 = Math.ceil(v1156);
        var len = Math.max(v1157, 0);
        var idx = 0;
        var range = new Array(len);
        let v1158 = idx < len;
        while (v1158) {
            const v1159 = idx++;
            range[v1159] = start;
            start += step;
            v1158 = idx < len;
        }
        return range;
    };
    _.range = v1160;
    var ctor = function () {
    };
    const bind = function (func, context) {
        var bound;
        var args;
        const v1161 = func.bind;
        const v1162 = v1161 === nativeBind;
        const v1163 = v1162 && nativeBind;
        if (v1163) {
            const v1164 = slice.call(arguments, 1);
            const v1165 = nativeBind.apply(func, v1164);
            return v1165;
        }
        const v1166 = _.isFunction(func);
        const v1167 = !v1166;
        if (v1167) {
            const v1168 = new TypeError();
            throw v1168;
        }
        args = slice.call(arguments, 2);
        const v1179 = function () {
            const v1169 = this instanceof bound;
            const v1170 = !v1169;
            if (v1170) {
                const v1171 = slice.call(arguments);
                const v1172 = args.concat(v1171);
                const v1173 = func.apply(context, v1172);
                return v1173;
            }
            const v1174 = func.prototype;
            ctor.prototype = v1174;
            var self = new ctor();
            const v1175 = slice.call(arguments);
            const v1176 = args.concat(v1175);
            var result = func.apply(self, v1176);
            const v1177 = Object(result);
            const v1178 = v1177 === result;
            if (v1178) {
                return result;
            }
            return self;
        };
        return bound = v1179;
    };
    _.bind = bind;
    const v1186 = function (obj) {
        var funcs = slice.call(arguments, 1);
        const v1180 = funcs.length;
        const v1181 = v1180 == 0;
        if (v1181) {
            funcs = _.functions(obj);
        }
        const v1184 = function (f) {
            const v1182 = obj[f];
            const v1183 = _.bind(v1182, obj);
            obj[f] = v1183;
        };
        const v1185 = each(funcs, v1184);
        v1185;
        return obj;
    };
    _.bindAll = v1186;
    const v1193 = function (func, hasher) {
        var memo = {};
        const v1187 = hasher || (hasher = _.identity);
        v1187;
        const v1192 = function () {
            var key = hasher.apply(this, arguments);
            const v1188 = _.has(memo, key);
            const v1189 = memo[key];
            const v1190 = func.apply(this, arguments);
            let v1191;
            if (v1188) {
                v1191 = v1189;
            } else {
                v1191 = memo[key] = v1190;
            }
            return v1191;
        };
        return v1192;
    };
    _.memoize = v1193;
    const v1197 = function (func, wait) {
        var args = slice.call(arguments, 2);
        const v1195 = function () {
            const v1194 = func.apply(null, args);
            return v1194;
        };
        const v1196 = setTimeout(v1195, wait);
        return v1196;
    };
    _.delay = v1197;
    const v1203 = function (func) {
        const v1198 = _.delay;
        const v1199 = [
            func,
            1
        ];
        const v1200 = slice.call(arguments, 1);
        const v1201 = v1199.concat(v1200);
        const v1202 = v1198.apply(_, v1201);
        return v1202;
    };
    _.defer = v1203;
    const v1210 = function (func, wait) {
        var context;
        var args;
        var timeout;
        var throttling;
        var more;
        var result;
        const v1204 = function () {
            throttling = false;
            more = throttling;
        };
        var whenDone = _.debounce(v1204, wait);
        const v1209 = function () {
            context = this;
            args = arguments;
            var later = function () {
                timeout = null;
                if (more) {
                    const v1205 = func.apply(context, args);
                    v1205;
                }
                const v1206 = whenDone();
                v1206;
            };
            const v1207 = !timeout;
            if (v1207) {
                timeout = setTimeout(later, wait);
            }
            if (throttling) {
                more = true;
            } else {
                result = func.apply(context, args);
            }
            const v1208 = whenDone();
            v1208;
            throttling = true;
            return result;
        };
        return v1209;
    };
    _.throttle = v1210;
    const v1218 = function (func, wait, immediate) {
        var timeout;
        const v1217 = function () {
            var context = this;
            var args = arguments;
            var later = function () {
                timeout = null;
                const v1211 = !immediate;
                if (v1211) {
                    const v1212 = func.apply(context, args);
                    v1212;
                }
            };
            const v1213 = !timeout;
            const v1214 = immediate && v1213;
            if (v1214) {
                const v1215 = func.apply(context, args);
                v1215;
            }
            const v1216 = clearTimeout(timeout);
            v1216;
            timeout = setTimeout(later, wait);
        };
        return v1217;
    };
    _.debounce = v1218;
    const v1220 = function (func) {
        var ran = false;
        var memo;
        const v1219 = function () {
            if (ran) {
                return memo;
            }
            ran = true;
            return memo = func.apply(this, arguments);
        };
        return v1219;
    };
    _.once = v1220;
    const v1225 = function (func, wrapper) {
        const v1224 = function () {
            const v1221 = [func];
            const v1222 = slice.call(arguments, 0);
            var args = v1221.concat(v1222);
            const v1223 = wrapper.apply(this, args);
            return v1223;
        };
        return v1224;
    };
    _.wrap = v1225;
    const v1233 = function () {
        var funcs = arguments;
        const v1232 = function () {
            var args = arguments;
            const v1226 = funcs.length;
            var i = v1226 - 1;
            let v1227 = i >= 0;
            while (v1227) {
                const v1229 = funcs[i];
                const v1230 = v1229.apply(this, args);
                args = [v1230];
                const v1228 = i--;
                v1227 = i >= 0;
            }
            const v1231 = args[0];
            return v1231;
        };
        return v1232;
    };
    _.compose = v1233;
    const v1240 = function (times, func) {
        const v1234 = times <= 0;
        if (v1234) {
            const v1235 = func();
            return v1235;
        }
        const v1239 = function () {
            const v1236 = --times;
            const v1237 = v1236 < 1;
            if (v1237) {
                const v1238 = func.apply(this, arguments);
                return v1238;
            }
        };
        return v1239;
    };
    _.after = v1240;
    const v1246 = function (obj) {
        const v1241 = Object(obj);
        const v1242 = obj !== v1241;
        if (v1242) {
            const v1243 = new TypeError('Invalid object');
            throw v1243;
        }
        var keys = [];
        let key;
        for (key in obj) {
            const v1244 = _.has(obj, key);
            if (v1244) {
                const v1245 = keys.length;
                keys[v1245] = key;
            }
        }
        return keys;
    };
    _.keys = nativeKeys || v1246;
    const v1249 = function (obj) {
        const v1247 = _.identity;
        const v1248 = _.map(obj, v1247);
        return v1248;
    };
    _.values = v1249;
    const v1254 = function (obj) {
        var names = [];
        let key;
        for (key in obj) {
            const v1250 = obj[key];
            const v1251 = _.isFunction(v1250);
            if (v1251) {
                const v1252 = names.push(key);
                v1252;
            }
        }
        const v1253 = names.sort();
        return v1253;
    };
    _.methods = v1254;
    _.functions = _.methods;
    const v1259 = function (obj) {
        const v1255 = slice.call(arguments, 1);
        const v1257 = function (source) {
            let prop;
            for (prop in source) {
                const v1256 = source[prop];
                obj[prop] = v1256;
            }
        };
        const v1258 = each(v1255, v1257);
        v1258;
        return obj;
    };
    _.extend = v1259;
    const v1266 = function (obj) {
        var result = {};
        const v1260 = slice.call(arguments, 1);
        const v1261 = _.flatten(v1260);
        const v1264 = function (key) {
            const v1262 = key in obj;
            if (v1262) {
                const v1263 = obj[key];
                result[key] = v1263;
            }
        };
        const v1265 = each(v1261, v1264);
        v1265;
        return result;
    };
    _.pick = v1266;
    const v1273 = function (obj) {
        const v1267 = slice.call(arguments, 1);
        const v1271 = function (source) {
            let prop;
            for (prop in source) {
                const v1268 = obj[prop];
                const v1269 = v1268 == null;
                if (v1269) {
                    const v1270 = source[prop];
                    obj[prop] = v1270;
                }
            }
        };
        const v1272 = each(v1267, v1271);
        v1272;
        return obj;
    };
    _.defaults = v1273;
    const v1281 = function (obj) {
        const v1274 = _.isObject(obj);
        const v1275 = !v1274;
        if (v1275) {
            return obj;
        }
        const v1276 = _.isArray(obj);
        const v1277 = obj.slice();
        const v1278 = {};
        const v1279 = _.extend(v1278, obj);
        let v1280;
        if (v1276) {
            v1280 = v1277;
        } else {
            v1280 = v1279;
        }
        return v1280;
    };
    _.clone = v1281;
    const v1283 = function (obj, interceptor) {
        const v1282 = interceptor(obj);
        v1282;
        return obj;
    };
    _.tap = v1283;
    const eq = function (a, b, stack) {
        const v1284 = a === b;
        if (v1284) {
            const v1285 = a !== 0;
            const v1286 = 1 / a;
            const v1287 = 1 / b;
            const v1288 = v1286 == v1287;
            const v1289 = v1285 || v1288;
            return v1289;
        }
        const v1290 = a == null;
        const v1291 = b == null;
        const v1292 = v1290 || v1291;
        if (v1292) {
            const v1293 = a === b;
            return v1293;
        }
        const v1294 = a._chain;
        if (v1294) {
            a = a._wrapped;
        }
        const v1295 = b._chain;
        if (v1295) {
            b = b._wrapped;
        }
        const v1296 = a.isEqual;
        const v1297 = a.isEqual;
        const v1298 = _.isFunction(v1297);
        const v1299 = v1296 && v1298;
        if (v1299) {
            const v1300 = a.isEqual(b);
            return v1300;
        }
        const v1301 = b.isEqual;
        const v1302 = b.isEqual;
        const v1303 = _.isFunction(v1302);
        const v1304 = v1301 && v1303;
        if (v1304) {
            const v1305 = b.isEqual(a);
            return v1305;
        }
        var className = toString.call(a);
        const v1306 = toString.call(b);
        const v1307 = className != v1306;
        if (v1307) {
            return false;
        }
        switch (className) {
        case '[object String]':
            const v1308 = String(b);
            const v1309 = a == v1308;
            return v1309;
        case '[object Number]':
            const v1310 = +a;
            const v1311 = a != v1310;
            const v1312 = +b;
            const v1313 = b != v1312;
            const v1314 = a == 0;
            const v1315 = 1 / a;
            const v1316 = 1 / b;
            const v1317 = v1315 == v1316;
            const v1318 = +b;
            const v1319 = a == v1318;
            let v1320;
            if (v1314) {
                v1320 = v1317;
            } else {
                v1320 = v1319;
            }
            let v1321;
            if (v1311) {
                v1321 = v1313;
            } else {
                v1321 = v1320;
            }
            return v1321;
        case '[object Date]':
        case '[object Boolean]':
            const v1322 = +a;
            const v1323 = +b;
            const v1324 = v1322 == v1323;
            return v1324;
        case '[object RegExp]':
            const v1325 = a.source;
            const v1326 = b.source;
            const v1327 = v1325 == v1326;
            const v1328 = a.global;
            const v1329 = b.global;
            const v1330 = v1328 == v1329;
            const v1331 = v1327 && v1330;
            const v1332 = a.multiline;
            const v1333 = b.multiline;
            const v1334 = v1332 == v1333;
            const v1335 = v1331 && v1334;
            const v1336 = a.ignoreCase;
            const v1337 = b.ignoreCase;
            const v1338 = v1336 == v1337;
            const v1339 = v1335 && v1338;
            return v1339;
        }
        const v1340 = typeof a;
        const v1341 = v1340 != 'object';
        const v1342 = typeof b;
        const v1343 = v1342 != 'object';
        const v1344 = v1341 || v1343;
        if (v1344) {
            return false;
        }
        var length = stack.length;
        let v1345 = length--;
        while (v1345) {
            const v1346 = stack[length];
            const v1347 = v1346 == a;
            if (v1347) {
                return true;
            }
            v1345 = length--;
        }
        const v1348 = stack.push(a);
        v1348;
        var size = 0;
        var result = true;
        const v1349 = className == '[object Array]';
        if (v1349) {
            size = a.length;
            const v1350 = b.length;
            result = size == v1350;
            if (result) {
                let v1351 = size--;
                while (v1351) {
                    const v1352 = size in a;
                    const v1353 = size in b;
                    const v1354 = v1352 == v1353;
                    const v1355 = a[size];
                    const v1356 = b[size];
                    const v1357 = eq(v1355, v1356, stack);
                    const v1358 = !(result = v1354 && v1357);
                    if (v1358) {
                        break;
                    }
                    v1351 = size--;
                }
            }
        } else {
            const v1359 = 'constructor' in a;
            const v1360 = 'constructor' in b;
            const v1361 = v1359 != v1360;
            const v1362 = a.constructor;
            const v1363 = b.constructor;
            const v1364 = v1362 != v1363;
            const v1365 = v1361 || v1364;
            if (v1365) {
                return false;
            }
            let key;
            for (key in a) {
                const v1366 = _.has(a, key);
                if (v1366) {
                    const v1367 = size++;
                    v1367;
                    const v1368 = _.has(b, key);
                    const v1369 = a[key];
                    const v1370 = b[key];
                    const v1371 = eq(v1369, v1370, stack);
                    const v1372 = !(result = v1368 && v1371);
                    if (v1372) {
                        break;
                    }
                }
            }
            if (result) {
                for (key in b) {
                    const v1373 = _.has(b, key);
                    const v1374 = size--;
                    const v1375 = !v1374;
                    const v1376 = v1373 && v1375;
                    if (v1376) {
                        break;
                    }
                }
                const v1377 = !size;
                result = v1377;
            }
        }
        const v1378 = stack.pop();
        v1378;
        return result;
    };
    const v1381 = function (a, b) {
        const v1379 = [];
        const v1380 = eq(a, b, v1379);
        return v1380;
    };
    _.isEqual = v1381;
    const v1389 = function (obj) {
        const v1382 = obj == null;
        if (v1382) {
            return true;
        }
        const v1383 = _.isArray(obj);
        const v1384 = _.isString(obj);
        const v1385 = v1383 || v1384;
        if (v1385) {
            const v1386 = obj.length;
            const v1387 = v1386 === 0;
            return v1387;
        }
        let key;
        for (key in obj) {
            const v1388 = _.has(obj, key);
            if (v1388) {
                return false;
            }
        }
        return true;
    };
    _.isEmpty = v1389;
    const v1395 = function (obj) {
        const v1390 = obj.nodeType;
        const v1391 = v1390 == 1;
        const v1392 = obj && v1391;
        const v1393 = !v1392;
        const v1394 = !v1393;
        return v1394;
    };
    _.isElement = v1395;
    const v1398 = function (obj) {
        const v1396 = toString.call(obj);
        const v1397 = v1396 == '[object Array]';
        return v1397;
    };
    _.isArray = nativeIsArray || v1398;
    const v1401 = function (obj) {
        const v1399 = Object(obj);
        const v1400 = obj === v1399;
        return v1400;
    };
    _.isObject = v1401;
    const v1404 = function (obj) {
        const v1402 = toString.call(obj);
        const v1403 = v1402 == '[object Arguments]';
        return v1403;
    };
    _.isArguments = v1404;
    const v1405 = _.isArguments(arguments);
    const v1406 = !v1405;
    if (v1406) {
        const v1411 = function (obj) {
            const v1407 = _.has(obj, 'callee');
            const v1408 = obj && v1407;
            const v1409 = !v1408;
            const v1410 = !v1409;
            return v1410;
        };
        _.isArguments = v1411;
    }
    const v1414 = function (obj) {
        const v1412 = toString.call(obj);
        const v1413 = v1412 == '[object Function]';
        return v1413;
    };
    _.isFunction = v1414;
    const v1417 = function (obj) {
        const v1415 = toString.call(obj);
        const v1416 = v1415 == '[object String]';
        return v1416;
    };
    _.isString = v1417;
    const v1420 = function (obj) {
        const v1418 = toString.call(obj);
        const v1419 = v1418 == '[object Number]';
        return v1419;
    };
    _.isNumber = v1420;
    const v1424 = function (obj) {
        const v1421 = _.isNumber(obj);
        const v1422 = isFinite(obj);
        const v1423 = v1421 && v1422;
        return v1423;
    };
    _.isFinite = v1424;
    const v1426 = function (obj) {
        const v1425 = obj !== obj;
        return v1425;
    };
    _.isNaN = v1426;
    const v1433 = function (obj) {
        const v1427 = obj === true;
        const v1428 = obj === false;
        const v1429 = v1427 || v1428;
        const v1430 = toString.call(obj);
        const v1431 = v1430 == '[object Boolean]';
        const v1432 = v1429 || v1431;
        return v1432;
    };
    _.isBoolean = v1433;
    const v1436 = function (obj) {
        const v1434 = toString.call(obj);
        const v1435 = v1434 == '[object Date]';
        return v1435;
    };
    _.isDate = v1436;
    const v1439 = function (obj) {
        const v1437 = toString.call(obj);
        const v1438 = v1437 == '[object RegExp]';
        return v1438;
    };
    _.isRegExp = v1439;
    const v1441 = function (obj) {
        const v1440 = obj === null;
        return v1440;
    };
    _.isNull = v1441;
    const v1444 = function (obj) {
        const v1442 = void 0;
        const v1443 = obj === v1442;
        return v1443;
    };
    _.isUndefined = v1444;
    const v1446 = function (obj, key) {
        const v1445 = hasOwnProperty.call(obj, key);
        return v1445;
    };
    _.has = v1446;
    const v1447 = function () {
        root._ = previousUnderscore;
        return this;
    };
    _.noConflict = v1447;
    const v1448 = function (value) {
        return value;
    };
    _.identity = v1448;
    const v1452 = function (n, iterator, context) {
        var i = 0;
        let v1449 = i < n;
        while (v1449) {
            const v1451 = iterator.call(context, i);
            v1451;
            const v1450 = i++;
            v1449 = i < n;
        }
    };
    _.times = v1452;
    const v1460 = function (string) {
        const v1453 = '' + string;
        const v1454 = v1453.replace(/&/g, '&amp;');
        const v1455 = v1454.replace(/</g, '&lt;');
        const v1456 = v1455.replace(/>/g, '&gt;');
        const v1457 = v1456.replace(/"/g, '&quot;');
        const v1458 = v1457.replace(/'/g, '&#x27;');
        const v1459 = v1458.replace(/\//g, '&#x2F;');
        return v1459;
    };
    _.escape = v1460;
    const v1465 = function (object, property) {
        const v1461 = object == null;
        if (v1461) {
            return null;
        }
        var value = object[property];
        const v1462 = _.isFunction(value);
        const v1463 = value.call(object);
        let v1464;
        if (v1462) {
            v1464 = v1463;
        } else {
            v1464 = value;
        }
        return v1464;
    };
    _.result = v1465;
    const v1471 = function (obj) {
        const v1466 = _.functions(obj);
        const v1469 = function (name) {
            const v1467 = obj[name];
            const v1468 = addToWrapper(name, _[name] = v1467);
            v1468;
        };
        const v1470 = each(v1466, v1469);
        v1470;
    };
    _.mixin = v1471;
    var idCounter = 0;
    const v1475 = function (prefix) {
        const v1472 = idCounter++;
        var id = v1472;
        const v1473 = prefix + id;
        let v1474;
        if (prefix) {
            v1474 = v1473;
        } else {
            v1474 = id;
        }
        return v1474;
    };
    _.uniqueId = v1475;
    const v1476 = {};
    v1476.evaluate = /<%([\s\S]+?)%>/g;
    v1476.interpolate = /<%=([\s\S]+?)%>/g;
    v1476.escape = /<%-([\s\S]+?)%>/g;
    _.templateSettings = v1476;
    var noMatch = /.^/;
    var escapes = {};
    escapes['\\'] = '\\';
    escapes['\''] = '\'';
    escapes['r'] = '\r';
    escapes['n'] = '\n';
    escapes['t'] = '\t';
    escapes['u2028'] = '\u2028';
    escapes['u2029'] = '\u2029';
    let p;
    for (p in escapes) {
        const v1477 = escapes[p];
        escapes[v1477] = p;
    }
    var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    var unescaper = /\\(\\|'|r|n|t|u2028|u2029)/g;
    var unescape = function (code) {
        const v1479 = function (match, escape) {
            const v1478 = escapes[escape];
            return v1478;
        };
        const v1480 = code.replace(unescaper, v1479);
        return v1480;
    };
    const v1522 = function (text, data, settings) {
        const v1481 = _.templateSettings;
        settings = _.extend(v1481, settings);
        const v1484 = function (match) {
            const v1482 = escapes[match];
            const v1483 = '\\' + v1482;
            return v1483;
        };
        const v1485 = text.replace(escaper, v1484);
        const v1486 = settings.escape;
        const v1487 = v1486 || noMatch;
        const v1491 = function (match, code) {
            const v1488 = unescape(code);
            const v1489 = '\'+\n_.escape(' + v1488;
            const v1490 = v1489 + ')+\n\'';
            return v1490;
        };
        const v1492 = v1485.replace(v1487, v1491);
        const v1493 = settings.interpolate;
        const v1494 = v1493 || noMatch;
        const v1498 = function (match, code) {
            const v1495 = unescape(code);
            const v1496 = '\'+\n(' + v1495;
            const v1497 = v1496 + ')+\n\'';
            return v1497;
        };
        const v1499 = v1492.replace(v1494, v1498);
        const v1500 = settings.evaluate;
        const v1501 = v1500 || noMatch;
        const v1505 = function (match, code) {
            const v1502 = unescape(code);
            const v1503 = '\';\n' + v1502;
            const v1504 = v1503 + '\n;__p+=\'';
            return v1504;
        };
        const v1506 = v1499.replace(v1501, v1505);
        const v1507 = '__p+=\'' + v1506;
        var source = v1507 + '\';\n';
        const v1508 = settings.variable;
        const v1509 = !v1508;
        if (v1509) {
            const v1510 = 'with(obj||{}){\n' + source;
            source = v1510 + '}\n';
        }
        const v1511 = 'var __p=\'\';' + 'var print=function(){__p+=Array.prototype.join.call(arguments, \'\')};\n';
        const v1512 = v1511 + source;
        source = v1512 + 'return __p;\n';
        const v1513 = settings.variable;
        const v1514 = v1513 || 'obj';
        var render = new Function(v1514, '_', source);
        if (data) {
            const v1515 = render(data, _);
            return v1515;
        }
        var template = function (data) {
            const v1516 = render.call(this, data, _);
            return v1516;
        };
        const v1517 = settings.variable;
        const v1518 = v1517 || 'obj';
        const v1519 = 'function(' + v1518;
        const v1520 = v1519 + '){\n';
        const v1521 = v1520 + source;
        template.source = v1521 + '}';
        return template;
    };
    _.template = v1522;
    const v1525 = function (obj) {
        const v1523 = _(obj);
        const v1524 = v1523.chain();
        return v1524;
    };
    _.chain = v1525;
    var wrapper = function (obj) {
        this._wrapped = obj;
    };
    const v1526 = wrapper.prototype;
    _.prototype = v1526;
    var result = function (obj, chain) {
        const v1527 = _(obj);
        const v1528 = v1527.chain();
        let v1529;
        if (chain) {
            v1529 = v1528;
        } else {
            v1529 = obj;
        }
        return v1529;
    };
    var addToWrapper = function (name, func) {
        const v1530 = wrapper.prototype;
        const v1536 = function () {
            var args = slice.call(arguments);
            const v1531 = this._wrapped;
            const v1532 = unshift.call(args, v1531);
            v1532;
            const v1533 = func.apply(_, args);
            const v1534 = this._chain;
            const v1535 = result(v1533, v1534);
            return v1535;
        };
        v1530[name] = v1536;
    };
    const v1537 = _.mixin(_);
    v1537;
    const v1538 = [
        'pop',
        'push',
        'reverse',
        'shift',
        'sort',
        'splice',
        'unshift'
    ];
    const v1551 = function (name) {
        var method = ArrayProto[name];
        const v1539 = wrapper.prototype;
        const v1550 = function () {
            var wrapped = this._wrapped;
            const v1540 = method.apply(wrapped, arguments);
            v1540;
            var length = wrapped.length;
            const v1541 = name == 'shift';
            const v1542 = name == 'splice';
            const v1543 = v1541 || v1542;
            const v1544 = length === 0;
            const v1545 = v1543 && v1544;
            if (v1545) {
                const v1546 = wrapped[0];
                const v1547 = delete v1546;
                v1547;
            }
            const v1548 = this._chain;
            const v1549 = result(wrapped, v1548);
            return v1549;
        };
        v1539[name] = v1550;
    };
    const v1552 = each(v1538, v1551);
    v1552;
    const v1553 = [
        'concat',
        'join',
        'slice'
    ];
    const v1560 = function (name) {
        var method = ArrayProto[name];
        const v1554 = wrapper.prototype;
        const v1559 = function () {
            const v1555 = this._wrapped;
            const v1556 = method.apply(v1555, arguments);
            const v1557 = this._chain;
            const v1558 = result(v1556, v1557);
            return v1558;
        };
        v1554[name] = v1559;
    };
    const v1561 = each(v1553, v1560);
    v1561;
    const v1562 = wrapper.prototype;
    const v1563 = function () {
        this._chain = true;
        return this;
    };
    v1562.chain = v1563;
    const v1564 = wrapper.prototype;
    const v1566 = function () {
        const v1565 = this._wrapped;
        return v1565;
    };
    v1564.value = v1566;
};
const v1568 = v1567.call(this);
v1568;
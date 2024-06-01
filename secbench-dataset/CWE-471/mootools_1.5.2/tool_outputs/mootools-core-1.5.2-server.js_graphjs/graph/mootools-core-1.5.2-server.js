const v1046 = function () {
    const v785 = {};
    v785.version = '1.5.2';
    v785.build = 'ed01297a1a19de0675404640e7377cf97694e131';
    this.MooTools = v785;
    const v804 = function (item) {
        const v786 = item == null;
        if (v786) {
            return 'null';
        }
        const v787 = item.$family;
        const v788 = v787 != null;
        if (v788) {
            const v789 = item.$family();
            return v789;
        }
        const v790 = item.nodeName;
        if (v790) {
            const v791 = item.nodeType;
            const v792 = v791 == 1;
            if (v792) {
                return 'element';
            }
            const v793 = item.nodeType;
            const v794 = v793 == 3;
            if (v794) {
                const v795 = item.nodeValue;
                const v796 = /\S/.test(v795);
                let v797;
                if (v796) {
                    v797 = 'textnode';
                } else {
                    v797 = 'whitespace';
                }
                return v797;
            }
        } else {
            const v798 = item.length;
            const v799 = typeof v798;
            const v800 = v799 == 'number';
            if (v800) {
                const v801 = 'callee' in item;
                if (v801) {
                    return 'arguments';
                }
                const v802 = 'item' in item;
                if (v802) {
                    return 'collection';
                }
            }
        }
        const v803 = typeof item;
        return v803;
    };
    this.typeOf = v804;
    var typeOf = this.typeOf;
    const v810 = function (item, object) {
        const v805 = item == null;
        if (v805) {
            return false;
        }
        const v806 = item.$constructor;
        const v807 = item.constructor;
        var constructor = v806 || v807;
        while (constructor) {
            const v808 = constructor === object;
            if (v808) {
                return true;
            }
            constructor = constructor.parent;
        }
        const v809 = item instanceof object;
        return v809;
    };
    this.instanceOf = v810;
    var instanceOf = this.instanceOf;
    const v811 = Object.prototype;
    var hasOwnProperty = v811.hasOwnProperty;
    var Function = this.Function;
    const v812 = Function.prototype;
    const v821 = function (usePlural) {
        var self = this;
        const v820 = function (a, b) {
            const v813 = a == null;
            if (v813) {
                return this;
            }
            const v814 = typeof a;
            const v815 = v814 != 'string';
            const v816 = usePlural || v815;
            if (v816) {
                let k;
                for (k in a) {
                    const v817 = a[k];
                    const v818 = self.call(this, k, v817);
                    v818;
                }
            } else {
                const v819 = self.call(this, a, b);
                v819;
            }
            return this;
        };
        return v820;
    };
    v812.overloadSetter = v821;
    const v822 = Function.prototype;
    const v834 = function (usePlural) {
        var self = this;
        const v833 = function (a) {
            var args;
            var result;
            const v823 = typeof a;
            const v824 = v823 != 'string';
            if (v824) {
                args = a;
            } else {
                const v825 = arguments.length;
                const v826 = v825 > 1;
                if (v826) {
                    args = arguments;
                } else {
                    if (usePlural) {
                        args = [a];
                    }
                }
            }
            if (args) {
                result = {};
                var i = 0;
                const v827 = args.length;
                let v828 = i < v827;
                while (v828) {
                    const v831 = args[i];
                    const v832 = self.call(this, v831);
                    result[v830] = v832;
                    const v829 = i++;
                    v828 = i < v827;
                }
            } else {
                result = self.call(this, a);
            }
            return result;
        };
        return v833;
    };
    v822.overloadGetter = v834;
    const v836 = function (key, value) {
        this[key] = value;
    };
    const v837 = v836.overloadSetter();
    v835.extend = v837;
    const v840 = function (key, value) {
        const v839 = this.prototype;
        v839[key] = value;
    };
    const v841 = v840.overloadSetter();
    v838.implement = v841;
    const v842 = Array.prototype;
    var slice = v842.slice;
    const v847 = function (item) {
        const v843 = typeOf(item);
        const v844 = v843 == 'function';
        const v845 = function () {
            return item;
        };
        let v846;
        if (v844) {
            v846 = item;
        } else {
            v846 = v845;
        }
        return v846;
    };
    Function.from = v847;
    const v860 = function (item) {
        const v848 = item == null;
        if (v848) {
            const v849 = [];
            return v849;
        }
        const v850 = Type.isEnumerable(item);
        const v851 = typeof item;
        const v852 = v851 != 'string';
        const v853 = v850 && v852;
        const v854 = typeOf(item);
        const v855 = v854 == 'array';
        const v856 = slice.call(item);
        let v857;
        if (v855) {
            v857 = item;
        } else {
            v857 = v856;
        }
        const v858 = [item];
        let v859;
        if (v853) {
            v859 = v857;
        } else {
            v859 = v858;
        }
        return v859;
    };
    Array.from = v860;
    const v863 = function (item) {
        var number = parseFloat(item);
        const v861 = isFinite(number);
        let v862;
        if (v861) {
            v862 = number;
        } else {
            v862 = null;
        }
        return v862;
    };
    Number.from = v863;
    const v865 = function (item) {
        const v864 = item + '';
        return v864;
    };
    String.from = v865;
    const v866 = function () {
        this.$hidden = true;
        return this;
    };
    const v867 = function () {
        this.$protected = true;
        return this;
    };
    const v868 = {
        hide: v866,
        protect: v867
    };
    const v869 = Function.implement(v868);
    v869;
    const v880 = function (name, object) {
        if (name) {
            var lower = name.toLowerCase();
            var typeCheck = function (item) {
                const v870 = typeOf(item);
                const v871 = v870 == lower;
                return v871;
            };
            const v872 = 'is' + name;
            Type[v872] = typeCheck;
            const v873 = object != null;
            if (v873) {
                const v875 = function () {
                    return lower;
                };
                const v876 = v875.hide();
                v874.$family = v876;
            }
        }
        const v877 = object == null;
        if (v877) {
            return null;
        }
        const v878 = object.extend(this);
        v878;
        object.$constructor = Type;
        const v879 = object.prototype;
        v879.$constructor = object;
        return object;
    };
    this.Type = v880;
    var Type = this.Type;
    const v881 = Object.prototype;
    var toString = v881.toString;
    const v890 = function (item) {
        const v882 = item != null;
        const v883 = item.length;
        const v884 = typeof v883;
        const v885 = v884 == 'number';
        const v886 = v882 && v885;
        const v887 = toString.call(item);
        const v888 = v887 != '[object Function]';
        const v889 = v886 && v888;
        return v889;
    };
    Type.isEnumerable = v890;
    var hooks = {};
    var hooksOf = function (object) {
        const v891 = object.prototype;
        var type = typeOf(v891);
        const v892 = hooks[type];
        const v893 = v892 || (hooks[type] = []);
        return v893;
    };
    var implement = function (name, method) {
        const v894 = method.$hidden;
        const v895 = method && v894;
        if (v895) {
            return;
        }
        var hooks = hooksOf(this);
        var i = 0;
        const v896 = hooks.length;
        let v897 = i < v896;
        while (v897) {
            var hook = hooks[i];
            const v899 = typeOf(hook);
            const v900 = v899 == 'type';
            if (v900) {
                const v901 = implement.call(hook, name, method);
                v901;
            } else {
                const v902 = hook.call(this, name, method);
                v902;
            }
            const v898 = i++;
            v897 = i < v896;
        }
        const v903 = this.prototype;
        var previous = v903[name];
        const v904 = previous == null;
        const v905 = previous.$protected;
        const v906 = !v905;
        const v907 = v904 || v906;
        if (v907) {
            const v908 = this.prototype;
            v908[name] = method;
        }
        const v909 = this[name];
        const v910 = v909 == null;
        const v911 = typeOf(method);
        const v912 = v911 == 'function';
        const v913 = v910 && v912;
        if (v913) {
            const v916 = function (item) {
                const v914 = slice.call(arguments, 1);
                const v915 = method.apply(item, v914);
                return v915;
            };
            const v917 = extend.call(this, name, v916);
            v917;
        }
    };
    var extend = function (name, method) {
        const v918 = method.$hidden;
        const v919 = method && v918;
        if (v919) {
            return;
        }
        var previous = this[name];
        const v920 = previous == null;
        const v921 = previous.$protected;
        const v922 = !v921;
        const v923 = v920 || v922;
        if (v923) {
            this[name] = method;
        }
    };
    const v924 = implement.overloadSetter();
    const v925 = extend.overloadSetter();
    const v929 = function (name, existing) {
        const v926 = this.prototype;
        const v927 = v926[existing];
        const v928 = implement.call(this, name, v927);
        v928;
    };
    const v930 = v929.overloadSetter();
    const v933 = function (hook) {
        const v931 = hooksOf(this);
        const v932 = v931.push(hook);
        v932;
        return this;
    };
    const v934 = {
        implement: v924,
        extend: v925,
        alias: v930,
        mirror: v933
    };
    const v935 = Type.implement(v934);
    v935;
    const v936 = new Type('Type', Type);
    v936;
    var force = function (name, object, methods) {
        var isType = object != Object;
        var prototype = object.prototype;
        if (isType) {
            object = new Type(name, object);
        }
        var i = 0;
        var l = methods.length;
        let v937 = i < l;
        while (v937) {
            var key = methods[i];
            var generic = object[key];
            var proto = prototype[key];
            if (generic) {
                const v939 = generic.protect();
                v939;
            }
            const v940 = isType && proto;
            if (v940) {
                const v941 = proto.protect();
                const v942 = object.implement(key, v941);
                v942;
            }
            const v938 = i++;
            v937 = i < l;
        }
        if (isType) {
            const v943 = methods[0];
            var methodsEnumerable = prototype.propertyIsEnumerable(v943);
            const v953 = function (fn) {
                const v944 = !methodsEnumerable;
                if (v944) {
                    var i = 0;
                    var l = methods.length;
                    let v945 = i < l;
                    while (v945) {
                        const v947 = methods[i];
                        const v948 = prototype[v947];
                        const v949 = methods[i];
                        const v950 = fn.call(prototype, v948, v949);
                        v950;
                        const v946 = i++;
                        v945 = i < l;
                    }
                }
                let key;
                for (key in prototype) {
                    const v951 = prototype[key];
                    const v952 = fn.call(prototype, v951, key);
                    v952;
                }
            };
            object.forEachMethod = v953;
        }
        return force;
    };
    const v954 = [
        'charAt',
        'charCodeAt',
        'concat',
        'contains',
        'indexOf',
        'lastIndexOf',
        'match',
        'quote',
        'replace',
        'search',
        'slice',
        'split',
        'substr',
        'substring',
        'trim',
        'toLowerCase',
        'toUpperCase'
    ];
    const v955 = force('String', String, v954);
    const v956 = [
        'pop',
        'push',
        'reverse',
        'shift',
        'sort',
        'splice',
        'unshift',
        'concat',
        'join',
        'slice',
        'indexOf',
        'lastIndexOf',
        'filter',
        'forEach',
        'every',
        'map',
        'some',
        'reduce',
        'reduceRight',
        'contains'
    ];
    const v957 = v955('Array', Array, v956);
    const v958 = [
        'toExponential',
        'toFixed',
        'toLocaleString',
        'toPrecision'
    ];
    const v959 = v957('Number', Number, v958);
    const v960 = [
        'apply',
        'call',
        'bind'
    ];
    const v961 = v959('Function', Function, v960);
    const v962 = [
        'exec',
        'test'
    ];
    const v963 = v961('RegExp', RegExp, v962);
    const v964 = [
        'create',
        'defineProperty',
        'defineProperties',
        'keys',
        'getPrototypeOf',
        'getOwnPropertyDescriptor',
        'getOwnPropertyNames',
        'preventExtensions',
        'isExtensible',
        'seal',
        'isSealed',
        'freeze',
        'isFrozen'
    ];
    const v965 = v963('Object', Object, v964);
    const v966 = ['now'];
    const v967 = v965('Date', Date, v966);
    v967;
    const v968 = extend.overloadSetter();
    Object.extend = v968;
    const v971 = function () {
        const v969 = new Date();
        const v970 = +v969;
        return v970;
    };
    const v972 = Date.extend('now', v971);
    v972;
    const v973 = new Type('Boolean', Boolean);
    v973;
    const v977 = function () {
        const v975 = isFinite(this);
        let v976;
        if (v975) {
            v976 = 'number';
        } else {
            v976 = 'null';
        }
        return v976;
    };
    const v978 = v977.hide();
    v974.$family = v978;
    const v985 = function (min, max) {
        const v979 = Math.random();
        const v980 = max - min;
        const v981 = v980 + 1;
        const v982 = v979 * v981;
        const v983 = v982 + min;
        const v984 = Math.floor(v983);
        return v984;
    };
    const v986 = Number.extend('random', v985);
    v986;
    const v988 = function (fn, bind) {
        const v987 = Array.forEach(this, fn, bind);
        v987;
        return this;
    };
    const v989 = { each: v988 };
    const v990 = Array.implement(v989);
    v990;
    const v993 = function (object) {
        var keys = [];
        let k;
        for (k in object) {
            const v991 = hasOwnProperty.call(object, k);
            if (v991) {
                const v992 = keys.push(k);
                v992;
            }
        }
        return keys;
    };
    const v999 = function (object, fn, bind) {
        const v994 = Object.keys(object);
        const v997 = function (key) {
            const v995 = object[key];
            const v996 = fn.call(bind, v995, key, object);
            v996;
        };
        const v998 = v994.forEach(v997);
        v998;
    };
    const v1000 = {
        keys: v993,
        forEach: v999
    };
    const v1001 = Object.extend(v1000);
    v1001;
    const v1002 = Object.forEach;
    Object.each = v1002;
    var cloneOf = function (item) {
        const v1003 = typeOf(item);
        switch (v1003) {
        case 'array':
            const v1004 = item.clone();
            return v1004;
        case 'object':
            const v1005 = Object.clone(item);
            return v1005;
        default:
            return item;
        }
    };
    const v1009 = function () {
        var i = this.length;
        var clone = new Array(i);
        let v1006 = i--;
        while (v1006) {
            const v1007 = this[i];
            const v1008 = cloneOf(v1007);
            clone[i] = v1008;
            v1006 = i--;
        }
        return clone;
    };
    const v1010 = Array.implement('clone', v1009);
    v1010;
    var mergeOne = function (source, key, current) {
        const v1011 = typeOf(current);
        switch (v1011) {
        case 'object':
            const v1012 = source[key];
            const v1013 = typeOf(v1012);
            const v1014 = v1013 == 'object';
            if (v1014) {
                const v1015 = source[key];
                const v1016 = Object.merge(v1015, current);
                v1016;
            } else {
                const v1017 = Object.clone(current);
                source[key] = v1017;
            }
            break;
        case 'array':
            const v1018 = current.clone();
            source[key] = v1018;
            break;
        default:
            source[key] = current;
        }
        return source;
    };
    const v1026 = function (source, k, v) {
        const v1019 = typeOf(k);
        const v1020 = v1019 == 'string';
        if (v1020) {
            const v1021 = mergeOne(source, k, v);
            return v1021;
        }
        var i = 1;
        var l = arguments.length;
        let v1022 = i < l;
        while (v1022) {
            var object = arguments[i];
            let key;
            for (key in object) {
                const v1024 = object[key];
                const v1025 = mergeOne(source, key, v1024);
                v1025;
            }
            const v1023 = i++;
            v1022 = i < l;
        }
        return source;
    };
    const v1029 = function (object) {
        var clone = {};
        let key;
        for (key in object) {
            const v1027 = object[key];
            const v1028 = cloneOf(v1027);
            clone[key] = v1028;
        }
        return clone;
    };
    const v1035 = function (original) {
        var i = 1;
        var l = arguments.length;
        let v1030 = i < l;
        while (v1030) {
            const v1032 = arguments[i];
            const v1033 = {};
            var extended = v1032 || v1033;
            let key;
            for (key in extended) {
                const v1034 = extended[key];
                original[key] = v1034;
            }
            const v1031 = i++;
            v1030 = i < l;
        }
        return original;
    };
    const v1036 = {
        merge: v1026,
        clone: v1029,
        append: v1035
    };
    const v1037 = Object.extend(v1036);
    v1037;
    const v1038 = [
        'Object',
        'WhiteSpace',
        'TextNode',
        'Collection',
        'Arguments'
    ];
    const v1040 = function (name) {
        const v1039 = new Type(name);
        v1039;
    };
    const v1041 = v1038.each(v1040);
    v1041;
    var UID = Date.now();
    const v1044 = function () {
        const v1042 = UID++;
        const v1043 = v1042.toString(36);
        return v1043;
    };
    const v1045 = String.extend('uniqueID', v1044);
    v1045;
};
const v1047 = v1046();
v1047;
const v1051 = function () {
    const v1049 = function (item) {
        const v1048 = item != null;
        return v1048;
    };
    const v1050 = this.filter(v1049);
    return v1050;
};
const v1056 = function (methodName) {
    var args = Array.slice(arguments, 1);
    const v1054 = function (item) {
        const v1052 = item[methodName];
        const v1053 = v1052.apply(item, args);
        return v1053;
    };
    const v1055 = this.map(v1054);
    return v1055;
};
const v1063 = function (keys) {
    var obj = {};
    const v1057 = this.length;
    const v1058 = keys.length;
    var length = Math.min(v1057, v1058);
    var i = 0;
    let v1059 = i < length;
    while (v1059) {
        const v1061 = keys[i];
        const v1062 = this[i];
        obj[v1061] = v1062;
        const v1060 = i++;
        v1059 = i < length;
    }
    return obj;
};
const v1071 = function (object) {
    var result = {};
    var i = 0;
    var l = this.length;
    let v1064 = i < l;
    while (v1064) {
        let key;
        for (key in object) {
            const v1066 = this[i];
            const v1067 = object[key](v1066);
            if (v1067) {
                const v1068 = this[i];
                result[key] = v1068;
                const v1069 = object[key];
                const v1070 = delete v1069;
                v1070;
                break;
            }
        }
        const v1065 = i++;
        v1064 = i < l;
    }
    return result;
};
const v1075 = function (item, from) {
    const v1072 = this.indexOf(item, from);
    const v1073 = -1;
    const v1074 = v1072 != v1073;
    return v1074;
};
const v1078 = function (array) {
    const v1076 = this.push;
    const v1077 = v1076.apply(this, array);
    v1077;
    return this;
};
const v1084 = function () {
    const v1079 = this.length;
    const v1080 = this.length;
    const v1081 = v1080 - 1;
    const v1082 = this[v1081];
    let v1083;
    if (v1079) {
        v1083 = v1082;
    } else {
        v1083 = null;
    }
    return v1083;
};
const v1091 = function () {
    const v1085 = this.length;
    const v1086 = this.length;
    const v1087 = v1086 - 1;
    const v1088 = Number.random(0, v1087);
    const v1089 = this[v1088];
    let v1090;
    if (v1085) {
        v1090 = v1089;
    } else {
        v1090 = null;
    }
    return v1090;
};
const v1095 = function (item) {
    const v1092 = this.contains(item);
    const v1093 = !v1092;
    if (v1093) {
        const v1094 = this.push(item);
        v1094;
    }
    return this;
};
const v1100 = function (array) {
    var i = 0;
    var l = array.length;
    let v1096 = i < l;
    while (v1096) {
        const v1098 = array[i];
        const v1099 = this.include(v1098);
        v1099;
        const v1097 = i++;
        v1096 = i < l;
    }
    return this;
};
const v1105 = function (item) {
    var i = this.length;
    let v1101 = i--;
    while (v1101) {
        const v1102 = this[i];
        const v1103 = v1102 === item;
        if (v1103) {
            const v1104 = this.splice(i, 1);
            v1104;
        }
        v1101 = i--;
    }
    return this;
};
const v1106 = function () {
    this.length = 0;
    return this;
};
const v1123 = function () {
    var array = [];
    var i = 0;
    var l = this.length;
    let v1107 = i < l;
    while (v1107) {
        const v1109 = this[i];
        var type = typeOf(v1109);
        const v1110 = type == 'null';
        if (v1110) {
            continue;
        }
        const v1111 = type == 'array';
        const v1112 = type == 'collection';
        const v1113 = v1111 || v1112;
        const v1114 = type == 'arguments';
        const v1115 = v1113 || v1114;
        const v1116 = this[i];
        const v1117 = instanceOf(v1116, Array);
        const v1118 = v1115 || v1117;
        const v1119 = this[i];
        const v1120 = Array.flatten(v1119);
        const v1121 = this[i];
        let v1122;
        if (v1118) {
            v1122 = v1120;
        } else {
            v1122 = v1121;
        }
        array = array.concat(v1122);
        const v1108 = i++;
        v1107 = i < l;
    }
    return array;
};
const v1129 = function () {
    var i = 0;
    var l = this.length;
    let v1124 = i < l;
    while (v1124) {
        const v1126 = this[i];
        const v1127 = v1126 != null;
        if (v1127) {
            const v1128 = this[i];
            return v1128;
        }
        const v1125 = i++;
        v1124 = i < l;
    }
    return null;
};
const v1139 = function (array) {
    const v1130 = this.length;
    const v1131 = v1130 != 3;
    if (v1131) {
        return null;
    }
    const v1135 = function (value) {
        const v1132 = value.length;
        const v1133 = v1132 == 1;
        if (v1133) {
            value += value;
        }
        const v1134 = parseInt(value, 16);
        return v1134;
    };
    var rgb = this.map(v1135);
    const v1136 = 'rgb(' + rgb;
    const v1137 = v1136 + ')';
    let v1138;
    if (array) {
        v1138 = rgb;
    } else {
        v1138 = v1137;
    }
    return v1138;
};
const v1161 = function (array) {
    const v1140 = this.length;
    const v1141 = v1140 < 3;
    if (v1141) {
        return null;
    }
    const v1142 = this.length;
    const v1143 = v1142 == 4;
    const v1144 = this[3];
    const v1145 = v1144 == 0;
    const v1146 = v1143 && v1145;
    const v1147 = !array;
    const v1148 = v1146 && v1147;
    if (v1148) {
        return 'transparent';
    }
    var hex = [];
    var i = 0;
    let v1149 = i < 3;
    while (v1149) {
        const v1151 = this[i];
        const v1152 = v1151 - 0;
        var bit = v1152.toString(16);
        const v1153 = bit.length;
        const v1154 = v1153 == 1;
        const v1155 = '0' + bit;
        let v1156;
        if (v1154) {
            v1156 = v1155;
        } else {
            v1156 = bit;
        }
        const v1157 = hex.push(v1156);
        v1157;
        const v1150 = i++;
        v1149 = i < 3;
    }
    const v1158 = hex.join('');
    const v1159 = '#' + v1158;
    let v1160;
    if (array) {
        v1160 = hex;
    } else {
        v1160 = v1159;
    }
    return v1160;
};
const v1162 = {
    clean: v1051,
    invoke: v1056,
    associate: v1063,
    link: v1071,
    contains: v1075,
    append: v1078,
    getLast: v1084,
    getRandom: v1091,
    include: v1095,
    combine: v1100,
    erase: v1105,
    empty: v1106,
    flatten: v1123,
    pick: v1129,
    hexToRgb: v1139,
    rgbToHex: v1161
};
const v1163 = Array.implement(v1162);
v1163;
const v1171 = function (string, index) {
    const v1164 = String(this);
    const v1165 = v1164.slice(index);
    const v1166 = String(this);
    let v1167;
    if (index) {
        v1167 = v1165;
    } else {
        v1167 = v1166;
    }
    const v1168 = v1167.indexOf(string);
    const v1169 = -1;
    const v1170 = v1168 > v1169;
    return v1170;
};
const v1178 = function (regex, params) {
    const v1172 = typeOf(regex);
    const v1173 = v1172 == 'regexp';
    const v1174 = '' + regex;
    const v1175 = new RegExp(v1174, params);
    let v1176;
    if (v1173) {
        v1176 = regex;
    } else {
        v1176 = v1175;
    }
    const v1177 = v1176.test(this);
    return v1177;
};
const v1181 = function () {
    const v1179 = String(this);
    const v1180 = v1179.replace(/^\s+|\s+$/g, '');
    return v1180;
};
const v1185 = function () {
    const v1182 = String(this);
    const v1183 = v1182.replace(/\s+/g, ' ');
    const v1184 = v1183.trim();
    return v1184;
};
const v1191 = function () {
    const v1186 = String(this);
    const v1189 = function (match) {
        const v1187 = match.charAt(1);
        const v1188 = v1187.toUpperCase();
        return v1188;
    };
    const v1190 = v1186.replace(/-\D/g, v1189);
    return v1190;
};
const v1198 = function () {
    const v1192 = String(this);
    const v1196 = function (match) {
        const v1193 = match.charAt(0);
        const v1194 = v1193.toLowerCase();
        const v1195 = '-' + v1194;
        return v1195;
    };
    const v1197 = v1192.replace(/[A-Z]/g, v1196);
    return v1197;
};
const v1203 = function () {
    const v1199 = String(this);
    const v1201 = function (match) {
        const v1200 = match.toUpperCase();
        return v1200;
    };
    const v1202 = v1199.replace(/\b[a-z]/g, v1201);
    return v1202;
};
const v1206 = function () {
    const v1204 = String(this);
    const v1205 = v1204.replace(/([-.*+?^${}()|[\]\/\\])/g, '\\$1');
    return v1205;
};
const v1209 = function (base) {
    const v1207 = base || 10;
    const v1208 = parseInt(this, v1207);
    return v1208;
};
const v1211 = function () {
    const v1210 = parseFloat(this);
    return v1210;
};
const v1216 = function (array) {
    const v1212 = String(this);
    var hex = v1212.match(/^#?(\w{1,2})(\w{1,2})(\w{1,2})$/);
    const v1213 = hex.slice(1);
    const v1214 = v1213.hexToRgb(array);
    let v1215;
    if (hex) {
        v1215 = v1214;
    } else {
        v1215 = null;
    }
    return v1215;
};
const v1220 = function (array) {
    const v1217 = String(this);
    var rgb = v1217.match(/\d{1,3}/g);
    const v1218 = rgb.rgbToHex(array);
    let v1219;
    if (rgb) {
        v1219 = v1218;
    } else {
        v1219 = null;
    }
    return v1219;
};
const v1232 = function (object, regexp) {
    const v1221 = String(this);
    const v1222 = regexp || /\\?\{([^{}]+)\}/g;
    const v1230 = function (match, name) {
        const v1223 = match.charAt(0);
        const v1224 = v1223 == '\\';
        if (v1224) {
            const v1225 = match.slice(1);
            return v1225;
        }
        const v1226 = object[name];
        const v1227 = v1226 != null;
        const v1228 = object[name];
        let v1229;
        if (v1227) {
            v1229 = v1228;
        } else {
            v1229 = '';
        }
        return v1229;
    };
    const v1231 = v1221.replace(v1222, v1230);
    return v1231;
};
const v1233 = {
    contains: v1171,
    test: v1178,
    trim: v1181,
    clean: v1185,
    camelCase: v1191,
    hyphenate: v1198,
    capitalize: v1203,
    escapeRegExp: v1206,
    toInt: v1209,
    toFloat: v1211,
    hexToRgb: v1216,
    rgbToHex: v1220,
    substitute: v1232
};
const v1234 = String.implement(v1233);
v1234;
const v1237 = function (min, max) {
    const v1235 = Math.max(min, this);
    const v1236 = Math.min(max, v1235);
    return v1236;
};
const v1246 = function (precision) {
    const v1238 = precision || 0;
    const v1239 = Math.pow(10, v1238);
    const v1240 = precision < 0;
    const v1241 = -precision;
    let v1242;
    if (v1240) {
        v1242 = v1241;
    } else {
        v1242 = 0;
    }
    precision = v1239.toFixed(v1242);
    const v1243 = this * precision;
    const v1244 = Math.round(v1243);
    const v1245 = v1244 / precision;
    return v1245;
};
const v1250 = function (fn, bind) {
    var i = 0;
    let v1247 = i < this;
    while (v1247) {
        const v1249 = fn.call(bind, i, this);
        v1249;
        const v1248 = i++;
        v1247 = i < this;
    }
};
const v1252 = function () {
    const v1251 = parseFloat(this);
    return v1251;
};
const v1255 = function (base) {
    const v1253 = base || 10;
    const v1254 = parseInt(this, v1253);
    return v1254;
};
const v1256 = {
    limit: v1237,
    round: v1246,
    times: v1250,
    toFloat: v1252,
    toInt: v1255
};
const v1257 = Number.implement(v1256);
v1257;
const v1258 = Number.alias('each', 'times');
v1258;
const v1270 = function (math) {
    var methods = {};
    const v1267 = function (name) {
        const v1259 = Number[name];
        const v1260 = !v1259;
        if (v1260) {
            const v1266 = function () {
                const v1261 = Math[name];
                const v1262 = [this];
                const v1263 = Array.from(arguments);
                const v1264 = v1262.concat(v1263);
                const v1265 = v1261.apply(null, v1264);
                return v1265;
            };
            methods[name] = v1266;
        }
    };
    const v1268 = math.each(v1267);
    v1268;
    const v1269 = Number.implement(methods);
    v1269;
};
const v1271 = [
    'abs',
    'acos',
    'asin',
    'atan',
    'atan2',
    'ceil',
    'cos',
    'exp',
    'floor',
    'log',
    'max',
    'min',
    'pow',
    'sin',
    'sqrt',
    'tan'
];
const v1272 = v1270(v1271);
v1272;
const v1276 = function () {
    var i = 0;
    var l = arguments.length;
    let v1273 = i < l;
    while (v1273) {
        try {
            const v1275 = arguments[i]();
            return v1275;
        } catch (e) {
        }
        const v1274 = i++;
        v1273 = i < l;
    }
    return null;
};
const v1277 = { attempt: v1276 };
const v1278 = Function.extend(v1277);
v1278;
const v1281 = function (args, bind) {
    try {
        const v1279 = Array.from(args);
        const v1280 = this.apply(bind, v1279);
        return v1280;
    } catch (e) {
    }
    return null;
};
const v1286 = function (args, bind) {
    var self = this;
    const v1282 = args != null;
    if (v1282) {
        args = Array.from(args);
    }
    const v1285 = function () {
        const v1283 = args || arguments;
        const v1284 = self.apply(bind, v1283);
        return v1284;
    };
    return v1285;
};
const v1292 = function (delay, bind, args) {
    const v1287 = args == null;
    const v1288 = [];
    let v1289;
    if (v1287) {
        v1289 = v1288;
    } else {
        v1289 = args;
    }
    const v1290 = this.pass(v1289, bind);
    const v1291 = setTimeout(v1290, delay);
    return v1291;
};
const v1298 = function (periodical, bind, args) {
    const v1293 = args == null;
    const v1294 = [];
    let v1295;
    if (v1293) {
        v1295 = v1294;
    } else {
        v1295 = args;
    }
    const v1296 = this.pass(v1295, bind);
    const v1297 = setInterval(v1296, periodical);
    return v1297;
};
const v1299 = {
    attempt: v1281,
    pass: v1286,
    delay: v1292,
    periodical: v1298
};
const v1300 = Function.implement(v1299);
v1300;
const v1364 = function () {
    const v1301 = Object.prototype;
    var hasOwnProperty = v1301.hasOwnProperty;
    const v1306 = function (object, keys) {
        var results = {};
        var i = 0;
        var l = keys.length;
        let v1302 = i < l;
        while (v1302) {
            var k = keys[i];
            const v1304 = k in object;
            if (v1304) {
                const v1305 = object[k];
                results[k] = v1305;
            }
            const v1303 = i++;
            v1302 = i < l;
        }
        return results;
    };
    const v1312 = function (object, fn, bind) {
        var results = {};
        var keys = Object.keys(object);
        var i = 0;
        const v1307 = keys.length;
        let v1308 = i < v1307;
        while (v1308) {
            var key = keys[i];
            const v1310 = object[key];
            const v1311 = fn.call(bind, v1310, key, object);
            results[key] = v1311;
            const v1309 = i++;
            v1308 = i < v1307;
        }
        return results;
    };
    const v1317 = function (object, fn, bind) {
        var results = {};
        var keys = Object.keys(object);
        var i = 0;
        const v1313 = keys.length;
        let v1314 = i < v1313;
        while (v1314) {
            var key = keys[i];
            var value = object[key];
            const v1316 = fn.call(bind, value, key, object);
            if (v1316) {
                results[key] = value;
            }
            const v1315 = i++;
            v1314 = i < v1313;
        }
        return results;
    };
    const v1324 = function (object, fn, bind) {
        var keys = Object.keys(object);
        var i = 0;
        const v1318 = keys.length;
        let v1319 = i < v1318;
        while (v1319) {
            var key = keys[i];
            const v1321 = object[key];
            const v1322 = fn.call(bind, v1321, key);
            const v1323 = !v1322;
            if (v1323) {
                return false;
            }
            const v1320 = i++;
            v1319 = i < v1318;
        }
        return true;
    };
    const v1330 = function (object, fn, bind) {
        var keys = Object.keys(object);
        var i = 0;
        const v1325 = keys.length;
        let v1326 = i < v1325;
        while (v1326) {
            var key = keys[i];
            const v1328 = object[key];
            const v1329 = fn.call(bind, v1328, key);
            if (v1329) {
                return true;
            }
            const v1327 = i++;
            v1326 = i < v1325;
        }
        return false;
    };
    const v1336 = function (object) {
        var values = [];
        var keys = Object.keys(object);
        var i = 0;
        const v1331 = keys.length;
        let v1332 = i < v1331;
        while (v1332) {
            var k = keys[i];
            const v1334 = object[k];
            const v1335 = values.push(v1334);
            v1335;
            const v1333 = i++;
            v1332 = i < v1331;
        }
        return values;
    };
    const v1339 = function (object) {
        const v1337 = Object.keys(object);
        const v1338 = v1337.length;
        return v1338;
    };
    const v1345 = function (object, value) {
        var keys = Object.keys(object);
        var i = 0;
        const v1340 = keys.length;
        let v1341 = i < v1340;
        while (v1341) {
            var key = keys[i];
            const v1343 = object[key];
            const v1344 = v1343 === value;
            if (v1344) {
                return key;
            }
            const v1342 = i++;
            v1341 = i < v1340;
        }
        return null;
    };
    const v1348 = function (object, value) {
        const v1346 = Object.keyOf(object, value);
        const v1347 = v1346 != null;
        return v1347;
    };
    const v1361 = function (object, base) {
        var queryString = [];
        const v1358 = function (value, key) {
            if (base) {
                const v1349 = base + '[';
                const v1350 = v1349 + key;
                key = v1350 + ']';
            }
            var result;
            const v1351 = typeOf(value);
            switch (v1351) {
            case 'object':
                result = Object.toQueryString(value, key);
                break;
            case 'array':
                var qs = {};
                const v1352 = function (val, i) {
                    qs[i] = val;
                };
                const v1353 = value.each(v1352);
                v1353;
                result = Object.toQueryString(qs, key);
                break;
            default:
                const v1354 = key + '=';
                const v1355 = encodeURIComponent(value);
                result = v1354 + v1355;
            }
            const v1356 = value != null;
            if (v1356) {
                const v1357 = queryString.push(result);
                v1357;
            }
        };
        const v1359 = Object.each(object, v1358);
        v1359;
        const v1360 = queryString.join('&');
        return v1360;
    };
    const v1362 = {
        subset: v1306,
        map: v1312,
        filter: v1317,
        every: v1324,
        some: v1330,
        values: v1336,
        getLength: v1339,
        keyOf: v1345,
        contains: v1348,
        toQueryString: v1361
    };
    const v1363 = Object.extend(v1362);
    v1363;
};
const v1365 = v1364();
v1365;
const v1430 = function () {
    const v1376 = function (params) {
        const v1366 = instanceOf(params, Function);
        if (v1366) {
            params.initialize = params;
            params = {};
            params = {};
        }
        const v1372 = function () {
            const v1367 = reset(this);
            v1367;
            const v1368 = newClass.$prototyping;
            if (v1368) {
                return this;
            }
            this.$caller = null;
            this.$family = null;
            let value;
            const v1369 = this.initialize;
            const v1370 = this.initialize;
            const v1371 = v1370.apply(this, arguments);
            if (v1369) {
                value = v1371;
            } else {
                value = this;
            }
            this.$caller = this.caller = null;
            return value;
        };
        const v1373 = v1372.extend(this);
        var newClass = v1373.implement(params);
        newClass.$constructor = Class;
        const v1374 = newClass.prototype;
        v1374.$constructor = newClass;
        const v1375 = newClass.prototype;
        v1375.parent = parent;
        return newClass;
    };
    this.Class = new Type('Class', v1376);
    var Class = this.Class;
    var parent = function () {
        const v1377 = this.$caller;
        const v1378 = !v1377;
        if (v1378) {
            const v1379 = new Error('The method "parent" cannot be called.');
            throw v1379;
        }
        const v1380 = this.$caller;
        var name = v1380.$name;
        const v1381 = this.$caller;
        const v1382 = v1381.$owner;
        var parent = v1382.parent;
        let previous;
        const v1383 = parent.prototype;
        const v1384 = v1383[name];
        if (parent) {
            previous = v1384;
        } else {
            previous = null;
        }
        const v1385 = !previous;
        if (v1385) {
            const v1386 = 'The method "' + name;
            const v1387 = v1386 + '" has no parent.';
            const v1388 = new Error(v1387);
            throw v1388;
        }
        const v1389 = previous.apply(this, arguments);
        return v1389;
    };
    var reset = function (object) {
        let key;
        for (key in object) {
            var value = object[key];
            const v1390 = typeOf(value);
            switch (v1390) {
            case 'object':
                var F = function () {
                };
                F.prototype = value;
                const v1391 = new F();
                const v1392 = reset(v1391);
                object[key] = v1392;
                break;
            case 'array':
                const v1393 = value.clone();
                object[key] = v1393;
                break;
            }
        }
        return object;
    };
    var wrap = function (self, key, method) {
        const v1394 = method.$origin;
        if (v1394) {
            method = method.$origin;
        }
        const v1402 = function () {
            const v1395 = method.$protected;
            const v1396 = this.$caller;
            const v1397 = v1396 == null;
            const v1398 = v1395 && v1397;
            if (v1398) {
                const v1399 = 'The method "' + key;
                const v1400 = v1399 + '" cannot be called.';
                const v1401 = new Error(v1400);
                throw v1401;
            }
            var caller = this.caller;
            var current = this.$caller;
            this.caller = current;
            this.$caller = wrapper;
            var result = method.apply(this, arguments);
            this.$caller = current;
            this.caller = caller;
            return result;
        };
        const v1403 = {
            $owner: self,
            $origin: method,
            $name: key
        };
        var wrapper = v1402.extend(v1403);
        return wrapper;
    };
    var implement = function (key, value, retain) {
        const v1404 = Class.Mutators;
        const v1405 = v1404.hasOwnProperty(key);
        if (v1405) {
            const v1406 = Class.Mutators;
            const v1407 = v1406[key];
            value = v1407.call(this, value);
            const v1408 = value == null;
            if (v1408) {
                return this;
            }
        }
        const v1409 = typeOf(value);
        const v1410 = v1409 == 'function';
        if (v1410) {
            const v1411 = value.$hidden;
            if (v1411) {
                return this;
            }
            const v1412 = this.prototype;
            const v1413 = wrap(this, key, value);
            let v1414;
            if (retain) {
                v1414 = value;
            } else {
                v1414 = v1413;
            }
            v1412[key] = v1414;
        } else {
            const v1415 = this.prototype;
            const v1416 = Object.merge(v1415, key, value);
            v1416;
        }
        return this;
    };
    var getInstance = function (klass) {
        klass.$prototyping = true;
        var proto = new klass();
        const v1417 = klass.$prototyping;
        const v1418 = delete v1417;
        v1418;
        return proto;
    };
    const v1419 = implement.overloadSetter();
    const v1420 = Class.implement('implement', v1419);
    v1420;
    const v1422 = function (parent) {
        this.parent = parent;
        const v1421 = getInstance(parent);
        this.prototype = v1421;
    };
    const v1428 = function (items) {
        const v1423 = Array.from(items);
        const v1426 = function (item) {
            var instance = new item();
            let key;
            for (key in instance) {
                const v1424 = instance[key];
                const v1425 = implement.call(this, key, v1424, true);
                v1425;
            }
        };
        const v1427 = v1423.each(v1426, this);
        v1427;
    };
    const v1429 = {};
    v1429.Extends = v1422;
    v1429.Implements = v1428;
    Class.Mutators = v1429;
};
const v1431 = v1430();
v1431;
const v1511 = function () {
    const v1432 = [];
    const v1436 = function () {
        const v1433 = this.$chain;
        const v1434 = Array.flatten(arguments);
        const v1435 = v1433.append(v1434);
        v1435;
        return this;
    };
    const v1443 = function () {
        const v1437 = this.$chain;
        const v1438 = v1437.length;
        const v1439 = this.$chain;
        const v1440 = v1439.shift();
        const v1441 = v1440.apply(this, arguments);
        let v1442;
        if (v1438) {
            v1442 = v1441;
        } else {
            v1442 = false;
        }
        return v1442;
    };
    const v1446 = function () {
        const v1444 = this.$chain;
        const v1445 = v1444.empty();
        v1445;
        return this;
    };
    const v1447 = {
        $chain: v1432,
        chain: v1436,
        callChain: v1443,
        clearChain: v1446
    };
    this.Chain = new Class(v1447);
    var removeOn = function (string) {
        const v1449 = function (full, first) {
            const v1448 = first.toLowerCase();
            return v1448;
        };
        const v1450 = string.replace(/^on([A-Z])/, v1449);
        return v1450;
    };
    const v1451 = {};
    const v1458 = function (type, fn, internal) {
        type = removeOn(type);
        const v1453 = this.$events;
        const v1454 = v1453[type];
        const v1455 = [];
        const v1456 = v1454 || v1455;
        const v1457 = v1456.include(fn);
        v1452[type] = v1457;
        if (internal) {
            fn.internal = true;
        }
        return this;
    };
    const v1461 = function (events) {
        let type;
        for (type in events) {
            const v1459 = events[type];
            const v1460 = this.addEvent(type, v1459);
            v1460;
        }
        return this;
    };
    const v1468 = function (type, args, delay) {
        type = removeOn(type);
        const v1462 = this.$events;
        var events = v1462[type];
        const v1463 = !events;
        if (v1463) {
            return this;
        }
        args = Array.from(args);
        const v1466 = function (fn) {
            if (delay) {
                const v1464 = fn.delay(delay, this, args);
                v1464;
            } else {
                const v1465 = fn.apply(this, args);
                v1465;
            }
        };
        const v1467 = events.each(v1466, this);
        v1467;
        return this;
    };
    const v1477 = function (type, fn) {
        type = removeOn(type);
        const v1469 = this.$events;
        var events = v1469[type];
        const v1470 = fn.internal;
        const v1471 = !v1470;
        const v1472 = events && v1471;
        if (v1472) {
            var index = events.indexOf(fn);
            const v1473 = -1;
            const v1474 = index != v1473;
            if (v1474) {
                const v1475 = events[index];
                const v1476 = delete v1475;
                v1476;
            }
        }
        return this;
    };
    const v1490 = function (events) {
        var type;
        const v1478 = typeOf(events);
        const v1479 = v1478 == 'object';
        if (v1479) {
            for (type in events) {
                const v1480 = events[type];
                const v1481 = this.removeEvent(type, v1480);
                v1481;
            }
            return this;
        }
        if (events) {
            events = removeOn(events);
        }
        const v1482 = this.$events;
        for (type in v1482) {
            const v1483 = events != type;
            const v1484 = events && v1483;
            if (v1484) {
                continue;
            }
            const v1485 = this.$events;
            var fns = v1485[type];
            var i = fns.length;
            let v1486 = i--;
            while (v1486) {
                const v1487 = i in fns;
                if (v1487) {
                    const v1488 = fns[i];
                    const v1489 = this.removeEvent(type, v1488);
                    v1489;
                }
                v1486 = i--;
            }
        }
        return this;
    };
    const v1491 = {
        $events: v1451,
        addEvent: v1458,
        addEvents: v1461,
        fireEvent: v1468,
        removeEvent: v1477,
        removeEvents: v1490
    };
    this.Events = new Class(v1491);
    const v1509 = function () {
        const v1492 = Object.merge;
        const v1493 = {};
        const v1494 = this.options;
        const v1495 = [
            v1493,
            v1494
        ];
        const v1496 = v1495.append(arguments);
        const v1497 = v1492.apply(null, v1496);
        this.options = v1497;
        var options = this.options;
        const v1498 = this.addEvent;
        if (v1498) {
            let option;
            for (option in options) {
                const v1499 = options[option];
                const v1500 = typeOf(v1499);
                const v1501 = v1500 != 'function';
                const v1502 = /^on[A-Z]/.test(option);
                const v1503 = !v1502;
                const v1504 = v1501 || v1503;
                if (v1504) {
                    continue;
                }
                const v1505 = options[option];
                const v1506 = this.addEvent(option, v1505);
                v1506;
                const v1507 = options[option];
                const v1508 = delete v1507;
                v1508;
            }
        }
        return this;
    };
    const v1510 = { setOptions: v1509 };
    this.Options = new Class(v1510);
};
const v1512 = v1511();
v1512;
const v1513 = typeof JSON;
const v1514 = v1513 == 'undefined';
if (v1514) {
    const v1515 = {};
    this.JSON = v1515;
}
const v1567 = function () {
    var special = {};
    special['\b'] = '\\b';
    special['\t'] = '\\t';
    special['\n'] = '\\n';
    special['\f'] = '\\f';
    special['\r'] = '\\r';
    special['"'] = '\\"';
    special['\\'] = '\\\\';
    var escape = function (chr) {
        const v1516 = special[chr];
        const v1517 = chr.charCodeAt(0);
        const v1518 = v1517.toString(16);
        const v1519 = '0000' + v1518;
        const v1520 = -4;
        const v1521 = v1519.slice(v1520);
        const v1522 = '\\u' + v1521;
        const v1523 = v1516 || v1522;
        return v1523;
    };
    const v1527 = function (string) {
        const v1524 = string.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@');
        const v1525 = v1524.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']');
        string = v1525.replace(/(?:^|:|,)(?:\s*\[)+/g, '');
        const v1526 = /^[\],:{}\s]*$/.test(string);
        return v1526;
    };
    JSON.validate = v1527;
    const v1528 = JSON.stringify;
    const v1530 = function (obj) {
        const v1529 = JSON.stringify(obj);
        return v1529;
    };
    const v1551 = function (obj) {
        const v1531 = obj.toJSON;
        const v1532 = obj && v1531;
        if (v1532) {
            obj = obj.toJSON();
        }
        const v1533 = typeOf(obj);
        switch (v1533) {
        case 'string':
            const v1534 = obj.replace(/[\x00-\x1f\\"]/g, escape);
            const v1535 = '"' + v1534;
            const v1536 = v1535 + '"';
            return v1536;
        case 'array':
            const v1537 = JSON.encode;
            const v1538 = obj.map(v1537);
            const v1539 = v1538.clean();
            const v1540 = '[' + v1539;
            const v1541 = v1540 + ']';
            return v1541;
        case 'object':
        case 'hash':
            var string = [];
            const v1546 = function (value, key) {
                var json = JSON.encode(value);
                if (json) {
                    const v1542 = JSON.encode(key);
                    const v1543 = v1542 + ':';
                    const v1544 = v1543 + json;
                    const v1545 = string.push(v1544);
                    v1545;
                }
            };
            const v1547 = Object.each(obj, v1546);
            v1547;
            const v1548 = '{' + string;
            const v1549 = v1548 + '}';
            return v1549;
        case 'number':
        case 'boolean':
            const v1550 = '' + obj;
            return v1550;
        case 'null':
            return 'null';
        }
        return null;
    };
    let v1552;
    if (v1528) {
        v1552 = v1530;
    } else {
        v1552 = v1551;
    }
    JSON.encode = v1552;
    JSON.secure = true;
    const v1566 = function (string, secure) {
        const v1553 = !string;
        const v1554 = typeOf(string);
        const v1555 = v1554 != 'string';
        const v1556 = v1553 || v1555;
        if (v1556) {
            return null;
        }
        const v1557 = secure == null;
        if (v1557) {
            secure = JSON.secure;
        }
        if (secure) {
            const v1558 = JSON.parse;
            if (v1558) {
                const v1559 = JSON.parse(string);
                return v1559;
            }
            const v1560 = JSON.validate(string);
            const v1561 = !v1560;
            if (v1561) {
                const v1562 = new Error('JSON could not decode the input; security is enabled and the value is not secure.');
                throw v1562;
            }
        }
        const v1563 = '(' + string;
        const v1564 = v1563 + ')';
        const v1565 = eval(v1564);
        return v1565;
    };
    JSON.decode = v1566;
};
const v1568 = v1567();
v1568;
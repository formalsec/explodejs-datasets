var camelCase = require('camelcase');
var path = require('path');
var tokenizeArgString = require('./lib/tokenize-arg-string');
var util = require('util');
const parse = function (args, opts) {
    const v790 = !opts;
    if (v790) {
        opts = {};
    }
    args = tokenizeArgString(args);
    const v791 = opts.alias;
    const v792 = {};
    const v793 = v791 || v792;
    var aliases = combineAliases(v793);
    const v794 = {
        'short-option-groups': true,
        'camel-case-expansion': true,
        'dot-notation': true,
        'parse-numbers': true,
        'boolean-negation': true,
        'duplicate-arguments-array': true,
        'flatten-duplicate-arrays': true,
        'populate--': true
    };
    const v795 = opts.configuration;
    var configuration = assign(v794, v795);
    const v796 = opts.default;
    const v797 = {};
    var defaults = v796 || v797;
    const v798 = opts.configObjects;
    const v799 = [];
    var configObjects = v798 || v799;
    var envPrefix = opts.envPrefix;
    var notFlagsOption = configuration['populate--'];
    let notFlagsArgv;
    if (notFlagsOption) {
        notFlagsArgv = '--';
    } else {
        notFlagsArgv = '_';
    }
    var newAliases = {};
    const v800 = opts.__;
    const v806 = function (str) {
        const v801 = util.format;
        const v802 = Array.prototype;
        const v803 = v802.slice;
        const v804 = v803.call(arguments);
        const v805 = v801.apply(util, v804);
        return v805;
    };
    var __ = v800 || v806;
    var error = null;
    const v807 = {};
    const v808 = {};
    const v809 = {};
    const v810 = {};
    const v811 = {};
    const v812 = {};
    const v813 = {};
    const v814 = {};
    const v815 = {};
    const v816 = {};
    const v817 = {};
    var flags = {};
    flags.aliases = v807;
    flags.arrays = v808;
    flags.bools = v809;
    flags.strings = v810;
    flags.numbers = v811;
    flags.counts = v812;
    flags.normalize = v813;
    flags.configs = v814;
    flags.defaulted = v815;
    flags.nargs = v816;
    flags.coercions = v817;
    var negative = /^-[0-9]+(\.[0-9]+)?/;
    const v818 = [];
    const v819 = opts.array;
    const v820 = v818.concat(v819);
    const v821 = v820.filter(Boolean);
    const v823 = function (key) {
        const v822 = flags.arrays;
        v822[key] = true;
    };
    const v824 = v821.forEach(v823);
    v824;
    const v825 = [];
    const v826 = opts.boolean;
    const v827 = v825.concat(v826);
    const v828 = v827.filter(Boolean);
    const v830 = function (key) {
        const v829 = flags.bools;
        v829[key] = true;
    };
    const v831 = v828.forEach(v830);
    v831;
    const v832 = [];
    const v833 = opts.string;
    const v834 = v832.concat(v833);
    const v835 = v834.filter(Boolean);
    const v837 = function (key) {
        const v836 = flags.strings;
        v836[key] = true;
    };
    const v838 = v835.forEach(v837);
    v838;
    const v839 = [];
    const v840 = opts.number;
    const v841 = v839.concat(v840);
    const v842 = v841.filter(Boolean);
    const v844 = function (key) {
        const v843 = flags.numbers;
        v843[key] = true;
    };
    const v845 = v842.forEach(v844);
    v845;
    const v846 = [];
    const v847 = opts.count;
    const v848 = v846.concat(v847);
    const v849 = v848.filter(Boolean);
    const v851 = function (key) {
        const v850 = flags.counts;
        v850[key] = true;
    };
    const v852 = v849.forEach(v851);
    v852;
    const v853 = [];
    const v854 = opts.normalize;
    const v855 = v853.concat(v854);
    const v856 = v855.filter(Boolean);
    const v858 = function (key) {
        const v857 = flags.normalize;
        v857[key] = true;
    };
    const v859 = v856.forEach(v858);
    v859;
    const v860 = opts.narg;
    const v861 = {};
    const v862 = v860 || v861;
    const v863 = Object.keys(v862);
    const v867 = function (k) {
        const v864 = flags.nargs;
        const v865 = opts.narg;
        const v866 = v865[k];
        v864[k] = v866;
    };
    const v868 = v863.forEach(v867);
    v868;
    const v869 = opts.coerce;
    const v870 = {};
    const v871 = v869 || v870;
    const v872 = Object.keys(v871);
    const v876 = function (k) {
        const v873 = flags.coercions;
        const v874 = opts.coerce;
        const v875 = v874[k];
        v873[k] = v875;
    };
    const v877 = v872.forEach(v876);
    v877;
    const v878 = opts.config;
    const v879 = Array.isArray(v878);
    const v880 = opts.config;
    const v881 = typeof v880;
    const v882 = v881 === 'string';
    const v883 = v879 || v882;
    if (v883) {
        ;
        const v884 = [];
        const v885 = opts.config;
        const v886 = v884.concat(v885);
        const v887 = v886.filter(Boolean);
        const v889 = function (key) {
            const v888 = flags.configs;
            v888[key] = true;
        };
        const v890 = v887.forEach(v889);
        v890;
    } else {
        const v891 = opts.config;
        const v892 = {};
        const v893 = v891 || v892;
        const v894 = Object.keys(v893);
        const v898 = function (k) {
            const v895 = flags.configs;
            const v896 = opts.config;
            const v897 = v896[k];
            v895[k] = v897;
        };
        const v899 = v894.forEach(v898);
        v899;
    }
    const v900 = opts.key;
    const v901 = opts.default;
    const v902 = flags.arrays;
    const v903 = extendAliases(v900, aliases, v901, v902);
    v903;
    const v904 = Object.keys(defaults);
    const v912 = function (key) {
        const v905 = flags.aliases;
        const v906 = v905[key];
        const v907 = [];
        const v908 = v906 || v907;
        const v910 = function (alias) {
            const v909 = defaults[key];
            defaults[alias] = v909;
        };
        const v911 = v908.forEach(v910);
        v911;
    };
    const v913 = v904.forEach(v912);
    v913;
    const v914 = [];
    var argv = {};
    argv._ = v914;
    if (notFlagsOption) {
        argv[notFlagsArgv] = [];
    }
    const v915 = flags.bools;
    const v916 = Object.keys(v915);
    const v923 = function (key) {
        const v917 = key in defaults;
        const v918 = !v917;
        const v919 = defaults[key];
        let v920;
        if (v918) {
            v920 = false;
        } else {
            v920 = v919;
        }
        const v921 = setArg(key, v920);
        v921;
        const v922 = setDefaulted(key);
        v922;
    };
    const v924 = v916.forEach(v923);
    v924;
    var notFlags = [];
    const v925 = args.indexOf('--');
    const v926 = -1;
    const v927 = v925 !== v926;
    if (v927) {
        const v928 = args.indexOf('--');
        const v929 = v928 + 1;
        notFlags = args.slice(v929);
        const v930 = args.indexOf('--');
        args = args.slice(0, v930);
    }
    var i = 0;
    const v931 = args.length;
    let v932 = i < v931;
    while (v932) {
        var arg = args[i];
        var broken;
        var key;
        var letters;
        var m;
        var next;
        var value;
        const v934 = arg.match(/^--.+=/);
        const v935 = configuration['short-option-groups'];
        const v936 = !v935;
        const v937 = arg.match(/^-.+=/);
        const v938 = v936 && v937;
        const v939 = v934 || v938;
        if (v939) {
            m = arg.match(/^--?([^=]+)=([\s\S]*)$/);
            const v940 = m[1];
            const v941 = flags.nargs;
            const v942 = checkAllAliases(v940, v941);
            if (v942) {
                const v943 = i + 1;
                const v944 = m[2];
                const v945 = args.splice(v943, 0, v944);
                v945;
                const v946 = m[1];
                i = eatNargs(i, v946, args);
            } else {
                const v947 = m[1];
                const v948 = flags.arrays;
                const v949 = checkAllAliases(v947, v948);
                const v950 = args.length;
                const v951 = i + 1;
                const v952 = v950 > v951;
                const v953 = v949 && v952;
                if (v953) {
                    const v954 = i + 1;
                    const v955 = m[2];
                    const v956 = args.splice(v954, 0, v955);
                    v956;
                    const v957 = m[1];
                    i = eatArray(i, v957, args);
                } else {
                    const v958 = m[1];
                    const v959 = m[2];
                    const v960 = setArg(v958, v959);
                    v960;
                }
            }
        } else {
            const v961 = arg.match(/^--no-.+/);
            const v962 = configuration['boolean-negation'];
            const v963 = v961 && v962;
            if (v963) {
                const v964 = arg.match(/^--no-(.+)/);
                key = v964[1];
                const v965 = setArg(key, false);
                v965;
            } else {
                const v966 = arg.match(/^--.+/);
                const v967 = configuration['short-option-groups'];
                const v968 = !v967;
                const v969 = arg.match(/^-.+/);
                const v970 = v968 && v969;
                const v971 = v966 || v970;
                if (v971) {
                    const v972 = arg.match(/^--?(.+)/);
                    key = v972[1];
                    const v973 = flags.nargs;
                    const v974 = checkAllAliases(key, v973);
                    if (v974) {
                        i = eatNargs(i, key, args);
                    } else {
                        const v975 = flags.arrays;
                        const v976 = checkAllAliases(key, v975);
                        const v977 = args.length;
                        const v978 = i + 1;
                        const v979 = v977 > v978;
                        const v980 = v976 && v979;
                        if (v980) {
                            i = eatArray(i, key, args);
                        } else {
                            const v981 = i + 1;
                            next = args[v981];
                            const v982 = next !== undefined;
                            const v983 = next.match(/^-/);
                            const v984 = !v983;
                            const v985 = next.match(negative);
                            const v986 = v984 || v985;
                            const v987 = v982 && v986;
                            const v988 = flags.bools;
                            const v989 = checkAllAliases(key, v988);
                            const v990 = !v989;
                            const v991 = v987 && v990;
                            const v992 = flags.counts;
                            const v993 = checkAllAliases(key, v992);
                            const v994 = !v993;
                            const v995 = v991 && v994;
                            if (v995) {
                                const v996 = setArg(key, next);
                                v996;
                                const v997 = i++;
                                v997;
                            } else {
                                const v998 = /^(true|false)$/.test(next);
                                if (v998) {
                                    const v999 = setArg(key, next);
                                    v999;
                                    const v1000 = i++;
                                    v1000;
                                } else {
                                    const v1001 = guessType(key, flags);
                                    const v1002 = defaultForType(v1001);
                                    const v1003 = setArg(key, v1002);
                                    v1003;
                                }
                            }
                        }
                    }
                } else {
                    const v1004 = arg.match(/^-.\..+=/);
                    if (v1004) {
                        m = arg.match(/^-([^=]+)=([\s\S]*)$/);
                        const v1005 = m[1];
                        const v1006 = m[2];
                        const v1007 = setArg(v1005, v1006);
                        v1007;
                    } else {
                        const v1008 = arg.match(/^-.\..+/);
                        if (v1008) {
                            const v1009 = i + 1;
                            next = args[v1009];
                            const v1010 = arg.match(/^-(.\..+)/);
                            key = v1010[1];
                            const v1011 = next !== undefined;
                            const v1012 = next.match(/^-/);
                            const v1013 = !v1012;
                            const v1014 = v1011 && v1013;
                            const v1015 = flags.bools;
                            const v1016 = checkAllAliases(key, v1015);
                            const v1017 = !v1016;
                            const v1018 = v1014 && v1017;
                            const v1019 = flags.counts;
                            const v1020 = checkAllAliases(key, v1019);
                            const v1021 = !v1020;
                            const v1022 = v1018 && v1021;
                            if (v1022) {
                                const v1023 = setArg(key, next);
                                v1023;
                                const v1024 = i++;
                                v1024;
                            } else {
                                const v1025 = guessType(key, flags);
                                const v1026 = defaultForType(v1025);
                                const v1027 = setArg(key, v1026);
                                v1027;
                            }
                        } else {
                            const v1028 = arg.match(/^-[^-]+/);
                            const v1029 = arg.match(negative);
                            const v1030 = !v1029;
                            const v1031 = v1028 && v1030;
                            if (v1031) {
                                const v1032 = -1;
                                const v1033 = arg.slice(1, v1032);
                                letters = v1033.split('');
                                broken = false;
                                var j = 0;
                                const v1034 = letters.length;
                                let v1035 = j < v1034;
                                while (v1035) {
                                    const v1037 = j + 2;
                                    next = arg.slice(v1037);
                                    const v1038 = j + 1;
                                    const v1039 = letters[v1038];
                                    const v1040 = j + 1;
                                    const v1041 = letters[v1040];
                                    const v1042 = v1041 === '=';
                                    const v1043 = v1039 && v1042;
                                    if (v1043) {
                                        const v1044 = j + 3;
                                        value = arg.slice(v1044);
                                        key = letters[j];
                                        const v1045 = flags.nargs;
                                        const v1046 = checkAllAliases(key, v1045);
                                        if (v1046) {
                                            const v1047 = i + 1;
                                            const v1048 = args.splice(v1047, 0, value);
                                            v1048;
                                            i = eatNargs(i, key, args);
                                        } else {
                                            const v1049 = flags.arrays;
                                            const v1050 = checkAllAliases(key, v1049);
                                            const v1051 = args.length;
                                            const v1052 = i + 1;
                                            const v1053 = v1051 > v1052;
                                            const v1054 = v1050 && v1053;
                                            if (v1054) {
                                                const v1055 = i + 1;
                                                const v1056 = args.splice(v1055, 0, value);
                                                v1056;
                                                i = eatArray(i, key, args);
                                            } else {
                                                const v1057 = setArg(key, value);
                                                v1057;
                                            }
                                        }
                                        broken = true;
                                        break;
                                    }
                                    const v1058 = next === '-';
                                    if (v1058) {
                                        const v1059 = letters[j];
                                        const v1060 = setArg(v1059, next);
                                        v1060;
                                        continue;
                                    }
                                    const v1061 = letters[j];
                                    const v1062 = /[A-Za-z]/.test(v1061);
                                    const v1063 = /^-?\d+(\.\d*)?(e-?\d+)?$/.test(next);
                                    const v1064 = v1062 && v1063;
                                    if (v1064) {
                                        const v1065 = letters[j];
                                        const v1066 = setArg(v1065, next);
                                        v1066;
                                        broken = true;
                                        break;
                                    }
                                    const v1067 = j + 1;
                                    const v1068 = letters[v1067];
                                    const v1069 = j + 1;
                                    const v1070 = letters[v1069];
                                    const v1071 = v1070.match(/\W/);
                                    const v1072 = v1068 && v1071;
                                    if (v1072) {
                                        const v1073 = letters[j];
                                        const v1074 = setArg(v1073, next);
                                        v1074;
                                        broken = true;
                                        break;
                                    } else {
                                        const v1075 = letters[j];
                                        const v1076 = letters[j];
                                        const v1077 = guessType(v1076, flags);
                                        const v1078 = defaultForType(v1077);
                                        const v1079 = setArg(v1075, v1078);
                                        v1079;
                                    }
                                    const v1036 = j++;
                                    v1035 = j < v1034;
                                }
                                const v1080 = -1;
                                const v1081 = arg.slice(v1080);
                                key = v1081[0];
                                const v1082 = !broken;
                                const v1083 = key !== '-';
                                const v1084 = v1082 && v1083;
                                if (v1084) {
                                    const v1085 = flags.nargs;
                                    const v1086 = checkAllAliases(key, v1085);
                                    if (v1086) {
                                        i = eatNargs(i, key, args);
                                    } else {
                                        const v1087 = flags.arrays;
                                        const v1088 = checkAllAliases(key, v1087);
                                        const v1089 = args.length;
                                        const v1090 = i + 1;
                                        const v1091 = v1089 > v1090;
                                        const v1092 = v1088 && v1091;
                                        if (v1092) {
                                            i = eatArray(i, key, args);
                                        } else {
                                            const v1093 = i + 1;
                                            next = args[v1093];
                                            const v1094 = next !== undefined;
                                            const v1095 = /^(-|--)[^-]/.test(next);
                                            const v1096 = !v1095;
                                            const v1097 = next.match(negative);
                                            const v1098 = v1096 || v1097;
                                            const v1099 = v1094 && v1098;
                                            const v1100 = flags.bools;
                                            const v1101 = checkAllAliases(key, v1100);
                                            const v1102 = !v1101;
                                            const v1103 = v1099 && v1102;
                                            const v1104 = flags.counts;
                                            const v1105 = checkAllAliases(key, v1104);
                                            const v1106 = !v1105;
                                            const v1107 = v1103 && v1106;
                                            if (v1107) {
                                                const v1108 = setArg(key, next);
                                                v1108;
                                                const v1109 = i++;
                                                v1109;
                                            } else {
                                                const v1110 = /^(true|false)$/.test(next);
                                                if (v1110) {
                                                    const v1111 = setArg(key, next);
                                                    v1111;
                                                    const v1112 = i++;
                                                    v1112;
                                                } else {
                                                    const v1113 = guessType(key, flags);
                                                    const v1114 = defaultForType(v1113);
                                                    const v1115 = setArg(key, v1114);
                                                    v1115;
                                                }
                                            }
                                        }
                                    }
                                }
                            } else {
                                const v1116 = argv._;
                                const v1117 = flags.strings;
                                const v1118 = v1117['_'];
                                const v1119 = isNumber(arg);
                                const v1120 = !v1119;
                                const v1121 = v1118 || v1120;
                                const v1122 = Number(arg);
                                let v1123;
                                if (v1121) {
                                    v1123 = arg;
                                } else {
                                    v1123 = v1122;
                                }
                                const v1124 = v1116.push(v1123);
                                v1124;
                            }
                        }
                    }
                }
            }
        }
        const v933 = i++;
        v932 = i < v931;
    }
    const v1125 = applyEnvVars(argv, true);
    v1125;
    const v1126 = applyEnvVars(argv, false);
    v1126;
    const v1127 = setConfig(argv);
    v1127;
    const v1128 = setConfigObjects();
    v1128;
    const v1129 = flags.aliases;
    const v1130 = applyDefaultsAndAliases(argv, v1129, defaults);
    v1130;
    const v1131 = applyCoercions(argv);
    v1131;
    const v1132 = flags.counts;
    const v1133 = Object.keys(v1132);
    const v1138 = function (key) {
        const v1134 = key.split('.');
        const v1135 = hasKey(argv, v1134);
        const v1136 = !v1135;
        if (v1136) {
            const v1137 = setArg(key, 0);
            v1137;
        }
    };
    const v1139 = v1133.forEach(v1138);
    v1139;
    const v1142 = function (key) {
        const v1140 = argv[notFlagsArgv];
        const v1141 = v1140.push(key);
        v1141;
    };
    const v1143 = notFlags.forEach(v1142);
    v1143;
    const eatNargs = function (i, key, args) {
        const v1144 = flags.nargs;
        var toEat = checkAllAliases(key, v1144);
        const v1145 = args.length;
        const v1146 = i + 1;
        const v1147 = v1145 - v1146;
        const v1148 = v1147 < toEat;
        if (v1148) {
            const v1149 = __('Not enough arguments following: %s', key);
            error = Error(v1149);
        }
        var ii = i + 1;
        const v1150 = toEat + i;
        const v1151 = v1150 + 1;
        let v1152 = ii < v1151;
        while (v1152) {
            const v1154 = args[ii];
            const v1155 = setArg(key, v1154);
            v1155;
            const v1153 = ii++;
            v1152 = ii < v1151;
        }
        const v1156 = i + toEat;
        return v1156;
    };
    const eatArray = function (i, key, args) {
        var start = i + 1;
        var argsToSet = [];
        var multipleArrayFlag = i > 0;
        var ii = i + 1;
        const v1157 = args.length;
        let v1158 = ii < v1157;
        while (v1158) {
            const v1160 = args[ii];
            const v1161 = /^-/.test(v1160);
            const v1162 = args[ii];
            const v1163 = negative.test(v1162);
            const v1164 = !v1163;
            const v1165 = v1161 && v1164;
            if (v1165) {
                const v1166 = ii === start;
                if (v1166) {
                    const v1167 = defaultForType('array');
                    const v1168 = setArg(key, v1167);
                    v1168;
                }
                multipleArrayFlag = true;
                break;
            }
            i = ii;
            const v1169 = args[ii];
            const v1170 = argsToSet.push(v1169);
            v1170;
            const v1159 = ii++;
            v1158 = ii < v1157;
        }
        if (multipleArrayFlag) {
            const v1172 = function (arg) {
                const v1171 = processValue(key, arg);
                return v1171;
            };
            const v1173 = argsToSet.map(v1172);
            const v1174 = setArg(key, v1173);
            v1174;
        } else {
            const v1176 = function (arg) {
                const v1175 = setArg(key, arg);
                v1175;
            };
            const v1177 = argsToSet.forEach(v1176);
            v1177;
        }
        return i;
    };
    const setArg = function (key, val) {
        const v1178 = unsetDefaulted(key);
        v1178;
        const v1179 = /-/.test(key);
        const v1180 = flags.aliases;
        const v1181 = v1180[key];
        const v1182 = flags.aliases;
        const v1183 = v1182[key];
        const v1184 = v1183.length;
        const v1185 = v1181 && v1184;
        const v1186 = !v1185;
        const v1187 = v1179 && v1186;
        const v1188 = configuration['camel-case-expansion'];
        const v1189 = v1187 && v1188;
        if (v1189) {
            var c = camelCase(key);
            const v1190 = flags.aliases;
            v1190[key] = [c];
            newAliases[c] = true;
        }
        var value = processValue(key, val);
        var splitKey = key.split('.');
        const v1191 = setKey(argv, splitKey, value);
        v1191;
        const v1192 = flags.aliases;
        const v1193 = v1192[key];
        if (v1193) {
            const v1194 = flags.aliases;
            const v1195 = v1194[key];
            const v1197 = function (x) {
                x = x.split('.');
                const v1196 = setKey(argv, x, value);
                v1196;
            };
            const v1198 = v1195.forEach(v1197);
            v1198;
        }
        const v1199 = splitKey.length;
        const v1200 = v1199 > 1;
        const v1201 = configuration['dot-notation'];
        const v1202 = v1200 && v1201;
        if (v1202) {
            ;
            const v1203 = flags.aliases;
            const v1204 = splitKey[0];
            const v1205 = v1203[v1204];
            const v1206 = [];
            const v1207 = v1205 || v1206;
            const v1211 = function (x) {
                x = x.split('.');
                const v1208 = [];
                var a = v1208.concat(splitKey);
                const v1209 = a.shift();
                v1209;
                x = x.concat(a);
                const v1210 = setKey(argv, x, value);
                v1210;
            };
            const v1212 = v1207.forEach(v1211);
            v1212;
        }
        const v1213 = flags.normalize;
        const v1214 = checkAllAliases(key, v1213);
        const v1215 = flags.arrays;
        const v1216 = checkAllAliases(key, v1215);
        const v1217 = !v1216;
        const v1218 = v1214 && v1217;
        if (v1218) {
            const v1219 = [key];
            const v1220 = flags.aliases;
            const v1221 = v1220[key];
            const v1222 = [];
            const v1223 = v1221 || v1222;
            var keys = v1219.concat(v1223);
            const v1232 = function (key) {
                const v1224 = function (v) {
                    val = path.normalize(v);
                };
                const v1225 = argv.__defineSetter__(key, v1224);
                v1225;
                const v1230 = function () {
                    const v1226 = typeof val;
                    const v1227 = v1226 === 'string';
                    const v1228 = path.normalize(val);
                    let v1229;
                    if (v1227) {
                        v1229 = v1228;
                    } else {
                        v1229 = val;
                    }
                    return v1229;
                };
                const v1231 = argv.__defineGetter__(key, v1230);
                v1231;
            };
            const v1233 = keys.forEach(v1232);
            v1233;
        }
    };
    const processValue = function (key, val) {
        const v1234 = flags.bools;
        const v1235 = checkAllAliases(key, v1234);
        const v1236 = flags.counts;
        const v1237 = checkAllAliases(key, v1236);
        const v1238 = v1235 || v1237;
        if (v1238) {
            const v1239 = typeof val;
            const v1240 = v1239 === 'string';
            if (v1240) {
                val = val === 'true';
            }
        }
        var value = val;
        const v1241 = flags.strings;
        const v1242 = checkAllAliases(key, v1241);
        const v1243 = !v1242;
        const v1244 = flags.coercions;
        const v1245 = checkAllAliases(key, v1244);
        const v1246 = !v1245;
        const v1247 = v1243 && v1246;
        if (v1247) {
            const v1248 = isNumber(val);
            if (v1248) {
                value = Number(val);
            }
            const v1249 = isUndefined(val);
            const v1250 = !v1249;
            const v1251 = isNumber(val);
            const v1252 = !v1251;
            const v1253 = v1250 && v1252;
            const v1254 = flags.numbers;
            const v1255 = checkAllAliases(key, v1254);
            const v1256 = v1253 && v1255;
            if (v1256) {
                value = NaN;
            }
        }
        const v1257 = flags.counts;
        const v1258 = checkAllAliases(key, v1257);
        const v1259 = isUndefined(value);
        const v1260 = typeof value;
        const v1261 = v1260 === 'boolean';
        const v1262 = v1259 || v1261;
        const v1263 = v1258 && v1262;
        if (v1263) {
            value = increment;
        }
        const v1264 = flags.normalize;
        const v1265 = checkAllAliases(key, v1264);
        const v1266 = flags.arrays;
        const v1267 = checkAllAliases(key, v1266);
        const v1268 = v1265 && v1267;
        if (v1268) {
            const v1269 = Array.isArray(val);
            if (v1269) {
                const v1270 = path.normalize;
                value = val.map(v1270);
            } else {
                value = path.normalize(val);
            }
        }
        return value;
    };
    const setConfig = function (argv) {
        var configLookup = {};
        const v1271 = flags.aliases;
        const v1272 = applyDefaultsAndAliases(configLookup, v1271, defaults);
        v1272;
        const v1273 = flags.configs;
        const v1274 = Object.keys(v1273);
        const v1287 = function (configKey) {
            const v1275 = argv[configKey];
            const v1276 = configLookup[configKey];
            var configPath = v1275 || v1276;
            if (configPath) {
                try {
                    var config = null;
                    const v1277 = process.cwd();
                    var resolvedConfigPath = path.resolve(v1277, configPath);
                    const v1278 = flags.configs;
                    const v1279 = v1278[configKey];
                    const v1280 = typeof v1279;
                    const v1281 = v1280 === 'function';
                    if (v1281) {
                        try {
                            const v1282 = flags.configs;
                            config = v1282[configKey](resolvedConfigPath);
                        } catch (e) {
                            config = e;
                        }
                        const v1283 = config instanceof Error;
                        if (v1283) {
                            error = config;
                            return;
                        }
                    } else {
                        config = require(resolvedConfigPath);
                    }
                    const v1284 = setConfigObject(config);
                    v1284;
                } catch (ex) {
                    const v1285 = argv[configKey];
                    if (v1285) {
                        const v1286 = __('Invalid JSON config file: %s', configPath);
                        error = Error(v1286);
                    }
                }
            }
        };
        const v1288 = v1274.forEach(v1287);
        v1288;
    };
    const setConfigObject = function (config, prev) {
        const v1289 = Object.keys(config);
        const v1307 = function (key) {
            var value = config[key];
            let fullKey;
            const v1290 = prev + '.';
            const v1291 = v1290 + key;
            if (prev) {
                fullKey = v1291;
            } else {
                fullKey = key;
            }
            const v1292 = typeof value;
            const v1293 = v1292 === 'object';
            const v1294 = Array.isArray(value);
            const v1295 = !v1294;
            const v1296 = v1293 && v1295;
            const v1297 = configuration['dot-notation'];
            const v1298 = v1296 && v1297;
            if (v1298) {
                const v1299 = setConfigObject(value, fullKey);
                v1299;
            } else {
                const v1300 = fullKey.split('.');
                const v1301 = hasKey(argv, v1300);
                const v1302 = !v1301;
                const v1303 = flags.defaulted;
                const v1304 = v1303[fullKey];
                const v1305 = v1302 || v1304;
                if (v1305) {
                    const v1306 = setArg(fullKey, value);
                    v1306;
                }
            }
        };
        const v1308 = v1289.forEach(v1307);
        v1308;
    };
    const setConfigObjects = function () {
        const v1309 = typeof configObjects;
        const v1310 = v1309 === 'undefined';
        if (v1310) {
            return;
        }
        const v1312 = function (configObject) {
            const v1311 = setConfigObject(configObject);
            v1311;
        };
        const v1313 = configObjects.forEach(v1312);
        v1313;
    };
    const applyEnvVars = function (argv, configOnly) {
        const v1314 = typeof envPrefix;
        const v1315 = v1314 === 'undefined';
        if (v1315) {
            return;
        }
        let prefix;
        const v1316 = typeof envPrefix;
        const v1317 = v1316 === 'string';
        if (v1317) {
            prefix = envPrefix;
        } else {
            prefix = '';
        }
        const v1318 = process.env;
        const v1319 = Object.keys(v1318);
        const v1346 = function (envVar) {
            const v1320 = prefix === '';
            const v1321 = envVar.lastIndexOf(prefix, 0);
            const v1322 = v1321 === 0;
            const v1323 = v1320 || v1322;
            if (v1323) {
                const v1324 = envVar.split('__');
                const v1328 = function (key, i) {
                    const v1325 = i === 0;
                    if (v1325) {
                        const v1326 = prefix.length;
                        key = key.substring(v1326);
                    }
                    const v1327 = camelCase(key);
                    return v1327;
                };
                var keys = v1324.map(v1328);
                const v1329 = flags.configs;
                const v1330 = keys.join('.');
                const v1331 = v1329[v1330];
                const v1332 = configOnly && v1331;
                const v1333 = !configOnly;
                const v1334 = v1332 || v1333;
                const v1335 = hasKey(argv, keys);
                const v1336 = !v1335;
                const v1337 = flags.defaulted;
                const v1338 = keys.join('.');
                const v1339 = v1337[v1338];
                const v1340 = v1336 || v1339;
                const v1341 = v1334 && v1340;
                if (v1341) {
                    const v1342 = keys.join('.');
                    const v1343 = process.env;
                    const v1344 = v1343[envVar];
                    const v1345 = setArg(v1342, v1344);
                    v1345;
                }
            }
        };
        const v1347 = v1319.forEach(v1346);
        v1347;
    };
    const applyCoercions = function (argv) {
        var coerce;
        const v1348 = Object.keys(argv);
        const v1354 = function (key) {
            const v1349 = flags.coercions;
            coerce = checkAllAliases(key, v1349);
            const v1350 = typeof coerce;
            const v1351 = v1350 === 'function';
            if (v1351) {
                try {
                    const v1352 = argv[key];
                    const v1353 = coerce(v1352);
                    argv[key] = v1353;
                } catch (err) {
                    error = err;
                }
            }
        };
        const v1355 = v1348.forEach(v1354);
        v1355;
    };
    const applyDefaultsAndAliases = function (obj, aliases, defaults) {
        const v1356 = Object.keys(defaults);
        const v1373 = function (key) {
            const v1357 = key.split('.');
            const v1358 = hasKey(obj, v1357);
            const v1359 = !v1358;
            if (v1359) {
                const v1360 = key.split('.');
                const v1361 = defaults[key];
                const v1362 = setKey(obj, v1360, v1361);
                v1362;
                const v1363 = aliases[key];
                const v1364 = [];
                const v1365 = v1363 || v1364;
                const v1371 = function (x) {
                    const v1366 = x.split('.');
                    const v1367 = hasKey(obj, v1366);
                    if (v1367) {
                        return;
                    }
                    const v1368 = x.split('.');
                    const v1369 = defaults[key];
                    const v1370 = setKey(obj, v1368, v1369);
                    v1370;
                };
                const v1372 = v1365.forEach(v1371);
                v1372;
            }
        };
        const v1374 = v1356.forEach(v1373);
        v1374;
    };
    const hasKey = function (obj, keys) {
        var o = obj;
        const v1375 = configuration['dot-notation'];
        const v1376 = !v1375;
        if (v1376) {
            const v1377 = keys.join('.');
            keys = [v1377];
        }
        const v1378 = -1;
        const v1379 = keys.slice(0, v1378);
        const v1382 = function (key) {
            const v1380 = o[key];
            const v1381 = {};
            o = v1380 || v1381;
        };
        const v1383 = v1379.forEach(v1382);
        v1383;
        const v1384 = keys.length;
        const v1385 = v1384 - 1;
        var key = keys[v1385];
        const v1386 = typeof o;
        const v1387 = v1386 !== 'object';
        if (v1387) {
            return false;
        } else {
            const v1388 = key in o;
            return v1388;
        }
    };
    const setKey = function (obj, keys, value) {
        var o = obj;
        const v1389 = configuration['dot-notation'];
        const v1390 = !v1389;
        if (v1390) {
            const v1391 = keys.join('.');
            keys = [v1391];
        }
        const v1392 = -1;
        const v1393 = keys.slice(0, v1392);
        const v1397 = function (key) {
            const v1394 = o[key];
            const v1395 = v1394 === undefined;
            if (v1395) {
                const v1396 = {};
                o[key] = v1396;
            }
            o = o[key];
        };
        const v1398 = v1393.forEach(v1397);
        v1398;
        const v1399 = keys.length;
        const v1400 = v1399 - 1;
        var key = keys[v1400];
        const v1401 = keys.join('.');
        const v1402 = flags.arrays;
        var isTypeArray = checkAllAliases(v1401, v1402);
        var isValueArray = Array.isArray(value);
        var duplicate = configuration['duplicate-arguments-array'];
        const v1403 = value === increment;
        if (v1403) {
            const v1404 = o[key];
            const v1405 = increment(v1404);
            o[key] = v1405;
        } else {
            const v1406 = o[key];
            const v1407 = Array.isArray(v1406);
            if (v1407) {
                const v1408 = duplicate && isTypeArray;
                const v1409 = v1408 && isValueArray;
                if (v1409) {
                    const v1410 = configuration['flatten-duplicate-arrays'];
                    const v1411 = o[key];
                    const v1412 = v1411.concat(value);
                    const v1413 = o[key];
                    const v1414 = [v1413];
                    const v1415 = [value];
                    const v1416 = v1414.concat(v1415);
                    let v1417;
                    if (v1410) {
                        v1417 = v1412;
                    } else {
                        v1417 = v1416;
                    }
                    o[key] = v1417;
                } else {
                    const v1418 = !duplicate;
                    const v1419 = Boolean(isTypeArray);
                    const v1420 = Boolean(isValueArray);
                    const v1421 = v1419 === v1420;
                    const v1422 = v1418 && v1421;
                    if (v1422) {
                        o[key] = value;
                    } else {
                        const v1423 = o[key];
                        const v1424 = [value];
                        const v1425 = v1423.concat(v1424);
                        o[key] = v1425;
                    }
                }
            } else {
                const v1426 = o[key];
                const v1427 = v1426 === undefined;
                const v1428 = v1427 && isTypeArray;
                if (v1428) {
                    const v1429 = [value];
                    let v1430;
                    if (isValueArray) {
                        v1430 = value;
                    } else {
                        v1430 = v1429;
                    }
                    o[key] = v1430;
                } else {
                    const v1431 = o[key];
                    const v1432 = v1431 === undefined;
                    const v1433 = flags.bools;
                    const v1434 = checkAllAliases(key, v1433);
                    const v1435 = v1432 || v1434;
                    const v1436 = keys.join('.');
                    const v1437 = flags.bools;
                    const v1438 = checkAllAliases(v1436, v1437);
                    const v1439 = v1435 || v1438;
                    const v1440 = flags.counts;
                    const v1441 = checkAllAliases(key, v1440);
                    const v1442 = v1439 || v1441;
                    const v1443 = !v1442;
                    const v1444 = duplicate && v1443;
                    if (v1444) {
                        const v1445 = o[key];
                        o[key] = [
                            v1445,
                            value
                        ];
                    } else {
                        o[key] = value;
                    }
                }
            }
        }
    };
    const extendAliases = function () {
        const v1446 = Array.prototype;
        const v1447 = v1446.slice;
        const v1448 = v1447.call(arguments);
        const v1485 = function (obj) {
            const v1449 = {};
            const v1450 = obj || v1449;
            const v1451 = Object.keys(v1450);
            const v1483 = function (key) {
                const v1452 = flags.aliases;
                const v1453 = v1452[key];
                if (v1453) {
                    return;
                }
                const v1455 = [];
                const v1456 = aliases[key];
                const v1457 = [];
                const v1458 = v1456 || v1457;
                const v1459 = v1455.concat(v1458);
                v1454[key] = v1459;
                const v1460 = flags.aliases;
                const v1461 = v1460[key];
                const v1462 = v1461.concat(key);
                const v1469 = function (x) {
                    const v1463 = /-/.test(x);
                    const v1464 = configuration['camel-case-expansion'];
                    const v1465 = v1463 && v1464;
                    if (v1465) {
                        var c = camelCase(x);
                        const v1466 = flags.aliases;
                        const v1467 = v1466[key];
                        const v1468 = v1467.push(c);
                        v1468;
                        newAliases[c] = true;
                    }
                };
                const v1470 = v1462.forEach(v1469);
                v1470;
                const v1471 = flags.aliases;
                const v1472 = v1471[key];
                const v1481 = function (x) {
                    const v1474 = [key];
                    const v1475 = flags.aliases;
                    const v1476 = v1475[key];
                    const v1478 = function (y) {
                        const v1477 = x !== y;
                        return v1477;
                    };
                    const v1479 = v1476.filter(v1478);
                    const v1480 = v1474.concat(v1479);
                    v1473[x] = v1480;
                };
                const v1482 = v1472.forEach(v1481);
                v1482;
            };
            const v1484 = v1451.forEach(v1483);
            v1484;
        };
        const v1486 = v1448.forEach(v1485);
        v1486;
    };
    const checkAllAliases = function (key, flag) {
        var isSet = false;
        const v1487 = [];
        const v1488 = flags.aliases;
        const v1489 = v1488[key];
        const v1490 = [];
        const v1491 = v1489 || v1490;
        var toCheck = v1487.concat(v1491, key);
        const v1493 = function (key) {
            const v1492 = flag[key];
            if (v1492) {
                isSet = flag[key];
            }
        };
        const v1494 = toCheck.forEach(v1493);
        v1494;
        return isSet;
    };
    const setDefaulted = function (key) {
        const v1495 = [];
        const v1496 = flags.aliases;
        const v1497 = v1496[key];
        const v1498 = [];
        const v1499 = v1497 || v1498;
        const v1500 = v1495.concat(v1499, key);
        const v1502 = function (k) {
            const v1501 = flags.defaulted;
            v1501[k] = true;
        };
        const v1503 = v1500.forEach(v1502);
        v1503;
    };
    const unsetDefaulted = function (key) {
        const v1504 = [];
        const v1505 = flags.aliases;
        const v1506 = v1505[key];
        const v1507 = [];
        const v1508 = v1506 || v1507;
        const v1509 = v1504.concat(v1508, key);
        const v1513 = function (k) {
            const v1510 = flags.defaulted;
            const v1511 = v1510[k];
            const v1512 = delete v1511;
            v1512;
        };
        const v1514 = v1509.forEach(v1513);
        v1514;
    };
    const defaultForType = function (type) {
        const v1515 = [];
        var def = {};
        def.boolean = true;
        def.string = '';
        def.number = undefined;
        def.array = v1515;
        const v1516 = def[type];
        return v1516;
    };
    const guessType = function (key, flags) {
        var type = 'boolean';
        const v1517 = flags.strings;
        const v1518 = checkAllAliases(key, v1517);
        if (v1518) {
            type = 'string';
        } else {
            const v1519 = flags.numbers;
            const v1520 = checkAllAliases(key, v1519);
            if (v1520) {
                type = 'number';
            } else {
                const v1521 = flags.arrays;
                const v1522 = checkAllAliases(key, v1521);
                if (v1522) {
                    type = 'array';
                }
            }
        }
        return type;
    };
    const isNumber = function (x) {
        const v1523 = configuration['parse-numbers'];
        const v1524 = !v1523;
        if (v1524) {
            return false;
        }
        const v1525 = typeof x;
        const v1526 = v1525 === 'number';
        if (v1526) {
            return true;
        }
        const v1527 = /^0x[0-9a-f]+$/i.test(x);
        if (v1527) {
            return true;
        }
        const v1528 = /^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(x);
        return v1528;
    };
    const isUndefined = function (num) {
        const v1529 = num === undefined;
        return v1529;
    };
    const v1530 = flags.aliases;
    const v1531 = {};
    v1531.argv = argv;
    v1531.error = error;
    v1531.aliases = v1530;
    v1531.newAliases = newAliases;
    v1531.configuration = configuration;
    return v1531;
};
const combineAliases = function (aliases) {
    var aliasArrays = [];
    var change = true;
    var combined = {};
    const v1532 = Object.keys(aliases);
    const v1537 = function (key) {
        const v1533 = [];
        const v1534 = aliases[key];
        const v1535 = v1533.concat(v1534, key);
        const v1536 = aliasArrays.push(v1535);
        v1536;
    };
    const v1538 = v1532.forEach(v1537);
    v1538;
    while (change) {
        change = false;
        var i = 0;
        const v1539 = aliasArrays.length;
        let v1540 = i < v1539;
        while (v1540) {
            var ii = i + 1;
            const v1542 = aliasArrays.length;
            let v1543 = ii < v1542;
            while (v1543) {
                const v1545 = aliasArrays[i];
                const v1550 = function (v) {
                    const v1546 = aliasArrays[ii];
                    const v1547 = v1546.indexOf(v);
                    const v1548 = -1;
                    const v1549 = v1547 !== v1548;
                    return v1549;
                };
                var intersect = v1545.filter(v1550);
                const v1551 = intersect.length;
                if (v1551) {
                    const v1552 = aliasArrays[i];
                    const v1553 = aliasArrays[ii];
                    const v1554 = v1552.concat(v1553);
                    aliasArrays[i] = v1554;
                    const v1555 = aliasArrays.splice(ii, 1);
                    v1555;
                    change = true;
                    break;
                }
                const v1544 = ii++;
                v1543 = ii < v1542;
            }
            const v1541 = i++;
            v1540 = i < v1539;
        }
    }
    const v1560 = function (aliasArray) {
        const v1558 = function (v, i, self) {
            const v1556 = self.indexOf(v);
            const v1557 = v1556 === i;
            return v1557;
        };
        aliasArray = aliasArray.filter(v1558);
        const v1559 = aliasArray.pop();
        combined[v1559] = aliasArray;
    };
    const v1561 = aliasArrays.forEach(v1560);
    v1561;
    return combined;
};
const assign = function (defaults, configuration) {
    var o = {};
    const v1562 = {};
    configuration = configuration || v1562;
    const v1563 = Object.keys(defaults);
    const v1565 = function (k) {
        const v1564 = defaults[k];
        o[k] = v1564;
    };
    const v1566 = v1563.forEach(v1565);
    v1566;
    const v1567 = Object.keys(configuration);
    const v1569 = function (k) {
        const v1568 = configuration[k];
        o[k] = v1568;
    };
    const v1570 = v1567.forEach(v1569);
    v1570;
    return o;
};
const increment = function (orig) {
    const v1571 = orig !== undefined;
    const v1572 = orig + 1;
    let v1573;
    if (v1571) {
        v1573 = v1572;
    } else {
        v1573 = 1;
    }
    return v1573;
};
const Parser = function (args, opts) {
    const v1574 = args.slice();
    var result = parse(v1574, opts);
    const v1575 = result.argv;
    return v1575;
};
const v1578 = function (args, opts) {
    const v1576 = args.slice();
    const v1577 = parse(v1576, opts);
    return v1577;
};
Parser.detailed = v1578;
module.exports = Parser;
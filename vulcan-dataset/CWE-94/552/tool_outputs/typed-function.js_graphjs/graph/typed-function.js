'use strict';
const v988 = function (root, factory) {
    const v978 = typeof define;
    const v979 = v978 === 'function';
    const v980 = define.amd;
    const v981 = v979 && v980;
    if (v981) {
        const v982 = [];
        const v983 = define(v982, factory);
        v983;
    } else {
        const v984 = typeof exports;
        const v985 = v984 === 'object';
        if (v985) {
            const v986 = factory();
            module.exports = v986;
        } else {
            const v987 = factory();
            root.typed = v987;
        }
    }
};
const v1953 = function () {
    const create = function () {
        const getTypeTest = function (name) {
            var test;
            var i = 0;
            const v989 = typed.types;
            const v990 = v989.length;
            let v991 = i < v990;
            while (v991) {
                const v993 = typed.types;
                var entry = v993[i];
                const v994 = entry.name;
                const v995 = v994 === name;
                if (v995) {
                    test = entry.test;
                    break;
                }
                const v992 = i++;
                v991 = i < v990;
            }
            const v996 = !test;
            if (v996) {
                var hint;
                i = 0
                const v997 = typed.types;
                const v998 = v997.length;
                let v999 = i < v998;
                while (v999) {
                    const v1001 = typed.types;
                    entry = v1001[i];
                    const v1002 = entry.name;
                    const v1003 = v1002.toLowerCase();
                    const v1004 = name.toLowerCase();
                    const v1005 = v1003 == v1004;
                    if (v1005) {
                        hint = entry.name;
                        break;
                    }
                    const v1000 = i++;
                    v999 = i < v998;
                }
                const v1006 = 'Unknown type "' + name;
                const v1007 = v1006 + '"';
                const v1008 = '. Did you mean "' + hint;
                const v1009 = v1008 + '"?';
                let v1010;
                if (hint) {
                    v1010 = v1009;
                } else {
                    v1010 = '';
                }
                const v1011 = v1007 + v1010;
                const v1012 = new Error(v1011);
                throw v1012;
            }
            return test;
        };
        const getName = function (fns) {
            var name = '';
            var i = 0;
            const v1013 = fns.length;
            let v1014 = i < v1013;
            while (v1014) {
                var fn = fns[i];
                const v1016 = fn.signatures;
                const v1017 = fn.name;
                const v1018 = v1017 != '';
                const v1019 = v1016 && v1018;
                if (v1019) {
                    const v1020 = name == '';
                    if (v1020) {
                        name = fn.name;
                    } else {
                        const v1021 = fn.name;
                        const v1022 = name != v1021;
                        if (v1022) {
                            const v1023 = 'Function names do not match (expected: ' + name;
                            const v1024 = v1023 + ', actual: ';
                            const v1025 = fn.name;
                            const v1026 = v1024 + v1025;
                            const v1027 = v1026 + ')';
                            var err = new Error(v1027);
                            const v1028 = fn.name;
                            const v1029 = {};
                            v1029.actual = v1028;
                            v1029.expected = name;
                            err.data = v1029;
                            throw err;
                        }
                    }
                }
                const v1015 = i++;
                v1014 = i < v1013;
            }
            return name;
        };
        const createError = function (fn, argCount, index, actual, expected) {
            var actualType = getTypeOf(actual);
            let _expected;
            const v1030 = expected.split(',');
            if (expected) {
                _expected = v1030;
            } else {
                _expected = null;
            }
            var _fn = fn || 'unnamed';
            const v1031 = contains(_expected, 'any');
            var anyType = _expected && v1031;
            var message;
            var data = {};
            data.fn = fn;
            data.index = index;
            data.actual = actual;
            data.expected = _expected;
            if (_expected) {
                const v1032 = argCount > index;
                const v1033 = !anyType;
                const v1034 = v1032 && v1033;
                if (v1034) {
                    const v1035 = 'Unexpected type of argument in function ' + _fn;
                    const v1036 = v1035 + ' (expected: ';
                    const v1037 = _expected.join(' or ');
                    const v1038 = v1036 + v1037;
                    const v1039 = v1038 + ', actual: ';
                    const v1040 = v1039 + actualType;
                    const v1041 = v1040 + ', index: ';
                    const v1042 = v1041 + index;
                    message = v1042 + ')';
                } else {
                    const v1043 = 'Too few arguments in function ' + _fn;
                    const v1044 = v1043 + ' (expected: ';
                    const v1045 = _expected.join(' or ');
                    const v1046 = v1044 + v1045;
                    const v1047 = v1046 + ', index: ';
                    const v1048 = v1047 + index;
                    message = v1048 + ')';
                }
            } else {
                const v1049 = 'Too many arguments in function ' + _fn;
                const v1050 = v1049 + ' (expected: ';
                const v1051 = v1050 + index;
                const v1052 = v1051 + ', actual: ';
                const v1053 = v1052 + argCount;
                message = v1053 + ')';
            }
            var err = new TypeError(message);
            err.data = data;
            return err;
        };
        const Refs = function (name) {
            this.name = name || 'refs';
            const v1054 = {};
            this.categories = v1054;
        };
        const v1055 = Refs.prototype;
        const v1070 = function (fn, category) {
            var cat = category || 'fn';
            const v1056 = this.categories;
            const v1057 = v1056[cat];
            const v1058 = !v1057;
            if (v1058) {
                const v1059 = this.categories;
                v1059[cat] = [];
            }
            const v1060 = this.categories;
            const v1061 = v1060[cat];
            var index = v1061.indexOf(fn);
            const v1062 = -1;
            const v1063 = index == v1062;
            if (v1063) {
                const v1064 = this.categories;
                const v1065 = v1064[cat];
                index = v1065.length;
                const v1066 = this.categories;
                const v1067 = v1066[cat];
                const v1068 = v1067.push(fn);
                v1068;
            }
            const v1069 = cat + index;
            return v1069;
        };
        v1055.add = v1070;
        const v1071 = Refs.prototype;
        const v1088 = function () {
            var code = [];
            const v1072 = this.name;
            var path = v1072 + '.categories';
            var categories = this.categories;
            let cat;
            for (cat in categories) {
                const v1073 = categories.hasOwnProperty(cat);
                if (v1073) {
                    var category = categories[cat];
                    var i = 0;
                    const v1074 = category.length;
                    let v1075 = i < v1074;
                    while (v1075) {
                        const v1077 = 'var ' + cat;
                        const v1078 = v1077 + i;
                        const v1079 = v1078 + ' = ';
                        const v1080 = v1079 + path;
                        const v1081 = v1080 + '[\'';
                        const v1082 = v1081 + cat;
                        const v1083 = v1082 + '\'][';
                        const v1084 = v1083 + i;
                        const v1085 = v1084 + '];';
                        const v1086 = code.push(v1085);
                        v1086;
                        const v1076 = i++;
                        v1075 = i < v1074;
                    }
                }
            }
            const v1087 = code.join('\n');
            return v1087;
        };
        v1071.toCode = v1088;
        const Param = function (types, varArgs) {
            const v1089 = typeof types;
            const v1090 = v1089 === 'string';
            if (v1090) {
                var _types = types.trim();
                const v1091 = _types.substr(0, 3);
                var _varArgs = v1091 === '...';
                if (_varArgs) {
                    _types = _types.substr(3);
                }
                const v1092 = _types === '';
                if (v1092) {
                    this.types = ['any'];
                } else {
                    const v1093 = _types.split('|');
                    this.types = v1093;
                    var i = 0;
                    const v1094 = this.types;
                    const v1095 = v1094.length;
                    let v1096 = i < v1095;
                    while (v1096) {
                        const v1099 = this.types;
                        const v1100 = v1099[i];
                        const v1101 = v1100.trim();
                        v1098[i] = v1101;
                        const v1097 = i++;
                        v1096 = i < v1095;
                    }
                }
            } else {
                const v1102 = Array.isArray(types);
                if (v1102) {
                    this.types = types;
                } else {
                    const v1103 = types instanceof Param;
                    if (v1103) {
                        const v1104 = types.clone();
                        return v1104;
                    } else {
                        const v1105 = new Error('String or Array expected');
                        throw v1105;
                    }
                }
            }
            this.conversions = [];
            const v1106 = _varArgs || varArgs;
            this.varArgs = v1106 || false;
            const v1107 = this.types;
            const v1108 = v1107.indexOf('any');
            const v1109 = -1;
            this.anyType = v1108 !== v1109;
        };
        const v1164 = function (a, b) {
            const v1110 = a.anyType;
            if (v1110) {
                return 1;
            }
            const v1111 = b.anyType;
            if (v1111) {
                const v1112 = -1;
                return v1112;
            }
            const v1113 = a.types;
            const v1114 = contains(v1113, 'Object');
            if (v1114) {
                return 1;
            }
            const v1115 = b.types;
            const v1116 = contains(v1115, 'Object');
            if (v1116) {
                const v1117 = -1;
                return v1117;
            }
            const v1118 = a.hasConversions();
            if (v1118) {
                const v1119 = b.hasConversions();
                if (v1119) {
                    var i;
                    var ac;
                    var bc;
                    i = 0
                    const v1120 = a.conversions;
                    const v1121 = v1120.length;
                    let v1122 = i < v1121;
                    while (v1122) {
                        const v1124 = a.conversions;
                        const v1125 = v1124[i];
                        const v1126 = v1125 !== undefined;
                        if (v1126) {
                            const v1127 = a.conversions;
                            ac = v1127[i];
                            break;
                        }
                        const v1123 = i++;
                        v1122 = i < v1121;
                    }
                    i = 0
                    const v1128 = b.conversions;
                    const v1129 = v1128.length;
                    let v1130 = i < v1129;
                    while (v1130) {
                        const v1132 = b.conversions;
                        const v1133 = v1132[i];
                        const v1134 = v1133 !== undefined;
                        if (v1134) {
                            const v1135 = b.conversions;
                            bc = v1135[i];
                            break;
                        }
                        const v1131 = i++;
                        v1130 = i < v1129;
                    }
                    const v1136 = typed.conversions;
                    const v1137 = v1136.indexOf(ac);
                    const v1138 = typed.conversions;
                    const v1139 = v1138.indexOf(bc);
                    const v1140 = v1137 - v1139;
                    return v1140;
                } else {
                    return 1;
                }
            } else {
                const v1141 = b.hasConversions();
                if (v1141) {
                    const v1142 = -1;
                    return v1142;
                } else {
                    var ai;
                    var bi;
                    i = 0
                    const v1143 = typed.types;
                    const v1144 = v1143.length;
                    let v1145 = i < v1144;
                    while (v1145) {
                        const v1147 = typed.types;
                        const v1148 = v1147[i];
                        const v1149 = v1148.name;
                        const v1150 = a.types;
                        const v1151 = v1150[0];
                        const v1152 = v1149 === v1151;
                        if (v1152) {
                            ai = i;
                            break;
                        }
                        const v1146 = i++;
                        v1145 = i < v1144;
                    }
                    i = 0
                    const v1153 = typed.types;
                    const v1154 = v1153.length;
                    let v1155 = i < v1154;
                    while (v1155) {
                        const v1157 = typed.types;
                        const v1158 = v1157[i];
                        const v1159 = v1158.name;
                        const v1160 = b.types;
                        const v1161 = v1160[0];
                        const v1162 = v1159 === v1161;
                        if (v1162) {
                            bi = i;
                            break;
                        }
                        const v1156 = i++;
                        v1155 = i < v1154;
                    }
                    const v1163 = ai - bi;
                    return v1163;
                }
            }
        };
        Param.compare = v1164;
        const v1165 = Param.prototype;
        const v1174 = function (other) {
            var i = 0;
            const v1166 = this.types;
            const v1167 = v1166.length;
            let v1168 = i < v1167;
            while (v1168) {
                const v1170 = other.types;
                const v1171 = this.types;
                const v1172 = v1171[i];
                const v1173 = contains(v1170, v1172);
                if (v1173) {
                    return true;
                }
                const v1169 = i++;
                v1168 = i < v1167;
            }
            return false;
        };
        v1165.overlapping = v1174;
        const v1175 = Param.prototype;
        const v1181 = function (other) {
            const v1176 = this.anyType;
            const v1177 = other.anyType;
            const v1178 = v1176 || v1177;
            const v1179 = this.overlapping(other);
            const v1180 = v1178 || v1179;
            return v1180;
        };
        v1175.matches = v1181;
        const v1182 = Param.prototype;
        const v1188 = function () {
            const v1183 = this.types;
            const v1184 = v1183.slice();
            const v1185 = this.varArgs;
            var param = new Param(v1184, v1185);
            const v1186 = this.conversions;
            const v1187 = v1186.slice();
            param.conversions = v1187;
            return param;
        };
        v1182.clone = v1188;
        const v1189 = Param.prototype;
        const v1193 = function () {
            const v1190 = this.conversions;
            const v1191 = v1190.length;
            const v1192 = v1191 > 0;
            return v1192;
        };
        v1189.hasConversions = v1193;
        const v1194 = Param.prototype;
        const v1202 = function (types) {
            var i = 0;
            const v1195 = this.types;
            const v1196 = v1195.length;
            let v1197 = i < v1196;
            while (v1197) {
                const v1199 = this.types;
                const v1200 = v1199[i];
                const v1201 = types[v1200];
                if (v1201) {
                    return true;
                }
                const v1198 = i++;
                v1197 = i < v1196;
            }
            return false;
        };
        v1194.contains = v1202;
        const v1203 = Param.prototype;
        const v1220 = function (toConversion) {
            var types = [];
            var keys = {};
            var i = 0;
            const v1204 = this.types;
            const v1205 = v1204.length;
            let v1206 = i < v1205;
            while (v1206) {
                const v1208 = this.conversions;
                var conversion = v1208[i];
                let type;
                const v1209 = toConversion && conversion;
                const v1210 = conversion.to;
                const v1211 = this.types;
                const v1212 = v1211[i];
                if (v1209) {
                    type = v1210;
                } else {
                    type = v1212;
                }
                const v1213 = type in keys;
                const v1214 = !v1213;
                if (v1214) {
                    keys[type] = true;
                    const v1215 = types.push(type);
                    v1215;
                }
                const v1207 = i++;
                v1206 = i < v1205;
            }
            const v1216 = this.varArgs;
            let v1217;
            if (v1216) {
                v1217 = '...';
            } else {
                v1217 = '';
            }
            const v1218 = types.join('|');
            const v1219 = v1217 + v1218;
            return v1219;
        };
        v1203.toString = v1220;
        const Signature = function (params, fn) {
            var _params;
            const v1221 = typeof params;
            const v1222 = v1221 === 'string';
            if (v1222) {
                const v1223 = params !== '';
                const v1224 = params.split(',');
                const v1225 = [];
                if (v1223) {
                    _params = v1224;
                } else {
                    _params = v1225;
                }
            } else {
                const v1226 = Array.isArray(params);
                if (v1226) {
                    _params = params;
                } else {
                    const v1227 = new Error('string or Array expected');
                    throw v1227;
                }
            }
            const v1228 = _params.length;
            this.params = new Array(v1228);
            this.anyType = false;
            this.varArgs = false;
            var i = 0;
            const v1229 = _params.length;
            let v1230 = i < v1229;
            while (v1230) {
                const v1232 = _params[i];
                var param = new Param(v1232);
                const v1233 = this.params;
                v1233[i] = param;
                const v1234 = param.anyType;
                if (v1234) {
                    this.anyType = true;
                }
                const v1235 = _params.length;
                const v1236 = v1235 - 1;
                const v1237 = i === v1236;
                if (v1237) {
                    const v1238 = param.varArgs;
                    this.varArgs = v1238;
                } else {
                    const v1239 = param.varArgs;
                    if (v1239) {
                        const v1240 = new SyntaxError('Unexpected variable arguments operator "..."');
                        throw v1240;
                    }
                }
                const v1231 = i++;
                v1230 = i < v1229;
            }
            this.fn = fn;
        };
        const v1241 = Signature.prototype;
        const v1246 = function () {
            const v1242 = this.params;
            const v1243 = v1242.slice();
            const v1244 = this.fn;
            const v1245 = new Signature(v1243, v1244);
            return v1245;
        };
        v1241.clone = v1246;
        const v1247 = Signature.prototype;
        const v1305 = function () {
            var signatures = [];
            const recurse = function (signature, path) {
                const v1248 = path.length;
                const v1249 = signature.params;
                const v1250 = v1249.length;
                const v1251 = v1248 < v1250;
                if (v1251) {
                    var i;
                    var newParam;
                    var conversion;
                    const v1252 = signature.params;
                    const v1253 = path.length;
                    var param = v1252[v1253];
                    const v1254 = param.varArgs;
                    if (v1254) {
                        newParam = param.clone();
                        i = 0
                        const v1255 = typed.conversions;
                        const v1256 = v1255.length;
                        let v1257 = i < v1256;
                        while (v1257) {
                            const v1259 = typed.conversions;
                            conversion = v1259[i];
                            const v1260 = param.types;
                            const v1261 = conversion.from;
                            const v1262 = contains(v1260, v1261);
                            const v1263 = !v1262;
                            const v1264 = param.types;
                            const v1265 = conversion.to;
                            const v1266 = contains(v1264, v1265);
                            const v1267 = v1263 && v1266;
                            if (v1267) {
                                const v1268 = newParam.types;
                                var j = v1268.length;
                                const v1269 = newParam.types;
                                const v1270 = conversion.from;
                                v1269[j] = v1270;
                                const v1271 = newParam.conversions;
                                v1271[j] = conversion;
                            }
                            const v1258 = i++;
                            v1257 = i < v1256;
                        }
                        const v1272 = path.concat(newParam);
                        const v1273 = recurse(signature, v1272);
                        v1273;
                    } else {
                        i = 0
                        const v1274 = param.types;
                        const v1275 = v1274.length;
                        let v1276 = i < v1275;
                        while (v1276) {
                            const v1278 = param.types;
                            const v1279 = v1278[i];
                            const v1280 = new Param(v1279);
                            const v1281 = path.concat(v1280);
                            const v1282 = recurse(signature, v1281);
                            v1282;
                            const v1277 = i++;
                            v1276 = i < v1275;
                        }
                        i = 0
                        const v1283 = typed.conversions;
                        const v1284 = v1283.length;
                        let v1285 = i < v1284;
                        while (v1285) {
                            const v1287 = typed.conversions;
                            conversion = v1287[i];
                            const v1288 = param.types;
                            const v1289 = conversion.from;
                            const v1290 = contains(v1288, v1289);
                            const v1291 = !v1290;
                            const v1292 = param.types;
                            const v1293 = conversion.to;
                            const v1294 = contains(v1292, v1293);
                            const v1295 = v1291 && v1294;
                            if (v1295) {
                                const v1296 = conversion.from;
                                newParam = new Param(v1296);
                                const v1297 = newParam.conversions;
                                v1297[0] = conversion;
                                const v1298 = path.concat(newParam);
                                const v1299 = recurse(signature, v1298);
                                v1299;
                            }
                            const v1286 = i++;
                            v1285 = i < v1284;
                        }
                    }
                } else {
                    const v1300 = signature.fn;
                    const v1301 = new Signature(path, v1300);
                    const v1302 = signatures.push(v1301);
                    v1302;
                }
            };
            const v1303 = [];
            const v1304 = recurse(this, v1303);
            v1304;
            return signatures;
        };
        v1247.expand = v1305;
        const v1340 = function (a, b) {
            const v1306 = a.params;
            const v1307 = v1306.length;
            const v1308 = b.params;
            const v1309 = v1308.length;
            const v1310 = v1307 > v1309;
            if (v1310) {
                return 1;
            }
            const v1311 = a.params;
            const v1312 = v1311.length;
            const v1313 = b.params;
            const v1314 = v1313.length;
            const v1315 = v1312 < v1314;
            if (v1315) {
                const v1316 = -1;
                return v1316;
            }
            var i;
            const v1317 = a.params;
            var len = v1317.length;
            var ac = 0;
            var bc = 0;
            (i = 0)
            let v1318 = i < len;
            while (v1318) {
                const v1320 = a.params;
                const v1321 = v1320[i];
                const v1322 = v1321.hasConversions();
                if (v1322) {
                    const v1323 = ac++;
                    v1323;
                }
                const v1324 = b.params;
                const v1325 = v1324[i];
                const v1326 = v1325.hasConversions();
                if (v1326) {
                    const v1327 = bc++;
                    v1327;
                }
                const v1319 = i++;
                v1318 = i < len;
            }
            const v1328 = ac > bc;
            if (v1328) {
                return 1;
            }
            const v1329 = ac < bc;
            if (v1329) {
                const v1330 = -1;
                return v1330;
            }
            (i = 0)
            const v1331 = a.params;
            const v1332 = v1331.length;
            let v1333 = i < v1332;
            while (v1333) {
                const v1335 = a.params;
                const v1336 = v1335[i];
                const v1337 = b.params;
                const v1338 = v1337[i];
                var cmp = Param.compare(v1336, v1338);
                const v1339 = cmp !== 0;
                if (v1339) {
                    return cmp;
                }
                const v1334 = i++;
                v1333 = i < v1332;
            }
            return 0;
        };
        Signature.compare = v1340;
        const v1341 = Signature.prototype;
        const v1349 = function () {
            var i = 0;
            const v1342 = this.params;
            const v1343 = v1342.length;
            let v1344 = i < v1343;
            while (v1344) {
                const v1346 = this.params;
                const v1347 = v1346[i];
                const v1348 = v1347.hasConversions();
                if (v1348) {
                    return true;
                }
                const v1345 = i++;
                v1344 = i < v1343;
            }
            return false;
        };
        v1341.hasConversions = v1349;
        const v1350 = Signature.prototype;
        const v1364 = function () {
            var types = {};
            var i = 0;
            const v1351 = typed.ignore;
            const v1352 = v1351.length;
            let v1353 = i < v1352;
            while (v1353) {
                const v1355 = typed.ignore;
                const v1356 = v1355[i];
                types[v1356] = true;
                const v1354 = i++;
                v1353 = i < v1352;
            }
            (i = 0)
            const v1357 = this.params;
            const v1358 = v1357.length;
            let v1359 = i < v1358;
            while (v1359) {
                const v1361 = this.params;
                const v1362 = v1361[i];
                const v1363 = v1362.contains(types);
                if (v1363) {
                    return true;
                }
                const v1360 = i++;
                v1359 = i < v1358;
            }
            return false;
        };
        v1350.ignore = v1364;
        const v1365 = Signature.prototype;
        const v1385 = function (params) {
            const v1366 = params.length;
            const v1367 = v1366 === 0;
            if (v1367) {
                return true;
            }
            const v1368 = this.params;
            var aLast = last(v1368);
            var bLast = last(params);
            var i = 0;
            const v1369 = params.length;
            let v1370 = i < v1369;
            while (v1370) {
                const v1372 = this.params;
                const v1373 = v1372[i];
                const v1374 = aLast.varArgs;
                let v1375;
                if (v1374) {
                    v1375 = aLast;
                } else {
                    v1375 = null;
                }
                var a = v1373 || v1375;
                const v1376 = params[i];
                const v1377 = bLast.varArgs;
                let v1378;
                if (v1377) {
                    v1378 = bLast;
                } else {
                    v1378 = null;
                }
                var b = v1376 || v1378;
                const v1379 = !a;
                const v1380 = !b;
                const v1381 = v1379 || v1380;
                const v1382 = a.matches(b);
                const v1383 = !v1382;
                const v1384 = v1381 || v1383;
                if (v1384) {
                    return false;
                }
                const v1371 = i++;
                v1370 = i < v1369;
            }
            return true;
        };
        v1365.paramsStartWith = v1385;
        const v1386 = Signature.prototype;
        const v1413 = function (refs, prefix) {
            var code = [];
            const v1387 = this.params;
            const v1388 = v1387.length;
            var args = new Array(v1388);
            var i = 0;
            const v1389 = this.params;
            const v1390 = v1389.length;
            let v1391 = i < v1390;
            while (v1391) {
                const v1393 = this.params;
                var param = v1393[i];
                const v1394 = param.conversions;
                var conversion = v1394[0];
                const v1395 = param.varArgs;
                if (v1395) {
                    args[i] = 'varArgs';
                } else {
                    if (conversion) {
                        const v1396 = conversion.convert;
                        const v1397 = refs.add(v1396, 'convert');
                        const v1398 = v1397 + '(arg';
                        const v1399 = v1398 + i;
                        args[i] = v1399 + ')';
                    } else {
                        args[i] = 'arg' + i;
                    }
                }
                const v1392 = i++;
                v1391 = i < v1390;
            }
            let ref;
            const v1400 = this.fn;
            const v1401 = this.fn;
            const v1402 = refs.add(v1401, 'signature');
            if (v1400) {
                ref = v1402;
            } else {
                ref = undefined;
            }
            if (ref) {
                const v1403 = prefix + 'return ';
                const v1404 = v1403 + ref;
                const v1405 = v1404 + '(';
                const v1406 = args.join(', ');
                const v1407 = v1405 + v1406;
                const v1408 = v1407 + '); // signature: ';
                const v1409 = this.params;
                const v1410 = v1409.join(', ');
                const v1411 = v1408 + v1410;
                return v1411;
            }
            const v1412 = code.join('\n');
            return v1412;
        };
        v1386.toCode = v1413;
        const v1414 = Signature.prototype;
        const v1417 = function () {
            const v1415 = this.params;
            const v1416 = v1415.join(', ');
            return v1416;
        };
        v1414.toString = v1417;
        const Node = function (path, signature, childs, fallThrough) {
            const v1418 = [];
            this.path = path || v1418;
            const v1419 = path.length;
            const v1420 = v1419 - 1;
            const v1421 = path[v1420];
            this.param = v1421 || null;
            this.signature = signature || null;
            const v1422 = [];
            this.childs = childs || v1422;
            this.fallThrough = fallThrough || false;
        };
        const v1423 = Node.prototype;
        const v1564 = function (refs, prefix) {
            var code = [];
            const v1424 = this.param;
            if (v1424) {
                const v1425 = this.path;
                const v1426 = v1425.length;
                var index = v1426 - 1;
                const v1427 = this.param;
                const v1428 = v1427.conversions;
                var conversion = v1428[0];
                const v1429 = conversion.from;
                const v1430 = v1429 + ' (convert to ';
                const v1431 = conversion.to;
                const v1432 = v1430 + v1431;
                const v1433 = v1432 + ')';
                const v1434 = this.param;
                let v1435;
                if (conversion) {
                    v1435 = v1433;
                } else {
                    v1435 = v1434;
                }
                var comment = '// type: ' + v1435;
                const v1436 = this.param;
                const v1437 = v1436.varArgs;
                if (v1437) {
                    const v1438 = this.param;
                    const v1439 = v1438.anyType;
                    if (v1439) {
                        const v1440 = prefix + 'if (arguments.length > ';
                        const v1441 = v1440 + index;
                        const v1442 = v1441 + ') {';
                        const v1443 = code.push(v1442);
                        v1443;
                        const v1444 = prefix + '  var varArgs = [];';
                        const v1445 = code.push(v1444);
                        v1445;
                        const v1446 = prefix + '  for (var i = ';
                        const v1447 = v1446 + index;
                        const v1448 = v1447 + '; i < arguments.length; i++) {';
                        const v1449 = code.push(v1448);
                        v1449;
                        const v1450 = prefix + '    varArgs.push(arguments[i]);';
                        const v1451 = code.push(v1450);
                        v1451;
                        const v1452 = prefix + '  }';
                        const v1453 = code.push(v1452);
                        v1453;
                        const v1454 = this.signature;
                        const v1455 = prefix + '  ';
                        const v1456 = v1454.toCode(refs, v1455);
                        const v1457 = code.push(v1456);
                        v1457;
                        const v1458 = prefix + '}';
                        const v1459 = code.push(v1458);
                        v1459;
                    } else {
                        const v1469 = function (types, arg) {
                            var tests = [];
                            var i = 0;
                            const v1460 = types.length;
                            let v1461 = i < v1460;
                            while (v1461) {
                                const v1463 = types[i];
                                const v1464 = getTypeTest(v1463);
                                const v1465 = refs.add(v1464, 'test');
                                const v1466 = v1465 + '(';
                                const v1467 = v1466 + arg;
                                tests[i] = v1467 + ')';
                                const v1462 = i++;
                                v1461 = i < v1460;
                            }
                            const v1468 = tests.join(' || ');
                            return v1468;
                        };
                        var getTests = v1469.bind(this);
                        const v1470 = this.param;
                        var allTypes = v1470.types;
                        var exactTypes = [];
                        var i = 0;
                        const v1471 = allTypes.length;
                        let v1472 = i < v1471;
                        while (v1472) {
                            const v1474 = this.param;
                            const v1475 = v1474.conversions;
                            const v1476 = v1475[i];
                            const v1477 = v1476 === undefined;
                            if (v1477) {
                                const v1478 = allTypes[i];
                                const v1479 = exactTypes.push(v1478);
                                v1479;
                            }
                            const v1473 = i++;
                            v1472 = i < v1471;
                        }
                        const v1480 = prefix + 'if (';
                        const v1481 = 'arg' + index;
                        const v1482 = getTests(allTypes, v1481);
                        const v1483 = v1480 + v1482;
                        const v1484 = v1483 + ') { ';
                        const v1485 = v1484 + comment;
                        const v1486 = code.push(v1485);
                        v1486;
                        const v1487 = prefix + '  var varArgs = [arg';
                        const v1488 = v1487 + index;
                        const v1489 = v1488 + '];';
                        const v1490 = code.push(v1489);
                        v1490;
                        const v1491 = prefix + '  for (var i = ';
                        const v1492 = index + 1;
                        const v1493 = v1491 + v1492;
                        const v1494 = v1493 + '; i < arguments.length; i++) {';
                        const v1495 = code.push(v1494);
                        v1495;
                        const v1496 = prefix + '    if (';
                        const v1497 = getTests(exactTypes, 'arguments[i]');
                        const v1498 = v1496 + v1497;
                        const v1499 = v1498 + ') {';
                        const v1500 = code.push(v1499);
                        v1500;
                        const v1501 = prefix + '      varArgs.push(arguments[i]);';
                        const v1502 = code.push(v1501);
                        v1502;
                        var i = 0;
                        const v1503 = allTypes.length;
                        let v1504 = i < v1503;
                        while (v1504) {
                            const v1506 = this.param;
                            const v1507 = v1506.conversions;
                            var conversion_i = v1507[i];
                            if (conversion_i) {
                                const v1508 = allTypes[i];
                                const v1509 = getTypeTest(v1508);
                                var test = refs.add(v1509, 'test');
                                const v1510 = conversion_i.convert;
                                var convert = refs.add(v1510, 'convert');
                                const v1511 = prefix + '    }';
                                const v1512 = code.push(v1511);
                                v1512;
                                const v1513 = prefix + '    else if (';
                                const v1514 = v1513 + test;
                                const v1515 = v1514 + '(arguments[i])) {';
                                const v1516 = code.push(v1515);
                                v1516;
                                const v1517 = prefix + '      varArgs.push(';
                                const v1518 = v1517 + convert;
                                const v1519 = v1518 + '(arguments[i]));';
                                const v1520 = code.push(v1519);
                                v1520;
                            }
                            const v1505 = i++;
                            v1504 = i < v1503;
                        }
                        const v1521 = prefix + '    } else {';
                        const v1522 = code.push(v1521);
                        v1522;
                        const v1523 = prefix + '      throw createError(name, arguments.length, i, arguments[i], \'';
                        const v1524 = exactTypes.join(',');
                        const v1525 = v1523 + v1524;
                        const v1526 = v1525 + '\');';
                        const v1527 = code.push(v1526);
                        v1527;
                        const v1528 = prefix + '    }';
                        const v1529 = code.push(v1528);
                        v1529;
                        const v1530 = prefix + '  }';
                        const v1531 = code.push(v1530);
                        v1531;
                        const v1532 = this.signature;
                        const v1533 = prefix + '  ';
                        const v1534 = v1532.toCode(refs, v1533);
                        const v1535 = code.push(v1534);
                        v1535;
                        const v1536 = prefix + '}';
                        const v1537 = code.push(v1536);
                        v1537;
                    }
                } else {
                    const v1538 = this.param;
                    const v1539 = v1538.anyType;
                    if (v1539) {
                        const v1540 = prefix + '// type: any';
                        const v1541 = code.push(v1540);
                        v1541;
                        const v1542 = this._innerCode(refs, prefix);
                        const v1543 = code.push(v1542);
                        v1543;
                    } else {
                        const v1544 = this.param;
                        const v1545 = v1544.types;
                        var type = v1545[0];
                        let test;
                        const v1546 = type !== 'any';
                        const v1547 = getTypeTest(type);
                        const v1548 = refs.add(v1547, 'test');
                        if (v1546) {
                            test = v1548;
                        } else {
                            test = null;
                        }
                        const v1549 = prefix + 'if (';
                        const v1550 = v1549 + test;
                        const v1551 = v1550 + '(arg';
                        const v1552 = v1551 + index;
                        const v1553 = v1552 + ')) { ';
                        const v1554 = v1553 + comment;
                        const v1555 = code.push(v1554);
                        v1555;
                        const v1556 = prefix + '  ';
                        const v1557 = this._innerCode(refs, v1556);
                        const v1558 = code.push(v1557);
                        v1558;
                        const v1559 = prefix + '}';
                        const v1560 = code.push(v1559);
                        v1560;
                    }
                }
            } else {
                const v1561 = this._innerCode(refs, prefix);
                const v1562 = code.push(v1561);
                v1562;
            }
            const v1563 = code.join('\n');
            return v1563;
        };
        v1423.toCode = v1564;
        const v1565 = Node.prototype;
        const v1596 = function (refs, prefix) {
            var code = [];
            var i;
            const v1566 = this.signature;
            if (v1566) {
                const v1567 = prefix + 'if (arguments.length === ';
                const v1568 = this.path;
                const v1569 = v1568.length;
                const v1570 = v1567 + v1569;
                const v1571 = v1570 + ') {';
                const v1572 = code.push(v1571);
                v1572;
                const v1573 = this.signature;
                const v1574 = prefix + '  ';
                const v1575 = v1573.toCode(refs, v1574);
                const v1576 = code.push(v1575);
                v1576;
                const v1577 = prefix + '}';
                const v1578 = code.push(v1577);
                v1578;
            }
            (i = 0)
            const v1579 = this.childs;
            const v1580 = v1579.length;
            let v1581 = i < v1580;
            while (v1581) {
                const v1583 = this.childs;
                const v1584 = v1583[i];
                const v1585 = v1584.toCode(refs, prefix);
                const v1586 = code.push(v1585);
                v1586;
                const v1582 = i++;
                v1581 = i < v1580;
            }
            const v1587 = this.fallThrough;
            const v1588 = !v1587;
            const v1589 = this.param;
            const v1590 = this.param;
            const v1591 = v1590.anyType;
            const v1592 = v1589 && v1591;
            const v1593 = v1588 || v1592;
            if (v1593) {
                var exceptions = this._exceptions(refs, prefix);
                if (exceptions) {
                    const v1594 = code.push(exceptions);
                    v1594;
                }
            }
            const v1595 = code.join('\n');
            return v1595;
        };
        v1565._innerCode = v1596;
        const v1597 = Node.prototype;
        const v1642 = function (refs, prefix) {
            const v1598 = this.path;
            var index = v1598.length;
            const v1599 = this.childs;
            const v1600 = v1599.length;
            const v1601 = v1600 === 0;
            if (v1601) {
                const v1602 = prefix + 'if (arguments.length > ';
                const v1603 = v1602 + index;
                const v1604 = v1603 + ') {';
                const v1605 = prefix + '  throw createError(name, arguments.length, ';
                const v1606 = v1605 + index;
                const v1607 = v1606 + ', arguments[';
                const v1608 = v1607 + index;
                const v1609 = v1608 + ']);';
                const v1610 = prefix + '}';
                const v1611 = [
                    v1604,
                    v1609,
                    v1610
                ];
                const v1612 = v1611.join('\n');
                return v1612;
            } else {
                var keys = {};
                var types = [];
                var i = 0;
                const v1613 = this.childs;
                const v1614 = v1613.length;
                let v1615 = i < v1614;
                while (v1615) {
                    const v1617 = this.childs;
                    var node = v1617[i];
                    const v1618 = node.param;
                    if (v1618) {
                        var j = 0;
                        const v1619 = node.param;
                        const v1620 = v1619.types;
                        const v1621 = v1620.length;
                        let v1622 = j < v1621;
                        while (v1622) {
                            const v1624 = node.param;
                            const v1625 = v1624.types;
                            var type = v1625[j];
                            const v1626 = type in keys;
                            const v1627 = !v1626;
                            const v1628 = node.param;
                            const v1629 = v1628.conversions;
                            const v1630 = v1629[j];
                            const v1631 = !v1630;
                            const v1632 = v1627 && v1631;
                            if (v1632) {
                                keys[type] = true;
                                const v1633 = types.push(type);
                                v1633;
                            }
                            const v1623 = j++;
                            v1622 = j < v1621;
                        }
                    }
                    const v1616 = i++;
                    v1615 = i < v1614;
                }
                const v1634 = prefix + 'throw createError(name, arguments.length, ';
                const v1635 = v1634 + index;
                const v1636 = v1635 + ', arguments[';
                const v1637 = v1636 + index;
                const v1638 = v1637 + '], \'';
                const v1639 = types.join(',');
                const v1640 = v1638 + v1639;
                const v1641 = v1640 + '\');';
                return v1641;
            }
        };
        v1597._exceptions = v1642;
        const parseSignatures = function (rawSignatures) {
            var signature;
            var keys = {};
            var signatures = [];
            var i;
            let types;
            for (types in rawSignatures) {
                const v1643 = rawSignatures.hasOwnProperty(types);
                if (v1643) {
                    var fn = rawSignatures[types];
                    signature = new Signature(types, fn);
                    const v1644 = signature.ignore();
                    if (v1644) {
                        continue;
                    }
                    var expanded = signature.expand();
                    i = 0
                    const v1645 = expanded.length;
                    let v1646 = i < v1645;
                    while (v1646) {
                        var signature_i = expanded[i];
                        var key = signature_i.toString();
                        var existing = keys[key];
                        const v1648 = !existing;
                        if (v1648) {
                            keys[key] = signature_i;
                        } else {
                            var cmp = Signature.compare(signature_i, existing);
                            const v1649 = cmp < 0;
                            if (v1649) {
                                keys[key] = signature_i;
                            } else {
                                const v1650 = cmp === 0;
                                if (v1650) {
                                    const v1651 = 'Signature "' + key;
                                    const v1652 = v1651 + '" is defined twice';
                                    const v1653 = new Error(v1652);
                                    throw v1653;
                                }
                            }
                        }
                        const v1647 = i++;
                        v1646 = i < v1645;
                    }
                }
            }
            for (key in keys) {
                const v1654 = keys.hasOwnProperty(key);
                if (v1654) {
                    const v1655 = keys[key];
                    const v1656 = signatures.push(v1655);
                    v1656;
                }
            }
            const v1658 = function (a, b) {
                const v1657 = Signature.compare(a, b);
                return v1657;
            };
            const v1659 = signatures.sort(v1658);
            v1659;
            (i = 0)
            const v1660 = signatures.length;
            let v1661 = i < v1660;
            while (v1661) {
                signature = signatures[i];
                const v1663 = signature.varArgs;
                if (v1663) {
                    const v1664 = signature.params;
                    const v1665 = v1664.length;
                    var index = v1665 - 1;
                    const v1666 = signature.params;
                    var param = v1666[index];
                    var t = 0;
                    const v1667 = param.types;
                    const v1668 = v1667.length;
                    let v1669 = t < v1668;
                    while (v1669) {
                        const v1670 = param.conversions;
                        const v1671 = v1670[t];
                        if (v1671) {
                            const v1672 = param.types;
                            var type = v1672[t];
                            var j = 0;
                            const v1673 = signatures.length;
                            let v1674 = j < v1673;
                            while (v1674) {
                                var other = signatures[j];
                                const v1676 = other.params;
                                var p = v1676[index];
                                const v1677 = other !== signature;
                                const v1678 = v1677 && p;
                                const v1679 = p.types;
                                const v1680 = contains(v1679, type);
                                const v1681 = v1678 && v1680;
                                const v1682 = p.conversions;
                                const v1683 = v1682[index];
                                const v1684 = !v1683;
                                const v1685 = v1681 && v1684;
                                if (v1685) {
                                    const v1686 = param.types;
                                    const v1687 = v1686.splice(t, 1);
                                    v1687;
                                    const v1688 = param.conversions;
                                    const v1689 = v1688.splice(t, 1);
                                    v1689;
                                    const v1690 = t--;
                                    v1690;
                                    break;
                                }
                                const v1675 = j++;
                                v1674 = j < v1673;
                            }
                        }
                        const v1691 = t++;
                        v1691;
                        v1669 = t < v1668;
                    }
                }
                const v1662 = i++;
                v1661 = i < v1660;
            }
            return signatures;
        };
        const filterAnyTypeSignatures = function (signatures) {
            var filtered = [];
            var i = 0;
            const v1692 = signatures.length;
            let v1693 = i < v1692;
            while (v1693) {
                const v1695 = signatures[i];
                const v1696 = v1695.anyType;
                if (v1696) {
                    const v1697 = signatures[i];
                    const v1698 = filtered.push(v1697);
                    v1698;
                }
                const v1694 = i++;
                v1693 = i < v1692;
            }
            return filtered;
        };
        const mapSignatures = function (signatures) {
            var normalized = {};
            var i = 0;
            const v1699 = signatures.length;
            let v1700 = i < v1699;
            while (v1700) {
                var signature = signatures[i];
                const v1702 = signature.fn;
                const v1703 = signature.hasConversions();
                const v1704 = !v1703;
                const v1705 = v1702 && v1704;
                if (v1705) {
                    const v1706 = signature.params;
                    var params = v1706.join(',');
                    const v1707 = signature.fn;
                    normalized[params] = v1707;
                }
                const v1701 = i++;
                v1700 = i < v1699;
            }
            return normalized;
        };
        const parseTree = function (signatures, path, anys) {
            var i;
            var signature;
            var index = path.length;
            var nodeSignature;
            var filtered = [];
            (i = 0)
            const v1708 = signatures.length;
            let v1709 = i < v1708;
            while (v1709) {
                signature = signatures[i];
                const v1711 = signature.params;
                const v1712 = v1711.length;
                const v1713 = v1712 === index;
                const v1714 = !nodeSignature;
                const v1715 = v1713 && v1714;
                if (v1715) {
                    nodeSignature = signature;
                }
                const v1716 = signature.params;
                const v1717 = v1716[index];
                const v1718 = v1717 != undefined;
                if (v1718) {
                    const v1719 = filtered.push(signature);
                    v1719;
                }
                const v1710 = i++;
                v1709 = i < v1708;
            }
            const v1725 = function (a, b) {
                const v1720 = a.params;
                const v1721 = v1720[index];
                const v1722 = b.params;
                const v1723 = v1722[index];
                const v1724 = Param.compare(v1721, v1723);
                return v1724;
            };
            const v1726 = filtered.sort(v1725);
            v1726;
            var entries = [];
            (i = 0)
            const v1727 = filtered.length;
            let v1728 = i < v1727;
            while (v1728) {
                signature = filtered[i];
                const v1730 = signature.params;
                var param = v1730[index];
                const v1733 = function (entry) {
                    const v1731 = entry.param;
                    const v1732 = v1731.overlapping(param);
                    return v1732;
                };
                const v1734 = entries.filter(v1733);
                var existing = v1734[0];
                if (existing) {
                    const v1735 = existing.param;
                    const v1736 = v1735.varArgs;
                    if (v1736) {
                        const v1737 = existing.param;
                        const v1738 = 'Conflicting types "' + v1737;
                        const v1739 = v1738 + '" and "';
                        const v1740 = v1739 + param;
                        const v1741 = v1740 + '"';
                        const v1742 = new Error(v1741);
                        throw v1742;
                    }
                    const v1743 = existing.signatures;
                    const v1744 = v1743.push(signature);
                    v1744;
                } else {
                    const v1745 = [signature];
                    const v1746 = {
                        param: param,
                        signatures: v1745
                    };
                    const v1747 = entries.push(v1746);
                    v1747;
                }
                const v1729 = i++;
                v1728 = i < v1727;
            }
            var matchingAnys = [];
            (i = 0)
            const v1748 = anys.length;
            let v1749 = i < v1748;
            while (v1749) {
                const v1751 = anys[i];
                const v1752 = v1751.paramsStartWith(path);
                if (v1752) {
                    const v1753 = anys[i];
                    const v1754 = matchingAnys.push(v1753);
                    v1754;
                }
                const v1750 = i++;
                v1749 = i < v1748;
            }
            var fallThrough = false;
            (i = 0)
            const v1755 = matchingAnys.length;
            let v1756 = i < v1755;
            while (v1756) {
                const v1758 = matchingAnys[i];
                const v1759 = contains(signatures, v1758);
                const v1760 = !v1759;
                if (v1760) {
                    fallThrough = true;
                    break;
                }
                const v1757 = i++;
                v1756 = i < v1755;
            }
            const v1761 = entries.length;
            var childs = new Array(v1761);
            (i = 0)
            const v1762 = entries.length;
            let v1763 = i < v1762;
            while (v1763) {
                var entry = entries[i];
                const v1765 = entry.signatures;
                const v1766 = entry.param;
                const v1767 = path.concat(v1766);
                const v1768 = parseTree(v1765, v1767, matchingAnys);
                childs[i] = v1768;
                const v1764 = i++;
                v1763 = i < v1762;
            }
            const v1769 = new Node(path, nodeSignature, childs, fallThrough);
            return v1769;
        };
        const getArgs = function (count) {
            var args = [];
            var i = 0;
            let v1770 = i < count;
            while (v1770) {
                args[i] = 'arg' + i;
                const v1771 = i++;
                v1770 = i < count;
            }
            return args;
        };
        const _typed = function (name, signatures) {
            var refs = new Refs();
            var _signatures = parseSignatures(signatures);
            const v1772 = _signatures.length;
            const v1773 = v1772 == 0;
            if (v1773) {
                const v1774 = new Error('No signatures provided');
                throw v1774;
            }
            var anys = filterAnyTypeSignatures(_signatures);
            const v1775 = [];
            var node = parseTree(_signatures, v1775, anys);
            var code = [];
            var _name = name || '';
            const v1776 = maxParams(_signatures);
            var _args = getArgs(v1776);
            const v1777 = 'function ' + _name;
            const v1778 = v1777 + '(';
            const v1779 = _args.join(', ');
            const v1780 = v1778 + v1779;
            const v1781 = v1780 + ') {';
            const v1782 = code.push(v1781);
            v1782;
            const v1783 = code.push('  "use strict";');
            v1783;
            const v1784 = '  var name = \'' + _name;
            const v1785 = v1784 + '\';';
            const v1786 = code.push(v1785);
            v1786;
            const v1787 = node.toCode(refs, '  ', false);
            const v1788 = code.push(v1787);
            v1788;
            const v1789 = code.push('}');
            v1789;
            const v1790 = refs.toCode();
            const v1791 = code.join('\n');
            const v1792 = 'return ' + v1791;
            const v1793 = [
                v1790,
                v1792
            ];
            var body = v1793.join('\n');
            const v1794 = refs.name;
            var factory = new Function(v1794, 'createError', body);
            var fn = factory(refs, createError);
            const v1795 = mapSignatures(_signatures);
            fn.signatures = v1795;
            return fn;
        };
        const maxParams = function (signatures) {
            var max = 0;
            var i = 0;
            const v1796 = signatures.length;
            let v1797 = i < v1796;
            while (v1797) {
                const v1799 = signatures[i];
                const v1800 = v1799.params;
                var len = v1800.length;
                const v1801 = len > max;
                if (v1801) {
                    max = len;
                }
                const v1798 = i++;
                v1797 = i < v1796;
            }
            return max;
        };
        const getTypeOf = function (x) {
            var obj;
            var i = 0;
            const v1802 = typed.types;
            const v1803 = v1802.length;
            let v1804 = i < v1803;
            while (v1804) {
                const v1806 = typed.types;
                var entry = v1806[i];
                const v1807 = entry.name;
                const v1808 = v1807 === 'Object';
                if (v1808) {
                    obj = entry;
                } else {
                    const v1809 = entry.test(x);
                    if (v1809) {
                        const v1810 = entry.name;
                        return v1810;
                    }
                }
                const v1805 = i++;
                v1804 = i < v1803;
            }
            const v1811 = obj.test(x);
            const v1812 = obj && v1811;
            if (v1812) {
                const v1813 = obj.name;
                return v1813;
            }
            return 'unknown';
        };
        const contains = function (array, item) {
            const v1814 = array.indexOf(item);
            const v1815 = -1;
            const v1816 = v1814 !== v1815;
            return v1816;
        };
        const last = function (array) {
            const v1817 = array.length;
            const v1818 = v1817 - 1;
            const v1819 = array[v1818];
            return v1819;
        };
        const v1822 = function (x) {
            const v1820 = typeof x;
            const v1821 = v1820 === 'number';
            return v1821;
        };
        const v1823 = {
            name: 'number',
            test: v1822
        };
        const v1826 = function (x) {
            const v1824 = typeof x;
            const v1825 = v1824 === 'string';
            return v1825;
        };
        const v1827 = {
            name: 'string',
            test: v1826
        };
        const v1830 = function (x) {
            const v1828 = typeof x;
            const v1829 = v1828 === 'boolean';
            return v1829;
        };
        const v1831 = {
            name: 'boolean',
            test: v1830
        };
        const v1834 = function (x) {
            const v1832 = typeof x;
            const v1833 = v1832 === 'function';
            return v1833;
        };
        const v1835 = {
            name: 'Function',
            test: v1834
        };
        const v1836 = Array.isArray;
        const v1837 = {
            name: 'Array',
            test: v1836
        };
        const v1839 = function (x) {
            const v1838 = x instanceof Date;
            return v1838;
        };
        const v1840 = {
            name: 'Date',
            test: v1839
        };
        const v1842 = function (x) {
            const v1841 = x instanceof RegExp;
            return v1841;
        };
        const v1843 = {
            name: 'RegExp',
            test: v1842
        };
        const v1846 = function (x) {
            const v1844 = typeof x;
            const v1845 = v1844 === 'object';
            return v1845;
        };
        const v1847 = {
            name: 'Object',
            test: v1846
        };
        const v1849 = function (x) {
            const v1848 = x === null;
            return v1848;
        };
        const v1850 = {
            name: 'null',
            test: v1849
        };
        const v1852 = function (x) {
            const v1851 = x === undefined;
            return v1851;
        };
        const v1853 = {
            name: 'undefined',
            test: v1852
        };
        var types = [
            v1823,
            v1827,
            v1831,
            v1835,
            v1837,
            v1840,
            v1843,
            v1847,
            v1850,
            v1853
        ];
        var config = {};
        var conversions = [];
        var ignore = [];
        var typed = {};
        typed.config = config;
        typed.types = types;
        typed.conversions = conversions;
        typed.ignore = ignore;
        const v1858 = function (signatures) {
            var fns = [];
            let signature;
            for (signature in signatures) {
                const v1854 = signatures.hasOwnProperty(signature);
                if (v1854) {
                    const v1855 = signatures[signature];
                    const v1856 = fns.push(v1855);
                    v1856;
                }
            }
            var name = getName(fns);
            const v1857 = _typed(name, signatures);
            return v1857;
        };
        const v1883 = function (fns) {
            var err;
            var name = getName(fns);
            var signatures = {};
            var i = 0;
            const v1859 = fns.length;
            let v1860 = i < v1859;
            while (v1860) {
                var fn = fns[i];
                const v1862 = fn.signatures;
                const v1863 = typeof v1862;
                const v1864 = v1863 === 'object';
                const v1865 = !v1864;
                if (v1865) {
                    const v1866 = 'Function is no typed-function (index: ' + i;
                    const v1867 = v1866 + ')';
                    err = new TypeError(v1867);
                    const v1868 = {};
                    v1868.index = i;
                    err.data = v1868;
                    throw err;
                }
                let signature;
                const v1869 = fn.signatures;
                for (signature in v1869) {
                    const v1870 = fn.signatures;
                    const v1871 = v1870.hasOwnProperty(signature);
                    if (v1871) {
                        const v1872 = signatures.hasOwnProperty(signature);
                        if (v1872) {
                            const v1873 = fn.signatures;
                            const v1874 = v1873[signature];
                            const v1875 = signatures[signature];
                            const v1876 = v1874 !== v1875;
                            if (v1876) {
                                const v1877 = 'Signature "' + signature;
                                const v1878 = v1877 + '" is defined twice';
                                err = new Error(v1878);
                                const v1879 = {};
                                v1879.signature = signature;
                                err.data = v1879;
                                throw err;
                            }
                        } else {
                            const v1880 = fn.signatures;
                            const v1881 = v1880[signature];
                            signatures[signature] = v1881;
                        }
                    }
                }
                const v1861 = i++;
                v1860 = i < v1859;
            }
            const v1882 = _typed(name, signatures);
            return v1882;
        };
        const v1884 = {
            'Object': v1858,
            'string, Object': _typed,
            '...Function': v1883
        };
        typed = _typed('typed', v1884);
        const find = function (fn, signature) {
            const v1885 = fn.signatures;
            const v1886 = !v1885;
            if (v1886) {
                const v1887 = new TypeError('Function is no typed-function');
                throw v1887;
            }
            var arr;
            const v1888 = typeof signature;
            const v1889 = v1888 === 'string';
            if (v1889) {
                arr = signature.split(',');
                var i = 0;
                const v1890 = arr.length;
                let v1891 = i < v1890;
                while (v1891) {
                    const v1893 = arr[i];
                    const v1894 = v1893.trim();
                    arr[i] = v1894;
                    const v1892 = i++;
                    v1891 = i < v1890;
                }
            } else {
                const v1895 = Array.isArray(signature);
                if (v1895) {
                    arr = signature;
                } else {
                    const v1896 = new TypeError('String array or a comma separated string expected');
                    throw v1896;
                }
            }
            var str = arr.join(',');
            const v1897 = fn.signatures;
            var match = v1897[str];
            if (match) {
                return match;
            }
            const v1898 = fn.name;
            const v1899 = v1898 || 'unnamed';
            const v1900 = 'Signature not found (signature: ' + v1899;
            const v1901 = v1900 + '(';
            const v1902 = arr.join(', ');
            const v1903 = v1901 + v1902;
            const v1904 = v1903 + '))';
            const v1905 = new TypeError(v1904);
            throw v1905;
        };
        const convert = function (value, type) {
            var from = getTypeOf(value);
            const v1906 = type === from;
            if (v1906) {
                return value;
            }
            var i = 0;
            const v1907 = typed.conversions;
            const v1908 = v1907.length;
            let v1909 = i < v1908;
            while (v1909) {
                const v1911 = typed.conversions;
                var conversion = v1911[i];
                const v1912 = conversion.from;
                const v1913 = v1912 === from;
                const v1914 = conversion.to;
                const v1915 = v1914 === type;
                const v1916 = v1913 && v1915;
                if (v1916) {
                    const v1917 = conversion.convert(value);
                    return v1917;
                }
                const v1910 = i++;
                v1909 = i < v1908;
            }
            const v1918 = 'Cannot convert from ' + from;
            const v1919 = v1918 + ' to ';
            const v1920 = v1919 + type;
            const v1921 = new Error(v1920);
            throw v1921;
        };
        typed.config = config;
        typed.types = types;
        typed.conversions = conversions;
        typed.ignore = ignore;
        typed.create = create;
        typed.find = find;
        typed.convert = convert;
        const v1934 = function (type) {
            const v1922 = !type;
            const v1923 = type.name;
            const v1924 = typeof v1923;
            const v1925 = v1924 !== 'string';
            const v1926 = v1922 || v1925;
            const v1927 = type.test;
            const v1928 = typeof v1927;
            const v1929 = v1928 !== 'function';
            const v1930 = v1926 || v1929;
            if (v1930) {
                const v1931 = new TypeError('Object with properties {name: string, test: function} expected');
                throw v1931;
            }
            const v1932 = typed.types;
            const v1933 = v1932.push(type);
            v1933;
        };
        typed.addType = v1934;
        const v1951 = function (conversion) {
            const v1935 = !conversion;
            const v1936 = conversion.from;
            const v1937 = typeof v1936;
            const v1938 = v1937 !== 'string';
            const v1939 = v1935 || v1938;
            const v1940 = conversion.to;
            const v1941 = typeof v1940;
            const v1942 = v1941 !== 'string';
            const v1943 = v1939 || v1942;
            const v1944 = conversion.convert;
            const v1945 = typeof v1944;
            const v1946 = v1945 !== 'function';
            const v1947 = v1943 || v1946;
            if (v1947) {
                const v1948 = new TypeError('Object with properties {from: string, to: string, convert: function} expected');
                throw v1948;
            }
            const v1949 = typed.conversions;
            const v1950 = v1949.push(conversion);
            v1950;
        };
        typed.addConversion = v1951;
        return typed;
    };
    const v1952 = create();
    return v1952;
};
const v1954 = v988(this, v1953);
v1954;
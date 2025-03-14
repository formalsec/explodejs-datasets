'use strict';
var fs = require('fs');
var path = require('path');
var babel = require('babel-core');
var esprima = require('esprima');
var uglify = require('uglify-js');
var walk = require('esprima-walk');
const v976 = require('child_process');
var exec = v976.execSync;
var DS = path.sep;
const v977 = process.cwd();
var __callerDir = v977 + DS;
const v978 = __callerDir + 'node_modules';
var modulesPath = v978 + DS;
const v979 = DS + 'lib';
const v980 = __dirname.replace(v979, '');
const __buns = v980 + DS;
const v981 = __dirname + DS;
const v982 = v981 + 'src';
const v983 = v982 + DS;
const v984 = v983 + 'core';
const __core = v984 + DS;
const v985 = __dirname + DS;
const v986 = v985 + 'src';
const v987 = v986 + DS;
const v988 = v987 + 'includes';
const __inc = v988 + DS;
const v989 = __buns + 'node_modules';
const __mod = v989 + DS;
const v990 = __dirname + DS;
const v991 = v990 + 'src';
const v992 = v991 + DS;
const v993 = v992 + 'templates';
const __tpl = v993 + DS;
const v994 = __buns + '.tmp';
const __tmp = v994 + DS;
const v995 = __buns.replace(__callerDir, '');
const v996 = v995.replace(/\\/g, '/');
const v997 = '/' + v996;
const __tmpUri = v997 + '.tmp/';
try {
    const v998 = __mod + 'babel-preset-es2015';
    const v999 = fs.lstatSync(v998);
    const v1000 = v999.isDirectory();
    v1000;
    const v1001 = babel.OptionManager;
    const v1002 = v1001.prototype;
    const resolvePresets = function (presets, dirname, onResolve) {
        const v1005 = function (val) {
            const v1003 = __mod + 'babel-preset-';
            var presetLoc = v1003 + val;
            const v1004 = require(presetLoc);
            return v1004;
        };
        const v1006 = presets.map(v1005);
        return v1006;
    };
    v1002.resolvePresets = resolvePresets;
} catch (e) {
}
const BUILD_CONF = 'buns.json';
const MOD_CONF = __mod + 'modules.json';
const BOOT_FILE = 'bootstrap.js';
const TEMP_FILE = 'temp.js';
var i;
var j;
var e;
var currentModule;
var loopModules = false;
const v1007 = [];
const v1008 = {};
var config = {};
config.output = 'output';
config.source = 'source';
config.mode = 'dev';
config.watch = v1007;
config.modules = v1008;
var modules;
var currentPath;
var NL = '\n\n\n';
var file;
var moduleName;
var requiredPaths = [];
var isWatching = false;
var flagValue;
var outputName;
var localConfig = {};
var configExists = true;
var moduleOrder = [];
try {
    const v1009 = fs.readFileSync(BUILD_CONF);
    localConfig = JSON.parse(v1009, 'utf-8');
} catch (e) {
    configExists = false;
}
const extend = function (target) {
    const v1010 = [];
    const v1011 = v1010.slice;
    var sources = v1011.call(arguments, 1);
    const v1013 = function (source) {
        let prop;
        for (prop in source) {
            const v1012 = source[prop];
            target[prop] = v1012;
        }
    };
    const v1014 = sources.forEach(v1013);
    v1014;
    return target;
};
e = __callerDir.split(DS);
if (localConfig) {
    config = extend(config, localConfig);
}
const walkCallback = function (node, tempCode, code, explodedName) {
    var parsedData = {};
    var sub;
    const v1015 = node.type;
    const v1016 = node && v1015;
    if (v1016) {
        const v1017 = node.type;
        switch (v1017) {
        case 'CallExpression':
            const v1018 = node.callee;
            const v1019 = v1018.range;
            const v1020 = v1019[0];
            const v1021 = node.callee;
            const v1022 = v1021.range;
            const v1023 = v1022[1];
            const v1024 = node.callee;
            const v1025 = v1024.range;
            const v1026 = v1025[0];
            const v1027 = v1023 - v1026;
            sub = code.substr(v1020, v1027);
            e = sub.split('.');
            const v1028 = node.callee;
            const v1029 = v1028.loc;
            const v1030 = v1029.start;
            parsedData.dbg = v1030;
            const v1031 = e.length;
            const v1032 = v1031 - 1;
            const v1033 = e[v1032];
            parsedData.method = v1033;
            const v1034 = parsedData.method;
            const v1035 = '.' + v1034;
            const v1036 = sub.replace(v1035, '');
            parsedData.member = v1036;
            const v1037 = parsedData.member;
            const v1038 = v1037.indexOf('function(');
            const v1039 = 0 !== v1038;
            const v1040 = parsedData.member;
            const v1041 = 'super' !== v1040;
            const v1042 = v1039 && v1041;
            if (v1042) {
                const v1043 = parsedData.member;
                const v1044 = parsedData.method;
                const v1045 = v1043 === v1044;
                if (v1045) {
                    parsedData.member = 'null';
                } else {
                    const v1046 = parsedData.method;
                    const v1047 = `'` + v1046;
                    parsedData.method = v1047 + `'`;
                }
                parsedData.arguments = [];
                const v1048 = node.arguments;
                const v1059 = function (val) {
                    const v1049 = parsedData.arguments;
                    const v1050 = val.range;
                    const v1051 = v1050[0];
                    const v1052 = val.range;
                    const v1053 = v1052[1];
                    const v1054 = val.range;
                    const v1055 = v1054[0];
                    const v1056 = v1053 - v1055;
                    const v1057 = code.substr(v1051, v1056);
                    const v1058 = v1049.push(v1057);
                    v1058;
                };
                const v1060 = v1048.forEach(v1059);
                v1060;
                const v1061 = node.range;
                const v1062 = v1061[0];
                const v1063 = node.range;
                const v1064 = v1063[1];
                const v1065 = node.range;
                const v1066 = v1065[0];
                const v1067 = v1064 - v1066;
                const v1068 = code.substr(v1062, v1067);
                const v1069 = v1068.escape();
                const v1070 = v1069 + '(?!\\s+{)';
                const v1071 = new RegExp(v1070);
                const v1072 = parsedData.member;
                const v1073 = `trace(` + v1072;
                const v1074 = v1073 + `,`;
                const v1075 = parsedData.method;
                const v1076 = v1074 + v1075;
                const v1077 = v1076 + `,[`;
                const v1078 = parsedData.arguments;
                const v1079 = v1078.join(',');
                const v1080 = v1077 + v1079;
                const v1081 = v1080 + `],`;
                const v1082 = parsedData.dbg;
                const v1083 = v1082.line;
                const v1084 = v1081 + v1083;
                const v1085 = v1084 + `,`;
                const v1086 = parsedData.dbg;
                const v1087 = v1086.column;
                const v1088 = v1085 + v1087;
                const v1089 = v1088 + `,`;
                const v1090 = v1089 + explodedName;
                const v1091 = v1090 + `)`;
                tempCode = tempCode.replace(v1071, v1091);
            }
            break;
        case 'NewExpression':
            const v1092 = node.callee;
            const v1093 = v1092.range;
            const v1094 = v1093[0];
            const v1095 = node.callee;
            const v1096 = v1095.range;
            const v1097 = v1096[1];
            const v1098 = node.callee;
            const v1099 = v1098.range;
            const v1100 = v1099[0];
            const v1101 = v1097 - v1100;
            sub = code.substr(v1094, v1101);
            const v1102 = node.loc;
            const v1103 = v1102.start;
            parsedData.dbg = v1103;
            const v1104 = e.length;
            const v1105 = v1104 - 1;
            const v1106 = e[v1105];
            parsedData.method = v1106;
            parsedData.className = sub;
            parsedData.arguments = [];
            const v1107 = node.arguments;
            const v1118 = function (val) {
                const v1108 = parsedData.arguments;
                const v1109 = val.range;
                const v1110 = v1109[0];
                const v1111 = val.range;
                const v1112 = v1111[1];
                const v1113 = val.range;
                const v1114 = v1113[0];
                const v1115 = v1112 - v1114;
                const v1116 = code.substr(v1110, v1115);
                const v1117 = v1108.push(v1116);
                v1117;
            };
            const v1119 = v1107.forEach(v1118);
            v1119;
            const v1120 = node.range;
            const v1121 = v1120[0];
            const v1122 = node.range;
            const v1123 = v1122[1];
            const v1124 = node.range;
            const v1125 = v1124[0];
            const v1126 = v1123 - v1125;
            const v1127 = code.substr(v1121, v1126);
            const v1128 = v1127.escape();
            const v1129 = v1128 + '(?!\\s+{)';
            const v1130 = new RegExp(v1129);
            const v1131 = parsedData.className;
            const v1132 = `traceInstance(` + v1131;
            const v1133 = v1132 + `, [`;
            const v1134 = parsedData.arguments;
            const v1135 = v1134.join(',');
            const v1136 = v1133 + v1135;
            const v1137 = v1136 + `], `;
            const v1138 = parsedData.dbg;
            const v1139 = v1138.line;
            const v1140 = v1137 + v1139;
            const v1141 = v1140 + `, `;
            const v1142 = parsedData.dbg;
            const v1143 = v1142.column;
            const v1144 = v1141 + v1143;
            const v1145 = v1144 + `,`;
            const v1146 = v1145 + explodedName;
            const v1147 = v1146 + `)`;
            tempCode = tempCode.replace(v1130, v1147);
            break;
        case 'MethodDefinition':
            break;
        default:
            break;
        }
    }
    return tempCode;
};
const v1148 = String.prototype;
const v1153 = function (regexes) {
    var thus = this;
    const v1151 = function (val) {
        const v1149 = new RegExp(val);
        const v1150 = thus.match(v1149);
        return v1150;
    };
    const v1152 = regexes.some(v1151);
    return v1152;
};
v1148.matchIn = v1153;
const v1154 = String.prototype;
const v1161 = function (number, regexes) {
    var thus = this;
    var matches = 0;
    const v1159 = function (val) {
        const v1155 = new RegExp(val);
        const v1156 = thus.match(v1155);
        if (v1156) {
            const v1157 = ++matches;
            v1157;
        }
        const v1158 = matches === number;
        if (v1158) {
            return true;
        }
    };
    const v1160 = regexes.some(v1159);
    return v1160;
};
v1154.matchAtLeast = v1161;
const v1162 = String.prototype;
const v1169 = function (number, regexes) {
    var thus = this;
    var flag = true;
    var matches = 0;
    const v1167 = function (val) {
        const v1163 = new RegExp(val);
        const v1164 = thus.match(v1163);
        if (v1164) {
            const v1165 = ++matches;
            v1165;
        }
        const v1166 = matches > number;
        if (v1166) {
            flag = false;
        }
    };
    const v1168 = regexes.forEach(v1167);
    v1168;
    return flag;
};
v1162.matchAtMost = v1169;
const v1170 = String.prototype;
const v1181 = function (regexp) {
    var matches = [];
    const v1177 = function () {
        const v1171 = [];
        const v1172 = v1171.slice;
        var arr = v1172.call(arguments, 0);
        const v1173 = -2;
        var extras = arr.splice(v1173);
        const v1174 = extras[0];
        arr.index = v1174;
        const v1175 = extras[1];
        arr.input = v1175;
        const v1176 = matches.push(arr);
        v1176;
    };
    const v1178 = this.replace(regexp, v1177);
    v1178;
    const v1179 = matches.length;
    let v1180;
    if (v1179) {
        v1180 = matches;
    } else {
        v1180 = null;
    }
    return v1180;
};
v1170.matchAll = v1181;
const v1182 = String.prototype;
const v1184 = function () {
    const v1183 = this.replace(/\\/g, '\\\\');
    return v1183;
};
v1182.adjustPath = v1184;
const v1185 = String.prototype;
const v1192 = function (idx, rem, str) {
    const v1186 = this.slice(0, idx);
    const v1187 = v1186 + str;
    const v1188 = Math.abs(rem);
    const v1189 = idx + v1188;
    const v1190 = this.slice(v1189);
    const v1191 = v1187 + v1190;
    return v1191;
};
v1185.splice = v1192;
const v1193 = String.prototype;
const v1195 = function () {
    const v1194 = this.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    return v1194;
};
v1193.escape = v1195;
const v1196 = String.prototype;
const v1200 = function () {
    var slug = '';
    var trimmed = this.trim();
    const v1197 = trimmed.replace(/[^a-z0-9-]/gi, '-');
    const v1198 = v1197.replace(/-+/g, '-');
    slug = v1198.replace(/^-|-$/g, '');
    const v1199 = slug.toLowerCase();
    return v1199;
};
v1196.slugify = v1200;
const v1201 = String.prototype;
const v1206 = function () {
    const v1202 = this.charAt(0);
    const v1203 = v1202.toUpperCase();
    const v1204 = this.slice(1);
    const v1205 = v1203 + v1204;
    return v1205;
};
v1201.capitalize = v1206;
const v1207 = String.prototype;
const v1210 = function () {
    const v1208 = this.replace(/([a-z])([A-Z])/g, '$1-$2');
    const v1209 = v1208.toLowerCase();
    return v1209;
};
v1207.camelCaseToDash = v1210;
const v1211 = String.prototype;
const v1216 = function () {
    const v1214 = function (g) {
        const v1212 = g[1];
        const v1213 = v1212.toUpperCase();
        return v1213;
    };
    const v1215 = this.replace(/-([a-z])/g, v1214);
    return v1215;
};
v1211.dashToCamelCase = v1216;
const preprocess = function (fileName, code) {
    var classMatch = code.match(/class\s+(\S+)(?:\s+extends\s+(?:\S+))?/);
    var parentMatch = code.match(/class\s+(?:\S+)(?:\s+extends\s+(\S+))?/);
    var currentClass;
    var parentClass;
    var i;
    var replacements;
    var explodedName;
    e = fileName.split(DS);
    const v1217 = e.length;
    const v1218 = v1217 - 3;
    const v1219 = e[v1218];
    const v1220 = '\'' + v1219;
    const v1221 = v1220 + DS;
    const v1222 = e.length;
    const v1223 = v1222 - 2;
    const v1224 = e[v1223];
    const v1225 = v1221 + v1224;
    const v1226 = v1225 + DS;
    const v1227 = e.length;
    const v1228 = v1227 - 1;
    const v1229 = e[v1228];
    const v1230 = v1229.replace(/\\/g, '\\\\');
    const v1231 = v1226 + v1230;
    explodedName = v1231 + '\'';
    if (classMatch) {
        currentClass = classMatch[1];
    }
    if (parentMatch) {
        parentClass = parentMatch[1];
    }
    const namespacify = function () {
        var namespace = code.match(/#!namespace\s+([^;\r\n]*)/);
        var uses = code.matchAll(/#!use\s+([^;\r\n]*)/g);
        var classNameSplit;
        var used = [];
        if (uses) {
            const v1257 = function (val, key) {
                const v1232 = val[1];
                replacements = v1232.matchAll(/([^\s,]+)(?:\s+as\s+([^,]+))?/g);
                const v1233 = val[0];
                const v1234 = val[0];
                const v1235 = v1234.replace(/(.)/g, '/');
                code = code.replace(v1233, v1235);
                const v1255 = function (val1, key1) {
                    const v1236 = val1[2];
                    const v1237 = undefined !== v1236;
                    if (v1237) {
                        const v1238 = val1[2];
                        const v1239 = '\\b' + v1238;
                        const v1240 = v1239 + '\\b';
                        const v1241 = new RegExp(v1240, 'g');
                        const v1242 = val1[1];
                        code = code.replace(v1241, v1242);
                    } else {
                        const v1243 = val1[1];
                        classNameSplit = v1243.split('.');
                        const v1244 = classNameSplit.length;
                        const v1245 = v1244 - 1;
                        const v1246 = classNameSplit[v1245];
                        const v1247 = used.push(v1246);
                        v1247;
                        const v1248 = classNameSplit.length;
                        const v1249 = v1248 - 1;
                        const v1250 = classNameSplit[v1249];
                        const v1251 = '\\b' + v1250;
                        const v1252 = v1251 + '\\b';
                        const v1253 = new RegExp(v1252, 'g');
                        const v1254 = val1[1];
                        code = code.replace(v1253, v1254);
                    }
                };
                const v1256 = replacements.forEach(v1255);
                v1256;
            };
            const v1258 = uses.forEach(v1257);
            v1258;
        }
        if (namespace) {
            const v1259 = namespace[1];
            const v1260 = v1259 + ' = ';
            const v1261 = namespace[1];
            const v1262 = v1260 + v1261;
            const v1263 = v1262 + ' || {};';
            code = v1263 + code;
            const v1264 = namespace[0];
            const v1265 = namespace[0];
            const v1266 = v1265.replace(/(.)/g, '/');
            code = code.replace(v1264, v1266);
            const v1267 = namespace[1];
            const v1268 = v1267 + '.';
            const v1269 = v1268 + currentClass;
            const v1270 = v1269 + ' = class';
            code = code.replace('class', v1270);
            const v1271 = namespace[1];
            const v1272 = v1271 + '.';
            currentClass = v1272 + currentClass;
        }
    };
    const enableDebug = function () {
        var tempCode = code;
        const v1273 = {
            range: true,
            attachComment: true,
            loc: true
        };
        var parsed = esprima.parse(code, v1273);
        var excludeClasses = [
            '^Development',
            '^Environment',
            '^Abstract'
        ];
        const v1274 = currentClass.matchIn(excludeClasses);
        const v1275 = !v1274;
        const v1276 = currentClass && v1275;
        if (v1276) {
            const v1277 = parsed.body;
            const v1278 = parsed && v1277;
            if (v1278) {
                const v1279 = function (node) {
                    tempCode = walkCallback(node, tempCode, code, explodedName);
                };
                const v1280 = walk(parsed, v1279);
                v1280;
            }
            code = tempCode;
            var methods = code.match(/((?!\b(if|while|for|function|typeof|switch)\b)\b[\w]+\s*\(([^().]*)\)\s*{)/g);
            var args;
            var toCheck = [];
            var codeWalk;
            var codeReplaced = [];
            var calls;
            var matchKey;
            var matchVal;
            var key;
            var output = '';
            var funcName;
            if (methods) {
                const v1315 = function (val) {
                    const v1281 = val.replace('*', '\\*');
                    const v1282 = 'function\\s+' + v1281;
                    const v1283 = new RegExp(v1282);
                    const v1284 = code.match(v1283);
                    const v1285 = !v1284;
                    if (v1285) {
                        funcName = val.match(/([^()]+)\(/);
                        args = val.match(/\w*\((.*)\) {/);
                        if (args) {
                            const v1286 = args[1];
                            args = v1286.split(/\s*,\s*/);
                            toCheck = [];
                            output = '';
                            i = 0
                            const v1287 = args.length;
                            let v1288 = i < v1287;
                            while (v1288) {
                                const v1290 = args[i];
                                matchKey = v1290.match(/\/\*(\w*)\*\//);
                                const v1291 = args[i];
                                matchVal = v1291.match(/(?:\/\*\w*\*\/)?(\w*)/);
                                const v1292 = matchVal[1];
                                if (v1292) {
                                    const v1293 = {};
                                    toCheck[i] = v1293;
                                    const v1294 = toCheck[i];
                                    const v1295 = matchKey[1];
                                    let v1296;
                                    if (matchKey) {
                                        v1296 = v1295;
                                    } else {
                                        v1296 = 'mixed';
                                    }
                                    const v1297 = matchVal[1];
                                    v1294[v1296] = v1297;
                                    const v1298 = matchKey[1];
                                    let v1299;
                                    if (matchKey) {
                                        v1299 = v1298;
                                    } else {
                                        v1299 = 'mixed';
                                    }
                                    const v1300 = '{"' + v1299;
                                    const v1301 = v1300 + '": ';
                                    const v1302 = matchVal[1];
                                    const v1303 = v1301 + v1302;
                                    output += v1303 + '}';
                                    const v1304 = i + 1;
                                    const v1305 = args.length;
                                    const v1306 = v1304 !== v1305;
                                    if (v1306) {
                                        output += ', ';
                                    }
                                }
                                const v1289 = ++i;
                                v1288 = i < v1287;
                            }
                            const v1307 = val + `Development.Debugger.Argument.check([`;
                            const v1308 = v1307 + output;
                            const v1309 = v1308 + `], '`;
                            const v1310 = funcName[1];
                            const v1311 = v1309 + v1310;
                            const v1312 = v1311 + `', `;
                            const v1313 = v1312 + explodedName;
                            const v1314 = v1313 + `);`;
                            code = code.replace(val, v1314);
                        }
                    }
                };
                const v1316 = methods.forEach(v1315);
                v1316;
            }
        }
    };
    const v1317 = namespacify();
    v1317;
    const v1318 = config.mode;
    const v1319 = 'dev' === v1318;
    if (v1319) {
        const v1320 = enableDebug();
        v1320;
    }
    return code;
};
const treatFile = function (dirname, filename) {
    file = path.resolve(dirname, filename);
    const v1321 = path.extname(file);
    const v1322 = '.js' === v1321;
    if (v1322) {
        const v1323 = -1;
        const v1324 = file.indexOf(BOOT_FILE);
        const v1325 = v1323 < v1324;
        if (v1325) {
            return;
        }
        const v1326 = config.mode;
        const v1327 = 'dev' === v1326;
        if (v1327) {
            const v1328 = -1;
            const v1329 = file.indexOf(__dirname);
            const v1330 = v1328 < v1329;
            if (v1330) {
                var parentDirs = dirname.replace(__dirname, '');
            } else {
                if (loopModules) {
                    var parentDirs = dirname.replace(modulesPath, '');
                } else {
                    const v1331 = config.source;
                    const v1332 = __callerDir + v1331;
                    var parentDirs = dirname.replace(v1332, '');
                }
            }
            const v1333 = fs.readFileSync(file, 'utf-8');
            const v1334 = preprocess(file, v1333);
            const v1335 = [
                'es2015',
                'stage-0'
            ];
            const v1336 = { presets: v1335 };
            var result = babel.transform(v1334, v1336);
            var filePath = parentDirs.replace(/\\/g, '/');
            const v1337 = filePath.indexOf('/');
            const v1338 = 0 === v1337;
            const v1339 = filePath.substr(1);
            let v1340;
            if (v1338) {
                v1340 = v1339;
            } else {
                v1340 = filePath;
            }
            const v1341 = __tmpUri + v1340;
            const v1342 = v1341 + '/';
            const v1343 = v1342 + filename;
            const v1344 = requiredPaths.push(v1343);
            v1344;
            const v1345 = __tmp + parentDirs;
            const v1346 = v1345 + DS;
            const v1347 = v1346 + filename;
            const v1348 = result.code;
            const v1349 = fs.writeFileSync(v1347, v1348);
            v1349;
        } else {
            var temp = fs.readFileSync(file, 'utf-8');
            const v1350 = currentPath + TEMP_FILE;
            const v1351 = preprocess(file, temp);
            const v1352 = '\n' + v1351;
            const v1353 = fs.appendFileSync(v1350, v1352);
            v1353;
        }
    } else {
        const v1354 = path.extname(file);
        const v1355 = '' === v1354;
        if (v1355) {
            const v1356 = config.mode;
            const v1357 = 'dev' === v1356;
            if (v1357) {
                const v1358 = -1;
                const v1359 = file.indexOf(__dirname);
                const v1360 = v1358 < v1359;
                if (v1360) {
                    const v1361 = file.replace(__dirname, '');
                    var parentDirs = v1361.split(DS);
                } else {
                    if (loopModules) {
                        const v1362 = file.replace(modulesPath, '');
                        var parentDirs = v1362.split(DS);
                    } else {
                        const v1363 = file.replace(__callerDir, '');
                        var parentDirs = v1363.split(DS);
                    }
                }
                var tempPath = __tmp;
                const v1367 = function (val) {
                    tempPath += val + DS;
                    const v1364 = fs.existsSync(tempPath);
                    const v1365 = !v1364;
                    if (v1365) {
                        const v1366 = fs.mkdirSync(tempPath);
                        v1366;
                    }
                };
                const v1368 = parentDirs.forEach(v1367);
                v1368;
            }
            const v1369 = -1;
            const v1370 = file.indexOf(__buns);
            const v1371 = v1369 < v1370;
            const v1372 = v1371 || loopModules;
            const v1373 = file !== MOD_CONF;
            const v1374 = v1372 && v1373;
            if (v1374) {
                var roots = [
                    'core',
                    'modules'
                ];
                var splittedName = file.split(DS);
                var newNamespace;
                const v1375 = -1;
                const v1376 = splittedName.length;
                const v1377 = v1376 - 2;
                const v1378 = splittedName[v1377];
                const v1379 = roots.indexOf(v1378);
                const v1380 = v1375 < v1379;
                if (v1380) {
                    const v1381 = splittedName.length;
                    const v1382 = v1381 - 1;
                    const v1383 = splittedName[v1382];
                    const v1384 = 'var ' + v1383;
                    const v1385 = v1384 + ' = ';
                    const v1386 = splittedName.length;
                    const v1387 = v1386 - 1;
                    const v1388 = splittedName[v1387];
                    const v1389 = v1385 + v1388;
                    newNamespace = v1389 + ' || {};';
                } else {
                    if (loopModules) {
                        const v1390 = splittedName.length;
                        const v1391 = v1390 - 2;
                        const v1392 = splittedName[v1391];
                        const v1393 = 'buns' === v1392;
                        if (v1393) {
                            const v1394 = splittedName.length;
                            const v1395 = v1394 - 1;
                            const v1396 = splittedName[v1395];
                            const v1397 = 'var ' + v1396;
                            const v1398 = v1397 + ' = ';
                            const v1399 = splittedName.length;
                            const v1400 = v1399 - 1;
                            const v1401 = splittedName[v1400];
                            const v1402 = v1398 + v1401;
                            newNamespace = v1402 + ' || {};';
                        } else {
                            const v1403 = splittedName.length;
                            const v1404 = v1403 - 2;
                            const v1405 = splittedName[v1404];
                            const v1406 = v1405 + '.';
                            const v1407 = splittedName.length;
                            const v1408 = v1407 - 1;
                            const v1409 = splittedName[v1408];
                            const v1410 = v1406 + v1409;
                            const v1411 = v1410 + ' = ';
                            const v1412 = splittedName.length;
                            const v1413 = v1412 - 2;
                            const v1414 = splittedName[v1413];
                            const v1415 = v1411 + v1414;
                            const v1416 = v1415 + '.';
                            const v1417 = splittedName.length;
                            const v1418 = v1417 - 1;
                            const v1419 = splittedName[v1418];
                            const v1420 = v1416 + v1419;
                            newNamespace = v1420 + ' || {};';
                        }
                    } else {
                        const v1421 = splittedName.length;
                        const v1422 = v1421 - 2;
                        const v1423 = splittedName[v1422];
                        const v1424 = v1423 + '.';
                        const v1425 = splittedName.length;
                        const v1426 = v1425 - 1;
                        const v1427 = splittedName[v1426];
                        const v1428 = v1424 + v1427;
                        const v1429 = v1428 + ' = ';
                        const v1430 = splittedName.length;
                        const v1431 = v1430 - 2;
                        const v1432 = splittedName[v1431];
                        const v1433 = v1429 + v1432;
                        const v1434 = v1433 + '.';
                        const v1435 = splittedName.length;
                        const v1436 = v1435 - 1;
                        const v1437 = splittedName[v1436];
                        const v1438 = v1434 + v1437;
                        newNamespace = v1438 + ' || {};';
                    }
                }
                const v1439 = currentPath + TEMP_FILE;
                const v1440 = fs.appendFileSync(v1439, newNamespace);
                v1440;
            }
        } else {
        }
    }
};
const recursiveReaddirSync = function (path1) {
    var list = [];
    var files = fs.readdirSync(path1);
    var stats;
    const v1448 = function (file) {
        const v1441 = treatFile(path1, file);
        v1441;
        const v1442 = path.join(path1, file);
        stats = fs.lstatSync(v1442);
        const v1443 = stats.isDirectory();
        if (v1443) {
            const v1444 = path.join(path1, file);
            const v1445 = recursiveReaddirSync(v1444);
            list = list.concat(v1445);
        } else {
            const v1446 = path.join(path1, file);
            const v1447 = list.push(v1446);
            v1447;
        }
    };
    const v1449 = files.forEach(v1448);
    v1449;
    return list;
};
const getDependencies = function (moduleDir, name) {
    const v1450 = moduleDir + name;
    var path = v1450 + DS;
    const v1451 = path + 'package.json';
    const v1452 = fs.readFileSync(v1451, 'utf-8');
    var moduleConf = JSON.parse(v1452);
    const v1454 = function (val) {
        const v1453 = val.name;
        return v1453;
    };
    var loadedModules = moduleOrder.map(v1454);
    const v1455 = -1;
    const v1456 = loadedModules.indexOf(name);
    const v1457 = v1455 === v1456;
    const v1458 = config.mode;
    const v1459 = 'dev' === v1458;
    const v1460 = moduleConf.bunsDev;
    const v1461 = v1459 && v1460;
    const v1462 = moduleConf.buns;
    const v1463 = v1461 || v1462;
    const v1464 = v1457 && v1463;
    if (v1464) {
        const v1465 = moduleConf.dependencies;
        if (v1465) {
            const v1466 = moduleConf.dependencies;
            for (j in v1466) {
                const v1467 = getDependencies(modulesPath, j);
                v1467;
            }
        }
        const v1468 = {
            path,
            name
        };
        const v1469 = moduleOrder.push(v1468);
        v1469;
    }
};
const executeBabel = function () {
    const v1470 = currentPath + DS;
    const v1471 = v1470 + outputName;
    const v1495 = function (error) {
        const v1472 = !error;
        if (v1472) {
            const v1473 = currentPath + DS;
            const v1474 = v1473 + outputName;
            const v1475 = fs.unlinkSync(v1474);
            v1475;
        }
        const v1476 = currentPath + TEMP_FILE;
        const v1477 = fs.readFileSync(v1476, 'utf-8');
        const v1478 = [
            'es2015',
            'stage-0'
        ];
        const v1479 = { presets: v1478 };
        var result = babel.transform(v1477, v1479);
        const v1480 = currentPath + DS;
        const v1481 = v1480 + outputName;
        const v1482 = result.code;
        const v1483 = fs.writeFileSync(v1481, v1482);
        v1483;
        const v1484 = config.mode;
        const v1485 = 'prod' === v1484;
        const v1486 = v1485 && false;
        if (v1486) {
            const v1487 = currentPath + DS;
            const v1488 = v1487 + outputName;
            var minified = uglify.minify(v1488);
            const v1489 = currentPath + DS;
            const v1490 = v1489 + outputName;
            const v1491 = minified.code;
            const v1492 = fs.writeFileSync(v1490, v1491);
            v1492;
        }
        const v1493 = currentPath + TEMP_FILE;
        const v1494 = fs.unlinkSync(v1493);
        v1494;
    };
    const v1496 = fs.stat(v1471, v1495);
    v1496;
};
const v1666 = function (flag) {
    const v1497 = !configExists;
    if (v1497) {
        const v1498 = new Error('Error, buns.json does not exist. You can create it with "buns init" command.');
        throw v1498;
    }
    const v1499 = fs.existsSync(__tmp);
    const v1500 = !v1499;
    if (v1500) {
        const v1501 = fs.mkdirSync(__tmp);
        v1501;
    }
    var bunsBase = __tmp + 'buns-base.js';
    const v1502 = config.outputName;
    const v1503 = 'buns-' + flag;
    const v1504 = v1503 + '.js';
    outputName = v1502 || v1504;
    const v1505 = config.output;
    currentPath = v1505 + DS;
    try {
        const v1506 = currentPath + TEMP_FILE;
        const v1507 = fs.unlinkSync(v1506);
        v1507;
    } catch (e) {
    }
    const v1508 = config.mode;
    config.mode = flag || v1508;
    const v1509 = fs.existsSync(currentPath);
    const v1510 = !v1509;
    if (v1510) {
        const v1511 = fs.mkdirSync(currentPath);
        v1511;
    }
    const v1512 = config.mode;
    const v1513 = 'dev' === v1512;
    if (v1513) {
        const v1514 = currentPath + TEMP_FILE;
        const v1515 = __inc + 'errorInit.js';
        const v1516 = fs.readFileSync(v1515);
        const v1517 = NL + v1516;
        const v1518 = fs.appendFileSync(v1514, v1517);
        v1518;
    } else {
        const v1519 = currentPath + TEMP_FILE;
        const v1520 = NL + '(function() {';
        const v1521 = fs.appendFileSync(v1519, v1520);
        v1521;
    }
    const v1522 = recursiveReaddirSync(__core);
    v1522;
    const v1523 = config.modules;
    const v1524 = Object.keys(v1523);
    const v1525 = v1524.length;
    const v1526 = 0 < v1525;
    if (v1526) {
        loopModules = true;
        const v1527 = config.modules;
        for (i in v1527) {
            currentModule = i;
            const v1528 = modulesPath + i;
            const v1529 = v1528 + DS;
            const v1530 = v1529 + 'buns';
            var modulePath = v1530 + DS;
            const v1532 = function (val) {
                const v1531 = val.name;
                return v1531;
            };
            var loadedModules = moduleOrder.map(v1532);
            const v1533 = -1;
            const v1534 = loadedModules.indexOf(i);
            const v1535 = v1533 === v1534;
            if (v1535) {
                try {
                    const v1536 = getDependencies(modulesPath, i);
                    v1536;
                } catch (e) {
                    const v1537 = 'Error, module "' + i;
                    const v1538 = v1537 + '" is not installed.';
                    const v1539 = new Error(v1538);
                    throw v1539;
                }
            }
        }
        i = 0
        const v1540 = moduleOrder.length;
        let v1541 = i < v1540;
        while (v1541) {
            const v1543 = moduleOrder[i];
            currentModule = v1543.name;
            const v1544 = moduleOrder[i];
            const v1545 = v1544.path;
            const v1546 = v1545 + 'buns';
            const v1547 = v1546 + DS;
            const v1548 = recursiveReaddirSync(v1547);
            v1548;
            try {
                const v1549 = moduleOrder[i];
                const v1550 = v1549.path;
                var currentModuleDir = v1550.replace(modulesPath, '');
                const v1551 = moduleOrder[i];
                const v1552 = v1551.path;
                const v1553 = v1552 + 'buns';
                const v1554 = v1553 + DS;
                const v1555 = v1554 + BOOT_FILE;
                const v1556 = moduleOrder[i];
                const v1557 = v1556.path;
                const v1558 = v1557 + 'buns';
                const v1559 = v1558 + DS;
                const v1560 = v1559 + BOOT_FILE;
                const v1561 = fs.readFileSync(v1560, 'utf-8');
                const v1562 = preprocess(v1555, v1561);
                const v1563 = [
                    'es2015',
                    'stage-0'
                ];
                const v1564 = { presets: v1563 };
                var result = babel.transform(v1562, v1564);
                const v1565 = currentModuleDir + 'buns';
                const v1566 = v1565 + DS;
                const v1567 = v1566 + BOOT_FILE;
                const v1568 = modulesPath + 'buns';
                const v1569 = v1567.replace(v1568, '');
                const v1570 = v1569.replace(/\\/g, '/');
                const v1571 = __tmpUri + v1570;
                const v1572 = requiredPaths.push(v1571);
                v1572;
                const v1573 = __tmp + currentModuleDir;
                const v1574 = v1573 + 'buns';
                const v1575 = v1574 + DS;
                const v1576 = v1575 + BOOT_FILE;
                const v1577 = result.code;
                const v1578 = '(function() {' + v1577;
                const v1579 = v1578 + '})();';
                const v1580 = fs.writeFileSync(v1576, v1579);
                v1580;
            } catch (e) {
            }
            const v1542 = ++i;
            v1541 = i < v1540;
        }
        loopModules = false;
    }
    try {
        const v1581 = config.source;
        const v1582 = recursiveReaddirSync(v1581);
        v1582;
    } catch (e) {
        const v1583 = new Error('Source code directory is not defined or does not exist, check your buns.json file.');
        throw v1583;
    }
    const v1584 = currentPath + TEMP_FILE;
    const v1585 = NL + 'var BUNS_IS_DEV = ';
    const v1586 = config.mode;
    const v1587 = 'dev' === v1586;
    let v1588;
    if (v1587) {
        v1588 = 'true';
    } else {
        v1588 = 'false';
    }
    const v1589 = v1585 + v1588;
    const v1590 = v1589 + ';';
    const v1591 = fs.appendFileSync(v1584, v1590);
    v1591;
    const v1592 = config.mode;
    const v1593 = 'dev' === v1592;
    if (v1593) {
        const v1594 = __buns + 'package.json';
        const v1595 = fs.readFileSync(v1594);
        var confBuns = JSON.parse(v1595);
        const v1596 = exec('npm info buns --json');
        const v1597 = v1596.toString('utf8');
        var infos = JSON.parse(v1597);
        const v1598 = currentPath + TEMP_FILE;
        const v1599 = NL + `var BUNS_FILES = ["`;
        const v1600 = requiredPaths.join('","');
        const v1601 = v1599 + v1600;
        const v1602 = v1601 + `"],`;
        const v1603 = fs.appendFileSync(v1598, v1602);
        v1603;
        const v1604 = currentPath + TEMP_FILE;
        const v1605 = NL + ` BUNS_VERSION = "`;
        const v1606 = confBuns.version;
        const v1607 = v1605 + v1606;
        const v1608 = v1607 + `",`;
        const v1609 = fs.appendFileSync(v1604, v1608);
        v1609;
        const v1610 = currentPath + TEMP_FILE;
        const v1611 = NL + ` BUNS_LATEST_VERSION = "`;
        const v1612 = infos.version;
        const v1613 = v1611 + v1612;
        const v1614 = v1613 + `",`;
        const v1615 = fs.appendFileSync(v1610, v1614);
        v1615;
        const v1616 = currentPath + TEMP_FILE;
        const v1617 = NL + ` BUNS_DEPRECATED_VERSION = "`;
        const v1618 = infos.deprecatedVersion;
        const v1619 = v1617 + v1618;
        const v1620 = v1619 + `";`;
        const v1621 = fs.appendFileSync(v1616, v1620);
        v1621;
        const v1622 = currentPath + TEMP_FILE;
        const v1623 = __inc + 'devLaunch.js';
        const v1624 = fs.readFileSync(v1623);
        const v1625 = NL + v1624;
        const v1626 = fs.appendFileSync(v1622, v1625);
        v1626;
    }
    const v1627 = config.mode;
    const v1628 = 'dev' === v1627;
    if (v1628) {
        const v1629 = currentPath + TEMP_FILE;
        const v1630 = fs.readFileSync(v1629, 'utf-8');
        const v1631 = [
            'es2015',
            'stage-0'
        ];
        const v1632 = { presets: v1631 };
        const v1633 = babel.transform(v1630, v1632);
        const v1634 = v1633.code;
        const v1635 = fs.writeFileSync(bunsBase, v1634);
        v1635;
    }
    var code;
    var sub;
    var parsedData = {};
    try {
        const v1636 = config.source;
        const v1637 = v1636 + DS;
        const v1638 = v1637 + BOOT_FILE;
        const v1639 = fs.statSync(v1638);
        v1639;
        const v1640 = config.source;
        const v1641 = v1640 + DS;
        const v1642 = v1641 + BOOT_FILE;
        code = fs.readFileSync(v1642, 'utf-8');
    } catch (e) {
        const v1643 = __inc + BOOT_FILE;
        code = fs.readFileSync(v1643, 'utf-8');
    }
    var tempCode = code;
    const v1644 = config.mode;
    const v1645 = 'dev' === v1644;
    if (v1645) {
        const v1646 = {
            range: true,
            attachComment: true,
            loc: true
        };
        const v1647 = esprima.parse(code, v1646);
        const v1650 = function (node) {
            const v1648 = '"' + BOOT_FILE;
            const v1649 = v1648 + '"';
            tempCode = walkCallback(node, tempCode, code, v1649);
        };
        const v1651 = walk(v1647, v1650);
        v1651;
    }
    const v1652 = currentPath + TEMP_FILE;
    const v1653 = NL + 'document.addEventListener("DOMContentLoaded", function(BUNS_DOM_READY) {';
    const v1654 = fs.appendFileSync(v1652, v1653);
    v1654;
    const v1655 = currentPath + TEMP_FILE;
    const v1656 = fs.appendFileSync(v1655, tempCode);
    v1656;
    const v1657 = currentPath + TEMP_FILE;
    const v1658 = NL + '});';
    const v1659 = fs.appendFileSync(v1657, v1658);
    v1659;
    const v1660 = config.mode;
    const v1661 = 'prod' === v1660;
    if (v1661) {
        const v1662 = currentPath + TEMP_FILE;
        const v1663 = NL + '})();';
        const v1664 = fs.appendFileSync(v1662, v1663);
        v1664;
    }
    const v1665 = executeBabel();
    v1665;
};
const v1678 = function () {
    var deleteFolderRecursive = function (path) {
        const v1667 = fs.existsSync(path);
        if (v1667) {
            const v1668 = fs.readdirSync(path);
            const v1674 = function (file, index) {
                const v1669 = path + DS;
                var curPath = v1669 + file;
                const v1670 = fs.lstatSync(curPath);
                const v1671 = v1670.isDirectory();
                if (v1671) {
                    const v1672 = deleteFolderRecursive(curPath);
                    v1672;
                } else {
                    const v1673 = fs.unlinkSync(curPath);
                    v1673;
                }
            };
            const v1675 = v1668.forEach(v1674);
            v1675;
            const v1676 = fs.rmdirSync(path);
            v1676;
        }
    };
    const v1677 = deleteFolderRecursive(__tmp);
    v1677;
};
const v1681 = function (data) {
    data = extend(config, data);
    const v1679 = JSON.stringify(data, null, 2);
    const v1680 = fs.writeFileSync(BUILD_CONF, v1679);
    v1680;
};
const v1706 = function (requestedModule) {
    var name = requestedModule;
    const saveModule = function (module) {
        const v1682 = module.buns;
        const v1683 = module.bunsDev;
        const v1684 = v1682 || v1683;
        if (v1684) {
            const v1685 = localConfig.modules;
            const v1686 = !v1685;
            if (v1686) {
                const v1687 = {};
                localConfig.modules = v1687;
            }
            const v1688 = localConfig.modules;
            const v1689 = module.name;
            const v1690 = module.version;
            v1688[v1689] = '^' + v1690;
            const v1691 = JSON.stringify(localConfig, null, 2);
            const v1692 = fs.writeFileSync(BUILD_CONF, v1691);
            v1692;
        } else {
            const v1693 = new Error('This module is not made for Buns.');
            throw v1693;
        }
    };
    var command = 'npm i';
    if (requestedModule) {
        command += ' --save-dev ' + name;
    } else {
        command += ' --only=dev';
        const v1694 = __buns + 'package.json';
        const v1695 = fs.readFileSync(v1694);
        var confBuns = JSON.parse(v1695);
        const v1696 = localConfig.modules;
        confBuns.devDependencies = v1696;
        const v1697 = __buns + 'package.json';
        const v1698 = JSON.stringify(confBuns, null, 2);
        const v1699 = fs.writeFileSync(v1697, v1698);
        v1699;
    }
    const v1700 = exec(command);
    v1700;
    if (requestedModule) {
        const v1701 = modulesPath + name;
        const v1702 = v1701 + DS;
        const v1703 = v1702 + 'package.json';
        const v1704 = fs.readFileSync(v1703);
        var conf = JSON.parse(v1704);
        const v1705 = saveModule(conf);
        v1705;
    }
};
const v1709 = function (type, name) {
    const v1707 = !configExists;
    if (v1707) {
        const v1708 = new Error('Error, buns.json does not exist. You can create it with "buns init" command.');
        throw v1708;
    }
};
const v1950 = function () {
    const v1710 = !configExists;
    if (v1710) {
        const v1711 = new Error('Error, buns.json does not exist. You can create it with "buns init" command.');
        throw v1711;
    }
    config.mode = 'dev';
    const v1712 = this.build();
    v1712;
    const v1713 = require('browser-sync');
    var bs = v1713.create();
    var callbacks = {};
    const v1771 = function (file) {
        const v1714 = -1;
        const v1715 = __tmp + file;
        const v1716 = requiredPaths.indexOf(v1715);
        const v1717 = v1714 === v1716;
        if (v1717) {
            const v1718 = -1;
            const v1719 = file.indexOf(__dirname);
            const v1720 = v1718 < v1719;
            if (v1720) {
                var parentDirs = file.replace(__dirname, '');
            } else {
                const v1721 = config.source;
                const v1722 = __callerDir + v1721;
                var parentDirs = file.replace(v1722, '');
            }
            e = parentDirs.split(DS);
            var filename = e.pop();
            parentDirs = e.join(DS);
            var filePath = parentDirs.replace(/\\/g, '/');
            const v1723 = filePath.indexOf('/');
            const v1724 = 0 === v1723;
            const v1725 = filePath.substr(1);
            let v1726;
            if (v1724) {
                v1726 = v1725;
            } else {
                v1726 = filePath;
            }
            const v1727 = __tmpUri + v1726;
            const v1728 = v1727 + '/';
            const v1729 = v1728 + filename;
            const v1730 = requiredPaths.push(v1729);
            v1730;
        }
        const v1731 = config.source;
        const v1732 = v1731 + DS;
        const v1733 = v1732 + BOOT_FILE;
        const v1734 = v1733 !== file;
        if (v1734) {
            const v1735 = 'Recompiled : ' + __callerDir;
            const v1736 = v1735 + file;
            const v1737 = console.log(v1736);
            v1737;
            const v1738 = __callerDir + DS;
            const v1739 = v1738 + file;
            const v1740 = __callerDir + file;
            const v1741 = fs.readFileSync(v1740, 'utf-8');
            const v1742 = preprocess(v1739, v1741);
            const v1743 = [
                'es2015',
                'stage-0'
            ];
            const v1744 = { presets: v1743 };
            var result = babel.transform(v1742, v1744);
            const v1745 = __tmp + file;
            const v1746 = result.code;
            const v1747 = fs.writeFileSync(v1745, v1746);
            v1747;
        } else {
            const v1748 = config.source;
            const v1749 = v1748 + DS;
            const v1750 = v1749 + BOOT_FILE;
            var code = fs.readFileSync(v1750, 'utf-8');
            var tempCode = code;
            const v1751 = config.mode;
            const v1752 = 'dev' === v1751;
            if (v1752) {
                const v1753 = {
                    range: true,
                    attachComment: true,
                    loc: true
                };
                const v1754 = esprima.parse(code, v1753);
                const v1757 = function (node) {
                    const v1755 = '"' + BOOT_FILE;
                    const v1756 = v1755 + '"';
                    tempCode = walkCallback(node, tempCode, code, v1756);
                };
                const v1758 = walk(v1754, v1757);
                v1758;
            }
            const v1759 = currentPath + outputName;
            const v1760 = __tmp + 'buns-base.js';
            const v1761 = fs.readFileSync(v1760);
            const v1762 = v1761 + NL;
            const v1763 = v1762 + 'document.addEventListener("DOMContentLoaded", function(BUNS_DOM_READY) {';
            const v1764 = v1763 + tempCode;
            const v1765 = v1764 + NL;
            const v1766 = v1765 + '});';
            const v1767 = fs.writeFileSync(v1759, v1766);
            v1767;
        }
        const v1768 = bs.sockets;
        const v1769 = { file: file };
        const v1770 = v1768.emit('browser:reload', v1769);
        v1770;
    };
    callbacks.change = v1771;
    const v1839 = function (file) {
        const v1772 = -1;
        const v1773 = __tmp + file;
        const v1774 = requiredPaths.indexOf(v1773);
        const v1775 = v1772 === v1774;
        if (v1775) {
            const v1776 = -1;
            const v1777 = file.indexOf(__dirname);
            const v1778 = v1776 < v1777;
            if (v1778) {
                var parentDirs = file.replace(__dirname, '');
            } else {
                const v1779 = config.source;
                const v1780 = __callerDir + v1779;
                var parentDirs = file.replace(v1780, '');
            }
            e = parentDirs.split(DS);
            var filename = e.pop();
            parentDirs = e.join(DS);
            var filePath = parentDirs.replace(/\\/g, '/');
            const v1781 = filePath.indexOf('/');
            const v1782 = 0 === v1781;
            const v1783 = filePath.substr(1);
            let v1784;
            if (v1782) {
                v1784 = v1783;
            } else {
                v1784 = filePath;
            }
            const v1785 = __tmpUri + v1784;
            const v1786 = v1785 + '/';
            var newFile = v1786 + filename;
            const v1787 = -1;
            const v1788 = requiredPaths.indexOf(newFile);
            const v1789 = v1787 === v1788;
            if (v1789) {
                const v1790 = requiredPaths.push(newFile);
                v1790;
            }
        }
        const v1791 = config.source;
        const v1792 = v1791 + DS;
        const v1793 = v1792 + BOOT_FILE;
        const v1794 = v1793 !== file;
        if (v1794) {
            const v1795 = 'Added : ' + __callerDir;
            const v1796 = v1795 + file;
            const v1797 = console.log(v1796);
            v1797;
            const v1798 = __callerDir + DS;
            const v1799 = v1798 + file;
            const v1800 = __callerDir + file;
            const v1801 = fs.readFileSync(v1800, 'utf-8');
            const v1802 = preprocess(v1799, v1801);
            const v1803 = [
                'es2015',
                'stage-0'
            ];
            const v1804 = { presets: v1803 };
            var result = babel.transform(v1802, v1804);
            const v1805 = __tmp + file;
            const v1806 = result.code;
            const v1807 = fs.writeFileSync(v1805, v1806);
            v1807;
            const v1808 = currentPath + outputName;
            const v1809 = currentPath + outputName;
            const v1810 = fs.readFileSync(v1809, 'utf-8');
            const v1811 = requiredPaths.join('","');
            const v1812 = `var BUNS_FILES = ["` + v1811;
            const v1813 = v1812 + `"];`;
            const v1814 = v1810.replace(/var BUNS_FILES = \[(?:.*)\];/, v1813);
            const v1815 = fs.writeFileSync(v1808, v1814);
            v1815;
        } else {
            const v1816 = config.source;
            const v1817 = v1816 + DS;
            const v1818 = v1817 + BOOT_FILE;
            var code = fs.readFileSync(v1818, 'utf-8');
            var tempCode = code;
            const v1819 = config.mode;
            const v1820 = 'dev' === v1819;
            if (v1820) {
                const v1821 = {
                    range: true,
                    attachComment: true,
                    loc: true
                };
                const v1822 = esprima.parse(code, v1821);
                const v1825 = function (node) {
                    const v1823 = '"' + BOOT_FILE;
                    const v1824 = v1823 + '"';
                    tempCode = walkCallback(node, tempCode, code, v1824);
                };
                const v1826 = walk(v1822, v1825);
                v1826;
            }
            const v1827 = currentPath + outputName;
            const v1828 = __tmp + 'buns-base.js';
            const v1829 = fs.readFileSync(v1828);
            const v1830 = v1829 + NL;
            const v1831 = v1830 + 'document.addEventListener("DOMContentLoaded", function(BUNS_DOM_READY) {';
            const v1832 = v1831 + tempCode;
            const v1833 = v1832 + NL;
            const v1834 = v1833 + '});';
            const v1835 = fs.writeFileSync(v1827, v1834);
            v1835;
        }
        const v1836 = bs.sockets;
        const v1837 = { file: file };
        const v1838 = v1836.emit('browser:reload', v1837);
        v1838;
    };
    callbacks.add = v1839;
    const v1898 = function (file) {
        const v1840 = -1;
        const v1841 = __tmp + file;
        const v1842 = requiredPaths.indexOf(v1841);
        const v1843 = v1840 === v1842;
        if (v1843) {
            const v1844 = -1;
            const v1845 = file.indexOf(__dirname);
            const v1846 = v1844 < v1845;
            if (v1846) {
                var parentDirs = file.replace(__dirname, '');
            } else {
                const v1847 = config.source;
                const v1848 = __callerDir + v1847;
                var parentDirs = file.replace(v1848, '');
            }
            e = parentDirs.split(DS);
            var filename = e.pop();
            parentDirs = e.join(DS);
            var filePath = parentDirs.replace(/\\/g, '/');
            const v1849 = filePath.indexOf('/');
            const v1850 = 0 === v1849;
            const v1851 = filePath.substr(1);
            let v1852;
            if (v1850) {
                v1852 = v1851;
            } else {
                v1852 = filePath;
            }
            const v1853 = __tmpUri + v1852;
            const v1854 = v1853 + '/';
            var newFile = v1854 + filename;
            const v1855 = -1;
            const v1856 = requiredPaths.indexOf(newFile);
            const v1857 = v1855 === v1856;
            if (v1857) {
                const v1858 = requiredPaths.push(newFile);
                v1858;
            }
        }
        const v1859 = config.source;
        const v1860 = v1859 + DS;
        const v1861 = v1860 + BOOT_FILE;
        const v1862 = v1861 !== file;
        if (v1862) {
            const v1863 = 'Removed : ' + __callerDir;
            const v1864 = v1863 + file;
            const v1865 = console.log(v1864);
            v1865;
            var index = requiredPaths.indexOf(newFile);
            const v1866 = -1;
            const v1867 = v1866 !== index;
            if (v1867) {
                const v1868 = requiredPaths.splice(index, 1);
                v1868;
                const v1869 = currentPath + outputName;
                const v1870 = currentPath + outputName;
                const v1871 = fs.readFileSync(v1870, 'utf-8');
                const v1872 = requiredPaths.join('","');
                const v1873 = `var BUNS_FILES = ["` + v1872;
                const v1874 = v1873 + `"];`;
                const v1875 = v1871.replace(/var BUNS_FILES = \[(?:.*)\];/, v1874);
                const v1876 = fs.writeFileSync(v1869, v1875);
                v1876;
            }
        } else {
            const v1877 = __inc + BOOT_FILE;
            var code = fs.readFileSync(v1877, 'utf-8');
            var tempCode = code;
            const v1878 = config.mode;
            const v1879 = 'dev' === v1878;
            if (v1879) {
                const v1880 = {
                    range: true,
                    attachComment: true,
                    loc: true
                };
                const v1881 = esprima.parse(code, v1880);
                const v1884 = function (node) {
                    const v1882 = '"' + BOOT_FILE;
                    const v1883 = v1882 + '"';
                    tempCode = walkCallback(node, tempCode, code, v1883);
                };
                const v1885 = walk(v1881, v1884);
                v1885;
            }
            const v1886 = currentPath + outputName;
            const v1887 = __tmp + 'buns-base.js';
            const v1888 = fs.readFileSync(v1887);
            const v1889 = v1888 + NL;
            const v1890 = v1889 + 'document.addEventListener("DOMContentLoaded", function(BUNS_DOM_READY) {';
            const v1891 = v1890 + tempCode;
            const v1892 = v1891 + NL;
            const v1893 = v1892 + '});';
            const v1894 = fs.writeFileSync(v1886, v1893);
            v1894;
        }
        const v1895 = bs.sockets;
        const v1896 = { file: file };
        const v1897 = v1895.emit('browser:reload', v1896);
        v1897;
    };
    callbacks.unlink = v1898;
    const v1899 = config.source;
    const v1900 = v1899 + DS;
    const v1901 = v1900 + '**';
    const v1902 = v1901 + DS;
    const v1903 = v1902 + '*.js';
    const v1904 = [v1903];
    const v1906 = function (event, file) {
        const v1905 = callbacks[event](file);
        v1905;
    };
    const v1907 = {
        match: v1904,
        fn: v1906
    };
    const v1908 = [v1907];
    var bsConf = {};
    bsConf.files = v1908;
    bsConf.notify = false;
    const v1909 = config.bs;
    if (v1909) {
        const v1910 = config.bs;
        bsConf = extend(v1910, bsConf);
    }
    const v1911 = bsConf.proxy;
    const v1912 = !v1911;
    const v1913 = bsConf.server;
    const v1914 = !v1913;
    const v1915 = v1912 && v1914;
    if (v1915) {
        bsConf.server = __callerDir;
    }
    const v1916 = bs.init(bsConf);
    v1916;
    const v1917 = config.watch;
    const v1918 = v1917.length;
    const v1919 = 0 < v1918;
    if (v1919) {
        i = 0
        const v1920 = config.watch;
        const v1921 = v1920.length;
        let v1922 = i < v1921;
        while (v1922) {
            const v1924 = config.source;
            const v1925 = v1924 + DS;
            const v1926 = config.watch;
            const v1927 = v1926.length;
            const v1928 = v1927[i];
            const v1929 = v1925 + v1928;
            const v1930 = bs.watch(v1929);
            const v1934 = function (file) {
                const v1931 = bs.sockets;
                const v1932 = { file: file };
                const v1933 = v1931.emit('browser:reload', v1932);
                v1933;
            };
            const v1935 = v1930.on('change', v1934);
            v1935;
            const v1923 = ++i;
            v1922 = i < v1921;
        }
    }
    const v1936 = process.stdin;
    const v1937 = v1936.resume();
    v1937;
    const onExit = function (options) {
        try {
            const v1938 = currentPath + outputName;
            const v1939 = currentPath + outputName;
            const v1940 = fs.readFileSync(v1939, 'utf-8');
            const v1941 = v1940.replace('BUNS_WATCH_ENABLED = true;', 'BUNS_WATCH_ENABLED = false;');
            const v1942 = fs.writeFileSync(v1938, v1941);
            v1942;
        } catch (e) {
        }
        const v1943 = process.exit();
        v1943;
    };
    ;
    const v1944 = process.on('uncaughtException', onExit);
    v1944;
    const v1945 = process.on('SIGHUP', onExit);
    v1945;
    const v1946 = process.on('SIGINT', onExit);
    v1946;
    const v1947 = process.on('SIGTERM', onExit);
    v1947;
    const v1948 = process.on('exit', onExit);
    v1948;
    const v1949 = process.on('beforeExit', onExit);
    v1949;
};
var buns = {};
buns.build = v1666;
buns.clear = v1678;
buns.init = v1681;
buns.install = v1706;
buns.generate = v1709;
buns.watch = v1950;
module.exports = buns;
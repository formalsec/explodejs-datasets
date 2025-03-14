'use strict';
const v848 = this.__assign;
const v849 = this && v848;
const v859 = function () {
    const v850 = Object.assign;
    const v857 = function (t) {
        var s;
        var i = 1;
        var n = arguments.length;
        let v851 = i < n;
        while (v851) {
            s = arguments[i];
            let p;
            for (p in s) {
                const v853 = Object.prototype;
                const v854 = v853.hasOwnProperty;
                const v855 = v854.call(s, p);
                if (v855) {
                    const v856 = s[p];
                    t[p] = v856;
                }
            }
            const v852 = i++;
            v851 = i < n;
        }
        return t;
    };
    __assign = v850 || v857;
    const v858 = __assign.apply(this, arguments);
    return v858;
};
var __assign = v849 || v859;
const v860 = this.__awaiter;
const v861 = this && v860;
const v887 = function (thisArg, _arguments, P, generator) {
    const adopt = function (value) {
        const v862 = value instanceof P;
        const v864 = function (resolve) {
            const v863 = resolve(value);
            v863;
        };
        const v865 = new P(v864);
        let v866;
        if (v862) {
            v866 = value;
        } else {
            v866 = v865;
        }
        return v866;
    };
    const v867 = P || (P = Promise);
    const v885 = function (resolve, reject) {
        const fulfilled = function (value) {
            try {
                const v868 = generator.next(value);
                const v869 = step(v868);
                v869;
            } catch (e) {
                const v870 = reject(e);
                v870;
            }
        };
        const rejected = function (value) {
            try {
                const v871 = generator['throw'](value);
                const v872 = step(v871);
                v872;
            } catch (e) {
                const v873 = reject(e);
                v873;
            }
        };
        const step = function (result) {
            const v874 = result.done;
            const v875 = result.value;
            const v876 = resolve(v875);
            const v877 = result.value;
            const v878 = adopt(v877);
            const v879 = v878.then(fulfilled, rejected);
            let v880;
            if (v874) {
                v880 = v876;
            } else {
                v880 = v879;
            }
            v880;
        };
        const v881 = [];
        const v882 = _arguments || v881;
        const v883 = (generator = generator.apply(thisArg, v882)).next();
        const v884 = step(v883);
        v884;
    };
    const v886 = new v867(v885);
    return v886;
};
var __awaiter = v861 || v887;
const v888 = this.__generator;
const v889 = this && v888;
const v992 = function (thisArg, body) {
    const v894 = function () {
        const v890 = t[0];
        const v891 = v890 & 1;
        if (v891) {
            const v892 = t[1];
            throw v892;
        }
        const v893 = t[1];
        return v893;
    };
    const v895 = [];
    const v896 = [];
    var _ = {};
    _.label = 0;
    _.sent = v894;
    _.trys = v895;
    _.ops = v896;
    var f;
    var y;
    var t;
    var g;
    const v897 = verb(0);
    const v898 = verb(1);
    const v899 = verb(2);
    const v900 = {};
    v900.next = v897;
    v900.throw = v898;
    v900.return = v899;
    const v901 = typeof Symbol;
    const v902 = v901 === 'function';
    const v903 = Symbol.iterator;
    const v904 = function () {
        return this;
    };
    const v905 = v902 && (g[v903] = v904);
    return g = v900, v905, g;
    const verb = function (n) {
        const v908 = function (v) {
            const v906 = [
                n,
                v
            ];
            const v907 = step(v906);
            return v907;
        };
        return v908;
    };
    const step = function (op) {
        if (f) {
            const v909 = new TypeError('Generator is already executing.');
            throw v909;
        }
        const v910 = op[0];
        const v911 = v910 && (_ = 0);
        const v912 = g && (g = 0, v911);
        while (v912, _) {
            try {
                const v923 = op[1];
                const v924 = (t = t.call(y, v923)).done;
                const v925 = !v924;
                const v926 = y && (t = op[0] & 2 ? y['return'] : op[0] ? y['throw'] || ((t = y['return']) && t.call(y), 0) : y.next) && v925;
                if (f = 1, v926) {
                    return t;
                }
                if (y = 0, t) {
                    const v927 = op[0];
                    const v928 = v927 & 2;
                    const v929 = t.value;
                    op = [
                        v928,
                        v929
                    ];
                }
                const v930 = op[0];
                switch (v930) {
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    const v931 = _.label;
                    const v932 = v931++;
                    v932;
                    const v933 = op[1];
                    const v934 = {};
                    v934.value = v933;
                    v934.done = false;
                    return v934;
                case 5:
                    const v935 = _.label;
                    const v936 = v935++;
                    v936;
                    y = op[1];
                    op = [0];
                    continue;
                case 7:
                    const v937 = _.ops;
                    op = v937.pop();
                    const v938 = _.trys;
                    const v939 = v938.pop();
                    v939;
                    continue;
                default:
                    const v940 = t.length;
                    const v941 = v940 > 0;
                    const v942 = t.length;
                    const v943 = v942 - 1;
                    const v944 = t[v943];
                    const v945 = !(t = _.trys, t = v941 && v944);
                    const v946 = op[0];
                    const v947 = v946 === 6;
                    const v948 = op[0];
                    const v949 = v948 === 2;
                    const v950 = v947 || v949;
                    const v951 = v945 && v950;
                    if (v951) {
                        _ = 0;
                        continue;
                    }
                    const v952 = op[0];
                    const v953 = v952 === 3;
                    const v954 = !t;
                    const v955 = op[1];
                    const v956 = t[0];
                    const v957 = v955 > v956;
                    const v958 = op[1];
                    const v959 = t[3];
                    const v960 = v958 < v959;
                    const v961 = v957 && v960;
                    const v962 = v954 || v961;
                    const v963 = v953 && v962;
                    if (v963) {
                        const v964 = op[1];
                        _.label = v964;
                        break;
                    }
                    const v965 = op[0];
                    const v966 = v965 === 6;
                    const v967 = _.label;
                    const v968 = t[1];
                    const v969 = v967 < v968;
                    const v970 = v966 && v969;
                    if (v970) {
                        const v971 = t[1];
                        _.label = v971;
                        t = op;
                        break;
                    }
                    const v972 = _.label;
                    const v973 = t[2];
                    const v974 = v972 < v973;
                    const v975 = t && v974;
                    if (v975) {
                        const v976 = t[2];
                        _.label = v976;
                        const v977 = _.ops;
                        const v978 = v977.push(op);
                        v978;
                        break;
                    }
                    const v979 = t[2];
                    if (v979) {
                        const v980 = _.ops;
                        const v981 = v980.pop();
                        v981;
                    }
                    const v982 = _.trys;
                    const v983 = v982.pop();
                    v983;
                    continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [
                    6,
                    e
                ];
                y = 0;
            } finally {
                t = 0;
                f = t;
            }
        }
        const v984 = op[0];
        const v985 = v984 & 5;
        if (v985) {
            const v986 = op[1];
            throw v986;
        }
        const v987 = op[0];
        const v988 = op[1];
        const v989 = void 0;
        let v990;
        if (v987) {
            v990 = v988;
        } else {
            v990 = v989;
        }
        const v991 = {};
        v991.value = v990;
        v991.done = true;
        return v991;
    };
};
var __generator = v889 || v992;
const v993 = { value: true };
const v994 = Object.defineProperty(exports, '__esModule', v993);
v994;
const v995 = void 0;
exports.version = v995;
exports.setLogger = exports.version;
exports.getLogger = exports.setLogger;
exports.execute = exports.getLogger;
exports.watch = exports.execute;
var dotenv = require('dotenv');
var fs = require('fs');
var path = require('path');
var os = require('os');
var http_1 = require('http');
var utils = require('./lib/utils.js');
var Context = require('./lib/context.js');
const v996 = require('./lib/streaming.js');
v996;
exports.version = '2.0.0';
var logger = utils.getWinstonConsole();
const setLogger = function (_logger) {
    const v997 = _logger != null;
    const v998 = _logger.transports;
    const v999 = typeof v998;
    const v1000 = v999 != 'undefined';
    const v1001 = v997 && v1000;
    if (v1001) {
        logger = _logger;
    } else {
        const v1002 = console.warn('Invalid logger object ! Using default logger');
        v1002;
    }
};
exports.setLogger = setLogger;
const getLogger = function () {
    return logger;
};
exports.getLogger = getLogger;
const execute = function (opts) {
    const v1003 = opts.callback;
    if (v1003) {
        const v1004 = [opts];
        const v1005 = _executeSync.apply(this, v1004);
        v1005;
    } else {
        var that = this;
        const v1012 = function (resolve, reject) {
            const v1006 = {};
            var _opts = Object.assign(v1006, opts);
            const v1009 = function (_err, _done) {
                if (_err) {
                    const v1007 = reject(_err);
                    v1007;
                }
                const v1008 = resolve(_done);
                v1008;
            };
            _opts.callback = v1009;
            const v1010 = [_opts];
            const v1011 = _executeSync.apply(that, v1010);
            v1011;
        };
        const v1013 = new Promise(v1012);
        return v1013;
    }
};
exports.execute = execute;
;
const watch = function (opts) {
    const v1014 = opts.verboseLevel;
    const v1015 = !v1014;
    if (v1015) {
        opts.verboseLevel = 0;
    }
    const v1016 = http_1.createServer;
    const v1071 = function (req, res) {
        const v1017 = void 0;
        const v1018 = void 0;
        const v1069 = function () {
            const handle_error = function (error) {
                const v1019 = ' -> '.concat(error);
                const v1020 = log_msg + v1019;
                const v1021 = logger.log('warn', v1020);
                v1021;
                res.statusCode = 500;
                const v1022 = { error: error };
                const v1023 = JSON.stringify(v1022);
                const v1024 = res.end(v1023);
                return v1024;
            };
            var log_msg;
            var _this = this;
            const v1067 = function (_a) {
                const v1025 = req.method;
                const v1026 = ''.concat(v1025, ' ');
                const v1027 = req.headers;
                const v1028 = v1027.host;
                const v1029 = v1026.concat(v1028, ' ');
                const v1030 = req.url;
                log_msg = v1029.concat(v1030);
                try {
                    const v1031 = req.headers;
                    const v1032 = v1031['content-type'];
                    const v1033 = v1032 !== 'application/json';
                    if (v1033) {
                        throw 'Invalid header Content-Type (Expected application/json)';
                    }
                    const v1062 = function (error, result) {
                        const v1034 = void 0;
                        const v1035 = void 0;
                        const v1060 = function () {
                            var data;
                            var ans;
                            var error_1;
                            const v1058 = function (_a) {
                                const v1036 = _a.label;
                                switch (v1036) {
                                case 0:
                                    const v1037 = _a.trys;
                                    const v1038 = [
                                        0,
                                        2,
                                        ,
                                        3
                                    ];
                                    const v1039 = v1037.push(v1038);
                                    v1039;
                                    if (error) {
                                        throw error;
                                    }
                                    const v1040 = {};
                                    const v1041 = __assign(v1040, opts);
                                    const v1042 = function () {
                                        return result;
                                    };
                                    const v1043 = { event: v1042 };
                                    const v1044 = __assign(v1041, v1043);
                                    const v1045 = execute(v1044);
                                    const v1046 = [
                                        4,
                                        v1045
                                    ];
                                    return v1046;
                                case 1:
                                    data = _a.sent();
                                    const v1047 = { data: data };
                                    ans = JSON.stringify(v1047);
                                    const v1048 = ans.length;
                                    const v1049 = v1048 * 2;
                                    const v1050 = ' -> OK ('.concat(v1049, ' bytes)');
                                    const v1051 = log_msg + v1050;
                                    const v1052 = logger.log('info', v1051);
                                    v1052;
                                    const v1053 = res.end(ans);
                                    const v1054 = [
                                        2,
                                        v1053
                                    ];
                                    return v1054;
                                case 2:
                                    error_1 = _a.sent();
                                    const v1055 = handle_error(error_1);
                                    const v1056 = [
                                        2,
                                        v1055
                                    ];
                                    return v1056;
                                case 3:
                                    const v1057 = [2];
                                    return v1057;
                                }
                            };
                            const v1059 = __generator(this, v1058);
                            return v1059;
                        };
                        const v1061 = __awaiter(_this, v1034, v1035, v1060);
                        return v1061;
                    };
                    const v1063 = _getRequestPayload(req, v1062);
                    v1063;
                } catch (error) {
                    const v1064 = handle_error(error);
                    const v1065 = [
                        2,
                        v1064
                    ];
                    return v1065;
                }
                const v1066 = [2];
                return v1066;
            };
            const v1068 = __generator(this, v1067);
            return v1068;
        };
        const v1070 = __awaiter(this, v1017, v1018, v1069);
        return v1070;
    };
    var server = (0, v1016)(v1071);
    const v1072 = opts.port;
    const v1076 = function () {
        const v1073 = opts.port;
        const v1074 = 'Lambda handler listening on http://localhost:'.concat(v1073);
        const v1075 = logger.log('info', v1074);
        v1075;
    };
    const v1077 = server.listen(v1072, v1076);
    v1077;
};
exports.watch = watch;
const _getRequestPayload = function (req, callback) {
    var body = '';
    const v1078 = function (chunk) {
        body += chunk.toString();
    };
    const v1079 = req.on('data', v1078);
    v1079;
    const v1086 = function () {
        var payload;
        try {
            payload = JSON.parse(body);
        } catch (err) {
            const v1080 = callback(err);
            v1080;
            return;
        }
        const v1081 = payload.event;
        const v1082 = !v1081;
        if (v1082) {
            const v1083 = callback('Invalid body (Expected "event" property)');
            v1083;
            return;
        }
        const v1084 = payload.event;
        const v1085 = callback(null, v1084);
        v1085;
    };
    const v1087 = req.on('end', v1086);
    v1087;
};
const updateEnv = function (env) {
    const v1088 = Object.keys(env);
    const v1094 = function (key) {
        const v1089 = process.env;
        const v1090 = v1089[key];
        const v1091 = !v1090;
        if (v1091) {
            const v1092 = process.env;
            const v1093 = env[key];
            v1092[key] = v1093;
        }
    };
    const v1095 = v1088.forEach(v1094);
    v1095;
};
const _executeSync = function (opts) {
    var event = opts.event;
    var lambdaFunc = opts.lambdaFunc;
    var lambdaPath = opts.lambdaPath;
    const v1096 = opts.lambdaHandler;
    var lambdaHandler = v1096 || 'handler';
    var profilePath = opts.profilePath;
    const v1097 = opts.profileName;
    const v1098 = process.env;
    const v1099 = v1098['AWS_PROFILE'];
    const v1100 = v1097 || v1099;
    const v1101 = process.env;
    const v1102 = v1101['AWS_DEFAULT_PROFILE'];
    var profileName = v1100 || v1102;
    var region = opts.region;
    var environment = opts.environment;
    var envdestroy = opts.envdestroy;
    var envfile = opts.envfile;
    const v1103 = opts.callbackWaitsForEmptyEventLoop;
    var callbackWaitsForEmptyEventLoop = v1103 || false;
    const v1104 = opts.timeoutMs;
    var timeoutMs = v1104 || 3000;
    var verboseLevel = opts.verboseLevel;
    var callback = opts.callback;
    var clientContext = null;
    const v1105 = opts.clientContext;
    if (v1105) {
        const v1106 = opts.clientContext;
        const v1107 = typeof v1106;
        const v1108 = v1107 === 'string';
        if (v1108) {
            try {
                const v1109 = opts.clientContext;
                clientContext = JSON.parse(v1109);
            } catch (err) {
                const v1110 = new SyntaxError('clientContext is an invalid stringified JS object');
                throw v1110;
            }
        } else {
            clientContext = opts.clientContext;
        }
    }
    const v1111 = lambdaFunc && lambdaPath;
    if (v1111) {
        const v1112 = new SyntaxError('Cannot specify both lambdaFunc and lambdaPath !');
        throw v1112;
        return;
    }
    const v1113 = utils.get_node_major_version();
    const v1114 = v1113 < 16;
    const v1115 = callbackWaitsForEmptyEventLoop && v1114;
    if (v1115) {
        const v1116 = console.warn('callbackWaitsForEmptyEventLoop not supported on node < 16');
        v1116;
        callbackWaitsForEmptyEventLoop = false;
    }
    if (lambdaPath) {
        lambdaPath = utils.getAbsolutePath(lambdaPath);
    }
    const v1117 = os.freemem();
    const v1118 = v1117 / 1048576;
    const v1119 = Math.floor(v1118);
    const v1120 = v1119.toString();
    const v1121 = process.version;
    const v1122 = v1121.substr(1);
    const v1123 = 'AWS_Lambda_nodejs' + v1122;
    const v1124 = process.cwd();
    const v1125 = utils.getAbsolutePath('node_modules');
    const v1126 = Intl.DateTimeFormat();
    const v1127 = v1126.resolvedOptions();
    const v1128 = v1127.timeZone;
    var envVars = {};
    envVars['AWS_LAMBDA_FUNCTION_NAME'] = lambdaHandler;
    envVars['AWS_LAMBDA_FUNCTION_MEMORY_SIZE'] = v1120;
    envVars['AWS_LAMBDA_FUNCTION_VERSION'] = '1.0';
    envVars['AWS_EXECUTION_ENV'] = v1123;
    envVars['LAMBDA_CONSOLE_SOCKET'] = '14';
    envVars['LAMBDA_CONTROL_SOCKET'] = '11';
    envVars['LAMBDA_RUNTIME_DIR'] = v1124;
    envVars['NODE_PATH'] = v1125;
    envVars['TZ'] = v1128;
    if (lambdaPath) {
        const v1129 = path.dirname(lambdaPath);
        envVars['LAMBDA_TASK_ROOT'] = v1129;
        const v1130 = path.extname(lambdaPath);
        const v1131 = path.basename(lambdaPath, v1130);
        const v1132 = v1131 + '.';
        envVars['_HANDLER'] = v1132 + lambdaHandler;
    } else {
        const v1133 = process.cwd();
        envVars['LAMBDA_TASK_ROOT'] = v1133;
        envVars['_HANDLER'] = 'index.' + lambdaHandler;
    }
    const v1134 = updateEnv(envVars);
    v1134;
    const v1135 = environment != null;
    if (v1135) {
        const v1136 = envdestroy == null;
        if (v1136) {
            envdestroy = false;
        }
        const v1137 = Object.keys(environment);
        const v1140 = function (key) {
            const v1138 = process.env;
            const v1139 = environment[key];
            v1138[key] = v1139;
        };
        const v1141 = v1137.forEach(v1140);
        v1141;
    }
    const v1142 = envfile != null;
    if (v1142) {
        const v1143 = { path: envfile };
        const v1144 = dotenv.config(v1143);
        v1144;
    }
    const v1145 = process.env;
    const v1146 = v1145['AWS_SHARED_CREDENTIALS_FILE'];
    profilePath = profilePath || v1146;
    var default_config_file = utils.getAbsolutePath('~/.aws/config');
    var default_credentials_file = utils.getAbsolutePath('~/.aws/credentials');
    const v1147 = fs.existsSync(default_config_file);
    if (v1147) {
        const v1148 = utils.loadAWSCredentials(default_config_file, profileName);
        v1148;
    }
    const v1149 = fs.existsSync(default_credentials_file);
    if (v1149) {
        const v1150 = utils.loadAWSCredentials(default_credentials_file, profileName);
        v1150;
    }
    if (profilePath) {
        const v1151 = utils.loadAWSCredentials(profilePath, profileName);
        v1151;
    }
    const v1152 = process.env;
    const v1153 = process.env;
    const v1154 = v1153['AWS_REGION'];
    const v1155 = region || v1154;
    v1152['AWS_REGION'] = v1155 || 'us-east-1';
    const v1156 = process.env;
    const v1157 = process.env;
    const v1158 = v1157['AWS_DEFAULT_REGION'];
    const v1159 = region || v1158;
    v1156['AWS_DEFAULT_REGION'] = v1159 || 'us-east-1';
    const v1160 = typeof verboseLevel;
    const v1161 = v1160 == 'undefined';
    if (v1161) {
        verboseLevel = 3;
    }
    var context = new Context();
    const v1170 = function () {
        const v1162 = environment != null;
        const v1163 = v1162 && envdestroy;
        if (v1163) {
            const v1164 = Object.keys(environment);
            const v1168 = function (key) {
                const v1165 = process.env;
                const v1166 = v1165[key];
                const v1167 = delete v1166;
                v1167;
            };
            const v1169 = v1164.forEach(v1168);
            v1169;
        }
    };
    const v1171 = {
        functionName: lambdaHandler,
        timeoutMs: timeoutMs,
        callbackWaitsForEmptyEventLoop: callbackWaitsForEmptyEventLoop,
        verboseLevel: verboseLevel,
        logger: logger,
        finalCallback: v1170,
        clientContext: clientContext
    };
    const v1172 = context._initialize(v1171);
    v1172;
    if (callback) {
        context.callback = callback;
    }
    var ctx = context.generate_context();
    try {
        const v1173 = !lambdaFunc;
        if (v1173) {
            const v1174 = require.cache;
            const v1175 = require.resolve(lambdaPath);
            const v1176 = v1174[v1175];
            const v1177 = delete v1176;
            v1177;
            lambdaFunc = require(lambdaPath);
        }
        const v1178 = event instanceof Function;
        if (v1178) {
            event = event();
        }
        const v1179 = context._init_timeout();
        v1179;
        const v1180 = ctx.done;
        var result = lambdaFunc[lambdaHandler](event, ctx, v1180);
        if (result) {
            const v1181 = result.then;
            if (v1181) {
                const v1182 = ctx.succeed;
                const v1183 = ctx.fail;
                const v1184 = result.then(v1182, v1183);
                v1184;
            } else {
                const v1185 = ctx.succeed(null);
                v1185;
            }
        }
    } catch (err) {
        const v1186 = ctx.fail(err);
        v1186;
    }
};
;
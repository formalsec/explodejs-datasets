'use strict';
const v1 = this.__extends;
const v2 = this && v1;
const v31 = function () {
    var extendStatics = function (d, b) {
        const v3 = Object.setPrototypeOf;
        const v4 = [];
        const v5 = { __proto__: v4 };
        const v6 = v5 instanceof Array;
        const v7 = function (d, b) {
            d.__proto__ = b;
        };
        const v8 = v6 && v7;
        const v9 = v3 || v8;
        const v14 = function (d, b) {
            let p;
            for (p in b) {
                const v10 = Object.prototype;
                const v11 = v10.hasOwnProperty;
                const v12 = v11.call(b, p);
                if (v12) {
                    const v13 = b[p];
                    d[p] = v13;
                }
            }
        };
        extendStatics = v9 || v14;
        const v15 = extendStatics(d, b);
        return v15;
    };
    const v30 = function (d, b) {
        const v16 = typeof b;
        const v17 = v16 !== 'function';
        const v18 = b !== null;
        const v19 = v17 && v18;
        if (v19) {
            const v20 = String(b);
            const v21 = 'Class extends value ' + v20;
            const v22 = v21 + ' is not a constructor or null';
            const v23 = new TypeError(v22);
            throw v23;
        }
        const v24 = extendStatics(d, b);
        v24;
        const __ = function () {
            this.constructor = d;
        };
        const v25 = b === null;
        const v26 = Object.create(b);
        const v27 = b.prototype;
        const v28 = new __();
        let v29;
        if (v25) {
            v29 = v26;
        } else {
            v29 = (__.prototype = v27, v28);
        }
        d.prototype = v29;
    };
    return v30;
};
const v32 = v31();
var __extends = v2 || v32;
const v33 = { value: true };
const v34 = Object.defineProperty(exports, '__esModule', v33);
v34;
const v35 = void 0;
exports.get_node_major_version = v35;
exports.generateRandomHex = exports.get_node_major_version;
exports.getWinstonConsole = exports.generateRandomHex;
exports.getAbsolutePath = exports.getWinstonConsole;
exports.processJSON = exports.getAbsolutePath;
exports.TimeoutError = exports.processJSON;
exports.loadAWSCredentials = exports.TimeoutError;
exports.waitForNodeJS = exports.loadAWSCredentials;
var fs = require('fs');
var path_lib = require('path');
var join = path_lib.join;
var util = require('util');
const get_node_major_version = function () {
    const v36 = process.version;
    const v37 = v36.slice(1);
    const v38 = v37.split('.');
    const v39 = v38[0];
    const v40 = parseInt(v39);
    return v40;
};
exports.get_node_major_version = get_node_major_version;
var _hexChars = '0123456789abcdef'.split('');
const generateRandomHex = function (length) {
    var hexVal = '';
    var i = 0;
    let v41 = i < length;
    while (v41) {
        const v43 = Math.random();
        const v44 = _hexChars.length;
        const v45 = v43 * v44;
        const v46 = Math.floor(v45);
        hexVal += _hexChars[v46];
        const v42 = i++;
        v41 = i < length;
    }
    return hexVal;
};
exports.generateRandomHex = generateRandomHex;
;
const getWinstonConsole = function () {
    var winston = require('winston');
    var _a = winston.format;
    var combine = _a.combine;
    var colorize = _a.colorize;
    var simple = _a.simple;
    var _simple = simple();
    const v56 = function (info) {
        const v47 = {};
        const v48 = {
            level: undefined,
            message: undefined,
            splat: undefined
        };
        const v49 = Object.assign(v47, info, v48);
        var stringifiedRest = processJSON(v49);
        const v50 = info.level;
        const v51 = info.message;
        var new_info = {};
        new_info.level = v50;
        new_info.message = v51;
        const v52 = new_info.message;
        const v53 = v52 == undefined;
        if (v53) {
            new_info.message = '';
        }
        const v54 = stringifiedRest !== '{}';
        if (v54) {
            new_info.message += stringifiedRest;
        }
        const v55 = _simple.transform(new_info);
        return v55;
    };
    var myFormat = winston.format(v56);
    const v57 = winston.transports;
    const v58 = colorize();
    const v59 = myFormat();
    const v60 = combine(v58, v59);
    const v61 = { format: v60 };
    const v62 = new v57.Console(v61);
    const v63 = [v62];
    const v64 = {
        level: 'info',
        transports: v63
    };
    var logger = winston.createLogger(v64);
    return logger;
};
exports.getWinstonConsole = getWinstonConsole;
const getAbsolutePath = function (path) {
    const v65 = process.env;
    const v66 = v65.HOME;
    const v67 = process.env;
    const v68 = v67.USERPROFILE;
    var homeDir = v66 || v68;
    var windowsRegex = /([A-Z|a-z]:\\[^*|"<>?\n]*)|(\\\\.*?\\.*)/;
    const v69 = path.match(/^\//);
    const v70 = path.match(windowsRegex);
    const v71 = v69 || v70;
    if (v71) {
        return path;
    } else {
        const v72 = path === '~';
        if (v72) {
            return homeDir;
        } else {
            const v73 = path.slice(0, 2);
            const v74 = v73 === '~/';
            if (v74) {
                const v75 = path.slice(2);
                const v76 = join(homeDir, v75);
                return v76;
            } else {
                const v77 = path.slice(0, 2);
                const v78 = v77 === './';
                if (v78) {
                    const v79 = process.cwd();
                    const v80 = path.slice(2);
                    const v81 = join(v79, v80);
                    return v81;
                } else {
                    const v82 = process.cwd();
                    const v83 = join(v82, path);
                    return v83;
                }
            }
        }
    }
    return null;
};
exports.getAbsolutePath = getAbsolutePath;
;
const processJSON = function (json) {
    const v84 = typeof json;
    const v85 = v84 === 'object';
    if (v85) {
        try {
            const v86 = JSON.stringify(json, null, '\t');
            return v86;
        } catch (e) {
            const v87 = util.inspect(json);
            return v87;
        }
    } else {
        return json;
    }
};
exports.processJSON = processJSON;
;
const v90 = function (_super) {
    const v88 = __extends(TimeoutError, _super);
    v88;
    const TimeoutError = function (m) {
        const v89 = _super.call(this, m);
        var _this = v89 || this;
        _this.name = 'TimeoutError';
        return _this;
    };
    return TimeoutError;
};
var TimeoutError = v90(Error);
exports.TimeoutError = TimeoutError;
var _load_var_from_file = function (varname, envname, data, profileName) {
    const v91 = process.env;
    const v92 = v91[envname];
    if (v92) {
        return;
    }
    const v93 = '\\[' + profileName;
    const v94 = v93 + '\\](.|\\n|\\r\\n)*?';
    const v95 = v94 + varname;
    const v96 = v95 + '( ?)+=( ?)+(.*)';
    var regex = new RegExp(v96);
    var match;
    const v97 = (match = regex.exec(data)) !== null;
    if (v97) {
        const v98 = process.env;
        const v99 = match[4];
        v98[envname] = v99;
    }
};
const loadAWSCredentials = function (path, profileName) {
    const v100 = void 0;
    const v101 = profileName === v100;
    if (v101) {
        profileName = 'default';
    }
    const v102 = getAbsolutePath(path);
    var dataRaw = fs.readFileSync(v102);
    var data = dataRaw.toString();
    const v103 = _load_var_from_file('aws_secret_access_key', 'AWS_SECRET_ACCESS_KEY', data, profileName);
    v103;
    const v104 = _load_var_from_file('aws_access_key_id', 'AWS_ACCESS_KEY_ID', data, profileName);
    v104;
    const v105 = _load_var_from_file('aws_session_token', 'AWS_SESSION_TOKEN', data, profileName);
    v105;
    const v106 = _load_var_from_file('metadata_service_timeout', 'AWS_METADATA_SERVICE_TIMEOUT', data, profileName);
    v106;
    const v107 = _load_var_from_file('metadata_service_num_attempts', 'AWS_METADATA_SERVICE_NUM_ATTEMPTS', data, profileName);
    v107;
    const v108 = _load_var_from_file('region', 'AWS_REGION', data, profileName);
    v108;
};
exports.loadAWSCredentials = loadAWSCredentials;
;
const waitForNodeJS = function (cb, i) {
    const v109 = void 0;
    const v110 = i === v109;
    if (v110) {
        i = 0;
    }
    const v111 = process.getActiveResourcesInfo();
    const v113 = function (x) {
        const v112 = x === 'Timeout';
        return v112;
    };
    const v114 = v111.filter(v113);
    const v115 = v114.length;
    const v116 = v115 > i;
    if (v116) {
        const v118 = function () {
            i = 1;
            const v117 = waitForNodeJS(cb, i);
            v117;
        };
        const v119 = setTimeout(v118, 100);
        v119;
    } else {
        const v120 = cb();
        v120;
    }
};
exports.waitForNodeJS = waitForNodeJS;
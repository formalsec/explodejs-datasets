var util = require('util');
const v97 = Object.prototype;
var toString = v97.toString;
const v98 = process.platform;
var isWindows = v98 === 'win32';
const isObject = function (value) {
    const v99 = toString.call(value);
    const v100 = v99 === '[object Object]';
    return v100;
};
const v101 = [
    'Function',
    'String',
    'Number',
    'Date',
    'RegExp'
];
const v108 = function (item) {
    const v102 = 'is' + item;
    const v107 = function (value) {
        const v103 = toString.call(value);
        const v104 = '[object ' + item;
        const v105 = v104 + ']';
        const v106 = v103 === v105;
        return v106;
    };
    exports[v102] = v107;
};
const v109 = v101.forEach(v108);
v109;
const extend = function (target, source) {
    var value;
    let key;
    for (key in source) {
        value = source[key];
        const v110 = Array.isArray(value);
        if (v110) {
            const v111 = target[key];
            const v112 = Array.isArray(v111);
            const v113 = !v112;
            if (v113) {
                target[key] = [];
            }
            const v114 = target[key];
            const v115 = extend(v114, value);
            v115;
        } else {
            const v116 = isObject(value);
            if (v116) {
                const v117 = target[key];
                const v118 = isObject(v117);
                const v119 = !v118;
                if (v119) {
                    const v120 = {};
                    target[key] = v120;
                }
                const v121 = target[key];
                const v122 = extend(v121, value);
                v122;
            } else {
                target[key] = value;
            }
        }
    }
    return target;
};
const v123 = extend(exports, util);
v123;
exports.isObject = isObject;
const v129 = function () {
    const v124 = Array.prototype;
    const v125 = v124.slice;
    var args = v125.call(arguments, 0);
    var target = args.shift();
    const v127 = function (item) {
        const v126 = extend(target, item);
        v126;
    };
    const v128 = args.forEach(v127);
    v128;
    return target;
};
exports.extend = v129;
const v130 = Array.isArray;
exports.isArray = v130;
const v133 = function (value) {
    const v131 = typeof value;
    const v132 = v131 == 'undefined';
    return v132;
};
exports.isUndefined = v133;
const v134 = function () {
};
exports.noop = v134;
const v141 = function (array) {
    var result = [];
    const v139 = function (item) {
        const v135 = result.indexOf(item);
        const v136 = -1;
        const v137 = v135 == v136;
        if (v137) {
            const v138 = result.push(item);
            v138;
        }
    };
    const v140 = array.forEach(v139);
    v140;
    return result;
};
exports.unique = v141;
const v148 = function (value) {
    const v142 = String(value);
    const v143 = v142.replace(/&/g, '&amp;');
    const v144 = v143.replace(/"/g, '&quot;');
    const v145 = v144.replace(/'/g, '&#39;');
    const v146 = v145.replace(/</g, '&lt;');
    const v147 = v146.replace(/>/g, '&gt;');
    return v147;
};
exports.escape = v148;
const v155 = function (value) {
    const v149 = String(value);
    const v150 = v149.replace(/&amp;/g, '&');
    const v151 = v150.replace(/&quot;/g, '"');
    const v152 = v151.replace(/&#39;/g, '\'');
    const v153 = v152.replace(/&lt;/g, '<');
    const v154 = v153.replace(/&gt;/g, '>');
    return v154;
};
exports.unescape = v155;
const v162 = function (time) {
    if (time) {
        var spend = process.hrtime(time);
        const v156 = spend[0];
        const v157 = spend[1];
        const v158 = v157 / 1000000000;
        const v159 = v156 + v158;
        const v160 = v159 * 1000;
        spend = v160 + 'ms';
        return spend;
    } else {
        const v161 = process.hrtime();
        return v161;
    }
};
exports.hrtime = v162;
const v171 = function (obj, iteratee) {
    var result = {};
    const v163 = exports.isFunction(iteratee);
    if (v163) {
        let key;
        for (key in obj) {
            var value = obj[key];
            const v164 = iteratee(value, key, obj);
            if (v164) {
                result[key] = value;
            }
        }
    } else {
        const v165 = Array.prototype;
        const v166 = v165.slice;
        var keys = v166.call(arguments, 1);
        const v169 = function (key) {
            const v167 = key in obj;
            if (v167) {
                const v168 = obj[key];
                result[key] = v168;
            }
        };
        const v170 = keys.forEach(v169);
        v170;
    }
    return result;
};
exports.pick = v171;
const v172 = {};
exports.path = v172;
if (isWindows) {
    var splitDeviceRe = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/;
    const v173 = exports.path;
    const v183 = function (filepath) {
        var result = splitDeviceRe.exec(filepath);
        const v174 = result[1];
        var device = v174 || '';
        const v175 = !device;
        const v176 = !v175;
        const v177 = device.charAt(1);
        const v178 = v177 !== ':';
        var isUnc = v176 && v178;
        const v179 = result[2];
        const v180 = !v179;
        const v181 = !v180;
        const v182 = v181 || isUnc;
        return v182;
    };
    v173.isAbsolute = v183;
    const v184 = exports.path;
    const v186 = function (filepath) {
        const v185 = filepath.replace(/\\/g, '/');
        return v185;
    };
    v184.unixifyPath = v186;
} else {
    const v187 = exports.path;
    const v190 = function (filepath) {
        const v188 = filepath.charAt(0);
        const v189 = v188 === '/';
        return v189;
    };
    v187.isAbsolute = v190;
    const v191 = exports.path;
    const v192 = function (filepath) {
        return filepath;
    };
    v191.unixifyPath = v192;
}
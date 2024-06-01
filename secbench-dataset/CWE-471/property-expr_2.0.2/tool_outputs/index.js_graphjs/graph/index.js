'use strict';
const Cache = function (maxSize) {
    this._maxSize = maxSize;
    const v96 = this.clear();
    v96;
};
const v97 = Cache.prototype;
const v99 = function () {
    this._size = 0;
    const v98 = Object.create(null);
    this._values = v98;
};
v97.clear = v99;
const v100 = Cache.prototype;
const v103 = function (key) {
    const v101 = this._values;
    const v102 = v101[key];
    return v102;
};
v100.get = v103;
const v104 = Cache.prototype;
const v116 = function (key, value) {
    const v105 = this._size;
    const v106 = this._maxSize;
    const v107 = v105 >= v106;
    const v108 = this.clear();
    const v109 = v107 && v108;
    v109;
    const v110 = this._values;
    const v111 = key in v110;
    const v112 = !v111;
    if (v112) {
        const v113 = this._size;
        const v114 = v113++;
        v114;
    }
    const v115 = this._values;
    return v115[key] = value;
};
v104.set = v116;
var SPLIT_REGEX = /[^.^\]^[]+|(?=\[\]|\.\.)/g;
var DIGIT_REGEX = /^\d+$/;
var LEAD_DIGIT_REGEX = /^\d/;
var SPEC_CHAR_REGEX = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g;
var CLEAN_QUOTES_REGEX = /^\s*(['"]?)(.*?)(\1)\s*$/;
var MAX_CACHE_SIZE = 512;
var pathCache = new Cache(MAX_CACHE_SIZE);
var setCache = new Cache(MAX_CACHE_SIZE);
var getCache = new Cache(MAX_CACHE_SIZE);
var config;
const v126 = function (path) {
    var parts = normalizePath(path);
    const v117 = setCache.get(path);
    const v123 = function setter(data, value) {
        var index = 0;
        var len = parts.length;
        const v118 = len - 1;
        let v119 = index < v118;
        while (v119) {
            const v120 = index++;
            const v121 = parts[v120];
            data = data[v121];
            v119 = index < v118;
        }
        const v122 = parts[index];
        data[v122] = value;
    };
    const v124 = setCache.set(path, v123);
    const v125 = v117 || v124;
    return v125;
};
const v137 = function (path, safe) {
    var parts = normalizePath(path);
    const v127 = getCache.get(path);
    const v134 = function getter(data) {
        var index = 0;
        var len = parts.length;
        let v128 = index < len;
        while (v128) {
            const v129 = data != null;
            const v130 = !safe;
            const v131 = v129 || v130;
            if (v131) {
                const v132 = index++;
                const v133 = parts[v132];
                data = data[v133];
            } else {
                return;
            }
            v128 = index < len;
        }
        return data;
    };
    const v135 = getCache.set(path, v134);
    const v136 = v127 || v135;
    return v136;
};
const v149 = function (segments) {
    const v147 = function (path, part) {
        const v138 = isQuoted(part);
        const v139 = DIGIT_REGEX.test(part);
        const v140 = v138 || v139;
        const v141 = '[' + part;
        const v142 = v141 + ']';
        let v143;
        if (path) {
            v143 = '.';
        } else {
            v143 = '';
        }
        const v144 = v143 + part;
        let v145;
        if (v140) {
            v145 = v142;
        } else {
            v145 = v144;
        }
        const v146 = path + v145;
        return v146;
    };
    const v148 = segments.reduce(v147, '');
    return v148;
};
const v154 = function (path, cb, thisArg) {
    const v150 = Array.isArray(path);
    const v151 = split(path);
    let v152;
    if (v150) {
        v152 = path;
    } else {
        v152 = v151;
    }
    const v153 = forEach(v152, cb, thisArg);
    v153;
};
const v155 = {};
v155.Cache = Cache;
v155.split = split;
v155.normalizePath = normalizePath;
v155.setter = v126;
v155.getter = v137;
v155.join = v149;
v155.forEach = v154;
module.exports = v155;
const normalizePath = function (path) {
    const v156 = pathCache.get(path);
    const v157 = split(path);
    const v159 = function (part) {
        const v158 = part.replace(CLEAN_QUOTES_REGEX, '$2');
        return v158;
    };
    const v160 = v157.map(v159);
    const v161 = pathCache.set(path, v160);
    const v162 = v156 || v161;
    return v162;
};
const split = function (path) {
    const v163 = path.match(SPLIT_REGEX);
    return v163;
};
const forEach = function (parts, iter, thisArg) {
    var len = parts.length;
    var part;
    var idx;
    var isArray;
    var isBracket;
    (idx = 0)
    let v164 = idx < len;
    while (v164) {
        part = parts[idx];
        if (part) {
            const v166 = shouldBeQuoted(part);
            if (v166) {
                const v167 = '"' + part;
                part = v167 + '"';
            }
            isBracket = isQuoted(part);
            const v168 = !isBracket;
            const v169 = /^\d+$/.test(part);
            isArray = v168 && v169;
            const v170 = iter.call(thisArg, part, isBracket, isArray, idx, parts);
            v170;
        }
        const v165 = idx++;
        v164 = idx < len;
    }
};
const isQuoted = function (str) {
    const v171 = typeof str;
    const v172 = v171 === 'string';
    const v173 = v172 && str;
    const v174 = [
        '\'',
        '"'
    ];
    const v175 = str.charAt(0);
    const v176 = v174.indexOf(v175);
    const v177 = -1;
    const v178 = v176 !== v177;
    const v179 = v173 && v178;
    return v179;
};
const hasLeadingNumber = function (part) {
    const v180 = part.match(LEAD_DIGIT_REGEX);
    const v181 = part.match(DIGIT_REGEX);
    const v182 = !v181;
    const v183 = v180 && v182;
    return v183;
};
const hasSpecialChars = function (part) {
    const v184 = SPEC_CHAR_REGEX.test(part);
    return v184;
};
const shouldBeQuoted = function (part) {
    const v185 = isQuoted(part);
    const v186 = !v185;
    const v187 = hasLeadingNumber(part);
    const v188 = hasSpecialChars(part);
    const v189 = v187 || v188;
    const v190 = v186 && v189;
    return v190;
};
'use strict';
var each = require('foreach');
module.exports = api;
const api = function (obj, pointer, value) {
    const v104 = arguments.length;
    const v105 = v104 === 3;
    if (v105) {
        const v106 = api.set(obj, pointer, value);
        return v106;
    }
    const v107 = arguments.length;
    const v108 = v107 === 2;
    if (v108) {
        const v109 = api.get(obj, pointer);
        return v109;
    }
    var wrapped = api.bind(api, obj);
    let name;
    for (name in api) {
        const v110 = api.hasOwnProperty(name);
        if (v110) {
            const v111 = api[name];
            const v112 = v111.bind(wrapped, obj);
            wrapped[name] = v112;
        }
    }
    return wrapped;
};
const get = function (obj, pointer) {
    let refTokens;
    const v113 = Array.isArray(pointer);
    const v114 = api.parse(pointer);
    if (v113) {
        refTokens = pointer;
    } else {
        refTokens = v114;
    }
    var i = 0;
    const v115 = refTokens.length;
    let v116 = i < v115;
    while (v116) {
        var tok = refTokens[i];
        const v118 = typeof obj;
        const v119 = v118 == 'object';
        const v120 = tok in obj;
        const v121 = v119 && v120;
        const v122 = !v121;
        if (v122) {
            const v123 = 'Invalid reference token: ' + tok;
            const v124 = new Error(v123);
            throw v124;
        }
        obj = obj[tok];
        const v117 = ++i;
        v116 = i < v115;
    }
    return obj;
};
api.get = get;
const set = function (obj, pointer, value) {
    let refTokens;
    const v125 = Array.isArray(pointer);
    const v126 = api.parse(pointer);
    if (v125) {
        refTokens = pointer;
    } else {
        refTokens = v126;
    }
    var nextTok = refTokens[0];
    var i = 0;
    const v127 = refTokens.length;
    const v128 = v127 - 1;
    let v129 = i < v128;
    while (v129) {
        var tok = refTokens[i];
        const v131 = tok === '-';
        const v132 = Array.isArray(obj);
        const v133 = v131 && v132;
        if (v133) {
            tok = obj.length;
        }
        const v134 = i + 1;
        nextTok = refTokens[v134];
        const v135 = tok in obj;
        const v136 = !v135;
        if (v136) {
            const v137 = nextTok.match(/^(\d+|-)$/);
            if (v137) {
                obj[tok] = [];
            } else {
                const v138 = {};
                obj[tok] = v138;
            }
        }
        obj = obj[tok];
        const v130 = ++i;
        v129 = i < v128;
    }
    const v139 = nextTok === '-';
    const v140 = Array.isArray(obj);
    const v141 = v139 && v140;
    if (v141) {
        nextTok = obj.length;
    }
    obj[nextTok] = value;
    return this;
};
api.set = set;
const v165 = function (obj, pointer) {
    let refTokens;
    const v142 = Array.isArray(pointer);
    const v143 = api.parse(pointer);
    if (v142) {
        refTokens = pointer;
    } else {
        refTokens = v143;
    }
    const v144 = refTokens.length;
    const v145 = v144 - 1;
    var finalToken = refTokens[v145];
    const v146 = finalToken === undefined;
    if (v146) {
        const v147 = 'Invalid JSON pointer for remove: "' + pointer;
        const v148 = v147 + '"';
        const v149 = new Error(v148);
        throw v149;
    }
    const v150 = -1;
    const v151 = refTokens.slice(0, v150);
    var parent = api.get(obj, v151);
    const v152 = Array.isArray(parent);
    if (v152) {
        const v153 = +finalToken;
        var index = v153;
        const v154 = finalToken === '';
        const v155 = isNaN(index);
        const v156 = v154 && v155;
        if (v156) {
            const v157 = 'Invalid array index: "' + finalToken;
            const v158 = v157 + '"';
            const v159 = new Error(v158);
            throw v159;
        }
        const v160 = Array.prototype;
        const v161 = v160.splice;
        const v162 = v161.call(parent, index, 1);
        v162;
    } else {
        const v163 = parent[finalToken];
        const v164 = delete v163;
        v164;
    }
};
api.remove = v165;
const dict = function (obj, descend) {
    var results = {};
    const v166 = function (value, pointer) {
        results[pointer] = value;
    };
    const v167 = api.walk(obj, v166, descend);
    v167;
    return results;
};
api.dict = dict;
const walk = function (obj, iterator, descend) {
    var refTokens = [];
    const v173 = function (value) {
        const v168 = Object.prototype;
        const v169 = v168.toString;
        var type = v169.call(value);
        const v170 = type === '[object Object]';
        const v171 = type === '[object Array]';
        const v172 = v170 || v171;
        return v172;
    };
    descend = descend || v173;
    const v183 = function next(cur) {
        const v181 = function (value, key) {
            const v174 = String(key);
            const v175 = refTokens.push(v174);
            v175;
            const v176 = descend(value);
            if (v176) {
                const v177 = next(value);
                v177;
            } else {
                const v178 = api.compile(refTokens);
                const v179 = iterator(value, v178);
                v179;
            }
            const v180 = refTokens.pop();
            v180;
        };
        const v182 = each(cur, v181);
        v182;
    };
    const v184 = v183(obj);
    v184;
};
api.walk = walk;
const has = function (obj, pointer) {
    try {
        const v185 = api.get(obj, pointer);
        v185;
    } catch (e) {
        return false;
    }
    return true;
};
api.has = has;
const escape = function (str) {
    const v186 = str.toString();
    const v187 = v186.replace(/~/g, '~0');
    const v188 = v187.replace(/\//g, '~1');
    return v188;
};
api.escape = escape;
const unescape = function (str) {
    const v189 = str.replace(/~1/g, '/');
    const v190 = v189.replace(/~0/g, '~');
    return v190;
};
api.unescape = unescape;
const parse = function (pointer) {
    const v191 = pointer === '';
    if (v191) {
        const v192 = [];
        return v192;
    }
    const v193 = pointer.charAt(0);
    const v194 = v193 !== '/';
    if (v194) {
        const v195 = 'Invalid JSON pointer: ' + pointer;
        const v196 = new Error(v195);
        throw v196;
    }
    const v197 = pointer.substring(1);
    const v198 = v197.split(/\//);
    const v199 = api.unescape;
    const v200 = v198.map(v199);
    return v200;
};
api.parse = parse;
const compile = function (refTokens) {
    const v201 = refTokens.length;
    const v202 = v201 === 0;
    if (v202) {
        return '';
    }
    const v203 = api.escape;
    const v204 = refTokens.map(v203);
    const v205 = v204.join('/');
    const v206 = '/' + v205;
    return v206;
};
api.compile = compile;
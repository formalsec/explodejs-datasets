'use strict';
var each = require('foreach');
module.exports = api;
const api = function (obj, pointer, value) {
    const v112 = arguments.length;
    const v113 = v112 === 3;
    if (v113) {
        const v114 = api.set(obj, pointer, value);
        return v114;
    }
    const v115 = arguments.length;
    const v116 = v115 === 2;
    if (v116) {
        const v117 = api.get(obj, pointer);
        return v117;
    }
    var wrapped = api.bind(api, obj);
    let name;
    for (name in api) {
        const v118 = api.hasOwnProperty(name);
        if (v118) {
            const v119 = api[name];
            const v120 = v119.bind(wrapped, obj);
            wrapped[name] = v120;
        }
    }
    return wrapped;
};
const get = function (obj, pointer) {
    let refTokens;
    const v121 = Array.isArray(pointer);
    const v122 = api.parse(pointer);
    if (v121) {
        refTokens = pointer;
    } else {
        refTokens = v122;
    }
    var i = 0;
    const v123 = refTokens.length;
    let v124 = i < v123;
    while (v124) {
        var tok = refTokens[i];
        const v126 = typeof obj;
        const v127 = v126 == 'object';
        const v128 = tok in obj;
        const v129 = v127 && v128;
        const v130 = !v129;
        if (v130) {
            const v131 = 'Invalid reference token: ' + tok;
            const v132 = new Error(v131);
            throw v132;
        }
        obj = obj[tok];
        const v125 = ++i;
        v124 = i < v123;
    }
    return obj;
};
api.get = get;
const set = function (obj, pointer, value) {
    let refTokens;
    const v133 = Array.isArray(pointer);
    const v134 = api.parse(pointer);
    if (v133) {
        refTokens = pointer;
    } else {
        refTokens = v134;
    }
    var nextTok = refTokens[0];
    const v135 = refTokens.length;
    const v136 = v135 === 0;
    if (v136) {
        const v137 = Error('Can not set the root object');
        throw v137;
    }
    var i = 0;
    const v138 = refTokens.length;
    const v139 = v138 - 1;
    let v140 = i < v139;
    while (v140) {
        var tok = refTokens[i];
        const v142 = tok === '__proto__';
        const v143 = tok === 'constructor';
        const v144 = v142 || v143;
        const v145 = tok === 'prototype';
        const v146 = v144 || v145;
        if (v146) {
            continue;
        }
        const v147 = tok === '-';
        const v148 = Array.isArray(obj);
        const v149 = v147 && v148;
        if (v149) {
            tok = obj.length;
        }
        const v150 = i + 1;
        nextTok = refTokens[v150];
        const v151 = tok in obj;
        const v152 = !v151;
        if (v152) {
            const v153 = nextTok.match(/^(\d+|-)$/);
            if (v153) {
                obj[tok] = [];
            } else {
                const v154 = {};
                obj[tok] = v154;
            }
        }
        obj = obj[tok];
        const v141 = ++i;
        v140 = i < v139;
    }
    const v155 = nextTok === '-';
    const v156 = Array.isArray(obj);
    const v157 = v155 && v156;
    if (v157) {
        nextTok = obj.length;
    }
    obj[nextTok] = value;
    return this;
};
api.set = set;
const v181 = function (obj, pointer) {
    let refTokens;
    const v158 = Array.isArray(pointer);
    const v159 = api.parse(pointer);
    if (v158) {
        refTokens = pointer;
    } else {
        refTokens = v159;
    }
    const v160 = refTokens.length;
    const v161 = v160 - 1;
    var finalToken = refTokens[v161];
    const v162 = finalToken === undefined;
    if (v162) {
        const v163 = 'Invalid JSON pointer for remove: "' + pointer;
        const v164 = v163 + '"';
        const v165 = new Error(v164);
        throw v165;
    }
    const v166 = -1;
    const v167 = refTokens.slice(0, v166);
    var parent = api.get(obj, v167);
    const v168 = Array.isArray(parent);
    if (v168) {
        const v169 = +finalToken;
        var index = v169;
        const v170 = finalToken === '';
        const v171 = isNaN(index);
        const v172 = v170 && v171;
        if (v172) {
            const v173 = 'Invalid array index: "' + finalToken;
            const v174 = v173 + '"';
            const v175 = new Error(v174);
            throw v175;
        }
        const v176 = Array.prototype;
        const v177 = v176.splice;
        const v178 = v177.call(parent, index, 1);
        v178;
    } else {
        const v179 = parent[finalToken];
        const v180 = delete v179;
        v180;
    }
};
api.remove = v181;
const dict = function (obj, descend) {
    var results = {};
    const v182 = function (value, pointer) {
        results[pointer] = value;
    };
    const v183 = api.walk(obj, v182, descend);
    v183;
    return results;
};
api.dict = dict;
const walk = function (obj, iterator, descend) {
    var refTokens = [];
    const v189 = function (value) {
        const v184 = Object.prototype;
        const v185 = v184.toString;
        var type = v185.call(value);
        const v186 = type === '[object Object]';
        const v187 = type === '[object Array]';
        const v188 = v186 || v187;
        return v188;
    };
    descend = descend || v189;
    const v199 = function next(cur) {
        const v197 = function (value, key) {
            const v190 = String(key);
            const v191 = refTokens.push(v190);
            v191;
            const v192 = descend(value);
            if (v192) {
                const v193 = next(value);
                v193;
            } else {
                const v194 = api.compile(refTokens);
                const v195 = iterator(value, v194);
                v195;
            }
            const v196 = refTokens.pop();
            v196;
        };
        const v198 = each(cur, v197);
        v198;
    };
    const v200 = v199(obj);
    v200;
};
api.walk = walk;
const has = function (obj, pointer) {
    try {
        const v201 = api.get(obj, pointer);
        v201;
    } catch (e) {
        return false;
    }
    return true;
};
api.has = has;
const escape = function (str) {
    const v202 = str.toString();
    const v203 = v202.replace(/~/g, '~0');
    const v204 = v203.replace(/\//g, '~1');
    return v204;
};
api.escape = escape;
const unescape = function (str) {
    const v205 = str.replace(/~1/g, '/');
    const v206 = v205.replace(/~0/g, '~');
    return v206;
};
api.unescape = unescape;
const parse = function (pointer) {
    const v207 = pointer === '';
    if (v207) {
        const v208 = [];
        return v208;
    }
    const v209 = pointer.charAt(0);
    const v210 = v209 !== '/';
    if (v210) {
        const v211 = 'Invalid JSON pointer: ' + pointer;
        const v212 = new Error(v211);
        throw v212;
    }
    const v213 = pointer.substring(1);
    const v214 = v213.split(/\//);
    const v215 = api.unescape;
    const v216 = v214.map(v215);
    return v216;
};
api.parse = parse;
const compile = function (refTokens) {
    const v217 = refTokens.length;
    const v218 = v217 === 0;
    if (v218) {
        return '';
    }
    const v219 = api.escape;
    const v220 = refTokens.map(v219);
    const v221 = v220.join('/');
    const v222 = '/' + v221;
    return v222;
};
api.compile = compile;
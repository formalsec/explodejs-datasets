'use strict';
const v150 = require('safe-buffer');
var Buffer = v150.Buffer;
var RegExpClone = require('regexp-clone');
const clone = function (obj, options) {
    const v151 = obj === undefined;
    const v152 = obj === null;
    const v153 = v151 || v152;
    if (v153) {
        return obj;
    }
    const v154 = Array.isArray(obj);
    if (v154) {
        const v155 = exports.cloneArray(obj, options);
        return v155;
    }
    const v156 = obj.constructor;
    if (v156) {
        const v157 = obj.constructor;
        const v158 = v157.name;
        const v159 = /ObjectI[dD]$/.test(v158);
        if (v159) {
            const v160 = obj.clone;
            const v161 = typeof v160;
            const v162 = 'function' == v161;
            const v163 = obj.clone();
            const v164 = obj.id;
            const v165 = new obj.constructor(v164);
            let v166;
            if (v162) {
                v166 = v163;
            } else {
                v166 = v165;
            }
            return v166;
        }
        const v167 = obj.constructor;
        const v168 = v167.name;
        const v169 = v168 === 'ReadPreference';
        if (v169) {
            const v170 = obj.mode;
            const v171 = obj.tags;
            const v172 = clone(v171, options);
            const v173 = new obj.constructor(v170, v172);
            return v173;
        }
        const v174 = obj._bsontype;
        const v175 = 'Binary' == v174;
        const v176 = obj.buffer;
        const v177 = v175 && v176;
        const v178 = obj.value;
        const v179 = v177 && v178;
        if (v179) {
            const v180 = obj.clone;
            const v181 = typeof v180;
            const v182 = 'function' == v181;
            const v183 = obj.clone();
            const v184 = obj.value(true);
            const v185 = obj.sub_type;
            const v186 = new obj.constructor(v184, v185);
            let v187;
            if (v182) {
                v187 = v183;
            } else {
                v187 = v186;
            }
            return v187;
        }
        const v188 = obj.constructor;
        const v189 = v188.name;
        const v190 = 'Date' === v189;
        const v191 = obj.constructor;
        const v192 = v191.name;
        const v193 = 'Function' === v192;
        const v194 = v190 || v193;
        if (v194) {
            const v195 = +obj;
            const v196 = new obj.constructor(v195);
            return v196;
        }
        const v197 = obj.constructor;
        const v198 = v197.name;
        const v199 = 'RegExp' === v198;
        if (v199) {
            const v200 = RegExpClone(obj);
            return v200;
        }
        const v201 = obj.constructor;
        const v202 = v201.name;
        const v203 = 'Buffer' === v202;
        if (v203) {
            const v204 = exports.cloneBuffer(obj);
            return v204;
        }
    }
    const v205 = isObject(obj);
    if (v205) {
        const v206 = exports.cloneObject(obj, options);
        return v206;
    }
    const v207 = obj.valueOf;
    if (v207) {
        const v208 = obj.valueOf();
        return v208;
    }
};
exports.clone = clone;
var clone = exports.clone;
const cloneObject = function (obj, options) {
    const v209 = options.minimize;
    var minimize = options && v209;
    var ret = {};
    var hasKeys;
    var val;
    var k;
    for (k in obj) {
        const v210 = obj[k];
        val = clone(v210, options);
        const v211 = !minimize;
        const v212 = typeof val;
        const v213 = 'undefined' !== v212;
        const v214 = v211 || v213;
        if (v214) {
            const v215 = hasKeys || (hasKeys = true);
            v215;
            ret[k] = val;
        }
    }
    const v216 = hasKeys && ret;
    let v217;
    if (minimize) {
        v217 = v216;
    } else {
        v217 = ret;
    }
    return v217;
};
exports.cloneObject = cloneObject;
const cloneArray = function (arr, options) {
    var ret = [];
    var i = 0;
    var l = arr.length;
    let v218 = i < l;
    while (v218) {
        const v220 = arr[i];
        const v221 = clone(v220, options);
        const v222 = ret.push(v221);
        v222;
        const v219 = i++;
        v218 = i < l;
    }
    return ret;
};
exports.cloneArray = cloneArray;
const tick = function (callback) {
    const v223 = typeof callback;
    const v224 = 'function' !== v223;
    if (v224) {
        return;
    }
    const v228 = function () {
        var args = arguments;
        const v226 = function () {
            const v225 = callback.apply(this, args);
            v225;
        };
        const v227 = soon(v226);
        v227;
    };
    return v228;
};
exports.tick = tick;
const merge = function (to, from) {
    var keys = Object.keys(from);
    var i = keys.length;
    var key;
    let v229 = i--;
    while (v229) {
        key = keys[i];
        const v230 = to[key];
        const v231 = typeof v230;
        const v232 = 'undefined' === v231;
        if (v232) {
            const v233 = from[key];
            to[key] = v233;
        } else {
            const v234 = from[key];
            const v235 = exports.isObject(v234);
            if (v235) {
                const v236 = to[key];
                const v237 = from[key];
                const v238 = merge(v236, v237);
                v238;
            } else {
                const v239 = from[key];
                to[key] = v239;
            }
        }
        v229 = i--;
    }
};
exports.merge = merge;
const mergeClone = function (to, from) {
    var keys = Object.keys(from);
    var i = keys.length;
    var key;
    let v240 = i--;
    while (v240) {
        key = keys[i];
        const v241 = to[key];
        const v242 = typeof v241;
        const v243 = 'undefined' === v242;
        if (v243) {
            const v244 = from[key];
            const v245 = clone(v244);
            to[key] = v245;
        } else {
            const v246 = from[key];
            const v247 = exports.isObject(v246);
            if (v247) {
                const v248 = to[key];
                const v249 = from[key];
                const v250 = mergeClone(v248, v249);
                v250;
            } else {
                const v251 = from[key];
                const v252 = clone(v251);
                to[key] = v252;
            }
        }
        v240 = i--;
    }
};
exports.mergeClone = mergeClone;
const readPref = function (pref) {
    switch (pref) {
    case 'p':
        pref = 'primary';
        break;
    case 'pp':
        pref = 'primaryPreferred';
        break;
    case 's':
        pref = 'secondary';
        break;
    case 'sp':
        pref = 'secondaryPreferred';
        break;
    case 'n':
        pref = 'nearest';
        break;
    }
    return pref;
};
exports.readPref = readPref;
const readConcern = function (concern) {
    const v253 = typeof concern;
    const v254 = 'string' === v253;
    if (v254) {
        switch (concern) {
        case 'l':
            concern = 'local';
            break;
        case 'a':
            concern = 'available';
            break;
        case 'm':
            concern = 'majority';
            break;
        case 'lz':
            concern = 'linearizable';
            break;
        case 's':
            concern = 'snapshot';
            break;
        }
        concern.level = concern;
        concern = {};
        concern = {};
    }
    return concern;
};
exports.readConcern = readConcern;
const v255 = Object.prototype;
var _toString = v255.toString;
const v257 = function (arg) {
    const v256 = _toString.call(arg);
    return v256;
};
exports.toString = v257;
const v260 = function (arg) {
    const v258 = exports.toString(arg);
    const v259 = '[object Object]' == v258;
    return v259;
};
exports.isObject = v260;
var isObject = exports.isObject;
const v268 = function (arg) {
    const v261 = Array.isArray(arg);
    const v262 = typeof arg;
    const v263 = 'object' == v262;
    const v264 = exports.toString(arg);
    const v265 = '[object Array]' == v264;
    const v266 = v263 && v265;
    const v267 = v261 || v266;
    return v267;
};
exports.isArray = v268;
const v269 = Object.keys;
const v272 = function (obj) {
    var keys = [];
    let k;
    for (k in obj) {
        const v270 = obj.hasOwnProperty(k);
        if (v270) {
            const v271 = keys.push(k);
            v271;
        }
    }
    return keys;
};
exports.keys = v269 || v272;
const v273 = Object.create;
const v274 = typeof v273;
const v275 = 'function' == v274;
const v276 = Object.create;
let v277;
if (v275) {
    v277 = v276;
} else {
    v277 = create;
}
exports.create = v277;
const create = function (proto) {
    const v278 = arguments.length;
    const v279 = v278 > 1;
    if (v279) {
        const v280 = new Error('Adding properties is not supported');
        throw v280;
    }
    const F = function () {
    };
    F.prototype = proto;
    const v281 = new F();
    return v281;
};
const v285 = function (ctor, superCtor) {
    const v282 = superCtor.prototype;
    const v283 = exports.create(v282);
    ctor.prototype = v283;
    const v284 = ctor.prototype;
    v284.constructor = ctor;
};
exports.inherits = v285;
const v286 = typeof setImmediate;
const v287 = 'function' == v286;
const v288 = process.nextTick;
let v289;
if (v287) {
    v289 = setImmediate;
} else {
    v289 = v288;
}
exports.soon = v289;
var soon = exports.soon;
const v293 = function (buff) {
    const v290 = buff.length;
    var dupe = Buffer.alloc(v290);
    const v291 = buff.length;
    const v292 = buff.copy(dupe, 0, 0, v291);
    v292;
    return dupe;
};
exports.cloneBuffer = v293;
const v298 = function (v) {
    const v294 = Object.prototype;
    const v295 = v294.toString;
    const v296 = v295.call(v);
    const v297 = v296 === '[object Arguments]';
    return v297;
};
exports.isArgumentsObject = v298;
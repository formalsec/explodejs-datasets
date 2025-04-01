'use strict';
const assignSymbols = function (receiver, objects) {
    const v129 = receiver === null;
    const v130 = typeof receiver;
    const v131 = v130 === 'undefined';
    const v132 = v129 || v131;
    if (v132) {
        const v133 = new TypeError('expected first argument to be an object.');
        throw v133;
    }
    const v134 = typeof objects;
    const v135 = v134 === 'undefined';
    const v136 = typeof Symbol;
    const v137 = v136 === 'undefined';
    const v138 = v135 || v137;
    if (v138) {
        return receiver;
    }
    const v139 = Object.getOwnPropertySymbols;
    const v140 = typeof v139;
    const v141 = v140 !== 'function';
    if (v141) {
        return receiver;
    }
    const v142 = Object.prototype;
    var isEnumerable = v142.propertyIsEnumerable;
    var target = Object(receiver);
    var len = arguments.length;
    var i = 0;
    const v143 = ++i;
    let v144 = v143 < len;
    while (v144) {
        const v145 = arguments[i];
        var provider = Object(v145);
        var names = Object.getOwnPropertySymbols(provider);
        var j = 0;
        const v146 = names.length;
        let v147 = j < v146;
        while (v147) {
            var key = names[j];
            const v149 = isEnumerable.call(provider, key);
            if (v149) {
                const v150 = provider[key];
                target[key] = v150;
            }
            const v148 = j++;
            v147 = j < v146;
        }
        v144 = v143 < len;
    }
    return target;
};
const isPrimitive = function (value) {
    const v151 = value == null;
    const v152 = typeof value;
    const v153 = v152 !== 'function';
    const v154 = typeof value;
    const v155 = v154 !== 'object';
    const v156 = v153 && v155;
    const v157 = v151 || v156;
    return v157;
};
const typeOf = function (val) {
    const v158 = typeof val;
    var type = v158;
    const v159 = type === 'undefined';
    if (v159) {
        return 'undefined';
    }
    const v160 = val === null;
    if (v160) {
        return 'null';
    }
    const v161 = val === true;
    const v162 = val === false;
    const v163 = v161 || v162;
    const v164 = val instanceof Boolean;
    const v165 = v163 || v164;
    if (v165) {
        return 'boolean';
    }
    const v166 = type === 'string';
    const v167 = val instanceof String;
    const v168 = v166 || v167;
    if (v168) {
        return 'string';
    }
    const v169 = type === 'number';
    const v170 = val instanceof Number;
    const v171 = v169 || v170;
    if (v171) {
        return 'number';
    }
    const v172 = type === 'function';
    const v173 = val instanceof Function;
    const v174 = v172 || v173;
    if (v174) {
        const v175 = val.constructor;
        const v176 = v175.name;
        const v177 = typeof v176;
        const v178 = v177 !== 'undefined';
        const v179 = val.constructor;
        const v180 = v179.name;
        const v181 = v180.slice(0, 9);
        const v182 = v181 === 'Generator';
        const v183 = v178 && v182;
        if (v183) {
            return 'generatorfunction';
        }
        return 'function';
    }
    const v184 = Array.isArray;
    const v185 = typeof v184;
    const v186 = v185 !== 'undefined';
    const v187 = Array.isArray(val);
    const v188 = v186 && v187;
    if (v188) {
        return 'array';
    }
    const v189 = val instanceof RegExp;
    if (v189) {
        return 'regexp';
    }
    const v190 = val instanceof Date;
    if (v190) {
        return 'date';
    }
    type = toString.call(val);
    const v191 = type === '[object RegExp]';
    if (v191) {
        return 'regexp';
    }
    const v192 = type === '[object Date]';
    if (v192) {
        return 'date';
    }
    const v193 = type === '[object Arguments]';
    if (v193) {
        return 'arguments';
    }
    const v194 = type === '[object Error]';
    if (v194) {
        return 'error';
    }
    const v195 = type === '[object Promise]';
    if (v195) {
        return 'promise';
    }
    const v196 = isBuffer(val);
    if (v196) {
        return 'buffer';
    }
    const v197 = type === '[object Set]';
    if (v197) {
        return 'set';
    }
    const v198 = type === '[object WeakSet]';
    if (v198) {
        return 'weakset';
    }
    const v199 = type === '[object Map]';
    if (v199) {
        return 'map';
    }
    const v200 = type === '[object WeakMap]';
    if (v200) {
        return 'weakmap';
    }
    const v201 = type === '[object Symbol]';
    if (v201) {
        return 'symbol';
    }
    const v202 = type === '[object Map Iterator]';
    if (v202) {
        return 'mapiterator';
    }
    const v203 = type === '[object Set Iterator]';
    if (v203) {
        return 'setiterator';
    }
    const v204 = type === '[object String Iterator]';
    if (v204) {
        return 'stringiterator';
    }
    const v205 = type === '[object Array Iterator]';
    if (v205) {
        return 'arrayiterator';
    }
    const v206 = type === '[object Int8Array]';
    if (v206) {
        return 'int8array';
    }
    const v207 = type === '[object Uint8Array]';
    if (v207) {
        return 'uint8array';
    }
    const v208 = type === '[object Uint8ClampedArray]';
    if (v208) {
        return 'uint8clampedarray';
    }
    const v209 = type === '[object Int16Array]';
    if (v209) {
        return 'int16array';
    }
    const v210 = type === '[object Uint16Array]';
    if (v210) {
        return 'uint16array';
    }
    const v211 = type === '[object Int32Array]';
    if (v211) {
        return 'int32array';
    }
    const v212 = type === '[object Uint32Array]';
    if (v212) {
        return 'uint32array';
    }
    const v213 = type === '[object Float32Array]';
    if (v213) {
        return 'float32array';
    }
    const v214 = type === '[object Float64Array]';
    if (v214) {
        return 'float64array';
    }
    return 'object';
};
;
const isBuffer = function (val) {
    const v215 = val.constructor;
    const v216 = val.constructor;
    const v217 = v216.isBuffer;
    const v218 = typeof v217;
    const v219 = v218 === 'function';
    const v220 = v215 && v219;
    const v221 = val.constructor;
    const v222 = v221.isBuffer(val);
    const v223 = v220 && v222;
    return v223;
};
const assign = function (target) {
    const v224 = {};
    target = target || v224;
    var len = arguments.length;
    var i = 0;
    const v225 = len === 1;
    if (v225) {
        return target;
    }
    const v226 = ++i;
    let v227 = v226 < len;
    while (v227) {
        var val = arguments[i];
        const v228 = isPrimitive(target);
        if (v228) {
            target = val;
        }
        const v229 = isObject(val);
        if (v229) {
            const v230 = extend(target, val);
            v230;
        }
        v227 = v226 < len;
    }
    return target;
};
const extend = function (target, obj) {
    const v231 = assignSymbols(target, obj);
    v231;
    let key;
    for (key in obj) {
        const v232 = hasOwn(obj, key);
        if (v232) {
            var val = obj[key];
            const v233 = isObject(val);
            if (v233) {
                const v234 = target[key];
                const v235 = typeOf(v234);
                const v236 = v235 === 'undefined';
                const v237 = typeOf(val);
                const v238 = v237 === 'function';
                const v239 = v236 && v238;
                if (v239) {
                    target[key] = val;
                }
                const v240 = target[key];
                const v241 = {};
                const v242 = v240 || v241;
                const v243 = assign(v242, val);
                target[key] = v243;
            } else {
                target[key] = val;
            }
        }
    }
    return target;
};
const isObject = function (obj) {
    const v244 = typeOf(obj);
    const v245 = v244 === 'object';
    const v246 = typeOf(obj);
    const v247 = v246 === 'function';
    const v248 = v245 || v247;
    return v248;
};
const hasOwn = function (obj, key) {
    const v249 = Object.prototype;
    const v250 = v249.hasOwnProperty;
    const v251 = v250.call(obj, key);
    return v251;
};
const isValidKey = function (key) {
    const v252 = key !== '__proto__';
    const v253 = key !== 'constructor';
    const v254 = v252 && v253;
    const v255 = key !== 'prototype';
    const v256 = v254 && v255;
    return v256;
};
module.exports = assign;
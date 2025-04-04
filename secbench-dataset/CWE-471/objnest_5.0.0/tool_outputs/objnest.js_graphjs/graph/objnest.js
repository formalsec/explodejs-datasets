'use strict';
const v131 = Object.prototype;
var hasOwn = v131.hasOwnProperty;
const v132 = Object.prototype;
var toStr = v132.toString;
var defineProperty = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;
var isArray = function isArray(arr) {
    const v133 = Array.isArray;
    const v134 = typeof v133;
    const v135 = v134 === 'function';
    if (v135) {
        const v136 = Array.isArray(arr);
        return v136;
    }
    const v137 = toStr.call(arr);
    const v138 = v137 === '[object Array]';
    return v138;
};
var isPlainObject = function isPlainObject(obj) {
    const v139 = !obj;
    const v140 = toStr.call(obj);
    const v141 = v140 !== '[object Object]';
    const v142 = v139 || v141;
    if (v142) {
        return false;
    }
    var hasOwnConstructor = hasOwn.call(obj, 'constructor');
    const v143 = obj.constructor;
    const v144 = obj.constructor;
    const v145 = v144.prototype;
    const v146 = v143 && v145;
    const v147 = obj.constructor;
    const v148 = v147.prototype;
    const v149 = hasOwn.call(v148, 'isPrototypeOf');
    var hasIsPrototypeOf = v146 && v149;
    const v150 = obj.constructor;
    const v151 = !hasOwnConstructor;
    const v152 = v150 && v151;
    const v153 = !hasIsPrototypeOf;
    const v154 = v152 && v153;
    if (v154) {
        return false;
    }
    var key;
    for (key in obj) {
    }
    const v155 = typeof key;
    const v156 = v155 === 'undefined';
    const v157 = hasOwn.call(obj, key);
    const v158 = v156 || v157;
    return v158;
};
var setProperty = function setProperty(target, options) {
    const v159 = options.name;
    const v160 = v159 === '__proto__';
    const v161 = defineProperty && v160;
    if (v161) {
        const v162 = options.name;
        const v163 = options.newValue;
        const v164 = {
            enumerable: true,
            configurable: true,
            value: v163,
            writable: true
        };
        const v165 = defineProperty(target, v162, v164);
        v165;
    } else {
        const v166 = options.name;
        const v167 = options.newValue;
        target[v166] = v167;
    }
};
var getProperty = function getProperty(obj, name) {
    const v168 = name === '__proto__';
    if (v168) {
        const v169 = hasOwn.call(obj, name);
        const v170 = !v169;
        if (v170) {
            const v171 = void 0;
            return v171;
        } else {
            if (gOPD) {
                const v172 = gOPD(obj, name);
                const v173 = v172.value;
                return v173;
            }
        }
    }
    const v174 = obj[name];
    return v174;
};
const extend = function () {
    var options;
    var name;
    var src;
    var copy;
    var copyIsArray;
    var clone;
    var target = arguments[0];
    var i = 1;
    var length = arguments.length;
    var deep = false;
    const v175 = typeof target;
    const v176 = v175 === 'boolean';
    if (v176) {
        deep = target;
        const v177 = arguments[1];
        const v178 = {};
        target = v177 || v178;
        i = 2;
    }
    const v179 = target == null;
    const v180 = typeof target;
    const v181 = v180 !== 'object';
    const v182 = typeof target;
    const v183 = v182 !== 'function';
    const v184 = v181 && v183;
    const v185 = v179 || v184;
    if (v185) {
        target = {};
    }
    let v186 = i < length;
    while (v186) {
        options = arguments[i];
        const v188 = options != null;
        if (v188) {
            for (name in options) {
                src = getProperty(target, name);
                copy = getProperty(options, name);
                const v189 = target !== copy;
                if (v189) {
                    const v190 = deep && copy;
                    const v191 = isPlainObject(copy);
                    const v192 = v191 || (copyIsArray = isArray(copy));
                    const v193 = v190 && v192;
                    if (v193) {
                        if (copyIsArray) {
                            copyIsArray = false;
                            const v194 = isArray(src);
                            const v195 = src && v194;
                            const v196 = [];
                            if (v195) {
                                clone = src;
                            } else {
                                clone = v196;
                            }
                        } else {
                            const v197 = isPlainObject(src);
                            const v198 = src && v197;
                            const v199 = {};
                            if (v198) {
                                clone = src;
                            } else {
                                clone = v199;
                            }
                        }
                        const v200 = extend(deep, clone, copy);
                        const v201 = {
                            name: name,
                            newValue: v200
                        };
                        const v202 = setProperty(target, v201);
                        v202;
                    } else {
                        const v203 = typeof copy;
                        const v204 = v203 !== 'undefined';
                        if (v204) {
                            const v205 = {
                                name: name,
                                newValue: copy
                            };
                            const v206 = setProperty(target, v205);
                            v206;
                        }
                    }
                }
            }
        }
        const v187 = ++i;
        v186 = i < length;
    }
    return target;
};
const abind = require('abind');
const isArrayKey = require('./key/is_array_key');
const fromArrayKey = require('./key/from_array_key');
const toArrayKey = require('./key/to_array_key');
const Objnest = function (config) {
    const v207 = {};
    const v208 = config || v207;
    const v209 = extend(this, v208);
    v209;
    const v210 = abind(this);
    v210;
};
const v238 = function (object) {
    const v211 = Array.isArray(object);
    if (v211) {
        const v213 = object => {
            const v212 = this.expand(object);
            return v212;
        };
        const v214 = object.map(v213);
        return v214;
    }
    const separator = this.separator;
    const result = {};
    let key;
    const v215 = Object.keys(object);
    for (key of v215) {
        let val = object[key];
        const v216 = key.indexOf(separator);
        const v217 = ~v216;
        const v218 = !v217;
        const v219 = !v218;
        const needsSeparate = v219;
        if (needsSeparate) {
            const subKeys = key.split(separator);
            const subObj = {};
            const thisKey = subKeys.shift();
            const v220 = subKeys.join('.');
            subObj[v220] = val;
            const subExpandedObj = this.expand(subObj);
            const thisVal = result[thisKey];
            val = this._merge(thisVal, subExpandedObj);
            key = thisKey;
        }
        const v221 = isArrayKey(key);
        if (v221) {
            const arrayKey = fromArrayKey(key);
            const v222 = arrayKey.name;
            const v223 = result[v222];
            const v224 = !v223;
            if (v224) {
                const v225 = arrayKey.name;
                const v226 = object[`${ v225 }[length]`];
                const length = v226 || 0;
                const v227 = arrayKey.name;
                result[v227] = new Array(length);
            }
            const v228 = arrayKey.index;
            const v229 = v228 !== null;
            if (v229) {
                const v233 = arrayKey.name;
                const v234 = result[v233];
                const v235 = arrayKey.index;
                const v236 = v234[v235];
                const v237 = this._merge(v236, val);
                v231[v232] = v237;
            }
        } else {
            result[key] = val;
        }
    }
    return result;
};
const v251 = function (nested) {
    const v239 = typeof nested;
    const v240 = v239 === 'string';
    if (v240) {
        return nested;
    }
    const separator = this.separator;
    const flattened = {};
    let key;
    const v241 = {};
    const v242 = nested || v241;
    const v243 = Object.keys(v242);
    for (key of v243) {
        const value = nested[key];
        const v244 = value === null;
        if (v244) {
            flattened[key] = value;
            continue;
        }
        const v245 = typeof value;
        switch (v245) {
        case 'string':
        case 'number':
        case 'boolean':
        case 'function':
            flattened[key] = value;
            break;
        default: {
                const subValues = this.flatten(value);
                const isArray = Array.isArray(value);
                if (isArray) {
                    const v246 = value.length;
                    flattened[`${ key }[length]`] = v246;
                }
                let subKey;
                const v247 = Object.keys(subValues);
                for (subKey of v247) {
                    let fullKey;
                    if (isArray) {
                        const v248 = toArrayKey(subKey);
                        fullKey = key + v248;
                    } else {
                        const v249 = [
                            key,
                            subKey
                        ];
                        fullKey = v249.join(separator);
                    }
                    const v250 = subValues[subKey];
                    flattened[fullKey] = v250;
                }
                break;
            }
        }
    }
    return flattened;
};
const v259 = function (v1, v2) {
    const v252 = typeof v1;
    const v253 = v252 === 'undefined';
    if (v253) {
        return v2;
    }
    const v254 = typeof v2;
    const v255 = v254 === 'undefined';
    if (v255) {
        return v1;
    }
    const v256 = {};
    const v257 = v2 || v256;
    const v258 = extend(true, v1, v257);
    return v258;
};
const v260 = {};
v260.separator = '.';
v260.expand = v238;
v260.flatten = v251;
v260._merge = v259;
Objnest.prototype = v260;
module.exports = Objnest;
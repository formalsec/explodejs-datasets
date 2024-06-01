'use strict';
const v131 = Object.prototype;
var toString = v131.toString;
var description = {};
description.configurable = 'boolean';
description.enumerable = 'boolean';
description.get = 'function';
description.set = 'function';
description.value = undefined;
description.writable = 'boolean';
const descriptor = function (obj) {
    const v132 = !obj;
    const v133 = typeof obj;
    const v134 = 'object' !== v133;
    const v135 = v132 || v134;
    const v136 = Array.isArray(obj);
    const v137 = v135 || v136;
    if (v137) {
        return false;
    }
    var keys = Object.keys(obj);
    const v138 = 'value' in obj;
    const v139 = 'writable' in obj;
    const v140 = v138 || v139;
    const v141 = obj.set;
    const v142 = typeof v141;
    const v143 = 'function' === v142;
    const v144 = obj.get;
    const v145 = typeof v144;
    const v146 = 'function' === v145;
    const v147 = v143 || v146;
    const v148 = v140 && v147;
    if (v148) {
        return false;
    }
    const v149 = keys.length;
    const v150 = !v149;
    const v151 = !v150;
    const v157 = function allowed(key) {
        var type = description[key];
        const v152 = type === undefined;
        const v153 = obj[key];
        const v154 = is(v153, type);
        var valid = v152 || v154;
        const v155 = key in description;
        const v156 = v155 && valid;
        return v156;
    };
    const v158 = keys.every(v157);
    const v159 = v151 && v158;
    return v159;
};
const is = function (thing, type) {
    const v160 = toString.call(thing);
    const v161 = v160.toLowerCase();
    const v162 = -1;
    const v163 = v161.slice(8, v162);
    const v164 = v163 === type;
    return v164;
};
const predefine = function (obj, pattern) {
    const v165 = predefine.READABLE;
    pattern = pattern || v165;
    const v185 = function predefined(method, description, clean) {
        const v166 = predefine.descriptor(description);
        const v167 = !v166;
        const v168 = is(description, 'object');
        const v169 = !clean;
        const v170 = v168 && v169;
        const v171 = {};
        const v172 = predefine.mixin(v171, pattern, description);
        const v173 = predefine.descriptor(v172);
        const v174 = !v173;
        const v175 = v170 && v174;
        const v176 = v167 || v175;
        if (v176) {
            description.value = description;
            description = {};
            description = {};
        }
        var described = Object.getOwnPropertyDescriptor(obj, method);
        const v177 = described.configurable;
        const v178 = !v177;
        const v179 = described && v178;
        if (v179) {
            return predefined;
        }
        const v180 = !clean;
        const v181 = {};
        const v182 = predefine.mixin(v181, pattern, description);
        let v183;
        if (v180) {
            v183 = v182;
        } else {
            v183 = description;
        }
        const v184 = Object.defineProperty(obj, method, v183);
        v184;
        return predefined;
    };
    return v185;
};
const lazy = function (obj, prop, fn) {
    const v190 = function get() {
        const v186 = fn.call(this);
        const v187 = { value: v186 };
        const v188 = Object.defineProperty(this, prop, v187);
        const v189 = v188[prop];
        return v189;
    };
    const v194 = function set(value) {
        const v191 = { value: value };
        const v192 = Object.defineProperty(this, prop, v191);
        const v193 = v192[prop];
        return v193;
    };
    const v195 = {
        configurable: true,
        get: v190,
        set: v194
    };
    const v196 = Object.defineProperty(obj, prop, v195);
    v196;
};
const v197 = Object.prototype;
var has = v197.hasOwnProperty;
const remove = function (obj, keep) {
    const v198 = !obj;
    if (v198) {
        return false;
    }
    const v199 = [];
    keep = keep || v199;
    let prop;
    for (prop in obj) {
        const v200 = has.call(obj, prop);
        const v201 = keep.indexOf(prop);
        const v202 = ~v201;
        const v203 = !v202;
        const v204 = v200 && v203;
        if (v204) {
            const v205 = obj[prop];
            const v206 = delete v205;
            v206;
        }
    }
    return true;
};
const create = function (property, description, pattern) {
    const v207 = {};
    pattern = pattern || v207;
    const v208 = predefine.descriptor(description);
    const v209 = !v208;
    if (v209) {
        description.enumberable = false;
        description.value = description;
        description = {};
        description = {};
    }
    var definition = {};
    const v210 = predefine.mixin(pattern, description);
    definition[property] = v210;
    return definition;
};
const mixin = function (target) {
    const v211 = Array.prototype;
    const v212 = v211.slice;
    const v213 = v212.call(arguments, 1);
    const v219 = function forEach(o) {
        const v214 = Object.getOwnPropertyNames(o);
        const v217 = function eachAttr(attr) {
            const v215 = Object.getOwnPropertyDescriptor(o, attr);
            const v216 = Object.defineProperty(target, attr, v215);
            v216;
        };
        const v218 = v214.forEach(v217);
        v218;
    };
    const v220 = v213.forEach(v219);
    v220;
    return target;
};
const each = function (collection, iterator, context) {
    const v221 = arguments.length;
    const v222 = v221 === 1;
    if (v222) {
        iterator = collection;
        collection = this;
    }
    const v223 = collection || this;
    var isArray = Array.isArray(v223);
    var length = collection.length;
    var i = 0;
    var value;
    if (context) {
        if (isArray) {
            let v224 = i < length;
            while (v224) {
                const v226 = collection[i];
                value = iterator.apply(v226, context);
                const v227 = value === false;
                if (v227) {
                    break;
                }
                const v225 = i++;
                v224 = i < length;
            }
        } else {
            for (i in collection) {
                const v228 = collection[i];
                value = iterator.apply(v228, context);
                const v229 = value === false;
                if (v229) {
                    break;
                }
            }
        }
    } else {
        if (isArray) {
            let v230 = i < length;
            while (v230) {
                const v232 = collection[i];
                const v233 = collection[i];
                value = iterator.call(v232, i, v233);
                const v234 = value === false;
                if (v234) {
                    break;
                }
                const v231 = i++;
                v230 = i < length;
            }
        } else {
            for (i in collection) {
                const v235 = collection[i];
                const v236 = collection[i];
                value = iterator.call(v235, i, v236);
                const v237 = value === false;
                if (v237) {
                    break;
                }
            }
        }
    }
    return this;
};
const merge = function (target, additional) {
    var result = target;
    var undefined;
    const v238 = Array.isArray(target);
    if (v238) {
        const v247 = function arrayForEach(index) {
            const v239 = JSON.stringify(target);
            const v240 = additional[index];
            const v241 = JSON.stringify(v240);
            const v242 = v239.indexOf(v241);
            const v243 = -1;
            const v244 = v242 === v243;
            if (v244) {
                const v245 = additional[index];
                const v246 = result.push(v245);
                v246;
            }
        };
        const v248 = each(additional, v247);
        v248;
    } else {
        const v249 = typeof target;
        const v250 = 'object' === v249;
        if (v250) {
            const v256 = function objectForEach(key, value) {
                const v251 = target[key];
                const v252 = v251 === undefined;
                if (v252) {
                    result[key] = value;
                } else {
                    const v253 = target[key];
                    const v254 = additional[key];
                    const v255 = merge(v253, v254);
                    result[key] = v255;
                }
            };
            const v257 = each(additional, v256);
            v257;
        } else {
            result = additional;
        }
    }
    return result;
};
const v258 = require('extendible');
predefine.extend = v258;
predefine.descriptor = descriptor;
predefine.create = create;
predefine.remove = remove;
predefine.merge = merge;
predefine.mixin = mixin;
predefine.each = each;
predefine.lazy = lazy;
const v259 = {};
v259.configurable = true;
v259.enumerable = false;
v259.writable = true;
predefine.WRITABLE = v259;
const v260 = {};
v260.enumerable = false;
v260.writable = false;
predefine.READABLE = v260;
module.exports = predefine;
'use strict';
const v98 = Object.prototype;
var toString = v98.toString;
const isOptionObject = function (x) {
    var prototype;
    const v99 = toString.call(x);
    const v100 = v99 === '[object Object]';
    const v101 = prototype === null;
    const v102 = {};
    const v103 = Object.getPrototypeOf(v102);
    const v104 = prototype === v103;
    const v105 = v101 || v104;
    const v106 = v100 && (prototype = Object.getPrototypeOf(x), v105);
    return v106;
};
const v107 = Object.prototype;
const hasOwnProperty = v107.hasOwnProperty;
const propIsEnumerable = Object.propertyIsEnumerable;
const globalThis = this;
const defaultMergeOpts = {};
defaultMergeOpts.concatArrays = false;
const getEnumerableOwnPropertyKeys = value => {
    const keys = [];
    let key;
    for (key in value) {
        const v108 = hasOwnProperty.call(value, key);
        if (v108) {
            const v109 = keys.push(key);
            v109;
        }
    }
    const v110 = Object.getOwnPropertySymbols;
    if (v110) {
        const symbols = Object.getOwnPropertySymbols(value);
        let i = 0;
        const v111 = symbols.length;
        let v112 = i < v111;
        while (v112) {
            const v114 = symbols[i];
            const v115 = propIsEnumerable.call(value, v114);
            if (v115) {
                const v116 = symbols[i];
                const v117 = keys.push(v116);
                v117;
            }
            const v113 = i++;
            v112 = i < v111;
        }
    }
    return keys;
};
const clone = function (value) {
    const v118 = Array.isArray(value);
    if (v118) {
        const v119 = cloneArray(value);
        return v119;
    }
    const v120 = isOptionObject(value);
    if (v120) {
        const v121 = cloneOptionObject(value);
        return v121;
    }
    return value;
};
const cloneArray = function (array) {
    const result = array.slice(0, 0);
    const v122 = getEnumerableOwnPropertyKeys(array);
    const v125 = key => {
        const v123 = array[key];
        const v124 = clone(v123);
        result[key] = v124;
    };
    const v126 = v122.forEach(v125);
    v126;
    return result;
};
const cloneOptionObject = function (obj) {
    let result;
    const v127 = Object.getPrototypeOf(obj);
    const v128 = v127 === null;
    const v129 = Object.create(null);
    const v130 = {};
    if (v128) {
        result = v129;
    } else {
        result = v130;
    }
    const v131 = getEnumerableOwnPropertyKeys(obj);
    const v134 = key => {
        const v132 = obj[key];
        const v133 = clone(v132);
        result[key] = v133;
    };
    const v135 = v131.forEach(v134);
    v135;
    return result;
};
const mergeKeys = (merged, source, keys, mergeOpts) => {
    const v142 = key => {
        const v136 = key in merged;
        if (v136) {
            const v137 = merged[key];
            const v138 = source[key];
            const v139 = merge(v137, v138, mergeOpts);
            merged[key] = v139;
        } else {
            const v140 = source[key];
            const v141 = clone(v140);
            merged[key] = v141;
        }
    };
    const v143 = keys.forEach(v142);
    v143;
    return merged;
};
const concatArrays = (merged, source, mergeOpts) => {
    let result = merged.slice(0, 0);
    let resultIndex = 0;
    const v144 = [
        merged,
        source
    ];
    const v164 = array => {
        const indices = [];
        let k = 0;
        const v145 = array.length;
        let v146 = k < v145;
        while (v146) {
            const v148 = hasOwnProperty.call(array, k);
            const v149 = !v148;
            if (v149) {
                continue;
            }
            const v150 = String(k);
            const v151 = indices.push(v150);
            v151;
            const v152 = array === merged;
            if (v152) {
                const v153 = resultIndex++;
                const v154 = array[k];
                result[v153] = v154;
            } else {
                const v156 = array[k];
                const v157 = clone(v156);
                result[v155] = v157;
            }
            const v147 = k++;
            v146 = k < v145;
        }
        const v158 = getEnumerableOwnPropertyKeys(array);
        const v162 = key => {
            const v159 = indices.indexOf(key);
            const v160 = -1;
            const v161 = v159 === v160;
            return v161;
        };
        const v163 = v158.filter(v162);
        result = mergeKeys(result, array, v163, mergeOpts);
    };
    const v165 = v144.forEach(v164);
    v165;
    return result;
};
const merge = function (merged, source, mergeOpts) {
    const v166 = mergeOpts.concatArrays;
    const v167 = Array.isArray(merged);
    const v168 = v166 && v167;
    const v169 = Array.isArray(source);
    const v170 = v168 && v169;
    if (v170) {
        const v171 = concatArrays(merged, source, mergeOpts);
        return v171;
    }
    const v172 = isOptionObject(source);
    const v173 = !v172;
    const v174 = isOptionObject(merged);
    const v175 = !v174;
    const v176 = v173 || v175;
    if (v176) {
        const v177 = clone(source);
        return v177;
    }
    const v178 = getEnumerableOwnPropertyKeys(source);
    const v179 = mergeKeys(merged, source, v178, mergeOpts);
    return v179;
};
const v194 = function () {
    const v180 = clone(defaultMergeOpts);
    const v181 = this !== globalThis;
    const v182 = v181 && this;
    const v183 = {};
    const v184 = v182 || v183;
    const mergeOpts = merge(v180, v184, defaultMergeOpts);
    let merged = {};
    let i = 0;
    const v185 = arguments.length;
    let v186 = i < v185;
    while (v186) {
        const option = arguments[i];
        const v188 = option === undefined;
        if (v188) {
            continue;
        }
        const v189 = isOptionObject(option);
        const v190 = !v189;
        if (v190) {
            const v191 = '`' + option;
            const v192 = v191 + '` is not an Option Object';
            const v193 = new TypeError(v192);
            throw v193;
        }
        merged = merge(merged, option, mergeOpts);
        const v187 = i++;
        v186 = i < v185;
    }
    return merged;
};
module.exports = v194;
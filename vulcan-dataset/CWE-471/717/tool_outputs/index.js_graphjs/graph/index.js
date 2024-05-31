'use strict';
const isOptionObject = require('is-plain-obj');
const v89 = Object.prototype;
const hasOwnProperty = v89.hasOwnProperty;
const propIsEnumerable = Object.propertyIsEnumerable;
const globalThis = this;
const defaultMergeOpts = {};
defaultMergeOpts.concatArrays = false;
const getEnumerableOwnPropertyKeys = value => {
    const keys = [];
    let key;
    for (key in value) {
        const v90 = hasOwnProperty.call(value, key);
        if (v90) {
            const v91 = keys.push(key);
            v91;
        }
    }
    const v92 = Object.getOwnPropertySymbols;
    if (v92) {
        const symbols = Object.getOwnPropertySymbols(value);
        let i = 0;
        const v93 = symbols.length;
        let v94 = i < v93;
        while (v94) {
            const v96 = symbols[i];
            const v97 = propIsEnumerable.call(value, v96);
            if (v97) {
                const v98 = symbols[i];
                const v99 = keys.push(v98);
                v99;
            }
            const v95 = i++;
            v94 = i < v93;
        }
    }
    return keys;
};
const clone = function (value) {
    const v100 = Array.isArray(value);
    if (v100) {
        const v101 = cloneArray(value);
        return v101;
    }
    const v102 = isOptionObject(value);
    if (v102) {
        const v103 = cloneOptionObject(value);
        return v103;
    }
    return value;
};
const cloneArray = function (array) {
    const result = array.slice(0, 0);
    const v104 = getEnumerableOwnPropertyKeys(array);
    const v107 = key => {
        const v105 = array[key];
        const v106 = clone(v105);
        result[key] = v106;
    };
    const v108 = v104.forEach(v107);
    v108;
    return result;
};
const cloneOptionObject = function (obj) {
    let result;
    const v109 = Object.getPrototypeOf(obj);
    const v110 = v109 === null;
    const v111 = Object.create(null);
    const v112 = {};
    if (v110) {
        result = v111;
    } else {
        result = v112;
    }
    const v113 = getEnumerableOwnPropertyKeys(obj);
    const v116 = key => {
        const v114 = obj[key];
        const v115 = clone(v114);
        result[key] = v115;
    };
    const v117 = v113.forEach(v116);
    v117;
    return result;
};
const mergeKeys = (merged, source, keys, mergeOpts) => {
    const v124 = key => {
        const v118 = key in merged;
        if (v118) {
            const v119 = merged[key];
            const v120 = source[key];
            const v121 = merge(v119, v120, mergeOpts);
            merged[key] = v121;
        } else {
            const v122 = source[key];
            const v123 = clone(v122);
            merged[key] = v123;
        }
    };
    const v125 = keys.forEach(v124);
    v125;
    return merged;
};
const concatArrays = (merged, source, mergeOpts) => {
    let result = merged.slice(0, 0);
    let resultIndex = 0;
    const v126 = [
        merged,
        source
    ];
    const v146 = array => {
        const indices = [];
        let k = 0;
        const v127 = array.length;
        let v128 = k < v127;
        while (v128) {
            const v130 = hasOwnProperty.call(array, k);
            const v131 = !v130;
            if (v131) {
                continue;
            }
            const v132 = String(k);
            const v133 = indices.push(v132);
            v133;
            const v134 = array === merged;
            if (v134) {
                const v135 = resultIndex++;
                const v136 = array[k];
                result[v135] = v136;
            } else {
                const v138 = array[k];
                const v139 = clone(v138);
                result[v137] = v139;
            }
            const v129 = k++;
            v128 = k < v127;
        }
        const v140 = getEnumerableOwnPropertyKeys(array);
        const v144 = key => {
            const v141 = indices.indexOf(key);
            const v142 = -1;
            const v143 = v141 === v142;
            return v143;
        };
        const v145 = v140.filter(v144);
        result = mergeKeys(result, array, v145, mergeOpts);
    };
    const v147 = v126.forEach(v146);
    v147;
    return result;
};
const merge = function (merged, source, mergeOpts) {
    const v148 = mergeOpts.concatArrays;
    const v149 = Array.isArray(merged);
    const v150 = v148 && v149;
    const v151 = Array.isArray(source);
    const v152 = v150 && v151;
    if (v152) {
        const v153 = concatArrays(merged, source, mergeOpts);
        return v153;
    }
    const v154 = isOptionObject(source);
    const v155 = !v154;
    const v156 = isOptionObject(merged);
    const v157 = !v156;
    const v158 = v155 || v157;
    if (v158) {
        const v159 = clone(source);
        return v159;
    }
    const v160 = getEnumerableOwnPropertyKeys(source);
    const v161 = mergeKeys(merged, source, v160, mergeOpts);
    return v161;
};
const v176 = function () {
    const v162 = clone(defaultMergeOpts);
    const v163 = this !== globalThis;
    const v164 = v163 && this;
    const v165 = {};
    const v166 = v164 || v165;
    const mergeOpts = merge(v162, v166, defaultMergeOpts);
    let merged = {};
    let i = 0;
    const v167 = arguments.length;
    let v168 = i < v167;
    while (v168) {
        const option = arguments[i];
        const v170 = option === undefined;
        if (v170) {
            continue;
        }
        const v171 = isOptionObject(option);
        const v172 = !v171;
        if (v172) {
            const v173 = '`' + option;
            const v174 = v173 + '` is not an Option Object';
            const v175 = new TypeError(v174);
            throw v175;
        }
        merged = merge(merged, option, mergeOpts);
        const v169 = i++;
        v168 = i < v167;
    }
    return merged;
};
module.exports = v176;
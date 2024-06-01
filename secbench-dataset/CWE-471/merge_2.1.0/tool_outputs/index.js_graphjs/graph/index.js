'use strict';
const v71 = { value: true };
const v72 = Object.defineProperty(exports, '__esModule', v71);
v72;
const v73 = void 0;
exports.main = v73;
exports.merge = exports.main;
exports.recursive = exports.merge;
exports.clone = exports.recursive;
exports.isPlainObject = exports.clone;
exports = main;
module.exports = exports;
exports.default = main;
const main = function () {
    var items = [];
    var _i = 0;
    const v74 = arguments.length;
    let v75 = _i < v74;
    while (v75) {
        const v77 = arguments[_i];
        items[_i] = v77;
        const v76 = _i++;
        v75 = _i < v74;
    }
    const v78 = void 0;
    const v79 = merge.apply(v78, items);
    return v79;
};
exports.main = main;
main.clone = clone;
main.isPlainObject = isPlainObject;
main.recursive = recursive;
const merge = function () {
    var items = [];
    var _i = 0;
    const v80 = arguments.length;
    let v81 = _i < v80;
    while (v81) {
        const v83 = arguments[_i];
        items[_i] = v83;
        const v82 = _i++;
        v81 = _i < v80;
    }
    const v84 = items[0];
    const v85 = v84 === true;
    const v86 = _merge(v85, false, items);
    return v86;
};
exports.merge = merge;
const recursive = function () {
    var items = [];
    var _i = 0;
    const v87 = arguments.length;
    let v88 = _i < v87;
    while (v88) {
        const v90 = arguments[_i];
        items[_i] = v90;
        const v89 = _i++;
        v88 = _i < v87;
    }
    const v91 = items[0];
    const v92 = v91 === true;
    const v93 = _merge(v92, true, items);
    return v93;
};
exports.recursive = recursive;
const clone = function (input) {
    const v94 = Array.isArray(input);
    if (v94) {
        var output = [];
        var index = 0;
        const v95 = input.length;
        let v96 = index < v95;
        while (v96) {
            const v98 = input[index];
            const v99 = clone(v98);
            const v100 = output.push(v99);
            v100;
            const v97 = ++index;
            v96 = index < v95;
        }
        return output;
    } else {
        const v101 = isPlainObject(input);
        if (v101) {
            var output = {};
            let index;
            for (index in input) {
                const v102 = input[index];
                const v103 = clone(v102);
                output[index] = v103;
            }
            return output;
        } else {
            return input;
        }
    }
};
exports.clone = clone;
const isPlainObject = function (input) {
    const v104 = typeof input;
    const v105 = v104 === 'object';
    const v106 = input && v105;
    const v107 = Array.isArray(input);
    const v108 = !v107;
    const v109 = v106 && v108;
    return v109;
};
exports.isPlainObject = isPlainObject;
const _recursiveMerge = function (base, extend) {
    const v110 = isPlainObject(base);
    const v111 = !v110;
    if (v111) {
        return extend;
    }
    let key;
    for (key in extend) {
        const v112 = base[key];
        const v113 = isPlainObject(v112);
        const v114 = extend[key];
        const v115 = isPlainObject(v114);
        const v116 = v113 && v115;
        const v117 = base[key];
        const v118 = extend[key];
        const v119 = _recursiveMerge(v117, v118);
        const v120 = extend[key];
        let v121;
        if (v116) {
            v121 = v119;
        } else {
            v121 = v120;
        }
        base[key] = v121;
    }
    return base;
};
const _merge = function (isClone, isRecursive, items) {
    var result;
    const v122 = isPlainObject(result = items.shift());
    const v123 = !v122;
    const v124 = isClone || v123;
    if (v124) {
        result = {};
    }
    var index = 0;
    const v125 = items.length;
    let v126 = index < v125;
    while (v126) {
        var item = items[index];
        const v128 = isPlainObject(item);
        const v129 = !v128;
        if (v129) {
            continue;
        }
        let key;
        for (key in item) {
            const v130 = key === '__proto__';
            const v131 = key === 'constructor';
            const v132 = v130 || v131;
            const v133 = key === 'prototype';
            const v134 = v132 || v133;
            if (v134) {
                continue;
            }
            let value;
            const v135 = item[key];
            const v136 = clone(v135);
            const v137 = item[key];
            if (isClone) {
                value = v136;
            } else {
                value = v137;
            }
            const v138 = result[key];
            const v139 = _recursiveMerge(v138, value);
            let v140;
            if (isRecursive) {
                v140 = v139;
            } else {
                v140 = value;
            }
            result[key] = v140;
        }
        const v127 = ++index;
        v126 = index < v125;
    }
    return result;
};
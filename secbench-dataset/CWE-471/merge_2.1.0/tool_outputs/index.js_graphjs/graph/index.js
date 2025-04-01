'use strict';
const v66 = { value: true };
const v67 = Object.defineProperty(exports, '__esModule', v66);
v67;
const v68 = void 0;
exports.main = v68;
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
    const v69 = arguments.length;
    let v70 = _i < v69;
    while (v70) {
        const v72 = arguments[_i];
        items[_i] = v72;
        const v71 = _i++;
        v70 = _i < v69;
    }
    const v73 = void 0;
    const v74 = merge.apply(v73, items);
    return v74;
};
exports.main = main;
main.clone = clone;
main.isPlainObject = isPlainObject;
main.recursive = recursive;
const merge = function () {
    var items = [];
    var _i = 0;
    const v75 = arguments.length;
    let v76 = _i < v75;
    while (v76) {
        const v78 = arguments[_i];
        items[_i] = v78;
        const v77 = _i++;
        v76 = _i < v75;
    }
    const v79 = items[0];
    const v80 = v79 === true;
    const v81 = _merge(v80, false, items);
    return v81;
};
exports.merge = merge;
const recursive = function () {
    var items = [];
    var _i = 0;
    const v82 = arguments.length;
    let v83 = _i < v82;
    while (v83) {
        const v85 = arguments[_i];
        items[_i] = v85;
        const v84 = _i++;
        v83 = _i < v82;
    }
    const v86 = items[0];
    const v87 = v86 === true;
    const v88 = _merge(v87, true, items);
    return v88;
};
exports.recursive = recursive;
const clone = function (input) {
    const v89 = Array.isArray(input);
    if (v89) {
        var output = [];
        var index = 0;
        const v90 = input.length;
        let v91 = index < v90;
        while (v91) {
            const v93 = input[index];
            const v94 = clone(v93);
            const v95 = output.push(v94);
            v95;
            const v92 = ++index;
            v91 = index < v90;
        }
        return output;
    } else {
        const v96 = isPlainObject(input);
        if (v96) {
            var output = {};
            let index;
            for (index in input) {
                const v97 = input[index];
                const v98 = clone(v97);
                output[index] = v98;
            }
            return output;
        } else {
            return input;
        }
    }
};
exports.clone = clone;
const isPlainObject = function (input) {
    const v99 = typeof input;
    const v100 = v99 === 'object';
    const v101 = input && v100;
    const v102 = Array.isArray(input);
    const v103 = !v102;
    const v104 = v101 && v103;
    return v104;
};
exports.isPlainObject = isPlainObject;
const _recursiveMerge = function (base, extend) {
    const v105 = isPlainObject(base);
    const v106 = !v105;
    if (v106) {
        return extend;
    }
    let key;
    for (key in extend) {
        const v107 = base[key];
        const v108 = isPlainObject(v107);
        const v109 = extend[key];
        const v110 = isPlainObject(v109);
        const v111 = v108 && v110;
        const v112 = base[key];
        const v113 = extend[key];
        const v114 = _recursiveMerge(v112, v113);
        const v115 = extend[key];
        let v116;
        if (v111) {
            v116 = v114;
        } else {
            v116 = v115;
        }
        base[key] = v116;
    }
    return base;
};
const _merge = function (isClone, isRecursive, items) {
    var result;
    const v117 = isPlainObject(result = items.shift());
    const v118 = !v117;
    const v119 = isClone || v118;
    if (v119) {
        result = {};
    }
    var index = 0;
    const v120 = items.length;
    let v121 = index < v120;
    while (v121) {
        var item = items[index];
        const v123 = isPlainObject(item);
        const v124 = !v123;
        if (v124) {
            continue;
        }
        let key;
        for (key in item) {
            let value;
            const v125 = item[key];
            const v126 = clone(v125);
            const v127 = item[key];
            if (isClone) {
                value = v126;
            } else {
                value = v127;
            }
            const v128 = result[key];
            const v129 = _recursiveMerge(v128, value);
            let v130;
            if (isRecursive) {
                v130 = v129;
            } else {
                v130 = value;
            }
            result[key] = v130;
        }
        const v122 = ++index;
        v121 = index < v120;
    }
    return result;
};
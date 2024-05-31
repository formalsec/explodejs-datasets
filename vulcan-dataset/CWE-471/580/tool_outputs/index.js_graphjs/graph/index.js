'use strict';
var utils = require('./utils');
const mergeDeep = function (orig, objects) {
    const v25 = utils.isObject(orig);
    const v26 = !v25;
    const v27 = Array.isArray(orig);
    const v28 = !v27;
    const v29 = v26 && v28;
    if (v29) {
        orig = {};
    }
    var target = utils.clone(orig);
    var len = arguments.length;
    var idx = 0;
    const v30 = ++idx;
    let v31 = v30 < len;
    while (v31) {
        var val = arguments[idx];
        const v32 = utils.isObject(val);
        const v33 = Array.isArray(val);
        const v34 = v32 || v33;
        if (v34) {
            const v35 = merge(target, val);
            v35;
        }
        v31 = v30 < len;
    }
    return target;
};
module.exports = mergeDeep;
const merge = function (target, obj) {
    let key;
    for (key in obj) {
        const v36 = hasOwn(obj, key);
        const v37 = !v36;
        if (v37) {
            continue;
        }
        var oldVal = obj[key];
        var newVal = target[key];
        const v38 = utils.isObject(newVal);
        const v39 = utils.isObject(oldVal);
        const v40 = v38 && v39;
        if (v40) {
            const v41 = merge(newVal, oldVal);
            target[key] = v41;
        } else {
            const v42 = Array.isArray(newVal);
            if (v42) {
                const v43 = [];
                const v44 = utils.union(v43, newVal, oldVal);
                target[key] = v44;
            } else {
                const v45 = utils.clone(oldVal);
                target[key] = v45;
            }
        }
    }
    return target;
};
const hasOwn = function (obj, key) {
    const v46 = Object.prototype;
    const v47 = v46.hasOwnProperty;
    const v48 = v47.call(obj, key);
    return v48;
};
'use strict';
const v24 = { value: true };
const v25 = Object.defineProperty(exports, '__esModule', v24);
v25;
const isObject = function (val) {
    const v26 = val != null;
    const v27 = typeof val;
    const v28 = v27 === 'object';
    const v29 = v26 && v28;
    const v30 = Array.isArray(val);
    const v31 = v30 === false;
    const v32 = v29 && v31;
    return v32;
};
const deepMerge = function (target, source) {
    const v33 = source === undefined;
    const v34 = source === null;
    const v35 = v33 || v34;
    if (v35) {
        return target;
    }
    let key;
    const v36 = Object.keys(source);
    for (key of v36) {
        const v37 = source[key];
        const v38 = v37 === undefined;
        if (v38) {
            continue;
        }
        const v39 = target[key];
        const v40 = source[key];
        const v41 = isObject(v40);
        const v42 = v39 && v41;
        if (v42) {
            const v43 = target[key];
            const v44 = source[key];
            const v45 = deepMerge(v43, v44);
            v45;
        } else {
            const v46 = source[key];
            target[key] = v46;
        }
    }
    return target;
};
module.exports = deepMerge;
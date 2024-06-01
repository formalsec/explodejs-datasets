'use strict';
const mixinDeep = function (target, ...rest) {
    let obj;
    for (obj of rest) {
        const v19 = isObject(obj);
        if (v19) {
            let key;
            for (key in obj) {
                const v20 = key !== '__proto__';
                if (v20) {
                    const v21 = obj[key];
                    const v22 = mixin(target, v21, key);
                    v22;
                }
            }
        }
    }
    return target;
};
const mixin = function (target, val, key) {
    let obj = target[key];
    const v23 = isObject(val);
    const v24 = isObject(obj);
    const v25 = v23 && v24;
    if (v25) {
        const v26 = mixinDeep(obj, val);
        v26;
    } else {
        target[key] = val;
    }
};
const isObject = function (val) {
    const v27 = typeof val;
    const v28 = v27 === 'function';
    const v29 = typeof val;
    const v30 = v29 === 'object';
    const v31 = val !== null;
    const v32 = v30 && v31;
    const v33 = Array.isArray(val);
    const v34 = !v33;
    const v35 = v32 && v34;
    const v36 = v28 || v35;
    return v36;
};
module.exports = mixinDeep;
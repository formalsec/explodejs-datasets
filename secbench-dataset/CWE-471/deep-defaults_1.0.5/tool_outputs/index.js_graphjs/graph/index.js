'use strict';
const isUndefined = function (value) {
    const v22 = value === undefined;
    return v22;
};
const isObject = function (val) {
    const v23 = val !== null;
    const v24 = typeof val;
    const v25 = v24 === 'object';
    const v26 = v23 && v25;
    const v27 = Array.isArray(val);
    const v28 = !v27;
    const v29 = v26 && v28;
    return v29;
};
const each = function (obj, iteratee) {
    let key;
    for (key in obj) {
        const v30 = obj[key];
        const v31 = iteratee(v30, key);
        v31;
    }
};
const _deepDefaults = function (dest, src) {
    const v32 = isUndefined(dest);
    const v33 = isObject(dest);
    const v34 = !v33;
    const v35 = v32 || v34;
    if (v35) {
        return dest;
    }
    const v41 = function (v, k) {
        const v36 = dest[k];
        const v37 = isUndefined(v36);
        if (v37) {
            dest[k] = v;
        } else {
            const v38 = isObject(v);
            if (v38) {
                const v39 = dest[k];
                const v40 = _deepDefaults(v39, v);
                v40;
            }
        }
    };
    const v42 = each(src, v41);
    v42;
    return dest;
};
module.exports = _deepDefaults;
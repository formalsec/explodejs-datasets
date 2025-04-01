'use strict';
const isObject = function (val) {
    const v19 = val != null;
    const v20 = typeof val;
    const v21 = v20 === 'object';
    const v22 = v19 && v21;
    const v23 = Array.isArray(val);
    const v24 = v23 === false;
    const v25 = v22 && v24;
    return v25;
};
const forIn = function (obj, fn, thisArg) {
    let key;
    for (key in obj) {
        const v26 = obj[key];
        const v27 = fn.call(thisArg, v26, key, obj);
        const v28 = v27 === false;
        if (v28) {
            break;
        }
    }
};
const mixinDeep = function (target, objects) {
    var len = arguments.length;
    var i = 0;
    const v29 = ++i;
    let v30 = v29 < len;
    while (v30) {
        var obj = arguments[i];
        const v31 = isObject(obj);
        if (v31) {
            const v32 = forIn(obj, copy, target);
            v32;
        }
        v30 = v29 < len;
    }
    return target;
};
const copy = function (val, key) {
    var obj = this[key];
    const v33 = isObject(val);
    const v34 = isObject(obj);
    const v35 = v33 && v34;
    if (v35) {
        const v36 = mixinDeep(obj, val);
        v36;
    } else {
        this[key] = val;
    }
};
module.exports = mixinDeep;
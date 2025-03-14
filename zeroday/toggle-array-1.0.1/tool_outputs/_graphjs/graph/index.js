'use strict';
var isObject = require('isobject');
const toggle = function (arr, prop, idx) {
    var ele = arr[idx];
    let init;
    const v20 = isObject(ele);
    const v21 = ele[prop];
    if (v20) {
        init = v21;
    } else {
        init = false;
    }
    var len = arr.length;
    const v22 = -1;
    var i = v22;
    const v23 = ++i;
    let v24 = v23 < len;
    while (v24) {
        ele = arr[i];
        const v25 = isObject(ele);
        const v26 = !v25;
        if (v26) {
            continue;
        }
        const v27 = i !== idx;
        if (v27) {
            const v28 = !init;
            const v29 = !v28;
            ele[prop] = v29;
        } else {
            const v30 = !init;
            ele[prop] = v30;
        }
        v24 = v23 < len;
    }
    return arr;
};
const v32 = function (arr, prop, i) {
    const v31 = initial(arr, prop, i, false);
    return v31;
};
toggle.enable = v32;
const v34 = function (arr, prop, i) {
    const v33 = initial(arr, prop, i, true);
    return v33;
};
toggle.disable = v34;
const initial = function (arr, prop, i, init) {
    const v35 = arr[i];
    const v36 = isObject(v35);
    if (v36) {
        const v37 = arr[i];
        v37[prop] = init;
    }
    const v38 = toggle(arr, prop, i);
    return v38;
};
module.exports = toggle;
'use strict';
var setPath = function (obj, path, value) {
    var arr;
    var key;
    const v16 = !obj;
    const v17 = typeof obj;
    const v18 = v17 !== 'object';
    const v19 = v16 || v18;
    if (v19) {
        obj = {};
    }
    const v20 = typeof path;
    const v21 = v20 === 'string';
    if (v21) {
        path = path.split('.');
    }
    const v22 = Array.isArray(path);
    const v23 = path.length;
    const v24 = v23 > 0;
    const v25 = v22 && v24;
    if (v25) {
        arr = path;
        key = arr[0];
        const v26 = arr.length;
        const v27 = v26 > 1;
        if (v27) {
            const v28 = arr.shift();
            v28;
            const v29 = obj[key];
            const v30 = setPath(v29, arr, value, delimiter);
            obj[key] = v30;
        } else {
            obj[key] = value;
        }
    }
    return obj;
};
exports = setPath;
module.exports = exports;
'use strict';
var setPath = function (obj, path, value, delimiter) {
    var arr;
    var key;
    const v17 = !obj;
    const v18 = typeof obj;
    const v19 = v18 !== 'object';
    const v20 = v17 || v19;
    if (v20) {
        obj = {};
    }
    const v21 = typeof path;
    const v22 = v21 === 'string';
    if (v22) {
        const v23 = delimiter || '.';
        path = path.split(v23);
    }
    const v24 = Array.isArray(path);
    const v25 = path.length;
    const v26 = v25 > 0;
    const v27 = v24 && v26;
    if (v27) {
        arr = path;
        key = arr[0];
        const v28 = arr.length;
        const v29 = v28 > 1;
        if (v29) {
            const v30 = arr.shift();
            v30;
            const v31 = obj[key];
            const v32 = setPath(v31, arr, value, delimiter);
            obj[key] = v32;
        } else {
            obj[key] = value;
        }
    }
    return obj;
};
exports = setPath;
module.exports = exports;
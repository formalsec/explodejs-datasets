'use strict';
var util = {};
const setProperty = function (dst, path, value) {
    const setProp = function (dst, path, value) {
        var part = path.shift();
        const v15 = path.length;
        const v16 = v15 > 0;
        if (v16) {
            const v17 = dst[part];
            const v18 = {};
            const v19 = v17 || v18;
            const v20 = setProp(v19, path, value);
            dst[part] = v20;
        } else {
            var prevValue = dst[part];
            if (prevValue) {
                const v21 = [];
                const v22 = v21.concat(prevValue);
                value = v22.concat(value);
            }
            dst[part] = value;
        }
        return dst;
    };
    const v23 = typeof dst;
    const v24 = v23 !== 'object';
    if (v24) {
        const v25 = TypeError('dst must be an object');
        throw v25;
    }
    const v26 = !path;
    if (v26) {
        const v27 = TypeError('path must be specified');
        throw v27;
    }
    path = path.split('.');
    const v28 = setProp(dst, path, value);
    return v28;
};
util.setProperty = setProperty;
module.exports = util;
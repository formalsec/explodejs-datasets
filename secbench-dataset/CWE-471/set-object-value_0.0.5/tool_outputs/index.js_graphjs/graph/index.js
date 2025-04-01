'use strict';
var replaceValue = function replaceValue(obj, arrKey, val, isAppend) {
    var last = arrKey.pop();
    const v22 = function (k) {
        const v20 = obj[k];
        const v21 = {};
        obj[k] = v20 || v21;
        obj = obj[k];
    };
    const v23 = arrKey.forEach(v22);
    v23;
    const v24 = obj[last];
    const v25 = !v24;
    const v26 = obj[last];
    const v27 = v26.push;
    const v28 = !v27;
    const v29 = v25 || v28;
    const v30 = isAppend && v29;
    if (v30) {
        const v31 = obj[last];
        const v32 = !v31;
        if (v32) {
            obj[last] = [val];
        } else {
            const v33 = obj[last];
            obj[last] = [
                v33,
                val
            ];
        }
    } else {
        const v34 = obj[last];
        const v35 = v34.push;
        const v36 = isAppend && v35;
        if (v36) {
            const v37 = obj[last];
            const v38 = v37.push(val);
            v38;
        } else {
            obj[last] = val;
        }
    }
};
module.exports = replaceValue;
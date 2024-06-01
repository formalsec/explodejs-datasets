'use strict';
const v24 = { value: true };
const v25 = Object.defineProperty(exports, '__esModule', v24);
v25;
const v26 = void 0;
exports['default'] = v26;
var replaceValue = function replaceValue(obj, arrKey, val, isAppend) {
    var last = arrKey.pop();
    const v29 = function (k) {
        const v27 = obj[k];
        const v28 = {};
        obj[k] = v27 || v28;
        obj = obj[k];
    };
    const v30 = arrKey.forEach(v29);
    v30;
    const v31 = obj[last];
    const v32 = !v31;
    const v33 = obj[last];
    const v34 = v33.push;
    const v35 = !v34;
    const v36 = v32 || v35;
    const v37 = isAppend && v36;
    if (v37) {
        const v38 = obj[last];
        const v39 = !v38;
        if (v39) {
            obj[last] = [val];
        } else {
            const v40 = obj[last];
            obj[last] = [
                v40,
                val
            ];
        }
    } else {
        const v41 = obj[last];
        const v42 = v41.push;
        const v43 = isAppend && v42;
        if (v43) {
            const v44 = obj[last];
            const v45 = v44.push(val);
            v45;
        } else {
            obj[last] = val;
        }
    }
};
var _default = replaceValue;
exports['default'] = _default;
const v46 = exports.default;
module.exports = v46;
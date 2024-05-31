'use strict';
const v16 = require('lazy-cache');
var lazy = v16(require);
const v17 = lazy('is-extendable', 'isObject');
v17;
const v18 = lazy('for-own', 'forOwn');
v18;
const defaultsDeep = function (target, objects) {
    const v19 = {};
    target = target || v19;
    const copy = function (target, current) {
        const v26 = function (value, key) {
            const v20 = key === '__proto__';
            if (v20) {
                return;
            }
            var val = target[key];
            const v21 = val == null;
            if (v21) {
                target[key] = value;
            } else {
                const v22 = lazy.isObject(val);
                const v23 = lazy.isObject(value);
                const v24 = v22 && v23;
                if (v24) {
                    const v25 = defaultsDeep(val, value);
                    v25;
                }
            }
        };
        const v27 = lazy.forOwn(current, v26);
        v27;
    };
    var len = arguments.length;
    var i = 0;
    let v28 = i < len;
    while (v28) {
        const v29 = i++;
        var obj = arguments[v29];
        if (obj) {
            const v30 = copy(target, obj);
            v30;
        }
        v28 = i < len;
    }
    return target;
};
;
module.exports = defaultsDeep;
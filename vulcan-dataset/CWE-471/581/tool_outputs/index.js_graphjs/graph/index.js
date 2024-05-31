'use strict';
const v15 = require('lazy-cache');
var lazy = v15(require);
const v16 = lazy('is-extendable', 'isObject');
v16;
const v17 = lazy('for-own', 'forOwn');
v17;
const defaultsDeep = function (target, objects) {
    const v18 = {};
    target = target || v18;
    const copy = function (target, current) {
        const v24 = function (value, key) {
            var val = target[key];
            const v19 = val == null;
            if (v19) {
                target[key] = value;
            } else {
                const v20 = lazy.isObject(val);
                const v21 = lazy.isObject(value);
                const v22 = v20 && v21;
                if (v22) {
                    const v23 = defaultsDeep(val, value);
                    v23;
                }
            }
        };
        const v25 = lazy.forOwn(current, v24);
        v25;
    };
    var len = arguments.length;
    var i = 0;
    let v26 = i < len;
    while (v26) {
        const v27 = i++;
        var obj = arguments[v27];
        if (obj) {
            const v28 = copy(target, obj);
            v28;
        }
        v26 = i < len;
    }
    return target;
};
;
module.exports = defaultsDeep;
'use strict';
var isObject = require('is-plain-object');
var forOwn = require('for-own');
const defaultsDeep = function (o, objects) {
    const v16 = !o;
    const v17 = !objects;
    const v18 = v16 || v17;
    if (v18) {
        const v19 = {};
        const v20 = o || v19;
        return v20;
    }
    const copy = function (o, current) {
        const v26 = function (value, key) {
            var val = o[key];
            const v21 = val == null;
            if (v21) {
                o[key] = value;
            } else {
                const v22 = isObject(val);
                const v23 = isObject(value);
                const v24 = v22 && v23;
                if (v24) {
                    const v25 = defaultsDeep(val, value);
                    v25;
                }
            }
        };
        const v27 = forOwn(current, v26);
        v27;
    };
    var len = arguments.length;
    var i = 0;
    let v28 = i < len;
    while (v28) {
        const v29 = i++;
        var obj = arguments[v29];
        if (obj) {
            const v30 = copy(o, obj);
            v30;
        }
        v28 = i < len;
    }
    return o;
};
module.exports = defaultsDeep;
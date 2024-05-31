'use strict';
var isExtendable = require('is-extendable');
var forIn = require('for-in');
const mixinDeep = function (target, objects) {
    var len = arguments.length;
    var i = 0;
    const v13 = ++i;
    let v14 = v13 < len;
    while (v14) {
        var obj = arguments[i];
        const v15 = isObject(obj);
        if (v15) {
            const v16 = forIn(obj, copy, target);
            v16;
        }
        v14 = v13 < len;
    }
    return target;
};
const copy = function (val, key) {
    var obj = this[key];
    const v17 = isObject(val);
    const v18 = isObject(obj);
    const v19 = v17 && v18;
    if (v19) {
        const v20 = mixinDeep(obj, val);
        v20;
    } else {
        this[key] = val;
    }
};
const isObject = function (val) {
    const v21 = isExtendable(val);
    const v22 = Array.isArray(val);
    const v23 = !v22;
    const v24 = v21 && v23;
    return v24;
};
module.exports = mixinDeep;
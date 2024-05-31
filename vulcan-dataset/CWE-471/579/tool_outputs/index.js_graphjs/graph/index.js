'use strict';
var isPrimitive = require('is-primitive');
var assignSymbols = require('assign-symbols');
var typeOf = require('kind-of');
const assign = function (target) {
    const v29 = {};
    target = target || v29;
    var len = arguments.length;
    var i = 0;
    const v30 = len === 1;
    if (v30) {
        return target;
    }
    const v31 = ++i;
    let v32 = v31 < len;
    while (v32) {
        var val = arguments[i];
        const v33 = isPrimitive(target);
        if (v33) {
            target = val;
        }
        const v34 = isObject(val);
        if (v34) {
            const v35 = extend(target, val);
            v35;
        }
        v32 = v31 < len;
    }
    return target;
};
const extend = function (target, obj) {
    const v36 = assignSymbols(target, obj);
    v36;
    let key;
    for (key in obj) {
        const v37 = hasOwn(obj, key);
        if (v37) {
            var val = obj[key];
            const v38 = isObject(val);
            if (v38) {
                const v39 = target[key];
                const v40 = typeOf(v39);
                const v41 = v40 === 'undefined';
                const v42 = typeOf(val);
                const v43 = v42 === 'function';
                const v44 = v41 && v43;
                if (v44) {
                    target[key] = val;
                }
                const v45 = target[key];
                const v46 = {};
                const v47 = v45 || v46;
                const v48 = assign(v47, val);
                target[key] = v48;
            } else {
                target[key] = val;
            }
        }
    }
    return target;
};
const isObject = function (obj) {
    const v49 = typeOf(obj);
    const v50 = v49 === 'object';
    const v51 = typeOf(obj);
    const v52 = v51 === 'function';
    const v53 = v50 || v52;
    return v53;
};
const hasOwn = function (obj, key) {
    const v54 = Object.prototype;
    const v55 = v54.hasOwnProperty;
    const v56 = v55.call(obj, key);
    return v56;
};
module.exports = assign;
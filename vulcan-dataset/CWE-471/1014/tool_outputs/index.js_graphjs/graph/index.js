'use strict';
var isPrimitive = require('is-primitive');
var assignSymbols = require('assign-symbols');
var typeOf = require('kind-of');
const assign = function (target) {
    const v36 = {};
    target = target || v36;
    var len = arguments.length;
    var i = 0;
    const v37 = len === 1;
    if (v37) {
        return target;
    }
    const v38 = ++i;
    let v39 = v38 < len;
    while (v39) {
        var val = arguments[i];
        const v40 = isPrimitive(target);
        if (v40) {
            target = val;
        }
        const v41 = isObject(val);
        if (v41) {
            const v42 = extend(target, val);
            v42;
        }
        v39 = v38 < len;
    }
    return target;
};
const extend = function (target, obj) {
    const v43 = assignSymbols(target, obj);
    v43;
    let key;
    for (key in obj) {
        const v44 = isValidKey(key);
        const v45 = hasOwn(obj, key);
        const v46 = v44 && v45;
        if (v46) {
            var val = obj[key];
            const v47 = isObject(val);
            if (v47) {
                const v48 = target[key];
                const v49 = typeOf(v48);
                const v50 = v49 === 'undefined';
                const v51 = typeOf(val);
                const v52 = v51 === 'function';
                const v53 = v50 && v52;
                if (v53) {
                    target[key] = val;
                }
                const v54 = target[key];
                const v55 = {};
                const v56 = v54 || v55;
                const v57 = assign(v56, val);
                target[key] = v57;
            } else {
                target[key] = val;
            }
        }
    }
    return target;
};
const isObject = function (obj) {
    const v58 = typeOf(obj);
    const v59 = v58 === 'object';
    const v60 = typeOf(obj);
    const v61 = v60 === 'function';
    const v62 = v59 || v61;
    return v62;
};
const hasOwn = function (obj, key) {
    const v63 = Object.prototype;
    const v64 = v63.hasOwnProperty;
    const v65 = v64.call(obj, key);
    return v65;
};
const isValidKey = function (key) {
    const v66 = key !== '__proto__';
    const v67 = key !== 'constructor';
    const v68 = v66 && v67;
    const v69 = key !== 'prototype';
    const v70 = v68 && v69;
    return v70;
};
module.exports = assign;
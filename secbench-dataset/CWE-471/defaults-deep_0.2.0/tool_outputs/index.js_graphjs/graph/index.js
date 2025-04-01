'use strict';
const isObject = function (val) {
    const v33 = val !== null;
    const v34 = typeof val;
    const v35 = v34 === 'object';
    const v36 = typeof val;
    const v37 = v36 === 'function';
    const v38 = v35 || v37;
    const v39 = v33 && v38;
    return v39;
};
const forIn = function (obj, fn, thisArg) {
    let key;
    for (key in obj) {
        const v40 = obj[key];
        const v41 = fn.call(thisArg, v40, key, obj);
        const v42 = v41 === false;
        if (v42) {
            break;
        }
    }
};
const v43 = Object.prototype;
var hasOwn = v43.hasOwnProperty;
const forOwn = function (obj, fn, thisArg) {
    const v47 = function (val, key) {
        const v44 = hasOwn.call(obj, key);
        if (v44) {
            const v45 = obj[key];
            const v46 = fn.call(thisArg, v45, key, obj);
            return v46;
        }
    };
    const v48 = forIn(obj, v47);
    v48;
};
const defaultsDeep = function (o, objects) {
    const v49 = !o;
    const v50 = !objects;
    const v51 = v49 || v50;
    if (v51) {
        const v52 = {};
        const v53 = o || v52;
        return v53;
    }
    const copy = function (o, current) {
        const v59 = function (value, key) {
            var val = o[key];
            const v54 = val == null;
            if (v54) {
                o[key] = value;
            }
            const v55 = isObject(val);
            const v56 = isObject(value);
            const v57 = v55 && v56;
            if (v57) {
                const v58 = defaultsDeep(val, value);
                v58;
            }
        };
        const v60 = forOwn(current, v59);
        v60;
    };
    var len = arguments.length;
    var i = 0;
    let v61 = i < len;
    while (v61) {
        const v62 = i++;
        var obj = arguments[v62];
        const v63 = console.log(obj);
        v63;
        if (obj) {
            const v64 = copy(o, obj);
            v64;
        }
        v61 = i < len;
    }
    return o;
};
module.exports = defaultsDeep;
'use strict';
const isObject = require('./isObject');
const isFunction = require('./isFunction');
const isPlainObject = function (o) {
    const v31 = isObject(o);
    const v32 = o.constructor;
    const v33 = v32 === Object;
    const v34 = v31 && v33;
    return v34;
};
const isArray = function (a) {
    const v35 = Array.isArray(a);
    return v35;
};
const extend = function (target, ...rest) {
    const v36 = typeof target;
    const v37 = v36 !== 'object';
    const v38 = isFunction(target);
    const v39 = !v38;
    const v40 = v37 && v39;
    if (v40) {
        target = {};
    }
    let i;
    const v41 = rest[0];
    const v42 = isObject(v41);
    if (v42) {
        i = 0;
    } else {
        i = 1;
    }
    const v43 = rest[0];
    let deep = v43 === true;
    let l = rest.length;
    let v44 = i < l;
    while (v44) {
        let opts = rest[i];
        let copyIsArray = false;
        let clone = null;
        const v46 = opts != null;
        if (v46) {
            let name;
            for (name in opts) {
                let src = target[name];
                let copy = opts[name];
                const v47 = target === copy;
                if (v47) {
                    continue;
                }
                const v48 = deep && copy;
                const v49 = isPlainObject(copy);
                const v50 = v49 || (copyIsArray = isArray(copy));
                const v51 = v48 && v50;
                if (v51) {
                    if (copyIsArray) {
                        copyIsArray = false;
                        const v52 = isArray(src);
                        const v53 = src && v52;
                        const v54 = [];
                        if (v53) {
                            clone = src;
                        } else {
                            clone = v54;
                        }
                    } else {
                        const v55 = isPlainObject(src);
                        const v56 = src && v55;
                        const v57 = {};
                        if (v56) {
                            clone = src;
                        } else {
                            clone = v57;
                        }
                    }
                    const v58 = extend(clone, deep, copy);
                    target[name] = v58;
                } else {
                    const v59 = typeof copy;
                    const v60 = v59 !== 'undefined';
                    if (v60) {
                        target[name] = copy;
                    }
                }
            }
        }
        const v45 = i++;
        v44 = i < l;
    }
    return target;
};
module.exports = extend;
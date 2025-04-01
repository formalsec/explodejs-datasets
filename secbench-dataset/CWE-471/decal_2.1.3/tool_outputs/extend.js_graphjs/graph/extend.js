'use strict';
let objectTypes = {};
objectTypes['function'] = true;
objectTypes['object'] = true;
objectTypes['unknown'] = true;
const isObject = function (obj) {
    const v38 = typeof obj;
    const v39 = objectTypes[v38];
    const v40 = !v39;
    const v41 = !v40;
    let v42;
    if (obj) {
        v42 = v41;
    } else {
        v42 = false;
    }
    return v42;
};
const isFunction = function (obj) {
    const v43 = typeof obj;
    const v44 = v43 === 'function';
    return v44;
};
const isPlainObject = function (o) {
    const v45 = isObject(o);
    const v46 = o.constructor;
    const v47 = v46 === Object;
    const v48 = v45 && v47;
    return v48;
};
const isArray = function (a) {
    const v49 = Array.isArray(a);
    return v49;
};
const extend = function (target, ...rest) {
    const v50 = typeof target;
    const v51 = v50 !== 'object';
    const v52 = isFunction(target);
    const v53 = !v52;
    const v54 = v51 && v53;
    if (v54) {
        target = {};
    }
    let i;
    const v55 = rest[0];
    const v56 = isObject(v55);
    if (v56) {
        i = 0;
    } else {
        i = 1;
    }
    const v57 = rest[0];
    let deep = isObject(v57);
    let l = rest.length;
    let v58 = i < l;
    while (v58) {
        let opts = rest[i];
        let copyIsArray = false;
        let clone = null;
        const v60 = opts != null;
        if (v60) {
            let name;
            for (name in opts) {
                let src = target[name];
                let copy = opts[name];
                const v61 = target === copy;
                if (v61) {
                    continue;
                }
                const v62 = deep && copy;
                const v63 = isPlainObject(copy);
                const v64 = v63 || (copyIsArray = isArray(copy));
                const v65 = v62 && v64;
                if (v65) {
                    if (copyIsArray) {
                        copyIsArray = false;
                        const v66 = isArray(src);
                        const v67 = src && v66;
                        const v68 = [];
                        if (v67) {
                            clone = src;
                        } else {
                            clone = v68;
                        }
                    } else {
                        const v69 = isPlainObject(src);
                        const v70 = src && v69;
                        const v71 = {};
                        if (v70) {
                            clone = src;
                        } else {
                            clone = v71;
                        }
                    }
                    const v72 = extend(clone, deep, copy);
                    target[name] = v72;
                } else {
                    const v73 = typeof copy;
                    const v74 = v73 !== 'undefined';
                    if (v74) {
                        target[name] = copy;
                    }
                }
            }
        }
        const v59 = i++;
        v58 = i < l;
    }
    return target;
};
module.exports = extend;
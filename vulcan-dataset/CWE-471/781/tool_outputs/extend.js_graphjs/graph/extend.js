const v49 = Object.prototype;
var hasOwn = v49.hasOwnProperty;
const v50 = Object.prototype;
var toString = v50.toString;
var undefined;
var isPlainObject = function isPlainObject(obj) {
    'use strict';
    const v51 = !obj;
    const v52 = toString.call(obj);
    const v53 = v52 !== '[object Object]';
    const v54 = v51 || v53;
    if (v54) {
        return false;
    }
    var has_own_constructor = hasOwn.call(obj, 'constructor');
    const v55 = obj.constructor;
    const v56 = obj.constructor;
    const v57 = v56.prototype;
    const v58 = v55 && v57;
    const v59 = obj.constructor;
    const v60 = v59.prototype;
    const v61 = hasOwn.call(v60, 'isPrototypeOf');
    var has_is_property_of_method = v58 && v61;
    const v62 = obj.constructor;
    const v63 = !has_own_constructor;
    const v64 = v62 && v63;
    const v65 = !has_is_property_of_method;
    const v66 = v64 && v65;
    if (v66) {
        return false;
    }
    var key;
    for (key in obj) {
    }
    const v67 = key === undefined;
    const v68 = hasOwn.call(obj, key);
    const v69 = v67 || v68;
    return v69;
};
const extend = function () {
    'use strict';
    var options;
    var name;
    var src;
    var copy;
    var copyIsArray;
    var clone;
    var target = arguments[0];
    var i = 1;
    var length = arguments.length;
    var deep = false;
    const v70 = typeof target;
    const v71 = v70 === 'boolean';
    if (v71) {
        deep = target;
        const v72 = arguments[1];
        const v73 = {};
        target = v72 || v73;
        i = 2;
    } else {
        const v74 = typeof target;
        const v75 = v74 !== 'object';
        const v76 = typeof target;
        const v77 = v76 !== 'function';
        const v78 = v75 && v77;
        const v79 = target == null;
        const v80 = v78 || v79;
        if (v80) {
            target = {};
        }
    }
    let v81 = i < length;
    while (v81) {
        options = arguments[i];
        const v83 = options != null;
        if (v83) {
            for (name in options) {
                src = target[name];
                copy = options[name];
                const v84 = target === copy;
                if (v84) {
                    continue;
                }
                const v85 = deep && copy;
                const v86 = isPlainObject(copy);
                const v87 = v86 || (copyIsArray = Array.isArray(copy));
                const v88 = v85 && v87;
                if (v88) {
                    if (copyIsArray) {
                        copyIsArray = false;
                        const v89 = Array.isArray(src);
                        const v90 = src && v89;
                        const v91 = [];
                        if (v90) {
                            clone = src;
                        } else {
                            clone = v91;
                        }
                    } else {
                        const v92 = isPlainObject(src);
                        const v93 = src && v92;
                        const v94 = {};
                        if (v93) {
                            clone = src;
                        } else {
                            clone = v94;
                        }
                    }
                    const v95 = extend(deep, clone, copy);
                    target[name] = v95;
                } else {
                    const v96 = copy !== undefined;
                    if (v96) {
                        target[name] = copy;
                    }
                }
            }
        }
        const v82 = ++i;
        v81 = i < length;
    }
    return target;
};
module.exports = extend;
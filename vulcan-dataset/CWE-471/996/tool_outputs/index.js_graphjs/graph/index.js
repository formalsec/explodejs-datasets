'use strict';
const v57 = Object.prototype;
var hasOwn = v57.hasOwnProperty;
const v58 = Object.prototype;
var toStr = v58.toString;
var isArray = function isArray(arr) {
    const v59 = Array.isArray;
    const v60 = typeof v59;
    const v61 = v60 === 'function';
    if (v61) {
        const v62 = Array.isArray(arr);
        return v62;
    }
    const v63 = toStr.call(arr);
    const v64 = v63 === '[object Array]';
    return v64;
};
var isPlainObject = function isPlainObject(obj) {
    const v65 = !obj;
    const v66 = toStr.call(obj);
    const v67 = v66 !== '[object Object]';
    const v68 = v65 || v67;
    if (v68) {
        return false;
    }
    var hasOwnConstructor = hasOwn.call(obj, 'constructor');
    const v69 = obj.constructor;
    const v70 = obj.constructor;
    const v71 = v70.prototype;
    const v72 = v69 && v71;
    const v73 = obj.constructor;
    const v74 = v73.prototype;
    const v75 = hasOwn.call(v74, 'isPrototypeOf');
    var hasIsPrototypeOf = v72 && v75;
    const v76 = obj.constructor;
    const v77 = !hasOwnConstructor;
    const v78 = v76 && v77;
    const v79 = !hasIsPrototypeOf;
    const v80 = v78 && v79;
    if (v80) {
        return false;
    }
    var key;
    for (key in obj) {
    }
    const v81 = typeof key;
    const v82 = v81 === 'undefined';
    const v83 = hasOwn.call(obj, key);
    const v84 = v82 || v83;
    return v84;
};
const extend = function () {
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
    const v85 = typeof target;
    const v86 = v85 === 'boolean';
    if (v86) {
        deep = target;
        const v87 = arguments[1];
        const v88 = {};
        target = v87 || v88;
        i = 2;
    }
    const v89 = target == null;
    const v90 = typeof target;
    const v91 = v90 !== 'object';
    const v92 = typeof target;
    const v93 = v92 !== 'function';
    const v94 = v91 && v93;
    const v95 = v89 || v94;
    if (v95) {
        target = {};
    }
    let v96 = i < length;
    while (v96) {
        options = arguments[i];
        const v98 = options != null;
        if (v98) {
            for (name in options) {
                src = target[name];
                copy = options[name];
                const v99 = target !== copy;
                if (v99) {
                    const v100 = deep && copy;
                    const v101 = isPlainObject(copy);
                    const v102 = v101 || (copyIsArray = isArray(copy));
                    const v103 = v100 && v102;
                    if (v103) {
                        if (copyIsArray) {
                            copyIsArray = false;
                            const v104 = isArray(src);
                            const v105 = src && v104;
                            const v106 = [];
                            if (v105) {
                                clone = src;
                            } else {
                                clone = v106;
                            }
                        } else {
                            const v107 = isPlainObject(src);
                            const v108 = src && v107;
                            const v109 = {};
                            if (v108) {
                                clone = src;
                            } else {
                                clone = v109;
                            }
                        }
                        const v110 = extend(deep, clone, copy);
                        target[name] = v110;
                    } else {
                        const v111 = typeof copy;
                        const v112 = v111 !== 'undefined';
                        if (v112) {
                            target[name] = copy;
                        }
                    }
                }
            }
        }
        const v97 = ++i;
        v96 = i < length;
    }
    return target;
};
module.exports = extend;
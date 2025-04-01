var fs = require('fs');
const is_plain_obj = function (obj) {
    const v49 = !obj;
    const v50 = {};
    const v51 = v50.toString;
    const v52 = v51.call(obj);
    const v53 = v52 !== '[object Object]';
    const v54 = v49 || v53;
    const v55 = obj.nodeType;
    const v56 = v54 || v55;
    const v57 = obj.setInterval;
    const v58 = v56 || v57;
    if (v58) {
        return false;
    }
    const v59 = {};
    var has_own = v59.hasOwnProperty;
    var has_own_constructor = has_own.call(obj, 'constructor');
    const v60 = obj.constructor;
    const v61 = v60.prototype;
    var has_is_property_of_method = has_own.call(v61, 'isPrototypeOf');
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
    const v68 = has_own.call(obj, key);
    const v69 = v67 || v68;
    return v69;
};
;
const extend = function () {
    const v70 = arguments[0];
    const v71 = {};
    var target = v70 || v71;
    var i = 1;
    var length = arguments.length;
    var deep = false;
    var options;
    var name;
    var src;
    var copy;
    var copy_is_array;
    var clone;
    const v72 = typeof target;
    const v73 = v72 === 'boolean';
    if (v73) {
        deep = target;
        const v74 = arguments[1];
        const v75 = {};
        target = v74 || v75;
        i = 2;
    }
    const v76 = typeof target;
    const v77 = v76 !== 'object';
    const v78 = typeof target;
    const v79 = v78 !== 'function';
    const v80 = v77 && v79;
    if (v80) {
        target = {};
    }
    let v81 = i < length;
    while (v81) {
        const v83 = (options = arguments[i]) != null;
        if (v83) {
            for (name in options) {
                src = target[name];
                copy = options[name];
                const v84 = target === copy;
                if (v84) {
                    continue;
                }
                const v85 = deep && copy;
                const v86 = is_plain_obj(copy);
                const v87 = v86 || (copy_is_array = Array.isArray(copy));
                const v88 = v85 && v87;
                if (v88) {
                    if (copy_is_array) {
                        copy_is_array = false;
                        const v89 = Array.isArray(src);
                        const v90 = src && v89;
                        const v91 = [];
                        if (v90) {
                            clone = src;
                        } else {
                            clone = v91;
                        }
                    } else {
                        const v92 = is_plain_obj(src);
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
        const v82 = i++;
        v81 = i < length;
    }
    return target;
};
;
module.exports = extend;
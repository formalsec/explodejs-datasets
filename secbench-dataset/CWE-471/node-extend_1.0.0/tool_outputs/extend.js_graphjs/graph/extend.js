var fs = require('fs');
const is_plain_obj = function (obj) {
    const v53 = !obj;
    const v54 = {};
    const v55 = v54.toString;
    const v56 = v55.call(obj);
    const v57 = v56 !== '[object Object]';
    const v58 = v53 || v57;
    const v59 = obj.nodeType;
    const v60 = v58 || v59;
    const v61 = obj.setInterval;
    const v62 = v60 || v61;
    if (v62) {
        return false;
    }
    const v63 = {};
    var has_own = v63.hasOwnProperty;
    var has_own_constructor = has_own.call(obj, 'constructor');
    const v64 = obj.constructor;
    const v65 = v64.prototype;
    var has_is_property_of_method = has_own.call(v65, 'isPrototypeOf');
    const v66 = obj.constructor;
    const v67 = !has_own_constructor;
    const v68 = v66 && v67;
    const v69 = !has_is_property_of_method;
    const v70 = v68 && v69;
    if (v70) {
        return false;
    }
    var key;
    for (key in obj) {
    }
    const v71 = key === undefined;
    const v72 = has_own.call(obj, key);
    const v73 = v71 || v72;
    return v73;
};
;
const extend = function () {
    const v74 = arguments[0];
    const v75 = {};
    var target = v74 || v75;
    var i = 1;
    var length = arguments.length;
    var deep = false;
    var options;
    var name;
    var src;
    var copy;
    var copy_is_array;
    var clone;
    const v76 = typeof target;
    const v77 = v76 === 'boolean';
    if (v77) {
        deep = target;
        const v78 = arguments[1];
        const v79 = {};
        target = v78 || v79;
        i = 2;
    }
    const v80 = typeof target;
    const v81 = v80 !== 'object';
    const v82 = typeof target;
    const v83 = v82 !== 'function';
    const v84 = v81 && v83;
    if (v84) {
        target = {};
    }
    let v85 = i < length;
    while (v85) {
        const v87 = (options = arguments[i]) != null;
        if (v87) {
            for (name in options) {
                src = target[name];
                copy = options[name];
                const v88 = target === copy;
                if (v88) {
                    continue;
                }
                const v89 = deep && copy;
                const v90 = is_plain_obj(copy);
                const v91 = v90 || (copy_is_array = Array.isArray(copy));
                const v92 = v89 && v91;
                if (v92) {
                    if (copy_is_array) {
                        copy_is_array = false;
                        const v93 = Array.isArray(src);
                        const v94 = src && v93;
                        const v95 = [];
                        if (v94) {
                            clone = src;
                        } else {
                            clone = v95;
                        }
                    } else {
                        const v96 = is_plain_obj(src);
                        const v97 = src && v96;
                        const v98 = {};
                        if (v97) {
                            clone = src;
                        } else {
                            clone = v98;
                        }
                    }
                    const v99 = extend(deep, clone, copy);
                    target[name] = v99;
                } else {
                    const v100 = copy !== undefined;
                    if (v100) {
                        target[name] = copy;
                    }
                }
            }
        }
        const v86 = i++;
        v85 = i < length;
    }
    return target;
};
;
const v101 = __dirname + '/../package.json';
const v102 = fs.readFileSync(v101, 'utf8');
const v103 = JSON.parse(v102);
const v104 = v103.version;
extend.version = v104;
module.exports = extend;
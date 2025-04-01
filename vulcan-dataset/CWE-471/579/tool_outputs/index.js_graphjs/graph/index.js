'use strict';
const isPrimitive = function (value) {
    const v58 = value == null;
    const v59 = typeof value;
    const v60 = v59 !== 'function';
    const v61 = typeof value;
    const v62 = v61 !== 'object';
    const v63 = v60 && v62;
    const v64 = v58 || v63;
    return v64;
};
const assignSymbols = function (receiver, objects) {
    const v65 = receiver === null;
    const v66 = typeof receiver;
    const v67 = v66 === 'undefined';
    const v68 = v65 || v67;
    if (v68) {
        const v69 = new TypeError('expected first argument to be an object.');
        throw v69;
    }
    const v70 = typeof objects;
    const v71 = v70 === 'undefined';
    const v72 = typeof Symbol;
    const v73 = v72 === 'undefined';
    const v74 = v71 || v73;
    if (v74) {
        return receiver;
    }
    const v75 = Object.getOwnPropertySymbols;
    const v76 = typeof v75;
    const v77 = v76 !== 'function';
    if (v77) {
        return receiver;
    }
    const v78 = Object.prototype;
    var isEnumerable = v78.propertyIsEnumerable;
    var target = Object(receiver);
    var len = arguments.length;
    var i = 0;
    const v79 = ++i;
    let v80 = v79 < len;
    while (v80) {
        const v81 = arguments[i];
        var provider = Object(v81);
        var names = Object.getOwnPropertySymbols(provider);
        var j = 0;
        const v82 = names.length;
        let v83 = j < v82;
        while (v83) {
            var key = names[j];
            const v85 = isEnumerable.call(provider, key);
            if (v85) {
                const v86 = provider[key];
                target[key] = v86;
            }
            const v84 = j++;
            v83 = j < v82;
        }
        v80 = v79 < len;
    }
    return target;
};
const assign = function (target) {
    const v87 = {};
    target = target || v87;
    var len = arguments.length;
    var i = 0;
    const v88 = len === 1;
    if (v88) {
        return target;
    }
    const v89 = ++i;
    let v90 = v89 < len;
    while (v90) {
        var val = arguments[i];
        const v91 = isPrimitive(target);
        if (v91) {
            target = val;
        }
        const v92 = isObject(val);
        if (v92) {
            const v93 = extend(target, val);
            v93;
        }
        v90 = v89 < len;
    }
    return target;
};
const extend = function (target, obj) {
    const v94 = assignSymbols(target, obj);
    v94;
    let key;
    for (key in obj) {
        const v95 = hasOwn(obj, key);
        if (v95) {
            var val = obj[key];
            const v96 = isObject(val);
            if (v96) {
                const v97 = target[key];
                const v98 = typeof v97;
                const v99 = v98 === 'undefined';
                const v100 = typeof val;
                const v101 = v100 === 'function';
                const v102 = v99 && v101;
                if (v102) {
                    target[key] = val;
                }
                const v103 = target[key];
                const v104 = {};
                const v105 = v103 || v104;
                const v106 = assign(v105, val);
                target[key] = v106;
            } else {
                target[key] = val;
            }
        }
    }
    return target;
};
const isObject = function (obj) {
    const v107 = typeof obj;
    const v108 = v107 === 'object';
    const v109 = typeof obj;
    const v110 = v109 === 'function';
    const v111 = v108 || v110;
    return v111;
};
const hasOwn = function (obj, key) {
    const v112 = Object.prototype;
    const v113 = v112.hasOwnProperty;
    const v114 = v113.call(obj, key);
    return v114;
};
module.exports = assign;
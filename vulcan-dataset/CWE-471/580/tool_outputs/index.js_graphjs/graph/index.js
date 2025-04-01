'use strict';
var utils = {};
const v55 = function (val) {
    const v50 = typeof val;
    const v51 = v50 === 'object';
    const v52 = typeof val;
    const v53 = v52 === 'function';
    const v54 = v51 || v53;
    return v54;
};
utils.isObject = v55;
const union = function (init) {
    const v56 = Array.isArray(init);
    const v57 = !v56;
    if (v57) {
        const v58 = new TypeError('arr-union expects the first argument to be an array.');
        throw v58;
    }
    var len = arguments.length;
    var i = 0;
    const v59 = ++i;
    let v60 = v59 < len;
    while (v60) {
        var arg = arguments[i];
        const v61 = !arg;
        if (v61) {
            continue;
        }
        const v62 = Array.isArray(arg);
        const v63 = !v62;
        if (v63) {
            arg = [arg];
        }
        var j = 0;
        const v64 = arg.length;
        let v65 = j < v64;
        while (v65) {
            var ele = arg[j];
            const v67 = init.indexOf(ele);
            const v68 = v67 >= 0;
            if (v68) {
                continue;
            }
            const v69 = init.push(ele);
            v69;
            const v66 = j++;
            v65 = j < v64;
        }
        v60 = v59 < len;
    }
    return init;
};
utils.union = union;
const clone = function (val) {
    const v70 = Array.isArray(val);
    if (v70) {
        const v71 = val.slice();
        return v71;
    } else {
        const v72 = utils.isObject(val);
        if (v72) {
            const v73 = {};
            const v74 = Object.assign(v73, val);
            return v74;
        }
    }
    return val;
};
utils.clone = clone;
const mergeDeep = function (orig, objects) {
    const v75 = utils.isObject(orig);
    const v76 = !v75;
    const v77 = Array.isArray(orig);
    const v78 = !v77;
    const v79 = v76 && v78;
    if (v79) {
        orig = {};
    }
    var target = utils.clone(orig);
    var len = arguments.length;
    var idx = 0;
    const v80 = ++idx;
    let v81 = v80 < len;
    while (v81) {
        var val = arguments[idx];
        const v82 = utils.isObject(val);
        const v83 = Array.isArray(val);
        const v84 = v82 || v83;
        if (v84) {
            const v85 = merge(target, val);
            v85;
        }
        v81 = v80 < len;
    }
    return target;
};
module.exports = mergeDeep;
const merge = function (target, obj) {
    let key;
    for (key in obj) {
        const v86 = hasOwn(obj, key);
        const v87 = !v86;
        if (v87) {
            continue;
        }
        var oldVal = obj[key];
        var newVal = target[key];
        const v88 = utils.isObject(newVal);
        const v89 = utils.isObject(oldVal);
        const v90 = v88 && v89;
        if (v90) {
            const v91 = merge(newVal, oldVal);
            target[key] = v91;
        } else {
            const v92 = Array.isArray(newVal);
            if (v92) {
                const v93 = [];
                const v94 = utils.union(v93, newVal, oldVal);
                target[key] = v94;
            } else {
                const v95 = utils.clone(oldVal);
                target[key] = v95;
            }
        }
    }
    return target;
};
const hasOwn = function (obj, key) {
    const v96 = Object.prototype;
    const v97 = v96.hasOwnProperty;
    const v98 = v97.call(obj, key);
    return v98;
};
const isPlainObject = function (value) {
    const v48 = !value;
    const v49 = !v48;
    const v50 = typeof value;
    const v51 = v50 === 'object';
    const v52 = v49 && v51;
    const v53 = value.constructor;
    const v54 = v53 === Object;
    const v55 = v52 && v54;
    return v55;
};
const hasOwn = function (obj, prop) {
    const v56 = Object.prototype;
    const v57 = v56.hasOwnProperty;
    const v58 = v57.call(obj, prop);
    return v58;
};
var _hasDontEnumBug;
var _dontEnums;
const checkDontEnum = function () {
    _dontEnums = [
        'toString',
        'toLocaleString',
        'valueOf',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'constructor'
    ];
    _hasDontEnumBug = true;
    let key;
    const v59 = { 'toString': null };
    for (key in v59) {
        _hasDontEnumBug = false;
    }
};
const forIn = function (obj, fn, thisObj) {
    var key;
    var i = 0;
    const v60 = _hasDontEnumBug == null;
    if (v60) {
        const v61 = checkDontEnum();
        v61;
    }
    for (key in obj) {
        const v62 = exec(fn, obj, key, thisObj);
        const v63 = v62 === false;
        if (v63) {
            break;
        }
    }
    if (_hasDontEnumBug) {
        var ctor = obj.constructor;
        const v64 = !ctor;
        const v65 = !v64;
        const v66 = ctor.prototype;
        const v67 = obj === v66;
        var isProto = v65 && v67;
        const v68 = i++;
        while (key = _dontEnums[v68]) {
            const v69 = key !== 'constructor';
            const v70 = !isProto;
            const v71 = hasOwn(obj, key);
            const v72 = v70 && v71;
            const v73 = v69 || v72;
            const v74 = obj[key];
            const v75 = Object.prototype;
            const v76 = v75[key];
            const v77 = v74 !== v76;
            const v78 = v73 && v77;
            if (v78) {
                const v79 = exec(fn, obj, key, thisObj);
                const v80 = v79 === false;
                if (v80) {
                    break;
                }
            }
        }
    }
};
const exec = function (fn, obj, key, thisObj) {
    const v81 = obj[key];
    const v82 = fn.call(thisObj, v81, key, obj);
    return v82;
};
const forOwn = function (obj, fn, thisObj) {
    const v86 = function (val, key) {
        const v83 = hasOwn(obj, key);
        if (v83) {
            const v84 = obj[key];
            const v85 = fn.call(thisObj, v84, key, obj);
            return v85;
        }
    };
    const v87 = forIn(obj, v86);
    v87;
};
const deepMixIn = function (target, objects) {
    var i = 0;
    var n = arguments.length;
    var obj;
    const v88 = ++i;
    let v89 = v88 < n;
    while (v89) {
        obj = arguments[i];
        if (obj) {
            const v90 = forOwn(obj, copyProp, target);
            v90;
        }
        v89 = v88 < n;
    }
    return target;
};
const copyProp = function (val, key) {
    var existing = this[key];
    const v91 = isPlainObject(val);
    const v92 = isPlainObject(existing);
    const v93 = v91 && v92;
    if (v93) {
        const v94 = deepMixIn(existing, val);
        v94;
    } else {
        this[key] = val;
    }
};
module.exports = deepMixIn;
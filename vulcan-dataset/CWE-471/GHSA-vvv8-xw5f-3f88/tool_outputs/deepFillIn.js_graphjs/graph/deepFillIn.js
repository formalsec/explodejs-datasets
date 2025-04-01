const isPlainObject = function (value) {
    const v50 = !value;
    const v51 = !v50;
    const v52 = typeof value;
    const v53 = v52 === 'object';
    const v54 = v51 && v53;
    const v55 = value.constructor;
    const v56 = v55 === Object;
    const v57 = v54 && v56;
    return v57;
};
const hasOwn = function (obj, prop) {
    const v58 = Object.prototype;
    const v59 = v58.hasOwnProperty;
    const v60 = v59.call(obj, prop);
    return v60;
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
    const v61 = { 'toString': null };
    for (key in v61) {
        _hasDontEnumBug = false;
    }
};
const forIn = function (obj, fn, thisObj) {
    var key;
    var i = 0;
    const v62 = _hasDontEnumBug == null;
    if (v62) {
        const v63 = checkDontEnum();
        v63;
    }
    for (key in obj) {
        const v64 = exec(fn, obj, key, thisObj);
        const v65 = v64 === false;
        if (v65) {
            break;
        }
    }
    if (_hasDontEnumBug) {
        var ctor = obj.constructor;
        const v66 = !ctor;
        const v67 = !v66;
        const v68 = ctor.prototype;
        const v69 = obj === v68;
        var isProto = v67 && v69;
        const v70 = i++;
        while (key = _dontEnums[v70]) {
            const v71 = key !== 'constructor';
            const v72 = !isProto;
            const v73 = hasOwn(obj, key);
            const v74 = v72 && v73;
            const v75 = v71 || v74;
            const v76 = obj[key];
            const v77 = Object.prototype;
            const v78 = v77[key];
            const v79 = v76 !== v78;
            const v80 = v75 && v79;
            if (v80) {
                const v81 = exec(fn, obj, key, thisObj);
                const v82 = v81 === false;
                if (v82) {
                    break;
                }
            }
        }
    }
};
const exec = function (fn, obj, key, thisObj) {
    const v83 = obj[key];
    const v84 = fn.call(thisObj, v83, key, obj);
    return v84;
};
const forOwn = function (obj, fn, thisObj) {
    const v88 = function (val, key) {
        const v85 = hasOwn(obj, key);
        if (v85) {
            const v86 = obj[key];
            const v87 = fn.call(thisObj, v86, key, obj);
            return v87;
        }
    };
    const v89 = forIn(obj, v88);
    v89;
};
const deepFillIn = function (target, defaults) {
    var i = 0;
    var n = arguments.length;
    var obj;
    const v90 = ++i;
    let v91 = v90 < n;
    while (v91) {
        obj = arguments[i];
        if (obj) {
            const v97 = function (newValue, key) {
                var curValue = target[key];
                const v92 = curValue == null;
                if (v92) {
                    target[key] = newValue;
                } else {
                    const v93 = isPlainObject(curValue);
                    const v94 = isPlainObject(newValue);
                    const v95 = v93 && v94;
                    if (v95) {
                        const v96 = deepFillIn(curValue, newValue);
                        v96;
                    }
                }
            };
            const v98 = forOwn(obj, v97);
            v98;
        }
        v91 = v90 < n;
    }
    return target;
};
module.exports = deepFillIn;
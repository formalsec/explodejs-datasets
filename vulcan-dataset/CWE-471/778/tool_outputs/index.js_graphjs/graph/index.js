const isObject = function (val) {
    const v33 = typeof val;
    const v34 = v33 !== 'undefined';
    const v35 = val !== null;
    const v36 = v34 && v35;
    const v37 = typeof val;
    const v38 = v37 === 'object';
    const v39 = typeof val;
    const v40 = v39 === 'function';
    const v41 = v38 || v40;
    const v42 = v36 && v41;
    return v42;
};
const forIn = function (obj, fn, thisArg) {
    let key;
    for (key in obj) {
        const v43 = obj[key];
        const v44 = fn.call(thisArg, v43, key, obj);
        const v45 = v44 === false;
        if (v45) {
            break;
        }
    }
};
const v46 = Object.prototype;
var hasOwn = v46.hasOwnProperty;
const forOwn = function (obj, fn, thisArg) {
    const v50 = function (val, key) {
        const v47 = hasOwn.call(obj, key);
        if (v47) {
            const v48 = obj[key];
            const v49 = fn.call(thisArg, v48, key, obj);
            return v49;
        }
    };
    const v51 = forIn(obj, v50);
    v51;
};
const defaultsDeep = function (target, objects) {
    arguments = [
        target,
        objects
    ];
    const v52 = {};
    target = target || v52;
    const copy = function (target, current) {
        const v59 = function (value, key) {
            const v53 = key === '__proto__';
            if (v53) {
                return;
            }
            var val = target[key];
            const v54 = val == null;
            if (v54) {
                target[key] = value;
            } else {
                const v55 = isObject(val);
                const v56 = isObject(value);
                const v57 = v55 && v56;
                if (v57) {
                    const v58 = defaultsDeep(val, value);
                    v58;
                }
            }
        };
        const v60 = forOwn(current, v59);
        v60;
    };
    var len = arguments.length;
    var i = 0;
    let v61 = i < len;
    while (v61) {
        const v62 = i++;
        var obj = arguments[v62];
        const v63 = console.log(obj);
        v63;
        if (obj) {
            const v64 = copy(target, obj);
            v64;
        }
        v61 = i < len;
    }
    return target;
};
;
module.exports = defaultsDeep;
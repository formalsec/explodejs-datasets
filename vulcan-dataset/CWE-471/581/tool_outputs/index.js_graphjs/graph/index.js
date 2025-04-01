const isObject = function (val) {
    const v31 = typeof val;
    const v32 = v31 !== 'undefined';
    const v33 = val !== null;
    const v34 = v32 && v33;
    const v35 = typeof val;
    const v36 = v35 === 'object';
    const v37 = typeof val;
    const v38 = v37 === 'function';
    const v39 = v36 || v38;
    const v40 = v34 && v39;
    return v40;
};
const forIn = function (obj, fn, thisArg) {
    let key;
    for (key in obj) {
        const v41 = obj[key];
        const v42 = fn.call(thisArg, v41, key, obj);
        const v43 = v42 === false;
        if (v43) {
            break;
        }
    }
};
const v44 = Object.prototype;
var hasOwn = v44.hasOwnProperty;
const forOwn = function (obj, fn, thisArg) {
    const v48 = function (val, key) {
        const v45 = hasOwn.call(obj, key);
        if (v45) {
            const v46 = obj[key];
            const v47 = fn.call(thisArg, v46, key, obj);
            return v47;
        }
    };
    const v49 = forIn(obj, v48);
    v49;
};
const defaultsDeep = function (target, objects) {
    arguments = [
        target,
        objects
    ];
    const v50 = {};
    target = target || v50;
    const copy = function (target, current) {
        const v56 = function (value, key) {
            var val = target[key];
            const v51 = val == null;
            if (v51) {
                target[key] = value;
            } else {
                const v52 = isObject(val);
                const v53 = isObject(value);
                const v54 = v52 && v53;
                if (v54) {
                    const v55 = defaultsDeep(val, value);
                    v55;
                }
            }
        };
        const v57 = forOwn(current, v56);
        v57;
    };
    var len = arguments.length;
    var i = 0;
    let v58 = i < len;
    while (v58) {
        const v59 = i++;
        var obj = arguments[v59];
        if (obj) {
            const v60 = copy(target, obj);
            v60;
        }
        v58 = i < len;
    }
    return target;
};
;
module.exports = defaultsDeep;
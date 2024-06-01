'use strict';
const clone = function (value) {
    const v40 = typeof value;
    const v41 = v40 === 'object';
    const v42 = value !== null;
    const v43 = v41 && v42;
    if (v43) {
        const v44 = Array.isArray(value);
        const v45 = [];
        const v46 = {};
        let v47;
        if (v44) {
            v47 = v45;
        } else {
            v47 = v46;
        }
        const v48 = _merge(v47, value);
        return v48;
    }
    return value;
};
const isObjectOrArrayOrFunction = function (value) {
    const v49 = typeof value;
    const v50 = v49 === 'function';
    const v51 = Array.isArray(value);
    const v52 = v50 || v51;
    const v53 = Object.prototype;
    const v54 = v53.toString;
    const v55 = v54.call(value);
    const v56 = v55 === '[object Object]';
    const v57 = v52 || v56;
    return v57;
};
const _merge = function (target, source) {
    const v58 = target === source;
    if (v58) {
        return target;
    }
    let key;
    for (key in source) {
        const v59 = Object.prototype;
        const v60 = v59.hasOwnProperty;
        const v61 = v60.call(source, key);
        const v62 = !v61;
        if (v62) {
            continue;
        }
        var sourceVal = source[key];
        var targetVal = target[key];
        const v63 = typeof targetVal;
        const v64 = v63 !== 'undefined';
        const v65 = typeof sourceVal;
        const v66 = v65 === 'undefined';
        const v67 = v64 && v66;
        if (v67) {
            continue;
        }
        const v68 = isObjectOrArrayOrFunction(targetVal);
        const v69 = isObjectOrArrayOrFunction(sourceVal);
        const v70 = v68 && v69;
        if (v70) {
            const v71 = _merge(targetVal, sourceVal);
            target[key] = v71;
        } else {
            const v72 = clone(sourceVal);
            target[key] = v72;
        }
    }
    return target;
};
const merge = function (target) {
    const v73 = isObjectOrArrayOrFunction(target);
    const v74 = !v73;
    if (v74) {
        target = {};
    }
    var i = 1;
    var l = arguments.length;
    let v75 = i < l;
    while (v75) {
        var source = arguments[i];
        const v77 = isObjectOrArrayOrFunction(source);
        if (v77) {
            const v78 = _merge(target, source);
            v78;
        }
        const v76 = i++;
        v75 = i < l;
    }
    return target;
};
module.exports = merge;
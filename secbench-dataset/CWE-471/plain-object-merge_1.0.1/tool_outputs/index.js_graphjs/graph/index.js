'use strict';
const clone = function (object, base) {
    const v35 = void 0;
    const v36 = base === v35;
    if (v36) {
        base = object.constructor();
    }
    let key;
    for (key in object) {
        var value = object[key];
        const v37 = typeof value;
        const v38 = v37 === 'object';
        const v39 = value !== null;
        const v40 = v38 && v39;
        if (v40) {
            const v41 = value.constructor();
            const v42 = clone(value, v41);
            base[key] = v42;
        } else {
            base[key] = value;
        }
    }
    return base;
};
const isPrimitive = function (val) {
    const v43 = typeof val;
    const v44 = v43 === 'object';
    if (v44) {
        const v45 = val === null;
        return v45;
    }
    const v46 = typeof val;
    const v47 = v46 !== 'function';
    return v47;
};
const merge = function (objects) {
    const v48 = objects[0];
    var target = clone(v48);
    var i = 1;
    var l = objects.length;
    let v49 = i < l;
    while (v49) {
        const v51 = objects[i];
        const v52 = mergeObjects(target, v51);
        v52;
        const v50 = i++;
        v49 = i < l;
    }
    return target;
};
const mergeObjects = function (target, source) {
    let key;
    for (key in source) {
        var value = source[key];
        const v53 = isPrimitive(value);
        if (v53) {
            const v54 = value !== undefined;
            const v55 = key in target;
            const v56 = !v55;
            const v57 = v54 || v56;
            if (v57) {
                target[key] = value;
            }
        } else {
            const v58 = target[key];
            const v59 = !v58;
            const v60 = Array.isArray(value);
            const v61 = v59 || v60;
            if (v61) {
                const v62 = plain_object_clone_1.default(value);
                target[key] = v62;
            } else {
                const v63 = target[key];
                const v64 = mergeObjects(v63, value);
                target[key] = v64;
            }
        }
    }
    return target;
};
module.exports = merge;
const v65 = module.exports;
v65.default = merge;
const v66 = module.exports;
const v67 = { value: true };
const v68 = Object.defineProperty(v66, '__esModule', v67);
v68;
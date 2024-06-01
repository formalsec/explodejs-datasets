'use strict';
var plain_object_clone_1 = require('plain-object-clone');
var isPrimitive = require('is-primitive');
const merge = function (objects) {
    const v22 = objects[0];
    var target = plain_object_clone_1.default(v22);
    var i = 1;
    var l = objects.length;
    let v23 = i < l;
    while (v23) {
        const v25 = objects[i];
        const v26 = mergeObjects(target, v25);
        v26;
        const v24 = i++;
        v23 = i < l;
    }
    return target;
};
const mergeObjects = function (target, source) {
    let key;
    for (key in source) {
        var value = source[key];
        const v27 = isPrimitive(value);
        if (v27) {
            const v28 = value !== undefined;
            const v29 = key in target;
            const v30 = !v29;
            const v31 = v28 || v30;
            if (v31) {
                target[key] = value;
            }
        } else {
            const v32 = target[key];
            const v33 = !v32;
            const v34 = Array.isArray(value);
            const v35 = v33 || v34;
            if (v35) {
                const v36 = plain_object_clone_1.default(value);
                target[key] = v36;
            } else {
                const v37 = target[key];
                const v38 = mergeObjects(v37, value);
                target[key] = v38;
            }
        }
    }
    return target;
};
module.exports = merge;
const v39 = module.exports;
v39.default = merge;
const v40 = module.exports;
const v41 = { value: true };
const v42 = Object.defineProperty(v40, '__esModule', v41);
v42;
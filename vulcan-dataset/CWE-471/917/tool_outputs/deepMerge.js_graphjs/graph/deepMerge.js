'use strict';
const v17 = { value: true };
const v18 = Object.defineProperty(exports, '__esModule', v17);
v18;
const predicates_1 = require('./predicates');
const deepMerge = function (target, source) {
    const v19 = source === undefined;
    const v20 = source === null;
    const v21 = v19 || v20;
    if (v21) {
        return target;
    }
    let key;
    const v22 = Object.keys(source);
    for (key of v22) {
        const v23 = source[key];
        const v24 = v23 === undefined;
        if (v24) {
            continue;
        }
        const v25 = target[key];
        const v26 = source[key];
        const v27 = predicates_1.isObject(v26);
        const v28 = v25 && v27;
        if (v28) {
            const v29 = target[key];
            const v30 = source[key];
            const v31 = deepMerge(v29, v30);
            v31;
        } else {
            const v32 = source[key];
            target[key] = v32;
        }
    }
    return target;
};
exports.deepMerge = deepMerge;
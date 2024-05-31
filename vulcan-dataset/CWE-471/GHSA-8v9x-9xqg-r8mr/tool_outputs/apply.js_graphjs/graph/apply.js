'use strict';
const OBJECT = 'object';
const apply = function (doc, patch) {
    const v18 = typeof patch;
    const v19 = v18 !== OBJECT;
    const v20 = patch === null;
    const v21 = v19 || v20;
    const v22 = Array.isArray(patch);
    const v23 = v21 || v22;
    if (v23) {
        return patch;
    }
    const v24 = typeof doc;
    const v25 = v24 !== OBJECT;
    const v26 = doc === null;
    const v27 = v25 || v26;
    const v28 = Array.isArray(doc);
    const v29 = v27 || v28;
    if (v29) {
        doc = Object.create(null);
    }
    const keys = Object.keys(patch);
    let key;
    for (key of keys) {
        const v = patch[key];
        const v30 = v === null;
        if (v30) {
            const v31 = doc[key];
            const v32 = delete v31;
            v32;
            continue;
        }
        const v33 = doc[key];
        const v34 = apply(v33, v);
        doc[key] = v34;
    }
    return doc;
};
module.exports = apply;
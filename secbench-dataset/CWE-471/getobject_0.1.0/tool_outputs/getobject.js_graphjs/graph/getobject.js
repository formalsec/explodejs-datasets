'use strict';
var getobject = {};
const getParts = function (str) {
    const v24 = str.split('.');
    return v24;
};
const v36 = function (obj, parts, create) {
    const v25 = typeof parts;
    const v26 = v25 === 'string';
    if (v26) {
        parts = getParts(parts);
    }
    var part;
    const v27 = typeof obj;
    const v28 = v27 === 'object';
    const v29 = v28 && obj;
    const v30 = parts.length;
    let v31 = v29 && v30;
    while (v31) {
        part = parts.shift();
        const v32 = part in obj;
        const v33 = !v32;
        const v34 = v33 && create;
        if (v34) {
            const v35 = {};
            obj[part] = v35;
        }
        obj = obj[part];
        v31 = v29 && v30;
    }
    return obj;
};
getobject.get = v36;
const v40 = function (obj, parts, value) {
    parts = getParts(parts);
    var prop = parts.pop();
    obj = getobject.get(obj, parts, true);
    const v37 = typeof obj;
    const v38 = v37 === 'object';
    const v39 = obj && v38;
    if (v39) {
        return obj[prop] = value;
    }
};
getobject.set = v40;
const v46 = function (obj, parts) {
    parts = getParts(parts);
    var prop = parts.pop();
    obj = getobject.get(obj, parts);
    const v41 = typeof obj;
    const v42 = v41 === 'object';
    const v43 = v42 && obj;
    const v44 = prop in obj;
    const v45 = v43 && v44;
    return v45;
};
getobject.exists = v46;
module.exports = getobject;
'use strict';
const v29 = {};
module.exports = v29;
var getobject = module.exports;
const getParts = function (str) {
    const v30 = str.replace(/\\\./g, '\uFFFF');
    const v31 = v30.split('.');
    const v33 = function (s) {
        const v32 = s.replace(/\uffff/g, '.');
        return v32;
    };
    const v34 = v31.map(v33);
    return v34;
};
const v46 = function (obj, parts, create) {
    const v35 = typeof parts;
    const v36 = v35 === 'string';
    if (v36) {
        parts = getParts(parts);
    }
    var part;
    const v37 = typeof obj;
    const v38 = v37 === 'object';
    const v39 = v38 && obj;
    const v40 = parts.length;
    let v41 = v39 && v40;
    while (v41) {
        part = parts.shift();
        const v42 = part in obj;
        const v43 = !v42;
        const v44 = v43 && create;
        if (v44) {
            const v45 = {};
            obj[part] = v45;
        }
        obj = obj[part];
        v41 = v39 && v40;
    }
    return obj;
};
getobject.get = v46;
const v50 = function (obj, parts, value) {
    parts = getParts(parts);
    var prop = parts.pop();
    obj = getobject.get(obj, parts, true);
    const v47 = typeof obj;
    const v48 = v47 === 'object';
    const v49 = obj && v48;
    if (v49) {
        return obj[prop] = value;
    }
};
getobject.set = v50;
const v56 = function (obj, parts) {
    parts = getParts(parts);
    var prop = parts.pop();
    obj = getobject.get(obj, parts);
    const v51 = typeof obj;
    const v52 = v51 === 'object';
    const v53 = v52 && obj;
    const v54 = prop in obj;
    const v55 = v53 && v54;
    return v55;
};
getobject.exists = v56;
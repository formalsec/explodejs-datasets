'use strict';
const isObject = val => {
    const v30 = typeof val;
    const v31 = v30 === 'object';
    const v32 = typeof val;
    const v33 = v32 === 'function';
    const v34 = v31 || v33;
    return v34;
};
const set = (obj, parts, length, val) => {
    let tmp = obj;
    let i = 0;
    const v35 = length - 1;
    let v36 = i < v35;
    while (v36) {
        const part = parts[i];
        const v38 = tmp[part];
        const v39 = isObject(v38);
        const v40 = !v39;
        const v41 = {};
        const v42 = tmp[part];
        if (v40) {
            tmp = tmp[part] = v41;
        } else {
            tmp = v42;
        }
        const v37 = i++;
        v36 = i < v35;
    }
    const v43 = parts[i];
    tmp[v43] = val;
    return obj;
};
const v58 = (obj, path, val, sep = '.') => {
    const v44 = isObject(obj);
    const v45 = !v44;
    const v46 = !path;
    const v47 = v45 || v46;
    const v48 = path.length;
    const v49 = !v48;
    const v50 = v47 || v49;
    if (v50) {
        return obj;
    }
    let parts;
    const v51 = Array.isArray(path);
    const v52 = String(path);
    const v53 = v52.split(sep);
    if (v51) {
        parts = path;
    } else {
        parts = v53;
    }
    const v54 = parts;
    const length = v54.length;
    const v55 = length === 1;
    if (v55) {
        const v56 = parts[0];
        obj[v56] = val;
        return obj;
    }
    const v57 = set(obj, parts, length, val);
    return v57;
};
module.exports = v58;
'use strict';
const expand = function (value) {
    const v30 = isObject(value);
    const v31 = !v30;
    if (v31) {
        return value;
    }
    let res;
    const v32 = Array.isArray(value);
    const v33 = [];
    const v34 = {};
    if (v32) {
        res = v33;
    } else {
        res = v34;
    }
    let key;
    const v35 = Object.keys(value);
    for (key of v35) {
        const v36 = value[key];
        const v37 = expand(v36);
        const v38 = set(res, key, v37);
        v38;
    }
    return res;
};
module.exports = expand;
const set = function (obj, prop, val) {
    const segs = split(prop);
    const last = segs.pop();
    let v39 = segs.length;
    while (v39) {
        const key = segs.shift();
        const v40 = obj[key];
        const v41 = {};
        obj = v40 || (obj[key] = v41);
        v39 = segs.length;
    }
    obj[last] = val;
};
const split = function (str) {
    const segs = str.split('.');
    const keys = [];
    let i = 0;
    const v42 = segs.length;
    let v43 = i < v42;
    while (v43) {
        const seg = segs[i];
        const v45 = -1;
        const v46 = seg.slice(v45);
        let v47 = v46 === '\\';
        while (v47) {
            const v48 = -1;
            const v49 = seg.slice(0, v48);
            const v50 = v49 + '.';
            const v51 = ++i;
            const v52 = segs[v51];
            const v53 = v52 || '';
            seg = v50 + v53;
            v47 = v46 === '\\';
        }
        const v54 = keys.push(seg);
        v54;
        const v44 = i++;
        v43 = i < v42;
    }
    return keys;
};
const isObject = function (val) {
    const v55 = val !== null;
    const v56 = typeof val;
    const v57 = v56 === 'object';
    const v58 = v55 && v57;
    return v58;
};
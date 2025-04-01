'use strict';
const isObject = function (x) {
    const v33 = typeof x;
    const v34 = v33 === 'object';
    const v35 = x !== null;
    const v36 = v34 && v35;
    return v36;
};
const v37 = module.exports;
const v46 = function (obj, path) {
    const v38 = isObject(obj);
    const v39 = !v38;
    const v40 = typeof path;
    const v41 = v40 !== 'string';
    const v42 = v39 || v41;
    if (v42) {
        return obj;
    }
    var pathArr = path.split('.');
    const v44 = function (path, index) {
        obj = obj[path];
        const v43 = obj === undefined;
        if (v43) {
            return true;
        }
    };
    const v45 = pathArr.some(v44);
    v45;
    return obj;
};
v37.get = v46;
const v47 = module.exports;
const v64 = function (obj, path, value) {
    const v48 = isObject(obj);
    const v49 = !v48;
    const v50 = typeof path;
    const v51 = v50 !== 'string';
    const v52 = v49 || v51;
    if (v52) {
        return;
    }
    var pathArr = path.split('.');
    var i = 0;
    const v53 = pathArr.length;
    const v54 = v53 - 1;
    let v55 = i < v54;
    while (v55) {
        path = pathArr[i];
        const v57 = obj[path];
        const v58 = isObject(v57);
        const v59 = !v58;
        if (v59) {
            const v60 = {};
            obj[path] = v60;
        }
        const v61 = pathArr.length;
        const v62 = v61 - 1;
        const v63 = i === v62;
        if (v63) {
            obj[path] = value;
        }
        obj = obj[path];
        const v56 = i++;
        v55 = i < v54;
    }
};
v47.set = v64;
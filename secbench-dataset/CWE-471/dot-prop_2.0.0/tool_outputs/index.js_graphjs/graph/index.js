'use strict';
const isObject = function (x) {
    const v31 = typeof x;
    const v32 = v31 === 'object';
    const v33 = x !== null;
    const v34 = v32 && v33;
    return v34;
};
const v35 = module.exports;
const v44 = function (obj, path) {
    const v36 = isObject(obj);
    const v37 = !v36;
    const v38 = typeof path;
    const v39 = v38 !== 'string';
    const v40 = v37 || v39;
    if (v40) {
        return obj;
    }
    var pathArr = path.split('.');
    const v42 = function (path, index) {
        obj = obj[path];
        const v41 = obj === undefined;
        if (v41) {
            return true;
        }
    };
    const v43 = pathArr.some(v42);
    v43;
    return obj;
};
v35.get = v44;
const v45 = module.exports;
const v60 = function (obj, path, value) {
    const v46 = isObject(obj);
    const v47 = !v46;
    const v48 = typeof path;
    const v49 = v48 !== 'string';
    const v50 = v47 || v49;
    if (v50) {
        return;
    }
    var pathArr = path.split('.');
    const v58 = function (path, index) {
        const v51 = obj[path];
        const v52 = isObject(v51);
        const v53 = !v52;
        if (v53) {
            const v54 = {};
            obj[path] = v54;
        }
        const v55 = pathArr.length;
        const v56 = v55 - 1;
        const v57 = index === v56;
        if (v57) {
            obj[path] = value;
        }
        obj = obj[path];
    };
    const v59 = pathArr.forEach(v58);
    v59;
};
v45.set = v60;
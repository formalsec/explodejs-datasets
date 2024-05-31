const v37 = Object.prototype;
var hasOwnProp = v37.hasOwnProperty;
module.exports = deep;
const isSafeKey = function (key) {
    const v38 = key !== '__proto__';
    const v39 = key !== 'prototype';
    const v40 = v38 && v39;
    const v41 = key !== 'constructor';
    const v42 = v40 && v41;
    return v42;
};
const deep = function (obj, path, value) {
    const v43 = arguments.length;
    const v44 = v43 === 3;
    if (v44) {
        const v45 = set.apply(null, arguments);
        return v45;
    }
    const v46 = get.apply(null, arguments);
    return v46;
};
const get = function (obj, path) {
    let keys;
    const v47 = Array.isArray(path);
    const v48 = path.split('.');
    if (v47) {
        keys = path;
    } else {
        keys = v48;
    }
    var i = 0;
    const v49 = keys.length;
    let v50 = i < v49;
    while (v50) {
        var key = keys[i];
        const v52 = !obj;
        const v53 = hasOwnProp.call(obj, key);
        const v54 = !v53;
        const v55 = v52 || v54;
        const v56 = isSafeKey(key);
        const v57 = !v56;
        const v58 = v55 || v57;
        if (v58) {
            obj = undefined;
            break;
        }
        obj = obj[key];
        const v51 = i++;
        v50 = i < v49;
    }
    return obj;
};
const set = function (obj, path, value) {
    let keys;
    const v59 = Array.isArray(path);
    const v60 = path.split('.');
    if (v59) {
        keys = path;
    } else {
        keys = v60;
    }
    var i = 0;
    const v61 = keys.length;
    const v62 = v61 - 1;
    let v63 = i < v62;
    while (v63) {
        var key = keys[i];
        const v65 = isSafeKey(key);
        const v66 = !v65;
        if (v66) {
            return;
        }
        const v67 = deep.p;
        const v68 = hasOwnProp.call(obj, key);
        const v69 = !v68;
        const v70 = v67 && v69;
        if (v70) {
            const v71 = {};
            obj[key] = v71;
        }
        obj = obj[key];
        const v64 = i++;
        v63 = i < v62;
    }
    const v72 = keys[i];
    obj[v72] = value;
    return value;
};
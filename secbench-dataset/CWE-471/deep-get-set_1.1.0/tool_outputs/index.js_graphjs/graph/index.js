const v27 = Object.prototype;
var hasOwnProp = v27.hasOwnProperty;
module.exports = deep;
const deep = function (obj, path, value) {
    const v28 = arguments.length;
    const v29 = v28 === 3;
    if (v29) {
        const v30 = set(obj, path, value);
        return v30;
    }
    const v31 = get(obj, path);
    return v31;
};
const get = function (obj, path) {
    let keys;
    const v32 = Array.isArray(path);
    const v33 = path.split('.');
    if (v32) {
        keys = path;
    } else {
        keys = v33;
    }
    var i = 0;
    const v34 = keys.length;
    let v35 = i < v34;
    while (v35) {
        var key = keys[i];
        const v37 = !obj;
        const v38 = hasOwnProp.call(obj, key);
        const v39 = !v38;
        const v40 = v37 || v39;
        if (v40) {
            obj = undefined;
            break;
        }
        obj = obj[key];
        const v36 = i++;
        v35 = i < v34;
    }
    return obj;
};
const set = function (obj, path, value) {
    let keys;
    const v41 = Array.isArray(path);
    const v42 = path.split('.');
    if (v41) {
        keys = path;
    } else {
        keys = v42;
    }
    var i = 0;
    const v43 = keys.length;
    const v44 = v43 - 1;
    let v45 = i < v44;
    while (v45) {
        var key = keys[i];
        const v47 = deep.p;
        const v48 = hasOwnProp.call(obj, key);
        const v49 = !v48;
        const v50 = v47 && v49;
        if (v50) {
            const v51 = {};
            obj[key] = v51;
        }
        obj = obj[key];
        const v46 = i++;
        v45 = i < v44;
    }
    const v52 = keys[i];
    obj[v52] = value;
    return value;
};
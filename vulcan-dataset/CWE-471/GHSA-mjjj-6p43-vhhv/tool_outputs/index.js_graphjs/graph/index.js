const v30 = Object.prototype;
var hasOwnProp = v30.hasOwnProperty;
module.exports = deep;
const deep = function (obj, path, value) {
    const v31 = arguments.length;
    const v32 = v31 === 3;
    if (v32) {
        const v33 = set(obj, path, value);
        return v33;
    }
    const v34 = get(obj, path);
    return v34;
};
const get = function (obj, path) {
    let keys;
    const v35 = Array.isArray(path);
    const v36 = path.split('.');
    if (v35) {
        keys = path;
    } else {
        keys = v36;
    }
    var i = 0;
    const v37 = keys.length;
    let v38 = i < v37;
    while (v38) {
        var key = keys[i];
        const v40 = !obj;
        const v41 = hasOwnProp.call(obj, key);
        const v42 = !v41;
        const v43 = v40 || v42;
        const v44 = isSafeKey(key);
        const v45 = !v44;
        const v46 = v43 || v45;
        if (v46) {
            obj = undefined;
            break;
        }
        obj = obj[key];
        const v39 = i++;
        v38 = i < v37;
    }
    return obj;
};
const set = function (obj, path, value) {
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
    const v50 = v49 - 1;
    let v51 = i < v50;
    while (v51) {
        var key = keys[i];
        const v53 = deep.p;
        const v54 = hasOwnProp.call(obj, key);
        const v55 = !v54;
        const v56 = v53 && v55;
        if (v56) {
            const v57 = {};
            obj[key] = v57;
        }
        obj = obj[key];
        const v52 = i++;
        v51 = i < v50;
    }
    const v58 = keys[i];
    obj[v58] = value;
    return value;
};
var getAndCreate;
var getValue;
var isArray;
var isObject;
var objectUtils;
var setValue;
const v50 = function (value) {
    var type;
    const v44 = typeof value;
    type = v44;
    const v45 = value !== null;
    const v46 = type === 'object';
    const v47 = type === 'function';
    const v48 = v46 || v47;
    const v49 = v45 && v48;
    return v49;
};
isObject = v50;
const v58 = function (object) {
    const v51 = Array.isArray;
    const v52 = v51 != null;
    if (v52) {
        const v53 = Array.isArray(object);
        return v53;
    } else {
        const v54 = Object.prototype;
        const v55 = v54.toString;
        const v56 = v55.call(object);
        const v57 = v56 === '[object Array]';
        return v57;
    }
};
isArray = v58;
const v72 = function (path, object, valueIfMissing) {
    var aPath;
    var key;
    var value;
    const v59 = valueIfMissing == null;
    if (v59) {
        const v60 = void 0;
        valueIfMissing = v60;
    }
    const v61 = object == null;
    if (v61) {
        return valueIfMissing;
    }
    const v62 = '' + path;
    aPath = v62.split('.');
    value = object;
    key = aPath.shift();
    const v63 = aPath.length;
    const v64 = v63 === 0;
    if (v64) {
        const v65 = key.replace('%2E', '.');
        value = value[v65];
        const v66 = value == null;
        if (v66) {
            value = valueIfMissing;
        }
    } else {
        let v67 = value && key;
        while (v67) {
            const v68 = key.replace('%2E', '.');
            value = value[v68];
            const v69 = value == null;
            if (v69) {
                value = valueIfMissing;
            }
            key = aPath.shift();
            v67 = value && key;
        }
        const v70 = aPath.length;
        const v71 = 0 === v70;
        if (v71) {
            value = value;
        } else {
            value = valueIfMissing;
        }
    }
    return value;
};
getValue = v72;
const v83 = function (path, object, defaultValue) {
    var aPath;
    var key;
    var value;
    const v73 = object == null;
    if (v73) {
        return;
    }
    const v74 = isObject(object);
    const v75 = !v74;
    if (v75) {
        return;
    }
    const v76 = '' + path;
    aPath = v76.split('.');
    value = object;
    key = aPath.shift();
    while (key) {
        const v77 = value[key];
        const v78 = v77 == null;
        if (v78) {
            const v79 = {};
            value[key] = v79;
        }
        const v80 = aPath.length;
        const v81 = v80 === 0;
        if (v81) {
            const v82 = defaultValue != null;
            if (v82) {
                value[key] = defaultValue;
            }
        }
        value = value[key];
        key = aPath.shift();
    }
    return value;
};
getAndCreate = v83;
const v85 = function (path, object, value) {
    const v84 = getAndCreate(path, object, value);
    v84;
    return object;
};
setValue = v85;
const v86 = {};
v86.isArray = isArray;
v86.getValue = getValue;
v86.getAndCreate = getAndCreate;
v86.setValue = setValue;
module.exports = v86;
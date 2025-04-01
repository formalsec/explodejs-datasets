var getAndCreate;
var getValue;
var isArray;
var objectUtils;
var setValue;
const v42 = function (object) {
    const v35 = Array.isArray;
    const v36 = v35 != null;
    if (v36) {
        const v37 = Array.isArray(object);
        return v37;
    } else {
        const v38 = Object.prototype;
        const v39 = v38.toString;
        const v40 = v39.call(object);
        const v41 = v40 === '[object Array]';
        return v41;
    }
};
isArray = v42;
const v56 = function (path, object, valueIfMissing) {
    var aPath;
    var key;
    var value;
    const v43 = valueIfMissing == null;
    if (v43) {
        const v44 = void 0;
        valueIfMissing = v44;
    }
    const v45 = object == null;
    if (v45) {
        return valueIfMissing;
    }
    const v46 = '' + path;
    aPath = v46.split('.');
    value = object;
    key = aPath.shift();
    const v47 = aPath.length;
    const v48 = v47 === 0;
    if (v48) {
        const v49 = key.replace('%2E', '.');
        value = value[v49];
        const v50 = value == null;
        if (v50) {
            value = valueIfMissing;
        }
    } else {
        let v51 = value && key;
        while (v51) {
            const v52 = key.replace('%2E', '.');
            value = value[v52];
            const v53 = value == null;
            if (v53) {
                value = valueIfMissing;
            }
            key = aPath.shift();
            v51 = value && key;
        }
        const v54 = aPath.length;
        const v55 = 0 === v54;
        if (v55) {
            value = value;
        } else {
            value = valueIfMissing;
        }
    }
    return value;
};
getValue = v56;
const v65 = function (path, object, defaultValue) {
    var aPath;
    var key;
    var value;
    const v57 = object == null;
    if (v57) {
        return;
    }
    const v58 = '' + path;
    aPath = v58.split('.');
    value = object;
    key = aPath.shift();
    while (key) {
        key = key.replace('%2E', '.');
        const v59 = value[key];
        const v60 = v59 == null;
        if (v60) {
            const v61 = {};
            value[key] = v61;
        }
        const v62 = aPath.length;
        const v63 = v62 === 0;
        if (v63) {
            const v64 = defaultValue != null;
            if (v64) {
                value[key] = defaultValue;
            }
        }
        value = value[key];
        key = aPath.shift();
    }
    return value;
};
getAndCreate = v65;
const v67 = function (path, object, value) {
    const v66 = getAndCreate(path, object, value);
    v66;
    return object;
};
setValue = v67;
const v68 = {};
v68.isArray = isArray;
v68.getValue = getValue;
v68.getAndCreate = getAndCreate;
v68.setValue = setValue;
module.exports = v68;
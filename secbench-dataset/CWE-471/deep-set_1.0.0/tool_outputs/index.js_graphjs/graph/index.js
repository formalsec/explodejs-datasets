const deepSet = function (obj, path, value, create) {
    var properties = path.split('.');
    var currentObject = obj;
    var property;
    const v15 = create === undefined;
    if (v15) {
        create = true;
    } else {
        create = create;
    }
    let v16 = properties.length;
    while (v16) {
        property = properties.shift();
        const v17 = !currentObject;
        if (v17) {
            break;
        }
        const v18 = currentObject[property];
        const v19 = isObject(v18);
        const v20 = !v19;
        const v21 = v20 && create;
        if (v21) {
            const v22 = {};
            currentObject[property] = v22;
        }
        const v23 = properties.length;
        const v24 = !v23;
        if (v24) {
            currentObject[property] = value;
        }
        currentObject = currentObject[property];
        v16 = properties.length;
    }
    return obj;
};
module.exports = deepSet;
const isObject = function (obj) {
    const v25 = typeof obj;
    const v26 = v25 === 'object';
    const v27 = obj !== null;
    const v28 = v26 && v27;
    return v28;
};
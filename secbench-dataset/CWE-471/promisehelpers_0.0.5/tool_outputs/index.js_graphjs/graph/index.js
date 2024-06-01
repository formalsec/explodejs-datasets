'use strict';
var isArray = require('isarray');
var insertHelper = function (keys, value, object) {
    var index;
    var key;
    var nestedObject = object;
    (index = 0)
    const v25 = keys.length;
    let v26 = index < v25;
    while (v26) {
        key = keys[index];
        const v28 = nestedObject[key];
        const v29 = !v28;
        if (v29) {
            const v30 = {};
            nestedObject[key] = v30;
        }
        const v31 = keys.length;
        const v32 = v31 - 1;
        const v33 = index === v32;
        if (v33) {
            nestedObject[key] = value;
        } else {
            nestedObject = nestedObject[key];
        }
        const v27 = index++;
        v26 = index < v25;
    }
    return object;
};
const v34 = module.exports;
const v36 = function (obj, property) {
    const v35 = function (value) {
        obj[property] = value;
        return obj;
    };
    return v35;
};
v34.wrap = v36;
const v37 = module.exports;
const v40 = function (func) {
    const v39 = function (value) {
        const v38 = func();
        v38;
        return value;
    };
    return v39;
};
v37.notify = v40;
const v41 = module.exports;
const v45 = function (key, value) {
    const v44 = function (object) {
        const v42 = isArray(key);
        if (v42) {
            const v43 = insertHelper(key, value, object);
            return v43;
        }
        object[key] = value;
        return object;
    };
    return v44;
};
v41.insert = v45;
const v46 = module.exports;
const v48 = function (promiseValue) {
    const v47 = console.log(promiseValue);
    v47;
    return promiseValue;
};
v46.log = v48;
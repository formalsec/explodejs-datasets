var assert = require('assert');
module.exports = setIn;
const setIn = function (object, path, value) {
    const v35 = typeof object;
    const v36 = assert.equal(v35, 'object', 'setIn: expected object as first argument.');
    v36;
    const v37 = Array.isArray(path);
    const v38 = assert.ok(v37, 'setIn: expected array path as second argument.');
    v38;
    const v39 = recursivelySetIn(object, path, value, 0);
    return v39;
};
const recursivelySetIn = function (object, path, value, index) {
    const v40 = path.length;
    const v41 = index === v40;
    if (v41) {
        return value;
    }
    const v42 = {};
    object = object || v42;
    const v43 = path[index];
    const v44 = v43 !== '__proto__';
    const v45 = assert.ok(v44, 'setIn: "__proto__" is disallowed in path due to possible prototype pollution attack.');
    v45;
    const v46 = path.length;
    const v47 = v46 - 1;
    const v48 = index < v47;
    if (v48) {
        const v49 = path[index];
        const v50 = v49 !== 'constructor';
        const v51 = index + 1;
        const v52 = path[v51];
        const v53 = v52 !== 'prototype';
        const v54 = v50 && v53;
        const v55 = assert.ok(v54, 'setIn: ["constructor", "prototype"] is disallowed in path due to possible prototype pollution attack.');
        v55;
    }
    var key = path[index];
    const v56 = key === '-';
    if (v56) {
        const v57 = Array.isArray(object);
        const v58 = assert.ok(v57, 'setIn: "-" in path must correspond to array.');
        v58;
        key = object.length;
    }
    const v59 = key === '__proto__';
    const v60 = key === 'constructor';
    const v61 = index + 1;
    const v62 = path[v61];
    const v63 = v62 === 'prototype';
    const v64 = v60 && v63;
    const v65 = v59 || v64;
    if (v65) {
    }
    const v66 = object[key];
    const v67 = ++index;
    var next = recursivelySetIn(v66, path, value, v67);
    const v68 = set(object, key, next);
    return v68;
};
const set = function (object, key, value) {
    object[key] = value;
    return object;
};
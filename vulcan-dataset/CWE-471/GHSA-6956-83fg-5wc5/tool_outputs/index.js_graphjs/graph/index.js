var assert = require('assert');
const setIn = function (object, path, value) {
    const v15 = typeof object;
    const v16 = assert.equal(v15, 'object', 'setIn: expected object as first argument.');
    v16;
    const v17 = Array.isArray(path);
    const v18 = assert.ok(v17, 'setIn: expected array path as second argument.');
    v18;
    const v19 = recursivelySetIn(object, path, value, 0);
    return v19;
};
const recursivelySetIn = function (object, path, value, index) {
    const v20 = path.length;
    const v21 = index === v20;
    if (v21) {
        return value;
    }
    const v22 = {};
    object = object || v22;
    var key = path[index];
    const v23 = key === '-';
    if (v23) {
        const v24 = Array.isArray(object);
        const v25 = assert.ok(v24, 'setIn: "-" in path must correspond to array.');
        v25;
        key = object.length;
    }
    const v26 = object[key];
    const v27 = ++index;
    var next = recursivelySetIn(v26, path, value, v27);
    const v28 = set(object, key, next);
    return v28;
};
const set = function (object, key, value) {
    object[key] = value;
    return object;
};
module.exports = setIn;
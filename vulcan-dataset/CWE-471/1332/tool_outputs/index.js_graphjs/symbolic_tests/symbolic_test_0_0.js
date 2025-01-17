'use strict';

module.exports = {
    get : getter,
    set : setter
};

function getter(path) {
    var arr,
        data = this;


    if (!path) {
        return data;
    }

    arr = path.split('.');
    while (arr.length && data) {
        // will work with arrays
        data = data[arr.shift()];
    }

    return data;
}

function setter(path, value) {
    var arr,
        item,
        obj = this;

    arr = path.split('.');
    while (arr.length > 1) {
        item = arr.shift();
        if (!obj[item]) {
            // will not work with arrays
            obj[item] = {};
        }
        obj = obj[item];
    }

    obj[arr.shift()] = value;

    return this;
}
let esl_symbolic = require("esl_symbolic");
esl_symbolic.sealProperties(Object.prototype);
// Vuln: prototype-pollution
let path = esl_symbolic.string("path");
let value = esl_symbolic.any("value");
module.exports.set(path, value);
console.log(({}).toString);

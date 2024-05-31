'use strict';
const v12 = {};
v12.get = getter;
v12.set = setter;
module.exports = v12;
const getter = function (path) {
    var arr;
    var data = this;
    const v13 = !path;
    if (v13) {
        return data;
    }
    arr = path.split('.');
    const v14 = arr.length;
    let v15 = v14 && data;
    while (v15) {
        const v16 = arr.shift();
        data = data[v16];
        v15 = v14 && data;
    }
    return data;
};
const setter = function (path, value) {
    var arr;
    var item;
    var obj = this;
    arr = path.split('.');
    const v17 = arr.length;
    let v18 = v17 > 1;
    while (v18) {
        item = arr.shift();
        const v19 = obj[item];
        const v20 = !v19;
        if (v20) {
            const v21 = {};
            obj[item] = v21;
        }
        obj = obj[item];
        v18 = v17 > 1;
    }
    const v22 = arr.shift();
    obj[v22] = value;
    return this;
};
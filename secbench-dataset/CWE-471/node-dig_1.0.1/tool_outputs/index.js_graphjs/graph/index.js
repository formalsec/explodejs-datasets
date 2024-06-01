const dig = function (object, keys, value) {
    const key = keys.shift();
    const v10 = keys.length;
    const v11 = v10 == 0;
    if (v11) {
        const v12 = object[key];
        let v13;
        if (value) {
            object[key] = value;
            v13 = object[key];
        } else {
            v13 = v12;
        }
        return v13;
    }
    const v14 = key in object;
    const v15 = !v14;
    if (v15) {
        const v16 = {};
        object[key] = v16;
    }
    const v17 = object[key];
    const v18 = dig(v17, keys, value);
    return v18;
};
module.exports = dig;
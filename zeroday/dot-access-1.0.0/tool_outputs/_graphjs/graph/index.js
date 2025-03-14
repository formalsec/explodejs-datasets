const v20 = function (obj, path) {
    try {
        const v16 = 'return _.' + path;
        const v17 = new Function('_', v16);
        const v18 = v17(obj);
        return v18;
    } catch (e) {
        const v19 = obj[path];
        return v19;
    }
};
exports.get = v20;
const v30 = function (obj, path, value) {
    var segs = path.split('.');
    const v28 = function set(deep, seg, i) {
        const v21 = segs.length;
        const v22 = v21 - 1;
        const v23 = v22 === i;
        const v24 = deep[seg];
        const v25 = {};
        const v26 = v24 || v25;
        let v27;
        if (v23) {
            deep[seg] = value;
            v27 = deep[seg];
        } else {
            v27 = v26;
        }
        return deep[seg] = v27;
    };
    const v29 = segs.reduce(v28, obj);
    v29;
    return obj;
};
exports.set = v30;
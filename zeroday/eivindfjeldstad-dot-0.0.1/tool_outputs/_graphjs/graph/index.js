const v19 = function (obj, path, val) {
    var segs = path.split('.');
    var attr = segs.pop();
    var i = 0;
    const v14 = segs.length;
    let v15 = i < v14;
    while (v15) {
        var seg = segs[i];
        const v17 = obj[seg];
        const v18 = {};
        obj[seg] = v17 || v18;
        obj = obj[seg];
        const v16 = i++;
        v15 = i < v14;
    }
    obj[attr] = val;
};
exports.set = v19;
const v26 = function (obj, path) {
    var segs = path.split('.');
    var attr = segs.pop();
    var i = 0;
    const v20 = segs.length;
    let v21 = i < v20;
    while (v21) {
        var seg = segs[i];
        const v23 = obj[seg];
        const v24 = !v23;
        if (v24) {
            return;
        }
        obj = obj[seg];
        const v22 = i++;
        v21 = i < v20;
    }
    const v25 = obj[attr];
    return v25;
};
exports.get = v26;
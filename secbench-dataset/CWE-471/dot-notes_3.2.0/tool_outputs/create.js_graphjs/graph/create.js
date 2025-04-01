var parse = function (x) {
    const v20 = x.split('.');
    return v20;
};
const create = function (obj, str, val) {
    var keys = parse(str);
    var container;
    const v21 = typeof obj;
    const v22 = v21 === 'object';
    const v23 = obj && v22;
    if (v23) {
        container = obj;
    } else {
        const v24 = keys[0];
        container = typed(v24);
    }
    var tmp = container;
    const v25 = keys.length;
    var last = v25 - 1;
    var k = 0;
    let v26 = k < last;
    while (v26) {
        var key = keys[k];
        const v28 = tmp[key];
        const v29 = !v28;
        if (v29) {
            const v30 = k + 1;
            const v31 = keys[v30];
            const v32 = typed(v31);
            tmp[key] = v32;
        }
        tmp = tmp[key];
        const v27 = k++;
        v26 = k < last;
    }
    const v33 = keys[last];
    tmp[v33] = val;
    return container;
};
const typed = function (key) {
    const v34 = typeof key;
    const v35 = v34 === 'number';
    const v36 = [];
    const v37 = {};
    let v38;
    if (v35) {
        v38 = v36;
    } else {
        v38 = v37;
    }
    return v38;
};
module.exports = create;
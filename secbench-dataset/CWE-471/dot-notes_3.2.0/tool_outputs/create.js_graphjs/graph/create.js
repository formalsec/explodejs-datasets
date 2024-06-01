var parse = require('./keys');
const create = function (obj, str, val) {
    var keys = parse(str);
    var container;
    const v19 = typeof obj;
    const v20 = v19 === 'object';
    const v21 = obj && v20;
    if (v21) {
        container = obj;
    } else {
        const v22 = keys[0];
        container = typed(v22);
    }
    var tmp = container;
    const v23 = keys.length;
    var last = v23 - 1;
    var k = 0;
    let v24 = k < last;
    while (v24) {
        var key = keys[k];
        const v26 = tmp[key];
        const v27 = !v26;
        if (v27) {
            const v28 = k + 1;
            const v29 = keys[v28];
            const v30 = typed(v29);
            tmp[key] = v30;
        }
        tmp = tmp[key];
        const v25 = k++;
        v24 = k < last;
    }
    const v31 = keys[last];
    tmp[v31] = val;
    return container;
};
const typed = function (key) {
    const v32 = typeof key;
    const v33 = v32 === 'number';
    const v34 = [];
    const v35 = {};
    let v36;
    if (v33) {
        v36 = v34;
    } else {
        v36 = v35;
    }
    return v36;
};
module.exports = create;
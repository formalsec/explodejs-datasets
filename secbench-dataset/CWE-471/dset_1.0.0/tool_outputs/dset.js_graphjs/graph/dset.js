const v26 = function (obj, keys, val) {
    const v14 = keys.split;
    const v15 = v14 && (keys = keys.split('.'));
    v15;
    var i = 0;
    var l = keys.length;
    var t = obj;
    var x;
    let v16 = i < l;
    while (v16) {
        const v18 = keys[i];
        x = t[v18];
        const v19 = keys[i];
        const v20 = l - 1;
        const v21 = i === v20;
        const v22 = x == null;
        const v23 = {};
        let v24;
        if (v22) {
            v24 = v23;
        } else {
            v24 = x;
        }
        let v25;
        if (v21) {
            v25 = val;
        } else {
            v25 = v24;
        }
        t.v19 = v25;
        t = t[v19];
        const v17 = ++i;
        v16 = i < l;
    }
};
module.exports = v26;
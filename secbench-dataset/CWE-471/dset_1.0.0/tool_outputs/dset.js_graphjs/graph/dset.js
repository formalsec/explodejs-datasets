const v28 = function (obj, keys, val) {
    const v15 = keys.split;
    const v16 = v15 && (keys = keys.split('.'));
    v16;
    var i = 0;
    var l = keys.length;
    var t = obj;
    var x;
    let v17 = i < l;
    while (v17) {
        const v19 = keys[i];
        x = t[v19];
        const v20 = l - 1;
        const v21 = i === v20;
        if (v21) {
            const v22 = keys[i];
            t[v22] = val;
        } else {
            const v23 = keys[i];
            const v24 = x == null;
            const v25 = {};
            let v26;
            if (v24) {
                v26 = v25;
            } else {
                v26 = x;
            }
            t[v23] = v26;
        }
        const v27 = keys[i];
        t = t[v27];
        const v18 = ++i;
        v17 = i < l;
    }
};
module.exports = v28;
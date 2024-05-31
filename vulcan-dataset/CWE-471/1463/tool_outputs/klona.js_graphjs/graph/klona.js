const klona = function (x) {
    const v27 = typeof x;
    const v28 = v27 !== 'object';
    if (v28) {
        return x;
    }
    var k;
    var tmp;
    const v29 = Object.prototype;
    const v30 = v29.toString;
    var str = v30.call(x);
    const v31 = str === '[object Object]';
    if (v31) {
        tmp = {};
        for (k in x) {
            const v32 = x[k];
            const v33 = klona(v32);
            tmp[k] = v33;
        }
        return tmp;
    }
    const v34 = str === '[object Array]';
    if (v34) {
        k = x.length;
        tmp = new Array(k)
        let v35 = k--;
        while (v35) {
            const v36 = x[k];
            const v37 = klona(v36);
            tmp[k] = v37;
            v35 = k--;
        }
        return tmp;
    }
    const v38 = str === '[object Set]';
    if (v38) {
        const v39 = new Set(x);
        return v39;
    }
    const v40 = str === '[object Date]';
    if (v40) {
        const v41 = +x;
        const v42 = new Date(v41);
        return v42;
    }
    const v43 = str === '[object Map]';
    if (v43) {
        const v44 = new Map(x);
        return v44;
    }
    const v45 = str === '[object RegExp]';
    if (v45) {
        const v46 = x.source;
        const v47 = x.flags;
        tmp = new RegExp(v46, v47);
        const v48 = x.lastIndex;
        tmp.lastIndex = v48;
        return tmp;
    }
    const v49 = -6;
    const v50 = str.slice(v49);
    const v51 = v50 === 'Array]';
    if (v51) {
        const v52 = new x.constructor(x);
        return v52;
    }
    return x;
};
module.exports = klona;
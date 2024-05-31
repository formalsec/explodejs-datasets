const extend = function (a, b) {
    const v22 = a == null;
    const v23 = b == null;
    const v24 = v22 || v23;
    if (v24) {
        return a;
    }
    const v25 = Object.keys(b);
    const v41 = function (key) {
        const v26 = Object.prototype;
        const v27 = v26.toString;
        const v28 = b[key];
        const v29 = v27.call(v28);
        const v30 = v29 == '[object Object]';
        if (v30) {
            const v31 = Object.prototype;
            const v32 = v31.toString;
            const v33 = a[key];
            const v34 = v32.call(v33);
            const v35 = v34 != '[object Object]';
            if (v35) {
                const v36 = b[key];
                a[key] = v36;
            } else {
                const v37 = a[key];
                const v38 = b[key];
                const v39 = extend(v37, v38);
                a[key] = v39;
            }
        } else {
            const v40 = b[key];
            a[key] = v40;
        }
    };
    const v42 = v25.forEach(v41);
    v42;
    return a;
};
module.exports = extend;
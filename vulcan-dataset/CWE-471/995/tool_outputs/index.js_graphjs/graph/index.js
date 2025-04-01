const isPojo = o => {
    var proto = Object.getPrototypeOf(o);
    const v54 = proto === null;
    const v55 = Object.getPrototypeOf(proto);
    const v56 = v55 === null;
    const v57 = v54 || v56;
    return v57;
};
const merge = (x, y) => {
    const v58 = y === undefined;
    if (v58) {
        return x;
    }
    const v59 = y === null;
    const v60 = x == null;
    const v61 = v59 || v60;
    if (v61) {
        return y;
    }
    const v62 = isPojo(x);
    const v63 = Array.isArray(x);
    const v64 = v62 || v63;
    const v65 = isPojo(y);
    const v66 = v64 && v65;
    if (v66) {
        const v67 = Object.keys(y);
        const v71 = function (key) {
            const v68 = x[key];
            const v69 = y[key];
            const v70 = merge(v68, v69);
            x[key] = v70;
        };
        const v72 = v67.forEach(v71);
        v72;
        const v73 = Object.getOwnPropertySymbols(y);
        const v79 = function (key) {
            const v74 = Object.getOwnPropertyDescriptor(y, key);
            const v75 = v74.enumerable;
            if (v75) {
                const v76 = x[key];
                const v77 = y[key];
                const v78 = merge(v76, v77);
                x[key] = v78;
            }
        };
        const v80 = v73.forEach(v79);
        v80;
        return x;
    }
    const v81 = Array.isArray(x);
    const v82 = Array.isArray(y);
    const v83 = v81 && v82;
    if (v83) {
        const v84 = x.concat(y);
        return v84;
    }
    const v85 = x.add;
    const v86 = typeof v85;
    const v87 = v86 === 'function';
    const v88 = y.add;
    const v89 = typeof v88;
    const v90 = v89 === 'function';
    const v91 = v87 && v90;
    if (v91) {
        const v93 = function (value) {
            const v92 = x.add(value);
            v92;
        };
        const v94 = y.forEach(v93);
        v94;
        return x;
    }
    const v95 = x.set;
    const v96 = typeof v95;
    const v97 = v96 === 'function';
    const v98 = y.set;
    const v99 = typeof v98;
    const v100 = v99 === 'function';
    const v101 = v97 && v100;
    if (v101) {
        const v105 = function (value, key) {
            const v102 = x.get(key);
            const v103 = merge(v102, value);
            const v104 = x.set(key, v103);
            v104;
        };
        const v106 = y.forEach(v105);
        v106;
        return x;
    }
    return y;
};
module.exports = merge;
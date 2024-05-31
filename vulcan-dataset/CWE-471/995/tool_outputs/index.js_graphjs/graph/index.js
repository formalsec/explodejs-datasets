const isPojo = o => {
    var proto = Object.getPrototypeOf(o);
    const v57 = proto === null;
    const v58 = Object.getPrototypeOf(proto);
    const v59 = v58 === null;
    const v60 = v57 || v59;
    return v60;
};
const merge = (x, y) => {
    const v61 = y === undefined;
    if (v61) {
        return x;
    }
    const v62 = y === null;
    const v63 = x == null;
    const v64 = v62 || v63;
    if (v64) {
        return y;
    }
    const v65 = isPojo(x);
    const v66 = Array.isArray(x);
    const v67 = v65 || v66;
    const v68 = isPojo(y);
    const v69 = v67 && v68;
    if (v69) {
        const v70 = Object.keys(y);
        const v74 = function (key) {
            const v71 = x[key];
            const v72 = y[key];
            const v73 = merge(v71, v72);
            x[key] = v73;
        };
        const v75 = v70.forEach(v74);
        v75;
        const v76 = Object.getOwnPropertySymbols(y);
        const v82 = function (key) {
            const v77 = Object.getOwnPropertyDescriptor(y, key);
            const v78 = v77.enumerable;
            if (v78) {
                const v79 = x[key];
                const v80 = y[key];
                const v81 = merge(v79, v80);
                x[key] = v81;
            }
        };
        const v83 = v76.forEach(v82);
        v83;
        return x;
    }
    const v84 = Array.isArray(x);
    const v85 = Array.isArray(y);
    const v86 = v84 && v85;
    if (v86) {
        const v87 = x.concat(y);
        return v87;
    }
    const v88 = x.add;
    const v89 = typeof v88;
    const v90 = v89 === 'function';
    const v91 = y.add;
    const v92 = typeof v91;
    const v93 = v92 === 'function';
    const v94 = v90 && v93;
    if (v94) {
        const v96 = function (value) {
            const v95 = x.add(value);
            v95;
        };
        const v97 = y.forEach(v96);
        v97;
        return x;
    }
    const v98 = x.set;
    const v99 = typeof v98;
    const v100 = v99 === 'function';
    const v101 = y.set;
    const v102 = typeof v101;
    const v103 = v102 === 'function';
    const v104 = v100 && v103;
    if (v104) {
        const v108 = function (value, key) {
            const v105 = x.get(key);
            const v106 = merge(v105, value);
            const v107 = x.set(key, v106);
            v107;
        };
        const v109 = y.forEach(v108);
        v109;
        return x;
    }
    return y;
};
const mergify = (...o) => {
    const v111 = (a, b) => {
        const v110 = merge(a, b);
        return v110;
    };
    const v112 = o.reduce(v111);
    return v112;
};
module.exports = mergify;
mergify.default = mergify;
mergify.merge = merge;
mergify.isPojo = isPojo;
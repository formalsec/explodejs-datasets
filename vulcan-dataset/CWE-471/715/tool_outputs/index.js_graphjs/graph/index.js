const v61 = function (host) {
    var donors = slice(arguments, 1);
    const v59 = function (donor) {
        const v55 = Object.keys(donor);
        const v57 = function (key) {
            const v56 = donor[key];
            host[key] = v56;
        };
        const v58 = v55.forEach(v57);
        v58;
    };
    const v60 = donors.forEach(v59);
    v60;
    return host;
};
exports = v61;
module.exports = exports;
const v67 = function (keys, host) {
    var donors = slice(arguments, 1);
    const v65 = function (donor) {
        const v63 = function (key) {
            const v62 = donor[key];
            host[key] = v62;
        };
        const v64 = keys.forEach(v63);
        v64;
    };
    const v66 = donors.forEach(v65);
    v66;
    return host;
};
exports.selective = v67;
const v73 = function (host) {
    var donors = slice(arguments, 1);
    const v71 = function (donor) {
        const v68 = Object.keys(donor);
        const v69 = recurser(host, donor);
        const v70 = v68.forEach(v69);
        v70;
    };
    const v72 = donors.forEach(v71);
    v72;
    return host;
};
exports.recursive = v73;
const v74 = exports.selective;
const v79 = function (keys, host) {
    var donors = slice(arguments, 1);
    const v77 = function (donor) {
        const v75 = recurser(host, donor);
        const v76 = keys.forEach(v75);
        v76;
    };
    const v78 = donors.forEach(v77);
    v78;
    return host;
};
v74.recursive = v79;
const slice = function (arr, i) {
    const v80 = Array.prototype;
    const v81 = v80.slice;
    const v82 = v81.call(arr, i);
    return v82;
};
const isObj = function (value) {
    const v83 = typeof value;
    const v84 = v83 === 'object';
    const v85 = v84 && value;
    const v86 = !v85;
    const v87 = !v86;
    return v87;
};
const getType = function (value) {
    const v88 = Object.prototype;
    const v89 = v88.toString;
    const v90 = v89.call(value);
    const v91 = -1;
    const v92 = v90.slice(8, v91);
    const v93 = v92.toLowerCase();
    return v93;
};
const recurser = function (host, donor) {
    const v108 = function (key) {
        const v94 = donor[key];
        const v95 = isObj(v94);
        if (v95) {
            const v96 = host[key];
            const v97 = isObj(v96);
            if (v97) {
                const v98 = host[key];
                const v99 = donor[key];
                const v100 = exports.recursive(v98, v99);
                v100;
            } else {
                let base;
                const v101 = donor[key];
                const v102 = Array.isArray(v101);
                const v103 = [];
                const v104 = {};
                if (v102) {
                    base = v103;
                } else {
                    base = v104;
                }
                const v105 = donor[key];
                const v106 = exports.recursive(base, v105);
                host[key] = v106;
            }
        } else {
            const v107 = donor[key];
            host[key] = v107;
        }
    };
    return v108;
};
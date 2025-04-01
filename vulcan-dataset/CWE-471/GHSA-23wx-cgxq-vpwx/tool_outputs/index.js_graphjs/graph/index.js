const merge = function (a, b, k) {
    const v50 = typeof a;
    const v51 = v50 === 'object';
    const v52 = typeof b;
    const v53 = v52 === 'object';
    const v54 = v51 && v53;
    if (v54) {
        const v55 = Array.isArray(a);
        const v56 = Array.isArray(b);
        const v57 = v55 && v56;
        if (v57) {
            k = 0
            const v58 = b.length;
            let v59 = k < v58;
            while (v59) {
                const v61 = a[k];
                const v62 = b[k];
                const v63 = merge(v61, v62);
                a[k] = v63;
                const v60 = k++;
                v59 = k < v58;
            }
        } else {
            for (k in b) {
                const v64 = a[k];
                const v65 = b[k];
                const v66 = merge(v64, v65);
                a[k] = v66;
            }
        }
        return a;
    }
    return b;
};
const dset = function (obj, keys, val) {
    const v67 = keys.split;
    const v68 = v67 && (keys = keys.split('.'));
    v68;
    var i = 0;
    var l = keys.length;
    var t = obj;
    var x;
    var k;
    let v69 = i < l;
    while (v69) {
        const v70 = i++;
        k = keys[v70];
        const v71 = k === '__proto__';
        const v72 = k === 'constructor';
        const v73 = v71 || v72;
        const v74 = k === 'prototype';
        const v75 = v73 || v74;
        if (v75) {
            break;
        }
        const v76 = i === l;
        const v77 = t[k];
        const v78 = merge(v77, val);
        const v79 = typeof (x = t[k]);
        const v80 = typeof keys;
        const v81 = v79 === v80;
        const v82 = keys[i];
        const v83 = v82 * 0;
        const v84 = v83 !== 0;
        const v85 = keys[i];
        const v86 = '' + v85;
        const v87 = v86.indexOf('.');
        const v88 = ~v87;
        const v89 = !v88;
        const v90 = !v89;
        const v91 = v84 || v90;
        const v92 = {};
        const v93 = [];
        let v94;
        if (v91) {
            v94 = v92;
        } else {
            v94 = v93;
        }
        let v95;
        if (v81) {
            v95 = x;
        } else {
            v95 = v94;
        }
        let v96;
        if (v76) {
            v96 = v78;
        } else {
            v96 = v95;
        }
        t.k = v96;
        t = t[k];
        v69 = i < l;
    }
};
const v97 = module.exports;
v97.dset = dset;
const v98 = module.exports;
v98.merge = merge;
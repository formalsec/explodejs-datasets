const merge = function (a, b, k) {
    const v48 = typeof a;
    const v49 = v48 === 'object';
    const v50 = typeof b;
    const v51 = v50 === 'object';
    const v52 = v49 && v51;
    if (v52) {
        const v53 = Array.isArray(a);
        const v54 = Array.isArray(b);
        const v55 = v53 && v54;
        if (v55) {
            k = 0
            const v56 = b.length;
            let v57 = k < v56;
            while (v57) {
                const v59 = a[k];
                const v60 = b[k];
                const v61 = merge(v59, v60);
                a[k] = v61;
                const v58 = k++;
                v57 = k < v56;
            }
        } else {
            for (k in b) {
                const v62 = a[k];
                const v63 = b[k];
                const v64 = merge(v62, v63);
                a[k] = v64;
            }
        }
        return a;
    }
    return b;
};
const dset = function (obj, keys, val) {
    const v65 = keys.split;
    const v66 = v65 && (keys = keys.split('.'));
    v66;
    var i = 0;
    var l = keys.length;
    var t = obj;
    var x;
    var k;
    let v67 = i < l;
    while (v67) {
        const v68 = i++;
        k = keys[v68];
        const v69 = k === '__proto__';
        const v70 = k === 'constructor';
        const v71 = v69 || v70;
        const v72 = k === 'prototype';
        const v73 = v71 || v72;
        if (v73) {
            break;
        }
        const v74 = i === l;
        const v75 = t[k];
        const v76 = merge(v75, val);
        const v77 = typeof (x = t[k]);
        const v78 = typeof keys;
        const v79 = v77 === v78;
        const v80 = keys[i];
        const v81 = v80 * 0;
        const v82 = v81 !== 0;
        const v83 = keys[i];
        const v84 = '' + v83;
        const v85 = v84.indexOf('.');
        const v86 = ~v85;
        const v87 = !v86;
        const v88 = !v87;
        const v89 = v82 || v88;
        const v90 = {};
        const v91 = [];
        let v92;
        if (v89) {
            v92 = v90;
        } else {
            v92 = v91;
        }
        let v93;
        if (v79) {
            v93 = x;
        } else {
            v93 = v92;
        }
        let v94;
        if (v74) {
            v94 = v76;
        } else {
            v94 = v93;
        }
        t.k = v94;
        t = t[k];
        v67 = i < l;
    }
};
exports.dset = dset;
exports.merge = merge;
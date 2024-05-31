var set;
const v74 = function (object, keypath, value) {
    var k;
    var kp;
    var o;
    const v38 = typeof keypath;
    const v39 = v38 === 'string';
    if (v39) {
        keypath = keypath.split('.');
    }
    const v40 = keypath instanceof Array;
    const v41 = !v40;
    if (v41) {
        const v42 = JSON.stringify(keypath);
        const v43 = 'invalid keypath: ' + v42;
        throw v43;
    }
    const v44 = [];
    kp = v44.concat(keypath);
    o = object;
    const v45 = kp.length;
    let v46 = v45 > 1;
    while (v46) {
        k = kp.shift();
        const v47 = o[k];
        const v48 = v47 == null;
        if (v48) {
            const v49 = parseInt(k);
            const v50 = Number.isNaN(v49);
            const v51 = !v50;
            if (v51) {
                o.k = [];
                o = o[k];
            } else {
                const v52 = {};
                o.k = v52;
                o = o[k];
            }
        } else {
            o = o[k];
        }
        v46 = v45 > 1;
    }
    const v53 = kp.length;
    const v54 = v53 === 1;
    const v55 = o != null;
    const v56 = v54 && v55;
    if (v56) {
        const v57 = void 0;
        const v58 = value === v57;
        if (v58) {
            const v59 = kp[0];
            const v60 = o[v59];
            const v61 = delete v60;
            v61;
        } else {
            const v62 = kp[0];
            o[v62] = value;
            const v63 = kp[0];
            const v64 = o[v63];
            const v65 = v64 !== value;
            if (v65) {
                const v66 = JSON.stringify(value);
                const v67 = 'couldn\'t set value ' + v66;
                const v68 = v67 + ' for keypath ';
                const v69 = keypath.join('.');
                const v70 = v68 + v69;
                const v71 = v70 + ' in ';
                const v72 = JSON.stringify(object);
                const v73 = v71 + v72;
                throw v73;
            }
        }
    }
    return object;
};
set = v74;
module.exports = set;
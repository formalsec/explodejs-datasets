var set;
const v43 = [];
var indexOf = v43.indexOf;
const v84 = function (object, keypath, value) {
    var k;
    var kp;
    var o;
    const v44 = typeof keypath;
    const v45 = v44 === 'string';
    if (v45) {
        keypath = keypath.split('.');
    }
    const v46 = keypath instanceof Array;
    const v47 = !v46;
    if (v47) {
        const v48 = JSON.stringify(keypath);
        const v49 = 'invalid keypath: ' + v48;
        throw v49;
    }
    const v50 = [];
    kp = v50.concat(keypath);
    const v51 = indexOf.call(keypath, '__proto__');
    const v52 = v51 >= 0;
    if (v52) {
        const v53 = JSON.stringify(keypath);
        const v54 = '__proto__ in keypath: ' + v53;
        throw v54;
    }
    o = object;
    const v55 = kp.length;
    let v56 = v55 > 1;
    while (v56) {
        k = kp.shift();
        const v57 = o[k];
        const v58 = v57 == null;
        if (v58) {
            const v59 = parseInt(k);
            const v60 = Number.isNaN(v59);
            const v61 = !v60;
            if (v61) {
                o.k = [];
                o = o[k];
            } else {
                const v62 = {};
                o.k = v62;
                o = o[k];
            }
        } else {
            o = o[k];
        }
        v56 = v55 > 1;
    }
    const v63 = kp.length;
    const v64 = v63 === 1;
    const v65 = o != null;
    const v66 = v64 && v65;
    if (v66) {
        const v67 = void 0;
        const v68 = value === v67;
        if (v68) {
            const v69 = kp[0];
            const v70 = o[v69];
            const v71 = delete v70;
            v71;
        } else {
            const v72 = kp[0];
            o[v72] = value;
            const v73 = kp[0];
            const v74 = o[v73];
            const v75 = v74 !== value;
            if (v75) {
                const v76 = JSON.stringify(value);
                const v77 = 'couldn\'t set value ' + v76;
                const v78 = v77 + ' for keypath ';
                const v79 = keypath.join('.');
                const v80 = v78 + v79;
                const v81 = v80 + ' in ';
                const v82 = JSON.stringify(object);
                const v83 = v81 + v82;
                throw v83;
            }
        }
    }
    return object;
};
set = v84;
module.exports = set;
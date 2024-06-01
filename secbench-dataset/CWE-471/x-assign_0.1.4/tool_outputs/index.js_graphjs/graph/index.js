'use strict';
const v66 = function (...args) {
    const apply = function (acc, obj) {
        const v34 = obj == null;
        const v35 = typeof obj;
        const v36 = v35 !== 'object';
        const v37 = v34 || v36;
        if (v37) {
            return;
        }
        const v38 = Object.keys(obj);
        const v61 = key => {
            const value = obj[key];
            const v39 = Array.isArray(value);
            if (v39) {
                const v40 = acc[key];
                const v41 = acc[key];
                const v42 = Array.isArray(v41);
                const v43 = v40 && v42;
                const v44 = acc[key];
                const v45 = v44.concat(value);
                let v46;
                if (v43) {
                    v46 = v45;
                } else {
                    v46 = value;
                }
                acc[key] = v46;
            } else {
                const v47 = typeof value;
                const v48 = v47 === 'object';
                if (v48) {
                    const v49 = acc[key];
                    const v50 = {};
                    acc[key] = v49 || v50;
                    const v51 = acc[key];
                    const v52 = Array.isArray(v51);
                    if (v52) {
                        const v53 = {};
                        acc[key] = v53;
                        const v54 = acc[key];
                        const v55 = apply(v54, value);
                        v55;
                    } else {
                        const v56 = acc[key];
                        const v57 = typeof v56;
                        const v58 = v57 === 'object';
                        if (v58) {
                            const v59 = acc[key];
                            const v60 = apply(v59, value);
                            v60;
                        } else {
                            acc[key] = value;
                        }
                    }
                } else {
                    acc[key] = value;
                }
            }
        };
        const v62 = v38.forEach(v61);
        v62;
    };
    const result = {};
    const v64 = obj => {
        const v63 = apply(result, obj);
        return v63;
    };
    const v65 = args.forEach(v64);
    v65;
    return result;
};
const XAssign = {};
XAssign.assign = v66;
module.exports = XAssign;
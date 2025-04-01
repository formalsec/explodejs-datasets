'use strict';
const assign = function (...args) {
    const apply = function (acc, obj) {
        const v33 = obj == null;
        const v34 = typeof obj;
        const v35 = v34 !== 'object';
        const v36 = v33 || v35;
        if (v36) {
            return;
        }
        const v37 = Object.keys(obj);
        const v60 = key => {
            const value = obj[key];
            const v38 = Array.isArray(value);
            if (v38) {
                const v39 = acc[key];
                const v40 = acc[key];
                const v41 = Array.isArray(v40);
                const v42 = v39 && v41;
                const v43 = acc[key];
                const v44 = v43.concat(value);
                let v45;
                if (v42) {
                    v45 = v44;
                } else {
                    v45 = value;
                }
                acc[key] = v45;
            } else {
                const v46 = typeof value;
                const v47 = v46 === 'object';
                if (v47) {
                    const v48 = acc[key];
                    const v49 = {};
                    acc[key] = v48 || v49;
                    const v50 = acc[key];
                    const v51 = Array.isArray(v50);
                    if (v51) {
                        const v52 = {};
                        acc[key] = v52;
                        const v53 = acc[key];
                        const v54 = apply(v53, value);
                        v54;
                    } else {
                        const v55 = acc[key];
                        const v56 = typeof v55;
                        const v57 = v56 === 'object';
                        if (v57) {
                            const v58 = acc[key];
                            const v59 = apply(v58, value);
                            v59;
                        } else {
                            acc[key] = value;
                        }
                    }
                } else {
                    acc[key] = value;
                }
            }
        };
        const v61 = v37.forEach(v60);
        v61;
    };
    const result = {};
    const v63 = obj => {
        const v62 = apply(result, obj);
        return v62;
    };
    const v64 = args.forEach(v63);
    v64;
    return result;
};
module.exports = assign;
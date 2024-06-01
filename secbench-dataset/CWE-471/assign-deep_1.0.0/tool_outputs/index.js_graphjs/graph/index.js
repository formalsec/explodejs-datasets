'use strict';
const assignSymbols = require('assign-symbols');
const v38 = Object.prototype;
const toString = v38.toString;
const v63 = (target, ...args) => {
    let i = 0;
    const v39 = isPrimitive(target);
    if (v39) {
        const v40 = i++;
        target = args[v40];
    }
    const v41 = !target;
    if (v41) {
        target = {};
    }
    const v42 = args.length;
    let v43 = i < v42;
    while (v43) {
        const v45 = args[i];
        const v46 = isObject(v45);
        if (v46) {
            let key;
            const v47 = args[i];
            const v48 = Object.keys(v47);
            for (key of v48) {
                const v49 = target[key];
                const v50 = isObject(v49);
                const v51 = args[i];
                const v52 = v51[key];
                const v53 = isObject(v52);
                const v54 = v50 && v53;
                if (v54) {
                    const v55 = target[key];
                    const v56 = args[i];
                    const v57 = v56[key];
                    const v58 = assign(v55, v57);
                    v58;
                } else {
                    const v59 = args[i];
                    const v60 = v59[key];
                    target[key] = v60;
                }
            }
            const v61 = args[i];
            const v62 = assignSymbols(target, v61);
            v62;
        }
        const v44 = i++;
        v43 = i < v42;
    }
    return target;
};
module.exports = v63;
const assign = module.exports;
const isObject = function (val) {
    const v64 = typeof val;
    const v65 = v64 === 'function';
    const v66 = toString.call(val);
    const v67 = v66 === '[object Object]';
    const v68 = v65 || v67;
    return v68;
};
const isPrimitive = function (val) {
    const v69 = typeof val;
    const v70 = v69 === 'object';
    const v71 = val === null;
    const v72 = typeof val;
    const v73 = v72 !== 'function';
    let v74;
    if (v70) {
        v74 = v71;
    } else {
        v74 = v73;
    }
    return v74;
};
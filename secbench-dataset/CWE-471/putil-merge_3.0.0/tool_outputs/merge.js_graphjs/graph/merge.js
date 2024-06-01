const isObject = item => {
    const v61 = typeof item;
    const v62 = v61 === 'object';
    const v63 = Array.isArray(item);
    const v64 = !v63;
    const v65 = v62 && v64;
    return v65;
};
const merge = function (target, source, options = {}) {
    const v66 = isObject(target);
    const v67 = !v66;
    if (v67) {
        const v68 = new TypeError('Property "target" requires object type');
        throw v68;
    }
    const v69 = isObject(source);
    const v70 = !v69;
    if (v70) {
        const v71 = new TypeError('Property "source" requires object type');
        throw v71;
    }
    const v72 = source === target;
    if (v72) {
        return target;
    }
    let key;
    const v73 = Object.getOwnPropertyNames(source);
    for (key of v73) {
        const v74 = options.filter;
        const v75 = options.filter(source, key);
        const v76 = !v75;
        const v77 = v74 && v76;
        if (v77) {
            continue;
        }
        const src = Object.getOwnPropertyDescriptor(source, key);
        const v78 = options.descriptor;
        if (v78) {
            const v79 = src.get;
            const v80 = src.set;
            const v81 = v79 || v80;
            const v82 = src.value;
            const v83 = typeof v82;
            const v84 = v83 === 'function';
            const v85 = v81 || v84;
            if (v85) {
                const v86 = Object.defineProperty(target, key, src);
                v86;
                continue;
            }
        } else {
            const v87 = src.value;
            const v88 = typeof v87;
            const v89 = v88 === 'function';
            if (v89) {
                continue;
            }
        }
        let srcVal = src.value;
        let trgVal = target[key];
        const v90 = isObject(srcVal);
        if (v90) {
            const v91 = options.deep;
            if (v91) {
                const v92 = isObject(trgVal);
                const v93 = !v92;
                if (v93) {
                    const v94 = {};
                    target.key = v94;
                    trgVal = target[key];
                }
                const v95 = merge(trgVal, srcVal, options);
                v95;
                continue;
            }
            const v96 = options.clone;
            if (v96) {
                const v97 = {};
                srcVal = merge(v97, srcVal, options);
            }
        } else {
            const v98 = Array.isArray(srcVal);
            if (v98) {
                const v99 = options.arrayMerge;
                const v100 = Array.isArray(trgVal);
                const v101 = v99 && v100;
                if (v101) {
                    const v102 = options.arrayMerge;
                    const v103 = typeof v102;
                    const v104 = v103 === 'function';
                    if (v104) {
                        srcVal = options.arrayMerge(trgVal, srcVal);
                    } else {
                        srcVal = merge.arrayCombine(trgVal, srcVal);
                    }
                } else {
                    const v105 = options.clone;
                    if (v105) {
                        srcVal = srcVal.slice();
                    }
                }
            }
        }
        const v106 = options.descriptor;
        if (v106) {
            const src = Object.getOwnPropertyDescriptor(source, key);
            const v107 = src.configurable;
            const v108 = src.enumerable;
            const v109 = src.writable;
            const v110 = {
                configurable: v107,
                enumerable: v108,
                writable: v109,
                value: srcVal
            };
            const v111 = Object.defineProperty(target, key, v110);
            v111;
        } else {
            target[key] = srcVal;
        }
    }
    return target;
};
const all = function (objects, options = {}) {
    const target = objects[0];
    let [i, o];
    const v112 = objects.entries();
    for ([i, o] of v112) {
        const v113 = i > 0;
        if (v113) {
            const v114 = merge(target, o, options);
            v114;
        }
    }
    return target;
};
merge.all = all;
const v120 = function (target, source) {
    const v117 = v => {
        const v115 = target.includes(v);
        const v116 = !v115;
        return v116;
    };
    const v118 = source.filter(v117);
    const v119 = target.concat(v118);
    return v119;
};
merge.arrayCombine = v120;
module.exports = merge;
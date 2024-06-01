const defaultDelimiter = '.';
const isDate = obj => {
    const v55 = obj instanceof Date;
    return v55;
};
const flatten = (obj, delimiter) => {
    const result = {};
    const seperator = delimiter || defaultDelimiter;
    const v56 = typeof obj;
    const v57 = v56 !== 'object';
    const v58 = isDate(obj);
    const v59 = v57 || v58;
    if (v59) {
        return obj;
    }
    const flat = (original, stack, prev) => {
        const v60 = Object.entries(original);
        const v80 = ([key, value]) => {
            let newKey;
            const v61 = prev + seperator;
            const v62 = v61 + key;
            if (prev) {
                newKey = v62;
            } else {
                newKey = key;
            }
            const v63 = typeof value;
            const v64 = v63 === 'object';
            const v65 = value !== null;
            const v66 = v64 && v65;
            if (v66) {
                const v71 = s => {
                    const v67 = value === s;
                    const v68 = isDate(value);
                    const v69 = !v68;
                    const v70 = v67 && v69;
                    if (v70) {
                        value = '[Circular]';
                    }
                };
                const v72 = stack.forEach(v71);
                v72;
                const v73 = stack.push(value);
                v73;
                const v74 = typeof value;
                const v75 = v74 === 'object';
                const v76 = isDate(value);
                const v77 = !v76;
                const v78 = v75 && v77;
                if (v78) {
                    const v79 = flat(value, stack, newKey);
                    return v79;
                }
            }
            result[newKey] = value;
        };
        const v81 = v60.forEach(v80);
        v81;
    };
    const v82 = [obj];
    const v83 = flat(obj, v82);
    v83;
    return result;
};
const unflatten = (obj, delimiter) => {
    const result = {};
    const seperator = delimiter || defaultDelimiter;
    const v84 = typeof obj;
    const v85 = v84 !== 'object';
    const v86 = isDate(obj);
    const v87 = v85 || v86;
    if (v87) {
        return obj;
    }
    const unflat = original => {
        const v88 = Object.keys(original);
        const v105 = key => {
            const newKeys = key.split(seperator);
            const v103 = (o, k, i) => {
                const v89 = o[k];
                const v90 = i + 1;
                const v91 = newKeys[v90];
                const v92 = Number(v91);
                const v93 = isNaN(v92);
                const v94 = newKeys.length;
                const v95 = v94 - 1;
                const v96 = v95 === i;
                const v97 = original[key];
                const v98 = {};
                let v99;
                if (v96) {
                    v99 = v97;
                } else {
                    v99 = v98;
                }
                const v100 = [];
                let v101;
                if (v93) {
                    v101 = v99;
                } else {
                    v101 = v100;
                }
                const v102 = v89 || (o[k] = v101);
                return v102;
            };
            const v104 = newKeys.reduce(v103, result);
            v104;
        };
        const v106 = v88.forEach(v105);
        v106;
    };
    const v107 = unflat(obj);
    v107;
    return result;
};
const v108 = {};
v108.flatten = flatten;
v108.unflatten = unflatten;
module.exports = v108;
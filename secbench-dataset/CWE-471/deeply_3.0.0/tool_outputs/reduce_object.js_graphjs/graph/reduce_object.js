module.exports = reduceObject;
const recursiveMerge = function (target, source) {
    const v24 = Array.isArray(target);
    const v25 = Array.isArray(source);
    const v26 = v24 && v25;
    if (v26) {
        const v27 = target.concat(source);
        return v27;
    } else {
        const v28 = isObject(target);
        const v29 = isObject(source);
        const v30 = v28 && v29;
        if (v30) {
            let key;
            for (key in source) {
                const v31 = Object.prototype;
                const v32 = v31.hasOwnProperty;
                const v33 = v32.call(source, key);
                if (v33) {
                    const v34 = target[key];
                    const v35 = source[key];
                    const v36 = recursiveMerge(v34, v35);
                    target[key] = v36;
                }
            }
            return target;
        }
    }
    return source;
};
const isObject = function (value) {
    const v37 = value !== null;
    const v38 = typeof value;
    const v39 = v38 === 'object';
    const v40 = v37 && v39;
    return v40;
};
const reduceObject = function (target, source) {
    const v41 = Object.keys(source);
    const v45 = key => {
        const v42 = target[key];
        const v43 = source[key];
        const v44 = recursiveMerge(v42, v43);
        target[key] = v44;
    };
    const v46 = v41.forEach(v45);
    v46;
    return target;
};
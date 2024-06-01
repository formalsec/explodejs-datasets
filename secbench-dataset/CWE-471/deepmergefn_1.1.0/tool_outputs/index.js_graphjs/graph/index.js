const deepMerge = function (target, source) {
    let prop;
    for (prop in source) {
        const v11 = source.hasOwnProperty(prop);
        if (v11) {
            const v12 = target[prop];
            const v13 = source[prop];
            const v14 = typeof v13;
            const v15 = v14 === 'object';
            const v16 = v12 && v15;
            if (v16) {
                const v17 = target[prop];
                const v18 = source[prop];
                const v19 = deepMerge(v17, v18);
                v19;
            } else {
                const v20 = source[prop];
                target[prop] = v20;
            }
        }
    }
    return target;
};
module.exports = deepMerge;
var mergeObjects;
const v58 = function (object1, object2) {
    var key;
    const v30 = typeof object1;
    const v31 = v30 !== 'object';
    if (v31) {
        const v32 = typeof object2;
        const v33 = v32 !== 'object';
        if (v33) {
            const v34 = [
                object1,
                object2
            ];
            return v34;
        }
        const v35 = object2.concat(object1);
        return v35;
    }
    const v36 = typeof object2;
    const v37 = v36 !== 'object';
    if (v37) {
        const v38 = object1.concat(object2);
        return v38;
    }
    for (key in object2) {
        const v39 = object1[key];
        const v40 = Array.isArray(v39);
        const v41 = object2[key];
        const v42 = Array.isArray(v41);
        const v43 = v40 && v42;
        if (v43) {
            const v44 = object1[key];
            const v45 = object2[key];
            const v46 = v44.concat(v45);
            object1[key] = v46;
        } else {
            const v47 = object1[key];
            const v48 = typeof v47;
            const v49 = v48 === 'object';
            const v50 = object2[key];
            const v51 = typeof v50;
            const v52 = v51 === 'object';
            const v53 = v49 && v52;
            if (v53) {
                const v54 = object1[key];
                const v55 = object2[key];
                const v56 = mergeObjects(v54, v55);
                object1[key] = v56;
            } else {
                const v57 = object2[key];
                object1[key] = v57;
            }
        }
    }
    return object1;
};
mergeObjects = v58;
module.exports = mergeObjects;
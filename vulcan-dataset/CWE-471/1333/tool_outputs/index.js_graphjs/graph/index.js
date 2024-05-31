const arupex_deep_setter = function (obj, accessor, value) {
    const v25 = !obj;
    if (v25) {
        obj = {};
    }
    var keys = accessor.split('.');
    var ref = obj;
    var index = 0;
    const cleanupIndexAccessor = function (key) {
        const v26 = key.replace('[@', '');
        const v27 = v26.replace(']', '');
        return v27;
    };
    const v45 = function (key) {
        const v28 = index + 1;
        var lookAhead = keys[v28];
        key = cleanupIndexAccessor(key);
        const v29 = ref[key];
        const v30 = typeof v29;
        const v31 = v30 === 'undefined';
        if (v31) {
            const v32 = lookAhead.indexOf('[@');
            const v33 = -1;
            const v34 = v32 > v33;
            const v35 = lookAhead && v34;
            const v36 = cleanupIndexAccessor(lookAhead);
            const v37 = isNaN(v36);
            const v38 = !v37;
            const v39 = v35 && v38;
            if (v39) {
                ref[key] = [];
            } else {
                const v40 = {};
                ref[key] = v40;
            }
        }
        const v41 = keys.length;
        const v42 = v41 - 1;
        const v43 = index === v42;
        if (v43) {
            ref[key] = value;
        }
        ref = ref[key];
        const v44 = ++index;
        v44;
    };
    const v46 = keys.forEach(v45);
    v46;
    return obj;
};
const v47 = typeof module;
const v48 = v47 !== 'undefined';
if (v48) {
    module.exports = arupex_deep_setter;
}
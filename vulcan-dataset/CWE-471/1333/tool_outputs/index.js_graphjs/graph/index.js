const arupex_deep_setter = function (obj, accessor, value) {
    const v23 = !obj;
    if (v23) {
        obj = {};
    }
    var keys = accessor.split('.');
    var ref = obj;
    var index = 0;
    const cleanupIndexAccessor = function (key) {
        const v24 = key.replace('[@', '');
        const v25 = v24.replace(']', '');
        return v25;
    };
    const v43 = function (key) {
        const v26 = index + 1;
        var lookAhead = keys[v26];
        key = cleanupIndexAccessor(key);
        const v27 = ref[key];
        const v28 = typeof v27;
        const v29 = v28 === 'undefined';
        if (v29) {
            const v30 = lookAhead.indexOf('[@');
            const v31 = -1;
            const v32 = v30 > v31;
            const v33 = lookAhead && v32;
            const v34 = cleanupIndexAccessor(lookAhead);
            const v35 = isNaN(v34);
            const v36 = !v35;
            const v37 = v33 && v36;
            if (v37) {
                ref[key] = [];
            } else {
                const v38 = {};
                ref[key] = v38;
            }
        }
        const v39 = keys.length;
        const v40 = v39 - 1;
        const v41 = index === v40;
        if (v41) {
            ref[key] = value;
        }
        ref = ref[key];
        const v42 = ++index;
        v42;
    };
    const v44 = keys.forEach(v43);
    v44;
    return obj;
};
module.exports = arupex_deep_setter;
const v11 = [
    './forOwn',
    '../lang/isPlainObject'
];
const v19 = function (forOwn, isPlainObject) {
    const deepMixIn = function (target, objects) {
        var i = 0;
        var n = arguments.length;
        var obj;
        const v12 = ++i;
        let v13 = v12 < n;
        while (v13) {
            obj = arguments[i];
            if (obj) {
                const v14 = forOwn(obj, copyProp, target);
                v14;
            }
            v13 = v12 < n;
        }
        return target;
    };
    const copyProp = function (val, key) {
        var existing = this[key];
        const v15 = isPlainObject(val);
        const v16 = isPlainObject(existing);
        const v17 = v15 && v16;
        if (v17) {
            const v18 = deepMixIn(existing, val);
            v18;
        } else {
            this[key] = val;
        }
    };
    return deepMixIn;
};
const v20 = define(v11, v19);
v20;
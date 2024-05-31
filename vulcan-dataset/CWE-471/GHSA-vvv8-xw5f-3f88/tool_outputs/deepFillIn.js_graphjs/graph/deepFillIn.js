const v13 = [
    './forOwn',
    '../lang/isPlainObject'
];
const v23 = function (forOwn, isPlainObject) {
    const deepFillIn = function (target, defaults) {
        var i = 0;
        var n = arguments.length;
        var obj;
        const v14 = ++i;
        let v15 = v14 < n;
        while (v15) {
            obj = arguments[i];
            if (obj) {
                const v21 = function (newValue, key) {
                    var curValue = target[key];
                    const v16 = curValue == null;
                    if (v16) {
                        target[key] = newValue;
                    } else {
                        const v17 = isPlainObject(curValue);
                        const v18 = isPlainObject(newValue);
                        const v19 = v17 && v18;
                        if (v19) {
                            const v20 = deepFillIn(curValue, newValue);
                            v20;
                        }
                    }
                };
                const v22 = forOwn(obj, v21);
                v22;
            }
            v15 = v14 < n;
        }
        return target;
    };
    return deepFillIn;
};
const v24 = define(v13, v23);
v24;
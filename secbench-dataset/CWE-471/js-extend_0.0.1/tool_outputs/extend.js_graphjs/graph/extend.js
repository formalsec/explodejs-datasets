const v35 = function () {
    const v19 = Array.prototype;
    var slice = v19.slice;
    const v20 = Array.prototype;
    var each = v20.forEach;
    var extend = function (obj) {
        const v21 = typeof obj;
        const v22 = v21 !== 'object';
        if (v22) {
            const v23 = obj + ' is not an object';
            throw v23;
        }
        var sources = slice.call(arguments, 1);
        const v33 = function (source) {
            if (source) {
                let prop;
                for (prop in source) {
                    const v24 = source[prop];
                    const v25 = typeof v24;
                    const v26 = v25 === 'object';
                    const v27 = obj[prop];
                    const v28 = v26 && v27;
                    if (v28) {
                        const v29 = obj[prop];
                        const v30 = source[prop];
                        const v31 = extend.call(obj, v29, v30);
                        v31;
                    } else {
                        const v32 = source[prop];
                        obj[prop] = v32;
                    }
                }
            }
        };
        const v34 = each.call(sources, v33);
        v34;
        return obj;
    };
    this.extend = extend;
};
const v36 = v35.call(this);
v36;
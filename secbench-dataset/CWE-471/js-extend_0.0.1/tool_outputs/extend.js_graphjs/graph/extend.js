const v17 = Array.prototype;
var slice = v17.slice;
const v18 = Array.prototype;
var each = v18.forEach;
var extend = function (obj) {
    const v19 = typeof obj;
    const v20 = v19 !== 'object';
    if (v20) {
        const v21 = obj + ' is not an object';
        throw v21;
    }
    var sources = slice.call(arguments, 1);
    const v31 = function (source) {
        if (source) {
            let prop;
            for (prop in source) {
                const v22 = source[prop];
                const v23 = typeof v22;
                const v24 = v23 === 'object';
                const v25 = obj[prop];
                const v26 = v24 && v25;
                if (v26) {
                    const v27 = obj[prop];
                    const v28 = source[prop];
                    const v29 = extend.call(obj, v27, v28);
                    v29;
                } else {
                    const v30 = source[prop];
                    obj[prop] = v30;
                }
            }
        }
    };
    const v32 = each.call(sources, v31);
    v32;
    return obj;
};
module.exports = extend;
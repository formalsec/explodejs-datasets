module.exports = extend;
const extend = function () {
    const v31 = [];
    const v32 = v31.slice;
    var args = v32.call(arguments);
    var deep = false;
    const v33 = args[0];
    const v34 = typeof v33;
    const v35 = v34 == 'boolean';
    if (v35) {
        deep = args.shift();
    }
    var result = args[0];
    const v36 = !result;
    const v37 = typeof result;
    const v38 = v37 != 'object';
    const v39 = typeof result;
    const v40 = v39 != 'function';
    const v41 = v38 && v40;
    const v42 = v36 || v41;
    if (v42) {
        const v43 = new Error('extendee must be an object');
        throw v43;
    }
    var extenders = args.slice(1);
    var len = extenders.length;
    var i = 0;
    let v44 = i < len;
    while (v44) {
        var extender = extenders[i];
        let key;
        for (key in extender) {
            const v46 = extender.hasOwnProperty(key);
            if (v46) {
                var value = extender[key];
                const v47 = isCloneable(value);
                const v48 = deep && v47;
                if (v48) {
                    let base;
                    const v49 = Array.isArray(value);
                    const v50 = [];
                    const v51 = {};
                    if (v49) {
                        base = v50;
                    } else {
                        base = v51;
                    }
                    const v52 = result[key];
                    const v53 = v52 || base;
                    const v54 = extend(true, v53, value);
                    result[key] = v54;
                } else {
                    result[key] = value;
                }
            }
        }
        const v45 = i++;
        v44 = i < len;
    }
    return result;
};
const isCloneable = function (obj) {
    const v55 = Array.isArray(obj);
    const v56 = {};
    const v57 = v56.toString;
    const v58 = v57.call(obj);
    const v59 = v58 == '[object Object]';
    const v60 = v55 || v59;
    return v60;
};
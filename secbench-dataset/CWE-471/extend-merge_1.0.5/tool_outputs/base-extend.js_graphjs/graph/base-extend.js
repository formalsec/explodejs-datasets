const clonable = function (value) {
    const v31 = value != null;
    const v32 = value.constructor;
    const v33 = v32 === Object;
    const v34 = v31 && v33;
    return v34;
};
const baseExtend = function (args, merge) {
    var i;
    var j;
    var obj;
    var src;
    var key;
    var keys;
    var len;
    var target = args[0];
    var length = args.length;
    (i = 1)
    let v35 = i < length;
    while (v35) {
        obj = args[i];
        const v37 = obj === null;
        const v38 = typeof obj;
        const v39 = v38 !== 'object';
        const v40 = v37 || v39;
        const v41 = typeof obj;
        const v42 = v41 !== 'function';
        const v43 = v40 && v42;
        if (v43) {
            continue;
        }
        keys = Object.keys(obj);
        len = keys.length;
        j = 0
        let v44 = j < len;
        while (v44) {
            key = keys[j];
            src = obj[key];
            const v46 = clonable(src);
            if (v46) {
                const v47 = target[key];
                const v48 = clonable(v47);
                const v49 = merge && v48;
                if (v49) {
                    const v50 = target[key];
                    const v51 = [
                        v50,
                        src
                    ];
                    const v52 = baseExtend(v51, merge);
                    v52;
                } else {
                    const v53 = src !== undefined;
                    if (v53) {
                        const v54 = {};
                        const v55 = [
                            v54,
                            src
                        ];
                        const v56 = baseExtend(v55, merge);
                        target[key] = v56;
                    }
                }
            } else {
                const v57 = src !== undefined;
                if (v57) {
                    const v58 = Array.isArray(src);
                    const v59 = src.slice();
                    let v60;
                    if (v58) {
                        v60 = v59;
                    } else {
                        v60 = src;
                    }
                    target[key] = v60;
                }
            }
            const v45 = j++;
            v44 = j < len;
        }
        const v36 = ++i;
        v35 = i < length;
    }
    return target;
};
module.exports = baseExtend;
'use strict';
var is = require('is');
const extend = function () {
    const v31 = arguments[0];
    const v32 = {};
    var target = v31 || v32;
    var i = 1;
    var length = arguments.length;
    var deep = false;
    var options;
    var name;
    var src;
    var copy;
    var copyIsArray;
    var clone;
    const v33 = typeof target;
    const v34 = v33 === 'boolean';
    if (v34) {
        deep = target;
        const v35 = arguments[1];
        const v36 = {};
        target = v35 || v36;
        i = 2;
    }
    const v37 = typeof target;
    const v38 = v37 !== 'object';
    const v39 = is.fn(target);
    const v40 = !v39;
    const v41 = v38 && v40;
    if (v41) {
        target = {};
    }
    let v42 = i < length;
    while (v42) {
        options = arguments[i];
        const v44 = options != null;
        if (v44) {
            const v45 = typeof options;
            const v46 = v45 === 'string';
            if (v46) {
                options = options.split('');
            }
            for (name in options) {
                src = target[name];
                copy = options[name];
                const v47 = target === copy;
                if (v47) {
                    continue;
                }
                const v48 = deep && copy;
                const v49 = is.hash(copy);
                const v50 = v49 || (copyIsArray = is.array(copy));
                const v51 = v48 && v50;
                if (v51) {
                    if (copyIsArray) {
                        copyIsArray = false;
                        const v52 = is.array(src);
                        const v53 = src && v52;
                        const v54 = [];
                        if (v53) {
                            clone = src;
                        } else {
                            clone = v54;
                        }
                    } else {
                        const v55 = is.hash(src);
                        const v56 = src && v55;
                        const v57 = {};
                        if (v56) {
                            clone = src;
                        } else {
                            clone = v57;
                        }
                    }
                    const v58 = extend(deep, clone, copy);
                    target[name] = v58;
                } else {
                    const v59 = typeof copy;
                    const v60 = v59 !== 'undefined';
                    if (v60) {
                        target[name] = copy;
                    }
                }
            }
        }
        const v43 = i++;
        v42 = i < length;
    }
    return target;
};
module.exports = extend;
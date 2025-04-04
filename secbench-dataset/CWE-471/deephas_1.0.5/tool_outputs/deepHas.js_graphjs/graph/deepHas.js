var indexFalse;
var indexTrue;
var indexer;
var reduce;
var add;
var has;
var get;
var set;
const indexer = function (set) {
    const v44 = function (obj, i) {
        'use strict';
        try {
            const v35 = obj && i;
            const v36 = obj.hasOwnProperty(i);
            const v37 = v35 && v36;
            if (v37) {
                const v38 = obj[i];
                return v38;
            } else {
                const v39 = obj && i;
                const v40 = v39 && set;
                if (v40) {
                    const v41 = {};
                    obj[i] = v41;
                    const v42 = obj[i];
                    return v42;
                }
            }
            return;
        } catch (ex) {
            const v43 = console.error(ex);
            v43;
            return;
        }
    };
    return v44;
};
indexTrue = indexer(true);
indexFalse = indexer(false);
const reduce = function (obj, str) {
    'use strict';
    try {
        const v45 = typeof str;
        const v46 = v45 !== 'string';
        if (v46) {
            return;
        }
        const v47 = typeof obj;
        const v48 = v47 !== 'object';
        if (v48) {
            return;
        }
        const v49 = str.split('.');
        const v50 = v49.reduce(indexFalse, obj);
        return v50;
    } catch (ex) {
        const v51 = console.error(ex);
        v51;
        return;
    }
};
const add = function (obj, str, val) {
    'use strict';
    try {
        var items = str.split('.');
        const v52 = items.length;
        const v53 = v52 - 1;
        var initial = items.slice(0, v53);
        const v54 = items.length;
        const v55 = v54 - 1;
        var last = items.slice(v55);
        var test = obj[initial];
        test[last] = val;
    } catch (ex) {
        const v56 = console.error(ex);
        v56;
        return;
    }
};
const has = function (target, path) {
    'use strict';
    try {
        var test = reduce(target, path);
        const v57 = typeof test;
        const v58 = v57 !== 'undefined';
        if (v58) {
            return true;
        }
        return false;
    } catch (ex) {
        const v59 = console.error(ex);
        v59;
        return;
    }
};
const get = function (target, path) {
    'use strict';
    try {
        const v60 = reduce(target, path);
        return v60;
    } catch (ex) {
        const v61 = console.error(ex);
        v61;
        return;
    }
};
const set = function (target, path, val) {
    'use strict';
    try {
        const v62 = typeof str;
        const v63 = v62 !== 'string';
        if (v63) {
            return;
        }
        const v64 = typeof obj;
        const v65 = v64 !== 'object';
        if (v65) {
            return;
        }
        const v66 = !val;
        if (v66) {
            return;
        }
        const v67 = add(target, path, val);
        return v67;
    } catch (ex) {
        const v68 = console.error(ex);
        v68;
        return;
    }
};
exports.has = has;
exports.get = get;
exports.set = set;
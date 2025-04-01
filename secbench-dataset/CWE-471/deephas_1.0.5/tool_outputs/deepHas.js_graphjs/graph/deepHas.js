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
        const v52 = typeof str;
        const v53 = v52 !== 'string';
        if (v53) {
            return;
        }
        const v54 = typeof obj;
        const v55 = v54 !== 'object';
        if (v55) {
            return;
        }
        const v56 = !val;
        if (v56) {
            return;
        }
        var items = str.split('.');
        const v57 = items.length;
        const v58 = v57 - 1;
        var initial = items.slice(0, v58);
        const v59 = items.length;
        const v60 = v59 - 1;
        var last = items.slice(v60);
        var test = obj[initial];
        test[last] = val;
    } catch (ex) {
        const v61 = console.error(ex);
        v61;
        return;
    }
};
const has = function (target, path) {
    'use strict';
    try {
        var test = reduce(target, path);
        const v62 = typeof test;
        const v63 = v62 !== 'undefined';
        if (v63) {
            return true;
        }
        return false;
    } catch (ex) {
        const v64 = console.error(ex);
        v64;
        return;
    }
};
const get = function (target, path) {
    'use strict';
    try {
        const v65 = reduce(target, path);
        return v65;
    } catch (ex) {
        const v66 = console.error(ex);
        v66;
        return;
    }
};
const set = function (target, path, val) {
    'use strict';
    try {
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
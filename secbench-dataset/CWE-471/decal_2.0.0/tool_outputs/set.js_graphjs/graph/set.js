'use strict';
const get = require('./get');
const error = require('./error');
const getObjKeyPair = require('./getObjKeyPair');
const CoreObject = require('../core/CoreObject');
const set = function (obj, key, val, quiet, skipCompare) {
    let meta;
    const v26 = typeof key;
    const v27 = v26 === 'string';
    if (v27) {
        const v28 = key.indexOf('.');
        const v29 = -1;
        const v30 = v28 > v29;
        if (v30) {
            obj = getObjKeyPair(obj, key, true);
            key = obj[1];
            obj = obj[0];
        }
        const v31 = global.DECAL_WATCH_ENABLED;
        const v32 = !v31;
        if (v32) {
            quiet = true;
            skipCompare = quiet;
        }
        const v33 = !skipCompare;
        const v34 = get(obj, key);
        const v35 = v34 === val;
        const v36 = v33 && v35;
        if (v36) {
            return false;
        }
        const v37 = obj instanceof CoreObject;
        if (v37) {
            meta = obj.__meta;
            const v38 = meta.setters;
            const v39 = v38[key];
            if (v39) {
                const v40 = meta.setters;
                const v41 = v40[key];
                const v42 = v41.call(obj, val, key);
                v42;
            } else {
                const v43 = meta.values;
                v43[key] = val;
            }
            const v44 = !quiet;
            if (v44) {
                const v45 = obj.propertyDidChange(key);
                v45;
            }
        } else {
            obj[key] = val;
        }
        return obj;
    } else {
        const v46 = arguments.length;
        const v47 = v46 === 2;
        if (v47) {
            let i;
            for (i in key) {
                const v48 = key[i];
                const v49 = set(obj, i, v48, val, quiet);
                v49;
            }
            return obj;
        }
    }
    const v50 = error('Tried to call `set` with unsupported arguments', arguments);
    v50;
};
module.exports = set;
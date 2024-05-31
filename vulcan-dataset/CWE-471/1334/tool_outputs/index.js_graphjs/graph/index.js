'use strict';
const v43 = { value: true };
const v44 = Object.defineProperty(exports, '__esModule', v43);
v44;
const v45 = void 0;
exports.getDeep = v45;
exports.setDeep = exports.getDeep;
const typechecker_1 = require('typechecker');
const getDeep = function (subject, keys) {
    const v46 = typeof keys;
    const v47 = v46 === 'string';
    if (v47) {
        keys = keys.split('.');
    }
    const v48 = keys.length;
    const v49 = v48 === 0;
    if (v49) {
        return;
    }
    const v50 = !subject;
    if (v50) {
        return;
    }
    const v51 = typechecker_1.isObject(subject);
    const v52 = !v51;
    const v53 = typechecker_1.isFunction(subject);
    const v54 = !v53;
    const v55 = v52 && v54;
    if (v55) {
        return;
    }
    let i = 0;
    const v56 = keys.length;
    let n = v56 - 1;
    let v57 = i < n;
    while (v57) {
        const key = keys[i];
        subject = getDeep(subject, key);
        const v59 = !subject;
        if (v59) {
            return;
        }
        const v58 = ++i;
        v57 = i < n;
    }
    const v60 = keys.length;
    const v61 = v60 - 1;
    const key = keys[v61];
    let result;
    const v62 = subject.get;
    const v63 = v62 != null;
    const v64 = subject.get(key);
    const v65 = subject[key];
    if (v63) {
        result = v64;
    } else {
        result = v65;
    }
    return result;
};
exports.getDeep = getDeep;
const setDeep = function (subject, keys, value, opts = {}) {
    const v66 = opts.onlyIfEmpty;
    const v67 = v66 == null;
    if (v67) {
        opts.onlyIfEmpty = false;
    }
    const v68 = typeof keys;
    const v69 = v68 === 'string';
    if (v69) {
        keys = keys.split('.');
    }
    const v70 = keys.length;
    const v71 = v70 === 0;
    if (v71) {
        return;
    }
    let i = 0;
    const v72 = keys.length;
    let n = v72 - 1;
    let v73 = i < n;
    while (v73) {
        const key = keys[i];
        const tmp = getDeep(subject, key);
        if (tmp) {
            subject = tmp;
        } else {
            const v75 = {};
            subject = setDeep(subject, key, v75, opts);
        }
        const v74 = ++i;
        v73 = i < n;
    }
    const v76 = keys.length;
    const v77 = v76 - 1;
    const key = keys[v77];
    let result = getDeep(subject, key);
    const v78 = opts.onlyIfEmpty;
    const v79 = !v78;
    const v80 = result == null;
    const v81 = v79 || v80;
    if (v81) {
        const v82 = subject.set;
        const v83 = v82 != null;
        if (v83) {
            const attrs = {};
            attrs[key] = value;
            const v84 = subject.set(attrs, opts);
            v84;
        } else {
            subject[key] = value;
        }
    }
    result = getDeep(subject, key);
    return result;
};
exports.setDeep = setDeep;
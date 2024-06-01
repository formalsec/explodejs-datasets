'use strict';
const getPath = function (key) {
    const v61 = !key;
    if (v61) {
        const v62 = [];
        return v62;
    } else {
        const v63 = key.split('.');
        return v63;
    }
};
const Store = function () {
    const v64 = {};
    this.store = v64;
};
const v69 = function (key) {
    var target = this.store;
    var path = getPath(key);
    const v65 = path.length;
    let v66 = v65 > 0;
    while (v66) {
        key = path.shift();
        const v67 = target.hasOwnProperty(key);
        const v68 = target && v67;
        if (v68) {
            target = target[key];
            continue;
        }
        return undefined;
        v66 = v65 > 0;
    }
    return target;
};
const v86 = function (key, val) {
    const v70 = val === undefined;
    if (v70) {
        val = key;
        key = null;
    }
    var path = getPath(key);
    const v71 = path.length;
    const v72 = v71 === 0;
    if (v72) {
        const v73 = !val;
        const v74 = typeof val;
        const v75 = v74 !== 'object';
        const v76 = v73 || v75;
        if (v76) {
            return false;
        } else {
            this.store = val;
            return true;
        }
    }
    var target = this.store;
    const v77 = path.length;
    let v78 = v77 > 1;
    while (v78) {
        key = path.shift();
        const v79 = target[key];
        const v80 = !v79;
        const v81 = target[key];
        const v82 = typeof v81;
        const v83 = v82 !== 'object';
        const v84 = v80 || v83;
        if (v84) {
            const v85 = {};
            target[key] = v85;
        }
        target = target[key];
        v78 = v77 > 1;
    }
    key = path.shift();
    target[key] = val;
    return true;
};
const v112 = function (key, val) {
    const v87 = typeof val;
    const v88 = v87 !== 'object';
    const v89 = Array.isArray(val);
    const v90 = v88 || v89;
    const v91 = val === null;
    const v92 = v90 || v91;
    if (v92) {
        const v93 = this.set(key, val);
        return v93;
    }
    var self = this;
    var target = this.store;
    var path = getPath(key);
    var fullKey = key;
    const v94 = path.length;
    let v95 = v94 > 1;
    while (v95) {
        key = path.shift();
        const v96 = target[key];
        const v97 = !v96;
        if (v97) {
            const v98 = {};
            target[key] = v98;
        }
        target = target[key];
        v95 = v94 > 1;
    }
    key = path.shift();
    const v99 = target[key];
    const v100 = typeof v99;
    const v101 = v100 !== 'object';
    const v102 = target[key];
    const v103 = Array.isArray(v102);
    const v104 = v101 || v103;
    if (v104) {
        target[key] = val;
        return true;
    }
    const v105 = Object.keys(val);
    const v110 = function (nested) {
        const v106 = [
            fullKey,
            nested
        ];
        const v107 = v106.join('.');
        const v108 = val[nested];
        const v109 = self.merge(v107, v108);
        return v109;
    };
    const v111 = v105.every(v110);
    return v111;
};
const v114 = function () {
    const v113 = {};
    this.store = v113;
};
const v117 = function () {
    const v115 = this.store;
    const v116 = console.dir(v115);
    v116;
};
const v119 = function () {
    const v118 = Promise.resolve();
    return v118;
};
const v120 = {};
v120.get = v69;
v120.set = v86;
v120.merge = v112;
v120.clear = v114;
v120.print = v117;
v120.save = v119;
Store.prototype = v120;
module.exports = new Store();
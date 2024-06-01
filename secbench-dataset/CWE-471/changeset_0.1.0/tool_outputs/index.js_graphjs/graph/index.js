var _ = require('underscore');
module.exports = diff;
const diff = function (old, new_) {
    var changes = [];
    const v62 = [];
    const v63 = compare(v62, old, new_);
    changes = changes.concat(v63);
    comparing = [];
    return changes;
};
const delCheck = function (op) {
    const v64 = op.type;
    const v65 = v64 === 'put';
    const v66 = op.value;
    const v67 = v66 === undefined;
    const v68 = v65 && v67;
    if (v68) {
        op.type = 'del';
        const v69 = op.value;
        const v70 = delete v69;
        v70;
    }
    return op;
};
var comparing = [];
const compare = function (path, old, new_) {
    var changes = [];
    const v71 = old !== null;
    const v72 = new_ !== null;
    const v73 = v71 && v72;
    const v74 = typeof old;
    const v75 = v74 === 'object';
    const v76 = v73 && v75;
    const v77 = _.contains(comparing, old);
    const v78 = !v77;
    const v79 = v76 && v78;
    if (v79) {
        const v80 = comparing.push(old);
        v80;
        var oldKeys = Object.keys(old);
        var newKeys = Object.keys(new_);
        var sameKeys = _.intersection(oldKeys, newKeys);
        const v84 = function (k) {
            const v81 = path.concat(k);
            const v82 = old[k];
            const v83 = new_[k];
            var childChanges = compare(v81, v82, v83);
            changes = changes.concat(childChanges);
        };
        const v85 = sameKeys.forEach(v84);
        v85;
        var delKeys = _.difference(oldKeys, newKeys);
        const v89 = function (k) {
            const v86 = path.concat(k);
            const v87 = {
                type: 'del',
                key: v86
            };
            const v88 = changes.push(v87);
            v88;
        };
        const v90 = delKeys.forEach(v89);
        v90;
        var newKeys_ = _.difference(newKeys, oldKeys);
        const v96 = function (k) {
            const v91 = path.concat(k);
            const v92 = new_[k];
            const v93 = {
                type: 'put',
                key: v91,
                value: v92
            };
            const v94 = delCheck(v93);
            const v95 = changes.push(v94);
            v95;
        };
        const v97 = newKeys_.forEach(v96);
        v97;
    } else {
        const v98 = old !== new_;
        if (v98) {
            const v99 = {
                type: 'put',
                key: path,
                value: new_
            };
            const v100 = delCheck(v99);
            const v101 = changes.push(v100);
            v101;
        }
    }
    return changes;
};
const v102 = module.exports;
v102.apply = apply;
const apply = function (changes, target, modify) {
    var obj;
    var clone;
    if (modify) {
        obj = target;
    } else {
        clone = require('udc');
        obj = clone(target);
    }
    const v121 = function (ch) {
        var ptr;
        var keys;
        var len;
        const v103 = ch.type;
        switch (v103) {
        case 'put':
            ptr = obj;
            keys = ch.key;
            len = keys.length;
            if (len) {
                const v110 = function (prop, i) {
                    const v104 = prop in ptr;
                    const v105 = !v104;
                    if (v105) {
                        const v106 = {};
                        ptr[prop] = v106;
                    }
                    const v107 = len - 1;
                    const v108 = i < v107;
                    if (v108) {
                        ptr = ptr[prop];
                    } else {
                        const v109 = ch.value;
                        ptr[prop] = v109;
                    }
                };
                const v111 = keys.forEach(v110);
                v111;
            } else {
                obj = ch.value;
            }
            break;
        case 'del':
            ptr = obj;
            keys = ch.key;
            len = keys.length;
            if (len) {
                const v119 = function (prop, i) {
                    const v112 = prop in ptr;
                    const v113 = !v112;
                    if (v113) {
                        const v114 = {};
                        ptr[prop] = v114;
                    }
                    const v115 = len - 1;
                    const v116 = i < v115;
                    if (v116) {
                        ptr = ptr[prop];
                    } else {
                        const v117 = ptr[prop];
                        const v118 = delete v117;
                        v118;
                    }
                };
                const v120 = keys.forEach(v119);
                v120;
            } else {
                obj = null;
            }
            break;
        }
    };
    const v122 = changes.forEach(v121);
    v122;
    return obj;
};
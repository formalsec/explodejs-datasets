var assert = require('assert');
var FIELD_REGEX = /\.|\:/;
const get = function (topObj, fields) {
    const v54 = typeof topObj;
    const v55 = v54 === 'string';
    const v56 = arguments.length;
    const v57 = v56 === 1;
    const v58 = v55 && v57;
    if (v58) {
        fields = topObj;
        topObj = this;
    }
    const v59 = typeof fields;
    const v60 = v59 === 'string';
    const v61 = assert(v60, 'field.get(): must pass in a field string.');
    v61;
    fields = split(fields);
    const moveUp = function (obj, field) {
        const v62 = obj[field];
        const v63 = typeof v62;
        const v64 = v63 !== 'undefined';
        if (v64) {
            const v65 = fields.length;
            const v66 = v65 === 0;
            if (v66) {
                const v67 = obj[field];
                return v67;
            } else {
                const v68 = obj[field];
                const v69 = fields.shift();
                const v70 = moveUp(v68, v69);
                return v70;
            }
        } else {
            return undefined;
        }
    };
    const v71 = fields.shift();
    const v72 = moveUp(topObj, v71);
    return v72;
};
const set = function (topObj, fields, value) {
    const v73 = typeof topObj;
    const v74 = v73 === 'string';
    const v75 = arguments.length;
    const v76 = v75 === 2;
    const v77 = v74 && v76;
    if (v77) {
        value = fields;
        fields = topObj;
        topObj = this;
    }
    const v78 = typeof fields;
    const v79 = v78 === 'string';
    const v80 = assert(v79, 'field.get(): must pass in a field string.');
    v80;
    fields = split(fields);
    const moveUp = function (obj, field, value) {
        const v81 = obj[field];
        const v82 = typeof v81;
        const v83 = v82 !== 'undefined';
        if (v83) {
            const v84 = fields.length;
            const v85 = v84 === 0;
            if (v85) {
                var oldVal = obj[field];
                obj[field] = value;
                return oldVal;
            } else {
                const v86 = obj[field];
                const v87 = typeof v86;
                const v88 = v87 !== 'object';
                if (v88) {
                    const v89 = {};
                    obj[field] = v89;
                }
                const v90 = obj[field];
                const v91 = fields.shift();
                const v92 = moveUp(v90, v91, value);
                return v92;
            }
        } else {
            const v93 = fields.length;
            const v94 = v93 === 0;
            if (v94) {
                obj[field] = value;
                return undefined;
            } else {
                const v95 = {};
                obj[field] = v95;
                const v96 = obj[field];
                const v97 = fields.shift();
                const v98 = moveUp(v96, v97, value);
                return v98;
            }
        }
    };
    const v99 = fields.shift();
    const v100 = moveUp(topObj, v99, value);
    return v100;
};
const split = function (str) {
    const v101 = str.indexOf(':');
    const v102 = v101 >= 0;
    if (v102) {
        var parts = str.split(':');
        var m = parts.shift();
        const v103 = parts.join(':');
        parts = v103.split(FIELD_REGEX);
        const v104 = parts.unshift(m);
        v104;
        return parts;
    } else {
        const v105 = str.split(FIELD_REGEX);
        return v105;
    }
};
const v106 = {};
v106.get = get;
v106.set = set;
module.exports = v106;
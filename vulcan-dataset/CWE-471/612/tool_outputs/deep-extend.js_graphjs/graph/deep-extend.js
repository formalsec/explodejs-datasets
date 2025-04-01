'use strict';
const isSpecificValue = function (val) {
    const v64 = val instanceof Date;
    const v65 = val instanceof RegExp;
    const v66 = v64 || v65;
    let v67;
    if (v66) {
        v67 = true;
    } else {
        v67 = false;
    }
    return v67;
};
const cloneSpecificValue = function (val) {
    const v68 = val instanceof Date;
    if (v68) {
        const v69 = val.getTime();
        const v70 = new Date(v69);
        return v70;
    } else {
        const v71 = val instanceof RegExp;
        if (v71) {
            const v72 = new RegExp(val);
            return v72;
        } else {
            const v73 = new Error('Unexpected situation');
            throw v73;
        }
    }
};
const deepCloneArray = function (arr) {
    var clone = [];
    const v84 = function (item, index) {
        const v74 = typeof item;
        const v75 = v74 === 'object';
        const v76 = item !== null;
        const v77 = v75 && v76;
        if (v77) {
            const v78 = Array.isArray(item);
            if (v78) {
                const v79 = deepCloneArray(item);
                clone[index] = v79;
            } else {
                const v80 = isSpecificValue(item);
                if (v80) {
                    const v81 = cloneSpecificValue(item);
                    clone[index] = v81;
                } else {
                    const v82 = {};
                    const v83 = deepExtend(v82, item);
                    clone[index] = v83;
                }
            }
        } else {
            clone[index] = item;
        }
    };
    const v85 = arr.forEach(v84);
    v85;
    return clone;
};
const v126 = function () {
    const v86 = arguments.length;
    const v87 = v86 < 1;
    const v88 = arguments[0];
    const v89 = typeof v88;
    const v90 = v89 !== 'object';
    const v91 = v87 || v90;
    if (v91) {
        return false;
    }
    const v92 = arguments.length;
    const v93 = v92 < 2;
    if (v93) {
        const v94 = arguments[0];
        return v94;
    }
    var target = arguments[0];
    const v95 = Array.prototype;
    const v96 = v95.slice;
    var args = v96.call(arguments, 1);
    var val;
    var src;
    var clone;
    const v124 = function (obj) {
        const v97 = typeof obj;
        const v98 = v97 !== 'object';
        const v99 = obj === null;
        const v100 = v98 || v99;
        const v101 = Array.isArray(obj);
        const v102 = v100 || v101;
        if (v102) {
            return;
        }
        const v103 = Object.keys(obj);
        const v122 = function (key) {
            src = target[key];
            val = obj[key];
            const v104 = val === target;
            if (v104) {
                return;
            } else {
                const v105 = typeof val;
                const v106 = v105 !== 'object';
                const v107 = val === null;
                const v108 = v106 || v107;
                if (v108) {
                    target[key] = val;
                    return;
                } else {
                    const v109 = Array.isArray(val);
                    if (v109) {
                        const v110 = deepCloneArray(val);
                        target[key] = v110;
                        return;
                    } else {
                        const v111 = isSpecificValue(val);
                        if (v111) {
                            const v112 = cloneSpecificValue(val);
                            target[key] = v112;
                            return;
                        } else {
                            const v113 = typeof src;
                            const v114 = v113 !== 'object';
                            const v115 = src === null;
                            const v116 = v114 || v115;
                            const v117 = Array.isArray(src);
                            const v118 = v116 || v117;
                            if (v118) {
                                const v119 = {};
                                const v120 = deepExtend(v119, val);
                                target[key] = v120;
                                return;
                            } else {
                                const v121 = deepExtend(src, val);
                                target[key] = v121;
                                return;
                            }
                        }
                    }
                }
            }
        };
        const v123 = v103.forEach(v122);
        v123;
    };
    const v125 = args.forEach(v124);
    v125;
    return target;
};
module.exports = v126;
var deepExtend = module.exports;
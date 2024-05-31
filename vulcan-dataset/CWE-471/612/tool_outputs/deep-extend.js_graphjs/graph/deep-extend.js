'use strict';
const isSpecificValue = function (val) {
    const v69 = val instanceof Buffer;
    const v70 = val instanceof Date;
    const v71 = v69 || v70;
    const v72 = val instanceof RegExp;
    const v73 = v71 || v72;
    let v74;
    if (v73) {
        v74 = true;
    } else {
        v74 = false;
    }
    return v74;
};
const cloneSpecificValue = function (val) {
    const v75 = val instanceof Buffer;
    if (v75) {
        const v76 = val.length;
        var x = new Buffer(v76);
        const v77 = val.copy(x);
        v77;
        return x;
    } else {
        const v78 = val instanceof Date;
        if (v78) {
            const v79 = val.getTime();
            const v80 = new Date(v79);
            return v80;
        } else {
            const v81 = val instanceof RegExp;
            if (v81) {
                const v82 = new RegExp(val);
                return v82;
            } else {
                const v83 = new Error('Unexpected situation');
                throw v83;
            }
        }
    }
};
const deepCloneArray = function (arr) {
    var clone = [];
    const v94 = function (item, index) {
        const v84 = typeof item;
        const v85 = v84 === 'object';
        const v86 = item !== null;
        const v87 = v85 && v86;
        if (v87) {
            const v88 = Array.isArray(item);
            if (v88) {
                const v89 = deepCloneArray(item);
                clone[index] = v89;
            } else {
                const v90 = isSpecificValue(item);
                if (v90) {
                    const v91 = cloneSpecificValue(item);
                    clone[index] = v91;
                } else {
                    const v92 = {};
                    const v93 = deepExtend(v92, item);
                    clone[index] = v93;
                }
            }
        } else {
            clone[index] = item;
        }
    };
    const v95 = arr.forEach(v94);
    v95;
    return clone;
};
const v136 = function () {
    const v96 = arguments.length;
    const v97 = v96 < 1;
    const v98 = arguments[0];
    const v99 = typeof v98;
    const v100 = v99 !== 'object';
    const v101 = v97 || v100;
    if (v101) {
        return false;
    }
    const v102 = arguments.length;
    const v103 = v102 < 2;
    if (v103) {
        const v104 = arguments[0];
        return v104;
    }
    var target = arguments[0];
    const v105 = Array.prototype;
    const v106 = v105.slice;
    var args = v106.call(arguments, 1);
    var val;
    var src;
    var clone;
    const v134 = function (obj) {
        const v107 = typeof obj;
        const v108 = v107 !== 'object';
        const v109 = obj === null;
        const v110 = v108 || v109;
        const v111 = Array.isArray(obj);
        const v112 = v110 || v111;
        if (v112) {
            return;
        }
        const v113 = Object.keys(obj);
        const v132 = function (key) {
            src = target[key];
            val = obj[key];
            const v114 = val === target;
            if (v114) {
                return;
            } else {
                const v115 = typeof val;
                const v116 = v115 !== 'object';
                const v117 = val === null;
                const v118 = v116 || v117;
                if (v118) {
                    target[key] = val;
                    return;
                } else {
                    const v119 = Array.isArray(val);
                    if (v119) {
                        const v120 = deepCloneArray(val);
                        target[key] = v120;
                        return;
                    } else {
                        const v121 = isSpecificValue(val);
                        if (v121) {
                            const v122 = cloneSpecificValue(val);
                            target[key] = v122;
                            return;
                        } else {
                            const v123 = typeof src;
                            const v124 = v123 !== 'object';
                            const v125 = src === null;
                            const v126 = v124 || v125;
                            const v127 = Array.isArray(src);
                            const v128 = v126 || v127;
                            if (v128) {
                                const v129 = {};
                                const v130 = deepExtend(v129, val);
                                target[key] = v130;
                                return;
                            } else {
                                const v131 = deepExtend(src, val);
                                target[key] = v131;
                                return;
                            }
                        }
                    }
                }
            }
        };
        const v133 = v113.forEach(v132);
        v133;
    };
    const v135 = args.forEach(v134);
    v135;
    return target;
};
module.exports = v136;
var deepExtend = module.exports;
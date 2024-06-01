const isSpecificValue = function (val) {
    const v70 = val instanceof Buffer;
    const v71 = val instanceof Date;
    const v72 = v70 || v71;
    const v73 = val instanceof RegExp;
    const v74 = v72 || v73;
    return v74;
};
const cloneSpecificValue = function (val) {
    const v75 = val instanceof Buffer;
    if (v75) {
        const v76 = val.length;
        const _copy = Buffer.alloc(v76);
        const v77 = val.copy(_copy);
        v77;
        return _copy;
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
                const v83 = new Error('Unexpected Value Type');
                throw v83;
            }
        }
    }
};
const override = function (...rawArgs) {
    const v84 = rawArgs.length;
    const v85 = v84 < 1;
    const v86 = rawArgs[0];
    const v87 = typeof v86;
    const v88 = v87 !== 'object';
    const v89 = v85 || v88;
    if (v89) {
        return false;
    }
    const v90 = rawArgs.length;
    const v91 = v90 < 2;
    if (v91) {
        const v92 = rawArgs[0];
        return v92;
    }
    const target = rawArgs[0];
    const v93 = Array.prototype;
    const v94 = v93.slice;
    const args = v94.call(rawArgs, 1);
    let val;
    let src;
    const v137 = obj => {
        const v95 = typeof obj;
        const v96 = v95 !== 'object';
        if (v96) {
            return;
        }
        const v97 = Array.isArray(obj);
        if (v97) {
            const v115 = (_, index) => {
                src = target[index];
                val = obj[index];
                const v98 = val === target;
                if (v98) {
                } else {
                    const v99 = typeof val;
                    const v100 = v99 !== 'object';
                    const v101 = val === null;
                    const v102 = v100 || v101;
                    if (v102) {
                        target[index] = val;
                    } else {
                        const v103 = isSpecificValue(val);
                        if (v103) {
                            const v104 = cloneSpecificValue(val);
                            target[index] = v104;
                        } else {
                            const v105 = typeof src;
                            const v106 = v105 !== 'object';
                            const v107 = src === null;
                            const v108 = v106 || v107;
                            if (v108) {
                                const v109 = Array.isArray(val);
                                if (v109) {
                                    const v110 = [];
                                    const v111 = override(v110, val);
                                    target[index] = v111;
                                } else {
                                    const v112 = {};
                                    const v113 = override(v112, val);
                                    target[index] = v113;
                                }
                            } else {
                                const v114 = override(src, val);
                                target[index] = v114;
                            }
                        }
                    }
                }
                return;
            };
            const v116 = obj.forEach(v115);
            v116;
        } else {
            const v117 = Object.keys(obj);
            const v135 = key => {
                src = target[key];
                val = obj[key];
                const v118 = val === target;
                if (v118) {
                } else {
                    const v119 = typeof val;
                    const v120 = v119 !== 'object';
                    const v121 = val === null;
                    const v122 = v120 || v121;
                    if (v122) {
                        target[key] = val;
                    } else {
                        const v123 = isSpecificValue(val);
                        if (v123) {
                            const v124 = cloneSpecificValue(val);
                            target[key] = v124;
                        } else {
                            const v125 = typeof src;
                            const v126 = v125 !== 'object';
                            const v127 = src === null;
                            const v128 = v126 || v127;
                            if (v128) {
                                const v129 = Array.isArray(val);
                                if (v129) {
                                    const v130 = [];
                                    const v131 = override(v130, val);
                                    target[key] = v131;
                                } else {
                                    const v132 = {};
                                    const v133 = override(v132, val);
                                    target[key] = v133;
                                }
                            } else {
                                const v134 = override(src, val);
                                target[key] = v134;
                            }
                        }
                    }
                }
                return;
            };
            const v136 = v117.forEach(v135);
            v136;
        }
    };
    const v138 = args.forEach(v137);
    v138;
    return target;
};
module.exports = override;
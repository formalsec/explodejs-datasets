const typeOf = function (obj) {
    const v99 = typeof obj;
    var t = v99;
    const v100 = t !== 'object';
    if (v100) {
        return t;
    }
    const v101 = obj === null;
    if (v101) {
        return 'null';
    }
    const v102 = obj.constructor;
    switch (v102) {
    case Array:
        return 'array';
    case String:
        return 'string';
    case Number:
        return 'number';
    case Boolean:
        return 'boolean';
    case RegExp:
        return 'regexp';
    case Date:
        return 'date';
    }
    return 'object';
};
;
const v103 = Array.prototype;
slice = v103.slice;
const v104 = {};
v104.clone = deepClone;
v104.cloneShallow = clone;
v104.extend = deepExtend;
v104.extendShallow = extend;
v104.update = deepUpdate;
v104.updateShallow = update;
v104.merge = deepMerge;
v104.mergeShallow = merge;
module.exports = v104;
const clone = function (val) {
    const v105 = typeOf(val);
    switch (v105) {
    case 'object':
        var args = slice.call(arguments);
        const v106 = {};
        const v107 = args.unshift(v106);
        v107;
        const v108 = extend.apply(null, args);
        return v108;
    case 'array':
        const v109 = [];
        const v110 = v109.concat(val);
        return v110;
    case 'date':
        const v111 = val.getTime();
        const v112 = new Date(v111);
        return v112;
    case 'regexp':
        const v113 = new RegExp(val);
        return v113;
    default:
        return val;
    }
};
const deepClone = function (val) {
    const v114 = typeOf(val);
    switch (v114) {
    case 'object':
        var args = slice.call(arguments);
        const v115 = {};
        const v116 = args.unshift(v115);
        v116;
        const v117 = deepExtend.apply(null, args);
        return v117;
    case 'array':
        const v119 = function (v) {
            const v118 = deepClone(v);
            return v118;
        };
        const v120 = val.map(v119);
        return v120;
    default:
        const v121 = clone(val);
        return v121;
    }
};
const extend = function (a, b) {
    const v122 = slice.call(arguments, 1);
    const v127 = function (b) {
        const v123 = Object.keys(b);
        const v125 = function (p) {
            const v124 = b[p];
            a[p] = v124;
        };
        const v126 = v123.forEach(v125);
        v126;
    };
    const v128 = v122.forEach(v127);
    v128;
    return a;
};
const deepExtend = function (a, b) {
    const v129 = slice.call(arguments, 1);
    const v145 = function (b) {
        const v130 = Object.keys(b);
        const v143 = function (p) {
            const v131 = b[p];
            const v132 = typeOf(v131);
            const v133 = v132 === 'object';
            const v134 = a[p];
            const v135 = typeOf(v134);
            const v136 = v135 === 'object';
            const v137 = v133 && v136;
            if (v137) {
                const v138 = a[p];
                const v139 = b[p];
                const v140 = deepExtend(v138, v139);
                v140;
            } else {
                const v141 = b[p];
                const v142 = deepClone(v141);
                a[p] = v142;
            }
        };
        const v144 = v130.forEach(v143);
        v144;
    };
    const v146 = v129.forEach(v145);
    v146;
    return a;
};
const update = function (a, b) {
    const v147 = slice.call(arguments, 1);
    const v153 = function (b) {
        const v148 = Object.keys(b);
        const v151 = function (p) {
            const v149 = a.hasOwnProperty(p);
            if (v149) {
                const v150 = b[p];
                a[p] = v150;
            }
        };
        const v152 = v148.forEach(v151);
        v152;
    };
    const v154 = v147.forEach(v153);
    v154;
    return a;
};
const deepUpdate = function (a, b) {
    const v155 = slice.call(arguments, 1);
    const v173 = function (b) {
        var ap;
        var bp;
        var ta;
        var tb;
        const v156 = Object.keys(b);
        const v171 = function (p) {
            const v157 = a.hasOwnProperty(p);
            if (v157) {
                ap = a[p];
                bp = b[p];
                ta = typeOf(ap);
                tb = typeOf(bp);
                const v158 = tb === 'object';
                const v159 = ta === 'object';
                const v160 = v158 && v159;
                if (v160) {
                    const v161 = deepUpdate(ap, bp);
                    v161;
                } else {
                    const v162 = tb === 'array';
                    const v163 = ta === 'array';
                    const v164 = v162 && v163;
                    if (v164) {
                        ap.length = 0;
                        const v165 = ap.push;
                        const v167 = function (v) {
                            const v166 = deepClone(v);
                            return v166;
                        };
                        const v168 = bp.map(v167);
                        const v169 = v165.apply(ap, v168);
                        v169;
                    } else {
                        const v170 = deepClone(bp);
                        a[p] = v170;
                    }
                }
            }
        };
        const v172 = v156.forEach(v171);
        v172;
    };
    const v174 = v155.forEach(v173);
    v174;
    return a;
};
const merge = function (a, b) {
    const v175 = slice.call(arguments, 1);
    const v182 = function (b) {
        const v176 = Object.keys(b);
        const v180 = function (p) {
            const v177 = a.hasOwnProperty(p);
            const v178 = !v177;
            if (v178) {
                const v179 = b[p];
                a[p] = v179;
            }
        };
        const v181 = v176.forEach(v180);
        v181;
    };
    const v183 = v175.forEach(v182);
    v183;
    return a;
};
const deepMerge = function (a, b) {
    const v184 = slice.call(arguments, 1);
    const v195 = function (b) {
        var ap;
        var bp;
        var ta;
        var tb;
        const v185 = Object.keys(b);
        const v193 = function (p) {
            ap = a[p];
            bp = b[p];
            ta = typeOf(ap);
            tb = typeOf(bp);
            const v186 = tb === 'object';
            const v187 = ta === 'object';
            const v188 = v186 && v187;
            if (v188) {
                const v189 = deepMerge(ap, bp);
                v189;
            } else {
                const v190 = a.hasOwnProperty(p);
                const v191 = !v190;
                if (v191) {
                    const v192 = deepClone(bp);
                    a[p] = v192;
                }
            }
        };
        const v194 = v185.forEach(v193);
        v194;
    };
    const v196 = v184.forEach(v195);
    v196;
    return a;
};
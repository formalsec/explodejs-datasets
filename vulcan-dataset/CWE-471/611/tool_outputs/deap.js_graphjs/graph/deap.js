var typeOf = require('./typeof');
const v95 = Array.prototype;
var slice = v95.slice;
const v96 = {};
v96.clone = deepClone;
v96.cloneShallow = clone;
v96.extend = deepExtend;
v96.extendShallow = extend;
v96.update = deepUpdate;
v96.updateShallow = update;
v96.merge = deepMerge;
v96.mergeShallow = merge;
module.exports = v96;
const clone = function (val) {
    const v97 = typeOf(val);
    switch (v97) {
    case 'object':
        var args = slice.call(arguments);
        const v98 = {};
        const v99 = args.unshift(v98);
        v99;
        const v100 = extend.apply(null, args);
        return v100;
    case 'array':
        const v101 = [];
        const v102 = v101.concat(val);
        return v102;
    case 'date':
        const v103 = val.getTime();
        const v104 = new Date(v103);
        return v104;
    case 'regexp':
        const v105 = new RegExp(val);
        return v105;
    default:
        return val;
    }
};
const deepClone = function (val) {
    const v106 = typeOf(val);
    switch (v106) {
    case 'object':
        var args = slice.call(arguments);
        const v107 = {};
        const v108 = args.unshift(v107);
        v108;
        const v109 = deepExtend.apply(null, args);
        return v109;
    case 'array':
        const v111 = function (v) {
            const v110 = deepClone(v);
            return v110;
        };
        const v112 = val.map(v111);
        return v112;
    default:
        const v113 = clone(val);
        return v113;
    }
};
const extend = function (a, b) {
    const v114 = slice.call(arguments, 1);
    const v119 = function (b) {
        const v115 = Object.keys(b);
        const v117 = function (p) {
            const v116 = b[p];
            a[p] = v116;
        };
        const v118 = v115.forEach(v117);
        v118;
    };
    const v120 = v114.forEach(v119);
    v120;
    return a;
};
const deepExtend = function (a, b) {
    const v121 = slice.call(arguments, 1);
    const v137 = function (b) {
        const v122 = Object.keys(b);
        const v135 = function (p) {
            const v123 = b[p];
            const v124 = typeOf(v123);
            const v125 = v124 === 'object';
            const v126 = a[p];
            const v127 = typeOf(v126);
            const v128 = v127 === 'object';
            const v129 = v125 && v128;
            if (v129) {
                const v130 = a[p];
                const v131 = b[p];
                const v132 = deepExtend(v130, v131);
                v132;
            } else {
                const v133 = b[p];
                const v134 = deepClone(v133);
                a[p] = v134;
            }
        };
        const v136 = v122.forEach(v135);
        v136;
    };
    const v138 = v121.forEach(v137);
    v138;
    return a;
};
const update = function (a, b) {
    const v139 = slice.call(arguments, 1);
    const v145 = function (b) {
        const v140 = Object.keys(b);
        const v143 = function (p) {
            const v141 = a.hasOwnProperty(p);
            if (v141) {
                const v142 = b[p];
                a[p] = v142;
            }
        };
        const v144 = v140.forEach(v143);
        v144;
    };
    const v146 = v139.forEach(v145);
    v146;
    return a;
};
const deepUpdate = function (a, b) {
    const v147 = slice.call(arguments, 1);
    const v165 = function (b) {
        var ap;
        var bp;
        var ta;
        var tb;
        const v148 = Object.keys(b);
        const v163 = function (p) {
            const v149 = a.hasOwnProperty(p);
            if (v149) {
                ap = a[p];
                bp = b[p];
                ta = typeOf(ap);
                tb = typeOf(bp);
                const v150 = tb === 'object';
                const v151 = ta === 'object';
                const v152 = v150 && v151;
                if (v152) {
                    const v153 = deepUpdate(ap, bp);
                    v153;
                } else {
                    const v154 = tb === 'array';
                    const v155 = ta === 'array';
                    const v156 = v154 && v155;
                    if (v156) {
                        ap.length = 0;
                        const v157 = ap.push;
                        const v159 = function (v) {
                            const v158 = deepClone(v);
                            return v158;
                        };
                        const v160 = bp.map(v159);
                        const v161 = v157.apply(ap, v160);
                        v161;
                    } else {
                        const v162 = deepClone(bp);
                        a[p] = v162;
                    }
                }
            }
        };
        const v164 = v148.forEach(v163);
        v164;
    };
    const v166 = v147.forEach(v165);
    v166;
    return a;
};
const merge = function (a, b) {
    const v167 = slice.call(arguments, 1);
    const v174 = function (b) {
        const v168 = Object.keys(b);
        const v172 = function (p) {
            const v169 = a.hasOwnProperty(p);
            const v170 = !v169;
            if (v170) {
                const v171 = b[p];
                a[p] = v171;
            }
        };
        const v173 = v168.forEach(v172);
        v173;
    };
    const v175 = v167.forEach(v174);
    v175;
    return a;
};
const deepMerge = function (a, b) {
    const v176 = slice.call(arguments, 1);
    const v187 = function (b) {
        var ap;
        var bp;
        var ta;
        var tb;
        const v177 = Object.keys(b);
        const v185 = function (p) {
            ap = a[p];
            bp = b[p];
            ta = typeOf(ap);
            tb = typeOf(bp);
            const v178 = tb === 'object';
            const v179 = ta === 'object';
            const v180 = v178 && v179;
            if (v180) {
                const v181 = deepMerge(ap, bp);
                v181;
            } else {
                const v182 = a.hasOwnProperty(p);
                const v183 = !v182;
                if (v183) {
                    const v184 = deepClone(bp);
                    a[p] = v184;
                }
            }
        };
        const v186 = v177.forEach(v185);
        v186;
    };
    const v188 = v176.forEach(v187);
    v188;
    return a;
};
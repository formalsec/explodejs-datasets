const isObject = function (o, allowArray) {
    const v89 = typeof o;
    const v90 = 'object' === v89;
    const v91 = o && v90;
    const v92 = Array.isArray(o);
    const v93 = !v92;
    const v94 = allowArray || v93;
    const v95 = v91 && v94;
    return v95;
};
const isBasic = function (b) {
    const v96 = typeof b;
    const v97 = 'string' === v96;
    const v98 = typeof b;
    const v99 = 'number' === v98;
    const v100 = v97 || v99;
    return v100;
};
const get = function (obj, path, dft) {
    const v101 = isObject(obj, true);
    const v102 = !v101;
    if (v102) {
        return dft;
    }
    const v103 = isBasic(path);
    if (v103) {
        const v104 = obj[path];
        return v104;
    }
    var i = 0;
    const v105 = path.length;
    let v106 = i < v105;
    while (v106) {
        const v108 = path[i];
        const v109 = null == (obj = obj[v108]);
        if (v109) {
            return dft;
        }
        const v107 = i++;
        v106 = i < v105;
    }
    return obj;
};
const isNonNegativeInteger = function (i) {
    const v110 = Number.isInteger(i);
    const v111 = i >= 0;
    const v112 = v110 && v111;
    return v112;
};
const set = function (obj, path, value) {
    const v113 = !obj;
    if (v113) {
        const v114 = new Error('libnested.set: first arg must be an object');
        throw v114;
    }
    const v115 = isBasic(path);
    if (v115) {
        return obj[path] = value;
    }
    var i = 0;
    const v116 = path.length;
    let v117 = i < v116;
    while (v117) {
        const v119 = path.length;
        const v120 = v119 - 1;
        const v121 = i === v120;
        if (v121) {
            const v122 = path[i];
            obj[v122] = value;
        } else {
            const v123 = path[i];
            const v124 = obj[v123];
            const v125 = null == v124;
            if (v125) {
                const v126 = path[i];
                const v127 = i + 1;
                const v128 = path[v127];
                const v129 = isNonNegativeInteger(v128);
                const v130 = [];
                const v131 = {};
                let v132;
                if (v129) {
                    v132 = v130;
                } else {
                    v132 = v131;
                }
                obj.v126 = v132;
                obj = obj[v126];
            } else {
                const v133 = path[i];
                const v134 = isPrototypePolluted(v133);
                const v135 = !v134;
                if (v135) {
                    const v136 = path[i];
                    obj = obj[v136];
                }
            }
        }
        const v118 = i++;
        v117 = i < v116;
    }
    return value;
};
const each = function (obj, iter, includeArrays, path) {
    const v137 = [];
    path = path || v137;
    const v138 = Array.isArray(obj);
    if (v138) {
        const v139 = !includeArrays;
        if (v139) {
            return false;
        }
        var k = 0;
        const v140 = obj.length;
        let v141 = k < v140;
        while (v141) {
            var v = obj[k];
            const v143 = isObject(v, includeArrays);
            if (v143) {
                const v144 = path.concat(k);
                const v145 = each(v, iter, includeArrays, v144);
                const v146 = false === v145;
                if (v146) {
                    return false;
                }
            } else {
                const v147 = path.concat(k);
                const v148 = iter(v, v147);
                const v149 = false === v148;
                if (v149) {
                    return false;
                }
            }
            const v142 = k++;
            v141 = k < v140;
        }
    } else {
        let k;
        for (k in obj) {
            var v = obj[k];
            const v150 = isObject(v, includeArrays);
            if (v150) {
                const v151 = path.concat(k);
                const v152 = each(v, iter, includeArrays, v151);
                const v153 = false === v152;
                if (v153) {
                    return false;
                }
            } else {
                const v154 = path.concat(k);
                const v155 = iter(v, v154);
                const v156 = false === v155;
                if (v156) {
                    return false;
                }
            }
        }
    }
    return true;
};
const map = function (obj, iter, out, includeArrays) {
    let out;
    const v157 = Array.isArray(obj);
    const v158 = out || v157;
    const v159 = [];
    const v160 = {};
    if (v158) {
        out = v159;
    } else {
        out = v160;
    }
    const v163 = function (val, path) {
        const v161 = iter(val, path);
        const v162 = set(out, path, v161);
        v162;
    };
    const v164 = each(obj, v163, includeArrays);
    v164;
    return out;
};
const paths = function (obj, incluedArrays) {
    var out = [];
    const v166 = function (_, path) {
        const v165 = out.push(path);
        v165;
    };
    const v167 = each(obj, v166, incluedArrays);
    v167;
    return out;
};
const id = function (e) {
    return e;
};
const clone = function (obj) {
    const v168 = isObject(obj, true);
    const v169 = !v168;
    if (v169) {
        return obj;
    }
    var _obj;
    const v170 = Array.isArray(obj);
    const v171 = [];
    const v172 = {};
    if (v170) {
        _obj = v171;
    } else {
        _obj = v172;
    }
    let k;
    for (k in obj) {
        const v173 = obj[k];
        const v174 = clone(v173);
        _obj[k] = v174;
    }
    return _obj;
};
const isPrototypePolluted = function (key) {
    const v175 = [
        '__proto__',
        'constructor',
        'prototype'
    ];
    const v176 = v175.includes(key);
    return v176;
};
exports.get = get;
exports.set = set;
exports.each = each;
exports.map = map;
exports.paths = paths;
exports.clone = clone;
exports.copy = clone;
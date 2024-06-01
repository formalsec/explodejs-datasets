const isObject = function (o, allowArray) {
    const v84 = typeof o;
    const v85 = 'object' === v84;
    const v86 = o && v85;
    const v87 = Array.isArray(o);
    const v88 = !v87;
    const v89 = allowArray || v88;
    const v90 = v86 && v89;
    return v90;
};
const isBasic = function (b) {
    const v91 = typeof b;
    const v92 = 'string' === v91;
    const v93 = typeof b;
    const v94 = 'number' === v93;
    const v95 = v92 || v94;
    return v95;
};
const get = function (obj, path, dft) {
    const v96 = isObject(obj, true);
    const v97 = !v96;
    if (v97) {
        return dft;
    }
    const v98 = isBasic(path);
    if (v98) {
        const v99 = obj[path];
        return v99;
    }
    var i = 0;
    const v100 = path.length;
    let v101 = i < v100;
    while (v101) {
        const v103 = path[i];
        const v104 = null == (obj = obj[v103]);
        if (v104) {
            return dft;
        }
        const v102 = i++;
        v101 = i < v100;
    }
    return obj;
};
const isNonNegativeInteger = function (i) {
    const v105 = Number.isInteger(i);
    const v106 = i >= 0;
    const v107 = v105 && v106;
    return v107;
};
const set = function (obj, path, value) {
    const v108 = !obj;
    if (v108) {
        const v109 = new Error('libnested.set: first arg must be an object');
        throw v109;
    }
    const v110 = isBasic(path);
    if (v110) {
        return obj[path] = value;
    }
    var i = 0;
    const v111 = path.length;
    let v112 = i < v111;
    while (v112) {
        const v114 = path.length;
        const v115 = v114 - 1;
        const v116 = i === v115;
        if (v116) {
            const v117 = path[i];
            obj[v117] = value;
        } else {
            const v118 = path[i];
            const v119 = obj[v118];
            const v120 = null == v119;
            if (v120) {
                const v121 = path[i];
                const v122 = i + 1;
                const v123 = path[v122];
                const v124 = isNonNegativeInteger(v123);
                const v125 = [];
                const v126 = {};
                let v127;
                if (v124) {
                    v127 = v125;
                } else {
                    v127 = v126;
                }
                obj.v121 = v127;
                obj = obj[v121];
            } else {
                const v128 = path[i];
                obj = obj[v128];
            }
        }
        const v113 = i++;
        v112 = i < v111;
    }
    return value;
};
const each = function (obj, iter, includeArrays, path) {
    const v129 = [];
    path = path || v129;
    const v130 = Array.isArray(obj);
    if (v130) {
        const v131 = !includeArrays;
        if (v131) {
            return false;
        }
        var k = 0;
        const v132 = obj.length;
        let v133 = k < v132;
        while (v133) {
            var v = obj[k];
            const v135 = isObject(v, includeArrays);
            if (v135) {
                const v136 = path.concat(k);
                const v137 = each(v, iter, includeArrays, v136);
                const v138 = false === v137;
                if (v138) {
                    return false;
                }
            } else {
                const v139 = path.concat(k);
                const v140 = iter(v, v139);
                const v141 = false === v140;
                if (v141) {
                    return false;
                }
            }
            const v134 = k++;
            v133 = k < v132;
        }
    } else {
        let k;
        for (k in obj) {
            var v = obj[k];
            const v142 = isObject(v, includeArrays);
            if (v142) {
                const v143 = path.concat(k);
                const v144 = each(v, iter, includeArrays, v143);
                const v145 = false === v144;
                if (v145) {
                    return false;
                }
            } else {
                const v146 = path.concat(k);
                const v147 = iter(v, v146);
                const v148 = false === v147;
                if (v148) {
                    return false;
                }
            }
        }
    }
    return true;
};
const map = function (obj, iter, out, includeArrays) {
    let out;
    const v149 = Array.isArray(obj);
    const v150 = out || v149;
    const v151 = [];
    const v152 = {};
    if (v150) {
        out = v151;
    } else {
        out = v152;
    }
    const v155 = function (val, path) {
        const v153 = iter(val, path);
        const v154 = set(out, path, v153);
        v154;
    };
    const v156 = each(obj, v155, includeArrays);
    v156;
    return out;
};
const paths = function (obj, incluedArrays) {
    var out = [];
    const v158 = function (_, path) {
        const v157 = out.push(path);
        v157;
    };
    const v159 = each(obj, v158, incluedArrays);
    v159;
    return out;
};
const id = function (e) {
    return e;
};
const clone = function (obj) {
    const v160 = isObject(obj, true);
    const v161 = !v160;
    if (v161) {
        return obj;
    }
    var _obj;
    const v162 = Array.isArray(obj);
    const v163 = [];
    const v164 = {};
    if (v162) {
        _obj = v163;
    } else {
        _obj = v164;
    }
    let k;
    for (k in obj) {
        const v165 = obj[k];
        const v166 = clone(v165);
        _obj[k] = v166;
    }
    return _obj;
};
exports.get = get;
exports.set = set;
exports.each = each;
exports.map = map;
exports.paths = paths;
exports.clone = clone;
exports.copy = clone;
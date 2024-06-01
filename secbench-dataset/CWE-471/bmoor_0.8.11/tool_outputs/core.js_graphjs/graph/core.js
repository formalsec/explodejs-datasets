const isUndefined = function (value) {
    const v103 = value === undefined;
    return v103;
};
const isDefined = function (value) {
    const v104 = value !== undefined;
    return v104;
};
const isString = function (value) {
    const v105 = typeof value;
    const v106 = v105 === 'string';
    return v106;
};
const isNumber = function (value) {
    const v107 = typeof value;
    const v108 = v107 === 'number';
    return v108;
};
const isFunction = function (value) {
    const v109 = typeof value;
    const v110 = v109 === 'function';
    return v110;
};
const isObject = function (value) {
    const v111 = !value;
    const v112 = !v111;
    const v113 = typeof value;
    const v114 = v113 === 'object';
    const v115 = v112 && v114;
    return v115;
};
const isBoolean = function (value) {
    const v116 = typeof value;
    const v117 = v116 === 'boolean';
    return v117;
};
const isArrayLike = function (value) {
    if (value) {
        const v118 = isObject(value);
        const v119 = value.length;
        const v120 = v119 === 0;
        const v121 = 0 in value;
        const v122 = value.length;
        const v123 = v122 - 1;
        const v124 = v123 in value;
        const v125 = v121 && v124;
        const v126 = v120 || v125;
        const v127 = v118 && v126;
        return v127;
    } else {
        return false;
    }
};
const isArray = function (value) {
    const v128 = value instanceof Array;
    return v128;
};
const isEmpty = function (value) {
    var key;
    const v129 = isObject(value);
    if (v129) {
        for (key in value) {
            const v130 = value.hasOwnProperty(key);
            if (v130) {
                return false;
            }
        }
    } else {
        const v131 = isArrayLike(value);
        if (v131) {
            const v132 = value.length;
            const v133 = v132 === 0;
            return v133;
        } else {
            const v134 = isUndefined(value);
            return v134;
        }
    }
    return true;
};
const parse = function (path) {
    const v135 = !path;
    if (v135) {
        const v136 = [];
        return v136;
    } else {
        const v137 = isString(path);
        if (v137) {
            const v138 = path.indexOf('[');
            const v139 = -1;
            const v140 = v138 !== v139;
            if (v140) {
                const v141 = path.match(/[^\]\[.]+/g);
                const v150 = d => {
                    const v142 = d[0];
                    const v143 = v142 === '"';
                    const v144 = d[0];
                    const v145 = v144 === '\'';
                    const v146 = v143 || v145;
                    if (v146) {
                        const v147 = d.length;
                        const v148 = v147 - 1;
                        const v149 = d.substring(1, v148);
                        return v149;
                    } else {
                        return d;
                    }
                };
                const v151 = v141.map(v150);
                return v151;
            } else {
                const v152 = path.split('.');
                return v152;
            }
        } else {
            const v153 = isArray(path);
            if (v153) {
                const v154 = path.slice(0);
                return v154;
            } else {
                const v155 = 'unable to parse path: ' + path;
                const v156 = v155 + ' : ';
                const v157 = typeof path;
                const v158 = v156 + v157;
                const v159 = new Error(v158);
                throw v159;
            }
        }
    }
};
const set = function (root, space, value) {
    var i;
    var c;
    var val;
    var nextSpace;
    var curSpace = root;
    space = parse(space);
    val = space.pop();
    (i = 0, c = space.length)
    let v160 = i < c;
    while (v160) {
        nextSpace = space[i];
        const v162 = curSpace[nextSpace];
        const v163 = isUndefined(v162);
        if (v163) {
            const v164 = {};
            curSpace[nextSpace] = v164;
        }
        curSpace = curSpace[nextSpace];
        const v161 = i++;
        v160 = i < c;
    }
    curSpace[val] = value;
    return curSpace;
};
const _makeSetter = function (property, next) {
    if (next) {
        const v168 = function setter(ctx, value) {
            var t = ctx[property];
            const v165 = !t;
            if (v165) {
                const v166 = {};
                ctx.property = v166;
                t = ctx[property];
            }
            const v167 = next(t, value);
            return v167;
        };
        return v168;
    } else {
        const v169 = function (ctx, value) {
            ctx[property] = value;
            return ctx;
        };
        return v169;
    }
};
const makeSetter = function (space) {
    var i;
    var fn;
    var readings = parse(space);
    const v170 = readings.length;
    const v171 = -1;
    let v172 = i > v171;
    while (v172) {
        const v174 = readings[i];
        fn = _makeSetter(v174, fn);
        const v173 = i--;
        v172 = i > v171;
    }
    return fn;
};
const get = function (root, path) {
    var i;
    var c;
    var space;
    var nextSpace;
    var curSpace = root;
    const v175 = !root;
    if (v175) {
        return root;
    }
    space = parse(path);
    const v176 = space.length;
    if (v176) {
        (i = 0, c = space.length)
        let v177 = i < c;
        while (v177) {
            nextSpace = space[i];
            const v179 = curSpace[nextSpace];
            const v180 = isUndefined(v179);
            if (v180) {
                return;
            }
            curSpace = curSpace[nextSpace];
            const v178 = i++;
            v177 = i < c;
        }
    }
    return curSpace;
};
const _makeGetter = function (property, next) {
    if (next) {
        const v183 = function getter(obj) {
            try {
                const v181 = obj[property];
                const v182 = next(v181);
                return v182;
            } catch (ex) {
                return undefined;
            }
        };
        return v183;
    } else {
        const v185 = function getter(obj) {
            try {
                const v184 = obj[property];
                return v184;
            } catch (ex) {
                return undefined;
            }
        };
        return v185;
    }
};
const makeGetter = function (path) {
    var i;
    var fn;
    var space = parse(path);
    const v186 = space.length;
    if (v186) {
        const v187 = space.length;
        const v188 = -1;
        let v189 = i > v188;
        while (v189) {
            const v191 = space[i];
            fn = _makeGetter(v191, fn);
            const v190 = i--;
            v189 = i > v188;
        }
    } else {
        const v192 = function (obj) {
            return obj;
        };
        return v192;
    }
    return fn;
};
const del = function (root, space) {
    var old;
    var val;
    var nextSpace;
    var curSpace = root;
    const v193 = isString(space);
    const v194 = isArrayLike(space);
    const v195 = v193 || v194;
    const v196 = space && v195;
    if (v196) {
        space = parse(space);
        val = space.pop();
        var i = 0;
        const v197 = space.length;
        let v198 = i < v197;
        while (v198) {
            nextSpace = space[i];
            const v200 = curSpace[nextSpace];
            const v201 = isUndefined(v200);
            if (v201) {
                return;
            }
            curSpace = curSpace[nextSpace];
            const v199 = i++;
            v198 = i < v197;
        }
        old = curSpace[val];
        const v202 = curSpace[val];
        const v203 = delete v202;
        v203;
    }
    return old;
};
const v204 = {};
v204.isUndefined = isUndefined;
v204.isDefined = isDefined;
v204.isString = isString;
v204.isNumber = isNumber;
v204.isFunction = isFunction;
v204.isObject = isObject;
v204.isBoolean = isBoolean;
v204.isArrayLike = isArrayLike;
v204.isArray = isArray;
v204.isEmpty = isEmpty;
v204.parse = parse;
v204.set = set;
v204.makeSetter = makeSetter;
v204.get = get;
v204.makeGetter = makeGetter;
v204.del = del;
module.exports = v204;
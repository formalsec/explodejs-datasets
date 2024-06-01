exports.get = getByPath;
exports.set = setByPath;
exports.has = hasPath;
exports.push = pushByPath;
exports.method = methodByPath;
exports.call = callByPath;
exports.breadcrumbs = breadcrumbs;
exports.select = select;
exports.at = at;
exports.structure = getStructure;
const select = function (target, path) {
    const v113 = breadcrumbs(target, path);
    const v114 = v113.slice(1);
    return v114;
};
const breadcrumbs = function (target, path) {
    path = pathToArray(path);
    const result = [target];
    let part;
    let value = target;
    const v115 = isObject(value);
    const v116 = !v115;
    if (v116) {
        return result;
    }
    let i = 0;
    let l = path.length;
    let v117 = i < l;
    while (v117) {
        part = path[i];
        const v119 = value.hasOwnProperty(part);
        const v120 = !v119;
        if (v120) {
            break;
        }
        const v121 = value[part];
        const v122 = result.push(v121);
        v122;
        value = value[part];
        const v118 = i++;
        v117 = i < l;
    }
    return result;
};
const hasPath = function (target, path) {
    path = pathToArray(path);
    const result = breadcrumbs(target, path);
    const v123 = result.length;
    const v124 = path.length;
    const v125 = v124 + 1;
    const v126 = v123 === v125;
    return v126;
};
const setByPath = function (target, path, value) {
    path = pathToArray(path);
    const v127 = path.length;
    const v128 = !v127;
    if (v128) {
        return value;
    }
    const key = path[0];
    const v129 = isNumber(key);
    if (v129) {
        const v130 = Array.isArray(target);
        const v131 = !v130;
        if (v131) {
            target = [];
        }
    } else {
        const v132 = isObject(target);
        const v133 = !v132;
        if (v133) {
            target = {};
        }
    }
    const v134 = path.length;
    const v135 = v134 > 1;
    if (v135) {
        const v136 = target[key];
        const v137 = path.slice(1);
        const v138 = setByPath(v136, v137, value);
        target[key] = v138;
    } else {
        target[key] = value;
    }
    return target;
};
const pushByPath = function (target, path, value) {
    path = pathToArray(path);
    const v139 = path.length;
    const v140 = !v139;
    if (v140) {
        const v141 = Array.isArray(target);
        const v142 = !v141;
        if (v142) {
            const v143 = [value];
            return v143;
        } else {
            const v144 = target.push(value);
            v144;
            return target;
        }
    }
    const v145 = isObject(target);
    const v146 = !v145;
    if (v146) {
        target = {};
    }
    const v151 = function (finalTarget, key) {
        const v147 = finalTarget[key];
        const v148 = Array.isArray(v147);
        if (v148) {
            const v149 = finalTarget[key];
            const v150 = v149.push(value);
            v150;
        } else {
            finalTarget[key] = [value];
        }
        return finalTarget;
    };
    const v152 = at(target, path, v151);
    return v152;
};
const at = function (target, path, update) {
    path = pathToArray(path);
    const v153 = path.length;
    const v154 = !v153;
    if (v154) {
        const v155 = update(target, null);
        return v155;
    }
    const key = path[0];
    const v156 = isNumber(key);
    if (v156) {
        const v157 = Array.isArray(target);
        const v158 = !v157;
        if (v158) {
            target = [];
        }
    } else {
        const v159 = isObject(target);
        const v160 = !v159;
        if (v160) {
            target = {};
        }
    }
    const v161 = path.length;
    const v162 = v161 > 1;
    if (v162) {
        const v163 = target[key];
        const v164 = path.slice(1);
        const v165 = at(v163, v164, update);
        target[key] = v165;
    } else {
        target = update(target, key);
    }
    return target;
};
const getByPath = function (target, path) {
    path = pathToArray(path);
    const values = breadcrumbs(target, path);
    const v166 = values.length;
    const v167 = v166 - 1;
    const v168 = values[v167];
    return v168;
};
const methodByPath = function (target, path) {
    path = pathToArray(path);
    const values = breadcrumbs(target, path);
    const v169 = values.length;
    const v170 = path.length;
    const v171 = v169 < v170;
    if (v171) {
        return noop;
    }
    const v172 = values.length;
    const v173 = v172 - 1;
    const v174 = values[v173];
    const v175 = typeof v174;
    const v176 = v175 !== 'function';
    if (v176) {
        return noop;
    }
    const v177 = values.length;
    const v178 = v177 > 1;
    if (v178) {
        const v179 = values.length;
        const v180 = v179 - 1;
        const v181 = values[v180];
        const v182 = values.length;
        const v183 = v182 - 2;
        const v184 = values[v183];
        const v185 = v181.bind(v184);
        return v185;
    } else {
        const v186 = values[0];
        const v187 = v186.bind(target);
        return v187;
    }
};
const callByPath = function (target, path, args) {
    var fn = methodByPath(target, path);
    const v188 = !fn;
    if (v188) {
        return;
    }
    const v189 = fn.apply(null, args);
    return v189;
};
const getStructure = function (target, prefix) {
    const v190 = isObject(target);
    const v191 = !v190;
    if (v191) {
        const v192 = [];
        const v193 = {
            path: v192,
            value: target
        };
        const v194 = [v193];
        return v194;
    }
    const v195 = !prefix;
    if (v195) {
        prefix = [];
    }
    const v196 = Array.isArray(target);
    if (v196) {
        const v200 = function (result, value, i) {
            const v197 = prefix.concat(i);
            const v198 = getPropStructure(value, v197);
            const v199 = result.concat(v198);
            return v199;
        };
        const v201 = [];
        const v202 = target.reduce(v200, v201);
        return v202;
    } else {
        const v203 = Object.getOwnPropertyNames(target);
        const v207 = function (result, key) {
            const value = target[key];
            const v204 = prefix.concat(key);
            const v205 = getPropStructure(value, v204);
            const v206 = result.concat(v205);
            return v206;
        };
        const v208 = [];
        const v209 = v203.reduce(v207, v208);
        return v209;
    }
};
const getPropStructure = function (value, path) {
    const v210 = isObject(value);
    if (v210) {
        const v211 = getStructure(value, path);
        return v211;
    } else {
        const v212 = {
            path: path,
            value: value
        };
        const v213 = [v212];
        return v213;
    }
};
const isObject = function (target) {
    const v214 = target !== null;
    const v215 = typeof target;
    const v216 = v215 === 'object';
    const v217 = v214 && v216;
    return v217;
};
const isNumber = function (target) {
    const v218 = typeof target;
    const v219 = v218 === 'number';
    return v219;
};
const noop = function () {
};
const pathToArray = function (path) {
    const v220 = typeof path;
    const v221 = v220 === 'string';
    if (v221) {
        const v222 = path.length;
        if (v222) {
            const v223 = path.split('.');
            return v223;
        } else {
            const v224 = [];
            return v224;
        }
    } else {
        return path;
    }
};
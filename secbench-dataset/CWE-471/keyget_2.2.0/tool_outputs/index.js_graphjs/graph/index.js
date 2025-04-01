const v123 = module.exports;
v123.get = getByPath;
const v124 = module.exports;
v124.set = setByPath;
const v125 = module.exports;
v125.has = hasPath;
const v126 = module.exports;
v126.push = pushByPath;
const v127 = module.exports;
v127.method = methodByPath;
const v128 = module.exports;
v128.call = callByPath;
const v129 = module.exports;
v129.breadcrumbs = breadcrumbs;
const v130 = module.exports;
v130.select = select;
const v131 = module.exports;
v131.at = at;
const v132 = module.exports;
v132.structure = getStructure;
const select = function (target, path) {
    const v133 = breadcrumbs(target, path);
    const v134 = v133.slice(1);
    return v134;
};
const breadcrumbs = function (target, path) {
    path = pathToArray(path);
    const result = [target];
    let part;
    let value = target;
    const v135 = isObject(value);
    const v136 = !v135;
    if (v136) {
        return result;
    }
    let i = 0;
    let l = path.length;
    let v137 = i < l;
    while (v137) {
        part = path[i];
        const v139 = value.hasOwnProperty(part);
        const v140 = !v139;
        if (v140) {
            break;
        }
        const v141 = value[part];
        const v142 = result.push(v141);
        v142;
        value = value[part];
        const v138 = i++;
        v137 = i < l;
    }
    return result;
};
const hasPath = function (target, path) {
    path = pathToArray(path);
    const result = breadcrumbs(target, path);
    const v143 = result.length;
    const v144 = path.length;
    const v145 = v144 + 1;
    const v146 = v143 === v145;
    return v146;
};
const setByPath = function (target, path, value) {
    path = pathToArray(path);
    const v147 = path.length;
    const v148 = !v147;
    if (v148) {
        return value;
    }
    const key = path[0];
    const v149 = isNumber(key);
    if (v149) {
        const v150 = Array.isArray(target);
        const v151 = !v150;
        if (v151) {
            target = [];
        }
    } else {
        const v152 = isObject(target);
        const v153 = !v152;
        if (v153) {
            target = {};
        }
    }
    const v154 = path.length;
    const v155 = v154 > 1;
    if (v155) {
        const v156 = target[key];
        const v157 = path.slice(1);
        const v158 = setByPath(v156, v157, value);
        target[key] = v158;
    } else {
        target[key] = value;
    }
    return target;
};
const pushByPath = function (target, path, value) {
    path = pathToArray(path);
    const v159 = path.length;
    const v160 = !v159;
    if (v160) {
        const v161 = Array.isArray(target);
        const v162 = !v161;
        if (v162) {
            const v163 = [value];
            return v163;
        } else {
            const v164 = target.push(value);
            v164;
            return target;
        }
    }
    const v165 = isObject(target);
    const v166 = !v165;
    if (v166) {
        target = {};
    }
    const v171 = function (finalTarget, key) {
        const v167 = finalTarget[key];
        const v168 = Array.isArray(v167);
        if (v168) {
            const v169 = finalTarget[key];
            const v170 = v169.push(value);
            v170;
        } else {
            finalTarget[key] = [value];
        }
        return finalTarget;
    };
    const v172 = at(target, path, v171);
    return v172;
};
const at = function (target, path, update) {
    path = pathToArray(path);
    const v173 = path.length;
    const v174 = !v173;
    if (v174) {
        const v175 = update(target, null);
        return v175;
    }
    const key = path[0];
    const v176 = isNumber(key);
    if (v176) {
        const v177 = Array.isArray(target);
        const v178 = !v177;
        if (v178) {
            target = [];
        }
    } else {
        const v179 = isObject(target);
        const v180 = !v179;
        if (v180) {
            target = {};
        }
    }
    const v181 = path.length;
    const v182 = v181 > 1;
    if (v182) {
        const v183 = target[key];
        const v184 = path.slice(1);
        const v185 = at(v183, v184, update);
        target[key] = v185;
    } else {
        target = update(target, key);
    }
    return target;
};
const getByPath = function (target, path) {
    path = pathToArray(path);
    const values = breadcrumbs(target, path);
    const v186 = values.length;
    const v187 = v186 - 1;
    const v188 = values[v187];
    return v188;
};
const methodByPath = function (target, path) {
    path = pathToArray(path);
    const values = breadcrumbs(target, path);
    const v189 = values.length;
    const v190 = path.length;
    const v191 = v189 < v190;
    if (v191) {
        return noop;
    }
    const v192 = values.length;
    const v193 = v192 - 1;
    const v194 = values[v193];
    const v195 = typeof v194;
    const v196 = v195 !== 'function';
    if (v196) {
        return noop;
    }
    const v197 = values.length;
    const v198 = v197 > 1;
    if (v198) {
        const v199 = values.length;
        const v200 = v199 - 1;
        const v201 = values[v200];
        const v202 = values.length;
        const v203 = v202 - 2;
        const v204 = values[v203];
        const v205 = v201.bind(v204);
        return v205;
    } else {
        const v206 = values[0];
        const v207 = v206.bind(target);
        return v207;
    }
};
const callByPath = function (target, path, args) {
    var fn = methodByPath(target, path);
    const v208 = !fn;
    if (v208) {
        return;
    }
    const v209 = fn.apply(null, args);
    return v209;
};
const getStructure = function (target, prefix) {
    const v210 = isObject(target);
    const v211 = !v210;
    if (v211) {
        const v212 = [];
        const v213 = {
            path: v212,
            value: target
        };
        const v214 = [v213];
        return v214;
    }
    const v215 = !prefix;
    if (v215) {
        prefix = [];
    }
    const v216 = Array.isArray(target);
    if (v216) {
        const v220 = function (result, value, i) {
            const v217 = prefix.concat(i);
            const v218 = getPropStructure(value, v217);
            const v219 = result.concat(v218);
            return v219;
        };
        const v221 = [];
        const v222 = target.reduce(v220, v221);
        return v222;
    } else {
        const v223 = Object.getOwnPropertyNames(target);
        const v227 = function (result, key) {
            const value = target[key];
            const v224 = prefix.concat(key);
            const v225 = getPropStructure(value, v224);
            const v226 = result.concat(v225);
            return v226;
        };
        const v228 = [];
        const v229 = v223.reduce(v227, v228);
        return v229;
    }
};
const getPropStructure = function (value, path) {
    const v230 = isObject(value);
    if (v230) {
        const v231 = getStructure(value, path);
        return v231;
    } else {
        const v232 = {
            path: path,
            value: value
        };
        const v233 = [v232];
        return v233;
    }
};
const isObject = function (target) {
    const v234 = target !== null;
    const v235 = typeof target;
    const v236 = v235 === 'object';
    const v237 = v234 && v236;
    return v237;
};
const isNumber = function (target) {
    const v238 = typeof target;
    const v239 = v238 === 'number';
    return v239;
};
const noop = function () {
};
const pathToArray = function (path) {
    const v240 = typeof path;
    const v241 = v240 === 'string';
    if (v241) {
        const v242 = path.length;
        if (v242) {
            const v243 = path.split('.');
            return v243;
        } else {
            const v244 = [];
            return v244;
        }
    } else {
        return path;
    }
};
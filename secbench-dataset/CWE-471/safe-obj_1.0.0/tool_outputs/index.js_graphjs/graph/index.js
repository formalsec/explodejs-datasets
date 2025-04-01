var isObject = function isObject(obj) {
    const v127 = typeof obj;
    const v128 = v127 === 'function';
    const v129 = typeof obj;
    const v130 = v129 === 'object';
    const v131 = !obj;
    const v132 = !v131;
    const v133 = v130 && v132;
    const v134 = v128 || v133;
    return v134;
};
var isArray = function isArray(arr) {
    const v135 = Array.isArray;
    const v136 = Array.isArray(arr);
    const v137 = arr instanceof Array;
    const v138 = arr.constructor;
    const v139 = arr && v138;
    const v140 = arr.constructor;
    const v141 = v140.name;
    const v142 = v141 === 'Array';
    const v143 = v139 && v142;
    const v144 = v137 || v143;
    let v145;
    if (v135) {
        v145 = v136;
    } else {
        v145 = v144;
    }
    return v145;
};
var any = function any(list, func) {
    var i;
    var l = list.length;
    (i = 0)
    let v146 = i < l;
    while (v146) {
        const v148 = list[i];
        const v149 = func(v148);
        if (v149) {
            return true;
        }
        const v147 = i++;
        v146 = i < l;
    }
    return false;
};
var every = function every(list, func) {
    var i;
    var l = list.length;
    (i = 0)
    let v150 = i < l;
    while (v150) {
        const v152 = list[i];
        const v153 = func(v152);
        const v154 = !v153;
        if (v154) {
            return false;
        }
        const v151 = i++;
        v150 = i < l;
    }
    return true;
};
var isEqual = function isEqual(a, b) {
    const v155 = a === b;
    if (v155) {
        return true;
    }
    const v156 = typeof a;
    const v157 = typeof b;
    const v158 = v156 !== v157;
    if (v158) {
        return false;
    }
    const v159 = typeof a;
    const v160 = v159 === 'object';
    if (v160) {
        const v161 = a instanceof Array;
        if (v161) {
            const v162 = a.length;
            const v163 = b.length;
            const v164 = v162 !== v163;
            if (v164) {
                return false;
            }
            var i;
            var l = a.length;
            i = 0
            let v165 = i < l;
            while (v165) {
                const v167 = a[i];
                const v168 = b[i];
                const v169 = isEqual(v167, v168);
                const v170 = !v169;
                if (v170) {
                    return false;
                }
                const v166 = i++;
                v165 = i < l;
            }
            return true;
        } else {
            let k;
            for (k in a) {
                const v171 = k in b;
                const v172 = !v171;
                const v173 = a[k];
                const v174 = b[k];
                const v175 = isEqual(v173, v174);
                const v176 = !v175;
                const v177 = v172 || v176;
                if (v177) {
                    return false;
                }
            }
            return true;
        }
    } else {
        return false;
    }
};
var anyOrAll = function anyOrAll(method, _args) {
    var paths = [];
    var obj = {};
    const v178 = [];
    const v179 = v178.slice;
    var args = v179.call(_args);
    const v180 = args[1];
    const v181 = isArray(v180);
    if (v181) {
        obj = args[0];
        paths = args[1];
    } else {
        paths = args;
        obj = paths.shift();
    }
    const v182 = isObject(obj);
    if (v182) {
        const v184 = function (path) {
            const v183 = _safe.safe(obj, path);
            return v183;
        };
        const v185 = method(paths, v184);
        return v185;
    } else {
        return false;
    }
};
const v209 = function (obj, path, otherwise) {
    const v186 = !path;
    if (v186) {
        return otherwise;
    }
    const v187 = isObject(obj);
    const v188 = {};
    if (v187) {
        obj = obj;
    } else {
        obj = v188;
    }
    var props = path.split('.');
    const v189 = props.length;
    const v190 = v189 === 1;
    if (v190) {
        const v191 = props[0];
        const v192 = obj[v191];
        const v193 = typeof v192;
        const v194 = v193 === 'undefined';
        if (v194) {
            return otherwise;
        } else {
            const v195 = props[0];
            const v196 = obj[v195];
            const v197 = v196 === null;
            if (v197) {
                const v198 = typeof otherwise;
                const v199 = v198 === 'undefined';
                let v200;
                if (v199) {
                    v200 = null;
                } else {
                    v200 = otherwise;
                }
                return v200;
            } else {
                const v201 = props.shift();
                const v202 = obj[v201];
                return v202;
            }
        }
    } else {
        var prop = props.shift();
        const v203 = obj[prop];
        const v204 = isObject(v203);
        const v205 = obj[prop];
        const v206 = props.join('.');
        const v207 = _safe.safe(v205, v206, otherwise);
        let v208;
        if (v204) {
            v208 = v207;
        } else {
            v208 = otherwise;
        }
        return v208;
    }
};
const v227 = function (obj, path, thing) {
    const v210 = !path;
    const v211 = typeof thing;
    const v212 = v211 === 'undefined';
    const v213 = v210 || v212;
    if (v213) {
        return;
    }
    const v214 = isObject(obj);
    const v215 = obj !== null;
    const v216 = v214 && v215;
    const v217 = {};
    if (v216) {
        obj = obj;
    } else {
        obj = v217;
    }
    var props = path.split('.');
    const v218 = props.length;
    const v219 = v218 === 1;
    if (v219) {
        const v220 = props.shift();
        obj[v220] = thing;
    } else {
        var prop = props.shift();
        const v221 = prop in obj;
        const v222 = !v221;
        if (v222) {
            const v223 = {};
            obj[prop] = v223;
        }
        const v224 = obj[prop];
        const v225 = props.join('.');
        const v226 = _safe.expand(v224, v225, thing);
        v226;
    }
};
const v239 = function (obj, path, disallowed, otherwise) {
    const v228 = arguments.length;
    const v229 = v228 === 3;
    if (v229) {
        otherwise = disallowed;
        disallowed = [];
    }
    var current = _safe.safe(obj, path);
    const v230 = typeof current;
    const v231 = v230 === 'undefined';
    const v232 = current === null;
    const v233 = v231 || v232;
    const v235 = function (item) {
        const v234 = isEqual(current, item);
        return v234;
    };
    const v236 = any(disallowed, v235);
    const v237 = v233 || v236;
    if (v237) {
        const v238 = _safe.expand(obj, path, otherwise);
        v238;
    }
};
const v243 = function () {
    const v240 = [every];
    const v241 = v240.concat(arguments);
    const v242 = anyOrAll.apply(null, v241);
    return v242;
};
const v247 = function () {
    const v244 = [any];
    const v245 = v244.concat(arguments);
    const v246 = anyOrAll.apply(null, v245);
    return v246;
};
const v251 = function () {
    const v248 = _safe.anyOf;
    const v249 = v248.apply(null, arguments);
    const v250 = !v249;
    return v250;
};
var _safe = {};
_safe.safe = v209;
_safe.expand = v227;
_safe.ensure = v239;
_safe.allOf = v243;
_safe.anyOf = v247;
_safe.noneOf = v251;
const v252 = _safe.expand;
module.exports = v252;
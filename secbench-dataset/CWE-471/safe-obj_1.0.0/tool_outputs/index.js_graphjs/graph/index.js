;
const v271 = function (root) {
    var isObject = function isObject(obj) {
        const v137 = typeof obj;
        const v138 = v137 === 'function';
        const v139 = typeof obj;
        const v140 = v139 === 'object';
        const v141 = !obj;
        const v142 = !v141;
        const v143 = v140 && v142;
        const v144 = v138 || v143;
        return v144;
    };
    var isArray = function isArray(arr) {
        const v145 = Array.isArray;
        const v146 = Array.isArray(arr);
        const v147 = arr instanceof Array;
        const v148 = arr.constructor;
        const v149 = arr && v148;
        const v150 = arr.constructor;
        const v151 = v150.name;
        const v152 = v151 === 'Array';
        const v153 = v149 && v152;
        const v154 = v147 || v153;
        let v155;
        if (v145) {
            v155 = v146;
        } else {
            v155 = v154;
        }
        return v155;
    };
    var any = function any(list, func) {
        var i;
        var l = list.length;
        (i = 0)
        let v156 = i < l;
        while (v156) {
            const v158 = list[i];
            const v159 = func(v158);
            if (v159) {
                return true;
            }
            const v157 = i++;
            v156 = i < l;
        }
        return false;
    };
    var every = function every(list, func) {
        var i;
        var l = list.length;
        (i = 0)
        let v160 = i < l;
        while (v160) {
            const v162 = list[i];
            const v163 = func(v162);
            const v164 = !v163;
            if (v164) {
                return false;
            }
            const v161 = i++;
            v160 = i < l;
        }
        return true;
    };
    var isEqual = function isEqual(a, b) {
        const v165 = a === b;
        if (v165) {
            return true;
        }
        const v166 = typeof a;
        const v167 = typeof b;
        const v168 = v166 !== v167;
        if (v168) {
            return false;
        }
        const v169 = typeof a;
        const v170 = v169 === 'object';
        if (v170) {
            const v171 = a instanceof Array;
            if (v171) {
                const v172 = a.length;
                const v173 = b.length;
                const v174 = v172 !== v173;
                if (v174) {
                    return false;
                }
                var i;
                var l = a.length;
                i = 0
                let v175 = i < l;
                while (v175) {
                    const v177 = a[i];
                    const v178 = b[i];
                    const v179 = isEqual(v177, v178);
                    const v180 = !v179;
                    if (v180) {
                        return false;
                    }
                    const v176 = i++;
                    v175 = i < l;
                }
                return true;
            } else {
                let k;
                for (k in a) {
                    const v181 = k in b;
                    const v182 = !v181;
                    const v183 = a[k];
                    const v184 = b[k];
                    const v185 = isEqual(v183, v184);
                    const v186 = !v185;
                    const v187 = v182 || v186;
                    if (v187) {
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
        const v188 = [];
        const v189 = v188.slice;
        var args = v189.call(_args);
        const v190 = args[1];
        const v191 = isArray(v190);
        if (v191) {
            obj = args[0];
            paths = args[1];
        } else {
            paths = args;
            obj = paths.shift();
        }
        const v192 = isObject(obj);
        if (v192) {
            const v194 = function (path) {
                const v193 = _safe.safe(obj, path);
                return v193;
            };
            const v195 = method(paths, v194);
            return v195;
        } else {
            return false;
        }
    };
    const v219 = function (obj, path, otherwise) {
        const v196 = !path;
        if (v196) {
            return otherwise;
        }
        const v197 = isObject(obj);
        const v198 = {};
        if (v197) {
            obj = obj;
        } else {
            obj = v198;
        }
        var props = path.split('.');
        const v199 = props.length;
        const v200 = v199 === 1;
        if (v200) {
            const v201 = props[0];
            const v202 = obj[v201];
            const v203 = typeof v202;
            const v204 = v203 === 'undefined';
            if (v204) {
                return otherwise;
            } else {
                const v205 = props[0];
                const v206 = obj[v205];
                const v207 = v206 === null;
                if (v207) {
                    const v208 = typeof otherwise;
                    const v209 = v208 === 'undefined';
                    let v210;
                    if (v209) {
                        v210 = null;
                    } else {
                        v210 = otherwise;
                    }
                    return v210;
                } else {
                    const v211 = props.shift();
                    const v212 = obj[v211];
                    return v212;
                }
            }
        } else {
            var prop = props.shift();
            const v213 = obj[prop];
            const v214 = isObject(v213);
            const v215 = obj[prop];
            const v216 = props.join('.');
            const v217 = _safe.safe(v215, v216, otherwise);
            let v218;
            if (v214) {
                v218 = v217;
            } else {
                v218 = otherwise;
            }
            return v218;
        }
    };
    const v237 = function (obj, path, thing) {
        const v220 = !path;
        const v221 = typeof thing;
        const v222 = v221 === 'undefined';
        const v223 = v220 || v222;
        if (v223) {
            return;
        }
        const v224 = isObject(obj);
        const v225 = obj !== null;
        const v226 = v224 && v225;
        const v227 = {};
        if (v226) {
            obj = obj;
        } else {
            obj = v227;
        }
        var props = path.split('.');
        const v228 = props.length;
        const v229 = v228 === 1;
        if (v229) {
            const v230 = props.shift();
            obj[v230] = thing;
        } else {
            var prop = props.shift();
            const v231 = prop in obj;
            const v232 = !v231;
            if (v232) {
                const v233 = {};
                obj[prop] = v233;
            }
            const v234 = obj[prop];
            const v235 = props.join('.');
            const v236 = _safe.expand(v234, v235, thing);
            v236;
        }
    };
    const v249 = function (obj, path, disallowed, otherwise) {
        const v238 = arguments.length;
        const v239 = v238 === 3;
        if (v239) {
            otherwise = disallowed;
            disallowed = [];
        }
        var current = _safe.safe(obj, path);
        const v240 = typeof current;
        const v241 = v240 === 'undefined';
        const v242 = current === null;
        const v243 = v241 || v242;
        const v245 = function (item) {
            const v244 = isEqual(current, item);
            return v244;
        };
        const v246 = any(disallowed, v245);
        const v247 = v243 || v246;
        if (v247) {
            const v248 = _safe.expand(obj, path, otherwise);
            v248;
        }
    };
    const v253 = function () {
        const v250 = [every];
        const v251 = v250.concat(arguments);
        const v252 = anyOrAll.apply(null, v251);
        return v252;
    };
    const v257 = function () {
        const v254 = [any];
        const v255 = v254.concat(arguments);
        const v256 = anyOrAll.apply(null, v255);
        return v256;
    };
    const v261 = function () {
        const v258 = _safe.anyOf;
        const v259 = v258.apply(null, arguments);
        const v260 = !v259;
        return v260;
    };
    var _safe = {};
    _safe.safe = v219;
    _safe.expand = v237;
    _safe.ensure = v249;
    _safe.allOf = v253;
    _safe.anyOf = v257;
    _safe.noneOf = v261;
    const v262 = typeof exports;
    const v263 = v262 !== 'undefined';
    if (v263) {
        const v264 = typeof module;
        const v265 = v264 !== 'undefined';
        const v266 = module.exports;
        const v267 = v265 && v266;
        if (v267) {
            module.exports = _safe;
        }
        exports._safe = _safe;
    }
    const v268 = root._;
    const v269 = {};
    root._ = v268 || v269;
    const v270 = root._;
    v270._safe = _safe;
};
const v272 = v271(this);
v272;
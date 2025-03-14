const v305 = function (undefined) {
    var root = this;
    const v154 = Object.prototype;
    var hasOwnProp = v154.hasOwnProperty;
    var reverseDupArray = function (array) {
        const v155 = array.length;
        var result = new Array(v155);
        var index = array.length;
        var arrayMaxIndex = index - 1;
        let v156 = index--;
        while (v156) {
            const v157 = arrayMaxIndex - index;
            const v158 = array[index];
            result[v157] = v158;
            v156 = index--;
        }
        return result;
    };
    var Dottie = function () {
        const v159 = Array.prototype;
        const v160 = v159.slice;
        var args = v160.call(arguments);
        const v161 = args.length;
        const v162 = v161 == 2;
        if (v162) {
            const v163 = Dottie.find;
            const v164 = v163.apply(this, args);
            return v164;
        }
        const v165 = Dottie.transform;
        const v166 = v165.apply(this, args);
        return v166;
    };
    const v168 = function (path, object) {
        const v167 = Dottie.get(object, path);
        return v167;
    };
    Dottie.find = v168;
    Dottie.memoizePath = true;
    var memoized = {};
    const v196 = function (object, path, defaultVal) {
        const v169 = object === undefined;
        const v170 = object === null;
        const v171 = v169 || v170;
        const v172 = path === undefined;
        const v173 = v171 || v172;
        const v174 = path === null;
        const v175 = v173 || v174;
        if (v175) {
            return defaultVal;
        }
        var names;
        const v176 = typeof path;
        const v177 = v176 === 'string';
        if (v177) {
            const v178 = Dottie.memoizePath;
            if (v178) {
                const v179 = memoized[path];
                if (v179) {
                    const v180 = memoized[path];
                    names = v180.slice(0);
                } else {
                    const v181 = path.split('.');
                    names = v181.reverse();
                    const v182 = names.slice(0);
                    memoized[path] = v182;
                }
            } else {
                const v183 = path.split('.');
                names = v183.reverse();
            }
        } else {
            const v184 = Array.isArray(path);
            if (v184) {
                names = reverseDupArray(path);
            }
        }
        const v185 = names.length;
        const v186 = names.pop();
        const v187 = (object = object[v186]) !== undefined;
        const v188 = v185 && v187;
        const v189 = object !== null;
        let v190 = v188 && v189;
        while (v190) {
            ;
            v190 = v188 && v189;
        }
        const v191 = object === null;
        const v192 = names.length;
        const v193 = v191 && v192;
        if (v193) {
            object = undefined;
        }
        const v194 = object === undefined;
        let v195;
        if (v194) {
            v195 = defaultVal;
        } else {
            v195 = object;
        }
        return v195;
    };
    Dottie.get = v196;
    const v199 = function (object, path) {
        const v197 = Dottie.get(object, path);
        const v198 = v197 !== undefined;
        return v198;
    };
    Dottie.exists = v199;
    const v237 = function (object, path, value, options) {
        let pieces;
        const v200 = Array.isArray(path);
        const v201 = path.split('.');
        if (v200) {
            pieces = path;
        } else {
            pieces = v201;
        }
        var current = object;
        var piece;
        var length = pieces.length;
        const v202 = pieces[0];
        const v203 = v202 === '__proto__';
        if (v203) {
            return;
        }
        const v204 = typeof current;
        const v205 = v204 !== 'object';
        if (v205) {
            const v206 = new Error('Parent is not an object.');
            throw v206;
        }
        var index = 0;
        let v207 = index < length;
        while (v207) {
            piece = pieces[index];
            const v209 = hasOwnProp.call(current, piece);
            const v210 = !v209;
            const v211 = current[piece];
            const v212 = v211 === undefined;
            const v213 = v210 || v212;
            const v214 = current[piece];
            const v215 = typeof v214;
            const v216 = v215 !== 'object';
            const v217 = current[piece];
            const v218 = v217 === null;
            const v219 = v216 || v218;
            const v220 = v219 && options;
            const v221 = options.force;
            const v222 = v221 === true;
            const v223 = v220 && v222;
            const v224 = v213 || v223;
            if (v224) {
                const v225 = {};
                current[piece] = v225;
            }
            const v226 = length - 1;
            const v227 = index == v226;
            if (v227) {
                current[piece] = value;
            } else {
                const v228 = current[piece];
                const v229 = typeof v228;
                const v230 = v229 !== 'object';
                const v231 = current[piece];
                const v232 = v231 === null;
                const v233 = v230 || v232;
                if (v233) {
                    const v234 = 'Target key "' + piece;
                    const v235 = v234 + '" is not suitable for a nested value. (It is in use as non-object. Set `force` to `true` to override.)';
                    const v236 = new Error(v235);
                    throw v236;
                }
                current = current[piece];
            }
            const v208 = index++;
            v207 = index < length;
        }
        current[piece] = value;
    };
    Dottie.set = v237;
    const v241 = function (object, path, value) {
        const v238 = Dottie.get(object, path);
        const v239 = v238 === undefined;
        if (v239) {
            const v240 = Dottie.set(object, path, value);
            v240;
        }
    };
    Dottie['default'] = v241;
    const Dottie$transformfunction = function (object, options) {
        const v242 = Array.isArray(object);
        if (v242) {
            const v244 = function (o) {
                const v243 = Dottie.transform(o, options);
                return v243;
            };
            const v245 = object.map(v244);
            return v245;
        }
        const v246 = {};
        options = options || v246;
        const v247 = options.delimiter;
        options.delimiter = v247 || '.';
        var pieces;
        var piecesLength;
        var piece;
        var current;
        var transformed = {};
        var key;
        var keys = Object.keys(object);
        var length = keys.length;
        var i;
        (i = 0)
        let v248 = i < length;
        while (v248) {
            key = keys[i];
            const v250 = options.delimiter;
            const v251 = key.indexOf(v250);
            const v252 = -1;
            const v253 = v251 !== v252;
            if (v253) {
                const v254 = options.delimiter;
                pieces = key.split(v254);
                const v255 = pieces[0];
                const v256 = v255 === '__proto__';
                if (v256) {
                    break;
                }
                piecesLength = pieces.length;
                current = transformed;
                var index = 0;
                let v257 = index < piecesLength;
                while (v257) {
                    piece = pieces[index];
                    const v259 = piecesLength - 1;
                    const v260 = index != v259;
                    const v261 = current.hasOwnProperty(piece);
                    const v262 = !v261;
                    const v263 = v260 && v262;
                    if (v263) {
                        const v264 = {};
                        current[piece] = v264;
                    }
                    const v265 = piecesLength - 1;
                    const v266 = index == v265;
                    if (v266) {
                        const v267 = object[key];
                        current[piece] = v267;
                    }
                    current = current[piece];
                    const v268 = current === null;
                    if (v268) {
                        break;
                    }
                    const v258 = index++;
                    v257 = index < piecesLength;
                }
            } else {
                const v269 = object[key];
                transformed[key] = v269;
            }
            const v249 = i++;
            v248 = i < length;
        }
        return transformed;
    };
    Dottie.transform = Dottie$transformfunction;
    const v280 = function (object, seperator) {
        const v270 = typeof seperator;
        const v271 = v270 === 'undefined';
        if (v271) {
            seperator = '.';
        }
        var flattened = {};
        var current;
        var nested;
        let key;
        for (key in object) {
            const v272 = hasOwnProp.call(object, key);
            if (v272) {
                current = object[key];
                const v273 = Object.prototype;
                const v274 = v273.toString;
                const v275 = v274.call(current);
                const v276 = v275 === '[object Object]';
                if (v276) {
                    nested = Dottie.flatten(current, seperator);
                    let _key;
                    for (_key in nested) {
                        const v277 = key + seperator;
                        const v278 = v277 + _key;
                        const v279 = nested[_key];
                        flattened[v278] = v279;
                    }
                } else {
                    flattened[key] = current;
                }
            }
        }
        return flattened;
    };
    Dottie.flatten = v280;
    const v295 = function (object, prefixes) {
        var paths = [];
        var value;
        var key;
        const v281 = [];
        prefixes = prefixes || v281;
        const v282 = typeof object;
        const v283 = v282 === 'object';
        if (v283) {
            for (key in object) {
                value = object[key];
                const v284 = typeof value;
                const v285 = v284 === 'object';
                const v286 = value !== null;
                const v287 = v285 && v286;
                if (v287) {
                    const v288 = [key];
                    const v289 = prefixes.concat(v288);
                    const v290 = Dottie.paths(value, v289);
                    paths = paths.concat(v290);
                } else {
                    const v291 = prefixes.concat(key);
                    const v292 = v291.join('.');
                    const v293 = paths.push(v292);
                    v293;
                }
            }
        } else {
            const v294 = new Error('Paths was called with non-object argument.');
            throw v294;
        }
        return paths;
    };
    Dottie.paths = v295;
    const v296 = typeof module;
    const v297 = v296 !== 'undefined';
    const v298 = module.exports;
    const v299 = v297 && v298;
    if (v299) {
        module.exports = Dottie;
        exports = module.exports;
    } else {
        root['Dottie'] = Dottie;
        root['Dot'] = Dottie;
        const v300 = typeof define;
        const v301 = v300 === 'function';
        if (v301) {
            const v302 = [];
            const v303 = function () {
                return Dottie;
            };
            const v304 = define(v302, v303);
            v304;
        }
    }
};
const v306 = v305();
v306;
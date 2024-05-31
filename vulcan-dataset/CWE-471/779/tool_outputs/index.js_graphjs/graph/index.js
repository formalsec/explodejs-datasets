const v199 = function (path, o, special, map) {
    var lookup;
    const v166 = typeof special;
    const v167 = 'function' == v166;
    if (v167) {
        const v168 = special.length;
        const v169 = v168 < 2;
        if (v169) {
            map = special;
            special = undefined;
        } else {
            lookup = special;
            special = undefined;
        }
    }
    const v170 = map || (map = K);
    v170;
    let parts;
    const v171 = typeof path;
    const v172 = 'string' == v171;
    const v173 = path.split('.');
    if (v172) {
        parts = v173;
    } else {
        parts = path;
    }
    const v174 = Array.isArray(parts);
    const v175 = !v174;
    if (v175) {
        const v176 = new TypeError('Invalid `path`. Must be either string or array');
        throw v176;
    }
    var obj = o;
    var part;
    var i = 0;
    const v177 = parts.length;
    let v178 = i < v177;
    while (v178) {
        part = parts[i];
        const v180 = Array.isArray(obj);
        const v181 = /^\d+$/.test(part);
        const v182 = !v181;
        const v183 = v180 && v182;
        if (v183) {
            var paths = parts.slice(i);
            const v188 = function (item) {
                const v184 = special || lookup;
                const v185 = exports.get(paths, item, v184, map);
                const v186 = map(undefined);
                let v187;
                if (item) {
                    v187 = v185;
                } else {
                    v187 = v186;
                }
                return v187;
            };
            const v189 = obj.map(v188);
            return v189;
        }
        if (lookup) {
            obj = lookup(obj, part);
        } else {
            let _from;
            const v190 = obj[special];
            const v191 = special && v190;
            const v192 = obj[special];
            if (v191) {
                _from = v192;
            } else {
                _from = obj;
            }
            const v193 = _from instanceof Map;
            const v194 = _from.get(part);
            const v195 = _from[part];
            if (v193) {
                obj = v194;
            } else {
                obj = v195;
            }
        }
        const v196 = !obj;
        if (v196) {
            const v197 = map(obj);
            return v197;
        }
        const v179 = ++i;
        v178 = i < v177;
    }
    const v198 = map(obj);
    return v198;
};
exports.get = v199;
const v217 = function (path, o) {
    let parts;
    const v200 = typeof path;
    const v201 = v200 === 'string';
    const v202 = path.split('.');
    if (v201) {
        parts = v202;
    } else {
        parts = path;
    }
    const v203 = Array.isArray(parts);
    const v204 = !v203;
    if (v204) {
        const v205 = new TypeError('Invalid `path`. Must be either string or array');
        throw v205;
    }
    var len = parts.length;
    var cur = o;
    var i = 0;
    let v206 = i < len;
    while (v206) {
        const v208 = cur == null;
        const v209 = typeof cur;
        const v210 = v209 !== 'object';
        const v211 = v208 || v210;
        const v212 = parts[i];
        const v213 = v212 in cur;
        const v214 = !v213;
        const v215 = v211 || v214;
        if (v215) {
            return false;
        }
        const v216 = parts[i];
        cur = cur[v216];
        const v207 = ++i;
        v206 = i < len;
    }
    return true;
};
exports.has = v217;
const v244 = function (path, o) {
    let parts;
    const v218 = typeof path;
    const v219 = v218 === 'string';
    const v220 = path.split('.');
    if (v219) {
        parts = v220;
    } else {
        parts = path;
    }
    const v221 = Array.isArray(parts);
    const v222 = !v221;
    if (v222) {
        const v223 = new TypeError('Invalid `path`. Must be either string or array');
        throw v223;
    }
    var len = parts.length;
    var cur = o;
    var i = 0;
    let v224 = i < len;
    while (v224) {
        const v226 = cur == null;
        const v227 = typeof cur;
        const v228 = v227 !== 'object';
        const v229 = v226 || v228;
        const v230 = parts[i];
        const v231 = v230 in cur;
        const v232 = !v231;
        const v233 = v229 || v232;
        if (v233) {
            return false;
        }
        const v234 = len - 1;
        const v235 = i === v234;
        if (v235) {
            const v236 = parts[i];
            const v237 = cur[v236];
            const v238 = delete v237;
            v238;
            return true;
        }
        const v239 = cur instanceof Map;
        const v240 = parts[i];
        const v241 = cur.get(v240);
        const v242 = parts[i];
        const v243 = cur[v242];
        if (v239) {
            cur = v241;
        } else {
            cur = v243;
        }
        const v225 = ++i;
        v224 = i < len;
    }
    return true;
};
exports.unset = v244;
const v330 = function (path, val, o, special, map, _copying) {
    var lookup;
    const v245 = typeof special;
    const v246 = 'function' == v245;
    if (v246) {
        const v247 = special.length;
        const v248 = v247 < 2;
        if (v248) {
            map = special;
            special = undefined;
        } else {
            lookup = special;
            special = undefined;
        }
    }
    const v249 = map || (map = K);
    v249;
    let parts;
    const v250 = typeof path;
    const v251 = 'string' == v250;
    const v252 = path.split('.');
    if (v251) {
        parts = v252;
    } else {
        parts = path;
    }
    const v253 = Array.isArray(parts);
    const v254 = !v253;
    if (v254) {
        const v255 = new TypeError('Invalid `path`. Must be either string or array');
        throw v255;
    }
    const v256 = null == o;
    if (v256) {
        return;
    }
    const v257 = /\$/.test(path);
    const v258 = _copying !== false;
    const v259 = v257 && v258;
    var copy = _copying || v259;
    var obj = o;
    var part;
    var i = 0;
    const v260 = parts.length;
    var len = v260 - 1;
    let v261 = i < len;
    while (v261) {
        part = parts[i];
        const v263 = '$' == part;
        if (v263) {
            const v264 = len - 1;
            const v265 = i == v264;
            if (v265) {
                break;
            } else {
                continue;
            }
        }
        const v266 = Array.isArray(obj);
        const v267 = /^\d+$/.test(part);
        const v268 = !v267;
        const v269 = v266 && v268;
        if (v269) {
            var paths = parts.slice(i);
            const v270 = !copy;
            const v271 = Array.isArray(val);
            const v272 = v270 && v271;
            if (v272) {
                var j = 0;
                const v273 = obj.length;
                const v274 = j < v273;
                const v275 = val.length;
                const v276 = j < v275;
                let v277 = v274 && v276;
                while (v277) {
                    const v279 = val[j];
                    const v280 = obj[j];
                    const v281 = special || lookup;
                    const v282 = exports.set(paths, v279, v280, v281, map, copy);
                    v282;
                    const v278 = ++j;
                    v277 = v274 && v276;
                }
            } else {
                var j = 0;
                const v283 = obj.length;
                let v284 = j < v283;
                while (v284) {
                    const v286 = obj[j];
                    const v287 = special || lookup;
                    const v288 = exports.set(paths, val, v286, v287, map, copy);
                    v288;
                    const v285 = ++j;
                    v284 = j < v283;
                }
            }
            return;
        }
        if (lookup) {
            obj = lookup(obj, part);
        } else {
            let _to;
            const v289 = obj[special];
            const v290 = special && v289;
            const v291 = obj[special];
            if (v290) {
                _to = v291;
            } else {
                _to = obj;
            }
            const v292 = _to instanceof Map;
            const v293 = _to.get(part);
            const v294 = _to[part];
            if (v292) {
                obj = v293;
            } else {
                obj = v294;
            }
        }
        const v295 = !obj;
        if (v295) {
            return;
        }
        const v262 = ++i;
        v261 = i < len;
    }
    part = parts[len];
    const v296 = obj[special];
    const v297 = special && v296;
    if (v297) {
        obj = obj[special];
    }
    const v298 = Array.isArray(obj);
    const v299 = /^\d+$/.test(part);
    const v300 = !v299;
    const v301 = v298 && v300;
    if (v301) {
        const v302 = !copy;
        const v303 = Array.isArray(val);
        const v304 = v302 && v303;
        if (v304) {
            var item;
            var j = 0;
            const v305 = obj.length;
            const v306 = j < v305;
            const v307 = val.length;
            const v308 = j < v307;
            let v309 = v306 && v308;
            while (v309) {
                item = obj[j];
                if (item) {
                    if (lookup) {
                        const v311 = val[j];
                        const v312 = map(v311);
                        const v313 = lookup(item, part, v312);
                        v313;
                    } else {
                        const v314 = item[special];
                        if (v314) {
                            item = item[special];
                        }
                        const v315 = val[j];
                        const v316 = map(v315);
                        item[part] = v316;
                    }
                }
                const v310 = ++j;
                v309 = v306 && v308;
            }
        } else {
            var j = 0;
            const v317 = obj.length;
            let v318 = j < v317;
            while (v318) {
                item = obj[j];
                if (item) {
                    if (lookup) {
                        const v320 = map(val);
                        const v321 = lookup(item, part, v320);
                        v321;
                    } else {
                        const v322 = item[special];
                        if (v322) {
                            item = item[special];
                        }
                        const v323 = map(val);
                        item[part] = v323;
                    }
                }
                const v319 = ++j;
                v318 = j < v317;
            }
        }
    } else {
        if (lookup) {
            const v324 = map(val);
            const v325 = lookup(obj, part, v324);
            v325;
        } else {
            const v326 = obj instanceof Map;
            if (v326) {
                const v327 = map(val);
                const v328 = obj.set(part, v327);
                v328;
            } else {
                const v329 = map(val);
                obj[part] = v329;
            }
        }
    }
};
exports.set = v330;
const K = function (v) {
    return v;
};
'use strict';
const v180 = function () {
    var array = new Array(256);
    var i = 0;
    let v173 = i < 256;
    while (v173) {
        const v175 = i < 16;
        let v176;
        if (v175) {
            v176 = '0';
        } else {
            v176 = '';
        }
        const v177 = i.toString(16);
        const v178 = v176 + v177;
        const v179 = v178.toUpperCase();
        array[i] = '%' + v179;
        const v174 = ++i;
        v173 = i < 256;
    }
    return array;
};
var hexTable = v180();
const v191 = function (source, options) {
    let obj;
    const v181 = options.plainObjects;
    const v182 = Object.create(null);
    const v183 = {};
    if (v181) {
        obj = v182;
    } else {
        obj = v183;
    }
    var i = 0;
    const v184 = source.length;
    let v185 = i < v184;
    while (v185) {
        const v187 = source[i];
        const v188 = typeof v187;
        const v189 = v188 !== 'undefined';
        if (v189) {
            const v190 = source[i];
            obj[i] = v190;
        }
        const v186 = ++i;
        v185 = i < v184;
    }
    return obj;
};
exports.arrayToObject = v191;
const v216 = function (target, source, options) {
    const v192 = !source;
    if (v192) {
        return target;
    }
    const v193 = typeof source;
    const v194 = v193 !== 'object';
    if (v194) {
        const v195 = Array.isArray(target);
        if (v195) {
            const v196 = target.push(source);
            v196;
        } else {
            const v197 = typeof target;
            const v198 = v197 === 'object';
            if (v198) {
                target[source] = true;
            } else {
                const v199 = [
                    target,
                    source
                ];
                return v199;
            }
        }
        return target;
    }
    const v200 = typeof target;
    const v201 = v200 !== 'object';
    if (v201) {
        const v202 = [target];
        const v203 = v202.concat(source);
        return v203;
    }
    var mergeTarget = target;
    const v204 = Array.isArray(target);
    const v205 = Array.isArray(source);
    const v206 = !v205;
    const v207 = v204 && v206;
    if (v207) {
        mergeTarget = exports.arrayToObject(target, options);
    }
    const v208 = Object.keys(source);
    const v214 = function (acc, key) {
        var value = source[key];
        const v209 = Object.prototype;
        const v210 = v209.hasOwnProperty;
        const v211 = v210.call(acc, key);
        if (v211) {
            const v212 = acc[key];
            const v213 = exports.merge(v212, value, options);
            acc[key] = v213;
        } else {
            acc[key] = value;
        }
        return acc;
    };
    const v215 = v208.reduce(v214, mergeTarget);
    return v215;
};
exports.merge = v216;
const v219 = function (str) {
    try {
        const v217 = str.replace(/\+/g, ' ');
        const v218 = decodeURIComponent(v217);
        return v218;
    } catch (e) {
        return str;
    }
};
exports.decode = v219;
const v293 = function (str) {
    const v220 = str.length;
    const v221 = v220 === 0;
    if (v221) {
        return str;
    }
    let string;
    const v222 = typeof str;
    const v223 = v222 === 'string';
    const v224 = String(str);
    if (v223) {
        string = str;
    } else {
        string = v224;
    }
    var out = '';
    var i = 0;
    const v225 = string.length;
    let v226 = i < v225;
    while (v226) {
        var c = string.charCodeAt(i);
        const v228 = c === 45;
        const v229 = c === 46;
        const v230 = v228 || v229;
        const v231 = c === 95;
        const v232 = v230 || v231;
        const v233 = c === 126;
        const v234 = v232 || v233;
        const v235 = c >= 48;
        const v236 = c <= 57;
        const v237 = v235 && v236;
        const v238 = v234 || v237;
        const v239 = c >= 65;
        const v240 = c <= 90;
        const v241 = v239 && v240;
        const v242 = v238 || v241;
        const v243 = c >= 97;
        const v244 = c <= 122;
        const v245 = v243 && v244;
        const v246 = v242 || v245;
        if (v246) {
            out += string.charAt(i);
            continue;
        }
        const v247 = c < 128;
        if (v247) {
            const v248 = hexTable[c];
            out = out + v248;
            continue;
        }
        const v249 = c < 2048;
        if (v249) {
            const v250 = c >> 6;
            const v251 = 192 | v250;
            const v252 = hexTable[v251];
            const v253 = c & 63;
            const v254 = 128 | v253;
            const v255 = hexTable[v254];
            const v256 = v252 + v255;
            out = out + v256;
            continue;
        }
        const v257 = c < 55296;
        const v258 = c >= 57344;
        const v259 = v257 || v258;
        if (v259) {
            const v260 = c >> 12;
            const v261 = 224 | v260;
            const v262 = hexTable[v261];
            const v263 = c >> 6;
            const v264 = v263 & 63;
            const v265 = 128 | v264;
            const v266 = hexTable[v265];
            const v267 = v262 + v266;
            const v268 = c & 63;
            const v269 = 128 | v268;
            const v270 = hexTable[v269];
            const v271 = v267 + v270;
            out = out + v271;
            continue;
        }
        i += 1;
        const v272 = c & 1023;
        const v273 = v272 << 10;
        const v274 = string.charCodeAt(i);
        const v275 = v274 & 1023;
        const v276 = v273 | v275;
        c = 65536 + v276;
        const v277 = c >> 18;
        const v278 = 240 | v277;
        const v279 = hexTable[v278];
        const v280 = c >> 12;
        const v281 = v280 & 63;
        const v282 = 128 | v281;
        const v283 = hexTable[v282];
        const v284 = v279 + v283;
        const v285 = c >> 6;
        const v286 = v285 & 63;
        const v287 = 128 | v286;
        const v288 = hexTable[v287];
        const v289 = v284 + v288;
        const v290 = c & 63;
        const v291 = 128 | v290;
        const v292 = hexTable[v291];
        out += v289 + v292;
        const v227 = ++i;
        v226 = i < v225;
    }
    return out;
};
exports.encode = v293;
const v325 = function (obj, references) {
    const v294 = typeof obj;
    const v295 = v294 !== 'object';
    const v296 = obj === null;
    const v297 = v295 || v296;
    if (v297) {
        return obj;
    }
    const v298 = [];
    var refs = references || v298;
    var lookup = refs.indexOf(obj);
    const v299 = -1;
    const v300 = lookup !== v299;
    if (v300) {
        const v301 = refs[lookup];
        return v301;
    }
    const v302 = refs.push(obj);
    v302;
    const v303 = Array.isArray(obj);
    if (v303) {
        var compacted = [];
        var i = 0;
        const v304 = obj.length;
        let v305 = i < v304;
        while (v305) {
            const v307 = obj[i];
            const v308 = obj[i];
            const v309 = typeof v308;
            const v310 = v309 === 'object';
            const v311 = v307 && v310;
            if (v311) {
                const v312 = obj[i];
                const v313 = exports.compact(v312, refs);
                const v314 = compacted.push(v313);
                v314;
            } else {
                const v315 = obj[i];
                const v316 = typeof v315;
                const v317 = v316 !== 'undefined';
                if (v317) {
                    const v318 = obj[i];
                    const v319 = compacted.push(v318);
                    v319;
                }
            }
            const v306 = ++i;
            v305 = i < v304;
        }
        return compacted;
    }
    var keys = Object.keys(obj);
    var j = 0;
    const v320 = keys.length;
    let v321 = j < v320;
    while (v321) {
        var key = keys[j];
        const v323 = obj[key];
        const v324 = exports.compact(v323, refs);
        obj[key] = v324;
        const v322 = ++j;
        v321 = j < v320;
    }
    return obj;
};
exports.compact = v325;
const v330 = function (obj) {
    const v326 = Object.prototype;
    const v327 = v326.toString;
    const v328 = v327.call(obj);
    const v329 = v328 === '[object RegExp]';
    return v329;
};
exports.isRegExp = v330;
const v344 = function (obj) {
    const v331 = obj === null;
    const v332 = typeof obj;
    const v333 = v332 === 'undefined';
    const v334 = v331 || v333;
    if (v334) {
        return false;
    }
    const v335 = obj.constructor;
    const v336 = obj.constructor;
    const v337 = v336.isBuffer;
    const v338 = v335 && v337;
    const v339 = obj.constructor;
    const v340 = v339.isBuffer(obj);
    const v341 = v338 && v340;
    const v342 = !v341;
    const v343 = !v342;
    return v343;
};
exports.isBuffer = v344;
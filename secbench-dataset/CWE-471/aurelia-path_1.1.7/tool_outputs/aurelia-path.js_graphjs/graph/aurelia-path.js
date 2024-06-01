'use strict';
const v209 = { value: true };
const v210 = Object.defineProperty(exports, '__esModule', v209);
v210;
let _typeof;
const v211 = typeof Symbol;
const v212 = v211 === 'function';
const v213 = Symbol.iterator;
const v214 = typeof v213;
const v215 = v214 === 'symbol';
const v216 = v212 && v215;
const v218 = function (obj) {
    const v217 = typeof obj;
    return v217;
};
const v227 = function (obj) {
    const v219 = typeof Symbol;
    const v220 = v219 === 'function';
    const v221 = obj && v220;
    const v222 = obj.constructor;
    const v223 = v222 === Symbol;
    const v224 = v221 && v223;
    const v225 = typeof obj;
    let v226;
    if (v224) {
        v226 = 'symbol';
    } else {
        v226 = v225;
    }
    return v226;
};
if (v216) {
    _typeof = v218;
} else {
    _typeof = v227;
}
exports.relativeToFile = relativeToFile;
exports.join = join;
exports.buildQueryString = buildQueryString;
exports.parseQueryString = parseQueryString;
const trimDots = function (ary) {
    var i = 0;
    const v228 = ary.length;
    let v229 = i < v228;
    while (v229) {
        var part = ary[i];
        const v231 = part === '.';
        if (v231) {
            const v232 = ary.splice(i, 1);
            v232;
            i -= 1;
        } else {
            const v233 = part === '..';
            if (v233) {
                const v234 = i === 0;
                const v235 = i === 1;
                const v236 = ary[2];
                const v237 = v236 === '..';
                const v238 = v235 && v237;
                const v239 = v234 || v238;
                const v240 = i - 1;
                const v241 = ary[v240];
                const v242 = v241 === '..';
                const v243 = v239 || v242;
                if (v243) {
                    continue;
                } else {
                    const v244 = i > 0;
                    if (v244) {
                        const v245 = i - 1;
                        const v246 = ary.splice(v245, 2);
                        v246;
                        i -= 2;
                    }
                }
            }
        }
        const v230 = ++i;
        v229 = i < v228;
    }
};
const relativeToFile = function (name, file) {
    const v247 = file.split('/');
    var fileParts = file && v247;
    const v248 = name.trim();
    var nameParts = v248.split('/');
    const v249 = nameParts[0];
    const v250 = v249.charAt(0);
    const v251 = v250 === '.';
    const v252 = v251 && fileParts;
    if (v252) {
        const v253 = fileParts.length;
        const v254 = v253 - 1;
        var normalizedBaseParts = fileParts.slice(0, v254);
        const v255 = nameParts.unshift;
        const v256 = v255.apply(nameParts, normalizedBaseParts);
        v256;
    }
    const v257 = trimDots(nameParts);
    v257;
    const v258 = nameParts.join('/');
    return v258;
};
const join = function (path1, path2) {
    const v259 = !path1;
    if (v259) {
        return path2;
    }
    const v260 = !path2;
    if (v260) {
        return path1;
    }
    var schemeMatch = path1.match(/^([^/]*?:)\//);
    let scheme;
    const v261 = schemeMatch.length;
    const v262 = v261 > 0;
    const v263 = schemeMatch && v262;
    const v264 = schemeMatch[1];
    if (v263) {
        scheme = v264;
    } else {
        scheme = '';
    }
    const v265 = scheme.length;
    path1 = path1.substr(v265);
    const v266 = void 0;
    var urlPrefix = v266;
    const v267 = path1.indexOf('///');
    const v268 = v267 === 0;
    const v269 = scheme === 'file:';
    const v270 = v268 && v269;
    if (v270) {
        urlPrefix = '///';
    } else {
        const v271 = path1.indexOf('//');
        const v272 = v271 === 0;
        if (v272) {
            urlPrefix = '//';
        } else {
            const v273 = path1.indexOf('/');
            const v274 = v273 === 0;
            if (v274) {
                urlPrefix = '/';
            } else {
                urlPrefix = '';
            }
        }
    }
    let trailingSlash;
    const v275 = -1;
    const v276 = path2.slice(v275);
    const v277 = v276 === '/';
    if (v277) {
        trailingSlash = '/';
    } else {
        trailingSlash = '';
    }
    var url1 = path1.split('/');
    var url2 = path2.split('/');
    var url3 = [];
    var i = 0;
    var ii = url1.length;
    let v278 = i < ii;
    while (v278) {
        const v280 = url1[i];
        const v281 = v280 === '..';
        if (v281) {
            const v282 = url3.pop();
            v282;
        } else {
            const v283 = url1[i];
            const v284 = v283 === '.';
            const v285 = url1[i];
            const v286 = v285 === '';
            const v287 = v284 || v286;
            if (v287) {
                continue;
            } else {
                const v288 = url1[i];
                const v289 = url3.push(v288);
                v289;
            }
        }
        const v279 = ++i;
        v278 = i < ii;
    }
    var _i = 0;
    var _ii = url2.length;
    let v290 = _i < _ii;
    while (v290) {
        const v292 = url2[_i];
        const v293 = v292 === '..';
        if (v293) {
            const v294 = url3.pop();
            v294;
        } else {
            const v295 = url2[_i];
            const v296 = v295 === '.';
            const v297 = url2[_i];
            const v298 = v297 === '';
            const v299 = v296 || v298;
            if (v299) {
                continue;
            } else {
                const v300 = url2[_i];
                const v301 = url3.push(v300);
                v301;
            }
        }
        const v291 = ++_i;
        v290 = _i < _ii;
    }
    const v302 = scheme + urlPrefix;
    const v303 = url3.join('/');
    const v304 = v302 + v303;
    const v305 = v304 + trailingSlash;
    return v305;
};
var encode = encodeURIComponent;
var encodeKey = function encodeKey(k) {
    const v306 = encode(k);
    const v307 = v306.replace('%24', '$');
    return v307;
};
const buildParam = function (key, value, traditional) {
    var result = [];
    const v308 = value === null;
    const v309 = value === undefined;
    const v310 = v308 || v309;
    if (v310) {
        return result;
    }
    const v311 = Array.isArray(value);
    if (v311) {
        var i = 0;
        var l = value.length;
        let v312 = i < l;
        while (v312) {
            if (traditional) {
                const v314 = encodeKey(key);
                const v315 = v314 + '=';
                const v316 = value[i];
                const v317 = encode(v316);
                const v318 = v315 + v317;
                const v319 = result.push(v318);
                v319;
            } else {
                const v320 = key + '[';
                const v321 = value[i];
                const v322 = _typeof(v321);
                const v323 = v322 === 'object';
                const v324 = value[i];
                const v325 = v324 !== null;
                const v326 = v323 && v325;
                let v327;
                if (v326) {
                    v327 = i;
                } else {
                    v327 = '';
                }
                const v328 = v320 + v327;
                var arrayKey = v328 + ']';
                const v329 = value[i];
                const v330 = buildParam(arrayKey, v329);
                result = result.concat(v330);
            }
            const v313 = i++;
            v312 = i < l;
        }
    } else {
        const v331 = typeof value;
        const v332 = v331 === 'undefined';
        const v333 = _typeof(value);
        let v334;
        if (v332) {
            v334 = 'undefined';
        } else {
            v334 = v333;
        }
        const v335 = v334 === 'object';
        const v336 = !traditional;
        const v337 = v335 && v336;
        if (v337) {
            let propertyName;
            for (propertyName in value) {
                const v338 = key + '[';
                const v339 = v338 + propertyName;
                const v340 = v339 + ']';
                const v341 = value[propertyName];
                const v342 = buildParam(v340, v341);
                result = result.concat(v342);
            }
        } else {
            const v343 = encodeKey(key);
            const v344 = v343 + '=';
            const v345 = encode(value);
            const v346 = v344 + v345;
            const v347 = result.push(v346);
            v347;
        }
    }
    return result;
};
const buildQueryString = function (params, traditional) {
    var pairs = [];
    const v348 = {};
    const v349 = params || v348;
    const v350 = Object.keys(v349);
    var keys = v350.sort();
    var i = 0;
    var len = keys.length;
    let v351 = i < len;
    while (v351) {
        var key = keys[i];
        const v353 = params[key];
        const v354 = buildParam(key, v353, traditional);
        pairs = pairs.concat(v354);
        const v352 = i++;
        v351 = i < len;
    }
    const v355 = pairs.length;
    const v356 = v355 === 0;
    if (v356) {
        return '';
    }
    const v357 = pairs.join('&');
    return v357;
};
const processScalarParam = function (existedParam, value) {
    const v358 = Array.isArray(existedParam);
    if (v358) {
        const v359 = existedParam.push(value);
        v359;
        return existedParam;
    }
    const v360 = existedParam !== undefined;
    if (v360) {
        const v361 = [
            existedParam,
            value
        ];
        return v361;
    }
    return value;
};
const parseComplexParam = function (queryParams, keys, value) {
    var currentParams = queryParams;
    const v362 = keys.length;
    var keysLastIndex = v362 - 1;
    var j = 0;
    let v363 = j <= keysLastIndex;
    while (v363) {
        let key;
        const v365 = keys[j];
        const v366 = v365 === '';
        const v367 = currentParams.length;
        const v368 = keys[j];
        if (v366) {
            key = v367;
        } else {
            key = v368;
        }
        const v369 = j < keysLastIndex;
        if (v369) {
            let prevValue;
            const v370 = currentParams[key];
            const v371 = !v370;
            const v372 = currentParams[key];
            const v373 = _typeof(v372);
            const v374 = v373 === 'object';
            const v375 = v371 || v374;
            const v376 = currentParams[key];
            const v377 = currentParams[key];
            const v378 = [v377];
            if (v375) {
                prevValue = v376;
            } else {
                prevValue = v378;
            }
            const v379 = j + 1;
            const v380 = keys[v379];
            const v381 = isNaN(v380);
            const v382 = {};
            const v383 = [];
            let v384;
            if (v381) {
                v384 = v382;
            } else {
                v384 = v383;
            }
            currentParams.key = prevValue || v384;
            currentParams = currentParams[key];
        } else {
            currentParams.key = value;
            currentParams = currentParams[key];
        }
        const v364 = j++;
        v363 = j <= keysLastIndex;
    }
};
const parseQueryString = function (queryString) {
    var queryParams = {};
    const v385 = !queryString;
    const v386 = typeof queryString;
    const v387 = v386 !== 'string';
    const v388 = v385 || v387;
    if (v388) {
        return queryParams;
    }
    var query = queryString;
    const v389 = query.charAt(0);
    const v390 = v389 === '?';
    if (v390) {
        query = query.substr(1);
    }
    const v391 = query.replace(/\+/g, ' ');
    var pairs = v391.split('&');
    var i = 0;
    const v392 = pairs.length;
    let v393 = i < v392;
    while (v393) {
        const v395 = pairs[i];
        var pair = v395.split('=');
        const v396 = pair[0];
        var key = decodeURIComponent(v396);
        const v397 = !key;
        if (v397) {
            continue;
        }
        var keys = key.split('][');
        const v398 = keys.length;
        var keysLastIndex = v398 - 1;
        const v399 = keys[0];
        const v400 = /\[/.test(v399);
        const v401 = keys[keysLastIndex];
        const v402 = /\]$/.test(v401);
        const v403 = v400 && v402;
        if (v403) {
            const v404 = keys[keysLastIndex];
            const v405 = v404.replace(/\]$/, '');
            keys[keysLastIndex] = v405;
            const v406 = keys.shift();
            const v407 = v406.split('[');
            keys = v407.concat(keys);
            const v408 = keys.length;
            keysLastIndex = v408 - 1;
        } else {
            keysLastIndex = 0;
        }
        const v409 = pair.length;
        const v410 = v409 >= 2;
        if (v410) {
            let value;
            const v411 = pair[1];
            const v412 = pair[1];
            const v413 = decodeURIComponent(v412);
            if (v411) {
                value = v413;
            } else {
                value = '';
            }
            if (keysLastIndex) {
                const v414 = parseComplexParam(queryParams, keys, value);
                v414;
            } else {
                const v415 = queryParams[key];
                const v416 = processScalarParam(v415, value);
                queryParams[key] = v416;
            }
        } else {
            queryParams[key] = true;
        }
        const v394 = i++;
        v393 = i < v392;
    }
    return queryParams;
};
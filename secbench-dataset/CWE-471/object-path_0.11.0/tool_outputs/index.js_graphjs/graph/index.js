const v226 = function (root, factory) {
    'use strict';
    const v212 = typeof module;
    const v213 = v212 === 'object';
    const v214 = module.exports;
    const v215 = typeof v214;
    const v216 = v215 === 'object';
    const v217 = v213 && v216;
    if (v217) {
        const v218 = factory();
        module.exports = v218;
    } else {
        const v219 = typeof define;
        const v220 = v219 === 'function';
        const v221 = define.amd;
        const v222 = v220 && v221;
        if (v222) {
            const v223 = [];
            const v224 = define(v223, factory);
            v224;
        } else {
            const v225 = factory();
            root.objectPath = v225;
        }
    }
};
const v421 = function () {
    'use strict';
    const v227 = Object.prototype;
    var toStr = v227.toString;
    const hasOwnProperty = function (obj, prop) {
        const v228 = obj == null;
        if (v228) {
            return false;
        }
        const v229 = Object.prototype;
        const v230 = v229.hasOwnProperty;
        const v231 = v230.call(obj, prop);
        return v231;
    };
    const isEmpty = function (value) {
        const v232 = !value;
        if (v232) {
            return true;
        }
        const v233 = isArray(value);
        const v234 = value.length;
        const v235 = v234 === 0;
        const v236 = v233 && v235;
        if (v236) {
            return true;
        } else {
            const v237 = typeof value;
            const v238 = v237 !== 'string';
            if (v238) {
                let i;
                for (i in value) {
                    const v239 = hasOwnProperty(value, i);
                    if (v239) {
                        return false;
                    }
                }
                return true;
            }
        }
        return false;
    };
    const toString = function (type) {
        const v240 = toStr.call(type);
        return v240;
    };
    const isObject = function (obj) {
        const v241 = typeof obj;
        const v242 = v241 === 'object';
        const v243 = toString(obj);
        const v244 = v243 === '[object Object]';
        const v245 = v242 && v244;
        return v245;
    };
    const v246 = Array.isArray;
    const v249 = function (obj) {
        const v247 = toStr.call(obj);
        const v248 = v247 === '[object Array]';
        return v248;
    };
    var isArray = v246 || v249;
    const isBoolean = function (obj) {
        const v250 = typeof obj;
        const v251 = v250 === 'boolean';
        const v252 = toString(obj);
        const v253 = v252 === '[object Boolean]';
        const v254 = v251 || v253;
        return v254;
    };
    const getKey = function (key) {
        var intKey = parseInt(key);
        const v255 = intKey.toString();
        const v256 = v255 === key;
        if (v256) {
            return intKey;
        }
        return key;
    };
    const factory = function (options) {
        const v257 = {};
        options = options || v257;
        var objectPath = function (obj) {
            const v258 = Object.keys(objectPath);
            const v265 = function (proxy, prop) {
                const v259 = prop === 'create';
                if (v259) {
                    return proxy;
                }
                const v260 = objectPath[prop];
                const v261 = typeof v260;
                const v262 = v261 === 'function';
                if (v262) {
                    const v263 = objectPath[prop];
                    const v264 = v263.bind(objectPath, obj);
                    proxy[prop] = v264;
                }
                return proxy;
            };
            const v266 = {};
            const v267 = v258.reduce(v265, v266);
            return v267;
        };
        const hasShallowProperty = function (obj, prop) {
            const v268 = options.includeInheritedProps;
            const v269 = typeof prop;
            const v270 = v269 === 'number';
            const v271 = Array.isArray(obj);
            const v272 = v270 && v271;
            const v273 = v268 || v272;
            const v274 = hasOwnProperty(obj, prop);
            const v275 = v273 || v274;
            return v275;
        };
        const getShallowProperty = function (obj, prop) {
            const v276 = hasShallowProperty(obj, prop);
            if (v276) {
                const v277 = obj[prop];
                return v277;
            }
        };
        const set = function (obj, path, value, doNotReplace) {
            const v278 = typeof path;
            const v279 = v278 === 'number';
            if (v279) {
                path = [path];
            }
            const v280 = !path;
            const v281 = path.length;
            const v282 = v281 === 0;
            const v283 = v280 || v282;
            if (v283) {
                return obj;
            }
            const v284 = typeof path;
            const v285 = v284 === 'string';
            if (v285) {
                const v286 = path.split('.');
                const v287 = v286.map(getKey);
                const v288 = set(obj, v287, value, doNotReplace);
                return v288;
            }
            var currentPath = path[0];
            var currentValue = getShallowProperty(obj, currentPath);
            const v289 = path.length;
            const v290 = v289 === 1;
            if (v290) {
                const v291 = void 0;
                const v292 = currentValue === v291;
                const v293 = !doNotReplace;
                const v294 = v292 || v293;
                if (v294) {
                    obj[currentPath] = value;
                }
                return currentValue;
            }
            const v295 = void 0;
            const v296 = currentValue === v295;
            if (v296) {
                const v297 = path[1];
                const v298 = typeof v297;
                const v299 = v298 === 'number';
                if (v299) {
                    obj[currentPath] = [];
                } else {
                    const v300 = {};
                    obj[currentPath] = v300;
                }
            }
            const v301 = obj[currentPath];
            const v302 = path.slice(1);
            const v303 = set(v301, v302, value, doNotReplace);
            return v303;
        };
        const v331 = function (obj, path) {
            const v304 = typeof path;
            const v305 = v304 === 'number';
            if (v305) {
                path = [path];
            } else {
                const v306 = typeof path;
                const v307 = v306 === 'string';
                if (v307) {
                    path = path.split('.');
                }
            }
            const v308 = !path;
            const v309 = path.length;
            const v310 = v309 === 0;
            const v311 = v308 || v310;
            if (v311) {
                const v312 = !obj;
                const v313 = !v312;
                return v313;
            }
            var i = 0;
            const v314 = path.length;
            let v315 = i < v314;
            while (v315) {
                const v317 = path[i];
                var j = getKey(v317);
                const v318 = typeof j;
                const v319 = v318 === 'number';
                const v320 = isArray(obj);
                const v321 = v319 && v320;
                const v322 = obj.length;
                const v323 = j < v322;
                const v324 = v321 && v323;
                const v325 = options.includeInheritedProps;
                const v326 = Object(obj);
                const v327 = j in v326;
                const v328 = hasOwnProperty(obj, j);
                let v329;
                if (v325) {
                    v329 = v327;
                } else {
                    v329 = v328;
                }
                const v330 = v324 || v329;
                if (v330) {
                    obj = obj[j];
                } else {
                    return false;
                }
                const v316 = i++;
                v315 = i < v314;
            }
            return true;
        };
        objectPath.has = v331;
        const v333 = function (obj, path, value) {
            const v332 = set(obj, path, value, true);
            return v332;
        };
        objectPath.ensureExists = v333;
        const v335 = function (obj, path, value, doNotReplace) {
            const v334 = set(obj, path, value, doNotReplace);
            return v334;
        };
        objectPath.set = v335;
        const v342 = function (obj, path, value, at) {
            var arr = objectPath.get(obj, path);
            const v336 = ~at;
            const v337 = ~v336;
            at = v337;
            const v338 = isArray(arr);
            const v339 = !v338;
            if (v339) {
                arr = [];
                const v340 = objectPath.set(obj, path, arr);
                v340;
            }
            const v341 = arr.splice(at, 0, value);
            v341;
        };
        objectPath.insert = v342;
        const v363 = function (obj, path) {
            const v343 = isEmpty(path);
            if (v343) {
                const v344 = void 0;
                return v344;
            }
            const v345 = obj == null;
            if (v345) {
                const v346 = void 0;
                return v346;
            }
            var value;
            var i;
            const v347 = !(value = objectPath.get(obj, path));
            if (v347) {
                const v348 = void 0;
                return v348;
            }
            const v349 = typeof value;
            const v350 = v349 === 'string';
            if (v350) {
                const v351 = objectPath.set(obj, path, '');
                return v351;
            } else {
                const v352 = isBoolean(value);
                if (v352) {
                    const v353 = objectPath.set(obj, path, false);
                    return v353;
                } else {
                    const v354 = typeof value;
                    const v355 = v354 === 'number';
                    if (v355) {
                        const v356 = objectPath.set(obj, path, 0);
                        return v356;
                    } else {
                        const v357 = isArray(value);
                        if (v357) {
                            value.length = 0;
                        } else {
                            const v358 = isObject(value);
                            if (v358) {
                                for (i in value) {
                                    const v359 = hasShallowProperty(value, i);
                                    if (v359) {
                                        const v360 = value[i];
                                        const v361 = delete v360;
                                        v361;
                                    }
                                }
                            } else {
                                const v362 = objectPath.set(obj, path, null);
                                return v362;
                            }
                        }
                    }
                }
            }
        };
        objectPath.empty = v363;
        const v372 = function (obj, path) {
            var arr = objectPath.get(obj, path);
            const v364 = isArray(arr);
            const v365 = !v364;
            if (v365) {
                arr = [];
                const v366 = objectPath.set(obj, path, arr);
                v366;
            }
            const v367 = arr.push;
            const v368 = Array.prototype;
            const v369 = v368.slice;
            const v370 = v369.call(arguments, 2);
            const v371 = v367.apply(arr, v370);
            v371;
        };
        objectPath.push = v372;
        const v378 = function (obj, paths, defaultValue) {
            var value;
            var i = 0;
            var len = paths.length;
            let v373 = i < len;
            while (v373) {
                const v375 = paths[i];
                const v376 = void 0;
                const v377 = (value = objectPath.get(obj, v375)) !== v376;
                if (v377) {
                    return value;
                }
                const v374 = i++;
                v373 = i < len;
            }
            return defaultValue;
        };
        objectPath.coalesce = v378;
        const v398 = function (obj, path, defaultValue) {
            const v379 = typeof path;
            const v380 = v379 === 'number';
            if (v380) {
                path = [path];
            }
            const v381 = !path;
            const v382 = path.length;
            const v383 = v382 === 0;
            const v384 = v381 || v383;
            if (v384) {
                return obj;
            }
            const v385 = obj == null;
            if (v385) {
                return defaultValue;
            }
            const v386 = typeof path;
            const v387 = v386 === 'string';
            if (v387) {
                const v388 = path.split('.');
                const v389 = objectPath.get(obj, v388, defaultValue);
                return v389;
            }
            const v390 = path[0];
            var currentPath = getKey(v390);
            var nextObj = getShallowProperty(obj, currentPath);
            const v391 = void 0;
            const v392 = nextObj === v391;
            if (v392) {
                return defaultValue;
            }
            const v393 = path.length;
            const v394 = v393 === 1;
            if (v394) {
                return nextObj;
            }
            const v395 = obj[currentPath];
            const v396 = path.slice(1);
            const v397 = objectPath.get(v395, v396, defaultValue);
            return v397;
        };
        objectPath.get = v398;
        const del = function (obj, path) {
            const v399 = typeof path;
            const v400 = v399 === 'number';
            if (v400) {
                path = [path];
            }
            const v401 = obj == null;
            if (v401) {
                return obj;
            }
            const v402 = isEmpty(path);
            if (v402) {
                return obj;
            }
            const v403 = typeof path;
            const v404 = v403 === 'string';
            if (v404) {
                const v405 = path.split('.');
                const v406 = objectPath.del(obj, v405);
                return v406;
            }
            const v407 = path[0];
            var currentPath = getKey(v407);
            const v408 = hasShallowProperty(obj, currentPath);
            const v409 = !v408;
            if (v409) {
                return obj;
            }
            const v410 = path.length;
            const v411 = v410 === 1;
            if (v411) {
                const v412 = isArray(obj);
                if (v412) {
                    const v413 = obj.splice(currentPath, 1);
                    v413;
                } else {
                    const v414 = obj[currentPath];
                    const v415 = delete v414;
                    v415;
                }
            } else {
                const v416 = obj[currentPath];
                const v417 = path.slice(1);
                const v418 = objectPath.del(v416, v417);
                return v418;
            }
            return obj;
        };
        objectPath.del = del;
        return objectPath;
    };
    var mod = factory();
    mod.create = factory;
    const v419 = { includeInheritedProps: true };
    const v420 = factory(v419);
    mod.withInheritedProps = v420;
    return mod;
};
const v422 = v226(this, v421);
v422;
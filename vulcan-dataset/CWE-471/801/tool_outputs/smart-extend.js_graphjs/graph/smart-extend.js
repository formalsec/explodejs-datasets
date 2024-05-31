const v254 = function (g, f) {
    const v240 = typeof exports;
    const v241 = v240 === 'object';
    const v242 = typeof module;
    const v243 = v242 !== 'undefined';
    const v244 = v241 && v243;
    const v245 = f();
    const v246 = typeof define;
    const v247 = v246 === 'function';
    const v248 = define.amd;
    const v249 = v247 && v248;
    const v250 = define(f);
    const v251 = f();
    let v252;
    if (v249) {
        v252 = v250;
    } else {
        v252 = (g = g || self, g['smart-extend'] = v251);
    }
    let v253;
    if (v244) {
        module.exports = v245;
        v253 = module.exports;
    } else {
        v253 = v252;
    }
    v253;
};
const v477 = function () {
    'use strict';
    const _typeof = function (obj) {
        const v255 = typeof Symbol;
        const v256 = v255 === 'function';
        const v257 = Symbol.iterator;
        const v258 = typeof v257;
        const v259 = v258 === 'symbol';
        const v260 = v256 && v259;
        if (v260) {
            const v262 = function (obj) {
                const v261 = typeof obj;
                return v261;
            };
            _typeof = v262;
        } else {
            const v274 = function (obj) {
                const v263 = typeof Symbol;
                const v264 = v263 === 'function';
                const v265 = obj && v264;
                const v266 = obj.constructor;
                const v267 = v266 === Symbol;
                const v268 = v265 && v267;
                const v269 = Symbol.prototype;
                const v270 = obj !== v269;
                const v271 = v268 && v270;
                const v272 = typeof obj;
                let v273;
                if (v271) {
                    v273 = 'symbol';
                } else {
                    v273 = v272;
                }
                return v273;
            };
            _typeof = v274;
        }
        const v275 = _typeof(obj);
        return v275;
    };
    var _extend;
    var isArray;
    var isObject;
    var _shouldDeepExtend;
    const isArray = function (target) {
        const v276 = Array.isArray(target);
        return v276;
    };
    isArray = isArray;
    const isObject = function (target) {
        const v277 = Object.prototype;
        const v278 = v277.toString;
        const v279 = v278.call(target);
        const v280 = v279 === '[object Object]';
        const v281 = target && v280;
        const v282 = isArray(target);
        const v283 = v281 || v282;
        return v283;
    };
    isObject = isObject;
    const shouldDeepExtend = function (options, target, parentKey) {
        const v284 = options.deep;
        if (v284) {
            const v285 = options.notDeep;
            if (v285) {
                const v286 = options.notDeep;
                const v287 = v286[target];
                const v288 = !v287;
                return v288;
            } else {
                return true;
            }
        } else {
            const v289 = options.deepOnly;
            if (v289) {
                const v290 = options.deepOnly;
                const v291 = v290[target];
                const v292 = _shouldDeepExtend(options, parentKey);
                const v293 = parentKey && v292;
                const v294 = v291 || v293;
                return v294;
            }
        }
    };
    _shouldDeepExtend = shouldDeepExtend;
    const extend = function (options, target, sources, parentKey) {
        var i;
        var key;
        var len;
        var source;
        var sourceValue;
        var subTarget;
        var targetValue;
        const v295 = !target;
        const v296 = _typeof(target);
        const v297 = v296 !== 'object';
        const v298 = typeof target;
        const v299 = v298 !== 'function';
        const v300 = v297 && v299;
        const v301 = v295 || v300;
        if (v301) {
            target = {};
        }
        (i = 0, len = sources.length)
        let v302 = i < len;
        while (v302) {
            source = sources[i];
            const v304 = source != null;
            if (v304) {
                for (key in source) {
                    sourceValue = source[key];
                    targetValue = target[key];
                    const v305 = sourceValue === target;
                    const v306 = void 0;
                    const v307 = sourceValue === v306;
                    const v308 = v305 || v307;
                    const v309 = sourceValue === null;
                    const v310 = options.allowNull;
                    const v311 = !v310;
                    const v312 = v309 && v311;
                    const v313 = options.nullDeletes;
                    const v314 = !v313;
                    const v315 = v312 && v314;
                    const v316 = v308 || v315;
                    const v317 = options.keys;
                    const v318 = options.keys;
                    const v319 = v318[key];
                    const v320 = !v319;
                    const v321 = v317 && v320;
                    const v322 = v316 || v321;
                    const v323 = options.notKeys;
                    const v324 = options.notKeys;
                    const v325 = v324[key];
                    const v326 = v323 && v325;
                    const v327 = v322 || v326;
                    const v328 = options.own;
                    const v329 = source.hasOwnProperty(key);
                    const v330 = !v329;
                    const v331 = v328 && v330;
                    const v332 = v327 || v331;
                    const v333 = options.globalFilter;
                    const v334 = options.globalFilter(sourceValue, key, source);
                    const v335 = !v334;
                    const v336 = v333 && v335;
                    const v337 = v332 || v336;
                    const v338 = options.filters;
                    const v339 = options.filters;
                    const v340 = v339[key];
                    const v341 = v338 && v340;
                    const v342 = options.filters;
                    const v343 = v342[key](sourceValue, key, source);
                    const v344 = !v343;
                    const v345 = v341 && v344;
                    const v346 = v337 || v345;
                    if (v346) {
                        continue;
                    }
                    const v347 = sourceValue === null;
                    const v348 = options.nullDeletes;
                    const v349 = v347 && v348;
                    if (v349) {
                        const v350 = target[key];
                        const v351 = delete v350;
                        v351;
                        continue;
                    }
                    const v352 = options.globalTransform;
                    if (v352) {
                        sourceValue = options.globalTransform(sourceValue, key, source);
                    }
                    const v353 = options.transforms;
                    const v354 = options.transforms;
                    const v355 = v354[key];
                    const v356 = v353 && v355;
                    if (v356) {
                        const v357 = options.transforms;
                        sourceValue = v357[key](sourceValue, key, source);
                    }
                    const v358 = options.concat;
                    const v359 = isArray(sourceValue);
                    const v360 = v358 && v359;
                    const v361 = isArray(targetValue);
                    const v362 = v360 && v361;
                    const v363 = !v362;
                    const v364 = _shouldDeepExtend(options, key, parentKey);
                    const v365 = isObject(sourceValue);
                    const v366 = v364 && v365;
                    const v367 = !v366;
                    switch (false) {
                    case v363:
                        const v368 = targetValue.concat(sourceValue);
                        target[key] = v368;
                        break;
                    case v367:
                        const v369 = isObject(targetValue);
                        const v370 = isArray(sourceValue);
                        const v371 = [];
                        const v372 = {};
                        let v373;
                        if (v370) {
                            v373 = v371;
                        } else {
                            v373 = v372;
                        }
                        if (v369) {
                            subTarget = targetValue;
                        } else {
                            subTarget = v373;
                        }
                        const v374 = [sourceValue];
                        const v375 = _extend(options, subTarget, v374, key);
                        target[key] = v375;
                        break;
                    default:
                        target[key] = sourceValue;
                    }
                }
            }
            const v303 = i++;
            v302 = i < len;
        }
        return target;
    };
    _extend = extend;
    var extend = _extend;
    var version = '1.7.4';
    var modifiers;
    var newBuilder;
    var normalizeKeys;
    var primaryBuilder;
    const normalizeKeys = function (keys) {
        var i;
        var key;
        var len;
        var output;
        if (keys) {
            output = {};
            const v376 = _typeof(keys);
            const v377 = v376 !== 'object';
            if (v377) {
                output[keys] = true;
            } else {
                const v378 = Array.isArray(keys);
                const v379 = !v378;
                if (v379) {
                    keys = Object.keys(keys);
                }
                (i = 0, len = keys.length)
                let v380 = i < len;
                while (v380) {
                    key = keys[i];
                    output[key] = true;
                    const v381 = i++;
                    v380 = i < len;
                }
            }
            return output;
        }
    };
    normalizeKeys = normalizeKeys;
    const newBuilder = function (isBase) {
        var _builder;
        const builder = function (target) {
            var theTarget;
            var $_len = arguments.length;
            const v382 = -1;
            var $_i = v382;
            var sources = new Array($_len);
            const v383 = ++$_i;
            let v384 = v383 < $_len;
            while (v384) {
                const v385 = arguments[$_i];
                sources[$_i] = v385;
                v384 = v383 < $_len;
            }
            const v386 = _builder.options;
            const v387 = v386.target;
            if (v387) {
                const v388 = _builder.options;
                theTarget = v388.target;
            } else {
                theTarget = target;
                const v389 = sources.shift();
                v389;
            }
            const v390 = _builder.options;
            const v391 = extend(v390, theTarget, sources);
            return v391;
        };
        _builder = builder;
        if (isBase) {
            _builder.isBase = true;
        }
        const v392 = {};
        _builder.options = v392;
        const v393 = Object.defineProperties(_builder, modifiers);
        v393;
        return _builder;
    };
    newBuilder = newBuilder;
    const v397 = function get() {
        var _;
        const v394 = this.isBase;
        const v395 = newBuilder();
        if (v394) {
            _ = v395;
        } else {
            _ = this;
        }
        const v396 = _.options;
        v396.deep = true;
        return _;
    };
    const v398 = {};
    v398.get = v397;
    const v402 = function get() {
        var _;
        const v399 = this.isBase;
        const v400 = newBuilder();
        if (v399) {
            _ = v400;
        } else {
            _ = this;
        }
        const v401 = _.options;
        v401.own = true;
        return _;
    };
    const v403 = {};
    v403.get = v402;
    const v407 = function get() {
        var _;
        const v404 = this.isBase;
        const v405 = newBuilder();
        if (v404) {
            _ = v405;
        } else {
            _ = this;
        }
        const v406 = _.options;
        v406.allowNull = true;
        return _;
    };
    const v408 = {};
    v408.get = v407;
    const v412 = function get() {
        var _;
        const v409 = this.isBase;
        const v410 = newBuilder();
        if (v409) {
            _ = v410;
        } else {
            _ = this;
        }
        const v411 = _.options;
        v411.nullDeletes = true;
        return _;
    };
    const v413 = {};
    v413.get = v412;
    const v417 = function get() {
        var _;
        const v414 = this.isBase;
        const v415 = newBuilder();
        if (v414) {
            _ = v415;
        } else {
            _ = this;
        }
        const v416 = _.options;
        v416.concat = true;
        return _;
    };
    const v418 = {};
    v418.get = v417;
    const v423 = function get() {
        var _;
        const v419 = this.isBase;
        const v420 = newBuilder();
        if (v419) {
            _ = v420;
        } else {
            _ = this;
        }
        const v421 = _.options;
        const v422 = {};
        v421.target = v422;
        return _;
    };
    const v424 = {};
    v424.get = v423;
    const v430 = function get() {
        var _;
        const v425 = this.isBase;
        const v426 = newBuilder();
        if (v425) {
            _ = v426;
        } else {
            _ = this;
        }
        const v429 = function (keys) {
            const v428 = normalizeKeys(keys);
            v427.notDeep = v428;
            return _;
        };
        return v429;
    };
    const v431 = {};
    v431.get = v430;
    const v437 = function get() {
        var _;
        const v432 = this.isBase;
        const v433 = newBuilder();
        if (v432) {
            _ = v433;
        } else {
            _ = this;
        }
        const v436 = function (keys) {
            const v435 = normalizeKeys(keys);
            v434.deepOnly = v435;
            return _;
        };
        return v436;
    };
    const v438 = {};
    v438.get = v437;
    const v444 = function get() {
        var _;
        const v439 = this.isBase;
        const v440 = newBuilder();
        if (v439) {
            _ = v440;
        } else {
            _ = this;
        }
        const v443 = function (keys) {
            const v442 = normalizeKeys(keys);
            v441.keys = v442;
            return _;
        };
        return v443;
    };
    const v445 = {};
    v445.get = v444;
    const v451 = function get() {
        var _;
        const v446 = this.isBase;
        const v447 = newBuilder();
        if (v446) {
            _ = v447;
        } else {
            _ = this;
        }
        const v450 = function (keys) {
            const v449 = normalizeKeys(keys);
            v448.notKeys = v449;
            return _;
        };
        return v450;
    };
    const v452 = {};
    v452.get = v451;
    const v463 = function get() {
        var _;
        const v453 = this.isBase;
        const v454 = newBuilder();
        if (v453) {
            _ = v454;
        } else {
            _ = this;
        }
        const v462 = function (transform) {
            const v455 = typeof transform;
            const v456 = v455 === 'function';
            if (v456) {
                const v457 = _.options;
                v457.globalTransform = transform;
            } else {
                const v458 = _typeof(transform);
                const v459 = v458 === 'object';
                const v460 = transform && v459;
                if (v460) {
                    const v461 = _.options;
                    v461.transforms = transform;
                }
            }
            return _;
        };
        return v462;
    };
    const v464 = {};
    v464.get = v463;
    const v475 = function get() {
        var _;
        const v465 = this.isBase;
        const v466 = newBuilder();
        if (v465) {
            _ = v466;
        } else {
            _ = this;
        }
        const v474 = function (filter) {
            const v467 = typeof filter;
            const v468 = v467 === 'function';
            if (v468) {
                const v469 = _.options;
                v469.globalFilter = filter;
            } else {
                const v470 = _typeof(filter);
                const v471 = v470 === 'object';
                const v472 = filter && v471;
                if (v472) {
                    const v473 = _.options;
                    v473.filters = filter;
                }
            }
            return _;
        };
        return v474;
    };
    const v476 = {};
    v476.get = v475;
    modifiers['deep'] = v398;
    modifiers['own'] = v403;
    modifiers['allowNull'] = v408;
    modifiers['nullDeletes'] = v413;
    modifiers['concat'] = v418;
    modifiers['clone'] = v424;
    modifiers['notDeep'] = v431;
    modifiers['deepOnly'] = v438;
    modifiers['keys'] = v445;
    modifiers['notKeys'] = v452;
    modifiers['transform'] = v464;
    modifiers['filter'] = v476;
    modifiers = {};
    modifiers = {};
    primaryBuilder = newBuilder(true);
    primaryBuilder.version = version;
    var primaryBuilder$1 = primaryBuilder;
    return primaryBuilder$1;
};
const v478 = v254(this, v477);
v478;
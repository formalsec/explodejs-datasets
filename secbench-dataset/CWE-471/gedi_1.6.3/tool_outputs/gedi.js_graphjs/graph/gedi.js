var Gel = require('gel-js');
var createPathToken = require('./pathToken');
var Token = Gel.Token;
var paths = require('gedi-paths');
var pathConstants = paths.constants;
var createSpec = require('spec-js');
var createEvents = require('./events');
var modelOperations = require('./modelOperations');
var get = modelOperations.get;
var set = modelOperations.set;
var gediConstructor = newGedi;
var exceptions = {};
exceptions.invalidPath = 'Invalid path syntax';
var arrayProto = [];
const newGedi = function (model) {
    const v205 = {};
    model = model || v205;
    var gel = new Gel();
    var dirtyModel = {};
    var PathToken = createPathToken(get, model);
    var events = createEvents(modelGet, gel, PathToken);
    const v206 = events.addModelReference('[/]', model);
    v206;
    const v207 = Array.prototype;
    const v208 = Array.prototype;
    const v209 = v208.indexOf;
    const v214 = function (object) {
        var i = 0;
        const v210 = this.length;
        let v211 = i < v210;
        while (v211) {
            const v213 = this === object;
            if (v213) {
                return i;
            }
            const v212 = i++;
            v211 = i < v210;
        }
    };
    v207.indexOf = v209 || v214;
    const v215 = String.prototype;
    const v216 = String.prototype;
    const v217 = v216.trim;
    const v220 = function () {
        const v218 = this.replace(/^\s\s*/, '');
        const v219 = v218.replace(/\s\s*$/, '');
        return v219;
    };
    v215.trim = v217 || v220;
    const v221 = Array.isArray;
    const v226 = function (obj) {
        const v222 = Object.prototype;
        const v223 = v222.toString;
        const v224 = v223.call(obj);
        const v225 = v224 === '[object Array]';
        return v225;
    };
    Array.isArray = v221 || v226;
    const each = function (object, callback) {
        var isArray = Array.isArray(object);
        let key;
        for (key in object) {
            const v227 = isNaN(key);
            const v228 = isArray && v227;
            if (v228) {
                continue;
            }
            const v229 = object[key];
            const v230 = callback(v229, key, object);
            if (v230) {
                break;
            }
        }
        return object;
    };
    const v231 = gel.tokenConverters;
    const v232 = v231.push(PathToken);
    v232;
    const v233 = gel.scope;
    const v245 = function (scope, args) {
        var token = args.getRaw(0, true);
        const v234 = !token;
        if (v234) {
            return false;
        }
        let path;
        const v235 = token instanceof PathToken;
        const v236 = token.original;
        const v237 = token.sourcePathInfo;
        const v238 = token.sourcePathInfo;
        const v239 = v238.path;
        const v240 = v237 && v239;
        if (v235) {
            path = v236;
        } else {
            path = v240;
        }
        const v241 = !path;
        if (v241) {
            return false;
        }
        const v242 = scope.get('_gmc_');
        const v243 = paths.resolve(v242, path);
        const v244 = isDirty(v243);
        return v244;
    };
    v233.isDirty = v245;
    const v246 = gel.scope;
    const v267 = function (scope, args) {
        var token = args.getRaw(0, true);
        const v247 = token.result;
        var source = token && v247;
        const v248 = source == null;
        if (v248) {
            return null;
        }
        var result = source.constructor();
        let path;
        const v249 = token instanceof PathToken;
        const v250 = token.original;
        const v251 = token.sourcePathInfo;
        const v252 = token.sourcePathInfo;
        const v253 = v252.path;
        const v254 = v251 && v253;
        if (v249) {
            path = v250;
        } else {
            path = v254;
        }
        const v255 = !path;
        if (v255) {
            return result;
        }
        const v256 = scope.get('_gmc_');
        var resolvedPath = paths.resolve(v256, path);
        var result;
        var itemPath;
        let key;
        for (key in source) {
            const v257 = source.hasOwnProperty(key);
            if (v257) {
                const v258 = paths.create(key);
                itemPath = paths.resolve(path, v258);
                const v259 = result instanceof Array;
                if (v259) {
                    const v260 = isDirty(itemPath);
                    const v261 = source[key];
                    const v262 = result.push(v261);
                    const v263 = v260 && v262;
                    v263;
                } else {
                    const v264 = isDirty(itemPath);
                    const v265 = source[key];
                    const v266 = v264 && (result[key] = v265);
                    v266;
                }
            }
        }
        return result;
    };
    v246.getAllDirty = v267;
    const remove = function (path, model) {
        var reference = model;
        memoiseCache = {};
        var pathParts = paths.toParts(path);
        var index = 0;
        var pathLength = pathParts.length;
        const v268 = paths.isRoot(path);
        if (v268) {
            const v269 = {};
            const v270 = overwriteModel(v269, model);
            v270;
            return;
        }
        const v271 = paths.isAbsolute(path);
        if (v271) {
            index = 1;
        }
        let v272 = index < pathLength;
        while (v272) {
            var key = pathParts[index];
            const v274 = reference[key];
            const v275 = typeof v274;
            const v276 = v275 !== 'object';
            const v277 = pathLength - 1;
            const v278 = index < v277;
            const v279 = v276 && v278;
            if (v279) {
                break;
            }
            const v280 = pathLength - 1;
            const v281 = index === v280;
            if (v281) {
                const v282 = reference instanceof Array;
                if (v282) {
                    const v283 = reference.splice(key, 1);
                    v283;
                } else {
                    const v284 = reference[key];
                    const v285 = delete v284;
                    v285;
                }
            } else {
                reference = reference[key];
            }
            const v273 = index++;
            v272 = index < pathLength;
        }
        return reference;
    };
    const modelGet = function (binding, parentPath, scope, returnAsTokens) {
        const v286 = typeof parentPath;
        const v287 = v286 !== 'string';
        const v288 = parentPath && v287;
        if (v288) {
            scope = parentPath;
            parentPath = paths.create();
        }
        if (binding) {
            var gelResult;
            var expression = binding;
            const v289 = {};
            scope = scope || v289;
            scope['_gmc_'] = parentPath;
            const v290 = gel.evaluate(expression, scope, returnAsTokens);
            return v290;
        }
        const v291 = paths.create();
        parentPath = parentPath || v291;
        binding = paths.resolve(parentPath, binding);
        const v292 = get(binding, model);
        return v292;
    };
    const getSourcePathInfo = function (expression, parentPath, scope, subPathOpperation) {
        const v293 = {};
        var scope = scope || v293;
        var path;
        scope._gmc_ = parentPath;
        const v294 = gel.evaluate(expression, scope, true);
        var resultToken = v294[0];
        var sourcePathInfo = resultToken.sourcePathInfo;
        if (sourcePathInfo) {
            const v295 = sourcePathInfo.subPaths;
            if (v295) {
                const v296 = sourcePathInfo.subPaths;
                const v298 = function (item) {
                    const v297 = subPathOpperation(item);
                    v297;
                };
                const v299 = each(v296, v298);
                v299;
                return;
            }
            path = sourcePathInfo.path;
        } else {
            path = resultToken.path;
        }
        if (path) {
            const v300 = subPathOpperation(path);
            v300;
        }
    };
    const DeletedItem = function () {
    };
    const modelSetPath = function (path, value, parentPath, dirty, scope) {
        const v301 = paths.create();
        parentPath = parentPath || v301;
        path = paths.resolve(parentPath, path);
        const v302 = setDirtyState(path, dirty);
        v302;
        var previousValue = get(path, model);
        var keysChanged = set(path, value, model);
        const v303 = value instanceof DeletedItem;
        const v304 = !v303;
        if (v304) {
            const v305 = events.addModelReference(path, value);
            v305;
            const v306 = events.trigger(path, keysChanged);
            v306;
        }
        const v307 = typeof value;
        const v308 = v307 !== 'object';
        const v309 = value && v308;
        const v310 = !v309;
        const v311 = v310 && previousValue;
        const v312 = typeof previousValue;
        const v313 = v312 === 'object';
        const v314 = v311 && v313;
        if (v314) {
            const v315 = events.removeModelReference(path, previousValue);
            v315;
        }
    };
    const modelSet = function (expression, value, parentPath, dirty, scope) {
        const v316 = typeof expression;
        const v317 = v316 === 'object';
        const v318 = paths.create(expression);
        const v319 = !v318;
        const v320 = v317 && v319;
        if (v320) {
            dirty = value;
            value = expression;
            expression = paths.createRoot();
        } else {
            const v321 = typeof parentPath;
            const v322 = v321 === 'boolean';
            if (v322) {
                dirty = parentPath;
                parentPath = undefined;
            }
        }
        const v324 = function (subPath) {
            const v323 = modelSetPath(subPath, value, parentPath, dirty, scope);
            v323;
        };
        const v325 = getSourcePathInfo(expression, parentPath, scope, v324);
        v325;
    };
    const modelRemove = function (expression, parentPath, dirty, scope) {
        const v326 = parentPath instanceof Boolean;
        if (v326) {
            dirty = parentPath;
            parentPath = undefined;
        }
        itemParentPaths = {};
        const v332 = function (subPath) {
            const v327 = new DeletedItem();
            const v328 = modelSetPath(subPath, v327, parentPath, dirty, scope);
            v328;
            const v329 = pathConstants.upALevel;
            const v330 = paths.create(v329);
            const v331 = paths.append(subPath, v330);
            itemParentPaths[v331] = null;
        };
        const v333 = getSourcePathInfo(expression, parentPath, scope, v332);
        v333;
        let key;
        for (key in itemParentPaths) {
            const v334 = itemParentPaths.hasOwnProperty(key);
            if (v334) {
                const v335 = paths.createRoot();
                const v336 = parentPath || v335;
                var itemParentPath = paths.resolve(v336, key);
                var parentObject = get(itemParentPath, model);
                var isArray = Array.isArray(parentObject);
                if (isArray) {
                    var anyRemoved;
                    var i = 0;
                    const v337 = parentObject.length;
                    let v338 = i < v337;
                    while (v338) {
                        const v340 = parentObject[i];
                        const v341 = v340 instanceof DeletedItem;
                        if (v341) {
                            const v342 = parentObject.splice(i, 1);
                            v342;
                            const v343 = i--;
                            v343;
                            anyRemoved = true;
                        }
                        const v339 = i++;
                        v338 = i < v337;
                    }
                    if (anyRemoved) {
                        const v344 = events.trigger(itemParentPath);
                        v344;
                    }
                }
                let key;
                for (key in parentObject) {
                    const v345 = parentObject[key];
                    const v346 = v345 instanceof DeletedItem;
                    if (v346) {
                        const v347 = parentObject[key];
                        const v348 = delete v347;
                        v348;
                        const v349 = paths.append(itemParentPath, key);
                        const v350 = events.trigger(v349);
                        v350;
                    }
                }
            }
        }
    };
    const setPathDirtyState = function (path, dirty, parentPath, scope) {
        var reference = dirtyModel;
        const v351 = paths.create(path);
        const v352 = !v351;
        if (v352) {
            const v353 = exceptions.invalidPath;
            throw v353;
        }
        const v354 = paths.create();
        parentPath = parentPath || v354;
        dirty = dirty !== false;
        const v355 = paths.isRoot(path);
        if (v355) {
            dirtyModel['_isDirty_'] = dirty;
            dirtyModel = {};
            dirtyModel = {};
            return;
        }
        var index = 0;
        const v356 = paths.isAbsolute(path);
        if (v356) {
            index = 1;
        }
        const v357 = paths.resolve(parentPath, path);
        var pathParts = paths.toParts(v357);
        const v358 = pathParts.length;
        let v359 = index < v358;
        while (v359) {
            var key = pathParts[index];
            const v361 = reference[key];
            const v362 = typeof v361;
            const v363 = v362 !== 'object';
            const v364 = reference[key];
            const v365 = v364 === null;
            const v366 = v363 || v365;
            const v367 = pathParts.length;
            const v368 = v367 - 1;
            const v369 = index < v368;
            const v370 = v366 && v369;
            if (v370) {
                const v371 = {};
                reference[key] = v371;
            }
            const v372 = pathParts.length;
            const v373 = v372 - 1;
            const v374 = index === v373;
            if (v374) {
                const v375 = {};
                reference[key] = v375;
                const v376 = reference[key];
                v376['_isDirty_'] = dirty;
            } else {
                reference = reference[key];
            }
            const v360 = index++;
            v359 = index < v358;
        }
        const v377 = pathParts.length;
        const v378 = !v377;
        if (v378) {
            dirtyModel['_isDirty_'] = dirty;
        }
    };
    const setDirtyState = function (expression, dirty, parentPath, scope) {
        const v380 = function (subPath) {
            const v379 = setPathDirtyState(subPath, dirty, parentPath, scope);
            v379;
        };
        const v381 = getSourcePathInfo(expression, parentPath, scope, v380);
        v381;
    };
    const isDirty = function (path) {
        var reference;
        var hasDirtyChildren = function (ref) {
            const v382 = typeof ref;
            const v383 = v382 !== 'object';
            if (v383) {
                return false;
            }
            const v384 = ref['_isDirty_'];
            if (v384) {
                return true;
            } else {
                let key;
                for (key in ref) {
                    const v385 = ref[key];
                    const v386 = hasDirtyChildren(v385);
                    if (v386) {
                        return true;
                    }
                }
            }
        };
        reference = get(path, dirtyModel);
        const v387 = hasDirtyChildren(reference);
        const v388 = !v387;
        const v389 = !v388;
        return v389;
    };
    const Gedi = function () {
    };
    const v390 = paths.create;
    const v391 = paths.resolve;
    const v392 = paths.isRoot;
    const v393 = paths.isAbsolute;
    const v394 = paths.append;
    const v395 = paths.toParts;
    const v396 = {};
    v396.create = v390;
    v396.resolve = v391;
    v396.isRoot = v392;
    v396.isAbsolute = v393;
    v396.append = v394;
    v396.toParts = v395;
    const v397 = {};
    v397.get = get;
    v397.set = set;
    const v399 = function (model) {
        const v398 = this.set(model, false);
        v398;
    };
    const v400 = events.bind;
    const v401 = events.debind;
    const v402 = events.trigger;
    const v406 = function () {
        const getNumCallbacks = function (reference) {
            var length = reference.length;
            let key;
            for (key in reference) {
                const v403 = isNaN(key);
                if (v403) {
                    const v404 = reference[key];
                    length += getNumCallbacks(v404);
                }
            }
            return length;
        };
        const v405 = getNumCallbacks(internalBindings);
        return v405;
    };
    const v407 = {};
    v407.paths = v396;
    v407.get = modelGet;
    v407.set = modelSet;
    v407.remove = modelRemove;
    v407.utils = v397;
    v407.init = v399;
    v407.bind = v400;
    v407.debind = v401;
    v407.trigger = v402;
    v407.isDirty = isDirty;
    v407.setDirtyState = setDirtyState;
    v407.gel = gel;
    v407.getNumberOfBindings = v406;
    Gedi.prototype = v407;
    const v408 = new Gedi();
    return v408;
};
module.exports = gediConstructor;
'use strict';
const v166 = {};
v166.flatten = flatten;
v166.unflatten = unflatten;
module.exports = v166;
const flatten = function (target, opts) {
    const v168 = {};
    const v167 = opts || v168;
    const delimiter = v167.undefined;
    const maxDepth = v167.maxDepth;
    const keepBlankObjects = v167.undefined;
    const filterNulls = v167.undefined;
    const debug = v167.undefined;
    let sentTarget = target;
    const v169 = typeof target;
    const v170 = v169 === 'object';
    const v171 = target && v170;
    const v172 = target instanceof Date;
    const v173 = !v172;
    const v174 = v171 && v173;
    if (v174) {
        const v175 = Array.isArray(target);
        if (v175) {
            sentTarget = [...target];
        } else {
            sentTarget.target = target;
            sentTarget = {};
            sentTarget = {};
        }
    }
    const v176 = {};
    let v177;
    if (sentTarget) {
        v177 = v176;
    } else {
        v177 = sentTarget;
    }
    const v178 = {};
    v178.delimiter = delimiter;
    v178.maxDepth = maxDepth;
    v178.keepBlankObjects = keepBlankObjects;
    v178.filterNulls = filterNulls;
    v178.debug = debug;
    const v179 = {
        baseObj: sentTarget,
        opObj: v177,
        baseKey: '',
        depth: 1,
        config: v178
    };
    const respObj = recFlatten(v179);
    return respObj;
};
const recFlatten = function ({baseObj, opObj, baseKey = '', depth = 1, config, debug}) {
    if (debug) {
        const v180 = {
            baseObj,
            baseKey,
            opObj
        };
        const v181 = console.log(v180);
        v181;
    }
    const v182 = config;
    const delimiter = v182.delimiter;
    const maxDepth = v182.maxDepth;
    const filterNulls = v182.filterNulls;
    const keepBlankObjects = v182.keepBlankObjects;
    const v183 = depth >= maxDepth;
    const v184 = maxDepth && v183;
    if (v184) {
        opObj[baseKey] = baseObj;
        return opObj;
    }
    const v185 = baseObj === undefined;
    const v186 = baseObj === null;
    const v187 = v185 || v186;
    if (v187) {
        if (filterNulls) {
            return opObj;
        }
        const v188 = baseKey === '';
        if (v188) {
            return 'E_NULL';
        }
        opObj[baseKey] = 'E_NULL';
        return opObj;
    }
    const v189 = baseObj instanceof Date;
    if (v189) {
        const v190 = baseKey === '';
        if (v190) {
            const v191 = baseObj.toISOString();
            return v191;
        }
        const v192 = baseObj.toISOString();
        opObj[baseKey] = v192;
        return opObj;
    }
    const isBuffer = Buffer.isBuffer(baseObj);
    const isArray = Array.isArray(baseObj);
    const v193 = typeof baseObj;
    const v194 = v193 !== 'object';
    const v195 = !isBuffer;
    const v196 = v194 && v195;
    const v197 = !isArray;
    const v198 = v196 && v197;
    if (v198) {
        const v199 = baseKey === '';
        if (v199) {
            return baseObj;
        }
        opObj[baseKey] = baseObj;
        return opObj;
    }
    const objKeys = Object.keys(baseObj);
    const v200 = !objKeys;
    const v201 = objKeys.length;
    const v202 = v201 === 0;
    const v203 = objKeys && v202;
    const v204 = v200 || v203;
    if (v204) {
        if (isArray) {
            const v205 = baseKey === '';
            if (v205) {
                return 'E_ARR';
            }
            opObj[baseKey] = 'E_ARR';
            return opObj;
        }
        const v206 = baseKey === '';
        if (v206) {
            return 'E_OBJ';
        }
        opObj[baseKey] = 'E_OBJ';
        return opObj;
    }
    const v212 = (acc, key) => {
        let newBaseKey;
        const v207 = baseKey === '';
        if (v207) {
            newBaseKey = key;
        } else {
            newBaseKey = `${ baseKey }${ delimiter }${ key }`;
        }
        const v208 = baseObj[key];
        const v209 = depth + 1;
        const v210 = {
            baseObj: v208,
            opObj,
            baseKey: newBaseKey,
            depth: v209,
            config
        };
        const updates = recFlatten(v210);
        const v211 = {};
        v211.acc = acc;
        v211.updates = updates;
        return v211;
    };
    const v213 = objKeys.reduce(v212, opObj);
    return v213;
};
const unflatten = function (target, opts) {
    const v215 = {};
    const v214 = opts || v215;
    const delimiter = v214.undefined;
    const maxDepth = v214.maxDepth;
    const keepBlankObjects = v214.undefined;
    const filterNulls = v214.undefined;
    const debug = v214.undefined;
    let sentTarget = target;
    const v216 = typeof target;
    const v217 = v216 === 'object';
    const v218 = target && v217;
    const v219 = target instanceof Date;
    const v220 = !v219;
    const v221 = v218 && v220;
    if (v221) {
        const v222 = Array.isArray(target);
        if (v222) {
            sentTarget = [...target];
        } else {
            sentTarget.target = target;
            sentTarget = {};
            sentTarget = {};
        }
    }
    const v223 = {};
    let v224;
    if (sentTarget) {
        v224 = v223;
    } else {
        v224 = sentTarget;
    }
    const v225 = {};
    v225.delimiter = delimiter;
    v225.maxDepth = maxDepth;
    v225.keepBlankObjects = keepBlankObjects;
    v225.filterNulls = filterNulls;
    const v226 = {
        baseObj: sentTarget,
        result: v224,
        depth: 1,
        config: v225
    };
    const v227 = recUnflatten(v226);
    return v227;
};
const recUnflatten = function ({baseObj, depth = 1, config}) {
    const v228 = config;
    const delimiter = v228.delimiter;
    const maxDepth = v228.maxDepth;
    const filterNulls = v228.filterNulls;
    const keepBlankObjects = v228.keepBlankObjects;
    const debug = v228.debug;
    const v229 = {};
    const v230 = [];
    const emap = {};
    emap['E_OBJ'] = v229;
    emap['E_ARR'] = v230;
    emap['E_NULL'] = null;
    const isBuffer = Buffer.isBuffer(baseObj);
    const isArray = Array.isArray(baseObj);
    const v231 = !baseObj;
    const v232 = typeof baseObj;
    const v233 = v232 !== 'object';
    const v234 = baseObj && v233;
    const v235 = !isBuffer;
    const v236 = v234 && v235;
    const v237 = !isArray;
    const v238 = v236 && v237;
    const v239 = v231 || v238;
    if (v239) {
        const v240 = [
            'E_OBJ',
            'E_ARR',
            'E_NULL'
        ];
        const v241 = v240.includes(baseObj);
        if (v241) {
            const v242 = emap[baseObj];
            return v242;
        }
        return baseObj;
    }
    const v243 = Object.keys(baseObj);
    const v244 = !v243;
    const v245 = Object.keys(baseObj);
    const v246 = Object.keys(baseObj);
    const v247 = v246.length;
    const v248 = v247 === 0;
    const v249 = v245 && v248;
    const v250 = v244 || v249;
    if (v250) {
        return baseObj;
    }
    const v251 = Object.keys(baseObj);
    const v275 = (acc, key) => {
        const v252 = key.indexOf(delimiter);
        const v253 = v252 < 0;
        if (v253) {
            const nkey = getUnflattenedkey(key);
            const v254 = Number(key);
            const v255 = nkey === v254;
            if (v255) {
                const v256 = acc.keyCount;
                const v257 = v256++;
                v257;
                const v258 = acc.maxKey;
                const v259 = nkey > v258;
                const v260 = acc.maxKey;
                let v261;
                if (v259) {
                    v261 = nkey;
                } else {
                    v261 = v260;
                }
                acc.maxKey = v261;
                return acc;
            }
        }
        const v262 = key.split(delimiter);
        const keyBase = v262.shift();
        const nkey = getUnflattenedkey(keyBase);
        const v263 = Number(keyBase);
        const v264 = nkey === v263;
        if (v264) {
            const v265 = acc.nested;
            const v266 = v265[nkey];
            const v267 = !v266;
            if (v267) {
                const v268 = acc.nested;
                v268[nkey] = 1;
                const v269 = acc.keyCount;
                const v270 = v269++;
                v270;
            }
            const v271 = acc.maxKey;
            const v272 = nkey > v271;
            const v273 = acc.maxKey;
            let v274;
            if (v272) {
                v274 = nkey;
            } else {
                v274 = v273;
            }
            acc.maxKey = v274;
            return acc;
        }
        acc.shouldBeArr = false;
        return acc;
    };
    const v276 = {};
    const v277 = {
        maxKey: 0,
        keyCount: 0,
        nested: v276,
        shouldBeArr: true
    };
    const arrayDetection = v251.reduce(v275, v277);
    let v278 = arrayDetection;
    let shouldBeArr = v278.shouldBeArr;
    let maxKey = v278.maxKey;
    let keyCount = v278.keyCount;
    const v279 = keyCount - 1;
    const v280 = maxKey === v279;
    shouldBeArr = shouldBeArr && v280;
    if (debug) {
        const v281 = {
            baseObj,
            depth,
            config,
            shouldBeArr
        };
        const v282 = console.log(v281);
        v282;
    }
    let unitBase;
    const v283 = [];
    const v284 = {};
    if (shouldBeArr) {
        unitBase = v283;
    } else {
        unitBase = v284;
    }
    const v285 = Object.keys(baseObj);
    const v305 = (acc, key) => {
        const v286 = key.indexOf(delimiter);
        const v287 = v286 < 0;
        if (v287) {
            const v288 = [
                'E_OBJ',
                'E_ARR',
                'E_NULL'
            ];
            const v289 = baseObj[key];
            const v290 = v288.includes(v289);
            if (v290) {
                const v291 = getUnflattenedkey(key);
                const v292 = baseObj[key];
                const v293 = emap[v292];
                acc[v291] = v293;
            } else {
                const v294 = getUnflattenedkey(key);
                const v295 = baseObj[key];
                acc[v294] = v295;
            }
            return acc;
        }
        let onwardKey = key.split(delimiter);
        const v296 = onwardKey.shift();
        const keyBase = getUnflattenedkey(v296);
        const v297 = acc[keyBase];
        const v298 = !v297;
        if (v298) {
            const v299 = {};
            acc[keyBase] = v299;
        }
        const v300 = acc[keyBase];
        const v301 = onwardKey.join(delimiter);
        const v302 = baseObj[key];
        v300[v301] = v302;
        const v303 = baseObj[key];
        const v304 = delete v303;
        v304;
        return acc;
    };
    const puResp = v285.reduce(v305, unitBase);
    const v306 = typeof puResp;
    const v307 = v306 === 'object';
    const v308 = Object.keys(puResp);
    const v309 = v307 && v308;
    const v310 = Object.keys(puResp);
    const v311 = v310.length;
    const v312 = v311 > 0;
    const v313 = v309 && v312;
    if (v313) {
        const v314 = Object.keys(puResp);
        const v320 = (acc, key) => {
            const v316 = acc[key];
            const v317 = depth + 1;
            const v318 = {
                baseObj: v316,
                depth: v317,
                config
            };
            const v319 = recUnflatten(v318);
            acc[v315] = v319;
            return acc;
        };
        const v321 = v314.reduce(v320, puResp);
        return v321;
    }
    return puResp;
};
const getUnflattenedkey = function (key, opts) {
    const v323 = {};
    const v322 = opts || v323;
    const object = v322.undefined;
    const delimiter = v322.undefined;
    const parsedKey = Number(key);
    const v324 = isNaN(parsedKey);
    const v325 = key.indexOf(delimiter);
    const v326 = -1;
    const v327 = v325 !== v326;
    const v328 = v324 || v327;
    const v329 = v328 || object;
    let v330;
    if (v329) {
        v330 = key;
    } else {
        v330 = parsedKey;
    }
    return v330;
};
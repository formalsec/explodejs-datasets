const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const net = require('net');
const cluster = require('cluster');
const uuid = require('uuid');
const ms = require('ms');
const v196 = require('core-util-is');
const isArray = v196.isArray;
const isBoolean = v196.isBoolean;
const isNull = v196.isNull;
const isNullOrUndefined = v196.isNullOrUndefined;
const isNumber = v196.isNumber;
const isString = v196.isString;
const isSymbol = v196.isSymbol;
const isUndefined = v196.isUndefined;
const isRegExp = v196.isRegExp;
const isObject = v196.isObject;
const isDate = v196.isDate;
const isError = v196.isError;
const isFunction = v196.isFunction;
const isPrimitive = v196.isPrimitive;
const isBuffer = v196.isBuffer;
const v197 = fs.rmdir;
const fsRmdir = promisify(v197, fs);
const v198 = fs.unlink;
const fsUnlink = promisify(v198, fs);
const v199 = fs.readdir;
const fsReaddir = promisify(v199, fs);
const numberReg = /^((-?(\d+\.|\d+|\.\d)\d*(?:e[+-]?\d*(?:\d?\.?|\.?\d?)\d*)?)|(0[0-7]+)|(0x[0-9a-f]+))$/i;
const v200 = Object.prototype;
const toString = v200.toString;
const v201 = net.isIP;
exports.isIP = v201;
const v202 = net.isIPv4;
exports.isIPv4 = v202;
const v203 = net.isIPv6;
exports.isIPv6 = v203;
const v204 = cluster.isMaster;
exports.isMaster = v204;
exports.isArray = isArray;
exports.isBoolean = isBoolean;
exports.isNull = isNull;
exports.isNullOrUndefined = isNullOrUndefined;
exports.isNumber = isNumber;
exports.isString = isString;
exports.isSymbol = isSymbol;
exports.isUndefined = isUndefined;
exports.isRegExp = isRegExp;
exports.isObject = isObject;
exports.isDate = isDate;
exports.isError = isError;
exports.isFunction = isFunction;
exports.isPrimitive = isPrimitive;
exports.isBuffer = isBuffer;
const v207 = obj => {
    const v205 = toString.call(obj);
    const v206 = v205 === '[object Object]';
    return v206;
};
exports.isObject = v207;
const isInt = function (value) {
    const v208 = isNaN(value);
    const v209 = exports.isString(value);
    const v210 = v208 || v209;
    if (v210) {
        return false;
    }
    var x = parseFloat(value);
    const v211 = x | 0;
    const v212 = v211 === x;
    return v212;
};
exports.isInt = isInt;
const promisify = function (fn, receiver) {
    const v221 = (...args) => {
        const v219 = (resolve, reject) => {
            const v216 = (err, res) => {
                const v213 = reject(err);
                const v214 = resolve(res);
                let v215;
                if (err) {
                    v215 = v213;
                } else {
                    v215 = v214;
                }
                return v215;
            };
            const v217 = [
                ...args,
                v216
            ];
            const v218 = fn.apply(receiver, v217);
            v218;
        };
        const v220 = new Promise(v219);
        return v220;
    };
    return v221;
};
exports.promisify = promisify;
const extend = function (target = {}, ...args) {
    let i = 0;
    const length = args.length;
    let options;
    let name;
    let src;
    let copy;
    const v222 = !target;
    if (v222) {
        const v223 = args[0];
        const v224 = exports.isArray(v223);
        const v225 = [];
        const v226 = {};
        if (v224) {
            target = v225;
        } else {
            target = v226;
        }
    }
    let v227 = i < length;
    while (v227) {
        options = args[i];
        const v229 = !options;
        if (v229) {
            continue;
        }
        for (name in options) {
            src = target[name];
            copy = options[name];
            const v230 = src === copy;
            const v231 = src && v230;
            if (v231) {
                continue;
            }
            const v232 = exports.isArray(copy);
            if (v232) {
                const v233 = [];
                const v234 = extend(v233, copy);
                target[name] = v234;
            } else {
                const v235 = exports.isObject(copy);
                if (v235) {
                    const v236 = exports.isObject(src);
                    const v237 = src && v236;
                    const v238 = {};
                    let v239;
                    if (v237) {
                        v239 = src;
                    } else {
                        v239 = v238;
                    }
                    const v240 = extend(v239, copy);
                    target[name] = v240;
                } else {
                    target[name] = copy;
                }
            }
        }
        const v228 = i++;
        v227 = i < length;
    }
    return target;
};
exports.extend = extend;
const camelCase = function (str) {
    const v241 = str.indexOf('_');
    const v242 = -1;
    const v243 = v241 > v242;
    if (v243) {
        const v245 = (a, b) => {
            const v244 = b.toUpperCase();
            return v244;
        };
        str = str.replace(/_(\w)/g, v245);
    }
    return str;
};
exports.camelCase = camelCase;
const snakeCase = function (str) {
    const v249 = function ($0, $1, $2) {
        const v246 = $1 + '_';
        const v247 = $2.toLowerCase();
        const v248 = v246 + v247;
        return v248;
    };
    const v250 = str.replace(/([^A-Z])([A-Z])/g, v249);
    return v250;
};
;
exports.snakeCase = snakeCase;
const isNumberString = function (obj) {
    const v251 = !obj;
    if (v251) {
        return false;
    }
    const v252 = numberReg.test(obj);
    return v252;
};
exports.isNumberString = isNumberString;
const isTrueEmpty = function (obj) {
    const v253 = obj === undefined;
    const v254 = obj === null;
    const v255 = v253 || v254;
    const v256 = obj === '';
    const v257 = v255 || v256;
    if (v257) {
        return true;
    }
    const v258 = exports.isNumber(obj);
    const v259 = isNaN(obj);
    const v260 = v258 && v259;
    if (v260) {
        return true;
    }
    return false;
};
exports.isTrueEmpty = isTrueEmpty;
const isEmpty = function (obj) {
    const v261 = isTrueEmpty(obj);
    if (v261) {
        return true;
    }
    const v262 = exports.isRegExp(obj);
    if (v262) {
        return false;
    } else {
        const v263 = exports.isDate(obj);
        if (v263) {
            return false;
        } else {
            const v264 = exports.isError(obj);
            if (v264) {
                return false;
            } else {
                const v265 = exports.isArray(obj);
                if (v265) {
                    const v266 = obj.length;
                    const v267 = v266 === 0;
                    return v267;
                } else {
                    const v268 = exports.isString(obj);
                    if (v268) {
                        const v269 = obj.length;
                        const v270 = v269 === 0;
                        return v270;
                    } else {
                        const v271 = exports.isNumber(obj);
                        if (v271) {
                            const v272 = obj === 0;
                            return v272;
                        } else {
                            const v273 = exports.isBoolean(obj);
                            if (v273) {
                                const v274 = !obj;
                                return v274;
                            } else {
                                const v275 = exports.isObject(obj);
                                if (v275) {
                                    let key;
                                    for (key in obj) {
                                        const v276 = false && key;
                                        return v276;
                                    }
                                    return true;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return false;
};
exports.isEmpty = isEmpty;
const defer = function () {
    const deferred = {};
    const v277 = (resolve, reject) => {
        deferred.resolve = resolve;
        deferred.reject = reject;
    };
    deferred.promise = new Promise(v277);
    return deferred;
};
exports.defer = defer;
const md5 = function (str) {
    const v278 = crypto.createHash('md5');
    const v279 = str + '';
    const v280 = v278.update(v279, 'utf8');
    const v281 = v280.digest('hex');
    return v281;
};
exports.md5 = md5;
const timeout = function (time = 1000) {
    const v283 = resolve => {
        const v282 = setTimeout(resolve, time);
        v282;
    };
    const v284 = new Promise(v283);
    return v284;
};
exports.timeout = timeout;
const escapeHtml = function (str) {
    const v285 = str + '';
    const v286 = a => {
        switch (a) {
        case '<':
            return '&lt;';
        case '>':
            return '&gt;';
        case '"':
            return '&quote;';
        case '\'':
            return '&#39;';
        }
    };
    const v287 = v285.replace(/[<>'"]/g, v286);
    return v287;
};
exports.escapeHtml = escapeHtml;
const datetime = function (date = new Date(), format = 'YYYY-MM-DD HH:mm:ss') {
    const v288 = isString(date);
    if (v288) {
        format = date;
        date = new Date();
    }
    const fn = d => {
        const v289 = '0' + d;
        const v290 = -2;
        const v291 = v289.slice(v290);
        return v291;
    };
    const d = new Date(date);
    const v292 = d.getFullYear();
    const v293 = d.getMonth();
    const v294 = v293 + 1;
    const v295 = fn(v294);
    const v296 = d.getDate();
    const v297 = fn(v296);
    const v298 = d.getHours();
    const v299 = fn(v298);
    const v300 = d.getMinutes();
    const v301 = fn(v300);
    const v302 = d.getSeconds();
    const v303 = fn(v302);
    const formats = {};
    formats.YYYY = v292;
    formats.MM = v295;
    formats.DD = v297;
    formats.HH = v299;
    formats.mm = v301;
    formats.ss = v303;
    const v306 = a => {
        const v304 = formats[a];
        const v305 = v304 || a;
        return v305;
    };
    const v307 = format.replace(/([a-z])\1+/ig, v306);
    return v307;
};
exports.datetime = datetime;
const v311 = function (version) {
    const v308 = version === 'v1';
    if (v308) {
        const v309 = uuid.v1();
        return v309;
    }
    const v310 = uuid.v4();
    return v310;
};
exports.uuid = v311;
const v334 = (config = {}, ...extConfig) => {
    const v312 = {};
    config = exports.extend(v312, config);
    const v313 = config.type;
    const v314 = !v313;
    if (v314) {
        config.type = '_';
    }
    const v315 = config.handle;
    if (v315) {
        const type = config.type;
        const v316 = config.type;
        const v317 = delete v316;
        v317;
        config.type = type;
        config.type = config;
        config = {};
        config = {};
    }
    const v328 = item => {
        const v318 = !item;
        if (v318) {
            const v319 = {};
            return v319;
        }
        const v320 = exports.isString(item);
        if (v320) {
            item.type = item;
            item = {};
            item = {};
        }
        const v321 = item.type;
        const v322 = !v321;
        if (v322) {
            const v323 = config.type;
            const v324 = config.type;
            item.type = v323;
            item.v324 = item;
            item = {};
            item = {};
        }
        const v325 = item.handle;
        if (v325) {
            const type = item.type;
            const v326 = item.type;
            const v327 = delete v326;
            v327;
            item.type = type;
            item.type = item;
            item = {};
            item = {};
        }
        return item;
    };
    extConfig = extConfig.map(v328);
    const v329 = {};
    config = exports.extend(v329, config, ...extConfig);
    const v330 = config.type;
    const v331 = config[v330];
    const v332 = {};
    const value = v331 || v332;
    const v333 = config.type;
    value.type = v333;
    return value;
};
exports.parseAdapterConfig = v334;
const v339 = function (time) {
    const v335 = typeof time;
    const v336 = v335 === 'number';
    if (v336) {
        return time;
    }
    const result = ms(time);
    const v337 = result === undefined;
    if (v337) {
        const v338 = new Error(`think-ms('${ time }') result is undefined`);
        throw v338;
    }
    return result;
};
exports.ms = v339;
const v347 = function (obj, props) {
    const v340 = exports.isString(props);
    if (v340) {
        props = props.split(',');
    }
    const keys = Object.keys(obj);
    const result = {};
    const v345 = item => {
        const v341 = props.indexOf(item);
        const v342 = -1;
        const v343 = v341 === v342;
        if (v343) {
            const v344 = obj[item];
            result[item] = v344;
        }
    };
    const v346 = keys.forEach(v345);
    v346;
    return result;
};
exports.omit = v347;
const isExist = function (dir) {
    dir = path.normalize(dir);
    try {
        const v348 = fs.R_OK;
        const v349 = fs.accessSync(dir, v348);
        v349;
        return true;
    } catch (e) {
        return false;
    }
};
exports.isExist = isExist;
const isFile = function (filePath) {
    const v350 = isExist(filePath);
    const v351 = !v350;
    if (v351) {
        return false;
    }
    try {
        const stat = fs.statSync(filePath);
        const v352 = stat.isFile();
        return v352;
    } catch (e) {
        return false;
    }
};
exports.isFile = isFile;
const isDirectory = function (filePath) {
    const v353 = isExist(filePath);
    const v354 = !v353;
    if (v354) {
        return false;
    }
    try {
        const stat = fs.statSync(filePath);
        const v355 = stat.isDirectory();
        return v355;
    } catch (e) {
        return false;
    }
};
exports.isDirectory = isDirectory;
const chmod = function (p, mode = '0777') {
    const v356 = isExist(p);
    const v357 = !v356;
    if (v357) {
        return false;
    }
    try {
        const v358 = fs.chmodSync(p, mode);
        v358;
        return true;
    } catch (e) {
        return false;
    }
};
exports.chmod = chmod;
const mkdir = function (dir, mode = '0777') {
    const v359 = isExist(dir);
    if (v359) {
        const v360 = chmod(dir, mode);
        return v360;
    }
    const pp = path.dirname(dir);
    const v361 = isExist(pp);
    if (v361) {
        try {
            const v362 = fs.mkdirSync(dir, mode);
            v362;
            return true;
        } catch (e) {
            return false;
        }
    }
    const v363 = mkdir(pp, mode);
    if (v363) {
        const v364 = mkdir(dir, mode);
        return v364;
    }
    return false;
};
exports.mkdir = mkdir;
const getdirFiles = function (dir, prefix = '') {
    dir = path.normalize(dir);
    const v365 = fs.existsSync(dir);
    const v366 = !v365;
    if (v366) {
        const v367 = [];
        return v367;
    }
    const files = fs.readdirSync(dir);
    let result = [];
    const v373 = item => {
        const currentDir = path.join(dir, item);
        const stat = fs.statSync(currentDir);
        const v368 = stat.isFile();
        if (v368) {
            const v369 = path.join(prefix, item);
            const v370 = result.push(v369);
            v370;
        } else {
            const v371 = stat.isDirectory();
            if (v371) {
                const v372 = path.join(prefix, item);
                const cFiles = getdirFiles(currentDir, v372);
                result = result.concat(cFiles);
            }
        }
    };
    const v374 = files.forEach(v373);
    v374;
    return result;
};
;
exports.getdirFiles = getdirFiles;
const rmdir = function (p, reserve) {
    const v375 = isDirectory(p);
    const v376 = !v375;
    if (v376) {
        const v377 = Promise.resolve();
        return v377;
    }
    const v378 = fsReaddir(p);
    const v388 = files => {
        const v382 = item => {
            const filepath = path.join(p, item);
            const v379 = isDirectory(filepath);
            if (v379) {
                const v380 = rmdir(filepath, false);
                return v380;
            }
            const v381 = fsUnlink(filepath);
            return v381;
        };
        const promises = files.map(v382);
        const v383 = Promise.all(promises);
        const v386 = () => {
            const v384 = !reserve;
            if (v384) {
                const v385 = fsRmdir(p);
                return v385;
            }
        };
        const v387 = v383.then(v386);
        return v387;
    };
    const v389 = v378.then(v388);
    return v389;
};
exports.rmdir = rmdir;
const v390 = Buffer.isBuffer;
exports.isBuffer = v390;
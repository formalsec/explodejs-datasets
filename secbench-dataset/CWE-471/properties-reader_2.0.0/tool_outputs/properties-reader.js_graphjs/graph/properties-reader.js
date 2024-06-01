const fs = require('fs');
const v209 = require('./property-appender');
const propertyAppender = v209.propertyAppender;
const PropertiesReader = function (sourceFile, encoding, propertiesAppender) {
    const v210 = typeof encoding;
    const v211 = v210 === 'string';
    const v212 = v211 && encoding;
    this._encoding = v212 || 'utf-8';
    const v213 = {};
    this._properties = v213;
    const v214 = {};
    this._propertiesExpanded = v214;
    const v215 = {};
    const v216 = propertiesAppender || v215;
    const v217 = this.appender(v216);
    v217;
    const v218 = this.append(sourceFile, encoding);
    v218;
};
const v219 = PropertiesReader.prototype;
v219._section = '';
const v220 = PropertiesReader.prototype;
const v224 = function () {
    const v221 = this._properties;
    const v222 = Object.keys(v221);
    const v223 = v222.length;
    return v223;
};
const v225 = {
    configurable: false,
    enumerable: false,
    get: v224
};
const v226 = Object.defineProperty(v220, 'length', v225);
v226;
const v227 = PropertiesReader.prototype;
const v233 = function (appender) {
    const v228 = typeof appender;
    const v229 = v228 === 'function';
    if (v229) {
        this._propertyAppender = appender;
    } else {
        const v230 = typeof appender;
        const v231 = v230 === 'object';
        if (v231) {
            const v232 = propertyAppender(appender);
            this._propertyAppender = v232;
        }
    }
    return this;
};
v227.appender = v233;
const v234 = PropertiesReader.prototype;
const v242 = function (sourceFile, encoding) {
    if (sourceFile) {
        const v235 = typeof encoding;
        const v236 = v235 === 'string';
        const v237 = v236 && encoding;
        const v238 = this._encoding;
        const v239 = v237 || v238;
        const v240 = fs.readFileSync(sourceFile, v239);
        const v241 = this.read(v240);
        v241;
    }
    return this;
};
v234.append = v242;
const v243 = PropertiesReader.prototype;
const v250 = function (input) {
    const v244 = this._section;
    const v245 = delete v244;
    v245;
    const v246 = '' + input;
    const v247 = v246.split('\n');
    const v248 = this._readLine;
    const v249 = v247.forEach(v248, this);
    v249;
    return this;
};
v243.read = v250;
const v251 = PropertiesReader.prototype;
const v266 = function (propertyString) {
    const v252 = !(propertyString = propertyString.trim());
    const v253 = !v252;
    if (v253) {
        var section = /^\[([^=]+)]$/.exec(propertyString);
        const v254 = !section;
        const v255 = /^([^#=]+)(={0,1})(.*)$/.exec(propertyString);
        var property = v254 && v255;
        if (section) {
            const v256 = section[1];
            this._section = v256;
        } else {
            if (property) {
                const v257 = this._section;
                const v258 = this._section;
                const v259 = v258 + '.';
                if (v257) {
                    section = v259;
                } else {
                    section = '';
                }
                const v260 = property[1];
                const v261 = v260.trim();
                const v262 = section + v261;
                const v263 = property[3];
                const v264 = v263.trim();
                const v265 = this.set(v262, v264);
                v265;
            }
        }
    }
};
v251._readLine = v266;
const v267 = PropertiesReader.prototype;
const v275 = function (fn, scope) {
    let key;
    const v268 = this._properties;
    for (key in v268) {
        const v269 = this._properties;
        const v270 = v269.hasOwnProperty(key);
        if (v270) {
            const v271 = scope || this;
            const v272 = this._properties;
            const v273 = v272[key];
            const v274 = fn.call(v271, key, v273);
            v274;
        }
    }
    return this;
};
v267.each = v275;
const v276 = PropertiesReader.prototype;
const v293 = function (value) {
    const v277 = value !== null;
    const v278 = value !== '';
    const v279 = v277 && v278;
    const v280 = isNaN(value);
    const v281 = !v280;
    const v282 = v279 && v281;
    if (v282) {
        const v283 = +value;
        return v283;
    }
    const v284 = value === 'true';
    const v285 = value === 'false';
    const v286 = v284 || v285;
    if (v286) {
        const v287 = value === 'true';
        return v287;
    }
    const v288 = typeof value;
    const v289 = v288 === 'string';
    if (v289) {
        var replacements = {};
        replacements['\\n'] = '\n';
        replacements['\\r'] = '\r';
        replacements['\\t'] = '\t';
        const v291 = function (key) {
            const v290 = replacements[key];
            return v290;
        };
        const v292 = value.replace(/\\[nrt]/g, v291);
        return v292;
    }
    return value;
};
v276._parsed = v293;
const v294 = PropertiesReader.prototype;
const v297 = function (key) {
    const v295 = this.getRaw(key);
    const v296 = this._parsed(v295);
    return v296;
};
v294.get = v297;
const v298 = PropertiesReader.prototype;
const v304 = function (key) {
    const v299 = this._properties;
    const v300 = v299.hasOwnProperty(key);
    const v301 = this._properties;
    const v302 = v301[key];
    let v303;
    if (v300) {
        v303 = v302;
    } else {
        v303 = null;
    }
    return v303;
};
v298.getRaw = v304;
const v305 = PropertiesReader.prototype;
const v331 = function (key, value) {
    const v306 = '' + value;
    var parsedValue = v306.trim();
    const v307 = this._properties;
    const v308 = this._propertyAppender(v307, key, parsedValue);
    this._properties = v308;
    var expanded = key.split('.');
    var source = this._propertiesExpanded;
    const v309 = expanded.length;
    let v310 = v309 > 1;
    while (v310) {
        var step = expanded.shift();
        const v311 = expanded.length;
        const v312 = v311 >= 1;
        const v313 = source[step];
        const v314 = typeof v313;
        const v315 = v314 === 'string';
        const v316 = v312 && v315;
        if (v316) {
            const v317 = source[step];
            const v318 = {};
            v318[''] = v317;
            source[step] = v318;
        }
        const v319 = source[step];
        const v320 = {};
        source.step = v319 || v320;
        source = source[step];
        v310 = v309 > 1;
    }
    const v321 = typeof parsedValue;
    const v322 = v321 === 'string';
    const v323 = expanded[0];
    const v324 = source[v323];
    const v325 = typeof v324;
    const v326 = v325 === 'object';
    const v327 = v322 && v326;
    if (v327) {
        const v328 = expanded[0];
        const v329 = source[v328];
        v329[''] = parsedValue;
    } else {
        const v330 = expanded[0];
        source[v330] = parsedValue;
    }
    return this;
};
v305.set = v331;
const v332 = PropertiesReader.prototype;
const v334 = function () {
    const v333 = this._propertiesExpanded;
    return v333;
};
v332.path = v334;
const v335 = PropertiesReader.prototype;
const v338 = function () {
    var properties = {};
    const v336 = function (key, value) {
        properties[key] = value;
    };
    const v337 = this.each(v336);
    v337;
    return properties;
};
v335.getAllProperties = v338;
const v339 = PropertiesReader.prototype;
const v342 = function () {
    var propertiesReader = new PropertiesReader(null);
    const v340 = propertiesReader.set;
    const v341 = this.each(v340, propertiesReader);
    v341;
    return propertiesReader;
};
v339.clone = v342;
const v343 = PropertiesReader.prototype;
const v357 = function (root) {
    const v344 = this._properties;
    var keys = Object.keys(v344);
    var outObj = {};
    var i = 0;
    const v345 = String(root);
    var prefixLength = v345.length;
    const v346 = keys.length;
    let v347 = i < v346;
    while (v347) {
        var key = keys[i];
        const v349 = key.indexOf(root);
        const v350 = v349 === 0;
        const v351 = key.charAt(prefixLength);
        const v352 = v351 === '.';
        const v353 = v350 && v352;
        if (v353) {
            const v356 = this.get(key);
            outObj[v355] = v356;
        }
        const v348 = i++;
        v347 = i < v346;
    }
    return outObj;
};
v343.getByRoot = v357;
const v358 = PropertiesReader.prototype;
const v385 = function (app, basePath, makePaths) {
    var Path = require('path');
    const v359 = process.cwd();
    basePath = basePath || process.cwd();
    const v360 = /\/$/.test(basePath);
    const v361 = !v360;
    if (v361) {
        basePath += '/';
    }
    const v382 = function (key, value) {
        const v362 = /\.(path|dir)$/.test(key);
        const v363 = value && v362;
        if (v363) {
            const v364 = Path.relative(basePath, value);
            value = Path.join(basePath, v364);
            const v365 = this.set(key, value);
            v365;
            try {
                let directoryPath;
                const v366 = /dir$/.test(key);
                const v367 = Path.dirname(value);
                if (v366) {
                    directoryPath = value;
                } else {
                    directoryPath = v367;
                }
                if (makePaths) {
                    const v368 = require('mkdirp');
                    const v369 = v368.sync(directoryPath);
                    v369;
                } else {
                    const v370 = fs.statSync(directoryPath);
                    const v371 = v370.isDirectory();
                    const v372 = !v371;
                    if (v372) {
                        const v373 = new Error('Path is not a directory that already exists');
                        throw v373;
                    }
                }
            } catch (e) {
                const v374 = 'Unable to create directory ' + value;
                const v375 = new Error(v374);
                throw v375;
            }
        }
        const v376 = this.get(key);
        const v377 = app.set(key, v376);
        v377;
        const v378 = /^browser\./.test(key);
        if (v378) {
            const v381 = this.get(key);
            v379[v380] = v381;
        }
    };
    const v383 = this.each(v382, this);
    v383;
    const v384 = app.set('properties', this);
    v384;
    return this;
};
v358.bindToExpress = v385;
const v386 = PropertiesReader.prototype;
const v400 = function () {
    var lines = [];
    var section = null;
    const v398 = function (key, value) {
        var tokens = key.split('.');
        const v387 = tokens.length;
        const v388 = v387 > 1;
        if (v388) {
            const v389 = tokens[0];
            const v390 = section !== v389;
            if (v390) {
                section = tokens[0];
                const v391 = '[' + section;
                const v392 = v391 + ']';
                const v393 = lines.push(v392);
                v393;
            }
            const v394 = tokens.slice(1);
            key = v394.join('.');
        } else {
            section = null;
        }
        const v395 = key + '=';
        const v396 = v395 + value;
        const v397 = lines.push(v396);
        v397;
    };
    const v399 = this.each(v398);
    v399;
    return lines;
};
v386._stringifyProperties = v400;
const v401 = PropertiesReader.prototype;
const v416 = function (destFile, onComplete) {
    const v402 = this._stringifyProperties();
    const content = v402.join('\n');
    const v407 = (done, fail) => {
        const v405 = err => {
            if (err) {
                const v403 = fail(err);
                return v403;
            }
            const v404 = done(content);
            v404;
        };
        const v406 = fs.writeFile(destFile, content, v405);
        v406;
    };
    const onDone = new Promise(v407);
    const v408 = typeof onComplete;
    const v409 = v408 === 'function';
    if (v409) {
        const v410 = onComplete.length;
        const v411 = v410 > 1;
        if (v411) {
            const v412 = onComplete.bind(null, null);
            const v413 = onComplete.bind(null);
            const v414 = onDone.then(v412, v413);
            v414;
        } else {
            const v415 = onDone.then(onComplete);
            v415;
        }
    }
    return onDone;
};
v401.save = v416;
module.exports = PropertiesReader;
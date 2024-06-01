var skipLineRex = /^\s*(\n|\#|;)/;
var chompRex = /(?:\n|\r)$/;
var nonWhitespaceRex = /\S/;
var keyValueRex = /^\s*([^=]*\w)\s*=\s*(.*)\s*$/;
var groupRex = /^\s*\[\s*([^\]]+)\s*\]$/;
var interPolationRexG = /%\(.*?\)/g;
var interPolationRex = /%\((.*?)\)/;
const getLines = function (file, cb, async) {
    var fs = require('fs');
    var splitLines;
    var data;
    const v243 = function (data) {
        data = data.toString();
        var lines;
        const v231 = data.indexOf('\r\n');
        const v232 = -1;
        const v233 = v231 > v232;
        if (v233) {
            lines = data.split('\r\n');
        } else {
            const v234 = data.indexOf('\n');
            const v235 = -1;
            const v236 = v234 > v235;
            if (v236) {
                lines = data.split('\n');
            } else {
                const v237 = data.indexOf('\r');
                const v238 = -1;
                const v239 = v237 > v238;
                if (v239) {
                    lines = data.split('\r');
                } else {
                    lines = [data];
                }
            }
        }
        const v241 = function emptyLineFilter(line) {
            const v240 = line !== '';
            return v240;
        };
        const v242 = lines.filter(v241);
        return v242;
    };
    splitLines = v243;
    if (async) {
        const v247 = function fileReadCb(err, data) {
            if (err) {
                const v244 = cb(err, null);
                v244;
            } else {
                const v245 = splitLines(data);
                const v246 = cb(null, v245);
                v246;
            }
        };
        const v248 = fs.readFile(file, v247);
        v248;
    } else {
        data = fs.readFileSync(file);
        const v249 = splitLines(data);
        return v249;
    }
};
const fixQuoted = function (str) {
    const v250 = str[0];
    const v251 = v250 === '"';
    const v252 = str.length;
    const v253 = v252 - 1;
    const v254 = str[v253];
    const v255 = v254 === '"';
    const v256 = v251 && v255;
    const v257 = str[0];
    const v258 = v257 === '\'';
    const v259 = str.length;
    const v260 = v259 - 1;
    const v261 = str[v260];
    const v262 = v261 === '\'';
    const v263 = v258 && v262;
    const v264 = v256 || v263;
    if (v264) {
        const v265 = str.length;
        const v266 = v265 - 2;
        const v267 = str.substr(1, v266);
        return v267;
    }
    return str;
};
const deepCopy = function (sourceObj, destinationObj) {
    const v268 = {};
    var out = destinationObj || v268;
    const v269 = Object.keys(sourceObj);
    const v283 = function (key) {
        const v270 = sourceObj[key];
        const v271 = typeof v270;
        const v272 = v271 === 'object';
        if (v272) {
            const v273 = sourceObj[key];
            const v274 = v273.constructor;
            const v275 = v274 === Array;
            const v276 = [];
            const v277 = {};
            let v278;
            if (v275) {
                v278 = v276;
            } else {
                v278 = v277;
            }
            out[key] = v278;
            const v279 = sourceObj[key];
            const v280 = out[key];
            const v281 = deepCopy(v279, v280);
            v281;
        } else {
            const v282 = sourceObj[key];
            out[key] = v282;
        }
    };
    const v284 = v269.forEach(v283);
    v284;
    return out;
};
const IniReaderCore = function (cfg, async) {
    const v285 = this.construct(cfg, async);
    v285;
};
const v286 = require('util');
const v287 = require('events');
const v288 = v287.EventEmitter;
const v289 = v286.inherits(IniReaderCore, v288);
v289;
const v290 = IniReaderCore.prototype;
const v299 = function (cfg, async) {
    const v291 = typeof cfg;
    const v292 = v291 === 'string';
    if (v292) {
        cfg.file = cfg;
        cfg = {};
        cfg = {};
        const v293 = async === 'boolean';
        if (v293) {
            cfg.async = async;
        }
    }
    const v294 = {};
    cfg = cfg || v294;
    const v295 = cfg.async;
    const v296 = !v295;
    const v297 = !v296;
    this.async = v297;
    const v298 = cfg.file;
    this.file = v298 || null;
};
v290.construct = v299;
const v300 = IniReaderCore.prototype;
const v301 = IniReaderCore.prototype;
const load = function (file) {
    const v302 = typeof file;
    const v303 = v302 === 'string';
    if (v303) {
        this.file = file;
    }
    const v304 = this.file;
    const v305 = !v304;
    if (v305) {
        const v306 = new Error('No file name given');
        const v307 = this.emit('error', v306);
        v307;
        return;
    }
    try {
        const v308 = this.async;
        if (v308) {
            const v309 = this.file;
            const v313 = function parseLines(err, lines) {
                if (err) {
                    const v310 = this.emit('error', err);
                    v310;
                } else {
                    this.lines = lines;
                    const v311 = this.parseFile();
                    this.values = v311;
                    const v312 = this.emit('fileParse');
                    v312;
                }
            };
            const v314 = v313.bind(this);
            const v315 = getLines(v309, v314, true);
            v315;
        } else {
            const v316 = this.file;
            const v317 = getLines(v316);
            this.lines = v317;
            const v318 = this.parseFile();
            this.values = v318;
            const v319 = this.emit('fileParse');
            v319;
        }
    } catch (e) {
        const v320 = this.emit('error', e);
        v320;
    }
};
v301.init = load;
v300.load = v301.init;
const v321 = IniReaderCore.prototype;
const parseSectionHead = function (line) {
    var groupMatch = line.match(groupRex);
    const v322 = groupMatch[1];
    let v323;
    if (groupMatch) {
        v323 = v322;
    } else {
        v323 = false;
    }
    return v323;
};
v321.parseSectionHead = parseSectionHead;
const v324 = IniReaderCore.prototype;
const keyValMatch = function (line) {
    var kvMatch = line.match(keyValueRex);
    const v325 = kvMatch[1];
    const v326 = kvMatch[2];
    const v327 = {
        key: v325,
        value: v326
    };
    let v328;
    if (kvMatch) {
        v328 = v327;
    } else {
        v328 = false;
    }
    return v328;
};
v324.keyValueMatch = keyValMatch;
const v329 = IniReaderCore.prototype;
const parseFile = function () {
    var output;
    var lines;
    var groupName;
    var keyVal;
    var line;
    var currentSection;
    var lineNumber;
    output = {};
    lines = this.lines;
    lineNumber = 0;
    let v330 = lines.length;
    while (v330) {
        line = lines.shift();
        lineNumber += 1;
        const v331 = skipLineRex.test(line);
        const v332 = !v331;
        const v333 = nonWhitespaceRex.test(line);
        const v334 = v332 && v333;
        if (v334) {
            line = line.replace(chompRex, '');
            line = line.trim();
            groupName = this.parseSectionHead(line);
            if (groupName) {
                currentSection = groupName;
                const v335 = output[currentSection];
                const v336 = !v335;
                if (v336) {
                    const v337 = {};
                    output[currentSection] = v337;
                }
            } else {
                keyVal = this.keyValueMatch(line);
                if (keyVal) {
                    if (currentSection) {
                        const v340 = keyVal.value;
                        const v341 = fixQuoted(v340);
                        v338[v339] = v341;
                    } else {
                        const v342 = 'Syntax error in line ' + lineNumber;
                        const v343 = new SyntaxError(v342);
                        const v344 = this.emit('error', v343);
                        v344;
                    }
                } else {
                    const v345 = 'Syntax error in line ' + lineNumber;
                    const v346 = new SyntaxError(v345);
                    const v347 = this.emit('error', v346);
                    v347;
                }
            }
        }
        v330 = lines.length;
    }
    return output;
};
v329.parseFile = parseFile;
const v348 = IniReaderCore.prototype;
const getBlock = function (block) {
    const v349 = this.param(block);
    return v349;
};
v348.getBlock = getBlock;
const v350 = IniReaderCore.prototype;
const getValue = function (block, key) {
    var param = block;
    const v351 = typeof key;
    const v352 = v351 !== 'undefined';
    if (v352) {
        param += '.' + key;
    }
    const v353 = this.getParam(param);
    return v353;
};
v350.getValue = getValue;
const v354 = IniReaderCore.prototype;
const getParam = function (param) {
    var output = this.values;
    var block;
    var key;
    if (param) {
        param = param.split('.');
        block = param[0];
        key = param[1];
        if (block) {
            output = output[block];
            if (key) {
                output = output[key];
            }
        }
    }
    return output;
};
v354.getParam = getParam;
const v355 = IniReaderCore.prototype;
const setParam = function (prop, value) {
    const v356 = this.values;
    const v357 = typeof v356;
    const v358 = v357 !== 'object';
    if (v358) {
        const v359 = {};
        this.values = v359;
    }
    var propKeys;
    const v360 = Object.prototype;
    const v361 = v360.toString;
    const v362 = v361.call(prop);
    const v363 = v362.match('Array');
    if (v363) {
        propKeys = prop;
    } else {
        propKeys = prop.split('.');
    }
    var propKeysLen = propKeys.length;
    var ref = this.values;
    const v364 = propKeysLen > 0;
    if (v364) {
        const v370 = function propKeyParser(key, index) {
            const v365 = ref[key];
            const v366 = !v365;
            if (v366) {
                const v367 = {};
                ref[key] = v367;
            }
            const v368 = propKeysLen - 1;
            const v369 = index < v368;
            if (v369) {
                ref = ref[key];
            } else {
                ref[key] = value;
            }
        };
        const v371 = propKeys.forEach(v370, this);
        v371;
    }
};
v355.setParam = setParam;
const v372 = IniReaderCore.prototype;
const param = function (prop, value) {
    var output;
    const v373 = typeof value;
    const v374 = v373 === 'undefined';
    if (v374) {
        output = this.getParam(prop);
    } else {
        output = this.setParam(prop, value);
    }
    return output;
};
v372.param = param;
const v375 = IniReaderCore.prototype;
const getLe = function (le) {
    const v376 = typeof le;
    const v377 = v376 === 'string';
    const v378 = le === '\n';
    const v379 = le === '\r\n';
    const v380 = v378 || v379;
    const v381 = le === '\r';
    const v382 = v380 || v381;
    const v383 = v377 && v382;
    let v384;
    if (v383) {
        v384 = le;
    } else {
        v384 = '\n';
    }
    return v384;
};
v375.getLe = getLe;
const v385 = IniReaderCore.prototype;
const serialize = function (le) {
    var output = '';
    var ws = /\s+/;
    var values = this.values;
    le = this.getLe(le);
    const v386 = Object.keys(values);
    const v401 = function serializeGroup(group) {
        const v387 = le + '[';
        const v388 = v387 + group;
        const v389 = v388 + ']';
        output += v389 + le;
        var groupValues = values[group];
        const v390 = Object.keys(groupValues);
        const v399 = function serializeKey(key) {
            var value = groupValues[key];
            const v391 = ws.test(value);
            if (v391) {
                const v392 = value.indexOf('"');
                const v393 = -1;
                const v394 = v392 > v393;
                if (v394) {
                    const v395 = '\'' + value;
                    value = v395 + '\'';
                } else {
                    const v396 = '"' + value;
                    value = v396 + '"';
                }
            }
            const v397 = key + '=';
            const v398 = v397 + value;
            output += v398 + le;
        };
        const v400 = v390.forEach(v399, this);
        v400;
    };
    const v402 = v386.forEach(v401, this);
    v402;
    return output;
};
v385.serialize = serialize;
const v403 = IniReaderCore.prototype;
const v424 = function (file, le) {
    const v404 = !file;
    if (v404) {
        file = this.file;
    }
    le = this.getLe(le);
    var now = new Date();
    const v405 = '; IniReader' + le;
    const v406 = v405 + '; ';
    const v407 = now.getFullYear();
    const v408 = v406 + v407;
    const v409 = v408 + '-';
    const v410 = now.getMonth();
    const v411 = v410 + 1;
    const v412 = v409 + v411;
    const v413 = v412 + '-';
    const v414 = now.getDate();
    const v415 = v413 + v414;
    var output = v415 + le;
    var fs = require('fs');
    output += this.serialize(le);
    const v416 = this.async;
    if (v416) {
        const v419 = function writeFile(err) {
            if (err) {
                const v417 = this.emit('error', err);
                v417;
                return;
            }
            const v418 = this.emit('fileWritten', file);
            v418;
        };
        const v420 = v419.bind(this);
        const v421 = fs.writeFile(file, output, v420);
        v421;
    } else {
        const v422 = fs.writeFileSync(file, output);
        v422;
        const v423 = this.emit('fileWritten', file);
        v423;
    }
};
v403.write = v424;
const v425 = IniReaderCore.prototype;
const v460 = function (param) {
    var output = this.getParam(param);
    var self = this;
    var block;
    var key;
    var refParams;
    var refParam;
    var references;
    const v426 = typeof output;
    const v427 = v426 !== 'undefined';
    if (v427) {
        const v428 = typeof output;
        const v429 = v428 === 'object';
        if (v429) {
            output = deepCopy(output);
        }
        if (param) {
            param = param.split('.');
            block = param[0];
            key = param[1];
        }
        const v430 = typeof block;
        const v431 = v430 === 'undefined';
        if (v431) {
            const v432 = Object.keys(output);
            const v441 = function (sBlock) {
                const v433 = output[sBlock];
                const v434 = Object.keys(v433);
                const v439 = function (sKey) {
                    const v436 = sBlock + '.';
                    const v437 = v436 + sKey;
                    const v438 = self.interpolate(v437);
                    v435[sKey] = v438;
                };
                const v440 = v434.forEach(v439);
                v440;
            };
            const v442 = v432.forEach(v441);
            v442;
        } else {
            const v443 = typeof key;
            const v444 = v443 === 'undefined';
            if (v444) {
                const v445 = Object.keys(output);
                const v449 = function (sKey) {
                    const v446 = block + '.';
                    const v447 = v446 + sKey;
                    const v448 = self.interpolate(v447);
                    output[sKey] = v448;
                };
                const v450 = v445.forEach(v449);
                v450;
            } else {
                const v451 = typeof output;
                const v452 = v451 === 'string';
                if (v452) {
                    references = output.match(interPolationRexG);
                    if (references) {
                        const v458 = function (reference) {
                            var refKey = reference.replace(interPolationRex, '$1');
                            refParams = refKey.split('.');
                            const v453 = refParams.length;
                            const v454 = v453 < 2;
                            if (v454) {
                                const v455 = block + '.';
                                const v456 = refParams[0];
                                refParam = v455 + v456;
                            } else {
                                refParam = refKey;
                            }
                            const v457 = self.interpolate(refParam);
                            output = output.replace(reference, v457);
                        };
                        const v459 = references.forEach(v458);
                        v459;
                    }
                }
            }
        }
    }
    return output;
};
v425.interpolate = v460;
exports.IniReaderCore = IniReaderCore;
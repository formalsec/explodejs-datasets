'use strict';
const v284 = this.__extends;
const v285 = this && v284;
const v314 = function () {
    var extendStatics = function (d, b) {
        const v286 = Object.setPrototypeOf;
        const v287 = [];
        const v288 = { __proto__: v287 };
        const v289 = v288 instanceof Array;
        const v290 = function (d, b) {
            d.__proto__ = b;
        };
        const v291 = v289 && v290;
        const v292 = v286 || v291;
        const v297 = function (d, b) {
            let p;
            for (p in b) {
                const v293 = Object.prototype;
                const v294 = v293.hasOwnProperty;
                const v295 = v294.call(b, p);
                if (v295) {
                    const v296 = b[p];
                    d[p] = v296;
                }
            }
        };
        extendStatics = v292 || v297;
        const v298 = extendStatics(d, b);
        return v298;
    };
    const v313 = function (d, b) {
        const v299 = typeof b;
        const v300 = v299 !== 'function';
        const v301 = b !== null;
        const v302 = v300 && v301;
        if (v302) {
            const v303 = String(b);
            const v304 = 'Class extends value ' + v303;
            const v305 = v304 + ' is not a constructor or null';
            const v306 = new TypeError(v305);
            throw v306;
        }
        const v307 = extendStatics(d, b);
        v307;
        const __ = function () {
            this.constructor = d;
        };
        const v308 = b === null;
        const v309 = Object.create(b);
        const v310 = b.prototype;
        const v311 = new __();
        let v312;
        if (v308) {
            v312 = v309;
        } else {
            v312 = (__.prototype = v310, v311);
        }
        d.prototype = v312;
    };
    return v313;
};
const v315 = v314();
var __extends = v285 || v315;
const v316 = this.__assign;
const v317 = this && v316;
const v327 = function () {
    const v318 = Object.assign;
    const v325 = function (t) {
        var s;
        var i = 1;
        var n = arguments.length;
        let v319 = i < n;
        while (v319) {
            s = arguments[i];
            let p;
            for (p in s) {
                const v321 = Object.prototype;
                const v322 = v321.hasOwnProperty;
                const v323 = v322.call(s, p);
                if (v323) {
                    const v324 = s[p];
                    t[p] = v324;
                }
            }
            const v320 = i++;
            v319 = i < n;
        }
        return t;
    };
    __assign = v318 || v325;
    const v326 = __assign.apply(this, arguments);
    return v326;
};
var __assign = v317 || v327;
const v328 = this.__awaiter;
const v329 = this && v328;
const v355 = function (thisArg, _arguments, P, generator) {
    const adopt = function (value) {
        const v330 = value instanceof P;
        const v332 = function (resolve) {
            const v331 = resolve(value);
            v331;
        };
        const v333 = new P(v332);
        let v334;
        if (v330) {
            v334 = value;
        } else {
            v334 = v333;
        }
        return v334;
    };
    const v335 = P || (P = Promise);
    const v353 = function (resolve, reject) {
        const fulfilled = function (value) {
            try {
                const v336 = generator.next(value);
                const v337 = step(v336);
                v337;
            } catch (e) {
                const v338 = reject(e);
                v338;
            }
        };
        const rejected = function (value) {
            try {
                const v339 = generator['throw'](value);
                const v340 = step(v339);
                v340;
            } catch (e) {
                const v341 = reject(e);
                v341;
            }
        };
        const step = function (result) {
            const v342 = result.done;
            const v343 = result.value;
            const v344 = resolve(v343);
            const v345 = result.value;
            const v346 = adopt(v345);
            const v347 = v346.then(fulfilled, rejected);
            let v348;
            if (v342) {
                v348 = v344;
            } else {
                v348 = v347;
            }
            v348;
        };
        const v349 = [];
        const v350 = _arguments || v349;
        const v351 = (generator = generator.apply(thisArg, v350)).next();
        const v352 = step(v351);
        v352;
    };
    const v354 = new v335(v353);
    return v354;
};
var __awaiter = v329 || v355;
const v356 = this.__generator;
const v357 = this && v356;
const v460 = function (thisArg, body) {
    const v362 = function () {
        const v358 = t[0];
        const v359 = v358 & 1;
        if (v359) {
            const v360 = t[1];
            throw v360;
        }
        const v361 = t[1];
        return v361;
    };
    const v363 = [];
    const v364 = [];
    var _ = {};
    _.label = 0;
    _.sent = v362;
    _.trys = v363;
    _.ops = v364;
    var f;
    var y;
    var t;
    var g;
    const v365 = verb(0);
    const v366 = verb(1);
    const v367 = verb(2);
    const v368 = {};
    v368.next = v365;
    v368.throw = v366;
    v368.return = v367;
    const v369 = typeof Symbol;
    const v370 = v369 === 'function';
    const v371 = Symbol.iterator;
    const v372 = function () {
        return this;
    };
    const v373 = v370 && (g[v371] = v372);
    return g = v368, v373, g;
    const verb = function (n) {
        const v376 = function (v) {
            const v374 = [
                n,
                v
            ];
            const v375 = step(v374);
            return v375;
        };
        return v376;
    };
    const step = function (op) {
        if (f) {
            const v377 = new TypeError('Generator is already executing.');
            throw v377;
        }
        const v378 = op[0];
        const v379 = v378 && (_ = 0);
        const v380 = g && (g = 0, v379);
        while (v380, _) {
            try {
                const v391 = op[1];
                const v392 = (t = t.call(y, v391)).done;
                const v393 = !v392;
                const v394 = y && (t = op[0] & 2 ? y['return'] : op[0] ? y['throw'] || ((t = y['return']) && t.call(y), 0) : y.next) && v393;
                if (f = 1, v394) {
                    return t;
                }
                if (y = 0, t) {
                    const v395 = op[0];
                    const v396 = v395 & 2;
                    const v397 = t.value;
                    op = [
                        v396,
                        v397
                    ];
                }
                const v398 = op[0];
                switch (v398) {
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    const v399 = _.label;
                    const v400 = v399++;
                    v400;
                    const v401 = op[1];
                    const v402 = {};
                    v402.value = v401;
                    v402.done = false;
                    return v402;
                case 5:
                    const v403 = _.label;
                    const v404 = v403++;
                    v404;
                    y = op[1];
                    op = [0];
                    continue;
                case 7:
                    const v405 = _.ops;
                    op = v405.pop();
                    const v406 = _.trys;
                    const v407 = v406.pop();
                    v407;
                    continue;
                default:
                    const v408 = t.length;
                    const v409 = v408 > 0;
                    const v410 = t.length;
                    const v411 = v410 - 1;
                    const v412 = t[v411];
                    const v413 = !(t = _.trys, t = v409 && v412);
                    const v414 = op[0];
                    const v415 = v414 === 6;
                    const v416 = op[0];
                    const v417 = v416 === 2;
                    const v418 = v415 || v417;
                    const v419 = v413 && v418;
                    if (v419) {
                        _ = 0;
                        continue;
                    }
                    const v420 = op[0];
                    const v421 = v420 === 3;
                    const v422 = !t;
                    const v423 = op[1];
                    const v424 = t[0];
                    const v425 = v423 > v424;
                    const v426 = op[1];
                    const v427 = t[3];
                    const v428 = v426 < v427;
                    const v429 = v425 && v428;
                    const v430 = v422 || v429;
                    const v431 = v421 && v430;
                    if (v431) {
                        const v432 = op[1];
                        _.label = v432;
                        break;
                    }
                    const v433 = op[0];
                    const v434 = v433 === 6;
                    const v435 = _.label;
                    const v436 = t[1];
                    const v437 = v435 < v436;
                    const v438 = v434 && v437;
                    if (v438) {
                        const v439 = t[1];
                        _.label = v439;
                        t = op;
                        break;
                    }
                    const v440 = _.label;
                    const v441 = t[2];
                    const v442 = v440 < v441;
                    const v443 = t && v442;
                    if (v443) {
                        const v444 = t[2];
                        _.label = v444;
                        const v445 = _.ops;
                        const v446 = v445.push(op);
                        v446;
                        break;
                    }
                    const v447 = t[2];
                    if (v447) {
                        const v448 = _.ops;
                        const v449 = v448.pop();
                        v449;
                    }
                    const v450 = _.trys;
                    const v451 = v450.pop();
                    v451;
                    continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [
                    6,
                    e
                ];
                y = 0;
            } finally {
                t = 0;
                f = t;
            }
        }
        const v452 = op[0];
        const v453 = v452 & 5;
        if (v453) {
            const v454 = op[1];
            throw v454;
        }
        const v455 = op[0];
        const v456 = op[1];
        const v457 = void 0;
        let v458;
        if (v455) {
            v458 = v456;
        } else {
            v458 = v457;
        }
        const v459 = {};
        v459.value = v458;
        v459.done = true;
        return v459;
    };
};
var __generator = v357 || v460;
const v461 = { value: true };
const v462 = Object.defineProperty(exports, '__esModule', v461);
v462;
var stream_1 = require('stream');
const streamifyResponse = function (handler) {
    var _this = this;
    const v484 = function (event, context) {
        const v482 = function (resolve, reject) {
            const v463 = void 0;
            const v464 = void 0;
            const v480 = function () {
                var body;
                var metadata;
                var error_1;
                const v478 = function (_a) {
                    const v465 = _a.label;
                    switch (v465) {
                    case 0:
                        body = new StreamingBody(resolve);
                        _a.label = 1;
                    case 1:
                        const v466 = _a.trys;
                        const v467 = [
                            1,
                            3,
                            ,
                            4
                        ];
                        const v468 = v466.push(v467);
                        v468;
                        const v469 = handler(event, body, context);
                        const v470 = [
                            4,
                            v469
                        ];
                        return v470;
                    case 2:
                        metadata = _a.sent();
                        const v471 = body.headersSent;
                        const v472 = !v471;
                        if (v472) {
                            const v473 = body.sendHeader(metadata);
                            v473;
                        }
                        const v474 = [
                            3,
                            4
                        ];
                        return v474;
                    case 3:
                        error_1 = _a.sent();
                        const v475 = reject(error_1);
                        v475;
                        const v476 = [
                            3,
                            4
                        ];
                        return v476;
                    case 4:
                        const v477 = [2];
                        return v477;
                    }
                };
                const v479 = __generator(this, v478);
                return v479;
            };
            const v481 = __awaiter(_this, v463, v464, v480);
            return v481;
        };
        const v483 = new Promise(v482);
        return v483;
    };
    return v484;
};
const v502 = function (_super) {
    const v485 = __extends(StreamingBody, _super);
    v485;
    const StreamingBody = function (resolve) {
        const v486 = _super.call(this);
        var _this = v486 || this;
        _this.resolve = resolve;
        _this.headersSent = false;
        return _this;
    };
    const v487 = StreamingBody.prototype;
    const v499 = function (metadata) {
        const v488 = void 0;
        const v489 = metadata === v488;
        if (v489) {
            metadata = {};
        }
        const v490 = {};
        const v491 = metadata.headers;
        var headers = __assign(v490, v491);
        const v492 = this.contentType;
        if (v492) {
            const v493 = this.contentType;
            headers['Content-Type'] = v493;
        }
        const v494 = {};
        const v495 = __assign(v494, metadata);
        const v496 = {
            headers: headers,
            body: this
        };
        const v497 = __assign(v495, v496);
        const v498 = this.resolve(v497);
        v498;
        this.headersSent = true;
    };
    v487.sendHeader = v499;
    const v500 = StreamingBody.prototype;
    const v501 = function (contentType) {
        this.contentType = contentType;
    };
    v500.setContentType = v501;
    return StreamingBody;
};
const v503 = stream_1.PassThrough;
var StreamingBody = v502(v503);
const v506 = function () {
    const HttpResponseStream = function () {
    };
    const v505 = function (responseStream, metadata) {
        const v504 = responseStream.sendHeader(metadata);
        v504;
        return responseStream;
    };
    HttpResponseStream.from = v505;
    return HttpResponseStream;
};
var HttpResponseStream = v506();
const v507 = globalThis.awslambda;
const v508 = {
    streamifyResponse: streamifyResponse,
    HttpResponseStream: HttpResponseStream
};
globalThis.awslambda = v507 || v508;
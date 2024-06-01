const v531 = function () {
    var Server;
    var _;
    var fs;
    var http;
    var mime;
    var minimatch;
    var path;
    var pkg;
    var url;
    pkg = require('../package.json');
    fs = require('fs');
    _ = require('underscore');
    mime = require('mime');
    http = require('http');
    url = require('url');
    path = require('path');
    minimatch = require('minimatch');
    const v530 = function () {
        const v267 = Server.prototype;
        const v268 = pkg.name;
        v267.name = v268;
        const v269 = Server.prototype;
        const v270 = pkg.version;
        v269.version = v270;
        const v271 = Server.prototype;
        const v273 = function () {
            const v272 = {};
            v272.port = 8000;
            v272.host = '0.0.0.0';
            v272.logs = false;
            v272.index = 'index.html';
            return v272;
        };
        v271.defaults = v273;
        const Server = function (options, exitCallback) {
            const v274 = options == null;
            if (v274) {
                options = {};
            }
            this.exitCallback = exitCallback;
            const v275 = this.defaults();
            const v276 = _.extend(v275, options);
            this.options = v276;
            const v277 = this._initLogs();
            v277;
            const v278 = this._bindCloseEvents();
            v278;
            const v279 = this.start();
            v279;
        };
        const v280 = Server.prototype;
        const v290 = function () {
            const v281 = this.request;
            const v282 = _.bind(v281, this);
            const v283 = http.createServer(v282);
            const v284 = this.options;
            const v285 = v284.port;
            const v286 = Number(v285);
            const v287 = this.options;
            const v288 = v287.host;
            const v289 = v283.listen(v286, v288);
            return this.server = v289;
        };
        v280.start = v290;
        const v291 = Server.prototype;
        const v305 = function (callback) {
            var ref;
            var ref1;
            const v292 = (ref = this.server) != null;
            if (v292) {
                const v293 = ref.close();
                v293;
            }
            const v294 = (ref1 = this._loger) != null;
            if (v294) {
                const v295 = ref1.end();
                v295;
            }
            const v296 = this.exitCallback;
            const v297 = typeof v296;
            const v298 = v297 === 'function';
            if (v298) {
                const v299 = this.exitCallback();
                v299;
            }
            const v300 = typeof callback;
            const v301 = v300 === 'function';
            const v302 = callback();
            const v303 = void 0;
            let v304;
            if (v301) {
                v304 = v302;
            } else {
                v304 = v303;
            }
            return v304;
        };
        v291.stop = v305;
        const v306 = Server.prototype;
        const v316 = function () {
            var exit;
            const v313 = function (_this) {
                const v312 = function () {
                    const v307 = process.removeAllListeners('SIGINT');
                    v307;
                    const v308 = process.removeAllListeners('SIGTERM');
                    v308;
                    const v310 = function () {
                        const v309 = process.exit();
                        return v309;
                    };
                    const v311 = _this.stop(v310);
                    return v311;
                };
                return v312;
            };
            exit = v313(this);
            const v314 = process.on('SIGINT', exit);
            v314;
            const v315 = process.on('SIGTERM', exit);
            return v315;
        };
        v306._bindCloseEvents = v316;
        const v317 = Server.prototype;
        const v329 = function () {
            const v318 = this.options;
            const v319 = v318.logs;
            if (v319) {
                const v320 = this.options;
                const v321 = v320.logs;
                const v322 = typeof v321;
                const v323 = v322 === 'string';
                if (v323) {
                    const v324 = this.options;
                    const v325 = v324.logs;
                    const v326 = { flags: 'a' };
                    const v327 = fs.createWriteStream(v325, v326);
                    return this._logger = v327;
                } else {
                    const v328 = console.log;
                    return this._log = v328;
                }
            }
        };
        v317._initLogs = v329;
        const v330 = Server.prototype;
        const v429 = function (req, res) {
            var filePath;
            var time;
            time = new Date();
            filePath = null;
            const v335 = function (_this) {
                const v334 = function (resolve, reject) {
                    var uri;
                    const v331 = req.url;
                    uri = url.parse(v331);
                    const v332 = uri.pathname;
                    const v333 = resolve(v332);
                    return v333;
                };
                return v334;
            };
            const v336 = v335(this);
            const v337 = new Promise(v336);
            const v347 = function (_this) {
                const v346 = function (pathname) {
                    filePath = pathname;
                    const v338 = _this.options;
                    const v339 = v338.index;
                    const v340 = '/' + v339;
                    filePath = filePath.replace(/\/$/, v340);
                    filePath = filePath.replace(/^\//, '');
                    const v341 = process.cwd();
                    const v342 = _this.options;
                    const v343 = v342.root;
                    const v344 = v343 || './';
                    filePath = path.resolve(v341, v344, filePath);
                    const v345 = _this.processRequest(res, filePath);
                    return v345;
                };
                return v346;
            };
            const v348 = v347(this);
            const v359 = function (_this) {
                const v358 = function (err) {
                    const v349 = err.message;
                    const v350 = 'Message: ' + v349;
                    const v351 = v350 + '\nURL: ';
                    const v352 = req.url;
                    const v353 = v351 + v352;
                    const v354 = v353 + '\n\n';
                    const v355 = err.stack;
                    const v356 = v354 + v355;
                    const v357 = _this.errorCode(res, 400, v356);
                    return v357;
                };
                return v358;
            };
            const v360 = v359(this);
            const v361 = v337.then(v348, v360);
            const v385 = function (_this) {
                const v384 = function (err) {
                    const v362 = err.code;
                    const v363 = v362 === 'ENOENT';
                    if (v363) {
                        const v364 = err.path;
                        const v365 = _this.handlerNotFound(res, v364);
                        return v365;
                    } else {
                        const v366 = time.toJSON();
                        const v367 = '[' + v366;
                        const v368 = v367 + '] Error: ';
                        const v369 = err.message;
                        const v370 = v368 + v369;
                        const v371 = v370 + ', Code: ';
                        const v372 = err.code;
                        const v373 = v371 + v372;
                        const v374 = _this.log(v373);
                        v374;
                        const v375 = err.message;
                        const v376 = 'Message: ' + v375;
                        const v377 = v376 + '\nCode: ';
                        const v378 = err.code;
                        const v379 = v377 + v378;
                        const v380 = v379 + '\n\n';
                        const v381 = err.stack;
                        const v382 = v380 + v381;
                        const v383 = _this.errorCode(res, 500, v382);
                        return v383;
                    }
                };
                return v384;
            };
            const v386 = v385(this);
            const v387 = v361['catch'](v386);
            const v404 = function (_this) {
                const v403 = function (err) {
                    const v388 = time.toJSON();
                    const v389 = '[' + v388;
                    const v390 = v389 + '] Error: ';
                    const v391 = err.message;
                    const v392 = v390 + v391;
                    const v393 = _this.log(v392);
                    v393;
                    const v394 = err.message;
                    const v395 = 'Message: ' + v394;
                    const v396 = v395 + '\nCode: ';
                    const v397 = err.code;
                    const v398 = v396 + v397;
                    const v399 = v398 + '\n\n';
                    const v400 = err.stack;
                    const v401 = v399 + v400;
                    const v402 = _this.errorCode(res, 500, v401);
                    return v402;
                };
                return v403;
            };
            const v405 = v404(this);
            const v406 = v387['catch'](v405);
            const v426 = function (_this) {
                const v425 = function (code) {
                    var host;
                    var log;
                    const v407 = req.headers;
                    const v408 = v407.host;
                    const v409 = _this.options;
                    const v410 = v409.port;
                    const v411 = 'localhost:' + v410;
                    const v412 = v408 || v411;
                    const v413 = req.url;
                    host = path.join(v412, v413);
                    const v414 = time.toJSON();
                    const v415 = '[' + v414;
                    log = v415 + ']';
                    const v416 = Date.now();
                    const v417 = v416 - time;
                    const v418 = ' (+' + v417;
                    log += v418 + 'ms):';
                    log += ' ' + code;
                    log += ' ' + host;
                    if (filePath) {
                        log += ' - ' + filePath;
                    }
                    const v419 = req.headers;
                    const v420 = v419['user-agent'];
                    if (v420) {
                        const v421 = req.headers;
                        const v422 = v421['user-agent'];
                        const v423 = ' (' + v422;
                        log += v423 + ')';
                    }
                    const v424 = _this.log(log);
                    return v424;
                };
                return v425;
            };
            const v427 = v426(this);
            const v428 = v406.then(v427);
            return v428;
        };
        v330.request = v429;
        const v430 = Server.prototype;
        const v436 = function (filePath) {
            var headers;
            const v431 = this.name;
            const v432 = v431 + '/';
            const v433 = this.version;
            const v434 = v432 + v433;
            headers['Server'] = v434;
            headers = {};
            headers = {};
            if (filePath) {
                const v435 = mime.lookup(filePath);
                headers['Content-Type'] = v435;
            }
            return headers;
        };
        v430.getHeaders = v436;
        const v437 = Server.prototype;
        const v441 = function (res, filePath) {
            var handler;
            if (handler = this.handle(filePath)) {
                const v438 = this(res, filePath);
                const v439 = handler.call(v438);
                return v439;
            } else {
                const v440 = this.handlerStaticFile(res, filePath);
                return v440;
            }
        };
        v437.processRequest = v441;
        const v442 = Server.prototype;
        const v445 = function (filePath) {
            var handlers;
            var pattern;
            handlers = _.result(this, 'handlers');
            for (pattern in handlers) {
                const v443 = minimatch(filePath, pattern);
                if (v443) {
                    const v444 = handlers[pattern];
                    return v444;
                }
            }
            return null;
        };
        v442.handle = v445;
        const v446 = Server.prototype;
        const v448 = function () {
            const v447 = {};
            return v447;
        };
        v446.handlers = v448;
        const v449 = Server.prototype;
        const v467 = function (res, filePath) {
            var server;
            server = this;
            const v465 = function (resolve, reject) {
                const v450 = fs.createReadStream(filePath);
                const v453 = function () {
                    const v451 = server.getHeaders(filePath);
                    const v452 = res.writeHead(200, v451);
                    return v452;
                };
                const v454 = v450.on('open', v453);
                const v456 = function (err) {
                    const v455 = reject(err);
                    return v455;
                };
                const v457 = v454.on('error', v456);
                const v459 = function (data) {
                    const v458 = res.write(data);
                    return v458;
                };
                const v460 = v457.on('data', v459);
                const v463 = function () {
                    const v461 = res.end();
                    v461;
                    const v462 = resolve(200);
                    return v462;
                };
                const v464 = v460.on('end', v463);
                return v464;
            };
            const v466 = new Promise(v465);
            return v466;
        };
        v449.handlerStaticFile = v467;
        const v468 = Server.prototype;
        const v501 = function (res, filePath) {
            var errorPath;
            var notFound;
            const v472 = function (_this) {
                const v471 = function () {
                    const v469 = 'Path: ' + filePath;
                    const v470 = _this.errorCode(res, 404, v469);
                    return v470;
                };
                return v471;
            };
            notFound = v472(this);
            const v473 = this.options;
            const v474 = v473['404'];
            const v475 = !v474;
            if (v475) {
                const v476 = notFound();
                return v476;
            }
            const v477 = process.cwd();
            const v478 = this.options;
            const v479 = v478['404'];
            errorPath = path.resolve(v477, v479);
            const v498 = function (_this) {
                const v497 = function (resolve, reject) {
                    const v480 = fs.createReadStream(errorPath);
                    const v485 = function () {
                        const v481 = this.getHeaders();
                        const v482 = { 'Content-Type': 'text/html' };
                        const v483 = _.extend(v481, v482);
                        const v484 = res.writeHead(404, v483);
                        return v484;
                    };
                    const v486 = v480.on('open', v485);
                    const v488 = function (err) {
                        const v487 = reject(err);
                        return v487;
                    };
                    const v489 = v486.on('error', v488);
                    const v491 = function (data) {
                        const v490 = res.write(data);
                        return v490;
                    };
                    const v492 = v489.on('data', v491);
                    const v495 = function () {
                        const v493 = res.end();
                        v493;
                        const v494 = resolve(404);
                        return v494;
                    };
                    const v496 = v492.on('end', v495);
                    return v496;
                };
                return v497;
            };
            const v499 = v498(this);
            const v500 = new Promise(v499);
            return v500;
        };
        v468.handlerNotFound = v501;
        const v502 = Server.prototype;
        const v518 = function (res, code, text) {
            const v503 = text == null;
            if (v503) {
                text = '';
            }
            if (text) {
                const v504 = '<pre>' + text;
                text = v504 + '</pre>';
            }
            const v505 = this.getHeaders();
            const v506 = { 'Content-Type': 'text/html' };
            const v507 = _.extend(v505, v506);
            const v508 = res.writeHead(code, v507);
            v508;
            const v509 = '<h1>' + code;
            const v510 = v509 + ' ';
            const v511 = http.STATUS_CODES;
            const v512 = v511[code];
            const v513 = v510 + v512;
            const v514 = v513 + '</h1>';
            const v515 = v514 + text;
            const v516 = res.write(v515);
            v516;
            const v517 = res.end();
            v517;
            return code;
        };
        v502.errorCode = v518;
        const v519 = Server.prototype;
        const v529 = function (string) {
            var ref;
            const v520 = (ref = this._logger) != null;
            if (v520) {
                const v521 = string + '\n';
                const v522 = ref.write(v521);
                v522;
            }
            const v523 = this._log;
            const v524 = typeof v523;
            const v525 = v524 === 'function';
            const v526 = this._log(string);
            const v527 = void 0;
            let v528;
            if (v525) {
                v528 = v526;
            } else {
                v528 = v527;
            }
            return v528;
        };
        v519.log = v529;
        return Server;
    };
    Server = v530();
    module.exports = Server;
};
const v532 = v531.call(this);
v532;
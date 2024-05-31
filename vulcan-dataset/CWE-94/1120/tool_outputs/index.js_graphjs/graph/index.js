'use strict';
const topLogPrefix = 'larvitbase-api: ./index.js: ';
const ReqParser = require('larvitreqparser');
const Router = require('larvitrouter');
const semver = require('semver');
const LBase = require('larvitbase');
const path = require('path');
const Lfs = require('larvitfs');
const fs = require('fs');
const LUtils = require('larvitutils');
const Api = function (options) {
    const logPrefix = topLogPrefix + 'Api() - ';
    const that = this;
    let controllersFullPath;
    let lfs;
    let altControllerPaths;
    const v304 = {};
    that.routeCache = v304;
    const v305 = !options;
    if (v305) {
        options = {};
    }
    that.options = options;
    const v306 = that.options;
    const v307 = v306.log;
    const v308 = !v307;
    if (v308) {
        const lUtils = new LUtils();
        const v309 = that.options;
        v309.log = new lUtils.Log();
    }
    const v310 = that.options;
    const v311 = v310.log;
    that.log = v311;
    const v312 = that.options;
    const v313 = v312.routerOptions;
    const v314 = !v313;
    if (v314) {
        const v315 = that.options;
        const v316 = {};
        v315.routerOptions = v316;
    }
    const v317 = that.options;
    const v318 = v317.routerOptions;
    const v319 = v318.controllersPath;
    const v320 = !v319;
    if (v320) {
        const v321 = that.options;
        const v322 = v321.routerOptions;
        v322.controllersPath = 'controllers';
    }
    const v323 = that.options;
    const v324 = v323.routerOptions;
    const v325 = v324.basePath;
    const v326 = !v325;
    if (v326) {
        const v329 = process.cwd();
        v328.basePath = v329;
    }
    const v330 = that.options;
    const v331 = v330.routerOptions;
    const v332 = v331.routes;
    const v333 = Array.isArray(v332);
    const v334 = !v333;
    if (v334) {
        const v335 = that.options;
        const v336 = v335.routerOptions;
        v336.routes = [];
    }
    const v337 = that.options;
    const v338 = v337.baseOptions;
    const v339 = !v338;
    if (v339) {
        const v340 = that.options;
        const v341 = {};
        v340.baseOptions = v341;
    }
    const v342 = options.baseOptions;
    const v343 = v342.middleware;
    const v344 = Array.isArray(v343);
    const v345 = !v344;
    if (v345) {
        const v346 = options.baseOptions;
        v346.middleware = [];
    }
    const v347 = that.options;
    const v348 = v347.reqParserOptions;
    const v349 = !v348;
    if (v349) {
        const v350 = that.options;
        const v351 = {};
        v350.reqParserOptions = v351;
    }
    const v352 = that.options;
    const v353 = v352.baseOptions;
    const v354 = v353.log;
    const v355 = !v354;
    if (v355) {
        const v356 = that.options;
        const v357 = v356.baseOptions;
        const v358 = that.log;
        v357.log = v358;
    }
    const v359 = that.options;
    const v360 = v359.routerOptions;
    const v361 = v360.log;
    const v362 = !v361;
    if (v362) {
        const v363 = that.options;
        const v364 = v363.routerOptions;
        const v365 = that.log;
        v364.log = v365;
    }
    const v366 = that.options;
    const v367 = v366.reqParserOptions;
    const v368 = v367.log;
    const v369 = !v368;
    if (v369) {
        const v370 = that.options;
        const v371 = v370.reqParserOptions;
        const v372 = that.log;
        v371.log = v372;
    }
    const v373 = options.baseOptions;
    const v374 = v373.middleware;
    that.middleware = v374;
    const v375 = that.options;
    const v376 = v375.routerOptions;
    const v377 = v376.basePath;
    const v378 = { 'basePath': v377 };
    lfs = new Lfs(v378);
    altControllerPaths = lfs.getPathsSync('controllers');
    const v379 = that.options;
    const v380 = v379.routerOptions;
    const v381 = v380.basePath;
    const v382 = that.options;
    const v383 = v382.routerOptions;
    const v384 = v383.controllersPath;
    controllersFullPath = path.join(v381, v384);
    const v385 = fs.existsSync(controllersFullPath);
    if (v385) {
        const v386 = fs.readdirSync(controllersFullPath);
        const v396 = function (file) {
            const v387 = String(file);
            const v388 = v387 + '.0';
            let versionStr = semver.clean(v388);
            const v389 = controllersFullPath + '/';
            const v390 = v389 + file;
            const v391 = fs.statSync(v390);
            const v392 = v391.isDirectory();
            const v393 = semver.valid(versionStr);
            const v394 = v393 !== null;
            const v395 = v392 && v394;
            if (v395) {
                return true;
            } else {
                return false;
            }
        };
        const v397 = v386.filter(v396);
        that.apiVersions = v397;
    } else {
        that.apiVersions = [];
        const v398 = that.log;
        const v399 = logPrefix + 'No controllers folder detected';
        const v400 = v398.info(v399);
        v400;
    }
    const v401 = that.apiVersions;
    const v405 = function (a, b) {
        const v402 = a + '.0';
        const v403 = b + '.0';
        const v404 = semver.gt(v402, v403);
        return v404;
    };
    const v406 = v401.sort(v405);
    v406;
    const v407 = that.options;
    const v408 = v407.routerOptions;
    that.router = new Router(v408);
    const v409 = that.options;
    const v410 = v409.reqParserOptions;
    that.reqParser = new ReqParser(v410);
    const v411 = that.middleware;
    const v414 = function (req, res, cb) {
        const v412 = that.reqParser;
        const v413 = v412.parse(req, res, cb);
        v413;
    };
    const v415 = v411.push(v414);
    v415;
    const v416 = that.middleware;
    const v440 = function (req, res, cb) {
        const v417 = req.url;
        const v418 = v417.split('/');
        const v419 = v418[1];
        const v420 = v419 + '.0';
        const v421 = semver.valid(v420);
        const v422 = !v421;
        const v423 = that.apiVersions;
        const v424 = v423.length;
        const v425 = v422 && v424;
        if (v425) {
            const v426 = that.apiVersions;
            const v427 = that.apiVersions;
            const v428 = v427.length;
            const v429 = v428 - 1;
            const v430 = v426[v429];
            const v431 = '/' + v430;
            const v432 = req.url;
            req.url = v431 + v432;
        }
        const v433 = req.url;
        const v434 = v433.split('/');
        const v435 = v434[1];
        req.apiVersion = v435;
        const v436 = req.url;
        const v437 = v436.split('?');
        const v438 = v437[0];
        req.urlBase = v438;
        const v439 = cb();
        v439;
    };
    const v441 = v416.push(v440);
    v441;
    const v442 = that.middleware;
    const v560 = function (req, res, cb) {
        let readmeFile = false;
        const v443 = that.routeCache;
        const v444 = req.urlBase;
        const v445 = v443[v444];
        if (v445) {
            const v446 = that.routeCache;
            const v447 = req.urlBase;
            const rc = v446[v447];
            const v448 = rc.type;
            const v449 = v448 === 'readme';
            if (v449) {
                const v450 = res.setHeader('Content-Type', 'text/markdown; charset=UTF-8');
                v450;
                const v451 = rc.data;
                const v452 = res.end(v451);
                v452;
                return;
            } else {
                const v453 = that.routeCache;
                const v454 = req.urlBase;
                const v455 = v453[v454];
                req.routed = v455;
                const v456 = cb();
                return v456;
            }
        }
        const v457 = that.routeCache;
        const v458 = Object.keys(v457);
        const v459 = v458.length;
        const v460 = v459 > 1000;
        if (v460) {
            const v461 = {};
            that.routeCache = v461;
        }
        const v462 = req.urlBase;
        const v463 = v462 === '/';
        const v464 = that.options;
        const v465 = v464.routerOptions;
        const v466 = v465.basePath;
        const v467 = path.join(v466, '/README.md');
        const v468 = lfs.getPathSync(v467);
        const v469 = v463 && v468;
        if (v469) {
            const v470 = that.options;
            const v471 = v470.routerOptions;
            const v472 = v471.basePath;
            readmeFile = path.join(v472, '/README.md');
        } else {
            const v473 = req.urlBase;
            const v474 = path.join(v473, '/README.md');
            const v475 = v474.substring(1);
            const v476 = lfs.getPathSync(v475);
            if (v476) {
                const v477 = req.urlBase;
                const v478 = path.join(v477, '/README.md');
                const v479 = v478.substring(1);
                readmeFile = lfs.getPathSync(v479);
            } else {
                const v480 = req.urlBase;
                const v481 = path.join('controllers/', v480, '/README.md');
                const v482 = lfs.getPathSync(v481);
                if (v482) {
                    const v483 = req.urlBase;
                    const v484 = path.join('controllers/', v483, '/README.md');
                    readmeFile = lfs.getPathSync(v484);
                } else {
                    const v485 = req.url;
                    const v486 = v485.split('/');
                    const v487 = v486[1];
                    const v488 = v487 + '.0';
                    const v489 = semver.valid(v488);
                    const v490 = lfs.getPathSync('README.md');
                    const v491 = v489 && v490;
                    const v492 = req.urlBase;
                    const v493 = req.urlBase;
                    const v494 = v493.split('/');
                    const v495 = v494[1];
                    const v496 = '/' + v495;
                    const v497 = v496 + '/';
                    const v498 = v492 === v497;
                    const v499 = v491 && v498;
                    if (v499) {
                        readmeFile = lfs.getPathSync('README.md');
                    } else {
                        const v500 = req.urlBase;
                        const v501 = v500 === '/';
                        const v502 = req.url;
                        const v503 = v502.split('/');
                        const v504 = v503[1];
                        const v505 = v504 + '.0';
                        const v506 = semver.valid(v505);
                        const v507 = req.urlBase;
                        const v508 = req.url;
                        const v509 = v508.split('/');
                        const v510 = v509[1];
                        const v511 = '/' + v510;
                        const v512 = v511 + '/';
                        const v513 = v507 === v512;
                        const v514 = v506 && v513;
                        const v515 = v501 || v514;
                        if (v515) {
                            const v516 = res.end('API is up and running. This API contains no README.md');
                            return v516;
                        }
                    }
                }
            }
        }
        if (readmeFile) {
            const v517 = res.setHeader('Content-Type', 'text/markdown; charset=UTF-8');
            v517;
            const v523 = function (err, data) {
                if (err) {
                    const v518 = cb(err);
                    return v518;
                }
                const v519 = that.routeCache;
                const v520 = req.urlBase;
                const v521 = {};
                v521['type'] = 'readme';
                v521['data'] = data;
                v519[v520] = v521;
                const v522 = res.end(data);
                v522;
            };
            const v524 = fs.readFile(readmeFile, v523);
            return v524;
        }
        const v525 = that.router;
        const v526 = req.urlBase;
        const v558 = function (err, result) {
            if (err) {
                const v527 = cb(err);
                return v527;
            }
            const v528 = Object.keys(result);
            const v529 = v528.length;
            const v530 = v529 === 0;
            if (v530) {
                let i = 0;
                const v531 = altControllerPaths[i];
                let v532 = v531 !== undefined;
                while (v532) {
                    let stat;
                    const v534 = altControllerPaths[i];
                    const v535 = fs.existsSync(v534);
                    const v536 = !v535;
                    if (v536) {
                        continue;
                    }
                    const v537 = altControllerPaths[i];
                    stat = fs.statSync(v537);
                    const v538 = stat.isDirectory();
                    if (v538) {
                        const v539 = altControllerPaths[i];
                        const v540 = req.urlBase;
                        const v541 = path.join(v539, v540);
                        const v542 = v541 + '.js';
                        const v543 = fs.existsSync(v542);
                        if (v543) {
                            const v544 = altControllerPaths[i];
                            const v545 = req.urlBase;
                            const v546 = path.join(v544, v545);
                            const v547 = v546 + '.js';
                            const v548 = req.urlBase;
                            const v549 = {};
                            v549['controllerFullPath'] = v547;
                            v549['controllerPath'] = v548;
                            req.routed = v549;
                            const v550 = that.routeCache;
                            const v551 = req.urlBase;
                            const v552 = req.routed;
                            v550[v551] = v552;
                            break;
                        }
                    }
                    const v533 = i++;
                    v532 = v531 !== undefined;
                }
            }
            const v553 = req.routed;
            const v554 = !v553;
            if (v554) {
                const v555 = that.routeCache;
                const v556 = req.urlBase;
                v555[v556] = result;
                req.routed = result;
            }
            const v557 = cb();
            v557;
        };
        const v559 = v525.resolve(v526, v558);
        v559;
    };
    const v561 = v442.push(v560);
    v561;
    const v562 = that.middleware;
    const v571 = function (req, res, cb) {
        const v563 = req.routed;
        const v564 = v563.controllerFullPath;
        const v565 = !v564;
        if (v565) {
            res.statusCode = 404;
            res.data = '"URL endpoint not found"';
            const v566 = cb();
            v566;
        } else {
            const v567 = req.routed;
            const v568 = v567.controllerFullPath;
            const v569 = require(v568);
            const v570 = v569(req, res, cb);
            v570;
        }
    };
    const v572 = v562.push(v571);
    v572;
    const v573 = that.middleware;
    const v583 = function (req, res, cb) {
        let sendData = res.data;
        const v574 = res.setHeader('Content-Type', 'application/json; charset=UTF-8');
        v574;
        try {
            const v575 = typeof sendData;
            const v576 = v575 !== 'string';
            const v577 = Buffer.isBuffer(sendData);
            const v578 = !v577;
            const v579 = v576 && v578;
            if (v579) {
                sendData = JSON.stringify(sendData);
            }
        } catch (err) {
            const v580 = cb(err);
            return v580;
        }
        const v581 = res.end(sendData);
        v581;
        const v582 = cb();
        v582;
    };
    const v584 = v573.push(v583);
    v584;
    const v585 = that.middleware;
    const v588 = function (req, res, cb) {
        const v586 = that.reqParser;
        const v587 = v586.clean(req, res, cb);
        v587;
    };
    const v589 = v585.push(v588);
    v589;
};
;
const v590 = Api.prototype;
const start = function (cb) {
    const that = this;
    const v591 = that.options;
    const v592 = v591.baseOptions;
    that.base = new LBase(v592);
    const v593 = that.base;
    const v594 = v593.start(cb);
    v594;
    const v595 = that.base;
    const v600 = function (err, req, res) {
        res.statusCode = 500;
        const v596 = err.message;
        const v597 = '"Internal server error: ' + v596;
        const v598 = v597 + '"';
        const v599 = res.end(v598);
        v599;
    };
    const v601 = v595.on('error', v600);
    v601;
};
v590.start = start;
const v602 = Api.prototype;
const v606 = function (cb) {
    const that = this;
    const v603 = that.base;
    const v604 = v603.httpServer;
    const v605 = v604.close(cb);
    v605;
};
v602.stop = v606;
module.exports = Api;
exports = module.exports;
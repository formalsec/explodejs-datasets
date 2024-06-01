var fs = require('fs');
var cleanUrl = function (url) {
    url = decodeURIComponent(url);
    const v260 = url.indexOf('..');
    const v261 = v260.length;
    let v262 = v261 > 0;
    while (v262) {
        url = url.replace('..', '');
        v262 = v261 > 0;
    }
    return url;
};
const v518 = function (vpath, path, req, res, readOnly, logHeadRequests) {
    var writeError = function (err, code) {
        code = code || 500;
        const v263 = 'Error ' + code;
        const v264 = v263 + ': ';
        const v265 = v264 + err;
        const v266 = console.log(v265);
        v266;
        try {
            res.statusCode = code;
            const v267 = res.setHeader('Content-Type', 'application/json');
            v267;
            const v268 = JSON.stringify(err);
            const v269 = res.end(v268);
            v269;
        } catch (resErr) {
            const v270 = 'failed to write error to response: ' + resErr;
            const v271 = console.log(v270);
            v271;
        }
    };
    const v272 = path.lastIndexOf('/');
    const v273 = path.length;
    const v274 = v273 - 1;
    const v275 = v272 !== v274;
    if (v275) {
        path += '/';
    }
    const v276 = require('url');
    const v277 = req.url;
    var parsedUrl = v276.parse(v277);
    let query;
    const v278 = {};
    const v279 = require('querystring');
    const v280 = parsedUrl.query;
    const v281 = v279.parse(v280);
    if (query) {
        query = v278;
    } else {
        query = v281;
    }
    const v282 = parsedUrl.pathname;
    var url = cleanUrl(v282);
    const v283 = url.lastIndexOf('/');
    const v284 = url.length;
    const v285 = v284 - 1;
    const v286 = v283 === v285;
    if (v286) {
        const v287 = url.length;
        url = url.slice(0, v287);
    }
    const v288 = url[0];
    const v289 = v288 === '/';
    if (v289) {
        const v290 = url.length;
        url = url.slice(1, v290);
    }
    const v291 = url.indexOf(vpath);
    const v292 = v291 != 0;
    const v293 = vpath && v292;
    if (v293) {
        const v294 = console.log('url does not begin with vpath');
        v294;
        const v295 = 'url [' + url;
        const v296 = v295 + '] does not begin with vpath [';
        const v297 = v296 + vpath;
        const v298 = v297 + ']';
        throw v298;
    }
    const v299 = req.method;
    const v300 = v299 != 'HEAD';
    if (v300) {
        const v301 = req.method;
        const v302 = v301 + ' ';
        const v303 = req.url;
        const v304 = v302 + v303;
        const v305 = console.log(v304);
        v305;
    }
    let relativePath;
    const v306 = url.indexOf(vpath);
    const v307 = v306 == 0;
    const v308 = vpath && v307;
    const v309 = vpath.length;
    const v310 = v309 + 1;
    const v311 = url.length;
    const v312 = url.slice(v310, v311);
    const v313 = path + v312;
    const v314 = path + url;
    if (v308) {
        relativePath = v313;
    } else {
        relativePath = v314;
    }
    try {
        const v315 = req.method;
        const v316 = v315 != 'GET';
        const v317 = readOnly && v316;
        if (v317) {
            const v318 = req.method;
            const v319 = v318 + ' forbidden on this resource';
            const v320 = writeError(v319, 403);
            v320;
        } else {
            const v321 = req.method;
            switch (v321) {
            case 'HEAD':
                if (logHeadRequests) {
                    const v322 = 'head: ' + relativePath;
                    const v323 = console.log(v322);
                    v323;
                }
                const v350 = function (err, stats) {
                    if (err) {
                        const v324 = writeError(err);
                        v324;
                    } else {
                        const v325 = stats.mtime;
                        const v326 = res.setHeader('Last-Modified', v325);
                        v326;
                        const v327 = res.setHeader('Expires', 'Sat, 01 Jan 2000 00:00:00 GMT');
                        v327;
                        const v328 = res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
                        v328;
                        const v329 = res.setHeader('Cache-Control', 'post-check=0, pre-check=0');
                        v329;
                        const v330 = res.setHeader('Pragma', 'no-cache');
                        v330;
                        const v331 = stats.isDirectory();
                        if (v331) {
                            const v332 = query.type;
                            const v333 = v332 == 'json';
                            const v334 = query.dir;
                            const v335 = v334 == 'json';
                            const v336 = v333 || v335;
                            let v337;
                            if (v336) {
                                v337 = 'application/json';
                            } else {
                                v337 = 'text/html';
                            }
                            const v338 = res.setHeader('Content-Type', v337);
                            v338;
                        } else {
                            const v339 = query.type;
                            const v340 = v339 == 'json';
                            const v341 = query.dir;
                            const v342 = v341 == 'json';
                            const v343 = v340 || v342;
                            if (v343) {
                                const v344 = res.setHeader('Content-Type', 'application/json');
                                v344;
                            } else {
                                const v345 = require('mime');
                                var type = v345.lookup(relativePath);
                                const v346 = res.setHeader('Content-Type', type);
                                v346;
                                const v347 = stats.size;
                                const v348 = res.setHeader('Content-Length', v347);
                                v348;
                            }
                        }
                        const v349 = res.end();
                        v349;
                    }
                };
                const v351 = fs.stat(relativePath, v350);
                v351;
                break;
            case 'GET':
                const v352 = 'relativePath: ' + relativePath;
                const v353 = console.log(v352);
                v353;
                const v354 = url === 'favicon.ico';
                if (v354) {
                    const v355 = res.end();
                    v355;
                } else {
                    const v435 = function (err, stats) {
                        if (err) {
                            const v356 = writeError(err);
                            v356;
                        } else {
                            const v357 = stats.isDirectory();
                            if (v357) {
                                const v358 = stats.mtime;
                                const v359 = res.setHeader('Last-Modified', v358);
                                v359;
                                const v360 = res.setHeader('Expires', 'Sat, 01 Jan 2000 00:00:00 GMT');
                                v360;
                                const v361 = res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
                                v361;
                                const v362 = res.setHeader('Cache-Control', 'post-check=0, pre-check=0');
                                v362;
                                const v363 = res.setHeader('Pragma', 'no-cache');
                                v363;
                                const v364 = 'reading directory ' + relativePath;
                                const v365 = console.log(v364);
                                v365;
                                const v408 = function (err, files) {
                                    if (err) {
                                        const v366 = console.log('writeError');
                                        v366;
                                        const v367 = writeError(err);
                                        v367;
                                    } else {
                                        var results = [];
                                        var search = {};
                                        const v406 = function (files) {
                                            const v368 = files.length;
                                            if (v368) {
                                                var file = files.shift();
                                                const v369 = relativePath + '/';
                                                const v370 = v369 + file;
                                                const v379 = function (err, stats) {
                                                    if (err) {
                                                        const v371 = writeError(err);
                                                        v371;
                                                    } else {
                                                        stats.name = file;
                                                        const v372 = stats.isFile();
                                                        stats.isFile = v372;
                                                        const v373 = stats.isDirectory();
                                                        stats.isDirectory = v373;
                                                        const v374 = stats.isBlockDevice();
                                                        stats.isBlockDevice = v374;
                                                        const v375 = stats.isFIFO();
                                                        stats.isFIFO = v375;
                                                        const v376 = stats.isSocket();
                                                        stats.isSocket = v376;
                                                        const v377 = results.push(stats);
                                                        v377;
                                                        const v378 = search.stats(files);
                                                        v378;
                                                    }
                                                };
                                                const v380 = fs.stat(v370, v379);
                                                v380;
                                            } else {
                                                const v381 = query.type;
                                                const v382 = v381 == 'json';
                                                const v383 = query.dir;
                                                const v384 = v383 == 'json';
                                                const v385 = v382 || v384;
                                                if (v385) {
                                                    const v386 = res.setHeader('Content-Type', 'application/json');
                                                    v386;
                                                    const v387 = JSON.stringify(results);
                                                    const v388 = res.write(v387);
                                                    v388;
                                                    const v389 = res.end();
                                                    v389;
                                                } else {
                                                    const v390 = res.setHeader('Content-Type', 'text/html');
                                                    v390;
                                                    const v391 = res.write('<html><body>');
                                                    v391;
                                                    var f = 0;
                                                    const v392 = results.length;
                                                    let v393 = f < v392;
                                                    while (v393) {
                                                        const v395 = results[f];
                                                        var name = v395.name;
                                                        const v396 = url + '/';
                                                        var normalized = v396 + name;
                                                        const v397 = normalized[0];
                                                        let v398 = v397 == '/';
                                                        while (v398) {
                                                            const v399 = normalized.length;
                                                            normalized = normalized.slice(1, v399);
                                                            v398 = v397 == '/';
                                                        }
                                                        const v400 = '\r\n<p><a href="/' + normalized;
                                                        const v401 = v400 + '">';
                                                        const v402 = v401 + name;
                                                        const v403 = v402 + '</a></p>';
                                                        const v404 = res.write(v403);
                                                        v404;
                                                        const v394 = f++;
                                                        v393 = f < v392;
                                                    }
                                                    const v405 = res.end('\r\n</body></html>');
                                                    v405;
                                                }
                                            }
                                        };
                                        search.stats = v406;
                                        const v407 = search.stats(files);
                                        v407;
                                    }
                                };
                                const v409 = fs.readdir(relativePath, v408);
                                v409;
                            } else {
                                const v410 = 'reading file ' + relativePath;
                                const v411 = console.log(v410);
                                v411;
                                const v412 = query.type;
                                const v413 = v412 == 'json';
                                const v414 = query.dir;
                                const v415 = v414 == 'json';
                                const v416 = v413 || v415;
                                if (v416) {
                                    var type = 'application/json';
                                    const v417 = res.setHeader('Content-Type', type);
                                    v417;
                                    const v425 = function (err, data) {
                                        if (err) {
                                            const v418 = writeError(err);
                                            v418;
                                        } else {
                                            const v419 = data.toString();
                                            const v420 = require('mime');
                                            const v421 = v420.lookup(relativePath);
                                            const v422 = {
                                                data: v419,
                                                type: v421
                                            };
                                            const v423 = JSON.stringify(v422);
                                            const v424 = res.end(v423);
                                            v424;
                                        }
                                    };
                                    const v426 = fs.readFile(relativePath, v425);
                                    v426;
                                } else {
                                    const v427 = require('mime');
                                    var type = v427.lookup(relativePath);
                                    const v428 = res.setHeader('Content-Type', type);
                                    v428;
                                    const v433 = function (err, data) {
                                        if (err) {
                                            const v429 = writeError(err);
                                            v429;
                                        } else {
                                            const v430 = data.length;
                                            const v431 = res.setHeader('Content-Length', v430);
                                            v431;
                                            const v432 = res.end(data);
                                            v432;
                                        }
                                    };
                                    const v434 = fs.readFile(relativePath, v433);
                                    v434;
                                }
                            }
                        }
                    };
                    const v436 = fs.stat(relativePath, v435);
                    v436;
                }
                return;
            case 'PUT':
                const v437 = 'writing ' + relativePath;
                const v438 = console.log(v437);
                v438;
                var stream = fs.createWriteStream(relativePath);
                stream.ok = true;
                const v439 = req.pipe(stream);
                v439;
                const v442 = function () {
                    const v440 = stream.ok;
                    if (v440) {
                        const v441 = res.end();
                        v441;
                    }
                };
                const v443 = stream.on('close', v442);
                v443;
                const v445 = function (err) {
                    stream.ok = false;
                    const v444 = writeError(err);
                    v444;
                };
                const v446 = stream.on('error', v445);
                v446;
                return;
            case 'POST':
                const v447 = query.rename;
                if (v447) {
                    const v448 = 'rename: ' + relativePath;
                    const v449 = console.log(v448);
                    v449;
                    const v450 = query.rename;
                    const v451 = cleanUrl(v450);
                    query.rename = v451;
                    if (vpath) {
                        const v452 = query.rename;
                        const v453 = '/' + vpath;
                        const v454 = v453 + '/';
                        const v455 = v452.indexOf(v454);
                        const v456 = v455 == 0;
                        if (v456) {
                            const v457 = query.rename;
                            const v458 = vpath.length;
                            const v459 = v458 + 2;
                            const v460 = query.rename;
                            const v461 = v460.length;
                            const v462 = v457.slice(v459, v461);
                            query.rename = v462;
                        } else {
                            const v463 = query.rename;
                            const v464 = 'renamed url [' + v463;
                            const v465 = v464 + '] does not begin with vpath [';
                            const v466 = v465 + vpath;
                            const v467 = v466 + ']';
                            throw v467;
                        }
                    }
                    const v468 = 'renaming ' + relativePath;
                    const v469 = v468 + ' to ';
                    const v470 = v469 + path;
                    const v471 = query.rename;
                    const v472 = v470 + v471;
                    const v473 = console.log(v472);
                    v473;
                    const v474 = query.rename;
                    const v475 = path + v474;
                    const v478 = function (err) {
                        if (err) {
                            const v476 = writeError(err);
                            v476;
                        } else {
                            const v477 = res.end();
                            v477;
                        }
                    };
                    const v479 = fs.rename(relativePath, v475, v478);
                    v479;
                } else {
                    const v480 = query.create;
                    const v481 = v480 == 'directory';
                    if (v481) {
                        const v482 = 'creating directory ' + relativePath;
                        const v483 = console.log(v482);
                        v483;
                        const v486 = function (err) {
                            if (err) {
                                const v484 = writeError(err);
                                v484;
                            } else {
                                const v485 = res.end();
                                v485;
                            }
                        };
                        const v487 = fs.mkdir(relativePath, 511, v486);
                        v487;
                    } else {
                        const v488 = 'relativePath: ' + relativePath;
                        const v489 = console.log(v488);
                        v489;
                        const v490 = 'valid queries are ' + url;
                        const v491 = v490 + '?rename=[new name] or ';
                        const v492 = v491 + url;
                        const v493 = v492 + '?create=directory';
                        const v494 = writeError(v493);
                        v494;
                    }
                }
                return;
            case 'DELETE':
                const v509 = function (err, stats) {
                    if (err) {
                        const v495 = writeError(err);
                        v495;
                    } else {
                        const v496 = stats.isDirectory();
                        if (v496) {
                            const v497 = 'deleting directory ' + relativePath;
                            const v498 = console.log(v497);
                            v498;
                            const v501 = function (err) {
                                if (err) {
                                    const v499 = writeError(err);
                                    v499;
                                } else {
                                    const v500 = res.end();
                                    v500;
                                }
                            };
                            const v502 = fs.rmdir(relativePath, v501);
                            v502;
                        } else {
                            const v503 = 'deleting file ' + relativePath;
                            const v504 = console.log(v503);
                            v504;
                            const v507 = function (err) {
                                if (err) {
                                    const v505 = writeError(err);
                                    v505;
                                } else {
                                    const v506 = res.end();
                                    v506;
                                }
                            };
                            const v508 = fs.unlink(relativePath, v507);
                            v508;
                        }
                    }
                };
                const v510 = fs.stat(relativePath, v509);
                v510;
                return;
            default:
                const v511 = 'unsupported: ' + relativePath;
                const v512 = console.log(v511);
                v512;
                const v513 = 'Method ' + method;
                const v514 = v513 + ' not allowed';
                const v515 = writeError(v514, 405);
                v515;
                return;
            }
        }
    } catch (err) {
        const v516 = 'unhandled error: ' + err;
        const v517 = writeError(v516);
        v517;
    }
};
exports.handleRequest = v518;
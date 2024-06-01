'use strict';
var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');
var zlib = require('zlib');
var util = require('./util.js');
var status = require('./json/status');
var mime = require('./json/mime');
var Server = function (req, res) {
    const v287 = Server.handle(req, res);
    v287;
};
Server.server = 'Node/V8';
Server.version = '1.0.0';
const init = function (options) {
    const v288 = typeof options;
    const v289 = v288 !== 'object';
    if (v289) {
        options = {};
    }
    const v290 = this.__proto__;
    v290.status = status;
    const v292 = util.transpose(mime);
    v291.mime = v292;
    const v293 = options.root;
    const v294 = v293 || '.';
    const v295 = path.resolve(v294);
    const v296 = path.normalize(v295);
    const v297 = options.index;
    const v298 = v297 || 'index.html';
    const v299 = options.method;
    const v300 = [
        'GET',
        'HEAD'
    ];
    const v301 = v299 || v300;
    const v302 = options.charset;
    const v303 = v302 || 'utf-8';
    const v304 = options.zip;
    const v305 = v304 || false;
    const v306 = options.cache;
    const v307 = v306 || 0;
    const v308 = options.header;
    const v309 = {};
    const v310 = v308 || v309;
    const v311 = {};
    v311.root = v296;
    v311.index = v298;
    v311.method = v301;
    v311.charset = v303;
    v311.zip = v305;
    v311.cache = v307;
    v311.header = v310;
    this.config = v311;
    return this;
};
Server.init = init;
const set = function (attribute, value) {
    const v312 = arguments.length;
    const v313 = v312 === 1;
    if (v313) {
        const v314 = this.config;
        const v315 = v314[attribute];
        v315;
    } else {
        const v316 = this.config;
        v316[attribute] = value;
    }
    switch (attribute) {
    case 'root':
        const v318 = this.config;
        const v319 = v318[attribute];
        const v320 = value || v319;
        const v321 = path.resolve(v320);
        const v322 = path.normalize(v321);
        v317[attribute] = v322;
        break;
    default:
    }
    return this;
};
Server.set = set;
const handle = function (req, res) {
    var me = this;
    var request = me.request(req);
    const v323 = me.config;
    const v324 = v323.method;
    const v325 = request.method;
    const v326 = v324.indexOf(v325);
    const v327 = -1;
    const v328 = v326 === v327;
    if (v328) {
        const v329 = me.response(res, 405);
        return v329;
    }
    const v330 = request.filename;
    const v387 = function (err, stats) {
        if (err) {
            const v331 = me.response(res, 404);
            v331;
        } else {
            const v332 = stats.isFile();
            if (v332) {
                const v333 = request.filename;
                const v334 = me.getContentType(v333);
                var header = {};
                header['Content-Type'] = v334;
                var cache = me.getCache(request, stats);
                const v335 = cache.ETag;
                const v336 = cache.Date;
                const v337 = cache.Expires;
                const v338 = cache.CacheControl;
                const v339 = cache.LastModified;
                const v340 = {
                    'ETag': v335,
                    'Date': v336,
                    'Expires': v337,
                    'Cache-Control': v338,
                    'Last-Modified': v339
                };
                header = util.merge(header, v340);
                const v341 = cache.modified;
                const v342 = !v341;
                if (v342) {
                    const v343 = me.response(res, 304, header);
                    v343;
                }
                const v344 = request.range;
                if (v344) {
                    const v345 = request.range;
                    const v346 = stats.size;
                    var range = me.getRange(v345, v346);
                    const v347 = -1;
                    const v348 = range !== v347;
                    const v349 = -2;
                    const v350 = range !== v349;
                    const v351 = v348 && v350;
                    if (v351) {
                        const v352 = range.AcceptRanges;
                        const v353 = range[0];
                        const v354 = v353.ContentRange;
                        const v355 = range[0];
                        const v356 = v355.ContentLength;
                        const v357 = {
                            'Accept-Ranges': v352,
                            'Content-Range': v354,
                            'Content-Length': v356
                        };
                        header = util.merge(header, v357);
                        const v358 = request.filename;
                        const v359 = range[0];
                        const v360 = {
                            file: v358,
                            range: v359
                        };
                        const v361 = me.stream(res, v360);
                        v361;
                        const v362 = me.response(res, 206, header);
                        v362;
                    } else {
                        const v363 = request.header;
                        const v364 = v363['Content-Range'];
                        const v365 = { 'Content-Range': v364 };
                        const v366 = me.response(res, 416, v365);
                        v366;
                    }
                } else {
                    const v367 = request.acceptEncoding;
                    var gzip = me.getGzip(v367);
                    const v368 = -1;
                    const v369 = gzip !== v368;
                    const v370 = -2;
                    const v371 = gzip !== v370;
                    const v372 = v369 && v371;
                    if (v372) {
                        const v373 = stats.size;
                        const v374 = {
                            'Content-Encoding': gzip,
                            'Transfer-Encoding': 'chunked',
                            'Content-Length': v373
                        };
                        header = util.merge(header, v374);
                    }
                    const v375 = me.response(res, 200, header);
                    v375;
                    const v376 = request.filename;
                    const v377 = {
                        file: v376,
                        gzip: gzip
                    };
                    const v378 = me.stream(res, v377);
                    v378;
                }
            } else {
                const v379 = stats.isDirectory();
                if (v379) {
                    const v380 = req.url;
                    const v381 = url.parse(v380);
                    const v382 = v381.pathname;
                    const v383 = v382 + '/';
                    const v384 = { 'Location': v383 };
                    const v385 = me.response(res, 301, v384);
                    v385;
                } else {
                    const v386 = me.response(res, 400);
                    v386;
                }
            }
        }
    };
    const v388 = fs.stat(v330, v387);
    v388;
    return me;
};
Server.handle = handle;
const stream = function (res, options) {
    var file = options.file;
    var range = options.range;
    var gzip = options.gzip;
    const v389 = range.start;
    const v390 = isNaN(v389);
    const v391 = !v390;
    const v392 = range && v391;
    const v393 = range.end;
    const v394 = isNaN(v393);
    const v395 = !v394;
    const v396 = v392 && v395;
    if (v396) {
        const v397 = range.start;
        const v398 = range.end;
        const v399 = {
            start: v397,
            end: v398
        };
        const v400 = fs.createReadStream(file, v399);
        const v401 = v400.pipe(res);
        v401;
    } else {
        var stream = fs.createReadStream(file);
        const v402 = gzip === 'gzip';
        if (v402) {
            const v403 = zlib.createGzip();
            const v404 = stream.pipe(v403);
            const v405 = v404.pipe(res);
            v405;
        } else {
            const v406 = gzip === 'deflate';
            if (v406) {
                const v407 = zlib.createDeflate();
                const v408 = stream.pipe(v407);
                const v409 = v408.pipe(res);
                v409;
            } else {
                const v410 = stream.pipe(res);
                v410;
            }
        }
    }
};
Server.stream = stream;
const v452 = function (str, size) {
    let index;
    const v411 = str.indexOf('=');
    const v412 = -1;
    if (str) {
        index = v411;
    } else {
        index = v412;
    }
    const v413 = -1;
    const v414 = index === v413;
    if (v414) {
        const v415 = -2;
        return v415;
    }
    const v416 = index + 1;
    const v417 = str.slice(v416);
    var arr = v417.split(',');
    var ranges = [];
    const v418 = str.slice(0, index);
    ranges.AcceptRanges = v418;
    var i = 0;
    const v419 = arr.length;
    let v420 = i < v419;
    while (v420) {
        const v422 = arr[i];
        var range = v422.split('-');
        const v423 = range[0];
        var start = parseInt(v423, 10);
        const v424 = range[1];
        var end = parseInt(v424, 10);
        const v425 = isNaN(start);
        if (v425) {
            start = size - end;
            end = size - 1;
        } else {
            const v426 = isNaN(end);
            if (v426) {
                end = size - 1;
            }
        }
        const v427 = size - 1;
        const v428 = end > v427;
        if (v428) {
            end = size - 1;
        }
        const v429 = isNaN(start);
        const v430 = !v429;
        const v431 = isNaN(end);
        const v432 = !v431;
        const v433 = v430 && v432;
        const v434 = start >= 0;
        const v435 = v433 && v434;
        const v436 = start <= end;
        const v437 = v435 && v436;
        if (v437) {
            const v438 = ranges.AcceptRanges;
            const v439 = v438 + ' ';
            const v440 = v439 + start;
            const v441 = v440 + '-';
            const v442 = v441 + end;
            const v443 = v442 + '/';
            const v444 = v443 + size;
            const v445 = end - start;
            const v446 = v445 + 1;
            const v447 = {
                ContentRange: v444,
                ContentLength: v446,
                start: start,
                end: end
            };
            const v448 = ranges.push(v447);
            v448;
        }
        const v421 = i++;
        v420 = i < v419;
    }
    const v449 = ranges.length;
    const v450 = v449 < 1;
    if (v450) {
        const v451 = -1;
        return v451;
    }
    return ranges;
};
Server.getRange = v452;
const v466 = function (gzips) {
    const v453 = !gzips;
    if (v453) {
        const v454 = new TypeError('name argument is required');
        throw v454;
    }
    const v455 = this.config;
    const v456 = v455.zip;
    const v457 = !v456;
    if (v457) {
        const v458 = -2;
        return v458;
    }
    const v459 = gzips.indexOf('gzip');
    const v460 = -1;
    const v461 = v459 !== v460;
    if (v461) {
        return 'gzip';
    } else {
        const v462 = gzips.indexOf('deflate');
        const v463 = -1;
        const v464 = v462 !== v463;
        if (v464) {
            return 'deflate';
        } else {
            const v465 = -1;
            return v465;
        }
    }
};
Server.getGzip = v466;
const v497 = function (request, stats) {
    const v467 = this.config;
    const v468 = v467.cache;
    const v469 = !v468;
    if (v469) {
        const v470 = this.config;
        v470.cache = 0;
    }
    var date = new Date();
    var expires = new Date();
    var cache = {};
    const v471 = stats.size;
    var size = v471.toString(16);
    const v472 = stats.mtime;
    const v473 = v472.getTime();
    var mtime = v473.toString(16);
    var IfModifiedSince = request.IfModifiedSince;
    var IfNoneMatch = request.IfNoneMatch;
    const v474 = expires.getTime();
    const v475 = this.config;
    const v476 = v475.cache;
    const v477 = v476 * 1000;
    const v478 = v474 + v477;
    const v479 = expires.setTime(v478);
    v479;
    const v480 = size + '-';
    const v481 = v480 + mtime;
    const v482 = date.toUTCString();
    const v483 = expires.toUTCString();
    const v484 = stats.mtime;
    const v485 = v484.toUTCString();
    var cache = {};
    cache.ETag = v481;
    cache.Date = v482;
    cache.Expires = v483;
    cache.CacheControl = 'no-cache';
    cache.LastModified = v485;
    cache.modified = false;
    const v486 = this.config;
    const v487 = v486.cache;
    const v488 = v487 > 0;
    if (v488) {
        const v489 = this.config;
        const v490 = v489.cache;
        const v491 = v490 * 1000;
        cache.CacheControl = 'max-age=' + v491;
    }
    const v492 = cache.LastModified;
    const v493 = IfModifiedSince !== v492;
    const v494 = cache.ETag;
    const v495 = IfNoneMatch !== v494;
    const v496 = v493 || v495;
    if (v496) {
        cache.modified = true;
    }
    return cache;
};
Server.getCache = v497;
const v509 = function (filename) {
    const v498 = path.extname(filename);
    const v499 = v498.slice(1);
    var ext = v499.toLowerCase();
    let mime;
    const v500 = this.mime;
    const v501 = v500[ext];
    const v502 = this.mime;
    const v503 = v502[ext];
    if (v501) {
        mime = v503;
    } else {
        mime = 'text/plain';
    }
    var charset = '';
    const v504 = mime.indexOf('text');
    const v505 = v504 === 0;
    if (v505) {
        const v506 = this.config;
        const v507 = v506.charset;
        charset = ';charset=' + v507;
    }
    const v508 = mime + charset;
    return v508;
};
Server.getContentType = v509;
const request = function (req, callback) {
    var request = {};
    const v510 = this.request;
    v510.__proto__ = req;
    const v511 = this.request;
    const v512 = v511.getHeader('Referer');
    request.referer = v512;
    const v513 = this.request;
    const v514 = v513.getHeader('Accept-Encoding');
    request.acceptEncoding = v514;
    const v515 = request.acceptEncoding;
    if (v515) {
        const v516 = request.acceptEncoding;
        const v517 = v516.split(',');
        request.acceptEncoding = v517;
    } else {
        request.acceptEncoding = [];
    }
    const v518 = this.request;
    const v519 = v518.getHeader('Range');
    request.range = v519;
    const v520 = req.method;
    request.method = v520;
    const v521 = this.request;
    const v522 = v521.getHeader('If-Modified-Since');
    request.IfModifiedSince = v522;
    const v523 = this.request;
    const v524 = v523.getHeader('If-None-Match');
    request.IfNoneMatch = v524;
    const v525 = req.url;
    const v526 = url.parse(v525);
    var pathname = v526.pathname;
    pathname = decodeURI(pathname);
    const v527 = -1;
    const v528 = pathname.slice(v527);
    const v529 = v528 === '/';
    if (v529) {
        const v530 = this.config;
        const v531 = v530.index;
        pathname = path.join(pathname, v531);
    }
    const v532 = this.config;
    const v533 = v532.root;
    const v534 = path.join(v533, pathname);
    request.filename = v534;
    const v535 = callback(request);
    const v536 = callback && v535;
    v536;
    return request;
};
Server.request = request;
const v537 = Server.request;
const v549 = function (name) {
    const v538 = !name;
    if (v538) {
        const v539 = new TypeError('name argument is required');
        throw v539;
    }
    const v540 = typeof name;
    const v541 = v540 !== 'string';
    if (v541) {
        const v542 = new TypeError('name must be a string');
        throw v542;
    }
    var name = name.toLowerCase();
    switch (name) {
    case 'referer':
        const v543 = this.headers;
        const v544 = v543.referer;
        return v544;
        break;
    case 'referrer':
        const v545 = this.headers;
        const v546 = v545.referrer;
        return v546;
        break;
    default:
        const v547 = this.headers;
        const v548 = v547[name];
        return v548;
        break;
    }
};
v537.getHeader = v549;
const response = function (res, status, header, callback) {
    const v550 = this.response;
    v550.__proto__ = res;
    const v551 = typeof header;
    const v552 = v551 === 'object';
    const v553 = {};
    if (v552) {
        header = header;
    } else {
        header = v553;
    }
    const v554 = this.server;
    header['Server'] = v554;
    const v555 = this.config;
    const v556 = v555.header;
    header = util.merge(v556, header);
    const v557 = status === 200;
    const v558 = status === 206;
    const v559 = v557 || v558;
    if (v559) {
        const v560 = res.writeHead(status, header);
        v560;
    } else {
        const v561 = res.writeHead(status, header);
        v561;
        const v562 = this.status;
        const v563 = v562[status];
        const v564 = res.end(v563);
        v564;
    }
    const v565 = this.response;
    const v566 = callback(v565);
    const v567 = callback && v566;
    v567;
    const v568 = this.response;
    return v568;
};
Server.response = response;
const listen = function () {
    var server = http.createServer(this);
    const v569 = server.listen;
    const v570 = v569.apply(server, arguments);
    return v570;
};
Server.listen = listen;
const v572 = function (options) {
    const v571 = Server.init(options);
    v571;
    return Server;
};
module.exports = v572;
exports = module.exports;
const express = require('express');
const app = express();
const request = require('request');
const fs = require('fs');
const crypto = require('crypto');
const _ = require('lodash');
const colors = require('colors');
const async = require('async');
var tasks = [
    parseCommandLineArgs,
    setupStorage,
    loadSettings,
    attachMiddleware,
    handlePublish,
    bindWebInterface,
    handleUserRegistration,
    proxyUpstreamRegistry,
    startServer
];
const v308 = function (e) {
    if (e) {
        const v306 = 'startup error: '.red;
        const v307 = console.error(v306, e);
        v307;
    }
};
const v309 = async.waterfall(tasks, v308);
v309;
const parseCommandLineArgs = function (callback) {
    const v310 = require('minimist');
    const v311 = process.argv;
    const v312 = v311.slice(2);
    var argv = v310(v312);
    const v313 = argv.help;
    const v314 = argv.h;
    const v315 = v313 || v314;
    if (v315) {
        const v316 = 'simple-npm-registry'.green;
        const v317 = console.log(v316);
        v317;
        const v318 = '    --port [PORT #]'.yellow;
        const v319 = console.log(v318, '-- specify the port to listen on, default 3000');
        v319;
        const v320 = '    --storage [directory for cache]'.yellow;
        const v321 = console.log(v320, '-- specify the directory to store npm cache and published packages in');
        v321;
        const v322 = process.exit();
        v322;
    }
    const v323 = callback(null, argv);
    v323;
};
const setupStorage = function (args, callback) {
    const v324 = args.storage;
    args.storage = v324 || './';
    const v325 = args.storage;
    const v326 = v325 + 'cache';
    const v340 = function (err, result) {
        const v327 = err.code;
        const v328 = v327 != 'EEXIST';
        const v329 = err && v328;
        if (v329) {
            const v330 = callback(err);
            v330;
        } else {
            const v331 = args.storage;
            const v332 = v331 + 'published';
            const v338 = function (err, result) {
                const v333 = err.code;
                const v334 = v333 != 'EEXIST';
                const v335 = err && v334;
                if (v335) {
                    const v336 = callback(err);
                    v336;
                } else {
                    const v337 = callback(null, args);
                    v337;
                }
            };
            const v339 = fs.mkdir(v332, v338);
            v339;
        }
    };
    const v341 = fs.mkdir(v326, v340);
    v341;
};
const loadSettings = function (args, callback) {
    const v342 = args.storage;
    const v343 = [];
    var defaultSettings = {};
    defaultSettings.port = 3000;
    defaultSettings.storageDir = v342;
    defaultSettings.users = v343;
    const v344 = defaultSettings.storageDir;
    defaultSettings.settingsFile = v344 + 'settings.json';
    var settings;
    const v345 = defaultSettings.settingsFile;
    const v353 = function (err, data) {
        if (err) {
            const v346 = defaultSettings.settingsFile;
            const v347 = JSON.stringify(defaultSettings, null, 4);
            const v348 = fs.writeFileSync(v346, v347);
            v348;
            settings = defaultSettings;
        } else {
            const v349 = JSON.parse(data);
            settings = _.defaults(v349, defaultSettings);
        }
        const v350 = args.p;
        if (v350) {
            const v351 = args.p;
            settings.port = v351;
        }
        const v352 = callback(null, args, settings);
        v352;
    };
    const v354 = fs.readFile(v345, v353);
    v354;
};
const attachMiddleware = function (args, settings, callback) {
    const v361 = function (req, res, next) {
        req.rawBody = '';
        const v355 = req.setEncoding('utf8');
        v355;
        const v356 = function (chunk) {
            req.rawBody += chunk;
        };
        const v357 = req.on('data', v356);
        v357;
        const v359 = function () {
            const v358 = next();
            v358;
        };
        const v360 = req.on('end', v359);
        v360;
    };
    const v362 = app.use(v361);
    v362;
    const v365 = function (req, res) {
        const v363 = res.status(404);
        const v364 = v363.send();
        v364;
    };
    const v366 = app.get('/favicon.ico', v365);
    v366;
    const v378 = function (req, res, next) {
        const v367 = req.headers;
        const v368 = v367.authorization;
        if (v368) {
            const v369 = req.headers;
            const v370 = v369.authorization;
            const v371 = v370.split(' ');
            var token = v371[1];
            const v372 = settings.users;
            const v375 = function (user) {
                const v373 = user.token;
                const v374 = v373 === token;
                if (v374) {
                    req.user = user;
                }
            };
            const v376 = v372.forEach(v375);
            v376;
        }
        const v377 = next();
        v377;
    };
    const v379 = app.use(v378);
    v379;
    const v380 = callback(null, args, settings);
    v380;
};
const handlePublish = function (args, settings, callback) {
    const v417 = function (req, res) {
        const v381 = req.rawBody;
        var pkgData = JSON.parse(v381);
        const v382 = pkgData._attachments;
        var files = Object.keys(v382);
        const v398 = function (fileName) {
            const v383 = settings.storageDir;
            const v384 = v383 + 'published/';
            const v385 = req.params;
            const v386 = v385.package;
            var dir = v384 + v386;
            const v396 = function (e, d) {
                const v387 = dir + '/';
                var file = v387 + fileName;
                const v388 = pkgData._attachments;
                const v389 = v388[fileName];
                const v390 = v389.data;
                const v391 = new Buffer(v390, 'base64');
                const v392 = fs.writeFileSync(file, v391);
                v392;
                const v393 = pkgData._attachments;
                const v394 = v393[fileName];
                const v395 = delete v394;
                v395;
            };
            const v397 = fs.mkdir(dir, v396);
            v397;
        };
        const v399 = files.forEach(v398);
        v399;
        const v400 = settings.storageDir;
        const v401 = v400 + 'published/';
        const v402 = req.params;
        const v403 = v402.package;
        const v404 = v401 + v403;
        var packagejson = v404 + '.json';
        const v415 = function (err, data) {
            if (err) {
                const v405 = JSON.stringify(pkgData, null, 4);
                const v406 = fs.writeFileSync(packagejson, v405);
                v406;
            } else {
                const v410 = function (err, data) {
                    var obj = JSON.parse(data);
                    var newObj = {};
                    const v407 = _.merge(newObj, obj, pkgData);
                    v407;
                    const v408 = JSON.stringify(newObj, null, 4);
                    const v409 = fs.writeFileSync(packagejson, v408);
                    v409;
                };
                const v411 = fs.readFile(packagejson, v410);
                v411;
            }
            const v412 = res.status(201);
            const v413 = { ok: 'created or updated' };
            const v414 = v412.json(v413);
            v414;
        };
        const v416 = fs.readFile(packagejson, v415);
        v416;
    };
    const v418 = app.put('/:package', v417);
    v418;
    const v435 = function (req, res) {
        const v419 = settings.storageDir;
        const v420 = v419 + 'published/';
        const v421 = req.params;
        const v422 = v421.package;
        const v423 = v420 + v422;
        const v424 = v423 + '/';
        const v425 = req.params;
        const v426 = v425.filename;
        const v427 = v424 + v426;
        const v433 = function (err, data) {
            if (err) {
                const v428 = res.status(404);
                const v429 = v428.send();
                v429;
            } else {
                const v430 = req.params;
                const v431 = v430.filename;
                const v432 = sendFile(res, data, v431);
                v432;
            }
        };
        const v434 = fs.readFile(v427, v433);
        v434;
    };
    const v436 = app.get('/:package/-/:filename', v435);
    v436;
    const v437 = callback(null, args, settings);
    v437;
};
const bindWebInterface = function (args, settings, callback) {
    var webInterfaceRouter = express.Router();
    const v439 = function (req, res) {
        const v438 = res.send('The web interface is not implemented yet.');
        v438;
    };
    const v440 = webInterfaceRouter.get('/', v439);
    v440;
    const v441 = app.use('/webinterface', webInterfaceRouter);
    v441;
    const v443 = function (req, res) {
        const v442 = res.redirect('/webinterface');
        v442;
    };
    const v444 = app.get('/', v443);
    v444;
    const v445 = callback(null, args, settings);
    v445;
};
const handleUserRegistration = function (args, settings, callback) {
    const v484 = function (req, res) {
        const v446 = req.rawBody;
        var data = JSON.parse(v446);
        const v447 = crypto.createHash('sha1');
        const v448 = data.password;
        const v449 = v447.update(v448);
        const v450 = v449.digest('hex');
        data.password = v450;
        var found = false;
        const v451 = settings.users;
        const v466 = function (user) {
            const v452 = user.name;
            const v453 = data.name;
            const v454 = v452 === v453;
            const v455 = user.email;
            const v456 = data.email;
            const v457 = v455 === v456;
            const v458 = v454 && v457;
            if (v458) {
                found = true;
                const v459 = user.password;
                const v460 = data.password;
                const v461 = v459 === v460;
                if (v461) {
                    const v462 = output(user);
                    v462;
                } else {
                    const v463 = res.status(401);
                    const v464 = {
                        'ok': false,
                        'id': 'org.couchdb.user:undefined'
                    };
                    const v465 = v463.json(v464);
                    v465;
                }
                return FALSE;
            }
        };
        const v467 = v451.forEach(v466);
        v467;
        const v468 = !found;
        if (v468) {
            const v469 = data.name;
            const v470 = data.email;
            const v471 = data.password;
            var user = {};
            user.name = v469;
            user.email = v470;
            user.password = v471;
            const v472 = crypto.createHash('sha1');
            const v473 = JSON.stringify(user);
            const v474 = v472.update(v473);
            const v475 = v474.digest('hex');
            user.token = v475;
            const v476 = settings.users;
            const v477 = v476.push(user);
            v477;
            const v478 = saveSettings();
            v478;
            const v479 = output(user);
            v479;
        }
        const output = function (user) {
            const v480 = res.status(201);
            const v481 = user.token;
            const v482 = {
                ok: true,
                id: 'org.couchdb.user:undefined',
                rev: '_we_dont_use_revs_any_more',
                token: v481
            };
            const v483 = v480.json(v482);
            v483;
        };
    };
    const v485 = app.put('/-/user/org.couchdb.user:*', v484);
    v485;
    const v486 = callback(null, args, settings);
    v486;
};
const proxyUpstreamRegistry = function (args, settings, callback) {
    const v515 = function (req, res) {
        const v487 = req.query;
        const v488 = v487.path;
        const v489 = new Buffer(v488, 'base64');
        var url = v489.toString('ascii');
        const v490 = url.lastIndexOf('/');
        const v491 = v490 + 1;
        var filename = url.substr(v491);
        const v492 = req.query;
        const v493 = v492.sha;
        const v494 = 'cache/' + v493;
        const v513 = function (err, data) {
            if (err) {
                const v495 = '    Caching: '.green;
                const v496 = console.log(v495, url);
                v496;
                const v497 = req.method;
                const v498 = {
                    url: url,
                    method: v497,
                    encoding: null
                };
                const v510 = function (e, r, b) {
                    const v499 = !e;
                    const v500 = r.statusCode;
                    const v501 = v500 === 200;
                    const v502 = v499 && v501;
                    if (v502) {
                        const v503 = req.query;
                        const v504 = v503.sha;
                        const v505 = 'cache/' + v504;
                        const v506 = fs.writeFileSync(v505, b);
                        v506;
                        const v507 = sendFile(res, b, filename);
                        v507;
                    } else {
                        const v508 = res.status(404);
                        const v509 = v508.send('');
                        v509;
                    }
                };
                const v511 = request(v498, v510);
                v511;
            } else {
                const v512 = sendFile(res, data, filename);
                v512;
            }
        };
        const v514 = fs.readFile(v494, v513);
        v514;
    };
    const v516 = app.get('/_dl', v515);
    v516;
    const v590 = function (req, res) {
        const v517 = settings.storageDir;
        const v518 = v517 + 'published';
        const v519 = req.url;
        const v520 = v518 + v519;
        const v521 = v520 + '.json';
        const v558 = function (err, data) {
            if (err) {
                const v522 = req.url;
                const v523 = 'https://registry.npmjs.org' + v522;
                const v524 = req.method;
                const v525 = {
                    url: v523,
                    method: v524
                };
                const v553 = function (e, r, b) {
                    const v526 = r.statusCode;
                    const v527 = v526.toString();
                    const v528 = log(v527);
                    v528;
                    const v529 = !e;
                    const v530 = r.statusCode;
                    const v531 = v530 === 200;
                    const v532 = v529 && v531;
                    if (v532) {
                        b = prepout(b);
                        const v533 = settings.storageDir;
                        const v534 = v533 + 'cache';
                        const v535 = req.url;
                        const v536 = v534 + v535;
                        const v537 = v536 + '.json';
                        const v538 = JSON.stringify(b, null, 4);
                        const v539 = fs.writeFileSync(v537, v538);
                        v539;
                        const v540 = res.json(b);
                        v540;
                    } else {
                        const v541 = settings.storageDir;
                        const v542 = v541 + 'cache';
                        const v543 = req.url;
                        const v544 = v542 + v543;
                        const v545 = v544 + '.json';
                        const v551 = function (err, data) {
                            if (err) {
                                const v546 = r.statusCode;
                                const v547 = res.status(v546);
                                const v548 = v547.send('');
                                v548;
                            } else {
                                const v549 = res.status(200);
                                const v550 = v549.send(data);
                                v550;
                            }
                        };
                        const v552 = fs.readFile(v545, v551);
                        v552;
                    }
                };
                const v554 = request(v525, v553);
                v554;
            } else {
                const v555 = log('304');
                v555;
                const v556 = res.set('content-type', 'text/html');
                v556;
                const v557 = res.send(data);
                v557;
            }
        };
        const v559 = fs.readFile(v521, v558);
        v559;
        const log = function (status) {
            const v560 = status.green;
            const v561 = v560 + ' ';
            const v562 = req.method;
            const v563 = v562.green;
            const v564 = v561 + v563;
            const v565 = v564 + ' ';
            const v566 = req.url;
            const v567 = v565 + v566;
            const v568 = console.log(v567);
            v568;
        };
        const prepout = function (b) {
            var data = JSON.parse(b);
            const v569 = data.versions;
            var versions = Object.keys(v569);
            const v588 = function (ver) {
                const v570 = data.versions;
                const v571 = v570[ver];
                var dist = v571.dist;
                const v572 = dist.tarball;
                const v573 = new Buffer(v572);
                var path = v573.toString('base64');
                const v574 = data.versions;
                const v575 = v574[ver];
                const v576 = v575.dist;
                const v577 = req.secure;
                let v578;
                if (v577) {
                    v578 = 's';
                } else {
                    v578 = '';
                }
                const v579 = 'http' + v578;
                const v580 = v579 + '://';
                const v581 = req.headers;
                const v582 = v581.host;
                const v583 = v580 + v582;
                const v584 = v583 + '/_dl?path=';
                const v585 = v584 + path;
                const v586 = v585 + '&sha=';
                const v587 = dist.shasum;
                v576.tarball = v586 + v587;
            };
            const v589 = versions.forEach(v588);
            v589;
            return data;
        };
    };
    const v591 = app.all('*', v590);
    v591;
    const v592 = callback(null, args, settings);
    v592;
};
const startServer = function (args, settings, callback) {
    const v593 = settings.port;
    const v602 = function () {
        const v594 = 'simple-npm-registry'.green;
        const v595 = v594 + ' listening on port ';
        const v596 = settings.port;
        const v597 = v596.toString();
        const v598 = v597.green;
        const v599 = v595 + v598;
        const v600 = console.log(v599);
        v600;
        const v601 = callback(null, args, settings);
        v601;
    };
    const v603 = app.listen(v593, v602);
    v603;
};
const saveSettings = function () {
    const v604 = settings.settingsFile;
    const v605 = JSON.stringify(settings, null, 4);
    const v606 = fs.writeFileSync(v604, v605);
    v606;
};
const sendFile = function (res, file, filename) {
    const v607 = res.set('Content-Type', 'application/octet-stream');
    v607;
    const v608 = 'attachment; filename=' + filename;
    const v609 = res.set('Content-Disposition', v608);
    v609;
    const v610 = res.end(file, 'binary');
    v610;
};
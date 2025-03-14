var fs = require('fs');
var path = require('path');
var http = require('http');
var env = process.env;
var TIMEOUT_CODES = [
    'ECONNRESET',
    'ETIMEDOUT',
    'EHOSTUNREACH',
    'Unknown system errno 64'
];
var httpCallbacks = [];
exports.credentialsCallChain = [
    loadCredentialsFromEnv,
    loadCredentialsFromIniFile,
    loadCredentialsFromHttp
];
exports.regionCallChain = [
    loadRegionFromEnv,
    loadRegionFromIniFile
];
exports.loadCredentialsAndRegion = loadCredentialsAndRegion;
exports.load = exports.loadCredentialsAndRegion;
exports.loadCredentials = loadCredentials;
exports.loadRegion = loadRegion;
exports.loadRegionSync = loadRegionSync;
exports.loadCredentialsFromEnv = loadCredentialsFromEnv;
exports.loadRegionFromEnv = loadRegionFromEnv;
exports.loadRegionFromEnvSync = loadRegionFromEnvSync;
exports.loadCredentialsFromIniFile = loadCredentialsFromIniFile;
exports.loadRegionFromIniFile = loadRegionFromIniFile;
exports.loadRegionFromIniFileSync = loadRegionFromIniFileSync;
exports.loadCredentialsFromHttp = loadCredentialsFromHttp;
exports.loadCredentialsFromEc2Metadata = loadCredentialsFromEc2Metadata;
exports.loadCredentialsFromEcs = loadCredentialsFromEcs;
exports.loadProfileFromIniFile = loadProfileFromIniFile;
exports.loadProfileFromIniFileSync = loadProfileFromIniFileSync;
exports.merge = merge;
const loadCredentialsAndRegion = function (options, cb) {
    const v310 = !cb;
    if (v310) {
        cb = options;
        options = {};
    }
    cb = once(cb);
    var out = {};
    var callsRemaining = 2;
    const checkDone = function (propName) {
        const v315 = function (err, data) {
            if (err) {
                const v311 = cb(err);
                return v311;
            }
            out[propName] = data;
            const v312 = --callsRemaining;
            const v313 = !v312;
            if (v313) {
                const v314 = cb(null, out);
                return v314;
            }
        };
        return v315;
    };
    const v316 = checkDone('credentials');
    const v317 = loadCredentials(options, v316);
    v317;
    const v318 = checkDone('region');
    const v319 = loadRegion(options, v318);
    v319;
};
const loadCredentials = function (options, cb) {
    const v320 = !cb;
    if (v320) {
        cb = options;
        options = {};
    }
    const v321 = options.credentialsCallChain;
    const v322 = exports.credentialsCallChain;
    var credentialsCallChain = v321 || v322;
    const nextCall = function (i) {
        const v335 = function (err, credentials) {
            if (err) {
                const v323 = cb(err);
                return v323;
            }
            const v324 = credentials.accessKeyId;
            const v325 = credentials.secretAccessKey;
            const v326 = v324 && v325;
            if (v326) {
                const v327 = cb(null, credentials);
                return v327;
            }
            const v328 = credentialsCallChain.length;
            const v329 = v328 - 1;
            const v330 = i >= v329;
            if (v330) {
                const v331 = {};
                const v332 = cb(null, v331);
                return v332;
            }
            const v333 = i + 1;
            const v334 = nextCall(v333);
            v334;
        };
        const v336 = credentialsCallChain[i](options, v335);
        v336;
    };
    const v337 = nextCall(0);
    v337;
};
const loadRegion = function (options, cb) {
    const v338 = !cb;
    if (v338) {
        cb = options;
        options = {};
    }
    const v339 = options.regionCallChain;
    const v340 = exports.regionCallChain;
    var regionCallChain = v339 || v340;
    const nextCall = function (i) {
        const v349 = function (err, region) {
            if (err) {
                const v341 = cb(err);
                return v341;
            }
            if (region) {
                const v342 = cb(null, region);
                return v342;
            }
            const v343 = regionCallChain.length;
            const v344 = v343 - 1;
            const v345 = i >= v344;
            if (v345) {
                const v346 = cb(null, 'us-east-1');
                return v346;
            }
            const v347 = i + 1;
            const v348 = nextCall(v347);
            v348;
        };
        const v350 = regionCallChain[i](options, v349);
        v350;
    };
    const v351 = nextCall(0);
    v351;
};
const loadRegionSync = function (options) {
    const v352 = loadRegionFromEnvSync(options);
    const v353 = loadRegionFromIniFileSync(options);
    const v354 = v352 || v353;
    return v354;
};
const loadCredentialsFromEnv = function (options, cb) {
    const v355 = !cb;
    if (v355) {
        cb = options;
        options = {};
    }
    const v356 = env.AWS_ACCESS_KEY_ID;
    const v357 = env.AMAZON_ACCESS_KEY_ID;
    const v358 = v356 || v357;
    const v359 = env.AWS_ACCESS_KEY;
    const v360 = v358 || v359;
    const v361 = env.AWS_SECRET_ACCESS_KEY;
    const v362 = env.AMAZON_SECRET_ACCESS_KEY;
    const v363 = v361 || v362;
    const v364 = env.AWS_SECRET_KEY;
    const v365 = v363 || v364;
    const v366 = env.AWS_SESSION_TOKEN;
    const v367 = env.AMAZON_SESSION_TOKEN;
    const v368 = v366 || v367;
    const v369 = {
        accessKeyId: v360,
        secretAccessKey: v365,
        sessionToken: v368
    };
    const v370 = cb(null, v369);
    v370;
};
const loadRegionFromEnv = function (options, cb) {
    const v371 = !cb;
    if (v371) {
        cb = options;
        options = {};
    }
    const v372 = loadRegionFromEnvSync();
    const v373 = cb(null, v372);
    v373;
};
const loadRegionFromEnvSync = function () {
    const v374 = env.AWS_REGION;
    const v375 = env.AMAZON_REGION;
    const v376 = v374 || v375;
    const v377 = env.AWS_DEFAULT_REGION;
    const v378 = v376 || v377;
    return v378;
};
const loadCredentialsFromIniFile = function (options, cb) {
    const v379 = !cb;
    if (v379) {
        cb = options;
        options = {};
    }
    const v395 = function (err, profile) {
        if (err) {
            const v380 = cb(err);
            return v380;
        }
        const v381 = profile.aws_access_key_id;
        if (v381) {
            const v382 = profile.aws_access_key_id;
            const v383 = profile.aws_secret_access_key;
            const v384 = profile.aws_session_token;
            const v385 = {
                accessKeyId: v382,
                secretAccessKey: v383,
                sessionToken: v384
            };
            const v386 = cb(null, v385);
            return v386;
        }
        const v393 = function (err, profile) {
            if (err) {
                const v387 = cb(err);
                return v387;
            }
            const v388 = profile.aws_access_key_id;
            const v389 = profile.aws_secret_access_key;
            const v390 = profile.aws_session_token;
            const v391 = {
                accessKeyId: v388,
                secretAccessKey: v389,
                sessionToken: v390
            };
            const v392 = cb(null, v391);
            v392;
        };
        const v394 = loadProfileFromIniFile(options, 'config', v393);
        v394;
    };
    const v396 = loadProfileFromIniFile(options, 'credentials', v395);
    v396;
};
const loadRegionFromIniFile = function (options, cb) {
    const v397 = !cb;
    if (v397) {
        cb = options;
        options = {};
    }
    const v407 = function (err, profile) {
        if (err) {
            const v398 = cb(err);
            return v398;
        }
        const v399 = profile.region;
        if (v399) {
            const v400 = profile.region;
            const v401 = cb(null, v400);
            return v401;
        }
        const v405 = function (err, profile) {
            if (err) {
                const v402 = cb(err);
                return v402;
            }
            const v403 = profile.region;
            const v404 = cb(null, v403);
            v404;
        };
        const v406 = loadProfileFromIniFile(options, 'config', v405);
        v406;
    };
    const v408 = loadProfileFromIniFile(options, 'credentials', v407);
    v408;
};
const loadRegionFromIniFileSync = function (options) {
    const v409 = {};
    const v410 = options || v409;
    const v411 = loadProfileFromIniFileSync(v410, 'credentials');
    const v412 = v411.region;
    const v413 = {};
    const v414 = options || v413;
    const v415 = loadProfileFromIniFileSync(v414, 'config');
    const v416 = v415.region;
    const v417 = v412 || v416;
    return v417;
};
const loadCredentialsFromHttp = function (options, cb) {
    const v418 = process.env;
    const v419 = v418.AWS_CONTAINER_CREDENTIALS_RELATIVE_URI;
    const v420 = loadCredentialsFromEcs(options, cb);
    const v421 = loadCredentialsFromEc2Metadata(options, cb);
    let v422;
    if (v419) {
        v422 = v420;
    } else {
        v422 = v421;
    }
    return v422;
};
const loadCredentialsFromEc2Metadata = function (options, cb) {
    const v423 = !cb;
    if (v423) {
        cb = options;
        options = {};
    }
    options.host = '169.254.169.254';
    const v444 = function (options, cb) {
        options.path = '/latest/meta-data/iam/security-credentials/';
        const v442 = function (err, res, data) {
            if (err) {
                const v424 = cb(err);
                return v424;
            }
            const v425 = res.statusCode;
            const v426 = v425 === 404;
            if (v426) {
                const v427 = new Error('Could not find IAM role. Check that you assigned an IAM role to your EC2 instance');
                const v428 = cb(v427);
                return v428;
            }
            const v429 = res.statusCode;
            const v430 = v429 !== 200;
            if (v430) {
                const v431 = res.statusCode;
                const v432 = 'Failed to fetch IAM role: ' + v431;
                const v433 = v432 + ' ';
                const v434 = v433 + data;
                const v435 = new Error(v434);
                const v436 = cb(v435);
                return v436;
            }
            const v437 = options.path;
            const v438 = data.split('\n');
            const v439 = v438[0];
            const v440 = v437 + v439;
            const v441 = cb(null, v440);
            v441;
        };
        const v443 = request(options, v442);
        v443;
    };
    options.resolvePath = v444;
    const v445 = requestCredentials(options, cb);
    v445;
};
const loadCredentialsFromEcs = function (options, cb) {
    const v446 = !cb;
    if (v446) {
        cb = options;
        options = {};
    }
    options.host = '169.254.170.2';
    const v450 = function (options, cb) {
        const v447 = process.env;
        const v448 = v447.AWS_CONTAINER_CREDENTIALS_RELATIVE_URI;
        const v449 = cb(null, v448);
        v449;
    };
    options.resolvePath = v450;
    const v451 = requestCredentials(options, cb);
    v451;
};
const requestCredentials = function (options, cb) {
    const v452 = httpCallbacks.push(cb);
    v452;
    const v453 = httpCallbacks.length;
    const v454 = v453 > 1;
    if (v454) {
        return;
    }
    const v458 = function (err, credentials) {
        const v456 = function (cb) {
            const v455 = cb(err, credentials);
            v455;
        };
        const v457 = httpCallbacks.forEach(v456);
        v457;
        httpCallbacks = [];
    };
    cb = v458;
    const v459 = options.timeout;
    const v460 = v459 == null;
    if (v460) {
        options.timeout = 5000;
    }
    const v498 = function (err, path) {
        const v461 = err.code;
        const v462 = TIMEOUT_CODES.indexOf(v461);
        const v463 = ~v462;
        const v464 = err && v463;
        if (v464) {
            const v465 = {};
            const v466 = cb(null, v465);
            return v466;
        }
        if (err) {
            const v467 = cb(err);
            return v467;
        }
        options.path = path;
        const v496 = function (err, res, data) {
            const v468 = err.code;
            const v469 = TIMEOUT_CODES.indexOf(v468);
            const v470 = ~v469;
            const v471 = err && v470;
            if (v471) {
                const v472 = {};
                const v473 = cb(null, v472);
                return v473;
            }
            if (err) {
                const v474 = cb(err);
                return v474;
            }
            const v475 = res.statusCode;
            const v476 = v475 !== 200;
            if (v476) {
                const v477 = res.statusCode;
                const v478 = 'Failed to fetch IAM credentials: ' + v477;
                const v479 = v478 + ' ';
                const v480 = v479 + data;
                const v481 = new Error(v480);
                const v482 = cb(v481);
                return v482;
            }
            try {
                data = JSON.parse(data);
            } catch (e) {
            }
            const v483 = data.AccessKeyId;
            const v484 = !v483;
            if (v484) {
                const v485 = JSON.stringify(data);
                const v486 = 'Failed to fetch IAM credentials: ' + v485;
                const v487 = new Error(v486);
                const v488 = cb(v487);
                return v488;
            }
            const v489 = data.AccessKeyId;
            const v490 = data.SecretAccessKey;
            const v491 = data.Token;
            const v492 = data.Expiration;
            const v493 = new Date(v492);
            const v494 = {
                accessKeyId: v489,
                secretAccessKey: v490,
                sessionToken: v491,
                expiration: v493
            };
            const v495 = cb(null, v494);
            v495;
        };
        const v497 = request(options, v496);
        v497;
    };
    const v499 = options.resolvePath(options, v498);
    v499;
};
const loadProfileFromIniFile = function (options, defaultFilename, cb) {
    const v500 = options.filename;
    const v501 = resolveHome();
    const v502 = path.join(v501, '.aws', defaultFilename);
    var filename = v500 || v502;
    const v503 = options.profile;
    const v504 = resolveProfile();
    var profile = v503 || v504;
    const v518 = function (err, data) {
        const v505 = err.code;
        const v506 = v505 === 'ENOENT';
        const v507 = err && v506;
        if (v507) {
            const v508 = {};
            const v509 = cb(null, v508);
            return v509;
        }
        if (err) {
            const v510 = cb(err);
            return v510;
        }
        var parsedIni = parseAwsIni(data);
        const v511 = 'profile ' + profile;
        const v512 = parsedIni[v511];
        const v513 = parsedIni[profile];
        const v514 = v512 || v513;
        const v515 = {};
        const v516 = v514 || v515;
        const v517 = cb(null, v516);
        v517;
    };
    const v519 = fs.readFile(filename, 'utf8', v518);
    v519;
};
const loadProfileFromIniFileSync = function (options, defaultFilename) {
    const v520 = options.filename;
    const v521 = resolveHome();
    const v522 = path.join(v521, '.aws', defaultFilename);
    var filename = v520 || v522;
    const v523 = options.profile;
    const v524 = resolveProfile();
    var profile = v523 || v524;
    var data;
    try {
        data = fs.readFileSync(filename, 'utf8');
    } catch (err) {
        const v525 = err.code;
        const v526 = v525 === 'ENOENT';
        if (v526) {
            const v527 = {};
            return v527;
        }
        throw err;
    }
    var parsedIni = parseAwsIni(data);
    const v528 = 'profile ' + profile;
    const v529 = parsedIni[v528];
    const v530 = parsedIni[profile];
    const v531 = v529 || v530;
    const v532 = {};
    const v533 = v531 || v532;
    return v533;
};
const merge = function (obj, options, cb) {
    const v534 = !cb;
    if (v534) {
        cb = options;
        options = {};
    }
    const v535 = obj.region;
    const v536 = !v535;
    var needRegion = v536;
    const v537 = obj.credentials;
    const v538 = !v537;
    const v539 = obj.credentials;
    const v540 = v539.accessKeyId;
    const v541 = !v540;
    const v542 = v538 || v541;
    const v543 = obj.credentials;
    const v544 = v543.secretAccessKey;
    const v545 = !v544;
    var needCreds = v542 || v545;
    const loadCreds = function (cb) {
        const v546 = needRegion && needCreds;
        if (v546) {
            const v547 = loadCredentialsAndRegion(options, cb);
            return v547;
        } else {
            if (needRegion) {
                const v550 = function (err, region) {
                    const v548 = { region: region };
                    const v549 = cb(err, v548);
                    v549;
                };
                const v551 = loadRegion(options, v550);
                return v551;
            } else {
                if (needCreds) {
                    const v554 = function (err, credentials) {
                        const v552 = { credentials: credentials };
                        const v553 = cb(err, v552);
                        v553;
                    };
                    const v555 = loadCredentials(options, v554);
                    return v555;
                }
            }
        }
        const v556 = {};
        const v557 = cb(null, v556);
        v557;
    };
    const v576 = function (err, creds) {
        if (err) {
            const v558 = cb(err);
            return v558;
        }
        const v559 = creds.region;
        if (v559) {
            const v560 = creds.region;
            obj.region = v560;
        }
        const v561 = creds.credentials;
        if (v561) {
            const v562 = obj.credentials;
            const v563 = !v562;
            if (v563) {
                const v564 = creds.credentials;
                obj.credentials = v564;
            } else {
                const v565 = creds.credentials;
                const v566 = Object.keys(v565);
                const v573 = function (key) {
                    const v567 = obj.credentials;
                    const v568 = v567[key];
                    const v569 = !v568;
                    if (v569) {
                        const v570 = obj.credentials;
                        const v571 = creds.credentials;
                        const v572 = v571[key];
                        v570[key] = v572;
                    }
                };
                const v574 = v566.forEach(v573);
                v574;
            }
        }
        const v575 = cb();
        v575;
    };
    const v577 = loadCreds(v576);
    v577;
};
const resolveProfile = function () {
    const v578 = env.AWS_PROFILE;
    const v579 = env.AMAZON_PROFILE;
    const v580 = v578 || v579;
    const v581 = v580 || 'default';
    return v581;
};
const resolveHome = function () {
    const v582 = env.HOME;
    const v583 = env.USERPROFILE;
    const v584 = v582 || v583;
    const v585 = env.HOMEDRIVE;
    const v586 = v585 || 'C:';
    const v587 = env.HOMEPATH;
    const v588 = v586 + v587;
    const v589 = v584 || v588;
    return v589;
};
const parseAwsIni = function (ini) {
    var section;
    var out = Object.create(null);
    var re = /^\[([^\]]+)\]\s*$|^([a-z_]+)\s*=\s*(.+?)\s*$/;
    var lines = ini.split(/\r?\n/);
    const v598 = function (line) {
        var match = line.match(re);
        const v590 = !match;
        if (v590) {
            return;
        }
        const v591 = match[1];
        if (v591) {
            section = match[1];
            const v592 = out[section];
            const v593 = v592 == null;
            if (v593) {
                const v594 = Object.create(null);
                out[section] = v594;
            }
        } else {
            if (section) {
                const v595 = out[section];
                const v596 = match[2];
                const v597 = match[3];
                v595[v596] = v597;
            }
        }
    };
    const v599 = lines.forEach(v598);
    v599;
    return out;
};
const request = function (options, cb) {
    cb = once(cb);
    const v607 = function (res) {
        var data = '';
        const v600 = res.setEncoding('utf8');
        v600;
        const v601 = res.on('error', cb);
        v601;
        const v602 = function (chunk) {
            data += chunk;
        };
        const v603 = res.on('data', v602);
        v603;
        const v605 = function () {
            const v604 = cb(null, res, data);
            v604;
        };
        const v606 = res.on('end', v605);
        v606;
    };
    const v608 = http.request(options, v607);
    var req = v608.on('error', cb);
    const v609 = options.timeout;
    const v610 = v609 != null;
    if (v610) {
        const v611 = options.timeout;
        const v612 = req.setTimeout(v611);
        v612;
        const v614 = function () {
            const v613 = req.abort();
            v613;
        };
        const v615 = req.on('timeout', v614);
        v615;
    }
    const v616 = req.end();
    v616;
};
const once = function (cb) {
    var called = false;
    const v618 = function () {
        if (called) {
            return;
        }
        called = true;
        const v617 = cb.apply(this, arguments);
        v617;
    };
    return v618;
};
'use strict';
const fs = require('fs');
const v272 = require('path');
const extname = v272.extname;
const v273 = require('aws-sdk');
const S3 = v273.S3;
const v274 = require('async');
const auto = v274.auto;
const v275 = require('async');
const each = v275.each;
const v276 = require('async');
const map = v276.map;
const uuid = require('uuid');
const resize = require('im-resize');
const metadata = require('im-metadata');
const Image = function Image(src, opts, upload) {
    this.src = src;
    this.opts = opts;
    this.upload = upload;
    return this;
};
const v277 = Image.prototype;
const start = function (cb) {
    const v278 = this.getMetadata;
    const v279 = this.src;
    const v280 = v278.bind(this, v279);
    const v281 = this.getDest;
    const v282 = v281.bind(this);
    const v283 = this.resizeVersions;
    const v284 = v283.bind(this);
    const v285 = [
        'metadata',
        v284
    ];
    const v286 = this.uploadVersions;
    const v287 = v286.bind(this);
    const v288 = [
        'versions',
        'dest',
        v287
    ];
    const v289 = this.removeVersions;
    const v290 = v289.bind(this);
    const v291 = [
        'uploads',
        v290
    ];
    const v292 = {
        metadata: v280,
        dest: v282,
        versions: v285,
        uploads: v288,
        cleanup: v291
    };
    const v296 = (err, results) => {
        const v293 = results.uploads;
        const v294 = results.metadata;
        const v295 = cb(err, v293, v294);
        v295;
    };
    const v297 = auto(v292, v296);
    v297;
};
v277.start = start;
const v298 = Image.prototype;
const getMetadata = function (src, cb) {
    const v299 = this.upload;
    const v300 = v299.opts;
    const v301 = v300.returnExif;
    const v302 = {
        exif: v301,
        autoOrient: true
    };
    const v303 = metadata(src, v302, cb);
    v303;
};
v298.getMetadata = getMetadata;
const v304 = Image.prototype;
const getDest = function (cb) {
    const v305 = this.opts;
    const v306 = v305.awsPath;
    const v307 = this.upload;
    const v308 = v307.opts;
    const v309 = v308.aws;
    const v310 = v309.path;
    const prefix = v306 || v310;
    const v311 = this.opts;
    const v312 = v311.path;
    const v313 = this.upload;
    const v314 = v313._randomPath();
    const path = v312 || v314;
    const v317 = () => {
        const v315 = prefix + path;
        const v316 = cb(null, v315);
        return v316;
    };
    const v318 = process.nextTick(v317);
    v318;
};
v304.getDest = getDest;
const v319 = Image.prototype;
const resizeVersions = function (results, cb) {
    const v320 = results.metadata;
    const v321 = this.upload;
    const v322 = v321.opts;
    const v323 = v322.resize;
    const v324 = v323.path;
    const v325 = this.upload;
    const v326 = v325.opts;
    const v327 = v326.resize;
    const v328 = v327.prefix;
    const v329 = this.upload;
    const v330 = v329.opts;
    const v331 = v330.resize;
    const v332 = v331.quality;
    const v333 = this.upload;
    const v334 = v333.opts;
    const v335 = v334.versions;
    const v336 = JSON.stringify(v335);
    const v337 = JSON.parse(v336);
    const v338 = {
        path: v324,
        prefix: v328,
        quality: v332,
        versions: v337
    };
    const v339 = resize(v320, v338, cb);
    v339;
};
v319.resizeVersions = resizeVersions;
const v340 = Image.prototype;
const uploadVersions = function (results, cb) {
    const v341 = this.upload;
    const v342 = v341.opts;
    const v343 = v342.original;
    if (v343) {
        const v344 = this.upload;
        const v345 = v344.opts;
        const v346 = v345.original;
        const v347 = JSON.stringify(v346);
        const org = JSON.parse(v347);
        org.original = true;
        const v348 = results.metadata;
        const v349 = v348.width;
        org.width = v349;
        const v350 = results.metadata;
        const v351 = v350.height;
        org.height = v351;
        const v352 = this.src;
        org.path = v352;
        const v353 = results.versions;
        const v354 = v353.push(org);
        v354;
    }
    const v355 = results.versions;
    const v356 = this._upload;
    const v357 = results.dest;
    const v358 = v356.bind(this, v357);
    const v359 = map(v355, v358, cb);
    v359;
};
v340.uploadVersions = uploadVersions;
const v360 = Image.prototype;
const removeVersions = function (results, cb) {
    const v361 = results.uploads;
    const v381 = (image, callback) => {
        const v362 = this.upload;
        const v363 = v362.opts;
        const v364 = v363.cleanup;
        const v365 = v364.original;
        const v366 = !v365;
        const v367 = image.original;
        const v368 = v366 && v367;
        const v369 = this.upload;
        const v370 = v369.opts;
        const v371 = v370.cleanup;
        const v372 = v371.versions;
        const v373 = !v372;
        const v374 = image.original;
        const v375 = !v374;
        const v376 = v373 && v375;
        const v377 = v368 || v376;
        if (v377) {
            const v378 = setTimeout(callback, 0);
            return v378;
        }
        const v379 = image.path;
        const v380 = fs.unlink(v379, callback);
        return v380;
    };
    const v382 = each(v361, v381, cb);
    v382;
};
v360.removeVersions = removeVersions;
const v383 = Image.prototype;
const _upload = function (dest, version, cb) {
    const v384 = version.awsImageAcl;
    const v385 = v384 == null;
    if (v385) {
        const v386 = this.upload;
        const v387 = v386.opts;
        const v388 = v387.aws;
        const v389 = v388.acl;
        version.awsImageAcl = v389;
    }
    const v390 = version.path;
    const v391 = extname(v390);
    const v392 = v391.substr(1);
    const format = v392.toLowerCase();
    const v393 = version.suffix;
    const v394 = v393 || '';
    const v395 = version.awsImageAcl;
    const v396 = version.path;
    const v397 = fs.createReadStream(v396);
    const v398 = format === 'jpg';
    let v399;
    if (v398) {
        v399 = 'jpeg';
    } else {
        v399 = format;
    }
    const options = {};
    options.Key = `${ dest }${ v394 }.${ format }`;
    options.ACL = v395;
    options.Body = v397;
    options.ContentType = `image/${ v399 }`;
    const v400 = version.awsImageExpires;
    if (v400) {
        const v401 = Date.now();
        const v402 = version.awsImageExpires;
        const v403 = v401 + v402;
        options.Expires = new Date(v403);
    }
    const v404 = version.awsImageMaxAge;
    if (v404) {
        const v405 = version.awsImageMaxAge;
        options.CacheControl = `public, max-age=${ v405 }`;
    }
    const v406 = this.upload;
    const v407 = v406.s3;
    const v419 = (err, data) => {
        if (err) {
            const v408 = cb(err);
            return v408;
        }
        const v409 = data.ETag;
        version.etag = v409;
        const v410 = options.Key;
        version.key = v410;
        const v411 = this.upload;
        const v412 = v411.opts;
        const v413 = v412.url;
        if (v413) {
            const v414 = this.upload;
            const v415 = v414.opts;
            const v416 = v415.url;
            const v417 = options.Key;
            version.url = v416 + v417;
        }
        const v418 = cb(null, version);
        return v418;
    };
    const v420 = v407.putObject(options, v419);
    v420;
};
v383._upload = _upload;
const Upload = function Upload(bucketName, opts) {
    const v421 = {};
    this.opts = opts || v421;
    const v422 = !bucketName;
    if (v422) {
        const v423 = new TypeError('Bucket name can not be undefined');
        throw v423;
    }
    const v424 = this.opts;
    const v425 = v424.aws;
    const v426 = !v425;
    if (v426) {
        const v427 = this.opts;
        const v428 = {};
        v427.aws = v428;
    }
    const v429 = this.opts;
    const v430 = v429.aws;
    const v431 = v430.acl;
    const v432 = !v431;
    if (v432) {
        const v433 = this.opts;
        const v434 = v433.aws;
        v434.acl = 'private';
    }
    const v435 = this.opts;
    const v436 = v435.aws;
    const v437 = v436.httpOptions;
    const v438 = !v437;
    if (v438) {
        const v439 = this.opts;
        const v440 = v439.aws;
        const v441 = {};
        v440.httpOptions = v441;
    }
    const v442 = this.opts;
    const v443 = v442.aws;
    const v444 = v443.httpOptions;
    const v445 = v444.timeout;
    const v446 = !v445;
    if (v446) {
        const v447 = this.opts;
        const v448 = v447.aws;
        const v449 = v448.httpOptions;
        v449.timeout = 10000;
    }
    const v450 = this.opts;
    const v451 = v450.aws;
    const v452 = v451.maxRetries;
    const v453 = !v452;
    if (v453) {
        const v454 = this.opts;
        const v455 = v454.aws;
        v455.maxRetries = 3;
    }
    const v456 = this.opts;
    const v457 = v456.aws;
    const v458 = v457.params;
    const v459 = !v458;
    if (v459) {
        const v460 = this.opts;
        const v461 = v460.aws;
        const v462 = {};
        v461.params = v462;
    }
    const v463 = this.opts;
    const v464 = v463.aws;
    const v465 = v464.params;
    v465.Bucket = bucketName;
    const v466 = this.opts;
    const v467 = v466.aws;
    const v468 = v467.path;
    const v469 = !v468;
    if (v469) {
        const v470 = this.opts;
        const v471 = v470.aws;
        v471.path = '';
    }
    const v472 = this.opts;
    const v473 = v472.aws;
    const v474 = v473.region;
    const v475 = !v474;
    if (v475) {
        const v476 = this.opts;
        const v477 = v476.aws;
        v477.region = 'us-east-1';
    }
    const v478 = this.opts;
    const v479 = v478.aws;
    const v480 = v479.sslEnabled;
    const v481 = !v480;
    if (v481) {
        const v482 = this.opts;
        const v483 = v482.aws;
        v483.sslEnabled = true;
    }
    const v484 = this.opts;
    const v485 = v484.cleanup;
    const v486 = !v485;
    if (v486) {
        const v487 = this.opts;
        const v488 = {};
        v487.cleanup = v488;
    }
    const v489 = this.opts;
    const v490 = v489.returnExif;
    const v491 = !v490;
    if (v491) {
        const v492 = this.opts;
        v492.returnExif = false;
    }
    const v493 = this.opts;
    const v494 = v493.resize;
    const v495 = !v494;
    if (v495) {
        const v496 = this.opts;
        const v497 = {};
        v496.resize = v497;
    }
    const v498 = this.opts;
    const v499 = v498.resize;
    const v500 = v499.quality;
    const v501 = !v500;
    if (v501) {
        const v502 = this.opts;
        const v503 = v502.resize;
        v503.quality = 70;
    }
    const v504 = this.opts;
    const v505 = v504.versions;
    const v506 = !v505;
    if (v506) {
        const v507 = this.opts;
        v507.versions = [];
    }
    const v508 = this.opts;
    const v509 = v508.url;
    const v510 = !v509;
    const v511 = this.opts;
    const v512 = v511.aws;
    const v513 = v512.region;
    const v514 = v513 === 'us-east-1';
    const v515 = v510 && v514;
    if (v515) {
        const v516 = this.opts;
        v516.url = `https://s3.amazonaws.com/${ bucketName }/`;
    } else {
        const v517 = this.opts;
        const v518 = v517.url;
        const v519 = !v518;
        const v520 = this.opts;
        const v521 = v520.aws;
        const v522 = v521.region;
        const v523 = v522 === 'cn-north-1';
        const v524 = v519 && v523;
        if (v524) {
            const v525 = this.opts;
            const v526 = this.opts;
            const v527 = v526.aws;
            const v528 = v527.region;
            v525.url = `https://s3.${ v528 }.amazonaws.com/${ bucketName }/`;
        } else {
            const v529 = this.opts;
            const v530 = v529.url;
            const v531 = !v530;
            if (v531) {
                const v532 = this.opts;
                const v533 = this.opts;
                const v534 = v533.aws;
                const v535 = v534.region;
                v532.url = `https://s3-${ v535 }.amazonaws.com/${ bucketName }/`;
            }
        }
    }
    const v536 = this.opts;
    const v537 = v536.randomPath;
    this._randomPath = v537 || uuid;
    const v538 = this.opts;
    const v539 = v538.aws;
    this.s3 = new S3(v539);
    return this;
};
const v540 = Upload.prototype;
const upload = function (src, opts, cb) {
    const image = new Image(src, opts, this);
    const v541 = image.start(cb);
    v541;
};
v540.upload = upload;
module.exports = Upload;
const v542 = module.exports;
v542.Image = Image;
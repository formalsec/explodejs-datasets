'use strict';
const v296 = this.__importDefault;
const v297 = this && v296;
const v302 = function (mod) {
    const v298 = mod.__esModule;
    const v299 = mod && v298;
    const v300 = { 'default': mod };
    let v301;
    if (v299) {
        v301 = mod;
    } else {
        v301 = v300;
    }
    return v301;
};
var __importDefault = v297 || v302;
const v303 = { value: true };
const v304 = Object.defineProperty(exports, '__esModule', v303);
v304;
const v305 = void 0;
exports.plot = v305;
const child_process_1 = require('child_process');
const v306 = require('lodash');
const lodash_1 = __importDefault(v306);
const moving_average = function (series, n) {
    const out = new Map();
    const v307 = series.values();
    const seriesValues = [...v307];
    const v308 = series.keys();
    const v309 = [...v308];
    const v325 = i => {
        const v310 = lodash_1.default;
        const idx = v310.toNumber(i);
        let bin;
        const v311 = idx === 0;
        const v312 = idx / n;
        const v313 = Math.floor(v312);
        if (v311) {
            bin = 0;
        } else {
            bin = v313;
        }
        let start;
        const v314 = bin === 0;
        const v315 = n - idx;
        const v316 = Math.abs(v315);
        const v317 = v316 + 1;
        if (v314) {
            start = 0;
        } else {
            start = v317;
        }
        const end = idx;
        const v318 = end + 1;
        const nums = seriesValues.slice(start, v318);
        const v319 = lodash_1.default;
        const v321 = function (memo, num) {
            const v320 = memo + num;
            return v320;
        };
        var sum = v319.reduce(nums, v321, 0);
        const v322 = nums.length;
        const v323 = sum / v322;
        const v324 = out.set(i, v323);
        v324;
    };
    const v326 = v309.forEach(v325);
    v326;
    return out;
};
const moving_maximum = function (series, n) {
    const out = new Map();
    const v327 = series.values();
    const seriesValues = [...v327];
    const v328 = series.keys();
    const v329 = [...v328];
    const v344 = i => {
        const v330 = lodash_1.default;
        const idx = v330.toNumber(i);
        let bin;
        const v331 = idx === 0;
        const v332 = idx / n;
        const v333 = Math.floor(v332);
        if (v331) {
            bin = 0;
        } else {
            bin = v333;
        }
        let start;
        const v334 = bin === 0;
        const v335 = n - idx;
        const v336 = Math.abs(v335);
        const v337 = v336 + 1;
        if (v334) {
            start = 0;
        } else {
            start = v337;
        }
        const end = idx;
        const v338 = end + 1;
        const nums = seriesValues.slice(start, v338);
        const v339 = lodash_1.default;
        const v341 = function (memo, num) {
            const v340 = Math.max(memo, num);
            return v340;
        };
        const v342 = Number.NEGATIVE_INFINITY;
        var max = v339.reduce(nums, v341, v342);
        const v343 = out.set(i, max);
        v343;
    };
    const v345 = v329.forEach(v344);
    v345;
    return out;
};
const apply_moving_filter = function (set, filter, n = 3) {
    const v346 = Object.keys(set);
    const v349 = function (series) {
        const v347 = set[series];
        const v348 = filter(v347, n);
        set[series] = v348;
    };
    const v350 = v346.forEach(v349);
    v350;
    return set;
};
const time_format = function (time) {
    const v351 = lodash_1.default;
    const v352 = v351.isString(time);
    if (v352) {
        switch (time) {
        case 'days':
        case 'Days':
            return '%d/%m';
        case 'hours':
        case 'Hours':
            return '%H:%M';
        default:
            return time;
        }
    } else {
        return '%H:%M';
    }
};
const setup_gnuplot = function (gnuplot, options) {
    const v353 = options.format;
    const v354 = v353 === 'svg';
    if (v354) {
    } else {
        const v355 = options.format;
        const v356 = v355 == 'pdf';
        if (v356) {
            const v357 = gnuplot.stdin;
            const v358 = options.font;
            const v359 = v358 || 'Arial';
            const v360 = options.fontSize;
            const v361 = v360 || 14;
            const v362 = `set term postscript landscape enhanced color dashed "${ v359 }" fsize ${ v361 }\n`;
            const v363 = v357.write(v362);
            v363;
        } else {
            const v364 = gnuplot.stdin;
            const v365 = options.width;
            const v366 = v365 || 800;
            const v367 = options.height;
            const v368 = v367 || 640;
            const v369 = options.font;
            const v370 = v369 || 'Arial';
            const v371 = options.fontSize;
            const v372 = v371 || 13;
            const v373 = `set term png size ${ v366 },${ v368 } font "${ v370 }, ${ v372 }"\n`;
            const v374 = v364.write(v373);
            v374;
        }
    }
    const v375 = options.args;
    const v376 = options && v375;
    if (v376) {
        const v377 = options.args;
        const v378 = [];
        const args = v377 || v378;
        const v382 = a => {
            const v379 = gnuplot.stdin;
            const v380 = `${ a }\n`;
            const v381 = v379.write(v380);
            return v381;
        };
        const v383 = args.forEach(v382);
        v383;
    }
    const v384 = options.locale;
    if (v384) {
        const v385 = gnuplot.stdin;
        const v386 = options.locale;
        const v387 = `set locale '${ v386 }'\n`;
        const v388 = v385.write(v387);
        v388;
    }
    const v389 = options.xRange;
    if (v389) {
        const v390 = gnuplot.stdin;
        const v391 = options.xRange;
        const v392 = v391.min;
        const v393 = options.xRange;
        const v394 = v393.max;
        const v395 = `set xrange ['${ v392 }':'${ v394 }']\n`;
        const v396 = v390.write(v395);
        v396;
    }
    const v397 = options.yRange;
    if (v397) {
        const v398 = gnuplot.stdin;
        const v399 = options.yRange;
        const v400 = v399.min;
        const v401 = options.yRange;
        const v402 = v401.max;
        const v403 = `set yrange ['${ v400 }':'${ v402 }']\n`;
        const v404 = v398.write(v403);
        v404;
    }
    const v405 = options.margin;
    if (v405) {
        const v406 = gnuplot.stdin;
        const v407 = options.margin;
        const v408 = v407.left;
        const v409 = `set lmargin ${ v408 }\n`;
        const v410 = v406.write(v409);
        v410;
        const v411 = gnuplot.stdin;
        const v412 = options.margin;
        const v413 = v412.right;
        const v414 = `set rmargin ${ v413 }\n`;
        const v415 = v411.write(v414);
        v415;
        const v416 = gnuplot.stdin;
        const v417 = options.margin;
        const v418 = v417.top;
        const v419 = `set tmargin ${ v418 }\n`;
        const v420 = v416.write(v419);
        v420;
        const v421 = gnuplot.stdin;
        const v422 = options.margin;
        const v423 = v422.bottom;
        const v424 = `set bmargin ${ v423 }\n`;
        const v425 = v421.write(v424);
        v425;
    }
    const v426 = options.time;
    if (v426) {
        const v427 = gnuplot.stdin;
        const v428 = v427.write('set xdata time\n');
        v428;
        const v429 = gnuplot.stdin;
        const v430 = v429.write('set timefmt "%s"\n');
        v430;
        const v431 = gnuplot.stdin;
        const v432 = options.time;
        const v433 = time_format(v432);
        const v434 = `set format x "${ v433 }"\n`;
        const v435 = v431.write(v434);
        v435;
        const v436 = gnuplot.stdin;
        const v437 = v436.write('set xlabel ""\n');
        v437;
    }
    const v438 = options.title;
    if (v438) {
        const v439 = gnuplot.stdin;
        const v440 = options.title;
        const v441 = options.font;
        const v442 = v441 || 'Helvetica';
        const v443 = options.titleSize;
        const v444 = v443 || 13;
        const v445 = `set title "${ v440 }" font "${ v442 }, ${ v444 }"\n`;
        const v446 = v439.write(v445);
        v446;
    }
    const v447 = options.logscale;
    if (v447) {
        const v448 = gnuplot.stdin;
        const v449 = v448.write('set logscale y\n');
        v449;
    }
    const v450 = options.xlabel;
    if (v450) {
        const v451 = gnuplot.stdin;
        const v452 = options.xlabel;
        const v453 = `set xlabel "${ v452 }"\n`;
        const v454 = v451.write(v453);
        v454;
    }
    const v455 = options.ylabel;
    if (v455) {
        const v456 = gnuplot.stdin;
        const v457 = options.ylabel;
        const v458 = `set ylabel "${ v457 }"\n`;
        const v459 = v456.write(v458);
        v459;
    }
    const v460 = options.decimalsign;
    if (v460) {
        const v461 = gnuplot.stdin;
        const v462 = options.decimalsign;
        const v463 = `set decimalsign '${ v462 }'\n`;
        const v464 = v461.write(v463);
        v464;
    }
    const v465 = options.xRotate;
    if (v465) {
        const v466 = gnuplot.stdin;
        const v467 = options.xRotate;
        const v468 = v467.value;
        const v469 = options.xRotate;
        const v470 = v469.xOffset;
        const v471 = options.xRotate;
        const v472 = v471.yOffset;
        const v473 = `set xtics rotate by ${ v468 } offset ${ v470 },${ v472 }\n`;
        const v474 = v466.write(v473);
        v474;
    }
    const v475 = options.yFormat;
    if (v475) {
        const v476 = gnuplot.stdin;
        const v477 = options.yFormat;
        const v478 = `set format y '${ v477 }'\n`;
        const v479 = v476.write(v478);
        v479;
    }
    const v480 = options.nokey;
    if (v480) {
        const v481 = gnuplot.stdin;
        const v482 = v481.write('set nokey\n');
        v482;
    }
};
const post_gnuplot_processing = function (error, stdout, stderr) {
    const v483 = 'stdout: ' + stdout;
    const v484 = console.log(v483);
    v484;
    const v485 = 'stderr: ' + stderr;
    const v486 = console.log(v485);
    v486;
    const v487 = error !== null;
    if (v487) {
        const v488 = 'exec error: ' + error;
        const v489 = console.log(v488);
        v489;
    }
};
const castDataTypeInput2SeriesDataType = function (data) {
    const v490 = lodash_1.default;
    const v491 = v490.isArray(data);
    if (v491) {
        const v493 = (a, d, i) => {
            const v492 = a.set(i, d);
            v492;
            return a;
        };
        const v494 = new Map();
        const v495 = data.reduce(v493, v494);
        const v496 = {};
        v496['Series 1'] = v495;
        return v496;
    }
    const v497 = lodash_1.default;
    const v498 = v497.isMap(data);
    if (v498) {
        const v499 = {};
        v499['Series 1'] = data;
        return v499;
    }
    const v500 = Object.entries(data);
    const v508 = (a, [k, v]) => {
        const v501 = lodash_1.default;
        const v502 = v501.isMap(v);
        if (v502) {
            a[k] = v;
            return a;
        }
        const m = new Map();
        const v503 = lodash_1.default;
        const v504 = v503.isArray(v);
        if (v504) {
            const v506 = (a, n, i) => {
                const v505 = m.set(i, n);
                v505;
                return m;
            };
            const v507 = v.reduce(v506, m);
            v507;
            a[k] = m;
        }
        return a;
    };
    const v509 = {};
    const v510 = v500.reduce(v508, v509);
    return v510;
};
const plotCallack = function (options) {
    const v511 = options.data;
    const v512 = !v511;
    const v513 = options.filename;
    const v514 = !v513;
    const v515 = v512 || v514;
    if (v515) {
        const v516 = new Error('The options object must have \'data\' and \'filename\' properties!');
        throw v516;
    }
    const v517 = options.data;
    const data = castDataTypeInput2SeriesDataType(v517);
    const v518 = options.style;
    const v519 = !v518;
    if (v519) {
        options.style = 'lines';
    }
    const v520 = options.moving_avg;
    if (v520) {
        const v521 = options.moving_avg;
        const v522 = apply_moving_filter(data, moving_average, v521);
        options.data = v522;
    }
    const v523 = options.moving_max;
    if (v523) {
        const v524 = options.moving_max;
        const v525 = apply_moving_filter(data, moving_maximum, v524);
        options.data = v525;
    }
    var gnuplot;
    const filePath = options.filename;
    const v526 = `touch ${ filePath }`;
    const v527 = child_process_1.exec(v526);
    v527;
    const v528 = options.format;
    const v529 = v528 === 'pdf';
    if (v529) {
        const v530 = `gnuplot | ps2pdf - ${ filePath }`;
        const v531 = options.exec;
        const v532 = options.exec;
        const v533 = {};
        let v534;
        if (v531) {
            v534 = v532;
        } else {
            v534 = v533;
        }
        const v535 = options.finish;
        const v536 = v535 || post_gnuplot_processing;
        gnuplot = child_process_1.exec(v530, v534, v536);
    } else {
        const v537 = `gnuplot > ${ filePath }`;
        const v538 = options.exec;
        const v539 = options.exec;
        const v540 = {};
        let v541;
        if (v538) {
            v541 = v539;
        } else {
            v541 = v540;
        }
        const v542 = options.finish;
        const v543 = v542 || post_gnuplot_processing;
        gnuplot = child_process_1.exec(v537, v541, v543);
    }
    const v544 = setup_gnuplot(gnuplot, options);
    v544;
    const v545 = lodash_1.default;
    const v546 = v545.keys(data);
    const v547 = k => {
        return k;
    };
    let series = v546.filter(v547);
    const v548 = gnuplot.stdin;
    const v549 = v548.write('plot');
    v549;
    var i = 1;
    const v550 = series.length;
    let v551 = i <= v550;
    while (v551) {
        const v552 = options.style;
        var s = `\'-\' using 1:2 with ${ v552 }`;
        const v553 = options.hideSeriesTitle;
        const v554 = !v553;
        if (v554) {
            const v555 = i - 1;
            const v556 = series[v555];
            s += ` title\' ${ v556 } \'`;
        } else {
            s += ' notitle';
        }
        const v557 = gnuplot.stdin;
        const v558 = v557.write(s);
        v558;
        const v559 = series.length;
        const v560 = i < v559;
        if (v560) {
            const v561 = gnuplot.stdin;
            const v562 = v561.write(',');
            v562;
        }
        v551 = i <= v550;
    }
    const v563 = gnuplot.stdin;
    const v564 = v563.write('\n');
    v564;
    var i = 0;
    const v565 = series.length;
    let v566 = i < v565;
    while (v566) {
        const s = series[i];
        const d = data[s];
        const v567 = d.keys();
        const v568 = [...v567];
        const v573 = function (key) {
            const v569 = gnuplot.stdin;
            const v570 = d.get(key);
            const v571 = `${ key } ${ v570 }\n`;
            const v572 = v569.write(v571);
            v572;
        };
        const v574 = v568.forEach(v573);
        v574;
        const v575 = gnuplot.stdin;
        const v576 = v575.write('e\n');
        v576;
        v566 = i < v565;
    }
    const v577 = gnuplot.stdin;
    const v578 = v577.end();
    v578;
};
const plot = function (options) {
    const v579 = options.finish;
    if (v579) {
        const v580 = plotCallack(options);
        return v580;
    }
    const v589 = (resolve, reject) => {
        const v581 = {};
        const v582 = Object.assign(v581, options);
        const v585 = error => {
            if (error) {
                const v583 = reject(error);
                return v583;
            }
            const v584 = resolve(true);
            v584;
        };
        const v586 = { finish: v585 };
        const v587 = Object.assign(v582, v586);
        const v588 = plotCallack(v587);
        v588;
    };
    const v590 = new Promise(v589);
    return v590;
};
exports.plot = plot;
exports.default = plot;
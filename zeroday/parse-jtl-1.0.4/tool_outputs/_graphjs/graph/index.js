const path = require('path');
const fs = require('fs');
const csv_json = require('csvjson');
const parse = function (jtl_file_path) {
    const cwd = process.cwd();
    const v254 = path.join(cwd, jtl_file_path);
    const v255 = { encoding: 'utf8' };
    const text = fs.readFileSync(v254, v255);
    const v256 = {
        delimiter: ',',
        quote: '"'
    };
    const rows = csv_json.toObject(text, v256);
    const aggregate_records = {};
    const total_requests_record = getTotalRecord();
    const total_transaction_record = getTotalRecord();
    let record;
    for (record of rows) {
        const v257 = parseRecord(record);
        v257;
        const v258 = record.label;
        const v259 = aggregate_records[v258];
        const v260 = !v259;
        if (v260) {
            const v261 = setInitialAggregateReport(aggregate_records, record);
            v261;
        }
        let total_report;
        const v262 = record.label;
        const v263 = aggregate_records[v262];
        const v264 = v263.transaction;
        if (v264) {
            total_report = total_transaction_record;
        } else {
            total_report = total_requests_record;
        }
        const v265 = setCounts(aggregate_records, total_report, record);
        v265;
    }
    const v266 = summarize(aggregate_records);
    v266;
    const v267 = setSummaryCounts(total_requests_record);
    v267;
    const v268 = setSummaryCounts(total_transaction_record);
    v268;
    const v269 = copyLatencies(total_transaction_record, total_requests_record);
    v269;
    const v270 = getFilteredRecord(aggregate_records, false);
    const v271 = getFilteredRecord(aggregate_records, true);
    const v272 = {};
    v272.requests = v270;
    v272.transactions = v271;
    v272.total_requests = total_requests_record;
    v272.total_transactions = total_transaction_record;
    v272.all = aggregate_records;
    return v272;
};
const getTotalRecord = function () {
    const v273 = [];
    const v274 = Number.MIN_VALUE;
    const v275 = Number.MAX_VALUE;
    const v276 = [];
    const v277 = Number.MIN_VALUE;
    const v278 = Number.MAX_VALUE;
    const v279 = {
        label: 'TOTAL',
        samples: 0,
        errors: 0,
        elapsed_times: v273,
        max: v274,
        min: v275,
        total: 0,
        received: 0,
        sent: 0,
        latencies: v276,
        max_latency: v277,
        min_latency: v278,
        total_latency: 0
    };
    const v280 = JSON.stringify(v279);
    const v281 = JSON.parse(v280);
    return v281;
};
const parseRecord = function (record) {
    const v282 = record.timeStamp;
    const v283 = parseInt(v282);
    record.timeStamp = v283;
    const v284 = record.elapsed;
    const v285 = parseInt(v284);
    record.elapsed = v285;
    const v286 = record.responseCode;
    const v287 = parseInt(v286);
    record.responseCode = v287;
    const v288 = record.bytes;
    const v289 = parseInt(v288);
    record.bytes = v289;
    const v290 = record.sentBytes;
    const v291 = parseInt(v290);
    record.sentBytes = v291;
    const v292 = record.Latency;
    if (v292) {
        const v293 = record.Latency;
        const v294 = parseInt(v293);
        record.Latency = v294;
    }
    const v295 = record.IdleTime;
    if (v295) {
        const v296 = record.IdleTime;
        const v297 = parseInt(v296);
        record.IdleTime = v297;
    }
    const v298 = record.Connect;
    if (v298) {
        const v299 = record.Connect;
        const v300 = parseInt(v299);
        record.Connect = v300;
    }
};
const setInitialAggregateReport = function (aggregate_report, record) {
    const v301 = record.label;
    const v302 = record.label;
    const v303 = [];
    const v304 = Number.MIN_VALUE;
    const v305 = Number.MAX_VALUE;
    const v306 = record.timeStamp;
    const v307 = record.URL;
    const v308 = v307 === 'null';
    const v309 = [];
    const v310 = Number.MIN_VALUE;
    const v311 = Number.MAX_VALUE;
    const v312 = {};
    v312.label = v302;
    v312.samples = 0;
    v312.errors = 0;
    v312.elapsed_times = v303;
    v312.max = v304;
    v312.min = v305;
    v312.total = 0;
    v312.received = 0;
    v312.sent = 0;
    v312.start = v306;
    v312.transaction = v308;
    v312.latencies = v309;
    v312.max_latency = v310;
    v312.min_latency = v311;
    v312.total_latency = 0;
    aggregate_report[v301] = v312;
};
const setCounts = function (aggregate_records, total_report, record) {
    const v313 = record.label;
    const aggregate_record = aggregate_records[v313];
    aggregate_record.samples += 1;
    total_report.samples += 1;
    const v314 = record.responseCode;
    const v315 = v314 >= 400;
    if (v315) {
        aggregate_record.errors += 1;
        total_report.errors += 1;
    }
    const v316 = aggregate_record.max;
    const v317 = record.elapsed;
    const v318 = Math.max(v316, v317);
    aggregate_record.max = v318;
    const v319 = total_report.max;
    const v320 = record.elapsed;
    const v321 = Math.max(v319, v320);
    total_report.max = v321;
    const v322 = aggregate_record.min;
    const v323 = record.elapsed;
    const v324 = Math.min(v322, v323);
    aggregate_record.min = v324;
    const v325 = total_report.min;
    const v326 = record.elapsed;
    const v327 = Math.min(v325, v326);
    total_report.min = v327;
    const v328 = record.elapsed;
    aggregate_record.total += v328;
    const v329 = record.elapsed;
    total_report.total += v329;
    const v330 = record.bytes;
    aggregate_record.received += v330;
    const v331 = record.bytes;
    total_report.received += v331;
    const v332 = record.sentBytes;
    aggregate_record.sent += v332;
    const v333 = record.sentBytes;
    total_report.sent += v333;
    const v334 = aggregate_record.elapsed_times;
    const v335 = record.elapsed;
    const v336 = v334.push(v335);
    v336;
    const v337 = total_report.elapsed_times;
    const v338 = record.elapsed;
    const v339 = v337.push(v338);
    v339;
    const v340 = record.timeStamp;
    const v341 = record.elapsed;
    aggregate_record.end = v340 + v341;
    const v342 = record.timeStamp;
    const v343 = record.elapsed;
    total_report.end = v342 + v343;
    const v344 = total_report.start;
    const v345 = !v344;
    if (v345) {
        const v346 = record.timeStamp;
        total_report.start = v346;
    }
    const v347 = record.Latency;
    const v348 = Number.isInteger(v347);
    const v349 = aggregate_record.transaction;
    const v350 = !v349;
    const v351 = v348 && v350;
    if (v351) {
        const v352 = aggregate_record.latencies;
        const v353 = record.Latency;
        const v354 = v352.push(v353);
        v354;
        const v355 = total_report.latencies;
        const v356 = record.Latency;
        const v357 = v355.push(v356);
        v357;
        const v358 = aggregate_record.max_latency;
        const v359 = record.Latency;
        const v360 = Math.max(v358, v359);
        aggregate_record.max_latency = v360;
        const v361 = total_report.max_latency;
        const v362 = record.Latency;
        const v363 = Math.max(v361, v362);
        total_report.max_latency = v363;
        const v364 = aggregate_record.min_latency;
        const v365 = record.Latency;
        const v366 = Math.min(v364, v365);
        aggregate_record.min_latency = v366;
        const v367 = total_report.min_latency;
        const v368 = record.Latency;
        const v369 = Math.min(v367, v368);
        total_report.min_latency = v369;
        const v370 = record.Latency;
        aggregate_record.total_latency += v370;
        const v371 = record.Latency;
        total_report.total_latency += v371;
    }
};
const summarize = function (aggregate_report) {
    let key;
    for (key in aggregate_report) {
        const v372 = Object.hasOwnProperty;
        const v373 = v372.call(aggregate_report, key);
        if (v373) {
            const transaction = aggregate_report[key];
            const v374 = setSummaryCounts(transaction);
            v374;
        }
    }
};
const setSummaryCounts = function (total_record) {
    const v375 = total_record.elapsed_times;
    const v376 = v375.length;
    const v377 = v376 > 0;
    if (v377) {
        const v378 = total_record.samples;
        const v379 = v378 * 1000;
        const v380 = total_record.end;
        const v381 = total_record.start;
        const v382 = v380 - v381;
        const v383 = v379 / v382;
        const v384 = v383.toFixed(2);
        const v385 = +v384;
        total_record.tps = v385;
        const v386 = total_record.total;
        const v387 = total_record.samples;
        const v388 = v386 / v387;
        const v389 = v388.toFixed(2);
        const v390 = +v389;
        total_record.average = v390;
        const v391 = total_record.elapsed_times;
        const v393 = (a, b) => {
            const v392 = b - a;
            return v392;
        };
        const sorted_response_times = v391.sort(v393);
        const v394 = calculatePercentile(sorted_response_times, 50);
        total_record.p50 = v394;
        const v395 = calculatePercentile(sorted_response_times, 90);
        total_record.p90 = v395;
        const v396 = calculatePercentile(sorted_response_times, 95);
        total_record.p95 = v396;
        const v397 = calculatePercentile(sorted_response_times, 99);
        total_record.p99 = v397;
        const v398 = total_record.errors;
        const v399 = total_record.samples;
        const v400 = v398 / v399;
        const v401 = v400.toFixed(2);
        const v402 = +v401;
        total_record.error_rate = v402;
        const v403 = total_record.sent;
        const v404 = total_record.end;
        const v405 = total_record.start;
        const v406 = v404 - v405;
        const v407 = v403 / v406;
        const v408 = v407.toFixed(2);
        const v409 = +v408;
        total_record.sent_rate = v409;
        const v410 = total_record.received;
        const v411 = total_record.end;
        const v412 = total_record.start;
        const v413 = v411 - v412;
        const v414 = v410 / v413;
        const v415 = v414.toFixed(2);
        const v416 = +v415;
        total_record.received_rate = v416;
        const v417 = median(sorted_response_times);
        total_record.median = v417;
    } else {
        total_record.max = 0;
        total_record.min = 0;
    }
    const v418 = total_record.latencies;
    const v419 = v418.length;
    const v420 = v419 > 0;
    if (v420) {
        const v421 = total_record.latencies;
        const v423 = (a, b) => {
            const v422 = b - a;
            return v422;
        };
        const sorted_latencies = v421.sort(v423);
        const v424 = total_record.total_latency;
        const v425 = total_record.samples;
        const v426 = v424 / v425;
        const v427 = v426.toFixed(2);
        const v428 = +v427;
        total_record.average_latency = v428;
        const v429 = calculatePercentile(sorted_latencies, 50);
        total_record.p50_latency = v429;
        const v430 = calculatePercentile(sorted_latencies, 90);
        total_record.p90_latency = v430;
        const v431 = calculatePercentile(sorted_latencies, 95);
        total_record.p95_latency = v431;
        const v432 = calculatePercentile(sorted_latencies, 99);
        total_record.p99_latency = v432;
        const v433 = median(sorted_latencies);
        total_record.median_latency = v433;
    } else {
        total_record.max_latency = 0;
        total_record.min_latency = 0;
    }
};
const calculatePercentile = function (sorted_response_times, percentile) {
    const v434 = 100 - percentile;
    const divisor = v434 / 100;
    const v435 = sorted_response_times.length;
    const v436 = v435 * divisor;
    const v437 = Math.ceil(v436);
    const xPercent = parseInt(v437);
    const v438 = sorted_response_times.slice(0, xPercent);
    const v439 = -1;
    const v440 = v438.slice(v439);
    const v441 = v440[0];
    return v441;
};
;
const median = function (array) {
    const v442 = array.length;
    const v443 = v442 === 0;
    if (v443) {
        return 0;
    }
    const v444 = array.length;
    const v445 = v444 % 2;
    const v446 = v445 !== 0;
    if (v446) {
        const v447 = array.length;
        const v448 = v447 / 2;
        const v449 = Math.floor(v448);
        const v450 = array[v449];
        const v451 = parseFloat(v450);
        return v451;
    } else {
        const v452 = array.length;
        const mid = v452 / 2;
        const v453 = mid - 1;
        const v454 = array[v453];
        const v455 = array[mid];
        const v456 = v454 + v455;
        const v457 = v456 / 2;
        return v457;
    }
};
const getFilteredRecord = function (aggregate_report, transaction) {
    const filtered_report = {};
    let key;
    for (key in aggregate_report) {
        const v458 = Object.hasOwnProperty;
        const v459 = v458.call(aggregate_report, key);
        if (v459) {
            const current_record = aggregate_report[key];
            const v460 = current_record['transaction'];
            const v461 = v460 === transaction;
            if (v461) {
                filtered_report[key] = current_record;
            }
        }
    }
    return filtered_report;
};
const copyLatencies = function (total_transactions_record, total_requests_record) {
    const v462 = total_requests_record.latencies;
    const v463 = v462.length;
    const v464 = v463 > 0;
    if (v464) {
        const v465 = total_requests_record.p50_latency;
        total_transactions_record.p50_latency = v465;
        const v466 = total_requests_record.p90_latency;
        total_transactions_record.p90_latency = v466;
        const v467 = total_requests_record.p95_latency;
        total_transactions_record.p95_latency = v467;
        const v468 = total_requests_record.p99_latency;
        total_transactions_record.p99_latency = v468;
        const v469 = total_requests_record.average_latency;
        total_transactions_record.average_latency = v469;
        const v470 = total_requests_record.median_latency;
        total_transactions_record.median_latency = v470;
        const v471 = total_requests_record.max_latency;
        total_transactions_record.max_latency = v471;
        const v472 = total_requests_record.min_latency;
        total_transactions_record.min_latency = v472;
        const v473 = total_requests_record.total_latency;
        total_transactions_record.total_latency = v473;
        const v474 = total_requests_record.latencies;
        total_transactions_record.latencies = v474;
    }
};
const aggregate = function (jtl_file_path) {
    const v475 = parse(jtl_file_path);
    const total_transactions = v475.total_transactions;
    const transactions = v475.transactions;
    const records = [];
    let key;
    for (key in transactions) {
        const v476 = Object.hasOwnProperty;
        const v477 = v476.call(transactions, key);
        if (v477) {
            const transaction = transactions[key];
            const v478 = getCSVAggregateRecord(transaction);
            const v479 = records.push(v478);
            v479;
        }
    }
    const v480 = getCSVAggregateRecord(total_transactions);
    const v481 = records.push(v480);
    v481;
    return records;
};
const getCSVAggregateRecord = function (aggregate_record) {
    const v482 = aggregate_record.label;
    const v483 = aggregate_record.samples;
    const v484 = aggregate_record.tps;
    const v485 = aggregate_record.average;
    const v486 = aggregate_record.median;
    const v487 = aggregate_record.p90;
    const v488 = aggregate_record.p95;
    const v489 = aggregate_record.p99;
    const v490 = aggregate_record.min;
    const v491 = aggregate_record.max;
    const v492 = aggregate_record.error_rate;
    const v493 = v492 + '%';
    const v494 = aggregate_record.sent_rate;
    const v495 = aggregate_record.received_rate;
    const record = {};
    record['Label'] = v482;
    record['# Samples'] = v483;
    record['Throughput'] = v484;
    record['Average'] = v485;
    record['Median'] = v486;
    record['90% Line'] = v487;
    record['95% Line'] = v488;
    record['99% Line'] = v489;
    record['Min'] = v490;
    record['Max'] = v491;
    record['Error %'] = v493;
    record['Sent KB/sec'] = v494;
    record['Received KB/sec'] = v495;
    const v496 = aggregate_record.latencies;
    const v497 = v496.length;
    const v498 = v497 > 0;
    if (v498) {
        const v499 = aggregate_record.average_latency;
        record['Average Latency'] = v499;
        const v500 = aggregate_record.median_latency;
        record['Median Latency'] = v500;
        const v501 = aggregate_record.p90_latency;
        record['90% Latency'] = v501;
        const v502 = aggregate_record.p95_latency;
        record['95% Latency'] = v502;
        const v503 = aggregate_record.p99_latency;
        record['99% Latency'] = v503;
        const v504 = aggregate_record.min_latency;
        record['Min Latency'] = v504;
        const v505 = aggregate_record.max_latency;
        record['Max Latency'] = v505;
    }
    return record;
};
const v506 = {};
v506.parse = parse;
v506.aggregate = aggregate;
module.exports = v506;
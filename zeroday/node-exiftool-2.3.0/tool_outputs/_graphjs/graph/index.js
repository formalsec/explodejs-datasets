'use strict';
const EventEmitter = require('events');
const lib = require('./lib');
const beginReady = require('./begin-ready');
const executeWithRs = require('./execute-with-rs');
const EXIFTOOL_PATH = 'exiftool';
const events = {};
events.OPEN = 'exiftool_opened';
events.EXIT = 'exiftool_exit';
const ExiftoolProcess = function ExiftoolProcess(bin) {
    const v297 = super();
    v297;
    const v298 = lib.isString(bin);
    let v299;
    if (v298) {
        v299 = bin;
    } else {
        v299 = EXIFTOOL_PATH;
    }
    this._bin = v299;
    this._process = undefined;
    this._open = false;
};
const close = function close() {
    const v300 = this._open;
    const v301 = !v300;
    if (v301) {
        const v302 = new Error('Exiftool process is not open');
        const v303 = Promise.reject(v302);
        return v303;
    }
    const v304 = this._process;
    const v305 = lib.close(v304);
    return v305;
};
ExiftoolProcess.close = close;
const _assignEncoding = function _assignEncoding(encoding) {
    let _encoding;
    const v306 = encoding === null;
    if (v306) {
        _encoding = undefined;
    } else {
        const v307 = lib.isString(encoding);
        if (v307) {
            _encoding = encoding;
        } else {
            _encoding = 'utf8';
        }
    }
    this._encoding = _encoding;
};
ExiftoolProcess._assignEncoding = _assignEncoding;
const open = function open(encoding, options) {
    let _encoding = encoding;
    let _options = options;
    const v308 = options === undefined;
    const v309 = typeof encoding;
    const v310 = v309 !== 'string';
    const v311 = v308 && v310;
    if (v311) {
        _encoding = undefined;
        _options = encoding;
    }
    const v312 = this._assignEncoding(_encoding);
    v312;
    const v313 = this._open;
    if (v313) {
        const v314 = new Error('Exiftool process is already open');
        const v315 = Promise.reject(v314);
        return v315;
    }
    const v316 = this._bin;
    const v317 = lib.spawn(v316, _options);
    const v360 = exiftoolProcess => {
        const v318 = events.OPEN;
        const v319 = exiftoolProcess.pid;
        const v320 = this.emit(v318, v319);
        v320;
        this._process = exiftoolProcess;
        const v321 = this._process;
        const v322 = this._exitListener;
        const v323 = v322.bind(this);
        const v324 = v321.on('exit', v323);
        v324;
        const v325 = this._process;
        const v326 = v325.stdout;
        const v327 = lib.isReadable(v326);
        const v328 = !v327;
        if (v328) {
            const v329 = this._process;
            const v330 = lib.killProcess(v329);
            v330;
            const v331 = new Error('Process was not spawned with a readable stdout, check stdio options.');
            throw v331;
        }
        const v332 = this._process;
        const v333 = v332.stdin;
        const v334 = lib.isWritable(v333);
        const v335 = !v334;
        if (v335) {
            const v336 = this._process;
            const v337 = lib.killProcess(v336);
            v337;
            const v338 = new Error('Process was not spawned with a writable stdin, check stdio options.');
            throw v338;
        }
        const v339 = this._process;
        const v340 = v339.stdout;
        const v341 = this._encoding;
        const v342 = v340.setEncoding(v341);
        v342;
        const v343 = this._process;
        const v344 = v343.stderr;
        const v345 = this._encoding;
        const v346 = v344.setEncoding(v345);
        v346;
        const v347 = this._process;
        const v348 = v347.stdout;
        const v349 = beginReady.setupResolveWriteStreamPipe(v348);
        this._stdoutResolveWs = v349;
        const v350 = this._process;
        const v351 = v350.stderr;
        const v352 = beginReady.setupResolveWriteStreamPipe(v351);
        this._stderrResolveWs = v352;
        const v353 = this._stdoutResolveWs;
        const v354 = console.error;
        const v355 = v353.on('error', v354);
        v355;
        const v356 = this._stderrResolveWs;
        const v357 = console.error;
        const v358 = v356.on('error', v357);
        v358;
        this._open = true;
        const v359 = exiftoolProcess.pid;
        return v359;
    };
    const v361 = v317.then(v360);
    return v361;
};
ExiftoolProcess.open = open;
const _exitListener = function _exitListener() {
    const v362 = events.EXIT;
    const v363 = this.emit(v362);
    v363;
    this._open = false;
};
ExiftoolProcess._exitListener = _exitListener;
const isOpen = function isOpen() {
    const v364 = this._open;
    return v364;
};
ExiftoolProcess.isOpen = isOpen;
const _executeCommand = function _executeCommand(command, args, argsNoSplit, debug) {
    const v365 = this._open;
    const v366 = !v365;
    if (v366) {
        const v367 = new Error('exiftool is not open');
        const v368 = Promise.reject(v367);
        return v368;
    }
    const v369 = this._process;
    const v370 = v369.signalCode;
    const v371 = v370 === 'SIGTERM';
    if (v371) {
        const v372 = new Error('Could not connect to the exiftool process');
        const v373 = Promise.reject(v372);
        return v373;
    }
    let proc;
    const v374 = debug === true;
    const v375 = this._process;
    if (v374) {
        proc = process;
    } else {
        proc = v375;
    }
    const v376 = this._stdoutResolveWs;
    const v377 = this._stderrResolveWs;
    const v378 = this._encoding;
    const v379 = lib.executeCommand(proc, v376, v377, command, args, argsNoSplit, v378);
    return v379;
};
ExiftoolProcess._executeCommand = _executeCommand;
const readMetadata = function readMetadata(file, args) {
    const v380 = lib.isReadable(file);
    if (v380) {
        const v381 = this._executeCommand;
        const v382 = v381.bind(this);
        const v383 = executeWithRs(file, args, v382);
        return v383;
    }
    const v384 = this._executeCommand(file, args);
    return v384;
};
ExiftoolProcess.readMetadata = readMetadata;
const writeMetadata = function writeMetadata(file, data, args, debug) {
    const v385 = lib.isString(file);
    const v386 = !v385;
    if (v386) {
        const v387 = new Error('File must be a string');
        throw v387;
    }
    const v388 = lib.checkDataObject(data);
    const v389 = !v388;
    if (v389) {
        const v390 = new Error('Data argument is not an object');
        const v391 = Promise.reject(v390);
        return v391;
    }
    const writeArgs = lib.mapDataToTagArray(data);
    const v392 = this._executeCommand(file, args, writeArgs, debug);
    return v392;
};
ExiftoolProcess.writeMetadata = writeMetadata;
ExiftoolProcess['is_class'] = true;
const v393 = {};
v393.ExiftoolProcess = ExiftoolProcess;
v393.EXIFTOOL_PATH = EXIFTOOL_PATH;
v393.events = events;
module.exports = v393;
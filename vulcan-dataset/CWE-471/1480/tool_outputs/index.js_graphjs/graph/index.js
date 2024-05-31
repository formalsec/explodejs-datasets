'use strict';
const Fs = require('fs');
const Os = require('os');
const Querystring = require('querystring');
const Stream = require('stream');
const Zlib = require('zlib');
const Boom = require('@hapi/boom');
const Bourne = require('@hapi/bourne');
const Content = require('@hapi/content');
const File = require('@hapi/file');
const Hoek = require('@hapi/hoek');
const Pez = require('@hapi/pez');
const Wreck = require('@hapi/wreck');
const v229 = options => {
    const v228 = Zlib.createGunzip(options);
    return v228;
};
const v231 = options => {
    const v230 = Zlib.createInflate(options);
    return v230;
};
const v232 = {};
v232.gzip = v229;
v232.deflate = v231;
const internals = {};
internals.decoders = v232;
const v270 = async function (req, tap, options) {
    const v233 = Hoek.assert(options, 'Missing options');
    v233;
    const v234 = options.parse;
    const v235 = v234 !== undefined;
    const v236 = Hoek.assert(v235, 'Missing parse option setting');
    v236;
    const v237 = options.output;
    const v238 = v237 !== undefined;
    const v239 = Hoek.assert(v238, 'Missing output option setting');
    v239;
    const v240 = req.headers;
    const contentLength = v240['content-length'];
    const v241 = options.maxBytes;
    const v242 = v241 !== undefined;
    const v243 = v242 && contentLength;
    const v244 = parseInt(contentLength, 10);
    const v245 = options.maxBytes;
    const v246 = v244 > v245;
    const v247 = v243 && v246;
    if (v247) {
        const v248 = options.maxBytes;
        const v249 = 'Payload content length greater than maximum allowed: ' + v248;
        const v250 = Boom.entityTooLarge(v249);
        throw v250;
    }
    const v251 = options.override;
    const v252 = req.headers;
    const v253 = v252['content-type'];
    const v254 = v251 || v253;
    const v255 = options.defaultContentType;
    const v256 = v254 || v255;
    const v257 = v256 || 'application/octet-stream';
    const contentType = Content.type(v257);
    try {
        const v258 = options.allow;
        const v259 = options.allow;
        const v260 = contentType.mime;
        const v261 = v259.indexOf(v260);
        const v262 = -1;
        const v263 = v261 === v262;
        const v264 = v258 && v263;
        if (v264) {
            const v265 = Boom.unsupportedMediaType();
            throw v265;
        }
        const v266 = contentType.mime;
        const parsed = {};
        parsed.mime = v266;
        const v267 = options.parse;
        const v268 = v267 === true;
        if (v268) {
            parsed.payload = await internals.parse(req, tap, options, contentType);
            return parsed;
        }
        parsed.payload = await internals.raw(req, tap, options);
        return parsed;
    } catch (err) {
        const v269 = contentType.mime;
        err.mime = v269;
        throw err;
    }
};
exports.parse = v270;
const v284 = async function (req, tap, options, contentType) {
    const output = options.output;
    let source = internals.decoder(req, options);
    if (tap) {
        source = internals.pipe(source, tap);
    }
    const v271 = contentType.mime;
    const v272 = v271 === 'multipart/form-data';
    if (v272) {
        const v273 = options.multipart;
        const v274 = v273 === false;
        if (v274) {
            const v275 = Boom.unsupportedMediaType();
            throw v275;
        }
        return await internals.multipart(req, options, source, contentType);
    }
    const v276 = output === 'stream';
    if (v276) {
        return source;
    }
    const v277 = output === 'file';
    if (v277) {
        const file = await internals.writeFile(req, options, source);
        const v278 = file.item;
        return v278;
    }
    const v279 = options.timeout;
    const v280 = options.maxBytes;
    const v281 = {
        timeout: v279,
        maxBytes: v280
    };
    const payload = await Wreck.read(source, v281);
    const v282 = contentType.mime;
    const v283 = internals.object(options, payload, v282);
    return v283;
};
internals.parse = v284;
const v300 = function (source, options) {
    const v285 = source.headers;
    const contentEncoding = v285['content-encoding'];
    const v286 = options.decoders;
    const v287 = internals.decoders;
    const decoders = v286 || v287;
    const v288 = decoders.hasOwnProperty(contentEncoding);
    const v289 = !v288;
    if (v289) {
        return source;
    }
    const v290 = options.compression;
    const v291 = options.compression;
    const v292 = v291[contentEncoding];
    const v293 = v290 && v292;
    const decoderOptions = v293 || null;
    const stream = decoders[contentEncoding](decoderOptions);
    const orig = stream.emit;
    const v298 = (event, ...args) => {
        const v294 = event === 'error';
        if (v294) {
            const v295 = args[0];
            const v296 = Boom.badRequest('Invalid compressed payload', v295);
            args = [v296];
        }
        const v297 = orig.call(stream, event, ...args);
        return v297;
    };
    stream.emit = v298;
    const v299 = internals.pipe(source, stream);
    return v299;
};
internals.decoder = v300;
const v309 = async function (req, tap, options) {
    const output = options.output;
    let source = req;
    const v301 = options.parse;
    const v302 = v301 === 'gunzip';
    if (v302) {
        source = internals.decoder(source, options);
    }
    if (tap) {
        source = internals.pipe(source, tap);
    }
    const v303 = output === 'stream';
    if (v303) {
        return source;
    }
    const v304 = output === 'file';
    if (v304) {
        const file = await internals.writeFile(req, options, source);
        const v305 = file.item;
        return v305;
    }
    const v306 = options.timeout;
    const v307 = options.maxBytes;
    const v308 = {
        timeout: v306,
        maxBytes: v307
    };
    return await Wreck.read(source, v308);
};
internals.raw = v309;
const v330 = function (options, payload, mime) {
    const v310 = mime === 'application/octet-stream';
    if (v310) {
        const v311 = payload.length;
        let v312;
        if (v311) {
            v312 = payload;
        } else {
            v312 = null;
        }
        return v312;
    }
    const v313 = mime.match(/^text\/.+$/);
    if (v313) {
        const v314 = payload.toString('utf8');
        return v314;
    }
    const v315 = /^application\/(?:.+\+)?json$/.test(mime);
    if (v315) {
        const v316 = payload.length;
        const v317 = !v316;
        if (v317) {
            return null;
        }
        try {
            const v318 = payload.toString('utf8');
            const v319 = options.protoAction;
            const v320 = { protoAction: v319 };
            const v321 = Bourne.parse(v318, v320);
            return v321;
        } catch (err) {
            const error = Boom.badRequest('Invalid request payload JSON format', err);
            error.raw = payload;
            throw error;
        }
    }
    const v322 = mime === 'application/x-www-form-urlencoded';
    if (v322) {
        const v323 = options.querystring;
        const v324 = Querystring.parse;
        const parse = v323 || v324;
        const v325 = payload.length;
        const v326 = payload.toString('utf8');
        const v327 = parse(v326);
        const v328 = {};
        let v329;
        if (v325) {
            v329 = v327;
        } else {
            v329 = v328;
        }
        return v329;
    }
    const error = Boom.unsupportedMediaType();
    error.raw = payload;
    throw error;
};
internals.object = v330;
const v372 = function (req, options, source, contentType) {
    const v370 = (resolve, reject) => {
        const clientTimeout = options.timeout;
        let clientTimeoutId;
        const v333 = () => {
            const v331 = Boom.clientTimeout();
            const v332 = reject(v331);
            return v332;
        };
        const v334 = setTimeout(v333, clientTimeout);
        if (clientTimeout) {
            clientTimeoutId = v334;
        } else {
            clientTimeoutId = null;
        }
        const v335 = options.maxBytes;
        const v336 = { maxBytes: v335 };
        const dispenserOptions = Hoek.applyToDefaults(contentType, v336);
        const dispenser = new Pez.Dispenser(dispenserOptions);
        const onError = err => {
            const v337 = Boom.badRequest('Invalid multipart payload format', err);
            const v338 = reject(v337);
            return v338;
        };
        const v339 = dispenser.once('error', onError);
        v339;
        const data = {};
        const pendingFiles = [];
        const set = (name, value) => {
            const v340 = data.hasOwnProperty(name);
            const v341 = !v340;
            if (v341) {
                data[name] = value;
            } else {
                const v342 = data[name];
                const v343 = Array.isArray(v342);
                if (v343) {
                    const v344 = data[name];
                    const v345 = v344.push(value);
                    v345;
                } else {
                    const v346 = data[name];
                    data[name] = [
                        v346,
                        value
                    ];
                }
            }
        };
        const finalize = async () => {
            const v347 = clearTimeout(clientTimeoutId);
            v347;
            const v348 = dispenser.removeListener('error', onError);
            v348;
            const v349 = dispenser.removeListener('part', onPart);
            v349;
            const v350 = dispenser.removeListener('field', onField);
            v350;
            const v351 = dispenser.removeListener('close', onClose);
            v351;
            try {
                const files = await Promise.all(pendingFiles);
                let v352;
                const item = v352.item;
                const name = v352.name;
                for (v352 of files) {
                    const v353 = set(name, item);
                    v353;
                }
            } catch (err) {
                const v354 = reject(err);
                v354;
                return;
            }
            const v355 = resolve(data);
            v355;
        };
        let output;
        const v356 = options.multipart;
        const v357 = options.multipart;
        const v358 = v357.output;
        const v359 = options.output;
        if (v356) {
            output = v358;
        } else {
            output = v359;
        }
        const onPart = part => {
            const v360 = output === 'file';
            if (v360) {
                const v361 = internals.writeFile(req, options, part);
                const v362 = pendingFiles.push(v361);
                v362;
            } else {
                const v363 = internals.part(part, output, set, options);
                v363;
            }
        };
        const v364 = dispenser.on('part', onPart);
        v364;
        const onField = (name, value) => {
            const v365 = set(name, value);
            return v365;
        };
        const v366 = dispenser.on('field', onField);
        v366;
        const onClose = () => {
            const v367 = finalize();
            return v367;
        };
        const v368 = dispenser.once('close', onClose);
        v368;
        const v369 = source.pipe(dispenser);
        v369;
    };
    const v371 = new Promise(v370);
    return v371;
};
internals.multipart = v372;
const v405 = function (req, options, stream) {
    const v402 = (resolve, reject) => {
        const v373 = options.uploads;
        const v374 = Os.tmpdir();
        const v375 = v373 || v374;
        const path = File.uniqueFilename(v375);
        const v376 = { flags: 'wx' };
        const file = Fs.createWriteStream(path, v376);
        const counter = new internals.Counter(options);
        const finalize = err => {
            const v377 = req.removeListener('aborted', onAbort);
            v377;
            const v378 = file.removeListener('close', finalize);
            v378;
            const v379 = file.removeListener('error', finalize);
            v379;
            if (err) {
                const v380 = stream.unpipe(counter);
                v380;
                const v381 = counter.unpipe(file);
                v381;
                const v382 = file.destroy();
                v382;
                const v384 = () => {
                    const v383 = reject(err);
                    return v383;
                };
                const v385 = Fs.unlink(path, v384);
                v385;
                return;
            }
            const v386 = counter.bytes;
            const v387 = {};
            v387.path = path;
            v387.bytes = v386;
            const result = {};
            result.item = v387;
            const v388 = stream.name;
            if (v388) {
                const v389 = stream.name;
                result.name = v389;
                const v390 = result.item;
                const v391 = stream.filename;
                v390.filename = v391;
                const v392 = result.item;
                const v393 = stream.headers;
                v392.headers = v393;
            }
            const v394 = resolve(result);
            v394;
        };
        const v395 = file.once('close', finalize);
        v395;
        const v396 = file.once('error', finalize);
        v396;
        const onAbort = () => {
            const v397 = Boom.badRequest('Client connection aborted');
            const v398 = finalize(v397);
            return v398;
        };
        const v399 = req.once('aborted', onAbort);
        v399;
        const v400 = internals.pipe(stream, counter);
        v400;
        const v401 = internals.pipe(counter, file);
        v401;
    };
    const promise = new Promise(v402);
    const v403 = Hoek.ignore;
    const v404 = promise.catch(v403);
    v404;
    return promise;
};
internals.writeFile = v405;
const v432 = async function (part, output, set, options) {
    const payload = await Wreck.read(part);
    const v406 = output === 'stream';
    if (v406) {
        const item = Wreck.toReadableStream(payload);
        const v407 = part.filename;
        const v408 = part.headers;
        const v409 = {};
        v409.filename = v407;
        v409.headers = v408;
        item.hapi = v409;
        const v410 = part.name;
        const v411 = set(v410, item);
        return v411;
    }
    const v412 = part.headers;
    const v413 = v412['content-type'];
    const ct = v413 || '';
    const v414 = ct.split(';');
    const v415 = v414[0];
    const v416 = v415.trim();
    const mime = v416.toLowerCase();
    const annotate = value => {
        const v417 = part.name;
        const v418 = output === 'annotated';
        const v419 = part.filename;
        const v420 = part.headers;
        const v421 = {
            filename: v419,
            headers: v420,
            payload: value
        };
        let v422;
        if (v418) {
            v422 = v421;
        } else {
            v422 = value;
        }
        const v423 = set(v417, v422);
        return v423;
    };
    const v424 = !mime;
    if (v424) {
        const v425 = annotate(payload);
        return v425;
    }
    const v426 = payload.length;
    const v427 = !v426;
    if (v427) {
        const v428 = {};
        const v429 = annotate(v428);
        return v429;
    }
    try {
        const object = internals.object(options, payload, mime);
        const v430 = annotate(object);
        v430;
    } catch (err) {
        const v431 = annotate(payload);
        v431;
    }
};
internals.part = v432;
const v438 = function (from, to) {
    const v435 = err => {
        const v433 = from.unpipe(to);
        v433;
        const v434 = to.emit('error', err);
        v434;
    };
    const v436 = from.once('error', v435);
    v436;
    const v437 = from.pipe(to);
    return v437;
};
internals.pipe = v438;
internals.Counter = class extends Stream.Transform {
    constructor(options) {
        const v440 = super();
        v440;
        this.bytes = 0;
        const v441 = options.maxBytes;
        this._maxBytes = v441;
    }
    _transform(chunk, encoding, next) {
        const v442 = this.bytes;
        const v443 = chunk.length;
        this.bytes = v442 + v443;
        const v444 = this._maxBytes;
        const v445 = v444 !== undefined;
        const v446 = this.bytes;
        const v447 = this._maxBytes;
        const v448 = v446 > v447;
        const v449 = v445 && v448;
        if (v449) {
            const v450 = this._maxBytes;
            const v451 = 'Payload content length greater than maximum allowed: ' + v450;
            const v452 = Boom.entityTooLarge(v451);
            const v453 = next(v452);
            return v453;
        }
        const v454 = next(null, chunk);
        return v454;
    }
};
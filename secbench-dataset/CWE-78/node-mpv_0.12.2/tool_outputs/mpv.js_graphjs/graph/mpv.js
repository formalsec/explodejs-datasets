const v206 = require('child_process');
var spawn = v206.spawn;
const v207 = require('child_process');
var exec = v207.execSync;
const v208 = require('events');
var eventEmitter = v208.EventEmitter;
const v214 = function (obj, source) {
    let key;
    for (key in source) {
        const v209 = source.hasOwnProperty(key);
        const v210 = obj[key];
        const v211 = v210 === undefined;
        const v212 = v209 && v211;
        if (v212) {
            const v213 = source[key];
            obj[key] = v213;
        }
    }
    return obj;
};
const v216 = function (array, values) {
    const v215 = array.concat(values);
    return v215;
};
const v229 = function (object, source) {
    let key;
    for (key in source) {
        const v217 = source.hasOwnProperty(key);
        if (v217) {
            const v218 = object[key];
            const v219 = typeof v218;
            const v220 = v219 === 'object';
            const v221 = source[key];
            const v222 = typeof v221;
            const v223 = v222 === 'object';
            const v224 = v220 && v223;
            if (v224) {
                const v225 = object[key];
                const v226 = source[key];
                const v227 = this.merge(v225, v226);
                v227;
            } else {
                const v228 = source[key];
                object[key] = v228;
            }
        }
    }
    return object;
};
const v233 = function (array1, array2) {
    const v230 = array1.concat(array2);
    const v231 = new Set(v230);
    const v232 = Array.from(v231);
    return v232;
};
const v239 = function (target) {
    var i = 1;
    const v234 = arguments.length;
    let v235 = i < v234;
    while (v235) {
        var source = arguments[i];
        let key;
        for (key in source) {
            const v237 = source.hasOwnProperty(key);
            if (v237) {
                const v238 = source[key];
                target[key] = v238;
            }
        }
        const v236 = i++;
        v235 = i < v234;
    }
    return target;
};
var _ = {};
_.defaults = v214;
_.concat = v216;
_.merge = v229;
_.union = v233;
_.extend = v239;
var commandModule = require('./_commands');
var controlModule = require('./_controls');
var playlistModule = require('./_playlist');
var audioModule = require('./_audio');
var videoModule = require('./_video');
var subtitleModule = require('./_subtitle');
var socket = require('../ipcInterface');
const mpv = function (options, mpv_args) {
    const v240 = eventEmitter.call(this);
    v240;
    var ipcCommand = '';
    const v241 = options.ipc_command;
    if (v241) {
        const v242 = options.ipc_command;
        const v243 = v242 == '--input-ipc-server';
        const v244 = options.ipc_command;
        const v245 = v244 == '--input-unix-socket';
        const v246 = v243 || v245;
        const v247 = !v246;
        if (v247) {
            const v248 = console.log('Warning: ipcCommand was neither "--input-unix-socket" nor "--input-ipc-server"');
            v248;
        }
        ipcCommand = options.ipc_command;
    } else {
        const v249 = options.binary;
        const v250 = options.binary;
        const v251 = v250 + ' --version';
        let v252;
        if (v249) {
            v252 = v251;
        } else {
            v252 = 'mpv --version';
        }
        const v253 = { encoding: 'utf8' };
        var output = exec(v252, v253);
        const v254 = output.match(/UNKNOWN/);
        const v255 = v254 == null;
        if (v255) {
            const v256 = output.match(/\d\.*\.*/);
            var start = v256.index;
            const v257 = output.match(/\(C\)/);
            var end = v257.index;
            const v258 = output.substr(start, end);
            const v259 = v258.split('.');
            const v260 = v259[1];
            var versionNumber = parseInt(v260);
            const v261 = isNaN(versionNumber);
            if (v261) {
                ipcCommand = '--input-unix-socket';
            } else {
                const v262 = versionNumber >= 17;
                if (v262) {
                    ipcCommand = '--input-ipc-server';
                } else {
                    ipcCommand = '--input-unix-socket';
                }
            }
        } else {
            ipcCommand = '--input-ipc-server';
        }
    }
    const v263 = {};
    v263['debug'] = false;
    v263['verbose'] = false;
    v263['socket'] = '/tmp/node-mpv.sock';
    v263['audio_only'] = false;
    v263['time_update'] = 1;
    v263['binary'] = null;
    this.options = v263;
    const v264 = {};
    const v265 = options || v264;
    const v266 = this.options;
    const v267 = _.defaults(v265, v266);
    this.options = v267;
    const v268 = {};
    v268['mute'] = false;
    v268['pause'] = false;
    v268['duration'] = null;
    v268['volume'] = 100;
    v268['filename'] = null;
    v268['path'] = null;
    v268['media-title'] = null;
    v268['playlist-pos'] = null;
    v268['playlist-count'] = null;
    v268['loop'] = 'no';
    this.observed = v268;
    var observedVideo = {};
    observedVideo['fullscreen'] = false;
    observedVideo['sub-visibility'] = false;
    const v269 = {};
    this.observedIDs = v269;
    var currentTimePos = null;
    const v270 = ipcCommand + '=';
    const v271 = this.options;
    const v272 = v271.socket;
    const v273 = v270 + v272;
    var defaultArgs = [
        v273,
        '--idle',
        '--quiet'
    ];
    const v274 = this.options;
    const v275 = v274.audio_only;
    if (v275) {
        const v276 = [
            '--no-video',
            '--no-audio-display'
        ];
        defaultArgs = _.concat(defaultArgs, v276);
    } else {
        const v277 = this.observed;
        const v278 = _.merge(v277, observedVideo);
        v278;
    }
    if (mpv_args) {
        defaultArgs = _.union(defaultArgs, mpv_args);
    }
    const v279 = options.binary;
    if (v279) {
        const v280 = options.binary;
        const v281 = spawn(v280, defaultArgs);
        this.mpvPlayer = v281;
    } else {
        const v282 = spawn('mpv', defaultArgs);
        this.mpvPlayer = v282;
    }
    const v283 = this.options;
    this.socket = new ipcInterface(v283);
    const v284 = this.socket;
    const v285 = [
        0,
        'time-pos'
    ];
    const v286 = v284.command('observe_property', v285);
    v286;
    const v296 = function () {
        const v287 = this.observed;
        const v288 = v287.filename;
        const v289 = this.observed;
        const v290 = v289.pause;
        const v291 = !v290;
        const v292 = v288 && v291;
        const v293 = currentTimePos != null;
        const v294 = v292 && v293;
        if (v294) {
            const v295 = this.emit('timeposition', currentTimePos);
            v295;
        }
    };
    const v297 = v296.bind(this);
    const v298 = this.options;
    const v299 = v298.time_update;
    const v300 = v299 * 1000;
    const v301 = setInterval(v297, v300);
    v301;
    const v311 = function () {
        var id = 1;
        const v302 = this.observed;
        const v303 = Object.keys(v302);
        const v308 = function (property) {
            const v304 = this.observed;
            const v305 = v304.hasOwnProperty(property);
            if (v305) {
                const v306 = this.observeProperty(property, id);
                v306;
                const v307 = this.observedIDs;
                v307[id] = property;
                id += 1;
            }
        };
        const v309 = v308.bind(this);
        const v310 = v303.forEach(v309);
        v310;
    };
    var observeProperties = v311.bind(this);
    const v312 = observeProperties();
    v312;
    const v313 = this.mpvPlayer;
    const v328 = function () {
        const v314 = this.options;
        const v315 = v314.debug;
        if (v315) {
            const v316 = console.log('MPV Player seems to have died. Restarting...');
            v316;
        }
        const v317 = options.binary;
        if (v317) {
            const v318 = options.binary;
            const v319 = spawn(v318, defaultArgs);
            this.mpvPlayer = v319;
        } else {
            const v320 = spawn('mpv', defaultArgs);
            this.mpvPlayer = v320;
        }
        currentTimePos = null;
        const v325 = function () {
            const v321 = observeProperties();
            v321;
            const v322 = this.socket;
            const v323 = [
                0,
                'time-pos'
            ];
            const v324 = v322.command('observe_property', v323);
            v324;
        };
        const v326 = v325.bind(this);
        const v327 = setTimeout(v326, 1000);
        v327;
    };
    const v329 = v328.bind(this);
    const v330 = v313.on('close', v329);
    v330;
    const v331 = this.mpvPlayer;
    const v335 = function (error) {
        const v332 = this.options;
        const v333 = v332.debug;
        if (v333) {
            const v334 = console.log(error);
            v334;
        }
    };
    const v336 = v335.bind(this);
    const v337 = v331.on('error', v336);
    v337;
    const v338 = this.socket;
    const v397 = function (data) {
        const v339 = data.hasOwnProperty('event');
        if (v339) {
            const v340 = this.options;
            const v341 = v340.verbose;
            if (v341) {
                const v342 = data.hasOwnProperty('event');
                if (v342) {
                    const v343 = data.event;
                    const v344 = v343 === 'property-change';
                    const v345 = !v344;
                    if (v345) {
                        const v346 = JSON.stringify(data);
                        const v347 = 'Message received: ' + v346;
                        const v348 = console.log(v347);
                        v348;
                    }
                } else {
                    const v349 = JSON.stringify(data);
                    const v350 = 'Message received: ' + v349;
                    const v351 = console.log(v350);
                    v351;
                }
            }
            const v352 = data.event;
            switch (v352) {
            case 'idle':
                const v353 = this.options;
                const v354 = v353.verbose;
                if (v354) {
                    const v355 = console.log('Event: stopped');
                    v355;
                }
                ;
                const v356 = this.emit('stopped');
                v356;
                break;
            case 'playback-restart':
                const v357 = this.options;
                const v358 = v357.verbose;
                if (v358) {
                    const v359 = console.log('Event: start');
                    v359;
                }
                ;
                const v360 = this.emit('started');
                v360;
                break;
            case 'pause':
                const v361 = this.options;
                const v362 = v361.verbose;
                if (v362) {
                    const v363 = console.log('Event: pause');
                    v363;
                }
                ;
                const v364 = this.emit('paused');
                v364;
                break;
            case 'unpause':
                const v365 = this.options;
                const v366 = v365.verbose;
                if (v366) {
                    const v367 = console.log('Event: unpause');
                    v367;
                }
                ;
                const v368 = this.emit('resumed');
                v368;
                break;
            case 'property-change':
                const v369 = data.name;
                const v370 = v369 === 'time-pos';
                if (v370) {
                    currentTimePos = data.data;
                    break;
                } else {
                    const v371 = this.observed;
                    const v372 = data.name;
                    const v373 = data.data;
                    v371[v372] = v373;
                    const v374 = this.observed;
                    const v375 = this.emit('statuschange', v374);
                    v375;
                    const v376 = this.options;
                    const v377 = v376.verbose;
                    if (v377) {
                        const v378 = console.log('Event: statuschange');
                        v378;
                        const v379 = data.name;
                        const v380 = 'Property change: ' + v379;
                        const v381 = v380 + ' - ';
                        const v382 = data.data;
                        const v383 = v381 + v382;
                        const v384 = console.log(v383);
                        v384;
                    }
                    break;
                }
            default:
            }
        } else {
            const v385 = data.hasOwnProperty('request_id');
            if (v385) {
                const v386 = this.options;
                const v387 = v386.verbose;
                if (v387) {
                    const v388 = data.request_id;
                    const v389 = 'Get Request: ' + v388;
                    const v390 = v389 + ' - ';
                    const v391 = data.data;
                    const v392 = v390 + v391;
                    const v393 = console.log(v392);
                    v393;
                }
                const v394 = data.request_id;
                const v395 = data.data;
                const v396 = this.emit('getrequest', v394, v395);
                v396;
            }
        }
    };
    const v398 = v397.bind(this);
    const v399 = v338.on('message', v398);
    v399;
};
const v403 = function (file, mode) {
    mode = mode || 'replace';
    const v400 = this.socket;
    const v401 = [
        file,
        mode
    ];
    const v402 = v400.command('loadfile', v401);
    v402;
};
const v407 = function (url, mode) {
    mode = mode || 'replace';
    const v404 = this.socket;
    const v405 = [
        url,
        mode
    ];
    const v406 = v404.command('loadfile', v405);
    v406;
};
const v408 = {
    constructor: mpv,
    loadFile: v403,
    loadStream: v407
};
const v409 = eventEmitter.prototype;
const v410 = _.extend(v408, controlModule, commandModule, playlistModule, audioModule, videoModule, subtitleModule, v409);
mpv.prototype = v410;
module.exports = mpv;
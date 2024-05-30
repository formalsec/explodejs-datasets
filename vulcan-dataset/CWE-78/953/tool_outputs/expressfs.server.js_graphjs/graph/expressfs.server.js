var fs = require('fs');
const v212 = require('child_process');
var exec = v212.exec;
var async = require('async');
var Path = require('path');
var dirtospace = require('dirtospace');
var mkdirp = require('mkdirp');
var _ = require('underscore');
const v422 = function (app, options) {
    const v213 = {};
    options = options || v213;
    const v214 = options.prefix;
    var prefix = v214 || '/';
    const v215 = prefix + 'expressfs.appendFile';
    const v231 = function (req, res, next) {
        const v216 = req.body;
        var path = v216.path;
        var encoding = 'utf8';
        const v217 = req.body;
        const v218 = v217.encoding;
        if (v218) {
            const v219 = req.body;
            encoding = v219.encoding;
        }
        const v220 = req.body;
        const v221 = v220.content;
        const v229 = function (err) {
            if (err) {
                const v222 = res.send(err);
                return v222;
            }
            const v223 = req.body;
            const v224 = v223.redirect;
            if (v224) {
                const v225 = req.body;
                const v226 = v225.redirect;
                const v227 = res.redirect(v226);
                return v227;
            }
            const v228 = res.send('');
            v228;
        };
        const v230 = fs.appendFile(path, v221, encoding, v229);
        v230;
    };
    const v232 = app.post(v215, v231);
    v232;
    const v233 = prefix + 'expressfs.cp';
    const v242 = function (req, res, next) {
        const v234 = req.body;
        var source = v234.source;
        const v235 = req.body;
        var destination = v235.destination;
        const v236 = 'cp -R ' + source;
        const v237 = v236 + ' ';
        const v238 = v237 + destination;
        const v240 = function () {
            const v239 = res.send('');
            v239;
        };
        const v241 = exec(v238, v240);
        v241;
    };
    const v243 = app.post(v233, v242);
    v243;
    const v244 = prefix + 'expressfs.create';
    const v257 = function (req, res, next) {
        const v245 = req.body;
        var path = v245.path;
        const v255 = function (exists) {
            if (exists) {
                const v246 = path + ' already exists';
                const v247 = res.send(v246);
                return v247;
            }
            const v248 = req.body;
            const v249 = v248.content;
            const v250 = v249 || '';
            const v253 = function (err) {
                if (err) {
                    const v251 = res.send(err);
                    return v251;
                }
                const v252 = res.send('');
                v252;
            };
            const v254 = fs.writeFile(path, v250, 'utf8', v253);
            v254;
        };
        const v256 = fs.exists(path, v255);
        v256;
    };
    const v258 = app.post(v244, v257);
    v258;
    var createUntitled = function (path, i, extension, content, callback) {
        var suffix = i || '';
        const v259 = path + 'untitled';
        const v260 = v259 + suffix;
        const v261 = v260 + '.';
        var filename = v261 + extension;
        const v271 = function (exists) {
            if (exists) {
                const v262 = i + 1;
                const v263 = createUntitled(path, v262, extension, content, callback);
                return v263;
            }
            const v269 = function (err) {
                if (err) {
                    const v264 = callback(err);
                    v264;
                } else {
                    const v265 = 'untitled' + suffix;
                    const v266 = v265 + '.';
                    const v267 = v266 + extension;
                    const v268 = callback(null, v267);
                    v268;
                }
            };
            const v270 = fs.writeFile(filename, content, 'utf8', v269);
            v270;
        };
        const v272 = fs.exists(filename, v271);
        v272;
    };
    var createUntitledDir = function (path, i, callback) {
        var suffix = i || '';
        const v273 = path + 'untitled';
        var filename = v273 + suffix;
        const v281 = function (exists) {
            if (exists) {
                const v274 = i + 1;
                const v275 = createUntitledDir(path, v274, callback);
                return v275;
            }
            const v279 = function (err) {
                if (err) {
                    const v276 = callback(err);
                    v276;
                } else {
                    const v277 = 'untitled' + suffix;
                    const v278 = callback(null, v277);
                    v278;
                }
            };
            const v280 = mkdirp(filename, v279);
            v280;
        };
        const v282 = fs.exists(filename, v281);
        v282;
    };
    const v283 = prefix + 'expressfs.createUntitled';
    const v295 = function (req, res, next) {
        const v284 = req.body;
        const v285 = v284.path;
        const v286 = v285.replace(/\/$/, '');
        var path = v286 + '/';
        const v287 = req.body;
        var extension = v287.extension;
        var content = '';
        const v288 = req.body;
        const v289 = v288.content;
        if (v289) {
            const v290 = req.body;
            content = v290.content;
        }
        const v293 = function (err, filename) {
            const v291 = res.set('Content-Type', 'text/plain');
            v291;
            const v292 = res.send(filename);
            return v292;
        };
        const v294 = createUntitled(path, 0, extension, content, v293);
        v294;
    };
    const v296 = app.post(v283, v295);
    v296;
    const v297 = prefix + 'expressfs.createUntitledDir';
    const v305 = function (req, res, next) {
        const v298 = req.body;
        const v299 = v298.path;
        const v300 = v299.replace(/\/$/, '');
        var path = v300 + '/';
        const v303 = function (err, filename) {
            const v301 = res.set('Content-Type', 'text/plain');
            v301;
            const v302 = res.send(filename);
            return v302;
        };
        const v304 = createUntitledDir(path, 0, v303);
        v304;
    };
    const v306 = app.post(v297, v305);
    v306;
    const v307 = prefix + 'expressfs.dirStats';
    const v313 = function (req, res, next) {
        const v308 = req.body;
        var path = v308.path;
        const v311 = function (err, string) {
            const v309 = res.set('Content-Type', 'text/plain');
            v309;
            const v310 = res.send(string);
            return v310;
        };
        const v312 = dirtospace(path, v311);
        v312;
    };
    const v314 = app.post(v307, v313);
    v314;
    const v315 = prefix + 'expressfs.downloadDirectory';
    const v341 = function (req, res, next) {
        const v316 = req.body;
        var path = v316.path;
        var string = '';
        var first = '';
        var extension = false;
        const v317 = req.body;
        const v318 = v317.extension;
        if (v318) {
            const v319 = req.body;
            const v320 = v319.extension;
            const v321 = '.' + v320;
            const v322 = v321 + '$';
            extension = new RegExp(v322);
        }
        const v339 = function (err, files) {
            if (err) {
                const v323 = res.send(err, 400);
                return v323;
            }
            const v334 = function (filename, callback) {
                const v324 = filename.match(extension);
                const v325 = !v324;
                const v326 = extension && v325;
                if (v326) {
                    const v327 = callback();
                    v327;
                } else {
                    const v328 = first + filename;
                    string += v328 + ' ';
                    const v329 = path + filename;
                    const v332 = function (err, data) {
                        if (err) {
                            const v330 = res.send(err, 400);
                            return v330;
                        }
                        string += data.replace(/\n/g, '\n ');
                        const v331 = callback();
                        v331;
                    };
                    const v333 = fs.readFile(v329, 'utf8', v332);
                    v333;
                    first = '\n';
                }
            };
            const v337 = function (err, results) {
                const v335 = string + '\n';
                const v336 = res.send(v335);
                v336;
            };
            const v338 = async.eachSeries(files, v334, v337);
            v338;
        };
        const v340 = fs.readdir(path, v339);
        v340;
    };
    const v342 = app.post(v315, v341);
    v342;
    const v343 = prefix + 'expressfs.exists';
    const v351 = function (req, res, next) {
        const v344 = req.body;
        var path = v344.path;
        const v349 = function (exists) {
            if (exists) {
                const v345 = path + ' exists';
                const v346 = res.send(v345);
                v346;
            } else {
                const v347 = path + ' does NOT exist';
                const v348 = res.send(v347);
                v348;
            }
        };
        const v350 = fs.exists(path, v349);
        v350;
    };
    const v352 = app.post(v343, v351);
    v352;
    const v353 = prefix + 'expressfs.mkdir';
    const v359 = function (req, res, next) {
        const v354 = req.body;
        var path = v354.path;
        const v357 = function (err) {
            if (err) {
                const v355 = res.send(err);
                return v355;
            }
            const v356 = res.send('');
            v356;
        };
        const v358 = mkdirp(path, v357);
        v358;
    };
    const v360 = app.post(v353, v359);
    v360;
    const v361 = prefix + 'expressfs.readdir';
    const v368 = function (req, res, next) {
        const v362 = req.body;
        var path = v362.path;
        const v366 = function (err, contents) {
            if (err) {
                const v363 = res.send(err, 400);
                return v363;
            }
            const v364 = JSON.stringify(contents);
            const v365 = res.send(v364);
            v365;
        };
        const v367 = fs.readdir(path, v366);
        v367;
    };
    const v369 = app.post(v361, v368);
    v369;
    const v370 = prefix + 'expressfs.readFile';
    const v375 = function (req, res, next) {
        const v371 = req.body;
        var path = v371.path;
        const v373 = function (err, contents) {
            const v372 = res.send(contents);
            v372;
        };
        const v374 = fs.readFile(path, 'utf8', v373);
        v374;
    };
    const v376 = app.post(v370, v375);
    v376;
    const v377 = prefix + 'expressfs.rename';
    const v386 = function (req, res, next) {
        const v378 = req.body;
        var oldPath = v378.oldPath;
        const v379 = req.body;
        var newPath = v379.newPath;
        var p = Path.dirname(newPath);
        const v384 = function () {
            const v382 = function (err) {
                if (err) {
                    const v380 = res.send(err);
                    return v380;
                }
                const v381 = res.send('');
                v381;
            };
            const v383 = fs.rename(oldPath, newPath, v382);
            v383;
        };
        const v385 = mkdirp(p, v384);
        v385;
    };
    const v387 = app.post(v377, v386);
    v387;
    const v388 = prefix + 'expressfs.rmdir';
    const v394 = function (req, res, next) {
        const v389 = req.body;
        var path = v389.path;
        const v390 = 'rm -rf ' + path;
        const v392 = function () {
            const v391 = res.send('');
            v391;
        };
        const v393 = exec(v390, v392);
        v393;
    };
    const v395 = app.post(v388, v394);
    v395;
    const v396 = prefix + 'expressfs.unlink';
    const v402 = function (req, res, next) {
        const v397 = req.body;
        var path = v397.path;
        const v400 = function (err) {
            if (err) {
                const v398 = res.send(err, 400);
                return v398;
            }
            const v399 = res.send('');
            v399;
        };
        const v401 = fs.unlink(path, v400);
        v401;
    };
    const v403 = app.post(v396, v402);
    v403;
    const v404 = prefix + 'expressfs.writeFile';
    const v420 = function (req, res, next) {
        const v405 = req.body;
        var path = v405.path;
        var encoding = 'utf8';
        const v406 = req.body;
        const v407 = v406.encoding;
        const v408 = v407 === 'base64';
        if (v408) {
            encoding = 'base64';
        }
        const v409 = req.body;
        const v410 = v409.content;
        const v418 = function (err) {
            if (err) {
                const v411 = res.send(err);
                return v411;
            }
            const v412 = req.body;
            const v413 = v412.redirect;
            if (v413) {
                const v414 = req.body;
                const v415 = v414.redirect;
                const v416 = res.redirect(v415);
                return v416;
            }
            const v417 = res.send('');
            v417;
        };
        const v419 = fs.writeFile(path, v410, encoding, v418);
        v419;
    };
    const v421 = app.post(v404, v420);
    v421;
};
module.exports = v422;
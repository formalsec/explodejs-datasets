var argv;
var yargs = require('yargs');
var fs = require('fs');
var art = require('../ascii-art');
const v216 = yargs.usage('Usage: $0 <command> [options] <target>');
v216;
const v217 = yargs.command('image', 'convert an image to ascii');
const v218 = v217.command('art', 'get some ascii art from various sites');
const v219 = v218.command('text', 'add styles and/or font rendering to text');
const v220 = v219.demand(2);
const v221 = v220.example('$0 art textfiles.com/spock.art ', 'request the file "spock.art" remotely from "textfiles.com"');
const v222 = v221.example('$0 install Font.flf ', 'install a figlet font');
const v223 = v222.example('$0 image foo.jpg ', 'output foo.jpg as inline ascii text with ansi colors');
const v224 = v223.example('$0 text -F Doom "Some Titles"', 'outputs "Some Titles" in the Doom font');
const v225 = v224.example('$0 text -s red+underline "Some Titles"', 'outputs "Some Titles" with a red and underlined terminal style');
const v226 = v225.example('$0 text -F Doom "Some Titles"', 'outputs "Some Titles" in the Doom font');
const v227 = v226.example('$0 list all', 'show all fonts available at figlet.org');
const v228 = v227.example('$0 preview weird', 'visit the prieview page for weird.flf at figlet.org');
const v229 = v228.example('$0 install weird', 'install weird.flf into the local "/Fonts" directory');
const v230 = v229.example('$0 install weird -g', 'install weird.flf into the currently executing ascii-art instance');
const v231 = v230.alias('s', 'style');
const v232 = v231.nargs('s', 1);
const v233 = v232.describe('s', 'render a ansi style onto a string');
const v234 = v233.alias('F', 'font');
const v235 = v234.nargs('F', 1);
const v236 = v235.describe('F', 'render the output in the specified font');
const v237 = v236.alias('g', 'global');
const v238 = v237.nargs('g', 0);
const v239 = v238.describe('g', 'install the font globally');
const v240 = v239.alias('o', 'output');
const v241 = v240.nargs('o', 1);
const v242 = v241.describe('o', 'Save to a file');
const v243 = v242.alias('a', 'alphabet');
const v244 = v243.alias('a', 'alpha');
const v245 = v244.nargs('a', 1);
const v246 = art.valueScales;
const v247 = Object.keys(v246);
const v248 = v245.choices('a', v247);
const v249 = v248.describe('a', 'Which alphabet to use');
const v250 = v249.help('h');
const v251 = v250.alias('h', 'help');
const v252 = v251.epilog('\xA92016 - Abbey Hawk Sparrow');
v252;
argv = yargs.argv;
const v253 = argv._;
var action = v253.shift();
const v254 = argv._;
var target = v254.pop();
var ftp;
var request;
switch (action) {
case 'image':
    var options = {};
    options.filepath = target;
    const v255 = argv.a;
    if (v255) {
        const v256 = argv.a;
        options.alphabet = v256;
    }
    const v257 = process.stdout;
    const v258 = process && v257;
    const v259 = process.stdout;
    const v260 = v259.columns;
    const v261 = v258 && v260;
    if (v261) {
        const v262 = process.stdout;
        const v263 = v262.columns;
        options.width = v263;
    }
    var image = new art.Image(options);
    const v268 = function (err, rendered) {
        const v264 = argv.o;
        if (v264) {
            const v265 = argv.o;
            const v266 = fs.writeFile(v265, rendered);
            v266;
        } else {
            const v267 = console.log(rendered);
            v267;
        }
    };
    const v269 = image.write(v268);
    v269;
    break;
case 'art':
    const v270 = target || '';
    var parts = v270.split('/');
    const v271 = !request;
    if (v271) {
        request = require('request');
    }
    const page2List = function (text, base, omit) {
        const v272 = text.match(/<A(.*?)<\/A>/g);
        const v276 = function (i) {
            const v273 = i.indexOf('?');
            const v274 = -1;
            const v275 = v273 === v274;
            return v275;
        };
        const v277 = v272.filter(v276);
        const v290 = function (line) {
            const v278 = line.match(/".*?"/);
            const v279 = v278[0];
            var name = v279 || '';
            const v280 = line.match(/>.*?</);
            const v281 = v280[0];
            var file = v281 || '';
            const v282 = name.length;
            const v283 = v282 - 1;
            const v284 = name.substring(1, v283);
            const v285 = file.length;
            const v286 = v285 - 1;
            const v287 = file.substring(1, v286);
            const v288 = base + v287;
            const v289 = {};
            v289.name = v284;
            v289.file = v288;
            return v289;
        };
        const v291 = v277.map(v290);
        const v308 = function (i) {
            const v292 = [];
            const v293 = omit || v292;
            const v294 = i.name;
            const v295 = v293.indexOf(v294);
            const v296 = -1;
            const v297 = v295 === v296;
            const v298 = i.name;
            const v299 = v298.indexOf('://');
            const v300 = -1;
            const v301 = v299 === v300;
            const v302 = v297 && v301;
            const v303 = i.name;
            const v304 = v303.toUpperCase();
            const v305 = i.name;
            const v306 = v304 !== v305;
            const v307 = v302 && v306;
            return v307;
        };
        var matches = v291.filter(v308);
        return matches;
    };
    var exclusions = [
        '/apple',
        '/bbs',
        'LOGOS',
        'SEQ',
        '../archives/asciiart.zip',
        'NFOS',
        'LOGOS',
        'RTTY',
        '/piracy'
    ];
    const v309 = parts[0];
    switch (v309) {
    case 'textfiles.com':
        const v310 = parts[1];
        if (v310) {
            var pre = '';
            var post = '';
            const v311 = parts[1];
            switch (v311) {
            case 'NFOS':
                post = 'asciiart/';
            case 'asciiart':
                pre = 'artscene.';
                break;
            case 'LOGOS':
            case 'DECUS':
                post = 'art/';
                break;
            case 'RAZOR':
            case 'FAIRLIGHT':
            case 'DREAMTEAM':
            case 'HUMBLE':
            case 'HYBRID':
            case 'PRESTIGE':
            case 'INC':
            case 'TDUJAM':
            case 'ANSI':
                post = 'piracy/';
                break;
            }
            const v312 = parts[2];
            if (v312) {
                const v313 = 'http://' + pre;
                const v314 = v313 + 'textfiles.com/';
                const v315 = v314 + post;
                const v316 = parts[1];
                const v317 = v315 + v316;
                const v318 = v317 + '/';
                const v319 = parts[2];
                const v320 = v318 + v319;
                const v322 = function (err, req, data) {
                    const v321 = console.log(data);
                    v321;
                };
                const v323 = request(v320, v322);
                v323;
            } else {
                const v324 = 'http://' + pre;
                const v325 = v324 + 'textfiles.com/';
                const v326 = v325 + post;
                const v327 = parts[1];
                const v328 = v326 + v327;
                var base = v328 + '/';
                const v333 = function (err, req, data) {
                    if (err) {
                        throw err;
                    }
                    var text = data.toString();
                    var matches = page2List(text, base, exclusions);
                    const v329 = { data: matches };
                    const v331 = function (rendered) {
                        const v330 = console.log(rendered);
                        v330;
                    };
                    const v332 = art.table(v329, v331);
                    v332;
                };
                const v334 = request(base, v333);
                v334;
            }
        } else {
            const v335 = {
                name: 'asciiart',
                detail: 'community shared'
            };
            const v336 = {
                name: 'art',
                detail: 'classic files'
            };
            const v337 = {
                name: 'RTTY',
                detail: 'Teletype Art'
            };
            const v338 = {
                name: 'LOGOS',
                detail: 'Classic Logos'
            };
            const v339 = {
                name: 'DECUS',
                detail: 'Printer Art'
            };
            const v340 = {
                name: 'RAZOR',
                detail: 'Cracking Group'
            };
            const v341 = {
                name: 'FAIRLIGHT',
                detail: 'Cracking Group'
            };
            const v342 = {
                name: 'DREAMTEAM',
                detail: 'Cracking Group'
            };
            const v343 = {
                name: 'HUMBLE',
                detail: 'Cracking Group'
            };
            const v344 = {
                name: 'HYBRID',
                detail: 'Cracking Group'
            };
            const v345 = {
                name: 'PRESTIGE',
                detail: 'Cracking Group'
            };
            const v346 = {
                name: 'INC',
                detail: 'Cracking Group'
            };
            const v347 = {
                name: 'TDUJAM',
                detail: 'Cracking Group'
            };
            const v348 = {
                name: 'ANSI',
                detail: 'Misc ANSI Files'
            };
            const v349 = {
                name: 'NFOS',
                detail: 'Misc NFO Files'
            };
            const v350 = [
                v335,
                v336,
                v337,
                v338,
                v339,
                v340,
                v341,
                v342,
                v343,
                v344,
                v345,
                v346,
                v347,
                v348,
                v349
            ];
            const v351 = { data: v350 };
            const v353 = function (rendered) {
                const v352 = console.log(rendered);
                v352;
            };
            const v354 = art.table(v351, v353);
            v354;
        }
        break;
    case '':
        break;
    default:
        const v355 = parts[0];
        const v356 = 'unknown art source:' + v355;
        const v357 = new Error(v356);
        throw v357;
    }
    var options = {};
    options.filepath = target;
    break;
case 'text':
    var output = function (result) {
        const v358 = console.log(result);
        v358;
    };
    const v359 = argv.F;
    if (v359) {
        const v360 = argv.s;
        if (v360) {
            const v361 = argv.F;
            const v362 = argv.s;
            const v363 = art.font(target, v361, v362, output);
            v363;
        } else {
            const v364 = argv.F;
            const v365 = art.font(target, v364, output);
            v365;
        }
    } else {
        const v366 = argv.s;
        const v367 = v366 || '';
        const v368 = art.style(target, v367, true);
        const v369 = console.log(v368);
        v369;
    }
    break;
case 'list':
    var JSFtp = ftp || (ftp = require('jsftp'));
    const v370 = { host: 'ftp.figlet.org' };
    var client = new JSFtp(v370);
    var results = [];
    const v393 = function (err, res) {
        const v371 = !err;
        if (v371) {
            const v374 = function (item) {
                const v372 = item.name;
                const v373 = 'ours/' + v372;
                return v373;
            };
            const v375 = res.map(v374);
            results = results.concat(v375);
        }
        const v391 = function (err, res) {
            const v376 = !err;
            if (v376) {
                const v379 = function (item) {
                    const v377 = item.name;
                    const v378 = 'contributed/' + v377;
                    return v378;
                };
                const v380 = res.map(v379);
                results = results.concat(v380);
            }
            const v381 = client.raw;
            const v389 = function (err, data) {
                if (err) {
                    const v382 = console.error(err);
                    return v382;
                }
                const v387 = function (path) {
                    const v383 = path.split('/');
                    const v384 = v383.pop();
                    const v385 = v384.split('.');
                    const v386 = v385.shift();
                    return v386;
                };
                var names = results.map(v387);
                const v388 = console.log(names);
                v388;
            };
            const v390 = v381.quit(v389);
            v390;
        };
        const v392 = client.ls('pub/figlet/fonts/contributed', v391);
        v392;
    };
    const v394 = client.ls('pub/figlet/fonts/ours', v393);
    v394;
    break;
case 'preview':
    const v395 = require('child_process');
    var exec = v395.exec;
    const v396 = target.toLowerCase();
    const v397 = 'open "http://www.figlet.org/fontdb_example.cgi?font=' + v396;
    const v398 = v397 + '.flf"';
    const v399 = exec(v398);
    v399;
    break;
case 'install':
    var JSFtp = ftp || (ftp = require('jsftp'));
    const v400 = { host: 'ftp.figlet.org' };
    var ftp = new JSFtp(v400);
    var subdir = 'contributed';
    const v401 = 'pub/figlet/fonts/' + subdir;
    const v402 = v401 + '/';
    const v403 = target.toLowerCase();
    const v404 = v402 + v403;
    var url = v404 + '.flf';
    const v427 = function (err, socket) {
        if (err) {
            return;
        }
        var str = '';
        const v405 = function (d) {
            str += d.toString();
        };
        const v406 = socket.on('data', v405);
        v406;
        const v424 = function (err) {
            if (err) {
                const v407 = 'There was an error retrieving the font ' + target;
                const v408 = console.error(v407);
                v408;
            } else {
                let dir;
                const v409 = argv.g;
                const v410 = process.cwd();
                const v411 = v410 + '/Fonts/';
                const v412 = __dirname + '/../Fonts/';
                if (v409) {
                    dir = v411;
                } else {
                    dir = v412;
                }
                const v413 = target.toLowerCase();
                const v414 = dir + v413;
                const v415 = v414 + '.flf';
                const v422 = function (err) {
                    const v416 = ftp.raw;
                    const v420 = function (err, data) {
                        if (err) {
                            const v417 = console.error(err);
                            return v417;
                        }
                        const v418 = target + ' written';
                        const v419 = console.log(v418);
                        v419;
                    };
                    const v421 = v416.quit(v420);
                    v421;
                };
                const v423 = fs.writeFile(v415, str, v422);
                v423;
            }
        };
        const v425 = socket.on('close', v424);
        v425;
        const v426 = socket.resume();
        v426;
    };
    const v428 = ftp.get(url, v427);
    v428;
    break;
default:
    const v429 = 'unknown action: ' + action;
    const v430 = new Error(v429);
    throw v430;
}
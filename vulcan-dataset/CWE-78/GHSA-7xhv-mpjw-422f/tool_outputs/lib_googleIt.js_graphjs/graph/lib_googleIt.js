'use strict';
const v204 = { value: true };
const v205 = Object.defineProperty(exports, '__esModule', v204);
v205;
exports.errorTryingToOpen = errorTryingToOpen;
exports.openInBrowser = openInBrowser;
exports.getSnippet = getSnippet;
exports.display = display;
exports.getResults = getResults;
exports.getResponse = getResponse;
const v206 = void 0;
exports.parseGoogleSearchResultUrl = v206;
exports.default = exports.parseGoogleSearchResultUrl;
const ownKeys = function (object, enumerableOnly) {
    var keys = Object.keys(object);
    const v207 = Object.getOwnPropertySymbols;
    if (v207) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            const v210 = function (sym) {
                const v208 = Object.getOwnPropertyDescriptor(object, sym);
                const v209 = v208.enumerable;
                return v209;
            };
            symbols = symbols.filter(v210);
        }
        const v211 = keys.push;
        const v212 = v211.apply(keys, symbols);
        v212;
    }
    return keys;
};
const _objectSpread = function (target) {
    var i = 1;
    const v213 = arguments.length;
    let v214 = i < v213;
    while (v214) {
        let source;
        const v216 = arguments[i];
        const v217 = v216 != null;
        const v218 = arguments[i];
        const v219 = {};
        if (v217) {
            source = v218;
        } else {
            source = v219;
        }
        const v220 = i % 2;
        if (v220) {
            const v221 = Object(source);
            const v222 = ownKeys(v221, true);
            const v225 = function (key) {
                const v223 = source[key];
                const v224 = _defineProperty(target, key, v223);
                v224;
            };
            const v226 = v222.forEach(v225);
            v226;
        } else {
            const v227 = Object.getOwnPropertyDescriptors;
            if (v227) {
                const v228 = Object.getOwnPropertyDescriptors(source);
                const v229 = Object.defineProperties(target, v228);
                v229;
            } else {
                const v230 = Object(source);
                const v231 = ownKeys(v230);
                const v234 = function (key) {
                    const v232 = Object.getOwnPropertyDescriptor(source, key);
                    const v233 = Object.defineProperty(target, key, v232);
                    v233;
                };
                const v235 = v231.forEach(v234);
                v235;
            }
        }
        const v215 = i++;
        v214 = i < v213;
    }
    return target;
};
const _defineProperty = function (obj, key, value) {
    const v236 = key in obj;
    if (v236) {
        const v237 = {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        };
        const v238 = Object.defineProperty(obj, key, v237);
        v238;
    } else {
        obj[key] = value;
    }
    return obj;
};
var request = require('request');
var fs = require('fs');
var querystring = require('querystring');
var cheerio = require('cheerio');
const v239 = require('colors');
v239;
var _require = require('child_process');
var exec = _require.exec;
var _require2 = require('./utils');
var getDefaultRequestOptions = _require2.getDefaultRequestOptions;
var getTitleSelector = _require2.getTitleSelector;
var getLinkSelector = _require2.getLinkSelector;
var getSnippetSelector = _require2.getSnippetSelector;
var getResultStatsSelector = _require2.getResultStatsSelector;
var getResultCursorSelector = _require2.getResultCursorSelector;
var logIt = _require2.logIt;
var saveToFile = _require2.saveToFile;
var saveResponse = _require2.saveResponse;
const errorTryingToOpen = function (error, stdout, stderr) {
    if (error) {
        const v240 = 'Error trying to open link in browser: '.concat(error);
        const v241 = console.log(v240);
        v241;
        const v242 = 'stdout: '.concat(stdout);
        const v243 = console.log(v242);
        v243;
        const v244 = 'stderr: '.concat(stderr);
        const v245 = console.log(v244);
        v245;
    }
};
const openInBrowser = function (open, results) {
    const v246 = open !== undefined;
    if (v246) {
        const v247 = results.slice(0, open);
        const v251 = function (result) {
            const v248 = result.link;
            const v249 = 'open '.concat(v248);
            const v250 = exec(v249, errorTryingToOpen);
            v250;
        };
        const v252 = v247.forEach(v251);
        v252;
    }
};
const getSnippet = function (elem) {
    const findData = function (child) {
        const v253 = child.data;
        const v254 = !v253;
        if (v254) {
            const v255 = child.children;
            const v259 = function (c) {
                const v256 = c.data;
                const v257 = findData(c);
                const v258 = v256 || v257;
                return v258;
            };
            const v260 = v255.map(v259);
            return v260;
        }
        const v261 = child.data;
        return v261;
    };
    const v262 = elem.children;
    const v263 = elem.children;
    const v264 = v263.length;
    const v265 = v264 > 0;
    const v266 = v262 && v265;
    const v267 = elem.children;
    const v271 = function (child) {
        const v268 = findData(child);
        const v269 = Array(v268);
        const v270 = v269.join('');
        return v270;
    };
    const v272 = v267.map(v271);
    const v273 = v272.join('');
    let v274;
    if (v266) {
        v274 = v273;
    } else {
        v274 = '';
    }
    return v274;
};
const display = function (results, disableConsole, onlyUrls) {
    const v275 = logIt('\n', disableConsole);
    v275;
    const v290 = function (result) {
        if (onlyUrls) {
            const v276 = result.link;
            const v277 = v276.green;
            const v278 = logIt(v277, disableConsole);
            v278;
        } else {
            const v279 = result.title;
            if (v279) {
                const v280 = result.title;
                const v281 = v280.blue;
                const v282 = logIt(v281, disableConsole);
                v282;
                const v283 = result.link;
                const v284 = v283.green;
                const v285 = logIt(v284, disableConsole);
                v285;
                const v286 = result.snippet;
                const v287 = logIt(v286, disableConsole);
                v287;
                const v288 = logIt('\n', disableConsole);
                v288;
            } else {
                const v289 = logIt('Result title is undefined.');
                v289;
            }
        }
    };
    const v291 = results.forEach(v290);
    v291;
};
var parseGoogleSearchResultUrl = function parseGoogleSearchResultUrl(url) {
    const v292 = !url;
    if (v292) {
        return undefined;
    }
    const v293 = url.charAt(0);
    const v294 = v293 === '/';
    if (v294) {
        const v295 = querystring.parse(url);
        const v296 = v295.url;
        return v296;
    }
    return url;
};
exports.parseGoogleSearchResultUrl = parseGoogleSearchResultUrl;
const getResults = function (_ref) {
    var data = _ref.data;
    var noDisplay = _ref.noDisplay;
    var disableConsole = _ref.disableConsole;
    var onlyUrls = _ref.onlyUrls;
    var titleSelector = _ref.titleSelector;
    var linkSelector = _ref.linkSelector;
    var snippetSelector = _ref.snippetSelector;
    var resultStatsSelector = _ref.resultStatsSelector;
    var cursorSelector = _ref.cursorSelector;
    var $ = cheerio.load(data);
    var results = [];
    const v297 = getTitleSelector(titleSelector);
    const v298 = $(v297);
    var titles = v298.contents();
    const v308 = function (index, elem) {
        const v299 = elem.data;
        if (v299) {
            const v300 = elem.data;
            const v301 = { title: v300 };
            const v302 = results.push(v301);
            v302;
        } else {
            const v303 = elem.children;
            const v304 = v303[0];
            const v305 = v304.data;
            const v306 = { title: v305 };
            const v307 = results.push(v306);
            v307;
        }
    };
    const v309 = titles.each(v308);
    v309;
    const v310 = getLinkSelector(linkSelector);
    const v311 = $(v310);
    const v320 = function (index, elem) {
        const v312 = results.length;
        const v313 = index < v312;
        if (v313) {
            const v314 = results[index];
            const v315 = elem.attribs;
            const v316 = v315.href;
            const v317 = parseGoogleSearchResultUrl(v316);
            const v318 = { link: v317 };
            const v319 = Object.assign(v314, v318);
            results[index] = v319;
        }
    };
    const v321 = v311.map(v320);
    v321;
    const v322 = getSnippetSelector(snippetSelector);
    const v323 = $(v322);
    const v330 = function (index, elem) {
        const v324 = results.length;
        const v325 = index < v324;
        if (v325) {
            const v326 = results[index];
            const v327 = getSnippet(elem);
            const v328 = { snippet: v327 };
            const v329 = Object.assign(v326, v328);
            results[index] = v329;
        }
    };
    const v331 = v323.map(v330);
    v331;
    if (onlyUrls) {
        const v334 = function (r) {
            const v332 = r.link;
            const v333 = {};
            v333.link = v332;
            return v333;
        };
        results = results.map(v334);
    }
    const v335 = !noDisplay;
    if (v335) {
        const v336 = display(results, disableConsole, onlyUrls);
        v336;
    }
    const v337 = getResultStatsSelector(resultStatsSelector);
    const v338 = $(v337);
    const v339 = v338.html();
    var resultStats = v339 || '';
    const v340 = resultStats.split(' results');
    const v341 = [''];
    const v342 = v340 || v341;
    const v343 = v342[0];
    const v344 = v343.split('About ');
    const v345 = v344[1];
    const v346 = v345 || '';
    var approximateResults = v346.replace(',', '');
    const v347 = resultStats.split(' (');
    const v348 = v347[1];
    const v349 = v348 || '';
    const v350 = v349.split(' seconds');
    const v351 = v350[0];
    var seconds = parseFloat(v351);
    const v352 = getResultCursorSelector(cursorSelector);
    const v353 = $(v352);
    const v354 = v353.html();
    var cursor = v354 || '';
    const v355 = cursor.split('</span>');
    const v356 = v355[1];
    var page = parseInt(v356, 10);
    var stats = {};
    stats.page = page;
    stats.approximateResults = approximateResults;
    stats.seconds = seconds;
    const v357 = {};
    v357.results = results;
    v357.stats = stats;
    return v357;
};
const getResponse = function (_ref2) {
    var filePath = _ref2.fromFile;
    var fromString = _ref2.fromString;
    var options = _ref2.options;
    var htmlFileOutputPath = _ref2.htmlFileOutputPath;
    var query = _ref2.query;
    var limit = _ref2.limit;
    var userAgent = _ref2.userAgent;
    var start = _ref2.start;
    var includeSites = _ref2.includeSites;
    var excludeSites = _ref2.excludeSites;
    const v380 = function (resolve, reject) {
        if (filePath) {
            const v364 = function (err, data) {
                if (err) {
                    const v358 = 'Erorr accessing file at '.concat(filePath, ': ');
                    const v359 = v358.concat(err);
                    const v360 = new Error(v359);
                    const v361 = reject(v360);
                    return v361;
                }
                const v362 = { body: data };
                const v363 = resolve(v362);
                return v363;
            };
            const v365 = fs.readFile(filePath, v364);
            v365;
        } else {
            if (fromString) {
                const v366 = { body: fromString };
                const v367 = resolve(v366);
                return v367;
            }
        }
        const v368 = {
            limit: limit,
            query: query,
            userAgent: userAgent,
            start: start,
            includeSites: includeSites,
            excludeSites: excludeSites
        };
        var defaultOptions = getDefaultRequestOptions(v368);
        const v369 = {};
        const v370 = _objectSpread(v369, defaultOptions);
        const v371 = _objectSpread(v370, options);
        const v378 = function (error, response, body) {
            if (error) {
                const v372 = 'Error making web request: '.concat(error);
                const v373 = new Error(v372);
                const v374 = reject(v373);
                return v374;
            }
            const v375 = saveResponse(response, htmlFileOutputPath);
            v375;
            const v376 = {
                body: body,
                response: response
            };
            const v377 = resolve(v376);
            return v377;
        };
        const v379 = request(v371, v378);
        v379;
    };
    const v381 = new Promise(v380);
    return v381;
};
const googleIt = function (config) {
    var output = config.output;
    var open = config.open;
    var returnHtmlBody = config.returnHtmlBody;
    var titleSelector = config.titleSelector;
    var linkSelector = config.linkSelector;
    var snippetSelector = config.snippetSelector;
    var resultStatsSelector = config.resultStatsSelector;
    var cursorSelector = config.cursorSelector;
    var start = config.start;
    var diagnostics = config.diagnostics;
    const v405 = function (resolve, reject) {
        const v382 = getResponse(config);
        const v402 = function (_ref3) {
            var body = _ref3.body;
            var response = _ref3.response;
            const v383 = config['no-display'];
            const v384 = config.disableConsole;
            const v385 = config['only-urls'];
            const v386 = {
                data: body,
                noDisplay: v383,
                disableConsole: v384,
                onlyUrls: v385,
                titleSelector: titleSelector,
                linkSelector: linkSelector,
                snippetSelector: snippetSelector,
                resultStatsSelector: resultStatsSelector,
                cursorSelector: cursorSelector,
                start: start
            };
            var _getResults = getResults(v386);
            var results = _getResults.results;
            var stats = _getResults.stats;
            var statusCode = response.statusCode;
            const v387 = results.length;
            const v388 = v387 === 0;
            const v389 = statusCode !== 200;
            const v390 = v388 && v389;
            const v391 = !diagnostics;
            const v392 = v390 && v391;
            if (v392) {
                const v393 = 'Error in response: statusCode '.concat(statusCode, '. To see the raw response object, please include the \'diagnostics: true\' as part of the options object (or -d if using command line)');
                const v394 = new Error(v393);
                const v395 = reject(v394);
                v395;
            }
            const v396 = saveToFile(output, results);
            v396;
            const v397 = openInBrowser(open, results);
            v397;
            const v398 = returnHtmlBody || diagnostics;
            if (v398) {
                const v399 = {
                    results: results,
                    body: body,
                    response: response,
                    stats: stats
                };
                const v400 = resolve(v399);
                return v400;
            }
            const v401 = resolve(results);
            return v401;
        };
        const v403 = v382.then(v402);
        const v404 = v403.catch(reject);
        v404;
    };
    const v406 = new Promise(v405);
    return v406;
};
var _default = googleIt;
exports.default = _default;
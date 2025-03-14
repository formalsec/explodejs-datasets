'use strict';
var fs = require('jsdoc/fs');
var path = require('jsdoc/path');
var angularTemplate = require('angular-template');
var marked = require('marked');
var helper = require('jsdoc/util/templateHelper');
var templatePath;
const v246 = env.opts;
var outdir = v246.destination;
const v247 = env.opts;
const v248 = v247.query;
const v249 = env.opts;
const v250 = v249.query;
const v251 = v250.module;
var defaultModuleName = v248 && v251;
const v252 = env.opts;
const v253 = v252.query;
const v254 = env.opts;
const v255 = v254.query;
const v256 = v255.docs;
const v257 = v256.split(',');
var docFiles = v253 && v257;
const v258 = env.conf;
const v259 = v258.templates;
const v260 = {};
var conf = v259 || v260;
var getDocletExamples = function (doclet) {
    const v261 = doclet.examples;
    const v262 = [];
    const v263 = v261 || v262;
    const v269 = function (example) {
        var caption;
        var code;
        const v264 = example.match(/^\s*<caption>([\s\S]+?)<\/caption>(\s*[\n\r])([\s\S]+)$/i);
        if (v264) {
            caption = RegExp.$1;
            code = RegExp.$3;
        }
        const v265 = caption || '';
        const v266 = code || example;
        const v267 = v266.replace(/</g, '&lt;');
        const v268 = {};
        v268.caption = v265;
        v268.code = v267;
        return v268;
    };
    var examples = v263.map(v269);
    return examples;
};
var memberCache = {};
var getMembers = function (data, doclet) {
    const v270 = doclet.longname;
    var members = memberCache[v270];
    const v271 = typeof members;
    const v272 = v271 === 'undefined';
    const v273 = doclet.kind;
    const v274 = v273 === 'class';
    const v275 = v272 && v274;
    if (v275) {
        const v276 = doclet.name;
        members = memberCache[v276];
    }
    const v277 = [];
    const v278 = members || v277;
    return v278;
};
var getChildren = function (data, doclet) {
    var members = getMembers(data, doclet);
    var children = {};
    const v286 = function (doclet) {
        const v279 = doclet.kind;
        const v280 = doclet.kind;
        const v281 = children[v280];
        const v282 = [];
        children[v279] = v281 || v282;
        const v283 = doclet.kind;
        const v284 = children[v283];
        const v285 = v284.push(doclet);
        v285;
    };
    const v287 = members.forEach(v286);
    v287;
    return children;
};
var hashToLink = function (doclet, hash) {
    const v288 = /^(#.+)/.test(hash);
    const v289 = !v288;
    if (v289) {
        return hash;
    } else {
        var url = helper.createLink(doclet);
        url = url.replace(/(#.+|$)/, hash);
        const v290 = '<a href="' + url;
        const v291 = v290 + '">';
        const v292 = v291 + hash;
        const v293 = v292 + '</a>';
        return v293;
    }
};
var generate = function (filepath, data) {
    const v294 = data.name;
    data.title = v294;
    const v295 = JSON.stringify(data, null, '  ');
    data.prettyJson = v295;
    data.basePath = __dirname;
    data.marked = marked;
    var layoutPath = path.join(templatePath, 'html', 'layout.html');
    const v296 = { jsMode: false };
    var html = angularTemplate(layoutPath, data, v296);
    const v297 = fs.writeFileSync(filepath, html, 'utf8');
    v297;
};
var copyStaticFiles = function () {
    const v298 = [
        'css',
        'js'
    ];
    const v305 = function (dirName) {
        var fromDir = path.join(templatePath, dirName);
        var staticFiles = fs.ls(fromDir, 3);
        const v303 = function (fileName) {
            const v299 = path.join(outdir, dirName);
            const v300 = fileName.replace(fromDir, v299);
            var toDir = fs.toDir(v300);
            const v301 = fs.mkPath(toDir);
            v301;
            const v302 = fs.copyFileSync(fileName, toDir);
            v302;
        };
        const v304 = staticFiles.forEach(v303);
        v304;
    };
    const v306 = v298.forEach(v305);
    v306;
};
var generateSourceFiles = function (sourceCodes, nav) {
    const v307 = path.join(outdir, 'source');
    const v308 = fs.mkPath(v307);
    v308;
    var layoutPath = path.join(templatePath, 'html', 'layout.html');
    let key;
    for (key in sourceCodes) {
        var el = sourceCodes[key];
        const v309 = require('fs');
        const v310 = el.path;
        const v311 = el.filename;
        const v312 = path.join(v310, v311);
        var sourceCode = v309.readFileSync(v312, 'utf8');
        const v313 = el.longname;
        const v314 = v313 + '.html';
        var outputPath = path.join(outdir, 'source', v314);
        const v315 = el.name;
        const v316 = el.longname;
        const v317 = el.path;
        const v318 = el.filename;
        const v319 = sourceCode.replace(/</g, '&lt;');
        const v320 = el.filename;
        const v321 = 'source : ' + v320;
        var data = {};
        data.name = v315;
        data.longname = v316;
        data.path = v317;
        data.filename = v318;
        data.code = v319;
        data.nav = nav;
        data.basePath = __dirname;
        data.title = v321;
        var html = angularTemplate(layoutPath, data);
        const v322 = fs.writeFileSync(outputPath, html, 'utf8');
        v322;
    }
};
var generateTemplateFiles = function (templateCodes, nav) {
    const v323 = path.join(outdir, 'templates');
    const v324 = fs.mkPath(v323);
    v324;
    let key;
    for (key in templateCodes) {
        var el = templateCodes[key];
        const v325 = el.filePath;
        const v326 = fs.existsSync(v325);
        if (v326) {
            const v327 = require('fs');
            const v328 = el.filePath;
            var templateHtml = v327.readFileSync(v328, 'utf8');
            const v329 = el.outputName;
            var outputPath = path.join(outdir, 'templates', v329);
            const v330 = el.name;
            const v331 = el.longname;
            const v332 = el.filePath;
            const v333 = templateHtml.replace(/</g, '&lt;');
            const v334 = el.templateUrl;
            const v335 = 'template : ' + v334;
            var data = {};
            data.name = v330;
            data.longname = v331;
            data.path = v332;
            data.code = v333;
            data.nav = nav;
            data.basePath = __dirname;
            data.title = v335;
            var layoutPath = path.join(templatePath, 'html', 'layout.html');
            var html = angularTemplate(layoutPath, data);
            const v336 = fs.writeFileSync(outputPath, html, 'utf8');
            v336;
        }
    }
};
var generateStaticDocuments = function (docs, nav) {
    const v337 = path.join(outdir, 'docs');
    const v338 = fs.mkPath(v337);
    v338;
    const v339 = [];
    const v340 = docs || v339;
    const v345 = function (el) {
        const v341 = el + '.html';
        var outputPath = path.join(outdir, v341);
        const v342 = require('fs');
        var markdown = v342.readFileSync(el, 'utf8');
        const v343 = marked(markdown);
        var documentData = {};
        documentData.nav = nav;
        documentData.readme = v343;
        documentData.basePath = __dirname;
        documentData.title = el;
        var layoutPath = path.join(templatePath, 'html', 'layout.html');
        var html = angularTemplate(layoutPath, documentData);
        const v344 = fs.writeFileSync(outputPath, html, 'utf8');
        v344;
    };
    const v346 = v340.forEach(v345);
    v346;
};
var generateTutorialFile = function (title, tutorial, filename) {
    var layoutPath = path.join(templatePath, 'html', 'tutorial.html');
    const v347 = tutorial.title;
    const v348 = tutorial.parse();
    const v349 = tutorial.children;
    var tutorialData = {};
    tutorialData.title = title;
    tutorialData.header = v347;
    tutorialData.content = v348;
    tutorialData.children = v349;
    var tutorialPath = path.join(outdir, filename);
    var tutoriallink = function (tutorial) {
        const v350 = {
            tag: 'em',
            classname: 'disabled',
            prefix: 'Tutorial: '
        };
        const v351 = helper.toTutorial(tutorial, null, v350);
        return v351;
    };
    const v352 = {
        basePath: __dirname,
        tutorialData: tutorialData,
        tutoriallink: tutoriallink
    };
    var html = angularTemplate(layoutPath, v352);
    html = helper.resolveLinks(html);
    const v353 = fs.writeFileSync(tutorialPath, html, 'utf8');
    v353;
};
var generateTutorialFiles = function (node) {
    const v354 = path.join(outdir, 'tutorials');
    const v355 = fs.mkPath(v354);
    v355;
    const v356 = node.children;
    const v363 = function (child) {
        const v357 = child.title;
        const v358 = 'Tutorial: ' + v357;
        const v359 = child.name;
        const v360 = helper.tutorialToUrl(v359);
        const v361 = generateTutorialFile(v358, child, v360);
        v361;
        const v362 = generateTutorialFiles(child);
        v362;
    };
    const v364 = v356.forEach(v363);
    v364;
};
const v490 = function (data, opts, tutorials) {
    const v365 = helper.setTutorials(tutorials);
    v365;
    const v366 = data.sort('longname, version, since');
    v366;
    templatePath = opts.template;
    const v367 = { kind: 'class' };
    var classes = helper.find(data, v367);
    var sourceCodes = {};
    var templateCodes = {};
    const v399 = function (doclet) {
        const v368 = doclet.meta;
        const v369 = doclet.kind;
        const v370 = v369 == 'class';
        const v371 = v368 && v370;
        if (v371) {
            const v372 = doclet.name;
            const v373 = doclet.name;
            const v374 = doclet.longname;
            const v375 = doclet.meta;
            const v376 = v375.path;
            const v377 = doclet.meta;
            const v378 = v377.filename;
            const v379 = {};
            v379.name = v373;
            v379.longname = v374;
            v379.path = v376;
            v379.filename = v378;
            sourceCodes[v372] = v379;
        }
        const v380 = doclet.ngdoc;
        const v381 = v380 == 'directive';
        if (v381) {
            const v382 = doclet.meta;
            const v383 = v382.path;
            const v384 = doclet.meta;
            const v385 = v384.filename;
            const v386 = path.join(v383, v385);
            var code = fs.readFileSync(v386, 'utf8');
            var matches = code.match(/templateUrl\s*:\s* (.*)/);
            const v387 = matches[1];
            var templateUrl = matches && v387;
            const v388 = templateUrl.indexOf('function');
            const v389 = -1;
            const v390 = v388 === v389;
            const v391 = templateUrl && v390;
            if (v391) {
                const v392 = templateUrl.trim();
                templateUrl = v392.replace(/['",]/g, '');
                var templatePath = templateUrl;
                const v393 = doclet.name;
                const v394 = doclet.longname;
                const v395 = templateUrl.replace(/[\/\\]/g, '_');
                var templateCode = {};
                templateCode.name = v393;
                templateCode.longname = v394;
                templateCode.filePath = templatePath;
                templateCode.templateUrl = templateUrl;
                templateCode.outputName = v395;
                doclet.templateCode = templateCode;
                const v396 = templateCode.outputName;
                const v397 = path.join('templates', v396);
                doclet.templateUrl = v397;
                const v398 = doclet.name;
                templateCodes[v398] = templateCode;
            }
        }
    };
    const v400 = classes.forEach(v399);
    v400;
    const v401 = data();
    const v408 = function (doclet) {
        const v402 = doclet.memberof;
        const v403 = !v402;
        if (v403) {
            return;
        }
        const v404 = doclet.memberof;
        var cache = memberCache[v404];
        const v405 = !cache;
        if (v405) {
            const v406 = doclet.memberof;
            memberCache[v406] = [doclet];
        } else {
            const v407 = cache.push(doclet);
            v407;
        }
    };
    const v409 = v401.each(v408);
    v409;
    const v410 = data();
    const v450 = function (doclet) {
        const v411 = getChildren(data, doclet);
        doclet.children = v411;
        const v412 = getDocletExamples(doclet);
        doclet.examples = v412;
        const v413 = helper.createLink(doclet);
        doclet.jsDocUrl = v413;
        const v416 = function (tutorial) {
            const v414 = {
                tag: 'em',
                classname: 'disabled',
                prefix: 'Tutorial: '
            };
            const v415 = helper.toTutorial(tutorial, null, v414);
            return v415;
        };
        doclet.tutoriallink = v416;
        const v417 = doclet.meta;
        if (v417) {
            const v418 = doclet.kind;
            const v419 = v418 == 'class';
            if (v419) {
                const v420 = doclet.name;
                const v421 = sourceCodes[v420];
                const v422 = v421.longname;
                const v423 = encodeURIComponent(v422);
                const v424 = 'source/' + v423;
                const v425 = v424 + '.html#line';
                const v426 = doclet.meta;
                const v427 = v426.lineno;
                doclet.sourceUrl = v425 + v427;
            } else {
                const v428 = doclet.kind;
                const v429 = v428 == 'function';
                const v430 = doclet.kind;
                const v431 = v430 == 'member';
                const v432 = v429 || v431;
                const v433 = doclet.memberof;
                const v434 = sourceCodes[v433];
                const v435 = v432 && v434;
                if (v435) {
                    const v436 = doclet.memberof;
                    const v437 = sourceCodes[v436];
                    const v438 = v437.longname;
                    const v439 = encodeURIComponent(v438);
                    const v440 = 'source/' + v439;
                    const v441 = v440 + '.html#line';
                    const v442 = doclet.meta;
                    const v443 = v442.lineno;
                    doclet.sourceUrl = v441 + v443;
                }
            }
        }
        const v444 = doclet.see;
        if (v444) {
            const v445 = doclet.see;
            const v448 = function (seeItem, i) {
                const v447 = hashToLink(doclet, seeItem);
                v446[i] = v447;
            };
            const v449 = v445.forEach(v448);
            v449;
        }
    };
    const v451 = v410.each(v450);
    v451;
    const v452 = [];
    const v453 = docFiles || v452;
    const v454 = {};
    var nav = {};
    nav.docs = v453;
    nav.module = v454;
    const v473 = function (doclet) {
        const v455 = doclet.memberof;
        var module = v455 || defaultModuleName;
        const v456 = doclet.ngdoc;
        var group = v456 || 'undefined';
        const v457 = nav.module;
        const v458 = nav.module;
        const v459 = v458[module];
        const v460 = {};
        v457[module] = v459 || v460;
        const v461 = nav.module;
        const v462 = v461[module];
        const v463 = nav.module;
        const v464 = v463[module];
        const v465 = v464[group];
        const v466 = {};
        v462[group] = v465 || v466;
        const v467 = nav.module;
        const v468 = v467[module];
        const v469 = v468[group];
        const v470 = doclet.name;
        const v471 = doclet.jsDocUrl;
        const v472 = {};
        v472.jsDocUrl = v471;
        v469[v470] = v472;
    };
    const v474 = classes.forEach(v473);
    v474;
    const v475 = copyStaticFiles();
    v475;
    const v476 = generateSourceFiles(sourceCodes, nav);
    v476;
    const v477 = generateStaticDocuments(docFiles, nav);
    v477;
    const v478 = generateTutorialFiles(tutorials);
    v478;
    const v479 = generateTemplateFiles(templateCodes, nav);
    v479;
    const v483 = function (doclet) {
        const v480 = doclet.jsDocUrl;
        const v481 = v480.replace(/#.*$/, '');
        var jsDocPath = decodeURIComponent(v481);
        var outputPath = path.join(outdir, jsDocPath);
        doclet.nav = nav;
        const v482 = generate(outputPath, doclet);
        v482;
    };
    const v484 = classes.forEach(v483);
    v484;
    const v485 = opts.readme;
    if (v485) {
        var layoutPath = path.join(templatePath, 'html', 'layout.html');
        const v486 = opts.readme;
        var readmeData = {};
        readmeData.nav = nav;
        readmeData.readme = v486;
        readmeData.basePath = __dirname;
        readmeData.title = 'Index';
        const v487 = { jsMode: false };
        var html = angularTemplate(layoutPath, readmeData, v487);
        const v488 = path.join(outdir, 'index.html');
        const v489 = fs.writeFileSync(v488, html, 'utf8');
        v489;
    }
};
exports.publish = v490;
'use strict';
const v362 = this.__extends;
const v363 = this && v362;
const v381 = function () {
    const v364 = Object.setPrototypeOf;
    const v365 = [];
    const v366 = { __proto__: v365 };
    const v367 = v366 instanceof Array;
    const v368 = function (d, b) {
        d.__proto__ = b;
    };
    const v369 = v367 && v368;
    const v370 = v364 || v369;
    const v373 = function (d, b) {
        let p;
        for (p in b) {
            const v371 = b.hasOwnProperty(p);
            if (v371) {
                const v372 = b[p];
                d[p] = v372;
            }
        }
    };
    var extendStatics = v370 || v373;
    const v380 = function (d, b) {
        const v374 = extendStatics(d, b);
        v374;
        const __ = function () {
            this.constructor = d;
        };
        const v375 = b === null;
        const v376 = Object.create(b);
        const v377 = b.prototype;
        const v378 = new __();
        let v379;
        if (v375) {
            v379 = v376;
        } else {
            v379 = (__.prototype = v377, v378);
        }
        d.prototype = v379;
    };
    return v380;
};
const v382 = v381();
var __extends = v363 || v382;
const v383 = this.__awaiter;
const v384 = this && v383;
const v407 = function (thisArg, _arguments, P, generator) {
    const v385 = P || (P = Promise);
    const v405 = function (resolve, reject) {
        const fulfilled = function (value) {
            try {
                const v386 = generator.next(value);
                const v387 = step(v386);
                v387;
            } catch (e) {
                const v388 = reject(e);
                v388;
            }
        };
        const rejected = function (value) {
            try {
                const v389 = generator['throw'](value);
                const v390 = step(v389);
                v390;
            } catch (e) {
                const v391 = reject(e);
                v391;
            }
        };
        const step = function (result) {
            const v392 = result.done;
            const v393 = result.value;
            const v394 = resolve(v393);
            const v397 = function (resolve) {
                const v395 = result.value;
                const v396 = resolve(v395);
                v396;
            };
            const v398 = new P(v397);
            const v399 = v398.then(fulfilled, rejected);
            let v400;
            if (v392) {
                v400 = v394;
            } else {
                v400 = v399;
            }
            v400;
        };
        const v401 = [];
        const v402 = _arguments || v401;
        const v403 = (generator = generator.apply(thisArg, v402)).next();
        const v404 = step(v403);
        v404;
    };
    const v406 = new v385(v405);
    return v406;
};
var __awaiter = v384 || v407;
const v408 = this.__generator;
const v409 = this && v408;
const v509 = function (thisArg, body) {
    const v414 = function () {
        const v410 = t[0];
        const v411 = v410 & 1;
        if (v411) {
            const v412 = t[1];
            throw v412;
        }
        const v413 = t[1];
        return v413;
    };
    const v415 = [];
    const v416 = [];
    var _ = {};
    _.label = 0;
    _.sent = v414;
    _.trys = v415;
    _.ops = v416;
    var f;
    var y;
    var t;
    var g;
    const v417 = verb(0);
    const v418 = verb(1);
    const v419 = verb(2);
    const v420 = {};
    v420.next = v417;
    v420.throw = v418;
    v420.return = v419;
    const v421 = typeof Symbol;
    const v422 = v421 === 'function';
    const v423 = Symbol.iterator;
    const v424 = function () {
        return this;
    };
    const v425 = v422 && (g[v423] = v424);
    return g = v420, v425, g;
    const verb = function (n) {
        const v428 = function (v) {
            const v426 = [
                n,
                v
            ];
            const v427 = step(v426);
            return v427;
        };
        return v428;
    };
    const step = function (op) {
        if (f) {
            const v429 = new TypeError('Generator is already executing.');
            throw v429;
        }
        while (_) {
            try {
                const v440 = op[1];
                const v441 = (t = t.call(y, v440)).done;
                const v442 = !v441;
                const v443 = y && (t = op[0] & 2 ? y['return'] : op[0] ? y['throw'] || ((t = y['return']) && t.call(y), 0) : y.next) && v442;
                if (f = 1, v443) {
                    return t;
                }
                if (y = 0, t) {
                    const v444 = op[0];
                    const v445 = v444 & 2;
                    const v446 = t.value;
                    op = [
                        v445,
                        v446
                    ];
                }
                const v447 = op[0];
                switch (v447) {
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    const v448 = _.label;
                    const v449 = v448++;
                    v449;
                    const v450 = op[1];
                    const v451 = {};
                    v451.value = v450;
                    v451.done = false;
                    return v451;
                case 5:
                    const v452 = _.label;
                    const v453 = v452++;
                    v453;
                    y = op[1];
                    op = [0];
                    continue;
                case 7:
                    const v454 = _.ops;
                    op = v454.pop();
                    const v455 = _.trys;
                    const v456 = v455.pop();
                    v456;
                    continue;
                default:
                    const v457 = t.length;
                    const v458 = v457 > 0;
                    const v459 = t.length;
                    const v460 = v459 - 1;
                    const v461 = t[v460];
                    const v462 = !(t = _.trys, t = v458 && v461);
                    const v463 = op[0];
                    const v464 = v463 === 6;
                    const v465 = op[0];
                    const v466 = v465 === 2;
                    const v467 = v464 || v466;
                    const v468 = v462 && v467;
                    if (v468) {
                        _ = 0;
                        continue;
                    }
                    const v469 = op[0];
                    const v470 = v469 === 3;
                    const v471 = !t;
                    const v472 = op[1];
                    const v473 = t[0];
                    const v474 = v472 > v473;
                    const v475 = op[1];
                    const v476 = t[3];
                    const v477 = v475 < v476;
                    const v478 = v474 && v477;
                    const v479 = v471 || v478;
                    const v480 = v470 && v479;
                    if (v480) {
                        const v481 = op[1];
                        _.label = v481;
                        break;
                    }
                    const v482 = op[0];
                    const v483 = v482 === 6;
                    const v484 = _.label;
                    const v485 = t[1];
                    const v486 = v484 < v485;
                    const v487 = v483 && v486;
                    if (v487) {
                        const v488 = t[1];
                        _.label = v488;
                        t = op;
                        break;
                    }
                    const v489 = _.label;
                    const v490 = t[2];
                    const v491 = v489 < v490;
                    const v492 = t && v491;
                    if (v492) {
                        const v493 = t[2];
                        _.label = v493;
                        const v494 = _.ops;
                        const v495 = v494.push(op);
                        v495;
                        break;
                    }
                    const v496 = t[2];
                    if (v496) {
                        const v497 = _.ops;
                        const v498 = v497.pop();
                        v498;
                    }
                    const v499 = _.trys;
                    const v500 = v499.pop();
                    v500;
                    continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [
                    6,
                    e
                ];
                y = 0;
            } finally {
                t = 0;
                f = t;
            }
        }
        const v501 = op[0];
        const v502 = v501 & 5;
        if (v502) {
            const v503 = op[1];
            throw v503;
        }
        const v504 = op[0];
        const v505 = op[1];
        const v506 = void 0;
        let v507;
        if (v504) {
            v507 = v505;
        } else {
            v507 = v506;
        }
        const v508 = {};
        v508.value = v507;
        v508.done = true;
        return v508;
    };
};
var __generator = v409 || v509;
const v510 = { value: true };
const v511 = Object.defineProperty(exports, '__esModule', v510);
v511;
var aurelia_metadata_1 = require('aurelia-metadata');
var aurelia_loader_1 = require('aurelia-loader');
var aurelia_pal_1 = require('aurelia-pal');
var path = require('path');
var fs = require('fs');
var debug = require('debug');
var log = debug('aurelia-loader-nodejs');
const TextHandler = function (filePath) {
    const v517 = function (resolve, reject) {
        const v515 = function (err, text) {
            const v512 = reject(err);
            const v513 = resolve(text);
            let v514;
            if (err) {
                v514 = v512;
            } else {
                v514 = v513;
            }
            return v514;
        };
        const v516 = fs.readFile(filePath, 'utf-8', v515);
        return v516;
    };
    const v518 = new Promise(v517);
    return v518;
};
exports.TextHandler = TextHandler;
const v519 = require.main;
const v520 = require.main;
const v521 = v520.filename;
const v522 = v519 && v521;
const v523 = require.main;
const v524 = v523.filename;
const v525 = path.dirname(v524);
const v526 = v522 && v525;
const v527 = v526 || undefined;
const v528 = {};
v528.relativeToDir = v527;
exports.Options = v528;
const v529 = {};
v529['.css'] = TextHandler;
v529['.html'] = TextHandler;
exports.ExtensionHandlers = v529;
const advancedRequire = function (filePath) {
    const v530 = exports.ExtensionHandlers;
    var extensionsWithHandlers = Object.keys(v530);
    var _i = 0;
    var extensionsWithHandlers_1 = extensionsWithHandlers;
    const v531 = extensionsWithHandlers_1.length;
    let v532 = _i < v531;
    while (v532) {
        var extension = extensionsWithHandlers_1[_i];
        const v534 = filePath.endsWith(extension);
        if (v534) {
            const v535 = 'Requiring: ' + filePath;
            const v536 = 'Extension handler: ' + extension;
            const v537 = log(v535, v536);
            v537;
            const v538 = exports.ExtensionHandlers;
            const v539 = v538[extension](filePath);
            return v539;
        }
        const v533 = _i++;
        v532 = _i < v531;
    }
    const v540 = 'Requiring: ' + filePath;
    const v541 = log(v540);
    v541;
    const v542 = require(filePath);
    const v543 = Promise.resolve(v542);
    return v543;
};
exports.advancedRequire = advancedRequire;
const v559 = function () {
    const TextTemplateLoader = function () {
    };
    const v544 = TextTemplateLoader.prototype;
    const v558 = function (loader, entry) {
        const v545 = void 0;
        const v546 = void 0;
        const v556 = function () {
            var text;
            const v554 = function (_a) {
                const v547 = _a.label;
                switch (v547) {
                case 0:
                    const v548 = entry.address;
                    const v549 = loader.loadText(v548);
                    const v550 = [
                        4,
                        v549
                    ];
                    return v550;
                case 1:
                    text = _a.sent();
                    const v551 = aurelia_pal_1.DOM;
                    const v552 = v551.createTemplateFromMarkup(text);
                    entry.template = v552;
                    const v553 = [2];
                    return v553;
                }
            };
            const v555 = __generator(this, v554);
            return v555;
        };
        const v557 = __awaiter(this, v545, v546, v556);
        return v557;
    };
    v544.loadTemplate = v558;
    return TextTemplateLoader;
};
var TextTemplateLoader = v559();
exports.TextTemplateLoader = TextTemplateLoader;
const ensureOriginOnExports = function (moduleExports, moduleId) {
    var target = moduleExports;
    var key;
    var exportedValue;
    const v560 = target.__useDefault;
    if (v560) {
        target = target.default;
    }
    const v561 = aurelia_metadata_1.Origin;
    const v562 = new aurelia_metadata_1.Origin(moduleId, 'default');
    const v563 = v561.set(target, v562);
    v563;
    const v564 = typeof target;
    const v565 = v564 === 'object';
    if (v565) {
        for (key in target) {
            exportedValue = target[key];
            const v566 = typeof exportedValue;
            const v567 = v566 === 'function';
            if (v567) {
                const v568 = aurelia_metadata_1.Origin;
                const v569 = new aurelia_metadata_1.Origin(moduleId, key);
                const v570 = v568.set(exportedValue, v569);
                v570;
            }
        }
    }
    return moduleExports;
};
exports.ensureOriginOnExports = ensureOriginOnExports;
const v720 = function (_super) {
    const v571 = __extends(NodeJsLoader, _super);
    v571;
    const NodeJsLoader = function () {
        const v572 = _super.call(this);
        var _this = v572 || this;
        const v573 = Object.create(null);
        _this.moduleRegistry = v573;
        const v574 = Object.create(null);
        _this.loaderPlugins = v574;
        _this.modulesBeingLoaded = new Map();
        const v575 = new TextTemplateLoader();
        const v576 = _this.useTemplateLoader(v575);
        v576;
        var loader = _this;
        const v583 = function (address) {
            var entry = loader.getOrCreateTemplateRegistryEntry(address);
            const v577 = entry.templateIsLoaded;
            const v578 = loader.templateLoader;
            const v579 = v578.loadTemplate(loader, entry);
            const v580 = function () {
                return entry;
            };
            const v581 = v579.then(v580);
            let v582;
            if (v577) {
                v582 = entry;
            } else {
                v582 = v581;
            }
            return v582;
        };
        const v584 = { 'fetch': v583 };
        const v585 = _this.addPlugin('template-registry-entry', v584);
        v585;
        const v586 = aurelia_pal_1.PLATFORM;
        const v587 = function (callback) {
        };
        v586.eachModule = v587;
        return _this;
    };
    const v588 = NodeJsLoader.prototype;
    const v655 = function (moduleId) {
        const v589 = void 0;
        const v590 = void 0;
        const v653 = function () {
            var moduleIdParts;
            var modulePath;
            var loaderPlugin;
            var plugin;
            var firstError_1;
            var splitModuleId;
            var rootModuleId;
            var remainingRequest;
            var rootResolved;
            var mainDir;
            var mergedPath;
            var e_1;
            const v651 = function (_a) {
                const v591 = _a.label;
                switch (v591) {
                case 0:
                    moduleIdParts = moduleId.split('!');
                    const v592 = moduleIdParts.length;
                    const v593 = v592 - 1;
                    const v594 = moduleIdParts.splice(v593, 1);
                    modulePath = v594[0];
                    const v595 = moduleIdParts.length;
                    const v596 = v595 === 1;
                    const v597 = moduleIdParts[0];
                    if (v596) {
                        loaderPlugin = v597;
                    } else {
                        loaderPlugin = null;
                    }
                    const v598 = modulePath[0];
                    const v599 = v598 === '.';
                    const v600 = exports.Options;
                    const v601 = v600.relativeToDir;
                    const v602 = v599 && v601;
                    if (v602) {
                        const v603 = exports.Options;
                        const v604 = v603.relativeToDir;
                        modulePath = path.resolve(v604, modulePath);
                    }
                    const v605 = !loaderPlugin;
                    if (v605) {
                        const v606 = [
                            3,
                            2
                        ];
                        return v606;
                    }
                    const v607 = this.loaderPlugins;
                    plugin = v607[loaderPlugin];
                    const v608 = !plugin;
                    if (v608) {
                        const v609 = 'Plugin ' + loaderPlugin;
                        const v610 = v609 + ' is not registered in the loader.';
                        const v611 = new Error(v610);
                        throw v611;
                    }
                    const v612 = plugin.fetch(modulePath);
                    const v613 = [
                        4,
                        v612
                    ];
                    return v613;
                case 1:
                    const v614 = _a.sent();
                    const v615 = [
                        2,
                        v614
                    ];
                    return v615;
                case 2:
                    const v616 = _a.trys;
                    const v617 = [
                        2,
                        4,
                        ,
                        11
                    ];
                    const v618 = v616.push(v617);
                    v618;
                    const v619 = require.resolve(modulePath);
                    const v620 = advancedRequire(v619);
                    const v621 = [
                        4,
                        v620
                    ];
                    return v621;
                case 3:
                    const v622 = _a.sent();
                    const v623 = [
                        2,
                        v622
                    ];
                    return v623;
                case 4:
                    firstError_1 = _a.sent();
                    splitModuleId = modulePath.split('/');
                    rootModuleId = splitModuleId[0];
                    const v624 = rootModuleId[0];
                    const v625 = v624 === '@';
                    if (v625) {
                        const v626 = splitModuleId.slice(0, 2);
                        rootModuleId = v626.join('/');
                    }
                    const v627 = rootModuleId[0];
                    const v628 = v627 === '@';
                    let v629;
                    if (v628) {
                        v629 = 2;
                    } else {
                        v629 = 1;
                    }
                    const v630 = splitModuleId.slice(v629);
                    remainingRequest = v630.join('/');
                    _a.label = 5;
                case 5:
                    const v631 = _a.trys;
                    const v632 = [
                        5,
                        7,
                        ,
                        10
                    ];
                    const v633 = v631.push(v632);
                    v633;
                    const v634 = !remainingRequest;
                    if (v634) {
                        throw firstError_1;
                    }
                    rootResolved = require.resolve(rootModuleId);
                    mainDir = path.dirname(rootResolved);
                    mergedPath = path.join(mainDir, remainingRequest);
                    const v635 = advancedRequire(mergedPath);
                    const v636 = [
                        4,
                        v635
                    ];
                    return v636;
                case 6:
                    const v637 = _a.sent();
                    const v638 = [
                        2,
                        v637
                    ];
                    return v638;
                case 7:
                    e_1 = _a.sent();
                    const v639 = path.isAbsolute(modulePath);
                    const v640 = !v639;
                    const v641 = !v640;
                    if (v641) {
                        const v642 = [
                            3,
                            9
                        ];
                        return v642;
                    }
                    const v643 = exports.Options;
                    const v644 = v643.relativeToDir;
                    modulePath = path.resolve(v644, modulePath);
                    const v645 = advancedRequire(modulePath);
                    const v646 = [
                        4,
                        v645
                    ];
                    return v646;
                case 8:
                    const v647 = _a.sent();
                    const v648 = [
                        2,
                        v647
                    ];
                    return v648;
                case 9:
                    throw firstError_1;
                case 10:
                    const v649 = [
                        3,
                        11
                    ];
                    return v649;
                case 11:
                    const v650 = [2];
                    return v650;
                }
            };
            const v652 = __generator(this, v651);
            return v652;
        };
        const v654 = __awaiter(this, v589, v590, v653);
        return v654;
    };
    v588._import = v655;
    const v656 = NodeJsLoader.prototype;
    const v657 = function (id, source) {
    };
    v656.map = v657;
    const v658 = NodeJsLoader.prototype;
    const v659 = function (moduleId, relativeTo) {
        return moduleId;
    };
    v658.normalizeSync = v659;
    const v660 = NodeJsLoader.prototype;
    const v662 = function (moduleId, relativeTo) {
        const v661 = Promise.resolve(moduleId);
        return v661;
    };
    v660.normalize = v662;
    const v663 = NodeJsLoader.prototype;
    const v664 = function (templateLoader) {
        this.templateLoader = templateLoader;
    };
    v663.useTemplateLoader = v664;
    const v665 = NodeJsLoader.prototype;
    const v670 = function (ids) {
        var _this = this;
        const v667 = function (id) {
            const v666 = _this.loadModule(id);
            return v666;
        };
        const v668 = ids.map(v667);
        const v669 = Promise.all(v668);
        return v669;
    };
    v665.loadAllModules = v670;
    const v671 = NodeJsLoader.prototype;
    const v695 = function (moduleId) {
        const v672 = void 0;
        const v673 = void 0;
        const v693 = function () {
            var existing;
            var beingLoaded;
            var moduleExports;
            var _this = this;
            const v691 = function (_a) {
                const v674 = _a.label;
                switch (v674) {
                case 0:
                    const v675 = this.moduleRegistry;
                    existing = v675[moduleId];
                    if (existing) {
                        const v676 = [
                            2,
                            existing
                        ];
                        return v676;
                    }
                    const v677 = this.modulesBeingLoaded;
                    beingLoaded = v677.get(moduleId);
                    if (beingLoaded) {
                        const v678 = [
                            2,
                            beingLoaded
                        ];
                        return v678;
                    }
                    const v679 = this._import(moduleId);
                    const v682 = function (e) {
                        const v680 = _this.modulesBeingLoaded;
                        const v681 = v680.delete(moduleId);
                        v681;
                        throw e;
                    };
                    beingLoaded = v679.catch(v682);
                    const v683 = this.modulesBeingLoaded;
                    const v684 = v683.set(moduleId, beingLoaded);
                    v684;
                    const v685 = [
                        4,
                        beingLoaded
                    ];
                    return v685;
                case 1:
                    moduleExports = _a.sent();
                    const v687 = ensureOriginOnExports(moduleExports, moduleId);
                    v686[moduleId] = v687;
                    const v688 = this.modulesBeingLoaded;
                    const v689 = v688.delete(moduleId);
                    v689;
                    const v690 = [
                        2,
                        moduleExports
                    ];
                    return v690;
                }
            };
            const v692 = __generator(this, v691);
            return v692;
        };
        const v694 = __awaiter(this, v672, v673, v693);
        return v694;
    };
    v671.loadModule = v695;
    const v696 = NodeJsLoader.prototype;
    const v699 = function (url) {
        const v697 = this.applyPluginToUrl(url, 'template-registry-entry');
        const v698 = this.loadModule(v697);
        return v698;
    };
    v696.loadTemplate = v699;
    const v700 = NodeJsLoader.prototype;
    const v712 = function (url) {
        const v701 = void 0;
        const v702 = void 0;
        const v710 = function () {
            const v708 = function (_a) {
                const v703 = _a.label;
                switch (v703) {
                case 0:
                    const v704 = this.loadModule(url);
                    const v705 = [
                        4,
                        v704
                    ];
                    return v705;
                case 1:
                    const v706 = _a.sent();
                    const v707 = [
                        2,
                        v706
                    ];
                    return v707;
                }
            };
            const v709 = __generator(this, v708);
            return v709;
        };
        const v711 = __awaiter(this, v701, v702, v710);
        return v711;
    };
    v700.loadText = v712;
    const v713 = NodeJsLoader.prototype;
    const v716 = function (url, pluginName) {
        const v714 = pluginName + '!';
        const v715 = v714 + url;
        return v715;
    };
    v713.applyPluginToUrl = v716;
    const v717 = NodeJsLoader.prototype;
    const v719 = function (pluginName, implementation) {
        const v718 = this.loaderPlugins;
        v718[pluginName] = implementation;
    };
    v717.addPlugin = v719;
    return NodeJsLoader;
};
const v721 = aurelia_loader_1.Loader;
var NodeJsLoader = v720(v721);
exports.NodeJsLoader = NodeJsLoader;
const v722 = aurelia_pal_1.PLATFORM;
v722.Loader = NodeJsLoader;
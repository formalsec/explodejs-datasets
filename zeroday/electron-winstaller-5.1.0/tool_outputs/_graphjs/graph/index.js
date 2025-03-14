'use strict';
const v440 = this.__awaiter;
const v441 = this && v440;
const v464 = function (thisArg, _arguments, P, generator) {
    const v442 = P || (P = Promise);
    const v462 = function (resolve, reject) {
        const fulfilled = function (value) {
            try {
                const v443 = generator.next(value);
                const v444 = step(v443);
                v444;
            } catch (e) {
                const v445 = reject(e);
                v445;
            }
        };
        const rejected = function (value) {
            try {
                const v446 = generator['throw'](value);
                const v447 = step(v446);
                v447;
            } catch (e) {
                const v448 = reject(e);
                v448;
            }
        };
        const step = function (result) {
            const v449 = result.done;
            const v450 = result.value;
            const v451 = resolve(v450);
            const v454 = function (resolve) {
                const v452 = result.value;
                const v453 = resolve(v452);
                v453;
            };
            const v455 = new P(v454);
            const v456 = v455.then(fulfilled, rejected);
            let v457;
            if (v449) {
                v457 = v451;
            } else {
                v457 = v456;
            }
            v457;
        };
        const v458 = [];
        const v459 = _arguments || v458;
        const v460 = (generator = generator.apply(thisArg, v459)).next();
        const v461 = step(v460);
        v461;
    };
    const v463 = new v442(v462);
    return v463;
};
var __awaiter = v441 || v464;
const v465 = this.__generator;
const v466 = this && v465;
const v566 = function (thisArg, body) {
    const v471 = function () {
        const v467 = t[0];
        const v468 = v467 & 1;
        if (v468) {
            const v469 = t[1];
            throw v469;
        }
        const v470 = t[1];
        return v470;
    };
    const v472 = [];
    const v473 = [];
    var _ = {};
    _.label = 0;
    _.sent = v471;
    _.trys = v472;
    _.ops = v473;
    var f;
    var y;
    var t;
    var g;
    const v474 = verb(0);
    const v475 = verb(1);
    const v476 = verb(2);
    const v477 = {};
    v477.next = v474;
    v477.throw = v475;
    v477.return = v476;
    const v478 = typeof Symbol;
    const v479 = v478 === 'function';
    const v480 = Symbol.iterator;
    const v481 = function () {
        return this;
    };
    const v482 = v479 && (g[v480] = v481);
    return g = v477, v482, g;
    const verb = function (n) {
        const v485 = function (v) {
            const v483 = [
                n,
                v
            ];
            const v484 = step(v483);
            return v484;
        };
        return v485;
    };
    const step = function (op) {
        if (f) {
            const v486 = new TypeError('Generator is already executing.');
            throw v486;
        }
        while (_) {
            try {
                const v497 = op[1];
                const v498 = (t = t.call(y, v497)).done;
                const v499 = !v498;
                const v500 = y && (t = op[0] & 2 ? y['return'] : op[0] ? y['throw'] || ((t = y['return']) && t.call(y), 0) : y.next) && v499;
                if (f = 1, v500) {
                    return t;
                }
                if (y = 0, t) {
                    const v501 = op[0];
                    const v502 = v501 & 2;
                    const v503 = t.value;
                    op = [
                        v502,
                        v503
                    ];
                }
                const v504 = op[0];
                switch (v504) {
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    const v505 = _.label;
                    const v506 = v505++;
                    v506;
                    const v507 = op[1];
                    const v508 = {};
                    v508.value = v507;
                    v508.done = false;
                    return v508;
                case 5:
                    const v509 = _.label;
                    const v510 = v509++;
                    v510;
                    y = op[1];
                    op = [0];
                    continue;
                case 7:
                    const v511 = _.ops;
                    op = v511.pop();
                    const v512 = _.trys;
                    const v513 = v512.pop();
                    v513;
                    continue;
                default:
                    const v514 = t.length;
                    const v515 = v514 > 0;
                    const v516 = t.length;
                    const v517 = v516 - 1;
                    const v518 = t[v517];
                    const v519 = !(t = _.trys, t = v515 && v518);
                    const v520 = op[0];
                    const v521 = v520 === 6;
                    const v522 = op[0];
                    const v523 = v522 === 2;
                    const v524 = v521 || v523;
                    const v525 = v519 && v524;
                    if (v525) {
                        _ = 0;
                        continue;
                    }
                    const v526 = op[0];
                    const v527 = v526 === 3;
                    const v528 = !t;
                    const v529 = op[1];
                    const v530 = t[0];
                    const v531 = v529 > v530;
                    const v532 = op[1];
                    const v533 = t[3];
                    const v534 = v532 < v533;
                    const v535 = v531 && v534;
                    const v536 = v528 || v535;
                    const v537 = v527 && v536;
                    if (v537) {
                        const v538 = op[1];
                        _.label = v538;
                        break;
                    }
                    const v539 = op[0];
                    const v540 = v539 === 6;
                    const v541 = _.label;
                    const v542 = t[1];
                    const v543 = v541 < v542;
                    const v544 = v540 && v543;
                    if (v544) {
                        const v545 = t[1];
                        _.label = v545;
                        t = op;
                        break;
                    }
                    const v546 = _.label;
                    const v547 = t[2];
                    const v548 = v546 < v547;
                    const v549 = t && v548;
                    if (v549) {
                        const v550 = t[2];
                        _.label = v550;
                        const v551 = _.ops;
                        const v552 = v551.push(op);
                        v552;
                        break;
                    }
                    const v553 = t[2];
                    if (v553) {
                        const v554 = _.ops;
                        const v555 = v554.pop();
                        v555;
                    }
                    const v556 = _.trys;
                    const v557 = v556.pop();
                    v557;
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
        const v558 = op[0];
        const v559 = v558 & 5;
        if (v559) {
            const v560 = op[1];
            throw v560;
        }
        const v561 = op[0];
        const v562 = op[1];
        const v563 = void 0;
        let v564;
        if (v561) {
            v564 = v562;
        } else {
            v564 = v563;
        }
        const v565 = {};
        v565.value = v564;
        v565.done = true;
        return v565;
    };
};
var __generator = v466 || v566;
const v567 = this.__importStar;
const v568 = this && v567;
const v575 = function (mod) {
    const v569 = mod.__esModule;
    const v570 = mod && v569;
    if (v570) {
        return mod;
    }
    var result = {};
    const v571 = mod != null;
    if (v571) {
        let k;
        for (k in mod) {
            const v572 = Object.hasOwnProperty;
            const v573 = v572.call(mod, k);
            if (v573) {
                const v574 = mod[k];
                result[k] = v574;
            }
        }
    }
    result['default'] = mod;
    return result;
};
var __importStar = v568 || v575;
const v576 = this.__importDefault;
const v577 = this && v576;
const v582 = function (mod) {
    const v578 = mod.__esModule;
    const v579 = mod && v578;
    const v580 = { 'default': mod };
    let v581;
    if (v579) {
        v581 = mod;
    } else {
        v581 = v580;
    }
    return v581;
};
var __importDefault = v577 || v582;
const v583 = { value: true };
const v584 = Object.defineProperty(exports, '__esModule', v583);
v584;
const v585 = require('@electron/asar');
var asar = __importStar(v585);
var temp_utils_1 = require('./temp-utils');
const v586 = require('fs-extra');
var fs = __importStar(v586);
const v587 = require('path');
var path = __importStar(v587);
const v588 = require('./spawn-promise');
var spawn_promise_1 = __importDefault(v588);
const v589 = require('lodash.template');
var lodash_template_1 = __importDefault(v589);
const v590 = require('debug');
var log = v590('electron-windows-installer:main');
const convertVersion = function (version) {
    var parts = version.split('-');
    var mainVersion = parts.shift();
    const v591 = parts.length;
    const v592 = v591 > 0;
    if (v592) {
        const v593 = parts.join('-');
        const v594 = v593.replace(/\./g, '');
        const v595 = [
            mainVersion,
            v594
        ];
        const v596 = v595.join('-');
        return v596;
    } else {
        return mainVersion;
    }
};
exports.convertVersion = convertVersion;
const createWindowsInstaller = function (options) {
    const v597 = void 0;
    const v598 = void 0;
    const v827 = function () {
        var useMono;
        var monoExe;
        var wineExe;
        var appDirectory;
        var outputDirectory;
        var loadingGif;
        var vendorPath;
        var vendorUpdate;
        var appUpdate;
        var cmd_1;
        var args_1;
        var defaultLoadingGif;
        var certificateFile;
        var certificatePassword;
        var remoteReleases;
        var signWithParams;
        var remoteToken;
        var metadata;
        var appResources;
        var asarFile;
        var appMetadata;
        var templateData;
        var _i;
        var _a;
        var f;
        var nuspecContent;
        var nugetOutput;
        var targetNuspecPath;
        var cmd;
        var args;
        var _b;
        var nupkgPath;
        var _c;
        var _d;
        var setupPath;
        var unfixedSetupPath;
        var msiPath;
        var unfixedMsiPath;
        const v825 = function (_e) {
            const v599 = _e.label;
            switch (v599) {
            case 0:
                useMono = false;
                monoExe = 'mono';
                const v600 = process.arch;
                const v601 = v600 === 'x64';
                if (v601) {
                    wineExe = 'wine64';
                } else {
                    wineExe = 'wine';
                }
                const v602 = process.platform;
                const v603 = v602 !== 'win32';
                if (v603) {
                    useMono = true;
                    const v604 = !wineExe;
                    const v605 = !monoExe;
                    const v606 = v604 || v605;
                    if (v606) {
                        const v607 = new Error('You must install both Mono and Wine on non-Windows');
                        throw v607;
                    }
                    const v608 = 'Using Mono: \'' + monoExe;
                    const v609 = v608 + '\'';
                    const v610 = log(v609);
                    v610;
                    const v611 = 'Using Wine: \'' + wineExe;
                    const v612 = v611 + '\'';
                    const v613 = log(v612);
                    v613;
                }
                appDirectory = options.appDirectory, outputDirectory = options.outputDirectory, loadingGif = options.loadingGif;
                const v614 = outputDirectory || 'installer';
                outputDirectory = path.resolve(v614);
                vendorPath = path.join(__dirname, '..', 'vendor');
                vendorUpdate = path.join(vendorPath, 'Squirrel.exe');
                appUpdate = path.join(appDirectory, 'Squirrel.exe');
                const v615 = fs.copy(vendorUpdate, appUpdate);
                const v616 = [
                    4,
                    v615
                ];
                return v616;
            case 1:
                const v617 = _e.sent();
                v617;
                const v618 = options.setupIcon;
                const v619 = options.skipUpdateIcon;
                const v620 = v619 !== true;
                const v621 = v618 && v620;
                const v622 = !v621;
                if (v622) {
                    const v623 = [
                        3,
                        3
                    ];
                    return v623;
                }
                cmd_1 = path.join(vendorPath, 'rcedit.exe');
                const v624 = options.setupIcon;
                args_1 = [
                    appUpdate,
                    '--set-icon',
                    v624
                ];
                if (useMono) {
                    const v625 = args_1.unshift(cmd_1);
                    v625;
                    cmd_1 = wineExe;
                }
                const v626 = spawn_promise_1.default(cmd_1, args_1);
                const v627 = [
                    4,
                    v626
                ];
                return v627;
            case 2:
                const v628 = _e.sent();
                v628;
                _e.label = 3;
            case 3:
                defaultLoadingGif = path.join(__dirname, '..', 'resources', 'install-spinner.gif');
                const v629 = path.resolve(loadingGif);
                if (loadingGif) {
                    loadingGif = v629;
                } else {
                    loadingGif = defaultLoadingGif;
                }
                certificateFile = options.certificateFile, certificatePassword = options.certificatePassword, remoteReleases = options.remoteReleases, signWithParams = options.signWithParams, remoteToken = options.remoteToken;
                metadata.description = '';
                metadata.iconUrl = 'https://raw.githubusercontent.com/electron/electron/main/shell/browser/resources/win/electron.ico';
                metadata = {};
                metadata = {};
                const v630 = options.usePackageJson;
                const v631 = v630 !== false;
                const v632 = !v631;
                if (v632) {
                    const v633 = [
                        3,
                        8
                    ];
                    return v633;
                }
                appResources = path.join(appDirectory, 'resources');
                asarFile = path.join(appResources, 'app.asar');
                const v634 = void 0;
                appMetadata = v634;
                const v635 = fs.pathExists(asarFile);
                const v636 = [
                    4,
                    v635
                ];
                return v636;
            case 4:
                const v637 = _e.sent();
                const v638 = !v637;
                if (v638) {
                    const v639 = [
                        3,
                        5
                    ];
                    return v639;
                }
                const v640 = asar.extractFile(asarFile, 'package.json');
                const v641 = v640.toString();
                appMetadata = JSON.parse(v641);
                const v642 = [
                    3,
                    7
                ];
                return v642;
            case 5:
                const v643 = path.join(appResources, 'app', 'package.json');
                const v644 = fs.readJson(v643);
                const v645 = [
                    4,
                    v644
                ];
                return v645;
            case 6:
                appMetadata = _e.sent();
                _e.label = 7;
            case 7:
                const v646 = appMetadata.name;
                const v647 = v646 + '.exe';
                const v648 = appMetadata.productName;
                const v649 = appMetadata.name;
                const v650 = v648 || v649;
                const v651 = {
                    exe: v647,
                    title: v650
                };
                const v652 = Object.assign(metadata, v651, appMetadata);
                v652;
                _e.label = 8;
            case 8:
                const v653 = Object.assign(metadata, options);
                v653;
                const v654 = metadata.authors;
                const v655 = !v654;
                if (v655) {
                    const v656 = metadata.author;
                    const v657 = typeof v656;
                    const v658 = v657 === 'string';
                    if (v658) {
                        const v659 = metadata.author;
                        metadata.authors = v659;
                    } else {
                        const v660 = metadata.author;
                        const v661 = {};
                        const v662 = v660 || v661;
                        const v663 = v662.name;
                        metadata.authors = v663 || '';
                    }
                }
                const v664 = metadata.owners;
                const v665 = metadata.authors;
                metadata.owners = v664 || v665;
                const v666 = metadata.version;
                const v667 = convertVersion(v666);
                metadata.version = v667;
                const v668 = metadata.copyright;
                const v669 = new Date();
                const v670 = v669.getFullYear();
                const v671 = 'Copyright \xA9 ' + v670;
                const v672 = v671 + ' ';
                const v673 = metadata.authors;
                const v674 = metadata.owners;
                const v675 = v673 || v674;
                const v676 = v672 + v675;
                metadata.copyright = v668 || v676;
                const v677 = metadata.additionalFiles;
                const v678 = [];
                metadata.additionalFiles = v677 || v678;
                const v679 = path.join(appDirectory, 'swiftshader');
                const v680 = fs.pathExists(v679);
                const v681 = [
                    4,
                    v680
                ];
                return v681;
            case 9:
                const v682 = _e.sent();
                if (v682) {
                    const v683 = metadata.additionalFiles;
                    const v684 = {
                        src: 'swiftshader\\**',
                        target: 'lib\\net45\\swiftshader'
                    };
                    const v685 = v683.push(v684);
                    v685;
                }
                const v686 = path.join(appDirectory, 'vk_swiftshader_icd.json');
                const v687 = fs.pathExists(v686);
                const v688 = [
                    4,
                    v687
                ];
                return v688;
            case 10:
                const v689 = _e.sent();
                if (v689) {
                    const v690 = metadata.additionalFiles;
                    const v691 = {
                        src: 'vk_swiftshader_icd.json',
                        target: 'lib\\net45'
                    };
                    const v692 = v690.push(v691);
                    v692;
                }
                const v693 = path.join(__dirname, '..', 'template.nuspectemplate');
                const v694 = fs.readFile(v693, 'utf8');
                const v695 = [
                    4,
                    v694
                ];
                return v695;
            case 11:
                templateData = _e.sent();
                const v696 = path.sep;
                const v697 = v696 === '/';
                if (v697) {
                    templateData = templateData.replace(/\\/g, '/');
                    (_i = 0, _a = metadata.additionalFiles)
                    const v698 = _a.length;
                    let v699 = _i < v698;
                    while (v699) {
                        f = _a[_i];
                        const v701 = f.src;
                        const v702 = v701.replace(/\\/g, '/');
                        f.src = v702;
                        const v703 = f.target;
                        const v704 = v703.replace(/\\/g, '/');
                        f.target = v704;
                        const v700 = _i++;
                        v699 = _i < v698;
                    }
                }
                const v705 = lodash_template_1.default(templateData);
                nuspecContent = v705(metadata);
                const v706 = 'Created NuSpec file:\n' + nuspecContent;
                const v707 = log(v706);
                v707;
                const v708 = temp_utils_1.createTempDir('si-');
                const v709 = [
                    4,
                    v708
                ];
                return v709;
            case 12:
                nugetOutput = _e.sent();
                const v710 = metadata.name;
                const v711 = v710 + '.nuspec';
                targetNuspecPath = path.join(nugetOutput, v711);
                const v712 = fs.writeFile(targetNuspecPath, nuspecContent);
                const v713 = [
                    4,
                    v712
                ];
                return v713;
            case 13:
                const v714 = _e.sent();
                v714;
                cmd = path.join(vendorPath, 'nuget.exe');
                args = [
                    'pack',
                    targetNuspecPath,
                    '-BasePath',
                    appDirectory,
                    '-OutputDirectory',
                    nugetOutput,
                    '-NoDefaultExcludes'
                ];
                if (useMono) {
                    const v715 = args.unshift(cmd);
                    v715;
                    cmd = monoExe;
                }
                _b = log;
                const v716 = spawn_promise_1.default(cmd, args);
                const v717 = [
                    4,
                    v716
                ];
                return v717;
            case 14:
                const v718 = void 0;
                const v719 = _e.sent();
                const v720 = [v719];
                const v721 = _b.apply(v718, v720);
                v721;
                const v722 = metadata.name;
                const v723 = v722 + '.';
                const v724 = metadata.version;
                const v725 = v723 + v724;
                const v726 = v725 + '.nupkg';
                nupkgPath = path.join(nugetOutput, v726);
                const v727 = !remoteReleases;
                if (v727) {
                    const v728 = [
                        3,
                        16
                    ];
                    return v728;
                }
                cmd = path.join(vendorPath, 'SyncReleases.exe');
                args = [
                    '-u',
                    remoteReleases,
                    '-r',
                    outputDirectory
                ];
                if (useMono) {
                    const v729 = args.unshift(cmd);
                    v729;
                    cmd = monoExe;
                }
                if (remoteToken) {
                    const v730 = args.push('-t', remoteToken);
                    v730;
                }
                _c = log;
                const v731 = spawn_promise_1.default(cmd, args);
                const v732 = [
                    4,
                    v731
                ];
                return v732;
            case 15:
                const v733 = void 0;
                const v734 = _e.sent();
                const v735 = [v734];
                const v736 = _c.apply(v733, v735);
                v736;
                _e.label = 16;
            case 16:
                cmd = path.join(vendorPath, 'Squirrel.exe');
                args = [
                    '--releasify',
                    nupkgPath,
                    '--releaseDir',
                    outputDirectory,
                    '--loadingGif',
                    loadingGif
                ];
                if (useMono) {
                    const v737 = path.join(vendorPath, 'Squirrel-Mono.exe');
                    const v738 = args.unshift(v737);
                    v738;
                    cmd = monoExe;
                }
                if (signWithParams) {
                    const v739 = args.push('--signWithParams');
                    v739;
                    const v740 = signWithParams.includes('/f');
                    const v741 = !v740;
                    const v742 = signWithParams.includes('/p');
                    const v743 = !v742;
                    const v744 = v741 && v743;
                    const v745 = v744 && certificateFile;
                    const v746 = v745 && certificatePassword;
                    if (v746) {
                        const v747 = signWithParams + ' /a /f "';
                        const v748 = path.resolve(certificateFile);
                        const v749 = v747 + v748;
                        const v750 = v749 + '" /p "';
                        const v751 = v750 + certificatePassword;
                        const v752 = v751 + '"';
                        const v753 = args.push(v752);
                        v753;
                    } else {
                        const v754 = args.push(signWithParams);
                        v754;
                    }
                } else {
                    const v755 = certificateFile && certificatePassword;
                    if (v755) {
                        const v756 = args.push('--signWithParams');
                        v756;
                        const v757 = path.resolve(certificateFile);
                        const v758 = '/a /f "' + v757;
                        const v759 = v758 + '" /p "';
                        const v760 = v759 + certificatePassword;
                        const v761 = v760 + '"';
                        const v762 = args.push(v761);
                        v762;
                    }
                }
                const v763 = options.setupIcon;
                if (v763) {
                    const v764 = args.push('--setupIcon');
                    v764;
                    const v765 = options.setupIcon;
                    const v766 = path.resolve(v765);
                    const v767 = args.push(v766);
                    v767;
                }
                const v768 = options.noMsi;
                if (v768) {
                    const v769 = args.push('--no-msi');
                    v769;
                }
                const v770 = options.noDelta;
                if (v770) {
                    const v771 = args.push('--no-delta');
                    v771;
                }
                const v772 = options.frameworkVersion;
                if (v772) {
                    const v773 = args.push('--framework-version');
                    v773;
                    const v774 = options.frameworkVersion;
                    const v775 = args.push(v774);
                    v775;
                }
                _d = log;
                const v776 = spawn_promise_1.default(cmd, args);
                const v777 = [
                    4,
                    v776
                ];
                return v777;
            case 17:
                const v778 = void 0;
                const v779 = _e.sent();
                const v780 = [v779];
                const v781 = _d.apply(v778, v780);
                v781;
                const v782 = options.fixUpPaths;
                const v783 = v782 !== false;
                const v784 = !v783;
                if (v784) {
                    const v785 = [
                        3,
                        22
                    ];
                    return v785;
                }
                const v786 = log('Fixing up paths');
                v786;
                const v787 = metadata.productName;
                const v788 = options.setupExe;
                const v789 = v787 || v788;
                const v790 = !v789;
                if (v790) {
                    const v791 = [
                        3,
                        19
                    ];
                    return v791;
                }
                const v792 = options.setupExe;
                const v793 = metadata.productName;
                const v794 = v793 + 'Setup.exe';
                const v795 = v792 || v794;
                setupPath = path.join(outputDirectory, v795);
                unfixedSetupPath = path.join(outputDirectory, 'Setup.exe');
                const v796 = 'Renaming ' + unfixedSetupPath;
                const v797 = v796 + ' => ';
                const v798 = v797 + setupPath;
                const v799 = log(v798);
                v799;
                const v800 = fs.rename(unfixedSetupPath, setupPath);
                const v801 = [
                    4,
                    v800
                ];
                return v801;
            case 18:
                const v802 = _e.sent();
                v802;
                _e.label = 19;
            case 19:
                const v803 = metadata.productName;
                const v804 = options.setupMsi;
                const v805 = v803 || v804;
                const v806 = !v805;
                if (v806) {
                    const v807 = [
                        3,
                        22
                    ];
                    return v807;
                }
                const v808 = options.setupMsi;
                const v809 = metadata.productName;
                const v810 = v809 + 'Setup.msi';
                const v811 = v808 || v810;
                msiPath = path.join(outputDirectory, v811);
                unfixedMsiPath = path.join(outputDirectory, 'Setup.msi');
                const v812 = fs.pathExists(unfixedMsiPath);
                const v813 = [
                    4,
                    v812
                ];
                return v813;
            case 20:
                const v814 = _e.sent();
                const v815 = !v814;
                if (v815) {
                    const v816 = [
                        3,
                        22
                    ];
                    return v816;
                }
                const v817 = 'Renaming ' + unfixedMsiPath;
                const v818 = v817 + ' => ';
                const v819 = v818 + msiPath;
                const v820 = log(v819);
                v820;
                const v821 = fs.rename(unfixedMsiPath, msiPath);
                const v822 = [
                    4,
                    v821
                ];
                return v822;
            case 21:
                const v823 = _e.sent();
                v823;
                _e.label = 22;
            case 22:
                const v824 = [2];
                return v824;
            }
        };
        const v826 = __generator(this, v825);
        return v826;
    };
    const v828 = __awaiter(this, v597, v598, v827);
    return v828;
};
exports.createWindowsInstaller = createWindowsInstaller;
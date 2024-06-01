var fs = require('fs');
var path = require('path');
var fileUtil = require('./fileUtil');
var iconv = require('iconv-lite');
var colors = require('colors');
const startWith = function (str, prefix) {
    const v423 = str.lastIndexOf(prefix, 0);
    const v424 = v423 === 0;
    return v424;
};
const convertCharset = function (charset) {
    charset = charset.toLowerCase();
    const v425 = charset == '';
    const v426 = charset == 'gbk';
    const v427 = v425 || v426;
    const v428 = charset == 'gb2312';
    const v429 = v427 || v428;
    if (v429) {
        charset = '';
    }
    return charset;
};
const addPkgNameToPath = function (pkgPath, pkgName) {
    if (pkgName) {
        const v430 = path.basename(pkgPath);
        var basename = v430.replace(/(\\|\/)$/, '');
        const v431 = basename != pkgName;
        if (v431) {
            const v432 = path.join(pkgPath, pkgName);
            pkgPath = path.normalize(v432);
        }
    }
    return pkgPath;
};
const concat = function (a, origin) {
    const v433 = a && origin;
    const v434 = origin.length;
    const v435 = typeof v434;
    const v436 = v435 !== 'undefined';
    const v437 = v433 && v436;
    if (v437) {
        const v438 = typeof a;
        const v439 = v438 === 'string';
        if (v439) {
            const v440 = origin.push(a);
            v440;
        } else {
            const v441 = a.length;
            if (v441) {
                origin = origin.concat(a);
            }
        }
    }
    return origin;
};
const v442 = [];
const v443 = [];
const v444 = {};
v444.exclude = v442;
v444.ignoreFiles = v443;
v444.suffix = '';
v444.charset = '';
v444.debug = false;
v444.combine = false;
v444.silent = false;
const v445 = {};
const v446 = [];
const v447 = {};
const v448 = [];
const v449 = [];
const v450 = {};
const v453 = function () {
    const v451 = {};
    this._moduleCache = v451;
    this._analyzedFiles = [];
    this._combinedModules = [];
    const v452 = {};
    this._dependencies = v452;
};
const v515 = function (cfg) {
    var self = this;
    const v454 = cfg.packages;
    if (v454) {
        var i = 0;
        const v455 = cfg.packages;
        const v456 = v455.length;
        let v457 = i < v456;
        while (v457) {
            const v459 = cfg.packages;
            var pkg = v459[i];
            const v460 = pkg.charset;
            const v461 = typeof v460;
            const v462 = v461 === 'undefined';
            if (v462) {
                pkg.charset = '';
            }
            const v463 = pkg.path;
            const v464 = pkg.name;
            const v465 = addPkgNameToPath(v463, v464);
            const v466 = path.resolve(v465);
            pkg.path = v466 || __dirname;
            const v467 = pkg.combine;
            const v468 = !v467;
            const v469 = !v468;
            pkg.combine = v469;
            const v470 = pkg.path;
            const v471 = fs.existsSync(v470);
            if (v471) {
                const v472 = self._packages;
                const v473 = pkg.name;
                v472[v473] = pkg;
            }
            const v458 = i++;
            v457 = i < v456;
        }
    }
    const v474 = cfg.map;
    if (v474) {
        var i = 0;
        const v475 = cfg.map;
        const v476 = v475.length;
        let v477 = i < v476;
        while (v477) {
            const v479 = cfg.map;
            var curMap = v479[i];
            const v480 = curMap[0];
            const v481 = typeof v480;
            const v482 = v481 !== 'undefined';
            const v483 = curMap && v482;
            const v484 = curMap[1];
            const v485 = typeof v484;
            const v486 = v485 !== 'undefined';
            const v487 = v483 && v486;
            if (v487) {
                const v488 = self._mappedRules;
                const v489 = v488.push(curMap);
                v489;
            }
            const v478 = i++;
            v477 = i < v476;
        }
    }
    const v490 = cfg.suffix;
    if (v490) {
        const v491 = self._config;
        const v492 = cfg.suffix;
        v491.suffix = v492;
    }
    const v493 = self._config;
    const v494 = cfg.debug;
    let v495;
    if (v494) {
        v495 = true;
    } else {
        v495 = false;
    }
    v493.debug = v495;
    const v497 = cfg.exclude;
    const v498 = self._config;
    const v499 = v498.exclude;
    const v500 = concat(v497, v499);
    v496.exclude = v500;
    const v502 = cfg.ignoreFiles;
    const v503 = self._config;
    const v504 = v503.ignoreFiles;
    const v505 = concat(v502, v504);
    v501.ignoreFiles = v505;
    const v506 = self._config;
    const v507 = cfg.charset;
    const v508 = cfg.charset;
    let v509;
    if (v507) {
        v509 = v508;
    } else {
        v509 = '';
    }
    v506.charset = v509;
    const v510 = self._config;
    const v511 = cfg.silent;
    const v512 = !v511;
    const v513 = !v512;
    v510.silent = v513;
    const v514 = self._config;
    return v514;
};
const v534 = function (str) {
    var totallen = str.length;
    var token;
    var startIndex = 0;
    var endIndex = 0;
    var comments = [];
    let v516 = (startIndex = str.indexOf('//', startIndex)) >= 0;
    while (v516) {
        const v517 = startIndex + 2;
        endIndex = str.indexOf('\n', v517);
        const v518 = endIndex < 0;
        if (v518) {
            endIndex = totallen;
        }
        const v519 = startIndex + 2;
        token = str.slice(v519, endIndex);
        const v520 = comments.push(token);
        v520;
        startIndex += 2;
        v516 = (startIndex = str.indexOf('//', startIndex)) >= 0;
    }
    var i = 0;
    var max = comments.length;
    let v521 = i < max;
    while (v521) {
        const v522 = comments[i];
        const v523 = '//' + v522;
        const v524 = v523 + '\n';
        str = str.replace(v524, '');
        v521 = i < max;
    }
    startIndex = 0;
    endIndex = 0;
    comments = [];
    let v525 = (startIndex = str.indexOf('/*', startIndex)) >= 0;
    while (v525) {
        const v526 = startIndex + 2;
        endIndex = str.indexOf('*/', v526);
        const v527 = endIndex < 0;
        if (v527) {
            endIndex = totallen;
        }
        const v528 = startIndex + 2;
        token = str.slice(v528, endIndex);
        const v529 = comments.push(token);
        v529;
        startIndex += 2;
        v525 = (startIndex = str.indexOf('/*', startIndex)) >= 0;
    }
    (i = 0, max = comments.length)
    let v530 = i < max;
    while (v530) {
        const v531 = comments[i];
        const v532 = '/*' + v531;
        const v533 = v532 + '*/';
        str = str.replace(v533, '');
        v530 = i < max;
    }
    str = str.replace(/\s+/g, ' ');
    return str;
};
const v577 = function (filePath) {
    var self = this;
    const v535 = self._analyzedFiles;
    const v536 = v535.indexOf(filePath);
    const v537 = v536 > 0;
    if (v537) {
        const v538 = self._config;
        const v539 = v538.debug;
        const v540 = 'file :' + filePath;
        const v541 = v540 + ' already analyzed.';
        const v542 = console.log(v541);
        const v543 = v539 && v542;
        v543;
    } else {
        const v544 = fs.existsSync(filePath);
        if (v544) {
            const v545 = self._analyzedFiles;
            const v546 = v545.push(filePath);
            v546;
            const v547 = fs.readFileSync(filePath);
            var fileContent = v547.toString();
            fileContent = self._removeComments(fileContent);
            var requires = fileContent.match(/\{[\s\w:'",]*requires['"\s]*:\s*(\[?[^;\}]*\]?)\}\s*\)/g);
            const v548 = requires != null;
            if (v548) {
                var i = 0;
                const v549 = requires.length;
                let v550 = i < v549;
                while (v550) {
                    const v552 = requires[i];
                    const v553 = '(' + v552;
                    const v554 = eval(v553);
                    var requiredModules = v554.requires;
                    var j = 0;
                    const v555 = requiredModules.length;
                    let v556 = j < v555;
                    while (v556) {
                        var requirePath = requiredModules[j];
                        var module;
                        const v558 = path.extname(requirePath);
                        const v559 = v558 == '.css';
                        if (v559) {
                            continue;
                        }
                        const v560 = path.dirname(filePath);
                        module = self._addModule(requirePath, v560);
                        const v561 = module !== null;
                        const v562 = module.path;
                        const v563 = v561 && v562;
                        if (v563) {
                            const v564 = module.path;
                            const v565 = self._analyzeRequires(v564);
                            v565;
                        }
                        const v557 = j++;
                        v556 = j < v555;
                    }
                    const v551 = i++;
                    v550 = i < v549;
                }
            } else {
                const v566 = self._config;
                const v567 = v566.debug;
                const v568 = 'INFO: module ' + filePath;
                const v569 = v568 + ' has no depends.';
                const v570 = console.log(v569);
                const v571 = v567 && v570;
                v571;
            }
        } else {
            const v572 = self._config;
            const v573 = v572.silent;
            const v574 = !v573;
            const v575 = console.log('WARING: file %s not found.', filePath);
            const v576 = v574 && v575;
            v576;
        }
    }
};
const v590 = function (modulePath, pkg) {
    const v578 = pkg.path;
    const v579 = path.relative(v578, modulePath);
    var relativePkgPath = v579.replace(/\\/g, '/');
    var moduleName = relativePkgPath.replace(/^\.\//, '');
    const v580 = pkg.name;
    const v581 = v580 + '/';
    const v582 = startWith(relativePkgPath, v581);
    const v583 = !v582;
    const v584 = pkg.name;
    const v585 = v584 !== 'kissy';
    const v586 = v583 && v585;
    if (v586) {
        const v587 = pkg.name;
        const v588 = v587 + '/';
        moduleName = v588 + moduleName;
    }
    const v589 = moduleName.replace(/\.js$/i, '');
    return v589;
};
const v662 = function (requirePath, curDir) {
    var self = this;
    var module = {};
    const v591 = requirePath.match(/\.js$/i);
    if (v591) {
        const v592 = typeof curDir;
        const v593 = v592 === 'undefined';
        const v594 = fs.existsSync(requirePath);
        const v595 = v593 || v594;
        if (v595) {
            const v596 = self._config;
            const v597 = v596.debug;
            const v598 = 'core module ' + requirePath;
            const v599 = console.log(v598);
            const v600 = v597 && v599;
            v600;
            module.path = requirePath;
        }
    } else {
        requirePath += '.js';
    }
    const v601 = requirePath.match(/^\.{1,2}/);
    const v602 = v601 && curDir;
    if (v602) {
        const v603 = path.resolve(curDir, requirePath);
        module.path = v603;
    } else {
        const v604 = requirePath.indexOf('/');
        const v605 = v604 === 0;
        if (v605) {
            requirePath = requirePath.substring(1);
        }
    }
    var packageName;
    var packagePath = '';
    let pkgName;
    const v606 = self._packages;
    for (pkgName in v606) {
        const v607 = self._packages;
        const v608 = v607.hasOwnProperty(pkgName);
        if (v608) {
            const v609 = self._packages;
            var pkg = v609[pkgName];
            const v610 = pkg.name;
            const v611 = v610 + '/';
            const v612 = startWith(requirePath, v611);
            if (v612) {
                const v613 = pkg.path;
                const v614 = pkg.name;
                const v615 = v614 + '/';
                const v616 = requirePath.replace(v615, '');
                const v617 = path.resolve(v613, v616);
                module.path = v617;
                const v618 = module.path;
                const v619 = fs.existsSync(v618);
                if (v619) {
                    packageName = pkg.name;
                    module.name = requirePath;
                    break;
                }
            }
            const v620 = module.path;
            if (v620) {
                const v621 = pkg.path;
                const v622 = module.path;
                var curRelativePath = path.relative(v621, v622);
                const v623 = packagePath == '';
                const v624 = packagePath.length;
                const v625 = curRelativePath.length;
                const v626 = v624 > v625;
                const v627 = v623 || v626;
                if (v627) {
                    packagePath = curRelativePath;
                    packageName = pkg.name;
                }
            } else {
                const v628 = pkg.path;
                const v629 = path.join(v628, requirePath);
                var curPath = path.normalize(v629);
                const v630 = fs.existsSync(curPath);
                if (v630) {
                    module.path = curPath;
                    packageName = pkg.name;
                    break;
                }
            }
        }
    }
    const v631 = module.path;
    if (v631) {
        const v632 = self._packages;
        const v633 = v632[packageName];
        module.package = v633;
        const v634 = module.name;
        const v635 = typeof v634;
        const v636 = v635 === 'undefined';
        const v637 = module.path;
        const v638 = module.package;
        const v639 = self._resolveModuleName(v637, v638);
        const v640 = module.name;
        let v641;
        if (v636) {
            v641 = v639;
        } else {
            v641 = v640;
        }
        const v642 = v641.replace(/\.js\s*$/i, '');
        module.name = v642;
        const v643 = module.name;
        const v644 = self._mapModuleName(v643);
        module.name = v644;
        const v645 = module.package;
        const v646 = v645.charset;
        module.charset = v646;
        const v647 = module.name;
        if (v647) {
            const v648 = module.name;
            const v649 = self.isExcluded(v648);
            const v650 = !v649;
            if (v650) {
                const v651 = module.path;
                const v652 = fs.existsSync(v651);
                if (v652) {
                    module.status = 'ok';
                } else {
                    module.status = 'missing';
                }
            } else {
                module.status = 'excluded';
            }
        } else {
            module.status = 'error';
        }
        const v653 = self._moduleCache;
        const v654 = module.name;
        v653[v654] = module;
        const v655 = self._combinedModules;
        const v656 = module.name;
        const v657 = v655.push(v656);
        v657;
        return module;
    } else {
        const v658 = self._config;
        const v659 = v658.debug;
        const v660 = console.log('module %s cannot be found.', requirePath);
        const v661 = v659 && v660;
        v661;
    }
    return null;
};
const v676 = function (moduleName) {
    var self = this;
    const v663 = self._mappedRules;
    const v664 = v663.length;
    const v665 = v664 > 0;
    if (v665) {
        var i = 0;
        const v666 = self._mappedRules;
        const v667 = v666.length;
        let v668 = i < v667;
        while (v668) {
            const v670 = self._mappedRules;
            var rule = v670[i];
            const v671 = rule[0];
            const v672 = moduleName.match(v671);
            if (v672) {
                const v673 = rule[0];
                const v674 = rule[1];
                const v675 = moduleName.replace(v673, v674);
                return v675;
            }
            const v669 = i++;
            v668 = i < v667;
        }
    }
    return moduleName;
};
const v731 = function (result, outputPath, outputCharset) {
    var self = this;
    const v677 = result.combined;
    const v678 = v677.join('\r\n');
    const v679 = [
        '/*',
        'combined files : ',
        '',
        v678,
        '',
        '*/',
        ''
    ];
    var combinedComment = v679.join('\r\n');
    const v680 = typeof outputCharset;
    const v681 = v680 === 'undefined';
    const v682 = outputCharset === null;
    const v683 = v681 || v682;
    const v684 = self._config;
    const v685 = v684.charset;
    if (v683) {
        outputCharset = v685;
    } else {
        outputCharset = outputCharset;
    }
    let combineFile;
    const v686 = self._config;
    const v687 = v686.suffix;
    const v688 = self._config;
    const v689 = v688.suffix;
    const v690 = v689 + '.js';
    const v691 = outputPath.replace(/\.js$/i, v690);
    if (v687) {
        combineFile = v691;
    } else {
        combineFile = outputPath;
    }
    const v692 = path.dirname(combineFile);
    const v693 = fileUtil.mkdirsSync(v692);
    v693;
    const v694 = fs.existsSync(combineFile);
    if (v694) {
        const v695 = fs.unlinkSync(combineFile);
        v695;
    }
    var fd = fs.openSync(combineFile, 'w');
    var combinedCommentBuffer = iconv.encode(combinedComment, outputCharset);
    const v696 = combinedCommentBuffer.length;
    const v697 = fs.writeSync(fd, combinedCommentBuffer, 0, v696);
    v697;
    const v698 = fs.closeSync(fd);
    v698;
    fd = fs.openSync(combineFile, 'a');
    let moduleName;
    const v699 = result._moduleCache;
    for (moduleName in v699) {
        const v700 = result._moduleCache;
        const v701 = v700.hasOwnProperty(moduleName);
        if (v701) {
            const v702 = result._moduleCache;
            var module = v702[moduleName];
            const v703 = module.path;
            const v704 = fs.readFileSync(v703);
            const v705 = module.charset;
            var moduleContent = iconv.decode(v704, v705);
            var start = moduleContent.indexOf('KISSY.add(');
            const v706 = -1;
            const v707 = start == v706;
            if (v707) {
                start = moduleContent.indexOf('.add(');
                const v708 = -1;
                const v709 = start != v708;
                if (v709) {
                    start = start + 5;
                }
            } else {
                start = start + 10;
            }
            var end = moduleContent.indexOf('function', start);
            const v710 = -1;
            const v711 = start > v710;
            const v712 = end > start;
            const v713 = v711 && v712;
            if (v713) {
                var oldModuleName = moduleContent.substring(start, end);
                var moduleNameRegResult = oldModuleName.match(/^(\s*)\/\*(.*)\*\/(\s*)$/);
                const v714 = moduleNameRegResult != null;
                if (v714) {
                    const v715 = module.name;
                    const v716 = '\'' + v715;
                    const v717 = v716 + '\', ';
                    moduleContent = moduleContent.replace(oldModuleName, v717);
                }
            } else {
                const v718 = -1;
                const v719 = start > v718;
                const v720 = end == start;
                const v721 = v719 && v720;
                if (v721) {
                    const v722 = moduleContent.slice(0, start);
                    const v723 = module.name;
                    const v724 = '\'' + v723;
                    const v725 = v724 + '\',';
                    const v726 = moduleContent.slice(end);
                    const v727 = [
                        v722,
                        v725,
                        v726
                    ];
                    moduleContent = v727.join('');
                }
            }
            moduleContent += '\r\n';
            var buffer = iconv.encode(moduleContent, outputCharset);
            const v728 = buffer.length;
            const v729 = fs.writeSync(fd, buffer, 0, v728);
            v729;
        }
    }
    const v730 = fs.closeSync(fd);
    v730;
};
const v752 = function (inputPath) {
    var self = this;
    var result = null;
    const v732 = self._analyzeRequires(inputPath);
    v732;
    var dependencies = [];
    var combined = [];
    var moduleCache = {};
    let moduleName;
    const v733 = self._moduleCache;
    for (moduleName in v733) {
        const v734 = self._moduleCache;
        var module = v734[moduleName];
        const v735 = dependencies.push(module);
        v735;
        const v736 = module.status;
        const v737 = v736 == 'ok';
        if (v737) {
            const v738 = module.name;
            const v739 = combined.push(v738);
            v739;
            const v740 = module.name;
            moduleCache[v740] = module;
        }
    }
    var coreModule = self._addModule(inputPath);
    if (coreModule) {
        const v741 = coreModule.name;
        const v742 = combined.indexOf(v741);
        const v743 = v742 > 0;
        if (v743) {
            const v744 = self._config;
            const v745 = v744.debug;
            const v746 = console.log('core module already added before. Skip...');
            const v747 = v745 && v746;
            v747;
        } else {
            const v748 = coreModule.name;
            const v749 = combined.push(v748);
            v749;
            const v750 = coreModule.name;
            moduleCache[v750] = coreModule;
        }
        result = coreModule;
        result.submods = dependencies;
        result.combined = combined;
        result._moduleCache = moduleCache;
    }
    const v751 = self._clean();
    v751;
    return result;
};
const v762 = function (inputPath, outputPath, outputCharset) {
    var self = this;
    var result = self.analyze(inputPath);
    const v753 = self._combo(result, outputPath, outputCharset);
    v753;
    const v754 = self._config;
    const v755 = v754.silent;
    const v756 = !v755;
    const v757 = '[ok]'.bold;
    const v758 = v757.green;
    const v759 = v758 + ' ===> %s';
    const v760 = console.info(v759, inputPath, outputPath);
    const v761 = v756 && v760;
    v761;
    return result;
};
const v772 = function (file) {
    var self = this;
    var i = 0;
    const v763 = self._config;
    const v764 = v763.exclude;
    const v765 = v764.length;
    let v766 = i < v765;
    while (v766) {
        const v768 = self._config;
        const v769 = v768.exclude;
        const v770 = v769[i];
        const v771 = file.match(v770);
        if (v771) {
            return true;
        }
        const v767 = i++;
        v766 = i < v765;
    }
    return false;
};
const v782 = function (filePath) {
    var self = this;
    var i = 0;
    const v773 = self._config;
    const v774 = v773.ignoreFiles;
    const v775 = v774.length;
    let v776 = i < v775;
    while (v776) {
        const v778 = self._config;
        const v779 = v778.ignoreFiles;
        const v780 = v779[i];
        const v781 = filePath.match(v780);
        if (v781) {
            return true;
        }
        const v777 = i++;
        v776 = i < v775;
    }
    return false;
};
const v800 = function (moduleName) {
    var self = this;
    var i = 0;
    const v783 = self._config;
    const v784 = v783.packages;
    const v785 = v784.length;
    let v786 = i < v785;
    while (v786) {
        const v788 = self._config;
        const v789 = v788.packages;
        var pkg = v789[i];
        const v790 = pkg.name;
        const v791 = v790 + '/(.*)';
        const v792 = new RegExp(v791);
        var module = moduleName.match(v792);
        const v793 = module[1];
        const v794 = module && v793;
        if (v794) {
            const v795 = pkg.path;
            const v796 = module[1];
            const v797 = v796.replace(/\.js/, '');
            const v798 = v797 + '.js';
            var modulePath = path.resolve(v795, v798);
            const v799 = fs.existsSync(modulePath);
            if (v799) {
                return modulePath;
            }
        }
        const v787 = i++;
        v786 = i < v785;
    }
    return false;
};
var ModuleCompiler = {};
ModuleCompiler._config = v444;
ModuleCompiler._packages = v445;
ModuleCompiler._mappedRules = v446;
ModuleCompiler._moduleCache = v447;
ModuleCompiler._analyzedFiles = v448;
ModuleCompiler._combinedModules = v449;
ModuleCompiler._dependencies = v450;
ModuleCompiler._clean = v453;
ModuleCompiler._parseConfig = v515;
ModuleCompiler._removeComments = v534;
ModuleCompiler._analyzeRequires = v577;
ModuleCompiler._resolveModuleName = v590;
ModuleCompiler._addModule = v662;
ModuleCompiler._mapModuleName = v676;
ModuleCompiler._combo = v731;
ModuleCompiler.analyze = v752;
ModuleCompiler.build = v762;
ModuleCompiler.isExcluded = v772;
ModuleCompiler.isFileIgnored = v782;
ModuleCompiler.getModulePath = v800;
const v806 = function (cfg) {
    var config = ModuleCompiler._config;
    if (cfg) {
        config = ModuleCompiler._parseConfig(cfg);
    }
    config.packages = [];
    let pkg;
    const v801 = ModuleCompiler._packages;
    for (pkg in v801) {
        const v802 = config.packages;
        const v803 = ModuleCompiler._packages;
        const v804 = v803[pkg];
        const v805 = v802.push(v804);
        v805;
    }
    return config;
};
const v808 = function (inputPath) {
    const v807 = ModuleCompiler.analyze(inputPath);
    return v807;
};
const v837 = function (inputPath, outputPath, outputCharset) {
    var target = path.resolve(inputPath);
    const v809 = [];
    var result = {};
    result['success'] = true;
    result['files'] = v809;
    const v810 = fs.existsSync(target);
    if (v810) {
        const v811 = fs.statSync(target);
        const v812 = v811.isDirectory();
        if (v812) {
            var targets = fs.readdirSync(target);
            let i;
            for (i in targets) {
                const v813 = targets[i];
                const v814 = ModuleCompiler.isFileIgnored(v813);
                const v815 = !v814;
                if (v815) {
                    const v816 = targets[i];
                    var inputFile = path.resolve(target, v816);
                    const v817 = targets[i];
                    var outputFile = path.join(outputPath, v817);
                    const v818 = path.extname(inputFile);
                    const v819 = v818 === '.js';
                    if (v819) {
                        const v820 = result.files;
                        const v821 = ModuleCompiler.build(inputFile, outputFile, outputCharset);
                        const v822 = v820.push(v821);
                        v822;
                    }
                }
            }
        } else {
            const v823 = result.files;
            const v824 = ModuleCompiler.build(target, outputPath, outputCharset);
            const v825 = v823.push(v824);
            v825;
        }
    } else {
        var modulePath = ModuleCompiler.getModulePath(inputPath);
        if (modulePath) {
            const v826 = result.files;
            const v827 = ModuleCompiler.build(modulePath, outputPath, outputCharset);
            const v828 = v826.push(v827);
            v828;
        } else {
            result.success = false;
            const v829 = ModuleCompiler._config;
            const v830 = v829.silent;
            const v831 = !v830;
            const v832 = '[err]'.bold;
            const v833 = v832.red;
            const v834 = v833 + ' cannot find target: %s';
            const v835 = console.info(v834, target);
            const v836 = v831 && v835;
            v836;
        }
    }
    return result;
};
const v843 = function () {
    const v838 = [];
    const v839 = [];
    const v840 = {};
    v840.exclude = v838;
    v840.ignoreFiles = v839;
    v840.suffix = '';
    v840.charset = '';
    v840.combine = false;
    v840.silent = false;
    ModuleCompiler._config = v840;
    const v841 = {};
    ModuleCompiler._packages = v841;
    ModuleCompiler._mappedRules = [];
    const v842 = ModuleCompiler._clean();
    v842;
};
const v844 = {};
v844.config = v806;
v844.analyze = v808;
v844.build = v837;
v844.clean = v843;
module.exports = v844;
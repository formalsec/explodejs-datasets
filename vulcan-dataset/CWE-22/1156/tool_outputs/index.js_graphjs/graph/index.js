'use strict';
const topLogPrefix = 'larvitbase-www: ./index.js: ';
const ReqParser = require('larvitreqparser');
const Router = require('larvitrouter');
const LBase = require('larvitbase');
const LUtils = require('larvitutils');
const async = require('async');
const send = require('send');
const path = require('path');
const ejs = require('ejs');
const fs = require('fs');
const _ = require('lodash');
const v419 = ejs.includeFile;
ejs.includeFile_org = v419;
const v420 = ejs.resolveInclude;
ejs.resolveInclude_org = v420;
const App = function (options) {
    const that = this;
    const v421 = !options;
    if (v421) {
        options = {};
    }
    that.options = options;
    const v422 = that.options;
    const v423 = v422.log;
    const v424 = !v423;
    if (v424) {
        const lUtils = new LUtils();
        const v425 = that.options;
        v425.log = new lUtils.Log();
    }
    const v426 = that.options;
    const v427 = v426.log;
    that.log = v427;
    const v428 = that.options;
    const v429 = v428.routerOptions;
    const v430 = !v429;
    if (v430) {
        const v431 = that.options;
        const v432 = {};
        v431.routerOptions = v432;
    }
    const v433 = that.options;
    const v434 = v433.routerOptions;
    const v435 = v434.log;
    const v436 = !v435;
    if (v436) {
        const v437 = that.options;
        const v438 = v437.routerOptions;
        const v439 = that.log;
        v438.log = v439;
    }
    const v440 = that.options;
    const v441 = v440.baseOptions;
    const v442 = !v441;
    if (v442) {
        const v443 = that.options;
        const v444 = {};
        v443.baseOptions = v444;
    }
    const v445 = that.options;
    const v446 = v445.baseOptions;
    const v447 = v446.log;
    const v448 = !v447;
    if (v448) {
        const v449 = that.options;
        const v450 = v449.baseOptions;
        const v451 = that.log;
        v450.log = v451;
    }
    const v452 = that.options;
    const v453 = v452.reqParserOptions;
    const v454 = !v453;
    if (v454) {
        const v455 = that.options;
        const v456 = {};
        v455.reqParserOptions = v456;
    }
    const v457 = that.options;
    const v458 = v457.reqParserOptions;
    const v459 = v458.log;
    const v460 = !v459;
    if (v460) {
        const v461 = that.options;
        const v462 = v461.reqParserOptions;
        const v463 = that.log;
        v462.log = v463;
    }
    const v464 = {};
    that.compiledTemplates = v464;
    const v465 = that.options;
    const v466 = v465.routerOptions;
    that.router = new Router(v466);
    const v467 = that.options;
    const v468 = v467.reqParserOptions;
    that.reqParser = new ReqParser(v468);
    const v469 = options.baseOptions;
    const v470 = v469.middleware;
    const v471 = Array.isArray(v470);
    const v472 = !v471;
    if (v472) {
        const v473 = options.baseOptions;
        const v475 = function mwValidateRoute(req, res, cb) {
            const v474 = that.mwValidateRoute(req, res, cb);
            v474;
        };
        const v477 = function mwParse(req, res, cb) {
            const v476 = that.mwParse(req, res, cb);
            v476;
        };
        const v479 = function mwRoute(req, res, cb) {
            const v478 = that.mwRoute(req, res, cb);
            v478;
        };
        const v481 = function mwSendStatic(req, res, cb) {
            const v480 = that.mwSendStatic(req, res, cb);
            v480;
        };
        const v483 = function mwRunController(req, res, cb) {
            const v482 = that.mwRunController(req, res, cb);
            v482;
        };
        const v485 = function mwRender(req, res, cb) {
            const v484 = that.mwRender(req, res, cb);
            v484;
        };
        const v487 = function mwSendToClient(req, res, cb) {
            const v486 = that.mwSendToClient(req, res, cb);
            v486;
        };
        const v489 = function mwCleanup(req, res, cb) {
            const v488 = that.mwCleanup(req, res, cb);
            v488;
        };
        v473.middleware = [
            v475,
            v477,
            v479,
            v481,
            v483,
            v485,
            v487,
            v489
        ];
    }
    const v490 = options.baseOptions;
    const v491 = v490.middleware;
    that.middleware = v491;
};
;
const v492 = App.prototype;
const internalError = function (req, res) {
    res.statusCode = 500;
    const v493 = res.end('500 Internal Server Error');
    v493;
};
v492.internalError = internalError;
const v494 = App.prototype;
const noTargetFound = function (req, res, cb) {
    const that = this;
    res.statusCode = 404;
    const v495 = that.router;
    const v508 = function (err, result) {
        const v496 = result.templateFullPath;
        const v497 = !v496;
        if (v497) {
            const v498 = res.end('404 Not Found');
            v498;
            req.finished = true;
        } else {
            const v499 = req.routed;
            const v500 = result.controllerPath;
            v499.controllerPath = v500;
            const v501 = req.routed;
            const v502 = result.controllerFullPath;
            v501.controllerFullPath = v502;
            const v503 = req.routed;
            const v504 = result.templatePath;
            v503.templatePath = v504;
            const v505 = req.routed;
            const v506 = result.templateFullPath;
            v505.templateFullPath = v506;
        }
        const v507 = cb();
        v507;
    };
    const v509 = v495.resolve('/404', v508);
    v509;
};
v494.noTargetFound = noTargetFound;
const v510 = App.prototype;
const mwValidateRoute = function (req, res, cb) {
    const v511 = req.logPrefix;
    const logPrefix = v511 + 'mwValidateRoute() - ';
    const that = this;
    const v512 = req.url;
    var reqPath = decodeURI(v512);
    const v513 = reqPath.includes('..');
    if (v513) {
        const v514 = that.log;
        const v515 = logPrefix + 'Requested file outside the process directory (Directory Traversal Attempt).';
        const v516 = v514.verbose(v515);
        v516;
        const v517 = that.noTargetFound(req, res, cb);
        v517;
    }
};
v510.mwValidateRoute = mwValidateRoute;
const v518 = App.prototype;
const mwCleanup = function (req, res, cb) {
    const that = this;
    const v519 = req.finished;
    const v520 = delete v519;
    v520;
    const v521 = that.reqParser;
    const v522 = v521.clean(req, res, cb);
    v522;
};
v518.mwCleanup = mwCleanup;
const v523 = App.prototype;
const mwParse = function (req, res, cb) {
    const that = this;
    const v524 = topLogPrefix + 'req.uuid: ';
    const v525 = req.uuid;
    const v526 = v524 + v525;
    const v527 = v526 + ' url: ';
    const v528 = req.url;
    const v529 = v527 + v528;
    req.logPrefix = v529 + ' - ';
    const v530 = req.finished;
    if (v530) {
        const v531 = cb();
        return v531;
    }
    const v532 = that.reqParser;
    const v533 = v532.parse(req, res, cb);
    v533;
};
v523.mwParse = mwParse;
const v534 = App.prototype;
const mwRender = function (req, res, cb) {
    const v535 = req.logPrefix;
    const logPrefix = v535 + 'mwRender() - ';
    const tasks = [];
    const that = this;
    const v536 = req.finished;
    const v537 = req.render;
    const v538 = v537 === false;
    const v539 = v536 || v538;
    if (v539) {
        const v540 = cb();
        return v540;
    }
    const v541 = req.routed;
    const v542 = v541.templateFullPath;
    const v543 = !v542;
    if (v543) {
        const v544 = that.log;
        const v545 = logPrefix + 'No template found. req.routed.templateFullPath is not set.';
        const v546 = v544.verbose(v545);
        v546;
        const v547 = cb();
        return v547;
    }
    const v604 = function (filePath, options) {
        const v548 = that.router;
        const v549 = v548.options;
        const v550 = v549.basePath;
        const routerBasePath = path.resolve(v550);
        const v551 = that.router;
        const v552 = v551.options;
        const routerLfs = v552.lfs;
        let filePathAbsolute;
        let relativePath;
        const v553 = options.filename;
        if (v553) {
            const v554 = options.filename;
            const v555 = routerBasePath.length;
            const v556 = v555 + 1;
            relativePath = v554.substring(v556);
            const pathParts = relativePath.split('/');
            relativePath = '';
            let i = 0;
            const v557 = pathParts[i];
            let v558 = v557 !== undefined;
            while (v558) {
                const v560 = pathParts[i];
                const v561 = v560 === 'node_modules';
                if (v561) {
                    const v562 = i++;
                    v562;
                } else {
                    const v563 = i + 1;
                    const v564 = pathParts[v563];
                    if (v564) {
                        const v565 = pathParts[i];
                        relativePath += v565 + '/';
                    }
                }
                const v559 = i++;
                v558 = v557 !== undefined;
            }
        } else {
            const v566 = req.routed;
            const v567 = v566.templateFullPath;
            const v568 = path.parse(v567);
            const v569 = v568.dir;
            const v570 = routerBasePath.length;
            const v571 = v570 + 1;
            relativePath = v569.substring(v571);
        }
        const v572 = filePath.substring(0, 1);
        const v573 = v572 === '/';
        if (v573) {
            const v574 = ejs.includeFile_org(filePath, options);
            return v574;
        }
        const v575 = relativePath + '/';
        const v576 = v575 + filePath;
        filePathAbsolute = routerLfs.getPathSync(v576);
        const v577 = !filePathAbsolute;
        const v578 = that.router;
        const v579 = v577 && v578;
        const v580 = that.router;
        const v581 = v580.options;
        const v582 = v579 && v581;
        const v583 = that.router;
        const v584 = v583.options;
        const v585 = v584.paths;
        const v586 = v585.template;
        const v587 = v586.exts;
        const v588 = Array.isArray(v587);
        const v589 = v582 && v588;
        if (v589) {
            let ext;
            const v590 = that.router;
            const v591 = v590.options;
            const v592 = v591.paths;
            const v593 = v592.template;
            const v594 = v593.exts;
            for (ext of v594) {
                const v595 = relativePath + '/';
                const v596 = v595 + filePath;
                const v597 = v596 + '.';
                const v598 = v597 + ext;
                filePathAbsolute = routerLfs.getPathSync(v598);
                if (filePathAbsolute) {
                    break;
                }
            }
        }
        const v599 = !filePathAbsolute;
        if (v599) {
            const v600 = 'Can not find template matching "' + filePath;
            const v601 = v600 + '"';
            const v602 = new Error(v601);
            throw v602;
        }
        const v603 = ejs.includeFile_org(filePathAbsolute, options);
        return v603;
    };
    ejs.includeFile = v604;
    const v605 = that.compiledTemplates;
    const v606 = req.routed;
    const v607 = v606.templateFullPath;
    const v608 = v605[v607];
    const v609 = !v608;
    if (v609) {
        const v610 = that.log;
        const v611 = logPrefix + 'Compiling template: ';
        const v612 = req.routed;
        const v613 = v612.templateFullPath;
        const v614 = v611 + v613;
        const v615 = v610.debug(v614);
        v615;
        const v641 = function (cb) {
            const v616 = req.routed;
            const v617 = v616.templateFullPath;
            const v639 = function (err, str) {
                const compileOpts = {};
                compileOpts.outputFunctionName = 'print';
                let html;
                if (err) {
                    const v618 = that.log;
                    const v619 = logPrefix + 'Could not read template file. err: ';
                    const v620 = err.message;
                    const v621 = v619 + v620;
                    const v622 = v618.error(v621);
                    v622;
                    const v623 = cb(err);
                    return v623;
                }
                html = str.toString();
                try {
                    const v627 = ejs.compile(html, compileOpts);
                    v624[v626] = v627;
                } catch (err) {
                    const v628 = that.log;
                    const v629 = logPrefix + 'Could not compile "';
                    const v630 = req.routed;
                    const v631 = v630.templateFullPath;
                    const v632 = v629 + v631;
                    const v633 = v632 + '", err: ';
                    const v634 = err.message;
                    const v635 = v633 + v634;
                    const v636 = v628.error(v635);
                    v636;
                    const v637 = cb(err);
                    return v637;
                }
                const v638 = cb();
                v638;
            };
            const v640 = fs.readFile(v617, v639);
            v640;
        };
        const v642 = tasks.push(v641);
        v642;
    }
    const v660 = function (err) {
        if (err) {
            const v643 = cb(err);
            return v643;
        }
        try {
            const renderObject = {};
            renderObject._ = _;
            const v644 = res.data;
            renderObject.data = v644;
            const v645 = that.compiledTemplates;
            const v646 = req.routed;
            const v647 = v646.templateFullPath;
            const v648 = v645[v647](renderObject);
            res.renderedData = v648;
        } catch (err) {
            const v649 = that.log;
            const v650 = logPrefix + 'Could not render "';
            const v651 = req.routed;
            const v652 = v651.templateFullPath;
            const v653 = v650 + v652;
            const v654 = v653 + '", err: ';
            const v655 = err.message;
            const v656 = v654 + v655;
            const v657 = v649.error(v656);
            v657;
            const v658 = cb(err);
            return v658;
        }
        const v659 = cb();
        v659;
    };
    const v661 = async.series(tasks, v660);
    v661;
};
v534.mwRender = mwRender;
const v662 = App.prototype;
const mwRoute = function (req, res, cb) {
    const v663 = req.logPrefix;
    const logPrefix = v663 + 'mwRoute() - ';
    const tasks = [];
    const that = this;
    let routeUrl;
    const v664 = req.finished;
    if (v664) {
        const v665 = cb();
        return v665;
    }
    const v666 = req.urlParsed;
    const v667 = !v666;
    if (v667) {
        const err = new Error('req.urlParsed is not set');
        const v668 = that.log;
        const v669 = err.message;
        const v670 = logPrefix + v669;
        const v671 = v668.error(v670);
        v671;
        const v672 = that.log;
        const v673 = err.stack;
        const v674 = v672.verbose(v673);
        v674;
        const v675 = cb(err);
        return v675;
    }
    const v676 = req.urlParsed;
    routeUrl = v676.pathname;
    const v677 = {};
    req.routed = v677;
    const v678 = routeUrl.split('?');
    const v679 = v678[0];
    const v680 = v679 === '/';
    if (v680) {
        routeUrl = '/default';
    } else {
        const v681 = routeUrl.split('?');
        const v682 = v681[0];
        const v683 = v682 === '/.json';
        if (v683) {
            routeUrl = '/default.json';
        }
    }
    const v684 = req.urlParsed;
    const v685 = v684.pathname;
    const v686 = req.urlParsed;
    const v687 = v686.pathname;
    const v688 = v687.length;
    const v689 = v688 - 4;
    const v690 = v685.substring(v689);
    const v691 = v690 === 'json';
    if (v691) {
        const v692 = that.log;
        const v693 = logPrefix + 'url ends in json, use some custom route options';
        const v694 = v692.debug(v693);
        v694;
        req.render = false;
        const v695 = req.urlParsed;
        const v696 = v695.pathname;
        const v697 = req.urlParsed;
        const v698 = v697.pathname;
        const v699 = v698.length;
        const v700 = v699 - 5;
        routeUrl = v696.substring(0, v700);
        const v713 = function (cb) {
            const v701 = that.router;
            const v702 = req.urlParsed;
            const v703 = v702.pathname;
            const v711 = function (err, result) {
                if (err) {
                    const v704 = cb(err);
                    return v704;
                }
                const v705 = result.staticPath;
                if (v705) {
                    const v706 = req.routed;
                    const v707 = result.staticPath;
                    v706.staticPath = v707;
                    const v708 = req.routed;
                    const v709 = result.staticFullPath;
                    v708.staticFullPath = v709;
                }
                const v710 = cb();
                v710;
            };
            const v712 = v701.resolve(v703, v711);
            v712;
        };
        const v714 = tasks.push(v713);
        v714;
    } else {
        req.render = true;
    }
    const v733 = function (cb) {
        const v715 = that.router;
        const v731 = function (err, result) {
            if (err) {
                const v716 = cb(err);
                return v716;
            }
            const v717 = req.routed;
            const v718 = result.controllerPath;
            v717.controllerPath = v718;
            const v719 = req.routed;
            const v720 = result.controllerFullPath;
            v719.controllerFullPath = v720;
            const v721 = req.routed;
            const v722 = result.templatePath;
            v721.templatePath = v722;
            const v723 = req.routed;
            const v724 = result.templateFullPath;
            v723.templateFullPath = v724;
            const v725 = result.staticPath;
            if (v725) {
                const v726 = req.routed;
                const v727 = result.staticPath;
                v726.staticPath = v727;
                const v728 = req.routed;
                const v729 = result.staticFullPath;
                v728.staticFullPath = v729;
            }
            const v730 = cb(err);
            v730;
        };
        const v732 = v715.resolve(routeUrl, v731);
        v732;
    };
    const v734 = tasks.push(v733);
    v734;
    const v735 = async.parallel(tasks, cb);
    v735;
};
v662.mwRoute = mwRoute;
const v736 = App.prototype;
const mwRunController = function (req, res, cb) {
    const v737 = req.logPrefix;
    const logPrefix = v737 + 'mwRunController() - ';
    const that = this;
    const v738 = req.finished;
    if (v738) {
        const v739 = cb();
        return v739;
    }
    const v740 = req.routed;
    const v741 = v740.templateFullPath;
    const v742 = req.routed;
    const v743 = v742.controllerFullPath;
    const v744 = !v743;
    const v745 = v741 && v744;
    if (v745) {
        const v746 = that.log;
        const v747 = logPrefix + 'Only template found';
        const v748 = v746.debug(v747);
        v748;
        const v749 = cb();
        return v749;
    } else {
        const v750 = req.routed;
        const v751 = v750.controllerFullPath;
        const v752 = !v751;
        const v753 = req.routed;
        const v754 = v753.templateFullPath;
        const v755 = !v754;
        const v756 = v752 && v755;
        if (v756) {
            const v757 = that.log;
            const v758 = logPrefix + 'Either controller nor template found for given url, running that.noTargetFound()';
            const v759 = v757.debug(v758);
            v759;
            const v760 = that.noTargetFound(req, res, cb);
            v760;
        } else {
            const v761 = that.log;
            const v762 = logPrefix + 'Controller found, running';
            const v763 = v761.debug(v762);
            v763;
            try {
                const v764 = req.routed;
                const v765 = v764.controllerFullPath;
                const v766 = require(v765);
                const v767 = v766(req, res, cb);
                v767;
            } catch (err) {
                const v768 = that.log;
                const v769 = logPrefix + 'Got exception when trying to run controller: ';
                const v770 = req.routed;
                const v771 = v770.controllerFullPath;
                const v772 = v769 + v771;
                const v773 = v772 + ' (are you sure that module.exports is a function in the controller?), err: ';
                const v774 = err.message;
                const v775 = v773 + v774;
                const v776 = v768.error(v775);
                v776;
            }
        }
    }
};
v736.mwRunController = mwRunController;
const v777 = App.prototype;
const mwSendStatic = function (req, res, cb) {
    const v778 = req.logPrefix;
    const logPrefix = v778 + 'mwSendStatic() - ';
    const that = this;
    const v779 = req.finished;
    if (v779) {
        const v780 = cb();
        return v780;
    }
    const v781 = req.routed;
    const v782 = v781.staticFullPath;
    if (v782) {
        const v783 = req.routed;
        const v784 = v783.staticFullPath;
        const v785 = { index: false };
        const sendStream = send(req, v784, v785);
        req.finished = true;
        const v786 = that.log;
        const v787 = logPrefix + 'Static file found, streaming';
        const v788 = v786.debug(v787);
        v788;
        const v789 = sendStream.pipe(res);
        v789;
        const v796 = function (err) {
            const v790 = that.log;
            const v791 = logPrefix + 'error sending static file to client. err: ';
            const v792 = err.message;
            const v793 = v791 + v792;
            const v794 = v790.warn(v793);
            v794;
            const v795 = cb(err);
            return v795;
        };
        const v797 = sendStream.on('error', v796);
        v797;
        const v798 = sendStream.on('end', cb);
        v798;
    } else {
        const v799 = cb();
        return v799;
    }
};
v777.mwSendStatic = mwSendStatic;
const v800 = App.prototype;
const mwSendToClient = function (req, res, cb) {
    const v801 = req.logPrefix;
    const logPrefix = v801 + 'mwSendToClient() - ';
    const that = this;
    let sendData = res.data;
    const v802 = req.finished;
    if (v802) {
        const v803 = cb();
        return v803;
    }
    const v804 = res.renderedData;
    if (v804) {
        const v805 = res.setHeader('Content-Type', 'text/html; charset=UTF-8');
        v805;
        const v806 = res.renderedData;
        const v807 = res.end(v806);
        v807;
        req.finished = true;
        const v808 = cb();
        return v808;
    }
    const v809 = res.setHeader('Content-Type', 'application/json; charset=UTF-8');
    v809;
    try {
        const v810 = typeof sendData;
        const v811 = v810 !== 'string';
        const v812 = Buffer.isBuffer(sendData);
        const v813 = !v812;
        const v814 = v811 && v813;
        if (v814) {
            sendData = JSON.stringify(sendData);
        }
    } catch (err) {
        const v815 = that.log;
        const v816 = logPrefix + 'Could not stringify sendData. err: ';
        const v817 = err.message;
        const v818 = v816 + v817;
        const v819 = v815.warn(v818);
        v819;
        const v820 = cb(err);
        return v820;
    }
    const v821 = res.end(sendData);
    v821;
    req.finished = true;
    const v822 = cb();
    v822;
};
v800.mwSendToClient = mwSendToClient;
const v823 = App.prototype;
const start = function (cb) {
    const that = this;
    const v824 = that.options;
    const v825 = v824.baseOptions;
    that.base = new LBase(v825);
    const v826 = that.base;
    const v828 = function (err, req, res) {
        const v827 = that.internalError(req, res);
        v827;
    };
    const v829 = v826.on('error', v828);
    v829;
    const v830 = that.base;
    const v831 = v830.start(cb);
    v831;
};
v823.start = start;
const v832 = App.prototype;
const v836 = function (cb) {
    const that = this;
    const v833 = that.base;
    const v834 = v833.httpServer;
    const v835 = v834.close(cb);
    v835;
};
v832.stop = v836;
module.exports = App;
exports = module.exports;
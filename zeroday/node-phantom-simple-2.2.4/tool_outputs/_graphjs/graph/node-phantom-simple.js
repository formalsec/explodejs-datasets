'use strict';
var HeadlessError = require('./headless_error');
var http = require('http');
const v459 = require('child_process');
var spawn = v459.spawn;
const v460 = require('child_process');
var exec = v460.exec;
var util = require('util');
var path = require('path');
var debug = require('debug');
const v461 = process.env;
const v462 = v461.POLL_INTERVAL;
var POLL_INTERVAL = v462 || 500;
const v463 = debug('node-phantom-simple:debug');
const v464 = debug('node-phantom-simple:warn');
const v465 = debug('node-phantom-simple:error');
var logger = {};
logger.debug = v463;
logger.warn = v464;
logger.error = v465;
var queue = function (worker) {
    var _q = [];
    var running = false;
    const v468 = function (obj) {
        const v466 = _q.push(obj);
        v466;
        const v467 = q.process();
        v467;
    };
    const v474 = function () {
        const v469 = _q.length;
        const v470 = v469 === 0;
        const v471 = running || v470;
        if (v471) {
            return;
        }
        running = true;
        var cb = function () {
            running = false;
            const v472 = q.process();
            v472;
        };
        var task = _q.shift();
        const v473 = worker(task, cb);
        v473;
    };
    var q = {};
    q.push = v468;
    q.process = v474;
    return q;
};
const callbackOrDummy = function (callback, poll_func) {
    const v475 = !callback;
    if (v475) {
        const v476 = function () {
        };
        return v476;
    }
    if (poll_func) {
        const v483 = function () {
            const v477 = Array.prototype;
            const v478 = v477.slice;
            var args = v478.call(arguments);
            const v481 = function (err) {
                if (err) {
                    const v479 = callback(err);
                    v479;
                    return;
                }
                const v480 = callback.apply(null, args);
                v480;
            };
            const v482 = poll_func(v481);
            v482;
        };
        return v483;
    }
    return callback;
};
const unwrapArray = function (arr) {
    const v484 = arr.length;
    const v485 = v484 === 1;
    const v486 = arr && v485;
    const v487 = arr[0];
    let v488;
    if (v486) {
        v488 = v487;
    } else {
        v488 = arr;
    }
    return v488;
};
const wrapArray = function (arr) {
    const v489 = arr instanceof Array;
    const v490 = [arr];
    let v491;
    if (v489) {
        v491 = arr;
    } else {
        v491 = v490;
    }
    return v491;
};
const clone = function (obj) {
    const v492 = obj === null;
    const v493 = typeof obj;
    const v494 = v493 !== 'object';
    const v495 = v492 || v494;
    if (v495) {
        return obj;
    }
    var copy = {};
    let attr;
    for (attr in obj) {
        const v496 = obj.hasOwnProperty(attr);
        if (v496) {
            const v497 = obj[attr];
            const v498 = clone(v497);
            copy[attr] = v498;
        }
    }
    return copy;
};
const v499 = function () {
};
var pageEvaluateDeprecatedFn = util.deprecate(v499, 'Deprecated \'page.evaluate(fn, callback, args...)\' syntax - use \'page.evaluate(fn, args..., callback)\' instead');
const v500 = function () {
};
var createDeprecatedFn = util.deprecate(v500, 'Deprecated \'.create(callback, options)\' syntax - use \'.create(options, callback)\' instead');
const v501 = function () {
};
var pageWaitForSelectorDeprecatedFn = util.deprecate(v501, 'Deprecated \'page.waitForSelector(selector, callback, timeout)\' syntax - use \'page.waitForSelector(selector, timeout, callback)\' instead');
const v502 = function () {
};
var phantomPathDeprecatedFn = util.deprecate(v502, 'Deprecated \'phantomPath\' option - use \'path\' instead');
const v822 = function (options, callback) {
    const v503 = Object.prototype;
    const v504 = v503.toString;
    const v505 = v504.call(options);
    const v506 = v505 === '[object Function]';
    const v507 = callback && v506;
    if (v507) {
        const v508 = createDeprecatedFn();
        v508;
        var tmp = options;
        options = callback;
        callback = tmp;
    }
    const v509 = !callback;
    if (v509) {
        callback = options;
        options = {};
    }
    const v510 = options.phantomPath;
    if (v510) {
        const v511 = phantomPathDeprecatedFn();
        v511;
        const v512 = options.phantomPath;
        options.path = v512;
    }
    const v513 = options.path;
    const v514 = !v513;
    if (v514) {
        options.path = 'phantomjs';
    }
    const v515 = options.parameters;
    const v516 = typeof v515;
    const v517 = v516 === 'undefined';
    if (v517) {
        const v518 = {};
        options.parameters = v518;
    }
    const spawnPhantom = function (callback) {
        var args = [];
        const v519 = options.parameters;
        const v520 = Array.isArray(v519);
        if (v520) {
            args = options.parameters;
        } else {
            const v521 = options.parameters;
            const v522 = Object.keys(v521);
            const v529 = function (parm) {
                const v523 = '--' + parm;
                const v524 = v523 + '=';
                const v525 = options.parameters;
                const v526 = v525[parm];
                const v527 = v524 + v526;
                const v528 = args.push(v527);
                v528;
            };
            const v530 = v522.forEach(v529);
            v530;
        }
        const v531 = path.join(__dirname, 'bridge.js');
        const v532 = [v531];
        args = args.concat(v532);
        const v533 = options.path;
        var phantom = spawn(v533, args);
        const v535 = function (err) {
            const v534 = callback(err);
            v534;
        };
        const v536 = phantom.once('error', v535);
        v536;
        const v537 = phantom.stderr;
        const v544 = function (data) {
            const v538 = options.ignoreErrorPattern;
            const v539 = options.ignoreErrorPattern;
            const v540 = v539.exec(data);
            const v541 = v538 && v540;
            if (v541) {
                return;
            }
            const v542 = '' + data;
            const v543 = logger.error(v542);
            v543;
        };
        const v545 = v537.on('data', v544);
        v545;
        var immediateExit = function (exitCode) {
            const v546 = 'Phantom immediately exited with: ' + exitCode;
            const v547 = new HeadlessError(v546);
            const v548 = callback(v547);
            return v548;
        };
        const v549 = phantom.once('exit', immediateExit);
        v549;
        const v550 = phantom.stdout;
        const v603 = function (data) {
            const v551 = phantom.stdout;
            const v554 = function (data) {
                const v552 = '' + data;
                const v553 = logger.debug(v552);
                v553;
            };
            const v555 = v551.on('data', v554);
            v555;
            const v556 = data.toString();
            var matches = v556.match(/Ready \[(\d+)\] \[(.+?)\]/);
            const v557 = !matches;
            if (v557) {
                const v558 = phantom.kill();
                v558;
                const v559 = 'Unexpected output from PhantomJS: ' + data;
                const v560 = new HeadlessError(v559);
                const v561 = callback(v560);
                v561;
                return;
            }
            const v562 = phantom.removeListener('exit', immediateExit);
            v562;
            let phantom_port;
            const v563 = matches[2];
            const v564 = v563.indexOf(':');
            const v565 = -1;
            const v566 = v564 === v565;
            const v567 = matches[2];
            const v568 = matches[2];
            const v569 = v568.split(':');
            const v570 = v569[1];
            if (v566) {
                phantom_port = v567;
            } else {
                phantom_port = v570;
            }
            phantom_port = parseInt(phantom_port, 0);
            const v571 = phantom_port !== 0;
            if (v571) {
                const v572 = callback(null, phantom, phantom_port);
                v572;
                return;
            }
            const v573 = matches[1];
            var phantom_pid = parseInt(v573, 0);
            const v574 = require('os');
            var platform = v574.platform();
            var cmd = null;
            switch (platform) {
            case 'linux':
                cmd = 'ss -nlp | grep "[,=]%d," || netstat -nlp | grep "[[:space:]]%d/"';
                break;
            case 'darwin':
                cmd = 'lsof -np %d | grep LISTEN';
                break;
            case 'win32':
                cmd = 'netstat -ano | findstr /R "\\<%d\\>"';
                break;
            case 'cygwin':
                cmd = 'netstat -ano | grep %d';
                break;
            case 'freebsd':
                cmd = 'sockstat | grep %d';
                break;
            default:
                const v575 = phantom.kill();
                v575;
                const v576 = new HeadlessError('Your OS is not supported yet. Tell us how to get the listening port based on PID');
                const v577 = callback(v576);
                v577;
                return;
            }
            const v578 = process.pid;
            var my_pid_command = cmd.replace(/%d/g, v578);
            const v601 = function (err, stdout) {
                const v579 = err !== null;
                if (v579) {
                    stdout = '';
                }
                var re = /(?:127\.\d{1,3}\.\d{1,3}\.\d{1,3}|localhost):(\d+)/ig;
                var match;
                var ports = [];
                let v580 = (match = re.exec(stdout)) !== null;
                while (v580) {
                    const v581 = match[1];
                    const v582 = ports.push(v581);
                    v582;
                    v580 = (match = re.exec(stdout)) !== null;
                }
                var phantom_pid_command = cmd.replace(/%d/g, phantom_pid);
                const v599 = function (err, stdout) {
                    const v583 = err !== null;
                    if (v583) {
                        const v584 = phantom.kill();
                        v584;
                        const v585 = 'Error executing command to extract phantom ports: ' + err;
                        const v586 = new HeadlessError(v585);
                        const v587 = callback(v586);
                        v587;
                        return;
                    }
                    var port;
                    let v588 = (match = re.exec(stdout)) !== null;
                    while (v588) {
                        const v589 = match[1];
                        const v590 = ports.indexOf(v589);
                        const v591 = -1;
                        const v592 = v590 === v591;
                        if (v592) {
                            port = match[1];
                        }
                        v588 = (match = re.exec(stdout)) !== null;
                    }
                    const v593 = !port;
                    if (v593) {
                        const v594 = phantom.kill();
                        v594;
                        const v595 = 'Error extracting port from: ' + stdout;
                        const v596 = new HeadlessError(v595);
                        const v597 = callback(v596);
                        v597;
                        return;
                    }
                    const v598 = callback(null, phantom, port);
                    v598;
                };
                const v600 = exec(phantom_pid_command, v599);
                v600;
            };
            const v602 = exec(my_pid_command, v601);
            v602;
        };
        const v604 = v550.once('data', v603);
        v604;
    };
    const v820 = function (err, phantom, port) {
        if (err) {
            const v605 = callback(err);
            v605;
            return;
        }
        var pages = {};
        var setup_new_page = function (id) {
            var methods = [
                'addCookie',
                'childFramesCount',
                'childFramesName',
                'clearCookies',
                'close',
                'currentFrameName',
                'deleteCookie',
                'evaluateJavaScript',
                'evaluateAsync',
                'getPage',
                'go',
                'goBack',
                'goForward',
                'includeJs',
                'injectJs',
                'open',
                'openUrl',
                'release',
                'reload',
                'render',
                'renderBase64',
                'sendEvent',
                'setContent',
                'stop',
                'switchToFocusedFrame',
                'switchToFrame',
                'switchToFrame',
                'switchToChildFrame',
                'switchToChildFrame',
                'switchToMainFrame',
                'switchToParentFrame',
                'uploadFile',
                'clearMemoryCache'
            ];
            const v611 = function (name, fn, cb) {
                const v606 = fn.toString();
                const v607 = [
                    id,
                    'setFunction',
                    name,
                    v606
                ];
                const v608 = callbackOrDummy(cb, poll_func);
                const v609 = [
                    v607,
                    v608
                ];
                const v610 = request_queue.push(v609);
                v610;
            };
            const v616 = function (name, cb) {
                const v612 = [
                    id,
                    'getProperty',
                    name
                ];
                const v613 = callbackOrDummy(cb, poll_func);
                const v614 = [
                    v612,
                    v613
                ];
                const v615 = request_queue.push(v614);
                v615;
            };
            const v655 = function (name, val, cb) {
                const v617 = name === 'paperSize.header.contents';
                const v618 = v617 && val;
                if (v618) {
                    val = String(val);
                } else {
                    const v619 = name === 'paperSize.header';
                    const v620 = val.contents;
                    const v621 = v619 && v620;
                    if (v621) {
                        val = clone(val);
                        const v622 = val.contents;
                        const v623 = String(v622);
                        val.contents = v623;
                    } else {
                        const v624 = name === 'paperSize';
                        const v625 = val.header;
                        const v626 = v624 && v625;
                        const v627 = val.header;
                        const v628 = v627.contents;
                        const v629 = v626 && v628;
                        if (v629) {
                            val = clone(val);
                            const v631 = val.header;
                            const v632 = v631.contents;
                            const v633 = String(v632);
                            v630.contents = v633;
                        }
                    }
                }
                const v634 = name === 'paperSize.footer.contents';
                const v635 = v634 && val;
                if (v635) {
                    val = String(val);
                } else {
                    const v636 = name === 'paperSize.footer';
                    const v637 = val.contents;
                    const v638 = v636 && v637;
                    if (v638) {
                        val = clone(val);
                        const v639 = val.contents;
                        const v640 = String(v639);
                        val.contents = v640;
                    } else {
                        const v641 = name === 'paperSize';
                        const v642 = val.footer;
                        const v643 = v641 && v642;
                        const v644 = val.footer;
                        const v645 = v644.contents;
                        const v646 = v643 && v645;
                        if (v646) {
                            val = clone(val);
                            const v648 = val.footer;
                            const v649 = v648.contents;
                            const v650 = String(v649);
                            v647.contents = v650;
                        }
                    }
                }
                const v651 = [
                    id,
                    'setProperty',
                    name,
                    val
                ];
                const v652 = callbackOrDummy(cb, poll_func);
                const v653 = [
                    v651,
                    v652
                ];
                const v654 = request_queue.push(v653);
                v654;
            };
            const v679 = function (fn, cb) {
                var extra_args = [];
                const v656 = arguments.length;
                const v657 = v656 > 2;
                if (v657) {
                    const v658 = Object.prototype;
                    const v659 = v658.toString;
                    const v660 = arguments.length;
                    const v661 = v660 - 1;
                    const v662 = arguments[v661];
                    const v663 = v659.call(v662);
                    const v664 = v663 === '[object Function]';
                    if (v664) {
                        const v665 = Array.prototype;
                        const v666 = v665.slice;
                        const v667 = -1;
                        extra_args = v666.call(arguments, 1, v667);
                        const v668 = arguments.length;
                        const v669 = v668 - 1;
                        cb = arguments[v669];
                    } else {
                        const v670 = pageEvaluateDeprecatedFn();
                        v670;
                        const v671 = Array.prototype;
                        const v672 = v671.slice;
                        extra_args = v672.call(arguments, 2);
                    }
                }
                const v673 = fn.toString();
                const v674 = [
                    id,
                    'evaluate',
                    v673
                ];
                const v675 = v674.concat(extra_args);
                const v676 = callbackOrDummy(cb, poll_func);
                const v677 = [
                    v675,
                    v676
                ];
                const v678 = request_queue.push(v677);
                v678;
            };
            const v701 = function (selector, timeout, cb) {
                const v680 = Object.prototype;
                const v681 = v680.toString;
                const v682 = v681.call(timeout);
                const v683 = v682 === '[object Function]';
                const v684 = cb && v683;
                if (v684) {
                    const v685 = pageWaitForSelectorDeprecatedFn();
                    v685;
                    var tmp = cb;
                    cb = timeout;
                    timeout = tmp;
                }
                const v686 = !cb;
                if (v686) {
                    cb = timeout;
                    timeout = 10000;
                }
                var startTime = Date.now();
                var timeoutInterval = 150;
                var testForSelector = function () {
                    const v687 = Date.now();
                    var elapsedTime = v687 - startTime;
                    const v688 = elapsedTime > timeout;
                    if (v688) {
                        const v689 = 'Timeout waiting for selector: ' + selector;
                        const v690 = new HeadlessError(v689);
                        const v691 = cb(v690);
                        v691;
                        return;
                    }
                    const v694 = function (selector) {
                        const v692 = document.querySelectorAll(selector);
                        const v693 = v692.length;
                        return v693;
                    };
                    const v698 = function (err, result) {
                        const v695 = result > 0;
                        if (v695) {
                            const v696 = cb();
                            v696;
                        } else {
                            const v697 = setTimeout(testForSelector, timeoutInterval);
                            v697;
                        }
                    };
                    const v699 = page.evaluate(v694, selector, v698);
                    v699;
                };
                const v700 = setTimeout(testForSelector, timeoutInterval);
                v700;
            };
            var page = {};
            page.setFn = v611;
            page.get = v616;
            page.set = v655;
            page.evaluate = v679;
            page.waitForSelector = v701;
            const v717 = function (method) {
                const v716 = function () {
                    const v702 = Array.prototype;
                    const v703 = v702.slice;
                    var all_args = v703.call(arguments);
                    var callback = null;
                    const v704 = all_args.length;
                    const v705 = v704 > 0;
                    const v706 = all_args.length;
                    const v707 = v706 - 1;
                    const v708 = all_args[v707];
                    const v709 = typeof v708;
                    const v710 = v709 === 'function';
                    const v711 = v705 && v710;
                    if (v711) {
                        callback = all_args.pop();
                    }
                    var req_params = [
                        id,
                        method
                    ];
                    const v712 = req_params.concat(all_args);
                    const v713 = callbackOrDummy(callback, poll_func);
                    const v714 = [
                        v712,
                        v713
                    ];
                    const v715 = request_queue.push(v714);
                    v715;
                };
                page[method] = v716;
            };
            const v718 = methods.forEach(v717);
            v718;
            pages[id] = page;
            return page;
        };
        var poll_func = setup_long_poll(phantom, port, pages, setup_new_page);
        const v769 = function (paramarr, next) {
            var params = paramarr[0];
            var callback = paramarr[1];
            var page = params[0];
            var method = params[1];
            var args = params.slice(2);
            var http_opts = {};
            http_opts.hostname = 'localhost';
            http_opts.port = port;
            http_opts.path = '/';
            http_opts.method = 'POST';
            phantom.POSTING = true;
            const v748 = function (res) {
                let err;
                const v719 = res.statusCode;
                const v720 = v719 === 500;
                if (v720) {
                    err = true;
                } else {
                    err = false;
                }
                var data = '';
                const v721 = res.setEncoding('utf8');
                v721;
                const v722 = function (chunk) {
                    data += chunk;
                };
                const v723 = res.on('data', v722);
                v723;
                const v746 = function () {
                    phantom.POSTING = false;
                    const v724 = !data;
                    if (v724) {
                        const v725 = method === 'exit';
                        if (v725) {
                            const v726 = next();
                            v726;
                            const v727 = callback();
                            v727;
                            return;
                        }
                        const v728 = next();
                        v728;
                        const v729 = 'No response body for page.' + method;
                        const v730 = v729 + '()';
                        const v731 = new HeadlessError(v730);
                        const v732 = callback(v731);
                        v732;
                        return;
                    }
                    var results;
                    try {
                        const v733 = JSON.parse(data);
                        results = v733.data;
                    } catch (error) {
                        const v734 = method === 'exit';
                        if (v734) {
                            const v735 = next();
                            v735;
                            const v736 = callback();
                            v736;
                            return;
                        }
                        const v737 = next();
                        v737;
                        const v738 = callback(error);
                        v738;
                        return;
                    }
                    if (err) {
                        const v739 = next();
                        v739;
                        const v740 = callback(results);
                        v740;
                        return;
                    }
                    const v741 = method === 'createPage';
                    if (v741) {
                        var id = results.page_id;
                        var page = setup_new_page(id);
                        const v742 = next();
                        v742;
                        const v743 = callback(null, page);
                        v743;
                        return;
                    }
                    const v744 = next();
                    v744;
                    const v745 = callback(null, results);
                    v745;
                };
                const v747 = res.on('end', v746);
                v747;
            };
            var req = http.request(http_opts, v748);
            const v761 = function (err) {
                const v749 = phantom.killed;
                if (v749) {
                    const v750 = next();
                    v750;
                    const v751 = callback();
                    v751;
                    return;
                }
                const v752 = 'Request() error evaluating ' + method;
                const v753 = v752 + '() call: ';
                const v754 = v753 + err;
                const v755 = logger.warn(v754);
                v755;
                const v756 = 'Request() error evaluating ' + method;
                const v757 = v756 + '() call: ';
                const v758 = v757 + err;
                const v759 = new HeadlessError(v758);
                const v760 = callback(v759);
                v760;
            };
            const v762 = req.on('error', v761);
            v762;
            const v763 = req.setHeader('Content-Type', 'application/json');
            v763;
            const v764 = {
                page: page,
                method: method,
                args: args
            };
            var json = JSON.stringify(v764);
            const v765 = Buffer.byteLength(json);
            const v766 = req.setHeader('Content-Length', v765);
            v766;
            const v767 = req.write(json);
            v767;
            const v768 = req.end();
            v768;
        };
        var request_queue = queue(v769);
        const v774 = function (ip, port, proxyType, user, password, callback) {
            const v770 = [
                0,
                'setProxy',
                ip,
                port,
                proxyType,
                user,
                password
            ];
            const v771 = callbackOrDummy(callback, poll_func);
            const v772 = [
                v770,
                v771
            ];
            const v773 = request_queue.push(v772);
            v773;
        };
        const v779 = function (callback) {
            const v775 = [
                0,
                'createPage'
            ];
            const v776 = callbackOrDummy(callback, poll_func);
            const v777 = [
                v775,
                v776
            ];
            const v778 = request_queue.push(v777);
            v778;
        };
        const v784 = function (filename, callback) {
            const v780 = [
                0,
                'injectJs',
                filename
            ];
            const v781 = callbackOrDummy(callback, poll_func);
            const v782 = [
                v780,
                v781
            ];
            const v783 = request_queue.push(v782);
            v783;
        };
        const v789 = function (cookie, callback) {
            const v785 = [
                0,
                'addCookie',
                cookie
            ];
            const v786 = callbackOrDummy(callback, poll_func);
            const v787 = [
                v785,
                v786
            ];
            const v788 = request_queue.push(v787);
            v788;
        };
        const v794 = function (callback) {
            const v790 = [
                0,
                'clearCookies'
            ];
            const v791 = callbackOrDummy(callback, poll_func);
            const v792 = [
                v790,
                v791
            ];
            const v793 = request_queue.push(v792);
            v793;
        };
        const v799 = function (cookie, callback) {
            const v795 = [
                0,
                'deleteCookie',
                cookie
            ];
            const v796 = callbackOrDummy(callback, poll_func);
            const v797 = [
                v795,
                v796
            ];
            const v798 = request_queue.push(v797);
            v798;
        };
        const v804 = function (property, value, callback) {
            const v800 = [
                0,
                'setProperty',
                property,
                value
            ];
            const v801 = callbackOrDummy(callback, poll_func);
            const v802 = [
                v800,
                v801
            ];
            const v803 = request_queue.push(v802);
            v803;
        };
        const v809 = function (property, callback) {
            const v805 = [
                0,
                'getProperty',
                property
            ];
            const v806 = callbackOrDummy(callback, poll_func);
            const v807 = [
                v805,
                v806
            ];
            const v808 = request_queue.push(v807);
            v808;
        };
        const v815 = function (callback) {
            const v810 = phantom.kill('SIGTERM');
            v810;
            const v811 = [
                0,
                'exit',
                0
            ];
            const v812 = callbackOrDummy(callback);
            const v813 = [
                v811,
                v812
            ];
            const v814 = request_queue.push(v813);
            v814;
        };
        const v818 = function () {
            const v816 = phantom.on;
            const v817 = v816.apply(phantom, arguments);
            v817;
        };
        var proxy = {};
        proxy.process = phantom;
        proxy.setProxy = v774;
        proxy.createPage = v779;
        proxy.injectJs = v784;
        proxy.addCookie = v789;
        proxy.clearCookies = v794;
        proxy.deleteCookie = v799;
        proxy.set = v804;
        proxy.get = v809;
        proxy.exit = v815;
        proxy.on = v818;
        const v819 = callback(null, proxy);
        v819;
    };
    const v821 = spawnPhantom(v820);
    v821;
};
exports.create = v822;
const setup_long_poll = function (phantom, port, pages, setup_new_page) {
    var http_opts = {};
    http_opts.hostname = 'localhost';
    http_opts.port = port;
    http_opts.path = '/';
    http_opts.method = 'GET';
    var dead = false;
    const v823 = function () {
        dead = true;
    };
    const v824 = phantom.once('exit', v823);
    v824;
    var poll_func = function (cb) {
        if (dead) {
            const v825 = new HeadlessError('Phantom Process died');
            const v826 = cb(v825);
            v826;
            return;
        }
        const v827 = phantom.POSTING;
        if (v827) {
            const v828 = cb();
            v828;
            return;
        }
        const v889 = function (res) {
            const v829 = res.setEncoding('utf8');
            v829;
            var data = '';
            const v830 = function (chunk) {
                data += chunk;
            };
            const v831 = res.on('data', v830);
            v831;
            const v887 = function () {
                var results;
                if (dead) {
                    const v832 = new HeadlessError('Phantom Process died');
                    const v833 = cb(v832);
                    v833;
                    return;
                }
                try {
                    const v834 = JSON.parse(data);
                    results = v834.data;
                } catch (err) {
                    const v835 = 'Error parsing JSON from phantom: ' + err;
                    const v836 = logger.warn(v835);
                    v836;
                    const v837 = 'Data from phantom was: ' + data;
                    const v838 = logger.warn(v837);
                    v838;
                    const v839 = 'Error parsing JSON from phantom: ' + err;
                    const v840 = v839 + '\nData from phantom was: ';
                    const v841 = v840 + data;
                    const v842 = new HeadlessError(v841);
                    const v843 = cb(v842);
                    v843;
                    return;
                }
                const v884 = function (r) {
                    var new_page;
                    var callbackFunc;
                    var cb;
                    const v844 = r.page_id;
                    if (v844) {
                        const v845 = r.page_id;
                        const v846 = pages[v845];
                        const v847 = r.callback;
                        const v848 = v847 === 'onPageCreated';
                        const v849 = v846 && v848;
                        if (v849) {
                            const v850 = r.args;
                            const v851 = v850[0];
                            new_page = setup_new_page(v851);
                            const v852 = r.page_id;
                            const v853 = pages[v852];
                            const v854 = v853.onPageCreated;
                            if (v854) {
                                const v855 = r.page_id;
                                const v856 = pages[v855];
                                const v857 = v856.onPageCreated(new_page);
                                v857;
                            }
                        } else {
                            const v858 = r.page_id;
                            const v859 = pages[v858];
                            const v860 = r.page_id;
                            const v861 = pages[v860];
                            const v862 = r.callback;
                            const v863 = v861[v862];
                            const v864 = v859 && v863;
                            if (v864) {
                                const v865 = r.page_id;
                                const v866 = pages[v865];
                                const v867 = r.callback;
                                callbackFunc = v866[v867];
                                const v868 = callbackFunc.length;
                                const v869 = v868 > 1;
                                if (v869) {
                                    const v870 = r.page_id;
                                    const v871 = pages[v870];
                                    const v872 = r.args;
                                    const v873 = wrapArray(v872);
                                    const v874 = callbackFunc.apply(v871, v873);
                                    v874;
                                } else {
                                    const v875 = r.page_id;
                                    const v876 = pages[v875];
                                    const v877 = r.args;
                                    const v878 = unwrapArray(v877);
                                    const v879 = callbackFunc.call(v876, v878);
                                    v879;
                                }
                            }
                        }
                    } else {
                        const v880 = r.callback;
                        const v881 = phantom[v880];
                        cb = callbackOrDummy(v881);
                        const v882 = r.args;
                        const v883 = cb.apply(phantom, v882);
                        v883;
                    }
                };
                const v885 = results.forEach(v884);
                v885;
                const v886 = cb();
                v886;
            };
            const v888 = res.on('end', v887);
            v888;
        };
        var req = http.get(http_opts, v889);
        const v902 = function (err) {
            const v890 = phantom.killed;
            const v891 = dead || v890;
            if (v891) {
                return;
            }
            const v892 = err.code;
            const v893 = v892 === 'ECONNRESET';
            const v894 = err.code;
            const v895 = v894 === 'ECONNREFUSED';
            const v896 = v893 || v895;
            if (v896) {
                try {
                    const v897 = phantom.kill();
                    v897;
                } catch (e) {
                }
                dead = true;
                const v898 = new HeadlessError('Phantom Process died');
                const v899 = cb(v898);
                v899;
                return;
            }
            const v900 = 'Poll Request error: ' + err;
            const v901 = logger.warn(v900);
            v901;
        };
        const v903 = req.on('error', v902);
        v903;
    };
    var repeater = function () {
        const v904 = phantom.killed;
        const v905 = dead || v904;
        if (v905) {
            return;
        }
        const v907 = function () {
            const v906 = poll_func(repeater);
            v906;
        };
        const v908 = setTimeout(v907, POLL_INTERVAL);
        v908;
    };
    const v909 = repeater();
    v909;
    return poll_func;
};
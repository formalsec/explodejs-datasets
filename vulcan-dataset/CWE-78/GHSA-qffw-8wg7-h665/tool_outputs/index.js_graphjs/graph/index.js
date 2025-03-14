'use strict';
const v290 = this.__awaiter;
const v291 = this && v290;
const v317 = function (thisArg, _arguments, P, generator) {
    const adopt = function (value) {
        const v292 = value instanceof P;
        const v294 = function (resolve) {
            const v293 = resolve(value);
            v293;
        };
        const v295 = new P(v294);
        let v296;
        if (v292) {
            v296 = value;
        } else {
            v296 = v295;
        }
        return v296;
    };
    const v297 = P || (P = Promise);
    const v315 = function (resolve, reject) {
        const fulfilled = function (value) {
            try {
                const v298 = generator.next(value);
                const v299 = step(v298);
                v299;
            } catch (e) {
                const v300 = reject(e);
                v300;
            }
        };
        const rejected = function (value) {
            try {
                const v301 = generator['throw'](value);
                const v302 = step(v301);
                v302;
            } catch (e) {
                const v303 = reject(e);
                v303;
            }
        };
        const step = function (result) {
            const v304 = result.done;
            const v305 = result.value;
            const v306 = resolve(v305);
            const v307 = result.value;
            const v308 = adopt(v307);
            const v309 = v308.then(fulfilled, rejected);
            let v310;
            if (v304) {
                v310 = v306;
            } else {
                v310 = v309;
            }
            v310;
        };
        const v311 = [];
        const v312 = _arguments || v311;
        const v313 = (generator = generator.apply(thisArg, v312)).next();
        const v314 = step(v313);
        v314;
    };
    const v316 = new v297(v315);
    return v316;
};
var __awaiter = v291 || v317;
const v318 = { value: true };
const v319 = Object.defineProperty(exports, '__esModule', v318);
v319;
const v320 = void 0;
exports.Git = v320;
const events_1 = require('events');
const child_process_1 = require('child_process');
const Git = function Git(options) {
    const v322 = super();
    v322;
    this.dir = '.';
    this.options = options;
    const v323 = this.options;
    const v324 = v323.dir;
    const v325 = this.setDir(v324);
    v325;
};
const gitExec = function gitExec(cmd) {
    const v326 = void 0;
    const v327 = void 0;
    const v361 = function* () {
        const v359 = (resolve, reject) => {
            const splitRegex = /'[^']+'|[^\s]+/g;
            const v328 = cmd.match(splitRegex);
            const v330 = e => {
                const v329 = e.replace(/'(.+)'/, '\'$1\'');
                return v329;
            };
            const commandArgs = v328.map(v330);
            const v331 = this.dir;
            const v332 = { cwd: v331 };
            const child = child_process_1.spawn('git', commandArgs, v332);
            let out = '';
            const v333 = child.stdout;
            const v336 = data => {
                out += data.toString();
                const v334 = data.toString();
                const v335 = this.emit('out', v334);
                v335;
            };
            const v337 = v333.on('data', v336);
            v337;
            const v338 = child.stdout;
            const v341 = data => {
                out += data.toString();
                const v339 = data.toString();
                const v340 = this.emit('out', v339);
                v340;
            };
            const v342 = v338.on('error', v341);
            v342;
            const v343 = child.stderr;
            const v346 = data => {
                out += data.toString();
                const v344 = data.toString();
                const v345 = this.emit('out', v344);
                v345;
            };
            const v347 = v343.on('data', v346);
            v347;
            const v348 = child.stderr;
            const v351 = data => {
                out += data.toString();
                const v349 = data.toString();
                const v350 = this.emit('out', v349);
                v350;
            };
            const v352 = v348.on('error', v351);
            v352;
            const v357 = (code, signal) => {
                const v353 = code === 0;
                if (v353) {
                    const v354 = resolve(out);
                    v354;
                } else {
                    const v355 = new Error(out);
                    const v356 = reject(v355);
                    v356;
                }
            };
            const v358 = child.on('close', v357);
            v358;
        };
        const v360 = new Promise(v359);
        return v360;
    };
    const v362 = __awaiter(this, v326, v327, v361);
    return v362;
};
Git.gitExec = gitExec;
const getDiffFileList = function getDiffFileList(diffOptions = '') {
    const v377 = (resolve, reject) => {
        const v363 = void 0;
        const v364 = void 0;
        const v375 = function* () {
            try {
                const v365 = `diff ${ diffOptions }`;
                const v366 = this.gitExec(v365);
                const conflicts = yield v366;
                const v367 = conflicts.split('\n');
                const v371 = item => {
                    const v368 = item.trim();
                    const v369 = v368.length;
                    const v370 = v369 > 0;
                    return v370;
                };
                const v372 = v367.filter(v371);
                const v373 = resolve(v372);
                v373;
            } catch (err) {
                const v374 = reject(err);
                v374;
            }
        };
        const v376 = __awaiter(this, v363, v364, v375);
        return v376;
    };
    const v378 = new Promise(v377);
    return v378;
};
Git.getDiffFileList = getDiffFileList;
const init = function init() {
    const v379 = this.gitExec('init');
    return v379;
};
Git.init = init;
const setDir = function setDir(dir) {
    this.dir = dir;
};
Git.setDir = setDir;
const clone = function clone(repository, dest, options) {
    const v380 = { depth: Infinity };
    const opt = options || v380;
    let depthOption;
    const v381 = opt.depth;
    const v382 = v381 !== Infinity;
    const v383 = opt.depth;
    if (v382) {
        depthOption = ` --depth=${ v383 }`;
    } else {
        depthOption = '';
    }
    const v384 = `clone ${ repository } ${ dest }${ depthOption }`;
    const v385 = this.gitExec(v384);
    return v385;
};
Git.clone = clone;
const checkout = function checkout(branchName) {
    const v386 = `checkout ${ branchName }`;
    const v387 = this.gitExec(v386);
    return v387;
};
Git.checkout = checkout;
const updateSubmodules = function updateSubmodules(init = true, recursive = true) {
    let command = `submodule update`;
    if (init) {
        command += ` --init`;
    }
    if (recursive) {
        command += ` --recursive`;
    }
    const v388 = this.gitExec(command);
    return v388;
};
Git.updateSubmodules = updateSubmodules;
const commit = function commit(message, all = false) {
    const escapedMessage = message.replace(/'/g, '\\\'');
    let allOption;
    if (all) {
        allOption = 'a';
    } else {
        allOption = '';
    }
    const v389 = `commit -${ allOption }m '${ escapedMessage }'`;
    const v390 = this.gitExec(v389);
    return v390;
};
Git.commit = commit;
const pull = function pull(remote = 'origin', options) {
    const v403 = (resolve, reject) => {
        const v391 = void 0;
        const v392 = void 0;
        const v401 = function* () {
            const v393 = {};
            const opts = options || v393;
            try {
                let branch;
                const v394 = opts.branch;
                if (v394) {
                    branch = opts.branch;
                } else {
                    const v395 = this.getBranchName();
                    branch = yield v395;
                }
                let rebaseOpt;
                const v396 = opts.rebase;
                if (v396) {
                    rebaseOpt = ' -r';
                } else {
                    rebaseOpt = '';
                }
                const v397 = `pull ${ remote } ${ branch }${ rebaseOpt }`;
                const v398 = this.gitExec(v397);
                yield v398;
                const v399 = resolve();
                v399;
            } catch (err) {
                const v400 = reject(err);
                v400;
            }
        };
        const v402 = __awaiter(this, v391, v392, v401);
        return v402;
    };
    const v404 = new Promise(v403);
    return v404;
};
Git.pull = pull;
const push = function push(remote) {
    const v415 = (resolve, reject) => {
        const v405 = void 0;
        const v406 = void 0;
        const v413 = function* () {
            try {
                const v407 = this.getBranchName();
                const branch = yield v407;
                const v408 = remote || 'origin';
                const v409 = `push ${ v408 } ${ branch }`;
                const v410 = this.gitExec(v409);
                yield v410;
                const v411 = resolve();
                v411;
            } catch (err) {
                const v412 = reject(err);
                v412;
            }
        };
        const v414 = __awaiter(this, v405, v406, v413);
        return v414;
    };
    const v416 = new Promise(v415);
    return v416;
};
Git.push = push;
const add = function add() {
    const v417 = `add -A`;
    const v418 = this.gitExec(v417);
    return v418;
};
Git.add = add;
const addRemote = function addRemote(name, url) {
    const v419 = `remote add ${ name } ${ url }`;
    const v420 = this.gitExec(v419);
    return v420;
};
Git.addRemote = addRemote;
const setRemote = function setRemote(name, url) {
    const v421 = `remote set-url ${ name } ${ url }`;
    const v422 = this.gitExec(v421);
    return v422;
};
Git.setRemote = setRemote;
const merge = function merge(branchName, mergeOptions) {
    const v423 = `merge ${ branchName } ${ mergeOptions }`;
    const v424 = this.gitExec(v423);
    return v424;
};
Git.merge = merge;
const fetch = function fetch() {
    const v425 = `fetch`;
    const v426 = this.gitExec(v425);
    return v426;
};
Git.fetch = fetch;
const reset = function reset() {
    const v427 = `reset --hard HEAD`;
    const v428 = this.gitExec(v427);
    return v428;
};
Git.reset = reset;
const getHash = function getHash(fileName) {
    const v438 = (resolve, reject) => {
        const v429 = void 0;
        const v430 = void 0;
        const v436 = function* () {
            try {
                const v431 = `log -n 1 --pretty="%H" -- ${ fileName }`;
                const v432 = this.gitExec(v431);
                const result = yield v432;
                const v433 = result.replace(/"/g, '');
                const v434 = resolve(v433);
                v434;
            } catch (err) {
                const v435 = reject(err);
                v435;
            }
        };
        const v437 = __awaiter(this, v429, v430, v436);
        return v437;
    };
    const v439 = new Promise(v438);
    return v439;
};
Git.getHash = getHash;
const diffMaster = function diffMaster(fileName) {
    const v440 = `diff master -- ${ fileName }`;
    const v441 = this.gitExec(v440);
    return v441;
};
Git.diffMaster = diffMaster;
const getBranchName = function getBranchName() {
    const v457 = (resolve, reject) => {
        const v442 = void 0;
        const v443 = void 0;
        const v455 = function* () {
            try {
                const v444 = `branch`;
                const v445 = this.gitExec(v444);
                const result = yield v445;
                const v446 = result.split('\n');
                const v449 = item => {
                    const v447 = item.indexOf('*');
                    const v448 = v447 === 0;
                    return v448;
                };
                const v450 = v446.find(v449);
                const v451 = v450.replace(/\*/g, '');
                const v452 = v451.trim();
                const v453 = resolve(v452);
                v453;
            } catch (err) {
                const v454 = reject(err);
                v454;
            }
        };
        const v456 = __awaiter(this, v442, v443, v455);
        return v456;
    };
    const v458 = new Promise(v457);
    return v458;
};
Git.getBranchName = getBranchName;
const createBranch = function createBranch(branchName) {
    const v459 = `checkout -b ${ branchName }`;
    const v460 = this.gitExec(v459);
    return v460;
};
Git.createBranch = createBranch;
const deleteBranch = function deleteBranch(branchName) {
    const v461 = `branch -D ${ branchName }`;
    const v462 = this.gitExec(v461);
    return v462;
};
Git.deleteBranch = deleteBranch;
const getDiffByRevisionFileList = function getDiffByRevisionFileList(revision) {
    const v463 = `${ revision } --name-only`;
    const v464 = this.getDiffFileList(v463);
    return v464;
};
Git.getDiffByRevisionFileList = getDiffByRevisionFileList;
const getConflictList = function getConflictList() {
    const v465 = `--name-only --diff-filter=U`;
    const v466 = this.getDiffFileList(v465);
    return v466;
};
Git.getConflictList = getConflictList;
const getUncommittedList = function getUncommittedList() {
    const v467 = `--name-only`;
    const v468 = this.getDiffFileList(v467);
    return v468;
};
Git.getUncommittedList = getUncommittedList;
const getLastChanges = function getLastChanges() {
    const v483 = (resolve, reject) => {
        const v469 = void 0;
        const v470 = void 0;
        const v481 = function* () {
            try {
                const v471 = `log -n 2 --pretty="%H"`;
                const v472 = this.gitExec(v471);
                const hash = yield v472;
                const v473 = hash.split('\n');
                let lastOtherHash = v473[1];
                const v474 = !lastOtherHash;
                if (v474) {
                    const v475 = hash.length;
                    const v476 = v475 / 2;
                    lastOtherHash = hash.slice(v476);
                }
                lastOtherHash = lastOtherHash.replace(/"/g, '');
                const v477 = `difftool ${ lastOtherHash } --name-status`;
                const v478 = this.gitExec(v477);
                const lastChanges = yield v478;
                const v479 = resolve(lastChanges);
                v479;
            } catch (err) {
                const v480 = reject(err);
                v480;
            }
        };
        const v482 = __awaiter(this, v469, v470, v481);
        return v482;
    };
    const v484 = new Promise(v483);
    return v484;
};
Git.getLastChanges = getLastChanges;
const removeLocalBranch = function removeLocalBranch(branchName) {
    const v485 = `branch -D ${ branchName }`;
    const v486 = this.gitExec(v485);
    return v486;
};
Git.removeLocalBranch = removeLocalBranch;
const removeRemoteBranch = function removeRemoteBranch(branchName) {
    const v487 = `push origin --delete ${ branchName }`;
    const v488 = this.gitExec(v487);
    return v488;
};
Git.removeRemoteBranch = removeRemoteBranch;
const getLocalBranchList = function getLocalBranchList() {
    const v505 = (resolve, reject) => {
        const v489 = void 0;
        const v490 = void 0;
        const v503 = function* () {
            try {
                const v491 = `branch`;
                const v492 = this.gitExec(v491);
                const result = yield v492;
                const v493 = result.split('\n');
                const v496 = item => {
                    const v494 = item.replace(/^\s*\*/, '');
                    const v495 = v494.trim();
                    return v495;
                };
                const v497 = v493.map(v496);
                const v500 = item => {
                    const v498 = item.length;
                    const v499 = v498 > 0;
                    return v499;
                };
                const branches = v497.filter(v500);
                const v501 = resolve(branches);
                v501;
            } catch (err) {
                const v502 = reject(err);
                v502;
            }
        };
        const v504 = __awaiter(this, v489, v490, v503);
        return v504;
    };
    const v506 = new Promise(v505);
    return v506;
};
Git.getLocalBranchList = getLocalBranchList;
const getRemoteBranchList = function getRemoteBranchList() {
    const v528 = (resolve, reject) => {
        const v507 = void 0;
        const v508 = void 0;
        const v526 = function* () {
            try {
                const v509 = `branch -r`;
                const v510 = this.gitExec(v509);
                const result = yield v510;
                const v511 = result.split('\n');
                const v518 = item => {
                    const v512 = item.length;
                    const v513 = v512 > 0;
                    const v514 = item.indexOf('origin/HEAD');
                    const v515 = -1;
                    const v516 = v514 === v515;
                    const v517 = v513 && v516;
                    return v517;
                };
                const v519 = v511.filter(v518);
                const v523 = item => {
                    const v520 = item.replace(/^\s*\*/, '');
                    const v521 = v520.replace('origin/', '');
                    const v522 = v521.trim();
                    return v522;
                };
                const branches = v519.map(v523);
                const v524 = resolve(branches);
                v524;
            } catch (err) {
                const v525 = reject(err);
                v525;
            }
        };
        const v527 = __awaiter(this, v507, v508, v526);
        return v527;
    };
    const v529 = new Promise(v528);
    return v529;
};
Git.getRemoteBranchList = getRemoteBranchList;
const getRemotes = function getRemotes() {
    const v541 = (resolve, reject) => {
        const v530 = void 0;
        const v531 = void 0;
        const v539 = function* () {
            try {
                const v532 = `remote`;
                const v533 = this.gitExec(v532);
                const result = yield v533;
                const v534 = result.split('\n');
                const v536 = item => {
                    const v535 = item.trim();
                    return v535;
                };
                const remoteNames = v534.map(v536);
                const v537 = resolve(remoteNames);
                v537;
            } catch (err) {
                const v538 = reject(err);
                v538;
            }
        };
        const v540 = __awaiter(this, v530, v531, v539);
        return v540;
    };
    const v542 = new Promise(v541);
    return v542;
};
Git.getRemotes = getRemotes;
const getRemoteUrl = function getRemoteUrl(name) {
    const v543 = void 0;
    const v544 = void 0;
    const v548 = function* () {
        const v545 = `remote get-url ${ name }`;
        const v546 = this.gitExec(v545);
        const result = yield v546;
        const v547 = result.trim();
        return v547;
    };
    const v549 = __awaiter(this, v543, v544, v548);
    return v549;
};
Git.getRemoteUrl = getRemoteUrl;
const getTimeOfLastCommit = function getTimeOfLastCommit(branchName) {
    const v564 = (resolve, reject) => {
        const v550 = void 0;
        const v551 = void 0;
        const v562 = function* () {
            try {
                const v552 = `show --format='%ci' ${ branchName }`;
                const v553 = this.gitExec(v552);
                const result = yield v553;
                const v554 = result.split('\n');
                const v555 = v554[0];
                const dateTimeStr = v555.split(' ');
                const v556 = dateTimeStr[0];
                const v557 = dateTimeStr[1];
                const v558 = dateTimeStr[2];
                const date = new Date(`${ v556 } ${ v557 } ${ v558 }`);
                const v559 = date.getTime();
                const v560 = resolve(v559);
                v560;
            } catch (err) {
                const v561 = reject(err);
                v561;
            }
        };
        const v563 = __awaiter(this, v550, v551, v562);
        return v563;
    };
    const v565 = new Promise(v564);
    return v565;
};
Git.getTimeOfLastCommit = getTimeOfLastCommit;
const getHashOfLastCommit = function getHashOfLastCommit(branchName) {
    const v577 = (resolve, reject) => {
        const v566 = void 0;
        const v567 = void 0;
        const v575 = function* () {
            try {
                const v568 = `log ${ branchName } --pretty="%H"`;
                const v569 = this.gitExec(v568);
                const result = yield v569;
                const v570 = result.split('\n');
                const v571 = v570[0];
                const v572 = v571.replace(/"/g, '');
                const v573 = resolve(v572);
                v573;
            } catch (err) {
                const v574 = reject(err);
                v574;
            }
        };
        const v576 = __awaiter(this, v566, v567, v575);
        return v576;
    };
    const v578 = new Promise(v577);
    return v578;
};
Git.getHashOfLastCommit = getHashOfLastCommit;
Git['is_class'] = true;
exports.Git = Git;
var childProcess = require('child_process');
module.exports = pushDir;
const pushDir = function (opts) {
    const v133 = getLastCommitInfo();
    const v180 = function (info) {
        var hash = info.hash;
        const v134 = info.branch;
        var detachedHead = v134 === '';
        let originalBranch;
        const v135 = info.branch;
        if (detachedHead) {
            originalBranch = hash;
        } else {
            originalBranch = v135;
        }
        var directory = opts.dir;
        const v136 = opts.branch;
        const v137 = v136 + '-';
        var local = v137 + hash;
        const v138 = opts.remote;
        var remote = v138 || 'origin';
        var remoteBranch = opts.branch;
        let message;
        const v139 = opts.message;
        const v140 = typeof v139;
        const v141 = v140 === 'function';
        const v142 = opts.message(hash);
        const v143 = opts.message;
        const v144 = v143 || hash;
        if (v141) {
            message = v142;
        } else {
            message = v144;
        }
        const v145 = opts['allow-unclean'];
        const v146 = opts.force;
        var allowUnclean = v145 || v146;
        const v147 = opts['overwrite-local'];
        const v148 = opts.force;
        var overwriteLocal = v147 || v148;
        let cleanup;
        const v149 = opts.cleanup;
        const v150 = v149 === undefined;
        const v151 = opts.cleanup;
        if (v150) {
            cleanup = false;
        } else {
            cleanup = v151;
        }
        var verbose = opts.verbose;
        const v152 = Promise.resolve();
        const v153 = v152.then(checkIfClean);
        const v157 = function onUnclean(reason) {
            const v154 = console.log('ignoring unclean git...');
            const v155 = Promise.reject(reason);
            let v156;
            if (allowUnclean) {
                v156 = v154;
            } else {
                v156 = v155;
            }
            return v156;
        };
        const v158 = v153.catch(v157);
        const v159 = noLocalBranchConflict.bind(null, local);
        const v160 = v158.then(v159);
        const v164 = function onBranchConflict(reason) {
            const v161 = overwriteLocalBranch(local, verbose);
            const v162 = Promise.reject(reason);
            let v163;
            if (overwriteLocal) {
                v163 = v161;
            } else {
                v163 = v162;
            }
            return v163;
        };
        const v165 = v160.catch(v164);
        const v166 = checkoutOrphanBranch.bind(null, directory, local, verbose);
        const v167 = v165.then(v166);
        const v168 = addDir.bind(null, directory, verbose);
        const v169 = v167.then(v168);
        const v170 = commitDir.bind(null, directory, message, verbose);
        const v171 = v169.then(v170);
        const v172 = pushDirToRemote.bind(null, remote, remoteBranch, verbose);
        const v173 = v171.then(v172);
        const v174 = resetBranch.bind(null, originalBranch, detachedHead, verbose);
        const v175 = v173.then(v174);
        const v176 = deleteLocalBranch.bind(null, local, verbose);
        let v177;
        if (cleanup) {
            v177 = v176;
        } else {
            v177 = null;
        }
        const v178 = v175.then(v177);
        const v179 = v178.catch(handleError);
        v179;
    };
    const v181 = v133.then(v180, handleError);
    v181;
};
const overwriteLocalBranch = function (local, verbose) {
    const v182 = console.log('will overwite local branch...');
    v182;
    const v183 = deleteLocalBranch(local, verbose);
    return v183;
};
const checkIfClean = function () {
    const v184 = expectOutputEmpty('git status --porcelain', 'git not clean');
    return v184;
};
const getCurrentBranch = function (verbose) {
    const v185 = Promise.resolve();
    const v186 = [
        'symbolic-ref',
        'HEAD',
        '-q'
    ];
    const v187 = execCmd.bind(null, 'git', v186, 'problem getting current branch', verbose);
    const v188 = v185.then(v187);
    const v189 = function () {
        return '';
    };
    const v190 = v188.catch(v189);
    const v193 = function (result) {
        const v191 = new RegExp('^refs/heads/');
        const v192 = result.replace(v191, '');
        return v192;
    };
    const v194 = v190.then(v193);
    return v194;
};
const resetBranch = function (branch, detach, verbose) {
    let detached;
    if (detach) {
        detached = '--detach';
    } else {
        detached = false;
    }
    const v195 = [
        'checkout',
        '-f',
        detached,
        branch
    ];
    const v196 = v195.filter(Boolean);
    const v197 = execCmd('git', v196, 'problem resetting branch', verbose);
    return v197;
};
const addDir = function (directory, verbose) {
    const v198 = [
        '--work-tree',
        directory,
        'add',
        '--all'
    ];
    const v199 = execCmd('git', v198, 'problem adding directory to local branch', verbose);
    return v199;
};
const commitDir = function (directory, message, verbose) {
    const v200 = [
        '--work-tree',
        directory,
        'commit',
        '-m',
        message
    ];
    const v201 = execCmd('git', v200, 'problem committing directory to local branch', verbose);
    return v201;
};
const pushDirToRemote = function (remote, remoteBranch, verbose) {
    const v202 = 'HEAD:' + remoteBranch;
    const v203 = [
        'push',
        remote,
        v202,
        '--force'
    ];
    const v204 = execCmd('git', v203, 'problem pushing local branch to remote', verbose);
    return v204;
};
const checkoutOrphanBranch = function (directory, branch, verbose) {
    const v205 = [
        '--work-tree',
        directory,
        'checkout',
        '--orphan',
        branch
    ];
    const v206 = execCmd('git', v205, 'problem creating local orphan branch', verbose);
    return v206;
};
const deleteLocalBranch = function (branch, verbose) {
    const v207 = [
        'branch',
        '-D',
        branch
    ];
    const v208 = execCmd('git', v207, 'problem deleting local branch', verbose);
    return v208;
};
const noLocalBranchConflict = function (branch) {
    const v209 = 'git branch --list ' + branch;
    const v210 = expectOutputEmpty(v209, 'local branch with name already exists');
    return v210;
};
const getLastCommitInfo = function () {
    const v211 = getLastCommitHash();
    const v212 = getCurrentBranch();
    const v213 = [
        v211,
        v212
    ];
    const v214 = Promise.all(v213);
    const v220 = function (info) {
        const v216 = function (s) {
            const v215 = s.trim();
            return v215;
        };
        info = info.map(v216);
        const v217 = info[0];
        const v218 = info[1];
        const v219 = {};
        v219.hash = v217;
        v219.branch = v218;
        return v219;
    };
    const v221 = v214.then(v220);
    return v221;
};
const getLastCommitHash = function (verbose) {
    const v222 = [
        'rev-parse',
        '--short',
        'HEAD'
    ];
    const v223 = execCmd('git', v222, 'problem getting last commit hash', verbose);
    return v223;
};
const handleError = function (err) {
    const v224 = console.error('aborted:', err);
    v224;
    const v225 = process.exit(1);
    v225;
};
const execCmd = function (cmd, args, errMessage, verbose) {
    const v252 = function (resolve, reject) {
        const v226 = args.join(' ');
        const v227 = console.log(cmd, v226);
        let v228;
        if (verbose) {
            v228 = v227;
        } else {
            v228 = null;
        }
        v228;
        const v229 = { stdio: 'pipe' };
        const proc = childProcess.spawn(cmd, args, v229);
        const stdoutChunks = [];
        const v230 = proc.stdout;
        const v235 = function (data) {
            const v231 = stdoutChunks.push(data);
            v231;
            const v232 = process.stdout;
            const v233 = v232.write(data);
            let v234;
            if (verbose) {
                v234 = v233;
            } else {
                v234 = null;
            }
            v234;
        };
        const v236 = v230.on('data', v235);
        v236;
        const v237 = proc.stderr;
        const v241 = function (data) {
            const v238 = process.stderr;
            const v239 = v238.write(data);
            let v240;
            if (verbose) {
                v240 = v239;
            } else {
                v240 = null;
            }
            v240;
        };
        const v242 = v237.on('data', v241);
        v242;
        const v250 = function (code) {
            const v243 = console.log('\n');
            let v244;
            if (verbose) {
                v244 = v243;
            } else {
                v244 = null;
            }
            v244;
            const v245 = code !== 0;
            if (v245) {
                const v246 = reject(errMessage);
                v246;
            } else {
                const v247 = Buffer.concat(stdoutChunks);
                const v248 = v247.toString();
                const v249 = resolve(v248);
                v249;
            }
        };
        const v251 = proc.on('close', v250);
        v251;
    };
    const v253 = new Promise(v252);
    return v253;
};
const expectOutputEmpty = function (cmd, errMessage) {
    const v263 = function (resolve, reject) {
        const v261 = function (error, stdout, stderr) {
            const v254 = stdout.length;
            const v255 = error || v254;
            const v256 = stderr.length;
            const v257 = v255 || v256;
            const v258 = reject(errMessage);
            const v259 = resolve();
            let v260;
            if (v257) {
                v260 = v258;
            } else {
                v260 = v259;
            }
            v260;
        };
        const v262 = childProcess.exec(cmd, v261);
        v262;
    };
    const v264 = new Promise(v263);
    return v264;
};
module.exports = gitPullOrClone;
const crossSpawn = require('cross-spawn');
const v48 = require('debug');
const debug = v48('git-pull-or-clone');
const fs = require('fs');
const gitPullOrClone = function (url, outPath, opts, cb) {
    const v49 = typeof opts;
    const v50 = v49 === 'function';
    if (v50) {
        cb = opts;
        opts = {};
    }
    let depth;
    const v51 = opts.depth;
    const v52 = v51 == null;
    const v53 = opts.depth;
    if (v52) {
        depth = 1;
    } else {
        depth = v53;
    }
    const v54 = depth <= 0;
    if (v54) {
        const v55 = new RangeError('The "depth" option must be greater than 0');
        throw v55;
    }
    const v56 = fs.R_OK;
    const v57 = fs.W_OK;
    const v58 = v56 | v57;
    const v61 = function (err) {
        if (err) {
            const v59 = gitClone();
            v59;
        } else {
            const v60 = gitPull();
            v60;
        }
    };
    const v62 = fs.access(outPath, v58, v61);
    v62;
    const gitClone = function () {
        let flag;
        const v63 = depth < Infinity;
        const v64 = '--depth=' + depth;
        if (v63) {
            flag = v64;
        } else {
            flag = '--single-branch';
        }
        const args = [
            'clone',
            flag,
            url,
            outPath
        ];
        const v65 = args.join(' ');
        const v66 = 'git ' + v65;
        const v67 = debug(v66);
        v67;
        const v68 = {};
        const v71 = function (err) {
            if (err) {
                const v69 = ' (git clone) (' + url;
                err.message += v69 + ')';
            }
            const v70 = cb(err);
            v70;
        };
        const v72 = spawn('git', args, v68, v71);
        v72;
    };
    const gitPull = function () {
        let args;
        const v73 = depth < Infinity;
        const v74 = '--depth=' + depth;
        const v75 = [
            'pull',
            v74
        ];
        const v76 = ['pull'];
        if (v73) {
            args = v75;
        } else {
            args = v76;
        }
        const v77 = args.join(' ');
        const v78 = 'git ' + v77;
        const v79 = debug(v78);
        v79;
        const v80 = { cwd: outPath };
        const v83 = function (err) {
            if (err) {
                const v81 = ' (git pull) (' + url;
                err.message += v81 + ')';
            }
            const v82 = cb(err);
            v82;
        };
        const v84 = spawn('git', args, v80, v83);
        v84;
    };
};
const spawn = function (command, args, opts, cb) {
    const v85 = debug.enabled;
    let v86;
    if (v85) {
        v86 = 'inherit';
    } else {
        v86 = 'ignore';
    }
    opts.stdio = v86;
    const child = crossSpawn(command, args, opts);
    const v87 = child.on('error', cb);
    v87;
    const v93 = function (code) {
        const v88 = code !== 0;
        if (v88) {
            const v89 = 'Non-zero exit code: ' + code;
            const v90 = new Error(v89);
            const v91 = cb(v90);
            return v91;
        }
        const v92 = cb(null);
        v92;
    };
    const v94 = child.on('close', v93);
    v94;
    return child;
};
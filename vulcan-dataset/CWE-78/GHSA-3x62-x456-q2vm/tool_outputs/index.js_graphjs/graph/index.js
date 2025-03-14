module.exports = gitPullOrClone;
const crossSpawn = function (cmd, args, opts) {
    const v54 = require('child_process');
    const v55 = args.join(' ');
    const v56 = cmd + v55;
    const v57 = v54.exec(v56, opts);
    return v57;
};
const v58 = require('debug');
const debug = v58('git-pull-or-clone');
const v61 = (outPath, expected, cb) => {
    const v59 = cb(true);
    v59;
    const v60 = cb(false);
    v60;
    return;
};
const fs = {};
fs.access = v61;
const gitPullOrClone = function (url, outPath, opts, cb) {
    const v62 = typeof opts;
    const v63 = v62 === 'function';
    if (v63) {
        cb = opts;
        opts = {};
    }
    let depth;
    const v64 = opts.depth;
    const v65 = v64 == null;
    const v66 = opts.depth;
    if (v65) {
        depth = 1;
    } else {
        depth = v66;
    }
    const v67 = depth <= 0;
    if (v67) {
        return;
    }
    const v68 = fs.R_OK;
    const v69 = fs.W_OK;
    const v70 = v68 | v69;
    const v73 = function (err) {
        if (err) {
            const v71 = gitClone();
            v71;
        } else {
            const v72 = gitPull();
            v72;
        }
    };
    const v74 = fs.access(outPath, v70, v73);
    v74;
    const gitClone = function () {
        let flag;
        const v75 = depth < Infinity;
        const v76 = '--depth=' + depth;
        if (v75) {
            flag = v76;
        } else {
            flag = '--single-branch';
        }
        const args = [
            'clone',
            flag,
            url,
            outPath
        ];
        const v77 = args.join(' ');
        const v78 = 'git ' + v77;
        const v79 = debug(v78);
        v79;
        const v80 = {};
        const v83 = function (err) {
            if (err) {
                const v81 = ' (git clone) (' + url;
                err.message += v81 + ')';
            }
            const v82 = cb(err);
            v82;
        };
        const v84 = spawn('git', args, v80, v83);
        v84;
    };
    const gitPull = function () {
        let args;
        const v85 = depth < Infinity;
        const v86 = '--depth=' + depth;
        const v87 = [
            'pull',
            v86
        ];
        const v88 = ['pull'];
        if (v85) {
            args = v87;
        } else {
            args = v88;
        }
        const v89 = args.join(' ');
        const v90 = 'git ' + v89;
        const v91 = debug(v90);
        v91;
        const v92 = { cwd: outPath };
        const v95 = function (err) {
            if (err) {
                const v93 = ' (git pull) (' + url;
                err.message += v93 + ')';
            }
            const v94 = cb(err);
            v94;
        };
        const v96 = spawn('git', args, v92, v95);
        v96;
    };
};
const spawn = function (command, args, opts, cb) {
    const v97 = debug.enabled;
    let v98;
    if (v97) {
        v98 = 'inherit';
    } else {
        v98 = 'ignore';
    }
    opts.stdio = v98;
    const child = crossSpawn(command, args, opts);
    const v99 = child.on('error', cb);
    v99;
    const v105 = function (code) {
        const v100 = code !== 0;
        if (v100) {
            const v101 = 'Non-zero exit code: ' + code;
            const v102 = new Error(v101);
            const v103 = cb(v102);
            return v103;
        }
        const v104 = cb(null);
        v104;
    };
    const v106 = child.on('close', v105);
    v106;
    return child;
};
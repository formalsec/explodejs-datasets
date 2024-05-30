'use strict';
var childProcess = require('child_process');
var spawn = childProcess.spawn;
var exec = childProcess.exec;
const v62 = process.platform;
var isWindows = v62 === 'win32';
const v63 = process.platform;
var isDarwin = v63 === 'darwin';
module.exports = treekill;
const treekill = function (pid, signal, callback) {
    const v64 = typeof signal;
    const v65 = v64 === 'function';
    if (v65) {
        callback = signal;
        signal = null;
    }
    if (isWindows) {
        const v66 = 'taskkill /pid ' + pid;
        const v67 = v66 + ' /T /F';
        const v68 = exec(v67);
        v68;
    } else {
        var tree = {};
        tree[pid] = [];
        var pidsToProcess = {};
        pidsToProcess[pid] = 1;
        const v73 = function () {
            const v69 = killAll(tree, signal);
            v69;
            const v70 = typeof callback;
            const v71 = v70 === 'function';
            if (v71) {
                const v72 = callback();
                v72;
            }
        };
        const v74 = buildProcessTree(pid, tree, pidsToProcess, v73);
        v74;
    }
};
const killAll = function (tree, signal) {
    var killed = {};
    const v75 = Object.keys(tree);
    const v85 = function (pid) {
        const v76 = tree[pid];
        const v80 = function (pidpid) {
            const v77 = killed[pidpid];
            const v78 = !v77;
            if (v78) {
                const v79 = killPid(pidpid, signal);
                v79;
                killed[pidpid] = 1;
            }
        };
        const v81 = v76.forEach(v80);
        v81;
        const v82 = killed[pid];
        const v83 = !v82;
        if (v83) {
            const v84 = killPid(pid, signal);
            v84;
            killed[pid] = 1;
        }
    };
    const v86 = v75.forEach(v85);
    v86;
};
const killPid = function (pid, signal) {
    try {
        const v87 = Number(pid);
        const v88 = process.kill(v87, signal);
        v88;
    } catch (err) {
        const v89 = err.code;
        const v90 = v89 !== 'ESRCH';
        if (v90) {
            throw err;
        }
    }
};
const buildProcessTree = function (ppid, tree, pidsToProcess, cb) {
    var cmd = 'ps -e -o pid,ppid';
    ppid = String(ppid);
    const v121 = function (err, stdout, stderr) {
        if (err) {
            const v91 = console.log(stderr);
            v91;
            throw err;
        }
        const v92 = stdout.toString();
        var lines = v92.split('\n');
        const v98 = function (line) {
            const v93 = line.trim();
            const v94 = v93.split(/ +/);
            const v96 = function (item) {
                const v95 = item.trim();
                return v95;
            };
            const v97 = v94.map(v96);
            return v97;
        };
        lines = lines.map(v98);
        const v99 = pidsToProcess[ppid];
        const v100 = delete v99;
        v100;
        var pids = [];
        var i = 0;
        const v101 = lines.length;
        let v102 = i < v101;
        while (v102) {
            var item = lines[i];
            const v104 = item[1];
            const v105 = v104 === ppid;
            if (v105) {
                const v106 = item[0];
                const v107 = parseInt(v106);
                const v108 = pids.push(v107);
                v108;
            }
            const v103 = i++;
            v102 = i < v101;
        }
        const v109 = pids.length;
        const v110 = v109 === 0;
        const v111 = Object.keys(pidsToProcess);
        const v112 = v111.length;
        const v113 = v112 === 0;
        const v114 = v110 && v113;
        if (v114) {
            const v115 = cb();
            return v115;
        }
        const v119 = function (pid) {
            const v116 = tree[ppid];
            const v117 = v116.push(pid);
            v117;
            tree[pid] = [];
            pidsToProcess[pid] = 1;
            const v118 = buildProcessTree(pid, tree, pidsToProcess, cb);
            v118;
        };
        const v120 = pids.forEach(v119);
        v120;
    };
    const v122 = exec(cmd, v121);
    v122;
};
'use strict';
var childProcess = require('child_process');
var spawn = childProcess.spawn;
var exec = childProcess.exec;
const v85 = function (pid, signal, callback) {
    const v61 = typeof signal;
    const v62 = v61 === 'function';
    const v63 = callback === undefined;
    const v64 = v62 && v63;
    if (v64) {
        callback = signal;
        signal = undefined;
    }
    pid = parseInt(pid);
    const v65 = Number.isNaN(pid);
    if (v65) {
        if (callback) {
            const v66 = new Error('pid must be a number');
            const v67 = callback(v66);
            return v67;
        } else {
            const v68 = new Error('pid must be a number');
            throw v68;
        }
    }
    var tree = {};
    var pidsToProcess = {};
    tree[pid] = [];
    pidsToProcess[pid] = 1;
    const v69 = process.platform;
    switch (v69) {
    case 'win32':
        const v70 = 'taskkill /pid ' + pid;
        const v71 = v70 + ' /T /F';
        const v72 = exec(v71, callback);
        v72;
        break;
    case 'darwin':
        const v75 = function (parentPid) {
            const v73 = [
                '-P',
                parentPid
            ];
            const v74 = spawn('pgrep', v73);
            return v74;
        };
        const v77 = function () {
            const v76 = killAll(tree, signal, callback);
            v76;
        };
        const v78 = buildProcessTree(pid, tree, pidsToProcess, v75, v77);
        v78;
        break;
    default:
        const v81 = function (parentPid) {
            const v79 = [
                '-o',
                'pid',
                '--no-headers',
                '--ppid',
                parentPid
            ];
            const v80 = spawn('ps', v79);
            return v80;
        };
        const v83 = function () {
            const v82 = killAll(tree, signal, callback);
            v82;
        };
        const v84 = buildProcessTree(pid, tree, pidsToProcess, v81, v83);
        v84;
        break;
    }
};
module.exports = v85;
const killAll = function (tree, signal, callback) {
    var killed = {};
    try {
        const v86 = Object.keys(tree);
        const v96 = function (pid) {
            const v87 = tree[pid];
            const v91 = function (pidpid) {
                const v88 = killed[pidpid];
                const v89 = !v88;
                if (v89) {
                    const v90 = killPid(pidpid, signal);
                    v90;
                    killed[pidpid] = 1;
                }
            };
            const v92 = v87.forEach(v91);
            v92;
            const v93 = killed[pid];
            const v94 = !v93;
            if (v94) {
                const v95 = killPid(pid, signal);
                v95;
                killed[pid] = 1;
            }
        };
        const v97 = v86.forEach(v96);
        v97;
    } catch (err) {
        if (callback) {
            const v98 = callback(err);
            return v98;
        } else {
            throw err;
        }
    }
    if (callback) {
        const v99 = callback();
        return v99;
    }
};
const killPid = function (pid, signal) {
    try {
        const v100 = parseInt(pid, 10);
        const v101 = process.kill(v100, signal);
        v101;
    } catch (err) {
        const v102 = err.code;
        const v103 = v102 !== 'ESRCH';
        if (v103) {
            throw err;
        }
    }
};
const buildProcessTree = function (parentPid, tree, pidsToProcess, spawnChildProcessesList, cb) {
    var ps = spawnChildProcessesList(parentPid);
    var allData = '';
    const v104 = ps.stdout;
    const v105 = function (data) {
        var data = data.toString('ascii');
        allData += data;
    };
    const v106 = v104.on('data', v105);
    v106;
    var onClose = function (code) {
        const v107 = pidsToProcess[parentPid];
        const v108 = delete v107;
        v108;
        const v109 = code != 0;
        if (v109) {
            const v110 = Object.keys(pidsToProcess);
            const v111 = v110.length;
            const v112 = v111 == 0;
            if (v112) {
                const v113 = cb();
                v113;
            }
            return;
        }
        const v114 = allData.match(/\d+/g);
        const v118 = function (pid) {
            pid = parseInt(pid, 10);
            const v115 = tree[parentPid];
            const v116 = v115.push(pid);
            v116;
            tree[pid] = [];
            pidsToProcess[pid] = 1;
            const v117 = buildProcessTree(pid, tree, pidsToProcess, spawnChildProcessesList, cb);
            v117;
        };
        const v119 = v114.forEach(v118);
        v119;
    };
    const v120 = ps.on('close', onClose);
    v120;
};
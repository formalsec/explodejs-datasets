var async = require('async');
var cp = require('child_process');
var notEmpty = function (x) {
    return x;
};
const killport = function (port) {
    const v59 = function (resolve, reject) {
        var cmd = 'lsof -i:' + port;
        const v57 = function (err, stdout, stderr) {
            if (stderr) {
                const v31 = reject(stderr);
                return v31;
            }
            const v32 = String(stdout);
            const v33 = v32.split('\n');
            var lines = v33.filter(notEmpty);
            const v40 = function (line) {
                var blocks = line.split(/\s+/);
                const v34 = blocks[1];
                const v35 = blocks[1];
                const v36 = +v35;
                const v37 = v34 && v36;
                if (v37) {
                    const v38 = blocks[1];
                    const v39 = +v38;
                    return v39;
                }
                return null;
            };
            const v41 = lines.map(v40);
            var pids = v41.filter(notEmpty);
            const v42 = pids.length;
            const v43 = !v42;
            if (v43) {
                const v44 = resolve('no pids found');
                return v44;
            }
            var infs = [];
            const v53 = function (pid, next) {
                const v45 = 'kill ' + pid;
                const v46 = console.log(v45);
                v46;
                const v47 = 'kill ' + pid;
                const v51 = function (err, stdout, stderr) {
                    const v48 = {
                        pid: pid,
                        err: err,
                        stderr: stderr,
                        stdout: stdout
                    };
                    const v49 = infs.push(v48);
                    v49;
                    const v50 = next();
                    v50;
                };
                const v52 = cp.exec(v47, v51);
                v52;
            };
            const v55 = function (err) {
                const v54 = resolve(infs);
                v54;
            };
            const v56 = async.each(pids, v53, v55);
            return v56;
        };
        const v58 = cp.exec(cmd, v57);
        v58;
    };
    const v60 = new Promise(v59);
    return v60;
};
module.exports = killport;
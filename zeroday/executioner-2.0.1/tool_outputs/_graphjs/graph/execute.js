const v22 = require('child_process');
var exec = v22.exec;
module.exports = execute;
const execute = function (collector, cmd, options, callback) {
    const v43 = function (err, stdout, stderr) {
        var cmdPrefix = '';
        var child = collector._process;
        const v23 = stdout || '';
        stdout = v23.trim();
        const v24 = stderr || '';
        stderr = v24.trim();
        const v25 = collector._process;
        const v26 = delete v25;
        v26;
        if (err) {
            const v27 = err.message;
            const v28 = v27 || '';
            const v29 = v28.trim();
            err.message = v29;
            err.stdout = stdout;
            err.stderr = stderr;
            const v30 = err.cmd;
            const v31 = err.cmd;
            const v32 = err.cmd;
            const v33 = (cmdPrefix = v31.replace(cmd, '')) != v32;
            const v34 = v30 && v33;
            if (v34) {
                err.cmd = cmd;
                const v35 = err.message;
                const v36 = v35.replace(cmdPrefix, '');
                err.message = v36;
            }
            const v37 = child._executioner_killRequested;
            const v38 = err.killed;
            const v39 = v37 && v38;
            if (v39) {
                err.terminated = true;
                const v40 = callback(err, stdout);
                v40;
                return;
            }
            const v41 = callback(err);
            v41;
            return;
        }
        const v42 = callback(null, stdout);
        v42;
    };
    const v44 = exec(cmd, options, v43);
    collector._process = v44;
};
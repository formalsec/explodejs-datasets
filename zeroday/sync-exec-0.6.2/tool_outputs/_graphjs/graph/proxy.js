const v36 = function () {
    var child_process;
    child_process = require('child_process');
    const v35 = function (cmd, max_wait, options) {
        var err;
        var orig_write;
        var status;
        var stderr;
        var stdout;
        var t0;
        options.timeout = max_wait;
        stderr = '';
        stdout = stderr;
        status = 0;
        t0 = Date.now();
        const v22 = process.stderr;
        orig_write = v22.write;
        const v23 = process.stderr;
        const v24 = function () {
        };
        v23.write = v24;
        try {
            stdout = child_process.execSync(cmd, options);
            const v25 = process.stderr;
            v25.write = orig_write;
        } catch (_error) {
            err = _error;
            const v26 = process.stderr;
            v26.write = orig_write;
            const v27 = err.signal;
            const v28 = v27 === 'SIGTERM';
            const v29 = Date.now();
            const v30 = v29 - max_wait;
            const v31 = t0 <= v30;
            const v32 = v28 && v31;
            if (v32) {
                const v33 = new Error('Timeout');
                throw v33;
            }
            stdout = err.stdout, stderr = err.stderr, status = err.status;
        }
        const v34 = {};
        v34.stdout = stdout;
        v34.stderr = stderr;
        v34.status = status;
        return v34;
    };
    module.exports = v35;
};
const v37 = v36.call(this);
v37;
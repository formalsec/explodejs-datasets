'use strict';
const v15 = { value: true };
const v16 = Object.defineProperty(exports, '__esModule', v15);
v16;
var child_process_1 = require('child_process');
const v17 = require('debug');
var d = v17('electron-windows-installer:spawn');
const spawn = function (exe, params, opts) {
    const v49 = function (resolve, reject) {
        var proc = null;
        const v18 = 'Spawning ' + exe;
        const v19 = v18 + ' ';
        const v20 = params.join(' ');
        const v21 = v19 + v20;
        const v22 = d(v21);
        v22;
        const v23 = !opts;
        if (v23) {
            proc = child_process_1.spawn(exe, params);
        } else {
            proc = child_process_1.spawn(exe, params, opts);
        }
        var rejected = false;
        var refCount = 3;
        var stdout = '';
        var release = function () {
            const v24 = --refCount;
            const v25 = v24 <= 0;
            const v26 = !rejected;
            const v27 = v25 && v26;
            if (v27) {
                const v28 = resolve(stdout);
                v28;
            }
        };
        var bufHandler = function (b) {
            var chunk = b.toString();
            stdout += chunk;
        };
        const v29 = proc.stdout;
        const v30 = v29.on('data', bufHandler);
        v30;
        const v31 = proc.stdout;
        const v32 = v31.once('close', release);
        v32;
        const v33 = proc.stderr;
        const v34 = v33.on('data', bufHandler);
        v34;
        const v35 = proc.stderr;
        const v36 = v35.once('close', release);
        v36;
        const v38 = function (e) {
            const v37 = reject(e);
            return v37;
        };
        const v39 = proc.on('error', v38);
        v39;
        const v47 = function (code) {
            const v40 = code === 0;
            if (v40) {
                const v41 = release();
                v41;
            } else {
                rejected = true;
                const v42 = 'Failed with exit code: ' + code;
                const v43 = v42 + '\nOutput:\n';
                const v44 = v43 + stdout;
                const v45 = new Error(v44);
                const v46 = reject(v45);
                v46;
            }
        };
        const v48 = proc.on('close', v47);
        v48;
    };
    const v50 = new Promise(v49);
    return v50;
};
exports.default = spawn;
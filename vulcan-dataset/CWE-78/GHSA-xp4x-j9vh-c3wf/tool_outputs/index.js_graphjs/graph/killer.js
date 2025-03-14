'use strict';
const v1 = this.__awaiter;
const v2 = this && v1;
const v25 = function (thisArg, _arguments, P, generator) {
    const v3 = P || (P = Promise);
    const v23 = function (resolve, reject) {
        const fulfilled = function (value) {
            try {
                const v4 = generator.next(value);
                const v5 = step(v4);
                v5;
            } catch (e) {
                const v6 = reject(e);
                v6;
            }
        };
        const rejected = function (value) {
            try {
                const v7 = generator['throw'](value);
                const v8 = step(v7);
                v8;
            } catch (e) {
                const v9 = reject(e);
                v9;
            }
        };
        const step = function (result) {
            const v10 = result.done;
            const v11 = result.value;
            const v12 = resolve(v11);
            const v15 = function (resolve) {
                const v13 = result.value;
                const v14 = resolve(v13);
                v14;
            };
            const v16 = new P(v15);
            const v17 = v16.then(fulfilled, rejected);
            let v18;
            if (v10) {
                v18 = v12;
            } else {
                v18 = v17;
            }
            v18;
        };
        const v19 = [];
        const v20 = _arguments || v19;
        const v21 = (generator = generator.apply(thisArg, v20)).next();
        const v22 = step(v21);
        v22;
    };
    const v24 = new v3(v23);
    return v24;
};
var __awaiter = v2 || v25;
const v26 = { value: true };
const v27 = Object.defineProperty(exports, '__esModule', v26);
v27;
const child_process_1 = require('child_process');
const os_1 = require('os');
const pidFromPort = require('pid-from-port');
const Killer = function Killer(ports, options) {
    this.ports = ports;
    this.options = options;
};
const kill = function kill() {
    const v28 = void 0;
    const v29 = void 0;
    const v36 = function* () {
        let killFunc;
        const v30 = os_1.platform();
        const v31 = v30 === 'win32';
        const v32 = this.win32Kill;
        const v33 = this.unixKill;
        if (v31) {
            killFunc = v32;
        } else {
            killFunc = v33;
        }
        const v34 = this.ports;
        const promises = v34.map(killFunc);
        const v35 = Promise.all(promises);
        return v35;
    };
    const v37 = __awaiter(this, v28, v29, v36);
    return v37;
};
Killer.kill = kill;
const win32Kill = function win32Kill(port) {
    const v38 = void 0;
    const v39 = void 0;
    const v64 = function* () {
        const v40 = pidFromPort(port);
        const pid = yield v40;
        const v62 = (resolve, reject) => {
            const v41 = pid.toString();
            const v42 = [
                '/f',
                '/t',
                '/pid',
                v41
            ];
            const taskkill = child_process_1.spawn('TASKKILL', v42);
            const v43 = taskkill.stdout;
            const v46 = data => {
                const v44 = data.toString();
                const v45 = console.log(v44);
                return v45;
            };
            const v47 = v43.on('data', v46);
            v47;
            const v48 = taskkill.stderr;
            const v51 = data => {
                const v49 = data.toString();
                const v50 = console.error(v49);
                return v50;
            };
            const v52 = v48.on('data', v51);
            v52;
            const v57 = (code, signal) => {
                const v53 = code !== 0;
                if (v53) {
                    const v54 = `taskkill process exited with code ${ code } and signal ${ signal }`;
                    const v55 = reject(v54);
                    v55;
                    return;
                }
                const v56 = resolve();
                v56;
            };
            const v58 = taskkill.on('close', v57);
            v58;
            const v60 = err => {
                const v59 = reject(err);
                return v59;
            };
            const v61 = taskkill.on('error', v60);
            v61;
        };
        const v63 = new Promise(v62);
        return v63;
    };
    const v65 = __awaiter(this, v38, v39, v64);
    return v65;
};
Killer.win32Kill = win32Kill;
const unixKill = function unixKill(port) {
    const v66 = void 0;
    const v67 = void 0;
    const v107 = function* () {
        const v105 = (resolve, reject) => {
            const v68 = [
                '-i',
                `tcp:${ port }`
            ];
            const lsof = child_process_1.spawn('lsof', v68);
            const v69 = ['LISTEN'];
            const grep = child_process_1.spawn('grep', v69);
            const v70 = ['{print $2}'];
            const awk = child_process_1.spawn('awk', v70);
            const v71 = [
                'kill',
                '-9'
            ];
            const xargs = child_process_1.spawn('xargs', v71);
            const v72 = lsof.stdout;
            const v73 = grep.stdin;
            const v74 = v72.pipe(v73);
            v74;
            const v75 = lsof.stderr;
            const v76 = logStderrData('lsof');
            const v77 = v75.on('data', v76);
            v77;
            const v78 = grep.stdout;
            const v79 = awk.stdin;
            const v80 = v78.pipe(v79);
            v80;
            const v81 = grep.stderr;
            const v82 = logStderrData('grep');
            const v83 = v81.on('data', v82);
            v83;
            const v84 = awk.stdout;
            const v85 = xargs.stdin;
            const v86 = v84.pipe(v85);
            v86;
            const v87 = awk.stderr;
            const v88 = logStderrData('awk');
            const v89 = v87.on('data', v88);
            v89;
            const v90 = xargs.stdout;
            const v91 = process.stdin;
            const v92 = v90.pipe(v91);
            v92;
            const v93 = xargs.stderr;
            const v94 = logStderrData('xargs');
            const v95 = v93.on('data', v94);
            v95;
            const v99 = code => {
                const v96 = code !== 0;
                if (v96) {
                    const v97 = reject();
                    v97;
                    return;
                }
                const v98 = resolve();
                v98;
            };
            const v100 = xargs.on('close', v99);
            v100;
            const logStderrData = function (command) {
                const v104 = data => {
                    const v101 = data.toString();
                    const v102 = `${ command } - ${ v101 }`;
                    const v103 = console.error(v102);
                    return v103;
                };
                return v104;
            };
        };
        const v106 = new Promise(v105);
        return v106;
    };
    const v108 = __awaiter(this, v66, v67, v107);
    return v108;
};
Killer.unixKill = unixKill;
Killer['is_class'] = true;
exports.Killer = Killer;
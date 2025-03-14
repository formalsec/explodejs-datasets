'use strict';
const v109 = this.__awaiter;
const v110 = this && v109;
const v133 = function (thisArg, _arguments, P, generator) {
    const v111 = P || (P = Promise);
    const v131 = function (resolve, reject) {
        const fulfilled = function (value) {
            try {
                const v112 = generator.next(value);
                const v113 = step(v112);
                v113;
            } catch (e) {
                const v114 = reject(e);
                v114;
            }
        };
        const rejected = function (value) {
            try {
                const v115 = generator['throw'](value);
                const v116 = step(v115);
                v116;
            } catch (e) {
                const v117 = reject(e);
                v117;
            }
        };
        const step = function (result) {
            const v118 = result.done;
            const v119 = result.value;
            const v120 = resolve(v119);
            const v123 = function (resolve) {
                const v121 = result.value;
                const v122 = resolve(v121);
                v122;
            };
            const v124 = new P(v123);
            const v125 = v124.then(fulfilled, rejected);
            let v126;
            if (v118) {
                v126 = v120;
            } else {
                v126 = v125;
            }
            v126;
        };
        const v127 = [];
        const v128 = _arguments || v127;
        const v129 = (generator = generator.apply(thisArg, v128)).next();
        const v130 = step(v129);
        v130;
    };
    const v132 = new v111(v131);
    return v132;
};
var __awaiter = v110 || v133;
const v134 = { value: true };
const v135 = Object.defineProperty(exports, '__esModule', v134);
v135;
const child_process_1 = require('child_process');
const os_1 = require('os');
const pidFromPort = require('pid-from-port');
const Killer = function Killer(ports, options) {
    this.ports = ports;
    this.options = options;
};
const kill = function kill() {
    const v136 = void 0;
    const v137 = void 0;
    const v144 = function* () {
        let killFunc;
        const v138 = os_1.platform();
        const v139 = v138 === 'win32';
        const v140 = this.win32Kill;
        const v141 = this.unixKill;
        if (v139) {
            killFunc = v140;
        } else {
            killFunc = v141;
        }
        const v142 = this.ports;
        const promises = v142.map(killFunc);
        const v143 = Promise.all(promises);
        return v143;
    };
    const v145 = __awaiter(this, v136, v137, v144);
    return v145;
};
Killer.kill = kill;
const win32Kill = function win32Kill(port) {
    const v146 = void 0;
    const v147 = void 0;
    const v172 = function* () {
        const v148 = pidFromPort(port);
        const pid = yield v148;
        const v170 = (resolve, reject) => {
            const v149 = pid.toString();
            const v150 = [
                '/f',
                '/t',
                '/pid',
                v149
            ];
            const taskkill = child_process_1.spawn('TASKKILL', v150);
            const v151 = taskkill.stdout;
            const v154 = data => {
                const v152 = data.toString();
                const v153 = console.log(v152);
                return v153;
            };
            const v155 = v151.on('data', v154);
            v155;
            const v156 = taskkill.stderr;
            const v159 = data => {
                const v157 = data.toString();
                const v158 = console.error(v157);
                return v158;
            };
            const v160 = v156.on('data', v159);
            v160;
            const v165 = (code, signal) => {
                const v161 = code !== 0;
                if (v161) {
                    const v162 = `taskkill process exited with code ${ code } and signal ${ signal }`;
                    const v163 = reject(v162);
                    v163;
                    return;
                }
                const v164 = resolve();
                v164;
            };
            const v166 = taskkill.on('close', v165);
            v166;
            const v168 = err => {
                const v167 = reject(err);
                return v167;
            };
            const v169 = taskkill.on('error', v168);
            v169;
        };
        const v171 = new Promise(v170);
        return v171;
    };
    const v173 = __awaiter(this, v146, v147, v172);
    return v173;
};
Killer.win32Kill = win32Kill;
const unixKill = function unixKill(port) {
    const v174 = void 0;
    const v175 = void 0;
    const v215 = function* () {
        const v213 = (resolve, reject) => {
            const v176 = [
                '-i',
                `tcp:${ port }`
            ];
            const lsof = child_process_1.spawn('lsof', v176);
            const v177 = ['LISTEN'];
            const grep = child_process_1.spawn('grep', v177);
            const v178 = ['{print $2}'];
            const awk = child_process_1.spawn('awk', v178);
            const v179 = [
                'kill',
                '-9'
            ];
            const xargs = child_process_1.spawn('xargs', v179);
            const v180 = lsof.stdout;
            const v181 = grep.stdin;
            const v182 = v180.pipe(v181);
            v182;
            const v183 = lsof.stderr;
            const v184 = logStderrData('lsof');
            const v185 = v183.on('data', v184);
            v185;
            const v186 = grep.stdout;
            const v187 = awk.stdin;
            const v188 = v186.pipe(v187);
            v188;
            const v189 = grep.stderr;
            const v190 = logStderrData('grep');
            const v191 = v189.on('data', v190);
            v191;
            const v192 = awk.stdout;
            const v193 = xargs.stdin;
            const v194 = v192.pipe(v193);
            v194;
            const v195 = awk.stderr;
            const v196 = logStderrData('awk');
            const v197 = v195.on('data', v196);
            v197;
            const v198 = xargs.stdout;
            const v199 = process.stdin;
            const v200 = v198.pipe(v199);
            v200;
            const v201 = xargs.stderr;
            const v202 = logStderrData('xargs');
            const v203 = v201.on('data', v202);
            v203;
            const v207 = code => {
                const v204 = code !== 0;
                if (v204) {
                    const v205 = reject();
                    v205;
                    return;
                }
                const v206 = resolve();
                v206;
            };
            const v208 = xargs.on('close', v207);
            v208;
            const logStderrData = function (command) {
                const v212 = data => {
                    const v209 = data.toString();
                    const v210 = `${ command } - ${ v209 }`;
                    const v211 = console.error(v210);
                    return v211;
                };
                return v212;
            };
        };
        const v214 = new Promise(v213);
        return v214;
    };
    const v216 = __awaiter(this, v174, v175, v215);
    return v216;
};
Killer.unixKill = unixKill;
Killer['is_class'] = true;
exports.Killer = Killer;
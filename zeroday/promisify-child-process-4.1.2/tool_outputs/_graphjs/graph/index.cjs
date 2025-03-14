'use strict';
const v96 = { value: true };
const v97 = Object.defineProperty(exports, '__esModule', v96);
v97;
exports.promisifyChildProcess = promisifyChildProcess;
exports.spawn = spawn;
exports.fork = fork;
const v98 = void 0;
exports.exec = v98;
exports.execFile = exports.exec;
const child_process = require('child_process');
const bindFinally = promise => {
    const v102 = handler => {
        const v99 = async value => {
            await handler();
            return value;
        };
        const v100 = async reason => {
            await handler();
            throw reason;
        };
        const v101 = promise.then(v99, v100);
        return v101;
    };
    return v102;
};
const joinChunks = function (chunks, encoding) {
    const v103 = chunks[0];
    const v104 = v103 instanceof Buffer;
    if (v104) {
        const buffer = Buffer.concat(chunks);
        if (encoding) {
            const v105 = buffer.toString(encoding);
            return v105;
        }
        return buffer;
    }
    const v106 = chunks.join('');
    return v106;
};
const promisifyChildProcess = function (child, options = {}) {
    const v152 = (resolve, reject) => {
        const v107 = options;
        const encoding = v107.encoding;
        const killSignal = v107.killSignal;
        const v108 = encoding != null;
        const v109 = options.maxBuffer;
        const v110 = v109 != null;
        const captureStdio = v108 || v110;
        let maxBuffer;
        const v111 = options.maxBuffer;
        const v112 = v111 != null;
        const v113 = options.maxBuffer;
        const v114 = 200 * 1024;
        if (v112) {
            maxBuffer = v113;
        } else {
            maxBuffer = v114;
        }
        let error;
        let bufferSize = 0;
        const stdoutChunks = [];
        const stderrChunks = [];
        const capture = chunks => {
            const v120 = data => {
                const v115 = maxBuffer - bufferSize;
                const remaining = Math.max(0, v115);
                const byteLength = Buffer.byteLength(data, 'utf8');
                bufferSize += Math.min(remaining, byteLength);
                const v116 = byteLength > remaining;
                if (v116) {
                    error = new Error(`maxBuffer size exceeded`);
                    let v117;
                    if (killSignal) {
                        v117 = killSignal;
                    } else {
                        v117 = 'SIGTERM';
                    }
                    const v118 = child.kill(v117);
                    v118;
                    data = data.slice(0, remaining);
                }
                const v119 = chunks.push(data);
                v119;
            };
            return v120;
        };
        if (captureStdio) {
            const v121 = child.stdout;
            if (v121) {
                const v122 = child.stdout;
                const v123 = capture(stdoutChunks);
                const v124 = v122.on('data', v123);
                v124;
            }
            const v125 = child.stderr;
            if (v125) {
                const v126 = child.stderr;
                const v127 = capture(stderrChunks);
                const v128 = v126.on('data', v127);
                v128;
            }
        }
        const v129 = child.on('error', reject);
        v129;
        const done = function (code, signal) {
            const v130 = !error;
            if (v130) {
                const v131 = code != null;
                const v132 = code !== 0;
                const v133 = v131 && v132;
                if (v133) {
                    error = new Error(`Process exited with code ${ code }`);
                } else {
                    const v134 = signal != null;
                    if (v134) {
                        error = new Error(`Process was killed with ${ signal }`);
                    }
                }
            }
            const defineOutputs = function (obj) {
                obj.code = code;
                obj.signal = signal;
                if (captureStdio) {
                    const v135 = joinChunks(stdoutChunks, encoding);
                    obj.stdout = v135;
                    const v136 = joinChunks(stderrChunks, encoding);
                    obj.stderr = v136;
                } else {
                    const warn = prop => {
                        const v141 = function () {
                            const v137 = new Error(`To get ${ prop } from a spawned or forked process, set the \`encoding\` or \`maxBuffer\` option`);
                            const v138 = v137.stack;
                            const v139 = v138.replace(/^Error/, 'Warning');
                            const v140 = console.error(v139);
                            v140;
                            return null;
                        };
                        const v142 = {};
                        v142.configurable = true;
                        v142.enumerable = true;
                        v142.get = v141;
                        return v142;
                    };
                    const v143 = warn('stdout');
                    const v144 = warn('stderr');
                    const v145 = {
                        stdout: v143,
                        stderr: v144
                    };
                    const v146 = Object.defineProperties(obj, v145);
                    v146;
                }
            };
            const finalError = error;
            if (finalError) {
                const v147 = defineOutputs(finalError);
                v147;
                const v148 = reject(finalError);
                v148;
            } else {
                const output = {};
                const v149 = defineOutputs(output);
                v149;
                const v150 = resolve(output);
                v150;
            }
        };
        const v151 = child.on('close', done);
        v151;
    };
    const _promise = new Promise(v152);
    const v153 = _promise.then;
    const v154 = v153.bind(_promise);
    const v155 = {};
    v155.value = v154;
    const v156 = _promise.catch;
    const v157 = v156.bind(_promise);
    const v158 = {};
    v158.value = v157;
    const v159 = bindFinally(_promise);
    const v160 = {};
    v160.value = v159;
    const v161 = {
        then: v155,
        catch: v158,
        finally: v160
    };
    const v162 = Object.create(child, v161);
    return v162;
};
const spawn = function (command, args, options) {
    const v163 = child_process.spawn(command, args, options);
    const v164 = Array.isArray(args);
    let v165;
    if (v164) {
        v165 = options;
    } else {
        v165 = args;
    }
    const v166 = promisifyChildProcess(v163, v165);
    return v166;
};
const fork = function (module, args, options) {
    const v167 = child_process.fork(module, args, options);
    const v168 = Array.isArray(args);
    let v169;
    if (v168) {
        v169 = options;
    } else {
        v169 = args;
    }
    const v170 = promisifyChildProcess(v167, v169);
    return v170;
};
const promisifyExecMethod = function (method) {
    const v188 = (...args) => {
        let child;
        const v175 = (resolve, reject) => {
            const v174 = (err, stdout, stderr) => {
                if (err) {
                    err.stdout = stdout;
                    err.stderr = stderr;
                    const v171 = reject(err);
                    v171;
                } else {
                    const v172 = {
                        code: 0,
                        signal: null,
                        stdout,
                        stderr
                    };
                    const v173 = resolve(v172);
                    v173;
                }
            };
            child = method(...args, v174);
        };
        const _promise = new Promise(v175);
        const v176 = !child;
        if (v176) {
            const v177 = new Error('unexpected error: child has not been initialized');
            throw v177;
        }
        const v178 = _promise.then;
        const v179 = v178.bind(_promise);
        const v180 = {};
        v180.value = v179;
        const v181 = _promise.catch;
        const v182 = v181.bind(_promise);
        const v183 = {};
        v183.value = v182;
        const v184 = bindFinally(_promise);
        const v185 = {};
        v185.value = v184;
        const v186 = {
            then: v180,
            catch: v183,
            finally: v185
        };
        const v187 = Object.create(child, v186);
        return v187;
    };
    return v188;
};
const v189 = child_process.exec;
const exec = promisifyExecMethod(v189);
exports.exec = exec;
const v190 = child_process.execFile;
const execFile = promisifyExecMethod(v190);
exports.execFile = execFile;
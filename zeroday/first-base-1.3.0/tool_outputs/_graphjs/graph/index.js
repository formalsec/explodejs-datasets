'use strict';
const _typeof = function (obj) {
    const v123 = typeof Symbol;
    const v124 = v123 === 'function';
    const v125 = Symbol.iterator;
    const v126 = typeof v125;
    const v127 = v126 === 'symbol';
    const v128 = v124 && v127;
    if (v128) {
        const _typeof = function (obj) {
            const v129 = typeof obj;
            return v129;
        };
        _typeof = _typeof;
    } else {
        const _typeof = function (obj) {
            const v130 = typeof Symbol;
            const v131 = v130 === 'function';
            const v132 = obj && v131;
            const v133 = obj.constructor;
            const v134 = v133 === Symbol;
            const v135 = v132 && v134;
            const v136 = Symbol.prototype;
            const v137 = obj !== v136;
            const v138 = v135 && v137;
            const v139 = typeof obj;
            let v140;
            if (v138) {
                v140 = 'symbol';
            } else {
                v140 = v139;
            }
            return v140;
        };
        _typeof = _typeof;
    }
    const v141 = _typeof(obj);
    return v141;
};
const v142 = require('child_process');
var normalSpawn = v142.spawn;
var stripAnsi = require('strip-ansi');
var spawn = function spawn(cmd, argsOrOptions, passedOptions) {
    var args;
    var options;
    const v143 = Array.isArray(argsOrOptions);
    if (v143) {
        args = argsOrOptions;
    } else {
        const v144 = _typeof(argsOrOptions);
        const v145 = v144 === 'object';
        if (v145) {
            options = argsOrOptions;
        }
    }
    const v146 = !options;
    const v147 = passedOptions && v146;
    if (v147) {
        options = passedOptions;
    }
    const v148 = !args;
    if (v148) {
        args = [];
    }
    const v149 = !options;
    if (v149) {
        options = {};
    }
    var child;
    var stdin;
    var stdout;
    var stderr;
    var unreffable;
    var running;
    var _debug = false;
    var outputContainsBuffer = '';
    var pendingOutputContainsRequests = new Set();
    var debugLog = function debugLog() {
        if (_debug) {
            var _console;
            const v150 = (_console = console).log;
            const v151 = v150.apply(_console, arguments);
            v151;
        }
    };
    const v152 = {};
    v152.stdout = '';
    v152.stderr = '';
    v152.code = null;
    v152.error = false;
    const v153 = function debug() {
        _debug = true;
        return this;
    };
    const v166 = function outputContains(value) {
        const v154 = JSON.stringify(value);
        const v155 = 'Waiting for output to contain '.concat(v154, '...');
        const v156 = debugLog(v155);
        v156;
        const v164 = function (resolve, reject) {
            var request = {};
            request.value = value;
            const v159 = function () {
                const v157 = pendingOutputContainsRequests.delete(request);
                v157;
                const v158 = resolve();
                v158;
            };
            request.resolve = v159;
            const v162 = function () {
                const v160 = pendingOutputContainsRequests.delete(request);
                v160;
                const v161 = reject();
                v161;
            };
            request.reject = v162;
            const v163 = pendingOutputContainsRequests.add(request);
            v163;
        };
        const v165 = new Promise(v164);
        return v165;
    };
    const v167 = function clearOutputContainsBuffer() {
        outputContainsBuffer = '';
    };
    const v169 = function write(data) {
        const v168 = stdin.write(data);
        v168;
    };
    const v177 = function close(stream) {
        const v170 = String(stream);
        const v171 = v170.toLowerCase();
        switch (v171) {
        case 'stdin': {
                const v172 = stdin.end();
                v172;
                break;
            }
        case 'stdout': {
                const v173 = stdout.end();
                v173;
                break;
            }
        case 'stderr': {
                const v174 = stderr.end();
                v174;
                break;
            }
        default: {
                const v175 = 'Invalid stream name: \''.concat(stream, '\'. Valid names are \'stdin\', \'stdout\', or \'stderr\'.');
                const v176 = new Error(v175);
                throw v176;
            }
        }
    };
    const v186 = function kill() {
        let signal;
        const v178 = arguments.length;
        const v179 = v178 > 0;
        const v180 = arguments[0];
        const v181 = v180 !== undefined;
        const v182 = v179 && v181;
        const v183 = arguments[0];
        if (v182) {
            signal = v183;
        } else {
            signal = 'SIGINT';
        }
        if (running) {
            const v184 = child.kill(signal);
            v184;
        }
        if (unreffable) {
            const v185 = unreffable.unref();
            v185;
        }
    };
    var runContext = {};
    runContext.result = v152;
    runContext.completion = null;
    runContext.debug = v153;
    runContext.outputContains = v166;
    runContext.clearOutputContainsBuffer = v167;
    runContext.write = v169;
    runContext.close = v177;
    runContext.kill = v186;
    const v187 = options.pty;
    if (v187) {
        const v188 = new Error('pty mode is no longer supported due to lack of support for new node.js versions in the node-pty module');
        throw v188;
    } else {
        child = normalSpawn(cmd, args, options);
        stdin = child.stdin;
        stdout = child.stdout;
        stderr = child.stderr;
        unreffable = child;
    }
    running = true;
    var checkForPendingOutputRequestsToResolve = function checkForPendingOutputRequestsToResolve() {
        const v204 = function (request) {
            const v189 = request.value;
            const v190 = typeof v189;
            const v191 = v190 === 'string';
            if (v191) {
                const v192 = stripAnsi(outputContainsBuffer);
                const v193 = request.value;
                const v194 = v192.indexOf(v193);
                const v195 = -1;
                const v196 = v194 != v195;
                if (v196) {
                    const v197 = request.resolve();
                    v197;
                }
            } else {
                const v198 = request.value;
                const v199 = v198 instanceof RegExp;
                if (v199) {
                    const v200 = request.value;
                    const v201 = stripAnsi(outputContainsBuffer);
                    const v202 = v200.test(v201);
                    if (v202) {
                        const v203 = request.resolve();
                        v203;
                    }
                }
            }
        };
        const v205 = pendingOutputContainsRequests.forEach(v204);
        v205;
    };
    const v206 = stdout.setEncoding('utf-8');
    v206;
    var handleStdoutData = function handleStdoutData(data) {
        const v207 = runContext.result;
        v207.stdout += data;
        outputContainsBuffer += data;
        const v208 = data.toString();
        const v209 = 'STDOUT: '.concat(v208);
        const v210 = debugLog(v209);
        v210;
        const v211 = checkForPendingOutputRequestsToResolve();
        v211;
    };
    const v212 = stdout.onData;
    if (v212) {
        const v213 = stdout.onData(handleStdoutData);
        v213;
    } else {
        const v214 = stdout.on('data', handleStdoutData);
        v214;
    }
    if (stderr) {
        const v215 = stderr.setEncoding('utf-8');
        v215;
        const v221 = function (data) {
            const v216 = runContext.result;
            v216.stderr += data;
            outputContainsBuffer += data;
            const v217 = data.toString();
            const v218 = 'STDERR: '.concat(v217);
            const v219 = debugLog(v218);
            v219;
            const v220 = checkForPendingOutputRequestsToResolve();
            v220;
        };
        const v222 = stderr.on('data', v221);
        v222;
    }
    const v243 = function (resolve) {
        var finish = function finish(reason) {
            const v223 = 'Process '.concat(reason);
            const v224 = debugLog(v223);
            v224;
            const v225 = runContext.result;
            const v226 = debugLog(v225);
            v226;
            running = false;
            const v227 = resolve();
            v227;
            const v233 = function (request) {
                const v228 = 'Child process '.concat(reason, ' before its output contained the requested content: ');
                const v229 = request.value;
                const v230 = v228.concat(v229);
                const v231 = new Error(v230);
                const v232 = request.reject(v231);
                v232;
            };
            const v234 = pendingOutputContainsRequests.forEach(v233);
            v234;
        };
        const v237 = function (code) {
            const v235 = runContext.result;
            v235.code = code;
            const v236 = finish('exited');
            v236;
        };
        const v238 = child.once('exit', v237);
        v238;
        const v241 = function () {
            const v239 = runContext.result;
            v239.error = true;
            const v240 = finish('errored');
            v240;
        };
        const v242 = child.once('error', v241);
        v242;
    };
    runContext.completion = new Promise(v243);
    return runContext;
};
const v244 = {};
v244.spawn = spawn;
module.exports = v244;
const v233 = function () {
    var daemon;
    var fs;
    fs = require('fs');
    daemon = require('daemon');
    const v127 = function (st) {
        const v118 = st.pid;
        if (v118) {
            const v119 = st.pid;
            const v120 = console.log('Process running with pid %d.', v119);
            v120;
            const v121 = process.exit(0);
            return v121;
        } else {
            const v122 = st.exists;
            if (v122) {
                const v123 = console.log('Pidfile exists, but process is dead.');
                v123;
                const v124 = process.exit(1);
                return v124;
            } else {
                const v125 = console.log('Not running.');
                v125;
                const v126 = process.exit(3);
                return v126;
            }
        }
    };
    exports.printStatus = v127;
    const v143 = function (pidfile, cb) {
        const v128 = cb == null;
        if (v128) {
            cb = exports.printStatus;
        }
        const v141 = function (err, data) {
            var match;
            var pid;
            if (err) {
                const v129 = err.code;
                const v130 = v129 !== 'ENOENT';
                const v131 = { exists: v130 };
                const v132 = cb(v131);
                return v132;
            } else {
                if (match = /^\d+/.exec(data)) {
                    const v133 = match[0];
                    pid = parseInt(v133);
                    try {
                        const v134 = process.kill(pid, 0);
                        v134;
                        const v135 = { pid: pid };
                        const v136 = cb(v135);
                        return v136;
                    } catch (e) {
                        const v137 = { exists: true };
                        const v138 = cb(v137);
                        return v138;
                    }
                } else {
                    const v139 = { exists: true };
                    const v140 = cb(v139);
                    return v140;
                }
            }
        };
        const v142 = fs.readFile(pidfile, 'utf8', v141);
        return v142;
    };
    exports.status = v143;
    const v146 = function (pid) {
        if (pid) {
            const v144 = console.log('Process already running with pid %d.', pid);
            return v144;
        } else {
            const v145 = console.log('Started.');
            return v145;
        }
    };
    exports.startSucceeded = v146;
    const v149 = function (err) {
        const v147 = console.log(err);
        v147;
        const v148 = process.exit(1);
        return v148;
    };
    exports.startFailed = v149;
    const v169 = function (_arg) {
        var failure;
        var logfile;
        var pidfile;
        var run;
        var start;
        var success;
        pidfile = _arg.pidfile, logfile = _arg.logfile, run = _arg.run, success = _arg.success, failure = _arg.failure;
        const v150 = success || (success = exports.startSucceeded);
        v150;
        const v151 = failure || (failure = exports.startFailed);
        v151;
        const v152 = logfile || (logfile = '/dev/null');
        v152;
        const v160 = function (err) {
            if (err) {
                const v153 = failure(err);
                return v153;
            }
            const v158 = function (err, fd) {
                var pid;
                if (err) {
                    const v154 = failure(err);
                    return v154;
                }
                const v155 = success();
                v155;
                pid = daemon.start(fd);
                const v156 = daemon.lock(pidfile);
                v156;
                const v157 = run();
                return v157;
            };
            const v159 = fs.open(logfile, 'a+', 438, v158);
            return v159;
        };
        start = v160;
        const v167 = function (st) {
            const v161 = st.pid;
            if (v161) {
                const v162 = st.pid;
                const v163 = success(v162, true);
                return v163;
            } else {
                const v164 = st.exists;
                if (v164) {
                    const v165 = fs.unlink(pidfile, start);
                    return v165;
                } else {
                    const v166 = start();
                    return v166;
                }
            }
        };
        const v168 = exports.status(pidfile, v167);
        return v168;
    };
    exports.start = v169;
    const v173 = function (killed) {
        if (killed) {
            const v170 = console.log('Stopped.');
            v170;
        } else {
            const v171 = console.log('Not running.');
            v171;
        }
        const v172 = process.exit(0);
        return v172;
    };
    exports.stopped = v173;
    const v189 = function (timeout) {
        const v174 = timeout == null;
        if (v174) {
            timeout = 2000;
        }
        const v188 = function (pid, cb) {
            var signals;
            var tryKill;
            signals = [
                'TERM',
                'INT',
                'QUIT',
                'KILL'
            ];
            const v186 = function () {
                var sig;
                const v175 = signals[0];
                sig = 'SIG' + v175;
                try {
                    const v176 = process.kill(pid, sig);
                    v176;
                    const v177 = signals.length;
                    const v178 = v177 > 1;
                    if (v178) {
                        const v179 = signals.shift();
                        v179;
                    }
                    const v181 = function () {
                        const v180 = tryKill(sig);
                        return v180;
                    };
                    const v182 = setTimeout(v181, timeout);
                    return v182;
                } catch (e) {
                    const v183 = signals.length;
                    const v184 = v183 < 4;
                    const v185 = cb(v184);
                    return v185;
                }
            };
            tryKill = v186;
            const v187 = tryKill();
            return v187;
        };
        return v188;
    };
    exports.hardKiller = v189;
    const v201 = function (timeout) {
        const v190 = timeout == null;
        if (v190) {
            timeout = 2000;
        }
        const v200 = function (pid, cb) {
            var sig;
            var tryKill;
            sig = 'SIGTERM';
            const v198 = function () {
                var first;
                try {
                    const v191 = process.kill(pid, sig);
                    v191;
                    const v192 = 'Waiting for pid ' + pid;
                    const v193 = console.log(v192);
                    v193;
                    const v194 = sig !== 0;
                    if (v194) {
                        sig = 0;
                    }
                    first = false;
                    const v195 = setTimeout(tryKill, timeout);
                    return v195;
                } catch (e) {
                    const v196 = sig === 0;
                    const v197 = cb(v196);
                    return v197;
                }
            };
            tryKill = v198;
            const v199 = tryKill();
            return v199;
        };
        return v200;
    };
    exports.softKiller = v201;
    const v212 = function (pidfile, cb, killer) {
        const v202 = cb == null;
        if (v202) {
            cb = exports.stopped;
        }
        const v203 = killer == null;
        if (v203) {
            killer = exports.hardKiller(2000);
        }
        const v210 = function (_arg) {
            var pid;
            pid = _arg.pid;
            if (pid) {
                const v207 = function (killed) {
                    const v205 = function () {
                        const v204 = cb(killed);
                        return v204;
                    };
                    const v206 = fs.unlink(pidfile, v205);
                    return v206;
                };
                const v208 = killer(pid, v207);
                return v208;
            } else {
                const v209 = cb(false);
                return v209;
            }
        };
        const v211 = exports.status(pidfile, v210);
        return v211;
    };
    exports.stop = v212;
    const v232 = function (_arg) {
        var command;
        var killer;
        var logfile;
        var pidfile;
        var run;
        var start;
        pidfile = _arg.pidfile, logfile = _arg.logfile, command = _arg.command, run = _arg.run, killer = _arg.killer;
        const v213 = process.argv;
        const v214 = command || (command = v213[2]);
        v214;
        const v215 = killer || (killer = null);
        v215;
        const v218 = function () {
            const v216 = {
                pidfile: pidfile,
                logfile: logfile,
                run: run
            };
            const v217 = exports.start(v216);
            return v217;
        };
        start = v218;
        switch (command) {
        case 'start':
            const v219 = start();
            return v219;
        case 'stop':
            const v220 = exports.stop(pidfile, null, killer);
            return v220;
        case 'status':
            const v221 = exports.status(pidfile);
            return v221;
        case 'restart':
        case 'force-reload':
            const v222 = exports.stop(pidfile, start, killer);
            return v222;
        case 'try-restart':
            const v227 = function (killed) {
                if (killed) {
                    const v223 = {
                        pidfile: pidfile,
                        logfile: logfile,
                        run: run
                    };
                    const v224 = exports.start(v223);
                    return v224;
                } else {
                    const v225 = console.log('Not running.');
                    v225;
                    const v226 = process.exit(1);
                    return v226;
                }
            };
            const v228 = exports.stop(pidfile, v227);
            return v228;
        default:
            const v229 = 'Command must be one of: ' + 'start|stop|status|restart|force-reload|try-restart';
            const v230 = console.log(v229);
            v230;
            const v231 = process.exit(1);
            return v231;
        }
    };
    exports.simple = v232;
};
const v234 = v233.call(this);
v234;
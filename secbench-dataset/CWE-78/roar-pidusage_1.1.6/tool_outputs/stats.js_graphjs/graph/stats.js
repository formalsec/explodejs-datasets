var os = require('os');
var fs = require('fs');
var p = require('path');
const v171 = require('child_process');
var exec = v171.exec;
const v172 = require('child_process');
var spawn = v172.spawn;
const v174 = cb => {
    const v173 = cb('', 'intel');
    return v173;
};
var helpers = {};
helpers.cpu = v174;
const v175 = require('util');
var format = v175.format;
const v176 = {};
const v194 = function (pid, options, done) {
    var self = this;
    const v177 = this.cpu;
    const v178 = v177 !== null;
    if (v178) {
        const v188 = function (err, uptime) {
            if (err) {
                const v179 = done(err, null);
                return v179;
            }
            const v180 = uptime === undefined;
            if (v180) {
                const v181 = console.error('[pidusage] We couldn\'t find uptime from /proc/uptime');
                v181;
                const v183 = os.uptime();
                v182.uptime = v183;
            } else {
                const v184 = self.cpu;
                const v185 = uptime.split(' ');
                const v186 = v185[0];
                v184.uptime = v186;
            }
            const v187 = self.proc_calc(pid, options, done);
            return v187;
        };
        const v189 = fs.readFile('/proc/uptime', 'utf8', v188);
        v189;
    } else {
        const v192 = function (err, cpu) {
            if (err) {
                const v190 = done(err, null);
                return v190;
            }
            self.cpu = cpu;
            const v191 = self.proc_calc(pid, options, done);
            return v191;
        };
        const v193 = helpers.cpu(v192);
        v193;
    }
};
const v255 = function (pid, options, done) {
    let history;
    const v195 = this.history;
    const v196 = v195[pid];
    const v197 = this.history;
    const v198 = v197[pid];
    const v199 = {};
    if (v196) {
        history = v198;
    } else {
        history = v199;
    }
    var cpu = this.cpu;
    var self = this;
    const v200 = '' + pid;
    const v201 = p.join('/proc', v200, 'stat');
    const v253 = function (err, infos) {
        if (err) {
            const v202 = done(err, null);
            return v202;
        }
        var index = infos.lastIndexOf(')');
        const v203 = index + 2;
        const v204 = infos.substr(v203);
        infos = v204.split(' ');
        const v205 = infos[11];
        const v206 = parseFloat(v205);
        const v207 = infos[12];
        const v208 = parseFloat(v207);
        const v209 = infos[13];
        const v210 = parseFloat(v209);
        const v211 = infos[14];
        const v212 = parseFloat(v211);
        const v213 = infos[19];
        const v214 = parseFloat(v213);
        const v215 = cpu.clock_tick;
        const v216 = v214 / v215;
        const v217 = infos[21];
        const v218 = parseFloat(v217);
        var stat = {};
        stat.utime = v206;
        stat.stime = v208;
        stat.cutime = v210;
        stat.cstime = v212;
        stat.start = v216;
        stat.rss = v218;
        let childrens;
        const v219 = options.childrens;
        const v220 = stat.cutime;
        const v221 = stat.cstime;
        const v222 = v220 + v221;
        if (v219) {
            childrens = v222;
        } else {
            childrens = 0;
        }
        const v223 = stat.stime;
        const v224 = history.stime;
        const v225 = v224 || 0;
        const v226 = v223 - v225;
        const v227 = stat.utime;
        const v228 = v226 + v227;
        const v229 = history.utime;
        const v230 = v229 || 0;
        const v231 = v228 - v230;
        var total = v231 + childrens;
        const v232 = cpu.clock_tick;
        total = total / v232;
        let seconds;
        const v233 = history.uptime;
        const v234 = v233 !== undefined;
        const v235 = cpu.uptime;
        const v236 = history.uptime;
        const v237 = v235 - v236;
        const v238 = stat.start;
        const v239 = cpu.uptime;
        const v240 = v238 - v239;
        if (v234) {
            seconds = v237;
        } else {
            seconds = v240;
        }
        seconds = Math.abs(seconds);
        const v241 = seconds === 0;
        if (v241) {
            seconds = 1;
        } else {
            seconds = seconds;
        }
        const v242 = self.history;
        v242[pid] = stat;
        const v243 = self.history;
        const v244 = v243[pid];
        const v245 = cpu.uptime;
        v244.uptime = v245;
        const v246 = total / seconds;
        const v247 = v246 * 100;
        const v248 = stat.rss;
        const v249 = cpu.pagesize;
        const v250 = v248 * v249;
        const v251 = {
            cpu: v247,
            memory: v250
        };
        const v252 = done(null, v251);
        return v252;
    };
    const v254 = fs.readFile(v201, 'utf8', v253);
    v254;
};
const v274 = function (pid, options, done) {
    var cmd = 'ps -o pcpu,rss -p ';
    const v256 = os.platform();
    const v257 = v256 == 'aix';
    if (v257) {
        cmd = 'ps -o pcpu,rssize -p ';
    }
    const v258 = cmd + pid;
    const v272 = function (err, stdout, stderr) {
        if (err) {
            const v259 = done(err, null);
            return v259;
        }
        const v260 = os.EOL;
        const v261 = stdout.split(v260);
        stdout = v261[1];
        const v262 = stdout.replace(/^\s+/, '');
        const v263 = v262.replace(/\s\s+/g, ' ');
        stdout = v263.split(' ');
        const v264 = stdout[0];
        const v265 = v264.replace(',', '.');
        const v266 = parseFloat(v265);
        const v267 = stdout[1];
        const v268 = parseFloat(v267);
        const v269 = v268 * 1024;
        const v270 = {
            cpu: v266,
            memory: v269
        };
        const v271 = done(null, v270);
        return v271;
    };
    const v273 = exec(v258, v272);
    v273;
};
const v340 = function (pid, options, done) {
    let history;
    const v275 = this.history;
    const v276 = v275[pid];
    const v277 = this.history;
    const v278 = v277[pid];
    const v279 = {};
    if (v276) {
        history = v278;
    } else {
        history = v279;
    }
    const v280 = 'path win32_perfformatteddata_perfproc_process where (IDProcess = ' + pid;
    var args = v280 + ') get Name, Caption, PercentProcessorTime, WorkingSetPeak, IDProcess /format:list';
    const v281 = args.split(' ');
    const v282 = { detached: true };
    var wmic = spawn('wmic', v281, v282);
    var stdout = '';
    var stderr = '';
    var self = this;
    var uptime = os.uptime();
    const v283 = wmic.stdout;
    const v284 = function (d) {
        stdout += d.toString();
    };
    const v285 = v283.on('data', v284);
    v285;
    const v286 = wmic.stderr;
    const v287 = function (d) {
        stderr += d.toString();
    };
    const v288 = v286.on('data', v287);
    v288;
    const v292 = function (err) {
        const v289 = '[pidusage] Command "wmic ' + args;
        const v290 = v289 + '" failed with error %s';
        const v291 = console.error(v290, err);
        v291;
    };
    const v293 = wmic.on('error', v292);
    v293;
    const v336 = function (code) {
        stdout = stdout.trim();
        stderr = stderr.trim();
        const v294 = !stdout;
        const v295 = code !== 0;
        const v296 = v294 || v295;
        if (v296) {
            const v297 = new Date();
            const v298 = v297.toString();
            const v299 = os.EOL;
            var error = format('%s Wmic errored, please open an issue on https://github.com/soyuka/pidusage with this message.%s', v298, v299);
            const v300 = os.EOL;
            const v301 = os.EOL;
            const v302 = os.release();
            const v303 = os.EOL;
            const v304 = os.type();
            const v305 = os.EOL;
            error += format('Command was "wmic %s" %s System informations: %s - release: %s %s - type %s %s', args, v300, v301, v302, v303, v304, v305);
            const v306 = format('Wmic reported the following error: %s.', stderr);
            let v307;
            if (stderr) {
                v307 = v306;
            } else {
                v307 = 'Wmic reported no errors (stderr empty).';
            }
            stderr = error + v307;
            const v308 = os.EOL;
            const v309 = os.EOL;
            stderr = format('%s%s%sWmic exited with code %d.', v308, stderr, v309, code);
            const v310 = os.EOL;
            let v311;
            if (stdout) {
                v311 = stdout;
            } else {
                v311 = 'empty';
            }
            stderr = format('%s%sStdout was %s', stderr, v310, v311);
            const v312 = new Error(stderr, null);
            const v313 = done(v312);
            return v313;
        }
        const v314 = os.EOL;
        stdout = stdout.split(v314);
        var stats = {};
        stats.cpu = 0;
        stats.workingsetsize = 0;
        const v327 = function (line) {
            const v315 = line.indexOf('PercentProcessorTime');
            const v316 = v315 === 0;
            if (v316) {
                const v317 = line.split('=');
                const v318 = v317[1];
                const v319 = v318.trim();
                const v320 = +v319;
                stats.cpu = v320;
            } else {
                const v321 = line.indexOf('WorkingSetPeak');
                const v322 = v321 === 0;
                if (v322) {
                    const v323 = line.split('=');
                    const v324 = v323[1];
                    const v325 = v324.trim();
                    const v326 = +v325;
                    stats.workingsetsize = v326;
                }
            }
        };
        const v328 = stdout.forEach(v327);
        v328;
        const v329 = self.history;
        v329[pid] = stats;
        const v330 = self.history;
        const v331 = v330[pid];
        v331.uptime = uptime;
        const v332 = stats.cpu;
        const v333 = stats.workingsetsize;
        const v334 = {
            cpu: v332,
            memory: v333
        };
        const v335 = done(null, v334);
        return v335;
    };
    const v337 = wmic.on('close', v336);
    v337;
    const v338 = wmic.stdin;
    const v339 = v338.end();
    v339;
};
var stats = {};
stats.history = v176;
stats.cpu = null;
stats.proc = v194;
stats.proc_calc = v255;
stats.ps = v274;
stats.win = v340;
module.exports = stats;
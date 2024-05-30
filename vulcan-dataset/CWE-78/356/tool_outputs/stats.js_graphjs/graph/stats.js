var os = require('os');
var fs = require('fs');
var p = require('path');
const v176 = require('child_process');
var exec = v176.exec;
const v177 = require('child_process');
var spawn = v177.spawn;
var helpers = require('./helpers');
const v178 = require('util');
var format = v178.format;
const v179 = {};
const v197 = function (pid, options, done) {
    var self = this;
    const v180 = this.cpu;
    const v181 = v180 !== null;
    if (v181) {
        const v191 = function (err, uptime) {
            if (err) {
                const v182 = done(err, null);
                return v182;
            }
            const v183 = uptime === undefined;
            if (v183) {
                const v184 = console.error('[pidusage] We couldn\'t find uptime from /proc/uptime');
                v184;
                const v186 = os.uptime();
                v185.uptime = v186;
            } else {
                const v187 = self.cpu;
                const v188 = uptime.split(' ');
                const v189 = v188[0];
                v187.uptime = v189;
            }
            const v190 = self.proc_calc(pid, options, done);
            return v190;
        };
        const v192 = fs.readFile('/proc/uptime', 'utf8', v191);
        v192;
    } else {
        const v195 = function (err, cpu) {
            if (err) {
                const v193 = done(err, null);
                return v193;
            }
            self.cpu = cpu;
            const v194 = self.proc_calc(pid, options, done);
            return v194;
        };
        const v196 = helpers.cpu(v195);
        v196;
    }
};
const v258 = function (pid, options, done) {
    let history;
    const v198 = this.history;
    const v199 = v198[pid];
    const v200 = this.history;
    const v201 = v200[pid];
    const v202 = {};
    if (v199) {
        history = v201;
    } else {
        history = v202;
    }
    var cpu = this.cpu;
    var self = this;
    const v203 = '' + pid;
    const v204 = p.join('/proc', v203, 'stat');
    const v256 = function (err, infos) {
        if (err) {
            const v205 = done(err, null);
            return v205;
        }
        var index = infos.lastIndexOf(')');
        const v206 = index + 2;
        const v207 = infos.substr(v206);
        infos = v207.split(' ');
        const v208 = infos[11];
        const v209 = parseFloat(v208);
        const v210 = infos[12];
        const v211 = parseFloat(v210);
        const v212 = infos[13];
        const v213 = parseFloat(v212);
        const v214 = infos[14];
        const v215 = parseFloat(v214);
        const v216 = infos[19];
        const v217 = parseFloat(v216);
        const v218 = cpu.clock_tick;
        const v219 = v217 / v218;
        const v220 = infos[21];
        const v221 = parseFloat(v220);
        var stat = {};
        stat.utime = v209;
        stat.stime = v211;
        stat.cutime = v213;
        stat.cstime = v215;
        stat.start = v219;
        stat.rss = v221;
        let childrens;
        const v222 = options.childrens;
        const v223 = stat.cutime;
        const v224 = stat.cstime;
        const v225 = v223 + v224;
        if (v222) {
            childrens = v225;
        } else {
            childrens = 0;
        }
        const v226 = stat.stime;
        const v227 = history.stime;
        const v228 = v227 || 0;
        const v229 = v226 - v228;
        const v230 = stat.utime;
        const v231 = v229 + v230;
        const v232 = history.utime;
        const v233 = v232 || 0;
        const v234 = v231 - v233;
        var total = v234 + childrens;
        const v235 = cpu.clock_tick;
        total = total / v235;
        let seconds;
        const v236 = history.uptime;
        const v237 = v236 !== undefined;
        const v238 = cpu.uptime;
        const v239 = history.uptime;
        const v240 = v238 - v239;
        const v241 = stat.start;
        const v242 = cpu.uptime;
        const v243 = v241 - v242;
        if (v237) {
            seconds = v240;
        } else {
            seconds = v243;
        }
        seconds = Math.abs(seconds);
        const v244 = seconds === 0;
        if (v244) {
            seconds = 1;
        } else {
            seconds = seconds;
        }
        const v245 = self.history;
        v245[pid] = stat;
        const v246 = self.history;
        const v247 = v246[pid];
        const v248 = cpu.uptime;
        v247.uptime = v248;
        const v249 = total / seconds;
        const v250 = v249 * 100;
        const v251 = stat.rss;
        const v252 = cpu.pagesize;
        const v253 = v251 * v252;
        const v254 = {
            cpu: v250,
            memory: v253
        };
        const v255 = done(null, v254);
        return v255;
    };
    const v257 = fs.readFile(v204, 'utf8', v256);
    v257;
};
const v331 = function (pid, options, done) {
    let history;
    const v259 = this.history;
    const v260 = v259[pid];
    const v261 = this.history;
    const v262 = v261[pid];
    const v263 = {};
    if (v260) {
        history = v262;
    } else {
        history = v263;
    }
    const v264 = 'PROCESS ' + pid;
    var args = v264 + ' get workingsetsize,usermodetime,kernelmodetime';
    const v265 = args.split(' ');
    const v266 = { detached: true };
    var wmic = spawn('wmic', v265, v266);
    var stdout = '';
    var stderr = '';
    var self = this;
    var uptime = os.uptime();
    const v267 = wmic.stdout;
    const v268 = function (d) {
        stdout += d.toString();
    };
    const v269 = v267.on('data', v268);
    v269;
    const v270 = wmic.stderr;
    const v271 = function (d) {
        stderr += d.toString();
    };
    const v272 = v270.on('data', v271);
    v272;
    const v276 = function (err) {
        const v273 = '[pidusage] Command "wmic ' + args;
        const v274 = v273 + '" failed with error %s';
        const v275 = console.error(v274, err);
        v275;
    };
    const v277 = wmic.on('error', v276);
    v277;
    const v327 = function (code) {
        stdout = stdout.trim();
        stderr = stderr.trim();
        const v278 = !stdout;
        const v279 = code !== 0;
        const v280 = v278 || v279;
        if (v280) {
            const v281 = new Date();
            const v282 = v281.toString();
            const v283 = os.EOL;
            var error = format('%s Wmic errored, please open an issue on https://github.com/soyuka/pidusage with this message.%s', v282, v283);
            const v284 = os.EOL;
            const v285 = os.EOL;
            const v286 = os.release();
            const v287 = os.EOL;
            const v288 = os.type();
            const v289 = os.EOL;
            error += format('Command was "wmic %s" %s System informations: %s - release: %s %s - type %s %s', args, v284, v285, v286, v287, v288, v289);
            const v290 = format('Wmic reported the following error: %s.', stderr);
            let v291;
            if (stderr) {
                v291 = v290;
            } else {
                v291 = 'Wmic reported no errors (stderr empty).';
            }
            stderr = error + v291;
            const v292 = os.EOL;
            const v293 = os.EOL;
            stderr = format('%s%s%sWmic exited with code %d.', v292, stderr, v293, code);
            const v294 = os.EOL;
            let v295;
            if (stdout) {
                v295 = stdout;
            } else {
                v295 = 'empty';
            }
            stderr = format('%s%sStdout was %s', stderr, v294, v295);
            const v296 = new Error(stderr, null);
            const v297 = done(v296);
            return v297;
        }
        const v298 = os.EOL;
        const v299 = stdout.split(v298);
        const v300 = v299[1];
        const v301 = v300.replace(/\s\s+/g, ' ');
        stdout = v301.split(' ');
        const v302 = stdout[0];
        const v303 = parseFloat(v302);
        const v304 = stdout[1];
        const v305 = parseFloat(v304);
        var stats = {};
        stats.kernelmodetime = v303;
        stats.usermodetime = v305;
        const v306 = stdout[2];
        var workingsetsize = parseFloat(v306);
        const v307 = stats.kernelmodetime;
        const v308 = history.kernelmodetime;
        const v309 = v308 || 0;
        const v310 = v307 - v309;
        const v311 = stats.usermodetime;
        const v312 = v310 + v311;
        const v313 = history.usermodetime;
        const v314 = v313 || 0;
        var total = v312 - v314;
        total = total / 10000000;
        let seconds;
        const v315 = history.uptime;
        const v316 = v315 !== undefined;
        const v317 = history.uptime;
        const v318 = uptime - v317;
        if (v316) {
            seconds = v318;
        } else {
            seconds = 0;
        }
        seconds = Math.abs(seconds);
        const v319 = seconds === 0;
        if (v319) {
            seconds = 1;
        } else {
            seconds = seconds;
        }
        const v320 = self.history;
        v320[pid] = stats;
        const v321 = self.history;
        const v322 = v321[pid];
        v322.uptime = uptime;
        const v323 = total / seconds;
        const v324 = v323 * 100;
        const v325 = {
            cpu: v324,
            memory: workingsetsize
        };
        const v326 = done(null, v325);
        return v326;
    };
    const v328 = wmic.on('close', v327);
    v328;
    const v329 = wmic.stdin;
    const v330 = v329.end();
    v330;
};
const v350 = function (pid, options, done) {
    var cmd = 'ps -o pcpu,rss -p ';
    const v332 = os.platform();
    const v333 = v332 == 'aix';
    if (v333) {
        cmd = 'ps -o pcpu,rssize -p ';
    }
    const v334 = cmd + pid;
    const v348 = function (err, stdout, stderr) {
        if (err) {
            const v335 = done(err, null);
            return v335;
        }
        const v336 = os.EOL;
        const v337 = stdout.split(v336);
        stdout = v337[1];
        const v338 = stdout.replace(/^\s+/, '');
        const v339 = v338.replace(/\s\s+/g, ' ');
        stdout = v339.split(' ');
        const v340 = stdout[0];
        const v341 = v340.replace(',', '.');
        const v342 = parseFloat(v341);
        const v343 = stdout[1];
        const v344 = parseFloat(v343);
        const v345 = v344 * 1024;
        const v346 = {
            cpu: v342,
            memory: v345
        };
        const v347 = done(null, v346);
        return v347;
    };
    const v349 = exec(v334, v348);
    v349;
};
var stats = {};
stats.history = v179;
stats.cpu = null;
stats.proc = v197;
stats.proc_calc = v258;
stats.win = v331;
stats.ps = v350;
module.exports = stats;
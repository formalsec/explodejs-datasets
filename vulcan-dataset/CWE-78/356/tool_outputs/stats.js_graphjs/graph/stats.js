var os = require('os');
var fs = require('fs');
var p = require('path');
const v178 = require('child_process');
var exec = v178.exec;
const v179 = require('child_process');
var spawn = v179.spawn;
const v181 = cb => {
    const v180 = cb('', 'cpu');
    return v180;
};
var helpers = {};
helpers.cpu = v181;
const v182 = require('util');
var format = v182.format;
const v183 = {};
const v201 = function (pid, options, done) {
    var self = this;
    const v184 = this.cpu;
    const v185 = v184 !== null;
    if (v185) {
        const v195 = function (err, uptime) {
            if (err) {
                const v186 = done(err, null);
                return v186;
            }
            const v187 = uptime === undefined;
            if (v187) {
                const v188 = console.error('[pidusage] We couldn\'t find uptime from /proc/uptime');
                v188;
                const v190 = os.uptime();
                v189.uptime = v190;
            } else {
                const v191 = self.cpu;
                const v192 = uptime.split(' ');
                const v193 = v192[0];
                v191.uptime = v193;
            }
            const v194 = self.proc_calc(pid, options, done);
            return v194;
        };
        const v196 = fs.readFile('/proc/uptime', 'utf8', v195);
        v196;
    } else {
        const v199 = function (err, cpu) {
            if (err) {
                const v197 = done(err, null);
                return v197;
            }
            self.cpu = cpu;
            const v198 = self.proc_calc(pid, options, done);
            return v198;
        };
        const v200 = helpers.cpu(v199);
        v200;
    }
};
const v262 = function (pid, options, done) {
    let history;
    const v202 = this.history;
    const v203 = v202[pid];
    const v204 = this.history;
    const v205 = v204[pid];
    const v206 = {};
    if (v203) {
        history = v205;
    } else {
        history = v206;
    }
    var cpu = this.cpu;
    var self = this;
    const v207 = '' + pid;
    const v208 = p.join('/proc', v207, 'stat');
    const v260 = function (err, infos) {
        if (err) {
            const v209 = done(err, null);
            return v209;
        }
        var index = infos.lastIndexOf(')');
        const v210 = index + 2;
        const v211 = infos.substr(v210);
        infos = v211.split(' ');
        const v212 = infos[11];
        const v213 = parseFloat(v212);
        const v214 = infos[12];
        const v215 = parseFloat(v214);
        const v216 = infos[13];
        const v217 = parseFloat(v216);
        const v218 = infos[14];
        const v219 = parseFloat(v218);
        const v220 = infos[19];
        const v221 = parseFloat(v220);
        const v222 = cpu.clock_tick;
        const v223 = v221 / v222;
        const v224 = infos[21];
        const v225 = parseFloat(v224);
        var stat = {};
        stat.utime = v213;
        stat.stime = v215;
        stat.cutime = v217;
        stat.cstime = v219;
        stat.start = v223;
        stat.rss = v225;
        let childrens;
        const v226 = options.childrens;
        const v227 = stat.cutime;
        const v228 = stat.cstime;
        const v229 = v227 + v228;
        if (v226) {
            childrens = v229;
        } else {
            childrens = 0;
        }
        const v230 = stat.stime;
        const v231 = history.stime;
        const v232 = v231 || 0;
        const v233 = v230 - v232;
        const v234 = stat.utime;
        const v235 = v233 + v234;
        const v236 = history.utime;
        const v237 = v236 || 0;
        const v238 = v235 - v237;
        var total = v238 + childrens;
        const v239 = cpu.clock_tick;
        total = total / v239;
        let seconds;
        const v240 = history.uptime;
        const v241 = v240 !== undefined;
        const v242 = cpu.uptime;
        const v243 = history.uptime;
        const v244 = v242 - v243;
        const v245 = stat.start;
        const v246 = cpu.uptime;
        const v247 = v245 - v246;
        if (v241) {
            seconds = v244;
        } else {
            seconds = v247;
        }
        seconds = Math.abs(seconds);
        const v248 = seconds === 0;
        if (v248) {
            seconds = 1;
        } else {
            seconds = seconds;
        }
        const v249 = self.history;
        v249[pid] = stat;
        const v250 = self.history;
        const v251 = v250[pid];
        const v252 = cpu.uptime;
        v251.uptime = v252;
        const v253 = total / seconds;
        const v254 = v253 * 100;
        const v255 = stat.rss;
        const v256 = cpu.pagesize;
        const v257 = v255 * v256;
        const v258 = {
            cpu: v254,
            memory: v257
        };
        const v259 = done(null, v258);
        return v259;
    };
    const v261 = fs.readFile(v208, 'utf8', v260);
    v261;
};
const v335 = function (pid, options, done) {
    let history;
    const v263 = this.history;
    const v264 = v263[pid];
    const v265 = this.history;
    const v266 = v265[pid];
    const v267 = {};
    if (v264) {
        history = v266;
    } else {
        history = v267;
    }
    const v268 = 'PROCESS ' + pid;
    var args = v268 + ' get workingsetsize,usermodetime,kernelmodetime';
    const v269 = args.split(' ');
    const v270 = { detached: true };
    var wmic = spawn('wmic', v269, v270);
    var stdout = '';
    var stderr = '';
    var self = this;
    var uptime = os.uptime();
    const v271 = wmic.stdout;
    const v272 = function (d) {
        stdout += d.toString();
    };
    const v273 = v271.on('data', v272);
    v273;
    const v274 = wmic.stderr;
    const v275 = function (d) {
        stderr += d.toString();
    };
    const v276 = v274.on('data', v275);
    v276;
    const v280 = function (err) {
        const v277 = '[pidusage] Command "wmic ' + args;
        const v278 = v277 + '" failed with error %s';
        const v279 = console.error(v278, err);
        v279;
    };
    const v281 = wmic.on('error', v280);
    v281;
    const v331 = function (code) {
        stdout = stdout.trim();
        stderr = stderr.trim();
        const v282 = !stdout;
        const v283 = code !== 0;
        const v284 = v282 || v283;
        if (v284) {
            const v285 = new Date();
            const v286 = v285.toString();
            const v287 = os.EOL;
            var error = format('%s Wmic errored, please open an issue on https://github.com/soyuka/pidusage with this message.%s', v286, v287);
            const v288 = os.EOL;
            const v289 = os.EOL;
            const v290 = os.release();
            const v291 = os.EOL;
            const v292 = os.type();
            const v293 = os.EOL;
            error += format('Command was "wmic %s" %s System informations: %s - release: %s %s - type %s %s', args, v288, v289, v290, v291, v292, v293);
            const v294 = format('Wmic reported the following error: %s.', stderr);
            let v295;
            if (stderr) {
                v295 = v294;
            } else {
                v295 = 'Wmic reported no errors (stderr empty).';
            }
            stderr = error + v295;
            const v296 = os.EOL;
            const v297 = os.EOL;
            stderr = format('%s%s%sWmic exited with code %d.', v296, stderr, v297, code);
            const v298 = os.EOL;
            let v299;
            if (stdout) {
                v299 = stdout;
            } else {
                v299 = 'empty';
            }
            stderr = format('%s%sStdout was %s', stderr, v298, v299);
            const v300 = new Error(stderr, null);
            const v301 = done(v300);
            return v301;
        }
        const v302 = os.EOL;
        const v303 = stdout.split(v302);
        const v304 = v303[1];
        const v305 = v304.replace(/\s\s+/g, ' ');
        stdout = v305.split(' ');
        const v306 = stdout[0];
        const v307 = parseFloat(v306);
        const v308 = stdout[1];
        const v309 = parseFloat(v308);
        var stats = {};
        stats.kernelmodetime = v307;
        stats.usermodetime = v309;
        const v310 = stdout[2];
        var workingsetsize = parseFloat(v310);
        const v311 = stats.kernelmodetime;
        const v312 = history.kernelmodetime;
        const v313 = v312 || 0;
        const v314 = v311 - v313;
        const v315 = stats.usermodetime;
        const v316 = v314 + v315;
        const v317 = history.usermodetime;
        const v318 = v317 || 0;
        var total = v316 - v318;
        total = total / 10000000;
        let seconds;
        const v319 = history.uptime;
        const v320 = v319 !== undefined;
        const v321 = history.uptime;
        const v322 = uptime - v321;
        if (v320) {
            seconds = v322;
        } else {
            seconds = 0;
        }
        seconds = Math.abs(seconds);
        const v323 = seconds === 0;
        if (v323) {
            seconds = 1;
        } else {
            seconds = seconds;
        }
        const v324 = self.history;
        v324[pid] = stats;
        const v325 = self.history;
        const v326 = v325[pid];
        v326.uptime = uptime;
        const v327 = total / seconds;
        const v328 = v327 * 100;
        const v329 = {
            cpu: v328,
            memory: workingsetsize
        };
        const v330 = done(null, v329);
        return v330;
    };
    const v332 = wmic.on('close', v331);
    v332;
    const v333 = wmic.stdin;
    const v334 = v333.end();
    v334;
};
const v354 = function (pid, options, done) {
    var cmd = 'ps -o pcpu,rss -p ';
    const v336 = os.platform();
    const v337 = v336 == 'aix';
    if (v337) {
        cmd = 'ps -o pcpu,rssize -p ';
    }
    const v338 = cmd + pid;
    const v352 = function (err, stdout, stderr) {
        if (err) {
            const v339 = done(err, null);
            return v339;
        }
        const v340 = os.EOL;
        const v341 = stdout.split(v340);
        stdout = v341[1];
        const v342 = stdout.replace(/^\s+/, '');
        const v343 = v342.replace(/\s\s+/g, ' ');
        stdout = v343.split(' ');
        const v344 = stdout[0];
        const v345 = v344.replace(',', '.');
        const v346 = parseFloat(v345);
        const v347 = stdout[1];
        const v348 = parseFloat(v347);
        const v349 = v348 * 1024;
        const v350 = {
            cpu: v346,
            memory: v349
        };
        const v351 = done(null, v350);
        return v351;
    };
    const v353 = exec(v338, v352);
    v353;
};
var stats = {};
stats.history = v183;
stats.cpu = null;
stats.proc = v201;
stats.proc_calc = v262;
stats.win = v335;
stats.ps = v354;
module.exports = stats;
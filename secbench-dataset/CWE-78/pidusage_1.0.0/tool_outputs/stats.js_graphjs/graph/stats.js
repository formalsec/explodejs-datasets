var os = require('os');
var fs = require('fs');
var p = require('path');
const v126 = require('child_process');
var exec = v126.exec;
const v127 = require('child_process');
var spawn = v127.spawn;
var helpers = require('./helpers');
const v128 = {};
const v146 = function (pid, options, done) {
    var self = this;
    const v129 = this.cpu;
    const v130 = v129 !== null;
    if (v130) {
        const v140 = function (err, uptime) {
            if (err) {
                const v131 = done(err, null);
                return v131;
            }
            const v132 = uptime === undefined;
            if (v132) {
                const v133 = console.error('We couldn\'t find uptime from /proc/uptime');
                v133;
                const v135 = os.uptime();
                v134.uptime = v135;
            } else {
                const v136 = self.cpu;
                const v137 = uptime.split(' ');
                const v138 = v137[0];
                v136.uptime = v138;
            }
            const v139 = self.proc_calc(pid, options, done);
            return v139;
        };
        const v141 = fs.readFile('/proc/uptime', 'utf8', v140);
        v141;
    } else {
        const v144 = function (err, cpu) {
            if (err) {
                const v142 = done(err, null);
                return v142;
            }
            self.cpu = cpu;
            const v143 = self.proc_calc(pid, options, done);
            return v143;
        };
        const v145 = helpers.cpu(v144);
        v145;
    }
};
const v211 = function (pid, options, done) {
    let history;
    const v147 = this.history;
    const v148 = v147[pid];
    const v149 = this.history;
    const v150 = v149[pid];
    const v151 = {};
    if (v148) {
        history = v150;
    } else {
        history = v151;
    }
    var cpu = this.cpu;
    var self = this;
    const v152 = '' + pid;
    const v153 = p.join('/proc', v152, 'stat');
    const v209 = function (err, infos) {
        if (err) {
            const v154 = done(err, null);
            return v154;
        }
        var index = infos.lastIndexOf(')');
        const v155 = index + 2;
        const v156 = infos.substr(v155);
        infos = v156.split(' ');
        const v157 = infos[11];
        const v158 = parseFloat(v157);
        const v159 = infos[12];
        const v160 = parseFloat(v159);
        const v161 = infos[13];
        const v162 = parseFloat(v161);
        const v163 = infos[14];
        const v164 = parseFloat(v163);
        const v165 = infos[19];
        const v166 = parseFloat(v165);
        const v167 = cpu.clock_tick;
        const v168 = v166 / v167;
        const v169 = infos[21];
        const v170 = parseFloat(v169);
        var stat = {};
        stat.utime = v158;
        stat.stime = v160;
        stat.cutime = v162;
        stat.cstime = v164;
        stat.start = v168;
        stat.rss = v170;
        let childrens;
        const v171 = options.childrens;
        const v172 = stat.cutime;
        const v173 = stat.cstime;
        const v174 = v172 + v173;
        if (v171) {
            childrens = v174;
        } else {
            childrens = 0;
        }
        var total = 0;
        const v175 = history.utime;
        if (v175) {
            const v176 = stat.stime;
            const v177 = history.stime;
            const v178 = v176 - v177;
            const v179 = stat.utime;
            const v180 = history.utime;
            const v181 = v179 - v180;
            const v182 = v178 + v181;
            total = v182 + childrens;
        } else {
            const v183 = stat.stime;
            const v184 = stat.utime;
            const v185 = v183 + v184;
            total = v185 + childrens;
        }
        const v186 = cpu.clock_tick;
        total = total / v186;
        let seconds;
        const v187 = history.uptime;
        const v188 = v187 !== undefined;
        const v189 = cpu.uptime;
        const v190 = history.uptime;
        const v191 = v189 - v190;
        const v192 = stat.start;
        const v193 = cpu.uptime;
        const v194 = v192 - v193;
        if (v188) {
            seconds = v191;
        } else {
            seconds = v194;
        }
        seconds = Math.abs(seconds);
        const v195 = seconds === 0;
        if (v195) {
            seconds = 0.1;
        } else {
            seconds = seconds;
        }
        const v196 = self.history;
        v196[pid] = stat;
        const v197 = self.history;
        const v198 = v197[pid];
        v198.seconds = seconds;
        const v199 = self.history;
        const v200 = v199[pid];
        const v201 = cpu.uptime;
        v200.uptime = v201;
        const v202 = total / seconds;
        const v203 = v202 * 100;
        const v204 = stat.rss;
        const v205 = cpu.pagesize;
        const v206 = v204 * v205;
        const v207 = {
            cpu: v203,
            memory: v206
        };
        const v208 = done(null, v207);
        return v208;
    };
    const v210 = fs.readFile(v153, 'utf8', v209);
    v210;
};
const v230 = function (pid, options, done) {
    var cmd = 'ps -o pcpu,rss -p ';
    const v212 = os.platform();
    const v213 = v212 == 'aix';
    if (v213) {
        cmd = 'ps -o pcpu,rssize -p ';
    }
    const v214 = cmd + pid;
    const v228 = function (err, stdout, stderr) {
        if (err) {
            const v215 = done(err, null);
            return v215;
        }
        const v216 = os.EOL;
        const v217 = stdout.split(v216);
        stdout = v217[1];
        const v218 = stdout.replace(/^\s+/, '');
        const v219 = v218.replace(/\s\s+/g, ' ');
        stdout = v219.split(' ');
        const v220 = stdout[0];
        const v221 = v220.replace(',', '.');
        const v222 = parseFloat(v221);
        const v223 = stdout[1];
        const v224 = parseFloat(v223);
        const v225 = v224 * 1024;
        const v226 = {
            cpu: v222,
            memory: v225
        };
        const v227 = done(null, v226);
        return v227;
    };
    const v229 = exec(v214, v228);
    v229;
};
const v250 = function (pid, options, done) {
    const v231 = 'wmic path Win32_PerfFormattedData_PerfProc_Process WHERE IDProcess=' + pid;
    var cmd = v231 + ' get PercentProcessorTime, WorkingSet';
    const v248 = function (err, stdout, stderr) {
        if (err) {
            const v232 = done(err, null);
            return v232;
        }
        stdout = stdout.trim();
        const v233 = !stdout;
        if (v233) {
            const v234 = pid + ' does not exist';
            const v235 = new Error(v234, null);
            const v236 = done(v235);
            return v236;
        }
        var lines = stdout.split(/\r?\r\n/);
        const v237 = lines[1];
        const v238 = v237.trim();
        var values = v238.split(/ +/);
        const v239 = values[0];
        var cpuPercent = parseFloat(v239);
        const v240 = values[1];
        var memUsage = parseFloat(v240);
        const v241 = isNaN(cpuPercent);
        const v242 = isNaN(memUsage);
        const v243 = v241 || v242;
        if (v243) {
            const v244 = new Error('Invalid cpu or memory occupation');
            const v245 = done(v244, null);
            return v245;
        }
        const v246 = {
            cpu: cpuPercent,
            memory: memUsage
        };
        const v247 = done(null, v246);
        return v247;
    };
    const v249 = exec(cmd, v248);
    v249;
};
var stats = {};
stats.history = v128;
stats.cpu = null;
stats.proc = v146;
stats.proc_calc = v211;
stats.ps = v230;
stats.win = v250;
module.exports = stats;
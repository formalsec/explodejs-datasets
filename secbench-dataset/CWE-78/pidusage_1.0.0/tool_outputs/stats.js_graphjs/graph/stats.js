var os = require('os');
var fs = require('fs');
var p = require('path');
const v127 = require('child_process');
var exec = v127.exec;
const v128 = require('child_process');
var spawn = v128.spawn;
var helpers = cb => {
    const v129 = cb('', 'intel');
    return v129;
};
const v130 = {};
const v148 = function (pid, options, done) {
    var self = this;
    const v131 = this.cpu;
    const v132 = v131 !== null;
    if (v132) {
        const v142 = function (err, uptime) {
            if (err) {
                const v133 = done(err, null);
                return v133;
            }
            const v134 = uptime === undefined;
            if (v134) {
                const v135 = console.error('We couldn\'t find uptime from /proc/uptime');
                v135;
                const v137 = os.uptime();
                v136.uptime = v137;
            } else {
                const v138 = self.cpu;
                const v139 = uptime.split(' ');
                const v140 = v139[0];
                v138.uptime = v140;
            }
            const v141 = self.proc_calc(pid, options, done);
            return v141;
        };
        const v143 = fs.readFile('/proc/uptime', 'utf8', v142);
        v143;
    } else {
        const v146 = function (err, cpu) {
            if (err) {
                const v144 = done(err, null);
                return v144;
            }
            self.cpu = cpu;
            const v145 = self.proc_calc(pid, options, done);
            return v145;
        };
        const v147 = helpers.cpu(v146);
        v147;
    }
};
const v213 = function (pid, options, done) {
    let history;
    const v149 = this.history;
    const v150 = v149[pid];
    const v151 = this.history;
    const v152 = v151[pid];
    const v153 = {};
    if (v150) {
        history = v152;
    } else {
        history = v153;
    }
    var cpu = this.cpu;
    var self = this;
    const v154 = '' + pid;
    const v155 = p.join('/proc', v154, 'stat');
    const v211 = function (err, infos) {
        if (err) {
            const v156 = done(err, null);
            return v156;
        }
        var index = infos.lastIndexOf(')');
        const v157 = index + 2;
        const v158 = infos.substr(v157);
        infos = v158.split(' ');
        const v159 = infos[11];
        const v160 = parseFloat(v159);
        const v161 = infos[12];
        const v162 = parseFloat(v161);
        const v163 = infos[13];
        const v164 = parseFloat(v163);
        const v165 = infos[14];
        const v166 = parseFloat(v165);
        const v167 = infos[19];
        const v168 = parseFloat(v167);
        const v169 = cpu.clock_tick;
        const v170 = v168 / v169;
        const v171 = infos[21];
        const v172 = parseFloat(v171);
        var stat = {};
        stat.utime = v160;
        stat.stime = v162;
        stat.cutime = v164;
        stat.cstime = v166;
        stat.start = v170;
        stat.rss = v172;
        let childrens;
        const v173 = options.childrens;
        const v174 = stat.cutime;
        const v175 = stat.cstime;
        const v176 = v174 + v175;
        if (v173) {
            childrens = v176;
        } else {
            childrens = 0;
        }
        var total = 0;
        const v177 = history.utime;
        if (v177) {
            const v178 = stat.stime;
            const v179 = history.stime;
            const v180 = v178 - v179;
            const v181 = stat.utime;
            const v182 = history.utime;
            const v183 = v181 - v182;
            const v184 = v180 + v183;
            total = v184 + childrens;
        } else {
            const v185 = stat.stime;
            const v186 = stat.utime;
            const v187 = v185 + v186;
            total = v187 + childrens;
        }
        const v188 = cpu.clock_tick;
        total = total / v188;
        let seconds;
        const v189 = history.uptime;
        const v190 = v189 !== undefined;
        const v191 = cpu.uptime;
        const v192 = history.uptime;
        const v193 = v191 - v192;
        const v194 = stat.start;
        const v195 = cpu.uptime;
        const v196 = v194 - v195;
        if (v190) {
            seconds = v193;
        } else {
            seconds = v196;
        }
        seconds = Math.abs(seconds);
        const v197 = seconds === 0;
        if (v197) {
            seconds = 0.1;
        } else {
            seconds = seconds;
        }
        const v198 = self.history;
        v198[pid] = stat;
        const v199 = self.history;
        const v200 = v199[pid];
        v200.seconds = seconds;
        const v201 = self.history;
        const v202 = v201[pid];
        const v203 = cpu.uptime;
        v202.uptime = v203;
        const v204 = total / seconds;
        const v205 = v204 * 100;
        const v206 = stat.rss;
        const v207 = cpu.pagesize;
        const v208 = v206 * v207;
        const v209 = {
            cpu: v205,
            memory: v208
        };
        const v210 = done(null, v209);
        return v210;
    };
    const v212 = fs.readFile(v155, 'utf8', v211);
    v212;
};
const v232 = function (pid, options, done) {
    var cmd = 'ps -o pcpu,rss -p ';
    const v214 = os.platform();
    const v215 = v214 == 'aix';
    if (v215) {
        cmd = 'ps -o pcpu,rssize -p ';
    }
    const v216 = cmd + pid;
    const v230 = function (err, stdout, stderr) {
        if (err) {
            const v217 = done(err, null);
            return v217;
        }
        const v218 = os.EOL;
        const v219 = stdout.split(v218);
        stdout = v219[1];
        const v220 = stdout.replace(/^\s+/, '');
        const v221 = v220.replace(/\s\s+/g, ' ');
        stdout = v221.split(' ');
        const v222 = stdout[0];
        const v223 = v222.replace(',', '.');
        const v224 = parseFloat(v223);
        const v225 = stdout[1];
        const v226 = parseFloat(v225);
        const v227 = v226 * 1024;
        const v228 = {
            cpu: v224,
            memory: v227
        };
        const v229 = done(null, v228);
        return v229;
    };
    const v231 = exec(v216, v230);
    v231;
};
const v252 = function (pid, options, done) {
    const v233 = 'wmic path Win32_PerfFormattedData_PerfProc_Process WHERE IDProcess=' + pid;
    var cmd = v233 + ' get PercentProcessorTime, WorkingSet';
    const v250 = function (err, stdout, stderr) {
        if (err) {
            const v234 = done(err, null);
            return v234;
        }
        stdout = stdout.trim();
        const v235 = !stdout;
        if (v235) {
            const v236 = pid + ' does not exist';
            const v237 = new Error(v236, null);
            const v238 = done(v237);
            return v238;
        }
        var lines = stdout.split(/\r?\r\n/);
        const v239 = lines[1];
        const v240 = v239.trim();
        var values = v240.split(/ +/);
        const v241 = values[0];
        var cpuPercent = parseFloat(v241);
        const v242 = values[1];
        var memUsage = parseFloat(v242);
        const v243 = isNaN(cpuPercent);
        const v244 = isNaN(memUsage);
        const v245 = v243 || v244;
        if (v245) {
            const v246 = new Error('Invalid cpu or memory occupation');
            const v247 = done(v246, null);
            return v247;
        }
        const v248 = {
            cpu: cpuPercent,
            memory: memUsage
        };
        const v249 = done(null, v248);
        return v249;
    };
    const v251 = exec(cmd, v250);
    v251;
};
var stats = {};
stats.history = v130;
stats.cpu = null;
stats.proc = v148;
stats.proc_calc = v213;
stats.ps = v232;
stats.win = v252;
module.exports = stats;
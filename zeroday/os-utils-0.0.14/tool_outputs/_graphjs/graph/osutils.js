var _os = require('os');
const v125 = function () {
    const v124 = process.platform;
    return v124;
};
exports.platform = v125;
const v128 = function () {
    const v126 = _os.cpus();
    const v127 = v126.length;
    return v127;
};
exports.cpuCount = v128;
const v130 = function () {
    const v129 = _os.uptime();
    return v129;
};
exports.sysUptime = v130;
const v132 = function () {
    const v131 = process.uptime();
    return v131;
};
exports.processUptime = v132;
const v136 = function () {
    const v133 = _os.freemem();
    const v134 = 1024 * 1024;
    const v135 = v133 / v134;
    return v135;
};
exports.freemem = v136;
const v140 = function () {
    const v137 = _os.totalmem();
    const v138 = 1024 * 1024;
    const v139 = v137 / v138;
    return v139;
};
exports.totalmem = v140;
const v144 = function () {
    const v141 = _os.freemem();
    const v142 = _os.totalmem();
    const v143 = v141 / v142;
    return v143;
};
exports.freememPercentage = v144;
const v157 = function (callback) {
    const v145 = require('child_process');
    const v155 = function (error, stdout, stderr) {
        var lines = stdout.split('\n');
        const v146 = lines[1];
        var str_mem_info = v146.replace(/[\s\n\r]+/g, ' ');
        var mem_info = str_mem_info.split(' ');
        const v147 = mem_info[1];
        total_mem = parseFloat(v147);
        const v148 = mem_info[3];
        free_mem = parseFloat(v148);
        const v149 = mem_info[5];
        buffers_mem = parseFloat(v149);
        const v150 = mem_info[6];
        cached_mem = parseFloat(v150);
        const v151 = free_mem + buffers_mem;
        const v152 = v151 + cached_mem;
        used_mem = total_mem - v152;
        const v153 = used_mem - 2;
        const v154 = callback(v153);
        v154;
    };
    const v156 = v145.exec('free -m', v155);
    v156;
};
exports.freeCommand = v157;
const v175 = function (callback) {
    const v158 = require('child_process');
    const v173 = function (error, stdout, stderr) {
        var total = 0;
        var used = 0;
        var free = 0;
        var lines = stdout.split('\n');
        const v159 = lines[1];
        var str_disk_info = v159.replace(/[\s\n\r]+/g, ' ');
        var disk_info = str_disk_info.split(' ');
        const v160 = disk_info[1];
        const v161 = v160 * 1024;
        const v162 = Math.pow(1024, 2);
        const v163 = v161 / v162;
        total = Math.ceil(v163);
        const v164 = disk_info[2];
        const v165 = v164 * 1024;
        const v166 = Math.pow(1024, 2);
        const v167 = v165 / v166;
        used = Math.ceil(v167);
        const v168 = disk_info[3];
        const v169 = v168 * 1024;
        const v170 = Math.pow(1024, 2);
        const v171 = v169 / v170;
        free = Math.ceil(v171);
        const v172 = callback(total, free, used);
        v172;
    };
    const v174 = v158.exec('df -k', v173);
    v174;
};
exports.harddrive = v175;
const v202 = function (nProcess, callback) {
    const v176 = typeof nProcess;
    const v177 = v176 === 'function';
    if (v177) {
        callback = nProcess;
        nProcess = 0;
    }
    command = 'ps -eo pcpu,pmem,time,args | sort -k 1 -r | head -n' + 10;
    const v178 = nProcess > 0;
    if (v178) {
        const v179 = nProcess + 1;
        command = 'ps -eo pcpu,pmem,time,args | sort -k 1 -r | head -n' + v179;
    }
    const v180 = require('child_process');
    const v200 = function (error, stdout, stderr) {
        var that = this;
        var lines = stdout.split('\n');
        const v181 = lines.shift();
        v181;
        const v182 = lines.pop();
        v182;
        var result = '';
        const v197 = function (_item, _i) {
            var _str = _item.replace(/[\s\n\r]+/g, ' ');
            _str = _str.split(' ');
            const v183 = _str[1];
            const v184 = v183 + ' ';
            const v185 = _str[2];
            const v186 = v184 + v185;
            const v187 = v186 + ' ';
            const v188 = _str[3];
            const v189 = v187 + v188;
            const v190 = v189 + ' ';
            const v191 = _str[4];
            const v192 = _str[4];
            const v193 = v192.length;
            const v194 = v193 - 25;
            const v195 = v191.substring(v194);
            const v196 = v190 + v195;
            result += v196 + '\n';
        };
        const v198 = lines.forEach(v197);
        v198;
        const v199 = callback(result);
        v199;
    };
    const v201 = v180.exec(command, v200);
    v201;
};
exports.getProcesses = v202;
const v213 = function () {
    var loads = _os.loadavg();
    const v203 = loads[0];
    const v204 = v203.toFixed(4);
    const v205 = v204 + ',';
    const v206 = loads[1];
    const v207 = v206.toFixed(4);
    const v208 = v205 + v207;
    const v209 = v208 + ',';
    const v210 = loads[2];
    const v211 = v210.toFixed(4);
    const v212 = v209 + v211;
    return v212;
};
exports.allLoadavg = v213;
const v222 = function (_time) {
    const v214 = _time === undefined;
    const v215 = _time !== 5;
    const v216 = _time !== 15;
    const v217 = v215 && v216;
    const v218 = v214 || v217;
    if (v218) {
        _time = 1;
    }
    var loads = _os.loadavg();
    var v = 0;
    const v219 = _time == 1;
    if (v219) {
        v = loads[0];
    }
    const v220 = _time == 5;
    if (v220) {
        v = loads[1];
    }
    const v221 = _time == 15;
    if (v221) {
        v = loads[2];
    }
    return v;
};
exports.loadavg = v222;
const v224 = function (callback) {
    const v223 = getCPUUsage(callback, true);
    v223;
};
exports.cpuFree = v224;
const v226 = function (callback) {
    const v225 = getCPUUsage(callback, false);
    v225;
};
exports.cpuUsage = v226;
const getCPUUsage = function (callback, free) {
    var stats1 = getCPUInfo();
    var startIdle = stats1.idle;
    var startTotal = stats1.total;
    const v231 = function () {
        var stats2 = getCPUInfo();
        var endIdle = stats2.idle;
        var endTotal = stats2.total;
        var idle = endIdle - startIdle;
        var total = endTotal - startTotal;
        var perc = idle / total;
        const v227 = free === true;
        if (v227) {
            const v228 = callback(perc);
            v228;
        } else {
            const v229 = 1 - perc;
            const v230 = callback(v229);
            v230;
        }
    };
    const v232 = setTimeout(v231, 1000);
    v232;
};
const getCPUInfo = function (callback) {
    var cpus = _os.cpus();
    var user = 0;
    var nice = 0;
    var sys = 0;
    var idle = 0;
    var irq = 0;
    var total = 0;
    let cpu;
    for (cpu in cpus) {
        const v233 = cpus[cpu];
        const v234 = v233.times;
        user += v234.user;
        const v235 = cpus[cpu];
        const v236 = v235.times;
        nice += v236.nice;
        const v237 = cpus[cpu];
        const v238 = v237.times;
        sys += v238.sys;
        const v239 = cpus[cpu];
        const v240 = v239.times;
        irq += v240.irq;
        const v241 = cpus[cpu];
        const v242 = v241.times;
        idle += v242.idle;
    }
    const v243 = user + nice;
    const v244 = v243 + sys;
    const v245 = v244 + idle;
    var total = v245 + irq;
    const v246 = {};
    v246['idle'] = idle;
    v246['total'] = total;
    return v246;
};
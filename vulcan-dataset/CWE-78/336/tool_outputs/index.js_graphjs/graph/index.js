const v229 = function () {
    const v116 = require('os');
    var platform = v116.platform();
    var path = require('path');
    const v117 = require('child_process');
    var exec = v117.exec;
    const v118 = require('child_process');
    var execFile = v118.execFile;
    let wmic;
    const v119 = platform === 'win32';
    const v120 = process.env;
    const v121 = v120.SystemRoot;
    const v122 = path.join(v121, 'System32', 'wbem', 'wmic.exe');
    if (v119) {
        wmic = v122;
    } else {
        wmic = null;
    }
    var emptyFn = function () {
    };
    var findLoad;
    const checkPlatform = function (cb) {
        const v123 = platform !== 'win32';
        if (v123) {
            const v124 = isFunction(cb);
            if (v124) {
                const v125 = new Error('windows-cpu> [ERROR] This module only works on Windows platforms.');
                const v126 = cb(v125);
                v126;
            }
            return false;
        }
        return true;
    };
    const isFunction = function (fn) {
        var getType = {};
        const v127 = getType.toString;
        const v128 = v127.call(fn);
        const v129 = v128 === '[object Function]';
        const v130 = fn && v129;
        return v130;
    };
    const findLoad = function (arg, cb) {
        const v131 = isFunction(cb);
        const v132 = !v131;
        if (v132) {
            cb = emptyFn;
        }
        const v133 = checkPlatform(cb);
        const v134 = !v133;
        if (v134) {
            return;
        }
        var cmd = 'wmic path Win32_PerfFormattedData_PerfProc_Process get Name,PercentProcessorTime,IDProcess | findstr /i /c:' + arg;
        const v161 = function (error, res, stderr) {
            const v135 = error !== null;
            const v136 = v135 || stderr;
            if (v136) {
                const v137 = error || stderr;
                const v138 = cb(v137);
                return v138;
            }
            const v139 = !res;
            if (v139) {
                const v140 = 'Cannot find results for provided arg: ' + arg;
                const v141 = [];
                const v142 = {
                    load: 0,
                    results: v141
                };
                const v143 = cb(v140, v142);
                return v143;
            }
            const v144 = res.replace(/[^\S\n]+/g, ':');
            const v145 = v144.replace(/\:\s/g, '|');
            const v146 = v145.split('|');
            const v149 = function (v) {
                const v147 = !v;
                const v148 = !v147;
                return v148;
            };
            const v150 = v146.filter(v149);
            const v157 = function (v) {
                var data = v.split(':');
                const v151 = data[0];
                const v152 = +v151;
                const v153 = data[1];
                const v154 = data[2];
                const v155 = +v154;
                const v156 = {};
                v156.pid = v152;
                v156.process = v153;
                v156.load = v155;
                return v156;
            };
            var found = v150.map(v157);
            var totalLoad = 0;
            const v158 = function (obj) {
                totalLoad += obj.load;
            };
            const v159 = found.forEach(v158);
            v159;
            var output = {};
            output.load = totalLoad;
            output.found = found;
            const v160 = cb(null, output);
            v160;
        };
        const v162 = exec(cmd, v161);
        v162;
    };
    exports.findLoad = findLoad;
    findLoad = exports.findLoad;
    const totalLoad = function (cb) {
        const v163 = isFunction(cb);
        const v164 = !v163;
        if (v164) {
            cb = emptyFn;
        }
        const v165 = checkPlatform(cb);
        const v166 = !v165;
        if (v166) {
            return;
        }
        const v167 = [
            'cpu',
            'get',
            'loadpercentage'
        ];
        const v179 = function (error, res, stderr) {
            const v168 = error !== null;
            const v169 = v168 || stderr;
            if (v169) {
                const v170 = error || stderr;
                const v171 = cb(v170);
                return v171;
            }
            const v172 = res.match(/\d+/g);
            const v173 = [];
            const v174 = v172 || v173;
            const v177 = function (x) {
                const v175 = x.trim();
                const v176 = +v175;
                return v176;
            };
            var cpus = v174.map(v177);
            const v178 = cb(null, cpus);
            v178;
        };
        const v180 = execFile(wmic, v167, v179);
        v180;
    };
    exports.totalLoad = totalLoad;
    const nodeLoad = function (cb) {
        const v181 = findLoad('node', cb);
        v181;
    };
    exports.nodeLoad = nodeLoad;
    const processLoad = function (cb) {
        const v182 = process.pid;
        const v183 = findLoad(v182, cb);
        v183;
    };
    exports.processLoad = processLoad;
    const cpuInfo = function (cb) {
        const v184 = isFunction(cb);
        const v185 = !v184;
        if (v185) {
            cb = emptyFn;
        }
        const v186 = checkPlatform(cb);
        const v187 = !v186;
        if (v187) {
            return;
        }
        const v188 = [
            'cpu',
            'get',
            'Name'
        ];
        const v198 = function (error, res, stderr) {
            const v189 = error !== null;
            const v190 = v189 || stderr;
            if (v190) {
                const v191 = error || stderr;
                const v192 = cb(v191);
                return v192;
            }
            const v193 = res.match(/[^\r\n]+/g);
            const v195 = function (v) {
                const v194 = v.trim();
                return v194;
            };
            var cpus = v193.map(v195);
            const v196 = cpus.shift();
            v196;
            const v197 = cb(null, cpus);
            v197;
        };
        const v199 = execFile(wmic, v188, v198);
        v199;
    };
    exports.cpuInfo = cpuInfo;
    const totalMemoryUsage = function (cb) {
        const v200 = isFunction(cb);
        const v201 = !v200;
        if (v201) {
            cb = emptyFn;
        }
        const v202 = checkPlatform(cb);
        const v203 = !v202;
        if (v203) {
            return;
        }
        var cmd = 'tasklist /FO csv /nh';
        const v227 = function (error, res, stderr) {
            const v204 = error !== null;
            const v205 = v204 || stderr;
            if (v205) {
                const v206 = error || stderr;
                const v207 = cb(v206);
                return v207;
            }
            var results = {};
            results.usageInKb = 0;
            results.usageInMb = 0;
            results.usageInGb = 0;
            const v208 = res.match(/[^\r\n]+/g);
            const v219 = function (v) {
                const v209 = v.split('","');
                const v210 = v209[4];
                const v211 = v210.replace(/[^\d]/g, '');
                const v212 = +v211;
                var amt = v212;
                const v213 = isNaN(amt);
                const v214 = !v213;
                const v215 = typeof amt;
                const v216 = v215 === 'number';
                const v217 = v214 && v216;
                let v218;
                if (v217) {
                    v218 = amt;
                } else {
                    v218 = 0;
                }
                return v218;
            };
            const v220 = v208.map(v219);
            const v222 = function (prev, current) {
                const v221 = prev + current;
                return v221;
            };
            const v223 = v220.reduce(v222);
            results.usageInKb = v223;
            const v224 = results.usageInKb;
            results.usageInMb = v224 / 1024;
            const v225 = results.usageInMb;
            results.usageInGb = v225 / 1024;
            const v226 = cb(null, results);
            v226;
        };
        const v228 = exec(cmd, v227);
        v228;
    };
    exports.totalMemoryUsage = totalMemoryUsage;
};
const v230 = v229();
v230;
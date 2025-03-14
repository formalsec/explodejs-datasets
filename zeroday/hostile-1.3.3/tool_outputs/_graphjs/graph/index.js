var fs = require('fs');
var once = require('once');
var split = require('split');
var through = require('through');
var net = require('net');
const v111 = process.platform;
var WINDOWS = v111 === 'win32';
let EOL;
if (WINDOWS) {
    EOL = '\r\n';
} else {
    EOL = '\n';
}
let v112;
if (WINDOWS) {
    v112 = 'C:/Windows/System32/drivers/etc/hosts';
} else {
    v112 = '/etc/hosts';
}
exports.HOSTS = v112;
const v135 = function (filePath, preserveFormatting, cb) {
    var lines = [];
    const v113 = typeof cb;
    const v114 = v113 !== 'function';
    if (v114) {
        const v115 = { encoding: 'utf8' };
        const v116 = fs.readFileSync(filePath, v115);
        const v117 = v116.split(/\r?\n/);
        const v118 = v117.forEach(online);
        v118;
        return lines;
    }
    cb = once(cb);
    const v119 = { encoding: 'utf8' };
    const v120 = fs.createReadStream(filePath, v119);
    const v121 = split();
    const v122 = v120.pipe(v121);
    const v123 = through(online);
    const v124 = v122.pipe(v123);
    const v126 = function () {
        const v125 = cb(null, lines);
        v125;
    };
    const v127 = v124.on('close', v126);
    const v128 = v127.on('error', cb);
    v128;
    const online = function (line) {
        var lineSansComments = line.replace(/#.*/, '');
        var matches = /^\s*?(.+?)\s+(.+?)\s*$/.exec(lineSansComments);
        const v129 = matches.length;
        const v130 = v129 === 3;
        const v131 = matches && v130;
        if (v131) {
            var ip = matches[1];
            var host = matches[2];
            const v132 = [
                ip,
                host
            ];
            const v133 = lines.push(v132);
            v133;
        } else {
            if (preserveFormatting) {
                const v134 = lines.push(line);
                v134;
            }
        }
    };
};
exports.getFile = v135;
const v138 = function (preserveFormatting, cb) {
    const v136 = exports.HOSTS;
    const v137 = exports.getFile(v136, preserveFormatting, cb);
    return v137;
};
exports.get = v138;
const v170 = function (ip, host, cb) {
    var didUpdate = false;
    const v139 = typeof cb;
    const v140 = v139 !== 'function';
    if (v140) {
        const v141 = exports.get(true);
        const v142 = _set(v141);
        return v142;
    }
    const v145 = function (err, lines) {
        if (err) {
            const v143 = cb(err);
            return v143;
        }
        const v144 = _set(lines);
        v144;
    };
    const v146 = exports.get(true, v145);
    v146;
    const _set = function (lines) {
        lines = lines.map(mapFunc);
        const v147 = !didUpdate;
        if (v147) {
            const v148 = lines.length;
            const v149 = v148 - 1;
            var lastLine = lines[v149];
            const v150 = typeof lastLine;
            const v151 = v150 === 'string';
            const v152 = /\s*/.test(lastLine);
            const v153 = v151 && v152;
            if (v153) {
                const v154 = lines.length;
                const v155 = v154 - 1;
                const v156 = [
                    ip,
                    host
                ];
                const v157 = lines.splice(v155, 0, v156);
                v157;
            } else {
                const v158 = [
                    ip,
                    host
                ];
                const v159 = lines.push(v158);
                v159;
            }
        }
        const v160 = exports.writeFile(lines, cb);
        v160;
    };
    const mapFunc = function (line) {
        const v161 = Array.isArray(line);
        const v162 = line[1];
        const v163 = v162 === host;
        const v164 = v161 && v163;
        const v165 = line[0];
        const v166 = net.isIP(v165);
        const v167 = net.isIP(ip);
        const v168 = v166 === v167;
        const v169 = v164 && v168;
        if (v169) {
            line[0] = ip;
            didUpdate = true;
        }
        return line;
    };
};
exports.set = v170;
const v188 = function (ip, host, cb) {
    const v171 = typeof cb;
    const v172 = v171 !== 'function';
    if (v172) {
        const v173 = exports.get(true);
        const v174 = _remove(v173);
        return v174;
    }
    const v177 = function (err, lines) {
        if (err) {
            const v175 = cb(err);
            return v175;
        }
        const v176 = _remove(lines);
        v176;
    };
    const v178 = exports.get(true, v177);
    v178;
    const _remove = function (lines) {
        lines = lines.filter(filterFunc);
        const v179 = exports.writeFile(lines, cb);
        return v179;
    };
    const filterFunc = function (line) {
        const v180 = Array.isArray(line);
        const v181 = line[0];
        const v182 = v181 === ip;
        const v183 = v180 && v182;
        const v184 = line[1];
        const v185 = v184 === host;
        const v186 = v183 && v185;
        const v187 = !v186;
        return v187;
    };
};
exports.remove = v188;
const v220 = function (lines, cb) {
    const v198 = function (line, lineNum) {
        const v189 = Array.isArray(line);
        if (v189) {
            const v190 = line[0];
            const v191 = v190 + ' ';
            const v192 = line[1];
            line = v191 + v192;
        }
        const v193 = lines.length;
        const v194 = v193 - 1;
        const v195 = lineNum === v194;
        let v196;
        if (v195) {
            v196 = '';
        } else {
            v196 = EOL;
        }
        const v197 = line + v196;
        return v197;
    };
    lines = lines.map(v198);
    const v199 = typeof cb;
    const v200 = v199 !== 'function';
    if (v200) {
        const v201 = exports.HOSTS;
        var stat = fs.statSync(v201);
        const v202 = exports.HOSTS;
        const v203 = lines.join('');
        const v204 = stat.mode;
        const v205 = { mode: v204 };
        const v206 = fs.writeFileSync(v202, v203, v205);
        v206;
        return true;
    }
    cb = once(cb);
    const v207 = exports.HOSTS;
    const v218 = function (err, stat) {
        if (err) {
            const v208 = cb(err);
            return v208;
        }
        const v209 = exports.HOSTS;
        const v210 = stat.mode;
        const v211 = { mode: v210 };
        var s = fs.createWriteStream(v209, v211);
        const v212 = s.on('close', cb);
        v212;
        const v213 = s.on('error', cb);
        v213;
        const v215 = function (data) {
            const v214 = s.write(data);
            v214;
        };
        const v216 = lines.forEach(v215);
        v216;
        const v217 = s.end();
        v217;
    };
    const v219 = fs.stat(v207, v218);
    v219;
};
exports.writeFile = v220;
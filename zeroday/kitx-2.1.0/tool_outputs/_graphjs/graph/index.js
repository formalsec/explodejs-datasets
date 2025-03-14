'use strict';
const fs = require('fs');
const os = require('os');
const crypto = require('crypto');
const v107 = function (filename) {
    var content = fs.readFileSync(filename, 'utf8');
    const v102 = content.charCodeAt(0);
    const v103 = v102 === 65279;
    if (v103) {
        content = content.slice(1);
    }
    try {
        const v104 = JSON.parse(content);
        return v104;
    } catch (err) {
        const v105 = filename + ': ';
        const v106 = err.message;
        err.message = v105 + v106;
        throw err;
    }
};
exports.loadJSONSync = v107;
const v111 = function (str, encoding) {
    const v108 = typeof str;
    const v109 = v108 !== 'string';
    if (v109) {
        str = '' + str;
    }
    const v110 = Buffer.from(str, encoding);
    return v110;
};
exports.encode = v111;
const v115 = function (algorithm) {
    const v114 = function (data, encoding) {
        var shasum = crypto.createHash(algorithm);
        const v112 = shasum.update(data);
        v112;
        const v113 = shasum.digest(encoding);
        return v113;
    };
    return v114;
};
exports.makeHasher = v115;
const v116 = exports.makeHasher;
exports.createHash = v116;
const v117 = exports.makeHasher('md5');
exports.md5 = v117;
const v122 = function (algorithm) {
    const v121 = function (data, key, encoding) {
        const v118 = crypto.createHmac(algorithm, key);
        const v119 = v118.update(data);
        const v120 = v119.digest(encoding);
        return v120;
    };
    return v121;
};
exports.createHmac = v122;
const v123 = exports.createHmac('sha1');
exports.sha1 = v123;
const v129 = function (min, max) {
    const v124 = Math.random();
    const v125 = max - min;
    const v126 = v124 * v125;
    const v127 = min + v126;
    const v128 = Math.floor(v127);
    return v128;
};
exports.random = v129;
const v136 = function () {
    var counter = 0;
    var last;
    const machine = os.hostname();
    const pid = process.pid;
    const v135 = function () {
        const v130 = Math.random();
        const v131 = v130 * 1000000000000;
        var val = Math.floor(v131);
        const v132 = val === last;
        if (v132) {
            const v133 = counter++;
            v133;
        } else {
            counter = 0;
        }
        last = val;
        var uid = `${ machine }${ pid }${ val }${ counter }`;
        const v134 = exports.md5(uid, 'hex');
        return v134;
    };
    return v135;
};
const v137 = v136();
exports.makeNonce = v137;
const v141 = function (num) {
    const v138 = num < 10;
    if (v138) {
        const v139 = '0' + num;
        return v139;
    }
    const v140 = '' + num;
    return v140;
};
exports.pad2 = v141;
const v147 = function (num) {
    const v142 = num < 10;
    if (v142) {
        const v143 = '00' + num;
        return v143;
    } else {
        const v144 = num < 100;
        if (v144) {
            const v145 = '0' + num;
            return v145;
        }
    }
    const v146 = '' + num;
    return v146;
};
exports.pad3 = v147;
const v154 = function (date) {
    var YYYY = date.getFullYear();
    const v148 = date.getMonth();
    const v149 = v148 + 1;
    var MM = exports.pad2(v149);
    const v150 = date.getDate();
    var DD = exports.pad2(v150);
    const v151 = '' + YYYY;
    const v152 = v151 + MM;
    const v153 = v152 + DD;
    return v153;
};
exports.getYYYYMMDD = v154;
const v158 = function (ms) {
    const v156 = resolve => {
        const v155 = setTimeout(resolve, ms);
        v155;
    };
    const v157 = new Promise(v156);
    return v157;
};
exports.sleep = v158;
const v171 = function () {
    var interfaces = os.networkInterfaces();
    var keys = Object.keys(interfaces);
    var i = 0;
    const v159 = keys.length;
    let v160 = i < v159;
    while (v160) {
        var key = keys[i];
        var addresses = interfaces[key];
        var j = 0;
        const v162 = addresses.length;
        let v163 = j < v162;
        while (v163) {
            var item = addresses[j];
            const v165 = item.internal;
            const v166 = !v165;
            const v167 = item.family;
            const v168 = v167 === 'IPv4';
            const v169 = v166 && v168;
            if (v169) {
                const v170 = item.address;
                return v170;
            }
            const v164 = j++;
            v163 = j < v162;
        }
        const v161 = i++;
        v160 = i < v159;
    }
    return '';
};
exports.getIPv4 = v171;
const v184 = function () {
    var interfaces = os.networkInterfaces();
    var keys = Object.keys(interfaces);
    var i = 0;
    const v172 = keys.length;
    let v173 = i < v172;
    while (v173) {
        var key = keys[i];
        var addresses = interfaces[key];
        var j = 0;
        const v175 = addresses.length;
        let v176 = j < v175;
        while (v176) {
            var item = addresses[j];
            const v178 = item.internal;
            const v179 = !v178;
            const v180 = item.family;
            const v181 = v180 === 'IPv4';
            const v182 = v179 && v181;
            if (v182) {
                const v183 = item.mac;
                return v183;
            }
            const v177 = j++;
            v176 = j < v175;
        }
        const v174 = i++;
        v173 = i < v172;
    }
    return '00:00:00:00:00:00';
};
exports.getMac = v184;
const v202 = function (readable) {
    const v200 = (resolve, reject) => {
        var onError;
        var onData;
        var onEnd;
        var cleanup = function (err) {
            const v185 = readable.removeListener('error', onError);
            v185;
            const v186 = readable.removeListener('data', onData);
            v186;
            const v187 = readable.removeListener('end', onEnd);
            v187;
        };
        var bufs = [];
        var size = 0;
        const v189 = function (buf) {
            const v188 = bufs.push(buf);
            v188;
            size += buf.length;
        };
        onData = v189;
        const v192 = function (err) {
            const v190 = cleanup();
            v190;
            const v191 = reject(err);
            v191;
        };
        onError = v192;
        const v196 = function () {
            const v193 = cleanup();
            v193;
            const v194 = Buffer.concat(bufs, size);
            const v195 = resolve(v194);
            v195;
        };
        onEnd = v196;
        const v197 = readable.on('error', onError);
        v197;
        const v198 = readable.on('data', onData);
        v198;
        const v199 = readable.on('end', onEnd);
        v199;
    };
    const v201 = new Promise(v200);
    return v201;
};
exports.readAll = v202;
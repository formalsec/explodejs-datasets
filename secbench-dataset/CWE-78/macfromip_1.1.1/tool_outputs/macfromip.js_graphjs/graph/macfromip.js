'use strict';
var macfromip = exports;
var cp = require('child_process');
var os = require('os');
var MACADDRESS_LENGTH = 17;
const v116 = function (value) {
    const v109 = value === null;
    const v110 = typeof value;
    const v111 = v110 === 'undefined';
    const v112 = v109 || v111;
    const v113 = value.length;
    const v114 = 0 === v113;
    const v115 = v112 || v114;
    return v115;
};
macfromip.isEmpty = v116;
const v121 = function (value) {
    const v117 = macfromip.isEmpty(value);
    if (v117) {
        const v118 = new Error('Expected a not null value');
        throw v118;
    }
    const v119 = typeof value;
    const v120 = v119 === 'string';
    if (v120) {
        return true;
    }
    return false;
};
macfromip.isString = v121;
const v127 = function (ipaddress) {
    const v122 = macfromip.isString(ipaddress);
    const v123 = !v122;
    if (v123) {
        const v124 = new Error('Expected a string');
        throw v124;
    }
    const v125 = ipaddress.trim();
    const v126 = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(v125);
    if (v126) {
        return true;
    }
    return false;
};
macfromip.isIpAddress = v127;
const v143 = function (ipaddress) {
    var ifaces = os.networkInterfaces();
    var selfIps = new Array();
    const v128 = Object.keys(ifaces);
    const v136 = function (ifname) {
        var alias = 0;
        const v129 = ifaces[ifname];
        const v134 = function (iface) {
            const v130 = iface.family;
            const v131 = 'IPv4' !== v130;
            if (v131) {
                return;
            }
            const v132 = iface.address;
            const v133 = selfIps.push(v132);
            v133;
        };
        const v135 = v129.forEach(v134);
        v135;
    };
    const v137 = v128.forEach(v136);
    v137;
    var index;
    (index = 0)
    const v138 = selfIps.length;
    let v139 = index < v138;
    while (v139) {
        const v141 = selfIps[index];
        const v142 = v141 === ipaddress;
        if (v142) {
            return true;
        }
        const v140 = ++index;
        v139 = index < v138;
    }
    return false;
};
macfromip.ipIsSelf = v143;
const v169 = function (ipAddress, callback) {
    const v144 = 'ping  -c 1 ' + ipAddress;
    const v168 = function (error, stdout, stderr) {
        const v145 = error !== null;
        if (v145) {
            const v146 = 'exec error: ' + error;
            const v147 = callback('IP address unreachable', v146);
            v147;
            return;
        }
        const v148 = stderr !== null;
        const v149 = stderr !== '';
        const v150 = v148 && v149;
        if (v150) {
            const v151 = 'stderr: ' + stderr;
            const v152 = callback('IP address unreachable', v151);
            v152;
            return;
        }
        const v167 = function (error2, stdout2, stderr2) {
            const v153 = error2 !== null;
            if (v153) {
                const v154 = 'exec error: ' + error2;
                const v155 = callback('IP address unreachable', v154);
                v155;
                return;
            }
            const v156 = stderr2 !== null;
            const v157 = stderr2 !== '';
            const v158 = v156 && v157;
            if (v158) {
                const v159 = 'stderr: ' + stderr2;
                const v160 = callback('IP address unreachable', v159);
                v160;
                return;
            }
            const v161 = stdout2.indexOf(ipAddress);
            const v162 = ipAddress.length;
            const v163 = v162 + 5;
            const v164 = v161 + v163;
            const v165 = stdout2.substring(v164);
            stdout2 = v165.substring(MACADDRESS_LENGTH, 0);
            const v166 = callback(false, stdout2);
            v166;
            return;
        };
        var ls2 = cp.exec('arp -a', v167);
    };
    var ls = cp.exec(v144, v168);
};
macfromip.getMacInLinux = v169;
const v197 = function (ipAddress, callback) {
    const v170 = 'ping  ' + ipAddress;
    const v171 = v170 + ' -n 1';
    const v196 = function (error, stdout, stderr) {
        const v172 = error !== null;
        if (v172) {
            const v173 = 'exec error: ' + error;
            const v174 = callback('IP address unreachable', v173);
            v174;
            return;
        }
        const v175 = stderr !== null;
        const v176 = stderr !== '';
        const v177 = v175 && v176;
        if (v177) {
            const v178 = 'stderr: ' + stderr;
            const v179 = callback('IP address unreachable', v178);
            v179;
            return;
        }
        const v195 = function (error2, stdout2, stderr2) {
            const v180 = error2 !== null;
            if (v180) {
                const v181 = 'exec error: ' + error2;
                const v182 = callback('IP address unreachable', v181);
                v182;
                return;
            }
            const v183 = stderr2 !== null;
            const v184 = stderr2 !== '';
            const v185 = v183 && v184;
            if (v185) {
                const v186 = 'stderr: ' + stderr2;
                const v187 = callback('IP address unreachable', v186);
                v187;
                return;
            }
            const v188 = ipAddress.length;
            var offset = 22 - v188;
            const v189 = stdout2.indexOf(ipAddress);
            const v190 = ipAddress.length;
            const v191 = v190 + offset;
            const v192 = v189 + v191;
            const v193 = stdout2.substring(v192);
            stdout2 = v193.substring(MACADDRESS_LENGTH, 0);
            const v194 = callback(false, stdout2);
            v194;
            return;
        };
        var ls2 = cp.exec('arp -a', v195);
    };
    var ls = cp.exec(v171, v196);
};
macfromip.getMacInWin32 = v197;
const v216 = function (ipAddress, callback) {
    const v198 = macfromip.isIpAddress(ipAddress);
    const v199 = !v198;
    if (v199) {
        const v200 = new Error('The value you entered is not a valid IP address');
        throw v200;
    }
    const v201 = macfromip.ipIsSelf(ipAddress);
    if (v201) {
        const v202 = new Error('The IP address cannot be self');
        throw v202;
    }
    const v203 = os.platform();
    switch (v203) {
    case 'linux':
        const v205 = function (err, mac) {
            const v204 = callback(err, mac);
            v204;
        };
        const v206 = macfromip.getMacInLinux(ipAddress, v205);
        v206;
        break;
    case 'win32':
        const v208 = function (err, mac) {
            const v207 = callback(err, mac);
            v207;
        };
        const v209 = macfromip.getMacInWin32(ipAddress, v208);
        v209;
        break;
    case 'darwin':
        const v211 = function (err, mac) {
            const v210 = callback(err, mac);
            v210;
        };
        const v212 = macfromip.getMacInLinux(ipAddress, v211);
        v212;
        break;
    default:
        const v213 = os.platform();
        const v214 = 'Unsupported platform: ' + v213;
        const v215 = callback(v214, null);
        v215;
        break;
    }
};
macfromip.getMac = v216;
module.exports = macfromip;
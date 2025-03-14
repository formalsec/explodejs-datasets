'use strict';
var os = require('os');
const v165 = require('child_process');
var exec = v165.exec;
var async = require('async');
const trim_exec = function (cmd, cb) {
    const v173 = function (err, out) {
        const v166 = out.toString();
        const v167 = v166 != '';
        const v168 = out && v167;
        if (v168) {
            const v169 = out.toString();
            const v170 = v169.trim();
            const v171 = cb(null, v170);
            v171;
        } else {
            const v172 = cb(err);
            v172;
        }
    };
    const v174 = exec(cmd, v173);
    v174;
};
const determine_nic_type = function (str) {
    const v175 = str.match(/Ethernet/);
    const v176 = str.match(/Wi-?Fi|AirPort/i);
    const v177 = str.match(/FireWire/);
    const v178 = str.match(/Thunderbolt/);
    const v179 = str.match(/Bluetooth/);
    const v180 = str.match(/USB 10\/100\/1000 LAN/);
    let v181;
    if (v180) {
        v181 = 'USB Ethernet Adapter';
    } else {
        v181 = 'Other';
    }
    let v182;
    if (v179) {
        v182 = 'Bluetooth';
    } else {
        v182 = v181;
    }
    let v183;
    if (v178) {
        v183 = 'Thunderbolt';
    } else {
        v183 = v182;
    }
    let v184;
    if (v177) {
        v184 = 'FireWire';
    } else {
        v184 = v183;
    }
    let v185;
    if (v176) {
        v185 = 'Wireless';
    } else {
        v185 = v184;
    }
    let v186;
    if (v175) {
        v186 = 'Wired';
    } else {
        v186 = v185;
    }
    return v186;
};
const v201 = function (cb) {
    var cmd = 'netstat -rn | grep UG | awk \'{print $NF}\'';
    const v199 = function (err, stdout) {
        if (err) {
            const v187 = cb(err);
            return v187;
        }
        const v188 = stdout.toString();
        const v189 = v188.trim();
        var raw = v189.split('\n');
        const v190 = raw.length;
        const v191 = v190 === 0;
        const v192 = [''];
        const v193 = raw === v192;
        const v194 = v191 || v193;
        if (v194) {
            const v195 = new Error('No active network interface found.');
            const v196 = cb(v195);
            return v196;
        }
        const v197 = raw[0];
        const v198 = cb(null, v197);
        v198;
    };
    const v200 = exec(cmd, v199);
    v200;
};
exports.get_active_network_interface_name = v201;
const v204 = function (nic_name, cb) {
    const v202 = 'networksetup -getmacaddress ' + nic_name;
    var cmd = v202 + ' | awk \'{print $3}\'';
    const v203 = trim_exec(cmd, cb);
    v203;
};
exports.mac_address_for = v204;
const v207 = function (nic_name, cb) {
    const v205 = 'ipconfig getoption ' + nic_name;
    var cmd = v205 + ' router';
    const v206 = trim_exec(cmd, cb);
    v206;
};
exports.gateway_ip_for = v207;
const v210 = function (nic_name, cb) {
    const v208 = 'ipconfig getoption ' + nic_name;
    var cmd = v208 + ' subnet_mask';
    const v209 = trim_exec(cmd, cb);
    v209;
};
exports.netmask_for = v210;
const v213 = function (nic_name, cb) {
    const v211 = 'netstat -rn | grep ' + nic_name;
    var cmd = v211 + ' | grep UG | wc -l | sed -e "s/1/active/" | sed -e "s/0/inactive/"';
    const v212 = trim_exec(cmd, cb);
    v212;
};
exports.status_for = v213;
const v265 = function (cb) {
    var count = 0;
    var list = [];
    var nics = os.networkInterfaces();
    const append_data = function (obj) {
        const v216 = function (cb) {
            const v214 = obj.name;
            const v215 = exports.gateway_ip_for(v214, cb);
            v215;
        };
        const v219 = function (cb) {
            const v217 = obj.name;
            const v218 = exports.netmask_for(v217, cb);
            v218;
        };
        const v222 = function (cb) {
            const v220 = obj.name;
            const v221 = exports.status_for(v220, cb);
            v221;
        };
        const v223 = [
            v216,
            v219,
            v222
        ];
        const v234 = function (err, results) {
            const v224 = results[0];
            if (v224) {
                const v225 = results[0];
                obj.gateway_ip = v225;
            }
            const v226 = results[1];
            if (v226) {
                const v227 = results[1];
                obj.netmask = v227;
            }
            const v228 = results[2];
            if (v228) {
                const v229 = results[2];
                obj.status = v229;
            }
            const v230 = list.push(obj);
            v230;
            const v231 = --count;
            const v232 = cb(null, list);
            const v233 = v231 || v232;
            v233;
        };
        const v235 = async.parallel(v223, v234);
        v235;
    };
    const v263 = function (err, out) {
        if (err) {
            const v236 = cb(err);
            return v236;
        }
        const v237 = out.toString();
        const v238 = v237.split(/Hardware/);
        var blocks = v238.slice(1);
        count = blocks.length;
        const v258 = function (block) {
            var parts = block.match(/Port: (.+)/);
            var mac = block.match(/Address: ([A-Fa-f0-9:-]+)/);
            var name = block.match(/Device: (\w+)/);
            const v239 = !parts;
            const v240 = !mac;
            const v241 = v239 || v240;
            const v242 = !name;
            const v243 = v241 || v242;
            if (v243) {
                const v244 = --count;
                return v244;
            }
            var obj = {};
            var port = parts[1];
            const v245 = name[1];
            obj.name = v245;
            obj.desc = port;
            const v246 = determine_nic_type(port);
            obj.type = v246;
            obj.ip_address = null;
            const v247 = mac[1];
            obj.mac_address = v247;
            const v248 = obj.name;
            const v249 = nics[v248];
            const v250 = [];
            const v251 = v249 || v250;
            const v255 = function (type) {
                const v252 = type.family;
                const v253 = v252 == 'IPv4';
                if (v253) {
                    const v254 = type.address;
                    obj.ip_address = v254;
                }
            };
            const v256 = v251.forEach(v255);
            v256;
            const v257 = append_data(obj);
            v257;
        };
        const v259 = blocks.forEach(v258);
        v259;
        const v260 = count == 0;
        if (v260) {
            const v261 = new Error('No interfaces found.');
            const v262 = cb(v261);
            v262;
        }
    };
    const v264 = exec('networksetup -listallhardwareports', v263);
    v264;
};
exports.get_network_interfaces_list = v265;
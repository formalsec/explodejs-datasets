'use strict';
var os = require('os');
const v79 = require('child_process');
var exec = v79.exec;
var async = require('async');
const trim_exec = function (cmd, cb) {
    const v87 = function (err, out) {
        const v80 = out.toString();
        const v81 = v80 != '';
        const v82 = out && v81;
        if (v82) {
            const v83 = out.toString();
            const v84 = v83.trim();
            const v85 = cb(null, v84);
            v85;
        } else {
            const v86 = cb(err);
            v86;
        }
    };
    const v88 = exec(cmd, v87);
    v88;
};
const v103 = function (cb) {
    var cmd = 'netstat -rn | grep UG | awk \'{print $NF}\'';
    const v101 = function (err, stdout) {
        if (err) {
            const v89 = cb(err);
            return v89;
        }
        const v90 = stdout.toString();
        const v91 = v90.trim();
        var raw = v91.split('\n');
        const v92 = raw.length;
        const v93 = v92 === 0;
        const v94 = [''];
        const v95 = raw === v94;
        const v96 = v93 || v95;
        if (v96) {
            const v97 = new Error('No active network interface found.');
            const v98 = cb(v97);
            return v98;
        }
        const v99 = raw[0];
        const v100 = cb(null, v99);
        v100;
    };
    const v102 = exec(cmd, v101);
    v102;
};
exports.get_active_network_interface_name = v103;
const v109 = function (nic_name, cb) {
    const v104 = 'cat /proc/net/wireless | grep ' + nic_name;
    const v107 = function (err, out) {
        let v105;
        if (err) {
            v105 = 'Wired';
        } else {
            v105 = 'Wireless';
        }
        const v106 = cb(null, v105);
        return v106;
    };
    const v108 = exec(v104, v107);
    v108;
};
exports.interface_type_for = v109;
const v112 = function (nic_name, cb) {
    const v110 = 'cat /sys/class/net/' + nic_name;
    var cmd = v110 + '/address';
    const v111 = trim_exec(cmd, cb);
    v111;
};
exports.mac_address_for = v112;
const v116 = function (nic_name, cb) {
    const v113 = 'ip r | grep ' + nic_name;
    const v114 = v113 + ' | grep default | cut -d \' \' -f 3 | head -n1';
    const v115 = trim_exec(v114, cb);
    v115;
};
exports.gateway_ip_for = v116;
const v119 = function (nic_name, cb) {
    const v117 = 'ifconfig ' + nic_name;
    var cmd = v117 + ' 2> /dev/null | egrep \'netmask|Mask:\' | awk \'{print $4}\' | sed \'s/Mask://\'';
    const v118 = trim_exec(cmd, cb);
    v118;
};
exports.netmask_for = v119;
const v164 = function (cb) {
    var count = 0;
    var list = [];
    var nics = os.networkInterfaces();
    const append_data = function (obj) {
        const v122 = function (cb) {
            const v120 = obj.name;
            const v121 = exports.mac_address_for(v120, cb);
            v121;
        };
        const v125 = function (cb) {
            const v123 = obj.name;
            const v124 = exports.gateway_ip_for(v123, cb);
            v124;
        };
        const v128 = function (cb) {
            const v126 = obj.name;
            const v127 = exports.netmask_for(v126, cb);
            v127;
        };
        const v131 = function (cb) {
            const v129 = obj.name;
            const v130 = exports.interface_type_for(v129, cb);
            v130;
        };
        const v132 = [
            v122,
            v125,
            v128,
            v131
        ];
        const v145 = function (err, results) {
            const v133 = results[0];
            if (v133) {
                const v134 = results[0];
                obj.mac_address = v134;
            }
            const v135 = results[1];
            if (v135) {
                const v136 = results[1];
                obj.gateway_ip = v136;
            }
            const v137 = results[2];
            if (v137) {
                const v138 = results[2];
                obj.netmask = v138;
            }
            const v139 = results[3];
            if (v139) {
                const v140 = results[3];
                obj.type = v140;
            }
            const v141 = list.push(obj);
            v141;
            const v142 = --count;
            const v143 = cb(null, list);
            const v144 = v142 || v143;
            v144;
        };
        const v146 = async.parallel(v132, v145);
        v146;
    };
    let key;
    for (key in nics) {
        const v147 = key != 'lo0';
        const v148 = key != 'lo';
        const v149 = v147 && v148;
        const v150 = key.match(/^tun/);
        const v151 = !v150;
        const v152 = v149 && v151;
        if (v152) {
            const v153 = count++;
            v153;
            var obj = {};
            obj.name = key;
            const v154 = nics[key];
            const v158 = function (type) {
                const v155 = type.family;
                const v156 = v155 == 'IPv4';
                if (v156) {
                    const v157 = type.address;
                    obj.ip_address = v157;
                }
            };
            const v159 = v154.forEach(v158);
            v159;
            const v160 = append_data(obj);
            v160;
        }
    }
    const v161 = count == 0;
    if (v161) {
        const v162 = new Error('No interfaces found.');
        const v163 = cb(v162);
        v163;
    }
};
exports.get_network_interfaces_list = v164;
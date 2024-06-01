var ip = require('ip');
var os = require('os');
var net = require('net');
var cp = require('mz/child_process');
var parseLinux = require('./parser/linux');
var parseWin32 = require('./parser/win32');
var parseRow = require('./parser');
var servers = getServers();
var lock = {};
const findLocalDevices = function (address) {
    var key = String(address);
    const v84 = lock[key];
    const v85 = pingServer(address);
    const v86 = v85.then(arpOne);
    const v87 = pingServers();
    const v88 = v87.then(arpAll);
    let v89;
    if (address) {
        v89 = v86;
    } else {
        v89 = v88;
    }
    const v90 = unlock(key);
    const v91 = v89.then(v90);
    lock[key] = v84 || v91;
    const v92 = lock[key];
    return v92;
};
module.exports = findLocalDevices;
const getServers = function () {
    var interfaces = os.networkInterfaces();
    var result = [];
    let key;
    for (key in interfaces) {
        var addresses = interfaces[key];
        var i = addresses.length;
        let v93 = i--;
        while (v93) {
            var address = addresses[i];
            const v94 = address.family;
            const v95 = v94 === 'IPv4';
            const v96 = address.internal;
            const v97 = !v96;
            const v98 = v95 && v97;
            if (v98) {
                const v99 = address.address;
                const v100 = address.netmask;
                var subnet = ip.subnet(v99, v100);
                const v101 = subnet.firstAddress;
                var current = ip.toLong(v101);
                const v102 = subnet.lastAddress;
                const v103 = ip.toLong(v102);
                var last = v103 - 1;
                const v104 = current++;
                let v105 = v104 < last;
                while (v105) {
                    const v106 = ip.fromLong(current);
                    const v107 = result.push(v106);
                    v107;
                    v105 = v104 < last;
                }
            }
            v93 = i--;
        }
    }
    return result;
};
const pingServers = function () {
    const v108 = servers.map(pingServer);
    const v109 = Promise.all(v108);
    return v109;
};
const pingServer = function (address) {
    const v115 = function (resolve) {
        var socket = new net.Socket();
        const v110 = socket.setTimeout(1000, close);
        v110;
        const v111 = socket.connect(80, address, close);
        v111;
        const v112 = socket.once('error', close);
        v112;
        const close = function () {
            const v113 = socket.destroy();
            v113;
            const v114 = resolve(address);
            v114;
        };
    };
    const v116 = new Promise(v115);
    return v116;
};
const arpAll = function () {
    const v117 = cp.exec('arp -a');
    const v118 = v117.then(parseAll);
    return v118;
};
const parseAll = function (data) {
    const v119 = !data;
    const v120 = data[0];
    const v121 = !v120;
    const v122 = v119 || v121;
    if (v122) {
        const v123 = [];
        return v123;
    }
    const v124 = process.platform;
    const v125 = v124.includes('linux');
    if (v125) {
        const v126 = data[0];
        var rows = v126.split('\n');
        const v128 = function (row) {
            const v127 = parseLinux(row, servers);
            return v127;
        };
        const v129 = rows.map(v128);
        const v130 = v129.filter(Boolean);
        return v130;
    } else {
        const v131 = process.platform;
        const v132 = v131.includes('win32');
        if (v132) {
            const v133 = data[0];
            const v134 = v133.split('\n');
            var winRows = v134.splice(1);
            const v136 = function (row) {
                const v135 = parseWin32(row, servers);
                return v135;
            };
            const v137 = winRows.map(v136);
            const v138 = v137.filter(Boolean);
            return v138;
        }
    }
    const v139 = data[0];
    const v140 = v139.trim();
    const v141 = v140.split('\n');
    const v143 = function (row) {
        const v142 = parseRow(row, servers);
        return v142;
    };
    const v144 = v141.map(v143);
    const v145 = v144.filter(Boolean);
    return v145;
};
const arpOne = function (address) {
    const v146 = 'arp -n ' + address;
    const v147 = cp.exec(v146);
    const v148 = v147.then(parseOne);
    return v148;
};
const parseOne = function (data) {
    const v149 = !data;
    const v150 = data[0];
    const v151 = !v150;
    const v152 = v149 || v151;
    if (v152) {
        return;
    }
    const v153 = process.platform;
    const v154 = v153.includes('linux');
    if (v154) {
        const v155 = data[0];
        const v156 = v155.indexOf('no entry');
        const v157 = v156 >= 0;
        if (v157) {
            return;
        }
        const v158 = data[0];
        const v159 = v158.split('\n');
        const v160 = v159.slice(1);
        var rows = v160[0];
        const v161 = parseLinux(rows, servers, true);
        return v161;
    } else {
        const v162 = process.platform;
        const v163 = v162.includes('win32');
        if (v163) {
            return;
        }
    }
    const v164 = data[0];
    const v165 = parseRow(v164, servers);
    return v165;
};
const unlock = function (key) {
    const v166 = function (data) {
        lock[key] = null;
        return data;
    };
    return v166;
};
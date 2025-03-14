'use strict';
var wmic = require('wmic');
const v1 = require('child_process');
var exec = v1.exec;
var os = require('os');
const get_wmic_ip_value = function (what, nic_name, cb) {
    const v16 = function (err, mac) {
        const v2 = !mac;
        const v3 = err || v2;
        if (v3) {
            const v4 = new Error('No MAC Address found.');
            const v5 = err || v4;
            const v6 = cb(v5);
            return v6;
        }
        const v7 = 'MACAddress = \'' + mac;
        const v8 = v7 + '\'';
        const v14 = function (err, out) {
            if (err) {
                const v9 = cb(err);
                return v9;
            }
            const v10 = out.split(',');
            const v11 = v10[0];
            const v12 = v11.replace(/[^0-9\.]/g, '');
            const v13 = cb(null, v12);
            v13;
        };
        const v15 = wmic.get_value('nicconfig', what, v8, v14);
        v15;
    };
    const v17 = exports.mac_address_for(nic_name, v16);
    v17;
};
const v19 = function (cb) {
    const v18 = wmic.get_value('nic', 'NetConnectionID', 'NetConnectionStatus = 2', cb);
    v18;
};
exports.get_active_network_interface_name = v19;
const v21 = function (nic_name, cb) {
    const v20 = get_wmic_ip_value('IPSubnet', nic_name, cb);
    v20;
};
exports.netmask_for = v21;
const v23 = function (nic_name, cb) {
    const v22 = get_wmic_ip_value('DefaultIPGateway', nic_name, cb);
    v22;
};
exports.gateway_ip_for = v23;
const v26 = function (nic_name, cb) {
    const v24 = 'NetConnectionID = \'' + nic_name;
    var cond = v24 + '\'';
    const v25 = wmic.get_value('nic', 'MACAddress', cond, cb);
    v25;
};
exports.mac_address_for = v26;
const v78 = function (callback) {
    var count;
    var list = [];
    var node_nics = os.networkInterfaces();
    const done = function () {
        const v27 = --count;
        const v28 = callback(null, list);
        const v29 = v27 || v28;
        v29;
    };
    const set_gateway = function (obj) {
        const v30 = obj.name;
        const v35 = function (err, res) {
            const v31 = res != '';
            const v32 = res && v31;
            let v33;
            if (v32) {
                v33 = res;
            } else {
                v33 = null;
            }
            obj.gateway_ip = v33;
            const v34 = done();
            v34;
        };
        const v36 = exports.gateway_ip_for(v30, v35);
        v36;
    };
    const set_netmask = function (obj) {
        const v37 = obj.name;
        const v41 = function (err, res) {
            const v38 = res != '';
            const v39 = res && v38;
            let v40;
            if (v39) {
                v40 = res;
            } else {
                v40 = null;
            }
            obj.netmask = v40;
        };
        const v42 = exports.netmask_for(v37, v41);
        v42;
    };
    const v76 = function (err, nics) {
        if (err) {
            const v43 = callback(err);
            return v43;
        }
        count = nics.length;
        const v44 = count == 0;
        if (v44) {
            const v45 = new Error('No interfaces found.');
            const v46 = cb(v45);
            return v46;
        }
        const v74 = function (nic) {
            const v47 = nic.Name;
            const v48 = nic.NetConnectionID;
            const v49 = v48 != '';
            const v50 = v47 && v49;
            const v51 = nic.MACAddress;
            const v52 = v51 != '';
            const v53 = v50 && v52;
            if (v53) {
                const v54 = nic.NetConnectionID;
                const v55 = nic.MACAddress;
                const v56 = nic.IPAddress;
                const v57 = nic.Manufacturer;
                const v58 = nic.Description;
                const v59 = nic.Name;
                const v60 = v59.match(/wi-?fi|wireless/i);
                let v61;
                if (v60) {
                    v61 = 'Wireless';
                } else {
                    v61 = 'Wired';
                }
                var obj = {};
                obj.name = v54;
                obj.mac_address = v55;
                obj.ip_address = v56;
                obj.vendor = v57;
                obj.model = v58;
                obj.type = v61;
                const v62 = obj.name;
                const v63 = node_nics[v62];
                const v64 = [];
                var node_nic = v63 || v64;
                const v68 = function (type) {
                    const v65 = type.family;
                    const v66 = v65 == 'IPv4';
                    if (v66) {
                        const v67 = type.address;
                        obj.ip_address = v67;
                    }
                };
                const v69 = node_nic.forEach(v68);
                v69;
                const v70 = list.push(obj);
                v70;
                const v71 = set_netmask(obj);
                v71;
                const v72 = set_gateway(obj);
                v72;
            } else {
                const v73 = done();
                v73;
            }
        };
        const v75 = nics.forEach(v74);
        v75;
    };
    const v77 = wmic.get_list('nic', v76);
    v77;
};
exports.get_network_interfaces_list = v78;
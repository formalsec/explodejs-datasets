'use strict';
const os = require('os');
const tools = require('./classes/tools.js');
const reporting = require('./classes/reporting.js');
const nmap = function (options, fn) {
    const v34 = [];
    const v35 = os.cpus();
    const v36 = v35.length;
    const v37 = v36 * 4;
    const v38 = ['-T4'];
    const defaults = {};
    defaults.nmap = 'nmap';
    defaults.verbose = false;
    defaults.ports = '1-1024';
    defaults.range = v34;
    defaults.timeout = 120;
    defaults.blocksize = 16;
    defaults.threshold = v37;
    defaults.flags = v38;
    defaults.udp = false;
    defaults.json = true;
    const v39 = nmap.prototype;
    const v50 = (obj, cb) => {
        cb = cb || obj;
        let opts = {};
        const v48 = (err, settings) => {
            if (err) {
                const v40 = new Error(err);
                const v41 = cb(v40);
                return v41;
            }
            opts = settings.opts;
            const v42 = settings.funcs;
            opts.funcs = v42;
            const v46 = (err, data) => {
                if (err) {
                    const v43 = new Error(err);
                    const v44 = cb(v43);
                    return v44;
                }
                const v45 = cb(null, data);
                v45;
            };
            const v47 = tools.worker(opts, v46);
            v47;
        };
        const v49 = tools.init(defaults, obj, v48);
        v49;
    };
    v39.discover = v50;
    const v51 = nmap.prototype;
    const v62 = (obj, cb) => {
        cb = cb || obj;
        let opts = {};
        const v60 = (err, settings) => {
            if (err) {
                const v52 = new Error(err);
                const v53 = cb(v52);
                return v53;
            }
            opts = settings.opts;
            const v54 = settings.funcs;
            opts.funcs = v54;
            const v58 = (err, data) => {
                if (err) {
                    const v55 = new Error(err);
                    const v56 = cb(v55);
                    return v56;
                }
                const v57 = cb(null, data);
                v57;
            };
            const v59 = tools.worker(opts, v58);
            v59;
        };
        const v61 = tools.init(defaults, obj, v60);
        v61;
    };
    v51.scan = v62;
};
const v65 = err => {
    const v63 = new Error(err);
    const v64 = console.trace(v63);
    v64;
};
const v66 = process.on('uncaughtException', v65);
v66;
module.exports = new nmap();
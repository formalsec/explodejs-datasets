const v64 = require('child_process');
const exec = v64.exec;
const execSync = v64.execSync;
const utils = require('./utils');
const pdfinfo = function (filename, options) {
    const v65 = {};
    this.options = options || v65;
    const v66 = this.options;
    const v67 = '"' + filename;
    const v68 = v67 + '"';
    v66.additional = [v68];
    const v69 = pdfinfo.prototype;
    const v85 = function (optionArray) {
        const v70 = optionArray.length;
        const v71 = typeof v70;
        const v72 = v71 !== undefined;
        if (v72) {
            var self = this;
            const v83 = function (el) {
                const v73 = el.indexOf(' ');
                const v74 = v73 > 0;
                if (v74) {
                    var values = el.split(' ');
                    const v75 = self.options;
                    const v76 = v75.additional;
                    const v77 = values[0];
                    const v78 = values[1];
                    const v79 = v76.push(v77, v78);
                    v79;
                } else {
                    const v80 = self.options;
                    const v81 = v80.additional;
                    const v82 = v81.push(el);
                    v82;
                }
            };
            const v84 = optionArray.forEach(v83);
            v84;
        }
        return this;
    };
    v69.add_options = v85;
    const v86 = pdfinfo.prototype;
    const v96 = function () {
        const self = this;
        try {
            const v87 = self.options;
            const v88 = v87.additional;
            const v89 = v88.join(' ');
            const v90 = 'pdfinfo ' + v89;
            const v91 = execSync(v90);
            let data = v91.toString('utf8');
            const v92 = utils.parse(data);
            return v92;
        } catch (err) {
            const v93 = err.msg;
            const v94 = 'pdfinfo error: ' + v93;
            const v95 = new Error(v94);
            throw v95;
        }
    };
    v86.getInfoSync = v96;
    const v97 = pdfinfo.prototype;
    const v118 = function (cb) {
        let self = this;
        const v98 = self.options;
        const v99 = v98.additional;
        const v100 = v99.join(' ');
        const v101 = 'pdfinfo ' + v100;
        const v117 = function (error, stdout, stderr) {
            const v102 = !error;
            if (v102) {
                let data = utils.parse(stdout);
                const v103 = typeof cb;
                const v104 = v103 === 'function';
                const v105 = cb && v104;
                if (v105) {
                    const v106 = self.options;
                    const v107 = v106.additional;
                    const v108 = cb(null, data, v107);
                    v108;
                }
            } else {
                const v109 = console.info('pdfinfo (poppler-utils) is missing. Hint: sudo apt-get install poppler-utils');
                v109;
                const v110 = typeof cb;
                const v111 = v110 === 'function';
                const v112 = cb && v111;
                if (v112) {
                    const v113 = new Error(stderr);
                    const v114 = self.options;
                    const v115 = v114.addtional;
                    const v116 = cb(v113, null, v115);
                    v116;
                }
            }
        };
        let child = exec(v101, v117);
    };
    v97.getInfo = v118;
    const v119 = pdfinfo.prototype;
    const v121 = function (callback) {
        const v120 = this.options;
        v120.error = callback;
        return this;
    };
    v119.error = v121;
    const v122 = pdfinfo.prototype;
    const v124 = function (callback) {
        const v123 = this.options;
        v123.success = callback;
        return this;
    };
    v122.success = v124;
};
const v126 = function (filename, args) {
    const v125 = new pdfinfo(filename, args);
    return v125;
};
module.exports = v126;
exports = module.exports;
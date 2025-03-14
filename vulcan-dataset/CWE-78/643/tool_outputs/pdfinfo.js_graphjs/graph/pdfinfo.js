const v65 = require('child_process');
const exec = v65.exec;
const execSync = v65.execSync;
const v66 = data => {
    return '';
};
const utils = {};
utils.parse = v66;
const pdfinfo = function (filename, options) {
    const v67 = {};
    this.options = options || v67;
    const v68 = this.options;
    const v69 = '"' + filename;
    const v70 = v69 + '"';
    v68.additional = [v70];
    const v71 = pdfinfo.prototype;
    const v87 = function (optionArray) {
        const v72 = optionArray.length;
        const v73 = typeof v72;
        const v74 = v73 !== undefined;
        if (v74) {
            var self = this;
            const v85 = function (el) {
                const v75 = el.indexOf(' ');
                const v76 = v75 > 0;
                if (v76) {
                    var values = el.split(' ');
                    const v77 = self.options;
                    const v78 = v77.additional;
                    const v79 = values[0];
                    const v80 = values[1];
                    const v81 = v78.push(v79, v80);
                    v81;
                } else {
                    const v82 = self.options;
                    const v83 = v82.additional;
                    const v84 = v83.push(el);
                    v84;
                }
            };
            const v86 = optionArray.forEach(v85);
            v86;
        }
        return this;
    };
    v71.add_options = v87;
    const v88 = pdfinfo.prototype;
    const v98 = function () {
        const self = this;
        try {
            const v89 = self.options;
            const v90 = v89.additional;
            const v91 = v90.join(' ');
            const v92 = 'pdfinfo ' + v91;
            const v93 = execSync(v92);
            let data = v93.toString('utf8');
            const v94 = utils.parse(data);
            return v94;
        } catch (err) {
            const v95 = err.msg;
            const v96 = 'pdfinfo error: ' + v95;
            const v97 = new Error(v96);
            throw v97;
        }
    };
    v88.getInfoSync = v98;
    const v99 = pdfinfo.prototype;
    const v120 = function (cb) {
        let self = this;
        const v100 = self.options;
        const v101 = v100.additional;
        const v102 = v101.join(' ');
        const v103 = 'pdfinfo ' + v102;
        const v119 = function (error, stdout, stderr) {
            const v104 = !error;
            if (v104) {
                let data = utils.parse(stdout);
                const v105 = typeof cb;
                const v106 = v105 === 'function';
                const v107 = cb && v106;
                if (v107) {
                    const v108 = self.options;
                    const v109 = v108.additional;
                    const v110 = cb(null, data, v109);
                    v110;
                }
            } else {
                const v111 = console.info('pdfinfo (poppler-utils) is missing. Hint: sudo apt-get install poppler-utils');
                v111;
                const v112 = typeof cb;
                const v113 = v112 === 'function';
                const v114 = cb && v113;
                if (v114) {
                    const v115 = new Error(stderr);
                    const v116 = self.options;
                    const v117 = v116.addtional;
                    const v118 = cb(v115, null, v117);
                    v118;
                }
            }
        };
        let child = exec(v103, v119);
    };
    v99.getInfo = v120;
    const v121 = pdfinfo.prototype;
    const v123 = function (callback) {
        const v122 = this.options;
        v122.error = callback;
        return this;
    };
    v121.error = v123;
    const v124 = pdfinfo.prototype;
    const v126 = function (callback) {
        const v125 = this.options;
        v125.success = callback;
        return this;
    };
    v124.success = v126;
};
const v128 = function (filename, args) {
    const v127 = new pdfinfo(filename, args);
    return v127;
};
module.exports = v128;
exports = module.exports;
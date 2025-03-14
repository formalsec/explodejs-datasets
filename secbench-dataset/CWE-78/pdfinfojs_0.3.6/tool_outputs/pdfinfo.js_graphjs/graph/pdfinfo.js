var shell = require('shelljs');
const v102 = data => {
    return data;
};
var utils = {};
utils.parse = v102;
const pdfinfo = function (filename, options) {
    const v103 = {};
    this.options = options || v103;
    const v104 = this.options;
    const v105 = '"' + filename;
    const v106 = v105 + '"';
    v104.additional = [v106];
    const v107 = pdfinfo.prototype;
    const v123 = function (optionArray) {
        const v108 = optionArray.length;
        const v109 = typeof v108;
        const v110 = v109 !== undefined;
        if (v110) {
            var self = this;
            const v121 = function (el) {
                const v111 = el.indexOf(' ');
                const v112 = v111 > 0;
                if (v112) {
                    var values = el.split(' ');
                    const v113 = self.options;
                    const v114 = v113.additional;
                    const v115 = values[0];
                    const v116 = values[1];
                    const v117 = v114.push(v115, v116);
                    v117;
                } else {
                    const v118 = self.options;
                    const v119 = v118.additional;
                    const v120 = v119.push(el);
                    v120;
                }
            };
            const v122 = optionArray.forEach(v121);
            v122;
        }
        return this;
    };
    v107.add_options = v123;
    const v124 = pdfinfo.prototype;
    const v139 = function () {
        var self = this;
        const v125 = self.options;
        const v126 = v125.additional;
        const v127 = v126.join(' ');
        const v128 = 'pdfinfo ' + v127;
        var child = shell.exec(v128);
        const v129 = child.code;
        const v130 = v129 === 0;
        if (v130) {
            const v131 = child.stdout;
            const v132 = utils.parse(v131);
            return v132;
        } else {
            const v133 = shell.which('pdfinfo');
            const v134 = !v133;
            if (v134) {
                const v135 = new Error('Sorry, this script requires pdfinfo.');
                throw v135;
            }
            const v136 = child.stdout;
            const v137 = 'pdfinfo error: ' + v136;
            const v138 = new Error(v137);
            throw v138;
        }
    };
    v124.getInfoSync = v139;
    const v140 = pdfinfo.prototype;
    const v143 = function () {
        const v141 = console.warn('\x1B[31m`getSync` is now obsolete please use `getInfoSync` instead. Eventually `getSync` will be soon removed.\x1B[0m');
        v141;
        const v142 = this.getInfoSync();
        return v142;
    };
    v140.getSync = v143;
    const v144 = pdfinfo.prototype;
    const v165 = function (cb) {
        var self = this;
        const v145 = self.options;
        const v146 = v145.additional;
        const v147 = v146.join(' ');
        const v148 = 'pdfinfo ' + v147;
        const v164 = function (code, data) {
            const v149 = code === 0;
            if (v149) {
                data = utils.parse(data);
                const v150 = typeof cb;
                const v151 = v150 === 'function';
                const v152 = cb && v151;
                if (v152) {
                    const v153 = self.options;
                    const v154 = v153.additional;
                    const v155 = cb(null, data, v154);
                    v155;
                }
            } else {
                var err;
                const v156 = shell.which('pdfinfo');
                const v157 = !v156;
                if (v157) {
                    err = new Error('pdfinfo (poppler-utils) is missing. Hint: sudo apt-get install poppler-utils');
                } else {
                    err = new Error(data);
                }
                const v158 = typeof cb;
                const v159 = v158 === 'function';
                const v160 = cb && v159;
                if (v160) {
                    const v161 = self.options;
                    const v162 = v161.addtional;
                    const v163 = cb(err, null, v162);
                    v163;
                }
            }
        };
        var child = shell.exec(v148, v164);
    };
    v144.getInfo = v165;
    const v166 = pdfinfo.prototype;
    const v196 = function () {
        const v167 = console.warn('\x1B[31m`get` is now obsolete please use `getInfo` instead. Eventually `get` will be soon removed.\x1B[0m');
        v167;
        var self = this;
        const v168 = self.options;
        const v169 = v168.additional;
        const v170 = v169.join(' ');
        const v171 = 'pdfinfo ' + v170;
        const v195 = function (code, data) {
            const v172 = code === 0;
            if (v172) {
                const v173 = self.options;
                const v174 = v173.success;
                const v175 = self.options;
                const v176 = v175.success;
                const v177 = typeof v176;
                const v178 = v177 === 'function';
                const v179 = v174 && v178;
                if (v179) {
                    const v180 = self.options;
                    const v181 = utils.parse(data);
                    const v182 = v180.success(v181);
                    v182;
                }
            } else {
                const v183 = shell.which('pdfinfo');
                const v184 = !v183;
                if (v184) {
                    const v185 = echo('Sorry, this script requires pdfinfo.');
                    v185;
                }
                const v186 = self.options;
                const v187 = v186.error;
                const v188 = self.options;
                const v189 = v188.error;
                const v190 = typeof v189;
                const v191 = v190 === 'function';
                const v192 = v187 && v191;
                if (v192) {
                    const v193 = self.options;
                    const v194 = v193.error(data);
                    v194;
                }
            }
        };
        var child = shell.exec(v171, v195);
    };
    v166.get = v196;
    const v197 = pdfinfo.prototype;
    const v199 = function (callback) {
        const v198 = this.options;
        v198.error = callback;
        return this;
    };
    v197.error = v199;
    const v200 = pdfinfo.prototype;
    const v202 = function (callback) {
        const v201 = this.options;
        v201.success = callback;
        return this;
    };
    v200.success = v202;
};
module.exports = pdfinfo;
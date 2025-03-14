var path = require('path');
var fs = require('fs');
var util = require('util');
const v96 = require('child_process');
var exec = v96.exec;
const PDFImage = function (pdfFilePath, options) {
    const v97 = !options;
    if (v97) {
        options = {};
    }
    this.pdfFilePath = pdfFilePath;
    const v98 = options.pdfFileBaseName;
    const v99 = this.setPdfFileBaseName(v98);
    v99;
    const v100 = options.convertOptions;
    const v101 = this.setConvertOptions(v100);
    v101;
    const v102 = options.convertExtension;
    const v103 = this.setConvertExtension(v102);
    v103;
    const v104 = options.graphicsMagick;
    this.useGM = v104 || false;
    const v105 = options.outputDirectory;
    const v106 = path.dirname(pdfFilePath);
    this.outputDirectory = v105 || v106;
};
const v109 = function () {
    const v107 = this.pdfFilePath;
    const v108 = util.format('pdfinfo "%s"', v107);
    return v108;
};
const v116 = function (output) {
    var info = {};
    const v110 = output.split('\n');
    const v114 = function (line) {
        const v111 = line.match(/^(.*?):[ \t]*(.*)$/);
        if (v111) {
            const v112 = RegExp.$1;
            const v113 = RegExp.$2;
            info[v112] = v113;
        }
    };
    const v115 = v110.forEach(v114);
    v115;
    return info;
};
const v124 = function () {
    var self = this;
    var getInfoCommand = this.constructGetInfoCommand();
    const v123 = function (resolve, reject) {
        const v121 = function (err, stdout, stderr) {
            if (err) {
                const v117 = {
                    message: 'Failed to get PDF\'S information',
                    error: err,
                    stdout: stdout,
                    stderr: stderr
                };
                const v118 = reject(v117);
                return v118;
            }
            const v119 = self.parseGetInfoCommandOutput(stdout);
            const v120 = resolve(v119);
            return v120;
        };
        const v122 = exec(getInfoCommand, v121);
        v122;
    };
    var promise = new Promise(v123);
    return promise;
};
const v129 = function () {
    const v125 = this.getInfo();
    const v127 = function (info) {
        const v126 = info['Pages'];
        return v126;
    };
    const v128 = v125.then(v127);
    return v128;
};
const v138 = function (pageNumber) {
    const v130 = this.outputDirectory;
    const v131 = this.pdfFileBaseName;
    const v132 = v131 + '-';
    const v133 = v132 + pageNumber;
    const v134 = v133 + '.';
    const v135 = this.convertExtension;
    const v136 = v134 + v135;
    const v137 = path.join(v130, v136);
    return v137;
};
const v140 = function (convertOptions) {
    const v139 = {};
    this.convertOptions = convertOptions || v139;
};
const v143 = function (pdfFileBaseName) {
    const v141 = this.pdfFilePath;
    const v142 = path.basename(v141, '.pdf');
    this.pdfFileBaseName = pdfFileBaseName || v142;
};
const v144 = function (convertExtension) {
    this.convertExtension = convertExtension || 'png';
};
const v150 = function (pageNumber) {
    var pdfFilePath = this.pdfFilePath;
    var outputImagePath = this.getOutputImagePathForPage(pageNumber);
    var convertOptionsString = this.constructConvertOptions();
    const v145 = this.useGM;
    let v146;
    if (v145) {
        v146 = 'gm convert';
    } else {
        v146 = 'convert';
    }
    const v147 = convertOptionsString + ' ';
    let v148;
    if (convertOptionsString) {
        v148 = v147;
    } else {
        v148 = '';
    }
    const v149 = util.format('%s %s"%s[%d]" "%s"', v146, v148, pdfFilePath, pageNumber, outputImagePath);
    return v149;
};
const v164 = function () {
    const v151 = this.convertOptions;
    const v152 = Object.keys(v151);
    const v153 = v152.sort();
    const v161 = function (optionName) {
        const v154 = this.convertOptions;
        const v155 = v154[optionName];
        const v156 = v155 !== null;
        if (v156) {
            const v157 = optionName + ' ';
            const v158 = this.convertOptions;
            const v159 = v158[optionName];
            const v160 = v157 + v159;
            return v160;
        } else {
            return optionName;
        }
    };
    const v162 = v153.map(v161, this);
    const v163 = v162.join(' ');
    return v163;
};
const v189 = function (pageNumber) {
    var pdfFilePath = this.pdfFilePath;
    var outputImagePath = this.getOutputImagePathForPage(pageNumber);
    var convertCommand = this.constructConvertCommandForPage(pageNumber);
    const v188 = function (resolve, reject) {
        const convertPageToImage = function () {
            const v168 = function (err, stdout, stderr) {
                if (err) {
                    const v165 = {
                        message: 'Failed to convert page to image',
                        error: err,
                        stdout: stdout,
                        stderr: stderr
                    };
                    const v166 = reject(v165);
                    return v166;
                }
                const v167 = resolve(outputImagePath);
                return v167;
            };
            const v169 = exec(convertCommand, v168);
            v169;
        };
        const v186 = function (err, imageFileStat) {
            const v170 = err.code;
            const v171 = v170 === 'ENOENT';
            var imageNotExists = err && v171;
            const v172 = !imageNotExists;
            const v173 = v172 && err;
            if (v173) {
                const v174 = {
                    message: 'Failed to stat image file',
                    error: err
                };
                const v175 = reject(v174);
                return v175;
            }
            if (imageNotExists) {
                const v176 = convertPageToImage();
                v176;
                return;
            }
            const v184 = function (err, pdfFileStat) {
                if (err) {
                    const v177 = {
                        message: 'Failed to stat PDF file',
                        error: err
                    };
                    const v178 = reject(v177);
                    return v178;
                }
                const v179 = imageFileStat.mtime;
                const v180 = pdfFileStat.mtime;
                const v181 = v179 < v180;
                if (v181) {
                    const v182 = convertPageToImage();
                    v182;
                    return;
                }
                const v183 = resolve(outputImagePath);
                return v183;
            };
            const v185 = fs.stat(pdfFilePath, v184);
            v185;
        };
        const v187 = fs.stat(outputImagePath, v186);
        v187;
    };
    var promise = new Promise(v188);
    return promise;
};
const v190 = {};
v190.constructGetInfoCommand = v109;
v190.parseGetInfoCommandOutput = v116;
v190.getInfo = v124;
v190.numberOfPages = v129;
v190.getOutputImagePathForPage = v138;
v190.setConvertOptions = v140;
v190.setPdfFileBaseName = v143;
v190.setConvertExtension = v144;
v190.constructConvertCommandForPage = v150;
v190.constructConvertOptions = v164;
v190.convertPage = v189;
PDFImage.prototype = v190;
module.exports = PDFImage;
const v97 = require('es6-promise');
var Promise = v97.Promise;
var path = require('path');
var fs = require('fs');
var util = require('util');
const v98 = require('child_process');
var exec = v98.exec;
const PDFImage = function (pdfFilePath, options) {
    const v99 = !options;
    if (v99) {
        options = {};
    }
    this.pdfFilePath = pdfFilePath;
    const v100 = options.pdfFileBaseName;
    const v101 = this.setPdfFileBaseName(v100);
    v101;
    const v102 = options.convertOptions;
    const v103 = this.setConvertOptions(v102);
    v103;
    const v104 = options.convertExtension;
    const v105 = this.setConvertExtension(v104);
    v105;
    const v106 = options.graphicsMagick;
    this.useGM = v106 || false;
    const v107 = options.outputDirectory;
    const v108 = path.dirname(pdfFilePath);
    this.outputDirectory = v107 || v108;
};
const v111 = function () {
    const v109 = this.pdfFilePath;
    const v110 = util.format('pdfinfo "%s"', v109);
    return v110;
};
const v118 = function (output) {
    var info = {};
    const v112 = output.split('\n');
    const v116 = function (line) {
        const v113 = line.match(/^(.*?):[ \t]*(.*)$/);
        if (v113) {
            const v114 = RegExp.$1;
            const v115 = RegExp.$2;
            info[v114] = v115;
        }
    };
    const v117 = v112.forEach(v116);
    v117;
    return info;
};
const v126 = function () {
    var self = this;
    var getInfoCommand = this.constructGetInfoCommand();
    const v125 = function (resolve, reject) {
        const v123 = function (err, stdout, stderr) {
            if (err) {
                const v119 = {
                    message: 'Failed to get PDF\'S information',
                    error: err,
                    stdout: stdout,
                    stderr: stderr
                };
                const v120 = reject(v119);
                return v120;
            }
            const v121 = self.parseGetInfoCommandOutput(stdout);
            const v122 = resolve(v121);
            return v122;
        };
        const v124 = exec(getInfoCommand, v123);
        v124;
    };
    var promise = new Promise(v125);
    return promise;
};
const v131 = function () {
    const v127 = this.getInfo();
    const v129 = function (info) {
        const v128 = info['Pages'];
        return v128;
    };
    const v130 = v127.then(v129);
    return v130;
};
const v140 = function (pageNumber) {
    const v132 = this.outputDirectory;
    const v133 = this.pdfFileBaseName;
    const v134 = v133 + '-';
    const v135 = v134 + pageNumber;
    const v136 = v135 + '.';
    const v137 = this.convertExtension;
    const v138 = v136 + v137;
    const v139 = path.join(v132, v138);
    return v139;
};
const v142 = function (convertOptions) {
    const v141 = {};
    this.convertOptions = convertOptions || v141;
};
const v145 = function (pdfFileBaseName) {
    const v143 = this.pdfFilePath;
    const v144 = path.basename(v143, '.pdf');
    this.pdfFileBaseName = pdfFileBaseName || v144;
};
const v146 = function (convertExtension) {
    this.convertExtension = convertExtension || 'png';
};
const v152 = function (pageNumber) {
    var pdfFilePath = this.pdfFilePath;
    var outputImagePath = this.getOutputImagePathForPage(pageNumber);
    var convertOptionsString = this.constructConvertOptions();
    const v147 = this.useGM;
    let v148;
    if (v147) {
        v148 = 'gm convert';
    } else {
        v148 = 'convert';
    }
    const v149 = convertOptionsString + ' ';
    let v150;
    if (convertOptionsString) {
        v150 = v149;
    } else {
        v150 = '';
    }
    const v151 = util.format('%s %s"%s[%d]" "%s"', v148, v150, pdfFilePath, pageNumber, outputImagePath);
    return v151;
};
const v166 = function () {
    const v153 = this.convertOptions;
    const v154 = Object.keys(v153);
    const v155 = v154.sort();
    const v163 = function (optionName) {
        const v156 = this.convertOptions;
        const v157 = v156[optionName];
        const v158 = v157 !== null;
        if (v158) {
            const v159 = optionName + ' ';
            const v160 = this.convertOptions;
            const v161 = v160[optionName];
            const v162 = v159 + v161;
            return v162;
        } else {
            return optionName;
        }
    };
    const v164 = v155.map(v163, this);
    const v165 = v164.join(' ');
    return v165;
};
const v191 = function (pageNumber) {
    var pdfFilePath = this.pdfFilePath;
    var outputImagePath = this.getOutputImagePathForPage(pageNumber);
    var convertCommand = this.constructConvertCommandForPage(pageNumber);
    const v190 = function (resolve, reject) {
        const convertPageToImage = function () {
            const v170 = function (err, stdout, stderr) {
                if (err) {
                    const v167 = {
                        message: 'Failed to convert page to image',
                        error: err,
                        stdout: stdout,
                        stderr: stderr
                    };
                    const v168 = reject(v167);
                    return v168;
                }
                const v169 = resolve(outputImagePath);
                return v169;
            };
            const v171 = exec(convertCommand, v170);
            v171;
        };
        const v188 = function (err, imageFileStat) {
            const v172 = err.code;
            const v173 = v172 === 'ENOENT';
            var imageNotExists = err && v173;
            const v174 = !imageNotExists;
            const v175 = v174 && err;
            if (v175) {
                const v176 = {
                    message: 'Failed to stat image file',
                    error: err
                };
                const v177 = reject(v176);
                return v177;
            }
            if (imageNotExists) {
                const v178 = convertPageToImage();
                v178;
                return;
            }
            const v186 = function (err, pdfFileStat) {
                if (err) {
                    const v179 = {
                        message: 'Failed to stat PDF file',
                        error: err
                    };
                    const v180 = reject(v179);
                    return v180;
                }
                const v181 = imageFileStat.mtime;
                const v182 = pdfFileStat.mtime;
                const v183 = v181 < v182;
                if (v183) {
                    const v184 = convertPageToImage();
                    v184;
                    return;
                }
                const v185 = resolve(outputImagePath);
                return v185;
            };
            const v187 = fs.stat(pdfFilePath, v186);
            v187;
        };
        const v189 = fs.stat(outputImagePath, v188);
        v189;
    };
    var promise = new Promise(v190);
    return promise;
};
const v192 = {};
v192.constructGetInfoCommand = v111;
v192.parseGetInfoCommandOutput = v118;
v192.getInfo = v126;
v192.numberOfPages = v131;
v192.getOutputImagePathForPage = v140;
v192.setConvertOptions = v142;
v192.setPdfFileBaseName = v145;
v192.setConvertExtension = v146;
v192.constructConvertCommandForPage = v152;
v192.constructConvertOptions = v166;
v192.convertPage = v191;
PDFImage.prototype = v192;
exports.PDFImage = PDFImage;
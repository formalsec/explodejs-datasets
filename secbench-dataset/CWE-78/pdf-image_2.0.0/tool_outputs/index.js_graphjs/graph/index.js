var path = require('path');
var fs = require('fs');
var util = require('util');
const v154 = require('child_process');
var exec = v154.exec;
const PDFImage = function (pdfFilePath, options) {
    const v155 = !options;
    if (v155) {
        options = {};
    }
    this.pdfFilePath = pdfFilePath;
    const v156 = options.pdfFileBaseName;
    const v157 = this.setPdfFileBaseName(v156);
    v157;
    const v158 = options.convertOptions;
    const v159 = this.setConvertOptions(v158);
    v159;
    const v160 = options.convertExtension;
    const v161 = this.setConvertExtension(v160);
    v161;
    const v162 = options.graphicsMagick;
    this.useGM = v162 || false;
    const v163 = options.combinedImage;
    this.combinedImage = v163 || false;
    const v164 = options.outputDirectory;
    const v165 = path.dirname(pdfFilePath);
    this.outputDirectory = v164 || v165;
};
const v168 = function () {
    const v166 = this.pdfFilePath;
    const v167 = util.format('pdfinfo "%s"', v166);
    return v167;
};
const v175 = function (output) {
    var info = {};
    const v169 = output.split('\n');
    const v173 = function (line) {
        const v170 = line.match(/^(.*?):[ \t]*(.*)$/);
        if (v170) {
            const v171 = RegExp.$1;
            const v172 = RegExp.$2;
            info[v171] = v172;
        }
    };
    const v174 = v169.forEach(v173);
    v174;
    return info;
};
const v183 = function () {
    var self = this;
    var getInfoCommand = this.constructGetInfoCommand();
    const v182 = function (resolve, reject) {
        const v180 = function (err, stdout, stderr) {
            if (err) {
                const v176 = {
                    message: 'Failed to get PDF\'S information',
                    error: err,
                    stdout: stdout,
                    stderr: stderr
                };
                const v177 = reject(v176);
                return v177;
            }
            const v178 = self.parseGetInfoCommandOutput(stdout);
            const v179 = resolve(v178);
            return v179;
        };
        const v181 = exec(getInfoCommand, v180);
        v181;
    };
    var promise = new Promise(v182);
    return promise;
};
const v188 = function () {
    const v184 = this.getInfo();
    const v186 = function (info) {
        const v185 = info['Pages'];
        return v185;
    };
    const v187 = v184.then(v186);
    return v187;
};
const v197 = function (pageNumber) {
    const v189 = this.outputDirectory;
    const v190 = this.pdfFileBaseName;
    const v191 = v190 + '-';
    const v192 = v191 + pageNumber;
    const v193 = v192 + '.';
    const v194 = this.convertExtension;
    const v195 = v193 + v194;
    const v196 = path.join(v189, v195);
    return v196;
};
const v204 = function () {
    const v198 = this.outputDirectory;
    const v199 = this.pdfFileBaseName;
    const v200 = v199 + '.';
    const v201 = this.convertExtension;
    const v202 = v200 + v201;
    const v203 = path.join(v198, v202);
    return v203;
};
const v206 = function (convertOptions) {
    const v205 = {};
    this.convertOptions = convertOptions || v205;
};
const v209 = function (pdfFileBaseName) {
    const v207 = this.pdfFilePath;
    const v208 = path.basename(v207, '.pdf');
    this.pdfFileBaseName = pdfFileBaseName || v208;
};
const v210 = function (convertExtension) {
    this.convertExtension = convertExtension || 'png';
};
const v216 = function (pageNumber) {
    var pdfFilePath = this.pdfFilePath;
    var outputImagePath = this.getOutputImagePathForPage(pageNumber);
    var convertOptionsString = this.constructConvertOptions();
    const v211 = this.useGM;
    let v212;
    if (v211) {
        v212 = 'gm convert';
    } else {
        v212 = 'convert';
    }
    const v213 = convertOptionsString + ' ';
    let v214;
    if (convertOptionsString) {
        v214 = v213;
    } else {
        v214 = '';
    }
    const v215 = util.format('%s %s"%s[%d]" "%s"', v212, v214, pdfFilePath, pageNumber, outputImagePath);
    return v215;
};
const v222 = function (imagePaths) {
    const v217 = this.useGM;
    let v218;
    if (v217) {
        v218 = 'gm convert';
    } else {
        v218 = 'convert';
    }
    const v219 = imagePaths.join(' ');
    const v220 = this.getOutputImagePathForFile();
    const v221 = util.format('%s -append %s "%s"', v218, v219, v220);
    return v221;
};
const v236 = function () {
    const v223 = this.convertOptions;
    const v224 = Object.keys(v223);
    const v225 = v224.sort();
    const v233 = function (optionName) {
        const v226 = this.convertOptions;
        const v227 = v226[optionName];
        const v228 = v227 !== null;
        if (v228) {
            const v229 = optionName + ' ';
            const v230 = this.convertOptions;
            const v231 = v230[optionName];
            const v232 = v229 + v231;
            return v232;
        } else {
            return optionName;
        }
    };
    const v234 = v225.map(v233, this);
    const v235 = v234.join(' ');
    return v235;
};
const v248 = function (imagePaths) {
    var pdfImage = this;
    var combineCommand = pdfImage.constructCombineCommandForFile(imagePaths);
    const v246 = function (resolve, reject) {
        const v244 = function (err, stdout, stderr) {
            if (err) {
                const v237 = {
                    message: 'Failed to combine images',
                    error: err,
                    stdout: stdout,
                    stderr: stderr
                };
                const v238 = reject(v237);
                return v238;
            }
            const v239 = imagePaths.join(' ');
            const v240 = 'rm ' + v239;
            const v241 = exec(v240);
            v241;
            const v242 = pdfImage.getOutputImagePathForFile();
            const v243 = resolve(v242);
            return v243;
        };
        const v245 = exec(combineCommand, v244);
        v245;
    };
    const v247 = new Promise(v246);
    return v247;
};
const v280 = function () {
    var pdfImage = this;
    const v278 = function (resolve, reject) {
        const v249 = pdfImage.numberOfPages();
        const v276 = function (totalPages) {
            const v264 = function (resolve, reject) {
                var imagePaths = [];
                var i = 0;
                let v250 = i < totalPages;
                while (v250) {
                    const v252 = pdfImage.convertPage(i);
                    const v259 = function (imagePath) {
                        const v253 = imagePaths.push(imagePath);
                        v253;
                        const v254 = imagePaths.length;
                        const v255 = parseInt(totalPages);
                        const v256 = v254 === v255;
                        if (v256) {
                            const v257 = imagePaths.sort();
                            v257;
                            const v258 = resolve(imagePaths);
                            v258;
                        }
                    };
                    const v260 = v252.then(v259);
                    const v262 = function (error) {
                        const v261 = reject(error);
                        v261;
                    };
                    const v263 = v260.catch(v262);
                    v263;
                    const v251 = i++;
                    v250 = i < totalPages;
                }
            };
            var convertPromise = new Promise(v264);
            const v271 = function (imagePaths) {
                const v265 = pdfImage.combinedImage;
                if (v265) {
                    const v266 = pdfImage.combineImages(imagePaths);
                    const v268 = function (imagePath) {
                        const v267 = resolve(imagePath);
                        v267;
                    };
                    const v269 = v266.then(v268);
                    v269;
                } else {
                    const v270 = resolve(imagePaths);
                    v270;
                }
            };
            const v272 = convertPromise.then(v271);
            const v274 = function (error) {
                const v273 = reject(error);
                v273;
            };
            const v275 = v272.catch(v274);
            v275;
        };
        const v277 = v249.then(v276);
        v277;
    };
    const v279 = new Promise(v278);
    return v279;
};
const v305 = function (pageNumber) {
    var pdfFilePath = this.pdfFilePath;
    var outputImagePath = this.getOutputImagePathForPage(pageNumber);
    var convertCommand = this.constructConvertCommandForPage(pageNumber);
    const v304 = function (resolve, reject) {
        const convertPageToImage = function () {
            const v284 = function (err, stdout, stderr) {
                if (err) {
                    const v281 = {
                        message: 'Failed to convert page to image',
                        error: err,
                        stdout: stdout,
                        stderr: stderr
                    };
                    const v282 = reject(v281);
                    return v282;
                }
                const v283 = resolve(outputImagePath);
                return v283;
            };
            const v285 = exec(convertCommand, v284);
            v285;
        };
        const v302 = function (err, imageFileStat) {
            const v286 = err.code;
            const v287 = v286 === 'ENOENT';
            var imageNotExists = err && v287;
            const v288 = !imageNotExists;
            const v289 = v288 && err;
            if (v289) {
                const v290 = {
                    message: 'Failed to stat image file',
                    error: err
                };
                const v291 = reject(v290);
                return v291;
            }
            if (imageNotExists) {
                const v292 = convertPageToImage();
                v292;
                return;
            }
            const v300 = function (err, pdfFileStat) {
                if (err) {
                    const v293 = {
                        message: 'Failed to stat PDF file',
                        error: err
                    };
                    const v294 = reject(v293);
                    return v294;
                }
                const v295 = imageFileStat.mtime;
                const v296 = pdfFileStat.mtime;
                const v297 = v295 < v296;
                if (v297) {
                    const v298 = convertPageToImage();
                    v298;
                    return;
                }
                const v299 = resolve(outputImagePath);
                return v299;
            };
            const v301 = fs.stat(pdfFilePath, v300);
            v301;
        };
        const v303 = fs.stat(outputImagePath, v302);
        v303;
    };
    var promise = new Promise(v304);
    return promise;
};
const v306 = {};
v306.constructGetInfoCommand = v168;
v306.parseGetInfoCommandOutput = v175;
v306.getInfo = v183;
v306.numberOfPages = v188;
v306.getOutputImagePathForPage = v197;
v306.getOutputImagePathForFile = v204;
v306.setConvertOptions = v206;
v306.setPdfFileBaseName = v209;
v306.setConvertExtension = v210;
v306.constructConvertCommandForPage = v216;
v306.constructCombineCommandForFile = v222;
v306.constructConvertOptions = v236;
v306.combineImages = v248;
v306.convertFile = v280;
v306.convertPage = v305;
PDFImage.prototype = v306;
exports.PDFImage = PDFImage;
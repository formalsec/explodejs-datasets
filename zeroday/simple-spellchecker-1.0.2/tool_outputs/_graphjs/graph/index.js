const fs = require('fs');
const path = require('path');
const tmp = require('tmp');
const Zip = require('adm-zip');
const stripBOM = require('strip-bom');
const Dictionary = require('./dictionary.js');
const FOLDER_PATH = __dirname + '/dict';
const v253 = function (fileName, folderPath) {
    try {
        let folder;
        const v229 = !folderPath;
        const v230 = typeof folderPath;
        const v231 = v230 != 'string';
        const v232 = v229 || v231;
        if (v232) {
            folder = FOLDER_PATH;
        } else {
            folder = folderPath;
        }
        const v233 = arguments.length;
        const v234 = v233 - 1;
        var callback = arguments[v234];
        const v235 = folder + '/';
        const v236 = v235 + fileName;
        var dic_path = v236 + '.dic';
        const v237 = folder + '/';
        const v238 = v237 + fileName;
        var zip_path = v238 + '.zip';
        const v249 = function (exists) {
            if (exists) {
                const v239 = SpellChecker._readFile(dic_path, callback);
                v239;
            } else {
                const v247 = function (exists) {
                    if (exists) {
                        try {
                            const v240 = SpellChecker._unzipSync(zip_path, folder);
                            v240;
                            const v241 = SpellChecker._readFile(dic_path, callback);
                            v241;
                        } catch (errZip) {
                            if (callback) {
                                const v242 = 'An unexpected error ocurred: ' + errZip;
                                const v243 = callback(v242, null);
                                v243;
                            }
                        }
                    } else {
                        const v244 = 'The dictionary could not be read, no file with the name "' + fileName;
                        const v245 = v244 + '" could be found';
                        const v246 = callback(v245, null);
                        v246;
                    }
                };
                const v248 = fs.exists(zip_path, v247);
                v248;
            }
        };
        const v250 = fs.exists(dic_path, v249);
        v250;
    } catch (err) {
        if (callback) {
            const v251 = 'An unexpected error ocurred: ' + err;
            const v252 = callback(v251, null);
            v252;
        }
    }
};
const v261 = function (file_path, callback) {
    const v259 = function (err, text) {
        const v254 = !err;
        if (v254) {
            const v255 = text.split('\n');
            var dictionary = new Dictionary(v255);
            const v256 = callback(null, dictionary);
            v256;
        } else {
            const v257 = 'The dictionary file could not be read: ' + err;
            const v258 = callback(v257, null);
            v258;
        }
    };
    const v260 = fs.readFile(file_path, 'utf8', v259);
    v260;
};
const v267 = function (file_path) {
    try {
        var text = fs.readFileSync(file_path, 'utf8');
        const v262 = text.split('\n');
        var dictionary = new Dictionary(v262);
        return dictionary;
    } catch (err) {
        const v263 = 'The dictionary file could not be read: ' + file_path;
        const v264 = v263 + '. Error: ';
        const v265 = v264 + err;
        const v266 = new Error(v265);
        throw v266;
    }
};
const v277 = function (zipPath, destinationDir) {
    const v268 = { dir: destinationDir };
    var tmpDir = tmp.dirSync(v268);
    var zip = new Zip(zipPath);
    const v269 = tmpDir.name;
    const v270 = zip.extractAllTo(v269);
    v270;
    const v271 = zip.getEntries();
    const v274 = ({entryName}) => {
        const v272 = tmpDir.name;
        var from = path.join(v272, entryName);
        var to = path.join(destinationDir, entryName);
        const v273 = fs.renameSync(from, to);
        v273;
    };
    const v275 = v271.forEach(v274);
    v275;
    const v276 = tmpDir.removeCallback();
    v276;
};
const v293 = function (fileName, folderPath) {
    try {
        let folder;
        const v278 = !folderPath;
        const v279 = typeof folderPath;
        const v280 = v279 != 'string';
        const v281 = v278 || v280;
        if (v281) {
            folder = FOLDER_PATH;
        } else {
            folder = folderPath;
        }
        const v282 = folder + '/';
        const v283 = v282 + fileName;
        var dic_path = v283 + '.dic';
        const v284 = folder + '/';
        const v285 = v284 + fileName;
        var zip_path = v285 + '.zip';
        const v286 = fs.existsSync(dic_path);
        if (v286) {
            var dictionary = SpellChecker._readFileSync(dic_path);
            return dictionary;
        } else {
            var exists = fs.existsSync(zip_path);
            if (exists) {
                const v287 = SpellChecker._unzipSync(zip_path, folder);
                v287;
                var dictionary = SpellChecker._readFileSync(dic_path);
                return dictionary;
            } else {
                const v288 = 'The dictionary could not be read, no file with the name "' + fileName;
                const v289 = v288 + '" could be found';
                const v290 = new Error(v289);
                throw v290;
            }
        }
    } catch (err) {
        const v291 = 'An unexpected error ocurred: ' + err;
        const v292 = new Error(v291);
        throw v292;
    }
};
const v330 = function (inputPath, outputPath) {
    try {
        const v294 = !outputPath;
        const v295 = typeof outputPath;
        const v296 = v295 != 'string';
        const v297 = v294 || v296;
        if (v297) {
            outputPath = inputPath;
        }
        let callback;
        const v298 = arguments.length;
        const v299 = v298 > 0;
        const v300 = arguments.length;
        const v301 = v300 - 1;
        const v302 = arguments[v301];
        const v303 = function () {
        };
        if (v299) {
            callback = v302;
        } else {
            callback = v303;
        }
        const v326 = function (exists) {
            if (exists) {
                const v323 = function (err, content) {
                    const v304 = !err;
                    if (v304) {
                        content = stripBOM(content);
                        content = content.replace(/\r/g, '');
                        var lines = content.split('\n');
                        var collator = new Intl.Collator();
                        const v305 = collator.compare;
                        lines = lines.sort(v305);
                        var newContent = '';
                        var first = true;
                        var i = 0;
                        const v306 = lines.length;
                        let v307 = i < v306;
                        while (v307) {
                            const v309 = lines[i];
                            const v310 = v309 != '';
                            const v311 = lines[i];
                            const v312 = v311 != '\n';
                            const v313 = v310 && v312;
                            if (v313) {
                                const v314 = !first;
                                if (v314) {
                                    newContent += '\n';
                                }
                                newContent += lines[i];
                                first = false;
                            }
                            const v308 = i++;
                            v307 = i < v306;
                        }
                        const v319 = function (err) {
                            const v315 = 'The output file could not be writted: ' + err;
                            let v316;
                            if (err) {
                                v316 = v315;
                            } else {
                                v316 = null;
                            }
                            const v317 = !err;
                            const v318 = callback(v316, v317);
                            v318;
                        };
                        const v320 = fs.writeFile(outputPath, newContent, 'utf8', v319);
                        v320;
                    } else {
                        const v321 = 'The input file could not be read: ' + err;
                        const v322 = callback(v321, false);
                        v322;
                    }
                };
                const v324 = fs.readFile(inputPath, 'utf8', v323);
                v324;
            } else {
                const v325 = callback('The input file does not exists', false);
                v325;
            }
        };
        const v327 = fs.exists(inputPath, v326);
        v327;
    } catch (err) {
        const v328 = 'An unexpected error ocurred: ' + err;
        const v329 = callback(v328, false);
        v329;
    }
};
var SpellChecker = {};
SpellChecker.getDictionary = v253;
SpellChecker._readFile = v261;
SpellChecker._readFileSync = v267;
SpellChecker._unzipSync = v277;
SpellChecker.getDictionarySync = v293;
SpellChecker.normalizeDictionary = v330;
module.exports = SpellChecker;
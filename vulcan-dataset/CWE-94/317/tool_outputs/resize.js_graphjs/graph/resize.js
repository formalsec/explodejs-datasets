const v107 = require('child_process');
var exec = v107.exec;
var path = require('path');
var async = require('async');
var mkdirp = require('mkdirp');
var sizeOf = require('image-size');
const v108 = [
    'ios',
    'android'
];
var defaults = {};
defaults.PLATFORMS_TO_BUILD = v108;
defaults.ORIGINAL_ICON_FILE_NAME = 'appicon_1024.png';
defaults.IOS_FILE_NAME_PREFIX = 'Icon';
defaults.IOS_OUTPUT_FOLDER = '.';
defaults.ANDROID_OUTPUT_FOLDER = '.';
defaults.ANDROID_BASE_SIZE = 48;
const getSize = function (str) {
    const v109 = str.split('x');
    const v110 = v109[0];
    const v111 = v110.trim();
    return v111;
};
const getSizeFromRatio = function (options) {
    const v112 = options.ratio;
    var ratio = eval(v112);
    const v113 = options.size;
    const v114 = v113 * ratio;
    const v115 = Math.floor(v114);
    return v115;
};
const executeResize = function (options, callback) {
    const v116 = options.size;
    const v117 = v116 + 'x';
    const v118 = options.size;
    var dimensions = v117 + v118;
    const v119 = options.inputFile;
    const v120 = 'convert "' + v119;
    const v121 = v120 + '" -thumbnail ';
    const v122 = v121 + dimensions;
    const v123 = v122 + ' "';
    const v124 = options.outputFile;
    const v125 = v123 + v124;
    var command = v125 + '"';
    const v126 = print(command);
    v126;
    const v133 = function (err, stdout, stderr) {
        if (stderr) {
            const v127 = 'stderr: ' + stderr;
            const v128 = console.log(v127);
            v128;
        }
        const v129 = err !== null;
        if (v129) {
            const v130 = 'exec error: ' + err;
            const v131 = console.log(v130);
            v131;
        }
        const v132 = callback(err);
        v132;
    };
    child = exec(command, v133);
};
const convertiOS = function (options, callback) {
    const v134 = options.config;
    const v135 = v134.iOS;
    var images = v135.images;
    const handleImage = function (image, done) {
        const v136 = image.size;
        var size = getSize(v136);
        const v137 = image.scale;
        var scale = getSize(v137);
        var finalSize = size * scale;
        var baseFolder = options.iosOutputFolder;
        const v138 = mkdirp.sync(baseFolder);
        v138;
        const v139 = options.iosFilenamePrefix;
        const v140 = image.filename;
        const v141 = v139 + v140;
        var fileName = path.join(baseFolder, v141);
        const v142 = options.originalIconFilename;
        const v143 = {
            inputFile: v142,
            size: finalSize,
            outputFile: fileName
        };
        const v145 = function (err) {
            const v144 = done(err);
            v144;
        };
        const v146 = executeResize(v143, v145);
        v146;
    };
    const v148 = function (err) {
        const v147 = callback(err);
        v147;
    };
    const v149 = async.each(images, handleImage, v148);
    v149;
};
const convertAndroid = function (options, callback) {
    const v150 = options.config;
    const v151 = v150.android;
    var images = v151.images;
    const handleImage = function (image, done) {
        var size = 100;
        const v152 = image.baseRatio;
        if (v152) {
            const v153 = options.androidBaseSize;
            const v154 = image.baseRatio;
            const v155 = {
                size: v153,
                ratio: v154
            };
            size = getSizeFromRatio(v155);
        } else {
            const v156 = image.ratio;
            if (v156) {
                const v157 = options.originalSize;
                const v158 = image.ratio;
                const v159 = {
                    size: v157,
                    ratio: v158
                };
                size = getSizeFromRatio(v159);
            } else {
                const v160 = image.size;
                if (v160) {
                    const v161 = image.size;
                    size = getSize(v161);
                } else {
                    const v162 = new Error('No size nor ratio defined for Android icon');
                    const v163 = done(v162);
                    return v163;
                }
            }
        }
        const v164 = options.androidOutputFolder;
        const v165 = image.folder;
        var baseFolder = path.join(v164, v165);
        const v166 = mkdirp.sync(baseFolder);
        v166;
        const v167 = options.androidOutputFilename;
        var fileName = path.join(baseFolder, v167);
        const v168 = options.originalIconFilename;
        const v169 = {
            inputFile: v168,
            size: size,
            outputFile: fileName
        };
        const v171 = function (err) {
            const v170 = done(err);
            v170;
        };
        const v172 = executeResize(v169, v171);
        v172;
    };
    const v174 = function (err) {
        const v173 = callback(err);
        v173;
    };
    const v175 = async.each(images, handleImage, v174);
    v175;
};
var platformConverters = {};
platformConverters['android'] = convertAndroid;
platformConverters['ios'] = convertiOS;
var resize = function (options, callback) {
    const v176 = {};
    options = options || v176;
    const v177 = options.platformsToBuild;
    const v178 = defaults.PLATFORMS_TO_BUILD;
    options.platformsToBuild = v177 || v178;
    const v179 = options.originalIconFilename;
    const v180 = defaults.ORIGINAL_ICON_FILE_NAME;
    options.originalIconFilename = v179 || v180;
    const v181 = options.iosFilenamePrefix;
    const v182 = defaults.IOS_FILE_NAME_PREFIX;
    options.iosFilenamePrefix = v181 || v182;
    const v183 = options.iosOutputFolder;
    const v184 = defaults.IOS_OUTPUT_FOLDER;
    options.iosOutputFolder = v183 || v184;
    const v185 = options.androidOutputFolder;
    const v186 = defaults.ANDROID_OUTPUT_FOLDER;
    options.androidOutputFolder = v185 || v186;
    const v187 = options.androidOutputFilename;
    const v188 = options.originalIconFilename;
    const v189 = path.basename(v188);
    options.androidOutputFilename = v187 || v189;
    const v190 = options.androidBaseSize;
    const v191 = defaults.ANDROID_BASE_SIZE;
    options.androidBaseSize = v190 || v191;
    const v192 = options.originalIconFilename;
    var dimensions = sizeOf(v192);
    const v193 = dimensions.width;
    const v194 = dimensions.height;
    const v195 = Math.max(v193, v194);
    options.originalSize = v195;
    const v196 = options.config;
    const v197 = options.config;
    const v198 = path.resolve(v197);
    const v199 = require(v198);
    const v200 = require('../config');
    let v201;
    if (v196) {
        v201 = v199;
    } else {
        v201 = v200;
    }
    options.config = v201;
    const v202 = options.platformsToBuild;
    const v211 = function (item, done) {
        const v203 = platformConverters[item];
        const v204 = typeof v203;
        const v205 = v204 !== 'function';
        if (v205) {
            const v206 = 'Platform type "' + item;
            const v207 = v206 + '" is not supported.';
            const v208 = new Error(v207);
            const v209 = done(v208);
            return v209;
        }
        const v210 = platformConverters[item](options, done);
        v210;
    };
    const v212 = async.each(v202, v211, callback);
    v212;
};
resize.defaults = defaults;
module.exports = resize;
exports = module.exports;
var CachingWriter = require('broccoli-caching-writer');
var sriToolbox = require('sri-toolbox');
var fs = require('fs');
var crypto = require('crypto');
const v168 = require('symlink-or-copy');
var symlinkOrCopy = v168.sync;
const v169 = require('rsvp');
var Promise = v169.Promise;
var path = require('path');
var STYLE_CHECK = /\srel=["\'][^"]*stylesheet[^"]*["\']/;
var SRC_CHECK = /\ssrc=["\']([^"\']+)["\']/;
var HREF_CHECK = /\shref=["\']([^"\']+)["\']/;
var BASE_CHECK = new RegExp('<base[^>]*href=["\']([^"]*)["\'][^>]*>', 'g');
var SCRIPT_CHECK = new RegExp('<script[^>]*src=["\']([^"]*)["\'][^>]*>', 'g');
var LINT_CHECK = new RegExp('<link[^>]*href=["\']([^"]*)["\'][^>]*>', 'g');
var INTEGRITY_CHECK = new RegExp('integrity=["\']');
var CROSS_ORIGIN_CHECK = new RegExp('crossorigin=["\']([^"\']+)["\']');
var MD5_CHECK = /^(.*)[-]([a-z0-9]{32})([.].*)$/;
var mkdirp = require('mkdirp');
const SRIHashAssets = function (inputNodes, options) {
    const v170 = this instanceof SRIHashAssets;
    const v171 = !v170;
    if (v171) {
        const v172 = new SRIHashAssets(inputNodes, options);
        return v172;
    }
    const v173 = {};
    this.options = options || v173;
    const v174 = this.options;
    const v175 = v174.context;
    const v176 = {};
    this.context = v175 || v176;
    var nodes = inputNodes;
    const v177 = Array.isArray(nodes);
    const v178 = !v177;
    if (v178) {
        nodes = [nodes];
    }
    const v179 = {};
    const v180 = CachingWriter.call(this, nodes, v179);
    v180;
    const v181 = this.options;
    const v182 = 'paranoiaCheck' in v181;
    const v183 = !v182;
    if (v183) {
        const v184 = this.options;
        v184.paranoiaCheck = false;
    }
    const v185 = this.options;
    const v186 = 'fingerprintCheck' in v185;
    const v187 = !v186;
    if (v187) {
        const v188 = this.options;
        v188.fingerprintCheck = true;
    }
    const v189 = this.options;
    const v190 = 'origin' in v189;
    if (v190) {
        const v191 = this.options;
        const v192 = 'prefix' in v191;
        const v193 = this.options;
        const v194 = 'crossorigin' in v193;
        const v195 = !v194;
        const v196 = v192 && v195;
        if (v196) {
            const v197 = this.options;
            const v198 = v197.prefix;
            const v199 = this.options;
            const v200 = v199.origin;
            const v201 = v198.indexOf(v200, 0);
            const v202 = v201 === 0;
            if (v202) {
                const v203 = this.options;
                v203.crossorigin = false;
            }
        }
    }
};
const v204 = CachingWriter.prototype;
const v205 = Object.create(v204);
SRIHashAssets.prototype = v205;
const v206 = SRIHashAssets.prototype;
v206.constructor = SRIHashAssets;
const v207 = SRIHashAssets.prototype;
const getBaseHREF = function (string) {
    var baseTag = string.match(BASE_CHECK);
    const v208 = baseTag[0];
    const v209 = baseTag && v208;
    if (v209) {
        const v210 = baseTag[0];
        var href = v210.match(HREF_CHECK);
        const v211 = href[1];
        var relativePath = href && v211;
        const v212 = !relativePath;
        if (v212) {
            return null;
        }
        const v213 = relativePath[0];
        const v214 = !v213;
        const v215 = v214 === '/';
        if (v215) {
            return null;
        }
        const v216 = this.inputPaths;
        const v217 = v216[0];
        const v218 = v217 + relativePath;
        return v218;
    }
    return null;
};
v207.getBaseHREF = getBaseHREF;
const v219 = SRIHashAssets.prototype;
const addSRI = function (string, srcDir) {
    var plugin = this;
    var base = this.getBaseHREF(string);
    const v223 = function srcMatch(match) {
        var src = match.match(SRC_CHECK);
        var filePath;
        const v220 = !src;
        if (v220) {
            return match;
        }
        filePath = src[1];
        const v221 = base || srcDir;
        const v222 = plugin.mungeOutput(match, filePath, v221);
        return v222;
    };
    const v224 = string.replace(SCRIPT_CHECK, v223);
    const v230 = function hrefMatch(match) {
        var href = match.match(HREF_CHECK);
        var isStyle = STYLE_CHECK.test(match);
        var filePath;
        const v225 = !isStyle;
        const v226 = !href;
        const v227 = v225 || v226;
        if (v227) {
            return match;
        }
        filePath = href[1];
        const v228 = base || srcDir;
        const v229 = plugin.mungeOutput(match, filePath, v228);
        return v229;
    };
    const v231 = v224.replace(LINT_CHECK, v230);
    return v231;
};
v219.addSRI = addSRI;
const v232 = SRIHashAssets.prototype;
const readFile = function (dirname, file) {
    var assetSource;
    try {
        const v233 = dirname + '/';
        const v234 = v233 + file;
        assetSource = fs.readFileSync(v234, 'utf8');
    } catch (e) {
        return null;
    }
    return assetSource;
};
v232.readFile = readFile;
const v235 = SRIHashAssets.prototype;
const paranoiaCheck = function (assetSource) {
    var i;
    var checkResult = true;
    const v236 = this.options;
    const v237 = v236.paranoiaCheck;
    const v238 = v237 === true;
    if (v238) {
        i = 0
        const v239 = assetSource.length;
        let v240 = i < v239;
        while (v240) {
            const v242 = assetSource.charCodeAt(i);
            const v243 = v242 > 127;
            if (v243) {
                checkResult = false;
                break;
            }
            const v241 = i++;
            v240 = i < v239;
        }
    }
    return checkResult;
};
v235.paranoiaCheck = paranoiaCheck;
const v244 = SRIHashAssets.prototype;
const generateIntegrity = function (output, file, dirname, external) {
    var assetSource = this.readFile(dirname, file);
    var selfCloseCheck = /\s*\/>$/;
    var integrity;
    var append;
    var outputWithIntegrity;
    const v245 = assetSource === null;
    if (v245) {
        return output;
    }
    const v246 = this.paranoiaCheck(assetSource);
    const v247 = v246 === false;
    if (v247) {
        return output;
    }
    const v248 = [
        'sha256',
        'sha512'
    ];
    const v249 = { algorithms: v248 };
    integrity = sriToolbox.generate(v249, assetSource);
    const v250 = ' integrity="' + integrity;
    append = v250 + '"';
    const v251 = this.options;
    const v252 = v251.crossorigin;
    const v253 = external && v252;
    if (v253) {
        const v254 = CROSS_ORIGIN_CHECK.test(output);
        const v255 = !v254;
        if (v255) {
            const v256 = append + ' crossorigin="';
            const v257 = this.options;
            const v258 = v257.crossorigin;
            const v259 = v256 + v258;
            append = v259 + '" ';
        }
    }
    const v260 = selfCloseCheck.test(output);
    if (v260) {
        const v261 = append + ' />';
        outputWithIntegrity = output.replace(selfCloseCheck, v261);
    } else {
        const v262 = append + ' >';
        outputWithIntegrity = output.replace(/\s*[>]$/, v262);
    }
    return outputWithIntegrity;
};
v244.generateIntegrity = generateIntegrity;
const v263 = SRIHashAssets.prototype;
const checkExternal = function (output, file, dirname) {
    var md5Matches = file.match(MD5_CHECK);
    var md5sum = crypto.createHash('md5');
    var assetSource;
    var filePath;
    const v264 = this.options;
    const v265 = 'prefix' in v264;
    const v266 = !v265;
    const v267 = this.options;
    const v268 = 'crossorigin' in v267;
    const v269 = !v268;
    const v270 = v266 || v269;
    const v271 = md5Matches === null;
    const v272 = v270 || v271;
    if (v272) {
        return output;
    }
    const v273 = this.options;
    const v274 = v273.prefix;
    filePath = file.replace(v274, '');
    const v275 = filePath === file;
    if (v275) {
        return output;
    }
    assetSource = this.readFile(dirname, filePath);
    const v276 = assetSource === null;
    if (v276) {
        const v277 = md5Matches[1];
        const v278 = this.options;
        const v279 = v278.prefix;
        const v280 = v277.replace(v279, '');
        const v281 = md5Matches[3];
        filePath = v280 + v281;
        assetSource = this.readFile(dirname, filePath);
        const v282 = assetSource === null;
        if (v282) {
            return output;
        }
    }
    const v283 = md5sum.update(assetSource, 'utf8');
    v283;
    const v284 = this.options;
    const v285 = v284.fingerprintCheck;
    const v286 = v285 === false;
    const v287 = md5Matches[2];
    const v288 = md5sum.digest('hex');
    const v289 = v287 === v288;
    const v290 = v286 || v289;
    if (v290) {
        const v291 = this.generateIntegrity(output, filePath, dirname, true);
        return v291;
    }
    return output;
};
v263.checkExternal = checkExternal;
const v292 = SRIHashAssets.prototype;
const mungeOutput = function (output, filePath, srcDir) {
    var newOutput = output;
    const v293 = /^https?:\/\//.test(filePath);
    if (v293) {
        const v294 = this.checkExternal(output, filePath, srcDir);
        return v294;
    }
    const v295 = INTEGRITY_CHECK.test(output);
    const v296 = !v295;
    if (v296) {
        newOutput = this.generateIntegrity(output, filePath, srcDir);
    }
    return newOutput;
};
v292.mungeOutput = mungeOutput;
const v297 = SRIHashAssets.prototype;
const processFile = function (entry) {
    const v298 = entry.fullPath;
    var srcDir = path.dirname(v298);
    const v299 = entry.fullPath;
    const v300 = fs.readFileSync(v299, 'utf8');
    var fileContent = this.addSRI(v300, srcDir);
    const v301 = this.outputPath;
    const v302 = v301 + '/';
    const v303 = entry.relativePath;
    var fullPath = v302 + v303;
    const v304 = path.dirname(fullPath);
    const v305 = mkdirp.sync(v304);
    v305;
    const v306 = fs.writeFileSync(fullPath, fileContent);
    v306;
};
v297.processHTMLFile = processFile;
const v307 = SRIHashAssets.prototype;
const v315 = function (entry) {
    const v308 = this.outputPath;
    const v309 = v308 + '/';
    const v310 = entry.relativePath;
    var fullPath = v309 + v310;
    const v311 = path.dirname(fullPath);
    const v312 = mkdirp.sync(v311);
    v312;
    const v313 = entry.fullPath;
    const v314 = symlinkOrCopy(v313, fullPath);
    v314;
};
v307.processOtherFile = v315;
const v316 = SRIHashAssets.prototype;
const v334 = function () {
    var html = [];
    var other = [];
    const v317 = this.listEntries();
    const v322 = function (entry) {
        const v318 = entry.relativePath;
        const v319 = /\.html$/.test(v318);
        if (v319) {
            const v320 = html.push(entry);
            v320;
        } else {
            const v321 = other.push(entry);
            v321;
        }
    };
    const v323 = v317.forEach(v322);
    v323;
    const v324 = this.processHTMLFile;
    const v325 = v324.bind(this);
    const v326 = html.map(v325);
    const v327 = Promise.all(v326);
    const v328 = this.processOtherFile;
    const v329 = v328.bind(this);
    const v330 = other.map(v329);
    const v331 = Promise.all(v330);
    const v332 = [
        v327,
        v331
    ];
    const v333 = Promise.all(v332);
    return v333;
};
v316.build = v334;
module.exports = SRIHashAssets;
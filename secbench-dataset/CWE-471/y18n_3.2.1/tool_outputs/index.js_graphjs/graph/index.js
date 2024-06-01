var fs = require('fs');
var path = require('path');
var util = require('util');
const Y18N = function (opts) {
    const v173 = {};
    opts = opts || v173;
    const v174 = opts.directory;
    this.directory = v174 || './locales';
    const v175 = opts.updateFiles;
    const v176 = typeof v175;
    const v177 = v176 === 'boolean';
    const v178 = opts.updateFiles;
    let v179;
    if (v177) {
        v179 = v178;
    } else {
        v179 = true;
    }
    this.updateFiles = v179;
    const v180 = opts.locale;
    this.locale = v180 || 'en';
    const v181 = opts.fallbackToLanguage;
    const v182 = typeof v181;
    const v183 = v182 === 'boolean';
    const v184 = opts.fallbackToLanguage;
    let v185;
    if (v183) {
        v185 = v184;
    } else {
        v185 = true;
    }
    this.fallbackToLanguage = v185;
    const v186 = {};
    this.cache = v186;
    this.writeQueue = [];
};
const v187 = Y18N.prototype;
const v225 = function () {
    const v188 = Array.prototype;
    const v189 = v188.slice;
    var args = v189.call(arguments);
    var str = args.shift();
    var cb = function () {
    };
    const v190 = args.length;
    const v191 = v190 - 1;
    const v192 = args[v191];
    const v193 = typeof v192;
    const v194 = v193 === 'function';
    if (v194) {
        cb = args.pop();
    }
    const v195 = function () {
    };
    cb = cb || v195;
    const v196 = this.cache;
    const v197 = this.locale;
    const v198 = v196[v197];
    const v199 = !v198;
    if (v199) {
        const v200 = this._readLocaleFile();
        v200;
    }
    const v201 = this.cache;
    const v202 = this.locale;
    const v203 = v201[v202];
    const v204 = v203[str];
    const v205 = !v204;
    const v206 = this.updateFiles;
    const v207 = v205 && v206;
    if (v207) {
        const v208 = this.cache;
        const v209 = this.locale;
        const v210 = v208[v209];
        v210[str] = str;
        const v211 = this.directory;
        const v212 = this.locale;
        const v213 = [
            v211,
            v212,
            cb
        ];
        const v214 = this._enqueueWrite(v213);
        v214;
    } else {
        const v215 = cb();
        v215;
    }
    const v216 = util.format;
    const v217 = this.cache;
    const v218 = this.locale;
    const v219 = v217[v218];
    const v220 = v219[str];
    const v221 = v220 || str;
    const v222 = [v221];
    const v223 = v222.concat(args);
    const v224 = v216.apply(util, v223);
    return v224;
};
v187.__ = v225;
const v226 = Y18N.prototype;
const v233 = function (work) {
    const v227 = this.writeQueue;
    const v228 = v227.push(work);
    v228;
    const v229 = this.writeQueue;
    const v230 = v229.length;
    const v231 = v230 === 1;
    if (v231) {
        const v232 = this._processWriteQueue();
        v232;
    }
};
v226._enqueueWrite = v233;
const v234 = Y18N.prototype;
const v247 = function () {
    var _this = this;
    const v235 = this.writeQueue;
    var work = v235[0];
    var directory = work[0];
    var locale = work[1];
    var cb = work[2];
    var languageFile = this._resolveLocaleFile(directory, locale);
    const v236 = this.cache;
    const v237 = v236[locale];
    var serializedLocale = JSON.stringify(v237, null, 2);
    const v245 = function (err) {
        const v238 = _this.writeQueue;
        const v239 = v238.shift();
        v239;
        const v240 = _this.writeQueue;
        const v241 = v240.length;
        const v242 = v241 > 0;
        if (v242) {
            const v243 = _this._processWriteQueue();
            v243;
        }
        const v244 = cb(err);
        v244;
    };
    const v246 = fs.writeFile(languageFile, serializedLocale, 'utf-8', v245);
    v246;
};
v234._processWriteQueue = v247;
const v248 = Y18N.prototype;
const v257 = function () {
    var localeLookup = {};
    const v249 = this.directory;
    const v250 = this.locale;
    var languageFile = this._resolveLocaleFile(v249, v250);
    try {
        const v251 = fs.readFileSync(languageFile, 'utf-8');
        localeLookup = JSON.parse(v251);
    } catch (err) {
        const v252 = err instanceof SyntaxError;
        if (v252) {
            err.message = 'syntax error in ' + languageFile;
        }
        const v253 = err.code;
        const v254 = v253 === 'ENOENT';
        if (v254) {
            localeLookup = {};
        } else {
            throw err;
        }
    }
    const v255 = this.cache;
    const v256 = this.locale;
    v255[v256] = localeLookup;
};
v248._readLocaleFile = v257;
const v258 = Y18N.prototype;
const v271 = function (directory, locale) {
    const v259 = locale + '.json';
    var file = path.resolve(directory, './', v259);
    const v260 = this.fallbackToLanguage;
    const v261 = this._fileExistsSync(file);
    const v262 = !v261;
    const v263 = v260 && v262;
    const v264 = locale.lastIndexOf('_');
    const v265 = ~v264;
    const v266 = v263 && v265;
    if (v266) {
        const v267 = locale.split('_');
        const v268 = v267[0];
        const v269 = v268 + '.json';
        var languageFile = path.resolve(directory, './', v269);
        const v270 = this._fileExistsSync(languageFile);
        if (v270) {
            file = languageFile;
        }
    }
    return file;
};
v258._resolveLocaleFile = v271;
const v272 = Y18N.prototype;
const v275 = function (file) {
    try {
        const v273 = fs.statSync(file);
        const v274 = v273.isFile();
        return v274;
    } catch (err) {
        return false;
    }
};
v272._fileExistsSync = v275;
const v276 = Y18N.prototype;
const v322 = function () {
    const v277 = Array.prototype;
    const v278 = v277.slice;
    var args = v278.call(arguments);
    var singular = args.shift();
    var plural = args.shift();
    var quantity = args.shift();
    var cb = function () {
    };
    const v279 = args.length;
    const v280 = v279 - 1;
    const v281 = args[v280];
    const v282 = typeof v281;
    const v283 = v282 === 'function';
    if (v283) {
        cb = args.pop();
    }
    const v284 = this.cache;
    const v285 = this.locale;
    const v286 = v284[v285];
    const v287 = !v286;
    if (v287) {
        const v288 = this._readLocaleFile();
        v288;
    }
    let str;
    const v289 = quantity === 1;
    if (v289) {
        str = singular;
    } else {
        str = plural;
    }
    const v290 = this.cache;
    const v291 = this.locale;
    const v292 = v290[v291];
    const v293 = v292[singular];
    if (v293) {
        const v294 = this.cache;
        const v295 = this.locale;
        const v296 = v294[v295];
        const v297 = v296[singular];
        const v298 = quantity === 1;
        let v299;
        if (v298) {
            v299 = 'one';
        } else {
            v299 = 'other';
        }
        str = v297[v299];
    }
    const v300 = this.cache;
    const v301 = this.locale;
    const v302 = v300[v301];
    const v303 = v302[singular];
    const v304 = !v303;
    const v305 = this.updateFiles;
    const v306 = v304 && v305;
    if (v306) {
        const v307 = this.cache;
        const v308 = this.locale;
        const v309 = v307[v308];
        const v310 = {};
        v310.one = singular;
        v310.other = plural;
        v309[singular] = v310;
        const v311 = this.directory;
        const v312 = this.locale;
        const v313 = [
            v311,
            v312,
            cb
        ];
        const v314 = this._enqueueWrite(v313);
        v314;
    } else {
        const v315 = cb();
        v315;
    }
    var values = [str];
    const v316 = str.indexOf('%d');
    const v317 = ~v316;
    if (v317) {
        const v318 = values.push(quantity);
        v318;
    }
    const v319 = util.format;
    const v320 = values.concat(args);
    const v321 = v319.apply(util, v320);
    return v321;
};
v276.__n = v322;
const v323 = Y18N.prototype;
const v324 = function (locale) {
    this.locale = locale;
};
v323.setLocale = v324;
const v325 = Y18N.prototype;
const v327 = function () {
    const v326 = this.locale;
    return v326;
};
v325.getLocale = v327;
const v328 = Y18N.prototype;
const v338 = function (obj) {
    const v329 = this.cache;
    const v330 = this.locale;
    const v331 = v329[v330];
    const v332 = !v331;
    if (v332) {
        const v333 = this._readLocaleFile();
        v333;
    }
    let key;
    for (key in obj) {
        const v334 = this.cache;
        const v335 = this.locale;
        const v336 = v334[v335];
        const v337 = obj[key];
        v336[key] = v337;
    }
};
v328.updateLocale = v338;
const v344 = function (opts) {
    var y18n = new Y18N(opts);
    let key;
    for (key in y18n) {
        const v339 = y18n[key];
        const v340 = typeof v339;
        const v341 = v340 === 'function';
        if (v341) {
            const v342 = y18n[key];
            const v343 = v342.bind(y18n);
            y18n[key] = v343;
        }
    }
    return y18n;
};
module.exports = v344;
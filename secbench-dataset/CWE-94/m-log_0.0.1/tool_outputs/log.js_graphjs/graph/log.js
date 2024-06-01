const v288 = function () {
    'use strict';
    var colors = require('colors');
    const v145 = [
        'yellow',
        'bgBlue'
    ];
    const v146 = [
        'grey',
        'bold'
    ];
    const v147 = [
        'red',
        'underline'
    ];
    var colorTheme = {};
    colorTheme.silly = 'rainbow';
    colorTheme.info = 'white';
    colorTheme.input = 'magenta';
    colorTheme.verbose = v145;
    colorTheme.prompt = v146;
    colorTheme.data = 'grey';
    colorTheme.help = 'blue';
    colorTheme.warn = 'yellow';
    colorTheme.debug = 'red';
    colorTheme.error = v147;
    const v172 = function (colorTheme) {
        let i;
        for (i in colorTheme) {
            var theme = '';
            const v148 = colorTheme[i];
            const v149 = typeof v148;
            const v150 = v149 === 'string';
            if (v150) {
                const v151 = colorTheme[i];
                const v152 = '"' + v151;
                theme = v152 + '"';
                const v153 = 'colors.setTheme({' + i;
                const v154 = v153 + ':';
                const v155 = v154 + theme;
                const v156 = v155 + '});';
                const v157 = eval(v156);
                v157;
            } else {
                var v = '';
                const v158 = colorTheme[i];
                const v159 = v158.toString();
                var aryVal = v159.split(',');
                var x = 0;
                const v160 = aryVal.length;
                let v161 = x < v160;
                while (v161) {
                    const v163 = x > 0;
                    if (v163) {
                        v += ',';
                    }
                    const v164 = aryVal[x];
                    const v165 = '"' + v164;
                    v += v165 + '"';
                    const v162 = x++;
                    v161 = x < v160;
                }
                const v166 = 'theme = {' + i;
                const v167 = v166 + ':[';
                const v168 = v167 + v;
                const v169 = v168 + ']}';
                const v170 = eval(v169);
                v170;
                const v171 = colors.setTheme(theme);
                v171;
            }
        }
    };
    this.setColorTheme = v172;
    const v173 = this.setColorTheme(colorTheme);
    v173;
    const v174 = function () {
        return colorTheme;
    };
    this.getColorTheme = v174;
    var format = require('date-format');
    var DateTimeformat = '[hh:mm:ss.SSS]';
    const v175 = function (format) {
        DateTimeformat = format;
    };
    this.setDateTimeformat = v175;
    const v176 = function () {
        return DateTimeformat;
    };
    this.getDateTimeformat = v176;
    const v179 = function () {
        const v177 = new Date();
        const v178 = format.asString(DateTimeformat, v177);
        return v178;
    };
    this.getTime = v179;
    var isDebuggable = true;
    const v180 = function (bool) {
        isDebuggable = bool;
    };
    this.setDebuggable = v180;
    const v187 = function (msg) {
        var n = '';
        var i = 0;
        const v181 = arguments.length;
        let v182 = i < v181;
        while (v182) {
            const v184 = i > 0;
            if (v184) {
                n += ',';
            }
            const v185 = arguments[i];
            n += JSON.stringify(v185);
            const v183 = i++;
            v182 = i < v181;
        }
        const v186 = console.log(n);
        v186;
    };
    this.out = v187;
    const v197 = function (msg) {
        var n = '';
        var i = 0;
        const v188 = arguments.length;
        let v189 = i < v188;
        while (v189) {
            const v191 = i > 0;
            if (v191) {
                n += ',';
            }
            const v192 = arguments[i];
            n += JSON.stringify(v192);
            const v190 = i++;
            v189 = i < v188;
        }
        if (isDebuggable) {
            const v193 = this.getTime();
            const v194 = v193 + n;
            const v195 = v194.silly;
            const v196 = console.log(v195);
            v196;
        }
    };
    this.silly = v197;
    const v207 = function (msg) {
        var n = '';
        var i = 0;
        const v198 = arguments.length;
        let v199 = i < v198;
        while (v199) {
            const v201 = i > 0;
            if (v201) {
                n += ',';
            }
            const v202 = arguments[i];
            n += JSON.stringify(v202);
            const v200 = i++;
            v199 = i < v198;
        }
        if (isDebuggable) {
            const v203 = this.getTime();
            const v204 = v203 + n;
            const v205 = v204.info;
            const v206 = console.log(v205);
            v206;
        }
    };
    this.info = v207;
    const v217 = function (msg) {
        var n = '';
        var i = 0;
        const v208 = arguments.length;
        let v209 = i < v208;
        while (v209) {
            const v211 = i > 0;
            if (v211) {
                n += ',';
            }
            const v212 = arguments[i];
            n += JSON.stringify(v212);
            const v210 = i++;
            v209 = i < v208;
        }
        if (isDebuggable) {
            const v213 = this.getTime();
            const v214 = v213 + n;
            const v215 = v214.input;
            const v216 = console.log(v215);
            v216;
        }
    };
    this.input = v217;
    const v227 = function (msg) {
        var n = '';
        var i = 0;
        const v218 = arguments.length;
        let v219 = i < v218;
        while (v219) {
            const v221 = i > 0;
            if (v221) {
                n += ',';
            }
            const v222 = arguments[i];
            n += JSON.stringify(v222);
            const v220 = i++;
            v219 = i < v218;
        }
        if (isDebuggable) {
            const v223 = this.getTime();
            const v224 = v223 + n;
            const v225 = v224.verbose;
            const v226 = console.log(v225);
            v226;
        }
    };
    this.verbose = v227;
    const v237 = function (msg) {
        var n = '';
        var i = 0;
        const v228 = arguments.length;
        let v229 = i < v228;
        while (v229) {
            const v231 = i > 0;
            if (v231) {
                n += ',';
            }
            const v232 = arguments[i];
            n += JSON.stringify(v232);
            const v230 = i++;
            v229 = i < v228;
        }
        if (isDebuggable) {
            const v233 = this.getTime();
            const v234 = v233 + n;
            const v235 = v234.prompt;
            const v236 = console.log(v235);
            v236;
        }
    };
    this.prompt = v237;
    const v247 = function (msg) {
        var n = '';
        var i = 0;
        const v238 = arguments.length;
        let v239 = i < v238;
        while (v239) {
            const v241 = i > 0;
            if (v241) {
                n += ',';
            }
            const v242 = arguments[i];
            n += JSON.stringify(v242);
            const v240 = i++;
            v239 = i < v238;
        }
        if (isDebuggable) {
            const v243 = this.getTime();
            const v244 = v243 + n;
            const v245 = v244.data;
            const v246 = console.log(v245);
            v246;
        }
    };
    this.data = v247;
    const v257 = function (msg) {
        var n = '';
        var i = 0;
        const v248 = arguments.length;
        let v249 = i < v248;
        while (v249) {
            const v251 = i > 0;
            if (v251) {
                n += ',';
            }
            const v252 = arguments[i];
            n += JSON.stringify(v252);
            const v250 = i++;
            v249 = i < v248;
        }
        if (isDebuggable) {
            const v253 = this.getTime();
            const v254 = v253 + n;
            const v255 = v254.help;
            const v256 = console.log(v255);
            v256;
        }
    };
    this.help = v257;
    const v267 = function (msg) {
        var n = '';
        var i = 0;
        const v258 = arguments.length;
        let v259 = i < v258;
        while (v259) {
            const v261 = i > 0;
            if (v261) {
                n += ',';
            }
            const v262 = arguments[i];
            n += JSON.stringify(v262);
            const v260 = i++;
            v259 = i < v258;
        }
        if (isDebuggable) {
            const v263 = this.getTime();
            const v264 = v263 + n;
            const v265 = v264.warn;
            const v266 = console.log(v265);
            v266;
        }
    };
    this.warn = v267;
    const v277 = function (msg) {
        var n = '';
        var i = 0;
        const v268 = arguments.length;
        let v269 = i < v268;
        while (v269) {
            const v271 = i > 0;
            if (v271) {
                n += ',';
            }
            const v272 = arguments[i];
            n += JSON.stringify(v272);
            const v270 = i++;
            v269 = i < v268;
        }
        if (isDebuggable) {
            const v273 = this.getTime();
            const v274 = v273 + n;
            const v275 = v274.debug;
            const v276 = console.log(v275);
            v276;
        }
    };
    this.debug = v277;
    const v287 = function (msg) {
        var n = '';
        var i = 0;
        const v278 = arguments.length;
        let v279 = i < v278;
        while (v279) {
            const v281 = i > 0;
            if (v281) {
                n += ',';
            }
            const v282 = arguments[i];
            n += JSON.stringify(v282);
            const v280 = i++;
            v279 = i < v278;
        }
        if (isDebuggable) {
            const v283 = this.getTime();
            const v284 = v283 + n;
            const v285 = v284.error;
            const v286 = console.log(v285);
            v286;
        }
    };
    this.error = v287;
};
module.exports = new v288();
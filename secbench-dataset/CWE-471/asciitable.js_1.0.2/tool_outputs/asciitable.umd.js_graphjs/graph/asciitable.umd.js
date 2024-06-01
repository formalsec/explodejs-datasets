const v164 = function (root, factory) {
    const v152 = typeof define;
    const v153 = v152 === 'function';
    const v154 = define.amd;
    const v155 = v153 && v154;
    if (v155) {
        const v156 = [];
        const v157 = define(v156, factory);
        v157;
    } else {
        const v158 = typeof module;
        const v159 = v158 === 'object';
        const v160 = module.exports;
        const v161 = v159 && v160;
        if (v161) {
            const v162 = factory();
            module.exports = v162;
        } else {
            const v163 = factory();
            root.returnExports = v163;
        }
    }
};
const v301 = function () {
    const matrixToAsciiTable = function (m, options) {
        const v165 = {};
        v165.paddingLeft = '|';
        v165.paddingRight = '|';
        v165.colSeparator = '|';
        v165.lineBreak = '\n';
        const v166 = {};
        v166.paddingLeft = ' ';
        v166.paddingRight = ' ';
        v166.defaultAlignDir = 1;
        const v167 = {};
        v167.str = '\u2014';
        v167.colSeparator = '|';
        const v168 = {
            row: v165,
            cell: v166,
            hr: v167
        };
        options = defaults(v168, options);
        const defaults = function (c, b) {
            let a;
            for (a in b) {
                const v169 = b.hasOwnProperty(a);
                const v170 = c[a];
                const v171 = b[a];
                const v172 = typeof v171;
                const v173 = v172 === 'object';
                const v174 = v170 && v173;
                const v175 = c[a];
                const v176 = b[a];
                const v177 = defaults(v175, v176);
                const v178 = b[a];
                let v179;
                if (v174) {
                    v179 = v177;
                } else {
                    v179 = c[a] = v178;
                }
                const v180 = v169 && v179;
                v180;
            }
            return c;
        };
        const repeatStr = function (width, str) {
            str = str || ' ';
            let result;
            const v181 = width > 0;
            const v182 = str.length;
            const v183 = width / v182;
            const v184 = Math.ceil(v183);
            const v185 = v184 + 1;
            const v186 = Array(v185);
            const v187 = v186.join(str);
            if (v181) {
                result = v187;
            } else {
                result = '';
            }
            const v188 = result.length;
            const v189 = v188 > width;
            const v190 = result.substr(0, width);
            let v191;
            if (v189) {
                v191 = v190;
            } else {
                v191 = result;
            }
            return v191;
        };
        const alignText = function (txt, width) {
            const pad = function (txt, width, dir) {
                const v192 = txt.length;
                var p = width - v192;
                let pL;
                const v193 = dir > 0;
                const v194 = p / 2;
                const v195 = v194 << 0;
                if (v193) {
                    pL = p;
                } else {
                    pL = v195;
                }
                let pR;
                const v196 = dir < 0;
                const v197 = pL * 2;
                const v198 = p - v197;
                const v199 = pL + v198;
                if (v196) {
                    pR = p;
                } else {
                    pR = v199;
                }
                const v200 = p > 0;
                const v201 = dir >= 0;
                const v202 = pL + 1;
                const v203 = Array(v202);
                const v204 = v203.join(' ');
                let v205;
                if (v201) {
                    v205 = v204;
                } else {
                    v205 = '';
                }
                const v206 = v205 + txt;
                const v207 = dir <= 0;
                const v208 = pR + 1;
                const v209 = Array(v208);
                const v210 = v209.join(' ');
                let v211;
                if (v207) {
                    v211 = v210;
                } else {
                    v211 = '';
                }
                const v212 = v206 + v211;
                let v213;
                if (v200) {
                    v213 = v212;
                } else {
                    v213 = txt;
                }
                return v213;
            };
            txt = '' + txt;
            const v214 = txt.charAt(0);
            switch (v214) {
            case '<':
                const v215 = txt.substr(1);
                const v216 = -1;
                const v217 = pad(v215, width, v216);
                return v217;
            case '^':
                const v218 = txt.substr(1);
                const v219 = pad(v218, width, 0);
                return v219;
            case '>':
                const v220 = txt.substr(1);
                const v221 = pad(v220, width, 1);
                return v221;
            default:
                const v222 = options.cell;
                const v223 = v222.defaultAlignDir;
                const v224 = pad(txt, width, v223);
                return v224;
            }
        };
        const calcColumnsWidth = function (matrix) {
            var colsWidth = [];
            rows: {
                var r = 0;
                var rLen = matrix.length;
                let v225 = r < rLen;
                while (v225) {
                    const v227 = matrix[r];
                    const v228 = !v227;
                    if (v228) {
                        continue;
                    }
                    cols: {
                        var c = 0;
                        const v229 = matrix[r];
                        var cLen = v229.length;
                        let v230 = c < cLen;
                        while (v230) {
                            const v232 = colsWidth[c];
                            const v233 = !v232;
                            if (v233) {
                                colsWidth[c] = 0;
                            }
                            const v234 = colsWidth[c];
                            const v235 = matrix[r];
                            const v236 = v235[c];
                            const v237 = '' + v236;
                            const v238 = v237.length;
                            const v239 = Math.max(v234, v238);
                            colsWidth[c] = v239;
                            const v231 = c++;
                            v230 = c < cLen;
                        }
                    }
                    const v226 = r++;
                    v225 = r < rLen;
                }
            }
            return colsWidth;
        };
        const v240 = options.cell;
        const v241 = v240.paddingLeft;
        const v242 = v241.length;
        const v243 = options.cell;
        const v244 = v243.paddingRight;
        const v245 = v244.length;
        var paddingLength = v242 + v245;
        const v246 = options.row;
        const v247 = v246.colSeparator;
        const v248 = v247.length;
        const v249 = options.hr;
        const v250 = v249.colSeparator;
        const v251 = options.hr;
        const v252 = v251.str;
        const v253 = v250 || v252;
        var hrSeparator = repeatStr(v248, v253);
        var colsWidth = calcColumnsWidth(m);
        var table = [];
        var r = 0;
        var rLen = m.length;
        let v254 = r < rLen;
        while (v254) {
            var cols = [];
            const v256 = m[r];
            if (v256) {
                c = 0
                const v257 = colsWidth.length;
                let v258 = c < v257;
                while (v258) {
                    const v260 = options.cell;
                    const v261 = v260.paddingLeft;
                    const v262 = m[r];
                    const v263 = v262[c];
                    const v264 = colsWidth[c];
                    const v265 = alignText(v263, v264);
                    const v266 = v261 + v265;
                    const v267 = options.cell;
                    const v268 = v267.paddingRight;
                    const v269 = v266 + v268;
                    const v270 = cols.push(v269);
                    v270;
                    const v259 = c++;
                    v258 = c < v257;
                }
                const v271 = options.row;
                const v272 = v271.paddingLeft;
                const v273 = options.row;
                const v274 = v273.colSeparator;
                const v275 = cols.join(v274);
                const v276 = options.row;
                const v277 = v276.paddingRight;
                const v278 = [
                    v272,
                    v275,
                    v277
                ];
                const v279 = v278.join('');
                const v280 = table.push(v279);
                v280;
            } else {
                c = 0
                const v281 = colsWidth.length;
                let v282 = c < v281;
                while (v282) {
                    const v284 = colsWidth[c];
                    const v285 = v284 + paddingLength;
                    const v286 = options.hr;
                    const v287 = v286.str;
                    const v288 = repeatStr(v285, v287);
                    const v289 = cols.push(v288);
                    v289;
                    const v283 = c++;
                    v282 = c < v281;
                }
                const v290 = options.row;
                const v291 = v290.paddingLeft;
                const v292 = cols.join(hrSeparator);
                const v293 = options.row;
                const v294 = v293.paddingRight;
                const v295 = [
                    v291,
                    v292,
                    v294
                ];
                const v296 = v295.join('');
                const v297 = table.push(v296);
                v297;
            }
            const v255 = r++;
            v254 = r < rLen;
        }
        const v298 = options.row;
        const v299 = v298.lineBreak;
        const v300 = table.join(v299);
        return v300;
    };
    return matrixToAsciiTable;
};
const v302 = v164(this, v301);
v302;
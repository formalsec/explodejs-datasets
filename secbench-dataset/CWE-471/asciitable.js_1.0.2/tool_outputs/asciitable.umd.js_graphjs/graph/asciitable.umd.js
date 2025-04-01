const matrixToAsciiTable = function (m, options) {
    const v137 = {};
    v137.paddingLeft = '|';
    v137.paddingRight = '|';
    v137.colSeparator = '|';
    v137.lineBreak = '\n';
    const v138 = {};
    v138.paddingLeft = ' ';
    v138.paddingRight = ' ';
    v138.defaultAlignDir = 1;
    const v139 = {};
    v139.str = '\u2014';
    v139.colSeparator = '|';
    const v140 = {
        row: v137,
        cell: v138,
        hr: v139
    };
    options = defaults(v140, options);
    const defaults = function (c, b) {
        let a;
        for (a in b) {
            const v141 = b.hasOwnProperty(a);
            const v142 = c[a];
            const v143 = b[a];
            const v144 = typeof v143;
            const v145 = v144 === 'object';
            const v146 = v142 && v145;
            const v147 = c[a];
            const v148 = b[a];
            const v149 = defaults(v147, v148);
            const v150 = b[a];
            let v151;
            if (v146) {
                v151 = v149;
            } else {
                v151 = c[a] = v150;
            }
            const v152 = v141 && v151;
            v152;
        }
        return c;
    };
    const repeatStr = function (width, str) {
        str = str || ' ';
        let result;
        const v153 = width > 0;
        const v154 = str.length;
        const v155 = width / v154;
        const v156 = Math.ceil(v155);
        const v157 = v156 + 1;
        const v158 = Array(v157);
        const v159 = v158.join(str);
        if (v153) {
            result = v159;
        } else {
            result = '';
        }
        const v160 = result.length;
        const v161 = v160 > width;
        const v162 = result.substr(0, width);
        let v163;
        if (v161) {
            v163 = v162;
        } else {
            v163 = result;
        }
        return v163;
    };
    const alignText = function (txt, width) {
        const pad = function (txt, width, dir) {
            const v164 = txt.length;
            var p = width - v164;
            let pL;
            const v165 = dir > 0;
            const v166 = p / 2;
            const v167 = v166 << 0;
            if (v165) {
                pL = p;
            } else {
                pL = v167;
            }
            let pR;
            const v168 = dir < 0;
            const v169 = pL * 2;
            const v170 = p - v169;
            const v171 = pL + v170;
            if (v168) {
                pR = p;
            } else {
                pR = v171;
            }
            const v172 = p > 0;
            const v173 = dir >= 0;
            const v174 = pL + 1;
            const v175 = Array(v174);
            const v176 = v175.join(' ');
            let v177;
            if (v173) {
                v177 = v176;
            } else {
                v177 = '';
            }
            const v178 = v177 + txt;
            const v179 = dir <= 0;
            const v180 = pR + 1;
            const v181 = Array(v180);
            const v182 = v181.join(' ');
            let v183;
            if (v179) {
                v183 = v182;
            } else {
                v183 = '';
            }
            const v184 = v178 + v183;
            let v185;
            if (v172) {
                v185 = v184;
            } else {
                v185 = txt;
            }
            return v185;
        };
        txt = '' + txt;
        const v186 = txt.charAt(0);
        switch (v186) {
        case '<':
            const v187 = txt.substr(1);
            const v188 = -1;
            const v189 = pad(v187, width, v188);
            return v189;
        case '^':
            const v190 = txt.substr(1);
            const v191 = pad(v190, width, 0);
            return v191;
        case '>':
            const v192 = txt.substr(1);
            const v193 = pad(v192, width, 1);
            return v193;
        default:
            const v194 = options.cell;
            const v195 = v194.defaultAlignDir;
            const v196 = pad(txt, width, v195);
            return v196;
        }
    };
    const calcColumnsWidth = function (matrix) {
        var colsWidth = [];
        rows: {
            var r = 0;
            var rLen = matrix.length;
            let v197 = r < rLen;
            while (v197) {
                const v199 = matrix[r];
                const v200 = !v199;
                if (v200) {
                    continue;
                }
                cols: {
                    var c = 0;
                    const v201 = matrix[r];
                    var cLen = v201.length;
                    let v202 = c < cLen;
                    while (v202) {
                        const v204 = colsWidth[c];
                        const v205 = !v204;
                        if (v205) {
                            colsWidth[c] = 0;
                        }
                        const v206 = colsWidth[c];
                        const v207 = matrix[r];
                        const v208 = v207[c];
                        const v209 = '' + v208;
                        const v210 = v209.length;
                        const v211 = Math.max(v206, v210);
                        colsWidth[c] = v211;
                        const v203 = c++;
                        v202 = c < cLen;
                    }
                }
                const v198 = r++;
                v197 = r < rLen;
            }
        }
        return colsWidth;
    };
    const v212 = options.cell;
    const v213 = v212.paddingLeft;
    const v214 = v213.length;
    const v215 = options.cell;
    const v216 = v215.paddingRight;
    const v217 = v216.length;
    var paddingLength = v214 + v217;
    const v218 = options.row;
    const v219 = v218.colSeparator;
    const v220 = v219.length;
    const v221 = options.hr;
    const v222 = v221.colSeparator;
    const v223 = options.hr;
    const v224 = v223.str;
    const v225 = v222 || v224;
    var hrSeparator = repeatStr(v220, v225);
    var colsWidth = calcColumnsWidth(m);
    var table = [];
    var r = 0;
    var rLen = m.length;
    let v226 = r < rLen;
    while (v226) {
        var cols = [];
        const v228 = m[r];
        if (v228) {
            c = 0
            const v229 = colsWidth.length;
            let v230 = c < v229;
            while (v230) {
                const v232 = options.cell;
                const v233 = v232.paddingLeft;
                const v234 = m[r];
                const v235 = v234[c];
                const v236 = colsWidth[c];
                const v237 = alignText(v235, v236);
                const v238 = v233 + v237;
                const v239 = options.cell;
                const v240 = v239.paddingRight;
                const v241 = v238 + v240;
                const v242 = cols.push(v241);
                v242;
                const v231 = c++;
                v230 = c < v229;
            }
            const v243 = options.row;
            const v244 = v243.paddingLeft;
            const v245 = options.row;
            const v246 = v245.colSeparator;
            const v247 = cols.join(v246);
            const v248 = options.row;
            const v249 = v248.paddingRight;
            const v250 = [
                v244,
                v247,
                v249
            ];
            const v251 = v250.join('');
            const v252 = table.push(v251);
            v252;
        } else {
            c = 0
            const v253 = colsWidth.length;
            let v254 = c < v253;
            while (v254) {
                const v256 = colsWidth[c];
                const v257 = v256 + paddingLength;
                const v258 = options.hr;
                const v259 = v258.str;
                const v260 = repeatStr(v257, v259);
                const v261 = cols.push(v260);
                v261;
                const v255 = c++;
                v254 = c < v253;
            }
            const v262 = options.row;
            const v263 = v262.paddingLeft;
            const v264 = cols.join(hrSeparator);
            const v265 = options.row;
            const v266 = v265.paddingRight;
            const v267 = [
                v263,
                v264,
                v266
            ];
            const v268 = v267.join('');
            const v269 = table.push(v268);
            v269;
        }
        const v227 = r++;
        v226 = r < rLen;
    }
    const v270 = options.row;
    const v271 = v270.lineBreak;
    const v272 = table.join(v271);
    return v272;
};
module.exports = matrixToAsciiTable;
exports.decode = decode;
exports.parse = exports.decode;
exports.encode = encode;
exports.stringify = exports.encode;
exports.safe = safe;
exports.unsafe = unsafe;
let eol;
const v168 = typeof process;
const v169 = v168 !== 'undefined';
const v170 = process.platform;
const v171 = v170 === 'win32';
const v172 = v169 && v171;
if (v172) {
    eol = '\r\n';
} else {
    eol = '\n';
}
const encode = function (obj, opt) {
    var children = [];
    var out = '';
    const v173 = typeof opt;
    const v174 = v173 === 'string';
    if (v174) {
        opt.section = opt;
        opt.whitespace = false;
        opt = {};
        opt = {};
    } else {
        const v175 = {};
        opt = opt || v175;
        const v176 = opt.whitespace;
        opt.whitespace = v176 === true;
    }
    let separator;
    const v177 = opt.whitespace;
    if (v177) {
        separator = ' = ';
    } else {
        separator = '=';
    }
    const v178 = Object.keys(obj);
    const v196 = function (k, _, __) {
        var val = obj[k];
        const v179 = Array.isArray(val);
        const v180 = val && v179;
        if (v180) {
            const v186 = function (item) {
                const v181 = k + '[]';
                const v182 = safe(v181);
                const v183 = v182 + separator;
                const v184 = safe(item);
                const v185 = v183 + v184;
                out += v185 + '\n';
            };
            const v187 = val.forEach(v186);
            v187;
        } else {
            const v188 = typeof val;
            const v189 = v188 === 'object';
            const v190 = val && v189;
            if (v190) {
                const v191 = children.push(k);
                v191;
            } else {
                const v192 = safe(k);
                const v193 = v192 + separator;
                const v194 = safe(val);
                const v195 = v193 + v194;
                out += v195 + eol;
            }
        }
    };
    const v197 = v178.forEach(v196);
    v197;
    const v198 = opt.section;
    const v199 = out.length;
    const v200 = v198 && v199;
    if (v200) {
        const v201 = opt.section;
        const v202 = safe(v201);
        const v203 = '[' + v202;
        const v204 = v203 + ']';
        const v205 = v204 + eol;
        out = v205 + out;
    }
    const v217 = function (k, _, __) {
        const v206 = dotSplit(k);
        var nk = v206.join('\\.');
        const v207 = opt.section;
        const v208 = opt.section;
        const v209 = v208 + '.';
        let v210;
        if (v207) {
            v210 = v209;
        } else {
            v210 = '';
        }
        var section = v210 + nk;
        const v211 = obj[k];
        const v212 = opt.whitespace;
        const v213 = {
            section: section,
            whitespace: v212
        };
        var child = encode(v211, v213);
        const v214 = out.length;
        const v215 = child.length;
        const v216 = v214 && v215;
        if (v216) {
            out += eol;
        }
        out += child;
    };
    const v218 = children.forEach(v217);
    v218;
    return out;
};
const dotSplit = function (str) {
    const v219 = str.replace(/\1/g, '\x02LITERAL\\1LITERAL\x02');
    const v220 = v219.replace(/\\\./g, '\x01');
    const v221 = v220.split(/\./);
    const v224 = function (part) {
        const v222 = part.replace(/\1/g, '\\.');
        const v223 = v222.replace(/\2LITERAL\\1LITERAL\2/g, '\x01');
        return v223;
    };
    const v225 = v221.map(v224);
    return v225;
};
const decode = function (str) {
    var out = {};
    var p = out;
    var section = null;
    var re = /^\[([^\]]*)\]$|^([^=]+)(=(.*))?$/i;
    var lines = str.split(/[\r\n]+/g);
    const v257 = function (line, _, __) {
        const v226 = !line;
        const v227 = line.match(/^\s*[;#]/);
        const v228 = v226 || v227;
        if (v228) {
            return;
        }
        var match = line.match(re);
        const v229 = !match;
        if (v229) {
            return;
        }
        const v230 = match[1];
        const v231 = v230 !== undefined;
        if (v231) {
            const v232 = match[1];
            section = unsafe(v232);
            const v233 = out[section];
            const v234 = {};
            out.section = v233 || v234;
            p = out[section];
            return;
        }
        const v235 = match[2];
        var key = unsafe(v235);
        let value;
        const v236 = match[3];
        const v237 = match[4];
        const v238 = unsafe(v237);
        if (v236) {
            value = v238;
        } else {
            value = true;
        }
        switch (value) {
        case 'true':
        case 'false':
        case 'null':
            value = JSON.parse(value);
        }
        const v239 = key.length;
        const v240 = v239 > 2;
        const v241 = -2;
        const v242 = key.slice(v241);
        const v243 = v242 === '[]';
        const v244 = v240 && v243;
        if (v244) {
            const v245 = key.length;
            const v246 = v245 - 2;
            key = key.substring(0, v246);
            const v247 = p[key];
            const v248 = !v247;
            if (v248) {
                p[key] = [];
            } else {
                const v249 = p[key];
                const v250 = Array.isArray(v249);
                const v251 = !v250;
                if (v251) {
                    const v252 = p[key];
                    p[key] = [v252];
                }
            }
        }
        const v253 = p[key];
        const v254 = Array.isArray(v253);
        if (v254) {
            const v255 = p[key];
            const v256 = v255.push(value);
            v256;
        } else {
            p[key] = value;
        }
    };
    const v258 = lines.forEach(v257);
    v258;
    const v259 = Object.keys(out);
    const v282 = function (k, _, __) {
        const v260 = out[k];
        const v261 = !v260;
        const v262 = out[k];
        const v263 = typeof v262;
        const v264 = v263 !== 'object';
        const v265 = v261 || v264;
        const v266 = out[k];
        const v267 = Array.isArray(v266);
        const v268 = v265 || v267;
        if (v268) {
            return false;
        }
        var parts = dotSplit(k);
        var p = out;
        var l = parts.pop();
        var nl = l.replace(/\\\./g, '.');
        const v276 = function (part, _, __) {
            const v269 = p[part];
            const v270 = !v269;
            const v271 = p[part];
            const v272 = typeof v271;
            const v273 = v272 !== 'object';
            const v274 = v270 || v273;
            if (v274) {
                const v275 = {};
                p[part] = v275;
            }
            p = p[part];
        };
        const v277 = parts.forEach(v276);
        v277;
        const v278 = p === out;
        const v279 = nl === l;
        const v280 = v278 && v279;
        if (v280) {
            return false;
        }
        const v281 = out[k];
        p[nl] = v281;
        return true;
    };
    const v283 = v259.filter(v282);
    const v286 = function (del, _, __) {
        const v284 = out[del];
        const v285 = delete v284;
        v285;
    };
    const v287 = v283.forEach(v286);
    v287;
    return out;
};
const isQuoted = function (val) {
    const v288 = val.charAt(0);
    const v289 = v288 === '"';
    const v290 = -1;
    const v291 = val.slice(v290);
    const v292 = v291 === '"';
    const v293 = v289 && v292;
    const v294 = val.charAt(0);
    const v295 = v294 === '\'';
    const v296 = -1;
    const v297 = val.slice(v296);
    const v298 = v297 === '\'';
    const v299 = v295 && v298;
    const v300 = v293 || v299;
    return v300;
};
const safe = function (val) {
    const v301 = typeof val;
    const v302 = v301 !== 'string';
    const v303 = val.match(/[=\r\n]/);
    const v304 = v302 || v303;
    const v305 = val.match(/^\[/);
    const v306 = v304 || v305;
    const v307 = val.length;
    const v308 = v307 > 1;
    const v309 = isQuoted(val);
    const v310 = v308 && v309;
    const v311 = v306 || v310;
    const v312 = val.trim();
    const v313 = val !== v312;
    const v314 = v311 || v313;
    const v315 = JSON.stringify(val);
    const v316 = val.replace(/;/g, '\\;');
    const v317 = v316.replace(/#/g, '\\#');
    let v318;
    if (v314) {
        v318 = v315;
    } else {
        v318 = v317;
    }
    return v318;
};
const unsafe = function (val, doUnesc) {
    const v319 = val || '';
    val = v319.trim();
    const v320 = isQuoted(val);
    if (v320) {
        const v321 = val.charAt(0);
        const v322 = v321 === '\'';
        if (v322) {
            const v323 = val.length;
            const v324 = v323 - 2;
            val = val.substr(1, v324);
        }
        try {
            val = JSON.parse(val);
        } catch (_) {
        }
    } else {
        var esc = false;
        var unesc = '';
        var i = 0;
        var l = val.length;
        let v325 = i < l;
        while (v325) {
            var c = val.charAt(i);
            if (esc) {
                const v327 = '\\;#'.indexOf(c);
                const v328 = -1;
                const v329 = v327 !== v328;
                if (v329) {
                    unesc += c;
                } else {
                    unesc += '\\' + c;
                }
                esc = false;
            } else {
                const v330 = ';#'.indexOf(c);
                const v331 = -1;
                const v332 = v330 !== v331;
                if (v332) {
                    break;
                } else {
                    const v333 = c === '\\';
                    if (v333) {
                        esc = true;
                    } else {
                        unesc += c;
                    }
                }
            }
            const v326 = i++;
            v325 = i < l;
        }
        if (esc) {
            unesc += '\\';
        }
        const v334 = unesc.trim();
        return v334;
    }
    return val;
};
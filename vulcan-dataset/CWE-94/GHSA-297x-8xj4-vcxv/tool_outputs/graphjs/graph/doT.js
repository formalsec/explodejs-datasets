const v401 = function () {
    'use strict';
    const v202 = {};
    v202.evaluate = /\{\{([\s\S]+?(\}?)+)\}\}/g;
    v202.interpolate = /\{\{=([\s\S]+?)\}\}/g;
    v202.encode = /\{\{!([\s\S]+?)\}\}/g;
    v202.use = /\{\{#([\s\S]+?)\}\}/g;
    v202.useParams = /(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g;
    v202.define = /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g;
    v202.defineParams = /^\s*([\w$]+):([\s\S]+)/;
    v202.conditional = /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g;
    v202.iterate = /\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g;
    v202.varname = 'it';
    v202.strip = true;
    v202.append = true;
    v202.selfcontained = false;
    v202.doNotSkipEncoded = false;
    var doT = {};
    doT.name = 'doT';
    doT.version = '1.1.1';
    doT.templateSettings = v202;
    doT.template = undefined;
    doT.compile = undefined;
    doT.log = true;
    var _globals;
    const v210 = function (doNotSkipEncoded) {
        var encodeHTMLRules = {};
        encodeHTMLRules['&'] = '&#38;';
        encodeHTMLRules['<'] = '&#60;';
        encodeHTMLRules['>'] = '&#62;';
        encodeHTMLRules['"'] = '&#34;';
        encodeHTMLRules['\''] = '&#39;';
        encodeHTMLRules['/'] = '&#47;';
        let matchHTML;
        if (doNotSkipEncoded) {
            matchHTML = /[&<>"'\/]/g;
        } else {
            matchHTML = /&(?!#?\w+;)|<|>|"|'|\//g;
        }
        const v209 = function (code) {
            const v203 = code.toString();
            const v206 = function (m) {
                const v204 = encodeHTMLRules[m];
                const v205 = v204 || m;
                return v205;
            };
            const v207 = v203.replace(matchHTML, v206);
            let v208;
            if (code) {
                v208 = v207;
            } else {
                v208 = '';
            }
            return v208;
        };
        return v209;
    };
    doT.encodeHTMLSource = v210;
    const v213 = function () {
        const v211 = (0, eval)('this');
        const v212 = this || v211;
        return v212;
    };
    _globals = v213();
    const v214 = typeof module;
    const v215 = v214 !== 'undefined';
    const v216 = module.exports;
    const v217 = v215 && v216;
    if (v217) {
        module.exports = doT;
    } else {
        const v218 = typeof define;
        const v219 = v218 === 'function';
        const v220 = define.amd;
        const v221 = v219 && v220;
        if (v221) {
            const v222 = function () {
                return doT;
            };
            const v223 = define(v222);
            v223;
        } else {
            _globals.doT = doT;
        }
    }
    const v224 = {};
    v224.start = '\'+(';
    v224.end = ')+\'';
    v224.startencode = '\'+encodeHTML(';
    const v225 = {};
    v225.start = '\';out+=(';
    v225.end = ');out+=\'';
    v225.startencode = '\';out+=encodeHTML(';
    var startend = {};
    startend.append = v224;
    startend.split = v225;
    var skip = /$^/;
    const resolveDefs = function (c, block, def) {
        const v226 = typeof block;
        const v227 = v226 === 'string';
        const v228 = block.toString();
        let v229;
        if (v227) {
            v229 = block;
        } else {
            v229 = v228;
        }
        const v230 = c.define;
        const v231 = v230 || skip;
        const v249 = function (m, code, assign, value) {
            const v232 = code.indexOf('def.');
            const v233 = v232 === 0;
            if (v233) {
                code = code.substring(4);
            }
            const v234 = code in def;
            const v235 = !v234;
            if (v235) {
                const v236 = assign === ':';
                if (v236) {
                    const v237 = c.defineParams;
                    if (v237) {
                        const v238 = c.defineParams;
                        const v240 = function (m, param, v) {
                            const v239 = {};
                            v239.arg = param;
                            v239.text = v;
                            def[code] = v239;
                        };
                        const v241 = value.replace(v238, v240);
                        v241;
                    }
                    const v242 = code in def;
                    const v243 = !v242;
                    if (v243) {
                        def[code] = value;
                    }
                } else {
                    const v244 = 'def[\'' + code;
                    const v245 = v244 + '\']=';
                    const v246 = v245 + value;
                    const v247 = new Function('def', v246);
                    const v248 = v247(def);
                    v248;
                }
            }
            return '';
        };
        const v250 = v229.replace(v231, v249);
        const v251 = c.use;
        const v252 = v251 || skip;
        const v283 = function (m, code) {
            const v253 = c.useParams;
            if (v253) {
                const v254 = c.useParams;
                const v278 = function (m, s, d, param) {
                    const v255 = def[d];
                    const v256 = def[d];
                    const v257 = v256.arg;
                    const v258 = v255 && v257;
                    const v259 = v258 && param;
                    if (v259) {
                        const v260 = d + ':';
                        const v261 = v260 + param;
                        var rw = v261.replace(/'|\\/g, '_');
                        const v262 = def.__exp;
                        const v263 = {};
                        def.__exp = v262 || v263;
                        const v265 = def[d];
                        const v266 = v265.text;
                        const v267 = def[d];
                        const v268 = v267.arg;
                        const v269 = '(^|[^\\w$])' + v268;
                        const v270 = v269 + '([^\\w$])';
                        const v271 = new RegExp(v270, 'g');
                        const v272 = '$1' + param;
                        const v273 = v272 + '$2';
                        const v274 = v266.replace(v271, v273);
                        v264[rw] = v274;
                        const v275 = s + 'def.__exp[\'';
                        const v276 = v275 + rw;
                        const v277 = v276 + '\']';
                        return v277;
                    }
                };
                code = code.replace(v254, v278);
            }
            const v279 = 'return ' + code;
            const v280 = new Function('def', v279);
            var v = v280(def);
            const v281 = resolveDefs(c, v, def);
            let v282;
            if (v) {
                v282 = v281;
            } else {
                v282 = v;
            }
            return v282;
        };
        const v284 = v250.replace(v252, v283);
        return v284;
    };
    const unescape = function (code) {
        const v285 = code.replace(/\\('|\\)/g, '$1');
        const v286 = v285.replace(/[\r\t\n]/g, ' ');
        return v286;
    };
    const v398 = function (tmpl, c, def) {
        const v287 = doT.templateSettings;
        c = c || v287;
        let cse;
        const v288 = c.append;
        const v289 = startend.append;
        const v290 = startend.split;
        if (v288) {
            cse = v289;
        } else {
            cse = v290;
        }
        var needhtmlencode;
        var sid = 0;
        var indv;
        let str;
        const v291 = c.use;
        const v292 = c.define;
        const v293 = v291 || v292;
        const v294 = {};
        const v295 = def || v294;
        const v296 = resolveDefs(c, tmpl, v295);
        if (v293) {
            str = v296;
        } else {
            str = tmpl;
        }
        const v297 = c.strip;
        const v298 = str.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g, ' ');
        const v299 = v298.replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g, '');
        let v300;
        if (v297) {
            v300 = v299;
        } else {
            v300 = str;
        }
        const v301 = v300.replace(/'|\\/g, '\\$&');
        const v302 = c.interpolate;
        const v303 = v302 || skip;
        const v309 = function (m, code) {
            const v304 = cse.start;
            const v305 = unescape(code);
            const v306 = v304 + v305;
            const v307 = cse.end;
            const v308 = v306 + v307;
            return v308;
        };
        const v310 = v301.replace(v303, v309);
        const v311 = c.encode;
        const v312 = v311 || skip;
        const v318 = function (m, code) {
            needhtmlencode = true;
            const v313 = cse.startencode;
            const v314 = unescape(code);
            const v315 = v313 + v314;
            const v316 = cse.end;
            const v317 = v315 + v316;
            return v317;
        };
        const v319 = v310.replace(v312, v318);
        const v320 = c.conditional;
        const v321 = v320 || skip;
        const v331 = function (m, elsecase, code) {
            const v322 = unescape(code);
            const v323 = '\';}else if(' + v322;
            const v324 = v323 + '){out+=\'';
            let v325;
            if (code) {
                v325 = v324;
            } else {
                v325 = '\';}else{out+=\'';
            }
            const v326 = unescape(code);
            const v327 = '\';if(' + v326;
            const v328 = v327 + '){out+=\'';
            let v329;
            if (code) {
                v329 = v328;
            } else {
                v329 = '\';}out+=\'';
            }
            let v330;
            if (elsecase) {
                v330 = v325;
            } else {
                v330 = v329;
            }
            return v330;
        };
        const v332 = v319.replace(v321, v331);
        const v333 = c.iterate;
        const v334 = v333 || skip;
        const v361 = function (m, iterate, vname, iname) {
            const v335 = !iterate;
            if (v335) {
                return '\';} } out+=\'';
            }
            sid += 1;
            const v336 = 'i' + sid;
            indv = iname || v336;
            iterate = unescape(iterate);
            const v337 = '\';var arr' + sid;
            const v338 = v337 + '=';
            const v339 = v338 + iterate;
            const v340 = v339 + ';if(arr';
            const v341 = v340 + sid;
            const v342 = v341 + '){var ';
            const v343 = v342 + vname;
            const v344 = v343 + ',';
            const v345 = v344 + indv;
            const v346 = v345 + '=-1,l';
            const v347 = v346 + sid;
            const v348 = v347 + '=arr';
            const v349 = v348 + sid;
            const v350 = v349 + '.length-1;while(';
            const v351 = v350 + indv;
            const v352 = v351 + '<l';
            const v353 = v352 + sid;
            const v354 = v353 + '){';
            const v355 = v354 + vname;
            const v356 = v355 + '=arr';
            const v357 = v356 + sid;
            const v358 = v357 + '[';
            const v359 = v358 + indv;
            const v360 = v359 + '+=1];out+=\'';
            return v360;
        };
        const v362 = v332.replace(v334, v361);
        const v363 = c.evaluate;
        const v364 = v363 || skip;
        const v368 = function (m, code) {
            const v365 = unescape(code);
            const v366 = '\';' + v365;
            const v367 = v366 + 'out+=\'';
            return v367;
        };
        const v369 = v362.replace(v364, v368);
        const v370 = 'var out=\'' + v369;
        const v371 = v370 + '\';return out;';
        const v372 = v371.replace(/\n/g, '\\n');
        const v373 = v372.replace(/\t/g, '\\t');
        const v374 = v373.replace(/\r/g, '\\r');
        const v375 = v374.replace(/(\s|;|\}|^|\{)out\+='';/g, '$1');
        str = v375.replace(/\+''/g, '');
        if (needhtmlencode) {
            const v376 = c.selfcontained;
            const v377 = !v376;
            const v378 = v377 && _globals;
            const v379 = _globals._encodeHTML;
            const v380 = !v379;
            const v381 = v378 && v380;
            if (v381) {
                const v382 = c.doNotSkipEncoded;
                const v383 = doT.encodeHTMLSource(v382);
                _globals._encodeHTML = v383;
            }
            const v384 = doT.encodeHTMLSource;
            const v385 = v384.toString();
            const v386 = 'var encodeHTML = typeof _encodeHTML !== \'undefined\' ? _encodeHTML : (' + v385;
            const v387 = v386 + '(';
            const v388 = c.doNotSkipEncoded;
            const v389 = v388 || '';
            const v390 = v387 + v389;
            const v391 = v390 + '));';
            str = v391 + str;
        }
        try {
            const v392 = c.varname;
            const v393 = new Function(v392, str);
            return v393;
        } catch (e) {
            const v394 = typeof console;
            const v395 = v394 !== 'undefined';
            if (v395) {
                const v396 = 'Could not create a template function: ' + str;
                const v397 = console.log(v396);
                v397;
            }
            throw e;
        }
    };
    doT.template = v398;
    const v400 = function (tmpl, def) {
        const v399 = doT.template(tmpl, null, def);
        return v399;
    };
    doT.compile = v400;
};
const v402 = v401();
v402;
const v1 = {};
exports.XMLHttpRequest = v1;
const v2 = {};
const v4 = function () {
    const v3 = [];
    return v3;
};
const v5 = {};
v5.lastModified = 1388954399;
v5.getElementsByTagName = v4;
const v6 = {};
v6.href = '';
const v7 = {};
v7.window = v2;
v7.document = v5;
v7.location = v6;
exports.window = v7;
const v8 = exports.window;
const v9 = exports.window;
v8.window = v9;
const v355 = function () {
    try {
        const v10 = this.php_js;
        const v11 = {};
        this.php_js = v10 || v11;
    } catch (e) {
        const v12 = {};
        this.php_js = v12;
    }
    var arrInst;
    var e;
    var __;
    var that = this;
    var PHPJS_Array = function PHPJS_Array() {
    };
    const v23 = function (value, from, strict) {
        var i = from || 0;
        const v13 = !strict;
        var nonstrict = v13;
        var length = this.length;
        let v14 = i < length;
        while (v14) {
            const v15 = this[i];
            const v16 = v15 === value;
            const v17 = this[i];
            const v18 = v17 == value;
            const v19 = nonstrict && v18;
            const v20 = v16 || v19;
            if (v20) {
                return i;
            }
            const v21 = i++;
            v21;
            v14 = i < length;
        }
        const v22 = -1;
        return v22;
    };
    mainArgs = arguments, p = this.php_js, _indexOf = v23;
    const v24 = p.Relator;
    const v25 = !v24;
    if (v25) {
        const v49 = function () {
            const _indexOf = function (value) {
                var i = 0;
                var length = this.length;
                let v26 = i < length;
                while (v26) {
                    const v27 = this[i];
                    const v28 = v27 === value;
                    if (v28) {
                        return i;
                    }
                    const v29 = i++;
                    v29;
                    v26 = i < length;
                }
                const v30 = -1;
                return v30;
            };
            const Relator = function () {
                var Stack = [];
                var Array = [];
                const v31 = Stack.indexOf;
                const v32 = !v31;
                if (v32) {
                    Stack.indexOf = _indexOf;
                }
                const v34 = function () {
                    const v33 = Relator();
                    return v33;
                };
                const v43 = function (that) {
                    var i = Stack.indexOf(that);
                    const v35 = ~i;
                    const v36 = Array[i];
                    const v37 = Stack.push(that);
                    const v38 = v37 - 1;
                    const v39 = {};
                    let v40;
                    if (v35) {
                        v40 = v36;
                    } else {
                        v40 = Array[v38] = v39;
                    }
                    v40;
                    const v41 = this.method(that);
                    v41.that = that;
                    const v42 = this.method(that);
                    return v42;
                };
                const v46 = function (that) {
                    const v44 = Stack.indexOf(that);
                    const v45 = Array[v44];
                    return v45;
                };
                const v47 = {};
                v47.$ = v34;
                v47.constructor = v43;
                v47.method = v46;
                return v47;
            };
            const v48 = Relator();
            return v48;
        };
        const v50 = v49();
        p.Relator = v50;
    }
    const v51 = p.ini;
    const v52 = p && v51;
    const v53 = p.ini;
    const v54 = v53['phpjs.return_phpjs_arrays'];
    const v55 = v54.local_value;
    const v56 = v55.toLowerCase();
    const v57 = v56 === 'on';
    const v58 = v52 && v57;
    if (v58) {
        const v59 = p.PHPJS_Array;
        const v60 = !v59;
        if (v60) {
            const v61 = p.ArrayRelator;
            const v62 = p.Relator;
            const v63 = v62.$();
            p.ArrayRelator = v61 || v63;
            __ = p.ArrayRelator;
            const PHPJS_Array = function () {
                var _ = __.constructor(this);
                var args = arguments;
                var i = 0;
                var argl;
                var p;
                const v64 = args.length;
                const v65 = v64 === 1;
                const v66 = args[0];
                const v67 = v65 && v66;
                const v68 = args[0];
                const v69 = typeof v68;
                const v70 = v69 === 'object';
                const v71 = v67 && v70;
                const v72 = args[0];
                const v73 = v72.length;
                const v74 = v71 && v73;
                const v75 = args[0];
                const v76 = v75.propertyIsEnumerable('length');
                const v77 = !v76;
                const v78 = v74 && v77;
                const v79 = args[0];
                if (v78) {
                    args = v79;
                } else {
                    args = args;
                }
                const v80 = _.objectChain;
                const v81 = !v80;
                if (v81) {
                    _.objectChain = args;
                    const v82 = {};
                    _.object = v82;
                    _.keys = [];
                    _.values = [];
                }
                (argl = args.length)
                let v83 = i < argl;
                while (v83) {
                    const v85 = args[i];
                    for (p in v85) {
                        const v86 = _.object;
                        const v87 = args[i];
                        const v88 = v87[p];
                        v86.p = v88;
                        this[p] = v86[p];
                        const v89 = _.keys;
                        const v90 = _.keys;
                        const v91 = v90.length;
                        v89[v91] = p;
                        const v92 = _.values;
                        const v93 = _.values;
                        const v94 = v93.length;
                        const v95 = args[i];
                        const v96 = v95[p];
                        v92[v94] = v96;
                        break;
                    }
                    const v84 = i++;
                    v83 = i < argl;
                }
            };
            p.PHPJS_Array = PHPJS_Array;
            const v97 = p.PHPJS_Array;
            e = v97.prototype;
            const v127 = function (cs) {
                var _ = __.method(this);
                var oldkey;
                var newkey;
                var i = 0;
                const v98 = _.keys;
                var kl = v98.length;
                let case_fn;
                const v99 = !cs;
                const v100 = cs === 'CASE_LOWER';
                const v101 = v99 || v100;
                if (v101) {
                    case_fn = 'toLowerCase';
                } else {
                    case_fn = 'toUpperCase';
                }
                let v102 = i < kl;
                while (v102) {
                    const v103 = _.keys;
                    oldkey = v103[i];
                    const v105 = _.keys;
                    const v106 = v105[i];
                    const v107 = v106[case_fn]();
                    v104.i = v107;
                    newkey = v104[i];
                    const v108 = oldkey !== newkey;
                    if (v108) {
                        const v109 = _.object;
                        const v110 = _.objectChain;
                        const v111 = v110[i];
                        v111.oldkey = null;
                        v109.oldkey = v111[oldkey];
                        this[oldkey] = v109[oldkey];
                        const v112 = this[oldkey];
                        const v113 = delete v112;
                        v113;
                        const v114 = _.object;
                        const v115 = v114[oldkey];
                        const v116 = delete v115;
                        v116;
                        const v117 = _.objectChain;
                        const v118 = v117[i];
                        const v119 = v118[oldkey];
                        const v120 = delete v119;
                        v120;
                        const v121 = _.object;
                        const v122 = _.objectChain;
                        const v123 = v122[i];
                        const v124 = _.values;
                        const v125 = v124[i];
                        v123.newkey = v125;
                        v121.newkey = v123[newkey];
                        this[newkey] = v121[newkey];
                    }
                    const v126 = i++;
                    v126;
                    v102 = i < kl;
                }
                return this;
            };
            e.change_key_case = v127;
            const v150 = function () {
                var _ = __.method(this);
                var i = 0;
                const v128 = _.keys;
                var kl = v128.length;
                let v129 = i < kl;
                while (v129) {
                    const v130 = _.keys;
                    oldkey = v130[i];
                    const v131 = _.values;
                    newkey = v131[i];
                    const v132 = oldkey !== newkey;
                    if (v132) {
                        const v133 = _.object;
                        const v134 = _.objectChain;
                        const v135 = v134[i];
                        v135.oldkey = null;
                        v133.oldkey = v135[oldkey];
                        this[oldkey] = v133[oldkey];
                        const v136 = this[oldkey];
                        const v137 = delete v136;
                        v137;
                        const v138 = _.object;
                        const v139 = v138[oldkey];
                        const v140 = delete v139;
                        v140;
                        const v141 = _.objectChain;
                        const v142 = v141[i];
                        const v143 = v142[oldkey];
                        const v144 = delete v143;
                        v144;
                        const v145 = _.object;
                        const v146 = _.objectChain;
                        const v147 = v146[i];
                        v147.newkey = oldkey;
                        v145.newkey = v147[newkey];
                        this[newkey] = v145[newkey];
                        const v148 = _.keys;
                        v148[i] = newkey;
                    }
                    const v149 = i++;
                    v149;
                    v129 = i < kl;
                }
                return this;
            };
            e.flip = v150;
            const v246 = function (funcname, userdata) {
                var _ = __.method(this);
                var obj;
                var func;
                var ini;
                var i = 0;
                var kl = 0;
                try {
                    const v151 = typeof funcname;
                    const v152 = v151 === 'function';
                    if (v152) {
                        const v153 = _.keys;
                        let v154 = i < kl;
                        while (v154) {
                            const v156 = arguments.length;
                            const v157 = v156 > 1;
                            if (v157) {
                                const v158 = _.values;
                                const v159 = v158[i];
                                const v160 = _.keys;
                                const v161 = v160[i];
                                const v162 = funcname(v159, v161, userdata);
                                v162;
                            } else {
                                const v163 = _.values;
                                const v164 = v163[i];
                                const v165 = _.keys;
                                const v166 = v165[i];
                                const v167 = funcname(v164, v166);
                                v167;
                            }
                            const v155 = i++;
                            v154 = i < kl;
                        }
                    } else {
                        const v168 = typeof funcname;
                        const v169 = v168 === 'string';
                        if (v169) {
                            const v170 = this.php_js;
                            const v171 = {};
                            this.php_js = v170 || v171;
                            const v172 = this.php_js;
                            const v173 = this.php_js;
                            const v174 = v173.ini;
                            const v175 = {};
                            v172.ini = v174 || v175;
                            const v176 = this.php_js;
                            const v177 = v176.ini;
                            ini = v177['phpjs.no-eval'];
                            const v178 = ini.local_value;
                            const v179 = parseInt(v178, 10);
                            const v180 = v179 !== 0;
                            const v181 = ini.local_value;
                            const v182 = v181.toLowerCase;
                            const v183 = !v182;
                            const v184 = ini.local_value;
                            const v185 = v184.toLowerCase();
                            const v186 = v185 !== 'off';
                            const v187 = v183 || v186;
                            const v188 = v180 && v187;
                            const v189 = ini && v188;
                            if (v189) {
                                const v190 = arguments.length;
                                const v191 = v190 > 1;
                                if (v191) {
                                    const v192 = _.keys;
                                    let v193 = i < kl;
                                    while (v193) {
                                        const v195 = this.window;
                                        const v196 = _.values;
                                        const v197 = v196[i];
                                        const v198 = _.keys;
                                        const v199 = v198[i];
                                        const v200 = v195[funcname](v197, v199, userdata);
                                        v200;
                                        const v194 = i++;
                                        v193 = i < kl;
                                    }
                                } else {
                                    const v201 = _.keys;
                                    let v202 = i < kl;
                                    while (v202) {
                                        const v204 = this.window;
                                        const v205 = _.values;
                                        const v206 = v205[i];
                                        const v207 = _.keys;
                                        const v208 = v207[i];
                                        const v209 = v204[funcname](v206, v208);
                                        v209;
                                        const v203 = i++;
                                        v202 = i < kl;
                                    }
                                }
                            } else {
                                const v210 = arguments.length;
                                const v211 = v210 > 1;
                                if (v211) {
                                    const v212 = _.keys;
                                    let v213 = i < kl;
                                    while (v213) {
                                        const v215 = funcname + '(_.values[i], _.keys[i], userdata)';
                                        const v216 = eval(v215);
                                        v216;
                                        const v214 = i++;
                                        v213 = i < kl;
                                    }
                                } else {
                                    const v217 = _.keys;
                                    let v218 = i < kl;
                                    while (v218) {
                                        const v220 = funcname + '(_.values[i], _.keys[i])';
                                        const v221 = eval(v220);
                                        v221;
                                        const v219 = i++;
                                        v218 = i < kl;
                                    }
                                }
                            }
                        } else {
                            const v222 = typeof funcname;
                            const v223 = v222 === 'object';
                            const v224 = funcname && v223;
                            const v225 = funcname.length;
                            const v226 = v225 === 2;
                            const v227 = v224 && v226;
                            if (v227) {
                                obj = funcname[0];
                                func = funcname[1];
                                const v228 = arguments.length;
                                const v229 = v228 > 1;
                                if (v229) {
                                    const v230 = _.keys;
                                    let v231 = i < kl;
                                    while (v231) {
                                        const v233 = _.values;
                                        const v234 = v233[i];
                                        const v235 = _.keys;
                                        const v236 = v235[i];
                                        const v237 = obj[func](v234, v236, userdata);
                                        v237;
                                        const v232 = i++;
                                        v231 = i < kl;
                                    }
                                } else {
                                    const v238 = _.keys;
                                    let v239 = i < kl;
                                    while (v239) {
                                        const v241 = _.values;
                                        const v242 = v241[i];
                                        const v243 = _.keys;
                                        const v244 = v243[i];
                                        const v245 = obj[func](v242, v244);
                                        v245;
                                        const v240 = i++;
                                        v239 = i < kl;
                                    }
                                }
                            } else {
                                return false;
                            }
                        }
                    }
                } catch (e) {
                    return false;
                }
                return this;
            };
            e.walk = v246;
            const v258 = function (search_value, argStrict) {
                var _ = __.method(this);
                var pos;
                const v247 = typeof search_value;
                var search = v247 !== 'undefined';
                var tmp_arr = [];
                const v248 = !argStrict;
                const v249 = !v248;
                var strict = v249;
                const v250 = !search;
                if (v250) {
                    const v251 = _.keys;
                    return v251;
                }
                const v252 = _.values;
                const v253 = -1;
                let v254 = (pos = _indexOf(v252, pos, strict)) !== v253;
                while (v254) {
                    const v255 = tmp_arr.length;
                    const v256 = _.keys;
                    const v257 = v256[pos];
                    tmp_arr[v255] = v257;
                    v254 = (pos = _indexOf(v252, pos, strict)) !== v253;
                }
                return tmp_arr;
            };
            e.keys = v258;
            const v260 = function () {
                var _ = __.method(this);
                const v259 = _.values;
                return v259;
            };
            e.values = v260;
            const v292 = function (needle, argStrict) {
                var _ = __.method(this);
                const v261 = !argStrict;
                const v262 = !v261;
                var strict = v262;
                var haystack = _.values;
                var i;
                var vl;
                var val;
                var flags;
                const v263 = typeof needle;
                const v264 = v263 === 'object';
                const v265 = needle.exec;
                const v266 = v264 && v265;
                if (v266) {
                    const v267 = !strict;
                    if (v267) {
                        const v268 = needle.global;
                        let v269;
                        if (v268) {
                            v269 = 'g';
                        } else {
                            v269 = '';
                        }
                        const v270 = 'i' + v269;
                        const v271 = needle.multiline;
                        let v272;
                        if (v271) {
                            v272 = 'm';
                        } else {
                            v272 = '';
                        }
                        const v273 = v270 + v272;
                        const v274 = needle.sticky;
                        let v275;
                        if (v274) {
                            v275 = 'y';
                        } else {
                            v275 = '';
                        }
                        flags = v273 + v275;
                        const v276 = needle.source;
                        needle = new RegExp(v276, flags);
                    }
                    (i = 0, vl = haystack.length)
                    let v277 = i < vl;
                    while (v277) {
                        val = haystack[i];
                        const v279 = needle.test(val);
                        if (v279) {
                            const v280 = _.keys;
                            const v281 = v280[i];
                            return v281;
                        }
                        const v278 = i++;
                        v277 = i < vl;
                    }
                    return false;
                }
                (i = 0, vl = haystack.length)
                let v282 = i < vl;
                while (v282) {
                    val = haystack[i];
                    const v284 = val === needle;
                    const v285 = strict && v284;
                    const v286 = !strict;
                    const v287 = val == needle;
                    const v288 = v286 && v287;
                    const v289 = v285 || v288;
                    if (v289) {
                        const v290 = _.keys;
                        const v291 = v290[i];
                        return v291;
                    }
                    const v283 = i++;
                    v282 = i < vl;
                }
                return false;
            };
            e.search = v292;
            const v303 = function () {
                var _ = __.method(this);
                var sum = 0;
                var i = 0;
                const v293 = _.keys;
                var kl = v293.length;
                let v294 = i < kl;
                while (v294) {
                    const v295 = _.values;
                    const v296 = v295[i];
                    const v297 = parseFloat(v296);
                    const v298 = isNaN(v297);
                    const v299 = !v298;
                    if (v299) {
                        const v300 = _.values;
                        const v301 = v300[i];
                        sum += parseFloat(v301);
                    }
                    const v302 = i++;
                    v302;
                    v294 = i < kl;
                }
                return sum;
            };
            e.sum = v303;
            const v317 = function (handler) {
                var _ = __.method(this);
                var i = 0;
                const v304 = _.keys;
                var kl = v304.length;
                let v305 = i < kl;
                while (v305) {
                    const v306 = handler.length;
                    const v307 = v306 === 1;
                    if (v307) {
                        const v308 = _.values;
                        const v309 = v308[i];
                        const v310 = handler(v309);
                        v310;
                    } else {
                        const v311 = _.keys;
                        const v312 = v311[i];
                        const v313 = _.values;
                        const v314 = v313[i];
                        const v315 = handler(v312, v314);
                        v315;
                    }
                    const v316 = i++;
                    v316;
                    v305 = i < kl;
                }
                return this;
            };
            e.foreach = v317;
            const v334 = function () {
                var key;
                var _ = __.method(this);
                var i = 0;
                var argl = arguments.length;
                let v318 = i < argl;
                while (v318) {
                    const v319 = _.keys;
                    key = v319[i];
                    const v320 = key.length;
                    const v321 = parseInt(key, 10);
                    const v322 = v321.toString();
                    const v323 = v322.length;
                    const v324 = v320 === v323;
                    const v325 = key && v324;
                    const v326 = parseInt(key, 10);
                    const v327 = v326 < argl;
                    const v328 = v325 && v327;
                    if (v328) {
                        const v329 = that.window;
                        const v330 = arguments[key];
                        const v331 = _.values;
                        const v332 = v331[key];
                        v329[v330] = v332;
                    }
                    const v333 = i++;
                    v333;
                    v318 = i < argl;
                }
                return this;
            };
            e.list = v334;
            const v343 = function (handler) {
                var _ = __.method(this);
                var i = 0;
                const v335 = _.keys;
                var kl = v335.length;
                let v336 = i < kl;
                while (v336) {
                    const v337 = _.values;
                    const v338 = v337[i];
                    const v339 = _.keys;
                    const v340 = v339[i];
                    const v341 = handler(v338, v340, this);
                    v341;
                    const v342 = i++;
                    v342;
                    v336 = i < kl;
                }
                return this;
            };
            e.forEach = v343;
            const v345 = function () {
                var _ = __.method(this);
                const v344 = _.object;
                return v344;
            };
            e.$object = v345;
            const v347 = function () {
                var _ = __.method(this);
                const v346 = _.objectChain;
                return v346;
            };
            e.$objectChain = v347;
        }
        const v348 = p.PHPJS_Array;
        const v349 = v348.prototype;
        PHPJS_Array.prototype = v349;
        arrInst = new PHPJS_Array();
        const v350 = p.PHPJS_Array;
        const v351 = v350.apply(arrInst, mainArgs);
        v351;
        return arrInst;
    }
    const v352 = Array.prototype;
    const v353 = v352.slice;
    const v354 = v353.call(mainArgs);
    return v354;
};
exports.array = v355;
const v374 = function (array, cs) {
    var case_fn;
    var key;
    var tmp_ar = {};
    const v356 = Object.prototype;
    const v357 = v356.toString;
    const v358 = v357.call(array);
    const v359 = v358 === '[object Array]';
    if (v359) {
        return array;
    }
    const v360 = typeof array;
    const v361 = v360 === 'object';
    const v362 = array && v361;
    const v363 = array.change_key_case;
    const v364 = v362 && v363;
    if (v364) {
        const v365 = array.change_key_case(cs);
        return v365;
    }
    const v366 = typeof array;
    const v367 = v366 === 'object';
    const v368 = array && v367;
    if (v368) {
        const v369 = !cs;
        const v370 = cs === 'CASE_LOWER';
        const v371 = v369 || v370;
        if (v371) {
            case_fn = 'toLowerCase';
        } else {
            case_fn = 'toUpperCase';
        }
        for (key in array) {
            const v372 = key[case_fn]();
            const v373 = array[key];
            tmp_ar[v372] = v373;
        }
        return tmp_ar;
    }
    return false;
};
exports.array_change_key_case = v374;
const v414 = function (input, size, preserve_keys) {
    var x;
    var p = '';
    var i = 0;
    const v375 = -1;
    var c = v375;
    const v376 = input.length;
    var l = v376 || 0;
    var n = [];
    const v377 = size < 1;
    if (v377) {
        return null;
    }
    const v378 = Object.prototype;
    const v379 = v378.toString;
    const v380 = v379.call(input);
    const v381 = v380 === '[object Array]';
    if (v381) {
        if (preserve_keys) {
            let v382 = i < l;
            while (v382) {
                const v383 = n[c];
                const v384 = input[i];
                const v385 = ++c;
                const v386 = {};
                let v387;
                if (x = i % size) {
                    v383[i] = v384;
                    v387 = v383[i];
                } else {
                    v387 = n[v385] = v386;
                }
                const v388 = n[c];
                const v389 = input[i];
                v387, v388[i] = v389;
                const v390 = i++;
                v390;
                v382 = i < l;
            }
        } else {
            let v391 = i < l;
            while (v391) {
                const v392 = n[c];
                const v393 = input[i];
                const v394 = ++c;
                const v395 = input[i];
                let v396;
                if (x = i % size) {
                    v392[x] = v393;
                    v396 = v392[x];
                } else {
                    v396 = n[v394] = [v395];
                }
                v396;
                const v397 = i++;
                v397;
                v391 = i < l;
            }
        }
    } else {
        if (preserve_keys) {
            for (p in input) {
                const v398 = input.hasOwnProperty(p);
                if (v398) {
                    const v399 = n[c];
                    const v400 = input[p];
                    const v401 = ++c;
                    const v402 = {};
                    let v403;
                    if (x = i % size) {
                        v399[p] = v400;
                        v403 = v399[p];
                    } else {
                        v403 = n[v401] = v402;
                    }
                    const v404 = n[c];
                    const v405 = input[p];
                    v403, v404[p] = v405;
                    const v406 = i++;
                    v406;
                }
            }
        } else {
            for (p in input) {
                const v407 = input.hasOwnProperty(p);
                if (v407) {
                    const v408 = n[c];
                    const v409 = input[p];
                    const v410 = ++c;
                    const v411 = input[p];
                    let v412;
                    if (x = i % size) {
                        v408[x] = v409;
                        v412 = v408[x];
                    } else {
                        v412 = n[v410] = [v411];
                    }
                    v412;
                    const v413 = i++;
                    v413;
                }
            }
        }
    }
    return n;
};
exports.array_chunk = v414;
const v436 = function (keys, values) {
    var new_array = {};
    const v415 = keys.length;
    var keycount = keys && v415;
    var i = 0;
    const v416 = typeof keys;
    const v417 = v416 !== 'object';
    const v418 = typeof values;
    const v419 = v418 !== 'object';
    const v420 = v417 || v419;
    const v421 = typeof keycount;
    const v422 = v421 !== 'number';
    const v423 = v420 || v422;
    const v424 = values.length;
    const v425 = typeof v424;
    const v426 = v425 !== 'number';
    const v427 = v423 || v426;
    const v428 = !keycount;
    const v429 = v427 || v428;
    if (v429) {
        return false;
    }
    const v430 = values.length;
    const v431 = keycount != v430;
    if (v431) {
        return false;
    }
    (i = 0)
    let v432 = i < keycount;
    while (v432) {
        const v434 = keys[i];
        const v435 = values[i];
        new_array[v434] = v435;
        const v433 = i++;
        v432 = i < keycount;
    }
    return new_array;
};
exports.array_combine = v436;
const v451 = function (array) {
    var tmp_arr = {};
    var key = '';
    var t = '';
    var __getType = function (obj) {
        const v437 = typeof obj;
        var t = v437;
        t = t.toLowerCase();
        const v438 = t === 'object';
        if (v438) {
            t = 'array';
        }
        return t;
    };
    var __countValue = function (value) {
        const v439 = typeof value;
        switch (v439) {
        case 'number':
            const v440 = Math.floor(value);
            const v441 = v440 !== value;
            if (v441) {
                return;
            }
        case 'string':
            const v442 = value in this;
            const v443 = this.hasOwnProperty(value);
            const v444 = v442 && v443;
            if (v444) {
                const v445 = this[value];
                const v446 = ++v445;
                v446;
            } else {
                this[value] = 1;
            }
        }
    };
    t = __getType(array);
    const v447 = t === 'array';
    if (v447) {
        for (key in array) {
            const v448 = array.hasOwnProperty(key);
            if (v448) {
                const v449 = array[key];
                const v450 = __countValue.call(tmp_arr, v449);
                v450;
            }
        }
    }
    return tmp_arr;
};
exports.array_count_values = v451;
const v458 = function (arr1) {
    var retArr = {};
    var argl = arguments.length;
    var k1 = '';
    var i = 1;
    var k = '';
    var arr = {};
    arr1keys: {
        for (k1 in arr1) {
            i = 1
            let v452 = i < argl;
            while (v452) {
                arr = arguments[i];
                for (k in arr) {
                    const v454 = arr[k];
                    const v455 = arr1[k1];
                    const v456 = v454 === v455;
                    if (v456) {
                        continue arr1keys;
                    }
                }
                const v457 = arr1[k1];
                retArr[k1] = v457;
                const v453 = i++;
                v452 = i < argl;
            }
        }
    }
    return retArr;
};
exports.array_diff = v458;
const v467 = function (arr1) {
    var retArr = {};
    var argl = arguments.length;
    var k1 = '';
    var i = 1;
    var k = '';
    var arr = {};
    arr1keys: {
        for (k1 in arr1) {
            i = 1
            let v459 = i < argl;
            while (v459) {
                arr = arguments[i];
                for (k in arr) {
                    const v461 = arr[k];
                    const v462 = arr1[k1];
                    const v463 = v461 === v462;
                    const v464 = k === k1;
                    const v465 = v463 && v464;
                    if (v465) {
                        continue arr1keys;
                    }
                }
                const v466 = arr1[k1];
                retArr[k1] = v466;
                const v460 = i++;
                v459 = i < argl;
            }
        }
    }
    return retArr;
};
exports.array_diff_assoc = v467;
const v472 = function (arr1) {
    var argl = arguments.length;
    var retArr = {};
    var k1 = '';
    var i = 1;
    var k = '';
    var arr = {};
    arr1keys: {
        for (k1 in arr1) {
            i = 1
            let v468 = i < argl;
            while (v468) {
                arr = arguments[i];
                for (k in arr) {
                    const v470 = k === k1;
                    if (v470) {
                        continue arr1keys;
                    }
                }
                const v471 = arr1[k1];
                retArr[k1] = v471;
                const v469 = i++;
                v468 = i < argl;
            }
        }
    }
    return retArr;
};
exports.array_diff_key = v472;
const v497 = function (arr1) {
    var retArr = {};
    const v473 = arguments.length;
    var arglm1 = v473 - 1;
    var cb = arguments[arglm1];
    var arr = {};
    var i = 1;
    var k1 = '';
    var k = '';
    const v474 = typeof cb;
    const v475 = v474 === 'string';
    const v476 = this.window;
    const v477 = v476[cb];
    const v478 = Object.prototype;
    const v479 = v478.toString;
    const v480 = v479.call(cb);
    const v481 = v480 === '[object Array]';
    const v482 = this.window;
    const v483 = cb[0];
    const v484 = v482[v483];
    const v485 = cb[1];
    const v486 = v484[v485];
    let v487;
    if (v481) {
        v487 = v486;
    } else {
        v487 = cb;
    }
    if (v475) {
        cb = v477;
    } else {
        cb = v487;
    }
    arr1keys: {
        for (k1 in arr1) {
            i = 1
            let v488 = i < arglm1;
            while (v488) {
                arr = arguments[i];
                for (k in arr) {
                    const v490 = arr[k];
                    const v491 = arr1[k1];
                    const v492 = v490 === v491;
                    const v493 = cb(k, k1);
                    const v494 = v493 === 0;
                    const v495 = v492 && v494;
                    if (v495) {
                        continue arr1keys;
                    }
                }
                const v496 = arr1[k1];
                retArr[k1] = v496;
                const v489 = i++;
                v488 = i < arglm1;
            }
        }
    }
    return retArr;
};
exports.array_diff_uassoc = v497;
const v518 = function (arr1) {
    var retArr = {};
    const v498 = arguments.length;
    var arglm1 = v498 - 1;
    var cb = arguments[arglm1];
    var arr = {};
    var i = 1;
    var k1 = '';
    var k = '';
    const v499 = typeof cb;
    const v500 = v499 === 'string';
    const v501 = this.window;
    const v502 = v501[cb];
    const v503 = Object.prototype;
    const v504 = v503.toString;
    const v505 = v504.call(cb);
    const v506 = v505 === '[object Array]';
    const v507 = this.window;
    const v508 = cb[0];
    const v509 = v507[v508];
    const v510 = cb[1];
    const v511 = v509[v510];
    let v512;
    if (v506) {
        v512 = v511;
    } else {
        v512 = cb;
    }
    if (v500) {
        cb = v502;
    } else {
        cb = v512;
    }
    arr1keys: {
        for (k1 in arr1) {
            i = 1
            let v513 = i < arglm1;
            while (v513) {
                arr = arguments[i];
                for (k in arr) {
                    const v515 = cb(k, k1);
                    const v516 = v515 === 0;
                    if (v516) {
                        continue arr1keys;
                    }
                }
                const v517 = arr1[k1];
                retArr[k1] = v517;
                const v514 = i++;
                v513 = i < arglm1;
            }
        }
    }
    return retArr;
};
exports.array_diff_ukey = v518;
const v527 = function (start_index, num, mixed_val) {
    var key;
    var tmp_arr = {};
    const v519 = isNaN(start_index);
    const v520 = !v519;
    const v521 = isNaN(num);
    const v522 = !v521;
    const v523 = v520 && v522;
    if (v523) {
        key = 0
        let v524 = key < num;
        while (v524) {
            const v526 = key + start_index;
            tmp_arr[v526] = mixed_val;
            const v525 = key++;
            v524 = key < num;
        }
    }
    return tmp_arr;
};
exports.array_fill = v527;
const v529 = function (keys, value) {
    var retObj = {};
    var key = '';
    for (key in keys) {
        const v528 = keys[key];
        retObj[v528] = value;
    }
    return retObj;
};
exports.array_fill_keys = v529;
const v538 = function (arr, func) {
    var retObj = {};
    var k;
    const v530 = function (v) {
        return v;
    };
    func = func || v530;
    const v531 = Object.prototype;
    const v532 = v531.toString;
    const v533 = v532.call(arr);
    const v534 = v533 === '[object Array]';
    if (v534) {
        retObj = [];
    }
    for (k in arr) {
        const v535 = arr[k];
        const v536 = func(v535);
        if (v536) {
            const v537 = arr[k];
            retObj[k] = v537;
        }
    }
    return retObj;
};
exports.array_filter = v538;
const v546 = function (arr1) {
    var retArr = {};
    var argl = arguments.length;
    var arglm1 = argl - 1;
    var k1 = '';
    var arr = {};
    var i = 0;
    var k = '';
    arr1keys: {
        for (k1 in arr1) {
            arrs: {
                i = 1
                let v539 = i < argl;
                while (v539) {
                    arr = arguments[i];
                    for (k in arr) {
                        const v541 = arr[k];
                        const v542 = arr1[k1];
                        const v543 = v541 === v542;
                        if (v543) {
                            const v544 = i === arglm1;
                            if (v544) {
                                const v545 = arr1[k1];
                                retArr[k1] = v545;
                            }
                            continue arrs;
                        }
                    }
                    continue arr1keys;
                    const v540 = i++;
                    v539 = i < argl;
                }
            }
        }
    }
    return retArr;
};
exports.array_intersect = v546;
const v556 = function (arr1) {
    var retArr = {};
    var argl = arguments.length;
    var arglm1 = argl - 1;
    var k1 = '';
    var arr = {};
    var i = 0;
    var k = '';
    arr1keys: {
        for (k1 in arr1) {
            arrs: {
                i = 1
                let v547 = i < argl;
                while (v547) {
                    arr = arguments[i];
                    for (k in arr) {
                        const v549 = arr[k];
                        const v550 = arr1[k1];
                        const v551 = v549 === v550;
                        const v552 = k === k1;
                        const v553 = v551 && v552;
                        if (v553) {
                            const v554 = i === arglm1;
                            if (v554) {
                                const v555 = arr1[k1];
                                retArr[k1] = v555;
                            }
                            continue arrs;
                        }
                    }
                    continue arr1keys;
                    const v548 = i++;
                    v547 = i < argl;
                }
            }
        }
    }
    return retArr;
};
exports.array_intersect_assoc = v556;
const v562 = function (arr1) {
    var retArr = {};
    var argl = arguments.length;
    var arglm1 = argl - 1;
    var k1 = '';
    var arr = {};
    var i = 0;
    var k = '';
    arr1keys: {
        for (k1 in arr1) {
            arrs: {
                i = 1
                let v557 = i < argl;
                while (v557) {
                    arr = arguments[i];
                    for (k in arr) {
                        const v559 = k === k1;
                        if (v559) {
                            const v560 = i === arglm1;
                            if (v560) {
                                const v561 = arr1[k1];
                                retArr[k1] = v561;
                            }
                            continue arrs;
                        }
                    }
                    continue arr1keys;
                    const v558 = i++;
                    v557 = i < argl;
                }
            }
        }
    }
    return retArr;
};
exports.array_intersect_key = v562;
const v588 = function (arr1) {
    var retArr = {};
    const v563 = arguments.length;
    var arglm1 = v563 - 1;
    var arglm2 = arglm1 - 1;
    var cb = arguments[arglm1];
    var k1 = '';
    var i = 1;
    var arr = {};
    var k = '';
    const v564 = typeof cb;
    const v565 = v564 === 'string';
    const v566 = this.window;
    const v567 = v566[cb];
    const v568 = Object.prototype;
    const v569 = v568.toString;
    const v570 = v569.call(cb);
    const v571 = v570 === '[object Array]';
    const v572 = this.window;
    const v573 = cb[0];
    const v574 = v572[v573];
    const v575 = cb[1];
    const v576 = v574[v575];
    let v577;
    if (v571) {
        v577 = v576;
    } else {
        v577 = cb;
    }
    if (v565) {
        cb = v567;
    } else {
        cb = v577;
    }
    arr1keys: {
        for (k1 in arr1) {
            arrs: {
                i = 1
                let v578 = i < arglm1;
                while (v578) {
                    arr = arguments[i];
                    for (k in arr) {
                        const v580 = arr[k];
                        const v581 = arr1[k1];
                        const v582 = v580 === v581;
                        const v583 = cb(k, k1);
                        const v584 = v583 === 0;
                        const v585 = v582 && v584;
                        if (v585) {
                            const v586 = i === arglm2;
                            if (v586) {
                                const v587 = arr1[k1];
                                retArr[k1] = v587;
                            }
                            continue arrs;
                        }
                    }
                    continue arr1keys;
                    const v579 = i++;
                    v578 = i < arglm1;
                }
            }
        }
    }
    return retArr;
};
exports.array_intersect_uassoc = v588;
const v610 = function (arr1) {
    var retArr = {};
    const v589 = arguments.length;
    var arglm1 = v589 - 1;
    var arglm2 = arglm1 - 1;
    var cb = arguments[arglm1];
    var k1 = '';
    var i = 1;
    var arr = {};
    var k = '';
    const v590 = typeof cb;
    const v591 = v590 === 'string';
    const v592 = this.window;
    const v593 = v592[cb];
    const v594 = Object.prototype;
    const v595 = v594.toString;
    const v596 = v595.call(cb);
    const v597 = v596 === '[object Array]';
    const v598 = this.window;
    const v599 = cb[0];
    const v600 = v598[v599];
    const v601 = cb[1];
    const v602 = v600[v601];
    let v603;
    if (v597) {
        v603 = v602;
    } else {
        v603 = cb;
    }
    if (v591) {
        cb = v593;
    } else {
        cb = v603;
    }
    arr1keys: {
        for (k1 in arr1) {
            arrs: {
                i = 1
                let v604 = i < arglm1;
                while (v604) {
                    arr = arguments[i];
                    for (k in arr) {
                        const v606 = cb(k, k1);
                        const v607 = v606 === 0;
                        if (v607) {
                            const v608 = i === arglm2;
                            if (v608) {
                                const v609 = arr1[k1];
                                retArr[k1] = v609;
                            }
                            continue arrs;
                        }
                    }
                    continue arr1keys;
                    const v605 = i++;
                    v604 = i < arglm1;
                }
            }
        }
    }
    return retArr;
};
exports.array_intersect_ukey = v610;
const v619 = function (key, search) {
    const v611 = !search;
    const v612 = search.constructor;
    const v613 = v612 !== Array;
    const v614 = search.constructor;
    const v615 = v614 !== Object;
    const v616 = v613 && v615;
    const v617 = v611 || v616;
    if (v617) {
        return false;
    }
    const v618 = key in search;
    return v618;
};
exports.array_key_exists = v619;
const v636 = function (input, search_value, argStrict) {
    const v620 = typeof search_value;
    var search = v620 !== 'undefined';
    var tmp_arr = [];
    const v621 = !argStrict;
    const v622 = !v621;
    var strict = v622;
    var include = true;
    var key = '';
    const v623 = typeof input;
    const v624 = v623 === 'object';
    const v625 = input && v624;
    const v626 = input.change_key_case;
    const v627 = v625 && v626;
    if (v627) {
        const v628 = input.keys(search_value, argStrict);
        return v628;
    }
    for (key in input) {
        const v629 = input.hasOwnProperty(key);
        if (v629) {
            include = true;
            if (search) {
                const v630 = input[key];
                const v631 = v630 !== search_value;
                const v632 = strict && v631;
                if (v632) {
                    include = false;
                } else {
                    const v633 = input[key];
                    const v634 = v633 != search_value;
                    if (v634) {
                        include = false;
                    }
                }
            }
            if (include) {
                const v635 = tmp_arr.length;
                tmp_arr[v635] = key;
            }
        }
    }
    return tmp_arr;
};
exports.array_keys = v636;
const v669 = function (callback) {
    var argc = arguments.length;
    var argv = arguments;
    var glbl = this.window;
    var obj = null;
    var cb = callback;
    const v637 = argv[1];
    var j = v637.length;
    var i = 0;
    var k = 1;
    var m = 0;
    var tmp = [];
    var tmp_ar = [];
    let v638 = i < j;
    while (v638) {
        let v639 = k < argc;
        while (v639) {
            const v640 = m++;
            const v641 = k++;
            const v642 = argv[v641];
            const v643 = v642[i];
            tmp[v640] = v643;
            v639 = k < argc;
        }
        m = 0;
        k = 1;
        if (callback) {
            const v644 = typeof callback;
            const v645 = v644 === 'string';
            if (v645) {
                cb = glbl[callback];
            } else {
                const v646 = typeof callback;
                const v647 = v646 === 'object';
                const v648 = callback.length;
                const v649 = v647 && v648;
                if (v649) {
                    const v650 = callback[0];
                    const v651 = typeof v650;
                    const v652 = v651 === 'string';
                    const v653 = callback[0];
                    const v654 = glbl[v653];
                    const v655 = callback[0];
                    if (v652) {
                        obj = v654;
                    } else {
                        obj = v655;
                    }
                    const v656 = typeof obj;
                    const v657 = v656 === 'undefined';
                    if (v657) {
                        const v658 = callback[0];
                        const v659 = 'Object not found: ' + v658;
                        throw v659;
                    }
                    const v660 = callback[1];
                    const v661 = typeof v660;
                    const v662 = v661 === 'string';
                    const v663 = callback[1];
                    const v664 = obj[v663];
                    const v665 = callback[1];
                    if (v662) {
                        cb = v664;
                    } else {
                        cb = v665;
                    }
                }
            }
            const v667 = cb.apply(obj, tmp);
            tmp_ar[v666] = v667;
        } else {
            const v668 = i++;
            tmp_ar[v668] = tmp;
        }
        tmp = [];
        v638 = i < j;
    }
    return tmp_ar;
};
exports.array_map = v669;
const v696 = function () {
    const v670 = Array.prototype;
    const v671 = v670.slice;
    var args = v671.call(arguments);
    var argl = args.length;
    var arg;
    var retObj = {};
    var k = '';
    var argil = 0;
    var j = 0;
    var i = 0;
    var ct = 0;
    const v672 = Object.prototype;
    var toStr = v672.toString;
    var retArr = true;
    (i = 0)
    let v673 = i < argl;
    while (v673) {
        const v675 = args[i];
        const v676 = toStr.call(v675);
        const v677 = v676 !== '[object Array]';
        if (v677) {
            retArr = false;
            break;
        }
        const v674 = i++;
        v673 = i < argl;
    }
    if (retArr) {
        retArr = [];
        i = 0
        let v678 = i < argl;
        while (v678) {
            const v680 = args[i];
            retArr = retArr.concat(v680);
            const v679 = i++;
            v678 = i < argl;
        }
        return retArr;
    }
    (i = 0, ct = 0)
    let v681 = i < argl;
    while (v681) {
        arg = args[i];
        const v683 = toStr.call(arg);
        const v684 = v683 === '[object Array]';
        if (v684) {
            (j = 0, argil = arg.length)
            let v685 = j < argil;
            while (v685) {
                const v687 = ct++;
                const v688 = arg[j];
                retObj[v687] = v688;
                const v686 = j++;
                v685 = j < argil;
            }
        } else {
            for (k in arg) {
                const v689 = arg.hasOwnProperty(k);
                if (v689) {
                    const v690 = parseInt(k, 10);
                    const v691 = v690 + '';
                    const v692 = v691 === k;
                    if (v692) {
                        const v693 = ct++;
                        const v694 = arg[k];
                        retObj[v693] = v694;
                    } else {
                        const v695 = arg[k];
                        retObj[k] = v695;
                    }
                }
            }
        }
        const v682 = i++;
        v681 = i < argl;
    }
    return retObj;
};
exports.array_merge = v696;
const v969 = function (arr) {
    var g;
    var i;
    var j;
    var k;
    var l;
    var sal;
    var vkey;
    var elIndex;
    var lastSorts;
    var tmpArray;
    var zlast;
    var sortFlag = [0];
    var thingsToSort = [];
    var nLastSort = [];
    var lastSort = [];
    var args = arguments;
    var flags = {};
    flags['SORT_REGULAR'] = 16;
    flags['SORT_NUMERIC'] = 17;
    flags['SORT_STRING'] = 18;
    flags['SORT_ASC'] = 32;
    flags['SORT_DESC'] = 40;
    var sortDuplicator = function (a, b) {
        const v697 = nLastSort.shift();
        return v697;
    };
    const v709 = function (a, b) {
        const v698 = a > b;
        const v699 = a < b;
        const v700 = -1;
        let v701;
        if (v699) {
            v701 = v700;
        } else {
            v701 = 0;
        }
        let v702;
        if (v698) {
            v702 = 1;
        } else {
            v702 = v701;
        }
        const v703 = lastSort.push(v702);
        v703;
        const v704 = a > b;
        const v705 = a < b;
        const v706 = -1;
        let v707;
        if (v705) {
            v707 = v706;
        } else {
            v707 = 0;
        }
        let v708;
        if (v704) {
            v708 = 1;
        } else {
            v708 = v707;
        }
        return v708;
    };
    const v721 = function (a, b) {
        const v710 = b > a;
        const v711 = b < a;
        const v712 = -1;
        let v713;
        if (v711) {
            v713 = v712;
        } else {
            v713 = 0;
        }
        let v714;
        if (v710) {
            v714 = 1;
        } else {
            v714 = v713;
        }
        const v715 = lastSort.push(v714);
        v715;
        const v716 = b > a;
        const v717 = b < a;
        const v718 = -1;
        let v719;
        if (v717) {
            v719 = v718;
        } else {
            v719 = 0;
        }
        let v720;
        if (v716) {
            v720 = 1;
        } else {
            v720 = v719;
        }
        return v720;
    };
    const v722 = [
        v709,
        v721
    ];
    const v726 = function (a, b) {
        const v723 = a - b;
        const v724 = lastSort.push(v723);
        v724;
        const v725 = a - b;
        return v725;
    };
    const v730 = function (a, b) {
        const v727 = b - a;
        const v728 = lastSort.push(v727);
        v728;
        const v729 = b - a;
        return v729;
    };
    const v731 = [
        v726,
        v730
    ];
    const v751 = function (a, b) {
        const v732 = a + '';
        const v733 = b + '';
        const v734 = v732 > v733;
        const v735 = a + '';
        const v736 = b + '';
        const v737 = v735 < v736;
        const v738 = -1;
        let v739;
        if (v737) {
            v739 = v738;
        } else {
            v739 = 0;
        }
        let v740;
        if (v734) {
            v740 = 1;
        } else {
            v740 = v739;
        }
        const v741 = lastSort.push(v740);
        v741;
        const v742 = a + '';
        const v743 = b + '';
        const v744 = v742 > v743;
        const v745 = a + '';
        const v746 = b + '';
        const v747 = v745 < v746;
        const v748 = -1;
        let v749;
        if (v747) {
            v749 = v748;
        } else {
            v749 = 0;
        }
        let v750;
        if (v744) {
            v750 = 1;
        } else {
            v750 = v749;
        }
        return v750;
    };
    const v771 = function (a, b) {
        const v752 = b + '';
        const v753 = a + '';
        const v754 = v752 > v753;
        const v755 = b + '';
        const v756 = a + '';
        const v757 = v755 < v756;
        const v758 = -1;
        let v759;
        if (v757) {
            v759 = v758;
        } else {
            v759 = 0;
        }
        let v760;
        if (v754) {
            v760 = 1;
        } else {
            v760 = v759;
        }
        const v761 = lastSort.push(v760);
        v761;
        const v762 = b + '';
        const v763 = a + '';
        const v764 = v762 > v763;
        const v765 = b + '';
        const v766 = a + '';
        const v767 = v765 < v766;
        const v768 = -1;
        let v769;
        if (v767) {
            v769 = v768;
        } else {
            v769 = 0;
        }
        let v770;
        if (v764) {
            v770 = 1;
        } else {
            v770 = v769;
        }
        return v770;
    };
    const v772 = [
        v751,
        v771
    ];
    var sortFunctions = [
        v722,
        v731,
        v772
    ];
    const v773 = [];
    var sortArrs = [v773];
    const v774 = [];
    var sortKeys = [v774];
    const v775 = Object.prototype;
    const v776 = v775.toString;
    const v777 = v776.call(arr);
    const v778 = v777 === '[object Array]';
    if (v778) {
        sortArrs[0] = arr;
    } else {
        const v779 = typeof arr;
        const v780 = v779 === 'object';
        const v781 = arr && v780;
        if (v781) {
            for (i in arr) {
                const v782 = arr.hasOwnProperty(i);
                if (v782) {
                    const v783 = sortKeys[0];
                    const v784 = v783.push(i);
                    v784;
                    const v785 = sortArrs[0];
                    const v786 = arr[i];
                    const v787 = v785.push(v786);
                    v787;
                }
            }
        } else {
            return false;
        }
    }
    const v788 = sortArrs[0];
    var arrMainLength = v788.length;
    var sortComponents = [
        0,
        arrMainLength
    ];
    var argl = arguments.length;
    (j = 1)
    let v789 = j < argl;
    while (v789) {
        const v791 = Object.prototype;
        const v792 = v791.toString;
        const v793 = arguments[j];
        const v794 = v792.call(v793);
        const v795 = v794 === '[object Array]';
        if (v795) {
            const v796 = arguments[j];
            sortArrs[j] = v796;
            sortFlag[j] = 0;
            const v797 = arguments[j];
            const v798 = v797.length;
            const v799 = v798 !== arrMainLength;
            if (v799) {
                return false;
            }
        } else {
            const v800 = arguments[j];
            const v801 = arguments[j];
            const v802 = typeof v801;
            const v803 = v802 === 'object';
            const v804 = v800 && v803;
            if (v804) {
                sortKeys[j] = [];
                sortArrs[j] = [];
                sortFlag[j] = 0;
                const v805 = arguments[j];
                for (i in v805) {
                    const v806 = arguments[j];
                    const v807 = v806.hasOwnProperty(i);
                    if (v807) {
                        const v808 = sortKeys[j];
                        const v809 = v808.push(i);
                        v809;
                        const v810 = sortArrs[j];
                        const v811 = arguments[j];
                        const v812 = v811[i];
                        const v813 = v810.push(v812);
                        v813;
                    }
                }
                const v814 = sortArrs[j];
                const v815 = v814.length;
                const v816 = v815 !== arrMainLength;
                if (v816) {
                    return false;
                }
            } else {
                const v817 = arguments[j];
                const v818 = typeof v817;
                const v819 = v818 === 'string';
                if (v819) {
                    var lFlag = sortFlag.pop();
                    const v820 = arguments[j];
                    const v821 = flags[v820];
                    const v822 = typeof v821;
                    const v823 = v822 === 'undefined';
                    const v824 = arguments[j];
                    const v825 = flags[v824];
                    const v826 = v825 >>> 4;
                    const v827 = lFlag >>> 4;
                    const v828 = v826 & v827;
                    const v829 = v828 > 0;
                    const v830 = v823 || v829;
                    if (v830) {
                        return false;
                    }
                    const v831 = arguments[j];
                    const v832 = flags[v831];
                    const v833 = lFlag + v832;
                    const v834 = sortFlag.push(v833);
                    v834;
                } else {
                    return false;
                }
            }
        }
        const v790 = j++;
        v789 = j < argl;
    }
    (i = 0)
    let v835 = i !== arrMainLength;
    while (v835) {
        const v837 = thingsToSort.push(true);
        v837;
        const v836 = i++;
        v835 = i !== arrMainLength;
    }
    for (i in sortArrs) {
        const v838 = sortArrs.hasOwnProperty(i);
        if (v838) {
            lastSorts = [];
            tmpArray = [];
            elIndex = 0;
            nLastSort = [];
            lastSort = [];
            const v839 = sortComponents.length;
            const v840 = v839 === 0;
            if (v840) {
                const v841 = Object.prototype;
                const v842 = v841.toString;
                const v843 = arguments[i];
                const v844 = v842.call(v843);
                const v845 = v844 === '[object Array]';
                if (v845) {
                    const v846 = sortArrs[i];
                    args[i] = v846;
                } else {
                    const v847 = arguments[i];
                    for (k in v847) {
                        const v848 = arguments[i];
                        const v849 = v848.hasOwnProperty(k);
                        if (v849) {
                            const v850 = arguments[i];
                            const v851 = v850[k];
                            const v852 = delete v851;
                            v852;
                        }
                    }
                    const v853 = sortArrs[i];
                    sal = v853.length;
                    (j = 0, vkey = 0)
                    let v854 = j < sal;
                    while (v854) {
                        const v856 = sortKeys[i];
                        vkey = v856[j];
                        const v857 = args[i];
                        const v858 = sortArrs[i];
                        const v859 = v858[j];
                        v857[vkey] = v859;
                        const v855 = j++;
                        v854 = j < sal;
                    }
                }
                const v860 = sortArrs[i];
                const v861 = delete v860;
                v861;
                const v862 = sortKeys[i];
                const v863 = delete v862;
                v863;
                continue;
            }
            const v864 = sortFlag[i];
            const v865 = v864 & 3;
            const v866 = sortFunctions[v865];
            const v867 = sortFlag[i];
            const v868 = v867 & 8;
            const v869 = v868 > 0;
            let v870;
            if (v869) {
                v870 = 1;
            } else {
                v870 = 0;
            }
            var sFunction = v866[v870];
            l = 0
            const v871 = sortComponents.length;
            let v872 = l !== v871;
            while (v872) {
                const v873 = sortArrs[i];
                const v874 = sortComponents[l];
                const v875 = l + 1;
                const v876 = sortComponents[v875];
                const v877 = v876 + 1;
                tmpArray = v873.slice(v874, v877);
                const v878 = tmpArray.sort(sFunction);
                v878;
                const v879 = [];
                const v880 = v879.concat(lastSort);
                lastSorts[l] = v880;
                elIndex = sortComponents[l];
                for (g in tmpArray) {
                    const v881 = tmpArray.hasOwnProperty(g);
                    if (v881) {
                        const v882 = sortArrs[i];
                        const v883 = tmpArray[g];
                        v882[elIndex] = v883;
                        const v884 = elIndex++;
                        v884;
                    }
                }
                v872 = l !== v871;
            }
            sFunction = sortDuplicator;
            for (j in sortArrs) {
                const v885 = sortArrs.hasOwnProperty(j);
                if (v885) {
                    const v886 = sortArrs[j];
                    const v887 = sortArrs[i];
                    const v888 = v886 === v887;
                    if (v888) {
                        continue;
                    }
                    l = 0
                    const v889 = sortComponents.length;
                    let v890 = l !== v889;
                    while (v890) {
                        const v891 = sortArrs[j];
                        const v892 = sortComponents[l];
                        const v893 = l + 1;
                        const v894 = sortComponents[v893];
                        const v895 = v894 + 1;
                        tmpArray = v891.slice(v892, v895);
                        const v896 = [];
                        const v897 = lastSorts[l];
                        nLastSort = v896.concat(v897);
                        const v898 = tmpArray.sort(sFunction);
                        v898;
                        elIndex = sortComponents[l];
                        for (g in tmpArray) {
                            const v899 = tmpArray.hasOwnProperty(g);
                            if (v899) {
                                const v900 = sortArrs[j];
                                const v901 = tmpArray[g];
                                v900[elIndex] = v901;
                                const v902 = elIndex++;
                                v902;
                            }
                        }
                        v890 = l !== v889;
                    }
                }
            }
            for (j in sortKeys) {
                const v903 = sortKeys.hasOwnProperty(j);
                if (v903) {
                    l = 0
                    const v904 = sortComponents.length;
                    let v905 = l !== v904;
                    while (v905) {
                        const v906 = sortKeys[j];
                        const v907 = sortComponents[l];
                        const v908 = l + 1;
                        const v909 = sortComponents[v908];
                        const v910 = v909 + 1;
                        tmpArray = v906.slice(v907, v910);
                        const v911 = [];
                        const v912 = lastSorts[l];
                        nLastSort = v911.concat(v912);
                        const v913 = tmpArray.sort(sFunction);
                        v913;
                        elIndex = sortComponents[l];
                        for (g in tmpArray) {
                            const v914 = tmpArray.hasOwnProperty(g);
                            if (v914) {
                                const v915 = sortKeys[j];
                                const v916 = tmpArray[g];
                                v915[elIndex] = v916;
                                const v917 = elIndex++;
                                v917;
                            }
                        }
                        v905 = l !== v904;
                    }
                }
            }
            zlast = null;
            sortComponents = [];
            const v918 = sortArrs[i];
            for (j in v918) {
                const v919 = sortArrs[i];
                const v920 = v919.hasOwnProperty(j);
                if (v920) {
                    const v921 = thingsToSort[j];
                    const v922 = !v921;
                    if (v922) {
                        const v923 = sortComponents.length;
                        const v924 = v923 & 1;
                        if (v924) {
                            const v925 = j - 1;
                            const v926 = sortComponents.push(v925);
                            v926;
                        }
                        zlast = null;
                        continue;
                    }
                    const v927 = sortComponents.length;
                    const v928 = v927 & 1;
                    const v929 = !v928;
                    if (v929) {
                        const v930 = zlast !== null;
                        if (v930) {
                            const v931 = sortArrs[i];
                            const v932 = v931[j];
                            const v933 = v932 === zlast;
                            if (v933) {
                                const v934 = j - 1;
                                const v935 = sortComponents.push(v934);
                                v935;
                            } else {
                                thingsToSort[j] = false;
                            }
                        }
                        const v936 = sortArrs[i];
                        zlast = v936[j];
                    } else {
                        const v937 = sortArrs[i];
                        const v938 = v937[j];
                        const v939 = v938 !== zlast;
                        if (v939) {
                            const v940 = j - 1;
                            const v941 = sortComponents.push(v940);
                            v941;
                            const v942 = sortArrs[i];
                            zlast = v942[j];
                        }
                    }
                }
            }
            const v943 = sortComponents.length;
            const v944 = v943 & 1;
            if (v944) {
                const v945 = sortComponents.push(j);
                v945;
            }
            const v946 = Object.prototype;
            const v947 = v946.toString;
            const v948 = arguments[i];
            const v949 = v947.call(v948);
            const v950 = v949 === '[object Array]';
            if (v950) {
                const v951 = sortArrs[i];
                args[i] = v951;
            } else {
                const v952 = arguments[i];
                for (j in v952) {
                    const v953 = arguments[i];
                    const v954 = v953.hasOwnProperty(j);
                    if (v954) {
                        const v955 = arguments[i];
                        const v956 = v955[j];
                        const v957 = delete v956;
                        v957;
                    }
                }
                const v958 = sortArrs[i];
                sal = v958.length;
                (j = 0, vkey = 0)
                let v959 = j < sal;
                while (v959) {
                    const v961 = sortKeys[i];
                    vkey = v961[j];
                    const v962 = args[i];
                    const v963 = sortArrs[i];
                    const v964 = v963[j];
                    v962[vkey] = v964;
                    const v960 = j++;
                    v959 = j < sal;
                }
            }
            const v965 = sortArrs[i];
            const v966 = delete v965;
            v966;
            const v967 = sortKeys[i];
            const v968 = delete v967;
            v968;
        }
    }
    return true;
};
exports.array_multisort = v969;
const v987 = function (input, pad_size, pad_value) {
    var pad = [];
    var newArray = [];
    var newLength;
    var diff = 0;
    var i = 0;
    const v970 = Object.prototype;
    const v971 = v970.toString;
    const v972 = v971.call(input);
    const v973 = v972 === '[object Array]';
    const v974 = isNaN(pad_size);
    const v975 = !v974;
    const v976 = v973 && v975;
    if (v976) {
        const v977 = pad_size < 0;
        const v978 = -1;
        const v979 = pad_size * v978;
        if (v977) {
            newLength = v979;
        } else {
            newLength = pad_size;
        }
        const v980 = input.length;
        diff = newLength - v980;
        const v981 = diff > 0;
        if (v981) {
            i = 0
            let v982 = i < diff;
            while (v982) {
                newArray[i] = pad_value;
                const v983 = i++;
                v982 = i < diff;
            }
            const v984 = pad_size < 0;
            const v985 = newArray.concat(input);
            const v986 = input.concat(newArray);
            if (v984) {
                pad = v985;
            } else {
                pad = v986;
            }
        } else {
            pad = input;
        }
    }
    return pad;
};
exports.array_pad = v987;
const v995 = function (inputArr) {
    var key = '';
    var lastKey = '';
    const v988 = inputArr.hasOwnProperty('length');
    if (v988) {
        const v989 = inputArr.length;
        const v990 = !v989;
        if (v990) {
            return null;
        }
        const v991 = inputArr.pop();
        return v991;
    } else {
        for (key in inputArr) {
            const v992 = inputArr.hasOwnProperty(key);
            if (v992) {
                lastKey = key;
            }
        }
        if (lastKey) {
            var tmp = inputArr[lastKey];
            const v993 = inputArr[lastKey];
            const v994 = delete v993;
            v994;
            return tmp;
        } else {
            return null;
        }
    }
};
exports.array_pop = v995;
const v1006 = function (input) {
    var idx = 0;
    var product = 1;
    var il = 0;
    const v996 = Object.prototype;
    const v997 = v996.toString;
    const v998 = v997.call(input);
    const v999 = v998 !== '[object Array]';
    if (v999) {
        return null;
    }
    il = input.length;
    let v1000 = idx < il;
    while (v1000) {
        const v1001 = input[idx];
        const v1002 = isNaN(v1001);
        const v1003 = !v1002;
        const v1004 = input[idx];
        if (v1003) {
            product = v1004;
        } else {
            product = 0;
        }
        const v1005 = idx++;
        v1005;
        v1000 = idx < il;
    }
    return product;
};
exports.array_product = v1006;
const v1025 = function (inputArr) {
    var i = 0;
    var pr = '';
    var argv = arguments;
    var argc = argv.length;
    var allDigits = /^\d$/;
    var size = 0;
    var highestIdx = 0;
    var len = 0;
    const v1007 = inputArr.hasOwnProperty('length');
    if (v1007) {
        i = 1
        let v1008 = i < argc;
        while (v1008) {
            const v1010 = inputArr.length;
            const v1011 = argv[i];
            inputArr[v1010] = v1011;
            const v1009 = i++;
            v1008 = i < argc;
        }
        const v1012 = inputArr.length;
        return v1012;
    }
    for (pr in inputArr) {
        const v1013 = inputArr.hasOwnProperty(pr);
        if (v1013) {
            const v1014 = ++len;
            v1014;
            const v1015 = pr.search(allDigits);
            const v1016 = -1;
            const v1017 = v1015 !== v1016;
            if (v1017) {
                size = parseInt(pr, 10);
                const v1018 = size > highestIdx;
                if (v1018) {
                    highestIdx = size;
                } else {
                    highestIdx = highestIdx;
                }
            }
        }
    }
    (i = 1)
    let v1019 = i < argc;
    while (v1019) {
        const v1021 = ++highestIdx;
        const v1022 = argv[i];
        inputArr[v1021] = v1022;
        const v1020 = i++;
        v1019 = i < argc;
    }
    const v1023 = len + i;
    const v1024 = v1023 - 1;
    return v1024;
};
exports.array_push = v1025;
const v1048 = function (input, num_req) {
    var indexes = [];
    var ticks = num_req || 1;
    var checkDuplicate = function (input, value) {
        var exist = false;
        var index = 0;
        var il = input.length;
        let v1026 = index < il;
        while (v1026) {
            const v1027 = input[index];
            const v1028 = v1027 === value;
            if (v1028) {
                exist = true;
                break;
            }
            const v1029 = index++;
            v1029;
            v1026 = index < il;
        }
        return exist;
    };
    const v1030 = Object.prototype;
    const v1031 = v1030.toString;
    const v1032 = v1031.call(input);
    const v1033 = v1032 === '[object Array]';
    const v1034 = input.length;
    const v1035 = ticks <= v1034;
    const v1036 = v1033 && v1035;
    if (v1036) {
        while (true) {
            const v1037 = Math.random();
            const v1038 = input.length;
            const v1039 = v1037 * v1038;
            var rand = Math.floor(v1039);
            const v1040 = indexes.length;
            const v1041 = v1040 === ticks;
            if (v1041) {
                break;
            }
            const v1042 = checkDuplicate(indexes, rand);
            const v1043 = !v1042;
            if (v1043) {
                const v1044 = indexes.push(rand);
                v1044;
            }
        }
    } else {
        indexes = null;
    }
    const v1045 = ticks == 1;
    const v1046 = indexes.join();
    let v1047;
    if (v1045) {
        v1047 = v1046;
    } else {
        v1047 = indexes;
    }
    return v1047;
};
exports.array_rand = v1048;
const v1055 = function (a_input, callback) {
    var lon = a_input.length;
    var res = 0;
    var i = 0;
    var tmp = [];
    (i = 0)
    let v1049 = i < lon;
    while (v1049) {
        const v1050 = a_input[i];
        tmp[0] = v1050;
        const v1051 = i + 1;
        const v1052 = a_input[v1051];
        if (v1052) {
            const v1053 = i + 1;
            const v1054 = a_input[v1053];
            tmp[1] = v1054;
        } else {
            tmp[1] = 0;
        }
        res += callback.apply(null, tmp);
        tmp = [];
        v1049 = i < lon;
    }
    return res;
};
exports.array_reduce = v1055;
const v1064 = function (arr) {
    var retObj = {};
    var i = 0;
    var p = '';
    var argl = arguments.length;
    const v1056 = argl < 2;
    if (v1056) {
        const v1057 = new Error('There should be at least 2 arguments passed to array_replace()');
        throw v1057;
    }
    for (p in arr) {
        const v1058 = arr[p];
        retObj[p] = v1058;
    }
    (i = 1)
    let v1059 = i < argl;
    while (v1059) {
        const v1061 = arguments[i];
        for (p in v1061) {
            const v1062 = arguments[i];
            const v1063 = v1062[p];
            retObj[p] = v1063;
        }
        const v1060 = i++;
        v1059 = i < argl;
    }
    return retObj;
};
exports.array_replace = v1064;
const v1082 = function (arr) {
    var retObj = {};
    var i = 0;
    var p = '';
    var argl = arguments.length;
    const v1065 = argl < 2;
    if (v1065) {
        const v1066 = new Error('There should be at least 2 arguments passed to array_replace_recursive()');
        throw v1066;
    }
    for (p in arr) {
        const v1067 = arr[p];
        retObj[p] = v1067;
    }
    (i = 1)
    let v1068 = i < argl;
    while (v1068) {
        const v1070 = arguments[i];
        for (p in v1070) {
            const v1071 = retObj[p];
            const v1072 = retObj[p];
            const v1073 = typeof v1072;
            const v1074 = v1073 === 'object';
            const v1075 = v1071 && v1074;
            if (v1075) {
                const v1076 = retObj[p];
                const v1077 = arguments[i];
                const v1078 = v1077[p];
                const v1079 = this.array_replace_recursive(v1076, v1078);
                retObj[p] = v1079;
            } else {
                const v1080 = arguments[i];
                const v1081 = v1080[p];
                retObj[p] = v1081;
            }
        }
        const v1069 = i++;
        v1068 = i < argl;
    }
    return retObj;
};
exports.array_replace_recursive = v1082;
const v1097 = function (array, preserve_keys) {
    const v1083 = Object.prototype;
    const v1084 = v1083.toString;
    const v1085 = v1084.call(array);
    var isArray = v1085 === '[object Array]';
    let tmp_arr;
    const v1086 = {};
    const v1087 = [];
    if (preserve_keys) {
        tmp_arr = v1086;
    } else {
        tmp_arr = v1087;
    }
    var key;
    const v1088 = !preserve_keys;
    const v1089 = isArray && v1088;
    if (v1089) {
        const v1090 = array.slice(0);
        const v1091 = v1090.reverse();
        return v1091;
    }
    if (preserve_keys) {
        var keys = [];
        for (key in array) {
            const v1092 = keys.push(key);
            v1092;
        }
        var i = keys.length;
        let v1093 = i--;
        while (v1093) {
            key = keys[i];
            const v1094 = array[key];
            tmp_arr[key] = v1094;
            v1093 = i--;
        }
    } else {
        for (key in array) {
            const v1095 = array[key];
            const v1096 = tmp_arr.unshift(v1095);
            v1096;
        }
    }
    return tmp_arr;
};
exports.array_reverse = v1097;
const v1110 = function (inputArr) {
    var props = false;
    var shift = undefined;
    var pr = '';
    var allDigits = /^\d$/;
    const v1098 = -1;
    var int_ct = v1098;
    var _checkToUpIndices = function (arr, ct, key) {
        const v1099 = arr[ct];
        const v1100 = v1099 !== undefined;
        if (v1100) {
            var tmp = ct;
            ct += 1;
            const v1101 = ct === key;
            if (v1101) {
                ct += 1;
            }
            ct = _checkToUpIndices(arr, ct, key);
            const v1102 = arr[tmp];
            arr[ct] = v1102;
            const v1103 = arr[tmp];
            const v1104 = delete v1103;
            v1104;
        }
        return ct;
    };
    const v1105 = inputArr.length;
    const v1106 = v1105 === 0;
    if (v1106) {
        return null;
    }
    const v1107 = inputArr.length;
    const v1108 = v1107 > 0;
    if (v1108) {
        const v1109 = inputArr.shift();
        return v1109;
    }
};
exports.array_shift = v1110;
const v1128 = function (array) {
    var key;
    var sum = 0;
    const v1111 = typeof array;
    const v1112 = v1111 === 'object';
    const v1113 = array && v1112;
    const v1114 = array.change_key_case;
    const v1115 = v1113 && v1114;
    if (v1115) {
        const v1116 = array.sum;
        const v1117 = Array.prototype;
        const v1118 = v1117.slice;
        const v1119 = v1118.call(arguments, 0);
        const v1120 = v1116.apply(array, v1119);
        return v1120;
    }
    const v1121 = typeof array;
    const v1122 = v1121 !== 'object';
    if (v1122) {
        return null;
    }
    for (key in array) {
        const v1123 = array[key];
        const v1124 = parseFloat(v1123);
        const v1125 = isNaN(v1124);
        const v1126 = !v1125;
        if (v1126) {
            const v1127 = array[key];
            sum += parseFloat(v1127);
        }
    }
    return sum;
};
exports.array_sum = v1128;
const v1151 = function (arr1) {
    var retArr = {};
    const v1129 = arguments.length;
    var arglm1 = v1129 - 1;
    var cb = arguments[arglm1];
    var arr = '';
    var i = 1;
    var k1 = '';
    var k = '';
    const v1130 = typeof cb;
    const v1131 = v1130 === 'string';
    const v1132 = this.window;
    const v1133 = v1132[cb];
    const v1134 = Object.prototype;
    const v1135 = v1134.toString;
    const v1136 = v1135.call(cb);
    const v1137 = v1136 === '[object Array]';
    const v1138 = this.window;
    const v1139 = cb[0];
    const v1140 = v1138[v1139];
    const v1141 = cb[1];
    const v1142 = v1140[v1141];
    let v1143;
    if (v1137) {
        v1143 = v1142;
    } else {
        v1143 = cb;
    }
    if (v1131) {
        cb = v1133;
    } else {
        cb = v1143;
    }
    arr1keys: {
        for (k1 in arr1) {
            i = 1
            let v1144 = i < arglm1;
            while (v1144) {
                arr = arguments[i];
                for (k in arr) {
                    const v1146 = arr[k];
                    const v1147 = arr1[k1];
                    const v1148 = cb(v1146, v1147);
                    const v1149 = v1148 === 0;
                    if (v1149) {
                        continue arr1keys;
                    }
                }
                const v1150 = arr1[k1];
                retArr[k1] = v1150;
                const v1145 = i++;
                v1144 = i < arglm1;
            }
        }
    }
    return retArr;
};
exports.array_udiff = v1151;
const v1176 = function (arr1) {
    var retArr = {};
    const v1152 = arguments.length;
    var arglm1 = v1152 - 1;
    var cb = arguments[arglm1];
    var arr = {};
    var i = 1;
    var k1 = '';
    var k = '';
    const v1153 = typeof cb;
    const v1154 = v1153 === 'string';
    const v1155 = this.window;
    const v1156 = v1155[cb];
    const v1157 = Object.prototype;
    const v1158 = v1157.toString;
    const v1159 = v1158.call(cb);
    const v1160 = v1159 === '[object Array]';
    const v1161 = this.window;
    const v1162 = cb[0];
    const v1163 = v1161[v1162];
    const v1164 = cb[1];
    const v1165 = v1163[v1164];
    let v1166;
    if (v1160) {
        v1166 = v1165;
    } else {
        v1166 = cb;
    }
    if (v1154) {
        cb = v1156;
    } else {
        cb = v1166;
    }
    arr1keys: {
        for (k1 in arr1) {
            i = 1
            let v1167 = i < arglm1;
            while (v1167) {
                arr = arguments[i];
                for (k in arr) {
                    const v1169 = arr[k];
                    const v1170 = arr1[k1];
                    const v1171 = cb(v1169, v1170);
                    const v1172 = v1171 === 0;
                    const v1173 = k === k1;
                    const v1174 = v1172 && v1173;
                    if (v1174) {
                        continue arr1keys;
                    }
                }
                const v1175 = arr1[k1];
                retArr[k1] = v1175;
                const v1168 = i++;
                v1167 = i < arglm1;
            }
        }
    }
    return retArr;
};
exports.array_udiff_assoc = v1176;
const v1216 = function (arr1) {
    var retArr = {};
    const v1177 = arguments.length;
    var arglm1 = v1177 - 1;
    var arglm2 = arglm1 - 1;
    var cb = arguments[arglm1];
    var cb0 = arguments[arglm2];
    var k1 = '';
    var i = 1;
    var k = '';
    var arr = {};
    const v1178 = typeof cb;
    const v1179 = v1178 === 'string';
    const v1180 = this.window;
    const v1181 = v1180[cb];
    const v1182 = Object.prototype;
    const v1183 = v1182.toString;
    const v1184 = v1183.call(cb);
    const v1185 = v1184 === '[object Array]';
    const v1186 = this.window;
    const v1187 = cb[0];
    const v1188 = v1186[v1187];
    const v1189 = cb[1];
    const v1190 = v1188[v1189];
    let v1191;
    if (v1185) {
        v1191 = v1190;
    } else {
        v1191 = cb;
    }
    if (v1179) {
        cb = v1181;
    } else {
        cb = v1191;
    }
    const v1192 = typeof cb0;
    const v1193 = v1192 === 'string';
    const v1194 = this.window;
    const v1195 = v1194[cb0];
    const v1196 = Object.prototype;
    const v1197 = v1196.toString;
    const v1198 = v1197.call(cb0);
    const v1199 = v1198 === '[object Array]';
    const v1200 = this.window;
    const v1201 = cb0[0];
    const v1202 = v1200[v1201];
    const v1203 = cb0[1];
    const v1204 = v1202[v1203];
    let v1205;
    if (v1199) {
        v1205 = v1204;
    } else {
        v1205 = cb0;
    }
    if (v1193) {
        cb0 = v1195;
    } else {
        cb0 = v1205;
    }
    arr1keys: {
        for (k1 in arr1) {
            i = 1
            let v1206 = i < arglm2;
            while (v1206) {
                arr = arguments[i];
                for (k in arr) {
                    const v1208 = arr[k];
                    const v1209 = arr1[k1];
                    const v1210 = cb0(v1208, v1209);
                    const v1211 = v1210 === 0;
                    const v1212 = cb(k, k1);
                    const v1213 = v1212 === 0;
                    const v1214 = v1211 && v1213;
                    if (v1214) {
                        continue arr1keys;
                    }
                }
                const v1215 = arr1[k1];
                retArr[k1] = v1215;
                const v1207 = i++;
                v1206 = i < arglm2;
            }
        }
    }
    return retArr;
};
exports.array_udiff_uassoc = v1216;
const v1240 = function (arr1) {
    var retArr = {};
    const v1217 = arguments.length;
    var arglm1 = v1217 - 1;
    var arglm2 = arglm1 - 1;
    var cb = arguments[arglm1];
    var k1 = '';
    var i = 1;
    var arr = {};
    var k = '';
    const v1218 = typeof cb;
    const v1219 = v1218 === 'string';
    const v1220 = this.window;
    const v1221 = v1220[cb];
    const v1222 = Object.prototype;
    const v1223 = v1222.toString;
    const v1224 = v1223.call(cb);
    const v1225 = v1224 === '[object Array]';
    const v1226 = this.window;
    const v1227 = cb[0];
    const v1228 = v1226[v1227];
    const v1229 = cb[1];
    const v1230 = v1228[v1229];
    let v1231;
    if (v1225) {
        v1231 = v1230;
    } else {
        v1231 = cb;
    }
    if (v1219) {
        cb = v1221;
    } else {
        cb = v1231;
    }
    arr1keys: {
        for (k1 in arr1) {
            arrs: {
                i = 1
                let v1232 = i < arglm1;
                while (v1232) {
                    arr = arguments[i];
                    for (k in arr) {
                        const v1234 = arr[k];
                        const v1235 = arr1[k1];
                        const v1236 = cb(v1234, v1235);
                        const v1237 = v1236 === 0;
                        if (v1237) {
                            const v1238 = i === arglm2;
                            if (v1238) {
                                const v1239 = arr1[k1];
                                retArr[k1] = v1239;
                            }
                            continue arrs;
                        }
                    }
                    continue arr1keys;
                    const v1233 = i++;
                    v1232 = i < arglm1;
                }
            }
        }
    }
    return retArr;
};
exports.array_uintersect = v1240;
const v1266 = function (arr1) {
    var retArr = {};
    const v1241 = arguments.length;
    var arglm1 = v1241 - 1;
    var arglm2 = arglm1 - 2;
    var cb = arguments[arglm1];
    var k1 = '';
    var i = 1;
    var arr = {};
    var k = '';
    const v1242 = typeof cb;
    const v1243 = v1242 === 'string';
    const v1244 = this.window;
    const v1245 = v1244[cb];
    const v1246 = Object.prototype;
    const v1247 = v1246.toString;
    const v1248 = v1247.call(cb);
    const v1249 = v1248 === '[object Array]';
    const v1250 = this.window;
    const v1251 = cb[0];
    const v1252 = v1250[v1251];
    const v1253 = cb[1];
    const v1254 = v1252[v1253];
    let v1255;
    if (v1249) {
        v1255 = v1254;
    } else {
        v1255 = cb;
    }
    if (v1243) {
        cb = v1245;
    } else {
        cb = v1255;
    }
    arr1keys: {
        for (k1 in arr1) {
            arrs: {
                i = 1
                let v1256 = i < arglm1;
                while (v1256) {
                    arr = arguments[i];
                    for (k in arr) {
                        const v1258 = k === k1;
                        const v1259 = arr[k];
                        const v1260 = arr1[k1];
                        const v1261 = cb(v1259, v1260);
                        const v1262 = v1261 === 0;
                        const v1263 = v1258 && v1262;
                        if (v1263) {
                            const v1264 = i === arglm2;
                            if (v1264) {
                                const v1265 = arr1[k1];
                                retArr[k1] = v1265;
                            }
                            continue arrs;
                        }
                    }
                    continue arr1keys;
                    const v1257 = i++;
                    v1256 = i < arglm1;
                }
            }
        }
    }
    return retArr;
};
exports.array_uintersect_assoc = v1266;
const v1309 = function (arr1) {
    var retArr = {};
    const v1267 = arguments.length;
    var arglm1 = v1267 - 1;
    var arglm2 = arglm1 - 1;
    var cb = arguments[arglm1];
    var cb0 = arguments[arglm2];
    var k1 = '';
    var i = 1;
    var k = '';
    var arr = {};
    const v1268 = typeof cb;
    const v1269 = v1268 === 'string';
    const v1270 = this.window;
    const v1271 = v1270[cb];
    const v1272 = Object.prototype;
    const v1273 = v1272.toString;
    const v1274 = v1273.call(cb);
    const v1275 = v1274 === '[object Array]';
    const v1276 = this.window;
    const v1277 = cb[0];
    const v1278 = v1276[v1277];
    const v1279 = cb[1];
    const v1280 = v1278[v1279];
    let v1281;
    if (v1275) {
        v1281 = v1280;
    } else {
        v1281 = cb;
    }
    if (v1269) {
        cb = v1271;
    } else {
        cb = v1281;
    }
    const v1282 = typeof cb0;
    const v1283 = v1282 === 'string';
    const v1284 = this.window;
    const v1285 = v1284[cb0];
    const v1286 = Object.prototype;
    const v1287 = v1286.toString;
    const v1288 = v1287.call(cb0);
    const v1289 = v1288 === '[object Array]';
    const v1290 = this.window;
    const v1291 = cb0[0];
    const v1292 = v1290[v1291];
    const v1293 = cb0[1];
    const v1294 = v1292[v1293];
    let v1295;
    if (v1289) {
        v1295 = v1294;
    } else {
        v1295 = cb0;
    }
    if (v1283) {
        cb0 = v1285;
    } else {
        cb0 = v1295;
    }
    arr1keys: {
        for (k1 in arr1) {
            arrs: {
                i = 1
                let v1296 = i < arglm2;
                while (v1296) {
                    arr = arguments[i];
                    for (k in arr) {
                        const v1298 = arr[k];
                        const v1299 = arr1[k1];
                        const v1300 = cb0(v1298, v1299);
                        const v1301 = v1300 === 0;
                        const v1302 = cb(k, k1);
                        const v1303 = v1302 === 0;
                        const v1304 = v1301 && v1303;
                        if (v1304) {
                            const v1305 = arguments.length;
                            const v1306 = v1305 - 3;
                            const v1307 = i === v1306;
                            if (v1307) {
                                const v1308 = arr1[k1];
                                retArr[k1] = v1308;
                            }
                            continue arrs;
                        }
                    }
                    continue arr1keys;
                    const v1297 = i++;
                    v1296 = i < arglm2;
                }
            }
        }
    }
    return retArr;
};
exports.array_uintersect_uassoc = v1309;
const v1318 = function (inputArr) {
    var key = '';
    var tmp_arr2 = {};
    var val = '';
    var __array_search = function (needle, haystack) {
        var fkey = '';
        for (fkey in haystack) {
            const v1310 = haystack.hasOwnProperty(fkey);
            if (v1310) {
                const v1311 = haystack[fkey];
                const v1312 = v1311 + '';
                const v1313 = needle + '';
                const v1314 = v1312 === v1313;
                if (v1314) {
                    return fkey;
                }
            }
        }
        return false;
    };
    for (key in inputArr) {
        const v1315 = inputArr.hasOwnProperty(key);
        if (v1315) {
            val = inputArr[key];
            const v1316 = __array_search(val, tmp_arr2);
            const v1317 = false === v1316;
            if (v1317) {
                tmp_arr2[key] = val;
            }
        }
    }
    return tmp_arr2;
};
exports.array_unique = v1318;
const v1326 = function (array) {
    var i = arguments.length;
    const v1319 = --i;
    let v1320 = v1319 !== 0;
    while (v1320) {
        const v1321 = arguments[0];
        const v1322 = arguments[i];
        const v1323 = v1321.unshift(v1322);
        v1323;
        v1320 = v1319 !== 0;
    }
    const v1324 = arguments[0];
    const v1325 = v1324.length;
    return v1325;
};
exports.array_unshift = v1326;
const v1335 = function (input) {
    var tmp_arr = [];
    var key = '';
    const v1327 = typeof input;
    const v1328 = v1327 === 'object';
    const v1329 = input && v1328;
    const v1330 = input.change_key_case;
    const v1331 = v1329 && v1330;
    if (v1331) {
        const v1332 = input.values();
        return v1332;
    }
    for (key in input) {
        const v1333 = tmp_arr.length;
        const v1334 = input[key];
        tmp_arr[v1333] = v1334;
    }
    return tmp_arr;
};
exports.array_values = v1335;
const v1349 = function (array, funcname, userdata) {
    var key;
    const v1336 = typeof array;
    const v1337 = v1336 !== 'object';
    if (v1337) {
        return false;
    }
    for (key in array) {
        const v1338 = array[key];
        const v1339 = typeof v1338;
        const v1340 = v1339 === 'object';
        if (v1340) {
            const v1341 = array[key];
            const v1342 = this.array_walk_recursive(v1341, funcname, userdata);
            return v1342;
        }
        const v1343 = typeof userdata;
        const v1344 = v1343 !== 'undefined';
        if (v1344) {
            const v1345 = funcname + '( array [key] , key , userdata  )';
            const v1346 = eval(v1345);
            v1346;
        } else {
            const v1347 = funcname + '(  userdata ) ';
            const v1348 = eval(v1347);
            v1348;
        }
    }
    return true;
};
exports.array_walk_recursive = v1349;
const v1364 = function () {
    var matrix = {};
    var that = this;
    var process = function (value) {
        var i = 0;
        var l = value.length;
        var key_value = '';
        (i = 0)
        let v1350 = i < l;
        while (v1350) {
            key_value = value[i];
            const v1352 = Object.prototype;
            const v1353 = v1352.toString;
            const v1354 = v1353.call(key_value);
            const v1355 = v1354 === '[object Array]';
            if (v1355) {
                const v1356 = process(key_value);
                v1356;
            } else {
                const v1357 = that.window;
                const v1358 = v1357[key_value];
                const v1359 = typeof v1358;
                const v1360 = v1359 !== 'undefined';
                if (v1360) {
                    const v1361 = that.window;
                    const v1362 = v1361[key_value];
                    matrix[key_value] = v1362;
                }
            }
            const v1351 = i++;
            v1350 = i < l;
        }
        return true;
    };
    const v1363 = process(arguments);
    v1363;
    return matrix;
};
exports.compact = v1364;
const v1390 = function (mixed_var, mode) {
    var key;
    var cnt = 0;
    const v1365 = mixed_var === null;
    const v1366 = typeof mixed_var;
    const v1367 = v1366 === 'undefined';
    const v1368 = v1365 || v1367;
    if (v1368) {
        return 0;
    } else {
        const v1369 = mixed_var.constructor;
        const v1370 = v1369 !== Array;
        const v1371 = mixed_var.constructor;
        const v1372 = v1371 !== Object;
        const v1373 = v1370 && v1372;
        if (v1373) {
            return 1;
        }
    }
    const v1374 = mode === 'COUNT_RECURSIVE';
    if (v1374) {
        mode = 1;
    }
    const v1375 = mode != 1;
    if (v1375) {
        mode = 0;
    }
    for (key in mixed_var) {
        const v1376 = mixed_var.hasOwnProperty(key);
        if (v1376) {
            const v1377 = cnt++;
            v1377;
            const v1378 = mode == 1;
            const v1379 = mixed_var[key];
            const v1380 = v1378 && v1379;
            const v1381 = mixed_var[key];
            const v1382 = v1381.constructor;
            const v1383 = v1382 === Array;
            const v1384 = mixed_var[key];
            const v1385 = v1384.constructor;
            const v1386 = v1385 === Object;
            const v1387 = v1383 || v1386;
            const v1388 = v1380 && v1387;
            if (v1388) {
                const v1389 = mixed_var[key];
                cnt += this.count(v1389, 1);
            }
        }
    }
    return cnt;
};
exports.count = v1390;
const v1419 = function (arr) {
    const v1391 = this.php_js;
    const v1392 = {};
    this.php_js = v1391 || v1392;
    const v1393 = this.php_js;
    const v1394 = this.php_js;
    const v1395 = v1394.pointers;
    const v1396 = [];
    v1393.pointers = v1395 || v1396;
    var indexOf = function (value) {
        var i = 0;
        var length = this.length;
        let v1397 = i < length;
        while (v1397) {
            const v1399 = this[i];
            const v1400 = v1399 === value;
            if (v1400) {
                return i;
            }
            const v1398 = i++;
            v1397 = i < length;
        }
        const v1401 = -1;
        return v1401;
    };
    const v1402 = this.php_js;
    var pointers = v1402.pointers;
    const v1403 = pointers.indexOf;
    const v1404 = !v1403;
    if (v1404) {
        pointers.indexOf = indexOf;
    }
    const v1405 = pointers.indexOf(arr);
    const v1406 = -1;
    const v1407 = v1405 === v1406;
    if (v1407) {
        const v1408 = pointers.push(arr, 0);
        v1408;
    }
    var arrpos = pointers.indexOf(arr);
    const v1409 = arrpos + 1;
    var cursor = pointers[v1409];
    const v1410 = Object.prototype;
    const v1411 = v1410.toString;
    const v1412 = v1411.call(arr);
    const v1413 = v1412 === '[object Array]';
    if (v1413) {
        const v1414 = arr[cursor];
        const v1415 = v1414 || false;
        return v1415;
    }
    var ct = 0;
    let k;
    for (k in arr) {
        const v1416 = ct === cursor;
        if (v1416) {
            const v1417 = arr[k];
            return v1417;
        }
        const v1418 = ct++;
        v1418;
    }
    return false;
};
exports.current = v1419;
const v1464 = function (arr) {
    const v1420 = this.php_js;
    const v1421 = {};
    this.php_js = v1420 || v1421;
    const v1422 = this.php_js;
    const v1423 = this.php_js;
    const v1424 = v1423.pointers;
    const v1425 = [];
    v1422.pointers = v1424 || v1425;
    var indexOf = function (value) {
        var i = 0;
        var length = this.length;
        let v1426 = i < length;
        while (v1426) {
            const v1428 = this[i];
            const v1429 = v1428 === value;
            if (v1429) {
                return i;
            }
            const v1427 = i++;
            v1426 = i < length;
        }
        const v1430 = -1;
        return v1430;
    };
    const v1431 = this.php_js;
    var pointers = v1431.pointers;
    const v1432 = pointers.indexOf;
    const v1433 = !v1432;
    if (v1433) {
        pointers.indexOf = indexOf;
    }
    const v1434 = pointers.indexOf(arr);
    const v1435 = -1;
    const v1436 = v1434 === v1435;
    if (v1436) {
        const v1437 = pointers.push(arr, 0);
        v1437;
    }
    var arrpos = pointers.indexOf(arr);
    const v1438 = arrpos + 1;
    var cursor = pointers[v1438];
    var pos = 0;
    const v1439 = Object.prototype;
    const v1440 = v1439.toString;
    const v1441 = v1440.call(arr);
    const v1442 = v1441 !== '[object Array]';
    if (v1442) {
        var ct = 0;
        let k;
        for (k in arr) {
            const v1443 = ct === cursor;
            if (v1443) {
                const v1444 = arrpos + 1;
                pointers[v1444] += 1;
                const v1445 = each.returnArrayOnly;
                if (v1445) {
                    const v1446 = arr[k];
                    const v1447 = [
                        k,
                        v1446
                    ];
                    return v1447;
                } else {
                    const v1448 = arr[k];
                    const v1449 = arr[k];
                    const v1450 = {};
                    v1450[1] = v1448;
                    v1450.value = v1449;
                    v1450[0] = k;
                    v1450.key = k;
                    return v1450;
                }
            }
            const v1451 = ct++;
            v1451;
        }
        return false;
    }
    const v1452 = arr.length;
    const v1453 = v1452 === 0;
    const v1454 = arr.length;
    const v1455 = cursor === v1454;
    const v1456 = v1453 || v1455;
    if (v1456) {
        return false;
    }
    pos = cursor;
    const v1457 = arrpos + 1;
    pointers[v1457] += 1;
    const v1458 = each.returnArrayOnly;
    if (v1458) {
        const v1459 = arr[pos];
        const v1460 = [
            pos,
            v1459
        ];
        return v1460;
    } else {
        const v1461 = arr[pos];
        const v1462 = arr[pos];
        const v1463 = {};
        v1463[1] = v1461;
        v1463.value = v1462;
        v1463[0] = pos;
        v1463.key = pos;
        return v1463;
    }
};
exports.each = v1464;
const v1497 = function (arr) {
    const v1465 = this.php_js;
    const v1466 = {};
    this.php_js = v1465 || v1466;
    const v1467 = this.php_js;
    const v1468 = this.php_js;
    const v1469 = v1468.pointers;
    const v1470 = [];
    v1467.pointers = v1469 || v1470;
    var indexOf = function (value) {
        var i = 0;
        var length = this.length;
        let v1471 = i < length;
        while (v1471) {
            const v1473 = this[i];
            const v1474 = v1473 === value;
            if (v1474) {
                return i;
            }
            const v1472 = i++;
            v1471 = i < length;
        }
        const v1475 = -1;
        return v1475;
    };
    const v1476 = this.php_js;
    var pointers = v1476.pointers;
    const v1477 = pointers.indexOf;
    const v1478 = !v1477;
    if (v1478) {
        pointers.indexOf = indexOf;
    }
    const v1479 = pointers.indexOf(arr);
    const v1480 = -1;
    const v1481 = v1479 === v1480;
    if (v1481) {
        const v1482 = pointers.push(arr, 0);
        v1482;
    }
    var arrpos = pointers.indexOf(arr);
    const v1483 = Object.prototype;
    const v1484 = v1483.toString;
    const v1485 = v1484.call(arr);
    const v1486 = v1485 !== '[object Array]';
    if (v1486) {
        var ct = 0;
        var val;
        let k;
        for (k in arr) {
            const v1487 = ct++;
            v1487;
            val = arr[k];
        }
        const v1488 = ct === 0;
        if (v1488) {
            return false;
        }
        const v1489 = arrpos + 1;
        pointers[v1489] = ct - 1;
        return val;
    }
    const v1490 = arr.length;
    const v1491 = v1490 === 0;
    if (v1491) {
        return false;
    }
    const v1492 = arrpos + 1;
    const v1493 = arr.length;
    pointers[v1492] = v1493 - 1;
    const v1494 = arrpos + 1;
    const v1495 = pointers[v1494];
    const v1496 = arr[v1495];
    return v1496;
};
exports.end = v1497;
const v1504 = function (needle, haystack, argStrict) {
    var key = '';
    const v1498 = !argStrict;
    const v1499 = !v1498;
    var strict = v1499;
    if (strict) {
        for (key in haystack) {
            const v1500 = haystack[key];
            const v1501 = v1500 === needle;
            if (v1501) {
                return true;
            }
        }
    } else {
        for (key in haystack) {
            const v1502 = haystack[key];
            const v1503 = v1502 == needle;
            if (v1503) {
                return true;
            }
        }
    }
    return false;
};
exports.in_array = v1504;
const v1533 = function (arr) {
    const v1505 = this.php_js;
    const v1506 = {};
    this.php_js = v1505 || v1506;
    const v1507 = this.php_js;
    const v1508 = this.php_js;
    const v1509 = v1508.pointers;
    const v1510 = [];
    v1507.pointers = v1509 || v1510;
    var indexOf = function (value) {
        var i = 0;
        var length = this.length;
        let v1511 = i < length;
        while (v1511) {
            const v1513 = this[i];
            const v1514 = v1513 === value;
            if (v1514) {
                return i;
            }
            const v1512 = i++;
            v1511 = i < length;
        }
        const v1515 = -1;
        return v1515;
    };
    const v1516 = this.php_js;
    var pointers = v1516.pointers;
    const v1517 = pointers.indexOf;
    const v1518 = !v1517;
    if (v1518) {
        pointers.indexOf = indexOf;
    }
    const v1519 = pointers.indexOf(arr);
    const v1520 = -1;
    const v1521 = v1519 === v1520;
    if (v1521) {
        const v1522 = pointers.push(arr, 0);
        v1522;
    }
    const v1523 = pointers.indexOf(arr);
    const v1524 = v1523 + 1;
    var cursor = pointers[v1524];
    const v1525 = Object.prototype;
    const v1526 = v1525.toString;
    const v1527 = v1526.call(arr);
    const v1528 = v1527 !== '[object Array]';
    if (v1528) {
        var ct = 0;
        let k;
        for (k in arr) {
            const v1529 = ct === cursor;
            if (v1529) {
                return k;
            }
            const v1530 = ct++;
            v1530;
        }
        return false;
    }
    const v1531 = arr.length;
    const v1532 = v1531 === 0;
    if (v1532) {
        return false;
    }
    return cursor;
};
exports.key = v1533;
const v1572 = function (arr) {
    const v1534 = this.php_js;
    const v1535 = {};
    this.php_js = v1534 || v1535;
    const v1536 = this.php_js;
    const v1537 = this.php_js;
    const v1538 = v1537.pointers;
    const v1539 = [];
    v1536.pointers = v1538 || v1539;
    var indexOf = function (value) {
        var i = 0;
        var length = this.length;
        let v1540 = i < length;
        while (v1540) {
            const v1542 = this[i];
            const v1543 = v1542 === value;
            if (v1543) {
                return i;
            }
            const v1541 = i++;
            v1540 = i < length;
        }
        const v1544 = -1;
        return v1544;
    };
    const v1545 = this.php_js;
    var pointers = v1545.pointers;
    const v1546 = pointers.indexOf;
    const v1547 = !v1546;
    if (v1547) {
        pointers.indexOf = indexOf;
    }
    const v1548 = pointers.indexOf(arr);
    const v1549 = -1;
    const v1550 = v1548 === v1549;
    if (v1550) {
        const v1551 = pointers.push(arr, 0);
        v1551;
    }
    var arrpos = pointers.indexOf(arr);
    const v1552 = arrpos + 1;
    var cursor = pointers[v1552];
    const v1553 = Object.prototype;
    const v1554 = v1553.toString;
    const v1555 = v1554.call(arr);
    const v1556 = v1555 !== '[object Array]';
    if (v1556) {
        var ct = 0;
        let k;
        for (k in arr) {
            const v1557 = cursor + 1;
            const v1558 = ct === v1557;
            if (v1558) {
                const v1559 = arrpos + 1;
                pointers[v1559] += 1;
                const v1560 = arr[k];
                return v1560;
            }
            const v1561 = ct++;
            v1561;
        }
        return false;
    }
    const v1562 = arr.length;
    const v1563 = v1562 === 0;
    const v1564 = arr.length;
    const v1565 = v1564 - 1;
    const v1566 = cursor === v1565;
    const v1567 = v1563 || v1566;
    if (v1567) {
        return false;
    }
    const v1568 = arrpos + 1;
    pointers[v1568] += 1;
    const v1569 = arrpos + 1;
    const v1570 = pointers[v1569];
    const v1571 = arr[v1570];
    return v1571;
};
exports.next = v1572;
const v1608 = function (arr) {
    const v1573 = this.php_js;
    const v1574 = {};
    this.php_js = v1573 || v1574;
    const v1575 = this.php_js;
    const v1576 = this.php_js;
    const v1577 = v1576.pointers;
    const v1578 = [];
    v1575.pointers = v1577 || v1578;
    var indexOf = function (value) {
        var i = 0;
        var length = this.length;
        let v1579 = i < length;
        while (v1579) {
            const v1581 = this[i];
            const v1582 = v1581 === value;
            if (v1582) {
                return i;
            }
            const v1580 = i++;
            v1579 = i < length;
        }
        const v1583 = -1;
        return v1583;
    };
    const v1584 = this.php_js;
    var pointers = v1584.pointers;
    const v1585 = pointers.indexOf;
    const v1586 = !v1585;
    if (v1586) {
        pointers.indexOf = indexOf;
    }
    var arrpos = pointers.indexOf(arr);
    const v1587 = arrpos + 1;
    var cursor = pointers[v1587];
    const v1588 = pointers.indexOf(arr);
    const v1589 = -1;
    const v1590 = v1588 === v1589;
    const v1591 = cursor === 0;
    const v1592 = v1590 || v1591;
    if (v1592) {
        return false;
    }
    const v1593 = Object.prototype;
    const v1594 = v1593.toString;
    const v1595 = v1594.call(arr);
    const v1596 = v1595 !== '[object Array]';
    if (v1596) {
        var ct = 0;
        let k;
        for (k in arr) {
            const v1597 = cursor - 1;
            const v1598 = ct === v1597;
            if (v1598) {
                const v1599 = arrpos + 1;
                pointers[v1599] -= 1;
                const v1600 = arr[k];
                return v1600;
            }
            const v1601 = ct++;
            v1601;
        }
    }
    const v1602 = arr.length;
    const v1603 = v1602 === 0;
    if (v1603) {
        return false;
    }
    const v1604 = arrpos + 1;
    pointers[v1604] -= 1;
    const v1605 = arrpos + 1;
    const v1606 = pointers[v1605];
    const v1607 = arr[v1606];
    return v1607;
};
exports.prev = v1608;
const v1628 = function (low, high, step) {
    var matrix = [];
    var inival;
    var endval;
    var plus;
    var walker = step || 1;
    var chars = false;
    const v1609 = isNaN(low);
    const v1610 = !v1609;
    const v1611 = isNaN(high);
    const v1612 = !v1611;
    const v1613 = v1610 && v1612;
    if (v1613) {
        inival = low;
        endval = high;
    } else {
        const v1614 = isNaN(low);
        const v1615 = isNaN(high);
        const v1616 = v1614 && v1615;
        if (v1616) {
            chars = true;
            inival = low.charCodeAt(0);
            endval = high.charCodeAt(0);
        } else {
            const v1617 = isNaN(low);
            if (v1617) {
                inival = 0;
            } else {
                inival = low;
            }
            const v1618 = isNaN(high);
            if (v1618) {
                endval = 0;
            } else {
                endval = high;
            }
        }
    }
    const v1619 = inival > endval;
    if (v1619) {
        plus = false;
    } else {
        plus = true;
    }
    if (plus) {
        let v1620 = inival <= endval;
        while (v1620) {
            const v1621 = String.fromCharCode(inival);
            let v1622;
            if (chars) {
                v1622 = v1621;
            } else {
                v1622 = inival;
            }
            const v1623 = matrix.push(v1622);
            v1623;
            inival += walker;
            v1620 = inival <= endval;
        }
    } else {
        let v1624 = inival >= endval;
        while (v1624) {
            const v1625 = String.fromCharCode(inival);
            let v1626;
            if (chars) {
                v1626 = v1625;
            } else {
                v1626 = inival;
            }
            const v1627 = matrix.push(v1626);
            v1627;
            inival -= walker;
            v1624 = inival >= endval;
        }
    }
    return matrix;
};
exports.range = v1628;
const v1663 = function (arr) {
    const v1629 = this.php_js;
    const v1630 = {};
    this.php_js = v1629 || v1630;
    const v1631 = this.php_js;
    const v1632 = this.php_js;
    const v1633 = v1632.pointers;
    const v1634 = [];
    v1631.pointers = v1633 || v1634;
    var indexOf = function (value) {
        var i = 0;
        var length = this.length;
        let v1635 = i < length;
        while (v1635) {
            const v1637 = this[i];
            const v1638 = v1637 === value;
            if (v1638) {
                return i;
            }
            const v1636 = i++;
            v1635 = i < length;
        }
        const v1639 = -1;
        return v1639;
    };
    const v1640 = this.php_js;
    var pointers = v1640.pointers;
    const v1641 = pointers.indexOf;
    const v1642 = !v1641;
    if (v1642) {
        pointers.indexOf = indexOf;
    }
    const v1643 = pointers.indexOf(arr);
    const v1644 = -1;
    const v1645 = v1643 === v1644;
    if (v1645) {
        const v1646 = pointers.push(arr, 0);
        v1646;
    }
    var arrpos = pointers.indexOf(arr);
    const v1647 = Object.prototype;
    const v1648 = v1647.toString;
    const v1649 = v1648.call(arr);
    const v1650 = v1649 !== '[object Array]';
    if (v1650) {
        let k;
        for (k in arr) {
            const v1651 = pointers.indexOf(arr);
            const v1652 = -1;
            const v1653 = v1651 === v1652;
            if (v1653) {
                const v1654 = pointers.push(arr, 0);
                v1654;
            } else {
                const v1655 = arrpos + 1;
                pointers[v1655] = 0;
            }
            const v1656 = arr[k];
            return v1656;
        }
        return false;
    }
    const v1657 = arr.length;
    const v1658 = v1657 === 0;
    if (v1658) {
        return false;
    }
    const v1659 = arrpos + 1;
    pointers[v1659] = 0;
    const v1660 = arrpos + 1;
    const v1661 = pointers[v1660];
    const v1662 = arr[v1661];
    return v1662;
};
exports.reset = v1663;
const v1697 = function (inputArr) {
    var valArr = [];
    var k = '';
    var i = 0;
    var strictForIn = false;
    var populateArr = [];
    for (k in inputArr) {
        const v1664 = inputArr.hasOwnProperty(k);
        if (v1664) {
            const v1665 = inputArr[k];
            const v1666 = valArr.push(v1665);
            v1666;
            if (strictForIn) {
                const v1667 = inputArr[k];
                const v1668 = delete v1667;
                v1668;
            }
        }
    }
    const v1671 = function () {
        const v1669 = Math.random();
        const v1670 = 0.5 - v1669;
        return v1670;
    };
    const v1672 = valArr.sort(v1671);
    v1672;
    const v1673 = this.php_js;
    const v1674 = {};
    this.php_js = v1673 || v1674;
    const v1675 = this.php_js;
    const v1676 = this.php_js;
    const v1677 = v1676.ini;
    const v1678 = {};
    v1675.ini = v1677 || v1678;
    const v1679 = this.php_js;
    const v1680 = v1679.ini;
    const v1681 = v1680['phpjs.strictForIn'];
    const v1682 = this.php_js;
    const v1683 = v1682.ini;
    const v1684 = v1683['phpjs.strictForIn'];
    const v1685 = v1684.local_value;
    const v1686 = v1681 && v1685;
    const v1687 = this.php_js;
    const v1688 = v1687.ini;
    const v1689 = v1688['phpjs.strictForIn'];
    const v1690 = v1689.local_value;
    const v1691 = v1690 !== 'off';
    strictForIn = v1686 && v1691;
    if (strictForIn) {
        populateArr = inputArr;
    } else {
        populateArr = populateArr;
    }
    (i = 0)
    const v1692 = valArr.length;
    let v1693 = i < v1692;
    while (v1693) {
        const v1695 = valArr[i];
        populateArr[i] = v1695;
        const v1694 = i++;
        v1693 = i < v1692;
    }
    const v1696 = strictForIn || populateArr;
    return v1696;
};
exports.shuffle = v1697;
const v1745 = function (inputArr, sorter) {
    var valArr = [];
    var tempKeyVal;
    var tempValue;
    var ret;
    var k = '';
    var i = 0;
    var strictForIn = false;
    var populateArr = {};
    const v1698 = typeof sorter;
    const v1699 = v1698 === 'string';
    if (v1699) {
        sorter = this[sorter];
    } else {
        const v1700 = Object.prototype;
        const v1701 = v1700.toString;
        const v1702 = v1701.call(sorter);
        const v1703 = v1702 === '[object Array]';
        if (v1703) {
            const v1704 = sorter[0];
            const v1705 = this[v1704];
            const v1706 = sorter[1];
            sorter = v1705[v1706];
        }
    }
    const v1707 = this.php_js;
    const v1708 = {};
    this.php_js = v1707 || v1708;
    const v1709 = this.php_js;
    const v1710 = this.php_js;
    const v1711 = v1710.ini;
    const v1712 = {};
    v1709.ini = v1711 || v1712;
    const v1713 = this.php_js;
    const v1714 = v1713.ini;
    const v1715 = v1714['phpjs.strictForIn'];
    const v1716 = this.php_js;
    const v1717 = v1716.ini;
    const v1718 = v1717['phpjs.strictForIn'];
    const v1719 = v1718.local_value;
    const v1720 = v1715 && v1719;
    const v1721 = this.php_js;
    const v1722 = v1721.ini;
    const v1723 = v1722['phpjs.strictForIn'];
    const v1724 = v1723.local_value;
    const v1725 = v1724 !== 'off';
    strictForIn = v1720 && v1725;
    if (strictForIn) {
        populateArr = inputArr;
    } else {
        populateArr = populateArr;
    }
    for (k in inputArr) {
        const v1726 = inputArr.hasOwnProperty(k);
        if (v1726) {
            const v1727 = inputArr[k];
            const v1728 = [
                k,
                v1727
            ];
            const v1729 = valArr.push(v1728);
            v1729;
            if (strictForIn) {
                const v1730 = inputArr[k];
                const v1731 = delete v1730;
                v1731;
            }
        }
    }
    const v1735 = function (a, b) {
        const v1732 = a[1];
        const v1733 = b[1];
        const v1734 = sorter(v1732, v1733);
        return v1734;
    };
    const v1736 = valArr.sort(v1735);
    v1736;
    (i = 0)
    const v1737 = valArr.length;
    let v1738 = i < v1737;
    while (v1738) {
        const v1740 = valArr[i];
        const v1741 = v1740[0];
        const v1742 = valArr[i];
        const v1743 = v1742[1];
        populateArr[v1741] = v1743;
        const v1739 = i++;
        v1738 = i < v1737;
    }
    const v1744 = strictForIn || populateArr;
    return v1744;
};
exports.uasort = v1745;
const v1781 = function (inputArr, sorter) {
    var tmp_arr = {};
    var keys = [];
    var i = 0;
    var k = '';
    var strictForIn = false;
    var populateArr = {};
    const v1746 = typeof sorter;
    const v1747 = v1746 === 'string';
    if (v1747) {
        const v1748 = this.window;
        sorter = v1748[sorter];
    }
    for (k in inputArr) {
        const v1749 = inputArr.hasOwnProperty(k);
        if (v1749) {
            const v1750 = keys.push(k);
            v1750;
        }
    }
    try {
        if (sorter) {
            const v1751 = keys.sort(sorter);
            v1751;
        } else {
            const v1752 = keys.sort();
            v1752;
        }
    } catch (e) {
        return false;
    }
    const v1753 = this.php_js;
    const v1754 = {};
    this.php_js = v1753 || v1754;
    const v1755 = this.php_js;
    const v1756 = this.php_js;
    const v1757 = v1756.ini;
    const v1758 = {};
    v1755.ini = v1757 || v1758;
    const v1759 = this.php_js;
    const v1760 = v1759.ini;
    const v1761 = v1760['phpjs.strictForIn'];
    const v1762 = this.php_js;
    const v1763 = v1762.ini;
    const v1764 = v1763['phpjs.strictForIn'];
    const v1765 = v1764.local_value;
    const v1766 = v1761 && v1765;
    const v1767 = this.php_js;
    const v1768 = v1767.ini;
    const v1769 = v1768['phpjs.strictForIn'];
    const v1770 = v1769.local_value;
    const v1771 = v1770 !== 'off';
    strictForIn = v1766 && v1771;
    if (strictForIn) {
        populateArr = inputArr;
    } else {
        populateArr = populateArr;
    }
    (i = 0)
    const v1772 = keys.length;
    let v1773 = i < v1772;
    while (v1773) {
        k = keys[i];
        const v1775 = inputArr[k];
        tmp_arr[k] = v1775;
        if (strictForIn) {
            const v1776 = inputArr[k];
            const v1777 = delete v1776;
            v1777;
        }
        const v1774 = i++;
        v1773 = i < v1772;
    }
    for (i in tmp_arr) {
        const v1778 = tmp_arr.hasOwnProperty(i);
        if (v1778) {
            const v1779 = tmp_arr[i];
            populateArr[i] = v1779;
        }
    }
    const v1780 = strictForIn || populateArr;
    return v1780;
};
exports.uksort = v1781;
const v1821 = function (inputArr, sorter) {
    var valArr = [];
    var k = '';
    var i = 0;
    var strictForIn = false;
    var populateArr = {};
    const v1782 = typeof sorter;
    const v1783 = v1782 === 'string';
    if (v1783) {
        sorter = this[sorter];
    } else {
        const v1784 = Object.prototype;
        const v1785 = v1784.toString;
        const v1786 = v1785.call(sorter);
        const v1787 = v1786 === '[object Array]';
        if (v1787) {
            const v1788 = sorter[0];
            const v1789 = this[v1788];
            const v1790 = sorter[1];
            sorter = v1789[v1790];
        }
    }
    const v1791 = this.php_js;
    const v1792 = {};
    this.php_js = v1791 || v1792;
    const v1793 = this.php_js;
    const v1794 = this.php_js;
    const v1795 = v1794.ini;
    const v1796 = {};
    v1793.ini = v1795 || v1796;
    const v1797 = this.php_js;
    const v1798 = v1797.ini;
    const v1799 = v1798['phpjs.strictForIn'];
    const v1800 = this.php_js;
    const v1801 = v1800.ini;
    const v1802 = v1801['phpjs.strictForIn'];
    const v1803 = v1802.local_value;
    const v1804 = v1799 && v1803;
    const v1805 = this.php_js;
    const v1806 = v1805.ini;
    const v1807 = v1806['phpjs.strictForIn'];
    const v1808 = v1807.local_value;
    const v1809 = v1808 !== 'off';
    strictForIn = v1804 && v1809;
    if (strictForIn) {
        populateArr = inputArr;
    } else {
        populateArr = populateArr;
    }
    for (k in inputArr) {
        const v1810 = inputArr.hasOwnProperty(k);
        if (v1810) {
            const v1811 = inputArr[k];
            const v1812 = valArr.push(v1811);
            v1812;
            if (strictForIn) {
                const v1813 = inputArr[k];
                const v1814 = delete v1813;
                v1814;
            }
        }
    }
    try {
        const v1815 = valArr.sort(sorter);
        v1815;
    } catch (e) {
        return false;
    }
    (i = 0)
    const v1816 = valArr.length;
    let v1817 = i < v1816;
    while (v1817) {
        const v1819 = valArr[i];
        populateArr[i] = v1819;
        const v1818 = i++;
        v1817 = i < v1816;
    }
    const v1820 = strictForIn || populateArr;
    return v1820;
};
exports.usort = v1821;
const v1835 = function (m, d, y) {
    const v1822 = m > 0;
    const v1823 = m < 13;
    const v1824 = v1822 && v1823;
    const v1825 = y > 0;
    const v1826 = v1824 && v1825;
    const v1827 = y < 32768;
    const v1828 = v1826 && v1827;
    const v1829 = d > 0;
    const v1830 = v1828 && v1829;
    const v1831 = new Date(y, m, 0);
    const v1832 = v1831.getDate();
    const v1833 = d <= v1832;
    const v1834 = v1830 && v1833;
    return v1834;
};
exports.checkdate = v1835;
const v2024 = function (format, timestamp) {
    var that = this;
    var jsdate;
    var f;
    var txt_words = [
        'Sun',
        'Mon',
        'Tues',
        'Wednes',
        'Thurs',
        'Fri',
        'Satur',
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    var formatChr = /\\?(.?)/gi;
    var formatChrCb = function (t, s) {
        const v1836 = f[t];
        const v1837 = f[t]();
        let v1838;
        if (v1836) {
            v1838 = v1837;
        } else {
            v1838 = s;
        }
        return v1838;
    };
    var _pad = function (n, c) {
        n = String(n);
        const v1839 = n.length;
        let v1840 = v1839 < c;
        while (v1840) {
            n = '0' + n;
            v1840 = v1839 < c;
        }
        return n;
    };
    const v1843 = function () {
        const v1841 = f.j();
        const v1842 = _pad(v1841, 2);
        return v1842;
    };
    const v1846 = function () {
        const v1844 = f.l();
        const v1845 = v1844.slice(0, 3);
        return v1845;
    };
    const v1848 = function () {
        const v1847 = jsdate.getDate();
        return v1847;
    };
    const v1852 = function () {
        const v1849 = f.w();
        const v1850 = txt_words[v1849];
        const v1851 = v1850 + 'day';
        return v1851;
    };
    const v1855 = function () {
        const v1853 = f.w();
        const v1854 = v1853 || 7;
        return v1854;
    };
    const v1866 = function () {
        var j = f.j();
        var i = j % 10;
        const v1856 = i <= 3;
        const v1857 = j % 100;
        const v1858 = v1857 / 10;
        const v1859 = parseInt(v1858, 10);
        const v1860 = v1859 == 1;
        const v1861 = v1856 && v1860;
        if (v1861) {
            i = 0;
        }
        const v1862 = [
            'st',
            'nd',
            'rd'
        ];
        const v1863 = i - 1;
        const v1864 = v1862[v1863];
        const v1865 = v1864 || 'th';
        return v1865;
    };
    const v1868 = function () {
        const v1867 = jsdate.getDay();
        return v1867;
    };
    const v1877 = function () {
        const v1869 = f.Y();
        const v1870 = f.n();
        const v1871 = v1870 - 1;
        const v1872 = f.j();
        var a = new Date(v1869, v1871, v1872);
        const v1873 = f.Y();
        var b = new Date(v1873, 0, 1);
        const v1874 = a - b;
        const v1875 = v1874 / 86400000;
        const v1876 = Math.round(v1875);
        return v1876;
    };
    const v1892 = function () {
        const v1878 = f.Y();
        const v1879 = f.n();
        const v1880 = v1879 - 1;
        const v1881 = f.j();
        const v1882 = f.N();
        const v1883 = v1881 - v1882;
        const v1884 = v1883 + 3;
        var a = new Date(v1878, v1880, v1884);
        const v1885 = a.getFullYear();
        var b = new Date(v1885, 0, 4);
        const v1886 = a - b;
        const v1887 = v1886 / 86400000;
        const v1888 = v1887 / 7;
        const v1889 = Math.round(v1888);
        const v1890 = 1 + v1889;
        const v1891 = _pad(v1890, 2);
        return v1891;
    };
    const v1896 = function () {
        const v1893 = f.n();
        const v1894 = 6 + v1893;
        const v1895 = txt_words[v1894];
        return v1895;
    };
    const v1899 = function () {
        const v1897 = f.n();
        const v1898 = _pad(v1897, 2);
        return v1898;
    };
    const v1902 = function () {
        const v1900 = f.F();
        const v1901 = v1900.slice(0, 3);
        return v1901;
    };
    const v1905 = function () {
        const v1903 = jsdate.getMonth();
        const v1904 = v1903 + 1;
        return v1904;
    };
    const v1910 = function () {
        const v1906 = f.Y();
        const v1907 = f.n();
        const v1908 = new Date(v1906, v1907, 0);
        const v1909 = v1908.getDate();
        return v1909;
    };
    const v1919 = function () {
        var j = f.Y();
        const v1911 = j % 4;
        const v1912 = v1911 === 0;
        const v1913 = j % 100;
        const v1914 = v1913 !== 0;
        const v1915 = v1912 & v1914;
        const v1916 = j % 400;
        const v1917 = v1916 === 0;
        const v1918 = v1915 | v1917;
        return v1918;
    };
    const v1930 = function () {
        var n = f.n();
        var W = f.W();
        var Y = f.Y();
        const v1920 = n === 12;
        const v1921 = W < 9;
        const v1922 = v1920 && v1921;
        const v1923 = n === 1;
        const v1924 = W > 9;
        const v1925 = v1923 && v1924;
        const v1926 = -1;
        let v1927;
        if (v1925) {
            v1927 = v1926;
        } else {
            v1927 = 0;
        }
        let v1928;
        if (v1922) {
            v1928 = 1;
        } else {
            v1928 = v1927;
        }
        const v1929 = Y + v1928;
        return v1929;
    };
    const v1932 = function () {
        const v1931 = jsdate.getFullYear();
        return v1931;
    };
    const v1937 = function () {
        const v1933 = f.Y();
        const v1934 = v1933.toString();
        const v1935 = -2;
        const v1936 = v1934.slice(v1935);
        return v1936;
    };
    const v1941 = function () {
        const v1938 = jsdate.getHours();
        const v1939 = v1938 > 11;
        let v1940;
        if (v1939) {
            v1940 = 'pm';
        } else {
            v1940 = 'am';
        }
        return v1940;
    };
    const v1944 = function () {
        const v1942 = f.a();
        const v1943 = v1942.toUpperCase();
        return v1943;
    };
    const v1954 = function () {
        const v1945 = jsdate.getUTCHours();
        var H = v1945 * 3600;
        const v1946 = jsdate.getUTCMinutes();
        var i = v1946 * 60;
        var s = jsdate.getUTCSeconds();
        const v1947 = H + i;
        const v1948 = v1947 + s;
        const v1949 = v1948 + 3600;
        const v1950 = v1949 / 86.4;
        const v1951 = Math.floor(v1950);
        const v1952 = v1951 % 1000;
        const v1953 = _pad(v1952, 3);
        return v1953;
    };
    const v1958 = function () {
        const v1955 = f.G();
        const v1956 = v1955 % 12;
        const v1957 = v1956 || 12;
        return v1957;
    };
    const v1960 = function () {
        const v1959 = jsdate.getHours();
        return v1959;
    };
    const v1963 = function () {
        const v1961 = f.g();
        const v1962 = _pad(v1961, 2);
        return v1962;
    };
    const v1966 = function () {
        const v1964 = f.G();
        const v1965 = _pad(v1964, 2);
        return v1965;
    };
    const v1969 = function () {
        const v1967 = jsdate.getMinutes();
        const v1968 = _pad(v1967, 2);
        return v1968;
    };
    const v1972 = function () {
        const v1970 = jsdate.getSeconds();
        const v1971 = _pad(v1970, 2);
        return v1971;
    };
    const v1976 = function () {
        const v1973 = jsdate.getMilliseconds();
        const v1974 = v1973 * 1000;
        const v1975 = _pad(v1974, 6);
        return v1975;
    };
    const v1977 = function () {
        throw 'Not supported (see source code of date() for timezone on how to add support)';
    };
    const v1986 = function () {
        const v1978 = f.Y();
        var a = new Date(v1978, 0);
        const v1979 = f.Y();
        var c = Date.UTC(v1979, 0);
        const v1980 = f.Y();
        var b = new Date(v1980, 6);
        const v1981 = f.Y();
        var d = Date.UTC(v1981, 6);
        const v1982 = a - c;
        const v1983 = b - d;
        const v1984 = v1982 !== v1983;
        let v1985;
        if (v1984) {
            v1985 = 1;
        } else {
            v1985 = 0;
        }
        return v1985;
    };
    const v1996 = function () {
        var tzo = jsdate.getTimezoneOffset();
        var a = Math.abs(tzo);
        const v1987 = tzo > 0;
        let v1988;
        if (v1987) {
            v1988 = '-';
        } else {
            v1988 = '+';
        }
        const v1989 = a / 60;
        const v1990 = Math.floor(v1989);
        const v1991 = v1990 * 100;
        const v1992 = a % 60;
        const v1993 = v1991 + v1992;
        const v1994 = _pad(v1993, 4);
        const v1995 = v1988 + v1994;
        return v1995;
    };
    const v2001 = function () {
        var O = f.O();
        const v1997 = O.substr(0, 3);
        const v1998 = v1997 + ':';
        const v1999 = O.substr(3, 2);
        const v2000 = v1998 + v1999;
        return v2000;
    };
    const v2002 = function () {
        return 'UTC';
    };
    const v2006 = function () {
        const v2003 = jsdate.getTimezoneOffset();
        const v2004 = -v2003;
        const v2005 = v2004 * 60;
        return v2005;
    };
    const v2008 = function () {
        const v2007 = 'Y-m-d\\TH:i:sP'.replace(formatChr, formatChrCb);
        return v2007;
    };
    const v2010 = function () {
        const v2009 = 'D, d M Y H:i:s O'.replace(formatChr, formatChrCb);
        return v2009;
    };
    const v2013 = function () {
        const v2011 = jsdate / 1000;
        const v2012 = v2011 | 0;
        return v2012;
    };
    f.d = v1843;
    f.D = v1846;
    f.j = v1848;
    f.l = v1852;
    f.N = v1855;
    f.S = v1866;
    f.w = v1868;
    f.z = v1877;
    f.W = v1892;
    f.F = v1896;
    f.m = v1899;
    f.M = v1902;
    f.n = v1905;
    f.t = v1910;
    f.L = v1919;
    f.o = v1930;
    f.Y = v1932;
    f.y = v1937;
    f.a = v1941;
    f.A = v1944;
    f.B = v1954;
    f.g = v1958;
    f.G = v1960;
    f.h = v1963;
    f.H = v1966;
    f.i = v1969;
    f.s = v1972;
    f.u = v1976;
    f.e = v1977;
    f.I = v1986;
    f.O = v1996;
    f.P = v2001;
    f.T = v2002;
    f.Z = v2006;
    f.c = v2008;
    f.r = v2010;
    f.U = v2013;
    f = {};
    f = {};
    const v2022 = function (format, timestamp) {
        that = this;
        const v2014 = timestamp === undefined;
        const v2015 = new Date();
        const v2016 = timestamp instanceof Date;
        const v2017 = new Date(timestamp);
        const v2018 = timestamp * 1000;
        const v2019 = new Date(v2018);
        let v2020;
        if (v2016) {
            v2020 = v2017;
        } else {
            v2020 = v2019;
        }
        if (v2014) {
            jsdate = v2015;
        } else {
            jsdate = v2020;
        }
        const v2021 = format.replace(formatChr, formatChrCb);
        return v2021;
    };
    this.date = v2022;
    const v2023 = this.date(format, timestamp);
    return v2023;
};
exports.date = v2024;
const v2047 = function (timestamp) {
    var _w = [
        'Sun',
        'Mon',
        'Tues',
        'Wednes',
        'Thurs',
        'Fri',
        'Satur'
    ];
    var _m = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    let d;
    const v2025 = typeof timestamp;
    const v2026 = v2025 === 'undefined';
    const v2027 = new Date();
    const v2028 = typeof timestamp;
    const v2029 = v2028 === 'object';
    const v2030 = new Date(timestamp);
    const v2031 = timestamp * 1000;
    const v2032 = new Date(v2031);
    let v2033;
    if (v2029) {
        v2033 = v2030;
    } else {
        v2033 = v2032;
    }
    if (v2026) {
        d = v2027;
    } else {
        d = v2033;
    }
    var w = d.getDay();
    var m = d.getMonth();
    var y = d.getFullYear();
    var r = {};
    const v2034 = d.getSeconds();
    r.seconds = v2034;
    const v2035 = d.getMinutes();
    r.minutes = v2035;
    const v2036 = d.getHours();
    r.hours = v2036;
    const v2037 = d.getDate();
    r.mday = v2037;
    r.wday = w;
    r.mon = m + 1;
    r.year = y;
    const v2038 = new Date(y, 0, 1);
    const v2039 = d - v2038;
    const v2040 = v2039 / 86400000;
    const v2041 = Math.floor(v2040);
    r.yday = v2041;
    const v2042 = _w[w];
    r.weekday = v2042 + 'day';
    const v2043 = _m[m];
    r.month = v2043;
    const v2044 = d.getTime();
    const v2045 = v2044 / 1000;
    const v2046 = parseInt(v2045, 10);
    r['0'] = v2046;
    return r;
};
exports.getdate = v2047;
const v2063 = function (return_float) {
    var t = new Date();
    var y = 0;
    if (return_float) {
        const v2048 = t.getTime();
        const v2049 = v2048 / 1000;
        return v2049;
    }
    y = t.getFullYear();
    const v2050 = t.getUTCSeconds();
    const v2051 = t.getUTCMilliseconds();
    const v2052 = v2051 * 1000;
    const v2053 = t.getTimezoneOffset();
    const v2054 = new Date(y, 0);
    const v2055 = Date.UTC(y, 0);
    const v2056 = v2054 - v2055;
    const v2057 = new Date(y, 6);
    const v2058 = Date.UTC(y, 6);
    const v2059 = v2057 - v2058;
    const v2060 = v2056 !== v2059;
    const v2061 = 0 + v2060;
    const v2062 = {};
    v2062.sec = v2050;
    v2062.usec = v2052;
    v2062.minuteswest = v2053;
    v2062.dsttime = v2061;
    return v2062;
};
exports.gettimeofday = v2063;
const v2101 = function () {
    var d = new Date();
    var r = arguments;
    var i = 0;
    var e = [
        'Hours',
        'Minutes',
        'Seconds',
        'Month',
        'Date',
        'FullYear'
    ];
    (i = 0)
    const v2064 = e.length;
    let v2065 = i < v2064;
    while (v2065) {
        const v2067 = r[i];
        const v2068 = typeof v2067;
        const v2069 = v2068 === 'undefined';
        if (v2069) {
            const v2070 = e[i];
            const v2071 = 'getUTC' + v2070;
            const v2072 = d[v2071]();
            r[i] = v2072;
            r[i] += i === 3;
        } else {
            const v2073 = r[i];
            const v2074 = parseInt(v2073, 10);
            r[i] = v2074;
            const v2075 = r[i];
            const v2076 = isNaN(v2075);
            if (v2076) {
                return false;
            }
        }
        const v2066 = i++;
        v2065 = i < v2064;
    }
    const v2077 = r[5];
    const v2078 = v2077 >= 0;
    const v2079 = r[5];
    const v2080 = v2079 <= 69;
    const v2081 = r[5];
    const v2082 = v2081 <= 100;
    let v2083;
    if (v2082) {
        v2083 = 1900;
    } else {
        v2083 = 0;
    }
    let v2084;
    if (v2080) {
        v2084 = 2000;
    } else {
        v2084 = v2083;
    }
    let v2085;
    if (v2078) {
        v2085 = v2084;
    } else {
        v2085 = 0;
    }
    r[5] += v2085;
    const v2086 = r[5];
    const v2087 = r[3];
    const v2088 = v2087 - 1;
    const v2089 = r[4];
    const v2090 = d.setUTCFullYear(v2086, v2088, v2089);
    v2090;
    const v2091 = r[0];
    const v2092 = r[1];
    const v2093 = r[2];
    const v2094 = d.setUTCHours(v2091, v2092, v2093);
    v2094;
    const v2095 = d.getTime();
    const v2096 = v2095 / 1000;
    const v2097 = v2096 >> 0;
    const v2098 = d.getTime();
    const v2099 = v2098 < 0;
    const v2100 = v2097 - v2099;
    return v2100;
};
exports.gmmktime = v2101;
const v2188 = function (format, timestamp) {
    const v2102 = format === undefined;
    if (v2102) {
        throw 'idate() expects at least 1 parameter, 0 given';
    }
    const v2103 = format.length;
    const v2104 = !v2103;
    const v2105 = format.length;
    const v2106 = v2105 > 1;
    const v2107 = v2104 || v2106;
    if (v2107) {
        throw 'idate format is one char';
    }
    let date;
    const v2108 = typeof timestamp;
    const v2109 = v2108 === 'undefined';
    const v2110 = new Date();
    const v2111 = timestamp instanceof Date;
    const v2112 = new Date(timestamp);
    const v2113 = timestamp * 1000;
    const v2114 = new Date(v2113);
    let v2115;
    if (v2111) {
        v2115 = v2112;
    } else {
        v2115 = v2114;
    }
    if (v2109) {
        date = v2110;
    } else {
        date = v2115;
    }
    var a;
    switch (format) {
    case 'B':
        const v2116 = date.getUTCHours();
        const v2117 = v2116 * 3600;
        const v2118 = date.getUTCMinutes();
        const v2119 = v2118 * 60;
        const v2120 = v2117 + v2119;
        const v2121 = date.getUTCSeconds();
        const v2122 = v2120 + v2121;
        const v2123 = v2122 + 3600;
        const v2124 = v2123 / 86.4;
        const v2125 = Math.floor(v2124);
        const v2126 = v2125 % 1000;
        return v2126;
    case 'd':
        const v2127 = date.getDate();
        return v2127;
    case 'h':
        const v2128 = date.getHours();
        const v2129 = v2128 % 12;
        const v2130 = v2129 || 12;
        return v2130;
    case 'H':
        const v2131 = date.getHours();
        return v2131;
    case 'i':
        const v2132 = date.getMinutes();
        return v2132;
    case 'I':
        a = date.getFullYear();
        const v2133 = new Date(a, 0);
        const v2134 = Date.UTC(a, 0);
        const v2135 = v2133 - v2134;
        const v2136 = new Date(a, 6);
        const v2137 = Date.UTC(a, 6);
        const v2138 = v2136 - v2137;
        const v2139 = v2135 !== v2138;
        const v2140 = 0 + v2139;
        return v2140;
    case 'L':
        a = date.getFullYear();
        const v2141 = a & 3;
        const v2142 = !v2141;
        const v2143 = a % 100;
        const v2144 = a % 400;
        const v2145 = !v2144;
        const v2146 = v2143 || v2145;
        const v2147 = v2142 && v2146;
        let v2148;
        if (v2147) {
            v2148 = 1;
        } else {
            v2148 = 0;
        }
        return v2148;
    case 'm':
        const v2149 = date.getMonth();
        const v2150 = v2149 + 1;
        return v2150;
    case 's':
        const v2151 = date.getSeconds();
        return v2151;
    case 't':
        const v2152 = date.getFullYear();
        const v2153 = date.getMonth();
        const v2154 = v2153 + 1;
        const v2155 = new Date(v2152, v2154, 0);
        const v2156 = v2155.getDate();
        return v2156;
    case 'U':
        const v2157 = date.getTime();
        const v2158 = v2157 / 1000;
        const v2159 = Math.round(v2158);
        return v2159;
    case 'w':
        const v2160 = date.getDay();
        return v2160;
    case 'W':
        const v2161 = date.getFullYear();
        const v2162 = date.getMonth();
        const v2163 = date.getDate();
        const v2164 = date.getDay();
        const v2165 = v2164 || 7;
        const v2166 = v2163 - v2165;
        const v2167 = v2166 + 3;
        a = new Date(v2161, v2162, v2167);
        const v2168 = a.getFullYear();
        const v2169 = new Date(v2168, 0, 4);
        const v2170 = a - v2169;
        const v2171 = v2170 / 86400000;
        const v2172 = v2171 / 7;
        const v2173 = Math.round(v2172);
        const v2174 = 1 + v2173;
        return v2174;
    case 'y':
        const v2175 = date.getFullYear();
        const v2176 = v2175 + '';
        const v2177 = v2176.slice(2);
        const v2178 = parseInt(v2177, 10);
        return v2178;
    case 'Y':
        const v2179 = date.getFullYear();
        return v2179;
    case 'z':
        const v2180 = date.getFullYear();
        const v2181 = new Date(v2180, 0, 1);
        const v2182 = date - v2181;
        const v2183 = v2182 / 86400000;
        const v2184 = Math.floor(v2183);
        return v2184;
    case 'Z':
        const v2185 = date.getTimezoneOffset();
        const v2186 = -v2185;
        const v2187 = v2186 * 60;
        return v2187;
    default:
        throw 'Unrecognized date format token';
    }
};
exports.idate = v2188;
const v2198 = function (get_as_float) {
    const v2189 = new Date();
    const v2190 = v2189.getTime();
    var now = v2190 / 1000;
    var s = parseInt(now, 10);
    const v2191 = now - s;
    const v2192 = v2191 * 1000;
    const v2193 = Math.round(v2192);
    const v2194 = v2193 / 1000;
    const v2195 = v2194 + ' ';
    const v2196 = v2195 + s;
    let v2197;
    if (get_as_float) {
        v2197 = now;
    } else {
        v2197 = v2196;
    }
    return v2197;
};
exports.microtime = v2198;
const v2236 = function () {
    var d = new Date();
    var r = arguments;
    var i = 0;
    var e = [
        'Hours',
        'Minutes',
        'Seconds',
        'Month',
        'Date',
        'FullYear'
    ];
    (i = 0)
    const v2199 = e.length;
    let v2200 = i < v2199;
    while (v2200) {
        const v2202 = r[i];
        const v2203 = typeof v2202;
        const v2204 = v2203 === 'undefined';
        if (v2204) {
            const v2205 = e[i];
            const v2206 = 'get' + v2205;
            const v2207 = d[v2206]();
            r[i] = v2207;
            r[i] += i === 3;
        } else {
            const v2208 = r[i];
            const v2209 = parseInt(v2208, 10);
            r[i] = v2209;
            const v2210 = r[i];
            const v2211 = isNaN(v2210);
            if (v2211) {
                return false;
            }
        }
        const v2201 = i++;
        v2200 = i < v2199;
    }
    const v2212 = r[5];
    const v2213 = v2212 >= 0;
    const v2214 = r[5];
    const v2215 = v2214 <= 69;
    const v2216 = r[5];
    const v2217 = v2216 <= 100;
    let v2218;
    if (v2217) {
        v2218 = 1900;
    } else {
        v2218 = 0;
    }
    let v2219;
    if (v2215) {
        v2219 = 2000;
    } else {
        v2219 = v2218;
    }
    let v2220;
    if (v2213) {
        v2220 = v2219;
    } else {
        v2220 = 0;
    }
    r[5] += v2220;
    const v2221 = r[5];
    const v2222 = r[3];
    const v2223 = v2222 - 1;
    const v2224 = r[4];
    const v2225 = d.setFullYear(v2221, v2223, v2224);
    v2225;
    const v2226 = r[0];
    const v2227 = r[1];
    const v2228 = r[2];
    const v2229 = d.setHours(v2226, v2227, v2228);
    v2229;
    const v2230 = d.getTime();
    const v2231 = v2230 / 1000;
    const v2232 = v2231 >> 0;
    const v2233 = d.getTime();
    const v2234 = v2233 < 0;
    const v2235 = v2232 - v2234;
    return v2235;
};
exports.mktime = v2236;
const v2557 = function (text, now) {
    var parsed;
    var match;
    var today;
    var year;
    var date;
    var days;
    var ranges;
    var len;
    var times;
    var regex;
    var i;
    var fail = false;
    const v2237 = !text;
    if (v2237) {
        return fail;
    }
    const v2238 = text.replace(/^\s+|\s+$/g, '');
    const v2239 = v2238.replace(/\s{2,}/g, ' ');
    const v2240 = v2239.replace(/[\t\r\n]/g, '');
    text = v2240.toLowerCase();
    match = text.match(/^(\d{1,4})([\-\.\/\:])(\d{1,2})([\-\.\/\:])(\d{1,4})(?:\s(\d{1,2}):(\d{2})?:?(\d{2})?)?(?:\s([A-Z]+)?)?$/);
    const v2241 = match[2];
    const v2242 = match[4];
    const v2243 = v2241 === v2242;
    const v2244 = match && v2243;
    if (v2244) {
        const v2245 = match[1];
        const v2246 = v2245 > 1901;
        if (v2246) {
            const v2247 = match[2];
            switch (v2247) {
            case '-': {
                    const v2248 = match[3];
                    const v2249 = v2248 > 12;
                    const v2250 = match[5];
                    const v2251 = v2250 > 31;
                    const v2252 = v2249 || v2251;
                    if (v2252) {
                        return fail;
                    }
                    const v2253 = match[1];
                    const v2254 = match[3];
                    const v2255 = parseInt(v2254, 10);
                    const v2256 = v2255 - 1;
                    const v2257 = match[5];
                    const v2258 = match[6];
                    const v2259 = v2258 || 0;
                    const v2260 = match[7];
                    const v2261 = v2260 || 0;
                    const v2262 = match[8];
                    const v2263 = v2262 || 0;
                    const v2264 = match[9];
                    const v2265 = v2264 || 0;
                    const v2266 = new Date(v2253, v2256, v2257, v2259, v2261, v2263, v2265);
                    const v2267 = v2266 / 1000;
                    return v2267;
                }
            case '.': {
                    return fail;
                }
            case '/': {
                    const v2268 = match[3];
                    const v2269 = v2268 > 12;
                    const v2270 = match[5];
                    const v2271 = v2270 > 31;
                    const v2272 = v2269 || v2271;
                    if (v2272) {
                        return fail;
                    }
                    const v2273 = match[1];
                    const v2274 = match[3];
                    const v2275 = parseInt(v2274, 10);
                    const v2276 = v2275 - 1;
                    const v2277 = match[5];
                    const v2278 = match[6];
                    const v2279 = v2278 || 0;
                    const v2280 = match[7];
                    const v2281 = v2280 || 0;
                    const v2282 = match[8];
                    const v2283 = v2282 || 0;
                    const v2284 = match[9];
                    const v2285 = v2284 || 0;
                    const v2286 = new Date(v2273, v2276, v2277, v2279, v2281, v2283, v2285);
                    const v2287 = v2286 / 1000;
                    return v2287;
                }
            }
        } else {
            const v2288 = match[5];
            const v2289 = v2288 > 1901;
            if (v2289) {
                const v2290 = match[2];
                switch (v2290) {
                case '-': {
                        const v2291 = match[3];
                        const v2292 = v2291 > 12;
                        const v2293 = match[1];
                        const v2294 = v2293 > 31;
                        const v2295 = v2292 || v2294;
                        if (v2295) {
                            return fail;
                        }
                        const v2296 = match[5];
                        const v2297 = match[3];
                        const v2298 = parseInt(v2297, 10);
                        const v2299 = v2298 - 1;
                        const v2300 = match[1];
                        const v2301 = match[6];
                        const v2302 = v2301 || 0;
                        const v2303 = match[7];
                        const v2304 = v2303 || 0;
                        const v2305 = match[8];
                        const v2306 = v2305 || 0;
                        const v2307 = match[9];
                        const v2308 = v2307 || 0;
                        const v2309 = new Date(v2296, v2299, v2300, v2302, v2304, v2306, v2308);
                        const v2310 = v2309 / 1000;
                        return v2310;
                    }
                case '.': {
                        const v2311 = match[3];
                        const v2312 = v2311 > 12;
                        const v2313 = match[1];
                        const v2314 = v2313 > 31;
                        const v2315 = v2312 || v2314;
                        if (v2315) {
                            return fail;
                        }
                        const v2316 = match[5];
                        const v2317 = match[3];
                        const v2318 = parseInt(v2317, 10);
                        const v2319 = v2318 - 1;
                        const v2320 = match[1];
                        const v2321 = match[6];
                        const v2322 = v2321 || 0;
                        const v2323 = match[7];
                        const v2324 = v2323 || 0;
                        const v2325 = match[8];
                        const v2326 = v2325 || 0;
                        const v2327 = match[9];
                        const v2328 = v2327 || 0;
                        const v2329 = new Date(v2316, v2319, v2320, v2322, v2324, v2326, v2328);
                        const v2330 = v2329 / 1000;
                        return v2330;
                    }
                case '/': {
                        const v2331 = match[1];
                        const v2332 = v2331 > 12;
                        const v2333 = match[3];
                        const v2334 = v2333 > 31;
                        const v2335 = v2332 || v2334;
                        if (v2335) {
                            return fail;
                        }
                        const v2336 = match[5];
                        const v2337 = match[1];
                        const v2338 = parseInt(v2337, 10);
                        const v2339 = v2338 - 1;
                        const v2340 = match[3];
                        const v2341 = match[6];
                        const v2342 = v2341 || 0;
                        const v2343 = match[7];
                        const v2344 = v2343 || 0;
                        const v2345 = match[8];
                        const v2346 = v2345 || 0;
                        const v2347 = match[9];
                        const v2348 = v2347 || 0;
                        const v2349 = new Date(v2336, v2339, v2340, v2342, v2344, v2346, v2348);
                        const v2350 = v2349 / 1000;
                        return v2350;
                    }
                }
            } else {
                const v2351 = match[2];
                switch (v2351) {
                case '-': {
                        const v2352 = match[3];
                        const v2353 = v2352 > 12;
                        const v2354 = match[5];
                        const v2355 = v2354 > 31;
                        const v2356 = v2353 || v2355;
                        const v2357 = match[1];
                        const v2358 = v2357 < 70;
                        const v2359 = match[1];
                        const v2360 = v2359 > 38;
                        const v2361 = v2358 && v2360;
                        const v2362 = v2356 || v2361;
                        if (v2362) {
                            return fail;
                        }
                        const v2363 = match[1];
                        const v2364 = v2363 >= 0;
                        const v2365 = match[1];
                        const v2366 = v2365 <= 38;
                        const v2367 = v2364 && v2366;
                        const v2368 = match[1];
                        const v2369 = +v2368;
                        const v2370 = v2369 + 2000;
                        const v2371 = match[1];
                        if (v2367) {
                            year = v2370;
                        } else {
                            year = v2371;
                        }
                        const v2372 = match[3];
                        const v2373 = parseInt(v2372, 10);
                        const v2374 = v2373 - 1;
                        const v2375 = match[5];
                        const v2376 = match[6];
                        const v2377 = v2376 || 0;
                        const v2378 = match[7];
                        const v2379 = v2378 || 0;
                        const v2380 = match[8];
                        const v2381 = v2380 || 0;
                        const v2382 = match[9];
                        const v2383 = v2382 || 0;
                        const v2384 = new Date(year, v2374, v2375, v2377, v2379, v2381, v2383);
                        const v2385 = v2384 / 1000;
                        return v2385;
                    }
                case '.': {
                        const v2386 = match[5];
                        const v2387 = v2386 >= 70;
                        if (v2387) {
                            const v2388 = match[3];
                            const v2389 = v2388 > 12;
                            const v2390 = match[1];
                            const v2391 = v2390 > 31;
                            const v2392 = v2389 || v2391;
                            if (v2392) {
                                return fail;
                            }
                            const v2393 = match[5];
                            const v2394 = match[3];
                            const v2395 = parseInt(v2394, 10);
                            const v2396 = v2395 - 1;
                            const v2397 = match[1];
                            const v2398 = match[6];
                            const v2399 = v2398 || 0;
                            const v2400 = match[7];
                            const v2401 = v2400 || 0;
                            const v2402 = match[8];
                            const v2403 = v2402 || 0;
                            const v2404 = match[9];
                            const v2405 = v2404 || 0;
                            const v2406 = new Date(v2393, v2396, v2397, v2399, v2401, v2403, v2405);
                            const v2407 = v2406 / 1000;
                            return v2407;
                        }
                        const v2408 = match[5];
                        const v2409 = v2408 < 60;
                        const v2410 = match[6];
                        const v2411 = !v2410;
                        const v2412 = v2409 && v2411;
                        if (v2412) {
                            const v2413 = match[1];
                            const v2414 = v2413 > 23;
                            const v2415 = match[3];
                            const v2416 = v2415 > 59;
                            const v2417 = v2414 || v2416;
                            if (v2417) {
                                return fail;
                            }
                            today = new Date();
                            const v2418 = today.getFullYear();
                            const v2419 = today.getMonth();
                            const v2420 = today.getDate();
                            const v2421 = match[1];
                            const v2422 = v2421 || 0;
                            const v2423 = match[3];
                            const v2424 = v2423 || 0;
                            const v2425 = match[5];
                            const v2426 = v2425 || 0;
                            const v2427 = match[9];
                            const v2428 = v2427 || 0;
                            const v2429 = new Date(v2418, v2419, v2420, v2422, v2424, v2426, v2428);
                            const v2430 = v2429 / 1000;
                            return v2430;
                        }
                        return fail;
                    }
                case '/': {
                        const v2431 = match[1];
                        const v2432 = v2431 > 12;
                        const v2433 = match[3];
                        const v2434 = v2433 > 31;
                        const v2435 = v2432 || v2434;
                        const v2436 = match[5];
                        const v2437 = v2436 < 70;
                        const v2438 = match[5];
                        const v2439 = v2438 > 38;
                        const v2440 = v2437 && v2439;
                        const v2441 = v2435 || v2440;
                        if (v2441) {
                            return fail;
                        }
                        const v2442 = match[5];
                        const v2443 = v2442 >= 0;
                        const v2444 = match[5];
                        const v2445 = v2444 <= 38;
                        const v2446 = v2443 && v2445;
                        const v2447 = match[5];
                        const v2448 = +v2447;
                        const v2449 = v2448 + 2000;
                        const v2450 = match[5];
                        if (v2446) {
                            year = v2449;
                        } else {
                            year = v2450;
                        }
                        const v2451 = match[1];
                        const v2452 = parseInt(v2451, 10);
                        const v2453 = v2452 - 1;
                        const v2454 = match[3];
                        const v2455 = match[6];
                        const v2456 = v2455 || 0;
                        const v2457 = match[7];
                        const v2458 = v2457 || 0;
                        const v2459 = match[8];
                        const v2460 = v2459 || 0;
                        const v2461 = match[9];
                        const v2462 = v2461 || 0;
                        const v2463 = new Date(year, v2453, v2454, v2456, v2458, v2460, v2462);
                        const v2464 = v2463 / 1000;
                        return v2464;
                    }
                case ':': {
                        const v2465 = match[1];
                        const v2466 = v2465 > 23;
                        const v2467 = match[3];
                        const v2468 = v2467 > 59;
                        const v2469 = v2466 || v2468;
                        const v2470 = match[5];
                        const v2471 = v2470 > 59;
                        const v2472 = v2469 || v2471;
                        if (v2472) {
                            return fail;
                        }
                        today = new Date();
                        const v2473 = today.getFullYear();
                        const v2474 = today.getMonth();
                        const v2475 = today.getDate();
                        const v2476 = match[1];
                        const v2477 = v2476 || 0;
                        const v2478 = match[3];
                        const v2479 = v2478 || 0;
                        const v2480 = match[5];
                        const v2481 = v2480 || 0;
                        const v2482 = new Date(v2473, v2474, v2475, v2477, v2479, v2481);
                        const v2483 = v2482 / 1000;
                        return v2483;
                    }
                }
            }
        }
    }
    const v2484 = text === 'now';
    if (v2484) {
        const v2485 = now === null;
        const v2486 = isNaN(now);
        const v2487 = v2485 || v2486;
        const v2488 = new Date();
        const v2489 = v2488.getTime();
        const v2490 = v2489 / 1000;
        const v2491 = v2490 | 0;
        const v2492 = now | 0;
        let v2493;
        if (v2487) {
            v2493 = v2491;
        } else {
            v2493 = v2492;
        }
        return v2493;
    }
    const v2494 = isNaN(parsed = Date.parse(text));
    const v2495 = !v2494;
    if (v2495) {
        const v2496 = parsed / 1000;
        const v2497 = v2496 | 0;
        return v2497;
    }
    const v2498 = now * 1000;
    const v2499 = new Date(v2498);
    const v2500 = new Date();
    if (now) {
        date = v2499;
    } else {
        date = v2500;
    }
    days['sun'] = 0;
    days['mon'] = 1;
    days['tue'] = 2;
    days['wed'] = 3;
    days['thu'] = 4;
    days['fri'] = 5;
    days['sat'] = 6;
    days = {};
    days = {};
    ranges['yea'] = 'FullYear';
    ranges['mon'] = 'Month';
    ranges['day'] = 'Date';
    ranges['hou'] = 'Hours';
    ranges['min'] = 'Minutes';
    ranges['sec'] = 'Seconds';
    ranges = {};
    ranges = {};
    const lastNext = function (type, range, modifier) {
        var diff;
        var day = days[range];
        const v2501 = typeof day;
        const v2502 = v2501 !== 'undefined';
        if (v2502) {
            const v2503 = date.getDay();
            diff = day - v2503;
            const v2504 = diff === 0;
            if (v2504) {
                diff = 7 * modifier;
            } else {
                const v2505 = diff > 0;
                const v2506 = type === 'last';
                const v2507 = v2505 && v2506;
                if (v2507) {
                    diff -= 7;
                } else {
                    const v2508 = diff < 0;
                    const v2509 = type === 'next';
                    const v2510 = v2508 && v2509;
                    if (v2510) {
                        diff += 7;
                    }
                }
            }
            const v2511 = date.getDate();
            const v2512 = v2511 + diff;
            const v2513 = date.setDate(v2512);
            v2513;
        }
    };
    const process = function (val) {
        var splt = val.split(' ');
        var type = splt[0];
        const v2514 = splt[1];
        var range = v2514.substring(0, 3);
        var typeIsNumber = /\d+/.test(type);
        const v2515 = splt[2];
        var ago = v2515 === 'ago';
        const v2516 = type === 'last';
        const v2517 = -1;
        let v2518;
        if (v2516) {
            v2518 = v2517;
        } else {
            v2518 = 1;
        }
        const v2519 = -1;
        let v2520;
        if (ago) {
            v2520 = v2519;
        } else {
            v2520 = 1;
        }
        var num = v2518 * v2520;
        if (typeIsNumber) {
            num *= parseInt(type, 10);
        }
        const v2521 = ranges.hasOwnProperty(range);
        const v2522 = splt[1];
        const v2523 = v2522.match(/^mon(day|\.)?$/i);
        const v2524 = !v2523;
        const v2525 = v2521 && v2524;
        if (v2525) {
            const v2526 = ranges[range];
            const v2527 = 'set' + v2526;
            const v2528 = ranges[range];
            const v2529 = 'get' + v2528;
            const v2530 = date[v2529]();
            const v2531 = v2530 + num;
            const v2532 = date[v2527](v2531);
            return v2532;
        }
        const v2533 = range === 'wee';
        if (v2533) {
            const v2534 = date.getDate();
            const v2535 = num * 7;
            const v2536 = v2534 + v2535;
            const v2537 = date.setDate(v2536);
            return v2537;
        }
        const v2538 = type === 'next';
        const v2539 = type === 'last';
        const v2540 = v2538 || v2539;
        if (v2540) {
            const v2541 = lastNext(type, range, num);
            v2541;
        } else {
            const v2542 = !typeIsNumber;
            if (v2542) {
                return false;
            }
        }
        return true;
    };
    const v2543 = '(years?|months?|weeks?|days?|hours?|minutes?|min|seconds?|sec' + '|sunday|sun\\.?|monday|mon\\.?|tuesday|tue\\.?|wednesday|wed\\.?';
    times = v2543 + '|thursday|thu\\.?|friday|fri\\.?|saturday|sat\\.?)';
    const v2544 = '([+-]?\\d+\\s' + times;
    const v2545 = v2544 + '|';
    const v2546 = v2545 + '(last|next)\\s';
    const v2547 = v2546 + times;
    regex = v2547 + ')(\\sago)?';
    const v2548 = new RegExp(regex, 'gi');
    match = text.match(v2548);
    const v2549 = !match;
    if (v2549) {
        return fail;
    }
    (i = 0, len = match.length)
    let v2550 = i < len;
    while (v2550) {
        const v2552 = match[i];
        const v2553 = process(v2552);
        const v2554 = !v2553;
        if (v2554) {
            return fail;
        }
        const v2551 = i++;
        v2550 = i < len;
    }
    const v2555 = date.getTime();
    const v2556 = v2555 / 1000;
    return v2556;
};
exports.strtotime = v2557;
const v2562 = function () {
    const v2558 = new Date();
    const v2559 = v2558.getTime();
    const v2560 = v2559 / 1000;
    const v2561 = Math.floor(v2560);
    return v2561;
};
exports.time = v2562;
const v2568 = function (arg) {
    var ret = '';
    const v2565 = function (m, i, s) {
        const v2563 = m.slice(0, 1);
        const v2564 = v2563 + '\\\'';
        return v2564;
    };
    ret = arg.replace(/[^\\]'/g, v2565);
    const v2566 = '\'' + ret;
    const v2567 = v2566 + '\'';
    return v2567;
};
exports.escapeshellarg = v2568;
const v2586 = function (path, suffix) {
    var b = path;
    const v2569 = b.length;
    const v2570 = v2569 - 1;
    var lastChar = b.charAt(v2570);
    const v2571 = lastChar === '/';
    const v2572 = lastChar === '\\';
    const v2573 = v2571 || v2572;
    if (v2573) {
        const v2574 = -1;
        b = b.slice(0, v2574);
    }
    b = b.replace(/^.*[\/\\]/g, '');
    const v2575 = typeof suffix;
    const v2576 = v2575 === 'string';
    const v2577 = b.length;
    const v2578 = suffix.length;
    const v2579 = v2577 - v2578;
    const v2580 = b.substr(v2579);
    const v2581 = v2580 == suffix;
    const v2582 = v2576 && v2581;
    if (v2582) {
        const v2583 = b.length;
        const v2584 = suffix.length;
        const v2585 = v2583 - v2584;
        b = b.substr(0, v2585);
    }
    return b;
};
exports.basename = v2586;
const v2589 = function (path) {
    const v2587 = path.replace(/\\/g, '/');
    const v2588 = v2587.replace(/\/[^\/]*\/?$/, '');
    return v2588;
};
exports.dirname = v2589;
const v2770 = function (url, flags, context, offset, maxLen) {
    var tmp;
    var headers = [];
    var newTmp = [];
    var k = 0;
    var i = 0;
    var href = '';
    const v2590 = -1;
    var pathPos = v2590;
    var flagNames = 0;
    var content = null;
    var http_stream = false;
    var func = function (value) {
        const v2591 = value.substring(1);
        const v2592 = v2591 !== '';
        return v2592;
    };
    const v2593 = this.php_js;
    const v2594 = {};
    this.php_js = v2593 || v2594;
    const v2595 = this.php_js;
    const v2596 = this.php_js;
    const v2597 = v2596.ini;
    const v2598 = {};
    v2595.ini = v2597 || v2598;
    const v2599 = this.php_js;
    var ini = v2599.ini;
    const v2600 = this.php_js;
    const v2601 = v2600.default_streams_context;
    const v2602 = context || v2601;
    context = v2602 || null;
    const v2603 = !flags;
    if (v2603) {
        flags = 0;
    }
    var OPTS = {};
    OPTS.FILE_USE_INCLUDE_PATH = 1;
    OPTS.FILE_TEXT = 32;
    OPTS.FILE_BINARY = 64;
    const v2604 = typeof flags;
    const v2605 = v2604 === 'number';
    if (v2605) {
        flagNames = flags;
    } else {
        const v2606 = [];
        flags = v2606.concat(flags);
        i = 0
        const v2607 = flags.length;
        let v2608 = i < v2607;
        while (v2608) {
            const v2610 = flags[i];
            const v2611 = OPTS[v2610];
            if (v2611) {
                const v2612 = flags[i];
                const v2613 = OPTS[v2612];
                flagNames = flagNames | v2613;
            }
            const v2609 = i++;
            v2608 = i < v2607;
        }
    }
    const v2614 = OPTS.FILE_BINARY;
    const v2615 = flagNames & v2614;
    const v2616 = OPTS.FILE_TEXT;
    const v2617 = flagNames & v2616;
    const v2618 = v2615 && v2617;
    if (v2618) {
        throw 'You cannot pass both FILE_BINARY and FILE_TEXT to file_get_contents()';
    }
    const v2619 = OPTS.FILE_USE_INCLUDE_PATH;
    const v2620 = flagNames & v2619;
    const v2621 = ini.include_path;
    const v2622 = v2620 && v2621;
    const v2623 = ini.include_path;
    const v2624 = v2623.local_value;
    const v2625 = v2622 && v2624;
    if (v2625) {
        let slash;
        const v2626 = ini.include_path;
        const v2627 = v2626.local_value;
        const v2628 = v2627.indexOf('/');
        const v2629 = -1;
        const v2630 = v2628 !== v2629;
        if (v2630) {
            slash = '/';
        } else {
            slash = '\\';
        }
        const v2631 = ini.include_path;
        const v2632 = v2631.local_value;
        const v2633 = v2632 + slash;
        url = v2633 + url;
    } else {
        const v2634 = /^(https?|file):/.test(url);
        const v2635 = !v2634;
        if (v2635) {
            const v2636 = this.window;
            const v2637 = v2636.location;
            href = v2637.href;
            const v2638 = url.indexOf('/');
            const v2639 = v2638 === 0;
            const v2640 = href.indexOf('/', 8);
            const v2641 = v2640 - 1;
            const v2642 = href.lastIndexOf('/');
            if (v2639) {
                pathPos = v2641;
            } else {
                pathPos = v2642;
            }
            const v2643 = pathPos + 1;
            const v2644 = href.slice(0, v2643);
            url = v2644 + url;
        }
    }
    var http_options;
    if (context) {
        const v2645 = context.stream_options;
        const v2646 = context.stream_options;
        const v2647 = v2646.http;
        http_options = v2645 && v2647;
        const v2648 = !http_options;
        const v2649 = !v2648;
        http_stream = v2649;
    }
    const v2650 = !context;
    const v2651 = v2650 || http_stream;
    if (v2651) {
        let req;
        const v2652 = this.window;
        const v2653 = v2652.ActiveXObject;
        const v2654 = new ActiveXObject('Microsoft.XMLHTTP');
        const v2655 = new XMLHttpRequest();
        if (v2653) {
            req = v2654;
        } else {
            req = v2655;
        }
        const v2656 = !req;
        if (v2656) {
            const v2657 = new Error('XMLHttpRequest not supported');
            throw v2657;
        }
        let method;
        const v2658 = http_options.method;
        if (http_stream) {
            method = v2658;
        } else {
            method = 'GET';
        }
        const v2659 = context.stream_params;
        const v2660 = context && v2659;
        const v2661 = context.stream_params;
        const v2662 = v2661['phpjs.async'];
        const v2663 = v2660 && v2662;
        const v2664 = !v2663;
        const v2665 = !v2664;
        var async = v2665;
        const v2666 = ini['phpjs.ajaxBypassCache'];
        const v2667 = ini['phpjs.ajaxBypassCache'];
        const v2668 = v2667.local_value;
        const v2669 = v2666 && v2668;
        if (v2669) {
            const v2670 = url.match(/\?/);
            const v2671 = v2670 == null;
            let v2672;
            if (v2671) {
                v2672 = '?';
            } else {
                v2672 = '&';
            }
            const v2673 = new Date();
            const v2674 = v2673.getTime();
            url += v2672 + v2674;
        }
        const v2675 = req.open(method, url, async);
        v2675;
        if (async) {
            const v2676 = context.stream_params;
            var notification = v2676.notification;
            const v2677 = typeof notification;
            const v2678 = v2677 === 'function';
            if (v2678) {
                const v2679 = req.addEventListener;
                const v2680 = 0 && v2679;
                if (v2680) {
                } else {
                    const v2708 = function (aEvt) {
                        const v2681 = req.responseText;
                        const v2682 = req.responseXML;
                        const v2683 = req.status;
                        const v2684 = req.statusText;
                        const v2685 = req.readyState;
                        var objContext = {};
                        objContext.responseText = v2681;
                        objContext.responseXML = v2682;
                        objContext.status = v2683;
                        objContext.statusText = v2684;
                        objContext.readyState = v2685;
                        objContext.evt = aEvt;
                        var bytes_transferred;
                        const v2686 = req.readyState;
                        switch (v2686) {
                        case 0:
                            const v2687 = notification.call(objContext, 0, 0, '', 0, 0, 0);
                            v2687;
                            break;
                        case 1:
                            const v2688 = notification.call(objContext, 0, 0, '', 0, 0, 0);
                            v2688;
                            break;
                        case 2:
                            const v2689 = notification.call(objContext, 0, 0, '', 0, 0, 0);
                            v2689;
                            break;
                        case 3:
                            const v2690 = req.responseText;
                            const v2691 = v2690.length;
                            bytes_transferred = v2691 * 2;
                            const v2692 = notification.call(objContext, 7, 0, '', 0, bytes_transferred, 0);
                            v2692;
                            break;
                        case 4:
                            const v2693 = req.status;
                            const v2694 = v2693 >= 200;
                            const v2695 = req.status;
                            const v2696 = v2695 < 400;
                            const v2697 = v2694 && v2696;
                            if (v2697) {
                                const v2698 = req.responseText;
                                const v2699 = v2698.length;
                                bytes_transferred = v2699 * 2;
                                const v2700 = req.status;
                                const v2701 = notification.call(objContext, 8, 0, '', v2700, bytes_transferred, 0);
                                v2701;
                            } else {
                                const v2702 = req.status;
                                const v2703 = v2702 === 403;
                                if (v2703) {
                                    const v2704 = req.status;
                                    const v2705 = notification.call(objContext, 10, 2, '', v2704, 0, 0);
                                    v2705;
                                } else {
                                    const v2706 = req.status;
                                    const v2707 = notification.call(objContext, 9, 2, '', v2706, 0, 0);
                                    v2707;
                                }
                            }
                            break;
                        default:
                            throw 'Unrecognized ready state for file_get_contents()';
                        }
                    };
                    req.onreadystatechange = v2708;
                }
            }
        }
        if (http_stream) {
            const v2709 = http_options.header;
            const v2710 = http_options.header;
            const v2711 = v2710.split(/\r?\n/);
            var sendHeaders = v2709 && v2711;
            var userAgentSent = false;
            i = 0
            const v2712 = sendHeaders.length;
            let v2713 = i < v2712;
            while (v2713) {
                var sendHeader = sendHeaders[i];
                var breakPos = sendHeader.search(/:\s*/);
                var sendHeaderName = sendHeader.substring(0, breakPos);
                const v2715 = breakPos + 1;
                const v2716 = sendHeader.substring(v2715);
                const v2717 = req.setRequestHeader(sendHeaderName, v2716);
                v2717;
                const v2718 = sendHeaderName === 'User-Agent';
                if (v2718) {
                    userAgentSent = true;
                }
                const v2714 = i++;
                v2713 = i < v2712;
            }
            const v2719 = !userAgentSent;
            if (v2719) {
                const v2720 = http_options.user_agent;
                const v2721 = ini.user_agent;
                const v2722 = ini.user_agent;
                const v2723 = v2722.local_value;
                const v2724 = v2721 && v2723;
                var user_agent = v2720 || v2724;
                if (user_agent) {
                    const v2725 = req.setRequestHeader('User-Agent', user_agent);
                    v2725;
                }
            }
            const v2726 = http_options.content;
            content = v2726 || null;
        }
        const v2727 = OPTS.FILE_TEXT;
        const v2728 = flagNames & v2727;
        if (v2728) {
            var content_type = 'text/html';
            const v2729 = http_options['phpjs.override'];
            const v2730 = http_options && v2729;
            if (v2730) {
                content_type = http_options['phpjs.override'];
            } else {
                const v2731 = ini['unicode.stream_encoding'];
                const v2732 = ini['unicode.stream_encoding'];
                const v2733 = v2732.local_value;
                const v2734 = v2731 && v2733;
                var encoding = v2734 || 'UTF-8';
                const v2735 = http_options.header;
                const v2736 = http_options && v2735;
                const v2737 = http_options.header;
                const v2738 = /^content-type:/im.test(v2737);
                const v2739 = v2736 && v2738;
                if (v2739) {
                    const v2740 = http_options.header;
                    const v2741 = v2740.match(/^content-type:\s*(.*)$/im);
                    content_type = v2741[1];
                }
                const v2742 = /;\s*charset=/.test(content_type);
                const v2743 = !v2742;
                if (v2743) {
                    content_type += '; charset=' + encoding;
                }
            }
            const v2744 = req.overrideMimeType(content_type);
            v2744;
        } else {
            const v2745 = OPTS.FILE_BINARY;
            const v2746 = flagNames & v2745;
            if (v2746) {
                const v2747 = req.overrideMimeType('text/plain; charset=x-user-defined');
                v2747;
            }
        }
        try {
            const v2748 = http_options['phpjs.sendAsBinary'];
            const v2749 = http_options && v2748;
            if (v2749) {
                const v2750 = req.sendAsBinary(content);
                v2750;
            } else {
                const v2751 = req.send(content);
                v2751;
            }
        } catch (e) {
            return false;
        }
        tmp = req.getAllResponseHeaders();
        if (tmp) {
            tmp = tmp.split('\n');
            k = 0
            const v2752 = tmp.length;
            let v2753 = k < v2752;
            while (v2753) {
                const v2755 = tmp[k];
                const v2756 = func(v2755);
                if (v2756) {
                    const v2757 = tmp[k];
                    const v2758 = newTmp.push(v2757);
                    v2758;
                }
                const v2754 = k++;
                v2753 = k < v2752;
            }
            tmp = newTmp;
            i = 0
            const v2759 = tmp.length;
            let v2760 = i < v2759;
            while (v2760) {
                const v2762 = tmp[i];
                headers[i] = v2762;
                const v2761 = i++;
                v2760 = i < v2759;
            }
            this.$http_response_header = headers;
        }
        const v2763 = offset || maxLen;
        if (v2763) {
            if (maxLen) {
                const v2764 = req.responseText;
                const v2765 = offset || 0;
                const v2766 = v2764.substr(v2765, maxLen);
                return v2766;
            }
            const v2767 = req.responseText;
            const v2768 = v2767.substr(offset);
            return v2768;
        }
        const v2769 = req.responseText;
        return v2769;
    }
    return false;
};
exports.file_get_contents = v2770;
const v2796 = function (path) {
    var p = 0;
    var arr = [];
    const v2771 = this.window;
    const v2772 = v2771.location;
    var r = v2772.href;
    const v2773 = path + '';
    path = v2773.replace('\\', '/');
    const v2774 = path.indexOf('://');
    const v2775 = -1;
    const v2776 = v2774 !== v2775;
    if (v2776) {
        p = 1;
    }
    const v2777 = !p;
    if (v2777) {
        const v2778 = r.lastIndexOf('/');
        const v2779 = v2778 + 1;
        const v2780 = r.substring(0, v2779);
        path = v2780 + path;
    }
    arr = path.split('/');
    path = [];
    let k;
    for (k in arr) {
        const v2781 = arr[k];
        const v2782 = v2781 == '.';
        if (v2782) {
            continue;
        }
        const v2783 = arr[k];
        const v2784 = v2783 == '..';
        if (v2784) {
            const v2785 = path.length;
            const v2786 = v2785 > 3;
            if (v2786) {
                const v2787 = path.pop();
                v2787;
            }
        } else {
            const v2788 = path.length;
            const v2789 = v2788 < 2;
            const v2790 = arr[k];
            const v2791 = v2790 !== '';
            const v2792 = v2789 || v2791;
            if (v2792) {
                const v2793 = arr[k];
                const v2794 = path.push(v2793);
                v2794;
            }
        }
    }
    const v2795 = path.join('/');
    return v2795;
};
exports.realpath = v2796;
const v2842 = function (cb) {
    var func;
    const v2797 = typeof cb;
    const v2798 = v2797 === 'string';
    if (v2798) {
        const v2799 = this[cb];
        const v2800 = typeof v2799;
        const v2801 = v2800 === 'function';
        const v2802 = this[cb];
        const v2803 = 'return ' + cb;
        const v2804 = new Function(null, v2803);
        if (v2801) {
            func = v2802;
        } else {
            func = func = v2804();
        }
    } else {
        const v2805 = Object.prototype;
        const v2806 = v2805.toString;
        const v2807 = v2806.call(cb);
        const v2808 = v2807 === '[object Array]';
        if (v2808) {
            const v2809 = cb[0];
            const v2810 = typeof v2809;
            const v2811 = v2810 === 'string';
            const v2812 = cb[0];
            const v2813 = v2812 + '[\'';
            const v2814 = cb[1];
            const v2815 = v2813 + v2814;
            const v2816 = v2815 + '\']';
            const v2817 = eval(v2816);
            const v2818 = cb[0];
            const v2819 = cb[1];
            if (v2811) {
                func = v2817;
            } else {
                func = func = v2818[v2819];
            }
        } else {
            const v2820 = typeof cb;
            const v2821 = v2820 === 'function';
            if (v2821) {
                func = cb;
            }
        }
    }
    const v2822 = typeof func;
    const v2823 = v2822 !== 'function';
    if (v2823) {
        const v2824 = func + ' is not a valid function';
        const v2825 = new Error(v2824);
        throw v2825;
    }
    const v2826 = Array.prototype;
    const v2827 = v2826.slice;
    var parameters = v2827.call(arguments, 1);
    const v2828 = cb[0];
    const v2829 = typeof v2828;
    const v2830 = v2829 === 'string';
    const v2831 = cb[0];
    const v2832 = eval(v2831);
    const v2833 = func.apply(v2832, parameters);
    const v2834 = cb[0];
    const v2835 = typeof v2834;
    const v2836 = v2835 !== 'object';
    const v2837 = func.apply(null, parameters);
    const v2838 = cb[0];
    const v2839 = func.apply(v2838, parameters);
    let v2840;
    if (v2836) {
        v2840 = v2837;
    } else {
        v2840 = v2839;
    }
    let v2841;
    if (v2830) {
        v2841 = v2833;
    } else {
        v2841 = v2840;
    }
    return v2841;
};
exports.call_user_func = v2842;
const v2886 = function (cb, parameters) {
    var func;
    const v2843 = typeof cb;
    const v2844 = v2843 === 'string';
    if (v2844) {
        const v2845 = this[cb];
        const v2846 = typeof v2845;
        const v2847 = v2846 === 'function';
        const v2848 = this[cb];
        const v2849 = 'return ' + cb;
        const v2850 = new Function(null, v2849);
        if (v2847) {
            func = v2848;
        } else {
            func = func = v2850();
        }
    } else {
        const v2851 = Object.prototype;
        const v2852 = v2851.toString;
        const v2853 = v2852.call(cb);
        const v2854 = v2853 === '[object Array]';
        if (v2854) {
            const v2855 = cb[0];
            const v2856 = typeof v2855;
            const v2857 = v2856 === 'string';
            const v2858 = cb[0];
            const v2859 = v2858 + '[\'';
            const v2860 = cb[1];
            const v2861 = v2859 + v2860;
            const v2862 = v2861 + '\']';
            const v2863 = eval(v2862);
            const v2864 = cb[0];
            const v2865 = cb[1];
            if (v2857) {
                func = v2863;
            } else {
                func = func = v2864[v2865];
            }
        } else {
            const v2866 = typeof cb;
            const v2867 = v2866 === 'function';
            if (v2867) {
                func = cb;
            }
        }
    }
    const v2868 = typeof func;
    const v2869 = v2868 !== 'function';
    if (v2869) {
        const v2870 = func + ' is not a valid function';
        const v2871 = new Error(v2870);
        throw v2871;
    }
    const v2872 = cb[0];
    const v2873 = typeof v2872;
    const v2874 = v2873 === 'string';
    const v2875 = cb[0];
    const v2876 = eval(v2875);
    const v2877 = func.apply(v2876, parameters);
    const v2878 = cb[0];
    const v2879 = typeof v2878;
    const v2880 = v2879 !== 'object';
    const v2881 = func.apply(null, parameters);
    const v2882 = cb[0];
    const v2883 = func.apply(v2882, parameters);
    let v2884;
    if (v2880) {
        v2884 = v2881;
    } else {
        v2884 = v2883;
    }
    let v2885;
    if (v2874) {
        v2885 = v2877;
    } else {
        v2885 = v2884;
    }
    return v2885;
};
exports.call_user_func_array = v2886;
const v2890 = function (args, code) {
    try {
        const v2887 = args.split(',');
        const v2888 = v2887.concat(code);
        const v2889 = Function.apply(null, v2888);
        return v2889;
    } catch (e) {
        return false;
    }
};
exports.create_function = v2890;
const v2896 = function (func_name) {
    const v2891 = typeof func_name;
    const v2892 = v2891 === 'string';
    if (v2892) {
        const v2893 = this.window;
        func_name = v2893[func_name];
    }
    const v2894 = typeof func_name;
    const v2895 = v2894 === 'function';
    return v2895;
};
exports.function_exists = v2896;
const v2922 = function () {
    var i = '';
    var arr = [];
    var already = {};
    const v2897 = this.window;
    for (i in v2897) {
        try {
            const v2898 = this.window;
            const v2899 = v2898[i];
            const v2900 = typeof v2899;
            const v2901 = v2900 === 'function';
            if (v2901) {
                const v2902 = already[i];
                const v2903 = !v2902;
                if (v2903) {
                    already[i] = 1;
                    const v2904 = arr.push(i);
                    v2904;
                }
            } else {
                const v2905 = this.window;
                const v2906 = v2905[i];
                const v2907 = typeof v2906;
                const v2908 = v2907 === 'object';
                if (v2908) {
                    let j;
                    const v2909 = this.window;
                    const v2910 = v2909[i];
                    for (j in v2910) {
                        const v2911 = this.window;
                        const v2912 = v2911[j];
                        const v2913 = typeof v2912;
                        const v2914 = v2913 === 'function';
                        const v2915 = this.window;
                        const v2916 = v2915[j];
                        const v2917 = v2914 && v2916;
                        const v2918 = already[j];
                        const v2919 = !v2918;
                        const v2920 = v2917 && v2919;
                        if (v2920) {
                            already[j] = 1;
                            const v2921 = arr.push(j);
                            v2921;
                        }
                    }
                }
            }
        } catch (e) {
        }
    }
    return arr;
};
exports.get_defined_functions = v2922;
const v2935 = function (name) {
    const v2923 = this.php_js;
    const v2924 = {};
    this.php_js = v2923 || v2924;
    const v2925 = this.php_js;
    const v2931 = function (str1, str2) {
        const v2926 = str1 == str2;
        const v2927 = str1 > str2;
        const v2928 = -1;
        let v2929;
        if (v2927) {
            v2929 = 1;
        } else {
            v2929 = v2928;
        }
        let v2930;
        if (v2926) {
            v2930 = 0;
        } else {
            v2930 = v2929;
        }
        return v2930;
    };
    const v2932 = {};
    v2932.sorting = v2931;
    const v2933 = {};
    v2933.en_US_POSIX = v2932;
    v2925.i18nLocales = v2933;
    const v2934 = this.php_js;
    v2934.i18nLocale = name;
    return true;
};
exports.i18n_loc_set_default = v2935;
const v2960 = function (what, value) {
    const v2936 = this.php_js;
    const v2937 = {};
    this.php_js = v2936 || v2937;
    const v2938 = this.php_js;
    const v2939 = this.php_js;
    const v2940 = v2939.ini;
    const v2941 = {};
    v2938.ini = v2940 || v2941;
    const v2942 = this.php_js;
    const v2943 = this.php_js;
    const v2944 = v2943.assert_values;
    const v2945 = {};
    v2942.assert_values = v2944 || v2945;
    var ini;
    var dflt;
    switch (what) {
    case 'ASSERT_ACTIVE':
        ini = 'assert.active';
        dflt = 1;
        break;
    case 'ASSERT_WARNING':
        ini = 'assert.warning';
        dflt = 1;
        throw 'We have not yet implemented warnings for us to throw in JavaScript (assert_options())';
    case 'ASSERT_BAIL':
        ini = 'assert.bail';
        dflt = 0;
        break;
    case 'ASSERT_QUIET_EVAL':
        ini = 'assert.quiet_eval';
        dflt = 0;
        break;
    case 'ASSERT_CALLBACK':
        ini = 'assert.callback';
        dflt = null;
        break;
    default:
        throw 'Improper type for assert_options()';
    }
    const v2946 = this.php_js;
    const v2947 = v2946.assert_values;
    const v2948 = v2947[ini];
    const v2949 = this.php_js;
    const v2950 = v2949.ini;
    const v2951 = v2950[ini];
    const v2952 = this.php_js;
    const v2953 = v2952.ini;
    const v2954 = v2953[ini];
    const v2955 = v2954.local_value;
    const v2956 = v2951 && v2955;
    const v2957 = v2948 || v2956;
    var originalValue = v2957 || dflt;
    if (value) {
        const v2958 = this.php_js;
        const v2959 = v2958.assert_values;
        v2959[ini] = value;
    }
    return originalValue;
};
exports.assert_options = v2960;
const v2975 = function (varname) {
    const v2961 = this.php_js;
    const v2962 = !v2961;
    const v2963 = this.php_js;
    const v2964 = v2963.ENV;
    const v2965 = !v2964;
    const v2966 = v2962 || v2965;
    const v2967 = this.php_js;
    const v2968 = v2967.ENV;
    const v2969 = v2968[varname];
    const v2970 = !v2969;
    const v2971 = v2966 || v2970;
    if (v2971) {
        return false;
    }
    const v2972 = this.php_js;
    const v2973 = v2972.ENV;
    const v2974 = v2973[varname];
    return v2974;
};
exports.getenv = v2975;
const v2982 = function () {
    const v2976 = this.window;
    const v2977 = v2976.document;
    const v2978 = v2977.lastModified;
    const v2979 = new Date(v2978);
    const v2980 = v2979.getTime();
    const v2981 = v2980 / 1000;
    return v2981;
};
exports.getlastmod = v2982;
const v3006 = function (varname) {
    const v2983 = this.php_js;
    const v2984 = this.php_js;
    const v2985 = v2984.ini;
    const v2986 = v2983 && v2985;
    const v2987 = this.php_js;
    const v2988 = v2987.ini;
    const v2989 = v2988[varname];
    const v2990 = v2986 && v2989;
    const v2991 = this.php_js;
    const v2992 = v2991.ini;
    const v2993 = v2992[varname];
    const v2994 = v2993.local_value;
    const v2995 = v2994 !== undefined;
    const v2996 = v2990 && v2995;
    if (v2996) {
        const v2997 = this.php_js;
        const v2998 = v2997.ini;
        const v2999 = v2998[varname];
        const v3000 = v2999.local_value;
        const v3001 = v3000 === null;
        if (v3001) {
            return '';
        }
        const v3002 = this.php_js;
        const v3003 = v3002.ini;
        const v3004 = v3003[varname];
        const v3005 = v3004.local_value;
        return v3005;
    }
    return '';
};
exports.ini_get = v3006;
const v3041 = function (varname, newvalue) {
    var oldval = '';
    var self = this;
    try {
        const v3007 = this.php_js;
        const v3008 = {};
        this.php_js = v3007 || v3008;
    } catch (e) {
        const v3009 = {};
        this.php_js = v3009;
    }
    const v3010 = this.php_js;
    const v3011 = this.php_js;
    const v3012 = v3011.ini;
    const v3013 = {};
    v3010.ini = v3012 || v3013;
    const v3014 = this.php_js;
    const v3015 = v3014.ini;
    const v3016 = this.php_js;
    const v3017 = v3016.ini;
    const v3018 = v3017[varname];
    const v3019 = {};
    v3015[varname] = v3018 || v3019;
    const v3020 = this.php_js;
    const v3021 = v3020.ini;
    const v3022 = v3021[varname];
    oldval = v3022.local_value;
    var _setArr = function (oldval) {
        const v3023 = typeof oldval;
        const v3024 = v3023 === 'undefined';
        if (v3024) {
            const v3025 = self.php_js;
            const v3026 = v3025.ini;
            const v3027 = v3026[varname];
            v3027.local_value = [];
        }
        const v3028 = self.php_js;
        const v3029 = v3028.ini;
        const v3030 = v3029[varname];
        const v3031 = v3030.local_value;
        const v3032 = v3031.push(newvalue);
        v3032;
    };
    switch (varname) {
    case 'extension':
        const v3033 = this.dl;
        const v3034 = typeof v3033;
        const v3035 = v3034 === 'function';
        if (v3035) {
            const v3036 = this.dl(newvalue);
            v3036;
        }
        const v3037 = _setArr(oldval, newvalue);
        v3037;
        break;
    default:
        const v3038 = this.php_js;
        const v3039 = v3038.ini;
        const v3040 = v3039[varname];
        v3040.local_value = newvalue;
        break;
    }
    return oldval;
};
exports.ini_set = v3041;
const v3052 = function (seconds) {
    const v3042 = this.php_js;
    const v3043 = {};
    this.php_js = v3042 || v3043;
    const v3044 = this.window;
    const v3049 = function () {
        const v3045 = this.php_js;
        const v3046 = v3045.timeoutStatus;
        const v3047 = !v3046;
        if (v3047) {
            const v3048 = this.php_js;
            v3048.timeoutStatus = true;
        }
        throw 'Maximum execution time exceeded';
    };
    const v3050 = seconds * 1000;
    const v3051 = v3044.setTimeout(v3049, v3050);
    v3051;
};
exports.set_time_limit = v3052;
const v3109 = function (v1, v2, operator) {
    const v3053 = this.php_js;
    const v3054 = {};
    this.php_js = v3053 || v3054;
    const v3055 = this.php_js;
    const v3056 = this.php_js;
    const v3057 = v3056.ENV;
    const v3058 = {};
    v3055.ENV = v3057 || v3058;
    var i = 0;
    var x = 0;
    var compare = 0;
    const v3059 = -6;
    const v3060 = -5;
    const v3061 = -5;
    const v3062 = -4;
    const v3063 = -4;
    const v3064 = -3;
    const v3065 = -3;
    const v3066 = -2;
    var vm = {};
    vm['dev'] = v3059;
    vm['alpha'] = v3060;
    vm['a'] = v3061;
    vm['beta'] = v3062;
    vm['b'] = v3063;
    vm['RC'] = v3064;
    vm['rc'] = v3065;
    vm['#'] = v3066;
    vm['p'] = 1;
    vm['pl'] = 1;
    var prepVersion = function (v) {
        const v3067 = '' + v;
        v = v3067.replace(/[_\-+]/g, '.');
        const v3068 = v.replace(/([^.\d]+)/g, '.$1.');
        v = v3068.replace(/\.{2,}/g, '.');
        const v3069 = v.length;
        const v3070 = !v3069;
        const v3071 = -8;
        const v3072 = [v3071];
        const v3073 = v.split('.');
        let v3074;
        if (v3070) {
            v3074 = v3072;
        } else {
            v3074 = v3073;
        }
        return v3074;
    };
    const v3083 = function (v) {
        const v3075 = !v;
        const v3076 = isNaN(v);
        const v3077 = vm[v];
        const v3078 = -7;
        const v3079 = v3077 || v3078;
        const v3080 = parseInt(v, 10);
        let v3081;
        if (v3076) {
            v3081 = v3079;
        } else {
            v3081 = v3080;
        }
        let v3082;
        if (v3075) {
            v3082 = 0;
        } else {
            v3082 = v3081;
        }
        return v3082;
    };
    numVersion = v3083;
    v1 = prepVersion(v1);
    v2 = prepVersion(v2);
    const v3084 = v1.length;
    const v3085 = v2.length;
    x = Math.max(v3084, v3085);
    (i = 0)
    let v3086 = i < x;
    while (v3086) {
        const v3088 = v1[i];
        const v3089 = v2[i];
        const v3090 = v3088 == v3089;
        if (v3090) {
            continue;
        }
        const v3091 = v1[i];
        const v3092 = numVersion(v3091);
        v1[i] = v3092;
        const v3093 = v2[i];
        const v3094 = numVersion(v3093);
        v2[i] = v3094;
        const v3095 = v1[i];
        const v3096 = v2[i];
        const v3097 = v3095 < v3096;
        if (v3097) {
            const v3098 = -1;
            compare = v3098;
            break;
        } else {
            const v3099 = v1[i];
            const v3100 = v2[i];
            const v3101 = v3099 > v3100;
            if (v3101) {
                compare = 1;
                break;
            }
        }
        const v3087 = i++;
        v3086 = i < x;
    }
    const v3102 = !operator;
    if (v3102) {
        return compare;
    }
    switch (operator) {
    case '>':
    case 'gt':
        const v3103 = compare > 0;
        return v3103;
    case '>=':
    case 'ge':
        const v3104 = compare >= 0;
        return v3104;
    case '<=':
    case 'le':
        const v3105 = compare <= 0;
        return v3105;
    case '==':
    case '=':
    case 'eq':
        const v3106 = compare === 0;
        return v3106;
    case '<>':
    case '!=':
    case 'ne':
        const v3107 = compare !== 0;
        return v3107;
    case '':
    case '<':
    case 'lt':
        const v3108 = compare < 0;
        return v3108;
    default:
        return null;
    }
};
exports.version_compare = v3109;
const v3141 = function (str_json) {
    const v3110 = this.window;
    var json = v3110.JSON;
    const v3111 = typeof json;
    const v3112 = v3111 === 'object';
    const v3113 = json.parse;
    const v3114 = typeof v3113;
    const v3115 = v3114 === 'function';
    const v3116 = v3112 && v3115;
    if (v3116) {
        try {
            const v3117 = json.parse(str_json);
            return v3117;
        } catch (err) {
            const v3118 = err instanceof SyntaxError;
            const v3119 = !v3118;
            if (v3119) {
                const v3120 = new Error('Unexpected error type in json_decode()');
                throw v3120;
            }
            const v3121 = this.php_js;
            const v3122 = {};
            this.php_js = v3121 || v3122;
            const v3123 = this.php_js;
            v3123.last_error_json = 4;
            return null;
        }
    }
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    var j;
    var text = str_json;
    cx.lastIndex = 0;
    const v3124 = cx.test(text);
    if (v3124) {
        const v3131 = function (a) {
            const v3125 = a.charCodeAt(0);
            const v3126 = v3125.toString(16);
            const v3127 = '0000' + v3126;
            const v3128 = -4;
            const v3129 = v3127.slice(v3128);
            const v3130 = '\\u' + v3129;
            return v3130;
        };
        text = text.replace(cx, v3131);
    }
    const v3132 = text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@');
    const v3133 = v3132.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']');
    const v3134 = v3133.replace(/(?:^|:|,)(?:\s*\[)+/g, '');
    const v3135 = /^[\],:{}\s]*$/.test(v3134);
    if (v3135) {
        const v3136 = '(' + text;
        const v3137 = v3136 + ')';
        j = eval(v3137);
        return j;
    }
    const v3138 = this.php_js;
    const v3139 = {};
    this.php_js = v3138 || v3139;
    const v3140 = this.php_js;
    v3140.last_error_json = 4;
    return null;
};
exports.json_decode = v3141;
const v3240 = function (mixed_val) {
    var retVal;
    const v3142 = this.window;
    var json = v3142.JSON;
    try {
        const v3143 = typeof json;
        const v3144 = v3143 === 'object';
        const v3145 = json.stringify;
        const v3146 = typeof v3145;
        const v3147 = v3146 === 'function';
        const v3148 = v3144 && v3147;
        if (v3148) {
            retVal = json.stringify(mixed_val);
            const v3149 = retVal === undefined;
            if (v3149) {
                const v3150 = new SyntaxError('json_encode');
                throw v3150;
            }
            return retVal;
        }
        var value = mixed_val;
        var quote = function (string) {
            var escapable = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
            var meta = {};
            meta['\b'] = '\\b';
            meta['\t'] = '\\t';
            meta['\n'] = '\\n';
            meta['\f'] = '\\f';
            meta['\r'] = '\\r';
            meta['"'] = '\\"';
            meta['\\'] = '\\\\';
            escapable.lastIndex = 0;
            const v3151 = escapable.test(string);
            const v3161 = function (a) {
                var c = meta[a];
                const v3152 = typeof c;
                const v3153 = v3152 === 'string';
                const v3154 = a.charCodeAt(0);
                const v3155 = v3154.toString(16);
                const v3156 = '0000' + v3155;
                const v3157 = -4;
                const v3158 = v3156.slice(v3157);
                const v3159 = '\\u' + v3158;
                let v3160;
                if (v3153) {
                    v3160 = c;
                } else {
                    v3160 = v3159;
                }
                return v3160;
            };
            const v3162 = string.replace(escapable, v3161);
            const v3163 = '"' + v3162;
            const v3164 = v3163 + '"';
            const v3165 = '"' + string;
            const v3166 = v3165 + '"';
            let v3167;
            if (v3151) {
                v3167 = v3164;
            } else {
                v3167 = v3166;
            }
            return v3167;
        };
        var str = function (key, holder) {
            var gap = '';
            var indent = '    ';
            var i = 0;
            var k = '';
            var v = '';
            var length = 0;
            var mind = gap;
            var partial = [];
            var value = holder[key];
            const v3168 = typeof value;
            const v3169 = v3168 === 'object';
            const v3170 = value && v3169;
            const v3171 = value.toJSON;
            const v3172 = typeof v3171;
            const v3173 = v3172 === 'function';
            const v3174 = v3170 && v3173;
            if (v3174) {
                value = value.toJSON(key);
            }
            const v3175 = typeof value;
            switch (v3175) {
            case 'string':
                const v3176 = quote(value);
                return v3176;
            case 'number':
                const v3177 = isFinite(value);
                const v3178 = String(value);
                let v3179;
                if (v3177) {
                    v3179 = v3178;
                } else {
                    v3179 = 'null';
                }
                return v3179;
            case 'boolean':
            case 'null':
                const v3180 = String(value);
                return v3180;
            case 'object':
                const v3181 = !value;
                if (v3181) {
                    return 'null';
                }
                const v3182 = this.PHPJS_Resource;
                const v3183 = this.PHPJS_Resource;
                const v3184 = value instanceof v3183;
                const v3185 = v3182 && v3184;
                const v3186 = window.PHPJS_Resource;
                const v3187 = window.PHPJS_Resource;
                const v3188 = value instanceof v3187;
                const v3189 = v3186 && v3188;
                const v3190 = v3185 || v3189;
                if (v3190) {
                    const v3191 = new SyntaxError('json_encode');
                    throw v3191;
                }
                gap += indent;
                partial = [];
                const v3192 = Object.prototype;
                const v3193 = v3192.toString;
                const v3194 = v3193.apply(value);
                const v3195 = v3194 === '[object Array]';
                if (v3195) {
                    length = value.length;
                    i = 0
                    let v3196 = i < length;
                    while (v3196) {
                        const v3197 = str(i, value);
                        partial[i] = v3197 || 'null';
                        v3196 = i < length;
                    }
                    const v3198 = partial.length;
                    const v3199 = v3198 === 0;
                    const v3200 = '[\n' + gap;
                    const v3201 = ',\n' + gap;
                    const v3202 = partial.join(v3201);
                    const v3203 = v3200 + v3202;
                    const v3204 = v3203 + '\n';
                    const v3205 = v3204 + mind;
                    const v3206 = v3205 + ']';
                    const v3207 = partial.join(',');
                    const v3208 = '[' + v3207;
                    const v3209 = v3208 + ']';
                    let v3210;
                    if (gap) {
                        v3210 = v3206;
                    } else {
                        v3210 = v3209;
                    }
                    if (v3199) {
                        v = '[]';
                    } else {
                        v = v3210;
                    }
                    gap = mind;
                    return v;
                }
                for (k in value) {
                    const v3211 = Object.hasOwnProperty;
                    const v3212 = v3211.call(value, k);
                    if (v3212) {
                        v = str(k, value);
                        if (v) {
                            const v3213 = quote(k);
                            let v3214;
                            if (gap) {
                                v3214 = ': ';
                            } else {
                                v3214 = ':';
                            }
                            const v3215 = v3213 + v3214;
                            const v3216 = v3215 + v;
                            const v3217 = partial.push(v3216);
                            v3217;
                        }
                    }
                }
                const v3218 = partial.length;
                const v3219 = v3218 === 0;
                const v3220 = '{\n' + gap;
                const v3221 = ',\n' + gap;
                const v3222 = partial.join(v3221);
                const v3223 = v3220 + v3222;
                const v3224 = v3223 + '\n';
                const v3225 = v3224 + mind;
                const v3226 = v3225 + '}';
                const v3227 = partial.join(',');
                const v3228 = '{' + v3227;
                const v3229 = v3228 + '}';
                let v3230;
                if (gap) {
                    v3230 = v3226;
                } else {
                    v3230 = v3229;
                }
                if (v3219) {
                    v = '{}';
                } else {
                    v = v3230;
                }
                gap = mind;
                return v;
            case 'undefined':
            case 'function':
            default:
                const v3231 = new SyntaxError('json_encode');
                throw v3231;
            }
        };
        const v3232 = { '': value };
        const v3233 = str('', v3232);
        return v3233;
    } catch (err) {
        const v3234 = err instanceof SyntaxError;
        const v3235 = !v3234;
        if (v3235) {
            const v3236 = new Error('Unexpected error type in json_encode()');
            throw v3236;
        }
        const v3237 = this.php_js;
        const v3238 = {};
        this.php_js = v3237 || v3238;
        const v3239 = this.php_js;
        v3239.last_error_json = 4;
        return null;
    }
};
exports.json_encode = v3240;
const v3248 = function () {
    const v3241 = this.php_js;
    const v3242 = this.php_js;
    const v3243 = v3242.last_error_json;
    const v3244 = v3241 && v3243;
    const v3245 = this.php_js;
    const v3246 = v3245.last_error_json;
    let v3247;
    if (v3244) {
        v3247 = v3246;
    } else {
        v3247 = 0;
    }
    return v3247;
};
exports.json_last_error = v3248;
const v3251 = function (mixed_number) {
    const v3249 = Math.abs(mixed_number);
    const v3250 = v3249 || 0;
    return v3250;
};
exports.abs = v3251;
const v3253 = function (arg) {
    const v3252 = Math.acos(arg);
    return v3252;
};
exports.acos = v3253;
const v3259 = function (arg) {
    const v3254 = arg * arg;
    const v3255 = v3254 - 1;
    const v3256 = Math.sqrt(v3255);
    const v3257 = arg + v3256;
    const v3258 = Math.log(v3257);
    return v3258;
};
exports.acosh = v3259;
const v3261 = function (arg) {
    const v3260 = Math.asin(arg);
    return v3260;
};
exports.asin = v3261;
const v3267 = function (arg) {
    const v3262 = arg * arg;
    const v3263 = v3262 + 1;
    const v3264 = Math.sqrt(v3263);
    const v3265 = arg + v3264;
    const v3266 = Math.log(v3265);
    return v3266;
};
exports.asinh = v3267;
const v3269 = function (arg) {
    const v3268 = Math.atan(arg);
    return v3268;
};
exports.atan = v3269;
const v3271 = function (y, x) {
    const v3270 = Math.atan2(y, x);
    return v3270;
};
exports.atan2 = v3271;
const v3277 = function (arg) {
    const v3272 = 1 + arg;
    const v3273 = 1 - arg;
    const v3274 = v3272 / v3273;
    const v3275 = Math.log(v3274);
    const v3276 = 0.5 * v3275;
    return v3276;
};
exports.atanh = v3277;
const v3283 = function (number, frombase, tobase) {
    const v3278 = number + '';
    const v3279 = frombase | 0;
    const v3280 = parseInt(v3278, v3279);
    const v3281 = tobase | 0;
    const v3282 = v3280.toString(v3281);
    return v3282;
};
exports.base_convert = v3283;
const v3286 = function (binary_string) {
    const v3284 = binary_string + '';
    binary_string = v3284.replace(/[^01]/gi, '');
    const v3285 = parseInt(binary_string, 2);
    return v3285;
};
exports.bindec = v3286;
const v3288 = function (value) {
    const v3287 = Math.ceil(value);
    return v3287;
};
exports.ceil = v3288;
const v3290 = function (arg) {
    const v3289 = Math.cos(arg);
    return v3289;
};
exports.cos = v3290;
const v3296 = function (arg) {
    const v3291 = Math.exp(arg);
    const v3292 = -arg;
    const v3293 = Math.exp(v3292);
    const v3294 = v3291 + v3293;
    const v3295 = v3294 / 2;
    return v3295;
};
exports.cosh = v3296;
const v3301 = function (number) {
    const v3297 = number < 0;
    if (v3297) {
        const v3298 = 4294967295 + number;
        number = v3298 + 1;
    }
    const v3299 = parseInt(number, 10);
    const v3300 = v3299.toString(2);
    return v3300;
};
exports.decbin = v3301;
const v3306 = function (number) {
    const v3302 = number < 0;
    if (v3302) {
        const v3303 = 4294967295 + number;
        number = v3303 + 1;
    }
    const v3304 = parseInt(number, 10);
    const v3305 = v3304.toString(16);
    return v3305;
};
exports.dechex = v3306;
const v3311 = function (number) {
    const v3307 = number < 0;
    if (v3307) {
        const v3308 = 4294967295 + number;
        number = v3308 + 1;
    }
    const v3309 = parseInt(number, 10);
    const v3310 = v3309.toString(8);
    return v3310;
};
exports.decoct = v3311;
const v3313 = function (angle) {
    const v3312 = angle * 0.017453292519943295;
    return v3312;
};
exports.deg2rad = v3313;
const v3315 = function (arg) {
    const v3314 = Math.exp(arg);
    return v3314;
};
exports.exp = v3315;
const v3325 = function (x) {
    var ret = 0;
    var n = 50;
    var factorial = function factorial(n) {
        const v3316 = n === 0;
        const v3317 = n === 1;
        const v3318 = v3316 || v3317;
        if (v3318) {
            return 1;
        } else {
            const v3319 = n - 1;
            const v3320 = factorial(v3319);
            var result = n * v3320;
            return result;
        }
    };
    var i = 1;
    let v3321 = i < n;
    while (v3321) {
        const v3323 = Math.pow(x, i);
        const v3324 = factorial(i);
        ret += v3323 / v3324;
        const v3322 = i++;
        v3321 = i < n;
    }
    return ret;
};
exports.expm1 = v3325;
const v3327 = function (value) {
    const v3326 = Math.floor(value);
    return v3326;
};
exports.floor = v3327;
const v3355 = function (x, y) {
    var tmp;
    var tmp2;
    var p = 0;
    var pY = 0;
    var l = 0;
    var l2 = 0;
    const v3328 = x.toExponential();
    tmp = v3328.match(/^.\.?(.*)e(.+)$/);
    const v3329 = tmp[2];
    const v3330 = parseInt(v3329, 10);
    const v3331 = tmp[1];
    const v3332 = v3331 + '';
    const v3333 = v3332.length;
    p = v3330 - v3333;
    const v3334 = y.toExponential();
    tmp = v3334.match(/^.\.?(.*)e(.+)$/);
    const v3335 = tmp[2];
    const v3336 = parseInt(v3335, 10);
    const v3337 = tmp[1];
    const v3338 = v3337 + '';
    const v3339 = v3338.length;
    pY = v3336 - v3339;
    const v3340 = pY > p;
    if (v3340) {
        p = pY;
    }
    tmp2 = x % y;
    const v3341 = -100;
    const v3342 = p < v3341;
    const v3343 = p > 20;
    const v3344 = v3342 || v3343;
    if (v3344) {
        const v3345 = Math.log(tmp2);
        const v3346 = Math.log(10);
        const v3347 = v3345 / v3346;
        l = Math.round(v3347);
        l2 = Math.pow(10, l);
        const v3348 = tmp2 / l2;
        const v3349 = l - p;
        const v3350 = v3348.toFixed(v3349);
        const v3351 = v3350 * l2;
        return v3351;
    } else {
        const v3352 = -p;
        const v3353 = tmp2.toFixed(v3352);
        const v3354 = parseFloat(v3353);
        return v3354;
    }
};
exports.fmod = v3355;
const v3356 = function () {
    return 2147483647;
};
exports.getrandmax = v3356;
const v3359 = function (hex_string) {
    const v3357 = hex_string + '';
    hex_string = v3357.replace(/[^a-f0-9]/gi, '');
    const v3358 = parseInt(hex_string, 16);
    return v3358;
};
exports.hexdec = v3359;
const v3365 = function (x, y) {
    const v3360 = x * x;
    const v3361 = y * y;
    const v3362 = v3360 + v3361;
    const v3363 = Math.sqrt(v3362);
    const v3364 = v3363 || 0;
    return v3364;
};
exports.hypot = v3365;
const v3384 = function (val) {
    var warningType = '';
    const v3366 = val === Infinity;
    const v3367 = -Infinity;
    const v3368 = val === v3367;
    const v3369 = v3366 || v3368;
    if (v3369) {
        return false;
    }
    const v3370 = typeof val;
    const v3371 = v3370 === 'object';
    if (v3371) {
        const v3372 = Object.prototype;
        const v3373 = v3372.toString;
        const v3374 = v3373.call(val);
        const v3375 = v3374 === '[object Array]';
        if (v3375) {
            warningType = 'array';
        } else {
            warningType = 'object';
        }
    } else {
        const v3376 = typeof val;
        const v3377 = v3376 === 'string';
        const v3378 = val.match(/^[\+\-]?\d/);
        const v3379 = !v3378;
        const v3380 = v3377 && v3379;
        if (v3380) {
            warningType = 'string';
        }
    }
    if (warningType) {
        const v3381 = 'Warning: is_finite() expects parameter 1 to be double, ' + warningType;
        const v3382 = v3381 + ' given';
        const v3383 = new Error(v3382);
        throw v3383;
    }
    return true;
};
exports.is_finite = v3384;
const v3403 = function (val) {
    var warningType = '';
    const v3385 = val === Infinity;
    const v3386 = -Infinity;
    const v3387 = val === v3386;
    const v3388 = v3385 || v3387;
    if (v3388) {
        return true;
    }
    const v3389 = typeof val;
    const v3390 = v3389 === 'object';
    if (v3390) {
        const v3391 = Object.prototype;
        const v3392 = v3391.toString;
        const v3393 = v3392.call(val);
        const v3394 = v3393 === '[object Array]';
        if (v3394) {
            warningType = 'array';
        } else {
            warningType = 'object';
        }
    } else {
        const v3395 = typeof val;
        const v3396 = v3395 === 'string';
        const v3397 = val.match(/^[\+\-]?\d/);
        const v3398 = !v3397;
        const v3399 = v3396 && v3398;
        if (v3399) {
            warningType = 'string';
        }
    }
    if (warningType) {
        const v3400 = 'Warning: is_infinite() expects parameter 1 to be double, ' + warningType;
        const v3401 = v3400 + ' given';
        const v3402 = new Error(v3401);
        throw v3402;
    }
    return false;
};
exports.is_infinite = v3403;
const v3422 = function (val) {
    var warningType = '';
    const v3404 = typeof val;
    const v3405 = v3404 === 'number';
    const v3406 = isNaN(val);
    const v3407 = v3405 && v3406;
    if (v3407) {
        return true;
    }
    const v3408 = typeof val;
    const v3409 = v3408 === 'object';
    if (v3409) {
        const v3410 = Object.prototype;
        const v3411 = v3410.toString;
        const v3412 = v3411.call(val);
        const v3413 = v3412 === '[object Array]';
        if (v3413) {
            warningType = 'array';
        } else {
            warningType = 'object';
        }
    } else {
        const v3414 = typeof val;
        const v3415 = v3414 === 'string';
        const v3416 = val.match(/^[\+\-]?\d/);
        const v3417 = !v3416;
        const v3418 = v3415 && v3417;
        if (v3418) {
            warningType = 'string';
        }
    }
    if (warningType) {
        const v3419 = 'Warning: is_nan() expects parameter 1 to be double, ' + warningType;
        const v3420 = v3419 + ' given';
        const v3421 = new Error(v3420);
        throw v3421;
    }
    return false;
};
exports.is_nan = v3422;
const v3424 = function () {
    const v3423 = Math.random();
    return v3423;
};
exports.lcg_value = v3424;
const v3432 = function (arg, base) {
    const v3425 = typeof base;
    const v3426 = v3425 === 'undefined';
    const v3427 = Math.log(arg);
    const v3428 = Math.log(arg);
    const v3429 = Math.log(base);
    const v3430 = v3428 / v3429;
    let v3431;
    if (v3426) {
        v3431 = v3427;
    } else {
        v3431 = v3430;
    }
    return v3431;
};
exports.log = v3432;
const v3435 = function (arg) {
    const v3433 = Math.log(arg);
    const v3434 = v3433 / 2.302585092994046;
    return v3434;
};
exports.log10 = v3435;
const v3449 = function (x) {
    var ret = 0;
    var n = 50;
    const v3436 = -1;
    const v3437 = x <= v3436;
    if (v3437) {
        return '-INF';
    }
    const v3438 = x < 0;
    const v3439 = x > 1;
    const v3440 = v3438 || v3439;
    if (v3440) {
        const v3441 = 1 + x;
        const v3442 = Math.log(v3441);
        return v3442;
    }
    var i = 1;
    let v3443 = i < n;
    while (v3443) {
        const v3445 = i % 2;
        const v3446 = v3445 === 0;
        if (v3446) {
            const v3447 = Math.pow(x, i);
            ret -= v3447 / i;
        } else {
            const v3448 = Math.pow(x, i);
            ret += v3448 / i;
        }
        const v3444 = i++;
        v3443 = i < n;
    }
    return ret;
};
exports.log1p = v3449;
const v3513 = function () {
    var ar;
    var retVal;
    var i = 0;
    var n = 0;
    var argv = arguments;
    var argc = argv.length;
    var _obj2Array = function (obj) {
        const v3450 = Object.prototype;
        const v3451 = v3450.toString;
        const v3452 = v3451.call(obj);
        const v3453 = v3452 === '[object Array]';
        if (v3453) {
            return obj;
        } else {
            var ar = [];
            let i;
            for (i in obj) {
                const v3454 = obj.hasOwnProperty(i);
                if (v3454) {
                    const v3455 = obj[i];
                    const v3456 = ar.push(v3455);
                    v3456;
                }
            }
            return ar;
        }
    };
    const v3496 = function (current, next) {
        var i = 0;
        var n = 0;
        var tmp = 0;
        var nl = 0;
        var cl = 0;
        const v3457 = current === next;
        if (v3457) {
            return 0;
        } else {
            const v3458 = typeof current;
            const v3459 = v3458 === 'object';
            if (v3459) {
                const v3460 = typeof next;
                const v3461 = v3460 === 'object';
                if (v3461) {
                    current = _obj2Array(current);
                    next = _obj2Array(next);
                    cl = current.length;
                    nl = next.length;
                    const v3462 = nl > cl;
                    if (v3462) {
                        return 1;
                    } else {
                        const v3463 = nl < cl;
                        if (v3463) {
                            const v3464 = -1;
                            return v3464;
                        }
                    }
                    (i = 0, n = cl)
                    let v3465 = i < n;
                    while (v3465) {
                        const v3467 = current[i];
                        const v3468 = next[i];
                        tmp = _compare(v3467, v3468);
                        const v3469 = tmp == 1;
                        if (v3469) {
                            return 1;
                        } else {
                            const v3470 = -1;
                            const v3471 = tmp == v3470;
                            if (v3471) {
                                const v3472 = -1;
                                return v3472;
                            }
                        }
                        const v3466 = ++i;
                        v3465 = i < n;
                    }
                    return 0;
                }
                const v3473 = -1;
                return v3473;
            } else {
                const v3474 = typeof next;
                const v3475 = v3474 === 'object';
                if (v3475) {
                    return 1;
                } else {
                    const v3476 = isNaN(next);
                    const v3477 = isNaN(current);
                    const v3478 = !v3477;
                    const v3479 = v3476 && v3478;
                    if (v3479) {
                        const v3480 = current == 0;
                        if (v3480) {
                            return 0;
                        }
                        const v3481 = current < 0;
                        const v3482 = -1;
                        let v3483;
                        if (v3481) {
                            v3483 = 1;
                        } else {
                            v3483 = v3482;
                        }
                        return v3483;
                    } else {
                        const v3484 = isNaN(current);
                        const v3485 = isNaN(next);
                        const v3486 = !v3485;
                        const v3487 = v3484 && v3486;
                        if (v3487) {
                            const v3488 = next == 0;
                            if (v3488) {
                                return 0;
                            }
                            const v3489 = next > 0;
                            const v3490 = -1;
                            let v3491;
                            if (v3489) {
                                v3491 = 1;
                            } else {
                                v3491 = v3490;
                            }
                            return v3491;
                        }
                    }
                }
            }
        }
        const v3492 = next == current;
        if (v3492) {
            return 0;
        }
        const v3493 = next > current;
        const v3494 = -1;
        let v3495;
        if (v3493) {
            v3495 = 1;
        } else {
            v3495 = v3494;
        }
        return v3495;
    };
    _compare = v3496;
    const v3497 = argc === 0;
    if (v3497) {
        const v3498 = new Error('At least one value should be passed to max()');
        throw v3498;
    } else {
        const v3499 = argc === 1;
        if (v3499) {
            const v3500 = argv[0];
            const v3501 = typeof v3500;
            const v3502 = v3501 === 'object';
            if (v3502) {
                const v3503 = argv[0];
                ar = _obj2Array(v3503);
            } else {
                const v3504 = new Error('Wrong parameter count for max()');
                throw v3504;
            }
            const v3505 = ar.length;
            const v3506 = v3505 === 0;
            if (v3506) {
                const v3507 = new Error('Array must contain at least one element for max()');
                throw v3507;
            }
        } else {
            ar = argv;
        }
    }
    retVal = ar[0];
    (i = 1, n = ar.length)
    let v3508 = i < n;
    while (v3508) {
        const v3510 = ar[i];
        const v3511 = _compare(retVal, v3510);
        const v3512 = v3511 == 1;
        if (v3512) {
            retVal = ar[i];
        }
        const v3509 = ++i;
        v3508 = i < n;
    }
    return retVal;
};
exports.max = v3513;
const v3578 = function () {
    var ar;
    var retVal;
    var i = 0;
    var n = 0;
    var argv = arguments;
    var argc = argv.length;
    var _obj2Array = function (obj) {
        const v3514 = Object.prototype;
        const v3515 = v3514.toString;
        const v3516 = v3515.call(obj);
        const v3517 = v3516 === '[object Array]';
        if (v3517) {
            return obj;
        }
        var ar = [];
        let i;
        for (i in obj) {
            const v3518 = obj.hasOwnProperty(i);
            if (v3518) {
                const v3519 = obj[i];
                const v3520 = ar.push(v3519);
                v3520;
            }
        }
        return ar;
    };
    const v3560 = function (current, next) {
        var i = 0;
        var n = 0;
        var tmp = 0;
        var nl = 0;
        var cl = 0;
        const v3521 = current === next;
        if (v3521) {
            return 0;
        } else {
            const v3522 = typeof current;
            const v3523 = v3522 === 'object';
            if (v3523) {
                const v3524 = typeof next;
                const v3525 = v3524 === 'object';
                if (v3525) {
                    current = _obj2Array(current);
                    next = _obj2Array(next);
                    cl = current.length;
                    nl = next.length;
                    const v3526 = nl > cl;
                    if (v3526) {
                        return 1;
                    } else {
                        const v3527 = nl < cl;
                        if (v3527) {
                            const v3528 = -1;
                            return v3528;
                        }
                    }
                    (i = 0, n = cl)
                    let v3529 = i < n;
                    while (v3529) {
                        const v3531 = current[i];
                        const v3532 = next[i];
                        tmp = _compare(v3531, v3532);
                        const v3533 = tmp == 1;
                        if (v3533) {
                            return 1;
                        } else {
                            const v3534 = -1;
                            const v3535 = tmp == v3534;
                            if (v3535) {
                                const v3536 = -1;
                                return v3536;
                            }
                        }
                        const v3530 = ++i;
                        v3529 = i < n;
                    }
                    return 0;
                }
                const v3537 = -1;
                return v3537;
            } else {
                const v3538 = typeof next;
                const v3539 = v3538 === 'object';
                if (v3539) {
                    return 1;
                } else {
                    const v3540 = isNaN(next);
                    const v3541 = isNaN(current);
                    const v3542 = !v3541;
                    const v3543 = v3540 && v3542;
                    if (v3543) {
                        const v3544 = current == 0;
                        if (v3544) {
                            return 0;
                        }
                        const v3545 = current < 0;
                        const v3546 = -1;
                        let v3547;
                        if (v3545) {
                            v3547 = 1;
                        } else {
                            v3547 = v3546;
                        }
                        return v3547;
                    } else {
                        const v3548 = isNaN(current);
                        const v3549 = isNaN(next);
                        const v3550 = !v3549;
                        const v3551 = v3548 && v3550;
                        if (v3551) {
                            const v3552 = next == 0;
                            if (v3552) {
                                return 0;
                            }
                            const v3553 = next > 0;
                            const v3554 = -1;
                            let v3555;
                            if (v3553) {
                                v3555 = 1;
                            } else {
                                v3555 = v3554;
                            }
                            return v3555;
                        }
                    }
                }
            }
        }
        const v3556 = next == current;
        if (v3556) {
            return 0;
        }
        const v3557 = next > current;
        const v3558 = -1;
        let v3559;
        if (v3557) {
            v3559 = 1;
        } else {
            v3559 = v3558;
        }
        return v3559;
    };
    _compare = v3560;
    const v3561 = argc === 0;
    if (v3561) {
        const v3562 = new Error('At least one value should be passed to min()');
        throw v3562;
    } else {
        const v3563 = argc === 1;
        if (v3563) {
            const v3564 = argv[0];
            const v3565 = typeof v3564;
            const v3566 = v3565 === 'object';
            if (v3566) {
                const v3567 = argv[0];
                ar = _obj2Array(v3567);
            } else {
                const v3568 = new Error('Wrong parameter count for min()');
                throw v3568;
            }
            const v3569 = ar.length;
            const v3570 = v3569 === 0;
            if (v3570) {
                const v3571 = new Error('Array must contain at least one element for min()');
                throw v3571;
            }
        } else {
            ar = argv;
        }
    }
    retVal = ar[0];
    (i = 1, n = ar.length)
    let v3572 = i < n;
    while (v3572) {
        const v3574 = ar[i];
        const v3575 = _compare(retVal, v3574);
        const v3576 = -1;
        const v3577 = v3575 == v3576;
        if (v3577) {
            retVal = ar[i];
        }
        const v3573 = ++i;
        v3572 = i < n;
    }
    return retVal;
};
exports.min = v3578;
const v3579 = function () {
    return 2147483647;
};
exports.mt_getrandmax = v3579;
const v3589 = function (min, max) {
    var argc = arguments.length;
    const v3580 = argc === 0;
    if (v3580) {
        min = 0;
        max = 2147483647;
    } else {
        const v3581 = argc === 1;
        if (v3581) {
            const v3582 = new Error('Warning: mt_rand() expects exactly 2 parameters, 1 given');
            throw v3582;
        } else {
            min = parseInt(min, 10);
            max = parseInt(max, 10);
        }
    }
    const v3583 = Math.random();
    const v3584 = max - min;
    const v3585 = v3584 + 1;
    const v3586 = v3583 * v3585;
    const v3587 = Math.floor(v3586);
    const v3588 = v3587 + min;
    return v3588;
};
exports.mt_rand = v3589;
const v3592 = function (oct_string) {
    const v3590 = oct_string + '';
    oct_string = v3590.replace(/[^0-7]/gi, '');
    const v3591 = parseInt(oct_string, 8);
    return v3591;
};
exports.octdec = v3592;
const v3593 = function () {
    return 3.141592653589793;
};
exports.pi = v3593;
const v3595 = function (base, exp) {
    const v3594 = Math.pow(base, exp);
    return v3594;
};
exports.pow = v3595;
const v3597 = function (angle) {
    const v3596 = angle * 57.29577951308232;
    return v3596;
};
exports.rad2deg = v3597;
const v3607 = function (min, max) {
    var argc = arguments.length;
    const v3598 = argc === 0;
    if (v3598) {
        min = 0;
        max = 2147483647;
    } else {
        const v3599 = argc === 1;
        if (v3599) {
            const v3600 = new Error('Warning: rand() expects exactly 2 parameters, 1 given');
            throw v3600;
        }
    }
    const v3601 = Math.random();
    const v3602 = max - min;
    const v3603 = v3602 + 1;
    const v3604 = v3601 * v3603;
    const v3605 = Math.floor(v3604);
    const v3606 = v3605 + min;
    return v3606;
};
exports.rand = v3607;
const v3622 = function (value, precision, mode) {
    var m;
    var f;
    var isHalf;
    var sgn;
    precision |= 0;
    m = Math.pow(10, precision);
    value *= m;
    const v3608 = value > 0;
    const v3609 = value < 0;
    const v3610 = -v3609;
    sgn = v3608 | v3610;
    const v3611 = value % 1;
    const v3612 = 0.5 * sgn;
    isHalf = v3611 === v3612;
    f = Math.floor(value);
    if (isHalf) {
        switch (mode) {
        case 'PHP_ROUND_HALF_DOWN':
            const v3613 = sgn < 0;
            value = f + v3613;
            break;
        case 'PHP_ROUND_HALF_EVEN':
            const v3614 = f % 2;
            const v3615 = v3614 * sgn;
            value = f + v3615;
            break;
        case 'PHP_ROUND_HALF_ODD':
            const v3616 = f % 2;
            const v3617 = !v3616;
            value = f + v3617;
            break;
        default:
            const v3618 = sgn > 0;
            value = f + v3618;
        }
    }
    const v3619 = Math.round(value);
    let v3620;
    if (isHalf) {
        v3620 = value;
    } else {
        v3620 = v3619;
    }
    const v3621 = v3620 / m;
    return v3621;
};
exports.round = v3622;
const v3624 = function (arg) {
    const v3623 = Math.sin(arg);
    return v3623;
};
exports.sin = v3624;
const v3630 = function (arg) {
    const v3625 = Math.exp(arg);
    const v3626 = -arg;
    const v3627 = Math.exp(v3626);
    const v3628 = v3625 - v3627;
    const v3629 = v3628 / 2;
    return v3629;
};
exports.sinh = v3630;
const v3632 = function (arg) {
    const v3631 = Math.sqrt(arg);
    return v3631;
};
exports.sqrt = v3632;
const v3634 = function (arg) {
    const v3633 = Math.tan(arg);
    return v3633;
};
exports.tan = v3634;
const v3644 = function (arg) {
    const v3635 = Math.exp(arg);
    const v3636 = -arg;
    const v3637 = Math.exp(v3636);
    const v3638 = v3635 - v3637;
    const v3639 = Math.exp(arg);
    const v3640 = -arg;
    const v3641 = Math.exp(v3640);
    const v3642 = v3639 + v3641;
    const v3643 = v3638 / v3642;
    return v3643;
};
exports.tanh = v3644;
const v3921 = function (format) {
    var formatPointer = 0;
    var argumentPointer = 1;
    var result = '';
    var argument = '';
    var i = 0;
    var r = [];
    var instruction;
    var quantifier;
    var word;
    var precisionBits;
    var exponentBits;
    var extraNullCount;
    var bias;
    var minExp;
    var maxExp;
    var minUnnormExp;
    var status;
    var exp;
    var len;
    var bin;
    var signal;
    var n;
    var intPart;
    var floatPart;
    var lastBit;
    var rounded;
    var j;
    var k;
    var tmpResult;
    const v3645 = format.length;
    let v3646 = formatPointer < v3645;
    while (v3646) {
        instruction = format.charAt(formatPointer);
        quantifier = '';
        const v3647 = formatPointer++;
        v3647;
        const v3648 = format.length;
        const v3649 = formatPointer < v3648;
        const v3650 = format.charAt(formatPointer);
        const v3651 = v3650.match(/[\d\*]/);
        const v3652 = v3651 !== null;
        let v3653 = v3649 && v3652;
        while (v3653) {
            quantifier += format.charAt(formatPointer);
            const v3654 = formatPointer++;
            v3654;
            v3653 = v3649 && v3652;
        }
        const v3655 = quantifier === '';
        if (v3655) {
            quantifier = '1';
        }
        switch (instruction) {
        case 'a':
        case 'A':
            const v3656 = arguments[argumentPointer];
            const v3657 = typeof v3656;
            const v3658 = v3657 === 'undefined';
            if (v3658) {
                const v3659 = 'Warning:  pack() Type ' + instruction;
                const v3660 = v3659 + ': not enough arguments';
                const v3661 = new Error(v3660);
                throw v3661;
            } else {
                const v3662 = arguments[argumentPointer];
                argument = String(v3662);
            }
            const v3663 = quantifier === '*';
            if (v3663) {
                quantifier = argument.length;
            }
            i = 0
            let v3664 = i < quantifier;
            while (v3664) {
                const v3666 = argument[i];
                const v3667 = typeof v3666;
                const v3668 = v3667 === 'undefined';
                if (v3668) {
                    const v3669 = instruction === 'a';
                    if (v3669) {
                        result += String.fromCharCode(0);
                    } else {
                        result += ' ';
                    }
                } else {
                    result += argument[i];
                }
                const v3665 = i++;
                v3664 = i < quantifier;
            }
            const v3670 = argumentPointer++;
            v3670;
            break;
        case 'h':
        case 'H':
            const v3671 = arguments[argumentPointer];
            const v3672 = typeof v3671;
            const v3673 = v3672 === 'undefined';
            if (v3673) {
                const v3674 = 'Warning: pack() Type ' + instruction;
                const v3675 = v3674 + ': not enough arguments';
                const v3676 = new Error(v3675);
                throw v3676;
            } else {
                argument = arguments[argumentPointer];
            }
            const v3677 = quantifier === '*';
            if (v3677) {
                quantifier = argument.length;
            }
            const v3678 = argument.length;
            const v3679 = quantifier > v3678;
            if (v3679) {
                const v3680 = 'Warning: pack() Type ' + instruction;
                const v3681 = v3680 + ': not enough characters in string';
                const v3682 = new Error(v3681);
                throw v3682;
            }
            i = 0
            let v3683 = i < quantifier;
            while (v3683) {
                word = argument[i];
                const v3684 = i + 1;
                const v3685 = v3684 >= quantifier;
                const v3686 = i + 1;
                const v3687 = argument[v3686];
                const v3688 = typeof v3687;
                const v3689 = v3688 === 'undefined';
                const v3690 = v3685 || v3689;
                if (v3690) {
                    word += '0';
                } else {
                    const v3691 = i + 1;
                    word += argument[v3691];
                }
                const v3692 = instruction === 'h';
                if (v3692) {
                    const v3693 = word[1];
                    const v3694 = word[0];
                    word = v3693 + v3694;
                }
                const v3695 = parseInt(word, 16);
                result += String.fromCharCode(v3695);
                v3683 = i < quantifier;
            }
            const v3696 = argumentPointer++;
            v3696;
            break;
        case 'c':
        case 'C':
            const v3697 = quantifier === '*';
            if (v3697) {
                const v3698 = arguments.length;
                quantifier = v3698 - argumentPointer;
            }
            const v3699 = arguments.length;
            const v3700 = v3699 - argumentPointer;
            const v3701 = quantifier > v3700;
            if (v3701) {
                const v3702 = 'Warning:  pack() Type ' + instruction;
                const v3703 = v3702 + ': too few arguments';
                const v3704 = new Error(v3703);
                throw v3704;
            }
            i = 0
            let v3705 = i < quantifier;
            while (v3705) {
                const v3707 = arguments[argumentPointer];
                result += String.fromCharCode(v3707);
                const v3708 = argumentPointer++;
                v3708;
                const v3706 = i++;
                v3705 = i < quantifier;
            }
            break;
        case 's':
        case 'S':
        case 'v':
            const v3709 = quantifier === '*';
            if (v3709) {
                const v3710 = arguments.length;
                quantifier = v3710 - argumentPointer;
            }
            const v3711 = arguments.length;
            const v3712 = v3711 - argumentPointer;
            const v3713 = quantifier > v3712;
            if (v3713) {
                const v3714 = 'Warning:  pack() Type ' + instruction;
                const v3715 = v3714 + ': too few arguments';
                const v3716 = new Error(v3715);
                throw v3716;
            }
            i = 0
            let v3717 = i < quantifier;
            while (v3717) {
                const v3719 = arguments[argumentPointer];
                const v3720 = v3719 & 255;
                result += String.fromCharCode(v3720);
                const v3721 = arguments[argumentPointer];
                const v3722 = v3721 >> 8;
                const v3723 = v3722 & 255;
                result += String.fromCharCode(v3723);
                const v3724 = argumentPointer++;
                v3724;
                const v3718 = i++;
                v3717 = i < quantifier;
            }
            break;
        case 'n':
            const v3725 = quantifier === '*';
            if (v3725) {
                const v3726 = arguments.length;
                quantifier = v3726 - argumentPointer;
            }
            const v3727 = arguments.length;
            const v3728 = v3727 - argumentPointer;
            const v3729 = quantifier > v3728;
            if (v3729) {
                const v3730 = 'Warning: pack() Type ' + instruction;
                const v3731 = v3730 + ': too few arguments';
                const v3732 = new Error(v3731);
                throw v3732;
            }
            i = 0
            let v3733 = i < quantifier;
            while (v3733) {
                const v3735 = arguments[argumentPointer];
                const v3736 = v3735 & 255;
                result += String.fromCharCode(v3736);
                const v3737 = argumentPointer++;
                v3737;
                const v3734 = i++;
                v3733 = i < quantifier;
            }
            break;
        case 'i':
        case 'I':
        case 'l':
        case 'L':
        case 'V':
            const v3738 = quantifier === '*';
            if (v3738) {
                const v3739 = arguments.length;
                quantifier = v3739 - argumentPointer;
            }
            const v3740 = arguments.length;
            const v3741 = v3740 - argumentPointer;
            const v3742 = quantifier > v3741;
            if (v3742) {
                const v3743 = 'Warning:  pack() Type ' + instruction;
                const v3744 = v3743 + ': too few arguments';
                const v3745 = new Error(v3744);
                throw v3745;
            }
            i = 0
            let v3746 = i < quantifier;
            while (v3746) {
                const v3748 = arguments[argumentPointer];
                const v3749 = v3748 & 255;
                result += String.fromCharCode(v3749);
                const v3750 = arguments[argumentPointer];
                const v3751 = v3750 >> 8;
                const v3752 = v3751 & 255;
                result += String.fromCharCode(v3752);
                const v3753 = arguments[argumentPointer];
                const v3754 = v3753 >> 16;
                const v3755 = v3754 & 255;
                result += String.fromCharCode(v3755);
                const v3756 = arguments[argumentPointer];
                const v3757 = v3756 >> 24;
                const v3758 = v3757 & 255;
                result += String.fromCharCode(v3758);
                const v3759 = argumentPointer++;
                v3759;
                const v3747 = i++;
                v3746 = i < quantifier;
            }
            break;
        case 'N':
            const v3760 = quantifier === '*';
            if (v3760) {
                const v3761 = arguments.length;
                quantifier = v3761 - argumentPointer;
            }
            const v3762 = arguments.length;
            const v3763 = v3762 - argumentPointer;
            const v3764 = quantifier > v3763;
            if (v3764) {
                const v3765 = 'Warning:  pack() Type ' + instruction;
                const v3766 = v3765 + ': too few arguments';
                const v3767 = new Error(v3766);
                throw v3767;
            }
            i = 0
            let v3768 = i < quantifier;
            while (v3768) {
                const v3770 = arguments[argumentPointer];
                const v3771 = v3770 >> 24;
                const v3772 = v3771 & 255;
                result += String.fromCharCode(v3772);
                const v3773 = arguments[argumentPointer];
                const v3774 = v3773 >> 16;
                const v3775 = v3774 & 255;
                result += String.fromCharCode(v3775);
                const v3776 = arguments[argumentPointer];
                const v3777 = v3776 >> 8;
                const v3778 = v3777 & 255;
                result += String.fromCharCode(v3778);
                const v3779 = arguments[argumentPointer];
                const v3780 = v3779 & 255;
                result += String.fromCharCode(v3780);
                const v3781 = argumentPointer++;
                v3781;
                const v3769 = i++;
                v3768 = i < quantifier;
            }
            break;
        case 'f':
        case 'd':
            precisionBits = 23;
            exponentBits = 8;
            const v3782 = instruction === 'd';
            if (v3782) {
                precisionBits = 52;
                exponentBits = 11;
            }
            const v3783 = quantifier === '*';
            if (v3783) {
                const v3784 = arguments.length;
                quantifier = v3784 - argumentPointer;
            }
            const v3785 = arguments.length;
            const v3786 = v3785 - argumentPointer;
            const v3787 = quantifier > v3786;
            if (v3787) {
                const v3788 = 'Warning:  pack() Type ' + instruction;
                const v3789 = v3788 + ': too few arguments';
                const v3790 = new Error(v3789);
                throw v3790;
            }
            i = 0
            let v3791 = i < quantifier;
            while (v3791) {
                argument = arguments[argumentPointer];
                const v3793 = exponentBits - 1;
                const v3794 = Math.pow(2, v3793);
                bias = v3794 - 1;
                const v3795 = -bias;
                minExp = v3795 + 1;
                maxExp = bias;
                minUnnormExp = minExp - precisionBits;
                const v3796 = isNaN(n = parseFloat(argument));
                const v3797 = -Infinity;
                const v3798 = n === v3797;
                const v3799 = v3796 || v3798;
                const v3800 = +Infinity;
                const v3801 = n === v3800;
                const v3802 = v3799 || v3801;
                if (v3802) {
                    status = n;
                } else {
                    status = 0;
                }
                exp = 0;
                const v3803 = 2 * bias;
                const v3804 = v3803 + 1;
                const v3805 = v3804 + precisionBits;
                len = v3805 + 3;
                bin = new Array(len);
                signal = (n = status !== 0 ? 0 : n) < 0;
                n = Math.abs(n);
                intPart = Math.floor(n);
                floatPart = n - intPart;
                k = len
                while (k) {
                    const v3807 = --k;
                    bin[v3807] = 0;
                }
                k = bias + 2
                let v3808 = intPart && k;
                while (v3808) {
                    const v3809 = --k;
                    bin[v3809] = intPart % 2;
                    const v3810 = intPart / 2;
                    intPart = Math.floor(v3810);
                    v3808 = intPart && k;
                }
                k = bias + 1
                const v3811 = floatPart > 0;
                let v3812 = v3811 && k;
                while (v3812) {
                    const v3814 = ++k;
                    const v3815 = (floatPart *= 2) >= 1;
                    bin[v3814] = v3815 - 0;
                    const v3813 = --floatPart;
                    v3812 = v3811 && k;
                }
                const v3816 = -1;
                const v3817 = ++k;
                const v3818 = v3817 < len;
                const v3819 = bin[k];
                const v3820 = !v3819;
                let v3821 = v3818 && v3820;
                while (v3821) {
                    v3821 = v3818 && v3820;
                }
                const v3830 = (lastBit = precisionBits - 1 + (k = (exp = bias + 1 - k) >= minExp && exp <= maxExp ? k + 1 : bias + 1 - (exp = minExp - 1))) + 1;
                const v3831 = bin[v3830];
                if (v3831) {
                    const v3832 = !(rounded = bin[lastBit]);
                    if (v3832) {
                        j = lastBit + 2
                        const v3833 = !rounded;
                        const v3834 = j < len;
                        let v3835 = v3833 && v3834;
                        while (v3835) {
                            const v3836 = j++;
                            v3835 = v3833 && v3834;
                        }
                    }
                    j = lastBit + 1
                    const v3837 = --j;
                    const v3838 = v3837 >= 0;
                    let v3839 = rounded && v3838;
                    while (v3839) {
                        const v3840 = bin[j];
                        const v3841 = !v3840;
                        const v3842 = (bin[j] = v3841 - 0) && (rounded = 0);
                        v3839 = rounded && v3838;
                    }
                }
                const v3843 = k - 2;
                const v3844 = v3843 < 0;
                const v3845 = -1;
                const v3846 = k - 3;
                if (v3844) {
                    k = v3845;
                } else {
                    k = v3846;
                }
                const v3847 = ++k;
                const v3848 = v3847 < len;
                const v3849 = bin[k];
                const v3850 = !v3849;
                let v3851 = v3848 && v3850;
                while (v3851) {
                    v3851 = v3848 && v3850;
                }
                const v3852 = bias + 1;
                const v3853 = (exp = v3852 - k) >= minExp;
                const v3854 = exp <= maxExp;
                const v3855 = v3853 && v3854;
                if (v3855) {
                    const v3856 = ++k;
                    v3856;
                } else {
                    const v3857 = exp < minExp;
                    if (v3857) {
                        const v3858 = bias + 1;
                        const v3859 = v3858 - len;
                        const v3860 = exp !== v3859;
                        const v3861 = exp < minUnnormExp;
                        const v3862 = v3860 && v3861;
                        if (v3862) {
                        }
                        const v3863 = bias + 1;
                        k = v3863 - (exp = minExp - 1);
                    }
                }
                const v3864 = status !== 0;
                const v3865 = intPart || v3864;
                if (v3865) {
                    exp = maxExp + 1;
                    k = bias + 2;
                    const v3866 = -Infinity;
                    const v3867 = status === v3866;
                    if (v3867) {
                        signal = 1;
                    } else {
                        const v3868 = isNaN(status);
                        if (v3868) {
                            bin[k] = 1;
                        }
                    }
                }
                const v3869 = exp + bias;
                n = Math.abs(v3869);
                tmpResult = '';
                j = exponentBits + 1
                let v3870 = --j;
                while (v3870) {
                    const v3871 = n % 2;
                    tmpResult = v3871 + tmpResult;
                    n = 1;
                    n = n;
                    v3870 = --j;
                }
                n = 0;
                j = 0;
                let v3872;
                if (signal) {
                    v3872 = '1';
                } else {
                    v3872 = '0';
                }
                const v3873 = v3872 + tmpResult;
                const v3874 = k + precisionBits;
                const v3875 = bin.slice(k, v3874);
                const v3876 = v3875.join('');
                k = (tmpResult = v3873 + v3876).length;
                r = [];
                while (k) {
                    const v3877 = 1 << j;
                    const v3878 = --k;
                    const v3879 = tmpResult.charAt(v3878);
                    n += v3877 * v3879;
                    const v3880 = j === 7;
                    if (v3880) {
                        const v3882 = String.fromCharCode(n);
                        r[v3881] = v3882;
                        n = 0;
                    }
                    const v3883 = j + 1;
                    j = v3883 % 8;
                }
                const v3884 = r.length;
                const v3885 = String.fromCharCode(n);
                let v3886;
                if (n) {
                    v3886 = v3885;
                } else {
                    v3886 = '';
                }
                r[v3884] = v3886;
                result += r.join('');
                const v3887 = argumentPointer++;
                v3887;
                const v3792 = i++;
                v3791 = i < quantifier;
            }
            break;
        case 'x':
            const v3888 = quantifier === '*';
            if (v3888) {
                const v3889 = new Error('Warning: pack(): Type x: \'*\' ignored');
                throw v3889;
            }
            i = 0
            let v3890 = i < quantifier;
            while (v3890) {
                result += String.fromCharCode(0);
                const v3891 = i++;
                v3890 = i < quantifier;
            }
            break;
        case 'X':
            const v3892 = quantifier === '*';
            if (v3892) {
                const v3893 = new Error('Warning: pack(): Type X: \'*\' ignored');
                throw v3893;
            }
            i = 0
            let v3894 = i < quantifier;
            while (v3894) {
                const v3896 = result.length;
                const v3897 = v3896 === 0;
                if (v3897) {
                    const v3898 = 'Warning: pack(): Type X:' + ' outside of string';
                    const v3899 = new Error(v3898);
                    throw v3899;
                } else {
                    const v3900 = result.length;
                    const v3901 = v3900 - 1;
                    result = result.substring(0, v3901);
                }
                const v3895 = i++;
                v3894 = i < quantifier;
            }
            break;
        case '@':
            const v3902 = quantifier === '*';
            if (v3902) {
                const v3903 = new Error('Warning: pack(): Type X: \'*\' ignored');
                throw v3903;
            }
            const v3904 = result.length;
            const v3905 = quantifier > v3904;
            if (v3905) {
                const v3906 = result.length;
                extraNullCount = quantifier - v3906;
                i = 0
                let v3907 = i < extraNullCount;
                while (v3907) {
                    result += String.fromCharCode(0);
                    const v3908 = i++;
                    v3907 = i < extraNullCount;
                }
            }
            const v3909 = result.length;
            const v3910 = quantifier < v3909;
            if (v3910) {
                result = result.substring(0, quantifier);
            }
            break;
        default:
            const v3911 = 'Warning:  pack() Type ' + instruction;
            const v3912 = v3911 + ': unknown format code';
            const v3913 = new Error(v3912);
            throw v3913;
        }
        v3646 = formatPointer < v3645;
    }
    const v3914 = arguments.length;
    const v3915 = argumentPointer < v3914;
    if (v3915) {
        const v3916 = arguments.length;
        const v3917 = v3916 - argumentPointer;
        const v3918 = 'Warning: pack(): ' + v3917;
        const v3919 = v3918 + ' arguments unused';
        const v3920 = new Error(v3919);
        throw v3920;
    }
    return result;
};
exports.pack = v3921;
const v3925 = function (timestamp) {
    const v3922 = new Date();
    const v3923 = timestamp * 1000;
    let v3924 = v3922 < v3923;
    while (v3924) {
        v3924 = v3922 < v3923;
    }
    return true;
};
exports.time_sleep_until = v3925;
const v3964 = function (prefix, more_entropy) {
    const v3926 = typeof prefix;
    const v3927 = v3926 === 'undefined';
    if (v3927) {
        prefix = '';
    }
    var retId;
    var formatSeed = function (seed, reqWidth) {
        const v3928 = parseInt(seed, 10);
        seed = v3928.toString(16);
        const v3929 = seed.length;
        const v3930 = reqWidth < v3929;
        if (v3930) {
            const v3931 = seed.length;
            const v3932 = v3931 - reqWidth;
            const v3933 = seed.slice(v3932);
            return v3933;
        }
        const v3934 = seed.length;
        const v3935 = reqWidth > v3934;
        if (v3935) {
            const v3936 = seed.length;
            const v3937 = reqWidth - v3936;
            const v3938 = 1 + v3937;
            const v3939 = Array(v3938);
            const v3940 = v3939.join('0');
            const v3941 = v3940 + seed;
            return v3941;
        }
        return seed;
    };
    const v3942 = this.php_js;
    const v3943 = !v3942;
    if (v3943) {
        const v3944 = {};
        this.php_js = v3944;
    }
    const v3945 = this.php_js;
    const v3946 = v3945.uniqidSeed;
    const v3947 = !v3946;
    if (v3947) {
        const v3949 = Math.random();
        const v3950 = v3949 * 123456789;
        const v3951 = Math.floor(v3950);
        v3948.uniqidSeed = v3951;
    }
    const v3952 = this.php_js;
    const v3953 = v3952.uniqidSeed;
    const v3954 = v3953++;
    v3954;
    retId = prefix;
    const v3955 = new Date();
    const v3956 = v3955.getTime();
    const v3957 = v3956 / 1000;
    const v3958 = parseInt(v3957, 10);
    retId += formatSeed(v3958, 8);
    const v3959 = this.php_js;
    const v3960 = v3959.uniqidSeed;
    retId += formatSeed(v3960, 5);
    if (more_entropy) {
        const v3961 = Math.random();
        const v3962 = v3961 * 10;
        const v3963 = v3962.toFixed(8);
        retId += v3963.toString();
    }
    return retId;
};
exports.uniqid = v3964;
const v3973 = function (dirent) {
    var entryPattern = /^(.)(.*?)\t(.*?)\t(.*?)\t(.*?)\u000d\u000a$/;
    var entry = dirent.match(entryPattern);
    const v3965 = entry === null;
    if (v3965) {
        throw 'Could not parse the directory entry';
    }
    var type = entry[1];
    switch (type) {
    case 'i':
        type = 255;
        break;
    case '1':
        type = 1;
        break;
    case '0':
        type = 0;
        break;
    case '4':
        type = 4;
        break;
    case '5':
        type = 5;
        break;
    case '6':
        type = 6;
        break;
    case '9':
        type = 9;
        break;
    case 'h':
        type = 254;
        break;
    default:
        const v3966 = -1;
        const v3967 = {};
        v3967.type = v3966;
        v3967.data = dirent;
        return v3967;
    }
    const v3968 = entry[2];
    const v3969 = entry[3];
    const v3970 = entry[4];
    const v3971 = entry[5];
    const v3972 = {};
    v3972.type = type;
    v3972.title = v3968;
    v3972.path = v3969;
    v3972.host = v3970;
    v3972.port = v3971;
    return v3972;
};
exports.gopher_parsedir = v3973;
const v4001 = function (a) {
    var i = 0;
    var m = '';
    var c = [];
    a += '';
    const v3974 = a.length;
    const v3975 = v3974 === 4;
    if (v3975) {
        const v3976 = a.charCodeAt(0);
        const v3977 = a.charCodeAt(1);
        const v3978 = a.charCodeAt(2);
        const v3979 = a.charCodeAt(3);
        const v3980 = [
            v3976,
            v3977,
            v3978,
            v3979
        ];
        const v3981 = v3980.join('.');
        return v3981;
    } else {
        const v3982 = a.length;
        const v3983 = v3982 === 16;
        if (v3983) {
            i = 0
            let v3984 = i < 16;
            while (v3984) {
                const v3986 = i++;
                const v3987 = a.charCodeAt(v3986);
                const v3988 = v3987 << 8;
                const v3989 = a.charCodeAt(i);
                const v3990 = v3988 + v3989;
                const v3991 = v3990.toString(16);
                const v3992 = c.push(v3991);
                v3992;
                const v3985 = i++;
                v3984 = i < 16;
            }
            const v3993 = c.join(':');
            const v3997 = function (t) {
                const v3994 = t.length;
                const v3995 = m.length;
                const v3996 = v3994 > v3995;
                if (v3996) {
                    m = t;
                } else {
                    m = m;
                }
                return t;
            };
            const v3998 = v3993.replace(/((^|:)0(?=:|$))+:?/g, v3997);
            const v3999 = m || ' ';
            const v4000 = v3998.replace(v3999, '::');
            return v4000;
        } else {
            return false;
        }
    }
};
exports.inet_ntop = v4001;
const v4068 = function (a) {
    var r;
    var m;
    var x;
    var i;
    var j;
    var f = String.fromCharCode;
    m = a.match(/^(?:\d{1,3}(?:\.|$)){4}/);
    if (m) {
        const v4002 = m[0];
        m = v4002.split('.');
        const v4003 = m[0];
        const v4004 = f(v4003);
        const v4005 = m[1];
        const v4006 = f(v4005);
        const v4007 = v4004 + v4006;
        const v4008 = m[2];
        const v4009 = f(v4008);
        const v4010 = v4007 + v4009;
        const v4011 = m[3];
        const v4012 = f(v4011);
        m = v4010 + v4012;
        const v4013 = m.length;
        const v4014 = v4013 === 4;
        let v4015;
        if (v4014) {
            v4015 = m;
        } else {
            v4015 = false;
        }
        return v4015;
    }
    r = /^((?:[\da-f]{1,4}(?::|)){0,8})(::)?((?:[\da-f]{1,4}(?::|)){0,8})$/;
    m = a.match(r);
    if (m) {
        j = 1
        let v4016 = j < 4;
        while (v4016) {
            const v4018 = j === 2;
            const v4019 = m[j];
            const v4020 = v4019.length;
            const v4021 = v4020 === 0;
            const v4022 = v4018 || v4021;
            if (v4022) {
                continue;
            }
            const v4023 = m[j];
            const v4024 = v4023.split(':');
            m[j] = v4024;
            i = 0
            const v4025 = m[j];
            const v4026 = v4025.length;
            let v4027 = i < v4026;
            while (v4027) {
                const v4030 = m[j];
                const v4031 = v4030[i];
                const v4032 = parseInt(v4031, 16);
                v4029[i] = v4032;
                const v4033 = m[j];
                const v4034 = v4033[i];
                const v4035 = isNaN(v4034);
                if (v4035) {
                    return false;
                }
                const v4036 = m[j];
                const v4037 = m[j];
                const v4038 = v4037[i];
                const v4039 = v4038 >> 8;
                const v4040 = f(v4039);
                const v4041 = m[j];
                const v4042 = v4041[i];
                const v4043 = v4042 & 255;
                const v4044 = f(v4043);
                v4036[i] = v4040 + v4044;
                const v4028 = i++;
                v4027 = i < v4026;
            }
            const v4045 = m[j];
            const v4046 = v4045.join('');
            m[j] = v4046;
            const v4017 = j++;
            v4016 = j < 4;
        }
        const v4047 = m[1];
        const v4048 = v4047.length;
        const v4049 = m[3];
        const v4050 = v4049.length;
        x = v4048 + v4050;
        const v4051 = x === 16;
        if (v4051) {
            const v4052 = m[1];
            const v4053 = m[3];
            const v4054 = v4052 + v4053;
            return v4054;
        } else {
            const v4055 = x < 16;
            const v4056 = m[2];
            const v4057 = v4056.length;
            const v4058 = v4057 > 0;
            const v4059 = v4055 && v4058;
            if (v4059) {
                const v4060 = m[1];
                const v4061 = 16 - x;
                const v4062 = v4061 + 1;
                const v4063 = new Array(v4062);
                const v4064 = v4063.join('\0');
                const v4065 = v4060 + v4064;
                const v4066 = m[3];
                const v4067 = v4065 + v4066;
                return v4067;
            }
        }
    }
    return false;
};
exports.inet_pton = v4068;
const v4119 = function (IP) {
    var i = 0;
    IP = IP.match(/^([1-9]\d*|0[0-7]*|0x[\da-f]+)(?:\.([1-9]\d*|0[0-7]*|0x[\da-f]+))?(?:\.([1-9]\d*|0[0-7]*|0x[\da-f]+))?(?:\.([1-9]\d*|0[0-7]*|0x[\da-f]+))?$/i);
    const v4069 = !IP;
    if (v4069) {
        return false;
    }
    IP[0] = 0;
    (i = 1)
    let v4070 = i < 5;
    while (v4070) {
        const v4071 = IP[i];
        const v4072 = v4071 || '';
        const v4073 = v4072.length;
        const v4074 = !v4073;
        const v4075 = !v4074;
        IP[0] += v4075;
        const v4076 = IP[i];
        const v4077 = parseInt(v4076);
        IP[i] = v4077 || 0;
        v4070 = i < 5;
    }
    const v4078 = IP.push(256, 256, 256, 256);
    v4078;
    const v4081 = IP[0];
    const v4082 = 4 - v4081;
    const v4083 = Math.pow(256, v4082);
    IP[v4080] *= v4083;
    const v4084 = IP[1];
    const v4085 = IP[5];
    const v4086 = v4084 >= v4085;
    const v4087 = IP[2];
    const v4088 = IP[6];
    const v4089 = v4087 >= v4088;
    const v4090 = v4086 || v4089;
    const v4091 = IP[3];
    const v4092 = IP[7];
    const v4093 = v4091 >= v4092;
    const v4094 = v4090 || v4093;
    const v4095 = IP[4];
    const v4096 = IP[8];
    const v4097 = v4095 >= v4096;
    const v4098 = v4094 || v4097;
    if (v4098) {
        return false;
    }
    const v4099 = IP[1];
    const v4100 = IP[0];
    const v4101 = v4100 === 1;
    const v4102 = v4101 || 16777216;
    const v4103 = v4099 * v4102;
    const v4104 = IP[2];
    const v4105 = IP[0];
    const v4106 = v4105 <= 2;
    const v4107 = v4106 || 65536;
    const v4108 = v4104 * v4107;
    const v4109 = v4103 + v4108;
    const v4110 = IP[3];
    const v4111 = IP[0];
    const v4112 = v4111 <= 3;
    const v4113 = v4112 || 256;
    const v4114 = v4110 * v4113;
    const v4115 = v4109 + v4114;
    const v4116 = IP[4];
    const v4117 = v4116 * 1;
    const v4118 = v4115 + v4117;
    return v4118;
};
exports.ip2long = v4119;
const v4130 = function (ip) {
    const v4120 = isFinite(ip);
    const v4121 = !v4120;
    if (v4121) {
        return false;
    }
    const v4122 = ip >>> 24;
    const v4123 = ip >>> 16;
    const v4124 = v4123 & 255;
    const v4125 = ip >>> 8;
    const v4126 = v4125 & 255;
    const v4127 = ip & 255;
    const v4128 = [
        v4122,
        v4124,
        v4126,
        v4127
    ];
    const v4129 = v4128.join('.');
    return v4129;
};
exports.long2ip = v4130;
const v4154 = function (name, value, expires, path, domain, secure) {
    const v4131 = typeof expires;
    const v4132 = v4131 === 'string';
    const v4133 = /^\d+$/.test(expires);
    const v4134 = v4132 && v4133;
    if (v4134) {
        expires = parseInt(expires, 10);
    }
    const v4135 = expires instanceof Date;
    if (v4135) {
        expires = expires.toGMTString();
    } else {
        const v4136 = typeof expires;
        const v4137 = v4136 === 'number';
        if (v4137) {
            const v4138 = expires * 1000;
            const v4139 = new Date(v4138);
            expires = v4139.toGMTString();
        }
    }
    const v4140 = name + '=';
    const v4141 = v4140 + value;
    var r = [v4141];
    var s = {};
    var i = '';
    s.expires = expires;
    s.path = path;
    s.domain = domain;
    s = {};
    s = {};
    for (i in s) {
        const v4142 = s.hasOwnProperty(i);
        if (v4142) {
            const v4143 = s[i];
            const v4144 = i + '=';
            const v4145 = s[i];
            const v4146 = v4144 + v4145;
            const v4147 = r.push(v4146);
            const v4148 = v4143 && v4147;
            v4148;
        }
    }
    const v4149 = r.push('secure');
    const v4150 = secure && v4149;
    const v4153 = r.join(';');
    return v4150, v4152.cookie = v4153, true;
};
exports.setrawcookie = v4154;
const v4171 = function (pattern, input, flags) {
    var p = '';
    var retObj = {};
    const v4155 = flags === 1;
    const v4156 = flags === 'PREG_GREP_INVERT';
    var invert = v4155 || v4156;
    const v4157 = typeof pattern;
    const v4158 = v4157 === 'string';
    if (v4158) {
        pattern = eval(pattern);
    }
    if (invert) {
        for (p in input) {
            const v4159 = input[p];
            const v4160 = v4159 + '';
            const v4161 = v4160.search(pattern);
            const v4162 = -1;
            const v4163 = v4161 === v4162;
            if (v4163) {
                const v4164 = input[p];
                retObj[p] = v4164;
            }
        }
    } else {
        for (p in input) {
            const v4165 = input[p];
            const v4166 = v4165 + '';
            const v4167 = v4166.search(pattern);
            const v4168 = -1;
            const v4169 = v4167 !== v4168;
            if (v4169) {
                const v4170 = input[p];
                retObj[p] = v4170;
            }
        }
    }
    return retObj;
};
exports.preg_grep = v4171;
const v4178 = function (str, delimiter) {
    const v4172 = String(str);
    const v4173 = delimiter || '';
    const v4174 = '[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\' + v4173;
    const v4175 = v4174 + '-]';
    const v4176 = new RegExp(v4175, 'g');
    const v4177 = v4172.replace(v4176, '\\$&');
    return v4177;
};
exports.preg_quote = v4178;
const v4267 = function (str, charlist) {
    var target = '';
    var chrs = [];
    var i = 0;
    var j = 0;
    var c = '';
    var next = '';
    var rangeBegin = '';
    var rangeEnd = '';
    var chr = '';
    var begin = 0;
    var end = 0;
    var octalLength = 0;
    var postOctalPos = 0;
    var cca = 0;
    var escHexGrp = [];
    var encoded = '';
    var percentHex = /%([\dA-Fa-f]+)/g;
    var _pad = function (n, c) {
        const v4179 = (n = n + '').length;
        const v4180 = v4179 < c;
        if (v4180) {
            const v4181 = ++c;
            const v4182 = n.length;
            const v4183 = v4181 - v4182;
            const v4184 = new Array(v4183);
            const v4185 = v4184.join('0');
            const v4186 = v4185 + n;
            return v4186;
        }
        return n;
    };
    (i = 0)
    const v4187 = charlist.length;
    let v4188 = i < v4187;
    while (v4188) {
        c = charlist.charAt(i);
        const v4190 = i + 1;
        next = charlist.charAt(v4190);
        const v4191 = c === '\\';
        const v4192 = v4191 && next;
        const v4193 = /\d/.test(next);
        const v4194 = v4192 && v4193;
        if (v4194) {
            const v4195 = i + 1;
            const v4196 = charlist.slice(v4195);
            const v4197 = v4196.match(/^\d+/);
            rangeBegin = v4197[0];
            octalLength = rangeBegin.length;
            const v4198 = i + octalLength;
            postOctalPos = v4198 + 1;
            const v4199 = charlist.charAt(postOctalPos);
            const v4200 = postOctalPos + 1;
            const v4201 = charlist.charAt(v4200);
            const v4202 = v4199 + v4201;
            const v4203 = v4202 === '..';
            if (v4203) {
                begin = rangeBegin.charCodeAt(0);
                const v4204 = postOctalPos + 2;
                const v4205 = charlist.charAt(v4204);
                const v4206 = postOctalPos + 3;
                const v4207 = charlist.charAt(v4206);
                const v4208 = v4205 + v4207;
                const v4209 = /\\\d/.test(v4208);
                if (v4209) {
                    const v4210 = postOctalPos + 3;
                    const v4211 = charlist.slice(v4210);
                    const v4212 = v4211.match(/^\d+/);
                    rangeEnd = v4212[0];
                    i += 1;
                } else {
                    const v4213 = postOctalPos + 2;
                    const v4214 = charlist.charAt(v4213);
                    if (v4214) {
                        const v4215 = postOctalPos + 2;
                        rangeEnd = charlist.charAt(v4215);
                    } else {
                        throw 'Range with no end point';
                    }
                }
                end = rangeEnd.charCodeAt(0);
                const v4216 = end > begin;
                if (v4216) {
                    j = begin
                    let v4217 = j <= end;
                    while (v4217) {
                        const v4219 = String.fromCharCode(j);
                        const v4220 = chrs.push(v4219);
                        v4220;
                        const v4218 = j++;
                        v4217 = j <= end;
                    }
                } else {
                    const v4221 = chrs.push('.', rangeBegin, rangeEnd);
                    v4221;
                }
                const v4222 = rangeEnd.length;
                i += v4222 + 2;
            } else {
                const v4223 = parseInt(rangeBegin, 8);
                chr = String.fromCharCode(v4223);
                const v4224 = chrs.push(chr);
                v4224;
            }
            i += octalLength;
        } else {
            const v4225 = i + 2;
            const v4226 = charlist.charAt(v4225);
            const v4227 = next + v4226;
            const v4228 = v4227 === '..';
            if (v4228) {
                rangeBegin = c;
                begin = rangeBegin.charCodeAt(0);
                const v4229 = i + 3;
                const v4230 = charlist.charAt(v4229);
                const v4231 = i + 4;
                const v4232 = charlist.charAt(v4231);
                const v4233 = v4230 + v4232;
                const v4234 = /\\\d/.test(v4233);
                if (v4234) {
                    const v4235 = i + 4;
                    const v4236 = charlist.slice(v4235);
                    const v4237 = v4236.match(/^\d+/);
                    rangeEnd = v4237[0];
                    i += 1;
                } else {
                    const v4238 = i + 3;
                    const v4239 = charlist.charAt(v4238);
                    if (v4239) {
                        const v4240 = i + 3;
                        rangeEnd = charlist.charAt(v4240);
                    } else {
                        throw 'Range with no end point';
                    }
                }
                end = rangeEnd.charCodeAt(0);
                const v4241 = end > begin;
                if (v4241) {
                    j = begin
                    let v4242 = j <= end;
                    while (v4242) {
                        const v4244 = String.fromCharCode(j);
                        const v4245 = chrs.push(v4244);
                        v4245;
                        const v4243 = j++;
                        v4242 = j <= end;
                    }
                } else {
                    const v4246 = chrs.push('.', rangeBegin, rangeEnd);
                    v4246;
                }
                const v4247 = rangeEnd.length;
                i += v4247 + 2;
            } else {
                const v4248 = chrs.push(c);
                v4248;
            }
        }
        const v4189 = i++;
        v4188 = i < v4187;
    }
    (i = 0)
    const v4249 = str.length;
    let v4250 = i < v4249;
    while (v4250) {
        c = str.charAt(i);
        const v4252 = chrs.indexOf(c);
        const v4253 = -1;
        const v4254 = v4252 !== v4253;
        if (v4254) {
            target += '\\';
            cca = c.charCodeAt(0);
            const v4255 = cca < 32;
            const v4256 = cca > 126;
            const v4257 = v4255 || v4256;
            if (v4257) {
                switch (c) {
                case '\n':
                    target += 'n';
                    break;
                case '\t':
                    target += 't';
                    break;
                case '\r':
                    target += 'r';
                    break;
                case '\x07':
                    target += 'a';
                    break;
                case '\x0B':
                    target += 'v';
                    break;
                case '\b':
                    target += 'b';
                    break;
                case '\f':
                    target += 'f';
                    break;
                default:
                    encoded = encodeURIComponent(c);
                    const v4258 = (escHexGrp = percentHex.exec(encoded)) !== null;
                    if (v4258) {
                        const v4259 = escHexGrp[1];
                        const v4260 = parseInt(v4259, 16);
                        const v4261 = v4260.toString(8);
                        target += _pad(v4261, 3);
                    }
                    let v4262 = (escHexGrp = percentHex.exec(encoded)) !== null;
                    while (v4262) {
                        const v4263 = escHexGrp[1];
                        const v4264 = parseInt(v4263, 16);
                        const v4265 = v4264.toString(8);
                        const v4266 = _pad(v4265, 3);
                        target += '\\' + v4266;
                        v4262 = (escHexGrp = percentHex.exec(encoded)) !== null;
                    }
                    break;
                }
            } else {
                target += c;
            }
        } else {
            target += c;
        }
        const v4251 = i++;
        v4250 = i < v4249;
    }
    return target;
};
exports.addcslashes = v4267;
const v4271 = function (str) {
    const v4268 = str + '';
    const v4269 = v4268.replace(/[\\"']/g, '\\$&');
    const v4270 = v4269.replace(/\u0000/g, '\\0');
    return v4270;
};
exports.addslashes = v4271;
const v4278 = function (s) {
    var i;
    var l;
    var o = '';
    var n;
    s += '';
    (i = 0, l = s.length)
    let v4272 = i < l;
    while (v4272) {
        const v4274 = s.charCodeAt(i);
        n = v4274.toString(16);
        const v4275 = n.length;
        const v4276 = v4275 < 2;
        const v4277 = '0' + n;
        if (v4276) {
            o = v4277;
        } else {
            o = n;
        }
        const v4273 = i++;
        v4272 = i < l;
    }
    return o;
};
exports.bin2hex = v4278;
const v4286 = function (codePt) {
    const v4279 = codePt > 65535;
    if (v4279) {
        codePt -= 65536;
        const v4280 = codePt >> 10;
        const v4281 = 55296 + v4280;
        const v4282 = codePt & 1023;
        const v4283 = 56320 + v4282;
        const v4284 = String.fromCharCode(v4281, v4283);
        return v4284;
    }
    const v4285 = String.fromCharCode(codePt);
    return v4285;
};
exports.chr = v4286;
const v4294 = function (body, chunklen, end) {
    const v4287 = parseInt(chunklen, 10);
    chunklen = v4287 || 76;
    end = end || '\r\n';
    const v4288 = chunklen < 1;
    if (v4288) {
        return false;
    }
    const v4289 = '.{0,' + chunklen;
    const v4290 = v4289 + '}';
    const v4291 = new RegExp(v4290, 'g');
    const v4292 = body.match(v4291);
    const v4293 = v4292.join(end);
    return v4293;
};
exports.chunk_split = v4294;
const v4314 = function (str, from, to) {
    var _cyr_win1251 = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57,
        58,
        59,
        60,
        61,
        62,
        63,
        64,
        65,
        66,
        67,
        68,
        69,
        70,
        71,
        72,
        73,
        74,
        75,
        76,
        77,
        78,
        79,
        80,
        81,
        82,
        83,
        84,
        85,
        86,
        87,
        88,
        89,
        90,
        91,
        92,
        93,
        94,
        95,
        96,
        97,
        98,
        99,
        100,
        101,
        102,
        103,
        104,
        105,
        106,
        107,
        108,
        109,
        110,
        111,
        112,
        113,
        114,
        115,
        116,
        117,
        118,
        119,
        120,
        121,
        122,
        123,
        124,
        125,
        126,
        127,
        46,
        46,
        46,
        46,
        46,
        46,
        46,
        46,
        46,
        46,
        46,
        46,
        46,
        46,
        46,
        46,
        46,
        46,
        46,
        46,
        46,
        46,
        46,
        46,
        46,
        46,
        46,
        46,
        46,
        46,
        46,
        46,
        154,
        174,
        190,
        46,
        159,
        189,
        46,
        46,
        179,
        191,
        180,
        157,
        46,
        46,
        156,
        183,
        46,
        46,
        182,
        166,
        173,
        46,
        46,
        158,
        163,
        152,
        164,
        155,
        46,
        46,
        46,
        167,
        225,
        226,
        247,
        231,
        228,
        229,
        246,
        250,
        233,
        234,
        235,
        236,
        237,
        238,
        239,
        240,
        242,
        243,
        244,
        245,
        230,
        232,
        227,
        254,
        251,
        253,
        255,
        249,
        248,
        252,
        224,
        241,
        193,
        194,
        215,
        199,
        196,
        197,
        214,
        218,
        201,
        202,
        203,
        204,
        205,
        206,
        207,
        208,
        210,
        211,
        212,
        213,
        198,
        200,
        195,
        222,
        219,
        221,
        223,
        217,
        216,
        220,
        192,
        209,
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57,
        58,
        59,
        60,
        61,
        62,
        63,
        64,
        65,
        66,
        67,
        68,
        69,
        70,
        71,
        72,
        73,
        74,
        75,
        76,
        77,
        78,
        79,
        80,
        81,
        82,
        83,
        84,
        85,
        86,
        87,
        88,
        89,
        90,
        91,
        92,
        93,
        94,
        95,
        96,
        97,
        98,
        99,
        100,
        101,
        102,
        103,
        104,
        105,
        106,
        107,
        108,
        109,
        110,
        111,
        112,
        113,
        114,
        115,
        116,
        117,
        118,
        119,
        120,
        121,
        122,
        123,
        124,
        125,
        126,
        127,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        184,
        186,
        32,
        179,
        191,
        32,
        32,
        32,
        32,
        32,
        180,
        162,
        32,
        32,
        32,
        32,
        168,
        170,
        32,
        178,
        175,
        32,
        32,
        32,
        32,
        32,
        165,
        161,
        169,
        254,
        224,
        225,
        246,
        228,
        229,
        244,
        227,
        245,
        232,
        233,
        234,
        235,
        236,
        237,
        238,
        239,
        255,
        240,
        241,
        242,
        243,
        230,
        226,
        252,
        251,
        231,
        248,
        253,
        249,
        247,
        250,
        222,
        192,
        193,
        214,
        196,
        197,
        212,
        195,
        213,
        200,
        201,
        202,
        203,
        204,
        205,
        206,
        207,
        223,
        208,
        209,
        210,
        211,
        198,
        194,
        220,
        219,
        199,
        216,
        221,
        217,
        215,
        218
    ];
    var _cyr_cp866 = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57,
        58,
        59,
        60,
        61,
        62,
        63,
        64,
        65,
        66,
        67,
        68,
        69,
        70,
        71,
        72,
        73,
        74,
        75,
        76,
        77,
        78,
        79,
        80,
        81,
        82,
        83,
        84,
        85,
        86,
        87,
        88,
        89,
        90,
        91,
        92,
        93,
        94,
        95,
        96,
        97,
        98,
        99,
        100,
        101,
        102,
        103,
        104,
        105,
        106,
        107,
        108,
        109,
        110,
        111,
        112,
        113,
        114,
        115,
        116,
        117,
        118,
        119,
        120,
        121,
        122,
        123,
        124,
        125,
        126,
        127,
        225,
        226,
        247,
        231,
        228,
        229,
        246,
        250,
        233,
        234,
        235,
        236,
        237,
        238,
        239,
        240,
        242,
        243,
        244,
        245,
        230,
        232,
        227,
        254,
        251,
        253,
        255,
        249,
        248,
        252,
        224,
        241,
        193,
        194,
        215,
        199,
        196,
        197,
        214,
        218,
        201,
        202,
        203,
        204,
        205,
        206,
        207,
        208,
        35,
        35,
        35,
        124,
        124,
        124,
        124,
        43,
        43,
        124,
        124,
        43,
        43,
        43,
        43,
        43,
        43,
        45,
        45,
        124,
        45,
        43,
        124,
        124,
        43,
        43,
        45,
        45,
        124,
        45,
        43,
        45,
        45,
        45,
        45,
        43,
        43,
        43,
        43,
        43,
        43,
        43,
        43,
        35,
        35,
        124,
        124,
        35,
        210,
        211,
        212,
        213,
        198,
        200,
        195,
        222,
        219,
        221,
        223,
        217,
        216,
        220,
        192,
        209,
        179,
        163,
        180,
        164,
        183,
        167,
        190,
        174,
        32,
        149,
        158,
        32,
        152,
        159,
        148,
        154,
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57,
        58,
        59,
        60,
        61,
        62,
        63,
        64,
        65,
        66,
        67,
        68,
        69,
        70,
        71,
        72,
        73,
        74,
        75,
        76,
        77,
        78,
        79,
        80,
        81,
        82,
        83,
        84,
        85,
        86,
        87,
        88,
        89,
        90,
        91,
        92,
        93,
        94,
        95,
        96,
        97,
        98,
        99,
        100,
        101,
        102,
        103,
        104,
        105,
        106,
        107,
        108,
        109,
        110,
        111,
        112,
        113,
        114,
        115,
        116,
        117,
        118,
        119,
        120,
        121,
        122,
        123,
        124,
        125,
        126,
        127,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        205,
        186,
        213,
        241,
        243,
        201,
        32,
        245,
        187,
        212,
        211,
        200,
        190,
        32,
        247,
        198,
        199,
        204,
        181,
        240,
        242,
        185,
        32,
        244,
        203,
        207,
        208,
        202,
        216,
        32,
        246,
        32,
        238,
        160,
        161,
        230,
        164,
        165,
        228,
        163,
        229,
        168,
        169,
        170,
        171,
        172,
        173,
        174,
        175,
        239,
        224,
        225,
        226,
        227,
        166,
        162,
        236,
        235,
        167,
        232,
        237,
        233,
        231,
        234,
        158,
        128,
        129,
        150,
        132,
        133,
        148,
        131,
        149,
        136,
        137,
        138,
        139,
        140,
        141,
        142,
        143,
        159,
        144,
        145,
        146,
        147,
        134,
        130,
        156,
        155,
        135,
        152,
        157,
        153,
        151,
        154
    ];
    var _cyr_iso88595 = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57,
        58,
        59,
        60,
        61,
        62,
        63,
        64,
        65,
        66,
        67,
        68,
        69,
        70,
        71,
        72,
        73,
        74,
        75,
        76,
        77,
        78,
        79,
        80,
        81,
        82,
        83,
        84,
        85,
        86,
        87,
        88,
        89,
        90,
        91,
        92,
        93,
        94,
        95,
        96,
        97,
        98,
        99,
        100,
        101,
        102,
        103,
        104,
        105,
        106,
        107,
        108,
        109,
        110,
        111,
        112,
        113,
        114,
        115,
        116,
        117,
        118,
        119,
        120,
        121,
        122,
        123,
        124,
        125,
        126,
        127,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        179,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        225,
        226,
        247,
        231,
        228,
        229,
        246,
        250,
        233,
        234,
        235,
        236,
        237,
        238,
        239,
        240,
        242,
        243,
        244,
        245,
        230,
        232,
        227,
        254,
        251,
        253,
        255,
        249,
        248,
        252,
        224,
        241,
        193,
        194,
        215,
        199,
        196,
        197,
        214,
        218,
        201,
        202,
        203,
        204,
        205,
        206,
        207,
        208,
        210,
        211,
        212,
        213,
        198,
        200,
        195,
        222,
        219,
        221,
        223,
        217,
        216,
        220,
        192,
        209,
        32,
        163,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57,
        58,
        59,
        60,
        61,
        62,
        63,
        64,
        65,
        66,
        67,
        68,
        69,
        70,
        71,
        72,
        73,
        74,
        75,
        76,
        77,
        78,
        79,
        80,
        81,
        82,
        83,
        84,
        85,
        86,
        87,
        88,
        89,
        90,
        91,
        92,
        93,
        94,
        95,
        96,
        97,
        98,
        99,
        100,
        101,
        102,
        103,
        104,
        105,
        106,
        107,
        108,
        109,
        110,
        111,
        112,
        113,
        114,
        115,
        116,
        117,
        118,
        119,
        120,
        121,
        122,
        123,
        124,
        125,
        126,
        127,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        241,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        161,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        238,
        208,
        209,
        230,
        212,
        213,
        228,
        211,
        229,
        216,
        217,
        218,
        219,
        220,
        221,
        222,
        223,
        239,
        224,
        225,
        226,
        227,
        214,
        210,
        236,
        235,
        215,
        232,
        237,
        233,
        231,
        234,
        206,
        176,
        177,
        198,
        180,
        181,
        196,
        179,
        197,
        184,
        185,
        186,
        187,
        188,
        189,
        190,
        191,
        207,
        192,
        193,
        194,
        195,
        182,
        178,
        204,
        203,
        183,
        200,
        205,
        201,
        199,
        202
    ];
    var _cyr_mac = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57,
        58,
        59,
        60,
        61,
        62,
        63,
        64,
        65,
        66,
        67,
        68,
        69,
        70,
        71,
        72,
        73,
        74,
        75,
        76,
        77,
        78,
        79,
        80,
        81,
        82,
        83,
        84,
        85,
        86,
        87,
        88,
        89,
        90,
        91,
        92,
        93,
        94,
        95,
        96,
        97,
        98,
        99,
        100,
        101,
        102,
        103,
        104,
        105,
        106,
        107,
        108,
        109,
        110,
        111,
        112,
        113,
        114,
        115,
        116,
        117,
        118,
        119,
        120,
        121,
        122,
        123,
        124,
        125,
        126,
        127,
        225,
        226,
        247,
        231,
        228,
        229,
        246,
        250,
        233,
        234,
        235,
        236,
        237,
        238,
        239,
        240,
        242,
        243,
        244,
        245,
        230,
        232,
        227,
        254,
        251,
        253,
        255,
        249,
        248,
        252,
        224,
        241,
        160,
        161,
        162,
        163,
        164,
        165,
        166,
        167,
        168,
        169,
        170,
        171,
        172,
        173,
        174,
        175,
        176,
        177,
        178,
        179,
        180,
        181,
        182,
        183,
        184,
        185,
        186,
        187,
        188,
        189,
        190,
        191,
        128,
        129,
        130,
        131,
        132,
        133,
        134,
        135,
        136,
        137,
        138,
        139,
        140,
        141,
        142,
        143,
        144,
        145,
        146,
        147,
        148,
        149,
        150,
        151,
        152,
        153,
        154,
        155,
        156,
        179,
        163,
        209,
        193,
        194,
        215,
        199,
        196,
        197,
        214,
        218,
        201,
        202,
        203,
        204,
        205,
        206,
        207,
        208,
        210,
        211,
        212,
        213,
        198,
        200,
        195,
        222,
        219,
        221,
        223,
        217,
        216,
        220,
        192,
        255,
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57,
        58,
        59,
        60,
        61,
        62,
        63,
        64,
        65,
        66,
        67,
        68,
        69,
        70,
        71,
        72,
        73,
        74,
        75,
        76,
        77,
        78,
        79,
        80,
        81,
        82,
        83,
        84,
        85,
        86,
        87,
        88,
        89,
        90,
        91,
        92,
        93,
        94,
        95,
        96,
        97,
        98,
        99,
        100,
        101,
        102,
        103,
        104,
        105,
        106,
        107,
        108,
        109,
        110,
        111,
        112,
        113,
        114,
        115,
        116,
        117,
        118,
        119,
        120,
        121,
        122,
        123,
        124,
        125,
        126,
        127,
        192,
        193,
        194,
        195,
        196,
        197,
        198,
        199,
        200,
        201,
        202,
        203,
        204,
        205,
        206,
        207,
        208,
        209,
        210,
        211,
        212,
        213,
        214,
        215,
        216,
        217,
        218,
        219,
        220,
        221,
        222,
        223,
        160,
        161,
        162,
        222,
        164,
        165,
        166,
        167,
        168,
        169,
        170,
        171,
        172,
        173,
        174,
        175,
        176,
        177,
        178,
        221,
        180,
        181,
        182,
        183,
        184,
        185,
        186,
        187,
        188,
        189,
        190,
        191,
        254,
        224,
        225,
        246,
        228,
        229,
        244,
        227,
        245,
        232,
        233,
        234,
        235,
        236,
        237,
        238,
        239,
        223,
        240,
        241,
        242,
        243,
        230,
        226,
        252,
        251,
        231,
        248,
        253,
        249,
        247,
        250,
        158,
        128,
        129,
        150,
        132,
        133,
        148,
        131,
        149,
        136,
        137,
        138,
        139,
        140,
        141,
        142,
        143,
        159,
        144,
        145,
        146,
        147,
        134,
        130,
        156,
        155,
        135,
        152,
        157,
        153,
        151,
        154
    ];
    var from_table = null;
    var to_table = null;
    var tmp;
    var i = 0;
    var retStr = '';
    const v4295 = from.toUpperCase();
    switch (v4295) {
    case 'W':
        from_table = _cyr_win1251;
        break;
    case 'A':
    case 'D':
        from_table = _cyr_cp866;
        break;
    case 'I':
        from_table = _cyr_iso88595;
        break;
    case 'M':
        from_table = _cyr_mac;
        break;
    case 'K':
        break;
    default:
        const v4296 = 'Unknown source charset: ' + from;
        throw v4296;
    }
    const v4297 = to.toUpperCase();
    switch (v4297) {
    case 'W':
        to_table = _cyr_win1251;
        break;
    case 'A':
    case 'D':
        to_table = _cyr_cp866;
        break;
    case 'I':
        to_table = _cyr_iso88595;
        break;
    case 'M':
        to_table = _cyr_mac;
        break;
    case 'K':
        break;
    default:
        const v4298 = 'Unknown destination charset: ' + to;
        throw v4298;
    }
    const v4299 = !str;
    if (v4299) {
        return str;
    }
    (i = 0)
    const v4300 = str.length;
    let v4301 = i < v4300;
    while (v4301) {
        const v4303 = from_table === null;
        const v4304 = str.charAt(i);
        const v4305 = str.charAt(i);
        const v4306 = v4305.charCodeAt(0);
        const v4307 = from_table[v4306];
        const v4308 = String.fromCharCode(v4307);
        if (v4303) {
            tmp = v4304;
        } else {
            tmp = v4308;
        }
        const v4309 = to_table === null;
        const v4310 = tmp.charCodeAt(0);
        const v4311 = v4310 + 256;
        const v4312 = to_table[v4311];
        const v4313 = String.fromCharCode(v4312);
        if (v4309) {
            retStr = tmp;
        } else {
            retStr = v4313;
        }
        const v4302 = i++;
        v4301 = i < v4300;
    }
    return retStr;
};
exports.convert_cyr_string = v4314;
const v4350 = function (str, mode) {
    var result = {};
    var resultArr = [];
    var i;
    const v4315 = '' + str;
    const v4316 = v4315.split('');
    const v4317 = v4316.sort();
    const v4318 = v4317.join('');
    str = v4318.match(/(.)\1*/g);
    const v4319 = mode & 1;
    const v4320 = v4319 == 0;
    if (v4320) {
        i = 0
        let v4321 = i != 256;
        while (v4321) {
            result[i] = 0;
            const v4322 = i++;
            v4321 = i != 256;
        }
    }
    const v4323 = mode === 2;
    const v4324 = mode === 4;
    const v4325 = v4323 || v4324;
    if (v4325) {
        i = 0
        const v4326 = str.length;
        let v4327 = i != v4326;
        while (v4327) {
            const v4328 = str[i];
            const v4329 = v4328.charCodeAt(0);
            const v4330 = result[v4329];
            const v4331 = delete v4330;
            v4331;
            v4327 = i != v4326;
        }
        for (i in result) {
            const v4332 = mode === 4;
            const v4333 = String.fromCharCode(i);
            let v4334;
            if (v4332) {
                v4334 = v4333;
            } else {
                v4334 = 0;
            }
            result[i] = v4334;
        }
    } else {
        const v4335 = mode === 3;
        if (v4335) {
            i = 0
            const v4336 = str.length;
            let v4337 = i != v4336;
            while (v4337) {
                const v4338 = str[i];
                const v4339 = v4338.slice(0, 1);
                result[i] = v4339;
                v4337 = i != v4336;
            }
        } else {
            i = 0
            const v4340 = str.length;
            let v4341 = i != v4340;
            while (v4341) {
                const v4342 = str[i];
                const v4343 = v4342.charCodeAt(0);
                const v4344 = str[i];
                const v4345 = v4344.length;
                result[v4343] = v4345;
                v4341 = i != v4340;
            }
        }
    }
    const v4346 = mode < 3;
    if (v4346) {
        return result;
    }
    for (i in result) {
        const v4347 = result[i];
        const v4348 = resultArr.push(v4347);
        v4348;
    }
    const v4349 = resultArr.join('');
    return v4349;
};
exports.count_chars = v4350;
const v4397 = function (delimiter, string, limit) {
    const v4351 = arguments.length;
    const v4352 = v4351 < 2;
    const v4353 = typeof delimiter;
    const v4354 = v4353 === 'undefined';
    const v4355 = v4352 || v4354;
    const v4356 = typeof string;
    const v4357 = v4356 === 'undefined';
    const v4358 = v4355 || v4357;
    if (v4358) {
        return null;
    }
    const v4359 = delimiter === '';
    const v4360 = delimiter === false;
    const v4361 = v4359 || v4360;
    const v4362 = delimiter === null;
    const v4363 = v4361 || v4362;
    if (v4363) {
        return false;
    }
    const v4364 = typeof delimiter;
    const v4365 = v4364 === 'function';
    const v4366 = typeof delimiter;
    const v4367 = v4366 === 'object';
    const v4368 = v4365 || v4367;
    const v4369 = typeof string;
    const v4370 = v4369 === 'function';
    const v4371 = v4368 || v4370;
    const v4372 = typeof string;
    const v4373 = v4372 === 'object';
    const v4374 = v4371 || v4373;
    if (v4374) {
        const v4375 = {};
        v4375[0] = '';
        return v4375;
    }
    const v4376 = delimiter === true;
    if (v4376) {
        delimiter = '1';
    }
    delimiter += '';
    string += '';
    var s = string.split(delimiter);
    const v4377 = typeof limit;
    const v4378 = v4377 === 'undefined';
    if (v4378) {
        return s;
    }
    const v4379 = limit === 0;
    if (v4379) {
        limit = 1;
    }
    const v4380 = limit > 0;
    if (v4380) {
        const v4381 = s.length;
        const v4382 = limit >= v4381;
        if (v4382) {
            return s;
        }
        const v4383 = limit - 1;
        const v4384 = s.slice(0, v4383);
        const v4385 = limit - 1;
        const v4386 = s.slice(v4385);
        const v4387 = v4386.join(delimiter);
        const v4388 = [v4387];
        const v4389 = v4384.concat(v4388);
        return v4389;
    }
    const v4390 = -limit;
    const v4391 = s.length;
    const v4392 = v4390 >= v4391;
    if (v4392) {
        const v4393 = [];
        return v4393;
    }
    const v4394 = s.length;
    const v4395 = v4394 + limit;
    const v4396 = s.splice(v4395);
    v4396;
    return s;
};
exports.explode = v4397;
const v4420 = function (table, quote_style) {
    var entities = {};
    var hash_map = {};
    var decimal;
    var constMappingTable = {};
    var constMappingQuoteStyle = {};
    var useTable = {};
    var useQuoteStyle = {};
    constMappingTable[0] = 'HTML_SPECIALCHARS';
    constMappingTable[1] = 'HTML_ENTITIES';
    constMappingQuoteStyle[0] = 'ENT_NOQUOTES';
    constMappingQuoteStyle[2] = 'ENT_COMPAT';
    constMappingQuoteStyle[3] = 'ENT_QUOTES';
    const v4398 = isNaN(table);
    const v4399 = !v4398;
    const v4400 = constMappingTable[table];
    const v4401 = table.toUpperCase();
    let v4402;
    if (table) {
        v4402 = v4401;
    } else {
        v4402 = 'HTML_SPECIALCHARS';
    }
    if (v4399) {
        useTable = v4400;
    } else {
        useTable = v4402;
    }
    const v4403 = isNaN(quote_style);
    const v4404 = !v4403;
    const v4405 = constMappingQuoteStyle[quote_style];
    const v4406 = quote_style.toUpperCase();
    let v4407;
    if (quote_style) {
        v4407 = v4406;
    } else {
        v4407 = 'ENT_COMPAT';
    }
    if (v4404) {
        useQuoteStyle = v4405;
    } else {
        useQuoteStyle = v4407;
    }
    const v4408 = useTable !== 'HTML_SPECIALCHARS';
    const v4409 = useTable !== 'HTML_ENTITIES';
    const v4410 = v4408 && v4409;
    if (v4410) {
        const v4411 = 'Table: ' + useTable;
        const v4412 = v4411 + ' not supported';
        const v4413 = new Error(v4412);
        throw v4413;
    }
    entities['38'] = '&amp;';
    const v4414 = useTable === 'HTML_ENTITIES';
    if (v4414) {
        entities['160'] = '&nbsp;';
        entities['161'] = '&iexcl;';
        entities['162'] = '&cent;';
        entities['163'] = '&pound;';
        entities['164'] = '&curren;';
        entities['165'] = '&yen;';
        entities['166'] = '&brvbar;';
        entities['167'] = '&sect;';
        entities['168'] = '&uml;';
        entities['169'] = '&copy;';
        entities['170'] = '&ordf;';
        entities['171'] = '&laquo;';
        entities['172'] = '&not;';
        entities['173'] = '&shy;';
        entities['174'] = '&reg;';
        entities['175'] = '&macr;';
        entities['176'] = '&deg;';
        entities['177'] = '&plusmn;';
        entities['178'] = '&sup2;';
        entities['179'] = '&sup3;';
        entities['180'] = '&acute;';
        entities['181'] = '&micro;';
        entities['182'] = '&para;';
        entities['183'] = '&middot;';
        entities['184'] = '&cedil;';
        entities['185'] = '&sup1;';
        entities['186'] = '&ordm;';
        entities['187'] = '&raquo;';
        entities['188'] = '&frac14;';
        entities['189'] = '&frac12;';
        entities['190'] = '&frac34;';
        entities['191'] = '&iquest;';
        entities['192'] = '&Agrave;';
        entities['193'] = '&Aacute;';
        entities['194'] = '&Acirc;';
        entities['195'] = '&Atilde;';
        entities['196'] = '&Auml;';
        entities['197'] = '&Aring;';
        entities['198'] = '&AElig;';
        entities['199'] = '&Ccedil;';
        entities['200'] = '&Egrave;';
        entities['201'] = '&Eacute;';
        entities['202'] = '&Ecirc;';
        entities['203'] = '&Euml;';
        entities['204'] = '&Igrave;';
        entities['205'] = '&Iacute;';
        entities['206'] = '&Icirc;';
        entities['207'] = '&Iuml;';
        entities['208'] = '&ETH;';
        entities['209'] = '&Ntilde;';
        entities['210'] = '&Ograve;';
        entities['211'] = '&Oacute;';
        entities['212'] = '&Ocirc;';
        entities['213'] = '&Otilde;';
        entities['214'] = '&Ouml;';
        entities['215'] = '&times;';
        entities['216'] = '&Oslash;';
        entities['217'] = '&Ugrave;';
        entities['218'] = '&Uacute;';
        entities['219'] = '&Ucirc;';
        entities['220'] = '&Uuml;';
        entities['221'] = '&Yacute;';
        entities['222'] = '&THORN;';
        entities['223'] = '&szlig;';
        entities['224'] = '&agrave;';
        entities['225'] = '&aacute;';
        entities['226'] = '&acirc;';
        entities['227'] = '&atilde;';
        entities['228'] = '&auml;';
        entities['229'] = '&aring;';
        entities['230'] = '&aelig;';
        entities['231'] = '&ccedil;';
        entities['232'] = '&egrave;';
        entities['233'] = '&eacute;';
        entities['234'] = '&ecirc;';
        entities['235'] = '&euml;';
        entities['236'] = '&igrave;';
        entities['237'] = '&iacute;';
        entities['238'] = '&icirc;';
        entities['239'] = '&iuml;';
        entities['240'] = '&eth;';
        entities['241'] = '&ntilde;';
        entities['242'] = '&ograve;';
        entities['243'] = '&oacute;';
        entities['244'] = '&ocirc;';
        entities['245'] = '&otilde;';
        entities['246'] = '&ouml;';
        entities['247'] = '&divide;';
        entities['248'] = '&oslash;';
        entities['249'] = '&ugrave;';
        entities['250'] = '&uacute;';
        entities['251'] = '&ucirc;';
        entities['252'] = '&uuml;';
        entities['253'] = '&yacute;';
        entities['254'] = '&thorn;';
        entities['255'] = '&yuml;';
    }
    const v4415 = useQuoteStyle !== 'ENT_NOQUOTES';
    if (v4415) {
        entities['34'] = '&quot;';
    }
    const v4416 = useQuoteStyle === 'ENT_QUOTES';
    if (v4416) {
        entities['39'] = '&#39;';
    }
    entities['60'] = '&lt;';
    entities['62'] = '&gt;';
    for (decimal in entities) {
        const v4417 = entities.hasOwnProperty(decimal);
        if (v4417) {
            const v4418 = String.fromCharCode(decimal);
            const v4419 = entities[decimal];
            hash_map[v4418] = v4419;
        }
    }
    return hash_map;
};
exports.get_html_translation_table = v4420;
const v4554 = function () {
    const v4421 = typeof module;
    const v4422 = v4421 !== 'undefined';
    const v4423 = module.exports;
    const v4424 = v4422 && v4423;
    const v4425 = typeof global;
    const v4426 = v4425 !== 'undefined';
    const v4427 = v4424 && v4426;
    const v4428 = {};
    const v4429 = v4428.toString;
    const v4430 = v4429.call(global);
    const v4431 = v4430 == '[object global]';
    var isNode = v4427 && v4431;
    if (isNode) {
        const v4432 = Array.prototype;
        const v4433 = v4432.slice;
        var args = v4433.call(arguments);
        const v4434 = args.join(' ');
        const v4435 = console.log(v4434);
        return v4435;
    }
    var arg = '';
    var argc = arguments.length;
    var argv = arguments;
    var i = 0;
    var holder;
    var win = this.window;
    var d = win.document;
    var ns_xhtml = 'http://www.w3.org/1999/xhtml';
    var ns_xul = 'http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul';
    var stringToDOM = function (str, parent, ns, container) {
        var extraNSs = '';
        const v4436 = ns === ns_xul;
        if (v4436) {
            const v4437 = ' xmlns:html="' + ns_xhtml;
            extraNSs = v4437 + '"';
        }
        const v4438 = '<' + container;
        const v4439 = v4438 + ' xmlns="';
        const v4440 = v4439 + ns;
        const v4441 = v4440 + '"';
        const v4442 = v4441 + extraNSs;
        const v4443 = v4442 + '>';
        const v4444 = v4443 + str;
        const v4445 = v4444 + '</';
        const v4446 = v4445 + container;
        var stringContainer = v4446 + '>';
        var dils = win.DOMImplementationLS;
        var dp = win.DOMParser;
        var ax = win.ActiveXObject;
        const v4447 = dils.createLSInput;
        const v4448 = dils && v4447;
        const v4449 = dils.createLSParser;
        const v4450 = v4448 && v4449;
        if (v4450) {
            var lsInput = dils.createLSInput();
            lsInput.stringData = stringContainer;
            var lsParser = dils.createLSParser(1, null);
            const v4451 = lsParser.parse(lsInput);
            const v4452 = v4451.firstChild;
            return v4452;
        } else {
            if (dp) {
                try {
                    const v4453 = new dp();
                    var fc = v4453.parseFromString(stringContainer, 'text/xml');
                    const v4454 = fc.documentElement;
                    const v4455 = fc && v4454;
                    const v4456 = fc.documentElement;
                    const v4457 = v4456.localName;
                    const v4458 = v4457 !== 'parsererror';
                    const v4459 = v4455 && v4458;
                    const v4460 = fc.documentElement;
                    const v4461 = v4460.namespaceURI;
                    const v4462 = v4461 !== 'http://www.mozilla.org/newlayout/xml/parsererror.xml';
                    const v4463 = v4459 && v4462;
                    if (v4463) {
                        const v4464 = fc.documentElement;
                        const v4465 = v4464.firstChild;
                        return v4465;
                    }
                } catch (e) {
                }
            } else {
                if (ax) {
                    var axo = new ax('MSXML2.DOMDocument');
                    const v4466 = axo.loadXML(str);
                    v4466;
                    const v4467 = axo.documentElement;
                    return v4467;
                }
            }
        }
        const v4468 = d.createElementNS;
        const v4469 = d.documentElement;
        const v4470 = v4469.namespaceURI;
        const v4471 = d.documentElement;
        const v4472 = v4471.nodeName;
        const v4473 = v4472.toLowerCase();
        const v4474 = v4473 !== 'html';
        const v4475 = v4470 || v4474;
        const v4476 = d.contentType;
        const v4477 = d.contentType;
        const v4478 = v4477 !== 'text/html';
        const v4479 = v4476 && v4478;
        const v4480 = v4475 || v4479;
        const v4481 = v4468 && v4480;
        if (v4481) {
            holder = d.createElementNS(ns, container);
        } else {
            holder = d.createElement(container);
        }
        holder.innerHTML = str;
        let v4482 = holder.firstChild;
        while (v4482) {
            const v4483 = holder.firstChild;
            const v4484 = parent.appendChild(v4483);
            v4484;
            v4482 = holder.firstChild;
        }
        return false;
    };
    var ieFix = function (node) {
        const v4485 = node.nodeType;
        const v4486 = v4485 === 1;
        if (v4486) {
            const v4487 = node.nodeName;
            var newNode = d.createElement(v4487);
            var i;
            var len;
            const v4488 = node.attributes;
            const v4489 = node.attributes;
            const v4490 = v4489.length;
            const v4491 = v4490 > 0;
            const v4492 = v4488 && v4491;
            if (v4492) {
                const v4493 = node.attributes;
                let v4494 = i < len;
                while (v4494) {
                    const v4496 = node.attributes;
                    const v4497 = v4496[i];
                    const v4498 = v4497.nodeName;
                    const v4499 = node.attributes;
                    const v4500 = v4499[i];
                    const v4501 = v4500.nodeName;
                    const v4502 = node.getAttribute(v4501);
                    const v4503 = newNode.setAttribute(v4498, v4502);
                    v4503;
                    const v4495 = i++;
                    v4494 = i < len;
                }
            }
            const v4504 = node.childNodes;
            const v4505 = node.childNodes;
            const v4506 = v4505.length;
            const v4507 = v4506 > 0;
            const v4508 = v4504 && v4507;
            if (v4508) {
                const v4509 = node.childNodes;
                let v4510 = i < len;
                while (v4510) {
                    const v4512 = node.childNodes;
                    const v4513 = v4512[i];
                    const v4514 = ieFix(v4513);
                    const v4515 = newNode.appendChild(v4514);
                    v4515;
                    const v4511 = i++;
                    v4510 = i < len;
                }
            }
            return newNode;
        } else {
            const v4516 = node.nodeValue;
            const v4517 = d.createTextNode(v4516);
            return v4517;
        }
    };
    var replacer = function (s, m1, m2) {
        const v4518 = m1 !== '\\';
        if (v4518) {
            const v4519 = eval(m2);
            const v4520 = m1 + v4519;
            return v4520;
        } else {
            return s;
        }
    };
    const v4521 = this.php_js;
    const v4522 = {};
    this.php_js = v4521 || v4522;
    var phpjs = this.php_js;
    var ini = phpjs.ini;
    var obs = phpjs.obs;
    (i = 0)
    let v4523 = i < argc;
    while (v4523) {
        arg = argv[i];
        const v4525 = ini['phpjs.echo_embedded_vars'];
        const v4526 = ini && v4525;
        if (v4526) {
            arg = arg.replace(/(.?)\{?\$(\w*?\}|\w*)/g, replacer);
        }
        const v4527 = phpjs.flushing;
        const v4528 = !v4527;
        const v4529 = v4528 && obs;
        const v4530 = obs.length;
        const v4531 = v4529 && v4530;
        if (v4531) {
            const v4532 = obs.length;
            const v4533 = v4532 - 1;
            const v4534 = obs[v4533];
            v4534.buffer += arg;
            continue;
        }
        const v4535 = d.appendChild;
        if (v4535) {
            const v4536 = d.body;
            if (v4536) {
                const v4537 = win.navigator;
                const v4538 = v4537.appName;
                const v4539 = v4538 === 'Microsoft Internet Explorer';
                if (v4539) {
                    const v4540 = d.body;
                    const v4541 = ieFix(arg);
                    const v4542 = stringToDOM(v4541);
                    const v4543 = v4540.appendChild(v4542);
                    v4543;
                } else {
                    const v4544 = d.body;
                    const v4545 = stringToDOM(arg, v4544, ns_xhtml, 'div');
                    var unappendedLeft = v4545.cloneNode(true);
                    if (unappendedLeft) {
                        const v4546 = d.body;
                        const v4547 = v4546.appendChild(unappendedLeft);
                        v4547;
                    }
                }
            } else {
                const v4548 = d.documentElement;
                const v4549 = d.documentElement;
                const v4550 = stringToDOM(arg, v4549, ns_xul, 'description');
                const v4551 = v4548.appendChild(v4550);
                v4551;
            }
        } else {
            const v4552 = d.write;
            if (v4552) {
                const v4553 = d.write(arg);
                v4553;
            }
        }
        const v4524 = i++;
        v4523 = i < argc;
    }
};
exports.echo = v4554;
const v4578 = function (string, quote_style, charset, double_encode) {
    var optTemp = 0;
    var i = 0;
    var noquotes = false;
    const v4555 = typeof quote_style;
    const v4556 = v4555 === 'undefined';
    const v4557 = quote_style === null;
    const v4558 = v4556 || v4557;
    if (v4558) {
        quote_style = 2;
    }
    string = string.toString();
    const v4559 = double_encode !== false;
    if (v4559) {
        string = string.replace(/&/g, '&amp;');
    }
    const v4560 = string.replace(/</g, '&lt;');
    string = v4560.replace(/>/g, '&gt;');
    var OPTS = {};
    OPTS['ENT_NOQUOTES'] = 0;
    OPTS['ENT_HTML_QUOTE_SINGLE'] = 1;
    OPTS['ENT_HTML_QUOTE_DOUBLE'] = 2;
    OPTS['ENT_COMPAT'] = 2;
    OPTS['ENT_QUOTES'] = 3;
    OPTS['ENT_IGNORE'] = 4;
    const v4561 = quote_style === 0;
    if (v4561) {
        noquotes = true;
    }
    const v4562 = typeof quote_style;
    const v4563 = v4562 !== 'number';
    if (v4563) {
        const v4564 = [];
        quote_style = v4564.concat(quote_style);
        i = 0
        const v4565 = quote_style.length;
        let v4566 = i < v4565;
        while (v4566) {
            const v4568 = quote_style[i];
            const v4569 = OPTS[v4568];
            const v4570 = v4569 === 0;
            if (v4570) {
                noquotes = true;
            } else {
                const v4571 = quote_style[i];
                const v4572 = OPTS[v4571];
                if (v4572) {
                    const v4573 = quote_style[i];
                    const v4574 = OPTS[v4573];
                    optTemp = optTemp | v4574;
                }
            }
            const v4567 = i++;
            v4566 = i < v4565;
        }
        quote_style = optTemp;
    }
    const v4575 = OPTS.ENT_HTML_QUOTE_SINGLE;
    const v4576 = quote_style & v4575;
    if (v4576) {
        string = string.replace(/'/g, '&#039;');
    }
    const v4577 = !noquotes;
    if (v4577) {
        string = string.replace(/"/g, '&quot;');
    }
    return string;
};
exports.htmlspecialchars = v4578;
const v4600 = function (string, quote_style) {
    var optTemp = 0;
    var i = 0;
    var noquotes = false;
    const v4579 = typeof quote_style;
    const v4580 = v4579 === 'undefined';
    if (v4580) {
        quote_style = 2;
    }
    const v4581 = string.toString();
    const v4582 = v4581.replace(/&lt;/g, '<');
    string = v4582.replace(/&gt;/g, '>');
    var OPTS = {};
    OPTS['ENT_NOQUOTES'] = 0;
    OPTS['ENT_HTML_QUOTE_SINGLE'] = 1;
    OPTS['ENT_HTML_QUOTE_DOUBLE'] = 2;
    OPTS['ENT_COMPAT'] = 2;
    OPTS['ENT_QUOTES'] = 3;
    OPTS['ENT_IGNORE'] = 4;
    const v4583 = quote_style === 0;
    if (v4583) {
        noquotes = true;
    }
    const v4584 = typeof quote_style;
    const v4585 = v4584 !== 'number';
    if (v4585) {
        const v4586 = [];
        quote_style = v4586.concat(quote_style);
        i = 0
        const v4587 = quote_style.length;
        let v4588 = i < v4587;
        while (v4588) {
            const v4590 = quote_style[i];
            const v4591 = OPTS[v4590];
            const v4592 = v4591 === 0;
            if (v4592) {
                noquotes = true;
            } else {
                const v4593 = quote_style[i];
                const v4594 = OPTS[v4593];
                if (v4594) {
                    const v4595 = quote_style[i];
                    const v4596 = OPTS[v4595];
                    optTemp = optTemp | v4596;
                }
            }
            const v4589 = i++;
            v4588 = i < v4587;
        }
        quote_style = optTemp;
    }
    const v4597 = OPTS.ENT_HTML_QUOTE_SINGLE;
    const v4598 = quote_style & v4597;
    if (v4598) {
        string = string.replace(/&#0*39;/g, '\'');
    }
    const v4599 = !noquotes;
    if (v4599) {
        string = string.replace(/&quot;/g, '"');
    }
    string = string.replace(/&amp;/g, '&');
    return string;
};
exports.htmlspecialchars_decode = v4600;
const v4611 = function (glue, pieces) {
    var i = '';
    var retVal = '';
    var tGlue = '';
    const v4601 = arguments.length;
    const v4602 = v4601 === 1;
    if (v4602) {
        pieces = glue;
        glue = '';
    }
    const v4603 = typeof pieces;
    const v4604 = v4603 === 'object';
    if (v4604) {
        const v4605 = Object.prototype;
        const v4606 = v4605.toString;
        const v4607 = v4606.call(pieces);
        const v4608 = v4607 === '[object Array]';
        if (v4608) {
            const v4609 = pieces.join(glue);
            return v4609;
        }
        for (i in pieces) {
            const v4610 = pieces[i];
            retVal += tGlue + v4610;
            tGlue = glue;
        }
        return retVal;
    }
    return pieces;
};
exports.implode = v4611;
const v4615 = function (str) {
    str += '';
    const v4612 = str.charAt(0);
    var f = v4612.toLowerCase();
    const v4613 = str.substr(1);
    const v4614 = f + v4613;
    return v4614;
};
exports.lcfirst = v4615;
const v4640 = function (s1, s2) {
    const v4616 = s1 == s2;
    if (v4616) {
        return 0;
    }
    var s1_len = s1.length;
    var s2_len = s2.length;
    const v4617 = s1_len === 0;
    if (v4617) {
        return s2_len;
    }
    const v4618 = s2_len === 0;
    if (v4618) {
        return s1_len;
    }
    var split = false;
    try {
        const v4619 = '0'[0];
        const v4620 = !v4619;
        split = v4620;
    } catch (e) {
        split = true;
    }
    if (split) {
        s1 = s1.split('');
        s2 = s2.split('');
    }
    const v4621 = s1_len + 1;
    var v0 = new Array(v4621);
    const v4622 = s1_len + 1;
    var v1 = new Array(v4622);
    var s1_idx = 0;
    var s2_idx = 0;
    var cost = 0;
    (s1_idx = 0)
    const v4623 = s1_len + 1;
    let v4624 = s1_idx < v4623;
    while (v4624) {
        v0[s1_idx] = s1_idx;
        const v4625 = s1_idx++;
        v4624 = s1_idx < v4623;
    }
    var char_s1 = '';
    var char_s2 = '';
    (s2_idx = 1)
    let v4626 = s2_idx <= s2_len;
    while (v4626) {
        v1[0] = s2_idx;
        const v4628 = s2_idx - 1;
        char_s2 = s2[v4628];
        s1_idx = 0
        let v4629 = s1_idx < s1_len;
        while (v4629) {
            char_s1 = s1[s1_idx];
            const v4631 = char_s1 == char_s2;
            if (v4631) {
                cost = 0;
            } else {
                cost = 1;
            }
            const v4632 = s1_idx + 1;
            const v4633 = v0[v4632];
            var m_min = v4633 + 1;
            const v4634 = v1[s1_idx];
            var b = v4634 + 1;
            const v4635 = v0[s1_idx];
            var c = v4635 + cost;
            const v4636 = b < m_min;
            if (v4636) {
                m_min = b;
            }
            const v4637 = c < m_min;
            if (v4637) {
                m_min = c;
            }
            const v4638 = s1_idx + 1;
            v1[v4638] = m_min;
            const v4630 = s1_idx++;
            v4629 = s1_idx < s1_len;
        }
        var v_tmp = v0;
        v0 = v1;
        v1 = v_tmp;
        const v4627 = s2_idx++;
        v4626 = s2_idx <= s2_len;
    }
    const v4639 = v0[s1_len];
    return v4639;
};
exports.levenshtein = v4640;
const v4648 = function (str, charlist) {
    const v4641 = !charlist;
    const v4642 = charlist + '';
    const v4643 = v4642.replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '$1');
    if (v4641) {
        charlist = ' \\s\xA0';
    } else {
        charlist = v4643;
    }
    const v4644 = '^[' + charlist;
    const v4645 = v4644 + ']+';
    var re = new RegExp(v4645, 'g');
    const v4646 = str + '';
    const v4647 = v4646.replace(re, '');
    return v4647;
};
exports.ltrim = v4648;
const v4748 = function (word, max_phonemes) {
    const v4649 = typeof word;
    var type = v4649;
    const v4650 = type === 'undefined';
    const v4651 = type === 'object';
    const v4652 = word !== null;
    const v4653 = v4651 && v4652;
    const v4654 = v4650 || v4653;
    if (v4654) {
        return null;
    }
    const v4655 = type === 'number';
    if (v4655) {
        const v4656 = isNaN(word);
        if (v4656) {
            word = 'NAN';
        } else {
            const v4657 = isFinite(word);
            const v4658 = !v4657;
            if (v4658) {
                word = 'INF';
            }
        }
    }
    const v4659 = max_phonemes < 0;
    if (v4659) {
        return false;
    }
    const v4660 = +max_phonemes;
    const v4661 = Math.floor(v4660);
    max_phonemes = v4661 || 0;
    var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var vowel = 'AEIOU';
    var soft = 'EIY';
    const v4662 = '^[^' + alpha;
    const v4663 = v4662 + ']+';
    var leadingNonAlpha = new RegExp(v4663);
    const v4664 = typeof word;
    const v4665 = v4664 === 'string';
    if (v4665) {
        word = word;
    } else {
        word = '';
    }
    const v4666 = word.toUpperCase();
    word = v4666.replace(leadingNonAlpha, '');
    const v4667 = !word;
    if (v4667) {
        return '';
    }
    var is = function (p, c) {
        const v4668 = c !== '';
        const v4669 = p.indexOf(c);
        const v4670 = -1;
        const v4671 = v4669 !== v4670;
        const v4672 = v4668 && v4671;
        return v4672;
    };
    var i = 0;
    var cc = word.charAt(0);
    var nc = word.charAt(1);
    var nnc;
    var pc;
    var l = word.length;
    var meta = '';
    var traditional = true;
    switch (cc) {
    case 'A':
        const v4673 = nc === 'E';
        if (v4673) {
            meta = nc;
        } else {
            meta = cc;
        }
        i += 1;
        break;
    case 'G':
    case 'K':
    case 'P':
        const v4674 = nc === 'N';
        if (v4674) {
            meta += nc;
            i += 2;
        }
        break;
    case 'W':
        const v4675 = nc === 'R';
        if (v4675) {
            meta += nc;
            i += 2;
        } else {
            const v4676 = nc === 'H';
            const v4677 = is(vowel, nc);
            const v4678 = v4676 || v4677;
            if (v4678) {
                meta += 'W';
                i += 2;
            }
        }
        break;
    case 'X':
        meta += 'S';
        i += 1;
        break;
    case 'E':
    case 'I':
    case 'O':
    case 'U':
        meta += cc;
        const v4679 = i++;
        v4679;
        break;
    }
    const v4680 = i < l;
    const v4681 = max_phonemes === 0;
    const v4682 = meta.length;
    const v4683 = v4682 < max_phonemes;
    const v4684 = v4681 || v4683;
    let v4685 = v4680 && v4684;
    while (v4685) {
        cc = word.charAt(i);
        const v4686 = i + 1;
        nc = word.charAt(v4686);
        const v4687 = i - 1;
        pc = word.charAt(v4687);
        const v4688 = i + 2;
        nnc = word.charAt(v4688);
        const v4689 = cc === pc;
        const v4690 = cc !== 'C';
        const v4691 = v4689 && v4690;
        if (v4691) {
            continue;
        }
        switch (cc) {
        case 'B':
            const v4692 = pc !== 'M';
            if (v4692) {
                meta += cc;
            }
            break;
        case 'C':
            const v4693 = is(soft, nc);
            if (v4693) {
                const v4694 = nc === 'I';
                const v4695 = nnc === 'A';
                const v4696 = v4694 && v4695;
                if (v4696) {
                    meta += 'X';
                } else {
                    const v4697 = pc !== 'S';
                    if (v4697) {
                        meta += 'S';
                    }
                }
            } else {
                const v4698 = nc === 'H';
                if (v4698) {
                    const v4699 = !traditional;
                    const v4700 = nnc === 'R';
                    const v4701 = pc === 'S';
                    const v4702 = v4700 || v4701;
                    const v4703 = v4699 && v4702;
                    if (v4703) {
                        meta = 'K';
                    } else {
                        meta = 'X';
                    }
                    i += 1;
                } else {
                    meta += 'K';
                }
            }
            break;
        case 'D':
            const v4704 = nc === 'G';
            const v4705 = is(soft, nnc);
            const v4706 = v4704 && v4705;
            if (v4706) {
                meta += 'J';
                i += 1;
            } else {
                meta += 'T';
            }
            break;
        case 'G':
            const v4707 = nc === 'H';
            if (v4707) {
                const v4708 = i - 3;
                const v4709 = word.charAt(v4708);
                const v4710 = is('BDH', v4709);
                const v4711 = i - 4;
                const v4712 = word.charAt(v4711);
                const v4713 = v4712 === 'H';
                const v4714 = v4710 || v4713;
                const v4715 = !v4714;
                if (v4715) {
                    meta += 'F';
                    i += 1;
                }
            } else {
                const v4716 = nc === 'N';
                if (v4716) {
                    const v4717 = is(alpha, nnc);
                    const v4718 = i + 1;
                    const v4719 = word.substr(v4718, 3);
                    const v4720 = v4719 !== 'NED';
                    const v4721 = v4717 && v4720;
                    if (v4721) {
                        meta += 'K';
                    }
                } else {
                    const v4722 = is(soft, nc);
                    const v4723 = pc !== 'G';
                    const v4724 = v4722 && v4723;
                    if (v4724) {
                        meta += 'J';
                    } else {
                        meta += 'K';
                    }
                }
            }
            break;
        case 'H':
            const v4725 = is(vowel, nc);
            const v4726 = is('CGPST', pc);
            const v4727 = !v4726;
            const v4728 = v4725 && v4727;
            if (v4728) {
                meta += cc;
            }
            break;
        case 'K':
            const v4729 = pc !== 'C';
            if (v4729) {
                meta += 'K';
            }
            break;
        case 'P':
            const v4730 = nc === 'H';
            if (v4730) {
                meta = 'F';
            } else {
                meta = cc;
            }
            break;
        case 'Q':
            meta += 'K';
            break;
        case 'S':
            const v4731 = nc === 'I';
            const v4732 = is('AO', nnc);
            const v4733 = v4731 && v4732;
            if (v4733) {
                meta += 'X';
            } else {
                const v4734 = nc === 'H';
                if (v4734) {
                    meta += 'X';
                    i += 1;
                } else {
                    const v4735 = !traditional;
                    const v4736 = i + 1;
                    const v4737 = word.substr(v4736, 3);
                    const v4738 = v4737 === 'CHW';
                    const v4739 = v4735 && v4738;
                    if (v4739) {
                        meta += 'X';
                        i += 2;
                    } else {
                        meta += 'S';
                    }
                }
            }
            break;
        case 'T':
            const v4740 = nc === 'I';
            const v4741 = is('AO', nnc);
            const v4742 = v4740 && v4741;
            if (v4742) {
                meta += 'X';
            } else {
                const v4743 = nc === 'H';
                if (v4743) {
                    meta += '0';
                    i += 1;
                } else {
                    const v4744 = i + 1;
                    const v4745 = word.substr(v4744, 2);
                    const v4746 = v4745 !== 'CH';
                    if (v4746) {
                        meta += 'T';
                    }
                }
            }
            break;
        case 'V':
            meta += 'F';
            break;
        case 'W':
        case 'Y':
            const v4747 = is(vowel, nc);
            if (v4747) {
                meta += cc;
            }
            break;
        case 'X':
            meta += 'KS';
            break;
        case 'Z':
            meta += 'S';
            break;
        case 'F':
        case 'J':
        case 'L':
        case 'M':
        case 'N':
        case 'R':
            meta += cc;
            break;
        }
        v4685 = v4680 && v4684;
    }
    return meta;
};
exports.metaphone = v4748;
const v4757 = function (str, is_xhtml) {
    let breakTag;
    const v4749 = typeof is_xhtml;
    const v4750 = v4749 === 'undefined';
    const v4751 = is_xhtml || v4750;
    const v4752 = '<br ' + '/>';
    if (v4751) {
        breakTag = v4752;
    } else {
        breakTag = '<br>';
    }
    const v4753 = str + '';
    const v4754 = '$1' + breakTag;
    const v4755 = v4754 + '$2';
    const v4756 = v4753.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, v4755);
    return v4756;
};
exports.nl2br = v4757;
const v4797 = function (number, decimals, dec_point, thousands_sep) {
    const v4758 = number + '';
    number = v4758.replace(/[^0-9+\-Ee.]/g, '');
    let n;
    const v4759 = +number;
    const v4760 = isFinite(v4759);
    const v4761 = !v4760;
    const v4762 = +number;
    if (v4761) {
        n = 0;
    } else {
        n = v4762;
    }
    let prec;
    const v4763 = +decimals;
    const v4764 = isFinite(v4763);
    const v4765 = !v4764;
    const v4766 = Math.abs(decimals);
    if (v4765) {
        prec = 0;
    } else {
        prec = v4766;
    }
    let sep;
    const v4767 = typeof thousands_sep;
    const v4768 = v4767 === 'undefined';
    if (v4768) {
        sep = ',';
    } else {
        sep = thousands_sep;
    }
    let dec;
    const v4769 = typeof dec_point;
    const v4770 = v4769 === 'undefined';
    if (v4770) {
        dec = '.';
    } else {
        dec = dec_point;
    }
    var s = '';
    var toFixedFix = function (n, prec) {
        var k = Math.pow(10, prec);
        const v4771 = n * k;
        const v4772 = Math.round(v4771);
        const v4773 = v4772 / k;
        const v4774 = v4773.toFixed(prec);
        const v4775 = '' + v4774;
        return v4775;
    };
    const v4776 = toFixedFix(n, prec);
    const v4777 = Math.round(n);
    const v4778 = '' + v4777;
    let v4779;
    if (prec) {
        v4779 = v4776;
    } else {
        v4779 = v4778;
    }
    s = v4779.split('.');
    const v4780 = s[0];
    const v4781 = v4780.length;
    const v4782 = v4781 > 3;
    if (v4782) {
        const v4783 = s[0];
        const v4784 = v4783.replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
        s[0] = v4784;
    }
    const v4785 = s[1];
    const v4786 = v4785 || '';
    const v4787 = v4786.length;
    const v4788 = v4787 < prec;
    if (v4788) {
        const v4789 = s[1];
        s[1] = v4789 || '';
        const v4790 = s[1];
        const v4791 = v4790.length;
        const v4792 = prec - v4791;
        const v4793 = v4792 + 1;
        const v4794 = new Array(v4793);
        const v4795 = v4794.join('0');
        s[1] += v4795;
    }
    const v4796 = s.join(dec);
    return v4796;
};
exports.number_format = v4797;
const v4811 = function (string) {
    var str = string + '';
    var code = str.charCodeAt(0);
    const v4798 = 55296 <= code;
    const v4799 = code <= 56319;
    const v4800 = v4798 && v4799;
    if (v4800) {
        var hi = code;
        const v4801 = str.length;
        const v4802 = v4801 === 1;
        if (v4802) {
            return code;
        }
        var low = str.charCodeAt(1);
        const v4803 = hi - 55296;
        const v4804 = v4803 * 1024;
        const v4805 = low - 56320;
        const v4806 = v4804 + v4805;
        const v4807 = v4806 + 65536;
        return v4807;
    }
    const v4808 = 56320 <= code;
    const v4809 = code <= 57343;
    const v4810 = v4808 && v4809;
    if (v4810) {
        return code;
    }
    return code;
};
exports.ord = v4811;
const v4895 = function (str, array) {
    const v4812 = String(str);
    const v4813 = v4812.replace(/^&/, '');
    const v4814 = v4813.replace(/&$/, '');
    var strArr = v4814.split('&');
    var sal = strArr.length;
    var i;
    var j;
    var ct;
    var p;
    var lastObj;
    var obj;
    var lastIter;
    var undef;
    var chr;
    var tmp;
    var key;
    var value;
    var postLeftBracketPos;
    var keys;
    var keysLen;
    var fixStr = function (str) {
        const v4815 = str.replace(/\+/g, '%20');
        const v4816 = decodeURIComponent(v4815);
        return v4816;
    };
    const v4817 = !array;
    if (v4817) {
        array = this.window;
    }
    (i = 0)
    let v4818 = i < sal;
    while (v4818) {
        const v4820 = strArr[i];
        tmp = v4820.split('=');
        const v4821 = tmp[0];
        key = fixStr(v4821);
        const v4822 = tmp.length;
        const v4823 = v4822 < 2;
        const v4824 = tmp[1];
        const v4825 = fixStr(v4824);
        if (v4823) {
            value = '';
        } else {
            value = v4825;
        }
        const v4826 = key.charAt(0);
        let v4827 = v4826 === ' ';
        while (v4827) {
            key = key.slice(1);
            v4827 = v4826 === ' ';
        }
        const v4828 = key.indexOf('\0');
        const v4829 = -1;
        const v4830 = v4828 > v4829;
        if (v4830) {
            const v4831 = key.indexOf('\0');
            key = key.slice(0, v4831);
        }
        const v4832 = key.charAt(0);
        const v4833 = v4832 !== '[';
        const v4834 = key && v4833;
        if (v4834) {
            keys = [];
            postLeftBracketPos = 0;
            j = 0
            const v4835 = key.length;
            let v4836 = j < v4835;
            while (v4836) {
                const v4838 = key.charAt(j);
                const v4839 = v4838 === '[';
                const v4840 = !postLeftBracketPos;
                const v4841 = v4839 && v4840;
                if (v4841) {
                    postLeftBracketPos = j + 1;
                } else {
                    const v4842 = key.charAt(j);
                    const v4843 = v4842 === ']';
                    if (v4843) {
                        if (postLeftBracketPos) {
                            const v4844 = keys.length;
                            const v4845 = !v4844;
                            if (v4845) {
                                const v4846 = postLeftBracketPos - 1;
                                const v4847 = key.slice(0, v4846);
                                const v4848 = keys.push(v4847);
                                v4848;
                            }
                            const v4849 = j - postLeftBracketPos;
                            const v4850 = key.substr(postLeftBracketPos, v4849);
                            const v4851 = keys.push(v4850);
                            v4851;
                            postLeftBracketPos = 0;
                            const v4852 = j + 1;
                            const v4853 = key.charAt(v4852);
                            const v4854 = v4853 !== '[';
                            if (v4854) {
                                break;
                            }
                        }
                    }
                }
                const v4837 = j++;
                v4836 = j < v4835;
            }
            const v4855 = keys.length;
            const v4856 = !v4855;
            if (v4856) {
                keys = [key];
            }
            j = 0
            const v4857 = keys[0];
            const v4858 = v4857.length;
            let v4859 = j < v4858;
            while (v4859) {
                const v4861 = keys[0];
                chr = v4861.charAt(j);
                const v4862 = chr === ' ';
                const v4863 = chr === '.';
                const v4864 = v4862 || v4863;
                const v4865 = chr === '[';
                const v4866 = v4864 || v4865;
                if (v4866) {
                    const v4867 = keys[0];
                    const v4868 = v4867.substr(0, j);
                    const v4869 = v4868 + '_';
                    const v4870 = keys[0];
                    const v4871 = j + 1;
                    const v4872 = v4870.substr(v4871);
                    keys[0] = v4869 + v4872;
                }
                const v4873 = chr === '[';
                if (v4873) {
                    break;
                }
                const v4860 = j++;
                v4859 = j < v4858;
            }
            obj = array;
            (j = 0, keysLen = keys.length)
            let v4874 = j < keysLen;
            while (v4874) {
                const v4876 = keys[j];
                const v4877 = v4876.replace(/^['"]/, '');
                key = v4877.replace(/['"]$/, '');
                const v4878 = keys.length;
                const v4879 = v4878 - 1;
                lastIter = j !== v4879;
                lastObj = obj;
                const v4880 = key !== '';
                const v4881 = key !== ' ';
                const v4882 = v4880 && v4881;
                const v4883 = j === 0;
                const v4884 = v4882 || v4883;
                if (v4884) {
                    const v4885 = obj[key];
                    const v4886 = v4885 === undef;
                    if (v4886) {
                        const v4887 = {};
                        obj[key] = v4887;
                    }
                    obj = obj[key];
                } else {
                    const v4888 = -1;
                    ct = v4888;
                    for (p in obj) {
                        const v4889 = obj.hasOwnProperty(p);
                        if (v4889) {
                            const v4890 = +p;
                            const v4891 = v4890 > ct;
                            const v4892 = p.match(/^\d+$/g);
                            const v4893 = v4891 && v4892;
                            if (v4893) {
                                const v4894 = +p;
                                ct = v4894;
                            }
                        }
                    }
                    key = ct + 1;
                }
                const v4875 = j++;
                v4874 = j < keysLen;
            }
            lastObj[key] = value;
        }
        const v4819 = i++;
        v4818 = i < sal;
    }
};
exports.parse_str = v4895;
const v4900 = function (str) {
    var RFC2045Decode1 = /=\r\n/gm;
    var RFC2045Decode2IN = /=([0-9A-F]{2})/gim;
    var RFC2045Decode2OUT = function (sMatch, sHex) {
        const v4896 = parseInt(sHex, 16);
        const v4897 = String.fromCharCode(v4896);
        return v4897;
    };
    const v4898 = str.replace(RFC2045Decode1, '');
    const v4899 = v4898.replace(RFC2045Decode2IN, RFC2045Decode2OUT);
    return v4899;
};
exports.quoted_printable_decode = v4900;
const v4921 = function (str) {
    var hexChars = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F'
    ];
    var RFC2045Encode1IN = / \r\n|\r\n|[^!-<>-~ ]/gm;
    var RFC2045Encode1OUT = function (sMatch) {
        const v4901 = sMatch.length;
        const v4902 = v4901 > 1;
        if (v4902) {
            const v4903 = sMatch.replace(' ', '=20');
            return v4903;
        }
        var chr = sMatch.charCodeAt(0);
        const v4904 = chr >>> 4;
        const v4905 = v4904 & 15;
        const v4906 = hexChars[v4905];
        const v4907 = '=' + v4906;
        const v4908 = chr & 15;
        const v4909 = hexChars[v4908];
        const v4910 = v4907 + v4909;
        return v4910;
    };
    const v4916 = function (sMatch) {
        const v4911 = sMatch.length;
        const v4912 = v4911 - 2;
        const v4913 = sMatch.substr(v4912);
        const v4914 = v4913 === '\r\n';
        if (v4914) {
            return sMatch;
        }
        const v4915 = sMatch + '=\r\n';
        return v4915;
    };
    RFC2045Encode2IN = /.{1,72}(?!\r\n)[^=]{0,3}/g, RFC2045Encode2OUT = v4916;
    const v4917 = str.replace(RFC2045Encode1IN, RFC2045Encode1OUT);
    str = v4917.replace(RFC2045Encode2IN, RFC2045Encode2OUT);
    const v4918 = str.length;
    const v4919 = v4918 - 3;
    const v4920 = str.substr(0, v4919);
    return v4920;
};
exports.quoted_printable_encode = v4921;
const v4924 = function (str) {
    const v4922 = str + '';
    const v4923 = v4922.replace(/([\.\\\+\*\?\[\^\]\$\(\)])/g, '\\$1');
    return v4923;
};
exports.quotemeta = v4924;
const v4932 = function (str, charlist) {
    const v4925 = !charlist;
    const v4926 = charlist + '';
    const v4927 = v4926.replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '\\$1');
    if (v4925) {
        charlist = ' \\s\xA0';
    } else {
        charlist = v4927;
    }
    const v4928 = '[' + charlist;
    const v4929 = v4928 + ']+$';
    var re = new RegExp(v4929, 'g');
    const v4930 = str + '';
    const v4931 = v4930.replace(re, '');
    return v4931;
};
exports.rtrim = v4932;
const v4979 = function (first, second, percent) {
    const v4933 = first === null;
    const v4934 = second === null;
    const v4935 = v4933 || v4934;
    const v4936 = typeof first;
    const v4937 = v4936 === 'undefined';
    const v4938 = v4935 || v4937;
    const v4939 = typeof second;
    const v4940 = v4939 === 'undefined';
    const v4941 = v4938 || v4940;
    if (v4941) {
        return 0;
    }
    first += '';
    second += '';
    var pos1 = 0;
    var pos2 = 0;
    var max = 0;
    var firstLength = first.length;
    var secondLength = second.length;
    var p;
    var q;
    var l;
    var sum;
    max = 0;
    (p = 0)
    let v4942 = p < firstLength;
    while (v4942) {
        q = 0
        let v4944 = q < secondLength;
        while (v4944) {
            l = 0
            const v4946 = p + l;
            const v4947 = v4946 < firstLength;
            const v4948 = q + l;
            const v4949 = v4948 < secondLength;
            const v4950 = v4947 && v4949;
            const v4951 = p + l;
            const v4952 = first.charAt(v4951);
            const v4953 = q + l;
            const v4954 = second.charAt(v4953);
            const v4955 = v4952 === v4954;
            let v4956 = v4950 && v4955;
            while (v4956) {
                ;
                const v4957 = l++;
                v4956 = v4950 && v4955;
            }
            const v4958 = l > max;
            if (v4958) {
                max = l;
                pos1 = p;
                pos2 = q;
            }
            const v4945 = q++;
            v4944 = q < secondLength;
        }
        const v4943 = p++;
        v4942 = p < firstLength;
    }
    sum = max;
    if (sum) {
        const v4959 = pos1 && pos2;
        if (v4959) {
            const v4960 = first.substr(0, pos1);
            const v4961 = second.substr(0, pos2);
            sum += this.similar_text(v4960, v4961);
        }
        const v4962 = pos1 + max;
        const v4963 = v4962 < firstLength;
        const v4964 = pos2 + max;
        const v4965 = v4964 < secondLength;
        const v4966 = v4963 && v4965;
        if (v4966) {
            const v4967 = pos1 + max;
            const v4968 = firstLength - pos1;
            const v4969 = v4968 - max;
            const v4970 = first.substr(v4967, v4969);
            const v4971 = pos2 + max;
            const v4972 = secondLength - pos2;
            const v4973 = v4972 - max;
            const v4974 = second.substr(v4971, v4973);
            sum += this.similar_text(v4970, v4974);
        }
    }
    const v4975 = !percent;
    if (v4975) {
        return sum;
    } else {
        const v4976 = sum * 200;
        const v4977 = firstLength + secondLength;
        const v4978 = v4976 / v4977;
        return v4978;
    }
};
exports.similar_text = v4979;
const v4989 = function (str) {
    const v4980 = str + '';
    str = v4980.toUpperCase();
    const v4981 = !str;
    if (v4981) {
        return '';
    }
    var sdx = [
        0,
        0,
        0,
        0
    ];
    var m = {};
    m.B = 1;
    m.F = 1;
    m.P = 1;
    m.V = 1;
    m.C = 2;
    m.G = 2;
    m.J = 2;
    m.K = 2;
    m.Q = 2;
    m.S = 2;
    m.X = 2;
    m.Z = 2;
    m.D = 3;
    m.T = 3;
    m.L = 4;
    m.M = 5;
    m.N = 5;
    m.R = 6;
    var i = 0;
    var j;
    var s = 0;
    var c;
    var p;
    const v4982 = i++;
    const v4983 = s < 4;
    let v4984 = (c = str.charAt(v4982)) && v4983;
    while (v4984) {
        if (j = m[c]) {
            const v4985 = j !== p;
            if (v4985) {
                const v4986 = s++;
                p = j;
                sdx[v4986] = p;
            }
        } else {
            s += i === 1;
            p = 0;
        }
        v4984 = (c = str.charAt(v4982)) && v4983;
    }
    const v4987 = str.charAt(0);
    sdx[0] = v4987;
    const v4988 = sdx.join('');
    return v4988;
};
exports.soundex = v4989;
const v5100 = function () {
    var regex = /%%|%(\d+\$)?([-+\'#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuideEfFgG])/g;
    var a = arguments;
    var i = 0;
    const v4990 = i++;
    var format = a[v4990];
    var pad = function (str, len, chr, leftJustify) {
        const v4991 = !chr;
        if (v4991) {
            chr = ' ';
        }
        let padding;
        const v4992 = str.length;
        const v4993 = v4992 >= len;
        const v4994 = 1 + len;
        const v4995 = str.length;
        const v4996 = v4994 - v4995;
        const v4997 = v4996 >>> 0;
        const v4998 = new Array(v4997);
        const v4999 = v4998.join(chr);
        if (v4993) {
            padding = '';
        } else {
            padding = v4999;
        }
        const v5000 = str + padding;
        const v5001 = padding + str;
        let v5002;
        if (leftJustify) {
            v5002 = v5000;
        } else {
            v5002 = v5001;
        }
        return v5002;
    };
    var justify = function (value, prefix, leftJustify, minWidth, zeroPad, customPadChar) {
        const v5003 = value.length;
        var diff = minWidth - v5003;
        const v5004 = diff > 0;
        if (v5004) {
            const v5005 = !zeroPad;
            const v5006 = leftJustify || v5005;
            if (v5006) {
                value = pad(value, minWidth, customPadChar, leftJustify);
            } else {
                const v5007 = prefix.length;
                const v5008 = value.slice(0, v5007);
                const v5009 = pad('', diff, '0', true);
                const v5010 = v5008 + v5009;
                const v5011 = prefix.length;
                const v5012 = value.slice(v5011);
                value = v5010 + v5012;
            }
        }
        return value;
    };
    var formatBaseX = function (value, base, prefix, leftJustify, minWidth, precision, zeroPad) {
        var number = value >>> 0;
        const v5013 = prefix && number;
        const v5014 = {
            '2': '0b',
            '8': '0',
            '16': '0x'
        };
        const v5015 = v5014[base];
        const v5016 = v5013 && v5015;
        prefix = v5016 || '';
        const v5017 = number.toString(base);
        const v5018 = precision || 0;
        const v5019 = pad(v5017, v5018, '0', false);
        value = prefix + v5019;
        const v5020 = justify(value, prefix, leftJustify, minWidth, zeroPad);
        return v5020;
    };
    var formatString = function (value, leftJustify, minWidth, precision, zeroPad, customPadChar) {
        const v5021 = precision != null;
        if (v5021) {
            value = value.slice(0, precision);
        }
        const v5022 = justify(value, '', leftJustify, minWidth, zeroPad, customPadChar);
        return v5022;
    };
    var doFormat = function (substring, valueIndex, flags, minWidth, _, precision, type) {
        var number;
        var prefix;
        var method;
        var textTransform;
        var value;
        const v5023 = substring === '%%';
        if (v5023) {
            return '%';
        }
        var leftJustify = false;
        var positivePrefix = '';
        var zeroPad = false;
        var prefixBaseX = false;
        var customPadChar = ' ';
        var flagsl = flags.length;
        var j = 0;
        const v5024 = j < flagsl;
        let v5025 = flags && v5024;
        while (v5025) {
            const v5027 = flags.charAt(j);
            switch (v5027) {
            case ' ':
                positivePrefix = ' ';
                break;
            case '+':
                positivePrefix = '+';
                break;
            case '-':
                leftJustify = true;
                break;
            case '\'':
                const v5028 = j + 1;
                customPadChar = flags.charAt(v5028);
                break;
            case '0':
                zeroPad = true;
                customPadChar = '0';
                break;
            case '#':
                prefixBaseX = true;
                break;
            }
            const v5026 = j++;
            v5025 = flags && v5024;
        }
        const v5029 = !minWidth;
        if (v5029) {
            minWidth = 0;
        } else {
            const v5030 = minWidth === '*';
            if (v5030) {
                const v5031 = i++;
                const v5032 = a[v5031];
                const v5033 = +v5032;
                minWidth = v5033;
            } else {
                const v5034 = minWidth.charAt(0);
                const v5035 = v5034 == '*';
                if (v5035) {
                    const v5036 = -1;
                    const v5037 = minWidth.slice(1, v5036);
                    const v5038 = a[v5037];
                    const v5039 = +v5038;
                    minWidth = v5039;
                } else {
                    const v5040 = +minWidth;
                    minWidth = v5040;
                }
            }
        }
        const v5041 = minWidth < 0;
        if (v5041) {
            const v5042 = -minWidth;
            minWidth = v5042;
            leftJustify = true;
        }
        const v5043 = isFinite(minWidth);
        const v5044 = !v5043;
        if (v5044) {
            const v5045 = new Error('sprintf: (minimum-)width must be finite');
            throw v5045;
        }
        const v5046 = !precision;
        if (v5046) {
            const v5047 = 'fFeE'.indexOf(type);
            const v5048 = -1;
            const v5049 = v5047 > v5048;
            const v5050 = type === 'd';
            let v5051;
            if (v5050) {
                v5051 = 0;
            } else {
                v5051 = undefined;
            }
            if (v5049) {
                precision = 6;
            } else {
                precision = v5051;
            }
        } else {
            const v5052 = precision === '*';
            if (v5052) {
                const v5053 = i++;
                const v5054 = a[v5053];
                const v5055 = +v5054;
                precision = v5055;
            } else {
                const v5056 = precision.charAt(0);
                const v5057 = v5056 == '*';
                if (v5057) {
                    const v5058 = -1;
                    const v5059 = precision.slice(1, v5058);
                    const v5060 = a[v5059];
                    const v5061 = +v5060;
                    precision = v5061;
                } else {
                    const v5062 = +precision;
                    precision = v5062;
                }
            }
        }
        const v5063 = -1;
        const v5064 = valueIndex.slice(0, v5063);
        const v5065 = a[v5064];
        const v5066 = i++;
        const v5067 = a[v5066];
        if (valueIndex) {
            value = v5065;
        } else {
            value = v5067;
        }
        switch (type) {
        case 's':
            const v5068 = String(value);
            const v5069 = formatString(v5068, leftJustify, minWidth, precision, zeroPad, customPadChar);
            return v5069;
        case 'c':
            const v5070 = +value;
            const v5071 = String.fromCharCode(v5070);
            const v5072 = formatString(v5071, leftJustify, minWidth, precision, zeroPad);
            return v5072;
        case 'b':
            const v5073 = formatBaseX(value, 2, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
            return v5073;
        case 'o':
            const v5074 = formatBaseX(value, 8, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
            return v5074;
        case 'x':
            const v5075 = formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
            return v5075;
        case 'X':
            const v5076 = formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
            const v5077 = v5076.toUpperCase();
            return v5077;
        case 'u':
            const v5078 = formatBaseX(value, 10, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
            return v5078;
        case 'i':
        case 'd':
            const v5079 = +value;
            number = v5079 || 0;
            const v5080 = number % 1;
            const v5081 = number - v5080;
            number = Math.round(v5081);
            const v5082 = number < 0;
            if (v5082) {
                prefix = '-';
            } else {
                prefix = positivePrefix;
            }
            const v5083 = Math.abs(number);
            const v5084 = String(v5083);
            const v5085 = pad(v5084, precision, '0', false);
            value = prefix + v5085;
            const v5086 = justify(value, prefix, leftJustify, minWidth, zeroPad);
            return v5086;
        case 'e':
        case 'E':
        case 'f':
        case 'F':
        case 'g':
        case 'G':
            const v5087 = +value;
            number = v5087;
            const v5088 = number < 0;
            if (v5088) {
                prefix = '-';
            } else {
                prefix = positivePrefix;
            }
            const v5089 = [
                'toExponential',
                'toFixed',
                'toPrecision'
            ];
            const v5090 = type.toLowerCase();
            const v5091 = 'efg'.indexOf(v5090);
            method = v5089[v5091];
            const v5092 = [
                'toString',
                'toUpperCase'
            ];
            const v5093 = 'eEfFgG'.indexOf(type);
            const v5094 = v5093 % 2;
            textTransform = v5092[v5094];
            const v5095 = Math.abs(number);
            const v5096 = v5095[method](precision);
            value = prefix + v5096;
            const v5097 = justify(value, prefix, leftJustify, minWidth, zeroPad);
            const v5098 = v5097[textTransform]();
            return v5098;
        default:
            return substring;
        }
    };
    const v5099 = format.replace(regex, doFormat);
    return v5099;
};
exports.sprintf = v5100;
const v5214 = function (str, format) {
    var retArr = [];
    var num = 0;
    var _NWS = /\S/;
    var args = arguments;
    var that = this;
    var digit;
    var _setExtraConversionSpecs = function (offset) {
        const v5101 = format.slice(offset);
        var matches = v5101.match(/%[cdeEufgosxX]/g);
        if (matches) {
            var lgth = matches.length;
            let v5102 = lgth--;
            while (v5102) {
                const v5103 = retArr.push(null);
                v5103;
                v5102 = lgth--;
            }
        }
        const v5104 = _finish();
        return v5104;
    };
    var _finish = function () {
        const v5105 = args.length;
        const v5106 = v5105 === 2;
        if (v5106) {
            return retArr;
        }
        var i = 0;
        const v5107 = retArr.length;
        let v5108 = i < v5107;
        while (v5108) {
            const v5110 = that.window;
            const v5111 = i + 2;
            const v5112 = args[v5111];
            const v5113 = retArr[i];
            v5110[v5112] = v5113;
            const v5109 = ++i;
            v5108 = i < v5107;
        }
        return i;
    };
    var _addNext = function (j, regex, cb) {
        if (assign) {
            var remaining = str.slice(j);
            let check;
            const v5114 = remaining.substr(0, width);
            if (width) {
                check = v5114;
            } else {
                check = remaining;
            }
            var match = regex.exec(check);
            const v5115 = digit !== undefined;
            const v5116 = retArr.length;
            let v5117;
            if (v5115) {
                v5117 = digit;
            } else {
                v5117 = v5116;
            }
            const v5118 = cb.apply(null, match);
            const v5119 = match[0];
            let v5120;
            if (cb) {
                v5120 = v5118;
            } else {
                v5120 = v5119;
            }
            let v5121;
            if (match) {
                v5121 = v5120;
            } else {
                v5121 = null;
            }
            retArr[v5117] = v5121;
            var testNull = retArr[v5117];
            const v5122 = testNull === null;
            if (v5122) {
                throw 'No match in string';
            }
            const v5123 = match[0];
            const v5124 = v5123.length;
            const v5125 = j + v5124;
            return v5125;
        }
        return j;
    };
    const v5126 = arguments.length;
    const v5127 = v5126 < 2;
    if (v5127) {
        throw 'Not enough arguments passed to sscanf';
    }
    var i = 0;
    var j = 0;
    const v5128 = format.length;
    let v5129 = i < v5128;
    while (v5129) {
        var width = 0;
        var assign = true;
        const v5131 = format.charAt(i);
        const v5132 = v5131 === '%';
        if (v5132) {
            const v5133 = i + 1;
            const v5134 = format.charAt(v5133);
            const v5135 = v5134 === '%';
            if (v5135) {
                const v5136 = str.charAt(j);
                const v5137 = v5136 === '%';
                if (v5137) {
                    const v5138 = ++i;
                    const v5139 = ++j;
                    v5138, v5139;
                    continue;
                }
                const v5140 = i + 2;
                const v5141 = _setExtraConversionSpecs(v5140);
                return v5141;
            }
            var prePattern = new RegExp('^(?:(\\d+)\\$)?(\\*)?(\\d*)([hlL]?)', 'g');
            const v5142 = i + 1;
            const v5143 = format.slice(v5142);
            var preConvs = prePattern.exec(v5143);
            var tmpDigit = digit;
            const v5144 = preConvs[1];
            const v5145 = v5144 === undefined;
            const v5146 = tmpDigit && v5145;
            if (v5146) {
                throw 'All groups in sscanf() must be expressed as numeric if any have already been used';
            }
            const v5147 = preConvs[1];
            const v5148 = preConvs[1];
            const v5149 = parseInt(v5148, 10);
            const v5150 = v5149 - 1;
            if (v5147) {
                digit = v5150;
            } else {
                digit = undefined;
            }
            const v5151 = preConvs[2];
            const v5152 = !v5151;
            assign = v5152;
            const v5153 = preConvs[3];
            width = parseInt(v5153, 10);
            var sizeCode = preConvs[4];
            i += prePattern.lastIndex;
            if (sizeCode) {
                switch (sizeCode) {
                case 'h':
                case 'l':
                case 'L':
                    break;
                default:
                    throw 'Unexpected size specifier in sscanf()!';
                    break;
                }
            }
            try {
                const v5154 = i + 1;
                const v5155 = format.charAt(v5154);
                switch (v5155) {
                case 'F':
                    break;
                case 'g':
                    break;
                case 'G':
                    break;
                case 'b':
                    break;
                case 'i':
                    const v5161 = function (num, sign, hex, oct, dec) {
                        const v5156 = parseInt(num, 16);
                        const v5157 = parseInt(num, 8);
                        const v5158 = parseInt(num, 10);
                        let v5159;
                        if (oct) {
                            v5159 = v5157;
                        } else {
                            v5159 = v5158;
                        }
                        let v5160;
                        if (hex) {
                            v5160 = v5156;
                        } else {
                            v5160 = v5159;
                        }
                        return v5160;
                    };
                    j = _addNext(j, /([+-])?(?:(?:0x([\da-fA-F]+))|(?:0([0-7]+))|(\d+))/, v5161);
                    break;
                case 'n':
                    const v5162 = digit !== undefined;
                    const v5163 = retArr.length;
                    const v5164 = v5163 - 1;
                    let v5165;
                    if (v5162) {
                        v5165 = digit;
                    } else {
                        v5165 = v5164;
                    }
                    retArr[v5165] = j;
                    break;
                case 'c':
                    const v5166 = width || 1;
                    const v5167 = '.{1,' + v5166;
                    const v5168 = v5167 + '}';
                    const v5169 = new RegExp(v5168);
                    j = _addNext(j, v5169);
                    break;
                case 'D':
                case 'd':
                    const v5179 = function (num, sign, dec) {
                        const v5170 = sign || '';
                        const v5171 = v5170 + dec;
                        var decInt = parseInt(v5171, 10);
                        const v5172 = decInt < 0;
                        if (v5172) {
                            const v5173 = -2147483648;
                            const v5174 = decInt < v5173;
                            const v5175 = -2147483648;
                            let v5176;
                            if (v5174) {
                                v5176 = v5175;
                            } else {
                                v5176 = decInt;
                            }
                            return v5176;
                        } else {
                            const v5177 = decInt < 2147483647;
                            let v5178;
                            if (v5177) {
                                v5178 = decInt;
                            } else {
                                v5178 = 2147483647;
                            }
                            return v5178;
                        }
                    };
                    j = _addNext(j, /([+-])?(?:0*)(\d+)/, v5179);
                    break;
                case 'f':
                case 'E':
                case 'e':
                    const v5184 = function (num, sign, dec) {
                        const v5180 = dec === '.';
                        if (v5180) {
                            return null;
                        }
                        const v5181 = sign || '';
                        const v5182 = v5181 + dec;
                        const v5183 = parseFloat(v5182);
                        return v5183;
                    };
                    j = _addNext(j, /([+-])?(?:0*)(\d*\.?\d*(?:[eE]?\d+)?)/, v5184);
                    break;
                case 'u':
                    const v5189 = function (num, sign, dec) {
                        var decInt = parseInt(dec, 10);
                        const v5185 = sign === '-';
                        if (v5185) {
                            const v5186 = 4294967296 - decInt;
                            return v5186;
                        } else {
                            const v5187 = decInt < 4294967295;
                            let v5188;
                            if (v5187) {
                                v5188 = decInt;
                            } else {
                                v5188 = 4294967295;
                            }
                            return v5188;
                        }
                    };
                    j = _addNext(j, /([+-])?(?:0*)(\d+)/, v5189);
                    break;
                case 'o':
                    const v5191 = function (num, sign, oct) {
                        const v5190 = parseInt(num, 8);
                        return v5190;
                    };
                    j = _addNext(j, /([+-])?(?:0([0-7]+))/, v5191);
                    break;
                case 's':
                    j = _addNext(j, /\S+/);
                    break;
                case 'X':
                case 'x':
                    const v5193 = function (num, sign, hex) {
                        const v5192 = parseInt(num, 16);
                        return v5192;
                    };
                    j = _addNext(j, /([+-])?(?:(?:0x)?([\da-fA-F]+))/, v5193);
                    break;
                case '':
                    throw 'Missing character after percent mark in sscanf() format argument';
                default:
                    throw 'Unrecognized character after percent mark in sscanf() format argument';
                }
            } catch (e) {
                const v5194 = e === 'No match in string';
                if (v5194) {
                    const v5195 = i + 2;
                    const v5196 = _setExtraConversionSpecs(v5195);
                    return v5196;
                }
            }
            const v5197 = ++i;
            v5197;
        } else {
            const v5198 = format.charAt(i);
            const v5199 = str.charAt(j);
            const v5200 = v5198 !== v5199;
            if (v5200) {
                _NWS.lastIndex = 0;
                const v5201 = str.charAt(j);
                const v5202 = _NWS.test(v5201);
                const v5203 = str.charAt(j);
                const v5204 = v5203 === '';
                const v5205 = v5202 || v5204;
                if (v5205) {
                    const v5206 = i + 1;
                    const v5207 = _setExtraConversionSpecs(v5206);
                    return v5207;
                } else {
                    const v5208 = str.slice(0, j);
                    const v5209 = j + 1;
                    const v5210 = str.slice(v5209);
                    str = v5208 + v5210;
                    const v5211 = i--;
                    v5211;
                }
            } else {
                const v5212 = j++;
                v5212;
            }
        }
        const v5130 = i++;
        v5129 = i < v5128;
    }
    const v5213 = _finish();
    return v5213;
};
exports.sscanf = v5214;
const v5244 = function (input, delimiter, enclosure, escape) {
    var i;
    var inpLen;
    var output = [];
    var backwards = function (str) {
        const v5215 = str.split('');
        const v5216 = v5215.reverse();
        const v5217 = v5216.join('');
        return v5217;
    };
    var pq = function (str) {
        const v5218 = String(str);
        const v5219 = v5218.replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!<\>\|\:])/g, '\\$1');
        return v5219;
    };
    delimiter = delimiter || ',';
    enclosure = enclosure || '"';
    escape = escape || '\\';
    var pqEnc = pq(enclosure);
    var pqEsc = pq(escape);
    const v5220 = '^\\s*' + pqEnc;
    const v5221 = new RegExp(v5220);
    const v5222 = input.replace(v5221, '');
    const v5223 = pqEnc + '\\s*$';
    const v5224 = new RegExp(v5223);
    input = v5222.replace(v5224, '');
    const v5225 = backwards(input);
    const v5226 = pqEnc + '\\s*';
    const v5227 = pq(delimiter);
    const v5228 = v5226 + v5227;
    const v5229 = v5228 + '\\s*';
    const v5230 = v5229 + pqEnc;
    const v5231 = v5230 + '(?!';
    const v5232 = v5231 + pqEsc;
    const v5233 = v5232 + ')';
    const v5234 = new RegExp(v5233, 'g');
    const v5235 = v5225.split(v5234);
    input = v5235.reverse();
    (i = 0, inpLen = input.length)
    let v5236 = i < inpLen;
    while (v5236) {
        const v5238 = input[i];
        const v5239 = backwards(v5238);
        const v5240 = pqEsc + pqEnc;
        const v5241 = new RegExp(v5240, 'g');
        const v5242 = v5239.replace(v5241, enclosure);
        const v5243 = output.push(v5242);
        v5243;
        const v5237 = i++;
        v5236 = i < inpLen;
    }
    return output;
};
exports.str_getcsv = v5244;
const v5278 = function (search, replace, subject) {
    var i;
    var k = '';
    var searchl = 0;
    var reg;
    var escapeRegex = function (s) {
        const v5245 = s.replace(/([\\\^\$*+\[\]?{}.=!:(|)])/g, '\\$1');
        return v5245;
    };
    search += '';
    searchl = search.length;
    const v5246 = Object.prototype;
    const v5247 = v5246.toString;
    const v5248 = v5247.call(replace);
    const v5249 = v5248 !== '[object Array]';
    if (v5249) {
        replace = [replace];
        const v5250 = Object.prototype;
        const v5251 = v5250.toString;
        const v5252 = v5251.call(search);
        const v5253 = v5252 === '[object Array]';
        if (v5253) {
            const v5254 = replace.length;
            let v5255 = searchl > v5254;
            while (v5255) {
                const v5256 = replace.length;
                const v5257 = replace[0];
                replace[v5256] = v5257;
                v5255 = searchl > v5254;
            }
        }
    }
    const v5258 = Object.prototype;
    const v5259 = v5258.toString;
    const v5260 = v5259.call(search);
    const v5261 = v5260 !== '[object Array]';
    if (v5261) {
        search = [search];
    }
    const v5262 = search.length;
    const v5263 = replace.length;
    let v5264 = v5262 > v5263;
    while (v5264) {
        const v5265 = replace.length;
        replace[v5265] = '';
        v5264 = v5262 > v5263;
    }
    const v5266 = Object.prototype;
    const v5267 = v5266.toString;
    const v5268 = v5267.call(subject);
    const v5269 = v5268 === '[object Array]';
    if (v5269) {
        for (k in subject) {
            const v5270 = subject.hasOwnProperty(k);
            if (v5270) {
                const v5271 = subject[k];
                const v5272 = str_ireplace(search, replace, v5271);
                subject[k] = v5272;
            }
        }
        return subject;
    }
    searchl = search.length;
    (i = 0)
    let v5273 = i < searchl;
    while (v5273) {
        const v5275 = search[i];
        const v5276 = escapeRegex(v5275);
        reg = new RegExp(v5276, 'gi');
        const v5277 = replace[i];
        subject = subject.replace(reg, v5277);
        const v5274 = i++;
        v5273 = i < searchl;
    }
    return subject;
};
exports.str_ireplace = v5278;
const v5297 = function (input, pad_length, pad_string, pad_type) {
    var half = '';
    var pad_to_go;
    var str_pad_repeater = function (s, len) {
        var collect = '';
        var i;
        const v5279 = collect.length;
        let v5280 = v5279 < len;
        while (v5280) {
            collect += s;
            v5280 = v5279 < len;
        }
        collect = collect.substr(0, len);
        return collect;
    };
    input += '';
    const v5281 = pad_string !== undefined;
    if (v5281) {
        pad_string = pad_string;
    } else {
        pad_string = ' ';
    }
    const v5282 = pad_type !== 'STR_PAD_LEFT';
    const v5283 = pad_type !== 'STR_PAD_RIGHT';
    const v5284 = v5282 && v5283;
    const v5285 = pad_type !== 'STR_PAD_BOTH';
    const v5286 = v5284 && v5285;
    if (v5286) {
        pad_type = 'STR_PAD_RIGHT';
    }
    const v5287 = input.length;
    const v5288 = (pad_to_go = pad_length - v5287) > 0;
    if (v5288) {
        const v5289 = pad_type === 'STR_PAD_LEFT';
        if (v5289) {
            const v5290 = str_pad_repeater(pad_string, pad_to_go);
            input = v5290 + input;
        } else {
            const v5291 = pad_type === 'STR_PAD_RIGHT';
            if (v5291) {
                const v5292 = str_pad_repeater(pad_string, pad_to_go);
                input = input + v5292;
            } else {
                const v5293 = pad_type === 'STR_PAD_BOTH';
                if (v5293) {
                    const v5294 = pad_to_go / 2;
                    const v5295 = Math.ceil(v5294);
                    half = str_pad_repeater(pad_string, v5295);
                    const v5296 = half + input;
                    input = v5296 + half;
                    input = input.substr(0, pad_length);
                }
            }
        }
    }
    return input;
};
exports.str_pad = v5297;
const v5299 = function (input, multiplier) {
    var y = '';
    while (true) {
        const v5298 = multiplier & 1;
        if (v5298) {
            y += input;
        }
        multiplier >>= 1;
        if (multiplier) {
            input += input;
        } else {
            break;
        }
    }
    return y;
};
exports.str_repeat = v5299;
const v5337 = function (search, replace, subject, count) {
    var i = 0;
    var j = 0;
    var temp = '';
    var repl = '';
    var sl = 0;
    var fl = 0;
    const v5300 = [];
    var f = v5300.concat(search);
    const v5301 = [];
    var r = v5301.concat(replace);
    var s = subject;
    const v5302 = Object.prototype;
    const v5303 = v5302.toString;
    const v5304 = v5303.call(r);
    var ra = v5304 === '[object Array]';
    const v5305 = Object.prototype;
    const v5306 = v5305.toString;
    const v5307 = v5306.call(s);
    var sa = v5307 === '[object Array]';
    const v5308 = [];
    s = v5308.concat(s);
    if (count) {
        const v5309 = this.window;
        v5309[count] = 0;
    }
    (i = 0, sl = s.length)
    let v5310 = i < sl;
    while (v5310) {
        const v5312 = s[i];
        const v5313 = v5312 === '';
        if (v5313) {
            continue;
        }
        (j = 0, fl = f.length)
        let v5314 = j < fl;
        while (v5314) {
            const v5316 = s[i];
            temp = v5316 + '';
            const v5317 = r[j];
            const v5318 = v5317 !== undefined;
            const v5319 = r[j];
            let v5320;
            if (v5318) {
                v5320 = v5319;
            } else {
                v5320 = '';
            }
            const v5321 = r[0];
            if (ra) {
                repl = v5320;
            } else {
                repl = v5321;
            }
            const v5322 = f[j];
            const v5323 = temp.split(v5322);
            const v5324 = v5323.join(repl);
            s[i] = v5324;
            const v5325 = s[i];
            const v5326 = v5325 !== temp;
            const v5327 = count && v5326;
            if (v5327) {
                const v5328 = this.window;
                const v5329 = temp.length;
                const v5330 = s[i];
                const v5331 = v5330.length;
                const v5332 = v5329 - v5331;
                const v5333 = f[j];
                const v5334 = v5333.length;
                v5328[count] += v5332 / v5334;
            }
            const v5315 = j++;
            v5314 = j < fl;
        }
        const v5311 = i++;
        v5310 = i < sl;
    }
    const v5335 = s[0];
    let v5336;
    if (sa) {
        v5336 = s;
    } else {
        v5336 = v5335;
    }
    return v5336;
};
exports.str_replace = v5337;
const v5348 = function (str) {
    const v5338 = str + '';
    const v5346 = function (s) {
        const v5339 = s.charCodeAt(0);
        const v5340 = s.toLowerCase();
        const v5341 = v5340 < 'n';
        const v5342 = -13;
        let v5343;
        if (v5341) {
            v5343 = 13;
        } else {
            v5343 = v5342;
        }
        const v5344 = v5339 + v5343;
        const v5345 = String.fromCharCode(v5344);
        return v5345;
    };
    const v5347 = v5338.replace(/[a-z]/gi, v5346);
    return v5347;
};
exports.str_rot13 = v5348;
const v5358 = function (str) {
    const v5349 = arguments.length;
    const v5350 = v5349 === 0;
    if (v5350) {
        throw 'Wrong parameter count for str_shuffle()';
    }
    const v5351 = str == null;
    if (v5351) {
        return '';
    }
    str += '';
    var newStr = '';
    var rand;
    var i = str.length;
    while (i) {
        const v5352 = Math.random();
        const v5353 = v5352 * i;
        rand = Math.floor(v5353);
        newStr += str.charAt(rand);
        const v5354 = str.substring(0, rand);
        const v5355 = rand + 1;
        const v5356 = str.substr(v5355);
        str = v5354 + v5356;
        const v5357 = i--;
        v5357;
    }
    return newStr;
};
exports.str_shuffle = v5358;
const v5366 = function (string, split_length) {
    const v5359 = split_length === null;
    if (v5359) {
        split_length = 1;
    }
    const v5360 = string === null;
    const v5361 = split_length < 1;
    const v5362 = v5360 || v5361;
    if (v5362) {
        return false;
    }
    string += '';
    var chunks = [];
    var pos = 0;
    var len = string.length;
    let v5363 = pos < len;
    while (v5363) {
        pos = split_length;
        const v5364 = string.slice(pos, pos);
        const v5365 = chunks.push(v5364);
        v5365;
        v5363 = pos < len;
    }
    return chunks;
};
exports.str_split = v5366;
const v5372 = function (f_string1, f_string2) {
    const v5367 = f_string1 + '';
    var string1 = v5367.toLowerCase();
    const v5368 = f_string2 + '';
    var string2 = v5368.toLowerCase();
    const v5369 = string1 > string2;
    if (v5369) {
        return 1;
    } else {
        const v5370 = string1 == string2;
        if (v5370) {
            return 0;
        }
    }
    const v5371 = -1;
    return v5371;
};
exports.strcasecmp = v5372;
const v5378 = function (str1, str2) {
    const v5373 = str1 == str2;
    const v5374 = str1 > str2;
    const v5375 = -1;
    let v5376;
    if (v5374) {
        v5376 = 1;
    } else {
        v5376 = v5375;
    }
    let v5377;
    if (v5373) {
        v5377 = 0;
    } else {
        v5377 = v5376;
    }
    return v5377;
};
exports.strcmp = v5378;
const v5396 = function (str, mask, start, length) {
    if (start) {
        start = start;
    } else {
        start = 0;
    }
    let count;
    const v5379 = start + length;
    const v5380 = str.length;
    const v5381 = v5379 < v5380;
    const v5382 = length && v5381;
    const v5383 = start + length;
    const v5384 = str.length;
    if (v5382) {
        count = v5383;
    } else {
        count = v5384;
    }
    strct: {
        var i = start;
        var lgth = 0;
        let v5385 = i < count;
        while (v5385) {
            var j = 0;
            const v5387 = mask.length;
            let v5388 = j < v5387;
            while (v5388) {
                const v5390 = str.charAt(i);
                const v5391 = mask[j];
                const v5392 = v5390.indexOf(v5391);
                const v5393 = -1;
                const v5394 = v5392 !== v5393;
                if (v5394) {
                    continue strct;
                }
                const v5389 = j++;
                v5388 = j < v5387;
            }
            const v5395 = ++lgth;
            v5395;
            const v5386 = i++;
            v5385 = i < count;
        }
    }
    return lgth;
};
exports.strcspn = v5396;
const v5413 = function (input, allowed) {
    const v5397 = allowed || '';
    const v5398 = v5397 + '';
    const v5399 = v5398.toLowerCase();
    const v5400 = v5399.match(/<[a-z][a-z0-9]*>/g);
    const v5401 = [];
    const v5402 = v5400 || v5401;
    allowed = v5402.join('');
    var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
    var commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
    const v5403 = input.replace(commentsAndPhpTags, '');
    const v5411 = function ($0, $1) {
        const v5404 = $1.toLowerCase();
        const v5405 = '<' + v5404;
        const v5406 = v5405 + '>';
        const v5407 = allowed.indexOf(v5406);
        const v5408 = -1;
        const v5409 = v5407 > v5408;
        let v5410;
        if (v5409) {
            v5410 = $0;
        } else {
            v5410 = '';
        }
        return v5410;
    };
    const v5412 = v5403.replace(tags, v5411);
    return v5412;
};
exports.strip_tags = v5413;
const v5418 = function (f_haystack, f_needle, f_offset) {
    const v5414 = f_haystack + '';
    var haystack = v5414.toLowerCase();
    const v5415 = f_needle + '';
    var needle = v5415.toLowerCase();
    var index = 0;
    const v5416 = -1;
    const v5417 = (index = haystack.indexOf(needle, f_offset)) !== v5416;
    if (v5417) {
        return index;
    }
    return false;
};
exports.stripos = v5418;
const v5422 = function (str) {
    const v5419 = str + '';
    const v5420 = function (s, n1) {
        switch (n1) {
        case '\\':
            return '\\';
        case '0':
            return '\0';
        case '':
            return '';
        default:
            return n1;
        }
    };
    const v5421 = v5419.replace(/\\(.?)/g, v5420);
    return v5421;
};
exports.stripslashes = v5422;
const v5430 = function (haystack, needle, bool) {
    var pos = 0;
    haystack += '';
    const v5423 = haystack.toLowerCase();
    const v5424 = needle + '';
    const v5425 = v5424.toLowerCase();
    pos = v5423.indexOf(v5425);
    const v5426 = -1;
    const v5427 = pos == v5426;
    if (v5427) {
        return false;
    } else {
        if (bool) {
            const v5428 = haystack.substr(0, pos);
            return v5428;
        } else {
            const v5429 = haystack.slice(pos);
            return v5429;
        }
    }
};
exports.stristr = v5430;
const v5478 = function (string) {
    var str = string + '';
    var i = 0;
    var chr = '';
    var lgth = 0;
    const v5431 = this.php_js;
    const v5432 = !v5431;
    const v5433 = this.php_js;
    const v5434 = v5433.ini;
    const v5435 = !v5434;
    const v5436 = v5432 || v5435;
    const v5437 = this.php_js;
    const v5438 = v5437.ini;
    const v5439 = v5438['unicode.semantics'];
    const v5440 = !v5439;
    const v5441 = v5436 || v5440;
    const v5442 = this.php_js;
    const v5443 = v5442.ini;
    const v5444 = v5443['unicode.semantics'];
    const v5445 = v5444.local_value;
    const v5446 = v5445.toLowerCase();
    const v5447 = v5446 !== 'on';
    const v5448 = v5441 || v5447;
    if (v5448) {
        const v5449 = string.length;
        return v5449;
    }
    var getWholeChar = function (str, i) {
        var code = str.charCodeAt(i);
        var next = '';
        var prev = '';
        const v5450 = 55296 <= code;
        const v5451 = code <= 56319;
        const v5452 = v5450 && v5451;
        if (v5452) {
            const v5453 = str.length;
            const v5454 = i + 1;
            const v5455 = v5453 <= v5454;
            if (v5455) {
                throw 'High surrogate without following low surrogate';
            }
            const v5456 = i + 1;
            next = str.charCodeAt(v5456);
            const v5457 = 56320 > next;
            const v5458 = next > 57343;
            const v5459 = v5457 || v5458;
            if (v5459) {
                throw 'High surrogate without following low surrogate';
            }
            const v5460 = str.charAt(i);
            const v5461 = i + 1;
            const v5462 = str.charAt(v5461);
            const v5463 = v5460 + v5462;
            return v5463;
        } else {
            const v5464 = 56320 <= code;
            const v5465 = code <= 57343;
            const v5466 = v5464 && v5465;
            if (v5466) {
                const v5467 = i === 0;
                if (v5467) {
                    throw 'Low surrogate without preceding high surrogate';
                }
                const v5468 = i - 1;
                prev = str.charCodeAt(v5468);
                const v5469 = 55296 > prev;
                const v5470 = prev > 56319;
                const v5471 = v5469 || v5470;
                if (v5471) {
                    throw 'Low surrogate without preceding high surrogate';
                }
                return false;
            }
        }
        const v5472 = str.charAt(i);
        return v5472;
    };
    (i = 0, lgth = 0)
    const v5473 = str.length;
    let v5474 = i < v5473;
    while (v5474) {
        const v5476 = (chr = getWholeChar(str, i)) === false;
        if (v5476) {
            continue;
        }
        const v5477 = lgth++;
        v5477;
        const v5475 = i++;
        v5474 = i < v5473;
    }
    return lgth;
};
exports.strlen = v5478;
const v5539 = function (str1, str2) {
    const v5479 = str1 + '';
    var a = v5479.toLowerCase();
    const v5480 = str2 + '';
    var b = v5480.toLowerCase();
    var isWhitespaceChar = function (a) {
        const v5481 = a.charCodeAt(0);
        const v5482 = v5481 <= 32;
        return v5482;
    };
    var isDigitChar = function (a) {
        var charCode = a.charCodeAt(0);
        const v5483 = charCode >= 48;
        const v5484 = charCode <= 57;
        const v5485 = v5483 && v5484;
        return v5485;
    };
    var compareRight = function (a, b) {
        var bias = 0;
        var ia = 0;
        var ib = 0;
        var ca;
        var cb;
        var cnt = 0;
        while (true) {
            ca = a.charAt(ia);
            cb = b.charAt(ib);
            const v5488 = isDigitChar(ca);
            const v5489 = !v5488;
            const v5490 = isDigitChar(cb);
            const v5491 = !v5490;
            const v5492 = v5489 && v5491;
            if (v5492) {
                return bias;
            } else {
                const v5493 = isDigitChar(ca);
                const v5494 = !v5493;
                if (v5494) {
                    const v5495 = -1;
                    return v5495;
                } else {
                    const v5496 = isDigitChar(cb);
                    const v5497 = !v5496;
                    if (v5497) {
                        return 1;
                    } else {
                        const v5498 = ca < cb;
                        if (v5498) {
                            const v5499 = bias === 0;
                            if (v5499) {
                                const v5500 = -1;
                                bias = v5500;
                            }
                        } else {
                            const v5501 = ca > cb;
                            if (v5501) {
                                const v5502 = bias === 0;
                                if (v5502) {
                                    bias = 1;
                                }
                            } else {
                                const v5503 = ca === '0';
                                const v5504 = cb === '0';
                                const v5505 = v5503 && v5504;
                                if (v5505) {
                                    return bias;
                                }
                            }
                        }
                    }
                }
            }
            const v5486 = ia++;
            const v5487 = ib++;
        }
    };
    var ia = 0;
    var ib = 0;
    var nza = 0;
    var nzb = 0;
    var ca;
    var cb;
    var result;
    while (true) {
        nzb = 0;
        nza = nzb;
        ca = a.charAt(ia);
        cb = b.charAt(ib);
        const v5506 = isWhitespaceChar(ca);
        const v5507 = ca === '0';
        let v5508 = v5506 || v5507;
        while (v5508) {
            const v5509 = ca === '0';
            if (v5509) {
                const v5510 = nza++;
                v5510;
            } else {
                nza = 0;
            }
            const v5511 = ++ia;
            ca = a.charAt(v5511);
            v5508 = v5506 || v5507;
        }
        const v5512 = isWhitespaceChar(cb);
        const v5513 = cb === '0';
        let v5514 = v5512 || v5513;
        while (v5514) {
            const v5515 = cb === '0';
            if (v5515) {
                const v5516 = nzb++;
                v5516;
            } else {
                nzb = 0;
            }
            const v5517 = ++ib;
            cb = b.charAt(v5517);
            v5514 = v5512 || v5513;
        }
        const v5518 = isDigitChar(ca);
        const v5519 = isDigitChar(cb);
        const v5520 = v5518 && v5519;
        if (v5520) {
            const v5521 = a.substring(ia);
            const v5522 = b.substring(ib);
            const v5523 = (result = compareRight(v5521, v5522)) !== 0;
            if (v5523) {
                return result;
            }
        }
        const v5524 = ca === '0';
        const v5525 = cb === '0';
        const v5526 = v5524 && v5525;
        if (v5526) {
            const v5527 = nza - nzb;
            return v5527;
        }
        const v5528 = ca < cb;
        if (v5528) {
            const v5529 = -1;
            return v5529;
        } else {
            const v5530 = ca > cb;
            if (v5530) {
                const v5531 = +1;
                return v5531;
            }
        }
        const v5532 = a.length;
        const v5533 = ia >= v5532;
        const v5534 = b.length;
        const v5535 = ib >= v5534;
        const v5536 = v5533 && v5535;
        if (v5536) {
            return 0;
        }
        const v5537 = ++ia;
        v5537;
        const v5538 = ++ib;
        v5538;
    }
};
exports.strnatcasecmp = v5539;
const v5567 = function (argStr1, argStr2, len) {
    var diff;
    var i = 0;
    const v5540 = argStr1 + '';
    const v5541 = v5540.toLowerCase();
    var str1 = v5541.substr(0, len);
    const v5542 = argStr2 + '';
    const v5543 = v5542.toLowerCase();
    var str2 = v5543.substr(0, len);
    const v5544 = str1.length;
    const v5545 = str2.length;
    const v5546 = v5544 !== v5545;
    if (v5546) {
        const v5547 = str1.length;
        const v5548 = str2.length;
        const v5549 = v5547 < v5548;
        if (v5549) {
            len = str1.length;
            const v5550 = str1.length;
            const v5551 = str2.substr(0, v5550);
            const v5552 = v5551 == str1;
            if (v5552) {
                const v5553 = str1.length;
                const v5554 = str2.length;
                const v5555 = v5553 - v5554;
                return v5555;
            }
        } else {
            len = str2.length;
            const v5556 = str2.length;
            const v5557 = str1.substr(0, v5556);
            const v5558 = v5557 == str2;
            if (v5558) {
                const v5559 = str1.length;
                const v5560 = str2.length;
                const v5561 = v5559 - v5560;
                return v5561;
            }
        }
    } else {
        len = str1.length;
    }
    (diff = 0, i = 0)
    let v5562 = i < len;
    while (v5562) {
        const v5564 = str1.charCodeAt(i);
        const v5565 = str2.charCodeAt(i);
        diff = v5564 - v5565;
        const v5566 = diff !== 0;
        if (v5566) {
            return diff;
        }
        const v5563 = i++;
        v5562 = i < len;
    }
    return 0;
};
exports.strncasecmp = v5567;
const v5575 = function (str1, str2, lgth) {
    const v5568 = str1 + '';
    var s1 = v5568.substr(0, lgth);
    const v5569 = str2 + '';
    var s2 = v5569.substr(0, lgth);
    const v5570 = s1 == s2;
    const v5571 = s1 > s2;
    const v5572 = -1;
    let v5573;
    if (v5571) {
        v5573 = 1;
    } else {
        v5573 = v5572;
    }
    let v5574;
    if (v5570) {
        v5574 = 0;
    } else {
        v5574 = v5573;
    }
    return v5574;
};
exports.strncmp = v5575;
const v5582 = function (haystack, char_list) {
    var i = 0;
    var len = haystack.length;
    let v5576 = i < len;
    while (v5576) {
        const v5578 = haystack.charAt(i);
        const v5579 = char_list.indexOf(v5578);
        const v5580 = v5579 >= 0;
        if (v5580) {
            const v5581 = haystack.slice(i);
            return v5581;
        }
        const v5577 = ++i;
        v5576 = i < len;
    }
    return false;
};
exports.strpbrk = v5582;
const v5588 = function (haystack, needle, offset) {
    const v5583 = haystack + '';
    const v5584 = offset || 0;
    var i = v5583.indexOf(needle, v5584);
    const v5585 = -1;
    const v5586 = i === v5585;
    let v5587;
    if (v5586) {
        v5587 = false;
    } else {
        v5587 = i;
    }
    return v5587;
};
exports.strpos = v5588;
const v5595 = function (haystack, needle) {
    var pos = 0;
    const v5589 = typeof needle;
    const v5590 = v5589 !== 'string';
    if (v5590) {
        const v5591 = parseInt(needle, 10);
        needle = String.fromCharCode(v5591);
    }
    needle = needle.charAt(0);
    pos = haystack.lastIndexOf(needle);
    const v5592 = -1;
    const v5593 = pos === v5592;
    if (v5593) {
        return false;
    }
    const v5594 = haystack.substr(pos);
    return v5594;
};
exports.strrchr = v5595;
const v5599 = function (string) {
    string = string + '';
    var grapheme_extend = /(.)([\uDC00-\uDFFF\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065E\u0670\u06D6-\u06DC\u06DE-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0901-\u0903\u093C\u093E-\u094D\u0951-\u0954\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C01-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C82\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D02\u0D03\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F90-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B6-\u17D3\u17DD\u180B-\u180D\u18A9\u1920-\u192B\u1930-\u193B\u19B0-\u19C0\u19C8\u19C9\u1A17-\u1A1B\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAA\u1C24-\u1C37\u1DC0-\u1DE6\u1DFE\u1DFF\u20D0-\u20F0\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA67C\uA67D\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C4\uA926-\uA92D\uA947-\uA953\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uFB1E\uFE00-\uFE0F\uFE20-\uFE26]+)/g;
    string = string.replace(grapheme_extend, '$2$1');
    const v5596 = string.split('');
    const v5597 = v5596.reverse();
    const v5598 = v5597.join('');
    return v5598;
};
exports.strrev = v5599;
const v5610 = function (haystack, needle, offset) {
    const v5600 = haystack + '';
    haystack = v5600.toLowerCase();
    const v5601 = needle + '';
    needle = v5601.toLowerCase();
    const v5602 = -1;
    var i = v5602;
    if (offset) {
        const v5603 = haystack + '';
        const v5604 = v5603.slice(offset);
        i = v5604.lastIndexOf(needle);
        const v5605 = -1;
        const v5606 = i !== v5605;
        if (v5606) {
            i += offset;
        }
    } else {
        const v5607 = haystack + '';
        i = v5607.lastIndexOf(needle);
    }
    const v5608 = i >= 0;
    let v5609;
    if (v5608) {
        v5609 = i;
    } else {
        v5609 = false;
    }
    return v5609;
};
exports.strripos = v5610;
const v5619 = function (haystack, needle, offset) {
    const v5611 = -1;
    var i = v5611;
    if (offset) {
        const v5612 = haystack + '';
        const v5613 = v5612.slice(offset);
        i = v5613.lastIndexOf(needle);
        const v5614 = -1;
        const v5615 = i !== v5614;
        if (v5615) {
            i += offset;
        }
    } else {
        const v5616 = haystack + '';
        i = v5616.lastIndexOf(needle);
    }
    const v5617 = i >= 0;
    let v5618;
    if (v5617) {
        v5618 = i;
    } else {
        v5618 = false;
    }
    return v5618;
};
exports.strrpos = v5619;
const v5641 = function (str1, str2, start, lgth) {
    var found;
    var stri;
    var strj;
    var j = 0;
    var i = 0;
    const v5620 = start < 0;
    const v5621 = str1.length;
    const v5622 = v5621 + start;
    let v5623;
    if (v5620) {
        v5623 = v5622;
    } else {
        v5623 = start;
    }
    if (start) {
        start = v5623;
    } else {
        start = 0;
    }
    const v5624 = lgth < 0;
    const v5625 = str1.length;
    const v5626 = v5625 + lgth;
    const v5627 = v5626 - start;
    let v5628;
    if (v5624) {
        v5628 = v5627;
    } else {
        v5628 = lgth;
    }
    const v5629 = str1.length;
    const v5630 = v5629 - start;
    if (lgth) {
        lgth = v5628;
    } else {
        lgth = v5630;
    }
    str1 = str1.substr(start, lgth);
    (i = 0)
    const v5631 = str1.length;
    let v5632 = i < v5631;
    while (v5632) {
        found = 0;
        const v5634 = i + 1;
        stri = str1.substring(i, v5634);
        j = 0
        const v5635 = str2.length;
        let v5636 = j <= v5635;
        while (v5636) {
            const v5638 = j + 1;
            strj = str2.substring(j, v5638);
            const v5639 = stri == strj;
            if (v5639) {
                found = 1;
                break;
            }
            const v5637 = j++;
            v5636 = j <= v5635;
        }
        const v5640 = found != 1;
        if (v5640) {
            return i;
        }
        const v5633 = i++;
        v5632 = i < v5631;
    }
    return i;
};
exports.strspn = v5641;
const v5646 = function (haystack, needle, bool) {
    var pos = 0;
    haystack += '';
    pos = haystack.indexOf(needle);
    const v5642 = -1;
    const v5643 = pos == v5642;
    if (v5643) {
        return false;
    } else {
        if (bool) {
            const v5644 = haystack.substr(0, pos);
            return v5644;
        } else {
            const v5645 = haystack.slice(pos);
            return v5645;
        }
    }
};
exports.strstr = v5646;
const v5670 = function (str, tokens) {
    const v5647 = this.php_js;
    const v5648 = {};
    this.php_js = v5647 || v5648;
    const v5649 = tokens === undefined;
    if (v5649) {
        tokens = str;
        const v5650 = this.php_js;
        str = v5650.strtokleftOver;
    }
    const v5651 = str.length;
    const v5652 = v5651 === 0;
    if (v5652) {
        return false;
    }
    const v5653 = str.charAt(0);
    const v5654 = tokens.indexOf(v5653);
    const v5655 = -1;
    const v5656 = v5654 !== v5655;
    if (v5656) {
        const v5657 = str.substr(1);
        const v5658 = this.strtok(v5657, tokens);
        return v5658;
    }
    var i = 0;
    const v5659 = str.length;
    let v5660 = i < v5659;
    while (v5660) {
        const v5662 = str.charAt(i);
        const v5663 = tokens.indexOf(v5662);
        const v5664 = -1;
        const v5665 = v5663 !== v5664;
        if (v5665) {
            break;
        }
        const v5661 = i++;
        v5660 = i < v5659;
    }
    const v5667 = i + 1;
    const v5668 = str.substr(v5667);
    v5666.strtokleftOver = v5668;
    const v5669 = str.substring(0, i);
    return v5669;
};
exports.strtok = v5670;
const v5673 = function (str) {
    const v5671 = str + '';
    const v5672 = v5671.toLowerCase();
    return v5672;
};
exports.strtolower = v5673;
const v5676 = function (str) {
    const v5674 = str + '';
    const v5675 = v5674.toUpperCase();
    return v5675;
};
exports.strtoupper = v5676;
const v5759 = function (str, start, len) {
    var i = 0;
    var allBMP = true;
    var es = 0;
    var el = 0;
    var se = 0;
    var ret = '';
    str += '';
    var end = str.length;
    const v5677 = this.php_js;
    const v5678 = {};
    this.php_js = v5677 || v5678;
    const v5679 = this.php_js;
    const v5680 = this.php_js;
    const v5681 = v5680.ini;
    const v5682 = {};
    v5679.ini = v5681 || v5682;
    const v5683 = this.php_js;
    const v5684 = v5683.ini;
    const v5685 = v5684['unicode.semantics'];
    const v5686 = this.php_js;
    const v5687 = v5686.ini;
    const v5688 = v5687['unicode.semantics'];
    const v5689 = v5688.local_value;
    const v5690 = v5689.toLowerCase();
    const v5691 = v5685 && v5690;
    switch (v5691) {
    case 'on':
        i = 0
        const v5692 = str.length;
        let v5693 = i < v5692;
        while (v5693) {
            const v5695 = str.charAt(i);
            const v5696 = /[\uD800-\uDBFF]/.test(v5695);
            const v5697 = i + 1;
            const v5698 = str.charAt(v5697);
            const v5699 = /[\uDC00-\uDFFF]/.test(v5698);
            const v5700 = v5696 && v5699;
            if (v5700) {
                allBMP = false;
                break;
            }
            const v5694 = i++;
            v5693 = i < v5692;
        }
        const v5701 = !allBMP;
        if (v5701) {
            const v5702 = start < 0;
            if (v5702) {
                start = end;
                let v5703 = i >= es;
                while (v5703) {
                    const v5705 = str.charAt(i);
                    const v5706 = /[\uDC00-\uDFFF]/.test(v5705);
                    const v5707 = i - 1;
                    const v5708 = str.charAt(v5707);
                    const v5709 = /[\uD800-\uDBFF]/.test(v5708);
                    const v5710 = v5706 && v5709;
                    if (v5710) {
                        const v5711 = start--;
                        v5711;
                        const v5712 = es--;
                        v5712;
                    }
                    const v5704 = i--;
                    v5703 = i >= es;
                }
            } else {
                var surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
                const v5713 = surrogatePairs.exec(str);
                let v5714 = v5713 != null;
                while (v5714) {
                    var li = surrogatePairs.lastIndex;
                    const v5715 = li - 2;
                    const v5716 = v5715 < start;
                    if (v5716) {
                        const v5717 = start++;
                        v5717;
                    } else {
                        break;
                    }
                    v5714 = v5713 != null;
                }
            }
            const v5718 = start >= end;
            const v5719 = start < 0;
            const v5720 = v5718 || v5719;
            if (v5720) {
                return false;
            }
            const v5721 = len < 0;
            if (v5721) {
                end = len;
                let v5722 = i >= el;
                while (v5722) {
                    const v5724 = str.charAt(i);
                    const v5725 = /[\uDC00-\uDFFF]/.test(v5724);
                    const v5726 = i - 1;
                    const v5727 = str.charAt(v5726);
                    const v5728 = /[\uD800-\uDBFF]/.test(v5727);
                    const v5729 = v5725 && v5728;
                    if (v5729) {
                        const v5730 = end--;
                        v5730;
                        const v5731 = el--;
                        v5731;
                    }
                    const v5723 = i--;
                    v5722 = i >= el;
                }
                const v5732 = start > end;
                if (v5732) {
                    return false;
                }
                const v5733 = str.slice(start, end);
                return v5733;
            } else {
                se = start + len;
                i = start
                let v5734 = i < se;
                while (v5734) {
                    ret += str.charAt(i);
                    const v5736 = str.charAt(i);
                    const v5737 = /[\uD800-\uDBFF]/.test(v5736);
                    const v5738 = i + 1;
                    const v5739 = str.charAt(v5738);
                    const v5740 = /[\uDC00-\uDFFF]/.test(v5739);
                    const v5741 = v5737 && v5740;
                    if (v5741) {
                        const v5742 = se++;
                        v5742;
                    }
                    const v5735 = i++;
                    v5734 = i < se;
                }
                return ret;
            }
            break;
        }
    case 'off':
    default:
        const v5743 = start < 0;
        if (v5743) {
            start += end;
        }
        const v5744 = typeof len;
        const v5745 = v5744 === 'undefined';
        const v5746 = len < 0;
        const v5747 = len + end;
        const v5748 = len + start;
        let v5749;
        if (v5746) {
            v5749 = v5747;
        } else {
            v5749 = v5748;
        }
        if (v5745) {
            end = end;
        } else {
            end = v5749;
        }
        const v5750 = str.length;
        const v5751 = start >= v5750;
        const v5752 = start < 0;
        const v5753 = v5751 || v5752;
        const v5754 = start > end;
        const v5755 = v5753 || v5754;
        const v5756 = !1;
        const v5757 = str.slice(start, end);
        let v5758;
        if (v5755) {
            v5758 = v5756;
        } else {
            v5758 = v5757;
        }
        return v5758;
    }
    return undefined;
};
exports.substr = v5759;
const v5782 = function (main_str, str, offset, length, case_insensitivity) {
    const v5760 = !offset;
    const v5761 = offset !== 0;
    const v5762 = v5760 && v5761;
    if (v5762) {
        throw 'Missing offset for substr_compare()';
    }
    const v5763 = offset < 0;
    if (v5763) {
        const v5764 = main_str.length;
        offset = v5764 + offset;
    }
    const v5765 = main_str.length;
    const v5766 = v5765 - offset;
    const v5767 = length > v5766;
    const v5768 = length && v5767;
    if (v5768) {
        return false;
    }
    const v5769 = main_str.length;
    const v5770 = v5769 - offset;
    length = length || v5770;
    main_str = main_str.substr(offset, length);
    str = str.substr(0, length);
    if (case_insensitivity) {
        const v5771 = main_str + '';
        main_str = v5771.toLowerCase();
        const v5772 = str + '';
        str = v5772.toLowerCase();
        const v5773 = main_str == str;
        if (v5773) {
            return 0;
        }
        const v5774 = main_str > str;
        const v5775 = -1;
        let v5776;
        if (v5774) {
            v5776 = 1;
        } else {
            v5776 = v5775;
        }
        return v5776;
    }
    const v5777 = main_str == str;
    const v5778 = main_str > str;
    const v5779 = -1;
    let v5780;
    if (v5778) {
        v5780 = 1;
    } else {
        v5780 = v5779;
    }
    let v5781;
    if (v5777) {
        v5781 = 0;
    } else {
        v5781 = v5780;
    }
    return v5781;
};
exports.substr_compare = v5782;
const v5797 = function (haystack, needle, offset, length) {
    var cnt = 0;
    haystack += '';
    needle += '';
    const v5783 = isNaN(offset);
    if (v5783) {
        offset = 0;
    }
    const v5784 = isNaN(length);
    if (v5784) {
        length = 0;
    }
    const v5785 = needle.length;
    const v5786 = v5785 == 0;
    if (v5786) {
        return false;
    }
    const v5787 = offset--;
    v5787;
    const v5788 = offset + 1;
    const v5789 = -1;
    let v5790 = (offset = haystack.indexOf(needle, v5788)) != v5789;
    while (v5790) {
        const v5791 = length > 0;
        const v5792 = needle.length;
        const v5793 = offset + v5792;
        const v5794 = v5793 > length;
        const v5795 = v5791 && v5794;
        if (v5795) {
            return false;
        }
        const v5796 = cnt++;
        v5796;
        v5790 = (offset = haystack.indexOf(needle, v5788)) != v5789;
    }
    return cnt;
};
exports.substr_count = v5797;
const v5813 = function (str, replace, start, length) {
    const v5798 = start < 0;
    if (v5798) {
        const v5799 = str.length;
        start = start + v5799;
    }
    const v5800 = length !== undefined;
    const v5801 = str.length;
    if (v5800) {
        length = length;
    } else {
        length = v5801;
    }
    const v5802 = length < 0;
    if (v5802) {
        const v5803 = str.length;
        const v5804 = length + v5803;
        length = v5804 - start;
    }
    const v5805 = str.slice(0, start);
    const v5806 = replace.substr(0, length);
    const v5807 = v5805 + v5806;
    const v5808 = replace.slice(length);
    const v5809 = v5807 + v5808;
    const v5810 = start + length;
    const v5811 = str.slice(v5810);
    const v5812 = v5809 + v5811;
    return v5812;
};
exports.substr_replace = v5813;
const v5833 = function (str, charlist) {
    var whitespace;
    var l = 0;
    var i = 0;
    str += '';
    const v5814 = !charlist;
    if (v5814) {
        whitespace = ' \n\r\t\f\x0B\xA0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u200B\u2028\u2029\u3000';
    } else {
        charlist += '';
        whitespace = charlist.replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '$1');
    }
    l = str.length;
    (i = 0)
    let v5815 = i < l;
    while (v5815) {
        const v5817 = str.charAt(i);
        const v5818 = whitespace.indexOf(v5817);
        const v5819 = -1;
        const v5820 = v5818 === v5819;
        if (v5820) {
            str = str.substring(i);
            break;
        }
        const v5816 = i++;
        v5815 = i < l;
    }
    l = str.length;
    (i = l - 1)
    let v5821 = i >= 0;
    while (v5821) {
        const v5823 = str.charAt(i);
        const v5824 = whitespace.indexOf(v5823);
        const v5825 = -1;
        const v5826 = v5824 === v5825;
        if (v5826) {
            const v5827 = i + 1;
            str = str.substring(0, v5827);
            break;
        }
        const v5822 = i--;
        v5821 = i >= 0;
    }
    const v5828 = str.charAt(0);
    const v5829 = whitespace.indexOf(v5828);
    const v5830 = -1;
    const v5831 = v5829 === v5830;
    let v5832;
    if (v5831) {
        v5832 = str;
    } else {
        v5832 = '';
    }
    return v5832;
};
exports.trim = v5833;
const v5837 = function (str) {
    str += '';
    const v5834 = str.charAt(0);
    var f = v5834.toUpperCase();
    const v5835 = str.substr(1);
    const v5836 = f + v5835;
    return v5836;
};
exports.ucfirst = v5837;
const v5842 = function (str) {
    const v5838 = str + '';
    const v5840 = function ($1) {
        const v5839 = $1.toUpperCase();
        return v5839;
    };
    const v5841 = v5838.replace(/^([a-z\u00E0-\u00FC])|\s+([a-z\u00E0-\u00FC])/g, v5840);
    return v5841;
};
exports.ucwords = v5842;
const v5882 = function (str, int_width, str_break, cut) {
    let m;
    const v5843 = arguments.length;
    const v5844 = v5843 >= 2;
    const v5845 = arguments[1];
    if (v5844) {
        m = v5845;
    } else {
        m = 75;
    }
    let b;
    const v5846 = arguments.length;
    const v5847 = v5846 >= 3;
    const v5848 = arguments[2];
    if (v5847) {
        b = v5848;
    } else {
        b = '\n';
    }
    let c;
    const v5849 = arguments.length;
    const v5850 = v5849 >= 4;
    const v5851 = arguments[3];
    if (v5850) {
        c = v5851;
    } else {
        c = false;
    }
    var i;
    var j;
    var l;
    var s;
    var r;
    str += '';
    const v5852 = m < 1;
    if (v5852) {
        return str;
    }
    const v5853 = -1;
    const v5854 = ++i;
    let v5855 = v5854 < l;
    while (v5855) {
        (s = r[i], r[i] = '')
        const v5856 = s.length;
        let v5857 = v5856 > m;
        while (v5857) {
            const v5861 = c == 2;
            const v5862 = m + 1;
            const v5863 = s.slice(0, v5862);
            const v5864 = (j = v5863.match(/\S*(\s)?$/))[1];
            const v5865 = v5861 || v5864;
            const v5866 = j.input;
            const v5867 = v5866.length;
            const v5868 = j[0];
            const v5869 = v5868.length;
            const v5870 = v5867 - v5869;
            const v5871 = c == 1;
            const v5872 = v5871 && m;
            const v5873 = v5870 || v5872;
            const v5874 = j.input;
            const v5875 = v5874.length;
            const v5876 = s.slice(m);
            const v5877 = (j = v5876.match(/^\S*/))[0];
            const v5878 = v5877.length;
            const v5879 = v5875 + v5878;
            const v5880 = v5873 || v5879;
            if (v5865) {
                j = m;
            } else {
                j = v5880;
            }
            const v5858 = s.slice(0, j);
            const v5859 = (s = s.slice(j)).length;
            let v5860;
            if (v5859) {
                v5860 = b;
            } else {
                v5860 = '';
            }
            v5857 = v5856 > m;
        }
        v5855 = v5854 < l;
    }
    const v5881 = r.join('\n');
    return v5881;
};
exports.wordwrap = v5882;
const v5912 = function (data) {
    var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    var o1;
    var o2;
    var o3;
    var h1;
    var h2;
    var h3;
    var h4;
    var bits;
    var i = 0;
    var ac = 0;
    var dec = '';
    var tmp_arr = [];
    const v5883 = !data;
    if (v5883) {
        return data;
    }
    data += '';
    let v5885 = true;
    while (v5885) {
        const v5886 = i++;
        const v5887 = data.charAt(v5886);
        h1 = b64.indexOf(v5887);
        const v5888 = i++;
        const v5889 = data.charAt(v5888);
        h2 = b64.indexOf(v5889);
        const v5890 = i++;
        const v5891 = data.charAt(v5890);
        h3 = b64.indexOf(v5891);
        const v5892 = i++;
        const v5893 = data.charAt(v5892);
        h4 = b64.indexOf(v5893);
        const v5894 = h1 << 18;
        const v5895 = h2 << 12;
        const v5896 = v5894 | v5895;
        const v5897 = h3 << 6;
        const v5898 = v5896 | v5897;
        bits = v5898 | h4;
        const v5899 = bits >> 16;
        o1 = v5899 & 255;
        const v5900 = bits >> 8;
        o2 = v5900 & 255;
        o3 = bits & 255;
        const v5901 = h3 == 64;
        if (v5901) {
            const v5903 = String.fromCharCode(o1);
            tmp_arr[v5902] = v5903;
        } else {
            const v5904 = h4 == 64;
            if (v5904) {
                const v5906 = String.fromCharCode(o1, o2);
                tmp_arr[v5905] = v5906;
            } else {
                const v5908 = String.fromCharCode(o1, o2, o3);
                tmp_arr[v5907] = v5908;
            }
        }
        v5885 = i < v5884;
    }
    dec = tmp_arr.join('');
    const v5909 = dec.replace(/\0+$/, '');
    const v5910 = escape(v5909);
    const v5911 = decodeURIComponent(v5910);
    return v5911;
};
exports.base64_decode = v5912;
const v5940 = function (data) {
    var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    var o1;
    var o2;
    var o3;
    var h1;
    var h2;
    var h3;
    var h4;
    var bits;
    var i = 0;
    var ac = 0;
    var enc = '';
    var tmp_arr = [];
    const v5913 = !data;
    if (v5913) {
        return data;
    }
    const v5914 = encodeURIComponent(data);
    data = unescape(v5914);
    let v5916 = true;
    while (v5916) {
        const v5917 = i++;
        o1 = data.charCodeAt(v5917);
        const v5918 = i++;
        o2 = data.charCodeAt(v5918);
        const v5919 = i++;
        o3 = data.charCodeAt(v5919);
        const v5920 = o1 << 16;
        const v5921 = o2 << 8;
        const v5922 = v5920 | v5921;
        bits = v5922 | o3;
        const v5923 = bits >> 18;
        h1 = v5923 & 63;
        const v5924 = bits >> 12;
        h2 = v5924 & 63;
        const v5925 = bits >> 6;
        h3 = v5925 & 63;
        h4 = bits & 63;
        const v5926 = ac++;
        const v5927 = b64.charAt(h1);
        const v5928 = b64.charAt(h2);
        const v5929 = v5927 + v5928;
        const v5930 = b64.charAt(h3);
        const v5931 = v5929 + v5930;
        const v5932 = b64.charAt(h4);
        tmp_arr[v5926] = v5931 + v5932;
        v5916 = i < v5915;
    }
    enc = tmp_arr.join('');
    const v5933 = data.length;
    var r = v5933 % 3;
    const v5934 = r - 3;
    const v5935 = enc.slice(0, v5934);
    let v5936;
    if (r) {
        v5936 = v5935;
    } else {
        v5936 = enc;
    }
    const v5937 = r || 3;
    const v5938 = '==='.slice(v5937);
    const v5939 = v5936 + v5938;
    return v5939;
};
exports.base64_encode = v5940;
const v5971 = function (str, component) {
    var query;
    var key = [
        'source',
        'scheme',
        'authority',
        'userInfo',
        'user',
        'pass',
        'host',
        'port',
        'relative',
        'path',
        'directory',
        'file',
        'query',
        'fragment'
    ];
    const v5941 = this.php_js;
    const v5942 = this.php_js;
    const v5943 = v5942.ini;
    const v5944 = v5941 && v5943;
    const v5945 = {};
    var ini = v5944 || v5945;
    const v5946 = ini['phpjs.parse_url.mode'];
    const v5947 = ini['phpjs.parse_url.mode'];
    const v5948 = v5947.local_value;
    const v5949 = v5946 && v5948;
    var mode = v5949 || 'php';
    var parser = {};
    parser.php = /^(?:([^:\/?#]+):)?(?:\/\/()(?:(?:()(?:([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?()(?:(()(?:(?:[^?#\/]*\/)*)()(?:[^?#]*))(?:\?([^#]*))?(?:#(.*))?)/;
    parser.strict = /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/;
    parser.loose = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/\/?)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
    const v5950 = parser[mode];
    var m = v5950.exec(str);
    var uri = {};
    var i = 14;
    let v5951 = i--;
    while (v5951) {
        const v5952 = m[i];
        if (v5952) {
            const v5953 = key[i];
            const v5954 = m[i];
            uri[v5953] = v5954;
        }
        v5951 = i--;
    }
    if (component) {
        const v5955 = component.replace('PHP_URL_', '');
        const v5956 = v5955.toLowerCase();
        const v5957 = uri[v5956];
        return v5957;
    }
    const v5958 = mode !== 'php';
    if (v5958) {
        const v5959 = ini['phpjs.parse_url.queryKey'];
        const v5960 = ini['phpjs.parse_url.queryKey'];
        const v5961 = v5960.local_value;
        const v5962 = v5959 && v5961;
        var name = v5962 || 'queryKey';
        parser = /(?:^|&)([^&=]*)=?([^&]*)/g;
        const v5963 = {};
        uri[name] = v5963;
        const v5964 = key[12];
        const v5965 = uri[v5964];
        query = v5965 || '';
        const v5967 = function ($0, $1, $2) {
            if ($1) {
                const v5966 = uri[name];
                v5966[$1] = $2;
            }
        };
        const v5968 = query.replace(parser, v5967);
        v5968;
    }
    const v5969 = uri.source;
    const v5970 = delete v5969;
    v5970;
    return uri;
};
exports.parse_url = v5971;
const v5976 = function (str) {
    const v5972 = str + '';
    const v5973 = function () {
        return '%25';
    };
    const v5974 = v5972.replace(/%(?![\da-f]{2})/gi, v5973);
    const v5975 = decodeURIComponent(v5974);
    return v5975;
};
exports.rawurldecode = v5976;
const v5984 = function (str) {
    const v5977 = str + '';
    str = v5977.toString();
    const v5978 = encodeURIComponent(str);
    const v5979 = v5978.replace(/!/g, '%21');
    const v5980 = v5979.replace(/'/g, '%27');
    const v5981 = v5980.replace(/\(/g, '%28');
    const v5982 = v5981.replace(/\)/g, '%29');
    const v5983 = v5982.replace(/\*/g, '%2A');
    return v5983;
};
exports.rawurlencode = v5984;
const v5990 = function (str) {
    const v5985 = str + '';
    const v5986 = function () {
        return '%25';
    };
    const v5987 = v5985.replace(/%(?![\da-f]{2})/gi, v5986);
    const v5988 = v5987.replace(/\+/g, '%20');
    const v5989 = decodeURIComponent(v5988);
    return v5989;
};
exports.urldecode = v5990;
const v5999 = function (str) {
    const v5991 = str + '';
    str = v5991.toString();
    const v5992 = encodeURIComponent(str);
    const v5993 = v5992.replace(/!/g, '%21');
    const v5994 = v5993.replace(/'/g, '%27');
    const v5995 = v5994.replace(/\(/g, '%28');
    const v5996 = v5995.replace(/\)/g, '%29');
    const v5997 = v5996.replace(/\*/g, '%2A');
    const v5998 = v5997.replace(/%20/g, '+');
    return v5998;
};
exports.urlencode = v5999;
const v6006 = function (mixed_var) {
    var undef;
    var key;
    var i;
    var len;
    var emptyValues = [
        undef,
        null,
        false,
        0,
        '',
        '0'
    ];
    (i = 0, len = emptyValues.length)
    let v6000 = i < len;
    while (v6000) {
        const v6002 = emptyValues[i];
        const v6003 = mixed_var === v6002;
        if (v6003) {
            return true;
        }
        const v6001 = i++;
        v6000 = i < len;
    }
    const v6004 = typeof mixed_var;
    const v6005 = v6004 === 'object';
    if (v6005) {
        for (key in mixed_var) {
            return false;
        }
        return true;
    }
    return false;
};
exports.empty = v6006;
const v6009 = function (mixed_var) {
    const v6007 = parseFloat(mixed_var);
    const v6008 = v6007 || 0;
    return v6008;
};
exports.floatval = v6009;
const v6024 = function (mixed_var, base) {
    var tmp;
    const v6010 = typeof mixed_var;
    var type = v6010;
    const v6011 = type === 'boolean';
    if (v6011) {
        const v6012 = +mixed_var;
        return v6012;
    } else {
        const v6013 = type === 'string';
        if (v6013) {
            const v6014 = base || 10;
            tmp = parseInt(mixed_var, v6014);
            const v6015 = isNaN(tmp);
            const v6016 = isFinite(tmp);
            const v6017 = !v6016;
            const v6018 = v6015 || v6017;
            let v6019;
            if (v6018) {
                v6019 = 0;
            } else {
                v6019 = tmp;
            }
            return v6019;
        } else {
            const v6020 = type === 'number';
            const v6021 = isFinite(mixed_var);
            const v6022 = v6020 && v6021;
            if (v6022) {
                const v6023 = mixed_var | 0;
                return v6023;
            } else {
                return 0;
            }
        }
    }
};
exports.intval = v6024;
const v6078 = function (mixed_var) {
    var ini;
    var _getFuncName = function (fn) {
        var name = /\W*function\s+([\w\$]+)\s*\(/.exec(fn);
        const v6025 = !name;
        if (v6025) {
            return '(Anonymous)';
        }
        const v6026 = name[1];
        return v6026;
    };
    const v6041 = function (mixed_var) {
        const v6027 = !mixed_var;
        const v6028 = typeof mixed_var;
        const v6029 = v6028 !== 'object';
        const v6030 = v6027 || v6029;
        const v6031 = mixed_var.length;
        const v6032 = typeof v6031;
        const v6033 = v6032 !== 'number';
        const v6034 = v6030 || v6033;
        if (v6034) {
            return false;
        }
        var len = mixed_var.length;
        const v6035 = mixed_var.length;
        mixed_var[v6035] = 'bogus';
        const v6036 = mixed_var.length;
        const v6037 = len !== v6036;
        if (v6037) {
            mixed_var.length -= 1;
            return true;
        }
        const v6038 = mixed_var.length;
        const v6039 = mixed_var[v6038];
        const v6040 = delete v6039;
        v6040;
        return false;
    };
    _isArray = v6041;
    const v6042 = !mixed_var;
    const v6043 = typeof mixed_var;
    const v6044 = v6043 !== 'object';
    const v6045 = v6042 || v6044;
    if (v6045) {
        return false;
    }
    const v6046 = this.php_js;
    const v6047 = {};
    this.php_js = v6046 || v6047;
    const v6048 = this.php_js;
    const v6049 = this.php_js;
    const v6050 = v6049.ini;
    const v6051 = {};
    v6048.ini = v6050 || v6051;
    const v6052 = this.php_js;
    const v6053 = v6052.ini;
    ini = v6053['phpjs.objectsAsArrays'];
    const v6054 = _isArray(mixed_var);
    const v6055 = !ini;
    const v6056 = ini.local_value;
    const v6057 = parseInt(v6056, 10);
    const v6058 = v6057 !== 0;
    const v6059 = ini.local_value;
    const v6060 = v6059.toLowerCase;
    const v6061 = !v6060;
    const v6062 = ini.local_value;
    const v6063 = v6062.toLowerCase();
    const v6064 = v6063 !== 'off';
    const v6065 = v6061 || v6064;
    const v6066 = v6058 && v6065;
    const v6067 = v6055 || v6066;
    const v6068 = Object.prototype;
    const v6069 = v6068.toString;
    const v6070 = v6069.call(mixed_var);
    const v6071 = v6070 === '[object Object]';
    const v6072 = mixed_var.constructor;
    const v6073 = _getFuncName(v6072);
    const v6074 = v6073 === 'Object';
    const v6075 = v6071 && v6074;
    const v6076 = v6067 && v6075;
    const v6077 = v6054 || v6076;
    return v6077;
};
exports.is_array = v6078;
const v6081 = function (vr) {
    const v6079 = typeof vr;
    const v6080 = v6079 === 'string';
    return v6080;
};
exports.is_binary = v6081;
const v6085 = function (mixed_var) {
    const v6082 = mixed_var === true;
    const v6083 = mixed_var === false;
    const v6084 = v6082 || v6083;
    return v6084;
};
exports.is_bool = v6085;
const v6088 = function (vr) {
    const v6086 = typeof vr;
    const v6087 = v6086 === 'string';
    return v6087;
};
exports.is_buffer = v6088;
const v6120 = function (v, syntax_only, callable_name) {
    var name = '';
    var obj = {};
    var method = '';
    var getFuncName = function (fn) {
        var name = /\W*function\s+([\w\$]+)\s*\(/.exec(fn);
        const v6089 = !name;
        if (v6089) {
            return '(Anonymous)';
        }
        const v6090 = name[1];
        return v6090;
    };
    const v6091 = typeof v;
    const v6092 = v6091 === 'string';
    if (v6092) {
        obj = this.window;
        method = v;
        name = v;
    } else {
        const v6093 = typeof v;
        const v6094 = v6093 === 'function';
        if (v6094) {
            return true;
        } else {
            const v6095 = Object.prototype;
            const v6096 = v6095.toString;
            const v6097 = v6096.call(v);
            const v6098 = v6097 === '[object Array]';
            const v6099 = v.length;
            const v6100 = v6099 === 2;
            const v6101 = v6098 && v6100;
            const v6102 = v[0];
            const v6103 = typeof v6102;
            const v6104 = v6103 === 'object';
            const v6105 = v6101 && v6104;
            const v6106 = v[1];
            const v6107 = typeof v6106;
            const v6108 = v6107 === 'string';
            const v6109 = v6105 && v6108;
            if (v6109) {
                obj = v[0];
                method = v[1];
                const v6110 = obj.constructor;
                const v6111 = obj.constructor;
                const v6112 = getFuncName(v6111);
                const v6113 = v6110 && v6112;
                const v6114 = v6113 + '::';
                name = v6114 + method;
            } else {
                return false;
            }
        }
    }
    const v6115 = obj[method];
    const v6116 = typeof v6115;
    const v6117 = v6116 === 'function';
    const v6118 = syntax_only || v6117;
    if (v6118) {
        if (callable_name) {
            const v6119 = this.window;
            v6119[callable_name] = name;
        }
        return true;
    }
    return false;
};
exports.is_callable = v6120;
const v6130 = function (mixed_var) {
    const v6121 = +mixed_var;
    const v6122 = v6121 === mixed_var;
    const v6123 = isFinite(mixed_var);
    const v6124 = !v6123;
    const v6125 = mixed_var % 1;
    const v6126 = !v6125;
    const v6127 = !v6126;
    const v6128 = v6124 || v6127;
    const v6129 = v6122 && v6128;
    return v6129;
};
exports.is_float = v6130;
const v6138 = function (mixed_var) {
    const v6131 = +mixed_var;
    const v6132 = mixed_var === v6131;
    const v6133 = isFinite(mixed_var);
    const v6134 = v6132 && v6133;
    const v6135 = mixed_var % 1;
    const v6136 = !v6135;
    const v6137 = v6134 && v6136;
    return v6137;
};
exports.is_int = v6138;
const v6140 = function (mixed_var) {
    const v6139 = mixed_var === null;
    return v6139;
};
exports.is_null = v6140;
const v6157 = function (mixed_var) {
    var whitespace = ' \n\r\t\f\x0B\xA0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u200B\u2028\u2029\u3000';
    const v6141 = typeof mixed_var;
    const v6142 = v6141 === 'number';
    const v6143 = typeof mixed_var;
    const v6144 = v6143 === 'string';
    const v6145 = -1;
    const v6146 = mixed_var.slice(v6145);
    const v6147 = whitespace.indexOf(v6146);
    const v6148 = -1;
    const v6149 = v6147 === v6148;
    const v6150 = v6144 && v6149;
    const v6151 = v6142 || v6150;
    const v6152 = mixed_var !== '';
    const v6153 = v6151 && v6152;
    const v6154 = isNaN(mixed_var);
    const v6155 = !v6154;
    const v6156 = v6153 && v6155;
    return v6156;
};
exports.is_numeric = v6157;
const v6166 = function (mixed_var) {
    const v6158 = Object.prototype;
    const v6159 = v6158.toString;
    const v6160 = v6159.call(mixed_var);
    const v6161 = v6160 === '[object Array]';
    if (v6161) {
        return false;
    }
    const v6162 = mixed_var !== null;
    const v6163 = typeof mixed_var;
    const v6164 = v6163 === 'object';
    const v6165 = v6162 && v6164;
    return v6165;
};
exports.is_object = v6166;
const v6181 = function (handle) {
    var getFuncName = function (fn) {
        var name = /\W*function\s+([\w\$]+)\s*\(/.exec(fn);
        const v6167 = !name;
        if (v6167) {
            return '(Anonymous)';
        }
        const v6168 = name[1];
        return v6168;
    };
    const v6169 = !handle;
    const v6170 = typeof handle;
    const v6171 = v6170 !== 'object';
    const v6172 = v6169 || v6171;
    const v6173 = handle.constructor;
    const v6174 = !v6173;
    const v6175 = v6172 || v6174;
    const v6176 = handle.constructor;
    const v6177 = getFuncName(v6176);
    const v6178 = v6177 !== 'PHPJS_Resource';
    const v6179 = v6175 || v6178;
    const v6180 = !v6179;
    return v6180;
};
exports.is_resource = v6181;
const v6184 = function (mixed_var) {
    const v6182 = typeof mixed_var;
    const v6183 = /boolean|number|string/.test(v6182);
    return v6183;
};
exports.is_scalar = v6184;
const v6187 = function (mixed_var) {
    const v6185 = typeof mixed_var;
    const v6186 = v6185 === 'string';
    return v6186;
};
exports.is_string = v6187;
const v6210 = function (vr) {
    const v6188 = typeof vr;
    const v6189 = v6188 !== 'string';
    if (v6189) {
        return false;
    }
    var arr = [];
    var any = '([sS])';
    var highSurrogate = '[\uD800-\uDBFF]';
    var lowSurrogate = '[\uDC00-\uDFFF]';
    const v6190 = highSurrogate + any;
    var highSurrogateBeforeAny = new RegExp(v6190, 'g');
    const v6191 = any + lowSurrogate;
    var lowSurrogateAfterAny = new RegExp(v6191, 'g');
    const v6192 = '^' + lowSurrogate;
    const v6193 = v6192 + '$';
    var singleLowSurrogate = new RegExp(v6193);
    const v6194 = '^' + highSurrogate;
    const v6195 = v6194 + '$';
    var singleHighSurrogate = new RegExp(v6195);
    let v6196 = (arr = highSurrogateBeforeAny.exec(vr)) !== null;
    while (v6196) {
        const v6197 = arr[1];
        const v6198 = !v6197;
        const v6199 = arr[1];
        const v6200 = v6199.match(singleLowSurrogate);
        const v6201 = !v6200;
        const v6202 = v6198 || v6201;
        if (v6202) {
            return false;
        }
        v6196 = (arr = highSurrogateBeforeAny.exec(vr)) !== null;
    }
    let v6203 = (arr = lowSurrogateAfterAny.exec(vr)) !== null;
    while (v6203) {
        const v6204 = arr[1];
        const v6205 = !v6204;
        const v6206 = arr[1];
        const v6207 = v6206.match(singleHighSurrogate);
        const v6208 = !v6207;
        const v6209 = v6205 || v6208;
        if (v6209) {
            return false;
        }
        v6203 = (arr = lowSurrogateAfterAny.exec(vr)) !== null;
    }
    return true;
};
exports.is_unicode = v6210;
const v6220 = function () {
    var a = arguments;
    var l = a.length;
    var i = 0;
    var undef;
    const v6211 = l === 0;
    if (v6211) {
        const v6212 = new Error('Empty isset');
        throw v6212;
    }
    let v6213 = i !== l;
    while (v6213) {
        const v6214 = a[i];
        const v6215 = v6214 === undef;
        const v6216 = a[i];
        const v6217 = v6216 === null;
        const v6218 = v6215 || v6217;
        if (v6218) {
            return false;
        }
        const v6219 = i++;
        v6219;
        v6213 = i !== l;
    }
    return true;
};
exports.isset = v6220;
const v6261 = function (mixed_value) {
    var val;
    var key;
    var okey;
    var ktype = '';
    var vals = '';
    var count = 0;
    var _utf8Size = function (str) {
        var size = 0;
        var i = 0;
        var l = str.length;
        var code = '';
        (i = 0)
        let v6221 = i < l;
        while (v6221) {
            code = str.charCodeAt(i);
            const v6223 = code < 128;
            if (v6223) {
                size += 1;
            } else {
                const v6224 = code < 2048;
                if (v6224) {
                    size += 2;
                } else {
                    size += 3;
                }
            }
            const v6222 = i++;
            v6221 = i < l;
        }
        return size;
    };
    const v6236 = function (inp) {
        var match;
        var key;
        var cons;
        var types;
        const v6225 = typeof inp;
        var type = v6225;
        const v6226 = type === 'object';
        const v6227 = !inp;
        const v6228 = v6226 && v6227;
        if (v6228) {
            return 'null';
        }
        const v6229 = type === 'object';
        if (v6229) {
            const v6230 = inp.constructor;
            const v6231 = !v6230;
            if (v6231) {
                return 'object';
            }
            const v6232 = inp.constructor;
            cons = v6232.toString();
            match = cons.match(/(\w+)\(/);
            if (match) {
                const v6233 = match[1];
                cons = v6233.toLowerCase();
            }
            types = [
                'boolean',
                'number',
                'string',
                'array'
            ];
            for (key in types) {
                const v6234 = types[key];
                const v6235 = cons == v6234;
                if (v6235) {
                    type = types[key];
                    break;
                }
            }
        }
        return type;
    };
    _getType = v6236;
    type = _getType(mixed_value);
    switch (type) {
    case 'function':
        val = '';
        break;
    case 'boolean':
        let v6237;
        if (mixed_value) {
            v6237 = '1';
        } else {
            v6237 = '0';
        }
        val = 'b:' + v6237;
        break;
    case 'number':
        const v6238 = Math.round(mixed_value);
        const v6239 = v6238 == mixed_value;
        let v6240;
        if (v6239) {
            v6240 = 'i';
        } else {
            v6240 = 'd';
        }
        const v6241 = v6240 + ':';
        val = v6241 + mixed_value;
        break;
    case 'string':
        const v6242 = _utf8Size(mixed_value);
        const v6243 = 's:' + v6242;
        const v6244 = v6243 + ':"';
        const v6245 = v6244 + mixed_value;
        val = v6245 + '"';
        break;
    case 'array':
    case 'object':
        val = 'a';
        for (key in mixed_value) {
            const v6246 = mixed_value.hasOwnProperty(key);
            if (v6246) {
                const v6247 = mixed_value[key];
                ktype = _getType(v6247);
                const v6248 = ktype === 'function';
                if (v6248) {
                    continue;
                }
                const v6249 = key.match(/^[0-9]+$/);
                const v6250 = parseInt(key, 10);
                if (v6249) {
                    okey = v6250;
                } else {
                    okey = key;
                }
                const v6251 = this.serialize(okey);
                const v6252 = mixed_value[key];
                const v6253 = this.serialize(v6252);
                vals += v6251 + v6253;
                const v6254 = count++;
                v6254;
            }
        }
        const v6255 = ':' + count;
        const v6256 = v6255 + ':{';
        const v6257 = v6256 + vals;
        val += v6257 + '}';
        break;
    case 'undefined':
    default:
        val = 'N';
        break;
    }
    const v6258 = type !== 'object';
    const v6259 = type !== 'array';
    const v6260 = v6258 && v6259;
    if (v6260) {
        val += ';';
    }
    return val;
};
exports.serialize = v6261;
const v6342 = function (vr, type) {
    var is_array = function (arr) {
        const v6262 = typeof arr;
        const v6263 = v6262 === 'object';
        const v6264 = arr.length;
        const v6265 = typeof v6264;
        const v6266 = v6265 === 'number';
        const v6267 = v6263 && v6266;
        const v6268 = arr.propertyIsEnumerable('length');
        const v6269 = !v6268;
        const v6270 = v6267 && v6269;
        const v6271 = arr.splice;
        const v6272 = typeof v6271;
        const v6273 = v6272 === 'function';
        const v6274 = v6270 && v6273;
        return v6274;
    };
    var v;
    var mtch;
    var i;
    var obj;
    const v6275 = this[vr];
    const v6276 = this[vr];
    if (v6275) {
        v = v6276;
    } else {
        v = vr;
    }
    try {
        switch (type) {
        case 'boolean':
            const v6277 = is_array(v);
            const v6278 = v.length;
            const v6279 = v6278 === 0;
            const v6280 = v6277 && v6279;
            if (v6280) {
                this[vr] = false;
            } else {
                const v6281 = v === '0';
                if (v6281) {
                    this[vr] = false;
                } else {
                    const v6282 = typeof v;
                    const v6283 = v6282 === 'object';
                    const v6284 = is_array(v);
                    const v6285 = !v6284;
                    const v6286 = v6283 && v6285;
                    if (v6286) {
                        var lgth = false;
                        for (i in v) {
                            lgth = true;
                        }
                        this[vr] = lgth;
                    } else {
                        const v6287 = !v;
                        const v6288 = !v6287;
                        this[vr] = v6288;
                    }
                }
            }
            break;
        case 'integer':
            const v6289 = typeof v;
            const v6290 = v6289 === 'number';
            if (v6290) {
                const v6291 = parseInt(v, 10);
                this[vr] = v6291;
            } else {
                const v6292 = typeof v;
                const v6293 = v6292 === 'string';
                if (v6293) {
                    mtch = v.match(/^([+\-]?)(\d+)/);
                    const v6294 = !mtch;
                    if (v6294) {
                        this[vr] = 0;
                    } else {
                        const v6295 = parseInt(v, 10);
                        this[vr] = v6295;
                    }
                } else {
                    const v6296 = v === true;
                    if (v6296) {
                        this[vr] = 1;
                    } else {
                        const v6297 = v === false;
                        const v6298 = v === null;
                        const v6299 = v6297 || v6298;
                        if (v6299) {
                            this[vr] = 0;
                        } else {
                            const v6300 = is_array(v);
                            const v6301 = v.length;
                            const v6302 = v6301 === 0;
                            const v6303 = v6300 && v6302;
                            if (v6303) {
                                this[vr] = 0;
                            } else {
                                const v6304 = typeof v;
                                const v6305 = v6304 === 'object';
                                if (v6305) {
                                    this[vr] = 1;
                                }
                            }
                        }
                    }
                }
            }
            break;
        case 'float':
            const v6306 = typeof v;
            const v6307 = v6306 === 'string';
            if (v6307) {
                mtch = v.match(/^([+\-]?)(\d+(\.\d+)?|\.\d+)([eE][+\-]?\d+)?/);
                const v6308 = !mtch;
                if (v6308) {
                    this[vr] = 0;
                } else {
                    const v6309 = parseFloat(v, 10);
                    this[vr] = v6309;
                }
            } else {
                const v6310 = v === true;
                if (v6310) {
                    this[vr] = 1;
                } else {
                    const v6311 = v === false;
                    const v6312 = v === null;
                    const v6313 = v6311 || v6312;
                    if (v6313) {
                        this[vr] = 0;
                    } else {
                        const v6314 = is_array(v);
                        const v6315 = v.length;
                        const v6316 = v6315 === 0;
                        const v6317 = v6314 && v6316;
                        if (v6317) {
                            this[vr] = 0;
                        } else {
                            const v6318 = typeof v;
                            const v6319 = v6318 === 'object';
                            if (v6319) {
                                this[vr] = 1;
                            }
                        }
                    }
                }
            }
            break;
        case 'string':
            const v6320 = v === null;
            const v6321 = v === false;
            const v6322 = v6320 || v6321;
            if (v6322) {
                this[vr] = '';
            } else {
                const v6323 = is_array(v);
                if (v6323) {
                    this[vr] = 'Array';
                } else {
                    const v6324 = typeof v;
                    const v6325 = v6324 === 'object';
                    if (v6325) {
                        this[vr] = 'Object';
                    } else {
                        const v6326 = v === true;
                        if (v6326) {
                            this[vr] = '1';
                        } else {
                            this[vr] += '';
                        }
                    }
                }
            }
            break;
        case 'array':
            const v6327 = v === null;
            if (v6327) {
                this[vr] = [];
            } else {
                const v6328 = typeof v;
                const v6329 = v6328 !== 'object';
                if (v6329) {
                    this[vr] = [v];
                }
            }
            break;
        case 'object':
            const v6330 = v === null;
            if (v6330) {
                const v6331 = {};
                this[vr] = v6331;
            } else {
                const v6332 = is_array(v);
                if (v6332) {
                    const v6333 = {};
                    const v6334 = v.length;
                    let v6335 = i < v6334;
                    while (v6335) {
                        obj[i] = v;
                        const v6336 = i++;
                        v6335 = i < v6334;
                    }
                    this[vr] = obj;
                } else {
                    const v6337 = typeof v;
                    const v6338 = v6337 !== 'object';
                    if (v6338) {
                        const v6339 = {};
                        v6339.scalar = v;
                        this[vr] = v6339;
                    }
                }
            }
            break;
        case 'null':
            const v6340 = this[vr];
            const v6341 = delete v6340;
            v6341;
            break;
        }
        return true;
    } catch (e) {
        return false;
    }
};
exports.settype = v6342;
const v6405 = function (data) {
    var that = this;
    var utf8Overhead = function (chr) {
        var code = chr.charCodeAt(0);
        const v6343 = code < 128;
        if (v6343) {
            return 0;
        }
        const v6344 = code < 2048;
        if (v6344) {
            return 1;
        }
        return 2;
    };
    const v6347 = function (type, msg, filename, line) {
        const v6345 = that.window;
        const v6346 = new v6345[type](msg, filename, line);
        throw v6346;
    };
    error = v6347;
    const v6361 = function (data, offset, stopchr) {
        var i = 2;
        var buf = [];
        const v6348 = offset + 1;
        var chr = data.slice(offset, v6348);
        let v6349 = chr != stopchr;
        while (v6349) {
            const v6350 = i + offset;
            const v6351 = data.length;
            const v6352 = v6350 > v6351;
            if (v6352) {
                const v6353 = error('Error', 'Invalid');
                v6353;
            }
            const v6354 = buf.push(chr);
            v6354;
            const v6355 = i - 1;
            const v6356 = offset + v6355;
            const v6357 = offset + i;
            chr = data.slice(v6356, v6357);
            i += 1;
            v6349 = chr != stopchr;
        }
        const v6358 = buf.length;
        const v6359 = buf.join('');
        const v6360 = [
            v6358,
            v6359
        ];
        return v6360;
    };
    read_until = v6361;
    const v6371 = function (data, offset, length) {
        var i;
        var chr;
        var buf;
        buf = [];
        (i = 0)
        let v6362 = i < length;
        while (v6362) {
            const v6364 = i - 1;
            const v6365 = offset + v6364;
            const v6366 = offset + i;
            chr = data.slice(v6365, v6366);
            const v6367 = buf.push(chr);
            v6367;
            length -= utf8Overhead(chr);
            const v6363 = i++;
            v6362 = i < length;
        }
        const v6368 = buf.length;
        const v6369 = buf.join('');
        const v6370 = [
            v6368,
            v6369
        ];
        return v6370;
    };
    read_chrs = v6371;
    const v6401 = function (data, offset) {
        var dtype;
        var dataoffset;
        var keyandchrs;
        var keys;
        var contig;
        var length;
        var array;
        var readdata;
        var readData;
        var ccount;
        var stringlength;
        var i;
        var key;
        var kprops;
        var kchrs;
        var vprops;
        var vchrs;
        var value;
        var chrs = 0;
        var typeconvert = function (x) {
            return x;
        };
        const v6372 = !offset;
        if (v6372) {
            offset = 0;
        }
        const v6373 = offset + 1;
        const v6374 = data.slice(offset, v6373);
        dtype = v6374.toLowerCase();
        dataoffset = offset + 2;
        switch (dtype) {
        case 'i':
            const v6376 = function (x) {
                const v6375 = parseInt(x, 10);
                return v6375;
            };
            typeconvert = v6376;
            readData = read_until(data, dataoffset, ';');
            chrs = readData[0];
            readdata = readData[1];
            dataoffset += chrs + 1;
            break;
        case 'b':
            const v6379 = function (x) {
                const v6377 = parseInt(x, 10);
                const v6378 = v6377 !== 0;
                return v6378;
            };
            typeconvert = v6379;
            readData = read_until(data, dataoffset, ';');
            chrs = readData[0];
            readdata = readData[1];
            dataoffset += chrs + 1;
            break;
        case 'd':
            const v6381 = function (x) {
                const v6380 = parseFloat(x);
                return v6380;
            };
            typeconvert = v6381;
            readData = read_until(data, dataoffset, ';');
            chrs = readData[0];
            readdata = readData[1];
            dataoffset += chrs + 1;
            break;
        case 'n':
            readdata = null;
            break;
        case 's':
            ccount = read_until(data, dataoffset, ':');
            chrs = ccount[0];
            stringlength = ccount[1];
            dataoffset += chrs + 2;
            const v6382 = dataoffset + 1;
            const v6383 = parseInt(stringlength, 10);
            readData = read_chrs(data, v6382, v6383);
            chrs = readData[0];
            readdata = readData[1];
            dataoffset += chrs + 2;
            const v6384 = parseInt(stringlength, 10);
            const v6385 = chrs != v6384;
            const v6386 = readdata.length;
            const v6387 = chrs != v6386;
            const v6388 = v6385 && v6387;
            if (v6388) {
                const v6389 = error('SyntaxError', 'String length mismatch');
                v6389;
            }
            break;
        case 'a':
            readdata = {};
            keyandchrs = read_until(data, dataoffset, ':');
            chrs = keyandchrs[0];
            keys = keyandchrs[1];
            dataoffset += chrs + 2;
            length = parseInt(keys, 10);
            contig = true;
            i = 0
            let v6390 = i < length;
            while (v6390) {
                kprops = _unserialize(data, dataoffset);
                kchrs = kprops[1];
                key = kprops[2];
                dataoffset += kchrs;
                vprops = _unserialize(data, dataoffset);
                vchrs = vprops[1];
                value = vprops[2];
                dataoffset += vchrs;
                const v6392 = key !== i;
                if (v6392) {
                    contig = false;
                }
                readdata[key] = value;
                const v6391 = i++;
                v6390 = i < length;
            }
            if (contig) {
                array = new Array(length);
                i = 0
                let v6393 = i < length;
                while (v6393) {
                    const v6395 = readdata[i];
                    array[i] = v6395;
                    const v6394 = i++;
                    v6393 = i < length;
                }
                readdata = array;
            }
            dataoffset += 1;
            break;
        default:
            const v6396 = 'Unknown / Unhandled data type(s): ' + dtype;
            const v6397 = error('SyntaxError', v6396);
            v6397;
            break;
        }
        const v6398 = dataoffset - offset;
        const v6399 = typeconvert(readdata);
        const v6400 = [
            dtype,
            v6398,
            v6399
        ];
        return v6400;
    };
    _unserialize = v6401;
    const v6402 = data + '';
    const v6403 = _unserialize(v6402, 0);
    const v6404 = v6403[2];
    return v6404;
};
exports.unserialize = v6405;
const v6671 = function (old_data, new_data, context_lines, minimal) {
    var i = 0;
    var j = 0;
    var k = 0;
    var ori_hunk_start;
    var new_hunk_start;
    var ori_hunk_end;
    var new_hunk_end;
    var ori_hunk_line_no;
    var new_hunk_line_no;
    var ori_hunk_size;
    var new_hunk_size;
    var MAX_CONTEXT_LINES = Number.POSITIVE_INFINITY;
    var MIN_CONTEXT_LINES = 0;
    var DEFAULT_CONTEXT_LINES = 3;
    var HEADER_PREFIX = '@@ ';
    var HEADER_SUFFIX = ' @@';
    var ORIGINAL_INDICATOR = '-';
    var NEW_INDICATOR = '+';
    var RANGE_SEPARATOR = ',';
    var CONTEXT_INDICATOR = ' ';
    var DELETION_INDICATOR = '-';
    var ADDITION_INDICATOR = '+';
    var ori_lines;
    var new_lines;
    var NEW_LINE = '\n';
    var trim = function (text) {
        const v6406 = typeof text;
        const v6407 = v6406 !== 'string';
        if (v6407) {
            const v6408 = new Error('String parameter required');
            throw v6408;
        }
        const v6409 = text.replace(/(^\s*)|(\s*$)/g, '');
        return v6409;
    };
    var verify_type = function (type) {
        var args = arguments;
        var args_len = arguments.length;
        var basic_types = [
            'number',
            'boolean',
            'string',
            'function',
            'object',
            'undefined'
        ];
        var basic_type;
        var i;
        var j;
        const v6410 = typeof type;
        var type_of_type = v6410;
        const v6411 = type_of_type !== 'string';
        const v6412 = type_of_type !== 'function';
        const v6413 = v6411 && v6412;
        if (v6413) {
            const v6414 = new Error('Bad type parameter');
            throw v6414;
        }
        const v6415 = args_len < 2;
        if (v6415) {
            const v6416 = new Error('Too few arguments');
            throw v6416;
        }
        const v6417 = type_of_type === 'string';
        if (v6417) {
            type = trim(type);
            const v6418 = type === '';
            if (v6418) {
                const v6419 = new Error('Bad type parameter');
                throw v6419;
            }
            j = 0
            const v6420 = basic_types.length;
            let v6421 = j < v6420;
            while (v6421) {
                basic_type = basic_types[j];
                const v6423 = basic_type == type;
                if (v6423) {
                    i = 1
                    let v6424 = i < args_len;
                    while (v6424) {
                        const v6426 = args[i];
                        const v6427 = typeof v6426;
                        const v6428 = v6427 !== type;
                        if (v6428) {
                            const v6429 = new Error('Bad type');
                            throw v6429;
                        }
                        const v6425 = i++;
                        v6424 = i < args_len;
                    }
                    return;
                }
                const v6422 = j++;
                v6421 = j < v6420;
            }
            const v6430 = new Error('Bad type parameter');
            throw v6430;
        }
        (i = 1)
        let v6431 = i < args_len;
        while (v6431) {
            const v6433 = args[i];
            const v6434 = v6433 instanceof type;
            const v6435 = !v6434;
            if (v6435) {
                const v6436 = new Error('Bad type');
                throw v6436;
            }
            const v6432 = i++;
            v6431 = i < args_len;
        }
    };
    var has_value = function (array, value) {
        var i;
        const v6437 = verify_type(Array, array);
        v6437;
        (i = 0)
        const v6438 = array.length;
        let v6439 = i < v6438;
        while (v6439) {
            const v6441 = array[i];
            const v6442 = v6441 === value;
            if (v6442) {
                return true;
            }
            const v6440 = i++;
            v6439 = i < v6438;
        }
        return false;
    };
    var are_type_of = function (type) {
        var args = arguments;
        var args_len = arguments.length;
        var basic_types = [
            'number',
            'boolean',
            'string',
            'function',
            'object',
            'undefined'
        ];
        var basic_type;
        var i;
        var j;
        const v6443 = typeof type;
        var type_of_type = v6443;
        const v6444 = type_of_type !== 'string';
        const v6445 = type_of_type !== 'function';
        const v6446 = v6444 && v6445;
        if (v6446) {
            const v6447 = new Error('Bad type parameter');
            throw v6447;
        }
        const v6448 = args_len < 2;
        if (v6448) {
            const v6449 = new Error('Too few arguments');
            throw v6449;
        }
        const v6450 = type_of_type === 'string';
        if (v6450) {
            type = trim(type);
            const v6451 = type === '';
            if (v6451) {
                return false;
            }
            j = 0
            const v6452 = basic_types.length;
            let v6453 = j < v6452;
            while (v6453) {
                basic_type = basic_types[j];
                const v6455 = basic_type == type;
                if (v6455) {
                    i = 1
                    let v6456 = i < args_len;
                    while (v6456) {
                        const v6458 = args[i];
                        const v6459 = typeof v6458;
                        const v6460 = v6459 != type;
                        if (v6460) {
                            return false;
                        }
                        const v6457 = i++;
                        v6456 = i < args_len;
                    }
                    return true;
                }
                const v6454 = j++;
                v6453 = j < v6452;
            }
            const v6461 = new Error('Bad type parameter');
            throw v6461;
        }
        (i = 1)
        let v6462 = i < args_len;
        while (v6462) {
            const v6464 = args[i];
            const v6465 = v6464 instanceof type;
            const v6466 = !v6465;
            if (v6466) {
                return false;
            }
            const v6463 = i++;
            v6462 = i < args_len;
        }
        return true;
    };
    var get_initialized_array = function (array_size, init_value) {
        var array = [];
        var i;
        const v6467 = verify_type('number', array_size);
        v6467;
        (i = 0)
        let v6468 = i < array_size;
        while (v6468) {
            const v6470 = array.push(init_value);
            v6470;
            const v6469 = i++;
            v6468 = i < array_size;
        }
        return array;
    };
    var split_into_lines = function (text) {
        const v6471 = verify_type('string', text);
        v6471;
        const v6472 = text === '';
        if (v6472) {
            const v6473 = [];
            return v6473;
        }
        const v6474 = text.split('\n');
        return v6474;
    };
    var is_empty_array = function (obj) {
        const v6475 = are_type_of(Array, obj);
        const v6476 = obj.length;
        const v6477 = v6476 === 0;
        const v6478 = v6475 && v6477;
        return v6478;
    };
    var find_longest_common_sequence = function (seq1, seq2, seq1_is_in_lcs, seq2_is_in_lcs) {
        const v6479 = are_type_of(Array, seq1, seq2);
        const v6480 = !v6479;
        if (v6480) {
            const v6481 = new Error('Array parameters are required');
            throw v6481;
        }
        const v6482 = is_empty_array(seq1);
        const v6483 = is_empty_array(seq2);
        const v6484 = v6482 || v6483;
        if (v6484) {
            const v6485 = [];
            return v6485;
        }
        var lcs_lens = function (xs, ys) {
            var i;
            var j;
            var prev;
            const v6486 = ys.length;
            const v6487 = v6486 + 1;
            var curr = get_initialized_array(v6487, 0);
            (i = 0)
            const v6488 = xs.length;
            let v6489 = i < v6488;
            while (v6489) {
                prev = curr.slice(0);
                j = 0
                const v6491 = ys.length;
                let v6492 = j < v6491;
                while (v6492) {
                    const v6494 = xs[i];
                    const v6495 = ys[j];
                    const v6496 = v6494 === v6495;
                    if (v6496) {
                        const v6497 = j + 1;
                        const v6498 = prev[j];
                        curr[v6497] = v6498 + 1;
                    } else {
                        const v6500 = curr[j];
                        const v6501 = j + 1;
                        const v6502 = prev[v6501];
                        const v6503 = Math.max(v6500, v6502);
                        curr[v6499] = v6503;
                    }
                    const v6493 = j++;
                    v6492 = j < v6491;
                }
                const v6490 = i++;
                v6489 = i < v6488;
            }
            return curr;
        };
        var find_lcs = function (xs, xidx, xs_is_in, ys) {
            var i;
            var xb;
            var xe;
            var ll_b;
            var ll_e;
            var pivot;
            var max;
            var yb;
            var ye;
            var nx = xs.length;
            var ny = ys.length;
            const v6504 = nx === 0;
            if (v6504) {
                const v6505 = [];
                return v6505;
            }
            const v6506 = nx === 1;
            if (v6506) {
                const v6507 = xs[0];
                const v6508 = has_value(ys, v6507);
                if (v6508) {
                    xs_is_in[xidx] = true;
                    const v6509 = xs[0];
                    const v6510 = [v6509];
                    return v6510;
                }
                const v6511 = [];
                return v6511;
            }
            const v6512 = nx / 2;
            i = Math.floor(v6512);
            xb = xs.slice(0, i);
            xe = xs.slice(i);
            ll_b = lcs_lens(xb, ys);
            const v6513 = xe.slice(0);
            const v6514 = v6513.reverse();
            const v6515 = ys.slice(0);
            const v6516 = v6515.reverse();
            ll_e = lcs_lens(v6514, v6516);
            pivot = 0;
            max = 0;
            (j = 0)
            let v6517 = j <= ny;
            while (v6517) {
                const v6519 = ll_b[j];
                const v6520 = ny - j;
                const v6521 = ll_e[v6520];
                const v6522 = v6519 + v6521;
                const v6523 = v6522 > max;
                if (v6523) {
                    pivot = j;
                    const v6524 = ll_b[j];
                    const v6525 = ny - j;
                    const v6526 = ll_e[v6525];
                    max = v6524 + v6526;
                }
                const v6518 = j++;
                v6517 = j <= ny;
            }
            yb = ys.slice(0, pivot);
            ye = ys.slice(pivot);
            const v6527 = find_lcs(xb, xidx, xs_is_in, yb);
            const v6528 = xidx + i;
            const v6529 = find_lcs(xe, v6528, xs_is_in, ye);
            const v6530 = v6527.concat(v6529);
            return v6530;
        };
        const v6531 = find_lcs(seq1, 0, seq1_is_in_lcs, seq2);
        v6531;
        const v6532 = find_lcs(seq2, 0, seq2_is_in_lcs, seq1);
        return v6532;
    };
    const v6533 = are_type_of('string', old_data, new_data);
    const v6534 = v6533 === false;
    if (v6534) {
        return false;
    }
    const v6535 = old_data == new_data;
    if (v6535) {
        return '';
    }
    const v6536 = typeof context_lines;
    const v6537 = v6536 !== 'number';
    const v6538 = context_lines > MAX_CONTEXT_LINES;
    const v6539 = v6537 || v6538;
    const v6540 = context_lines < MIN_CONTEXT_LINES;
    const v6541 = v6539 || v6540;
    if (v6541) {
        context_lines = DEFAULT_CONTEXT_LINES;
    }
    ori_lines = split_into_lines(old_data);
    new_lines = split_into_lines(new_data);
    var ori_len = ori_lines.length;
    var new_len = new_lines.length;
    var ori_is_in_lcs = get_initialized_array(ori_len, false);
    var new_is_in_lcs = get_initialized_array(new_len, false);
    const v6542 = find_longest_common_sequence(ori_lines, new_lines, ori_is_in_lcs, new_is_in_lcs);
    var lcs_len = v6542.length;
    var unidiff = '';
    const v6543 = lcs_len === 0;
    if (v6543) {
        const v6544 = HEADER_PREFIX + ORIGINAL_INDICATOR;
        const v6545 = ori_len > 0;
        let v6546;
        if (v6545) {
            v6546 = '1';
        } else {
            v6546 = '0';
        }
        const v6547 = v6544 + v6546;
        const v6548 = v6547 + RANGE_SEPARATOR;
        const v6549 = v6548 + ori_len;
        const v6550 = v6549 + ' ';
        const v6551 = v6550 + NEW_INDICATOR;
        const v6552 = new_len > 0;
        let v6553;
        if (v6552) {
            v6553 = '1';
        } else {
            v6553 = '0';
        }
        const v6554 = v6551 + v6553;
        const v6555 = v6554 + RANGE_SEPARATOR;
        const v6556 = v6555 + new_len;
        unidiff = v6556 + HEADER_SUFFIX;
        i = 0
        let v6557 = i < ori_len;
        while (v6557) {
            const v6559 = NEW_LINE + DELETION_INDICATOR;
            const v6560 = ori_lines[i];
            unidiff += v6559 + v6560;
            const v6558 = i++;
            v6557 = i < ori_len;
        }
        j = 0
        let v6561 = j < new_len;
        while (v6561) {
            const v6563 = NEW_LINE + ADDITION_INDICATOR;
            const v6564 = new_lines[j];
            unidiff += v6563 + v6564;
            const v6562 = j++;
            v6561 = j < new_len;
        }
        return unidiff;
    }
    var leading_context = [];
    var trailing_context = [];
    var actual_leading_context = [];
    var actual_trailing_context = [];
    var regularize_leading_context = function (context) {
        const v6565 = context.length;
        const v6566 = v6565 === 0;
        const v6567 = context_lines === 0;
        const v6568 = v6566 || v6567;
        if (v6568) {
            const v6569 = [];
            return v6569;
        }
        const v6570 = context.length;
        const v6571 = v6570 - context_lines;
        var context_start_pos = Math.max(v6571, 0);
        const v6572 = context.slice(context_start_pos);
        return v6572;
    };
    var regularize_trailing_context = function (context) {
        const v6573 = context.length;
        const v6574 = v6573 === 0;
        const v6575 = context_lines === 0;
        const v6576 = v6574 || v6575;
        if (v6576) {
            const v6577 = [];
            return v6577;
        }
        const v6578 = context.length;
        const v6579 = Math.min(context_lines, v6578);
        const v6580 = context.slice(0, v6579);
        return v6580;
    };
    const v6581 = i < ori_len;
    const v6582 = ori_is_in_lcs[i];
    const v6583 = v6582 === true;
    const v6584 = v6581 && v6583;
    const v6585 = new_is_in_lcs[i];
    const v6586 = v6585 === true;
    let v6587 = v6584 && v6586;
    while (v6587) {
        const v6588 = ori_lines[i];
        const v6589 = leading_context.push(v6588);
        v6589;
        const v6590 = i++;
        v6590;
        v6587 = v6584 && v6586;
    }
    j = i;
    k = i;
    ori_hunk_start = i;
    new_hunk_start = j;
    ori_hunk_end = i;
    new_hunk_end = j;
    const v6591 = i < ori_len;
    const v6592 = j < new_len;
    let v6593 = v6591 || v6592;
    while (v6593) {
        const v6594 = i < ori_len;
        const v6595 = ori_is_in_lcs[i];
        const v6596 = v6595 === false;
        let v6597 = v6594 && v6596;
        while (v6597) {
            const v6598 = i++;
            v6598;
            v6597 = v6594 && v6596;
        }
        ori_hunk_end = i;
        const v6599 = j < new_len;
        const v6600 = new_is_in_lcs[j];
        const v6601 = v6600 === false;
        let v6602 = v6599 && v6601;
        while (v6602) {
            const v6603 = j++;
            v6603;
            v6602 = v6599 && v6601;
        }
        new_hunk_end = j;
        trailing_context = [];
        const v6604 = i < ori_len;
        const v6605 = ori_is_in_lcs[i];
        const v6606 = v6605 === true;
        const v6607 = v6604 && v6606;
        const v6608 = j < new_len;
        const v6609 = v6607 && v6608;
        const v6610 = new_is_in_lcs[j];
        const v6611 = v6610 === true;
        let v6612 = v6609 && v6611;
        while (v6612) {
            const v6613 = ori_lines[i];
            const v6614 = trailing_context.push(v6613);
            v6614;
            const v6615 = k++;
            v6615;
            const v6616 = i++;
            v6616;
            const v6617 = j++;
            v6617;
            v6612 = v6609 && v6611;
        }
        const v6618 = k >= lcs_len;
        const v6619 = trailing_context.length;
        const v6620 = 2 * context_lines;
        const v6621 = v6619 >= v6620;
        const v6622 = v6618 || v6621;
        if (v6622) {
            const v6623 = trailing_context.length;
            const v6624 = 2 * context_lines;
            const v6625 = v6623 < v6624;
            if (v6625) {
                trailing_context = [];
                i = ori_len;
                j = new_len;
                ori_hunk_end = ori_len;
                new_hunk_end = new_len;
            }
            actual_leading_context = regularize_leading_context(leading_context);
            actual_trailing_context = regularize_trailing_context(trailing_context);
            ori_hunk_start -= actual_leading_context.length;
            new_hunk_start -= actual_leading_context.length;
            ori_hunk_end += actual_trailing_context.length;
            new_hunk_end += actual_trailing_context.length;
            ori_hunk_line_no = ori_hunk_start + 1;
            new_hunk_line_no = new_hunk_start + 1;
            ori_hunk_size = ori_hunk_end - ori_hunk_start;
            new_hunk_size = new_hunk_end - new_hunk_start;
            const v6626 = HEADER_PREFIX + ORIGINAL_INDICATOR;
            const v6627 = v6626 + ori_hunk_line_no;
            const v6628 = v6627 + RANGE_SEPARATOR;
            const v6629 = v6628 + ori_hunk_size;
            const v6630 = v6629 + ' ';
            const v6631 = v6630 + NEW_INDICATOR;
            const v6632 = v6631 + new_hunk_line_no;
            const v6633 = v6632 + RANGE_SEPARATOR;
            const v6634 = v6633 + new_hunk_size;
            const v6635 = v6634 + HEADER_SUFFIX;
            unidiff += v6635 + NEW_LINE;
            const v6636 = ori_hunk_start < ori_hunk_end;
            const v6637 = new_hunk_start < new_hunk_end;
            let v6638 = v6636 || v6637;
            while (v6638) {
                const v6639 = ori_hunk_start < ori_hunk_end;
                const v6640 = ori_is_in_lcs[ori_hunk_start];
                const v6641 = v6640 === true;
                const v6642 = v6639 && v6641;
                const v6643 = new_is_in_lcs[new_hunk_start];
                const v6644 = v6643 === true;
                const v6645 = v6642 && v6644;
                if (v6645) {
                    const v6646 = ori_lines[ori_hunk_start];
                    const v6647 = CONTEXT_INDICATOR + v6646;
                    unidiff += v6647 + NEW_LINE;
                    const v6648 = ori_hunk_start++;
                    v6648;
                    const v6649 = new_hunk_start++;
                    v6649;
                } else {
                    const v6650 = ori_hunk_start < ori_hunk_end;
                    const v6651 = ori_is_in_lcs[ori_hunk_start];
                    const v6652 = v6651 === false;
                    const v6653 = v6650 && v6652;
                    if (v6653) {
                        const v6654 = ori_lines[ori_hunk_start];
                        const v6655 = DELETION_INDICATOR + v6654;
                        unidiff += v6655 + NEW_LINE;
                        const v6656 = ori_hunk_start++;
                        v6656;
                    } else {
                        const v6657 = new_hunk_start < new_hunk_end;
                        const v6658 = new_is_in_lcs[new_hunk_start];
                        const v6659 = v6658 === false;
                        const v6660 = v6657 && v6659;
                        if (v6660) {
                            const v6661 = new_lines[new_hunk_start];
                            const v6662 = ADDITION_INDICATOR + v6661;
                            unidiff += v6662 + NEW_LINE;
                            const v6663 = new_hunk_start++;
                            v6663;
                        }
                    }
                }
                v6638 = v6636 || v6637;
            }
            ori_hunk_start = i;
            new_hunk_start = j;
            leading_context = trailing_context;
        }
        v6593 = v6591 || v6592;
    }
    const v6664 = unidiff.length;
    const v6665 = v6664 > 0;
    const v6666 = unidiff.length;
    const v6667 = unidiff.charAt(v6666);
    const v6668 = v6667 === NEW_LINE;
    const v6669 = v6665 && v6668;
    if (v6669) {
        const v6670 = -1;
        unidiff = unidiff.slice(0, v6670);
    }
    return unidiff;
};
exports.xdiff_string_diff = v6671;
const v6821 = function (originalStr, patch, flags, error) {
    var getNativeFlags = function (regex) {
        const v6672 = regex.global;
        let v6673;
        if (v6672) {
            v6673 = 'g';
        } else {
            v6673 = '';
        }
        const v6674 = regex.ignoreCase;
        let v6675;
        if (v6674) {
            v6675 = 'i';
        } else {
            v6675 = '';
        }
        const v6676 = v6673 + v6675;
        const v6677 = regex.multiline;
        let v6678;
        if (v6677) {
            v6678 = 'm';
        } else {
            v6678 = '';
        }
        const v6679 = v6676 + v6678;
        const v6680 = regex.extended;
        let v6681;
        if (v6680) {
            v6681 = 'x';
        } else {
            v6681 = '';
        }
        const v6682 = v6679 + v6681;
        const v6683 = regex.sticky;
        let v6684;
        if (v6683) {
            v6684 = 'y';
        } else {
            v6684 = '';
        }
        const v6685 = v6682 + v6684;
        return v6685;
    };
    var cbSplit = function (string, sep) {
        const v6686 = sep instanceof RegExp;
        const v6687 = !v6686;
        if (v6687) {
            const v6688 = String.prototype;
            const v6689 = v6688.split;
            const v6690 = v6689.apply(string, arguments);
            return v6690;
        }
        var str = String(string);
        var output = [];
        var lastLastIndex = 0;
        var match;
        var lastLength;
        var limit = Infinity;
        var x = sep._xregexp;
        const v6691 = sep.source;
        const v6692 = getNativeFlags(sep);
        const v6693 = v6692 + 'g';
        var s = new RegExp(v6691, v6693);
        if (x) {
            const v6694 = x.source;
            const v6695 = x.captureNames;
            const v6696 = x.captureNames;
            const v6697 = v6696.slice(0);
            let v6698;
            if (v6695) {
                v6698 = v6697;
            } else {
                v6698 = null;
            }
            const v6699 = {};
            v6699.source = v6694;
            v6699.captureNames = v6698;
            s._xregexp = v6699;
        }
        while (match = s.exec(str)) {
            const v6700 = s.lastIndex;
            const v6701 = v6700 > lastLastIndex;
            if (v6701) {
                const v6702 = match.index;
                const v6703 = str.slice(lastLastIndex, v6702);
                const v6704 = output.push(v6703);
                v6704;
                const v6705 = match.length;
                const v6706 = v6705 > 1;
                const v6707 = match.index;
                const v6708 = str.length;
                const v6709 = v6707 < v6708;
                const v6710 = v6706 && v6709;
                if (v6710) {
                    const v6711 = Array.prototype;
                    const v6712 = v6711.push;
                    const v6713 = match.slice(1);
                    const v6714 = v6712.apply(output, v6713);
                    v6714;
                }
                const v6715 = match[0];
                lastLength = v6715.length;
                lastLastIndex = s.lastIndex;
                const v6716 = output.length;
                const v6717 = v6716 >= limit;
                if (v6717) {
                    break;
                }
            }
            const v6718 = s.lastIndex;
            const v6719 = match.index;
            const v6720 = v6718 === v6719;
            if (v6720) {
                const v6721 = s.lastIndex;
                const v6722 = v6721++;
                v6722;
            }
        }
        const v6723 = str.length;
        const v6724 = lastLastIndex === v6723;
        if (v6724) {
            const v6725 = s.test('');
            const v6726 = !v6725;
            const v6727 = v6726 || lastLength;
            if (v6727) {
                const v6728 = output.push('');
                v6728;
            }
        } else {
            const v6729 = str.slice(lastLastIndex);
            const v6730 = output.push(v6729);
            v6730;
        }
        const v6731 = output.length;
        const v6732 = v6731 > limit;
        const v6733 = output.slice(0, limit);
        let v6734;
        if (v6732) {
            v6734 = v6733;
        } else {
            v6734 = output;
        }
        return v6734;
    };
    var i = 0;
    var ll = 0;
    var ranges = [];
    var lastLinePos = 0;
    var firstChar = '';
    var rangeExp = /^@@\s+-(\d+),(\d+)\s+\+(\d+),(\d+)\s+@@$/;
    var lineBreaks = /\r?\n/;
    const v6735 = patch.replace(/(\r?\n)+$/, '');
    var lines = cbSplit(v6735, lineBreaks);
    var origLines = cbSplit(originalStr, lineBreaks);
    var newStrArr = [];
    var linePos = 0;
    var errors = '';
    var optTemp = 0;
    var OPTS = {};
    OPTS['XDIFF_PATCH_NORMAL'] = 1;
    OPTS['XDIFF_PATCH_REVERSE'] = 2;
    OPTS['XDIFF_PATCH_IGNORESPACE'] = 4;
    const v6736 = typeof originalStr;
    const v6737 = v6736 !== 'string';
    const v6738 = !patch;
    const v6739 = v6737 || v6738;
    if (v6739) {
        return false;
    }
    const v6740 = !flags;
    if (v6740) {
        flags = 'XDIFF_PATCH_NORMAL';
    }
    const v6741 = typeof flags;
    const v6742 = v6741 !== 'number';
    if (v6742) {
        const v6743 = [];
        flags = v6743.concat(flags);
        i = 0
        const v6744 = flags.length;
        let v6745 = i < v6744;
        while (v6745) {
            const v6747 = flags[i];
            const v6748 = OPTS[v6747];
            if (v6748) {
                const v6749 = flags[i];
                const v6750 = OPTS[v6749];
                optTemp = optTemp | v6750;
            }
            const v6746 = i++;
            v6745 = i < v6744;
        }
        flags = optTemp;
    }
    const v6751 = OPTS.XDIFF_PATCH_NORMAL;
    const v6752 = flags & v6751;
    if (v6752) {
        (i = 0, ll = lines.length)
        let v6753 = i < ll;
        while (v6753) {
            const v6755 = lines[i];
            ranges = v6755.match(rangeExp);
            if (ranges) {
                lastLinePos = linePos;
                const v6756 = ranges[1];
                linePos = v6756 - 1;
                let v6757 = lastLinePos < linePos;
                while (v6757) {
                    const v6758 = newStrArr.length;
                    const v6759 = lastLinePos++;
                    const v6760 = origLines[v6759];
                    newStrArr[v6758] = v6760;
                    v6757 = lastLinePos < linePos;
                }
                const v6761 = ++i;
                const v6762 = lines[v6761];
                const v6763 = lines[i];
                const v6764 = rangeExp.exec(v6763);
                const v6765 = v6764 === null;
                let v6766 = v6762 && v6765;
                while (v6766) {
                    const v6767 = lines[i];
                    firstChar = v6767.charAt(0);
                    switch (firstChar) {
                    case '-':
                        const v6768 = ++linePos;
                        v6768;
                        break;
                    case '+':
                        const v6770 = lines[i];
                        const v6771 = v6770.slice(1);
                        newStrArr[v6769] = v6771;
                        break;
                    case ' ':
                        const v6772 = newStrArr.length;
                        const v6773 = linePos++;
                        const v6774 = origLines[v6773];
                        newStrArr[v6772] = v6774;
                        break;
                    default:
                        throw 'Unrecognized initial character in unidiff line';
                    }
                    v6766 = v6762 && v6765;
                }
                const v6775 = lines[i];
                if (v6775) {
                    const v6776 = i--;
                    v6776;
                }
            }
            const v6754 = i++;
            v6753 = i < ll;
        }
        const v6777 = linePos > 0;
        const v6778 = origLines.length;
        const v6779 = linePos < v6778;
        let v6780 = v6777 && v6779;
        while (v6780) {
            const v6781 = newStrArr.length;
            const v6782 = linePos++;
            const v6783 = origLines[v6782];
            newStrArr[v6781] = v6783;
            v6780 = v6777 && v6779;
        }
    } else {
        const v6784 = OPTS.XDIFF_PATCH_REVERSE;
        const v6785 = flags & v6784;
        if (v6785) {
            (i = 0, ll = lines.length)
            let v6786 = i < ll;
            while (v6786) {
                const v6788 = lines[i];
                ranges = v6788.match(rangeExp);
                if (ranges) {
                    lastLinePos = linePos;
                    const v6789 = ranges[3];
                    linePos = v6789 - 1;
                    let v6790 = lastLinePos < linePos;
                    while (v6790) {
                        const v6791 = newStrArr.length;
                        const v6792 = lastLinePos++;
                        const v6793 = origLines[v6792];
                        newStrArr[v6791] = v6793;
                        v6790 = lastLinePos < linePos;
                    }
                    const v6794 = ++i;
                    const v6795 = lines[v6794];
                    const v6796 = lines[i];
                    const v6797 = rangeExp.exec(v6796);
                    const v6798 = v6797 === null;
                    let v6799 = v6795 && v6798;
                    while (v6799) {
                        const v6800 = lines[i];
                        firstChar = v6800.charAt(0);
                        switch (firstChar) {
                        case '-':
                            const v6802 = lines[i];
                            const v6803 = v6802.slice(1);
                            newStrArr[v6801] = v6803;
                            break;
                        case '+':
                            const v6804 = ++linePos;
                            v6804;
                            break;
                        case ' ':
                            const v6805 = newStrArr.length;
                            const v6806 = linePos++;
                            const v6807 = origLines[v6806];
                            newStrArr[v6805] = v6807;
                            break;
                        default:
                            throw 'Unrecognized initial character in unidiff line';
                        }
                        v6799 = v6795 && v6798;
                    }
                    const v6808 = lines[i];
                    if (v6808) {
                        const v6809 = i--;
                        v6809;
                    }
                }
                const v6787 = i++;
                v6786 = i < ll;
            }
            const v6810 = linePos > 0;
            const v6811 = origLines.length;
            const v6812 = linePos < v6811;
            let v6813 = v6810 && v6812;
            while (v6813) {
                const v6814 = newStrArr.length;
                const v6815 = linePos++;
                const v6816 = origLines[v6815];
                newStrArr[v6814] = v6816;
                v6813 = v6810 && v6812;
            }
        }
    }
    const v6817 = typeof error;
    const v6818 = v6817 === 'string';
    if (v6818) {
        const v6819 = this.window;
        v6819[error] = errors;
    }
    const v6820 = newStrArr.join('\n');
    return v6820;
};
exports.xdiff_string_patch = v6821;
const v6870 = function (str_data) {
    var tmp_arr = [];
    var i = 0;
    var ac = 0;
    var c1 = 0;
    var c2 = 0;
    var c3 = 0;
    var c4 = 0;
    str_data += '';
    const v6822 = str_data.length;
    let v6823 = i < v6822;
    while (v6823) {
        c1 = str_data.charCodeAt(i);
        const v6824 = c1 <= 191;
        if (v6824) {
            const v6826 = String.fromCharCode(c1);
            tmp_arr[v6825] = v6826;
            const v6827 = i++;
            v6827;
        } else {
            const v6828 = c1 <= 223;
            if (v6828) {
                const v6829 = i + 1;
                c2 = str_data.charCodeAt(v6829);
                const v6831 = c1 & 31;
                const v6832 = v6831 << 6;
                const v6833 = c2 & 63;
                const v6834 = v6832 | v6833;
                const v6835 = String.fromCharCode(v6834);
                tmp_arr[v6830] = v6835;
                i += 2;
            } else {
                const v6836 = c1 <= 239;
                if (v6836) {
                    const v6837 = i + 1;
                    c2 = str_data.charCodeAt(v6837);
                    const v6838 = i + 2;
                    c3 = str_data.charCodeAt(v6838);
                    const v6840 = c1 & 15;
                    const v6841 = v6840 << 12;
                    const v6842 = c2 & 63;
                    const v6843 = v6842 << 6;
                    const v6844 = v6841 | v6843;
                    const v6845 = c3 & 63;
                    const v6846 = v6844 | v6845;
                    const v6847 = String.fromCharCode(v6846);
                    tmp_arr[v6839] = v6847;
                    i += 3;
                } else {
                    const v6848 = i + 1;
                    c2 = str_data.charCodeAt(v6848);
                    const v6849 = i + 2;
                    c3 = str_data.charCodeAt(v6849);
                    const v6850 = i + 3;
                    c4 = str_data.charCodeAt(v6850);
                    const v6851 = c1 & 7;
                    const v6852 = v6851 << 18;
                    const v6853 = c2 & 63;
                    const v6854 = v6853 << 12;
                    const v6855 = v6852 | v6854;
                    const v6856 = c3 & 63;
                    const v6857 = v6856 << 6;
                    const v6858 = v6855 | v6857;
                    const v6859 = c4 & 63;
                    c1 = v6858 | v6859;
                    c1 -= 65536;
                    const v6861 = c1 >> 10;
                    const v6862 = v6861 & 1023;
                    const v6863 = 55296 | v6862;
                    const v6864 = String.fromCharCode(v6863);
                    tmp_arr[v6860] = v6864;
                    const v6866 = c1 & 1023;
                    const v6867 = 56320 | v6866;
                    const v6868 = String.fromCharCode(v6867);
                    tmp_arr[v6865] = v6868;
                    i += 4;
                }
            }
        }
        v6823 = i < v6822;
    }
    const v6869 = tmp_arr.join('');
    return v6869;
};
exports.utf8_decode = v6870;
const v6922 = function (argString) {
    const v6871 = argString === null;
    const v6872 = typeof argString;
    const v6873 = v6872 === 'undefined';
    const v6874 = v6871 || v6873;
    if (v6874) {
        return '';
    }
    var string = argString + '';
    var utftext = '';
    var start;
    var end;
    var stringl = 0;
    end = 0;
    start = end;
    stringl = string.length;
    var n = 0;
    let v6875 = n < stringl;
    while (v6875) {
        var c1 = string.charCodeAt(n);
        var enc = null;
        const v6877 = c1 < 128;
        if (v6877) {
            const v6878 = end++;
            v6878;
        } else {
            const v6879 = c1 > 127;
            const v6880 = c1 < 2048;
            const v6881 = v6879 && v6880;
            if (v6881) {
                const v6882 = c1 >> 6;
                const v6883 = v6882 | 192;
                const v6884 = c1 & 63;
                const v6885 = v6884 | 128;
                enc = String.fromCharCode(v6883, v6885);
            } else {
                const v6886 = c1 & 63488;
                const v6887 = v6886 != 55296;
                if (v6887) {
                    const v6888 = c1 >> 12;
                    const v6889 = v6888 | 224;
                    const v6890 = c1 >> 6;
                    const v6891 = v6890 & 63;
                    const v6892 = v6891 | 128;
                    const v6893 = c1 & 63;
                    const v6894 = v6893 | 128;
                    enc = String.fromCharCode(v6889, v6892, v6894);
                } else {
                    const v6895 = c1 & 64512;
                    const v6896 = v6895 != 55296;
                    if (v6896) {
                        const v6897 = 'Unmatched trail surrogate at ' + n;
                        const v6898 = new RangeError(v6897);
                        throw v6898;
                    }
                    const v6899 = ++n;
                    var c2 = string.charCodeAt(v6899);
                    const v6900 = c2 & 64512;
                    const v6901 = v6900 != 56320;
                    if (v6901) {
                        const v6902 = n - 1;
                        const v6903 = 'Unmatched lead surrogate at ' + v6902;
                        const v6904 = new RangeError(v6903);
                        throw v6904;
                    }
                    const v6905 = c1 & 1023;
                    const v6906 = v6905 << 10;
                    const v6907 = c2 & 1023;
                    const v6908 = v6906 + v6907;
                    c1 = v6908 + 65536;
                    const v6909 = c1 >> 18;
                    const v6910 = v6909 | 240;
                    const v6911 = c1 >> 12;
                    const v6912 = v6911 & 63;
                    const v6913 = v6912 | 128;
                    const v6914 = c1 >> 6;
                    const v6915 = v6914 & 63;
                    const v6916 = v6915 | 128;
                    const v6917 = c1 & 63;
                    const v6918 = v6917 | 128;
                    enc = String.fromCharCode(v6910, v6913, v6916, v6918);
                }
            }
        }
        const v6919 = enc !== null;
        if (v6919) {
            const v6920 = end > start;
            if (v6920) {
                utftext += string.slice(start, end);
            }
            utftext += enc;
            end = n + 1;
            start = end;
        }
        const v6876 = n++;
        v6875 = n < stringl;
    }
    const v6921 = end > start;
    if (v6921) {
        utftext += string.slice(start, stringl);
    }
    return utftext;
};
exports.utf8_encode = v6922;
const v6932 = function (trans) {
    var key;
    var tmp_ar = {};
    const v6923 = typeof trans;
    const v6924 = v6923 === 'object';
    const v6925 = trans && v6924;
    const v6926 = trans.change_key_case;
    const v6927 = v6925 && v6926;
    if (v6927) {
        const v6928 = trans.flip();
        return v6928;
    }
    for (key in trans) {
        const v6929 = trans.hasOwnProperty(key);
        const v6930 = !v6929;
        if (v6930) {
            continue;
        }
        const v6931 = trans[key];
        tmp_ar[v6931] = key;
    }
    return tmp_ar;
};
exports.array_flip = v6932;
const v6963 = function (arr1, arr2) {
    var idx = '';
    const v6933 = Object.prototype;
    const v6934 = v6933.toString;
    const v6935 = v6934.call(arr1);
    const v6936 = v6935 === '[object Array]';
    const v6937 = arr1 && v6936;
    const v6938 = v6937 && arr2;
    const v6939 = Object.prototype;
    const v6940 = v6939.toString;
    const v6941 = v6940.call(arr2);
    const v6942 = v6941 === '[object Array]';
    const v6943 = v6938 && v6942;
    if (v6943) {
        for (idx in arr2) {
            const v6944 = arr2[idx];
            const v6945 = arr1.push(v6944);
            v6945;
        }
    } else {
        const v6946 = arr1 instanceof Object;
        const v6947 = arr1 && v6946;
        const v6948 = arr2 instanceof Object;
        const v6949 = arr2 && v6948;
        const v6950 = v6947 && v6949;
        if (v6950) {
            for (idx in arr2) {
                const v6951 = idx in arr1;
                if (v6951) {
                    const v6952 = arr1[idx];
                    const v6953 = typeof v6952;
                    const v6954 = v6953 === 'object';
                    const v6955 = typeof arr2;
                    const v6956 = v6955 === 'object';
                    const v6957 = v6954 && v6956;
                    if (v6957) {
                        const v6958 = arr1[idx];
                        const v6959 = arr2[idx];
                        const v6960 = this.array_merge(v6958, v6959);
                        arr1[idx] = v6960;
                    } else {
                        const v6961 = arr2[idx];
                        arr1[idx] = v6961;
                    }
                } else {
                    const v6962 = arr2[idx];
                    arr1[idx] = v6962;
                }
            }
        }
    }
    return arr1;
};
exports.array_merge_recursive = v6963;
const v6996 = function (needle, haystack, argStrict) {
    const v6964 = !argStrict;
    const v6965 = !v6964;
    var strict = v6965;
    var key = '';
    const v6966 = typeof haystack;
    const v6967 = v6966 === 'object';
    const v6968 = haystack && v6967;
    const v6969 = haystack.change_key_case;
    const v6970 = v6968 && v6969;
    if (v6970) {
        const v6971 = haystack.search(needle, argStrict);
        return v6971;
    }
    const v6972 = typeof needle;
    const v6973 = v6972 === 'object';
    const v6974 = needle.exec;
    const v6975 = v6973 && v6974;
    if (v6975) {
        const v6976 = !strict;
        if (v6976) {
            const v6977 = needle.global;
            let v6978;
            if (v6977) {
                v6978 = 'g';
            } else {
                v6978 = '';
            }
            const v6979 = 'i' + v6978;
            const v6980 = needle.multiline;
            let v6981;
            if (v6980) {
                v6981 = 'm';
            } else {
                v6981 = '';
            }
            const v6982 = v6979 + v6981;
            const v6983 = needle.sticky;
            let v6984;
            if (v6983) {
                v6984 = 'y';
            } else {
                v6984 = '';
            }
            var flags = v6982 + v6984;
            const v6985 = needle.source;
            needle = new RegExp(v6985, flags);
        }
        for (key in haystack) {
            const v6986 = haystack[key];
            const v6987 = needle.test(v6986);
            if (v6987) {
                return key;
            }
        }
        return false;
    }
    for (key in haystack) {
        const v6988 = haystack[key];
        const v6989 = v6988 === needle;
        const v6990 = strict && v6989;
        const v6991 = !strict;
        const v6992 = haystack[key];
        const v6993 = v6992 == needle;
        const v6994 = v6991 && v6993;
        const v6995 = v6990 || v6994;
        if (v6995) {
            return key;
        }
    }
    return false;
};
exports.array_search = v6996;
const v7030 = function (arr, offst, lgth, preserve_keys) {
    var key = '';
    const v6997 = Object.prototype;
    const v6998 = v6997.toString;
    const v6999 = v6998.call(arr);
    const v7000 = v6999 !== '[object Array]';
    const v7001 = offst !== 0;
    const v7002 = preserve_keys && v7001;
    const v7003 = v7000 || v7002;
    if (v7003) {
        var lgt = 0;
        var newAssoc = {};
        for (key in arr) {
            lgt += 1;
            const v7004 = arr[key];
            newAssoc[key] = v7004;
        }
        arr = newAssoc;
        const v7005 = offst < 0;
        const v7006 = lgt + offst;
        if (v7005) {
            offst = v7006;
        } else {
            offst = offst;
        }
        const v7007 = lgth === undefined;
        const v7008 = lgth < 0;
        const v7009 = lgt + lgth;
        const v7010 = v7009 - offst;
        let v7011;
        if (v7008) {
            v7011 = v7010;
        } else {
            v7011 = lgth;
        }
        if (v7007) {
            lgth = lgt;
        } else {
            lgth = v7011;
        }
        var assoc = {};
        var start = false;
        const v7012 = -1;
        var it = v7012;
        var arrlgth = 0;
        var no_pk_idx = 0;
        for (key in arr) {
            const v7013 = ++it;
            v7013;
            const v7014 = arrlgth >= lgth;
            if (v7014) {
                break;
            }
            const v7015 = it == offst;
            if (v7015) {
                start = true;
            }
            const v7016 = !start;
            if (v7016) {
                continue;
            }
            const v7017 = ++arrlgth;
            v7017;
            const v7018 = this.is_int(key);
            const v7019 = !preserve_keys;
            const v7020 = v7018 && v7019;
            if (v7020) {
                const v7021 = no_pk_idx++;
                const v7022 = arr[key];
                assoc[v7021] = v7022;
            } else {
                const v7023 = arr[key];
                assoc[key] = v7023;
            }
        }
        return assoc;
    }
    const v7024 = lgth === undefined;
    if (v7024) {
        const v7025 = arr.slice(offst);
        return v7025;
    } else {
        const v7026 = lgth >= 0;
        if (v7026) {
            const v7027 = offst + lgth;
            const v7028 = arr.slice(offst, v7027);
            return v7028;
        } else {
            const v7029 = arr.slice(offst, lgth);
            return v7029;
        }
    }
};
exports.array_slice = v7030;
const v7087 = function (arr, offst, lgth, replacement) {
    var _checkToUpIndices = function (arr, ct, key) {
        const v7031 = arr[ct];
        const v7032 = v7031 !== undefined;
        if (v7032) {
            var tmp = ct;
            ct += 1;
            const v7033 = ct === key;
            if (v7033) {
                ct += 1;
            }
            ct = _checkToUpIndices(arr, ct, key);
            const v7034 = arr[tmp];
            arr[ct] = v7034;
            const v7035 = arr[tmp];
            const v7036 = delete v7035;
            v7036;
        }
        return ct;
    };
    const v7037 = typeof replacement;
    const v7038 = v7037 !== 'object';
    const v7039 = replacement && v7038;
    if (v7039) {
        replacement = [replacement];
    }
    const v7040 = lgth === undefined;
    if (v7040) {
        const v7041 = offst >= 0;
        const v7042 = arr.length;
        const v7043 = v7042 - offst;
        const v7044 = -offst;
        if (v7041) {
            lgth = v7043;
        } else {
            lgth = v7044;
        }
    } else {
        const v7045 = lgth < 0;
        if (v7045) {
            const v7046 = offst >= 0;
            const v7047 = arr.length;
            const v7048 = v7047 - offst;
            const v7049 = -offst;
            let v7050;
            if (v7046) {
                v7050 = v7048;
            } else {
                v7050 = v7049;
            }
            lgth = v7050 + lgth;
        }
    }
    const v7051 = Object.prototype;
    const v7052 = v7051.toString;
    const v7053 = v7052.call(arr);
    const v7054 = v7053 !== '[object Array]';
    if (v7054) {
        var lgt = 0;
        const v7055 = -1;
        var ct = v7055;
        var rmvd = [];
        var rmvdObj = {};
        const v7056 = -1;
        var repl_ct = v7056;
        const v7057 = -1;
        var int_ct = v7057;
        var returnArr = true;
        var rmvd_ct = 0;
        var rmvd_lgth = 0;
        var key = '';
        for (key in arr) {
            lgt += 1;
        }
        const v7058 = offst >= 0;
        const v7059 = lgt + offst;
        if (v7058) {
            offst = offst;
        } else {
            offst = v7059;
        }
        for (key in arr) {
            ct += 1;
            const v7060 = ct < offst;
            if (v7060) {
                const v7061 = this.is_int(key);
                if (v7061) {
                    int_ct += 1;
                    const v7062 = parseInt(key, 10);
                    const v7063 = v7062 === int_ct;
                    if (v7063) {
                        continue;
                    }
                    const v7064 = _checkToUpIndices(arr, int_ct, key);
                    v7064;
                    const v7065 = arr[key];
                    arr[int_ct] = v7065;
                    const v7066 = arr[key];
                    const v7067 = delete v7066;
                    v7067;
                }
                continue;
            }
            const v7068 = this.is_int(key);
            const v7069 = returnArr && v7068;
            if (v7069) {
                const v7070 = arr[key];
                const v7071 = rmvd.push(v7070);
                v7071;
                const v7072 = rmvd_ct++;
                const v7073 = arr[key];
                rmvdObj[v7072] = v7073;
            } else {
                const v7074 = arr[key];
                rmvdObj[key] = v7074;
                returnArr = false;
            }
            rmvd_lgth += 1;
            const v7075 = ++repl_ct;
            const v7076 = replacement[v7075];
            const v7077 = replacement && v7076;
            if (v7077) {
                const v7078 = replacement[repl_ct];
                arr[key] = v7078;
            } else {
                const v7079 = arr[key];
                const v7080 = delete v7079;
                v7080;
            }
        }
        let v7081;
        if (returnArr) {
            v7081 = rmvd;
        } else {
            v7081 = rmvdObj;
        }
        return v7081;
    }
    if (replacement) {
        const v7082 = replacement.unshift(offst, lgth);
        v7082;
        const v7083 = Array.prototype;
        const v7084 = v7083.splice;
        const v7085 = v7084.apply(arr, replacement);
        return v7085;
    }
    const v7086 = arr.splice(offst, lgth);
    return v7086;
};
exports.array_splice = v7087;
const v7156 = function (array, funcname, userdata) {
    var key;
    var value;
    var ini;
    const v7088 = !array;
    const v7089 = typeof array;
    const v7090 = v7089 !== 'object';
    const v7091 = v7088 || v7090;
    if (v7091) {
        return false;
    }
    const v7092 = typeof array;
    const v7093 = v7092 === 'object';
    const v7094 = array.change_key_case;
    const v7095 = v7093 && v7094;
    if (v7095) {
        const v7096 = arguments.length;
        const v7097 = v7096 > 2;
        if (v7097) {
            const v7098 = array.walk(funcname, userdata);
            return v7098;
        } else {
            const v7099 = array.walk(funcname);
            return v7099;
        }
    }
    try {
        const v7100 = typeof funcname;
        const v7101 = v7100 === 'function';
        if (v7101) {
            for (key in array) {
                const v7102 = arguments.length;
                const v7103 = v7102 > 2;
                if (v7103) {
                    const v7104 = array[key];
                    const v7105 = funcname(v7104, key, userdata);
                    v7105;
                } else {
                    const v7106 = array[key];
                    const v7107 = funcname(v7106, key);
                    v7107;
                }
            }
        } else {
            const v7108 = typeof funcname;
            const v7109 = v7108 === 'string';
            if (v7109) {
                const v7110 = this.php_js;
                const v7111 = {};
                this.php_js = v7110 || v7111;
                const v7112 = this.php_js;
                const v7113 = this.php_js;
                const v7114 = v7113.ini;
                const v7115 = {};
                v7112.ini = v7114 || v7115;
                const v7116 = this.php_js;
                const v7117 = v7116.ini;
                ini = v7117['phpjs.no-eval'];
                const v7118 = ini.local_value;
                const v7119 = parseInt(v7118, 10);
                const v7120 = v7119 !== 0;
                const v7121 = ini.local_value;
                const v7122 = v7121.toLowerCase;
                const v7123 = !v7122;
                const v7124 = ini.local_value;
                const v7125 = v7124.toLowerCase();
                const v7126 = v7125 !== 'off';
                const v7127 = v7123 || v7126;
                const v7128 = v7120 && v7127;
                const v7129 = ini && v7128;
                if (v7129) {
                    const v7130 = arguments.length;
                    const v7131 = v7130 > 2;
                    if (v7131) {
                        for (key in array) {
                            const v7132 = this.window;
                            const v7133 = array[key];
                            const v7134 = v7132[funcname](v7133, key, userdata);
                            v7134;
                        }
                    } else {
                        for (key in array) {
                            const v7135 = this.window;
                            const v7136 = array[key];
                            const v7137 = v7135[funcname](v7136, key);
                            v7137;
                        }
                    }
                } else {
                    const v7138 = arguments.length;
                    const v7139 = v7138 > 2;
                    if (v7139) {
                        for (key in array) {
                            const v7140 = funcname + '(array[key], key, userdata)';
                            const v7141 = eval(v7140);
                            v7141;
                        }
                    } else {
                        for (key in array) {
                            const v7142 = funcname + '(array[key], key)';
                            const v7143 = eval(v7142);
                            v7143;
                        }
                    }
                }
            } else {
                const v7144 = typeof funcname;
                const v7145 = v7144 === 'object';
                const v7146 = funcname && v7145;
                const v7147 = funcname.length;
                const v7148 = v7147 === 2;
                const v7149 = v7146 && v7148;
                if (v7149) {
                    var obj = funcname[0];
                    var func = funcname[1];
                    const v7150 = arguments.length;
                    const v7151 = v7150 > 2;
                    if (v7151) {
                        for (key in array) {
                            const v7152 = array[key];
                            const v7153 = obj[func](v7152, key, userdata);
                            v7153;
                        }
                    } else {
                        for (key in array) {
                            const v7154 = array[key];
                            const v7155 = obj[func](v7154, key);
                            v7155;
                        }
                    }
                } else {
                    return false;
                }
            }
        }
    } catch (e) {
        return false;
    }
    return true;
};
exports.array_walk = v7156;
const v7195 = function (inputArr) {
    var valArr = [];
    var k;
    var i;
    var ret;
    var that = this;
    var strictForIn = false;
    var populateArr = {};
    const v7157 = this.php_js;
    const v7158 = {};
    this.php_js = v7157 || v7158;
    const v7159 = this.php_js;
    const v7160 = this.php_js;
    const v7161 = v7160.ini;
    const v7162 = {};
    v7159.ini = v7161 || v7162;
    const v7163 = this.php_js;
    const v7164 = v7163.ini;
    const v7165 = v7164['phpjs.strictForIn'];
    const v7166 = this.php_js;
    const v7167 = v7166.ini;
    const v7168 = v7167['phpjs.strictForIn'];
    const v7169 = v7168.local_value;
    const v7170 = v7165 && v7169;
    const v7171 = this.php_js;
    const v7172 = v7171.ini;
    const v7173 = v7172['phpjs.strictForIn'];
    const v7174 = v7173.local_value;
    const v7175 = v7174 !== 'off';
    strictForIn = v7170 && v7175;
    if (strictForIn) {
        populateArr = inputArr;
    } else {
        populateArr = populateArr;
    }
    for (k in inputArr) {
        const v7176 = inputArr.hasOwnProperty(k);
        if (v7176) {
            const v7177 = inputArr[k];
            const v7178 = [
                k,
                v7177
            ];
            const v7179 = valArr.push(v7178);
            v7179;
            if (strictForIn) {
                const v7180 = inputArr[k];
                const v7181 = delete v7180;
                v7181;
            }
        }
    }
    const v7185 = function (a, b) {
        const v7182 = a[1];
        const v7183 = b[1];
        const v7184 = that.strnatcasecmp(v7182, v7183);
        return v7184;
    };
    const v7186 = valArr.sort(v7185);
    v7186;
    (i = 0)
    const v7187 = valArr.length;
    let v7188 = i < v7187;
    while (v7188) {
        const v7190 = valArr[i];
        const v7191 = v7190[0];
        const v7192 = valArr[i];
        const v7193 = v7192[1];
        populateArr[v7191] = v7193;
        const v7189 = i++;
        v7188 = i < v7187;
    }
    const v7194 = strictForIn || populateArr;
    return v7194;
};
exports.natcasesort = v7195;
const v7197 = function (arr) {
    const v7196 = this.current(arr);
    return v7196;
};
exports.pos = v7197;
const v7199 = function (mixed_var, mode) {
    const v7198 = this.count(mixed_var, mode);
    return v7198;
};
exports.sizeof = v7199;
const v7208 = function (left_operand, right_operand, scale) {
    var libbcmath = this._phpjs_shared_bc();
    var first;
    var second;
    var result;
    const v7200 = typeof scale;
    const v7201 = v7200 === 'undefined';
    if (v7201) {
        scale = libbcmath.scale;
    }
    const v7202 = scale < 0;
    if (v7202) {
        scale = 0;
    } else {
        scale = scale;
    }
    first = libbcmath.bc_init_num();
    second = libbcmath.bc_init_num();
    result = libbcmath.bc_init_num();
    const v7203 = left_operand.toString();
    first = libbcmath.php_str2num(v7203);
    const v7204 = right_operand.toString();
    second = libbcmath.php_str2num(v7204);
    result = libbcmath.bc_add(first, second, scale);
    const v7205 = result.n_scale;
    const v7206 = v7205 > scale;
    if (v7206) {
        result.n_scale = scale;
    }
    const v7207 = result.toString();
    return v7207;
};
exports.bcadd = v7208;
const v7215 = function (left_operand, right_operand, scale) {
    var libbcmath = this._phpjs_shared_bc();
    var first;
    var second;
    const v7209 = typeof scale;
    const v7210 = v7209 === 'undefined';
    if (v7210) {
        scale = libbcmath.scale;
    }
    const v7211 = scale < 0;
    if (v7211) {
        scale = 0;
    } else {
        scale = scale;
    }
    first = libbcmath.bc_init_num();
    second = libbcmath.bc_init_num();
    const v7212 = left_operand.toString();
    first = libbcmath.bc_str2num(v7212, scale);
    const v7213 = right_operand.toString();
    second = libbcmath.bc_str2num(v7213, scale);
    const v7214 = libbcmath.bc_compare(first, second, scale);
    return v7214;
};
exports.bccomp = v7215;
const v7227 = function (left_operand, right_operand, scale) {
    var libbcmath = this._phpjs_shared_bc();
    var first;
    var second;
    var result;
    const v7216 = typeof scale;
    const v7217 = v7216 === 'undefined';
    if (v7217) {
        scale = libbcmath.scale;
    }
    const v7218 = scale < 0;
    if (v7218) {
        scale = 0;
    } else {
        scale = scale;
    }
    first = libbcmath.bc_init_num();
    second = libbcmath.bc_init_num();
    result = libbcmath.bc_init_num();
    const v7219 = left_operand.toString();
    first = libbcmath.php_str2num(v7219);
    const v7220 = right_operand.toString();
    second = libbcmath.php_str2num(v7220);
    result = libbcmath.bc_divide(first, second, scale);
    const v7221 = -1;
    const v7222 = result === v7221;
    if (v7222) {
        const v7223 = new Error(11, '(BC) Division by zero');
        throw v7223;
    }
    const v7224 = result.n_scale;
    const v7225 = v7224 > scale;
    if (v7225) {
        result.n_scale = scale;
    }
    const v7226 = result.toString();
    return v7226;
};
exports.bcdiv = v7227;
const v7236 = function (left_operand, right_operand, scale) {
    var libbcmath = this._phpjs_shared_bc();
    var first;
    var second;
    var result;
    const v7228 = typeof scale;
    const v7229 = v7228 === 'undefined';
    if (v7229) {
        scale = libbcmath.scale;
    }
    const v7230 = scale < 0;
    if (v7230) {
        scale = 0;
    } else {
        scale = scale;
    }
    first = libbcmath.bc_init_num();
    second = libbcmath.bc_init_num();
    result = libbcmath.bc_init_num();
    const v7231 = left_operand.toString();
    first = libbcmath.php_str2num(v7231);
    const v7232 = right_operand.toString();
    second = libbcmath.php_str2num(v7232);
    result = libbcmath.bc_multiply(first, second, scale);
    const v7233 = result.n_scale;
    const v7234 = v7233 > scale;
    if (v7234) {
        result.n_scale = scale;
    }
    const v7235 = result.toString();
    return v7235;
};
exports.bcmul = v7236;
const v7265 = function (val, precision) {
    var libbcmath = this._phpjs_shared_bc();
    var temp;
    var result;
    var digit;
    var right_operand;
    temp = libbcmath.bc_init_num();
    const v7237 = val.toString();
    temp = libbcmath.php_str2num(v7237);
    const v7238 = temp.n_scale;
    const v7239 = precision >= v7238;
    if (v7239) {
        const v7240 = temp.n_scale;
        let v7241 = v7240 < precision;
        while (v7241) {
            const v7242 = temp.n_value;
            const v7243 = temp.n_len;
            const v7244 = temp.n_scale;
            const v7245 = v7243 + v7244;
            v7242[v7245] = 0;
            const v7246 = temp.n_scale;
            const v7247 = v7246++;
            v7247;
            v7241 = v7240 < precision;
        }
        const v7248 = temp.toString();
        return v7248;
    }
    const v7249 = temp.n_value;
    const v7250 = temp.n_len;
    const v7251 = v7250 + precision;
    digit = v7249[v7251];
    right_operand = libbcmath.bc_init_num();
    right_operand = libbcmath.bc_new_num(1, precision);
    const v7252 = digit >= 5;
    if (v7252) {
        const v7253 = right_operand.n_value;
        const v7254 = right_operand.n_len;
        const v7255 = right_operand.n_scale;
        const v7256 = v7254 + v7255;
        const v7257 = v7256 - 1;
        v7253[v7257] = 1;
        const v7258 = temp.n_sign;
        const v7259 = libbcmath.MINUS;
        const v7260 = v7258 == v7259;
        if (v7260) {
            const v7261 = libbcmath.MINUS;
            right_operand.n_sign = v7261;
        }
        result = libbcmath.bc_add(temp, right_operand, precision);
    } else {
        result = temp;
    }
    const v7262 = result.n_scale;
    const v7263 = v7262 > precision;
    if (v7263) {
        result.n_scale = precision;
    }
    const v7264 = result.toString();
    return v7264;
};
exports.bcround = v7265;
const v7268 = function (scale) {
    var libbcmath = this._phpjs_shared_bc();
    scale = parseInt(scale, 10);
    const v7266 = isNaN(scale);
    if (v7266) {
        return false;
    }
    const v7267 = scale < 0;
    if (v7267) {
        return false;
    }
    libbcmath.scale = scale;
    return true;
};
exports.bcscale = v7268;
const v7277 = function (left_operand, right_operand, scale) {
    var libbcmath = this._phpjs_shared_bc();
    var first;
    var second;
    var result;
    const v7269 = typeof scale;
    const v7270 = v7269 === 'undefined';
    if (v7270) {
        scale = libbcmath.scale;
    }
    const v7271 = scale < 0;
    if (v7271) {
        scale = 0;
    } else {
        scale = scale;
    }
    first = libbcmath.bc_init_num();
    second = libbcmath.bc_init_num();
    result = libbcmath.bc_init_num();
    const v7272 = left_operand.toString();
    first = libbcmath.php_str2num(v7272);
    const v7273 = right_operand.toString();
    second = libbcmath.php_str2num(v7273);
    result = libbcmath.bc_sub(first, second, scale);
    const v7274 = result.n_scale;
    const v7275 = v7274 > scale;
    if (v7275) {
        result.n_scale = scale;
    }
    const v7276 = result.toString();
    return v7276;
};
exports.bcsub = v7277;
const v7328 = function (date) {
    const v7278 = this.php_js;
    const v7279 = {};
    this.php_js = v7278 || v7279;
    var ts;
    let warningsOffset;
    const v7280 = this.php_js;
    const v7281 = v7280.warnings;
    const v7282 = this.php_js;
    const v7283 = v7282.warnings;
    const v7284 = v7283.length;
    if (v7281) {
        warningsOffset = v7284;
    } else {
        warningsOffset = null;
    }
    let errorsOffset;
    const v7285 = this.php_js;
    const v7286 = v7285.errors;
    const v7287 = this.php_js;
    const v7288 = v7287.errors;
    const v7289 = v7288.length;
    if (v7286) {
        errorsOffset = v7289;
    } else {
        errorsOffset = null;
    }
    try {
        const v7290 = this.php_js;
        v7290.date_parse_state = true;
        ts = this.strtotime(date);
        const v7291 = this.php_js;
        v7291.date_parse_state = false;
    } finally {
        const v7292 = !ts;
        if (v7292) {
            return false;
        }
    }
    const v7293 = ts * 1000;
    var dt = new Date(v7293);
    const v7294 = warningsOffset !== null;
    const v7295 = this.php_js;
    const v7296 = v7295.warnings;
    const v7297 = v7296.slice(warningsOffset);
    const v7298 = v7297.length;
    let v7299;
    if (v7294) {
        v7299 = v7298;
    } else {
        v7299 = 0;
    }
    const v7300 = warningsOffset !== null;
    const v7301 = this.php_js;
    const v7302 = v7301.warnings;
    const v7303 = v7302.slice(warningsOffset);
    const v7304 = [];
    let v7305;
    if (v7300) {
        v7305 = v7303;
    } else {
        v7305 = v7304;
    }
    const v7306 = errorsOffset !== null;
    const v7307 = this.php_js;
    const v7308 = v7307.errors;
    const v7309 = v7308.slice(errorsOffset);
    const v7310 = v7309.length;
    let v7311;
    if (v7306) {
        v7311 = v7310;
    } else {
        v7311 = 0;
    }
    const v7312 = errorsOffset !== null;
    const v7313 = this.php_js;
    const v7314 = v7313.errors;
    const v7315 = v7314.slice(errorsOffset);
    const v7316 = [];
    let v7317;
    if (v7312) {
        v7317 = v7315;
    } else {
        v7317 = v7316;
    }
    var retObj = {};
    retObj.warning_count = v7299;
    retObj.warnings = v7305;
    retObj.error_count = v7311;
    retObj.errors = v7317;
    const v7318 = dt.getFullYear();
    retObj.year = v7318;
    const v7319 = dt.getMonth();
    retObj.month = v7319 + 1;
    const v7320 = dt.getDate();
    retObj.day = v7320;
    const v7321 = dt.getHours();
    retObj.hour = v7321;
    const v7322 = dt.getMinutes();
    retObj.minute = v7322;
    const v7323 = dt.getSeconds();
    retObj.second = v7323;
    const v7324 = dt.getMilliseconds();
    const v7325 = '0.' + v7324;
    const v7326 = parseFloat(v7325);
    retObj.fraction = v7326;
    const v7327 = dt.getTimezoneOffset();
    retObj.is_localtime = v7327 !== 0;
    return retObj;
};
exports.date_parse = v7328;
const v7343 = function (format, timestamp) {
    let dt;
    const v7329 = typeof timestamp;
    const v7330 = v7329 === 'undefined';
    const v7331 = new Date();
    const v7332 = typeof timestamp;
    const v7333 = v7332 === 'object';
    const v7334 = new Date(timestamp);
    const v7335 = timestamp * 1000;
    const v7336 = new Date(v7335);
    let v7337;
    if (v7333) {
        v7337 = v7334;
    } else {
        v7337 = v7336;
    }
    if (v7330) {
        dt = v7331;
    } else {
        dt = v7337;
    }
    const v7338 = dt.toUTCString();
    const v7339 = -4;
    const v7340 = v7338.slice(0, v7339);
    const v7341 = Date.parse(v7340);
    timestamp = v7341 / 1000;
    const v7342 = this.date(format, timestamp);
    return v7342;
};
exports.gmdate = v7343;
const v7393 = function (path, options) {
    var opt = '';
    var optName = '';
    var optTemp = 0;
    var tmp_arr = {};
    var cnt = 0;
    var i = 0;
    var have_basename = false;
    var have_extension = false;
    var have_filename = false;
    const v7344 = !path;
    if (v7344) {
        return false;
    }
    const v7345 = !options;
    if (v7345) {
        options = 'PATHINFO_ALL';
    }
    var OPTS = {};
    OPTS['PATHINFO_DIRNAME'] = 1;
    OPTS['PATHINFO_BASENAME'] = 2;
    OPTS['PATHINFO_EXTENSION'] = 4;
    OPTS['PATHINFO_FILENAME'] = 8;
    OPTS['PATHINFO_ALL'] = 0;
    for (optName in OPTS) {
        const v7346 = OPTS.PATHINFO_ALL;
        const v7347 = OPTS[optName];
        OPTS.PATHINFO_ALL = v7346 | v7347;
    }
    const v7348 = typeof options;
    const v7349 = v7348 !== 'number';
    if (v7349) {
        const v7350 = [];
        options = v7350.concat(options);
        i = 0
        const v7351 = options.length;
        let v7352 = i < v7351;
        while (v7352) {
            const v7354 = options[i];
            const v7355 = OPTS[v7354];
            if (v7355) {
                const v7356 = options[i];
                const v7357 = OPTS[v7356];
                optTemp = optTemp | v7357;
            }
            const v7353 = i++;
            v7352 = i < v7351;
        }
        options = optTemp;
    }
    var __getExt = function (path) {
        var str = path + '';
        const v7358 = str.lastIndexOf('.');
        var dotP = v7358 + 1;
        const v7359 = !dotP;
        const v7360 = str.length;
        const v7361 = dotP !== v7360;
        const v7362 = str.substr(dotP);
        let v7363;
        if (v7361) {
            v7363 = v7362;
        } else {
            v7363 = '';
        }
        let v7364;
        if (v7359) {
            v7364 = false;
        } else {
            v7364 = v7363;
        }
        return v7364;
    };
    const v7365 = OPTS.PATHINFO_DIRNAME;
    const v7366 = options & v7365;
    if (v7366) {
        const v7367 = path.replace(/\\/g, '/');
        var dirName = v7367.replace(/\/[^\/]*\/?$/, '');
        const v7368 = dirName === path;
        let v7369;
        if (v7368) {
            v7369 = '.';
        } else {
            v7369 = dirName;
        }
        tmp_arr.dirname = v7369;
    }
    const v7370 = OPTS.PATHINFO_BASENAME;
    const v7371 = options & v7370;
    if (v7371) {
        const v7372 = false === have_basename;
        if (v7372) {
            have_basename = this.basename(path);
        }
        tmp_arr.basename = have_basename;
    }
    const v7373 = OPTS.PATHINFO_EXTENSION;
    const v7374 = options & v7373;
    if (v7374) {
        const v7375 = false === have_basename;
        if (v7375) {
            have_basename = this.basename(path);
        }
        const v7376 = false === have_extension;
        if (v7376) {
            have_extension = __getExt(have_basename);
        }
        const v7377 = false !== have_extension;
        if (v7377) {
            tmp_arr.extension = have_extension;
        }
    }
    const v7378 = OPTS.PATHINFO_FILENAME;
    const v7379 = options & v7378;
    if (v7379) {
        const v7380 = false === have_basename;
        if (v7380) {
            have_basename = this.basename(path);
        }
        const v7381 = false === have_extension;
        if (v7381) {
            have_extension = __getExt(have_basename);
        }
        const v7382 = false === have_filename;
        if (v7382) {
            const v7383 = have_basename.length;
            const v7384 = have_extension.length;
            const v7385 = v7384 + 1;
            const v7386 = have_extension === false;
            let v7387;
            if (v7386) {
                v7387 = 0;
            } else {
                v7387 = 1;
            }
            let v7388;
            if (have_extension) {
                v7388 = v7385;
            } else {
                v7388 = v7387;
            }
            const v7389 = v7383 - v7388;
            have_filename = have_basename.slice(0, v7389);
        }
        tmp_arr.filename = have_filename;
    }
    cnt = 0;
    for (opt in tmp_arr) {
        const v7390 = cnt++;
        v7390;
    }
    const v7391 = cnt == 1;
    if (v7391) {
        const v7392 = tmp_arr[opt];
        return v7392;
    }
    return tmp_arr;
};
exports.pathinfo = v7393;
const v7401 = function () {
    try {
        const v7394 = this.php_js;
        const v7395 = {};
        this.php_js = v7394 || v7395;
    } catch (e) {
        const v7396 = {};
        this.php_js = v7396;
    }
    const v7397 = this.php_js;
    const v7398 = v7397.i18nLocale;
    const v7399 = i18n_loc_set_default('en_US_POSIX');
    const v7400 = v7398 || (v7399, 'en_US_POSIX');
    return v7400;
};
exports.i18n_loc_get_default = v7401;
const v7404 = function (name, value, expires, path, domain, secure) {
    const v7402 = encodeURIComponent(value);
    const v7403 = this.setrawcookie(name, v7402, expires, path, domain, secure);
    return v7403;
};
exports.setcookie = v7404;
const v7406 = function (str, charlist) {
    const v7405 = this.rtrim(str, charlist);
    return v7405;
};
exports.chop = v7406;
const v7437 = function (str) {
    var chr = function (c) {
        const v7407 = String.fromCharCode(c);
        return v7407;
    };
    const v7408 = !str;
    const v7409 = str === '';
    const v7410 = v7408 || v7409;
    if (v7410) {
        const v7411 = chr(0);
        return v7411;
    } else {
        const v7412 = this.is_scalar(str);
        const v7413 = !v7412;
        if (v7413) {
            return false;
        }
    }
    var c = 0;
    var u = 0;
    var i = 0;
    var a = 0;
    var encoded = '';
    var tmp1 = '';
    var tmp2 = '';
    var bytes = {};
    var chunk = function () {
        bytes = str.substr(u, 45);
        for (i in bytes) {
            const v7414 = bytes[i];
            const v7415 = v7414.charCodeAt(0);
            bytes[i] = v7415;
        }
        const v7416 = bytes.length;
        const v7417 = v7416 != 0;
        if (v7417) {
            const v7418 = bytes.length;
            return v7418;
        } else {
            return 0;
        }
    };
    const v7419 = chunk();
    let v7420 = v7419 !== 0;
    while (v7420) {
        c = chunk();
        u += 45;
        const v7421 = c + 32;
        encoded += chr(v7421);
        for (i in bytes) {
            const v7422 = bytes[i];
            const v7423 = v7422.charCodeAt(0);
            tmp1 = v7423.toString(2);
            const v7424 = tmp1.length;
            let v7425 = v7424 < 8;
            while (v7425) {
                tmp1 = '0' + tmp1;
                v7425 = v7424 < 8;
            }
            tmp2 += tmp1;
        }
        const v7426 = tmp2.length;
        let v7427 = v7426 % 6;
        while (v7427) {
            tmp2 = tmp2 + '0';
            v7427 = v7426 % 6;
        }
        i = 0
        const v7428 = tmp2.length;
        const v7429 = v7428 / 6;
        const v7430 = v7429 - 1;
        let v7431 = i <= v7430;
        while (v7431) {
            tmp1 = tmp2.substr(a, 6);
            const v7433 = tmp1 == '000000';
            if (v7433) {
                encoded += chr(96);
            } else {
                const v7434 = parseInt(tmp1, 2);
                const v7435 = v7434 + 32;
                encoded += chr(v7435);
            }
            a += 6;
            const v7432 = i++;
            v7431 = i <= v7430;
        }
        a = 0;
        tmp2 = '';
        encoded += '\n';
        v7420 = v7419 !== 0;
    }
    const v7436 = chr(96);
    encoded += v7436 + '\n';
    return encoded;
};
exports.convert_uuencode = v7437;
const v7448 = function (str) {
    str = this.utf8_encode(str);
    var table = '00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D';
    var crc = 0;
    var x = 0;
    var y = 0;
    const v7438 = -1;
    crc = crc ^ v7438;
    var i = 0;
    var iTop = str.length;
    let v7439 = i < iTop;
    while (v7439) {
        const v7441 = str.charCodeAt(i);
        const v7442 = crc ^ v7441;
        y = v7442 & 255;
        const v7443 = y * 9;
        const v7444 = table.substr(v7443, 8);
        x = '0x' + v7444;
        const v7445 = crc >>> 8;
        crc = v7445 ^ x;
        const v7440 = i++;
        v7439 = i < iTop;
    }
    const v7446 = -1;
    const v7447 = crc ^ v7446;
    return v7447;
};
exports.crc32 = v7448;
const v7454 = function (string, quote_style) {
    var hash_map = {};
    var symbol = '';
    var tmp_str = '';
    var entity = '';
    tmp_str = string.toString();
    const v7449 = false === (hash_map = this.get_html_translation_table('HTML_ENTITIES', quote_style));
    if (v7449) {
        return false;
    }
    const v7450 = hash_map['&'];
    const v7451 = delete v7450;
    v7451;
    hash_map['&'] = '&amp;';
    for (symbol in hash_map) {
        entity = hash_map[symbol];
        const v7452 = tmp_str.split(entity);
        tmp_str = v7452.join(symbol);
    }
    const v7453 = tmp_str.split('&#039;');
    tmp_str = v7453.join('\'');
    return tmp_str;
};
exports.html_entity_decode = v7454;
const v7472 = function (string, quote_style, charset, double_encode) {
    var hash_map = this.get_html_translation_table('HTML_ENTITIES', quote_style);
    var symbol = '';
    const v7455 = string == null;
    const v7456 = string + '';
    if (v7455) {
        string = '';
    } else {
        string = v7456;
    }
    const v7457 = !hash_map;
    if (v7457) {
        return false;
    }
    const v7458 = quote_style === 'ENT_QUOTES';
    const v7459 = quote_style && v7458;
    if (v7459) {
        hash_map['\''] = '&#039;';
    }
    const v7460 = !double_encode;
    const v7461 = !v7460;
    const v7462 = double_encode == null;
    const v7463 = v7461 || v7462;
    if (v7463) {
        for (symbol in hash_map) {
            const v7464 = hash_map.hasOwnProperty(symbol);
            if (v7464) {
                const v7465 = string.split(symbol);
                const v7466 = hash_map[symbol];
                string = v7465.join(v7466);
            }
        }
    } else {
        const v7471 = function (ignore, text, entity) {
            for (symbol in hash_map) {
                const v7467 = hash_map.hasOwnProperty(symbol);
                if (v7467) {
                    const v7468 = text.split(symbol);
                    const v7469 = hash_map[symbol];
                    text = v7468.join(v7469);
                }
            }
            const v7470 = text + entity;
            return v7470;
        };
        string = string.replace(/([\s\S]*?)(&(?:#\d+|#x[\da-f]+|[a-zA-Z][\da-z]*);|$)/g, v7471);
    }
    return string;
};
exports.htmlentities = v7472;
const v7474 = function (glue, pieces) {
    const v7473 = this.implode(glue, pieces);
    return v7473;
};
exports.join = v7474;
const v7691 = function (str) {
    var xl;
    var rotateLeft = function (lValue, iShiftBits) {
        const v7475 = lValue << iShiftBits;
        const v7476 = 32 - iShiftBits;
        const v7477 = lValue >>> v7476;
        const v7478 = v7475 | v7477;
        return v7478;
    };
    var addUnsigned = function (lX, lY) {
        var lX4;
        var lY4;
        var lX8;
        var lY8;
        var lResult;
        lX8 = lX & 2147483648;
        lY8 = lY & 2147483648;
        lX4 = lX & 1073741824;
        lY4 = lY & 1073741824;
        const v7479 = lX & 1073741823;
        const v7480 = lY & 1073741823;
        lResult = v7479 + v7480;
        const v7481 = lX4 & lY4;
        if (v7481) {
            const v7482 = lResult ^ 2147483648;
            const v7483 = v7482 ^ lX8;
            const v7484 = v7483 ^ lY8;
            return v7484;
        }
        const v7485 = lX4 | lY4;
        if (v7485) {
            const v7486 = lResult & 1073741824;
            if (v7486) {
                const v7487 = lResult ^ 3221225472;
                const v7488 = v7487 ^ lX8;
                const v7489 = v7488 ^ lY8;
                return v7489;
            } else {
                const v7490 = lResult ^ 1073741824;
                const v7491 = v7490 ^ lX8;
                const v7492 = v7491 ^ lY8;
                return v7492;
            }
        } else {
            const v7493 = lResult ^ lX8;
            const v7494 = v7493 ^ lY8;
            return v7494;
        }
    };
    var _F = function (x, y, z) {
        const v7495 = x & y;
        const v7496 = ~x;
        const v7497 = v7496 & z;
        const v7498 = v7495 | v7497;
        return v7498;
    };
    var _G = function (x, y, z) {
        const v7499 = x & z;
        const v7500 = ~z;
        const v7501 = y & v7500;
        const v7502 = v7499 | v7501;
        return v7502;
    };
    var _H = function (x, y, z) {
        const v7503 = x ^ y;
        const v7504 = v7503 ^ z;
        return v7504;
    };
    var _I = function (x, y, z) {
        const v7505 = ~z;
        const v7506 = x | v7505;
        const v7507 = y ^ v7506;
        return v7507;
    };
    var _FF = function (a, b, c, d, x, s, ac) {
        const v7508 = _F(b, c, d);
        const v7509 = addUnsigned(v7508, x);
        const v7510 = addUnsigned(v7509, ac);
        a = addUnsigned(a, v7510);
        const v7511 = rotateLeft(a, s);
        const v7512 = addUnsigned(v7511, b);
        return v7512;
    };
    var _GG = function (a, b, c, d, x, s, ac) {
        const v7513 = _G(b, c, d);
        const v7514 = addUnsigned(v7513, x);
        const v7515 = addUnsigned(v7514, ac);
        a = addUnsigned(a, v7515);
        const v7516 = rotateLeft(a, s);
        const v7517 = addUnsigned(v7516, b);
        return v7517;
    };
    var _HH = function (a, b, c, d, x, s, ac) {
        const v7518 = _H(b, c, d);
        const v7519 = addUnsigned(v7518, x);
        const v7520 = addUnsigned(v7519, ac);
        a = addUnsigned(a, v7520);
        const v7521 = rotateLeft(a, s);
        const v7522 = addUnsigned(v7521, b);
        return v7522;
    };
    var _II = function (a, b, c, d, x, s, ac) {
        const v7523 = _I(b, c, d);
        const v7524 = addUnsigned(v7523, x);
        const v7525 = addUnsigned(v7524, ac);
        a = addUnsigned(a, v7525);
        const v7526 = rotateLeft(a, s);
        const v7527 = addUnsigned(v7526, b);
        return v7527;
    };
    var convertToWordArray = function (str) {
        var lWordCount;
        var lMessageLength = str.length;
        var lNumberOfWords_temp1 = lMessageLength + 8;
        const v7528 = lNumberOfWords_temp1 % 64;
        const v7529 = lNumberOfWords_temp1 - v7528;
        var lNumberOfWords_temp2 = v7529 / 64;
        const v7530 = lNumberOfWords_temp2 + 1;
        var lNumberOfWords = v7530 * 16;
        const v7531 = lNumberOfWords - 1;
        var lWordArray = new Array(v7531);
        var lBytePosition = 0;
        var lByteCount = 0;
        let v7532 = lByteCount < lMessageLength;
        while (v7532) {
            const v7533 = lByteCount % 4;
            const v7534 = lByteCount - v7533;
            lWordCount = v7534 / 4;
            const v7535 = lByteCount % 4;
            lBytePosition = v7535 * 8;
            const v7536 = lWordArray[lWordCount];
            const v7537 = str.charCodeAt(lByteCount);
            const v7538 = v7537 << lBytePosition;
            lWordArray[lWordCount] = v7536 | v7538;
            const v7539 = lByteCount++;
            v7539;
            v7532 = lByteCount < lMessageLength;
        }
        const v7540 = lByteCount % 4;
        const v7541 = lByteCount - v7540;
        lWordCount = v7541 / 4;
        const v7542 = lByteCount % 4;
        lBytePosition = v7542 * 8;
        const v7543 = lWordArray[lWordCount];
        const v7544 = 128 << lBytePosition;
        lWordArray[lWordCount] = v7543 | v7544;
        const v7545 = lNumberOfWords - 2;
        lWordArray[v7545] = lMessageLength << 3;
        const v7546 = lNumberOfWords - 1;
        lWordArray[v7546] = lMessageLength >>> 29;
        return lWordArray;
    };
    var wordToHex = function (lValue) {
        var wordToHexValue = '';
        var wordToHexValue_temp = '';
        var lByte;
        var lCount;
        (lCount = 0)
        let v7547 = lCount <= 3;
        while (v7547) {
            const v7549 = lCount * 8;
            const v7550 = lValue >>> v7549;
            lByte = v7550 & 255;
            const v7551 = lByte.toString(16);
            wordToHexValue_temp = '0' + v7551;
            const v7552 = wordToHexValue_temp.length;
            const v7553 = v7552 - 2;
            const v7554 = wordToHexValue_temp.substr(v7553, 2);
            wordToHexValue = wordToHexValue + v7554;
            const v7548 = lCount++;
            v7547 = lCount <= 3;
        }
        return wordToHexValue;
    };
    var x = [];
    var k;
    var AA;
    var BB;
    var CC;
    var DD;
    var a;
    var b;
    var c;
    var d;
    var S11 = 7;
    var S12 = 12;
    var S13 = 17;
    var S14 = 22;
    var S21 = 5;
    var S22 = 9;
    var S23 = 14;
    var S24 = 20;
    var S31 = 4;
    var S32 = 11;
    var S33 = 16;
    var S34 = 23;
    var S41 = 6;
    var S42 = 10;
    var S43 = 15;
    var S44 = 21;
    str = this.utf8_encode(str);
    x = convertToWordArray(str);
    a = 1732584193;
    b = 4023233417;
    c = 2562383102;
    d = 271733878;
    xl = x.length;
    (k = 0)
    let v7555 = k < xl;
    while (v7555) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        const v7556 = k + 0;
        const v7557 = x[v7556];
        a = _FF(a, b, c, d, v7557, S11, 3614090360);
        const v7558 = k + 1;
        const v7559 = x[v7558];
        d = _FF(d, a, b, c, v7559, S12, 3905402710);
        const v7560 = k + 2;
        const v7561 = x[v7560];
        c = _FF(c, d, a, b, v7561, S13, 606105819);
        const v7562 = k + 3;
        const v7563 = x[v7562];
        b = _FF(b, c, d, a, v7563, S14, 3250441966);
        const v7564 = k + 4;
        const v7565 = x[v7564];
        a = _FF(a, b, c, d, v7565, S11, 4118548399);
        const v7566 = k + 5;
        const v7567 = x[v7566];
        d = _FF(d, a, b, c, v7567, S12, 1200080426);
        const v7568 = k + 6;
        const v7569 = x[v7568];
        c = _FF(c, d, a, b, v7569, S13, 2821735955);
        const v7570 = k + 7;
        const v7571 = x[v7570];
        b = _FF(b, c, d, a, v7571, S14, 4249261313);
        const v7572 = k + 8;
        const v7573 = x[v7572];
        a = _FF(a, b, c, d, v7573, S11, 1770035416);
        const v7574 = k + 9;
        const v7575 = x[v7574];
        d = _FF(d, a, b, c, v7575, S12, 2336552879);
        const v7576 = k + 10;
        const v7577 = x[v7576];
        c = _FF(c, d, a, b, v7577, S13, 4294925233);
        const v7578 = k + 11;
        const v7579 = x[v7578];
        b = _FF(b, c, d, a, v7579, S14, 2304563134);
        const v7580 = k + 12;
        const v7581 = x[v7580];
        a = _FF(a, b, c, d, v7581, S11, 1804603682);
        const v7582 = k + 13;
        const v7583 = x[v7582];
        d = _FF(d, a, b, c, v7583, S12, 4254626195);
        const v7584 = k + 14;
        const v7585 = x[v7584];
        c = _FF(c, d, a, b, v7585, S13, 2792965006);
        const v7586 = k + 15;
        const v7587 = x[v7586];
        b = _FF(b, c, d, a, v7587, S14, 1236535329);
        const v7588 = k + 1;
        const v7589 = x[v7588];
        a = _GG(a, b, c, d, v7589, S21, 4129170786);
        const v7590 = k + 6;
        const v7591 = x[v7590];
        d = _GG(d, a, b, c, v7591, S22, 3225465664);
        const v7592 = k + 11;
        const v7593 = x[v7592];
        c = _GG(c, d, a, b, v7593, S23, 643717713);
        const v7594 = k + 0;
        const v7595 = x[v7594];
        b = _GG(b, c, d, a, v7595, S24, 3921069994);
        const v7596 = k + 5;
        const v7597 = x[v7596];
        a = _GG(a, b, c, d, v7597, S21, 3593408605);
        const v7598 = k + 10;
        const v7599 = x[v7598];
        d = _GG(d, a, b, c, v7599, S22, 38016083);
        const v7600 = k + 15;
        const v7601 = x[v7600];
        c = _GG(c, d, a, b, v7601, S23, 3634488961);
        const v7602 = k + 4;
        const v7603 = x[v7602];
        b = _GG(b, c, d, a, v7603, S24, 3889429448);
        const v7604 = k + 9;
        const v7605 = x[v7604];
        a = _GG(a, b, c, d, v7605, S21, 568446438);
        const v7606 = k + 14;
        const v7607 = x[v7606];
        d = _GG(d, a, b, c, v7607, S22, 3275163606);
        const v7608 = k + 3;
        const v7609 = x[v7608];
        c = _GG(c, d, a, b, v7609, S23, 4107603335);
        const v7610 = k + 8;
        const v7611 = x[v7610];
        b = _GG(b, c, d, a, v7611, S24, 1163531501);
        const v7612 = k + 13;
        const v7613 = x[v7612];
        a = _GG(a, b, c, d, v7613, S21, 2850285829);
        const v7614 = k + 2;
        const v7615 = x[v7614];
        d = _GG(d, a, b, c, v7615, S22, 4243563512);
        const v7616 = k + 7;
        const v7617 = x[v7616];
        c = _GG(c, d, a, b, v7617, S23, 1735328473);
        const v7618 = k + 12;
        const v7619 = x[v7618];
        b = _GG(b, c, d, a, v7619, S24, 2368359562);
        const v7620 = k + 5;
        const v7621 = x[v7620];
        a = _HH(a, b, c, d, v7621, S31, 4294588738);
        const v7622 = k + 8;
        const v7623 = x[v7622];
        d = _HH(d, a, b, c, v7623, S32, 2272392833);
        const v7624 = k + 11;
        const v7625 = x[v7624];
        c = _HH(c, d, a, b, v7625, S33, 1839030562);
        const v7626 = k + 14;
        const v7627 = x[v7626];
        b = _HH(b, c, d, a, v7627, S34, 4259657740);
        const v7628 = k + 1;
        const v7629 = x[v7628];
        a = _HH(a, b, c, d, v7629, S31, 2763975236);
        const v7630 = k + 4;
        const v7631 = x[v7630];
        d = _HH(d, a, b, c, v7631, S32, 1272893353);
        const v7632 = k + 7;
        const v7633 = x[v7632];
        c = _HH(c, d, a, b, v7633, S33, 4139469664);
        const v7634 = k + 10;
        const v7635 = x[v7634];
        b = _HH(b, c, d, a, v7635, S34, 3200236656);
        const v7636 = k + 13;
        const v7637 = x[v7636];
        a = _HH(a, b, c, d, v7637, S31, 681279174);
        const v7638 = k + 0;
        const v7639 = x[v7638];
        d = _HH(d, a, b, c, v7639, S32, 3936430074);
        const v7640 = k + 3;
        const v7641 = x[v7640];
        c = _HH(c, d, a, b, v7641, S33, 3572445317);
        const v7642 = k + 6;
        const v7643 = x[v7642];
        b = _HH(b, c, d, a, v7643, S34, 76029189);
        const v7644 = k + 9;
        const v7645 = x[v7644];
        a = _HH(a, b, c, d, v7645, S31, 3654602809);
        const v7646 = k + 12;
        const v7647 = x[v7646];
        d = _HH(d, a, b, c, v7647, S32, 3873151461);
        const v7648 = k + 15;
        const v7649 = x[v7648];
        c = _HH(c, d, a, b, v7649, S33, 530742520);
        const v7650 = k + 2;
        const v7651 = x[v7650];
        b = _HH(b, c, d, a, v7651, S34, 3299628645);
        const v7652 = k + 0;
        const v7653 = x[v7652];
        a = _II(a, b, c, d, v7653, S41, 4096336452);
        const v7654 = k + 7;
        const v7655 = x[v7654];
        d = _II(d, a, b, c, v7655, S42, 1126891415);
        const v7656 = k + 14;
        const v7657 = x[v7656];
        c = _II(c, d, a, b, v7657, S43, 2878612391);
        const v7658 = k + 5;
        const v7659 = x[v7658];
        b = _II(b, c, d, a, v7659, S44, 4237533241);
        const v7660 = k + 12;
        const v7661 = x[v7660];
        a = _II(a, b, c, d, v7661, S41, 1700485571);
        const v7662 = k + 3;
        const v7663 = x[v7662];
        d = _II(d, a, b, c, v7663, S42, 2399980690);
        const v7664 = k + 10;
        const v7665 = x[v7664];
        c = _II(c, d, a, b, v7665, S43, 4293915773);
        const v7666 = k + 1;
        const v7667 = x[v7666];
        b = _II(b, c, d, a, v7667, S44, 2240044497);
        const v7668 = k + 8;
        const v7669 = x[v7668];
        a = _II(a, b, c, d, v7669, S41, 1873313359);
        const v7670 = k + 15;
        const v7671 = x[v7670];
        d = _II(d, a, b, c, v7671, S42, 4264355552);
        const v7672 = k + 6;
        const v7673 = x[v7672];
        c = _II(c, d, a, b, v7673, S43, 2734768916);
        const v7674 = k + 13;
        const v7675 = x[v7674];
        b = _II(b, c, d, a, v7675, S44, 1309151649);
        const v7676 = k + 4;
        const v7677 = x[v7676];
        a = _II(a, b, c, d, v7677, S41, 4149444226);
        const v7678 = k + 11;
        const v7679 = x[v7678];
        d = _II(d, a, b, c, v7679, S42, 3174756917);
        const v7680 = k + 2;
        const v7681 = x[v7680];
        c = _II(c, d, a, b, v7681, S43, 718787259);
        const v7682 = k + 9;
        const v7683 = x[v7682];
        b = _II(b, c, d, a, v7683, S44, 3951481745);
        a = addUnsigned(a, AA);
        b = addUnsigned(b, BB);
        c = addUnsigned(c, CC);
        d = addUnsigned(d, DD);
        v7555 = k < xl;
    }
    const v7684 = wordToHex(a);
    const v7685 = wordToHex(b);
    const v7686 = v7684 + v7685;
    const v7687 = wordToHex(c);
    const v7688 = v7686 + v7687;
    const v7689 = wordToHex(d);
    var temp = v7688 + v7689;
    const v7690 = temp.toLowerCase();
    return v7690;
};
exports.md5 = v7691;
const v7694 = function (str_filename) {
    var buf = '';
    buf = this.file_get_contents(str_filename);
    const v7692 = !buf;
    if (v7692) {
        return false;
    }
    const v7693 = this.md5(buf);
    return v7693;
};
exports.md5_file = v7694;
const v7710 = function () {
    var body;
    var elmt;
    const v7695 = this.window;
    var d = v7695.document;
    var ret = '';
    var HTMLNS = 'http://www.w3.org/1999/xhtml';
    const v7696 = d.getElementsByTagNameNS;
    const v7697 = d.getElementsByTagNameNS(HTMLNS, 'body');
    const v7698 = v7697[0];
    const v7699 = d.getElementsByTagNameNS(HTMLNS, 'body');
    const v7700 = v7699[0];
    const v7701 = d.documentElement;
    const v7702 = v7701.lastChild;
    let v7703;
    if (v7698) {
        v7703 = v7700;
    } else {
        v7703 = v7702;
    }
    const v7704 = d.getElementsByTagName('body');
    const v7705 = v7704[0];
    if (v7696) {
        body = v7703;
    } else {
        body = v7705;
    }
    const v7706 = !body;
    if (v7706) {
        return false;
    }
    const v7707 = this.sprintf;
    ret = v7707.apply(this, arguments);
    elmt = d.createTextNode(ret);
    const v7708 = body.appendChild(elmt);
    v7708;
    const v7709 = ret.length;
    return v7709;
};
exports.printf = v7710;
const v8108 = function (category, locale) {
    var categ = '';
    var cats = [];
    var i = 0;
    const v7711 = this.window;
    var d = v7711.document;
    var _copy = function _copy(orig) {
        const v7712 = orig instanceof RegExp;
        if (v7712) {
            const v7713 = new RegExp(orig);
            return v7713;
        } else {
            const v7714 = orig instanceof Date;
            if (v7714) {
                const v7715 = new Date(orig);
                return v7715;
            }
        }
        var newObj = {};
        let i;
        for (i in orig) {
            const v7716 = orig[i];
            const v7717 = typeof v7716;
            const v7718 = v7717 === 'object';
            if (v7718) {
                const v7719 = orig[i];
                const v7720 = _copy(v7719);
                newObj[i] = v7720;
            } else {
                const v7721 = orig[i];
                newObj[i] = v7721;
            }
        }
        return newObj;
    };
    var _nplurals1 = function (n) {
        return 0;
    };
    var _nplurals2a = function (n) {
        const v7722 = n !== 1;
        let v7723;
        if (v7722) {
            v7723 = 1;
        } else {
            v7723 = 0;
        }
        return v7723;
    };
    var _nplurals2b = function (n) {
        const v7724 = n > 1;
        let v7725;
        if (v7724) {
            v7725 = 1;
        } else {
            v7725 = 0;
        }
        return v7725;
    };
    var _nplurals2c = function (n) {
        const v7726 = n % 10;
        const v7727 = v7726 === 1;
        const v7728 = n % 100;
        const v7729 = v7728 !== 11;
        const v7730 = v7727 && v7729;
        let v7731;
        if (v7730) {
            v7731 = 0;
        } else {
            v7731 = 1;
        }
        return v7731;
    };
    var _nplurals3a = function (n) {
        const v7732 = n % 10;
        const v7733 = v7732 === 1;
        const v7734 = n % 100;
        const v7735 = v7734 !== 11;
        const v7736 = v7733 && v7735;
        const v7737 = n !== 0;
        let v7738;
        if (v7737) {
            v7738 = 1;
        } else {
            v7738 = 2;
        }
        let v7739;
        if (v7736) {
            v7739 = 0;
        } else {
            v7739 = v7738;
        }
        return v7739;
    };
    var _nplurals3b = function (n) {
        const v7740 = n === 1;
        const v7741 = n === 2;
        let v7742;
        if (v7741) {
            v7742 = 1;
        } else {
            v7742 = 2;
        }
        let v7743;
        if (v7740) {
            v7743 = 0;
        } else {
            v7743 = v7742;
        }
        return v7743;
    };
    var _nplurals3c = function (n) {
        const v7744 = n === 1;
        const v7745 = n === 0;
        const v7746 = n % 100;
        const v7747 = v7746 > 0;
        const v7748 = n % 100;
        const v7749 = v7748 < 20;
        const v7750 = v7747 && v7749;
        const v7751 = v7745 || v7750;
        let v7752;
        if (v7751) {
            v7752 = 1;
        } else {
            v7752 = 2;
        }
        let v7753;
        if (v7744) {
            v7753 = 0;
        } else {
            v7753 = v7752;
        }
        return v7753;
    };
    var _nplurals3d = function (n) {
        const v7754 = n % 10;
        const v7755 = v7754 === 1;
        const v7756 = n % 100;
        const v7757 = v7756 !== 11;
        const v7758 = v7755 && v7757;
        const v7759 = n % 10;
        const v7760 = v7759 >= 2;
        const v7761 = n % 100;
        const v7762 = v7761 < 10;
        const v7763 = n % 100;
        const v7764 = v7763 >= 20;
        const v7765 = v7762 || v7764;
        const v7766 = v7760 && v7765;
        let v7767;
        if (v7766) {
            v7767 = 1;
        } else {
            v7767 = 2;
        }
        let v7768;
        if (v7758) {
            v7768 = 0;
        } else {
            v7768 = v7767;
        }
        return v7768;
    };
    var _nplurals3e = function (n) {
        const v7769 = n % 10;
        const v7770 = v7769 === 1;
        const v7771 = n % 100;
        const v7772 = v7771 !== 11;
        const v7773 = v7770 && v7772;
        const v7774 = n % 10;
        const v7775 = v7774 >= 2;
        const v7776 = n % 10;
        const v7777 = v7776 <= 4;
        const v7778 = v7775 && v7777;
        const v7779 = n % 100;
        const v7780 = v7779 < 10;
        const v7781 = n % 100;
        const v7782 = v7781 >= 20;
        const v7783 = v7780 || v7782;
        const v7784 = v7778 && v7783;
        let v7785;
        if (v7784) {
            v7785 = 1;
        } else {
            v7785 = 2;
        }
        let v7786;
        if (v7773) {
            v7786 = 0;
        } else {
            v7786 = v7785;
        }
        return v7786;
    };
    var _nplurals3f = function (n) {
        const v7787 = n === 1;
        const v7788 = n >= 2;
        const v7789 = n <= 4;
        const v7790 = v7788 && v7789;
        let v7791;
        if (v7790) {
            v7791 = 1;
        } else {
            v7791 = 2;
        }
        let v7792;
        if (v7787) {
            v7792 = 0;
        } else {
            v7792 = v7791;
        }
        return v7792;
    };
    var _nplurals3g = function (n) {
        const v7793 = n === 1;
        const v7794 = n % 10;
        const v7795 = v7794 >= 2;
        const v7796 = n % 10;
        const v7797 = v7796 <= 4;
        const v7798 = v7795 && v7797;
        const v7799 = n % 100;
        const v7800 = v7799 < 10;
        const v7801 = n % 100;
        const v7802 = v7801 >= 20;
        const v7803 = v7800 || v7802;
        const v7804 = v7798 && v7803;
        let v7805;
        if (v7804) {
            v7805 = 1;
        } else {
            v7805 = 2;
        }
        let v7806;
        if (v7793) {
            v7806 = 0;
        } else {
            v7806 = v7805;
        }
        return v7806;
    };
    var _nplurals3h = function (n) {
        const v7807 = n % 10;
        const v7808 = v7807 === 1;
        const v7809 = n % 10;
        const v7810 = v7809 === 2;
        let v7811;
        if (v7810) {
            v7811 = 1;
        } else {
            v7811 = 2;
        }
        let v7812;
        if (v7808) {
            v7812 = 0;
        } else {
            v7812 = v7811;
        }
        return v7812;
    };
    var _nplurals4a = function (n) {
        const v7813 = n % 100;
        const v7814 = v7813 === 1;
        const v7815 = n % 100;
        const v7816 = v7815 === 2;
        const v7817 = n % 100;
        const v7818 = v7817 === 3;
        const v7819 = n % 100;
        const v7820 = v7819 === 4;
        const v7821 = v7818 || v7820;
        let v7822;
        if (v7821) {
            v7822 = 2;
        } else {
            v7822 = 3;
        }
        let v7823;
        if (v7816) {
            v7823 = 1;
        } else {
            v7823 = v7822;
        }
        let v7824;
        if (v7814) {
            v7824 = 0;
        } else {
            v7824 = v7823;
        }
        return v7824;
    };
    var _nplurals4b = function (n) {
        const v7825 = n === 1;
        const v7826 = n === 0;
        const v7827 = n % 100;
        const v7828 = n % 100;
        const v7829 = v7828 <= 10;
        const v7830 = v7827 && v7829;
        const v7831 = v7826 || v7830;
        const v7832 = n % 100;
        const v7833 = v7832 >= 11;
        const v7834 = n % 100;
        const v7835 = v7834 <= 19;
        const v7836 = v7833 && v7835;
        let v7837;
        if (v7836) {
            v7837 = 2;
        } else {
            v7837 = 3;
        }
        let v7838;
        if (v7831) {
            v7838 = 1;
        } else {
            v7838 = v7837;
        }
        let v7839;
        if (v7825) {
            v7839 = 0;
        } else {
            v7839 = v7838;
        }
        return v7839;
    };
    var _nplurals5 = function (n) {
        const v7840 = n === 1;
        const v7841 = n === 2;
        const v7842 = n >= 3;
        const v7843 = n <= 6;
        const v7844 = v7842 && v7843;
        const v7845 = n >= 7;
        const v7846 = n <= 10;
        const v7847 = v7845 && v7846;
        let v7848;
        if (v7847) {
            v7848 = 3;
        } else {
            v7848 = 4;
        }
        let v7849;
        if (v7844) {
            v7849 = 2;
        } else {
            v7849 = v7848;
        }
        let v7850;
        if (v7841) {
            v7850 = 1;
        } else {
            v7850 = v7849;
        }
        let v7851;
        if (v7840) {
            v7851 = 0;
        } else {
            v7851 = v7850;
        }
        return v7851;
    };
    var _nplurals6 = function (n) {
        const v7852 = n === 0;
        const v7853 = n === 1;
        const v7854 = n === 2;
        const v7855 = n % 100;
        const v7856 = v7855 >= 3;
        const v7857 = n % 100;
        const v7858 = v7857 <= 10;
        const v7859 = v7856 && v7858;
        const v7860 = n % 100;
        const v7861 = v7860 >= 11;
        const v7862 = n % 100;
        const v7863 = v7862 <= 99;
        const v7864 = v7861 && v7863;
        let v7865;
        if (v7864) {
            v7865 = 3;
        } else {
            v7865 = 4;
        }
        let v7866;
        if (v7859) {
            v7866 = 2;
        } else {
            v7866 = v7865;
        }
        let v7867;
        if (v7854) {
            v7867 = 1;
        } else {
            v7867 = v7866;
        }
        let v7868;
        if (v7853) {
            v7868 = 0;
        } else {
            v7868 = v7867;
        }
        let v7869;
        if (v7852) {
            v7869 = 5;
        } else {
            v7869 = v7868;
        }
        return v7869;
    };
    try {
        const v7870 = this.php_js;
        const v7871 = {};
        this.php_js = v7870 || v7871;
    } catch (e) {
        const v7872 = {};
        this.php_js = v7872;
    }
    var phpjs = this.php_js;
    const v7873 = phpjs.locales;
    const v7874 = !v7873;
    if (v7874) {
        const v7875 = {};
        phpjs.locales = v7875;
        const v7876 = phpjs.locales;
        const v7882 = function (str1, str2) {
            const v7877 = str1 == str2;
            const v7878 = str1 > str2;
            const v7879 = -1;
            let v7880;
            if (v7878) {
                v7880 = 1;
            } else {
                v7880 = v7879;
            }
            let v7881;
            if (v7877) {
                v7881 = 0;
            } else {
                v7881 = v7880;
            }
            return v7881;
        };
        const v7883 = {};
        v7883.an = /^[A-Za-z\d]+$/g;
        v7883.al = /^[A-Za-z]+$/g;
        v7883.ct = /^[\u0000-\u001F\u007F]+$/g;
        v7883.dg = /^[\d]+$/g;
        v7883.gr = /^[\u0021-\u007E]+$/g;
        v7883.lw = /^[a-z]+$/g;
        v7883.pr = /^[\u0020-\u007E]+$/g;
        v7883.pu = /^[\u0021-\u002F\u003A-\u0040\u005B-\u0060\u007B-\u007E]+$/g;
        v7883.sp = /^[\f\n\r\t\v ]+$/g;
        v7883.up = /^[A-Z]+$/g;
        v7883.xd = /^[A-Fa-f\d]+$/g;
        v7883.CODESET = 'UTF-8';
        v7883.lower = 'abcdefghijklmnopqrstuvwxyz';
        v7883.upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const v7884 = [
            'Sun',
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat'
        ];
        const v7885 = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ];
        const v7886 = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ];
        const v7887 = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ];
        const v7888 = [
            'AM',
            'PM'
        ];
        const v7889 = [
            'am',
            'pm'
        ];
        const v7890 = {};
        v7890.a = v7884;
        v7890.A = v7885;
        v7890.b = v7886;
        v7890.B = v7887;
        v7890.c = '%a %d %b %Y %r %Z';
        v7890.p = v7888;
        v7890.P = v7889;
        v7890.r = '%I:%M:%S %p';
        v7890.x = '%m/%d/%Y';
        v7890.X = '%r';
        v7890.alt_digits = '';
        v7890.ERA = '';
        v7890.ERA_YEAR = '';
        v7890.ERA_D_T_FMT = '';
        v7890.ERA_D_FMT = '';
        v7890.ERA_T_FMT = '';
        const v7891 = [3];
        const v7892 = {};
        v7892.int_curr_symbol = 'USD';
        v7892.currency_symbol = '$';
        v7892.mon_decimal_point = '.';
        v7892.mon_thousands_sep = ',';
        v7892.mon_grouping = v7891;
        v7892.positive_sign = '';
        v7892.negative_sign = '-';
        v7892.int_frac_digits = 2;
        v7892.frac_digits = 2;
        v7892.p_cs_precedes = 1;
        v7892.p_sep_by_space = 0;
        v7892.n_cs_precedes = 1;
        v7892.n_sep_by_space = 0;
        v7892.p_sign_posn = 3;
        v7892.n_sign_posn = 0;
        const v7893 = [3];
        const v7894 = {};
        v7894.decimal_point = '.';
        v7894.thousands_sep = ',';
        v7894.grouping = v7893;
        const v7895 = {};
        v7895.YESEXPR = '^[yY].*';
        v7895.NOEXPR = '^[nN].*';
        v7895.YESSTR = '';
        v7895.NOSTR = '';
        const v7896 = {};
        v7896['LC_COLLATE'] = v7882;
        v7896['LC_CTYPE'] = v7883;
        v7896['LC_TIME'] = v7890;
        v7896['LC_MONETARY'] = v7892;
        v7896['LC_NUMERIC'] = v7894;
        v7896['LC_MESSAGES'] = v7895;
        v7896.nplurals = _nplurals2a;
        v7876.en = v7896;
        const v7898 = phpjs.locales;
        const v7899 = v7898.en;
        const v7900 = _copy(v7899);
        v7897.en_US = v7900;
        const v7901 = phpjs.locales;
        const v7902 = v7901.en_US;
        const v7903 = v7902.LC_TIME;
        v7903.c = '%a %d %b %Y %r %Z';
        const v7904 = phpjs.locales;
        const v7905 = v7904.en_US;
        const v7906 = v7905.LC_TIME;
        v7906.x = '%D';
        const v7907 = phpjs.locales;
        const v7908 = v7907.en_US;
        const v7909 = v7908.LC_TIME;
        v7909.X = '%r';
        const v7910 = phpjs.locales;
        const v7911 = v7910.en_US;
        const v7912 = v7911.LC_MONETARY;
        v7912.int_curr_symbol = 'USD ';
        const v7913 = phpjs.locales;
        const v7914 = v7913.en_US;
        const v7915 = v7914.LC_MONETARY;
        v7915.p_sign_posn = 1;
        const v7916 = phpjs.locales;
        const v7917 = v7916.en_US;
        const v7918 = v7917.LC_MONETARY;
        v7918.n_sign_posn = 1;
        const v7919 = phpjs.locales;
        const v7920 = v7919.en_US;
        const v7921 = v7920.LC_MONETARY;
        v7921.mon_grouping = [
            3,
            3
        ];
        const v7922 = phpjs.locales;
        const v7923 = v7922.en_US;
        const v7924 = v7923.LC_NUMERIC;
        v7924.thousands_sep = '';
        const v7925 = phpjs.locales;
        const v7926 = v7925.en_US;
        const v7927 = v7926.LC_NUMERIC;
        v7927.grouping = [];
        const v7929 = phpjs.locales;
        const v7930 = v7929.en;
        const v7931 = _copy(v7930);
        v7928.en_GB = v7931;
        const v7932 = phpjs.locales;
        const v7933 = v7932.en_GB;
        const v7934 = v7933.LC_TIME;
        v7934.r = '%l:%M:%S %P %Z';
        const v7936 = phpjs.locales;
        const v7937 = v7936.en_GB;
        const v7938 = _copy(v7937);
        v7935.en_AU = v7938;
        const v7940 = phpjs.locales;
        const v7941 = v7940.en;
        const v7942 = _copy(v7941);
        v7939.C = v7942;
        const v7943 = phpjs.locales;
        const v7944 = v7943.C;
        const v7945 = v7944.LC_CTYPE;
        v7945.CODESET = 'ANSI_X3.4-1968';
        const v7946 = phpjs.locales;
        const v7947 = v7946.C;
        const v7948 = [];
        const v7949 = {};
        v7949.int_curr_symbol = '';
        v7949.currency_symbol = '';
        v7949.mon_decimal_point = '';
        v7949.mon_thousands_sep = '';
        v7949.mon_grouping = v7948;
        v7949.p_cs_precedes = 127;
        v7949.p_sep_by_space = 127;
        v7949.n_cs_precedes = 127;
        v7949.n_sep_by_space = 127;
        v7949.p_sign_posn = 127;
        v7949.n_sign_posn = 127;
        v7949.positive_sign = '';
        v7949.negative_sign = '';
        v7949.int_frac_digits = 127;
        v7949.frac_digits = 127;
        v7947.LC_MONETARY = v7949;
        const v7950 = phpjs.locales;
        const v7951 = v7950.C;
        const v7952 = [];
        const v7953 = {};
        v7953.decimal_point = '.';
        v7953.thousands_sep = '';
        v7953.grouping = v7952;
        v7951.LC_NUMERIC = v7953;
        const v7954 = phpjs.locales;
        const v7955 = v7954.C;
        const v7956 = v7955.LC_TIME;
        v7956.c = '%a %b %e %H:%M:%S %Y';
        const v7957 = phpjs.locales;
        const v7958 = v7957.C;
        const v7959 = v7958.LC_TIME;
        v7959.x = '%m/%d/%y';
        const v7960 = phpjs.locales;
        const v7961 = v7960.C;
        const v7962 = v7961.LC_TIME;
        v7962.X = '%H:%M:%S';
        const v7963 = phpjs.locales;
        const v7964 = v7963.C;
        const v7965 = v7964.LC_MESSAGES;
        v7965.YESEXPR = '^[yY]';
        const v7966 = phpjs.locales;
        const v7967 = v7966.C;
        const v7968 = v7967.LC_MESSAGES;
        v7968.NOEXPR = '^[nN]';
        const v7970 = phpjs.locales;
        const v7971 = v7970.en;
        const v7972 = _copy(v7971);
        v7969.fr = v7972;
        const v7973 = phpjs.locales;
        const v7974 = v7973.fr;
        v7974.nplurals = _nplurals2b;
        const v7975 = phpjs.locales;
        const v7976 = v7975.fr;
        const v7977 = v7976.LC_TIME;
        v7977.a = [
            'dim',
            'lun',
            'mar',
            'mer',
            'jeu',
            'ven',
            'sam'
        ];
        const v7978 = phpjs.locales;
        const v7979 = v7978.fr;
        const v7980 = v7979.LC_TIME;
        v7980.A = [
            'dimanche',
            'lundi',
            'mardi',
            'mercredi',
            'jeudi',
            'vendredi',
            'samedi'
        ];
        const v7981 = phpjs.locales;
        const v7982 = v7981.fr;
        const v7983 = v7982.LC_TIME;
        v7983.b = [
            'jan',
            'fév',
            'mar',
            'avr',
            'mai',
            'jun',
            'jui',
            'aoû',
            'sep',
            'oct',
            'nov',
            'déc'
        ];
        const v7984 = phpjs.locales;
        const v7985 = v7984.fr;
        const v7986 = v7985.LC_TIME;
        v7986.B = [
            'janvier',
            'février',
            'mars',
            'avril',
            'mai',
            'juin',
            'juillet',
            'août',
            'septembre',
            'octobre',
            'novembre',
            'décembre'
        ];
        const v7987 = phpjs.locales;
        const v7988 = v7987.fr;
        const v7989 = v7988.LC_TIME;
        v7989.c = '%a %d %b %Y %T %Z';
        const v7990 = phpjs.locales;
        const v7991 = v7990.fr;
        const v7992 = v7991.LC_TIME;
        v7992.p = [
            '',
            ''
        ];
        const v7993 = phpjs.locales;
        const v7994 = v7993.fr;
        const v7995 = v7994.LC_TIME;
        v7995.P = [
            '',
            ''
        ];
        const v7996 = phpjs.locales;
        const v7997 = v7996.fr;
        const v7998 = v7997.LC_TIME;
        v7998.x = '%d.%m.%Y';
        const v7999 = phpjs.locales;
        const v8000 = v7999.fr;
        const v8001 = v8000.LC_TIME;
        v8001.X = '%T';
        const v8003 = phpjs.locales;
        const v8004 = v8003.fr;
        const v8005 = _copy(v8004);
        v8002.fr_CA = v8005;
        const v8006 = phpjs.locales;
        const v8007 = v8006.fr_CA;
        const v8008 = v8007.LC_TIME;
        v8008.x = '%Y-%m-%d';
    }
    const v8009 = phpjs.locale;
    const v8010 = !v8009;
    if (v8010) {
        phpjs.locale = 'en_US';
        var NS_XHTML = 'http://www.w3.org/1999/xhtml';
        var NS_XML = 'http://www.w3.org/XML/1998/namespace';
        const v8011 = d.getElementsByTagNameNS;
        const v8012 = d.getElementsByTagNameNS(NS_XHTML, 'html');
        const v8013 = v8012[0];
        const v8014 = v8011 && v8013;
        if (v8014) {
            const v8015 = d.getElementsByTagNameNS(NS_XHTML, 'html');
            const v8016 = v8015[0];
            const v8017 = v8016.getAttributeNS;
            const v8018 = d.getElementsByTagNameNS(NS_XHTML, 'html');
            const v8019 = v8018[0];
            const v8020 = v8019.getAttributeNS(NS_XML, 'lang');
            const v8021 = v8017 && v8020;
            if (v8021) {
                const v8022 = d.getElementsByTagName(NS_XHTML, 'html');
                const v8023 = v8022[0];
                const v8024 = v8023.getAttributeNS(NS_XML, 'lang');
                phpjs.locale = v8024;
            } else {
                const v8025 = d.getElementsByTagNameNS(NS_XHTML, 'html');
                const v8026 = v8025[0];
                const v8027 = v8026.lang;
                if (v8027) {
                    const v8028 = d.getElementsByTagNameNS(NS_XHTML, 'html');
                    const v8029 = v8028[0];
                    const v8030 = v8029.lang;
                    phpjs.locale = v8030;
                }
            }
        } else {
            const v8031 = d.getElementsByTagName('html');
            const v8032 = v8031[0];
            const v8033 = d.getElementsByTagName('html');
            const v8034 = v8033[0];
            const v8035 = v8034.lang;
            const v8036 = v8032 && v8035;
            if (v8036) {
                const v8037 = d.getElementsByTagName('html');
                const v8038 = v8037[0];
                const v8039 = v8038.lang;
                phpjs.locale = v8039;
            }
        }
    }
    const v8040 = phpjs.locale;
    const v8041 = v8040.replace('-', '_');
    phpjs.locale = v8041;
    const v8042 = phpjs.locale;
    const v8043 = phpjs.locales;
    const v8044 = v8042 in v8043;
    const v8045 = !v8044;
    if (v8045) {
        const v8046 = phpjs.locale;
        const v8047 = v8046.replace(/_[a-zA-Z]+$/, '');
        const v8048 = phpjs.locales;
        const v8049 = v8047 in v8048;
        if (v8049) {
            const v8050 = phpjs.locale;
            const v8051 = v8050.replace(/_[a-zA-Z]+$/, '');
            phpjs.locale = v8051;
        }
    }
    const v8052 = phpjs.localeCategories;
    const v8053 = !v8052;
    if (v8053) {
        const v8054 = phpjs.locale;
        const v8055 = phpjs.locale;
        const v8056 = phpjs.locale;
        const v8057 = phpjs.locale;
        const v8058 = phpjs.locale;
        const v8059 = phpjs.locale;
        const v8060 = {};
        v8060['LC_COLLATE'] = v8054;
        v8060['LC_CTYPE'] = v8055;
        v8060['LC_MONETARY'] = v8056;
        v8060['LC_NUMERIC'] = v8057;
        v8060['LC_TIME'] = v8058;
        v8060['LC_MESSAGES'] = v8059;
        phpjs.localeCategories = v8060;
    }
    const v8061 = locale === null;
    const v8062 = locale === '';
    const v8063 = v8061 || v8062;
    if (v8063) {
        const v8064 = this.getenv(category);
        const v8065 = this.getenv('LANG');
        locale = v8064 || v8065;
    } else {
        const v8066 = Object.prototype;
        const v8067 = v8066.toString;
        const v8068 = v8067.call(locale);
        const v8069 = v8068 === '[object Array]';
        if (v8069) {
            i = 0
            const v8070 = locale.length;
            let v8071 = i < v8070;
            while (v8071) {
                const v8073 = locale[i];
                const v8074 = this.php_js;
                const v8075 = v8074.locales;
                const v8076 = v8073 in v8075;
                const v8077 = !v8076;
                if (v8077) {
                    const v8078 = locale.length;
                    const v8079 = v8078 - 1;
                    const v8080 = i === v8079;
                    if (v8080) {
                        return false;
                    }
                    continue;
                }
                locale = locale[i];
                break;
                const v8072 = i++;
                v8071 = i < v8070;
            }
        }
    }
    const v8081 = locale === '0';
    const v8082 = locale === 0;
    const v8083 = v8081 || v8082;
    if (v8083) {
        const v8084 = category === 'LC_ALL';
        if (v8084) {
            const v8085 = this.php_js;
            const v8086 = v8085.localeCategories;
            for (categ in v8086) {
                const v8087 = categ + '=';
                const v8088 = this.php_js;
                const v8089 = v8088.localeCategories;
                const v8090 = v8089[categ];
                const v8091 = v8087 + v8090;
                const v8092 = cats.push(v8091);
                v8092;
            }
            const v8093 = cats.join(';');
            return v8093;
        }
        const v8094 = this.php_js;
        const v8095 = v8094.localeCategories;
        const v8096 = v8095[category];
        return v8096;
    }
    const v8097 = this.php_js;
    const v8098 = v8097.locales;
    const v8099 = locale in v8098;
    const v8100 = !v8099;
    if (v8100) {
        return false;
    }
    const v8101 = category === 'LC_ALL';
    if (v8101) {
        const v8102 = this.php_js;
        const v8103 = v8102.localeCategories;
        for (categ in v8103) {
            const v8104 = this.php_js;
            const v8105 = v8104.localeCategories;
            v8105[categ] = locale;
        }
    } else {
        const v8106 = this.php_js;
        const v8107 = v8106.localeCategories;
        v8107[category] = locale;
    }
    return locale;
};
exports.setlocale = v8108;
const v8242 = function (str) {
    var rotate_left = function (n, s) {
        const v8109 = n << s;
        const v8110 = 32 - s;
        const v8111 = n >>> v8110;
        var t4 = v8109 | v8111;
        return t4;
    };
    var cvt_hex = function (val) {
        var str = '';
        var i;
        var v;
        (i = 7)
        let v8112 = i >= 0;
        while (v8112) {
            const v8114 = i * 4;
            const v8115 = val >>> v8114;
            v = v8115 & 15;
            str += v.toString(16);
            const v8113 = i--;
            v8112 = i >= 0;
        }
        return str;
    };
    var blockstart;
    var i;
    var j;
    var W = new Array(80);
    var H0 = 1732584193;
    var H1 = 4023233417;
    var H2 = 2562383102;
    var H3 = 271733878;
    var H4 = 3285377520;
    var A;
    var B;
    var C;
    var D;
    var E;
    var temp;
    str = this.utf8_encode(str);
    var str_len = str.length;
    var word_array = [];
    (i = 0)
    const v8116 = str_len - 3;
    let v8117 = i < v8116;
    while (v8117) {
        const v8118 = str.charCodeAt(i);
        const v8119 = v8118 << 24;
        const v8120 = i + 1;
        const v8121 = str.charCodeAt(v8120);
        const v8122 = v8121 << 16;
        const v8123 = v8119 | v8122;
        const v8124 = i + 2;
        const v8125 = str.charCodeAt(v8124);
        const v8126 = v8125 << 8;
        const v8127 = v8123 | v8126;
        const v8128 = i + 3;
        const v8129 = str.charCodeAt(v8128);
        j = v8127 | v8129;
        const v8130 = word_array.push(j);
        v8130;
        v8117 = i < v8116;
    }
    const v8131 = str_len % 4;
    switch (v8131) {
    case 0:
        i = 2147483648;
        break;
    case 1:
        const v8132 = str_len - 1;
        const v8133 = str.charCodeAt(v8132);
        const v8134 = v8133 << 24;
        i = v8134 | 8388608;
        break;
    case 2:
        const v8135 = str_len - 2;
        const v8136 = str.charCodeAt(v8135);
        const v8137 = v8136 << 24;
        const v8138 = str_len - 1;
        const v8139 = str.charCodeAt(v8138);
        const v8140 = v8139 << 16;
        const v8141 = v8137 | v8140;
        i = v8141 | 32768;
        break;
    case 3:
        const v8142 = str_len - 3;
        const v8143 = str.charCodeAt(v8142);
        const v8144 = v8143 << 24;
        const v8145 = str_len - 2;
        const v8146 = str.charCodeAt(v8145);
        const v8147 = v8146 << 16;
        const v8148 = v8144 | v8147;
        const v8149 = str_len - 1;
        const v8150 = str.charCodeAt(v8149);
        const v8151 = v8150 << 8;
        const v8152 = v8148 | v8151;
        i = v8152 | 128;
        break;
    }
    const v8153 = word_array.push(i);
    v8153;
    const v8154 = word_array.length;
    const v8155 = v8154 % 16;
    let v8156 = v8155 != 14;
    while (v8156) {
        const v8157 = word_array.push(0);
        v8157;
        v8156 = v8155 != 14;
    }
    const v8158 = str_len >>> 29;
    const v8159 = word_array.push(v8158);
    v8159;
    const v8160 = str_len << 3;
    const v8161 = v8160 & 4294967295;
    const v8162 = word_array.push(v8161);
    v8162;
    (blockstart = 0)
    const v8163 = word_array.length;
    let v8164 = blockstart < v8163;
    while (v8164) {
        i = 0
        let v8165 = i < 16;
        while (v8165) {
            const v8167 = blockstart + i;
            const v8168 = word_array[v8167];
            W[i] = v8168;
            const v8166 = i++;
            v8165 = i < 16;
        }
        i = 16
        let v8169 = i <= 79;
        while (v8169) {
            const v8171 = i - 3;
            const v8172 = W[v8171];
            const v8173 = i - 8;
            const v8174 = W[v8173];
            const v8175 = v8172 ^ v8174;
            const v8176 = i - 14;
            const v8177 = W[v8176];
            const v8178 = v8175 ^ v8177;
            const v8179 = i - 16;
            const v8180 = W[v8179];
            const v8181 = v8178 ^ v8180;
            const v8182 = rotate_left(v8181, 1);
            W[i] = v8182;
            const v8170 = i++;
            v8169 = i <= 79;
        }
        A = H0;
        B = H1;
        C = H2;
        D = H3;
        E = H4;
        i = 0
        let v8183 = i <= 19;
        while (v8183) {
            const v8185 = rotate_left(A, 5);
            const v8186 = B & C;
            const v8187 = ~B;
            const v8188 = v8187 & D;
            const v8189 = v8186 | v8188;
            const v8190 = v8185 + v8189;
            const v8191 = v8190 + E;
            const v8192 = W[i];
            const v8193 = v8191 + v8192;
            const v8194 = v8193 + 1518500249;
            temp = v8194 & 4294967295;
            E = D;
            D = C;
            C = rotate_left(B, 30);
            B = A;
            A = temp;
            const v8184 = i++;
            v8183 = i <= 19;
        }
        i = 20
        let v8195 = i <= 39;
        while (v8195) {
            const v8197 = rotate_left(A, 5);
            const v8198 = B ^ C;
            const v8199 = v8198 ^ D;
            const v8200 = v8197 + v8199;
            const v8201 = v8200 + E;
            const v8202 = W[i];
            const v8203 = v8201 + v8202;
            const v8204 = v8203 + 1859775393;
            temp = v8204 & 4294967295;
            E = D;
            D = C;
            C = rotate_left(B, 30);
            B = A;
            A = temp;
            const v8196 = i++;
            v8195 = i <= 39;
        }
        i = 40
        let v8205 = i <= 59;
        while (v8205) {
            const v8207 = rotate_left(A, 5);
            const v8208 = B & C;
            const v8209 = B & D;
            const v8210 = v8208 | v8209;
            const v8211 = C & D;
            const v8212 = v8210 | v8211;
            const v8213 = v8207 + v8212;
            const v8214 = v8213 + E;
            const v8215 = W[i];
            const v8216 = v8214 + v8215;
            const v8217 = v8216 + 2400959708;
            temp = v8217 & 4294967295;
            E = D;
            D = C;
            C = rotate_left(B, 30);
            B = A;
            A = temp;
            const v8206 = i++;
            v8205 = i <= 59;
        }
        i = 60
        let v8218 = i <= 79;
        while (v8218) {
            const v8220 = rotate_left(A, 5);
            const v8221 = B ^ C;
            const v8222 = v8221 ^ D;
            const v8223 = v8220 + v8222;
            const v8224 = v8223 + E;
            const v8225 = W[i];
            const v8226 = v8224 + v8225;
            const v8227 = v8226 + 3395469782;
            temp = v8227 & 4294967295;
            E = D;
            D = C;
            C = rotate_left(B, 30);
            B = A;
            A = temp;
            const v8219 = i++;
            v8218 = i <= 79;
        }
        const v8228 = H0 + A;
        H0 = v8228 & 4294967295;
        const v8229 = H1 + B;
        H1 = v8229 & 4294967295;
        const v8230 = H2 + C;
        H2 = v8230 & 4294967295;
        const v8231 = H3 + D;
        H3 = v8231 & 4294967295;
        const v8232 = H4 + E;
        H4 = v8232 & 4294967295;
        v8164 = blockstart < v8163;
    }
    const v8233 = cvt_hex(H0);
    const v8234 = cvt_hex(H1);
    const v8235 = v8233 + v8234;
    const v8236 = cvt_hex(H2);
    const v8237 = v8235 + v8236;
    const v8238 = cvt_hex(H3);
    const v8239 = v8237 + v8238;
    const v8240 = cvt_hex(H4);
    temp = v8239 + v8240;
    const v8241 = temp.toLowerCase();
    return v8241;
};
exports.sha1 = v8242;
const v8244 = function (str_filename) {
    var buf = this.file_get_contents(str_filename);
    const v8243 = this.sha1(buf);
    return v8243;
};
exports.sha1_file = v8244;
const v8246 = function (delimiter, string) {
    const v8245 = this.explode(delimiter, string);
    return v8245;
};
exports.split = v8246;
const v8248 = function (haystack, needle, bool) {
    const v8247 = this.strstr(haystack, needle, bool);
    return v8247;
};
exports.strchr = v8248;
const v8307 = function (f_string1, f_string2, f_version) {
    var i = 0;
    const v8249 = f_version == undefined;
    if (v8249) {
        f_version = false;
    }
    var __strnatcmp_split = function (f_string) {
        var result = [];
        var buffer = '';
        var chr = '';
        var i = 0;
        var f_stringl = 0;
        var text = true;
        f_stringl = f_string.length;
        (i = 0)
        let v8250 = i < f_stringl;
        while (v8250) {
            const v8252 = i + 1;
            chr = f_string.substring(i, v8252);
            const v8253 = chr.match(/\d/);
            if (v8253) {
                if (text) {
                    const v8254 = buffer.length;
                    const v8255 = v8254 > 0;
                    if (v8255) {
                        const v8256 = result.length;
                        result[v8256] = buffer;
                        buffer = '';
                    }
                    text = false;
                }
                buffer += chr;
            } else {
                const v8257 = text == false;
                const v8258 = chr === '.';
                const v8259 = v8257 && v8258;
                const v8260 = f_string.length;
                const v8261 = v8260 - 1;
                const v8262 = i < v8261;
                const v8263 = v8259 && v8262;
                const v8264 = i + 1;
                const v8265 = i + 2;
                const v8266 = f_string.substring(v8264, v8265);
                const v8267 = v8266.match(/\d/);
                const v8268 = v8263 && v8267;
                if (v8268) {
                    const v8269 = result.length;
                    result[v8269] = buffer;
                    buffer = '';
                } else {
                    const v8270 = text == false;
                    if (v8270) {
                        const v8271 = buffer.length;
                        const v8272 = v8271 > 0;
                        if (v8272) {
                            const v8274 = parseInt(buffer, 10);
                            result[v8273] = v8274;
                            buffer = '';
                        }
                        text = true;
                    }
                    buffer += chr;
                }
            }
            const v8251 = i++;
            v8250 = i < f_stringl;
        }
        const v8275 = buffer.length;
        const v8276 = v8275 > 0;
        if (v8276) {
            if (text) {
                const v8277 = result.length;
                result[v8277] = buffer;
            } else {
                const v8279 = parseInt(buffer, 10);
                result[v8278] = v8279;
            }
        }
        return result;
    };
    const v8280 = f_string1 + '';
    var array1 = __strnatcmp_split(v8280);
    const v8281 = f_string2 + '';
    var array2 = __strnatcmp_split(v8281);
    var len = array1.length;
    var text = true;
    const v8282 = -1;
    var result = v8282;
    var r = 0;
    const v8283 = array2.length;
    const v8284 = len > v8283;
    if (v8284) {
        len = array2.length;
        result = 1;
    }
    (i = 0)
    let v8285 = i < len;
    while (v8285) {
        const v8287 = array1[i];
        const v8288 = isNaN(v8287);
        if (v8288) {
            const v8289 = array2[i];
            const v8290 = isNaN(v8289);
            if (v8290) {
                text = true;
                const v8291 = array1[i];
                const v8292 = array2[i];
                const v8293 = (r = this.strcmp(v8291, v8292)) != 0;
                if (v8293) {
                    return r;
                }
            } else {
                if (text) {
                    return 1;
                } else {
                    const v8294 = -1;
                    return v8294;
                }
            }
        } else {
            const v8295 = array2[i];
            const v8296 = isNaN(v8295);
            if (v8296) {
                if (text) {
                    const v8297 = -1;
                    return v8297;
                } else {
                    return 1;
                }
            } else {
                const v8298 = text || f_version;
                if (v8298) {
                    const v8299 = array1[i];
                    const v8300 = array2[i];
                    const v8301 = (r = v8299 - v8300) != 0;
                    if (v8301) {
                        return r;
                    }
                } else {
                    const v8302 = array1[i];
                    const v8303 = v8302.toString();
                    const v8304 = array2[i];
                    const v8305 = v8304.toString();
                    const v8306 = (r = this.strcmp(v8303, v8305)) != 0;
                    if (v8306) {
                        return r;
                    }
                }
                text = false;
            }
        }
        const v8286 = i++;
        v8285 = i < len;
    }
    return result;
};
exports.strnatcmp = v8307;
const v8325 = function (format, args) {
    var body;
    var elmt;
    var ret = '';
    const v8308 = this.window;
    var d = v8308.document;
    var HTMLNS = 'http://www.w3.org/1999/xhtml';
    const v8309 = d.getElementsByTagNameNS;
    const v8310 = d.getElementsByTagNameNS(HTMLNS, 'body');
    const v8311 = v8310[0];
    const v8312 = d.getElementsByTagNameNS(HTMLNS, 'body');
    const v8313 = v8312[0];
    const v8314 = d.documentElement;
    const v8315 = v8314.lastChild;
    let v8316;
    if (v8311) {
        v8316 = v8313;
    } else {
        v8316 = v8315;
    }
    const v8317 = d.getElementsByTagName('body');
    const v8318 = v8317[0];
    if (v8309) {
        body = v8316;
    } else {
        body = v8318;
    }
    const v8319 = !body;
    if (v8319) {
        return false;
    }
    const v8320 = this.sprintf;
    const v8321 = [format];
    const v8322 = v8321.concat(args);
    ret = v8320.apply(this, v8322);
    elmt = d.createTextNode(ret);
    const v8323 = body.appendChild(elmt);
    v8323;
    const v8324 = ret.length;
    return v8324;
};
exports.vprintf = v8325;
const v8330 = function (format, args) {
    const v8326 = this.sprintf;
    const v8327 = [format];
    const v8328 = v8327.concat(args);
    const v8329 = v8326.apply(this, v8328);
    return v8329;
};
exports.vsprintf = v8330;
const v8352 = function (url, format) {
    let req;
    const v8331 = this.window;
    const v8332 = v8331.ActiveXObject;
    const v8333 = new ActiveXObject('Microsoft.XMLHTTP');
    const v8334 = new XMLHttpRequest();
    if (v8332) {
        req = v8333;
    } else {
        req = v8334;
    }
    const v8335 = !req;
    if (v8335) {
        const v8336 = new Error('XMLHttpRequest not supported');
        throw v8336;
    }
    var tmp;
    var headers;
    var pair;
    var i;
    var j = 0;
    ß;
    const v8337 = req.open('HEAD', url, false);
    v8337;
    const v8338 = req.send(null);
    v8338;
    const v8339 = req.readyState;
    const v8340 = v8339 < 3;
    if (v8340) {
        return false;
    }
    tmp = req.getAllResponseHeaders();
    tmp = tmp.split('\n');
    const v8343 = function (value) {
        const v8341 = value.substring(1);
        const v8342 = v8341 !== '';
        return v8342;
    };
    tmp = this.array_filter(tmp, v8343);
    const v8344 = {};
    const v8345 = [];
    if (format) {
        headers = v8344;
    } else {
        headers = v8345;
    }
    let i;
    for (i in tmp) {
        if (format) {
            const v8346 = tmp[i];
            pair = v8346.split(':');
            const v8348 = pair.join(':');
            const v8349 = v8348.substring(1);
            headers[v8347] = v8349;
        } else {
            const v8350 = j++;
            const v8351 = tmp[i];
            headers[v8350] = v8351;
        }
    }
    return headers;
};
exports.get_headers = v8352;
const v8366 = function (file) {
    var fulltxt = '';
    if (false) {
        const v8353 = '<meta name="author" content="name">' + '<meta name="keywords" content="php documentation">';
        const v8354 = v8353 + '<meta name="DESCRIPTION" content="a php manual">';
        const v8355 = v8354 + '<meta name="geo.position" content="49.33;-86.59">';
        fulltxt = v8355 + '</head>';
    } else {
        const v8356 = this.file_get_contents(file);
        fulltxt = v8356.match(/^[\s\S]*<\/head>/i);
    }
    var patt = /<meta[^>]*?>/gim;
    var patt1 = /<meta\s+.*?name\s*=\s*(['"]?)(.*?)\1\s+.*?content\s*=\s*(['"]?)(.*?)\3/gim;
    var patt2 = /<meta\s+.*?content\s*=\s*(['"?])(.*?)\1\s+.*?name\s*=\s*(['"]?)(.*?)\3/gim;
    var txt;
    var match;
    var name;
    var arr = {};
    let v8357 = (txt = patt.exec(fulltxt)) !== null;
    while (v8357) {
        let v8358 = (match = patt1.exec(txt)) !== null;
        while (v8358) {
            const v8359 = match[2];
            const v8360 = v8359.replace(/\W/g, '_');
            name = v8360.toLowerCase();
            const v8361 = match[4];
            arr[name] = v8361;
            v8358 = (match = patt1.exec(txt)) !== null;
        }
        let v8362 = (match = patt2.exec(txt)) !== null;
        while (v8362) {
            const v8363 = match[4];
            const v8364 = v8363.replace(/\W/g, '_');
            name = v8364.toLowerCase();
            const v8365 = match[2];
            arr[name] = v8365;
            v8362 = (match = patt2.exec(txt)) !== null;
        }
        v8357 = (txt = patt.exec(fulltxt)) !== null;
    }
    return arr;
};
exports.get_meta_tags = v8366;
const v8396 = function (formdata, numeric_prefix, arg_separator) {
    var value;
    var key;
    var tmp = [];
    var that = this;
    var _http_build_query_helper = function (key, val, arg_separator) {
        var k;
        var tmp = [];
        const v8367 = val === true;
        if (v8367) {
            val = '1';
        } else {
            const v8368 = val === false;
            if (v8368) {
                val = '0';
            }
        }
        const v8369 = val != null;
        if (v8369) {
            const v8370 = typeof val;
            const v8371 = v8370 === 'object';
            if (v8371) {
                for (k in val) {
                    const v8372 = val[k];
                    const v8373 = v8372 != null;
                    if (v8373) {
                        const v8374 = key + '[';
                        const v8375 = v8374 + k;
                        const v8376 = v8375 + ']';
                        const v8377 = val[k];
                        const v8378 = _http_build_query_helper(v8376, v8377, arg_separator);
                        const v8379 = tmp.push(v8378);
                        v8379;
                    }
                }
                const v8380 = tmp.join(arg_separator);
                return v8380;
            } else {
                const v8381 = typeof val;
                const v8382 = v8381 !== 'function';
                if (v8382) {
                    const v8383 = that.urlencode(key);
                    const v8384 = v8383 + '=';
                    const v8385 = that.urlencode(val);
                    const v8386 = v8384 + v8385;
                    return v8386;
                } else {
                    const v8387 = new Error('There was an error processing for http_build_query().');
                    throw v8387;
                }
            }
        } else {
            return '';
        }
    };
    const v8388 = !arg_separator;
    if (v8388) {
        arg_separator = '&';
    }
    for (key in formdata) {
        value = formdata[key];
        const v8389 = isNaN(key);
        const v8390 = !v8389;
        const v8391 = numeric_prefix && v8390;
        if (v8391) {
            const v8392 = String(numeric_prefix);
            key = v8392 + key;
        }
        var query = _http_build_query_helper(key, value, arg_separator);
        const v8393 = query !== '';
        if (v8393) {
            const v8394 = tmp.push(query);
            v8394;
        }
    }
    const v8395 = tmp.join(arg_separator);
    return v8395;
};
exports.http_build_query = v8396;
const v8398 = function (mixed_var) {
    const v8397 = this.floatval(mixed_var);
    return v8397;
};
exports.doubleval = v8398;
const v8424 = function (mixed_var) {
    const v8399 = typeof mixed_var;
    var s = v8399;
    var name;
    var getFuncName = function (fn) {
        var name = /\W*function\s+([\w\$]+)\s*\(/.exec(fn);
        const v8400 = !name;
        if (v8400) {
            return '(Anonymous)';
        }
        const v8401 = name[1];
        return v8401;
    };
    const v8402 = s === 'object';
    if (v8402) {
        const v8403 = mixed_var !== null;
        if (v8403) {
            const v8404 = mixed_var.length;
            const v8405 = typeof v8404;
            const v8406 = v8405 === 'number';
            const v8407 = mixed_var.propertyIsEnumerable('length');
            const v8408 = !v8407;
            const v8409 = v8406 && v8408;
            const v8410 = mixed_var.splice;
            const v8411 = typeof v8410;
            const v8412 = v8411 === 'function';
            const v8413 = v8409 && v8412;
            if (v8413) {
                s = 'array';
            } else {
                const v8414 = mixed_var.constructor;
                const v8415 = mixed_var.constructor;
                const v8416 = getFuncName(v8415);
                const v8417 = v8414 && v8416;
                if (v8417) {
                    const v8418 = mixed_var.constructor;
                    name = getFuncName(v8418);
                    const v8419 = name === 'Date';
                    if (v8419) {
                        s = 'date';
                    } else {
                        const v8420 = name === 'RegExp';
                        if (v8420) {
                            s = 'regexp';
                        } else {
                            const v8421 = name === 'PHPJS_Resource';
                            if (v8421) {
                                s = 'resource';
                            }
                        }
                    }
                }
            }
        } else {
            s = 'null';
        }
    } else {
        const v8422 = s === 'number';
        if (v8422) {
            const v8423 = this.is_float(mixed_var);
            if (v8423) {
                s = 'double';
            } else {
                s = 'integer';
            }
        }
    }
    return s;
};
exports.gettype = v8424;
const v8426 = function (mixed_var) {
    const v8425 = this.is_float(mixed_var);
    return v8425;
};
exports.is_double = v8426;
const v8428 = function (mixed_var) {
    const v8427 = this.is_int(mixed_var);
    return v8427;
};
exports.is_integer = v8428;
const v8430 = function (mixed_var) {
    const v8429 = this.is_float(mixed_var);
    return v8429;
};
exports.is_long = v8430;
const v8432 = function (mixed_var) {
    const v8431 = this.is_float(mixed_var);
    return v8431;
};
exports.is_real = v8432;
const v8482 = function (array, return_val) {
    var output = '';
    var pad_char = ' ';
    var pad_val = 4;
    const v8433 = this.window;
    var d = v8433.document;
    var getFuncName = function (fn) {
        var name = /\W*function\s+([\w\$]+)\s*\(/.exec(fn);
        const v8434 = !name;
        if (v8434) {
            return '(Anonymous)';
        }
        const v8435 = name[1];
        return v8435;
    };
    const v8438 = function (len, pad_char) {
        var str = '';
        var i = 0;
        let v8436 = i < len;
        while (v8436) {
            str += pad_char;
            const v8437 = i++;
            v8436 = i < len;
        }
        return str;
    };
    repeat_char = v8438;
    const v8474 = function (obj, cur_depth, pad_val, pad_char) {
        const v8439 = cur_depth > 0;
        if (v8439) {
            const v8440 = cur_depth++;
            v8440;
        }
        const v8441 = pad_val * cur_depth;
        var base_pad = repeat_char(v8441, pad_char);
        const v8442 = cur_depth + 1;
        const v8443 = pad_val * v8442;
        var thick_pad = repeat_char(v8443, pad_char);
        var str = '';
        const v8444 = typeof obj;
        const v8445 = v8444 === 'object';
        const v8446 = obj !== null;
        const v8447 = v8445 && v8446;
        const v8448 = obj.constructor;
        const v8449 = v8447 && v8448;
        const v8450 = obj.constructor;
        const v8451 = getFuncName(v8450);
        const v8452 = v8451 !== 'PHPJS_Resource';
        const v8453 = v8449 && v8452;
        if (v8453) {
            const v8454 = 'Array\n' + base_pad;
            str += v8454 + '(\n';
            let key;
            for (key in obj) {
                const v8455 = Object.prototype;
                const v8456 = v8455.toString;
                const v8457 = obj[key];
                const v8458 = v8456.call(v8457);
                const v8459 = v8458 === '[object Array]';
                if (v8459) {
                    const v8460 = thick_pad + '[';
                    const v8461 = v8460 + key;
                    const v8462 = v8461 + '] => ';
                    const v8463 = obj[key];
                    const v8464 = cur_depth + 1;
                    const v8465 = formatArray(v8463, v8464, pad_val, pad_char);
                    str += v8462 + v8465;
                } else {
                    const v8466 = thick_pad + '[';
                    const v8467 = v8466 + key;
                    const v8468 = v8467 + '] => ';
                    const v8469 = obj[key];
                    const v8470 = v8468 + v8469;
                    str += v8470 + '\n';
                }
            }
            str += base_pad + ')\n';
        } else {
            const v8471 = obj === null;
            const v8472 = obj === undefined;
            const v8473 = v8471 || v8472;
            if (v8473) {
                str = '';
            } else {
                str = obj.toString();
            }
        }
        return str;
    };
    formatArray = v8474;
    output = formatArray(array, 0, pad_val, pad_char);
    const v8475 = return_val !== true;
    if (v8475) {
        const v8476 = d.body;
        if (v8476) {
            const v8477 = this.echo(output);
            v8477;
        } else {
            try {
                d = XULDocument;
                const v8478 = '<pre xmlns="http://www.w3.org/1999/xhtml" style="white-space:pre;">' + output;
                const v8479 = v8478 + '</pre>';
                const v8480 = this.echo(v8479);
                v8480;
            } catch (e) {
                const v8481 = this.echo(output);
                v8481;
            }
        }
        return true;
    }
    return output;
};
exports.print_r = v8482;
const v8593 = function () {
    var output = '';
    var pad_char = ' ';
    var pad_val = 4;
    var lgth = 0;
    var i = 0;
    var _getFuncName = function (fn) {
        var name = /\W*function\s+([\w\$]+)\s*\(/.exec(fn);
        const v8483 = !name;
        if (v8483) {
            return '(Anonymous)';
        }
        const v8484 = name[1];
        return v8484;
    };
    var _repeat_char = function (len, pad_char) {
        var str = '';
        var i = 0;
        let v8485 = i < len;
        while (v8485) {
            str += pad_char;
            const v8486 = i++;
            v8485 = i < len;
        }
        return str;
    };
    var _getInnerVal = function (val, thick_pad) {
        var ret = '';
        const v8487 = val === null;
        if (v8487) {
            ret = 'NULL';
        } else {
            const v8488 = typeof val;
            const v8489 = v8488 === 'boolean';
            if (v8489) {
                const v8490 = 'bool(' + val;
                ret = v8490 + ')';
            } else {
                const v8491 = typeof val;
                const v8492 = v8491 === 'string';
                if (v8492) {
                    const v8493 = val.length;
                    const v8494 = 'string(' + v8493;
                    const v8495 = v8494 + ') "';
                    const v8496 = v8495 + val;
                    ret = v8496 + '"';
                } else {
                    const v8497 = typeof val;
                    const v8498 = v8497 === 'number';
                    if (v8498) {
                        const v8499 = parseFloat(val);
                        const v8500 = parseInt(val, 10);
                        const v8501 = v8499 == v8500;
                        if (v8501) {
                            const v8502 = 'int(' + val;
                            ret = v8502 + ')';
                        } else {
                            const v8503 = 'float(' + val;
                            ret = v8503 + ')';
                        }
                    } else {
                        const v8504 = typeof val;
                        const v8505 = v8504 === 'undefined';
                        if (v8505) {
                            ret = 'undefined';
                        } else {
                            const v8506 = typeof val;
                            const v8507 = v8506 === 'function';
                            if (v8507) {
                                const v8508 = val.toString();
                                var funcLines = v8508.split('\n');
                                ret = '';
                                var i = 0;
                                var fll = funcLines.length;
                                let v8509 = i < fll;
                                while (v8509) {
                                    const v8511 = i !== 0;
                                    const v8512 = '\n' + thick_pad;
                                    let v8513;
                                    if (v8511) {
                                        v8513 = v8512;
                                    } else {
                                        v8513 = '';
                                    }
                                    const v8514 = funcLines[i];
                                    ret += v8513 + v8514;
                                    const v8510 = i++;
                                    v8509 = i < fll;
                                }
                            } else {
                                const v8515 = val instanceof Date;
                                if (v8515) {
                                    const v8516 = 'Date(' + val;
                                    ret = v8516 + ')';
                                } else {
                                    const v8517 = val instanceof RegExp;
                                    if (v8517) {
                                        const v8518 = 'RegExp(' + val;
                                        ret = v8518 + ')';
                                    } else {
                                        const v8519 = val.nodeName;
                                        if (v8519) {
                                            const v8520 = val.nodeType;
                                            switch (v8520) {
                                            case 1:
                                                const v8521 = val.namespaceURI;
                                                const v8522 = typeof v8521;
                                                const v8523 = v8522 === 'undefined';
                                                const v8524 = val.namespaceURI;
                                                const v8525 = v8524 === 'http://www.w3.org/1999/xhtml';
                                                const v8526 = v8523 || v8525;
                                                if (v8526) {
                                                    const v8527 = val.nodeName;
                                                    const v8528 = 'HTMLElement("' + v8527;
                                                    ret = v8528 + '")';
                                                } else {
                                                    const v8529 = val.nodeName;
                                                    const v8530 = 'XML Element("' + v8529;
                                                    ret = v8530 + '")';
                                                }
                                                break;
                                            case 2:
                                                const v8531 = val.nodeName;
                                                const v8532 = 'ATTRIBUTE_NODE(' + v8531;
                                                ret = v8532 + ')';
                                                break;
                                            case 3:
                                                const v8533 = val.nodeValue;
                                                const v8534 = 'TEXT_NODE(' + v8533;
                                                ret = v8534 + ')';
                                                break;
                                            case 4:
                                                const v8535 = val.nodeValue;
                                                const v8536 = 'CDATA_SECTION_NODE(' + v8535;
                                                ret = v8536 + ')';
                                                break;
                                            case 5:
                                                ret = 'ENTITY_REFERENCE_NODE';
                                                break;
                                            case 6:
                                                ret = 'ENTITY_NODE';
                                                break;
                                            case 7:
                                                const v8537 = val.nodeName;
                                                const v8538 = 'PROCESSING_INSTRUCTION_NODE(' + v8537;
                                                const v8539 = v8538 + ':';
                                                const v8540 = val.nodeValue;
                                                const v8541 = v8539 + v8540;
                                                ret = v8541 + ')';
                                                break;
                                            case 8:
                                                const v8542 = val.nodeValue;
                                                const v8543 = 'COMMENT_NODE(' + v8542;
                                                ret = v8543 + ')';
                                                break;
                                            case 9:
                                                ret = 'DOCUMENT_NODE';
                                                break;
                                            case 10:
                                                ret = 'DOCUMENT_TYPE_NODE';
                                                break;
                                            case 11:
                                                ret = 'DOCUMENT_FRAGMENT_NODE';
                                                break;
                                            case 12:
                                                ret = 'NOTATION_NODE';
                                                break;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return ret;
    };
    var _formatArray = function (obj, cur_depth, pad_val, pad_char) {
        var someProp = '';
        const v8544 = cur_depth > 0;
        if (v8544) {
            const v8545 = cur_depth++;
            v8545;
        }
        const v8546 = cur_depth - 1;
        const v8547 = pad_val * v8546;
        var base_pad = _repeat_char(v8547, pad_char);
        const v8548 = cur_depth + 1;
        const v8549 = pad_val * v8548;
        var thick_pad = _repeat_char(v8549, pad_char);
        var str = '';
        var val = '';
        const v8550 = typeof obj;
        const v8551 = v8550 === 'object';
        const v8552 = obj !== null;
        const v8553 = v8551 && v8552;
        if (v8553) {
            const v8554 = obj.constructor;
            const v8555 = obj.constructor;
            const v8556 = _getFuncName(v8555);
            const v8557 = v8556 === 'PHPJS_Resource';
            const v8558 = v8554 && v8557;
            if (v8558) {
                const v8559 = obj.var_dump();
                return v8559;
            }
            lgth = 0;
            for (someProp in obj) {
                const v8560 = lgth++;
                v8560;
            }
            const v8561 = 'array(' + lgth;
            str += v8561 + ') {\n';
            let key;
            for (key in obj) {
                var objVal = obj[key];
                const v8562 = typeof objVal;
                const v8563 = v8562 === 'object';
                const v8564 = objVal !== null;
                const v8565 = v8563 && v8564;
                const v8566 = objVal instanceof Date;
                const v8567 = !v8566;
                const v8568 = v8565 && v8567;
                const v8569 = objVal instanceof RegExp;
                const v8570 = !v8569;
                const v8571 = v8568 && v8570;
                const v8572 = objVal.nodeName;
                const v8573 = !v8572;
                const v8574 = v8571 && v8573;
                if (v8574) {
                    const v8575 = thick_pad + '[';
                    const v8576 = v8575 + key;
                    const v8577 = v8576 + '] =>\n';
                    const v8578 = v8577 + thick_pad;
                    const v8579 = cur_depth + 1;
                    const v8580 = _formatArray(objVal, v8579, pad_val, pad_char);
                    str += v8578 + v8580;
                } else {
                    val = _getInnerVal(objVal, thick_pad);
                    const v8581 = thick_pad + '[';
                    const v8582 = v8581 + key;
                    const v8583 = v8582 + '] =>\n';
                    const v8584 = v8583 + thick_pad;
                    const v8585 = v8584 + val;
                    str += v8585 + '\n';
                }
            }
            str += base_pad + '}\n';
        } else {
            str = _getInnerVal(obj, thick_pad);
        }
        return str;
    };
    const v8586 = arguments[0];
    output = _formatArray(v8586, 0, pad_val, pad_char);
    (i = 1)
    const v8587 = arguments.length;
    let v8588 = i < v8587;
    while (v8588) {
        const v8590 = arguments[i];
        const v8591 = _formatArray(v8590, 0, pad_val, pad_char);
        output += '\n' + v8591;
        const v8589 = i++;
        v8588 = i < v8587;
    }
    const v8592 = this.echo(output);
    v8592;
};
exports.var_dump = v8593;
const v8666 = function (mixed_expression, bool_return) {
    var retstr = '';
    var iret = '';
    var value;
    var cnt = 0;
    var x = [];
    var i = 0;
    var funcParts = [];
    const v8594 = arguments[2];
    var idtLevel = v8594 || 2;
    var innerIndent = '';
    var outerIndent = '';
    var getFuncName = function (fn) {
        var name = /\W*function\s+([\w\$]+)\s*\(/.exec(fn);
        const v8595 = !name;
        if (v8595) {
            return '(Anonymous)';
        }
        const v8596 = name[1];
        return v8596;
    };
    const v8600 = function (idtLevel) {
        const v8597 = idtLevel + 1;
        const v8598 = new Array(v8597);
        const v8599 = v8598.join(' ');
        return v8599;
    };
    _makeIndent = v8600;
    const v8624 = function (inp) {
        var i = 0;
        var match;
        var types;
        var cons;
        const v8601 = typeof inp;
        var type = v8601;
        const v8602 = type === 'object';
        const v8603 = inp.constructor;
        const v8604 = inp && v8603;
        const v8605 = v8602 && v8604;
        const v8606 = inp.constructor;
        const v8607 = getFuncName(v8606);
        const v8608 = v8607 === 'PHPJS_Resource';
        const v8609 = v8605 && v8608;
        if (v8609) {
            return 'resource';
        }
        const v8610 = type === 'function';
        if (v8610) {
            return 'function';
        }
        const v8611 = type === 'object';
        const v8612 = !inp;
        const v8613 = v8611 && v8612;
        if (v8613) {
            return 'null';
        }
        const v8614 = type === 'object';
        if (v8614) {
            const v8615 = inp.constructor;
            const v8616 = !v8615;
            if (v8616) {
                return 'object';
            }
            const v8617 = inp.constructor;
            cons = v8617.toString();
            match = cons.match(/(\w+)\(/);
            if (match) {
                const v8618 = match[1];
                cons = v8618.toLowerCase();
            }
            types = [
                'boolean',
                'number',
                'string',
                'array'
            ];
            i = 0
            const v8619 = types.length;
            let v8620 = i < v8619;
            while (v8620) {
                const v8622 = types[i];
                const v8623 = cons === v8622;
                if (v8623) {
                    type = types[i];
                    break;
                }
                const v8621 = i++;
                v8620 = i < v8619;
            }
        }
        return type;
    };
    __getType = v8624;
    type = __getType(mixed_expression);
    const v8625 = type === null;
    if (v8625) {
        retstr = 'NULL';
    } else {
        const v8626 = type === 'array';
        const v8627 = type === 'object';
        const v8628 = v8626 || v8627;
        if (v8628) {
            const v8629 = idtLevel - 2;
            outerIndent = _makeIndent(v8629);
            innerIndent = _makeIndent(idtLevel);
            for (i in mixed_expression) {
                const v8630 = mixed_expression[i];
                const v8631 = idtLevel + 2;
                value = this.var_export(v8630, 1, v8631);
                const v8632 = typeof value;
                const v8633 = v8632 === 'string';
                const v8634 = value.replace(/</g, '&lt;');
                const v8635 = v8634.replace(/>/g, '&gt;');
                if (v8633) {
                    value = v8635;
                } else {
                    value = value;
                }
                const v8636 = cnt++;
                const v8637 = innerIndent + i;
                const v8638 = v8637 + ' => ';
                const v8639 = mixed_expression[i];
                const v8640 = __getType(v8639);
                const v8641 = v8640 === 'array';
                let v8642;
                if (v8641) {
                    v8642 = '\n';
                } else {
                    v8642 = '';
                }
                const v8643 = v8638 + v8642;
                x[v8636] = v8643 + value;
            }
            iret = x.join(',\n');
            const v8644 = outerIndent + 'array (\n';
            const v8645 = v8644 + iret;
            const v8646 = v8645 + '\n';
            const v8647 = v8646 + outerIndent;
            retstr = v8647 + ')';
        } else {
            const v8648 = type === 'function';
            if (v8648) {
                const v8649 = mixed_expression.toString();
                funcParts = v8649.match(/function .*?\((.*?)\) \{([\s\S]*)\}/);
                const v8650 = funcParts[1];
                const v8651 = 'create_function (\'' + v8650;
                const v8652 = v8651 + '\', \'';
                const v8653 = funcParts[2];
                const v8654 = new RegExp('\'', 'g');
                const v8655 = v8653.replace(v8654, '\\\'');
                const v8656 = v8652 + v8655;
                retstr = v8656 + '\')';
            } else {
                const v8657 = type === 'resource';
                if (v8657) {
                    retstr = 'NULL';
                } else {
                    const v8658 = typeof mixed_expression;
                    const v8659 = v8658 !== 'string';
                    const v8660 = mixed_expression.replace(/(["'])/g, '\\$1');
                    const v8661 = v8660.replace(/\0/g, '\\0');
                    const v8662 = '\'' + v8661;
                    const v8663 = v8662 + '\'';
                    if (v8659) {
                        retstr = mixed_expression;
                    } else {
                        retstr = v8663;
                    }
                }
            }
        }
    }
    const v8664 = !bool_return;
    if (v8664) {
        const v8665 = this.echo(retstr);
        v8665;
        return null;
    }
    return retstr;
};
exports.var_export = v8666;
const v8730 = function (inputArr, sort_flags) {
    var valArr = [];
    var valArrLen = 0;
    var k;
    var i;
    var ret;
    var sorter;
    var that = this;
    var strictForIn = false;
    var populateArr = {};
    switch (sort_flags) {
    case 'SORT_STRING':
        const v8668 = function (a, b) {
            const v8667 = that.strnatcmp(b, a);
            return v8667;
        };
        sorter = v8668;
        break;
    case 'SORT_LOCALE_STRING':
        var loc = this.i18n_loc_get_default();
        const v8669 = this.php_js;
        const v8670 = v8669.i18nLocales;
        const v8671 = v8670[loc];
        sorter = v8671.sorting;
        break;
    case 'SORT_NUMERIC':
        const v8673 = function (a, b) {
            const v8672 = a - b;
            return v8672;
        };
        sorter = v8673;
        break;
    case 'SORT_REGULAR':
    default:
        const v8692 = function (b, a) {
            var aFloat = parseFloat(a);
            var bFloat = parseFloat(b);
            const v8674 = aFloat + '';
            var aNumeric = v8674 === a;
            const v8675 = bFloat + '';
            var bNumeric = v8675 === b;
            const v8676 = aNumeric && bNumeric;
            if (v8676) {
                const v8677 = aFloat > bFloat;
                const v8678 = aFloat < bFloat;
                const v8679 = -1;
                let v8680;
                if (v8678) {
                    v8680 = v8679;
                } else {
                    v8680 = 0;
                }
                let v8681;
                if (v8677) {
                    v8681 = 1;
                } else {
                    v8681 = v8680;
                }
                return v8681;
            } else {
                const v8682 = !bNumeric;
                const v8683 = aNumeric && v8682;
                if (v8683) {
                    return 1;
                } else {
                    const v8684 = !aNumeric;
                    const v8685 = v8684 && bNumeric;
                    if (v8685) {
                        const v8686 = -1;
                        return v8686;
                    }
                }
            }
            const v8687 = a > b;
            const v8688 = a < b;
            const v8689 = -1;
            let v8690;
            if (v8688) {
                v8690 = v8689;
            } else {
                v8690 = 0;
            }
            let v8691;
            if (v8687) {
                v8691 = 1;
            } else {
                v8691 = v8690;
            }
            return v8691;
        };
        sorter = v8692;
        break;
    }
    const v8693 = this.php_js;
    const v8694 = {};
    this.php_js = v8693 || v8694;
    const v8695 = this.php_js;
    const v8696 = this.php_js;
    const v8697 = v8696.ini;
    const v8698 = {};
    v8695.ini = v8697 || v8698;
    const v8699 = this.php_js;
    const v8700 = v8699.ini;
    const v8701 = v8700['phpjs.strictForIn'];
    const v8702 = this.php_js;
    const v8703 = v8702.ini;
    const v8704 = v8703['phpjs.strictForIn'];
    const v8705 = v8704.local_value;
    const v8706 = v8701 && v8705;
    const v8707 = this.php_js;
    const v8708 = v8707.ini;
    const v8709 = v8708['phpjs.strictForIn'];
    const v8710 = v8709.local_value;
    const v8711 = v8710 !== 'off';
    strictForIn = v8706 && v8711;
    if (strictForIn) {
        populateArr = inputArr;
    } else {
        populateArr = populateArr;
    }
    for (k in inputArr) {
        const v8712 = inputArr.hasOwnProperty(k);
        if (v8712) {
            const v8713 = inputArr[k];
            const v8714 = [
                k,
                v8713
            ];
            const v8715 = valArr.push(v8714);
            v8715;
            if (strictForIn) {
                const v8716 = inputArr[k];
                const v8717 = delete v8716;
                v8717;
            }
        }
    }
    const v8721 = function (a, b) {
        const v8718 = a[1];
        const v8719 = b[1];
        const v8720 = sorter(v8718, v8719);
        return v8720;
    };
    const v8722 = valArr.sort(v8721);
    v8722;
    (i = 0, valArrLen = valArr.length)
    let v8723 = i < valArrLen;
    while (v8723) {
        const v8725 = valArr[i];
        const v8726 = v8725[0];
        const v8727 = valArr[i];
        const v8728 = v8727[1];
        populateArr[v8726] = v8728;
        const v8724 = i++;
        v8723 = i < valArrLen;
    }
    const v8729 = strictForIn || populateArr;
    return v8729;
};
exports.arsort = v8730;
const v8794 = function (inputArr, sort_flags) {
    var valArr = [];
    var valArrLen = 0;
    var k;
    var i;
    var ret;
    var sorter;
    var that = this;
    var strictForIn = false;
    var populateArr = {};
    switch (sort_flags) {
    case 'SORT_STRING':
        const v8732 = function (a, b) {
            const v8731 = that.strnatcmp(a, b);
            return v8731;
        };
        sorter = v8732;
        break;
    case 'SORT_LOCALE_STRING':
        var loc = this.i18n_loc_get_default();
        const v8733 = this.php_js;
        const v8734 = v8733.i18nLocales;
        const v8735 = v8734[loc];
        sorter = v8735.sorting;
        break;
    case 'SORT_NUMERIC':
        const v8737 = function (a, b) {
            const v8736 = a - b;
            return v8736;
        };
        sorter = v8737;
        break;
    case 'SORT_REGULAR':
    default:
        const v8756 = function (a, b) {
            var aFloat = parseFloat(a);
            var bFloat = parseFloat(b);
            const v8738 = aFloat + '';
            var aNumeric = v8738 === a;
            const v8739 = bFloat + '';
            var bNumeric = v8739 === b;
            const v8740 = aNumeric && bNumeric;
            if (v8740) {
                const v8741 = aFloat > bFloat;
                const v8742 = aFloat < bFloat;
                const v8743 = -1;
                let v8744;
                if (v8742) {
                    v8744 = v8743;
                } else {
                    v8744 = 0;
                }
                let v8745;
                if (v8741) {
                    v8745 = 1;
                } else {
                    v8745 = v8744;
                }
                return v8745;
            } else {
                const v8746 = !bNumeric;
                const v8747 = aNumeric && v8746;
                if (v8747) {
                    return 1;
                } else {
                    const v8748 = !aNumeric;
                    const v8749 = v8748 && bNumeric;
                    if (v8749) {
                        const v8750 = -1;
                        return v8750;
                    }
                }
            }
            const v8751 = a > b;
            const v8752 = a < b;
            const v8753 = -1;
            let v8754;
            if (v8752) {
                v8754 = v8753;
            } else {
                v8754 = 0;
            }
            let v8755;
            if (v8751) {
                v8755 = 1;
            } else {
                v8755 = v8754;
            }
            return v8755;
        };
        sorter = v8756;
        break;
    }
    const v8757 = this.php_js;
    const v8758 = {};
    this.php_js = v8757 || v8758;
    const v8759 = this.php_js;
    const v8760 = this.php_js;
    const v8761 = v8760.ini;
    const v8762 = {};
    v8759.ini = v8761 || v8762;
    const v8763 = this.php_js;
    const v8764 = v8763.ini;
    const v8765 = v8764['phpjs.strictForIn'];
    const v8766 = this.php_js;
    const v8767 = v8766.ini;
    const v8768 = v8767['phpjs.strictForIn'];
    const v8769 = v8768.local_value;
    const v8770 = v8765 && v8769;
    const v8771 = this.php_js;
    const v8772 = v8771.ini;
    const v8773 = v8772['phpjs.strictForIn'];
    const v8774 = v8773.local_value;
    const v8775 = v8774 !== 'off';
    strictForIn = v8770 && v8775;
    if (strictForIn) {
        populateArr = inputArr;
    } else {
        populateArr = populateArr;
    }
    for (k in inputArr) {
        const v8776 = inputArr.hasOwnProperty(k);
        if (v8776) {
            const v8777 = inputArr[k];
            const v8778 = [
                k,
                v8777
            ];
            const v8779 = valArr.push(v8778);
            v8779;
            if (strictForIn) {
                const v8780 = inputArr[k];
                const v8781 = delete v8780;
                v8781;
            }
        }
    }
    const v8785 = function (a, b) {
        const v8782 = a[1];
        const v8783 = b[1];
        const v8784 = sorter(v8782, v8783);
        return v8784;
    };
    const v8786 = valArr.sort(v8785);
    v8786;
    (i = 0, valArrLen = valArr.length)
    let v8787 = i < valArrLen;
    while (v8787) {
        const v8789 = valArr[i];
        const v8790 = v8789[0];
        const v8791 = valArr[i];
        const v8792 = v8791[1];
        populateArr[v8790] = v8792;
        const v8788 = i++;
        v8787 = i < valArrLen;
    }
    const v8793 = strictForIn || populateArr;
    return v8793;
};
exports.asort = v8794;
const v8852 = function (inputArr, sort_flags) {
    var tmp_arr = {};
    var keys = [];
    var sorter;
    var i;
    var k;
    var that = this;
    var strictForIn = false;
    var populateArr = {};
    switch (sort_flags) {
    case 'SORT_STRING':
        const v8796 = function (a, b) {
            const v8795 = that.strnatcmp(b, a);
            return v8795;
        };
        sorter = v8796;
        break;
    case 'SORT_LOCALE_STRING':
        var loc = this.i18n_loc_get_default();
        const v8797 = this.php_js;
        const v8798 = v8797.i18nLocales;
        const v8799 = v8798[loc];
        sorter = v8799.sorting;
        break;
    case 'SORT_NUMERIC':
        const v8801 = function (a, b) {
            const v8800 = b - a;
            return v8800;
        };
        sorter = v8801;
        break;
    case 'SORT_REGULAR':
    default:
        const v8820 = function (b, a) {
            var aFloat = parseFloat(a);
            var bFloat = parseFloat(b);
            const v8802 = aFloat + '';
            var aNumeric = v8802 === a;
            const v8803 = bFloat + '';
            var bNumeric = v8803 === b;
            const v8804 = aNumeric && bNumeric;
            if (v8804) {
                const v8805 = aFloat > bFloat;
                const v8806 = aFloat < bFloat;
                const v8807 = -1;
                let v8808;
                if (v8806) {
                    v8808 = v8807;
                } else {
                    v8808 = 0;
                }
                let v8809;
                if (v8805) {
                    v8809 = 1;
                } else {
                    v8809 = v8808;
                }
                return v8809;
            } else {
                const v8810 = !bNumeric;
                const v8811 = aNumeric && v8810;
                if (v8811) {
                    return 1;
                } else {
                    const v8812 = !aNumeric;
                    const v8813 = v8812 && bNumeric;
                    if (v8813) {
                        const v8814 = -1;
                        return v8814;
                    }
                }
            }
            const v8815 = a > b;
            const v8816 = a < b;
            const v8817 = -1;
            let v8818;
            if (v8816) {
                v8818 = v8817;
            } else {
                v8818 = 0;
            }
            let v8819;
            if (v8815) {
                v8819 = 1;
            } else {
                v8819 = v8818;
            }
            return v8819;
        };
        sorter = v8820;
        break;
    }
    for (k in inputArr) {
        const v8821 = inputArr.hasOwnProperty(k);
        if (v8821) {
            const v8822 = keys.push(k);
            v8822;
        }
    }
    const v8823 = keys.sort(sorter);
    v8823;
    const v8824 = this.php_js;
    const v8825 = {};
    this.php_js = v8824 || v8825;
    const v8826 = this.php_js;
    const v8827 = this.php_js;
    const v8828 = v8827.ini;
    const v8829 = {};
    v8826.ini = v8828 || v8829;
    const v8830 = this.php_js;
    const v8831 = v8830.ini;
    const v8832 = v8831['phpjs.strictForIn'];
    const v8833 = this.php_js;
    const v8834 = v8833.ini;
    const v8835 = v8834['phpjs.strictForIn'];
    const v8836 = v8835.local_value;
    const v8837 = v8832 && v8836;
    const v8838 = this.php_js;
    const v8839 = v8838.ini;
    const v8840 = v8839['phpjs.strictForIn'];
    const v8841 = v8840.local_value;
    const v8842 = v8841 !== 'off';
    strictForIn = v8837 && v8842;
    if (strictForIn) {
        populateArr = inputArr;
    } else {
        populateArr = populateArr;
    }
    (i = 0)
    const v8843 = keys.length;
    let v8844 = i < v8843;
    while (v8844) {
        k = keys[i];
        const v8846 = inputArr[k];
        tmp_arr[k] = v8846;
        if (strictForIn) {
            const v8847 = inputArr[k];
            const v8848 = delete v8847;
            v8848;
        }
        const v8845 = i++;
        v8844 = i < v8843;
    }
    for (i in tmp_arr) {
        const v8849 = tmp_arr.hasOwnProperty(i);
        if (v8849) {
            const v8850 = tmp_arr[i];
            populateArr[i] = v8850;
        }
    }
    const v8851 = strictForIn || populateArr;
    return v8851;
};
exports.krsort = v8852;
const v8912 = function (inputArr, sort_flags) {
    var tmp_arr = {};
    var keys = [];
    var sorter;
    var i;
    var k;
    var that = this;
    var strictForIn = false;
    var populateArr = {};
    switch (sort_flags) {
    case 'SORT_STRING':
        const v8854 = function (a, b) {
            const v8853 = that.strnatcmp(a, b);
            return v8853;
        };
        sorter = v8854;
        break;
    case 'SORT_LOCALE_STRING':
        var loc = this.i18n_loc_get_default();
        const v8855 = this.php_js;
        const v8856 = v8855.i18nLocales;
        const v8857 = v8856[loc];
        sorter = v8857.sorting;
        break;
    case 'SORT_NUMERIC':
        const v8861 = function (a, b) {
            const v8858 = a + 0;
            const v8859 = b + 0;
            const v8860 = v8858 - v8859;
            return v8860;
        };
        sorter = v8861;
        break;
    default:
        const v8880 = function (a, b) {
            var aFloat = parseFloat(a);
            var bFloat = parseFloat(b);
            const v8862 = aFloat + '';
            var aNumeric = v8862 === a;
            const v8863 = bFloat + '';
            var bNumeric = v8863 === b;
            const v8864 = aNumeric && bNumeric;
            if (v8864) {
                const v8865 = aFloat > bFloat;
                const v8866 = aFloat < bFloat;
                const v8867 = -1;
                let v8868;
                if (v8866) {
                    v8868 = v8867;
                } else {
                    v8868 = 0;
                }
                let v8869;
                if (v8865) {
                    v8869 = 1;
                } else {
                    v8869 = v8868;
                }
                return v8869;
            } else {
                const v8870 = !bNumeric;
                const v8871 = aNumeric && v8870;
                if (v8871) {
                    return 1;
                } else {
                    const v8872 = !aNumeric;
                    const v8873 = v8872 && bNumeric;
                    if (v8873) {
                        const v8874 = -1;
                        return v8874;
                    }
                }
            }
            const v8875 = a > b;
            const v8876 = a < b;
            const v8877 = -1;
            let v8878;
            if (v8876) {
                v8878 = v8877;
            } else {
                v8878 = 0;
            }
            let v8879;
            if (v8875) {
                v8879 = 1;
            } else {
                v8879 = v8878;
            }
            return v8879;
        };
        sorter = v8880;
        break;
    }
    for (k in inputArr) {
        const v8881 = inputArr.hasOwnProperty(k);
        if (v8881) {
            const v8882 = keys.push(k);
            v8882;
        }
    }
    const v8883 = keys.sort(sorter);
    v8883;
    const v8884 = this.php_js;
    const v8885 = {};
    this.php_js = v8884 || v8885;
    const v8886 = this.php_js;
    const v8887 = this.php_js;
    const v8888 = v8887.ini;
    const v8889 = {};
    v8886.ini = v8888 || v8889;
    const v8890 = this.php_js;
    const v8891 = v8890.ini;
    const v8892 = v8891['phpjs.strictForIn'];
    const v8893 = this.php_js;
    const v8894 = v8893.ini;
    const v8895 = v8894['phpjs.strictForIn'];
    const v8896 = v8895.local_value;
    const v8897 = v8892 && v8896;
    const v8898 = this.php_js;
    const v8899 = v8898.ini;
    const v8900 = v8899['phpjs.strictForIn'];
    const v8901 = v8900.local_value;
    const v8902 = v8901 !== 'off';
    strictForIn = v8897 && v8902;
    if (strictForIn) {
        populateArr = inputArr;
    } else {
        populateArr = populateArr;
    }
    (i = 0)
    const v8903 = keys.length;
    let v8904 = i < v8903;
    while (v8904) {
        k = keys[i];
        const v8906 = inputArr[k];
        tmp_arr[k] = v8906;
        if (strictForIn) {
            const v8907 = inputArr[k];
            const v8908 = delete v8907;
            v8908;
        }
        const v8905 = i++;
        v8904 = i < v8903;
    }
    for (i in tmp_arr) {
        const v8909 = tmp_arr.hasOwnProperty(i);
        if (v8909) {
            const v8910 = tmp_arr[i];
            populateArr[i] = v8910;
        }
    }
    const v8911 = strictForIn || populateArr;
    return v8911;
};
exports.ksort = v8912;
const v8951 = function (inputArr) {
    var valArr = [];
    var k;
    var i;
    var ret;
    var that = this;
    var strictForIn = false;
    var populateArr = {};
    const v8913 = this.php_js;
    const v8914 = {};
    this.php_js = v8913 || v8914;
    const v8915 = this.php_js;
    const v8916 = this.php_js;
    const v8917 = v8916.ini;
    const v8918 = {};
    v8915.ini = v8917 || v8918;
    const v8919 = this.php_js;
    const v8920 = v8919.ini;
    const v8921 = v8920['phpjs.strictForIn'];
    const v8922 = this.php_js;
    const v8923 = v8922.ini;
    const v8924 = v8923['phpjs.strictForIn'];
    const v8925 = v8924.local_value;
    const v8926 = v8921 && v8925;
    const v8927 = this.php_js;
    const v8928 = v8927.ini;
    const v8929 = v8928['phpjs.strictForIn'];
    const v8930 = v8929.local_value;
    const v8931 = v8930 !== 'off';
    strictForIn = v8926 && v8931;
    if (strictForIn) {
        populateArr = inputArr;
    } else {
        populateArr = populateArr;
    }
    for (k in inputArr) {
        const v8932 = inputArr.hasOwnProperty(k);
        if (v8932) {
            const v8933 = inputArr[k];
            const v8934 = [
                k,
                v8933
            ];
            const v8935 = valArr.push(v8934);
            v8935;
            if (strictForIn) {
                const v8936 = inputArr[k];
                const v8937 = delete v8936;
                v8937;
            }
        }
    }
    const v8941 = function (a, b) {
        const v8938 = a[1];
        const v8939 = b[1];
        const v8940 = that.strnatcmp(v8938, v8939);
        return v8940;
    };
    const v8942 = valArr.sort(v8941);
    v8942;
    (i = 0)
    const v8943 = valArr.length;
    let v8944 = i < v8943;
    while (v8944) {
        const v8946 = valArr[i];
        const v8947 = v8946[0];
        const v8948 = valArr[i];
        const v8949 = v8948[1];
        populateArr[v8947] = v8949;
        const v8945 = i++;
        v8944 = i < v8943;
    }
    const v8950 = strictForIn || populateArr;
    return v8950;
};
exports.natsort = v8951;
const v9009 = function (inputArr, sort_flags) {
    var valArr = [];
    var k = '';
    var i = 0;
    var sorter = false;
    var that = this;
    var strictForIn = false;
    var populateArr = [];
    switch (sort_flags) {
    case 'SORT_STRING':
        const v8953 = function (a, b) {
            const v8952 = that.strnatcmp(b, a);
            return v8952;
        };
        sorter = v8953;
        break;
    case 'SORT_LOCALE_STRING':
        var loc = this.i18n_loc_get_default();
        const v8954 = this.php_js;
        const v8955 = v8954.i18nLocales;
        const v8956 = v8955[loc];
        sorter = v8956.sorting;
        break;
    case 'SORT_NUMERIC':
        const v8958 = function (a, b) {
            const v8957 = b - a;
            return v8957;
        };
        sorter = v8958;
        break;
    case 'SORT_REGULAR':
    default:
        const v8977 = function (b, a) {
            var aFloat = parseFloat(a);
            var bFloat = parseFloat(b);
            const v8959 = aFloat + '';
            var aNumeric = v8959 === a;
            const v8960 = bFloat + '';
            var bNumeric = v8960 === b;
            const v8961 = aNumeric && bNumeric;
            if (v8961) {
                const v8962 = aFloat > bFloat;
                const v8963 = aFloat < bFloat;
                const v8964 = -1;
                let v8965;
                if (v8963) {
                    v8965 = v8964;
                } else {
                    v8965 = 0;
                }
                let v8966;
                if (v8962) {
                    v8966 = 1;
                } else {
                    v8966 = v8965;
                }
                return v8966;
            } else {
                const v8967 = !bNumeric;
                const v8968 = aNumeric && v8967;
                if (v8968) {
                    return 1;
                } else {
                    const v8969 = !aNumeric;
                    const v8970 = v8969 && bNumeric;
                    if (v8970) {
                        const v8971 = -1;
                        return v8971;
                    }
                }
            }
            const v8972 = a > b;
            const v8973 = a < b;
            const v8974 = -1;
            let v8975;
            if (v8973) {
                v8975 = v8974;
            } else {
                v8975 = 0;
            }
            let v8976;
            if (v8972) {
                v8976 = 1;
            } else {
                v8976 = v8975;
            }
            return v8976;
        };
        sorter = v8977;
        break;
    }
    try {
        const v8978 = this.php_js;
        const v8979 = {};
        this.php_js = v8978 || v8979;
    } catch (e) {
        const v8980 = {};
        this.php_js = v8980;
    }
    const v8981 = this.php_js;
    const v8982 = this.php_js;
    const v8983 = v8982.ini;
    const v8984 = {};
    v8981.ini = v8983 || v8984;
    const v8985 = this.php_js;
    const v8986 = v8985.ini;
    const v8987 = v8986['phpjs.strictForIn'];
    const v8988 = this.php_js;
    const v8989 = v8988.ini;
    const v8990 = v8989['phpjs.strictForIn'];
    const v8991 = v8990.local_value;
    const v8992 = v8987 && v8991;
    const v8993 = this.php_js;
    const v8994 = v8993.ini;
    const v8995 = v8994['phpjs.strictForIn'];
    const v8996 = v8995.local_value;
    const v8997 = v8996 !== 'off';
    strictForIn = v8992 && v8997;
    if (strictForIn) {
        populateArr = inputArr;
    } else {
        populateArr = populateArr;
    }
    for (k in inputArr) {
        const v8998 = inputArr.hasOwnProperty(k);
        if (v8998) {
            const v8999 = inputArr[k];
            const v9000 = valArr.push(v8999);
            v9000;
            if (strictForIn) {
                const v9001 = inputArr[k];
                const v9002 = delete v9001;
                v9002;
            }
        }
    }
    const v9003 = valArr.sort(sorter);
    v9003;
    (i = 0)
    const v9004 = valArr.length;
    let v9005 = i < v9004;
    while (v9005) {
        const v9007 = valArr[i];
        populateArr[i] = v9007;
        const v9006 = i++;
        v9005 = i < v9004;
    }
    const v9008 = strictForIn || populateArr;
    return v9008;
};
exports.rsort = v9009;
const v9067 = function (inputArr, sort_flags) {
    var valArr = [];
    var keyArr = [];
    var k = '';
    var i = 0;
    var sorter = false;
    var that = this;
    var strictForIn = false;
    var populateArr = [];
    switch (sort_flags) {
    case 'SORT_STRING':
        const v9011 = function (a, b) {
            const v9010 = that.strnatcmp(a, b);
            return v9010;
        };
        sorter = v9011;
        break;
    case 'SORT_LOCALE_STRING':
        var loc = this.i18n_loc_get_default();
        const v9012 = this.php_js;
        const v9013 = v9012.i18nLocales;
        const v9014 = v9013[loc];
        sorter = v9014.sorting;
        break;
    case 'SORT_NUMERIC':
        const v9016 = function (a, b) {
            const v9015 = a - b;
            return v9015;
        };
        sorter = v9016;
        break;
    case 'SORT_REGULAR':
    default:
        const v9035 = function (a, b) {
            var aFloat = parseFloat(a);
            var bFloat = parseFloat(b);
            const v9017 = aFloat + '';
            var aNumeric = v9017 === a;
            const v9018 = bFloat + '';
            var bNumeric = v9018 === b;
            const v9019 = aNumeric && bNumeric;
            if (v9019) {
                const v9020 = aFloat > bFloat;
                const v9021 = aFloat < bFloat;
                const v9022 = -1;
                let v9023;
                if (v9021) {
                    v9023 = v9022;
                } else {
                    v9023 = 0;
                }
                let v9024;
                if (v9020) {
                    v9024 = 1;
                } else {
                    v9024 = v9023;
                }
                return v9024;
            } else {
                const v9025 = !bNumeric;
                const v9026 = aNumeric && v9025;
                if (v9026) {
                    return 1;
                } else {
                    const v9027 = !aNumeric;
                    const v9028 = v9027 && bNumeric;
                    if (v9028) {
                        const v9029 = -1;
                        return v9029;
                    }
                }
            }
            const v9030 = a > b;
            const v9031 = a < b;
            const v9032 = -1;
            let v9033;
            if (v9031) {
                v9033 = v9032;
            } else {
                v9033 = 0;
            }
            let v9034;
            if (v9030) {
                v9034 = 1;
            } else {
                v9034 = v9033;
            }
            return v9034;
        };
        sorter = v9035;
        break;
    }
    try {
        const v9036 = this.php_js;
        const v9037 = {};
        this.php_js = v9036 || v9037;
    } catch (e) {
        const v9038 = {};
        this.php_js = v9038;
    }
    const v9039 = this.php_js;
    const v9040 = this.php_js;
    const v9041 = v9040.ini;
    const v9042 = {};
    v9039.ini = v9041 || v9042;
    const v9043 = this.php_js;
    const v9044 = v9043.ini;
    const v9045 = v9044['phpjs.strictForIn'];
    const v9046 = this.php_js;
    const v9047 = v9046.ini;
    const v9048 = v9047['phpjs.strictForIn'];
    const v9049 = v9048.local_value;
    const v9050 = v9045 && v9049;
    const v9051 = this.php_js;
    const v9052 = v9051.ini;
    const v9053 = v9052['phpjs.strictForIn'];
    const v9054 = v9053.local_value;
    const v9055 = v9054 !== 'off';
    strictForIn = v9050 && v9055;
    if (strictForIn) {
        populateArr = inputArr;
    } else {
        populateArr = populateArr;
    }
    for (k in inputArr) {
        const v9056 = inputArr.hasOwnProperty(k);
        if (v9056) {
            const v9057 = inputArr[k];
            const v9058 = valArr.push(v9057);
            v9058;
            if (strictForIn) {
                const v9059 = inputArr[k];
                const v9060 = delete v9059;
                v9060;
            }
        }
    }
    const v9061 = valArr.sort(sorter);
    v9061;
    (i = 0)
    const v9062 = valArr.length;
    let v9063 = i < v9062;
    while (v9063) {
        const v9065 = valArr[i];
        populateArr[i] = v9065;
        const v9064 = i++;
        v9063 = i < v9062;
    }
    const v9066 = strictForIn || populateArr;
    return v9066;
};
exports.sort = v9067;
const v9082 = function (text) {
    const v9068 = typeof text;
    const v9069 = v9068 !== 'string';
    if (v9069) {
        return false;
    }
    const v9070 = this.setlocale('LC_ALL', 0);
    v9070;
    const v9071 = this.php_js;
    const v9072 = v9071.locales;
    const v9073 = this.php_js;
    const v9074 = v9073.localeCategories;
    const v9075 = v9074.LC_CTYPE;
    const v9076 = v9072[v9075];
    const v9077 = v9076.LC_CTYPE;
    const v9078 = v9077.an;
    const v9079 = text.search(v9078);
    const v9080 = -1;
    const v9081 = v9079 !== v9080;
    return v9081;
};
exports.ctype_alnum = v9082;
const v9097 = function (text) {
    const v9083 = typeof text;
    const v9084 = v9083 !== 'string';
    if (v9084) {
        return false;
    }
    const v9085 = this.setlocale('LC_ALL', 0);
    v9085;
    const v9086 = this.php_js;
    const v9087 = v9086.locales;
    const v9088 = this.php_js;
    const v9089 = v9088.localeCategories;
    const v9090 = v9089.LC_CTYPE;
    const v9091 = v9087[v9090];
    const v9092 = v9091.LC_CTYPE;
    const v9093 = v9092.al;
    const v9094 = text.search(v9093);
    const v9095 = -1;
    const v9096 = v9094 !== v9095;
    return v9096;
};
exports.ctype_alpha = v9097;
const v9112 = function (text) {
    const v9098 = typeof text;
    const v9099 = v9098 !== 'string';
    if (v9099) {
        return false;
    }
    const v9100 = this.setlocale('LC_ALL', 0);
    v9100;
    const v9101 = this.php_js;
    const v9102 = v9101.locales;
    const v9103 = this.php_js;
    const v9104 = v9103.localeCategories;
    const v9105 = v9104.LC_CTYPE;
    const v9106 = v9102[v9105];
    const v9107 = v9106.LC_CTYPE;
    const v9108 = v9107.ct;
    const v9109 = text.search(v9108);
    const v9110 = -1;
    const v9111 = v9109 !== v9110;
    return v9111;
};
exports.ctype_cntrl = v9112;
const v9127 = function (text) {
    const v9113 = typeof text;
    const v9114 = v9113 !== 'string';
    if (v9114) {
        return false;
    }
    const v9115 = this.setlocale('LC_ALL', 0);
    v9115;
    const v9116 = this.php_js;
    const v9117 = v9116.locales;
    const v9118 = this.php_js;
    const v9119 = v9118.localeCategories;
    const v9120 = v9119.LC_CTYPE;
    const v9121 = v9117[v9120];
    const v9122 = v9121.LC_CTYPE;
    const v9123 = v9122.dg;
    const v9124 = text.search(v9123);
    const v9125 = -1;
    const v9126 = v9124 !== v9125;
    return v9126;
};
exports.ctype_digit = v9127;
const v9142 = function (text) {
    const v9128 = typeof text;
    const v9129 = v9128 !== 'string';
    if (v9129) {
        return false;
    }
    const v9130 = this.setlocale('LC_ALL', 0);
    v9130;
    const v9131 = this.php_js;
    const v9132 = v9131.locales;
    const v9133 = this.php_js;
    const v9134 = v9133.localeCategories;
    const v9135 = v9134.LC_CTYPE;
    const v9136 = v9132[v9135];
    const v9137 = v9136.LC_CTYPE;
    const v9138 = v9137.gr;
    const v9139 = text.search(v9138);
    const v9140 = -1;
    const v9141 = v9139 !== v9140;
    return v9141;
};
exports.ctype_graph = v9142;
const v9157 = function (text) {
    const v9143 = typeof text;
    const v9144 = v9143 !== 'string';
    if (v9144) {
        return false;
    }
    const v9145 = this.setlocale('LC_ALL', 0);
    v9145;
    const v9146 = this.php_js;
    const v9147 = v9146.locales;
    const v9148 = this.php_js;
    const v9149 = v9148.localeCategories;
    const v9150 = v9149.LC_CTYPE;
    const v9151 = v9147[v9150];
    const v9152 = v9151.LC_CTYPE;
    const v9153 = v9152.lw;
    const v9154 = text.search(v9153);
    const v9155 = -1;
    const v9156 = v9154 !== v9155;
    return v9156;
};
exports.ctype_lower = v9157;
const v9172 = function (text) {
    const v9158 = typeof text;
    const v9159 = v9158 !== 'string';
    if (v9159) {
        return false;
    }
    const v9160 = this.setlocale('LC_ALL', 0);
    v9160;
    const v9161 = this.php_js;
    const v9162 = v9161.locales;
    const v9163 = this.php_js;
    const v9164 = v9163.localeCategories;
    const v9165 = v9164.LC_CTYPE;
    const v9166 = v9162[v9165];
    const v9167 = v9166.LC_CTYPE;
    const v9168 = v9167.pr;
    const v9169 = text.search(v9168);
    const v9170 = -1;
    const v9171 = v9169 !== v9170;
    return v9171;
};
exports.ctype_print = v9172;
const v9187 = function (text) {
    const v9173 = typeof text;
    const v9174 = v9173 !== 'string';
    if (v9174) {
        return false;
    }
    const v9175 = this.setlocale('LC_ALL', 0);
    v9175;
    const v9176 = this.php_js;
    const v9177 = v9176.locales;
    const v9178 = this.php_js;
    const v9179 = v9178.localeCategories;
    const v9180 = v9179.LC_CTYPE;
    const v9181 = v9177[v9180];
    const v9182 = v9181.LC_CTYPE;
    const v9183 = v9182.pu;
    const v9184 = text.search(v9183);
    const v9185 = -1;
    const v9186 = v9184 !== v9185;
    return v9186;
};
exports.ctype_punct = v9187;
const v9202 = function (text) {
    const v9188 = typeof text;
    const v9189 = v9188 !== 'string';
    if (v9189) {
        return false;
    }
    const v9190 = this.setlocale('LC_ALL', 0);
    v9190;
    const v9191 = this.php_js;
    const v9192 = v9191.locales;
    const v9193 = this.php_js;
    const v9194 = v9193.localeCategories;
    const v9195 = v9194.LC_CTYPE;
    const v9196 = v9192[v9195];
    const v9197 = v9196.LC_CTYPE;
    const v9198 = v9197.sp;
    const v9199 = text.search(v9198);
    const v9200 = -1;
    const v9201 = v9199 !== v9200;
    return v9201;
};
exports.ctype_space = v9202;
const v9217 = function (text) {
    const v9203 = typeof text;
    const v9204 = v9203 !== 'string';
    if (v9204) {
        return false;
    }
    const v9205 = this.setlocale('LC_ALL', 0);
    v9205;
    const v9206 = this.php_js;
    const v9207 = v9206.locales;
    const v9208 = this.php_js;
    const v9209 = v9208.localeCategories;
    const v9210 = v9209.LC_CTYPE;
    const v9211 = v9207[v9210];
    const v9212 = v9211.LC_CTYPE;
    const v9213 = v9212.up;
    const v9214 = text.search(v9213);
    const v9215 = -1;
    const v9216 = v9214 !== v9215;
    return v9216;
};
exports.ctype_upper = v9217;
const v9232 = function (text) {
    const v9218 = typeof text;
    const v9219 = v9218 !== 'string';
    if (v9219) {
        return false;
    }
    const v9220 = this.setlocale('LC_ALL', 0);
    v9220;
    const v9221 = this.php_js;
    const v9222 = v9221.locales;
    const v9223 = this.php_js;
    const v9224 = v9223.localeCategories;
    const v9225 = v9224.LC_CTYPE;
    const v9226 = v9222[v9225];
    const v9227 = v9226.LC_CTYPE;
    const v9228 = v9227.xd;
    const v9229 = text.search(v9228);
    const v9230 = -1;
    const v9231 = v9229 !== v9230;
    return v9231;
};
exports.ctype_xdigit = v9232;
const v9415 = function (fmt, timestamp) {
    const v9233 = this.php_js;
    const v9234 = {};
    this.php_js = v9233 || v9234;
    const v9235 = this.setlocale('LC_ALL', 0);
    v9235;
    var phpjs = this.php_js;
    var _xPad = function (x, pad, r) {
        const v9236 = typeof r;
        const v9237 = v9236 === 'undefined';
        if (v9237) {
            r = 10;
        }
        const v9238 = parseInt(x, 10);
        const v9239 = v9238 < r;
        const v9240 = r > 1;
        let v9241 = v9239 && v9240;
        while (v9241) {
            const v9242 = pad.toString();
            x = v9242 + x;
            v9241 = v9239 && v9240;
        }
        const v9243 = x.toString();
        return v9243;
    };
    const v9244 = phpjs.localeCategories;
    var locale = v9244.LC_TIME;
    var locales = phpjs.locales;
    const v9245 = locales[locale];
    var lc_time = v9245.LC_TIME;
    const v9249 = function (d) {
        const v9246 = lc_time.a;
        const v9247 = d.getDay();
        const v9248 = v9246[v9247];
        return v9248;
    };
    const v9253 = function (d) {
        const v9250 = lc_time.A;
        const v9251 = d.getDay();
        const v9252 = v9250[v9251];
        return v9252;
    };
    const v9257 = function (d) {
        const v9254 = lc_time.b;
        const v9255 = d.getMonth();
        const v9256 = v9254[v9255];
        return v9256;
    };
    const v9261 = function (d) {
        const v9258 = lc_time.B;
        const v9259 = d.getMonth();
        const v9260 = v9258[v9259];
        return v9260;
    };
    const v9266 = function (d) {
        const v9262 = d.getFullYear();
        const v9263 = v9262 / 100;
        const v9264 = parseInt(v9263, 10);
        const v9265 = _xPad(v9264, 0);
        return v9265;
    };
    const v9267 = [
        'getDate',
        '0'
    ];
    const v9268 = [
        'getDate',
        ' '
    ];
    const v9273 = function (d) {
        const v9269 = this.G(d);
        const v9270 = v9269 / 100;
        const v9271 = parseInt(v9270, 10);
        const v9272 = _xPad(v9271, 0);
        return v9272;
    };
    const v9282 = function (d) {
        var y = d.getFullYear();
        const v9274 = _formats.V(d);
        var V = parseInt(v9274, 10);
        const v9275 = _formats.W(d);
        var W = parseInt(v9275, 10);
        const v9276 = W > V;
        if (v9276) {
            const v9277 = y++;
            v9277;
        } else {
            const v9278 = W === 0;
            const v9279 = V >= 52;
            const v9280 = v9278 && v9279;
            if (v9280) {
                const v9281 = y--;
                v9281;
            }
        }
        return y;
    };
    const v9283 = [
        'getHours',
        '0'
    ];
    const v9288 = function (d) {
        const v9284 = d.getHours();
        var I = v9284 % 12;
        const v9285 = I === 0;
        let v9286;
        if (v9285) {
            v9286 = 12;
        } else {
            v9286 = I;
        }
        const v9287 = _xPad(v9286, 0);
        return v9287;
    };
    const v9299 = function (d) {
        const v9289 = d.getFullYear();
        const v9290 = '' + v9289;
        const v9291 = v9290 + '/1/1 GMT';
        const v9292 = new Date(v9291);
        var ms = d - v9292;
        const v9293 = d.getTimezoneOffset();
        ms += v9293 * 60000;
        const v9294 = ms / 60000;
        const v9295 = v9294 / 60;
        const v9296 = v9295 / 24;
        const v9297 = parseInt(v9296, 10);
        var doy = v9297 + 1;
        const v9298 = _xPad(doy, 0, 100);
        return v9298;
    };
    const v9300 = [
        'getHours',
        '0'
    ];
    const v9305 = function (d) {
        const v9301 = d.getHours();
        var l = v9301 % 12;
        const v9302 = l === 0;
        let v9303;
        if (v9302) {
            v9303 = 12;
        } else {
            v9303 = l;
        }
        const v9304 = _xPad(v9303, ' ');
        return v9304;
    };
    const v9309 = function (d) {
        const v9306 = d.getMonth();
        const v9307 = v9306 + 1;
        const v9308 = _xPad(v9307, 0);
        return v9308;
    };
    const v9310 = [
        'getMinutes',
        '0'
    ];
    const v9316 = function (d) {
        const v9311 = lc_time.p;
        const v9312 = d.getHours();
        const v9313 = v9312 >= 12;
        let v9314;
        if (v9313) {
            v9314 = 1;
        } else {
            v9314 = 0;
        }
        const v9315 = v9311[v9314];
        return v9315;
    };
    const v9322 = function (d) {
        const v9317 = lc_time.P;
        const v9318 = d.getHours();
        const v9319 = v9318 >= 12;
        let v9320;
        if (v9319) {
            v9320 = 1;
        } else {
            v9320 = 0;
        }
        const v9321 = v9317[v9320];
        return v9321;
    };
    const v9325 = function (d) {
        const v9323 = Date.parse(d);
        const v9324 = v9323 / 1000;
        return v9324;
    };
    const v9326 = [
        'getSeconds',
        '0'
    ];
    const v9329 = function (d) {
        var dow = d.getDay();
        const v9327 = dow === 0;
        let v9328;
        if (v9327) {
            v9328 = 7;
        } else {
            v9328 = dow;
        }
        return v9328;
    };
    const v9335 = function (d) {
        const v9330 = _formats.j(d);
        var doy = parseInt(v9330, 10);
        const v9331 = d.getDay();
        var rdow = 6 - v9331;
        const v9332 = doy + rdow;
        const v9333 = v9332 / 7;
        var woy = parseInt(v9333, 10);
        const v9334 = _xPad(woy, 0);
        return v9334;
    };
    const v9360 = function (d) {
        const v9336 = _formats.W(d);
        var woy = parseInt(v9336, 10);
        const v9337 = d.getFullYear();
        const v9338 = '' + v9337;
        const v9339 = v9338 + '/1/1';
        const v9340 = new Date(v9339);
        var dow1_1 = v9340.getDay();
        const v9341 = dow1_1 > 4;
        const v9342 = dow1_1 <= 1;
        const v9343 = v9341 || v9342;
        let v9344;
        if (v9343) {
            v9344 = 0;
        } else {
            v9344 = 1;
        }
        var idow = woy + v9344;
        const v9345 = idow === 53;
        const v9346 = d.getFullYear();
        const v9347 = '' + v9346;
        const v9348 = v9347 + '/12/31';
        const v9349 = new Date(v9348);
        const v9350 = v9349.getDay();
        const v9351 = v9350 < 4;
        const v9352 = v9345 && v9351;
        if (v9352) {
            idow = 1;
        } else {
            const v9353 = idow === 0;
            if (v9353) {
                const v9354 = d.getFullYear();
                const v9355 = v9354 - 1;
                const v9356 = '' + v9355;
                const v9357 = v9356 + '/12/31';
                const v9358 = new Date(v9357);
                idow = _formats.V(v9358);
            }
        }
        const v9359 = _xPad(idow, 0);
        return v9359;
    };
    const v9366 = function (d) {
        const v9361 = _formats.j(d);
        var doy = parseInt(v9361, 10);
        const v9362 = _formats.u(d);
        var rdow = 7 - v9362;
        const v9363 = doy + rdow;
        const v9364 = v9363 / 7;
        var woy = parseInt(v9364, 10);
        const v9365 = _xPad(woy, 0, 10);
        return v9365;
    };
    const v9370 = function (d) {
        const v9367 = d.getFullYear();
        const v9368 = v9367 % 100;
        const v9369 = _xPad(v9368, 0);
        return v9369;
    };
    const v9379 = function (d) {
        var o = d.getTimezoneOffset();
        const v9371 = o / 60;
        const v9372 = Math.abs(v9371);
        const v9373 = parseInt(v9372, 10);
        var H = _xPad(v9373, 0);
        const v9374 = o % 60;
        var M = _xPad(v9374, 0);
        const v9375 = o > 0;
        let v9376;
        if (v9375) {
            v9376 = '-';
        } else {
            v9376 = '+';
        }
        const v9377 = v9376 + H;
        const v9378 = v9377 + M;
        return v9378;
    };
    const v9382 = function (d) {
        const v9380 = d.toString();
        const v9381 = v9380.replace(/^.*\(([^)]+)\)$/, '$1');
        return v9381;
    };
    const v9383 = function (d) {
        return '%';
    };
    var _formats = {};
    _formats.a = v9249;
    _formats.A = v9253;
    _formats.b = v9257;
    _formats.B = v9261;
    _formats.C = v9266;
    _formats.d = v9267;
    _formats.e = v9268;
    _formats.g = v9273;
    _formats.G = v9282;
    _formats.H = v9283;
    _formats.I = v9288;
    _formats.j = v9299;
    _formats.k = v9300;
    _formats.l = v9305;
    _formats.m = v9309;
    _formats.M = v9310;
    _formats.p = v9316;
    _formats.P = v9322;
    _formats.s = v9325;
    _formats.S = v9326;
    _formats.u = v9329;
    _formats.U = v9335;
    _formats.V = v9360;
    _formats.w = 'getDay';
    _formats.W = v9366;
    _formats.y = v9370;
    _formats.Y = 'getFullYear';
    _formats.z = v9379;
    _formats.Z = v9382;
    _formats['%'] = v9383;
    let _date;
    const v9384 = typeof timestamp;
    const v9385 = v9384 === 'undefined';
    const v9386 = new Date();
    const v9387 = typeof timestamp;
    const v9388 = v9387 === 'object';
    const v9389 = new Date(timestamp);
    const v9390 = timestamp * 1000;
    const v9391 = new Date(v9390);
    let v9392;
    if (v9388) {
        v9392 = v9389;
    } else {
        v9392 = v9391;
    }
    if (v9385) {
        _date = v9386;
    } else {
        _date = v9392;
    }
    var _aggregates = {};
    _aggregates.c = 'locale';
    _aggregates.D = '%m/%d/%y';
    _aggregates.F = '%y-%m-%d';
    _aggregates.h = '%b';
    _aggregates.n = '\n';
    _aggregates.r = 'locale';
    _aggregates.R = '%H:%M';
    _aggregates.t = '\t';
    _aggregates.T = '%H:%M:%S';
    _aggregates.x = 'locale';
    _aggregates.X = 'locale';
    let v9393 = fmt.match(/%[cDFhnrRtTxX]/);
    while (v9393) {
        const v9397 = function (m0, m1) {
            var f = _aggregates[m1];
            const v9394 = f === 'locale';
            const v9395 = lc_time[m1];
            let v9396;
            if (v9394) {
                v9396 = v9395;
            } else {
                v9396 = f;
            }
            return v9396;
        };
        fmt = fmt.replace(/%([cDFhnrRtTxX])/g, v9397);
        v9393 = fmt.match(/%[cDFhnrRtTxX]/);
    }
    const v9414 = function (m0, m1) {
        var f = _formats[m1];
        const v9398 = typeof f;
        const v9399 = v9398 === 'string';
        if (v9399) {
            const v9400 = _date[f]();
            return v9400;
        } else {
            const v9401 = typeof f;
            const v9402 = v9401 === 'function';
            if (v9402) {
                const v9403 = f(_date);
                return v9403;
            } else {
                const v9404 = typeof f;
                const v9405 = v9404 === 'object';
                const v9406 = f[0];
                const v9407 = typeof v9406;
                const v9408 = v9407 === 'string';
                const v9409 = v9405 && v9408;
                if (v9409) {
                    const v9410 = f[0];
                    const v9411 = _date[v9410]();
                    const v9412 = f[1];
                    const v9413 = _xPad(v9411, v9412);
                    return v9413;
                } else {
                    return m1;
                }
            }
        }
    };
    var str = fmt.replace(/%([aAbBCdegGHIjklmMpPsSuUVwWyYzZ%])/g, v9414);
    return str;
};
exports.strftime = v9415;
const v9564 = function (dateStr, format) {
    var retObj = {};
    retObj.tm_sec = 0;
    retObj.tm_min = 0;
    retObj.tm_hour = 0;
    retObj.tm_mday = 0;
    retObj.tm_mon = 0;
    retObj.tm_year = 0;
    retObj.tm_wday = 0;
    retObj.tm_yday = 0;
    retObj.unparsed = '';
    var i = 0;
    var that = this;
    var amPmOffset = 0;
    var prevHour = false;
    var _reset = function (dateObj, realMday) {
        var jan1;
        var o = retObj;
        var d = dateObj;
        const v9416 = d.getUTCSeconds();
        o.tm_sec = v9416;
        const v9417 = d.getUTCMinutes();
        o.tm_min = v9417;
        const v9418 = d.getUTCHours();
        o.tm_hour = v9418;
        const v9419 = realMday === 0;
        const v9420 = d.getUTCDate();
        let v9421;
        if (v9419) {
            v9421 = realMday;
        } else {
            v9421 = v9420;
        }
        o.tm_mday = v9421;
        const v9422 = d.getUTCMonth();
        o.tm_mon = v9422;
        const v9423 = d.getUTCFullYear();
        o.tm_year = v9423 - 1900;
        const v9424 = realMday === 0;
        const v9425 = d.getUTCDay();
        const v9426 = v9425 > 0;
        const v9427 = d.getUTCDay();
        const v9428 = v9427 - 1;
        let v9429;
        if (v9426) {
            v9429 = v9428;
        } else {
            v9429 = 6;
        }
        const v9430 = d.getUTCDay();
        let v9431;
        if (v9424) {
            v9431 = v9429;
        } else {
            v9431 = v9430;
        }
        o.tm_wday = v9431;
        const v9432 = d.getUTCFullYear();
        const v9433 = Date.UTC(v9432, 0, 1);
        jan1 = new Date(v9433);
        const v9434 = d - jan1;
        const v9435 = 1000 * 60;
        const v9436 = v9435 * 60;
        const v9437 = v9436 * 24;
        const v9438 = v9434 / v9437;
        const v9439 = Math.ceil(v9438);
        o.tm_yday = v9439;
    };
    var _date = function () {
        var o = retObj;
        const v9440 = o.tm_year;
        const v9441 = v9440 + 1900;
        const v9442 = o.tm_mon;
        const v9443 = o.tm_mday;
        const v9444 = v9443 || 1;
        const v9445 = o.tm_hour;
        const v9446 = o.tm_min;
        const v9447 = o.tm_sec;
        const v9448 = Date.UTC(v9441, v9442, v9444, v9445, v9446, v9447);
        const v9449 = new Date(v9448);
        const v9450 = o.tm_mday;
        const v9451 = _reset(v9449, v9450);
        return v9451;
    };
    var _NWS = /\S/;
    var _WS = /\s/;
    var _aggregates = {};
    _aggregates.c = 'locale';
    _aggregates.D = '%m/%d/%y';
    _aggregates.F = '%y-%m-%d';
    _aggregates.r = 'locale';
    _aggregates.R = '%H:%M';
    _aggregates.T = '%H:%M:%S';
    _aggregates.x = 'locale';
    _aggregates.X = 'locale';
    var _preg_quote = function (str) {
        const v9452 = str + '';
        const v9453 = v9452.replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!<>\|\:])/g, '\\$1');
        return v9453;
    };
    const v9454 = this.php_js;
    const v9455 = {};
    this.php_js = v9454 || v9455;
    const v9456 = this.setlocale('LC_ALL', 0);
    v9456;
    var phpjs = this.php_js;
    const v9457 = phpjs.localeCategories;
    var locale = v9457.LC_TIME;
    var locales = phpjs.locales;
    const v9458 = locales[locale];
    var lc_time = v9458.LC_TIME;
    let v9459 = format.match(/%[cDFhnrRtTxX]/);
    while (v9459) {
        const v9463 = function (m0, m1) {
            var f = _aggregates[m1];
            const v9460 = f === 'locale';
            const v9461 = lc_time[m1];
            let v9462;
            if (v9460) {
                v9462 = v9461;
            } else {
                v9462 = f;
            }
            return v9462;
        };
        format = format.replace(/%([cDFhnrRtTxX])/g, v9463);
        v9459 = format.match(/%[cDFhnrRtTxX]/);
    }
    var _addNext = function (j, regex, cb) {
        const v9464 = typeof regex;
        const v9465 = v9464 === 'string';
        if (v9465) {
            const v9466 = '^' + regex;
            regex = new RegExp(v9466, 'i');
        }
        var check = dateStr.slice(j);
        var match = regex.exec(check);
        let testNull;
        const v9467 = cb.apply(null, match);
        if (match) {
            testNull = v9467;
        } else {
            testNull = null;
        }
        const v9468 = testNull === null;
        if (v9468) {
            throw 'No match in string';
        }
        const v9469 = match[0];
        const v9470 = v9469.length;
        const v9471 = j + v9470;
        return v9471;
    };
    var _addLocalized = function (j, formatChar, category) {
        const v9472 = lc_time[formatChar];
        const v9473 = that.array_map(_preg_quote, v9472);
        const v9474 = v9473.join('|');
        const v9481 = function (m) {
            const v9475 = lc_time[formatChar];
            const v9476 = _preg_quote(m);
            const v9477 = '^' + v9476;
            const v9478 = v9477 + '$';
            const v9479 = new RegExp(v9478, 'i');
            var match = v9475.search(v9479);
            if (match) {
                const v9480 = match[0];
                retObj[category] = v9480;
            }
        };
        const v9482 = _addNext(j, v9474, v9481);
        return v9482;
    };
    (i = 0, j = 0)
    const v9483 = format.length;
    let v9484 = i < v9483;
    while (v9484) {
        const v9486 = format.charAt(i);
        const v9487 = v9486 === '%';
        if (v9487) {
            const v9488 = [
                '%',
                'n',
                't'
            ];
            const v9489 = i + 1;
            const v9490 = format.charAt(v9489);
            var literalPos = v9488.indexOf(v9490);
            const v9491 = -1;
            const v9492 = literalPos !== v9491;
            if (v9492) {
                const v9493 = [
                    '%',
                    '\n',
                    '\t'
                ];
                const v9494 = dateStr.charAt(j);
                const v9495 = v9493.indexOf(v9494);
                const v9496 = v9495 === literalPos;
                if (v9496) {
                    const v9497 = ++i;
                    v9497;
                    const v9498 = ++j;
                    v9498;
                    continue;
                }
                return false;
            }
            const v9499 = i + 1;
            var formatChar = format.charAt(v9499);
            try {
                switch (formatChar) {
                case 'a':
                case 'A':
                    j = _addLocalized(j, formatChar, 'tm_wday');
                    break;
                case 'h':
                case 'b':
                    j = _addLocalized(j, 'b', 'tm_mon');
                    const v9500 = _date();
                    v9500;
                    break;
                case 'B':
                    j = _addLocalized(j, formatChar, 'tm_mon');
                    const v9501 = _date();
                    v9501;
                    break;
                case 'C':
                    const v9508 = function (d) {
                        const v9502 = parseInt(d, 10);
                        const v9503 = v9502 - 19;
                        var year = v9503 * 100;
                        retObj.tm_year = year;
                        const v9504 = _date();
                        v9504;
                        const v9505 = retObj.tm_yday;
                        const v9506 = !v9505;
                        if (v9506) {
                            const v9507 = -1;
                            retObj.tm_yday = v9507;
                        }
                    };
                    j = _addNext(j, /^\d?\d/, v9508);
                    break;
                case 'd':
                case 'e':
                    const v9509 = formatChar === 'd';
                    let v9510;
                    if (v9509) {
                        v9510 = /^(0[1-9]|[1-2]\d|3[0-1])/;
                    } else {
                        v9510 = /^([1-2]\d|3[0-1]|[1-9])/;
                    }
                    const v9512 = function (d) {
                        var dayMonth = parseInt(d, 10);
                        retObj.tm_mday = dayMonth;
                        const v9511 = _date();
                        v9511;
                    };
                    j = _addNext(j, v9510, v9512);
                    break;
                case 'g':
                    break;
                case 'G':
                    break;
                case 'H':
                    const v9513 = function (d) {
                        var hour = parseInt(d, 10);
                        retObj.tm_hour = hour;
                    };
                    j = _addNext(j, /^([0-1]\d|2[0-3])/, v9513);
                    break;
                case 'l':
                case 'I':
                    const v9514 = formatChar === 'l';
                    let v9515;
                    if (v9514) {
                        v9515 = /^([1-9]|1[0-2])/;
                    } else {
                        v9515 = /^(0[1-9]|1[0-2])/;
                    }
                    const v9518 = function (d) {
                        const v9516 = parseInt(d, 10);
                        const v9517 = v9516 - 1;
                        var hour = v9517 + amPmOffset;
                        retObj.tm_hour = hour;
                        prevHour = true;
                    };
                    j = _addNext(j, v9515, v9518);
                    break;
                case 'j':
                    const v9520 = function (d) {
                        const v9519 = parseInt(d, 10);
                        var dayYear = v9519 - 1;
                        retObj.tm_yday = dayYear;
                    };
                    j = _addNext(j, /^(00[1-9]|0[1-9]\d|[1-2]\d\d|3[0-6][0-6])/, v9520);
                    break;
                case 'm':
                    const v9523 = function (d) {
                        const v9521 = parseInt(d, 10);
                        var month = v9521 - 1;
                        retObj.tm_mon = month;
                        const v9522 = _date();
                        v9522;
                    };
                    j = _addNext(j, /^(0[1-9]|1[0-2])/, v9523);
                    break;
                case 'M':
                    const v9524 = function (d) {
                        var minute = parseInt(d, 10);
                        retObj.tm_min = minute;
                    };
                    j = _addNext(j, /^[0-5]\d/, v9524);
                    break;
                case 'P':
                    return false;
                case 'p':
                    const v9526 = function (d) {
                        const v9525 = /a/.test(d);
                        if (v9525) {
                            amPmOffset = 0;
                        } else {
                            amPmOffset = 12;
                        }
                        if (prevHour) {
                            retObj.tm_hour += amPmOffset;
                        }
                    };
                    j = _addNext(j, /^(am|pm)/i, v9526);
                    break;
                case 's':
                    const v9530 = function (d) {
                        var timestamp = parseInt(d, 10);
                        const v9527 = timestamp * 1000;
                        const v9528 = Date.UTC(v9527);
                        var date = new Date(v9528);
                        const v9529 = _reset(date);
                        v9529;
                    };
                    j = _addNext(j, /^\d+/, v9530);
                    break;
                case 'S':
                    const v9531 = function (d) {
                        var second = parseInt(d, 10);
                        retObj.tm_sec = second;
                    };
                    j = _addNext(j, /^[0-5]\d/, v9531);
                    break;
                case 'u':
                case 'w':
                    const v9533 = function (d) {
                        const v9532 = formatChar === 'u';
                        retObj.tm_wday = d - v9532;
                    };
                    j = _addNext(j, /^\d/, v9533);
                    break;
                case 'U':
                case 'V':
                case 'W':
                    break;
                case 'y':
                    const v9540 = function (d) {
                        d = parseInt(d, 10);
                        let year;
                        const v9534 = d >= 69;
                        const v9535 = d + 100;
                        if (v9534) {
                            year = d;
                        } else {
                            year = v9535;
                        }
                        retObj.tm_year = year;
                        const v9536 = _date();
                        v9536;
                        const v9537 = retObj.tm_yday;
                        const v9538 = !v9537;
                        if (v9538) {
                            const v9539 = -1;
                            retObj.tm_yday = v9539;
                        }
                    };
                    j = _addNext(j, /^\d?\d/, v9540);
                    break;
                case 'Y':
                    const v9546 = function (d) {
                        const v9541 = parseInt(d, 10);
                        var year = v9541 - 1900;
                        retObj.tm_year = year;
                        const v9542 = _date();
                        v9542;
                        const v9543 = retObj.tm_yday;
                        const v9544 = !v9543;
                        if (v9544) {
                            const v9545 = -1;
                            retObj.tm_yday = v9545;
                        }
                    };
                    j = _addNext(j, /^\d{1,4}/, v9546);
                    break;
                case 'z':
                    break;
                case 'Z':
                    break;
                default:
                    throw 'Unrecognized formatting character in strptime()';
                }
            } catch (e) {
                const v9547 = e === 'No match in string';
                if (v9547) {
                    return false;
                }
            }
            const v9548 = ++i;
            v9548;
        } else {
            const v9549 = format.charAt(i);
            const v9550 = dateStr.charAt(j);
            const v9551 = v9549 !== v9550;
            if (v9551) {
                const v9552 = dateStr.charAt(j);
                const v9553 = v9552.search(_WS);
                const v9554 = -1;
                const v9555 = v9553 !== v9554;
                if (v9555) {
                    const v9556 = j++;
                    v9556;
                    const v9557 = i--;
                    v9557;
                } else {
                    const v9558 = format.charAt(i);
                    const v9559 = v9558.search(_NWS);
                    const v9560 = -1;
                    const v9561 = v9559 !== v9560;
                    if (v9561) {
                        return false;
                    }
                }
            } else {
                const v9562 = j++;
                v9562;
            }
        }
        const v9485 = i++;
        v9484 = i < v9483;
    }
    const v9563 = dateStr.slice(j);
    retObj.unparsed = v9563;
    return retObj;
};
exports.strptime = v9564;
const v9594 = function (str) {
    const v9565 = this.setlocale('LC_ALL', 0);
    v9565;
    var i = 0;
    var upper = '';
    var lower = '';
    var pos = 0;
    var retStr = '';
    const v9566 = this.php_js;
    const v9567 = v9566.locales;
    const v9568 = this.php_js;
    const v9569 = v9568.localeCategories;
    const v9570 = v9569.LC_CTYPE;
    const v9571 = v9567[v9570];
    const v9572 = v9571.LC_CTYPE;
    upper = v9572.upper;
    const v9573 = this.php_js;
    const v9574 = v9573.locales;
    const v9575 = this.php_js;
    const v9576 = v9575.localeCategories;
    const v9577 = v9576.LC_CTYPE;
    const v9578 = v9574[v9577];
    const v9579 = v9578.LC_CTYPE;
    lower = v9579.lower;
    (i = 0)
    const v9580 = str.length;
    let v9581 = i < v9580;
    while (v9581) {
        const v9583 = str.charAt(i);
        const v9584 = -1;
        const v9585 = (pos = upper.indexOf(v9583)) !== v9584;
        const v9586 = str.charAt(i);
        const v9587 = -1;
        const v9588 = (pos = lower.indexOf(v9586)) !== v9587;
        const v9589 = v9585 || v9588;
        if (v9589) {
            const v9590 = upper.charAt(pos);
            const v9591 = '[' + v9590;
            const v9592 = lower.charAt(pos);
            const v9593 = v9591 + v9592;
            retStr += v9593 + ']';
        } else {
            retStr += str.charAt(i);
        }
        const v9582 = i++;
        v9581 = i < v9580;
    }
    return retStr;
};
exports.sql_regcase = v9594;
const v9626 = function () {
    var arr = {};
    var prop = '';
    const v9595 = this.setlocale('LC_ALL', 0);
    v9595;
    const v9596 = this.php_js;
    const v9597 = v9596.locales;
    const v9598 = this.php_js;
    const v9599 = v9598.localeCategories;
    const v9600 = v9599.LC_NUMERIC;
    const v9601 = v9597[v9600];
    const v9602 = v9601.LC_NUMERIC;
    for (prop in v9602) {
        const v9603 = this.php_js;
        const v9604 = v9603.locales;
        const v9605 = this.php_js;
        const v9606 = v9605.localeCategories;
        const v9607 = v9606.LC_NUMERIC;
        const v9608 = v9604[v9607];
        const v9609 = v9608.LC_NUMERIC;
        const v9610 = v9609[prop];
        arr[prop] = v9610;
    }
    const v9611 = this.php_js;
    const v9612 = v9611.locales;
    const v9613 = this.php_js;
    const v9614 = v9613.localeCategories;
    const v9615 = v9614.LC_MONETARY;
    const v9616 = v9612[v9615];
    const v9617 = v9616.LC_MONETARY;
    for (prop in v9617) {
        const v9618 = this.php_js;
        const v9619 = v9618.locales;
        const v9620 = this.php_js;
        const v9621 = v9620.localeCategories;
        const v9622 = v9621.LC_MONETARY;
        const v9623 = v9619[v9622];
        const v9624 = v9623.LC_MONETARY;
        const v9625 = v9624[prop];
        arr[prop] = v9625;
    }
    return arr;
};
exports.localeconv = v9626;
const v9816 = function (format, number) {
    const v9627 = typeof number;
    const v9628 = v9627 !== 'number';
    if (v9628) {
        return null;
    }
    var regex = /%((=.|[+^(!-])*?)(\d*?)(#(\d+))?(\.(\d+))?([in%])/g;
    const v9629 = this.setlocale('LC_ALL', 0);
    v9629;
    const v9630 = this.php_js;
    const v9631 = v9630.locales;
    const v9632 = this.php_js;
    const v9633 = v9632.localeCategories;
    const v9634 = v9633['LC_MONETARY'];
    const v9635 = v9631[v9634];
    var monetary = v9635['LC_MONETARY'];
    var doReplace = function (n0, flags, n2, width, n4, left, n6, right, conversion) {
        var value = '';
        var repl = '';
        const v9636 = conversion === '%';
        if (v9636) {
            return '%';
        }
        let fill;
        const v9637 = /=./.test(flags);
        const v9638 = flags && v9637;
        const v9639 = flags.match(/=(.)/);
        const v9640 = v9639[1];
        if (v9638) {
            fill = v9640;
        } else {
            fill = ' ';
        }
        const v9641 = !flags;
        const v9642 = flags.indexOf('!');
        const v9643 = -1;
        const v9644 = v9642 === v9643;
        var showCurrSymbol = v9641 || v9644;
        const v9645 = parseInt(width, 10);
        width = v9645 || 0;
        var neg = number < 0;
        number = number + '';
        const v9646 = number.slice(1);
        if (neg) {
            number = v9646;
        } else {
            number = number;
        }
        var decpos = number.indexOf('.');
        let integer;
        const v9647 = -1;
        const v9648 = decpos !== v9647;
        const v9649 = number.slice(0, decpos);
        if (v9648) {
            integer = v9649;
        } else {
            integer = number;
        }
        let fraction;
        const v9650 = -1;
        const v9651 = decpos !== v9650;
        const v9652 = decpos + 1;
        const v9653 = number.slice(v9652);
        if (v9651) {
            fraction = v9653;
        } else {
            fraction = '';
        }
        var _str_splice = function (integerStr, idx, thous_sep) {
            var integerArr = integerStr.split('');
            const v9654 = integerArr.splice(idx, 0, thous_sep);
            v9654;
            const v9655 = integerArr.join('');
            return v9655;
        };
        var init_lgth = integer.length;
        left = parseInt(left, 10);
        var filler = init_lgth < left;
        if (filler) {
            var fillnum = left - init_lgth;
            const v9656 = fillnum + 1;
            const v9657 = new Array(v9656);
            const v9658 = v9657.join(fill);
            integer = v9658 + integer;
        }
        const v9659 = flags.indexOf('^');
        const v9660 = -1;
        const v9661 = v9659 === v9660;
        if (v9661) {
            var thous_sep = monetary.mon_thousands_sep;
            var mon_grouping = monetary.mon_grouping;
            const v9662 = mon_grouping[0];
            const v9663 = integer.length;
            const v9664 = v9662 < v9663;
            if (v9664) {
                var i = 0;
                var idx = integer.length;
                const v9665 = mon_grouping.length;
                let v9666 = i < v9665;
                while (v9666) {
                    idx -= mon_grouping[i];
                    const v9668 = idx <= 0;
                    if (v9668) {
                        break;
                    }
                    const v9669 = idx < fillnum;
                    const v9670 = filler && v9669;
                    if (v9670) {
                        thous_sep = fill;
                    }
                    integer = _str_splice(integer, idx, thous_sep);
                    const v9667 = i++;
                    v9666 = i < v9665;
                }
            }
            const v9671 = i - 1;
            const v9672 = mon_grouping[v9671];
            const v9673 = v9672 > 0;
            if (v9673) {
                const v9674 = i - 1;
                const v9675 = mon_grouping[v9674];
                let v9676 = idx > v9675;
                while (v9676) {
                    const v9677 = i - 1;
                    idx -= mon_grouping[v9677];
                    const v9678 = idx < fillnum;
                    const v9679 = filler && v9678;
                    if (v9679) {
                        thous_sep = fill;
                    }
                    integer = _str_splice(integer, idx, thous_sep);
                    v9676 = idx > v9675;
                }
            }
        }
        const v9680 = right === '0';
        if (v9680) {
            value = integer;
        } else {
            var dec_pt = monetary.mon_decimal_point;
            const v9681 = right === '';
            const v9682 = right === undefined;
            const v9683 = v9681 || v9682;
            if (v9683) {
                const v9684 = conversion === 'i';
                const v9685 = monetary.int_frac_digits;
                const v9686 = monetary.frac_digits;
                if (v9684) {
                    right = v9685;
                } else {
                    right = v9686;
                }
            }
            right = parseInt(right, 10);
            const v9687 = right === 0;
            if (v9687) {
                fraction = '';
                dec_pt = '';
            } else {
                const v9688 = fraction.length;
                const v9689 = right < v9688;
                if (v9689) {
                    const v9690 = fraction.slice(0, right);
                    const v9691 = v9690 + '.';
                    const v9692 = fraction.substr(right, 1);
                    const v9693 = v9691 + v9692;
                    const v9694 = parseFloat(v9693);
                    const v9695 = Math.round(v9694);
                    fraction = v9695 + '';
                    const v9696 = fraction.length;
                    const v9697 = right > v9696;
                    if (v9697) {
                        const v9698 = fraction.length;
                        const v9699 = right - v9698;
                        const v9700 = v9699 + 1;
                        const v9701 = new Array(v9700);
                        const v9702 = v9701.join('0');
                        fraction = v9702 + fraction;
                    }
                } else {
                    const v9703 = fraction.length;
                    const v9704 = right > v9703;
                    if (v9704) {
                        const v9705 = fraction.length;
                        const v9706 = right - v9705;
                        const v9707 = v9706 + 1;
                        const v9708 = new Array(v9707);
                        fraction += v9708.join('0');
                    }
                }
            }
            const v9709 = integer + dec_pt;
            value = v9709 + fraction;
        }
        var symbol = '';
        if (showCurrSymbol) {
            const v9710 = conversion === 'i';
            const v9711 = monetary.int_curr_symbol;
            const v9712 = monetary.currency_symbol;
            if (v9710) {
                symbol = v9711;
            } else {
                symbol = v9712;
            }
        }
        let sign_posn;
        const v9713 = monetary.n_sign_posn;
        const v9714 = monetary.p_sign_posn;
        if (neg) {
            sign_posn = v9713;
        } else {
            sign_posn = v9714;
        }
        let sep_by_space;
        const v9715 = monetary.n_sep_by_space;
        const v9716 = monetary.p_sep_by_space;
        if (neg) {
            sep_by_space = v9715;
        } else {
            sep_by_space = v9716;
        }
        let cs_precedes;
        const v9717 = monetary.n_cs_precedes;
        const v9718 = monetary.p_cs_precedes;
        if (neg) {
            cs_precedes = v9717;
        } else {
            cs_precedes = v9718;
        }
        const v9719 = flags.indexOf('(');
        const v9720 = -1;
        const v9721 = v9719 !== v9720;
        if (v9721) {
            const v9722 = sep_by_space === 1;
            let v9723;
            if (v9722) {
                v9723 = ' ';
            } else {
                v9723 = '';
            }
            const v9724 = symbol + v9723;
            let v9725;
            if (cs_precedes) {
                v9725 = v9724;
            } else {
                v9725 = '';
            }
            const v9726 = v9725 + value;
            const v9727 = !cs_precedes;
            const v9728 = sep_by_space === 1;
            let v9729;
            if (v9728) {
                v9729 = ' ';
            } else {
                v9729 = '';
            }
            const v9730 = v9729 + symbol;
            let v9731;
            if (v9727) {
                v9731 = v9730;
            } else {
                v9731 = '';
            }
            repl = v9726 + v9731;
            if (neg) {
                const v9732 = '(' + repl;
                repl = v9732 + ')';
            } else {
                const v9733 = ' ' + repl;
                repl = v9733 + ' ';
            }
        } else {
            var pos_sign = monetary.positive_sign;
            var neg_sign = monetary.negative_sign;
            let sign;
            if (neg) {
                sign = neg_sign;
            } else {
                sign = pos_sign;
            }
            let otherSign;
            if (neg) {
                otherSign = pos_sign;
            } else {
                otherSign = neg_sign;
            }
            var signPadding = '';
            if (sign_posn) {
                const v9734 = otherSign.length;
                const v9735 = sign.length;
                const v9736 = v9734 - v9735;
                const v9737 = v9736 + 1;
                const v9738 = new Array(v9737);
                signPadding = v9738.join(' ');
            }
            var valueAndCS = '';
            switch (sign_posn) {
            case 0:
                const v9739 = sep_by_space === 1;
                let v9740;
                if (v9739) {
                    v9740 = ' ';
                } else {
                    v9740 = '';
                }
                const v9741 = symbol + v9740;
                const v9742 = v9741 + value;
                const v9743 = sep_by_space === 1;
                let v9744;
                if (v9743) {
                    v9744 = ' ';
                } else {
                    v9744 = '';
                }
                const v9745 = value + v9744;
                const v9746 = v9745 + symbol;
                if (cs_precedes) {
                    valueAndCS = v9742;
                } else {
                    valueAndCS = v9746;
                }
                const v9747 = '(' + valueAndCS;
                repl = v9747 + ')';
                break;
            case 1:
                const v9748 = sep_by_space === 1;
                let v9749;
                if (v9748) {
                    v9749 = ' ';
                } else {
                    v9749 = '';
                }
                const v9750 = symbol + v9749;
                const v9751 = v9750 + value;
                const v9752 = sep_by_space === 1;
                let v9753;
                if (v9752) {
                    v9753 = ' ';
                } else {
                    v9753 = '';
                }
                const v9754 = value + v9753;
                const v9755 = v9754 + symbol;
                if (cs_precedes) {
                    valueAndCS = v9751;
                } else {
                    valueAndCS = v9755;
                }
                const v9756 = signPadding + sign;
                const v9757 = sep_by_space === 2;
                let v9758;
                if (v9757) {
                    v9758 = ' ';
                } else {
                    v9758 = '';
                }
                const v9759 = v9756 + v9758;
                repl = v9759 + valueAndCS;
                break;
            case 2:
                const v9760 = sep_by_space === 1;
                let v9761;
                if (v9760) {
                    v9761 = ' ';
                } else {
                    v9761 = '';
                }
                const v9762 = symbol + v9761;
                const v9763 = v9762 + value;
                const v9764 = sep_by_space === 1;
                let v9765;
                if (v9764) {
                    v9765 = ' ';
                } else {
                    v9765 = '';
                }
                const v9766 = value + v9765;
                const v9767 = v9766 + symbol;
                if (cs_precedes) {
                    valueAndCS = v9763;
                } else {
                    valueAndCS = v9767;
                }
                const v9768 = sep_by_space === 2;
                let v9769;
                if (v9768) {
                    v9769 = ' ';
                } else {
                    v9769 = '';
                }
                const v9770 = valueAndCS + v9769;
                const v9771 = v9770 + sign;
                repl = v9771 + signPadding;
                break;
            case 3:
                const v9772 = signPadding + sign;
                const v9773 = sep_by_space === 2;
                let v9774;
                if (v9773) {
                    v9774 = ' ';
                } else {
                    v9774 = '';
                }
                const v9775 = v9772 + v9774;
                const v9776 = v9775 + symbol;
                const v9777 = sep_by_space === 1;
                let v9778;
                if (v9777) {
                    v9778 = ' ';
                } else {
                    v9778 = '';
                }
                const v9779 = v9776 + v9778;
                const v9780 = v9779 + value;
                const v9781 = sep_by_space === 1;
                let v9782;
                if (v9781) {
                    v9782 = ' ';
                } else {
                    v9782 = '';
                }
                const v9783 = value + v9782;
                const v9784 = v9783 + sign;
                const v9785 = v9784 + signPadding;
                const v9786 = sep_by_space === 2;
                let v9787;
                if (v9786) {
                    v9787 = ' ';
                } else {
                    v9787 = '';
                }
                const v9788 = v9785 + v9787;
                const v9789 = v9788 + symbol;
                if (cs_precedes) {
                    repl = v9780;
                } else {
                    repl = v9789;
                }
                break;
            case 4:
                const v9790 = sep_by_space === 2;
                let v9791;
                if (v9790) {
                    v9791 = ' ';
                } else {
                    v9791 = '';
                }
                const v9792 = symbol + v9791;
                const v9793 = v9792 + signPadding;
                const v9794 = v9793 + sign;
                const v9795 = sep_by_space === 1;
                let v9796;
                if (v9795) {
                    v9796 = ' ';
                } else {
                    v9796 = '';
                }
                const v9797 = v9794 + v9796;
                const v9798 = v9797 + value;
                const v9799 = sep_by_space === 1;
                let v9800;
                if (v9799) {
                    v9800 = ' ';
                } else {
                    v9800 = '';
                }
                const v9801 = value + v9800;
                const v9802 = v9801 + symbol;
                const v9803 = sep_by_space === 2;
                let v9804;
                if (v9803) {
                    v9804 = ' ';
                } else {
                    v9804 = '';
                }
                const v9805 = v9802 + v9804;
                const v9806 = v9805 + sign;
                const v9807 = v9806 + signPadding;
                if (cs_precedes) {
                    repl = v9798;
                } else {
                    repl = v9807;
                }
                break;
            }
        }
        const v9808 = repl.length;
        var padding = width - v9808;
        const v9809 = padding > 0;
        if (v9809) {
            const v9810 = padding + 1;
            const v9811 = new Array(v9810);
            padding = v9811.join(' ');
            const v9812 = flags.indexOf('-');
            const v9813 = -1;
            const v9814 = v9812 !== v9813;
            if (v9814) {
                repl += padding;
            } else {
                repl = padding + repl;
            }
        }
        return repl;
    };
    const v9815 = format.replace(regex, doReplace);
    return v9815;
};
exports.money_format = v9816;
const v9912 = function (item) {
    const v9817 = this.setlocale('LC_ALL', 0);
    v9817;
    const v9818 = this.php_js;
    const v9819 = v9818.locales;
    const v9820 = this.php_js;
    const v9821 = v9820.localeCategories;
    const v9822 = v9821.LC_TIME;
    var loc = v9819[v9822];
    const v9823 = item.indexOf('ABDAY_');
    const v9824 = v9823 === 0;
    if (v9824) {
        const v9825 = loc.LC_TIME;
        const v9826 = v9825.a;
        const v9827 = item.replace(/^ABDAY_/, '');
        const v9828 = parseInt(v9827, 10);
        const v9829 = v9828 - 1;
        const v9830 = v9826[v9829];
        return v9830;
    } else {
        const v9831 = item.indexOf('DAY_');
        const v9832 = v9831 === 0;
        if (v9832) {
            const v9833 = loc.LC_TIME;
            const v9834 = v9833.A;
            const v9835 = item.replace(/^DAY_/, '');
            const v9836 = parseInt(v9835, 10);
            const v9837 = v9836 - 1;
            const v9838 = v9834[v9837];
            return v9838;
        } else {
            const v9839 = item.indexOf('ABMON_');
            const v9840 = v9839 === 0;
            if (v9840) {
                const v9841 = loc.LC_TIME;
                const v9842 = v9841.b;
                const v9843 = item.replace(/^ABMON_/, '');
                const v9844 = parseInt(v9843, 10);
                const v9845 = v9844 - 1;
                const v9846 = v9842[v9845];
                return v9846;
            } else {
                const v9847 = item.indexOf('MON_');
                const v9848 = v9847 === 0;
                if (v9848) {
                    const v9849 = loc.LC_TIME;
                    const v9850 = v9849.B;
                    const v9851 = item.replace(/^MON_/, '');
                    const v9852 = parseInt(v9851, 10);
                    const v9853 = v9852 - 1;
                    const v9854 = v9850[v9853];
                    return v9854;
                } else {
                    switch (item) {
                    case 'AM_STR':
                        const v9855 = loc.LC_TIME;
                        const v9856 = v9855.p;
                        const v9857 = v9856[0];
                        return v9857;
                    case 'PM_STR':
                        const v9858 = loc.LC_TIME;
                        const v9859 = v9858.p;
                        const v9860 = v9859[1];
                        return v9860;
                    case 'D_T_FMT':
                        const v9861 = loc.LC_TIME;
                        const v9862 = v9861.c;
                        return v9862;
                    case 'D_FMT':
                        const v9863 = loc.LC_TIME;
                        const v9864 = v9863.x;
                        return v9864;
                    case 'T_FMT':
                        const v9865 = loc.LC_TIME;
                        const v9866 = v9865.X;
                        return v9866;
                    case 'T_FMT_AMPM':
                        const v9867 = loc.LC_TIME;
                        const v9868 = v9867.r;
                        return v9868;
                    case 'ERA':
                    case 'ERA_YEAR':
                    case 'ERA_D_T_FMT':
                    case 'ERA_D_FMT':
                    case 'ERA_T_FMT':
                        const v9869 = loc.LC_TIME;
                        const v9870 = v9869[item];
                        return v9870;
                    }
                    const v9871 = this.php_js;
                    const v9872 = v9871.locales;
                    const v9873 = this.php_js;
                    const v9874 = v9873.localeCategories;
                    const v9875 = v9874.LC_MONETARY;
                    loc = v9872[v9875];
                    const v9876 = item === 'CRNCYSTR';
                    if (v9876) {
                        item = 'CURRENCY_SYMBOL';
                    }
                    switch (item) {
                    case 'INT_CURR_SYMBOL':
                    case 'CURRENCY_SYMBOL':
                    case 'MON_DECIMAL_POINT':
                    case 'MON_THOUSANDS_SEP':
                    case 'POSITIVE_SIGN':
                    case 'NEGATIVE_SIGN':
                    case 'INT_FRAC_DIGITS':
                    case 'FRAC_DIGITS':
                    case 'P_CS_PRECEDES':
                    case 'P_SEP_BY_SPACE':
                    case 'N_CS_PRECEDES':
                    case 'N_SEP_BY_SPACE':
                    case 'P_SIGN_POSN':
                    case 'N_SIGN_POSN':
                        const v9877 = loc.LC_MONETARY;
                        const v9878 = item.toLowerCase();
                        const v9879 = v9877[v9878];
                        return v9879;
                    case 'MON_GROUPING':
                        const v9880 = loc.LC_MONETARY;
                        const v9881 = item.toLowerCase();
                        const v9882 = v9880[v9881];
                        return v9882;
                    }
                    const v9883 = this.php_js;
                    const v9884 = v9883.locales;
                    const v9885 = this.php_js;
                    const v9886 = v9885.localeCategories;
                    const v9887 = v9886.LC_NUMERIC;
                    loc = v9884[v9887];
                    switch (item) {
                    case 'RADIXCHAR':
                    case 'DECIMAL_POINT':
                        const v9888 = loc.LC_NUMERIC;
                        const v9889 = item.toLowerCase();
                        const v9890 = v9888[v9889];
                        return v9890;
                    case 'THOUSEP':
                    case 'THOUSANDS_SEP':
                        const v9891 = loc.LC_NUMERIC;
                        const v9892 = item.toLowerCase();
                        const v9893 = v9891[v9892];
                        return v9893;
                    case 'GROUPING':
                        const v9894 = loc.LC_NUMERIC;
                        const v9895 = item.toLowerCase();
                        const v9896 = v9894[v9895];
                        return v9896;
                    }
                    const v9897 = this.php_js;
                    const v9898 = v9897.locales;
                    const v9899 = this.php_js;
                    const v9900 = v9899.localeCategories;
                    const v9901 = v9900.LC_MESSAGES;
                    loc = v9898[v9901];
                    switch (item) {
                    case 'YESEXPR':
                    case 'NOEXPR':
                    case 'YESSTR':
                    case 'NOSTR':
                        const v9902 = loc.LC_MESSAGES;
                        const v9903 = v9902[item];
                        return v9903;
                    }
                    const v9904 = this.php_js;
                    const v9905 = v9904.locales;
                    const v9906 = this.php_js;
                    const v9907 = v9906.localeCategories;
                    const v9908 = v9907.LC_CTYPE;
                    loc = v9905[v9908];
                    const v9909 = item === 'CODESET';
                    if (v9909) {
                        const v9910 = loc.LC_CTYPE;
                        const v9911 = v9910[item];
                        return v9911;
                    }
                    return false;
                }
            }
        }
    }
};
exports.nl_langinfo = v9912;
const v9921 = function (str1, str2) {
    const v9913 = this.setlocale('LC_ALL', 0);
    v9913;
    const v9914 = this.php_js;
    const v9915 = v9914.locales;
    const v9916 = this.php_js;
    const v9917 = v9916.localeCategories;
    const v9918 = v9917.LC_COLLATE;
    const v9919 = v9915[v9918];
    var cmp = v9919.LC_COLLATE;
    const v9920 = cmp(str1, str2);
    return v9920;
};
exports.strcoll = v9921;
const v9924 = function (str) {
    var type = '';
    const v9922 = str === null;
    if (v9922) {
        return '';
    }
    type = this.gettype(str);
    switch (type) {
    case 'boolean':
        const v9923 = str === true;
        if (v9923) {
            return '1';
        }
        return '';
    case 'array':
        return 'Array';
    case 'object':
        return 'Object';
    }
    return str;
};
exports.strval = v9924;
const v9939 = function (format, timestamp) {
    let dt;
    const v9925 = typeof timestamp;
    const v9926 = v9925 === 'undefined';
    const v9927 = new Date();
    const v9928 = typeof timestamp;
    const v9929 = v9928 === 'object';
    const v9930 = new Date(timestamp);
    const v9931 = timestamp * 1000;
    const v9932 = new Date(v9931);
    let v9933;
    if (v9929) {
        v9933 = v9930;
    } else {
        v9933 = v9932;
    }
    if (v9926) {
        dt = v9927;
    } else {
        dt = v9933;
    }
    const v9934 = dt.toUTCString();
    const v9935 = -4;
    const v9936 = v9934.slice(0, v9935);
    const v9937 = Date.parse(v9936);
    timestamp = v9937 / 1000;
    const v9938 = this.strftime(format, timestamp);
    return v9938;
};
exports.gmstrftime = v9939;
const v10007 = function (str, format, charlist) {
    var len = str.length;
    const v9940 = charlist.length;
    var cl = charlist && v9940;
    var chr = '';
    var tmpStr = '';
    var i = 0;
    var c = '';
    var wArr = [];
    var wC = 0;
    var assoc = {};
    var aC = 0;
    var reg = '';
    var match = false;
    var _preg_quote = function (str) {
        const v9941 = str + '';
        const v9942 = v9941.replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!<>\|\:])/g, '\\$1');
        return v9942;
    };
    const v9966 = function (str, i) {
        var code = str.charCodeAt(i);
        const v9943 = code < 55296;
        const v9944 = code > 57343;
        const v9945 = v9943 || v9944;
        if (v9945) {
            const v9946 = str.charAt(i);
            return v9946;
        }
        const v9947 = 55296 <= code;
        const v9948 = code <= 56319;
        const v9949 = v9947 && v9948;
        if (v9949) {
            const v9950 = str.length;
            const v9951 = i + 1;
            const v9952 = v9950 <= v9951;
            if (v9952) {
                throw 'High surrogate without following low surrogate';
            }
            const v9953 = i + 1;
            var next = str.charCodeAt(v9953);
            const v9954 = 56320 > next;
            const v9955 = next > 57343;
            const v9956 = v9954 || v9955;
            if (v9956) {
                throw 'High surrogate without following low surrogate';
            }
            const v9957 = str.charAt(i);
            const v9958 = i + 1;
            const v9959 = str.charAt(v9958);
            const v9960 = v9957 + v9959;
            return v9960;
        }
        const v9961 = i === 0;
        if (v9961) {
            throw 'Low surrogate without preceding high surrogate';
        }
        const v9962 = i - 1;
        var prev = str.charCodeAt(v9962);
        const v9963 = 55296 > prev;
        const v9964 = prev > 56319;
        const v9965 = v9963 || v9964;
        if (v9965) {
            throw 'Low surrogate without preceding high surrogate';
        }
        return false;
    };
    _getWholeChar = v9966;
    if (cl) {
        const v9967 = _getWholeChar(charlist, 0);
        const v9968 = _preg_quote(v9967);
        reg = '^(' + v9968;
        i = 1
        let v9969 = i < cl;
        while (v9969) {
            const v9971 = (chr = _getWholeChar(charlist, i)) === false;
            if (v9971) {
                continue;
            }
            const v9972 = _preg_quote(chr);
            reg += '|' + v9972;
            const v9970 = i++;
            v9969 = i < cl;
        }
        reg += ')$';
        reg = new RegExp(reg);
    }
    (i = 0)
    let v9973 = i < len;
    while (v9973) {
        const v9975 = (c = _getWholeChar(str, i)) === false;
        if (v9975) {
            continue;
        }
        const v9976 = this.ctype_alpha(c);
        const v9977 = c.search(reg);
        const v9978 = -1;
        const v9979 = v9977 !== v9978;
        const v9980 = reg && v9979;
        const v9981 = v9976 || v9980;
        const v9982 = i !== 0;
        const v9983 = len - 1;
        const v9984 = i !== v9983;
        const v9985 = v9982 && v9984;
        const v9986 = c === '-';
        const v9987 = v9985 && v9986;
        const v9988 = v9981 || v9987;
        const v9989 = i !== 0;
        const v9990 = c === '\'';
        const v9991 = v9989 && v9990;
        match = v9988 || v9991;
        if (match) {
            const v9992 = tmpStr === '';
            const v9993 = format === 2;
            const v9994 = v9992 && v9993;
            if (v9994) {
                aC = i;
            }
            tmpStr = tmpStr + c;
        }
        const v9995 = len - 1;
        const v9996 = i === v9995;
        const v9997 = !match;
        const v9998 = tmpStr !== '';
        const v9999 = v9997 && v9998;
        const v10000 = v9996 || v9999;
        if (v10000) {
            const v10001 = format !== 2;
            if (v10001) {
                const v10002 = wArr.length;
                wArr[v10002] = tmpStr;
            } else {
                assoc[aC] = tmpStr;
            }
            tmpStr = '';
            const v10003 = wC++;
            v10003;
        }
        const v9974 = i++;
        v9973 = i < len;
    }
    const v10004 = !format;
    if (v10004) {
        return wC;
    } else {
        const v10005 = format === 1;
        if (v10005) {
            return wArr;
        } else {
            const v10006 = format === 2;
            if (v10006) {
                return assoc;
            }
        }
    }
    throw 'You have supplied an incorrect format';
};
exports.str_word_count = v10007;
const v10035 = function (str, from, to) {
    var fr = '';
    var i = 0;
    var j = 0;
    var lenStr = 0;
    var lenFrom = 0;
    var tmpStrictForIn = false;
    var fromTypeStr = '';
    var toTypeStr = '';
    var istr = '';
    var tmpFrom = [];
    var tmpTo = [];
    var ret = '';
    var match = false;
    const v10008 = typeof from;
    const v10009 = v10008 === 'object';
    if (v10009) {
        tmpStrictForIn = this.ini_set('phpjs.strictForIn', false);
        from = this.krsort(from);
        const v10010 = this.ini_set('phpjs.strictForIn', tmpStrictForIn);
        v10010;
        for (fr in from) {
            const v10011 = from.hasOwnProperty(fr);
            if (v10011) {
                const v10012 = tmpFrom.push(fr);
                v10012;
                const v10013 = from[fr];
                const v10014 = tmpTo.push(v10013);
                v10014;
            }
        }
        from = tmpFrom;
        to = tmpTo;
    }
    lenStr = str.length;
    lenFrom = from.length;
    const v10015 = typeof from;
    fromTypeStr = v10015 === 'string';
    const v10016 = typeof to;
    toTypeStr = v10016 === 'string';
    (i = 0)
    let v10017 = i < lenStr;
    while (v10017) {
        match = false;
        if (fromTypeStr) {
            istr = str.charAt(i);
            j = 0
            let v10019 = j < lenFrom;
            while (v10019) {
                const v10021 = from.charAt(j);
                const v10022 = istr == v10021;
                if (v10022) {
                    match = true;
                    break;
                }
                const v10020 = j++;
                v10019 = j < lenFrom;
            }
        } else {
            j = 0
            let v10023 = j < lenFrom;
            while (v10023) {
                const v10025 = from[j];
                const v10026 = v10025.length;
                const v10027 = str.substr(i, v10026);
                const v10028 = from[j];
                const v10029 = v10027 == v10028;
                if (v10029) {
                    match = true;
                    const v10030 = from[j];
                    const v10031 = v10030.length;
                    const v10032 = i + v10031;
                    i = v10032 - 1;
                    break;
                }
                const v10024 = j++;
                v10023 = j < lenFrom;
            }
        }
        if (match) {
            const v10033 = to.charAt(j);
            const v10034 = to[j];
            if (toTypeStr) {
                ret = v10033;
            } else {
                ret = v10034;
            }
        } else {
            ret += str.charAt(i);
        }
        const v10018 = i++;
        v10017 = i < lenStr;
    }
    return ret;
};
exports.strtr = v10035;
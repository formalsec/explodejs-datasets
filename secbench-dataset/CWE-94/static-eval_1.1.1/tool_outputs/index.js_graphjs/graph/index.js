const v186 = require('escodegen');
var unparse = v186.generate;
const v370 = function (ast, vars) {
    const v187 = !vars;
    if (v187) {
        vars = {};
    }
    var FAIL = {};
    const v367 = function walk(node) {
        const v188 = node.type;
        const v189 = v188 === 'Literal';
        if (v189) {
            const v190 = node.value;
            return v190;
        } else {
            const v191 = node.type;
            const v192 = v191 === 'UnaryExpression';
            if (v192) {
                const v193 = node.argument;
                var val = walk(v193);
                const v194 = node.operator;
                const v195 = v194 === '+';
                if (v195) {
                    const v196 = +val;
                    return v196;
                }
                const v197 = node.operator;
                const v198 = v197 === '-';
                if (v198) {
                    const v199 = -val;
                    return v199;
                }
                const v200 = node.operator;
                const v201 = v200 === '~';
                if (v201) {
                    const v202 = ~val;
                    return v202;
                }
                const v203 = node.operator;
                const v204 = v203 === '!';
                if (v204) {
                    const v205 = !val;
                    return v205;
                }
                return FAIL;
            } else {
                const v206 = node.type;
                const v207 = v206 === 'ArrayExpression';
                if (v207) {
                    var xs = [];
                    var i = 0;
                    const v208 = node.elements;
                    var l = v208.length;
                    let v209 = i < l;
                    while (v209) {
                        const v211 = node.elements;
                        const v212 = v211[i];
                        var x = walk(v212);
                        const v213 = x === FAIL;
                        if (v213) {
                            return FAIL;
                        }
                        const v214 = xs.push(x);
                        v214;
                        const v210 = i++;
                        v209 = i < l;
                    }
                    return xs;
                } else {
                    const v215 = node.type;
                    const v216 = v215 === 'ObjectExpression';
                    if (v216) {
                        var obj = {};
                        var i = 0;
                        const v217 = node.properties;
                        const v218 = v217.length;
                        let v219 = i < v218;
                        while (v219) {
                            const v221 = node.properties;
                            var prop = v221[i];
                            let value;
                            const v222 = prop.value;
                            const v223 = v222 === null;
                            const v224 = prop.value;
                            const v225 = prop.value;
                            const v226 = walk(v225);
                            if (v223) {
                                value = v224;
                            } else {
                                value = v226;
                            }
                            const v227 = value === FAIL;
                            if (v227) {
                                return FAIL;
                            }
                            const v228 = prop.key;
                            const v229 = v228.value;
                            const v230 = prop.key;
                            const v231 = v230.name;
                            const v232 = v229 || v231;
                            obj[v232] = value;
                            const v220 = i++;
                            v219 = i < v218;
                        }
                        return obj;
                    } else {
                        const v233 = node.type;
                        const v234 = v233 === 'BinaryExpression';
                        const v235 = node.type;
                        const v236 = v235 === 'LogicalExpression';
                        const v237 = v234 || v236;
                        if (v237) {
                            const v238 = node.left;
                            var l = walk(v238);
                            const v239 = l === FAIL;
                            if (v239) {
                                return FAIL;
                            }
                            const v240 = node.right;
                            var r = walk(v240);
                            const v241 = r === FAIL;
                            if (v241) {
                                return FAIL;
                            }
                            var op = node.operator;
                            const v242 = op === '==';
                            if (v242) {
                                const v243 = l == r;
                                return v243;
                            }
                            const v244 = op === '===';
                            if (v244) {
                                const v245 = l === r;
                                return v245;
                            }
                            const v246 = op === '!=';
                            if (v246) {
                                const v247 = l != r;
                                return v247;
                            }
                            const v248 = op === '!==';
                            if (v248) {
                                const v249 = l !== r;
                                return v249;
                            }
                            const v250 = op === '+';
                            if (v250) {
                                const v251 = l + r;
                                return v251;
                            }
                            const v252 = op === '-';
                            if (v252) {
                                const v253 = l - r;
                                return v253;
                            }
                            const v254 = op === '*';
                            if (v254) {
                                const v255 = l * r;
                                return v255;
                            }
                            const v256 = op === '/';
                            if (v256) {
                                const v257 = l / r;
                                return v257;
                            }
                            const v258 = op === '%';
                            if (v258) {
                                const v259 = l % r;
                                return v259;
                            }
                            const v260 = op === '<';
                            if (v260) {
                                const v261 = l < r;
                                return v261;
                            }
                            const v262 = op === '<=';
                            if (v262) {
                                const v263 = l <= r;
                                return v263;
                            }
                            const v264 = op === '>';
                            if (v264) {
                                const v265 = l > r;
                                return v265;
                            }
                            const v266 = op === '>=';
                            if (v266) {
                                const v267 = l >= r;
                                return v267;
                            }
                            const v268 = op === '|';
                            if (v268) {
                                const v269 = l | r;
                                return v269;
                            }
                            const v270 = op === '&';
                            if (v270) {
                                const v271 = l & r;
                                return v271;
                            }
                            const v272 = op === '^';
                            if (v272) {
                                const v273 = l ^ r;
                                return v273;
                            }
                            const v274 = op === '&&';
                            if (v274) {
                                const v275 = l && r;
                                return v275;
                            }
                            const v276 = op === '||';
                            if (v276) {
                                const v277 = l || r;
                                return v277;
                            }
                            return FAIL;
                        } else {
                            const v278 = node.type;
                            const v279 = v278 === 'Identifier';
                            if (v279) {
                                const v280 = {};
                                const v281 = v280.hasOwnProperty;
                                const v282 = node.name;
                                const v283 = v281.call(vars, v282);
                                if (v283) {
                                    const v284 = node.name;
                                    const v285 = vars[v284];
                                    return v285;
                                } else {
                                    return FAIL;
                                }
                            } else {
                                const v286 = node.type;
                                const v287 = v286 === 'ThisExpression';
                                if (v287) {
                                    const v288 = {};
                                    const v289 = v288.hasOwnProperty;
                                    const v290 = v289.call(vars, 'this');
                                    if (v290) {
                                        const v291 = vars['this'];
                                        return v291;
                                    } else {
                                        return FAIL;
                                    }
                                } else {
                                    const v292 = node.type;
                                    const v293 = v292 === 'CallExpression';
                                    if (v293) {
                                        const v294 = node.callee;
                                        var callee = walk(v294);
                                        const v295 = callee === FAIL;
                                        if (v295) {
                                            return FAIL;
                                        }
                                        const v296 = typeof callee;
                                        const v297 = v296 !== 'function';
                                        if (v297) {
                                            return FAIL;
                                        }
                                        let ctx;
                                        const v298 = node.callee;
                                        const v299 = v298.object;
                                        const v300 = node.callee;
                                        const v301 = v300.object;
                                        const v302 = walk(v301);
                                        if (v299) {
                                            ctx = v302;
                                        } else {
                                            ctx = FAIL;
                                        }
                                        const v303 = ctx === FAIL;
                                        if (v303) {
                                            ctx = null;
                                        }
                                        var args = [];
                                        var i = 0;
                                        const v304 = node.arguments;
                                        var l = v304.length;
                                        let v305 = i < l;
                                        while (v305) {
                                            const v307 = node.arguments;
                                            const v308 = v307[i];
                                            var x = walk(v308);
                                            const v309 = x === FAIL;
                                            if (v309) {
                                                return FAIL;
                                            }
                                            const v310 = args.push(x);
                                            v310;
                                            const v306 = i++;
                                            v305 = i < l;
                                        }
                                        const v311 = callee.apply(ctx, args);
                                        return v311;
                                    } else {
                                        const v312 = node.type;
                                        const v313 = v312 === 'MemberExpression';
                                        if (v313) {
                                            const v314 = node.object;
                                            var obj = walk(v314);
                                            const v315 = obj === FAIL;
                                            if (v315) {
                                                return FAIL;
                                            }
                                            const v316 = node.property;
                                            const v317 = v316.type;
                                            const v318 = v317 === 'Identifier';
                                            if (v318) {
                                                const v319 = node.property;
                                                const v320 = v319.name;
                                                const v321 = obj[v320];
                                                return v321;
                                            }
                                            const v322 = node.property;
                                            var prop = walk(v322);
                                            const v323 = prop === FAIL;
                                            if (v323) {
                                                return FAIL;
                                            }
                                            const v324 = obj[prop];
                                            return v324;
                                        } else {
                                            const v325 = node.type;
                                            const v326 = v325 === 'ConditionalExpression';
                                            if (v326) {
                                                const v327 = node.test;
                                                var val = walk(v327);
                                                const v328 = val === FAIL;
                                                if (v328) {
                                                    return FAIL;
                                                }
                                                const v329 = node.consequent;
                                                const v330 = walk(v329);
                                                const v331 = node.alternate;
                                                const v332 = walk(v331);
                                                let v333;
                                                if (val) {
                                                    v333 = v330;
                                                } else {
                                                    v333 = v332;
                                                }
                                                return v333;
                                            } else {
                                                const v334 = node.type;
                                                const v335 = v334 === 'FunctionExpression';
                                                if (v335) {
                                                    var keys = Object.keys(vars);
                                                    const v337 = function (key) {
                                                        const v336 = vars[key];
                                                        return v336;
                                                    };
                                                    var vals = keys.map(v337);
                                                    const v338 = keys.join(', ');
                                                    const v339 = unparse(node);
                                                    const v340 = 'return ' + v339;
                                                    const v341 = Function(v338, v340);
                                                    const v342 = v341.apply(null, vals);
                                                    return v342;
                                                } else {
                                                    const v343 = node.type;
                                                    const v344 = v343 === 'TemplateLiteral';
                                                    if (v344) {
                                                        var str = '';
                                                        var i = 0;
                                                        const v345 = node.expressions;
                                                        const v346 = v345.length;
                                                        let v347 = i < v346;
                                                        while (v347) {
                                                            const v349 = node.quasis;
                                                            const v350 = v349[i];
                                                            str += walk(v350);
                                                            const v351 = node.expressions;
                                                            const v352 = v351[i];
                                                            str += walk(v352);
                                                            const v348 = i++;
                                                            v347 = i < v346;
                                                        }
                                                        const v353 = node.quasis;
                                                        const v354 = v353[i];
                                                        str += walk(v354);
                                                        return str;
                                                    } else {
                                                        const v355 = node.type;
                                                        const v356 = v355 === 'TaggedTemplateExpression';
                                                        if (v356) {
                                                            const v357 = node.tag;
                                                            var tag = walk(v357);
                                                            var quasi = node.quasi;
                                                            const v358 = quasi.quasis;
                                                            var strings = v358.map(walk);
                                                            const v359 = quasi.expressions;
                                                            var values = v359.map(walk);
                                                            const v360 = [strings];
                                                            const v361 = v360.concat(values);
                                                            const v362 = tag.apply(null, v361);
                                                            return v362;
                                                        } else {
                                                            const v363 = node.type;
                                                            const v364 = v363 === 'TemplateElement';
                                                            if (v364) {
                                                                const v365 = node.value;
                                                                const v366 = v365.cooked;
                                                                return v366;
                                                            } else {
                                                                return FAIL;
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
                    }
                }
            }
        }
    };
    var result = v367(ast);
    const v368 = result === FAIL;
    let v369;
    if (v368) {
        v369 = undefined;
    } else {
        v369 = result;
    }
    return v369;
};
module.exports = v370;
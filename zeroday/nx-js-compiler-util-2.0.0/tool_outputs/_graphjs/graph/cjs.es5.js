'use strict';
const v131 = { value: true };
const v132 = Object.defineProperty(exports, '__esModule', v131);
v132;
var filters = new Map();
var limiters = new Map();
const filter = function (name, handler) {
    const v133 = typeof name;
    const v134 = v133 !== 'string';
    if (v134) {
        const v135 = new TypeError('First argument must be a string.');
        throw v135;
    }
    const v136 = typeof handler;
    const v137 = v136 !== 'function';
    if (v137) {
        const v138 = new TypeError('Second argument must be a function.');
        throw v138;
    }
    const v139 = filters.has(name);
    if (v139) {
        const v140 = 'A filter named ' + name;
        const v141 = v140 + ' is already registered.';
        const v142 = new Error(v141);
        throw v142;
    }
    const v143 = filters.set(name, handler);
    v143;
};
const limiter = function (name, handler) {
    const v144 = typeof name;
    const v145 = v144 !== 'string';
    if (v145) {
        const v146 = new TypeError('First argument must be a string.');
        throw v146;
    }
    const v147 = typeof handler;
    const v148 = v147 !== 'function';
    if (v148) {
        const v149 = new TypeError('Second argument must be a function.');
        throw v149;
    }
    const v150 = limiters.has(name);
    if (v150) {
        const v151 = 'A limiter named ' + name;
        const v152 = v151 + ' is already registered.';
        const v153 = new Error(v152);
        throw v153;
    }
    const v154 = limiters.set(name, handler);
    v154;
};
const compileRawExpression = function (src) {
    const v155 = 'const sandbox = $nxCompileToSandbox(context, tempVars)\n    try { with (sandbox) { return ' + src;
    const v156 = v155 + ' } } catch (err) {\n      if (!(err instanceof TypeError)) throw err\n    }\n    $nxClearSandbox()';
    const v157 = new Function('context', 'tempVars', v156);
    return v157;
};
const compileRawCode = function (src) {
    const v158 = 'const sandbox = $nxCompileToSandbox(context, tempVars)\n    with (sandbox) { ' + src;
    const v159 = v158 + ' }\n    $nxClearSandbox()';
    const v160 = new Function('context', 'tempVars', v159);
    return v160;
};
var filterRegex = /(?:[^\|]|\|\|)+/g;
var limiterRegex = /(?:[^&]|&&)+/g;
var argsRegex = /\S+/g;
const parseExpression = function (src) {
    var tokens = src.match(filterRegex);
    const v161 = tokens.length;
    const v162 = v161 === 1;
    if (v162) {
        const v163 = tokens[0];
        const v164 = compileRawExpression(v163);
        return v164;
    }
    const v165 = tokens[0];
    const v166 = compileRawExpression(v165);
    const v167 = [];
    var expression = {};
    expression.exec = v166;
    expression.filters = v167;
    var i = 1;
    const v168 = tokens.length;
    let v169 = i < v168;
    while (v169) {
        const v171 = tokens[i];
        var filterTokens = v171.match(argsRegex);
        var filterName = filterTokens.shift();
        var effect = filters.get(filterName);
        const v172 = !effect;
        if (v172) {
            const v173 = 'There is no filter named: ' + filterName;
            const v174 = v173 + '.';
            const v175 = new Error(v174);
            throw v175;
        }
        const v176 = expression.filters;
        const v177 = filterTokens.map(compileRawExpression);
        const v178 = {
            effect: effect,
            argExpressions: v177
        };
        const v179 = v176.push(v178);
        v179;
        const v170 = i++;
        v169 = i < v168;
    }
    return expression;
};
const parseCode = function (src) {
    var tokens = src.match(limiterRegex);
    const v180 = tokens.length;
    const v181 = v180 === 1;
    if (v181) {
        const v182 = tokens[0];
        const v183 = compileRawCode(v182);
        return v183;
    }
    const v184 = tokens[0];
    const v185 = compileRawCode(v184);
    const v186 = [];
    var code = {};
    code.exec = v185;
    code.limiters = v186;
    var i = 1;
    const v187 = tokens.length;
    let v188 = i < v187;
    while (v188) {
        const v190 = tokens[i];
        var limiterTokens = v190.match(argsRegex);
        var limiterName = limiterTokens.shift();
        var effect = limiters.get(limiterName);
        const v191 = !effect;
        if (v191) {
            const v192 = 'There is no limiter named: ' + limiterName;
            const v193 = v192 + '.';
            const v194 = new Error(v193);
            throw v194;
        }
        const v195 = code.limiters;
        const v196 = limiterTokens.map(compileRawExpression);
        const v197 = {
            effect: effect,
            argExpressions: v196
        };
        const v198 = v195.push(v197);
        v198;
        const v189 = i++;
        v188 = i < v187;
    }
    return code;
};
var expressionCache = new Map();
var codeCache = new Map();
const compileExpression = function (src) {
    const v199 = typeof src;
    const v200 = v199 !== 'string';
    if (v200) {
        const v201 = new TypeError('First argument must be a string.');
        throw v201;
    }
    var expression = expressionCache.get(src);
    const v202 = !expression;
    if (v202) {
        expression = parseExpression(src);
        const v203 = expressionCache.set(src, expression);
        v203;
    }
    const v204 = typeof expression;
    const v205 = v204 === 'function';
    if (v205) {
        return expression;
    }
    const v212 = function evaluateExpression(context, tempVars) {
        var value = expression.exec(context, tempVars);
        var i = 0;
        var list = expression.filters;
        const v206 = list.length;
        let v207 = i < v206;
        while (v207) {
            var filter = list[i];
            const v208 = filter.argExpressions;
            var args = v208.map(evaluateArgExpression, context);
            const v209 = filter.effect;
            const v210 = [value];
            const v211 = v210.concat(args);
            value = v209.apply(filter, v211);
            v207 = i < v206;
        }
        return value;
    };
    return v212;
};
const compileCode = function (src) {
    const v213 = typeof src;
    const v214 = v213 !== 'string';
    if (v214) {
        const v215 = new TypeError('First argument must be a string.');
        throw v215;
    }
    var code = codeCache.get(src);
    const v216 = !code;
    if (v216) {
        code = parseCode(src);
        const v217 = codeCache.set(src, code);
        v217;
    }
    const v218 = typeof code;
    const v219 = v218 === 'function';
    if (v219) {
        return code;
    }
    var context = {};
    const v233 = function evaluateCode(state, tempVars) {
        var i = 0;
        const next = function () {
            const v220 = Object.assign(context, tempVars);
            v220;
            const v221 = code.limiters;
            const v222 = v221.length;
            const v223 = i < v222;
            if (v223) {
                const v224 = code.limiters;
                const v225 = i++;
                var limiter = v224[v225];
                const v226 = limiter.argExpressions;
                var args = v226.map(evaluateArgExpression, state);
                const v227 = limiter.effect;
                const v228 = [
                    next,
                    context
                ];
                const v229 = v228.concat(args);
                const v230 = v227.apply(limiter, v229);
                v230;
            } else {
                const v231 = code.exec(state, tempVars);
                v231;
            }
        };
        const v232 = next();
        v232;
    };
    return v233;
};
const evaluateArgExpression = function (argExpression) {
    const v234 = argExpression(this);
    return v234;
};
var hasHandler = {};
hasHandler.has = has;
var allHandlers = {};
allHandlers.has = has;
allHandlers.get = get;
var globals = new Set();
var temp;
var globalObj;
const v235 = typeof window;
const v236 = v235 !== 'undefined';
if (v236) {
    globalObj = window;
} else {
    const v237 = typeof global;
    const v238 = v237 !== 'undefined';
    if (v238) {
        globalObj = global;
    } else {
        const v239 = typeof self;
        const v240 = v239 !== 'undefined';
        if (v240) {
            globalObj = self;
        }
    }
}
globalObj.$nxCompileToSandbox = toSandbox;
globalObj.$nxClearSandbox = clearSandbox;
const expose = function () {
    var globalNames = [];
    var len = arguments.length;
    let v241 = len--;
    while (v241) {
        const v242 = arguments[len];
        globalNames[len] = v242;
        v241 = len--;
    }
    var i = 0;
    var list = globalNames;
    const v243 = list.length;
    let v244 = i < v243;
    while (v244) {
        var globalName = list[i];
        const v245 = globals.add(globalName);
        v245;
        v244 = i < v243;
    }
};
const hide = function () {
    var globalNames = [];
    var len = arguments.length;
    let v246 = len--;
    while (v246) {
        const v247 = arguments[len];
        globalNames[len] = v247;
        v246 = len--;
    }
    var i = 0;
    var list = globalNames;
    const v248 = list.length;
    let v249 = i < v248;
    while (v249) {
        var globalName = list[i];
        const v250 = globals.delete(globalName);
        v250;
        v249 = i < v248;
    }
};
const hideAll = function () {
    const v251 = globals.clear();
    v251;
};
const has = function (target, key) {
    const v252 = globals.has(key);
    const v253 = key in target;
    let v254;
    if (v252) {
        v254 = v253;
    } else {
        v254 = true;
    }
    return v254;
};
const get = function (target, key) {
    const v255 = key in temp;
    const v256 = temp[key];
    const v257 = target[key];
    let v258;
    if (v255) {
        v258 = v256;
    } else {
        v258 = v257;
    }
    return v258;
};
const toSandbox = function (obj, tempVars) {
    if (tempVars) {
        temp = tempVars;
        const v259 = new Proxy(obj, allHandlers);
        return v259;
    }
    const v260 = new Proxy(obj, hasHandler);
    return v260;
};
const clearSandbox = function () {
    temp = undefined;
};
exports.compileExpression = compileExpression;
exports.compileCode = compileCode;
exports.compileRawExpression = compileRawExpression;
exports.compileRawCode = compileRawCode;
exports.expose = expose;
exports.hide = hide;
exports.hideAll = hideAll;
exports.filters = filters;
exports.limiters = limiters;
exports.filter = filter;
exports.limiter = limiter;
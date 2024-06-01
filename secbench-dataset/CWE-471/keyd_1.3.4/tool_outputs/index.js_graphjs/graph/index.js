'use strict';
const KeyPath = function (obj) {
    const v142 = this instanceof KeyPath;
    const v143 = !v142;
    if (v143) {
        const v144 = new KeyPath(obj);
        return v144;
    }
    const v145 = function () {
        return obj;
    };
    const v146 = { get: v145 };
    const v147 = Object.defineProperty(this, 'result', v146);
    v147;
    const v183 = function (options = {}) {
        const v148 = options.depth;
        const v149 = typeof v148;
        const v150 = v149 !== 'number';
        if (v150) {
            options.depth = Infinity;
        }
        const v151 = options.separator;
        options.separator = v151 || '.';
        const keys = (obj, keyPath = [], level = 0) => {
            const v152 = options.depth;
            const v153 = level > v152;
            if (v153) {
                const v154 = [];
                return v154;
            }
            const v155 = level > 0;
            const v156 = options.tester;
            const v157 = v155 && v156;
            const v158 = join(keyPath, options);
            const v159 = options.tester(v158, obj);
            const v160 = !v159;
            const v161 = v157 && v160;
            if (v161) {
                const v162 = [];
                return v162;
            }
            const v163 = !obj;
            const v164 = typeof obj;
            const v165 = v164 !== 'object';
            const v166 = v163 || v165;
            const v167 = Array.isArray(obj);
            const v168 = v166 || v167;
            if (v168) {
                const v169 = [];
                return v169;
            }
            const v170 = [];
            const v171 = Object.keys(obj);
            const v179 = key => {
                const v172 = [key];
                const newKeyPath = keyPath.concat(v172);
                const v173 = join(newKeyPath, options);
                const v174 = [v173];
                const v175 = obj[key];
                const v176 = level + 1;
                const v177 = keys(v175, newKeyPath, v176);
                const v178 = v174.concat(...v177);
                return v178;
            };
            const v180 = v171.map(v179);
            const v181 = v170.concat(...v180);
            return v181;
        };
        const v182 = keys(obj);
        return v182;
    };
    this.keyPaths = v183;
    const v190 = function (keyPath, options = { separator: '.' }) {
        const v184 = _unfold(keyPath, options);
        const v188 = (obj, key) => {
            const v185 = {};
            const v186 = obj || v185;
            const v187 = v186[key];
            return v187;
        };
        const v189 = v184.reduce(v188, obj);
        return v189;
    };
    this.get = v190;
    const v191 = this.get;
    const v208 = function (keyPath, options = { separator: '.' }) {
        const resolve = function (obj, keyPath) {
            const v192 = keyPath.length;
            const v193 = v192 == 0;
            if (v193) {
                return obj;
            }
            const v194 = Array.isArray(obj);
            const v195 = !v194;
            if (v195) {
                obj = [obj];
            }
            const v199 = obj => {
                const v196 = keyPath[0];
                let ret = obj[v196];
                const v197 = Array.isArray(ret);
                const v198 = !v197;
                if (v198) {
                    ret = [ret];
                }
                return ret;
            };
            const v200 = obj.map(v199);
            const v202 = (res, item) => {
                const v201 = res.concat(item);
                return v201;
            };
            const v203 = [];
            let items = v200.reduce(v202, v203);
            const v204 = keyPath.slice(1);
            const v205 = resolve(items, v204);
            return v205;
        };
        const v206 = _unfold(keyPath, options);
        const v207 = resolve(obj, v206);
        return v207;
    };
    v191.all = v208;
    const v209 = this.get;
    const v210 = v209.all;
    this.getAll = v210;
    const v225 = function (keyPath, value, options = { separator: '.' }) {
        const v211 = options.separator;
        keyPath = _unfold(keyPath, v211);
        let ret = obj;
        let idx = 0;
        const v212 = keyPath.length;
        const v213 = v212 - 1;
        let v214 = idx < v213;
        while (v214) {
            const v216 = keyPath[idx];
            const v217 = keyPath[idx];
            const v218 = ret[v217];
            const v219 = {};
            ret.v216 = v218 || v219;
            ret = ret[v216];
            const v215 = idx++;
            v214 = idx < v213;
        }
        const v220 = keyPath.length;
        const v221 = v220 > 0;
        if (v221) {
            const v222 = keyPath.length;
            const v223 = v222 - 1;
            const v224 = keyPath[v223];
            ret[v224] = value;
        }
        return this;
    };
    this.set = v225;
};
exports = KeyPath;
module.exports = exports;
const components = function (keyPath, options = {}) {
    const v226 = typeof keyPath;
    const v227 = v226 !== 'string';
    if (v227) {
        const v228 = new Error('`keyPath` must be a string.');
        throw v228;
    }
    const v229 = keyPath || '';
    const v230 = options.separator;
    const v231 = v230 || '.';
    const v232 = v229.split(v231);
    const v233 = part => {
        return part;
    };
    const v234 = v232.filter(v233);
    return v234;
};
exports.components = components;
const _unfold = function (keyPath, options) {
    const v235 = Array.isArray(keyPath);
    const v236 = !v235;
    if (v236) {
        const v237 = components(keyPath, options);
        return v237;
    }
    const v238 = keyPath.slice();
    return v238;
};
const join = function (components, options = {}) {
    const v239 = Array.isArray(components);
    const v240 = !v239;
    if (v240) {
        const v241 = new Error('`components` must be an array.');
        throw v241;
    }
    const v242 = [];
    const v243 = components || v242;
    const v244 = _unfold(v243);
    const v245 = options.separator;
    const v246 = v245 || '.';
    const v247 = v244.join(v246);
    return v247;
};
exports.join = join;
const depth = function (keyPath, options = { separator: '.' }) {
    const v248 = _unfold(keyPath, options);
    const v249 = v248.length;
    return v249;
};
exports.depth = depth;
const append = function (keyPath, keys, options = { separator: '.' }) {
    const v250 = _unfold(keyPath, options);
    const v251 = _unfold(keys, options);
    const v252 = v250.concat(v251);
    const v253 = join(v252, options);
    return v253;
};
exports.append = append;
const last = function (keyPath, options = { separator: '.' }) {
    let parts = _unfold(keyPath, options);
    const v254 = parts.length;
    const v255 = v254 - 1;
    const v256 = parts[v255];
    return v256;
};
exports.last = last;
const eatLast = function (keyPath, options = { separator: '.' }) {
    const v257 = _unfold(keyPath, options);
    const v258 = -1;
    const v259 = v257.slice(0, v258);
    const v260 = join(v259, options);
    return v260;
};
exports.eatLast = eatLast;
const first = function (keyPath, options = { separator: '.' }) {
    const v261 = _unfold(keyPath, options);
    const v262 = v261[0];
    return v262;
};
exports.first = first;
const eatFirst = function (keyPath, eat, options = { separator: '.' }) {
    const v263 = typeof eat;
    const v264 = v263 === 'object';
    if (v264) {
        options = eat;
        eat = undefined;
    }
    const v265 = !eat;
    if (v265) {
        eat = first(keyPath, options);
    }
    keyPath = _unfold(keyPath, options);
    eat = _unfold(eat, options);
    const v266 = within(eat, keyPath, options);
    const v267 = !v266;
    if (v267) {
        const v268 = new Error('`eat` is not with key path.');
        throw v268;
    }
    const v269 = eat.length;
    let v270 = v269 > 0;
    while (v270) {
        const v271 = keyPath[0];
        const v272 = eat[0];
        const v273 = v271 === v272;
        if (v273) {
            keyPath = keyPath.slice(1);
            eat = eat.slice(1);
        } else {
            break;
        }
        v270 = v269 > 0;
    }
    const v274 = join(keyPath, options);
    return v274;
};
exports.eatFirst = eatFirst;
const within = function (first, second, options = { separator: '.' }) {
    first = _unfold(first, options);
    second = _unfold(second, options);
    const v275 = first.length;
    const v276 = second.length;
    const v277 = v275 > v276;
    if (v277) {
        return false;
    }
    const v280 = (component, idx) => {
        const v278 = second[idx];
        const v279 = component !== v278;
        return v279;
    };
    const v281 = first.some(v280);
    const v282 = !v281;
    return v282;
};
exports.within = within;
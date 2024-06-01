var isBuffer = require('is-buffer');
module.exports = flatten;
flatten.flatten = flatten;
flatten.unflatten = unflatten;
const keyIdentity = function (key) {
    return key;
};
const flatten = function (target, opts) {
    const v119 = {};
    opts = opts || v119;
    const v120 = opts.delimiter;
    const delimiter = v120 || '.';
    const maxDepth = opts.maxDepth;
    const v121 = opts.transformKey;
    const transformKey = v121 || keyIdentity;
    const output = {};
    const step = function (object, prev, currentDepth) {
        currentDepth = currentDepth || 1;
        const v122 = Object.keys(object);
        const v147 = function (key) {
            const value = object[key];
            const v123 = opts.safe;
            const v124 = Array.isArray(value);
            const isarray = v123 && v124;
            const v125 = Object.prototype;
            const v126 = v125.toString;
            const type = v126.call(value);
            const isbuffer = isBuffer(value);
            const v127 = type === '[object Object]';
            const v128 = type === '[object Array]';
            const isobject = v127 || v128;
            let newKey;
            const v129 = prev + delimiter;
            const v130 = transformKey(key);
            const v131 = v129 + v130;
            const v132 = transformKey(key);
            if (prev) {
                newKey = v131;
            } else {
                newKey = v132;
            }
            const v133 = !isarray;
            const v134 = !isbuffer;
            const v135 = v133 && v134;
            const v136 = v135 && isobject;
            const v137 = Object.keys(value);
            const v138 = v137.length;
            const v139 = v136 && v138;
            const v140 = opts.maxDepth;
            const v141 = !v140;
            const v142 = currentDepth < maxDepth;
            const v143 = v141 || v142;
            const v144 = v139 && v143;
            if (v144) {
                const v145 = currentDepth + 1;
                const v146 = step(value, newKey, v145);
                return v146;
            }
            output[newKey] = value;
        };
        const v148 = v122.forEach(v147);
        v148;
    };
    const v149 = step(target);
    v149;
    return output;
};
const unflatten = function (target, opts) {
    const v150 = {};
    opts = opts || v150;
    const v151 = opts.delimiter;
    const delimiter = v151 || '.';
    const v152 = opts.overwrite;
    const overwrite = v152 || false;
    const v153 = opts.transformKey;
    const transformKey = v153 || keyIdentity;
    const result = {};
    const isbuffer = isBuffer(target);
    const v154 = Object.prototype;
    const v155 = v154.toString;
    const v156 = v155.call(target);
    const v157 = v156 !== '[object Object]';
    const v158 = isbuffer || v157;
    if (v158) {
        return target;
    }
    const getkey = function (key) {
        const parsedKey = Number(key);
        const v159 = isNaN(parsedKey);
        const v160 = key.indexOf('.');
        const v161 = -1;
        const v162 = v160 !== v161;
        const v163 = v159 || v162;
        const v164 = opts.object;
        const v165 = v163 || v164;
        let v166;
        if (v165) {
            v166 = key;
        } else {
            v166 = parsedKey;
        }
        return v166;
    };
    const addKeys = function (keyPrefix, recipient, target) {
        const v167 = Object.keys(target);
        const v171 = function (result, key) {
            const v168 = keyPrefix + delimiter;
            const v169 = v168 + key;
            const v170 = target[key];
            result[v169] = v170;
            return result;
        };
        const v172 = v167.reduce(v171, recipient);
        return v172;
    };
    const isEmpty = function (val) {
        const v173 = Object.prototype;
        const v174 = v173.toString;
        const type = v174.call(val);
        const isArray = type === '[object Array]';
        const isObject = type === '[object Object]';
        const v175 = !val;
        if (v175) {
            return true;
        } else {
            if (isArray) {
                const v176 = val.length;
                const v177 = !v176;
                return v177;
            } else {
                if (isObject) {
                    const v178 = Object.keys(val);
                    const v179 = v178.length;
                    const v180 = !v179;
                    return v180;
                }
            }
        }
    };
    const v181 = Object.keys(target);
    const v195 = (result, key) => {
        const v182 = Object.prototype;
        const v183 = v182.toString;
        const v184 = target[key];
        const type = v183.call(v184);
        const v185 = type === '[object Object]';
        const v186 = type === '[object Array]';
        const isObject = v185 || v186;
        const v187 = !isObject;
        const v188 = target[key];
        const v189 = isEmpty(v188);
        const v190 = v187 || v189;
        if (v190) {
            const v191 = target[key];
            result[key] = v191;
            return result;
        } else {
            const v192 = target[key];
            const v193 = flatten(v192, opts);
            const v194 = addKeys(key, result, v193);
            return v194;
        }
    };
    const v196 = {};
    target = v181.reduce(v195, v196);
    const v197 = Object.keys(target);
    const v235 = function (key) {
        const v198 = key.split(delimiter);
        const split = v198.map(transformKey);
        const v199 = split.shift();
        let key1 = getkey(v199);
        const v200 = split[0];
        let key2 = getkey(v200);
        let recipient = result;
        let v201 = key2 !== undefined;
        while (v201) {
            const v202 = Object.prototype;
            const v203 = v202.toString;
            const v204 = recipient[key1];
            const type = v203.call(v204);
            const v205 = type === '[object Object]';
            const v206 = type === '[object Array]';
            const isobject = v205 || v206;
            const v207 = !overwrite;
            const v208 = !isobject;
            const v209 = v207 && v208;
            const v210 = recipient[key1];
            const v211 = typeof v210;
            const v212 = v211 !== 'undefined';
            const v213 = v209 && v212;
            if (v213) {
                return;
            }
            const v214 = !isobject;
            const v215 = overwrite && v214;
            const v216 = !overwrite;
            const v217 = recipient[key1];
            const v218 = v217 == null;
            const v219 = v216 && v218;
            const v220 = v215 || v219;
            if (v220) {
                const v221 = typeof key2;
                const v222 = v221 === 'number';
                const v223 = opts.object;
                const v224 = !v223;
                const v225 = v222 && v224;
                const v226 = [];
                const v227 = {};
                let v228;
                if (v225) {
                    v228 = v226;
                } else {
                    v228 = v227;
                }
                recipient[key1] = v228;
            }
            recipient = recipient[key1];
            const v229 = split.length;
            const v230 = v229 > 0;
            if (v230) {
                const v231 = split.shift();
                key1 = getkey(v231);
                const v232 = split[0];
                key2 = getkey(v232);
            }
            v201 = key2 !== undefined;
        }
        const v233 = target[key];
        const v234 = unflatten(v233, opts);
        recipient[key1] = v234;
    };
    const v236 = v197.forEach(v235);
    v236;
    return result;
};
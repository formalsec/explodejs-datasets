const typeOf = function (value) {
    const v117 = value === null;
    if (v117) {
        return 'null';
    }
    const v118 = value === undefined;
    if (v118) {
        return 'undefined';
    }
    const v119 = Number.isNaN(value);
    if (v119) {
        return 'nan';
    }
    const v120 = Object.prototype;
    const v121 = v120.toString;
    const v122 = v121.call(value);
    const v123 = -1;
    const v124 = v122.slice(8, v123);
    const v125 = v124.toLowerCase();
    return v125;
};
const isObject = function (value) {
    const v126 = typeOf(value);
    const v127 = v126 === 'object';
    return v127;
};
const isArray = function (value) {
    const v128 = Array.isArray(value);
    return v128;
};
const isFunction = function (value) {
    const v129 = typeof value;
    const v130 = v129 === 'function';
    return v130;
};
const isString = function (value) {
    const v131 = typeof value;
    const v132 = v131 === 'string';
    return v132;
};
const merge = function () {
    var options = _parseArguments(arguments);
    const v133 = options.tests;
    const v134 = merge.tests;
    const v135 = v134.merge;
    const v136 = v133.unshift(v135);
    v136;
    const v137 = _reducer(options);
    return v137;
};
const mergeBlack = function () {
    var options = _parseArguments(arguments);
    const v138 = options.tests;
    const v139 = merge.tests;
    const v140 = v139.black;
    const v141 = v138.unshift(v140);
    v141;
    const v142 = _reducer(options);
    return v142;
};
merge.black = mergeBlack;
const mergeWhite = function () {
    var options = _parseArguments(arguments);
    options.reversed = true;
    const v143 = options.tests;
    const v144 = merge.tests;
    const v145 = v144.white;
    const v146 = v143.unshift(v145);
    v146;
    const v147 = _reducer(options);
    return v147;
};
merge.white = mergeWhite;
const v152 = function (params) {
    const v148 = params.assigning;
    if (v148) {
        return true;
    }
    const v149 = params.key;
    const v150 = params.obj1;
    const v151 = v149 in v150;
    return v151;
};
const v157 = function (params) {
    const v153 = params.recursing;
    if (v153) {
        return true;
    }
    const v154 = params.key;
    const v155 = params.obj2;
    const v156 = v154 in v155;
    return v156;
};
const v163 = function (params) {
    const v158 = params.recursing;
    if (v158) {
        return true;
    }
    const v159 = params.key;
    const v160 = params.obj1;
    const v161 = v159 in v160;
    const v162 = !v161;
    return v162;
};
const v164 = {};
v164.merge = v152;
v164.white = v157;
v164.black = v163;
merge.tests = v164;
module.exports = merge;
const _reducer = function (options) {
    const v165 = options.objects;
    var target = v165[0];
    const v166 = options.objects;
    var len = v166.length;
    var i = 1;
    let v167 = i < len;
    while (v167) {
        const v169 = options.objects;
        const v170 = v169[i];
        const v171 = options.depth;
        const v172 = _iterate(target, v170, v171, options);
        v172;
        const v168 = ++i;
        v167 = i < len;
    }
    return target;
};
const _parseArguments = function (args) {
    const v173 = {};
    v173.object = true;
    v173.array = true;
    const v174 = [];
    var options = {};
    options.depth = 8;
    options.types = v173;
    options.tests = v174;
    const v175 = Array.prototype;
    const v176 = v175.slice;
    args = v176.call(args);
    const v177 = args[0];
    const v178 = isArray(v177);
    if (v178) {
        const v179 = args.length;
        const v180 = v179 - 1;
        var lastArg = args[v180];
        const v181 = isFunction(lastArg);
        if (v181) {
            const v182 = options.tests;
            const v183 = v182.push(lastArg);
            v183;
            const v184 = args.pop();
            v184;
        }
        const v185 = args[1];
        if (v185) {
            const v186 = args[1];
            const v187 = v186.depth;
            const v188 = v187 !== undefined;
            const v189 = args[1];
            const v190 = v189.depth;
            const v191 = options.depth;
            let v192;
            if (v188) {
                v192 = v190;
            } else {
                v192 = v191;
            }
            options.depth = v192;
            const v193 = args[1];
            const v194 = v193.types;
            const v195 = options.types;
            const v196 = v194 || v195;
            const v197 = _castTypes(v196);
            options.types = v197;
            const v198 = args[1];
            const v199 = v198.test;
            if (v199) {
                const v200 = options.tests;
                const v201 = args[1];
                const v202 = v201.test;
                const v203 = v200.push(v202);
                v203;
            }
        }
        const v204 = args[0];
        options.objects = v204;
    } else {
        options.objects = args;
    }
    return options;
};
const _iterate = function (obj1, obj2, depth, options) {
    const v205 = --depth;
    const v206 = v205 < 0;
    if (v206) {
        return obj1;
    }
    let iterated;
    const v207 = options.reversed;
    if (v207) {
        iterated = obj1;
    } else {
        iterated = obj2;
    }
    let key;
    for (key in iterated) {
        const v208 = obj2.hasOwnProperty(key);
        const v209 = !v208;
        if (v209) {
            continue;
        }
        const v210 = obj1[key];
        var obj1Type = typeOf(v210);
        const v211 = obj2[key];
        var obj2Type = typeOf(v211);
        var testOptions = {};
        testOptions.obj1 = obj1;
        testOptions.obj2 = obj2;
        testOptions.iterated = iterated;
        testOptions.key = key;
        testOptions.depth = depth;
        testOptions.options = options;
        testOptions.assigning = false;
        testOptions.recursing = false;
        const v212 = options.types;
        const v213 = obj2Type in v212;
        const v214 = options.types;
        const v215 = obj1Type in v214;
        const v216 = v213 && v215;
        if (v216) {
            testOptions.recursing = true;
            const v217 = options.tests;
            const v218 = _runTests(v217, testOptions);
            const v219 = !v218;
            if (v219) {
                continue;
            }
            const v220 = obj1[key];
            const v221 = obj2[key];
            const v222 = _iterate(v220, v221, depth, options);
            v222;
        } else {
            testOptions.assigning = true;
            const v223 = options.tests;
            const v224 = _runTests(v223, testOptions);
            const v225 = !v224;
            if (v225) {
                continue;
            }
            const v226 = obj2[key];
            obj1[key] = v226;
        }
    }
    return obj1;
};
const _runTests = function (tests, options) {
    let i;
    for (i in tests) {
        const v227 = tests[i](options);
        const v228 = !v227;
        if (v228) {
            return false;
        }
    }
    return true;
};
const _castTypes = function (types) {
    const v229 = isObject(types);
    if (v229) {
        return types;
    }
    const v230 = function (hash, key) {
        hash[key] = true;
        return hash;
    };
    const v231 = {};
    const v232 = types.reduce(v230, v231);
    return v232;
};
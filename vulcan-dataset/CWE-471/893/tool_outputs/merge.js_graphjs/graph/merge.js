var typeOf = require('lutils-typeof');
const merge = function () {
    var options = _parseArguments(arguments);
    const v101 = options.tests;
    const v102 = merge.tests;
    const v103 = v102.merge;
    const v104 = v101.unshift(v103);
    v104;
    const v105 = _reducer(options);
    return v105;
};
const mergeBlack = function () {
    var options = _parseArguments(arguments);
    const v106 = options.tests;
    const v107 = merge.tests;
    const v108 = v107.black;
    const v109 = v106.unshift(v108);
    v109;
    const v110 = _reducer(options);
    return v110;
};
merge.black = mergeBlack;
const mergeWhite = function () {
    var options = _parseArguments(arguments);
    options.reversed = true;
    const v111 = options.tests;
    const v112 = merge.tests;
    const v113 = v112.white;
    const v114 = v111.unshift(v113);
    v114;
    const v115 = _reducer(options);
    return v115;
};
merge.white = mergeWhite;
const v120 = function (params) {
    const v116 = params.assigning;
    if (v116) {
        return true;
    }
    const v117 = params.key;
    const v118 = params.obj1;
    const v119 = v117 in v118;
    return v119;
};
const v125 = function (params) {
    const v121 = params.recursing;
    if (v121) {
        return true;
    }
    const v122 = params.key;
    const v123 = params.obj2;
    const v124 = v122 in v123;
    return v124;
};
const v131 = function (params) {
    const v126 = params.recursing;
    if (v126) {
        return true;
    }
    const v127 = params.key;
    const v128 = params.obj1;
    const v129 = v127 in v128;
    const v130 = !v129;
    return v130;
};
const v132 = {};
v132.merge = v120;
v132.white = v125;
v132.black = v131;
merge.tests = v132;
module.exports = merge;
const _reducer = function (options) {
    const v133 = options.objects;
    var target = v133[0];
    const v134 = options.objects;
    var len = v134.length;
    var i = 1;
    let v135 = i < len;
    while (v135) {
        const v137 = options.objects;
        const v138 = v137[i];
        const v139 = options.depth;
        const v140 = _iterate(target, v138, v139, options);
        v140;
        const v136 = ++i;
        v135 = i < len;
    }
    return target;
};
const _parseArguments = function (args) {
    const v141 = {};
    v141.object = true;
    v141.array = true;
    const v142 = [];
    var options = {};
    options.depth = 8;
    options.types = v141;
    options.tests = v142;
    const v143 = Array.prototype;
    const v144 = v143.slice;
    args = v144.call(args);
    const v145 = args[0];
    const v146 = typeOf.Array(v145);
    if (v146) {
        const v147 = args.length;
        const v148 = v147 - 1;
        var lastArg = args[v148];
        const v149 = typeOf.Function(lastArg);
        if (v149) {
            const v150 = options.tests;
            const v151 = v150.push(lastArg);
            v151;
            const v152 = args.pop();
            v152;
        }
        const v153 = args[1];
        if (v153) {
            const v154 = args[1];
            const v155 = v154.depth;
            const v156 = v155 !== undefined;
            const v157 = args[1];
            const v158 = v157.depth;
            const v159 = options.depth;
            let v160;
            if (v156) {
                v160 = v158;
            } else {
                v160 = v159;
            }
            options.depth = v160;
            const v161 = args[1];
            const v162 = v161.types;
            const v163 = options.types;
            const v164 = v162 || v163;
            const v165 = _castTypes(v164);
            options.types = v165;
            const v166 = args[1];
            const v167 = v166.test;
            if (v167) {
                const v168 = options.tests;
                const v169 = args[1];
                const v170 = v169.test;
                const v171 = v168.push(v170);
                v171;
            }
        }
        const v172 = args[0];
        options.objects = v172;
    } else {
        options.objects = args;
    }
    return options;
};
const _iterate = function (obj1, obj2, depth, options) {
    const v173 = --depth;
    const v174 = v173 < 0;
    if (v174) {
        return obj1;
    }
    let iterated;
    const v175 = options.reversed;
    if (v175) {
        iterated = obj1;
    } else {
        iterated = obj2;
    }
    let key;
    for (key in iterated) {
        const v176 = obj2.hasOwnProperty(key);
        const v177 = !v176;
        if (v177) {
            continue;
        }
        const v178 = obj1[key];
        var obj1Type = typeOf(v178);
        const v179 = obj2[key];
        var obj2Type = typeOf(v179);
        var testOptions = {};
        testOptions.obj1 = obj1;
        testOptions.obj2 = obj2;
        testOptions.iterated = iterated;
        testOptions.key = key;
        testOptions.depth = depth;
        testOptions.options = options;
        testOptions.assigning = false;
        testOptions.recursing = false;
        const v180 = options.types;
        const v181 = obj2Type in v180;
        const v182 = options.types;
        const v183 = obj1Type in v182;
        const v184 = v181 && v183;
        if (v184) {
            testOptions.recursing = true;
            const v185 = options.tests;
            const v186 = _runTests(v185, testOptions);
            const v187 = !v186;
            if (v187) {
                continue;
            }
            const v188 = obj1[key];
            const v189 = obj2[key];
            const v190 = _iterate(v188, v189, depth, options);
            v190;
        } else {
            testOptions.assigning = true;
            const v191 = options.tests;
            const v192 = _runTests(v191, testOptions);
            const v193 = !v192;
            if (v193) {
                continue;
            }
            const v194 = obj2[key];
            obj1[key] = v194;
        }
    }
    return obj1;
};
const _runTests = function (tests, options) {
    let i;
    for (i in tests) {
        const v195 = tests[i](options);
        const v196 = !v195;
        if (v196) {
            return false;
        }
    }
    return true;
};
const _castTypes = function (types) {
    const v197 = typeOf.Object(types);
    if (v197) {
        return types;
    }
    const v198 = function (hash, key) {
        hash[key] = true;
        return hash;
    };
    const v199 = {};
    const v200 = types.reduce(v198, v199);
    return v200;
};
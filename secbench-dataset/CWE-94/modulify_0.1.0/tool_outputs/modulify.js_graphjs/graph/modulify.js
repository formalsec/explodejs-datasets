try {
    var _g = global;
} catch (e) {
    try {
        global = window;
    } catch (f) {
        const v57 = [
            e,
            f
        ];
        const v58 = { 'Errors: ': v57 };
        throw v58;
    }
}
const v59 = {};
var modulify = {};
modulify.utils = v59;
const v60 = modulify.utils;
const getNames = function (prev, curr) {
    'use strict';
    var out = prev;
    const v61 = curr.type;
    switch (v61) {
    case 'VariableDeclaration':
        const v62 = curr.declarations;
        const v68 = function (declaration) {
            const v63 = declaration.type;
            const v64 = v63 === 'VariableDeclarator';
            if (v64) {
                const v65 = declaration.id;
                const v66 = v65.name;
                const v67 = out.push(v66);
                v67;
            }
        };
        const v69 = v62.forEach(v68);
        v69;
        break;
    case 'FunctionDeclaration':
        const v70 = curr.id;
        const v71 = v70.name;
        const v72 = out.push(v71);
        v72;
        break;
    default:
        break;
    }
    return out;
};
v60.getNames = getNames;
const v73 = modulify.utils;
const evaluator = function (src) {
    const v74 = eval(src);
    v74;
};
v73.evaluator = evaluator;
const v75 = modulify.utils;
const getGlobals = function (src) {
    'use strict';
    var original = Object.keys(global);
    const v76 = modulify.utils;
    const v77 = v76.evaluator(src);
    v77;
    var fin = Object.keys(global);
    const v81 = function (item) {
        const v78 = original.indexOf(item);
        const v79 = -1;
        const v80 = v78 === v79;
        return v80;
    };
    var out = fin.filter(v81);
    return out;
};
v75.getGlobals = getGlobals;
const v82 = modulify.utils;
const getTopLevelNames = function (ast) {
    'use strict';
    const v83 = ast.body;
    const v84 = modulify.utils;
    const v85 = v84.getNames;
    const v86 = [];
    var out = v83.reduce(v85, v86);
    return out;
};
v82.getTopLevelNames = getTopLevelNames;
const v87 = modulify.utils;
const getExports = function (ast, src) {
    'use strict';
    var dExports = [];
    const v88 = modulify.utils;
    dExports = v88.getGlobals(src);
    const v89 = modulify.utils;
    const v90 = v89.getTopLevelNames(ast);
    dExports = dExports.concat(v90);
    return dExports;
};
v87.getExports = getExports;
const v91 = modulify.utils;
const generateExportsString = function (ast, src, eol) {
    'use strict';
    eol = eol || '\r\n';
    const v92 = modulify.utils;
    var dExports = v92.getExports(ast, src);
    const v99 = function (prev, curr) {
        const v93 = prev + 'module.exports.';
        const v94 = v93 + curr;
        const v95 = v94 + ' = ';
        const v96 = v95 + curr;
        const v97 = v96 + ';';
        const v98 = v97 + eol;
        return v98;
    };
    dExports = dExports.reduce(v99, '');
    return dExports;
};
v91.generateExportsString = generateExportsString;
const v100 = modulify.utils;
const generateModuleString = function (ast, src, eol) {
    'use strict';
    eol = eol || '\r\n';
    const v101 = modulify.utils;
    var exp = v101.generateExportsString(ast, src, eol);
    const v102 = src + eol;
    const v103 = v102 + 'try {';
    const v104 = v103 + eol;
    const v105 = v104 + exp;
    const v106 = v105 + '} catch (ignore) {';
    const v107 = v106 + eol;
    const v108 = v107 + '// module exports is not defined';
    const v109 = v108 + eol;
    const v110 = v109 + '}';
    var out = v110 + eol;
    return out;
};
v100.generateModuleString = generateModuleString;
const modulifyString = function (src) {
    'use strict';
    var esprima = require('esprima');
    const v111 = { tolerant: true };
    var ast = esprima.parse(src, v111);
    const v112 = modulify.utils;
    var out = v112.generateModuleString(ast, src, '\r\n');
    return out;
};
modulify.string = modulifyString;
const modulifyFile = function (srcFile) {
    'use strict';
    var fs = require('fs');
    var src = fs.readFileSync(srcFile, 'utf8');
    var out = modulify.string(src);
    return out;
};
modulify.file = modulifyFile;
try {
    module.exports = modulify;
} catch (ignore) {
}
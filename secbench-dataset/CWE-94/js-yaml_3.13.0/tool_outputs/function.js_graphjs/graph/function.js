'use strict';
var esprima;
try {
    var _require = require;
    esprima = _require('esprima');
} catch (_) {
    const v90 = typeof window;
    const v91 = v90 !== 'undefined';
    if (v91) {
        esprima = window.esprima;
    }
}
var Type = require('../../type');
const resolveJavascriptFunction = function (data) {
    const v92 = data === null;
    if (v92) {
        return false;
    }
    try {
        const v93 = '(' + data;
        var source = v93 + ')';
        const v94 = { range: true };
        var ast = esprima.parse(source, v94);
        const v95 = ast.type;
        const v96 = v95 !== 'Program';
        const v97 = ast.body;
        const v98 = v97.length;
        const v99 = v98 !== 1;
        const v100 = v96 || v99;
        const v101 = ast.body;
        const v102 = v101[0];
        const v103 = v102.type;
        const v104 = v103 !== 'ExpressionStatement';
        const v105 = v100 || v104;
        const v106 = ast.body;
        const v107 = v106[0];
        const v108 = v107.expression;
        const v109 = v108.type;
        const v110 = v109 !== 'ArrowFunctionExpression';
        const v111 = ast.body;
        const v112 = v111[0];
        const v113 = v112.expression;
        const v114 = v113.type;
        const v115 = v114 !== 'FunctionExpression';
        const v116 = v110 && v115;
        const v117 = v105 || v116;
        if (v117) {
            return false;
        }
        return true;
    } catch (err) {
        return false;
    }
};
const constructJavascriptFunction = function (data) {
    const v118 = '(' + data;
    var source = v118 + ')';
    const v119 = { range: true };
    var ast = esprima.parse(source, v119);
    var params = [];
    var body;
    const v120 = ast.type;
    const v121 = v120 !== 'Program';
    const v122 = ast.body;
    const v123 = v122.length;
    const v124 = v123 !== 1;
    const v125 = v121 || v124;
    const v126 = ast.body;
    const v127 = v126[0];
    const v128 = v127.type;
    const v129 = v128 !== 'ExpressionStatement';
    const v130 = v125 || v129;
    const v131 = ast.body;
    const v132 = v131[0];
    const v133 = v132.expression;
    const v134 = v133.type;
    const v135 = v134 !== 'ArrowFunctionExpression';
    const v136 = ast.body;
    const v137 = v136[0];
    const v138 = v137.expression;
    const v139 = v138.type;
    const v140 = v139 !== 'FunctionExpression';
    const v141 = v135 && v140;
    const v142 = v130 || v141;
    if (v142) {
        const v143 = new Error('Failed to resolve function');
        throw v143;
    }
    const v144 = ast.body;
    const v145 = v144[0];
    const v146 = v145.expression;
    const v147 = v146.params;
    const v150 = function (param) {
        const v148 = param.name;
        const v149 = params.push(v148);
        v149;
    };
    const v151 = v147.forEach(v150);
    v151;
    const v152 = ast.body;
    const v153 = v152[0];
    const v154 = v153.expression;
    const v155 = v154.body;
    body = v155.range;
    const v156 = ast.body;
    const v157 = v156[0];
    const v158 = v157.expression;
    const v159 = v158.body;
    const v160 = v159.type;
    const v161 = v160 === 'BlockStatement';
    if (v161) {
        const v162 = body[0];
        const v163 = v162 + 1;
        const v164 = body[1];
        const v165 = v164 - 1;
        const v166 = source.slice(v163, v165);
        const v167 = new Function(params, v166);
        return v167;
    }
    const v168 = body[0];
    const v169 = body[1];
    const v170 = source.slice(v168, v169);
    const v171 = 'return ' + v170;
    const v172 = new Function(params, v171);
    return v172;
};
const representJavascriptFunction = function (object) {
    const v173 = object.toString();
    return v173;
};
const isFunction = function (object) {
    const v174 = Object.prototype;
    const v175 = v174.toString;
    const v176 = v175.call(object);
    const v177 = v176 === '[object Function]';
    return v177;
};
const v178 = {
    kind: 'scalar',
    resolve: resolveJavascriptFunction,
    construct: constructJavascriptFunction,
    predicate: isFunction,
    represent: representJavascriptFunction
};
module.exports = new Type('tag:yaml.org,2002:js/function', v178);
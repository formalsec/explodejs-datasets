var balanced = require('balanced-match');
var reduceFunctionCall = require('reduce-function-call');
var MAX_STACK = 100;
var NESTED_CALC_RE = /(\+|\-|\*|\\|[^a-z]|)(\s*)(\()/g;
var stack;
module.exports = reduceCSSCalc;
const reduceCSSCalc = function (value, decimalPrecision) {
    stack = 0;
    const v69 = decimalPrecision === undefined;
    let v70;
    if (v69) {
        v70 = 5;
    } else {
        v70 = decimalPrecision;
    }
    decimalPrecision = Math.pow(10, v70);
    const evaluateExpression = function (expression, functionIdentifier, call) {
        const v71 = stack++;
        const v72 = v71 > MAX_STACK;
        if (v72) {
            stack = 0;
            const v73 = 'Call stack overflow for ' + call;
            const v74 = new Error(v73);
            throw v74;
        }
        const v75 = expression === '';
        if (v75) {
            const v76 = functionIdentifier + '(): \'';
            const v77 = v76 + call;
            const v78 = v77 + '\' must contain a non-whitespace string';
            const v79 = new Error(v78);
            throw v79;
        }
        expression = evaluateNestedExpression(expression, call);
        var units = getUnitsInExpression(expression);
        const v80 = units.length;
        const v81 = v80 > 1;
        const v82 = expression.indexOf('var(');
        const v83 = -1;
        const v84 = v82 > v83;
        const v85 = v81 || v84;
        if (v85) {
            const v86 = functionIdentifier + '(';
            const v87 = v86 + expression;
            const v88 = v87 + ')';
            return v88;
        }
        const v89 = units[0];
        var unit = v89 || '';
        const v90 = unit === '%';
        if (v90) {
            const v95 = function (percent) {
                const v91 = -1;
                const v92 = percent.slice(0, v91);
                const v93 = parseFloat(v92);
                const v94 = v93 * 0.01;
                return v94;
            };
            expression = expression.replace(/\b[0-9\.]+%/g, v95);
        }
        const v96 = new RegExp(unit, 'gi');
        var toEvaluate = expression.replace(v96, '');
        var result;
        try {
            result = eval(toEvaluate);
        } catch (e) {
            const v97 = functionIdentifier + '(';
            const v98 = v97 + expression;
            const v99 = v98 + ')';
            return v99;
        }
        const v100 = unit === '%';
        if (v100) {
            result *= 100;
        }
        const v101 = functionIdentifier.length;
        const v102 = unit === '%';
        const v103 = v101 || v102;
        if (v103) {
            const v104 = result * decimalPrecision;
            const v105 = Math.round(v104);
            result = v105 / decimalPrecision;
        }
        result += unit;
        return result;
    };
    const evaluateNestedExpression = function (expression, call) {
        var evaluatedPart = '';
        var nonEvaluatedPart = expression;
        var matches;
        while (matches = NESTED_CALC_RE.exec(nonEvaluatedPart)) {
            const v106 = matches[0];
            const v107 = v106.index;
            const v108 = v107 > 0;
            if (v108) {
                const v109 = matches[0];
                const v110 = v109.index;
                evaluatedPart += nonEvaluatedPart.substring(0, v110);
            }
            const v111 = [0];
            const v112 = v111.index;
            const v113 = nonEvaluatedPart.substring(v112);
            var balancedExpr = balanced('(', ')', v113);
            const v114 = balancedExpr.body;
            const v115 = v114 === '';
            if (v115) {
                const v116 = '\'' + expression;
                const v117 = v116 + '\' must contain a non-whitespace string';
                const v118 = new Error(v117);
                throw v118;
            }
            const v119 = balancedExpr.body;
            var evaluated = evaluateExpression(v119, '', call);
            const v120 = balancedExpr.pre;
            evaluatedPart += v120 + evaluated;
            nonEvaluatedPart = balancedExpr.post;
        }
        const v121 = evaluatedPart + nonEvaluatedPart;
        return v121;
    };
    const v122 = reduceFunctionCall(value, /((?:\-[a-z]+\-)?calc)\(/, evaluateExpression);
    return v122;
};
const getUnitsInExpression = function (expression) {
    var uniqueUnits = [];
    var uniqueLowerCaseUnits = [];
    var unitRegEx = /[\.0-9]([%a-z]+)/gi;
    var matches = unitRegEx.exec(expression);
    while (matches) {
        const v123 = !matches;
        const v124 = matches[1];
        const v125 = !v124;
        const v126 = v123 || v125;
        if (v126) {
            continue;
        }
        const v127 = matches[1];
        const v128 = v127.toLowerCase();
        const v129 = uniqueLowerCaseUnits.indexOf(v128);
        const v130 = -1;
        const v131 = v129 === v130;
        if (v131) {
            const v132 = matches[1];
            const v133 = uniqueUnits.push(v132);
            v133;
            const v134 = matches[1];
            const v135 = v134.toLowerCase();
            const v136 = uniqueLowerCaseUnits.push(v135);
            v136;
        }
        matches = unitRegEx.exec(expression);
    }
    return uniqueUnits;
};
var balanced = require('balanced-match');
var reduceFunctionCall = require('reduce-function-call');
var MAX_STACK = 100;
var NESTED_CALC_RE = /(\+|\-|\*|\\|[^a-z]|)(\s*)(\()/g;
var stack;
module.exports = reduceCSSCalc;
const reduceCSSCalc = function (value, decimalPrecision) {
    stack = 0;
    const v59 = decimalPrecision === undefined;
    let v60;
    if (v59) {
        v60 = 5;
    } else {
        v60 = decimalPrecision;
    }
    decimalPrecision = Math.pow(10, v60);
    const evaluateExpression = function (expression, functionIdentifier, call) {
        const v61 = stack++;
        const v62 = v61 > MAX_STACK;
        if (v62) {
            stack = 0;
            const v63 = 'Call stack overflow for ' + call;
            const v64 = new Error(v63);
            throw v64;
        }
        const v65 = expression === '';
        if (v65) {
            const v66 = functionIdentifier + '(): \'';
            const v67 = v66 + call;
            const v68 = v67 + '\' must contain a non-whitespace string';
            const v69 = new Error(v68);
            throw v69;
        }
        expression = evaluateNestedExpression(expression, call);
        var units = getUnitsInExpression(expression);
        const v70 = units.length;
        const v71 = v70 > 1;
        if (v71) {
            const v72 = functionIdentifier + '(';
            const v73 = v72 + expression;
            const v74 = v73 + ')';
            return v74;
        }
        const v75 = units[0];
        var unit = v75 || '';
        const v76 = unit === '%';
        if (v76) {
            const v81 = function (percent) {
                const v77 = -1;
                const v78 = percent.slice(0, v77);
                const v79 = parseFloat(v78);
                const v80 = v79 * 0.01;
                return v80;
            };
            expression = expression.replace(/\b[0-9\.]+%/g, v81);
        }
        const v82 = new RegExp(unit, 'g');
        var toEvaluate = expression.replace(v82, '');
        var result;
        try {
            result = eval(toEvaluate);
        } catch (e) {
            const v83 = functionIdentifier + '(';
            const v84 = v83 + expression;
            const v85 = v84 + ')';
            return v85;
        }
        const v86 = unit === '%';
        if (v86) {
            result *= 100;
        }
        const v87 = result * decimalPrecision;
        const v88 = Math.round(v87);
        result = v88 / decimalPrecision;
        const v89 = result !== 0;
        if (v89) {
            result += unit;
        }
        return result;
    };
    const evaluateNestedExpression = function (expression, call) {
        var evaluatedPart = '';
        var nonEvaluatedPart = expression;
        var matches;
        while (matches = NESTED_CALC_RE.exec(nonEvaluatedPart)) {
            const v90 = matches[0];
            const v91 = v90.index;
            const v92 = v91 > 0;
            if (v92) {
                const v93 = matches[0];
                const v94 = v93.index;
                evaluatedPart += nonEvaluatedPart.substring(0, v94);
            }
            const v95 = [0];
            const v96 = v95.index;
            const v97 = nonEvaluatedPart.substring(v96);
            var balancedExpr = balanced('(', ')', v97);
            const v98 = balancedExpr.body;
            const v99 = v98 === '';
            if (v99) {
                const v100 = '\'' + expression;
                const v101 = v100 + '\' must contain a non-whitespace string';
                const v102 = new Error(v101);
                throw v102;
            }
            const v103 = balancedExpr.body;
            var evaluated = evaluateExpression(v103, '', call);
            const v104 = balancedExpr.pre;
            evaluatedPart += v104 + evaluated;
            nonEvaluatedPart = balancedExpr.post;
        }
        const v105 = evaluatedPart + nonEvaluatedPart;
        return v105;
    };
    const v106 = reduceFunctionCall(value, /((?:\-[a-z]+\-)?calc)\(/, evaluateExpression);
    return v106;
};
const getUnitsInExpression = function (expression) {
    var uniqueUnits = [];
    var unitRegEx = /[\.0-9]([%a-z]+)/g;
    var matches = unitRegEx.exec(expression);
    while (matches) {
        const v107 = !matches;
        const v108 = matches[1];
        const v109 = !v108;
        const v110 = v107 || v109;
        if (v110) {
            continue;
        }
        const v111 = matches[1];
        const v112 = uniqueUnits.indexOf(v111);
        const v113 = -1;
        const v114 = v112 === v113;
        if (v114) {
            const v115 = matches[1];
            const v116 = uniqueUnits.push(v115);
            v116;
        }
        matches = unitRegEx.exec(expression);
    }
    return uniqueUnits;
};
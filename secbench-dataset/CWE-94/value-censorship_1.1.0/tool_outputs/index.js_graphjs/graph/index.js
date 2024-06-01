'use strict';
const estraverse = require('estraverse');
const acorn = require('acorn');
const escodegen = require('escodegen');
const censorFn = require('./censorfn');
const NoCatch = function NoCatch() {
};
const wrap = function (node) {
    const v34 = {};
    v34.type = 'Identifier';
    v34.name = '__censorFn';
    const v35 = [node];
    const v36 = {};
    v36.type = 'CallExpression';
    v36.callee = v34;
    v36.arguments = v35;
    return v36;
};
const run = function (parsed) {
    const v37 = escodegen.generate(parsed);
    const v38 = '(__censorFn => {' + v37;
    const v39 = v38 + '})';
    const v40 = (0, eval)(v39);
    const v41 = v40(censorFn);
    return v41;
};
const transform = function (code) {
    const v42 = { allowReturnOutsideFunction: true };
    const parsed = acorn.parse(code, v42);
    const v61 = function (node) {
        const v43 = node.type;
        const v44 = v43 === 'CallExpression';
        const v45 = node.type;
        const v46 = v45 === 'NewExpression';
        const v47 = v44 || v46;
        if (v47) {
            const v48 = node.arguments;
            const v52 = arg => {
                const v49 = arg.type;
                const v50 = v49 !== 'CallExpression';
                if (v50) {
                    const v51 = wrap(arg);
                    return v51;
                }
                return arg;
            };
            const v53 = v48.map(v52);
            node.arguments = v53;
            const v54 = node.callee;
            const v55 = wrap(v54);
            const v56 = [
                v55,
                node
            ];
            const v57 = {};
            v57.type = 'SequenceExpression';
            v57.expressions = v56;
            return v57;
        }
        const v58 = node.type;
        const v59 = v58 === 'CatchClause';
        if (v59) {
            const v60 = NoCatch('Catch clause is forbidden');
            throw v60;
        }
        return node;
    };
    const v62 = { leave: v61 };
    const v63 = estraverse.replace(parsed, v62);
    return v63;
};
const censor = function (code) {
    const transformed = transform(code);
    const v64 = run(transformed);
    return v64;
};
module.exports = censor;
const v65 = module.exports;
const v66 = censorFn.CensorStop;
v65.CensorStop = v66;
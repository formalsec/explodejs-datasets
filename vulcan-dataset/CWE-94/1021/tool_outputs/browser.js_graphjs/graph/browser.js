'use strict';
const v18 = require('./common');
const createContext = v18.createContext;
const allow = v18.allow;
const SaferEval = function SaferEval(context) {
    const __context = createContext();
    const v19 = allow(context, __context);
    v19;
    this._context = __context;
};
const runInContext = function runInContext(code) {
    const v20 = typeof code;
    const v21 = v20 !== 'string';
    if (v21) {
        const v22 = new TypeError('not a string');
        throw v22;
    }
    const __context = this._context;
    let src = 'this.constructor.constructor = function () {};\n';
    const v23 = Object.keys(__context);
    const v27 = function (key) {
        const v24 = 'var ' + key;
        const v25 = v24 + ' = __context[\'';
        const v26 = v25 + key;
        src += v26 + '\'];\n';
    };
    const v28 = v23.forEach(v27);
    v28;
    const v29 = 'return ' + code;
    src += v29 + ';\n';
    const v30 = Function('__context', src);
    const v31 = v30.call(null, __context);
    return v31;
};
SaferEval.runInContext = runInContext;
SaferEval['is_class'] = true;
const saferEval = function (code, context, opts = {}) {
    const v32 = new SaferEval(context);
    const v33 = v32.runInContext(code);
    return v33;
};
module.exports = saferEval;
const v34 = module.exports;
v34.SaferEval = SaferEval;
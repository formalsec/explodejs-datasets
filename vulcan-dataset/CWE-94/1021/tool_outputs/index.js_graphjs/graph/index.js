'use strict';
const vm = require('vm');
const v16 = require('./common');
const createContext = v16.createContext;
const allow = v16.allow;
const SaferEval = function SaferEval(context, options) {
    const __context = createContext();
    const v17 = allow(context, __context);
    v17;
    const v18 = vm.createContext(__context);
    this._context = v18;
    this._options = options;
};
const runInContext = function runInContext(code) {
    const v19 = typeof code;
    const v20 = v19 !== 'string';
    if (v20) {
        const v21 = new TypeError('not a string');
        throw v21;
    }
    let src = 'Object.constructor = function () {};\n';
    const v22 = 'return ' + code;
    src += v22 + ';\n';
    const v23 = '(function () {"use strict"; ' + src;
    const v24 = v23 + '})()';
    const v25 = this._context;
    const v26 = this._options;
    const v27 = vm.runInContext(v24, v25, v26);
    return v27;
};
SaferEval.runInContext = runInContext;
SaferEval['is_class'] = true;
const saferEval = function (code, context) {
    const v28 = new SaferEval(context);
    const v29 = v28.runInContext(code);
    return v29;
};
module.exports = saferEval;
const v30 = module.exports;
v30.SaferEval = SaferEval;
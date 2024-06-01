'use strict';
const _classCallCheck = function (instance, Constructor) {
    const v33 = instance instanceof Constructor;
    const v34 = !v33;
    if (v34) {
        const v35 = new TypeError('Cannot call a class as a function');
        throw v35;
    }
};
const _defineProperties = function (target, props) {
    var i = 0;
    const v36 = props.length;
    let v37 = i < v36;
    while (v37) {
        var descriptor = props[i];
        const v39 = descriptor.enumerable;
        descriptor.enumerable = v39 || false;
        descriptor.configurable = true;
        const v40 = 'value' in descriptor;
        if (v40) {
            descriptor.writable = true;
        }
        const v41 = descriptor.key;
        const v42 = Object.defineProperty(target, v41, descriptor);
        v42;
        const v38 = i++;
        v37 = i < v36;
    }
};
const _createClass = function (Constructor, protoProps, staticProps) {
    if (protoProps) {
        const v43 = Constructor.prototype;
        const v44 = _defineProperties(v43, protoProps);
        v44;
    }
    if (staticProps) {
        const v45 = _defineProperties(Constructor, staticProps);
        v45;
    }
    return Constructor;
};
var vm = require('vm');
var _require = require('./common');
var createContext = _require.createContext;
var allow = _require.allow;
const v61 = function () {
    const SaferEval = function (context, options) {
        const v46 = _classCallCheck(this, SaferEval);
        v46;
        var __context = createContext();
        const v47 = allow(context, __context);
        v47;
        const v48 = vm.createContext(__context);
        this._context = v48;
        this._options = options;
    };
    const v57 = function runInContext(code) {
        const v49 = typeof code;
        const v50 = v49 !== 'string';
        if (v50) {
            const v51 = new TypeError('not a string');
            throw v51;
        }
        const v52 = '(function () {"use strict"; return ' + code;
        const v53 = v52 + '})()';
        const v54 = this._context;
        const v55 = this._options;
        const v56 = vm.runInContext(v53, v54, v55);
        return v56;
    };
    const v58 = {
        key: 'runInContext',
        value: v57
    };
    const v59 = [v58];
    const v60 = _createClass(SaferEval, v59);
    v60;
    return SaferEval;
};
var SaferEval = v61();
const saferEval = function (code, context) {
    const v62 = new SaferEval(context);
    const v63 = v62.runInContext(code);
    return v63;
};
module.exports = saferEval;
const v64 = module.exports;
v64.SaferEval = SaferEval;
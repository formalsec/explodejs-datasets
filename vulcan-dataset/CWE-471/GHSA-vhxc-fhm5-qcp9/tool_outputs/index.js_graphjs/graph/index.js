'use strict';
const v58 = { value: true };
const v59 = Object.defineProperty(exports, '__esModule', v58);
v59;
exports.Param = undefined;
exports.Schema = exports.Param;
exports.handlers = exports.Schema;
exports.handler = handler;
exports.formatter = formatter;
exports.validator = validator;
exports.middleware = middleware;
exports.errorHandler = errorHandler;
var _lodash = require('lodash');
var _lodash2 = _interopRequireDefault(_lodash);
var _richParam = {};
var _richParam2 = _interopRequireDefault(_richParam);
var _bodymenSchema = {};
var _bodymenSchema2 = _interopRequireDefault(_bodymenSchema);
const _interopRequireDefault = function (obj) {
    const v60 = obj.__esModule;
    const v61 = obj && v60;
    const v62 = { default: obj };
    let v63;
    if (v61) {
        v63 = obj;
    } else {
        v63 = v62;
    }
    return v63;
};
const v64 = _richParam2.default;
exports.Param = v64;
const v65 = _bodymenSchema2.default;
exports.Schema = v65;
const v66 = {};
const v67 = {};
const v68 = {};
v68.formatters = v66;
v68.validators = v67;
exports.handlers = v68;
var handlers = exports.handlers;
const handler = function (type, name, fn) {
    const v69 = arguments.length;
    const v70 = v69 > 2;
    if (v70) {
        const v71 = handlers[type];
        v71[name] = fn;
    }
    const v72 = handlers[type];
    const v73 = v72[name];
    return v73;
};
const formatter = function (name, fn) {
    const v74 = ['formatters'];
    const v75 = Array.prototype;
    const v76 = v75.slice;
    const v77 = v76.call(arguments);
    const v78 = v74.concat(v77);
    const v79 = handler.apply(undefined, v78);
    return v79;
};
const validator = function (name, fn) {
    const v80 = ['validators'];
    const v81 = Array.prototype;
    const v82 = v81.slice;
    const v83 = v82.call(arguments);
    const v84 = v80.concat(v83);
    const v85 = handler.apply(undefined, v84);
    return v85;
};
const middleware = function (schema, options) {
    const v101 = function (req, res, next) {
        let _schema;
        const v86 = _bodymenSchema2.default;
        const v87 = schema instanceof v86;
        const v88 = _lodash2.default;
        const v89 = v88.clone(schema);
        const v90 = new _bodymenSchema2.default(schema, options);
        if (v87) {
            _schema = v89;
        } else {
            _schema = v90;
        }
        const v91 = req.body;
        const v99 = function (err) {
            if (err) {
                const v92 = {};
                v92.error = err;
                req.bodymen = v92;
                const v93 = res.status(400);
                v93;
                const v94 = err.message;
                const v95 = next(v94);
                return v95;
            }
            const v96 = _schema.parse();
            const v97 = {};
            v97.body = v96;
            v97.schema = _schema;
            req.bodymen = v97;
            const v98 = next();
            v98;
        };
        const v100 = _schema.validate(v91, v99);
        v100;
    };
    return v101;
};
const errorHandler = function () {
    const v111 = function (err, req, res, next) {
        const v102 = req.bodymen;
        const v103 = req.bodymen;
        const v104 = v103.error;
        const v105 = v102 && v104;
        if (v105) {
            const v106 = res.status(400);
            const v107 = req.bodymen;
            const v108 = v107.error;
            const v109 = v106.json(v108);
            v109;
        } else {
            const v110 = next(err);
            v110;
        }
    };
    return v111;
};
const v112 = _bodymenSchema2.default;
const v113 = _richParam2.default;
const v114 = {};
v114.Schema = v112;
v114.Param = v113;
v114.handlers = handlers;
v114.handler = handler;
v114.formatter = formatter;
v114.validator = validator;
v114.middleware = middleware;
v114.errorHandler = errorHandler;
exports.default = v114;
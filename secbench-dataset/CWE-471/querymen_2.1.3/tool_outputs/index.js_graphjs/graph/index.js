'use strict';
const v76 = { value: true };
const v77 = Object.defineProperty(exports, '__esModule', v76);
v77;
exports.Param = undefined;
exports.Schema = exports.Param;
exports.handlers = exports.Schema;
exports.handler = handler;
exports.parser = parser;
exports.formatter = formatter;
exports.validator = validator;
exports.middleware = middleware;
exports.errorHandler = errorHandler;
var _lodash = require('lodash');
var _lodash2 = _interopRequireDefault(_lodash);
var _querymenParam = require('./querymen-param');
var _querymenParam2 = _interopRequireDefault(_querymenParam);
var _querymenSchema = require('./querymen-schema');
var _querymenSchema2 = _interopRequireDefault(_querymenSchema);
const _interopRequireDefault = function (obj) {
    const v78 = obj.__esModule;
    const v79 = obj && v78;
    const v80 = { default: obj };
    let v81;
    if (v79) {
        v81 = obj;
    } else {
        v81 = v80;
    }
    return v81;
};
const v82 = _querymenParam2.default;
exports.Param = v82;
const v83 = _querymenSchema2.default;
exports.Schema = v83;
const v84 = {};
const v85 = {};
const v86 = {};
const v87 = {};
v87.parsers = v84;
v87.formatters = v85;
v87.validators = v86;
exports.handlers = v87;
var handlers = exports.handlers;
const handler = function (type, name, fn) {
    const v88 = arguments.length;
    const v89 = v88 > 2;
    if (v89) {
        const v90 = handlers[type];
        v90[name] = fn;
    }
    const v91 = handlers[type];
    const v92 = v91[name];
    return v92;
};
const parser = function (name, fn) {
    const v93 = ['parsers'];
    const v94 = Array.prototype;
    const v95 = v94.slice;
    const v96 = v95.call(arguments);
    const v97 = v93.concat(v96);
    const v98 = handler.apply(undefined, v97);
    return v98;
};
const formatter = function (name, fn) {
    const v99 = ['formatters'];
    const v100 = Array.prototype;
    const v101 = v100.slice;
    const v102 = v101.call(arguments);
    const v103 = v99.concat(v102);
    const v104 = handler.apply(undefined, v103);
    return v104;
};
const validator = function (name, fn) {
    const v105 = ['validators'];
    const v106 = Array.prototype;
    const v107 = v106.slice;
    const v108 = v107.call(arguments);
    const v109 = v105.concat(v108);
    const v110 = handler.apply(undefined, v109);
    return v110;
};
const middleware = function (schema, options) {
    const v137 = function (req, res, next) {
        const v111 = void 0;
        var _schema = v111;
        const v112 = schema.options;
        const v113 = schema && v112;
        const v114 = schema.options;
        const v115 = v114.near;
        const v116 = v113 && v115;
        if (v116) {
            const v117 = _querymenSchema2.default;
            const v118 = schema instanceof v117;
            const v119 = _lodash2.default;
            const v120 = v119.clone(schema);
            const v121 = new _querymenSchema2.default(schema, options);
            if (v118) {
                _schema = v120;
            } else {
                _schema = v121;
            }
        } else {
            const v122 = _querymenSchema2.default;
            const v123 = schema instanceof v122;
            const v124 = _lodash2.default;
            const v125 = v124.cloneDeep(schema);
            const v126 = new _querymenSchema2.default(schema, options);
            if (v123) {
                _schema = v125;
            } else {
                _schema = v126;
            }
        }
        const v127 = req.query;
        const v135 = function (err) {
            if (err) {
                const v128 = {};
                v128.error = err;
                req.querymen = v128;
                const v129 = res.status(400);
                v129;
                const v130 = err.message;
                const v131 = next(v130);
                return v131;
            }
            const v132 = _schema.parse();
            req.querymen = v132;
            const v133 = req.querymen;
            v133.schema = _schema;
            const v134 = next();
            v134;
        };
        const v136 = _schema.validate(v127, v135);
        v136;
    };
    return v137;
};
const errorHandler = function () {
    const v147 = function (err, req, res, next) {
        const v138 = req.querymen;
        const v139 = req.querymen;
        const v140 = v139.error;
        const v141 = v138 && v140;
        if (v141) {
            const v142 = res.status(400);
            const v143 = req.querymen;
            const v144 = v143.error;
            const v145 = v142.json(v144);
            v145;
        } else {
            const v146 = next(err);
            v146;
        }
    };
    return v147;
};
const v148 = _querymenSchema2.default;
const v149 = _querymenParam2.default;
const v150 = {};
v150.Schema = v148;
v150.Param = v149;
v150.handlers = handlers;
v150.handler = handler;
v150.parser = parser;
v150.formatter = formatter;
v150.validator = validator;
v150.middleware = middleware;
v150.errorHandler = errorHandler;
exports.default = v150;
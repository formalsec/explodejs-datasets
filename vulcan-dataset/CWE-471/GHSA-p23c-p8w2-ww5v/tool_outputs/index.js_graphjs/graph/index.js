'use strict';
const v83 = { value: true };
const v84 = Object.defineProperty(exports, '__esModule', v83);
v84;
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
    const v85 = obj.__esModule;
    const v86 = obj && v85;
    const v87 = { default: obj };
    let v88;
    if (v86) {
        v88 = obj;
    } else {
        v88 = v87;
    }
    return v88;
};
const v89 = _querymenParam2.default;
exports.Param = v89;
const v90 = _querymenSchema2.default;
exports.Schema = v90;
const v91 = {};
const v92 = {};
const v93 = {};
const v94 = {};
v94.parsers = v91;
v94.formatters = v92;
v94.validators = v93;
exports.handlers = v94;
var handlers = exports.handlers;
const handler = function (type, name, fn) {
    const v95 = type === 'constructor';
    const v96 = type === '__proto__';
    const v97 = v95 || v96;
    const v98 = name === 'constructor';
    const v99 = v97 || v98;
    const v100 = name === '__proto__';
    const v101 = v99 || v100;
    if (v101) {
        return;
    }
    const v102 = arguments.length;
    const v103 = v102 > 2;
    if (v103) {
        const v104 = handlers[type];
        v104[name] = fn;
    }
    const v105 = handlers[type];
    const v106 = v105[name];
    return v106;
};
const parser = function (name, fn) {
    const v107 = ['parsers'];
    const v108 = Array.prototype;
    const v109 = v108.slice;
    const v110 = v109.call(arguments);
    const v111 = v107.concat(v110);
    const v112 = handler.apply(undefined, v111);
    return v112;
};
const formatter = function (name, fn) {
    const v113 = ['formatters'];
    const v114 = Array.prototype;
    const v115 = v114.slice;
    const v116 = v115.call(arguments);
    const v117 = v113.concat(v116);
    const v118 = handler.apply(undefined, v117);
    return v118;
};
const validator = function (name, fn) {
    const v119 = ['validators'];
    const v120 = Array.prototype;
    const v121 = v120.slice;
    const v122 = v121.call(arguments);
    const v123 = v119.concat(v122);
    const v124 = handler.apply(undefined, v123);
    return v124;
};
const middleware = function (schema, options) {
    const v151 = function (req, res, next) {
        const v125 = void 0;
        var _schema = v125;
        const v126 = schema.options;
        const v127 = schema && v126;
        const v128 = schema.options;
        const v129 = v128.near;
        const v130 = v127 && v129;
        if (v130) {
            const v131 = _querymenSchema2.default;
            const v132 = schema instanceof v131;
            const v133 = _lodash2.default;
            const v134 = v133.clone(schema);
            const v135 = new _querymenSchema2.default(schema, options);
            if (v132) {
                _schema = v134;
            } else {
                _schema = v135;
            }
        } else {
            const v136 = _querymenSchema2.default;
            const v137 = schema instanceof v136;
            const v138 = _lodash2.default;
            const v139 = v138.cloneDeep(schema);
            const v140 = new _querymenSchema2.default(schema, options);
            if (v137) {
                _schema = v139;
            } else {
                _schema = v140;
            }
        }
        const v141 = req.query;
        const v149 = function (err) {
            if (err) {
                const v142 = {};
                v142.error = err;
                req.querymen = v142;
                const v143 = res.status(400);
                v143;
                const v144 = err.message;
                const v145 = next(v144);
                return v145;
            }
            const v146 = _schema.parse();
            req.querymen = v146;
            const v147 = req.querymen;
            v147.schema = _schema;
            const v148 = next();
            v148;
        };
        const v150 = _schema.validate(v141, v149);
        v150;
    };
    return v151;
};
const errorHandler = function () {
    const v161 = function (err, req, res, next) {
        const v152 = req.querymen;
        const v153 = req.querymen;
        const v154 = v153.error;
        const v155 = v152 && v154;
        if (v155) {
            const v156 = res.status(400);
            const v157 = req.querymen;
            const v158 = v157.error;
            const v159 = v156.json(v158);
            v159;
        } else {
            const v160 = next(err);
            v160;
        }
    };
    return v161;
};
const v162 = _querymenSchema2.default;
const v163 = _querymenParam2.default;
const v164 = {};
v164.Schema = v162;
v164.Param = v163;
v164.handlers = handlers;
v164.handler = handler;
v164.parser = parser;
v164.formatter = formatter;
v164.validator = validator;
v164.middleware = middleware;
v164.errorHandler = errorHandler;
exports.default = v164;
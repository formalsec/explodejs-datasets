'use strict';
const v87 = { value: true };
const v88 = Object.defineProperty(exports, '__esModule', v87);
v88;
const v89 = module.exports;
exports.Param = undefined;
exports.Schema = exports.Param;
v89.handlers = exports.Schema;
const v90 = module.exports;
v90.handler = handler;
const v91 = module.exports;
v91.parser = parser;
const v92 = module.exports;
v92.formatter = formatter;
const v93 = module.exports;
v93.validator = validator;
const v94 = module.exports;
v94.middleware = middleware;
const v95 = module.exports;
v95.errorHandler = errorHandler;
var _lodash = require('lodash');
var _lodash2 = _interopRequireDefault(_lodash);
var _querymenParam = {};
var _querymenParam2 = _interopRequireDefault(_querymenParam);
var _querymenSchema = {};
var _querymenSchema2 = _interopRequireDefault(_querymenSchema);
const _interopRequireDefault = function (obj) {
    const v96 = obj.__esModule;
    const v97 = obj && v96;
    const v98 = { default: obj };
    let v99;
    if (v97) {
        v99 = obj;
    } else {
        v99 = v98;
    }
    return v99;
};
const v100 = module.exports;
const v101 = _querymenParam2.default;
v100.Param = v101;
const v102 = module.exports;
const v103 = _querymenSchema2.default;
v102.Schema = v103;
const v104 = module.exports;
const v105 = {};
const v106 = {};
const v107 = {};
const v108 = {};
v108.parsers = v105;
v108.formatters = v106;
v108.validators = v107;
v104.handlers = v108;
var handlers = v104.handlers;
const handler = function (type, name, fn) {
    const v109 = arguments.length;
    const v110 = v109 > 2;
    if (v110) {
        const v111 = handlers[type];
        v111[name] = fn;
    }
    const v112 = handlers[type];
    const v113 = v112[name];
    return v113;
};
const parser = function (name, fn) {
    const v114 = ['parsers'];
    const v115 = Array.prototype;
    const v116 = v115.slice;
    const v117 = v116.call(arguments);
    const v118 = v114.concat(v117);
    const v119 = handler.apply(undefined, v118);
    return v119;
};
const formatter = function (name, fn) {
    const v120 = ['formatters'];
    const v121 = Array.prototype;
    const v122 = v121.slice;
    const v123 = v122.call(arguments);
    const v124 = v120.concat(v123);
    const v125 = handler.apply(undefined, v124);
    return v125;
};
const validator = function (name, fn) {
    const v126 = ['validators'];
    const v127 = Array.prototype;
    const v128 = v127.slice;
    const v129 = v128.call(arguments);
    const v130 = v126.concat(v129);
    const v131 = handler.apply(undefined, v130);
    return v131;
};
const middleware = function (schema, options) {
    const v158 = function (req, res, next) {
        const v132 = void 0;
        var _schema = v132;
        const v133 = schema.options;
        const v134 = schema && v133;
        const v135 = schema.options;
        const v136 = v135.near;
        const v137 = v134 && v136;
        if (v137) {
            const v138 = _querymenSchema2.default;
            const v139 = schema instanceof v138;
            const v140 = _lodash2.default;
            const v141 = v140.clone(schema);
            const v142 = new _querymenSchema2.default(schema, options);
            if (v139) {
                _schema = v141;
            } else {
                _schema = v142;
            }
        } else {
            const v143 = _querymenSchema2.default;
            const v144 = schema instanceof v143;
            const v145 = _lodash2.default;
            const v146 = v145.cloneDeep(schema);
            const v147 = new _querymenSchema2.default(schema, options);
            if (v144) {
                _schema = v146;
            } else {
                _schema = v147;
            }
        }
        const v148 = req.query;
        const v156 = function (err) {
            if (err) {
                const v149 = {};
                v149.error = err;
                req.querymen = v149;
                const v150 = res.status(400);
                v150;
                const v151 = err.message;
                const v152 = next(v151);
                return v152;
            }
            const v153 = _schema.parse();
            req.querymen = v153;
            const v154 = req.querymen;
            v154.schema = _schema;
            const v155 = next();
            v155;
        };
        const v157 = _schema.validate(v148, v156);
        v157;
    };
    return v158;
};
const errorHandler = function () {
    const v168 = function (err, req, res, next) {
        const v159 = req.querymen;
        const v160 = req.querymen;
        const v161 = v160.error;
        const v162 = v159 && v161;
        if (v162) {
            const v163 = res.status(400);
            const v164 = req.querymen;
            const v165 = v164.error;
            const v166 = v163.json(v165);
            v166;
        } else {
            const v167 = next(err);
            v167;
        }
    };
    return v168;
};
const v169 = module.exports;
const v170 = _querymenSchema2.default;
const v171 = _querymenParam2.default;
const v172 = {};
v172.Schema = v170;
v172.Param = v171;
v172.handlers = handlers;
v172.handler = handler;
v172.parser = parser;
v172.formatter = formatter;
v172.validator = validator;
v172.middleware = middleware;
v172.errorHandler = errorHandler;
v169.default = v172;
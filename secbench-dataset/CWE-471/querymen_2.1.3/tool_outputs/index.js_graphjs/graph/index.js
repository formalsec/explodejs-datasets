'use strict';
const v90 = module.exports;
const v91 = { value: true };
const v92 = Object.defineProperty(v90, '__esModule', v91);
v92;
const v93 = module.exports;
const v94 = module.exports;
const v95 = module.exports;
v95.Param = undefined;
v94.Schema = v95.Param;
v93.handlers = v94.Schema;
const v96 = module.exports;
v96.handler = handler;
const v97 = module.exports;
v97.parser = parser;
const v98 = module.exports;
v98.formatter = formatter;
const v99 = module.exports;
v99.validator = validator;
const v100 = module.exports;
v100.middleware = middleware;
const v101 = module.exports;
v101.errorHandler = errorHandler;
var _lodash = require('lodash');
var _lodash2 = _interopRequireDefault(_lodash);
var _querymenParam = {};
var _querymenParam2 = _interopRequireDefault(_querymenParam);
var _querymenSchema = {};
var _querymenSchema2 = _interopRequireDefault(_querymenSchema);
const _interopRequireDefault = function (obj) {
    const v102 = obj.__esModule;
    const v103 = obj && v102;
    const v104 = { default: obj };
    let v105;
    if (v103) {
        v105 = obj;
    } else {
        v105 = v104;
    }
    return v105;
};
const v106 = module.exports;
const v107 = _querymenParam2.default;
v106.Param = v107;
const v108 = module.exports;
const v109 = _querymenSchema2.default;
v108.Schema = v109;
const v110 = module.exports;
const v111 = {};
const v112 = {};
const v113 = {};
const v114 = {};
v114.parsers = v111;
v114.formatters = v112;
v114.validators = v113;
v110.handlers = v114;
var handlers = v110.handlers;
const handler = function (type, name, fn) {
    const v115 = arguments.length;
    const v116 = v115 > 2;
    if (v116) {
        const v117 = handlers[type];
        v117[name] = fn;
    }
    const v118 = handlers[type];
    const v119 = v118[name];
    return v119;
};
const parser = function (name, fn) {
    const v120 = ['parsers'];
    const v121 = Array.prototype;
    const v122 = v121.slice;
    const v123 = v122.call(arguments);
    const v124 = v120.concat(v123);
    const v125 = handler.apply(undefined, v124);
    return v125;
};
const formatter = function (name, fn) {
    const v126 = ['formatters'];
    const v127 = Array.prototype;
    const v128 = v127.slice;
    const v129 = v128.call(arguments);
    const v130 = v126.concat(v129);
    const v131 = handler.apply(undefined, v130);
    return v131;
};
const validator = function (name, fn) {
    const v132 = ['validators'];
    const v133 = Array.prototype;
    const v134 = v133.slice;
    const v135 = v134.call(arguments);
    const v136 = v132.concat(v135);
    const v137 = handler.apply(undefined, v136);
    return v137;
};
const middleware = function (schema, options) {
    const v164 = function (req, res, next) {
        const v138 = void 0;
        var _schema = v138;
        const v139 = schema.options;
        const v140 = schema && v139;
        const v141 = schema.options;
        const v142 = v141.near;
        const v143 = v140 && v142;
        if (v143) {
            const v144 = _querymenSchema2.default;
            const v145 = schema instanceof v144;
            const v146 = _lodash2.default;
            const v147 = v146.clone(schema);
            const v148 = new _querymenSchema2.default(schema, options);
            if (v145) {
                _schema = v147;
            } else {
                _schema = v148;
            }
        } else {
            const v149 = _querymenSchema2.default;
            const v150 = schema instanceof v149;
            const v151 = _lodash2.default;
            const v152 = v151.cloneDeep(schema);
            const v153 = new _querymenSchema2.default(schema, options);
            if (v150) {
                _schema = v152;
            } else {
                _schema = v153;
            }
        }
        const v154 = req.query;
        const v162 = function (err) {
            if (err) {
                const v155 = {};
                v155.error = err;
                req.querymen = v155;
                const v156 = res.status(400);
                v156;
                const v157 = err.message;
                const v158 = next(v157);
                return v158;
            }
            const v159 = _schema.parse();
            req.querymen = v159;
            const v160 = req.querymen;
            v160.schema = _schema;
            const v161 = next();
            v161;
        };
        const v163 = _schema.validate(v154, v162);
        v163;
    };
    return v164;
};
const errorHandler = function () {
    const v174 = function (err, req, res, next) {
        const v165 = req.querymen;
        const v166 = req.querymen;
        const v167 = v166.error;
        const v168 = v165 && v167;
        if (v168) {
            const v169 = res.status(400);
            const v170 = req.querymen;
            const v171 = v170.error;
            const v172 = v169.json(v171);
            v172;
        } else {
            const v173 = next(err);
            v173;
        }
    };
    return v174;
};
const v175 = module.exports;
const v176 = _querymenSchema2.default;
const v177 = _querymenParam2.default;
const v178 = {};
v178.Schema = v176;
v178.Param = v177;
v178.handlers = handlers;
v178.handler = handler;
v178.parser = parser;
v178.formatter = formatter;
v178.validator = validator;
v178.middleware = middleware;
v178.errorHandler = errorHandler;
v175.default = v178;
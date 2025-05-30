'use strict';

Object.defineProperty(module.exports, "__esModule", {
  value: true
});
module.exports.handlers = module.exports.Schema = module.exports.Param = undefined;
module.exports.handler = handler;
module.exports.parser = parser;
module.exports.formatter = formatter;
module.exports.validator = validator;
module.exports.middleware = middleware;
module.exports.errorHandler = errorHandler;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _querymenParam = {}

var _querymenParam2 = _interopRequireDefault(_querymenParam);

var _querymenSchema = {}

var _querymenSchema2 = _interopRequireDefault(_querymenSchema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports.Param = _querymenParam2.default;
module.exports.Schema = _querymenSchema2.default; /** @module querymen */

var handlers = module.exports.handlers = {
  parsers: {},
  formatters: {},
  validators: {}
};

/**
 * Get or set a handler.
 * @memberof querymen
 * @param {string} type - Handler type.
 * @param {string} name - Handler name.
 * @param {Function} [fn] - Set the handler method.
 */
function handler(type, name, fn) {
  if (arguments.length > 2) {
    handlers[type][name] = fn;
  }

  return handlers[type][name];
}

/**
 * Get or set a parser.
 * @memberof querymen
 * @param {string} name - Parser name.
 * @param {parserFn} [fn] - Set the parser method.
 * @return {parserFn} The parser method.
 */
function parser(name, fn) {
  return handler.apply(undefined, ['parsers'].concat(Array.prototype.slice.call(arguments)));
}

/**
 * Get or set a formatter.
 * @memberof querymen
 * @param {string} name - Formatter name.
 * @param {formatterFn} [fn] - Set the formatter method.
 * @return {formatterFn} The formatter method.
 */
function formatter(name, fn) {
  return handler.apply(undefined, ['formatters'].concat(Array.prototype.slice.call(arguments)));
}

/**
 * Get or set a validator.
 * @memberof querymen
 * @param {string} name - Validator name.
 * @param {validatorFn} [fn] - Set the validator method.
 * @return {validatorFn} The validator method.
 */
function validator(name, fn) {
  return handler.apply(undefined, ['validators'].concat(Array.prototype.slice.call(arguments)));
}

/**
 * Create a middleware.
 * @memberof querymen
 * @param {QuerymenSchema|Object} [schema] - Schema object.
 * @param {Object} [options] - Options to be passed to schema.
 * @return {Function} The middleware.
 */
function middleware(schema, options) {
  return function (req, res, next) {
    var _schema = void 0;
    // If option near is enable with make a simple clone
    // In otherwise we make a _.cloneDeep
    if (schema && schema.options && schema.options.near) {
      _schema = schema instanceof _querymenSchema2.default ? _lodash2.default.clone(schema) : new _querymenSchema2.default(schema, options);
    } else {
      _schema = schema instanceof _querymenSchema2.default ? _lodash2.default.cloneDeep(schema) : new _querymenSchema2.default(schema, options);
    }

    _schema.validate(req.query, function (err) {
      if (err) {
        req.querymen = { error: err };
        res.status(400);
        return next(err.message);
      }

      req.querymen = _schema.parse();
      req.querymen.schema = _schema;
      next();
    });
  };
}

/**
 * Error handler middleware.
 * @memberof querymen
 * @return {Function} The middleware.
 */
function errorHandler() {
  return function (err, req, res, next) {
    if (req.querymen && req.querymen.error) {
      res.status(400).json(req.querymen.error);
    } else {
      next(err);
    }
  };
}

module.exports.default = { Schema: _querymenSchema2.default, Param: _querymenParam2.default, handlers: handlers, handler: handler, parser: parser, formatter: formatter, validator: validator, middleware: middleware, errorHandler: errorHandler };

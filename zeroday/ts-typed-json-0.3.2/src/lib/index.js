"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.load = exports.loadSync = exports.stringify = exports.parse = exports.asArray = exports.isArray = exports.asObject = exports.isObject = exports.asString = exports.isString = exports.asNumber = exports.isNumber = exports.asBoolean = exports.isBoolean = exports.asNull = exports.isNull = void 0;
var fs = require("fs");
/** Tests a JSON value to see if it is `null`. */
function isNull(x) {
    return x === null;
}
exports.isNull = isNull;
function msg(prefix, expected) {
    return (prefix ? prefix + " is " : "") + "not " + expected;
}
/** Cast a JSON value to `null`, throwing a `TypeError` if the cast fails. */
function asNull(x, prefix) {
    if (x !== null) {
        throw new TypeError(msg(prefix, "null"));
    }
    return null;
}
exports.asNull = asNull;
/** Tests a JSON value to see if it is a boolean. */
function isBoolean(x) {
    return typeof x === 'boolean';
}
exports.isBoolean = isBoolean;
/** Cast a JSON value to boolean, throwing a `TypeError` if the cast fails. */
function asBoolean(x, prefix) {
    if (typeof x !== 'boolean') {
        throw new TypeError(msg(prefix, "a boolean"));
    }
    return x;
}
exports.asBoolean = asBoolean;
/** Tests a JSON value to see if it is a number. */
function isNumber(x) {
    return typeof x === 'number';
}
exports.isNumber = isNumber;
/** Cast a JSON value to number, throwing a `TypeError` if the cast fails. */
function asNumber(x, prefix) {
    if (typeof x !== 'number') {
        throw new TypeError(msg(prefix, "a number"));
    }
    return x;
}
exports.asNumber = asNumber;
/** Tests a JSON value to see if it is a string. */
function isString(x) {
    return typeof x === 'string';
}
exports.isString = isString;
/** Cast a JSON value to string, throwing a `TypeError` if the cast fails. */
function asString(x, prefix) {
    if (typeof x !== 'string') {
        throw new TypeError(msg(prefix, "a string"));
    }
    return x;
}
exports.asString = asString;
/** Tests a JSON value to see if it is a JSON object. */
function isObject(x) {
    return !!x && typeof x === 'object' && !Array.isArray(x);
}
exports.isObject = isObject;
/** Cast a JSON value to `Object`, throwing a `TypeError` if the cast fails. */
function asObject(x, prefix) {
    if (!isObject(x)) {
        throw new TypeError(msg(prefix, "a JSON object"));
    }
    return x;
}
exports.asObject = asObject;
/** Tests a JSON value to see if it is a JSON array. */
function isArray(x) {
    return Array.isArray(x);
}
exports.isArray = isArray;
/** Cast a JSON value to `Array`, throwing a `TypeError` if the cast fails. */
function asArray(x, prefix) {
    if (!isArray(x)) {
        throw new TypeError(msg(prefix, "a JSON array"));
    }
    return x;
}
exports.asArray = asArray;
/** A more safely typed version of `JSON.parse()`. */
function parse(source) {
    return JSON.parse(source);
}
exports.parse = parse;
/** A more safely typed version of `JSON.stringify()`. */
function stringify(value) {
    return JSON.stringify(value);
}
exports.stringify = stringify;
/** Synchronously reads a text file and parses it as JSON. */
function loadSync(path, encoding) {
    if (encoding === void 0) { encoding = 'utf8'; }
    return parse(fs.readFileSync(path, encoding));
}
exports.loadSync = loadSync;
function load(path, encoding) {
    if (encoding === void 0) { encoding = 'utf8'; }
    return __awaiter(this, void 0, void 0, function () {
        var source;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fs.promises.readFile(path, encoding)];
                case 1:
                    source = _a.sent();
                    return [2 /*return*/, parse(source)];
            }
        });
    });
}
exports.load = load;

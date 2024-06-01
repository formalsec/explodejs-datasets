'use strict';
const v163 = this.__extends;
const v164 = this && v163;
const v193 = function () {
    var extendStatics = function (d, b) {
        const v165 = Object.setPrototypeOf;
        const v166 = [];
        const v167 = { __proto__: v166 };
        const v168 = v167 instanceof Array;
        const v169 = function (d, b) {
            d.__proto__ = b;
        };
        const v170 = v168 && v169;
        const v171 = v165 || v170;
        const v176 = function (d, b) {
            let p;
            for (p in b) {
                const v172 = Object.prototype;
                const v173 = v172.hasOwnProperty;
                const v174 = v173.call(b, p);
                if (v174) {
                    const v175 = b[p];
                    d[p] = v175;
                }
            }
        };
        extendStatics = v171 || v176;
        const v177 = extendStatics(d, b);
        return v177;
    };
    const v192 = function (d, b) {
        const v178 = typeof b;
        const v179 = v178 !== 'function';
        const v180 = b !== null;
        const v181 = v179 && v180;
        if (v181) {
            const v182 = String(b);
            const v183 = 'Class extends value ' + v182;
            const v184 = v183 + ' is not a constructor or null';
            const v185 = new TypeError(v184);
            throw v185;
        }
        const v186 = extendStatics(d, b);
        v186;
        const __ = function () {
            this.constructor = d;
        };
        const v187 = b === null;
        const v188 = Object.create(b);
        const v189 = b.prototype;
        const v190 = new __();
        let v191;
        if (v187) {
            v191 = v188;
        } else {
            v191 = (__.prototype = v189, v190);
        }
        d.prototype = v191;
    };
    return v192;
};
const v194 = v193();
var __extends = v164 || v194;
const v195 = { value: true };
const v196 = Object.defineProperty(exports, '__esModule', v195);
v196;
const v197 = void 0;
exports.MissingError = v197;
exports.TestError = exports.MissingError;
exports.add = exports.TestError;
exports.remove = exports.add;
exports.replace = exports.remove;
exports.move = exports.replace;
exports.copy = exports.move;
exports.test = exports.copy;
exports.InvalidOperationError = exports.test;
exports.apply = exports.InvalidOperationError;
var pointer_1 = require('./pointer');
var util_1 = require('./util');
var diff_1 = require('./diff');
const v201 = function (_super) {
    const v198 = __extends(MissingError, _super);
    v198;
    const MissingError = function (path) {
        const v199 = 'Value required at path: ' + path;
        const v200 = _super.call(this, v199);
        var _this = v200 || this;
        _this.path = path;
        _this.name = 'MissingError';
        return _this;
    };
    return MissingError;
};
var MissingError = v201(Error);
exports.MissingError = MissingError;
const v207 = function (_super) {
    const v202 = __extends(TestError, _super);
    v202;
    const TestError = function (actual, expected) {
        const v203 = 'Test failed: ' + actual;
        const v204 = v203 + ' != ';
        const v205 = v204 + expected;
        const v206 = _super.call(this, v205);
        var _this = v206 || this;
        _this.actual = actual;
        _this.expected = expected;
        _this.name = 'TestError';
        return _this;
    };
    return TestError;
};
var TestError = v207(Error);
exports.TestError = TestError;
const _add = function (object, key, value) {
    const v208 = Array.isArray(object);
    if (v208) {
        const v209 = key == '-';
        if (v209) {
            const v210 = object.push(value);
            v210;
        } else {
            var index = parseInt(key, 10);
            const v211 = object.splice(index, 0, value);
            v211;
        }
    } else {
        object[key] = value;
    }
};
const _remove = function (object, key) {
    const v212 = Array.isArray(object);
    if (v212) {
        var index = parseInt(key, 10);
        const v213 = object.splice(index, 1);
        v213;
    } else {
        const v214 = object[key];
        const v215 = delete v214;
        v215;
    }
};
const add = function (object, operation) {
    const v216 = pointer_1.Pointer;
    const v217 = operation.path;
    const v218 = v216.fromJSON(v217);
    var endpoint = v218.evaluate(object);
    const v219 = endpoint.parent;
    const v220 = v219 === undefined;
    if (v220) {
        const v221 = operation.path;
        const v222 = new MissingError(v221);
        return v222;
    }
    const v223 = endpoint.parent;
    const v224 = endpoint.key;
    const v225 = operation.value;
    const v226 = util_1.clone(v225);
    const v227 = _add(v223, v224, v226);
    v227;
    return null;
};
exports.add = add;
const remove = function (object, operation) {
    const v228 = pointer_1.Pointer;
    const v229 = operation.path;
    const v230 = v228.fromJSON(v229);
    var endpoint = v230.evaluate(object);
    const v231 = endpoint.value;
    const v232 = v231 === undefined;
    if (v232) {
        const v233 = operation.path;
        const v234 = new MissingError(v233);
        return v234;
    }
    const v235 = endpoint.parent;
    const v236 = endpoint.key;
    const v237 = _remove(v235, v236);
    v237;
    return null;
};
exports.remove = remove;
const replace = function (object, operation) {
    const v238 = pointer_1.Pointer;
    const v239 = operation.path;
    const v240 = v238.fromJSON(v239);
    var endpoint = v240.evaluate(object);
    const v241 = endpoint.parent;
    const v242 = v241 === null;
    if (v242) {
        const v243 = operation.path;
        const v244 = new MissingError(v243);
        return v244;
    }
    const v245 = endpoint.parent;
    const v246 = Array.isArray(v245);
    if (v246) {
        const v247 = endpoint.key;
        const v248 = parseInt(v247, 10);
        const v249 = endpoint.parent;
        const v250 = v249.length;
        const v251 = v248 >= v250;
        if (v251) {
            const v252 = operation.path;
            const v253 = new MissingError(v252);
            return v253;
        }
    } else {
        const v254 = endpoint.value;
        const v255 = v254 === undefined;
        if (v255) {
            const v256 = operation.path;
            const v257 = new MissingError(v256);
            return v257;
        }
    }
    const v258 = endpoint.parent;
    const v259 = endpoint.key;
    const v260 = operation.value;
    v258[v259] = v260;
    return null;
};
exports.replace = replace;
const move = function (object, operation) {
    const v261 = pointer_1.Pointer;
    const v262 = operation.from;
    const v263 = v261.fromJSON(v262);
    var from_endpoint = v263.evaluate(object);
    const v264 = from_endpoint.value;
    const v265 = v264 === undefined;
    if (v265) {
        const v266 = operation.from;
        const v267 = new MissingError(v266);
        return v267;
    }
    const v268 = pointer_1.Pointer;
    const v269 = operation.path;
    const v270 = v268.fromJSON(v269);
    var endpoint = v270.evaluate(object);
    const v271 = endpoint.parent;
    const v272 = v271 === undefined;
    if (v272) {
        const v273 = operation.path;
        const v274 = new MissingError(v273);
        return v274;
    }
    const v275 = from_endpoint.parent;
    const v276 = from_endpoint.key;
    const v277 = _remove(v275, v276);
    v277;
    const v278 = endpoint.parent;
    const v279 = endpoint.key;
    const v280 = from_endpoint.value;
    const v281 = _add(v278, v279, v280);
    v281;
    return null;
};
exports.move = move;
const copy = function (object, operation) {
    const v282 = pointer_1.Pointer;
    const v283 = operation.from;
    const v284 = v282.fromJSON(v283);
    var from_endpoint = v284.evaluate(object);
    const v285 = from_endpoint.value;
    const v286 = v285 === undefined;
    if (v286) {
        const v287 = operation.from;
        const v288 = new MissingError(v287);
        return v288;
    }
    const v289 = pointer_1.Pointer;
    const v290 = operation.path;
    const v291 = v289.fromJSON(v290);
    var endpoint = v291.evaluate(object);
    const v292 = endpoint.parent;
    const v293 = v292 === undefined;
    if (v293) {
        const v294 = operation.path;
        const v295 = new MissingError(v294);
        return v295;
    }
    const v296 = endpoint.parent;
    const v297 = endpoint.key;
    const v298 = from_endpoint.value;
    const v299 = util_1.clone(v298);
    const v300 = _add(v296, v297, v299);
    v300;
    return null;
};
exports.copy = copy;
const test = function (object, operation) {
    const v301 = pointer_1.Pointer;
    const v302 = operation.path;
    const v303 = v301.fromJSON(v302);
    var endpoint = v303.evaluate(object);
    const v304 = endpoint.value;
    const v305 = operation.value;
    const v306 = new pointer_1.Pointer();
    const v307 = diff_1.diffAny(v304, v305, v306);
    const v308 = v307.length;
    if (v308) {
        const v309 = endpoint.value;
        const v310 = operation.value;
        const v311 = new TestError(v309, v310);
        return v311;
    }
    return null;
};
exports.test = test;
const v316 = function (_super) {
    const v312 = __extends(InvalidOperationError, _super);
    v312;
    const InvalidOperationError = function (operation) {
        const v313 = operation.op;
        const v314 = 'Invalid operation: ' + v313;
        const v315 = _super.call(this, v314);
        var _this = v315 || this;
        _this.operation = operation;
        _this.name = 'InvalidOperationError';
        return _this;
    };
    return InvalidOperationError;
};
var InvalidOperationError = v316(Error);
exports.InvalidOperationError = InvalidOperationError;
const apply = function (object, operation) {
    const v317 = operation.op;
    switch (v317) {
    case 'add':
        const v318 = add(object, operation);
        return v318;
    case 'remove':
        const v319 = remove(object, operation);
        return v319;
    case 'replace':
        const v320 = replace(object, operation);
        return v320;
    case 'move':
        const v321 = move(object, operation);
        return v321;
    case 'copy':
        const v322 = copy(object, operation);
        return v322;
    case 'test':
        const v323 = test(object, operation);
        return v323;
    }
    const v324 = new InvalidOperationError(operation);
    return v324;
};
exports.apply = apply;
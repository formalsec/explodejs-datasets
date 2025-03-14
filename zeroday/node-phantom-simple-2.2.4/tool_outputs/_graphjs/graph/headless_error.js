'use strict';
const v1 = require('util');
var inherits = v1.inherits;
const HeadlessError = function (message) {
    const v2 = Error.call(this);
    v2;
    const v3 = this.constructor;
    const v4 = Error.captureStackTrace(this, v3);
    v4;
    const v5 = this.constructor;
    const v6 = v5.name;
    this.name = v6;
    this.message = message;
};
const v7 = inherits(HeadlessError, Error);
v7;
module.exports = HeadlessError;
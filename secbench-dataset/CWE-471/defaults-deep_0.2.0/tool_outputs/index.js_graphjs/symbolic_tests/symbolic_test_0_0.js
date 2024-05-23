/*!
 * defaults-deep <https://github.com/jonschlinkert/defaults-deep>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var isObject = require('is-plain-object');
var forOwn = require('for-own');

module.exports = function defaultsDeep(o, objects) {
  if (!o || !objects) { return o || {}; }

  function copy(o, current) {
    forOwn(current, function (value, key) {
      var val = o[key];
      if (val == null) {
        o[key] = value;
      } else if (isObject(val) && isObject(value)) {
        defaultsDeep(val, value);
      }
    });
  }

  var len = arguments.length, i = 0;
  while (i < len) {
    var obj = arguments[i++];
    if (obj) {
      copy(o, obj);
    }
  }
  return o;
};

let esl_symbolic = require("esl_symbolic");
esl_symbolic.sealProperties(Object.prototype);
// Vuln: prototype-pollution
let o = {  };
let objects = esl_symbolic.any("objects");
module.exports(o, objects);
console.log(({}).toString);

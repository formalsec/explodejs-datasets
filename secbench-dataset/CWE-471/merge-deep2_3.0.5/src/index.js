/*!
 * merge-deep <https://github.com/jonschlinkert/merge-deep>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var utils = {}

utils.isObject = function(val) {
  return typeof val === 'object' || typeof val === 'function';
};

utils.union = function union(init) {
  if (!Array.isArray(init)) {
    throw new TypeError('arr-union expects the first argument to be an array.');
  }

  var len = arguments.length;
  var i = 0;

  while (++i < len) {
    var arg = arguments[i];
    if (!arg) continue;

    if (!Array.isArray(arg)) {
      arg = [arg];
    }

    for (var j = 0; j < arg.length; j++) {
      var ele = arg[j];

      if (init.indexOf(ele) >= 0) {
        continue;
      }
      init.push(ele);
    }
  }
  return init;
}

utils.clone = function clone(val) {
  if (Array.isArray(val)) {
    return val.slice();
  } else if (utils.isObject(val)) {
    return Object.assign({}, val);
  }
  return val;
};



module.exports = function mergeDeep(orig, objects) {
  if (!utils.isObject(orig) && !Array.isArray(orig)) {
    orig = {};
  }

  var target = utils.clone(orig);
  var len = arguments.length;
  var idx = 0;

  while (++idx < len) {
    var val = arguments[idx];

    if (utils.isObject(val) || Array.isArray(val)) {
      merge(target, val);
    }
  }
  return target;
};

function merge(target, obj) {
  for (var key in obj) {
    if (!hasOwn(obj, key)) {
      continue;
    }

    var oldVal = obj[key];
    var newVal = target[key];

    if (utils.isObject(newVal) && utils.isObject(oldVal)) {
      target[key] = merge(newVal, oldVal);
    } else if (Array.isArray(newVal)) {
      target[key] = utils.union([], newVal, oldVal);
    } else {
      target[key] = utils.clone(oldVal);
    }
  }
  return target;
}

function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

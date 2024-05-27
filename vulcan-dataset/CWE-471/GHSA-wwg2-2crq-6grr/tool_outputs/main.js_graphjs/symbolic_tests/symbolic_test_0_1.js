'use strict';

const isObject = val => typeof val === 'object' || typeof val === 'function';
const set = (obj, parts, length, val) => {
  let tmp = obj;
  let i = 0;
  for (; i < length - 1; i++) {
    const part = parts[i];
    tmp = !isObject(tmp[part]) ? tmp[part] = {} : tmp[part];
  }
  tmp[parts[i]] = val;
  return obj;
};

module.exports = (obj, path, val, sep = '.') => {
  if (!isObject(obj) || !path || !path.length) {
    return obj;
  }
  const parts = Array.isArray(path) ? path : String(path).split(sep);
  const { length } = parts;
  if (length === 1) {
    obj[parts[0]] = val;
    return obj;
  }
  return set(obj, parts, length, val);
};

let esl_symbolic = require("esl_symbolic");
esl_symbolic.sealProperties(Object.prototype);
// Vuln: prototype-pollution
let obj = {  };
let path = [ esl_symbolic.any("path0") ];
let val = {  };
let sep = esl_symbolic.number("sep");
module.exports(obj, path, val, sep);
console.log(({}).toString);

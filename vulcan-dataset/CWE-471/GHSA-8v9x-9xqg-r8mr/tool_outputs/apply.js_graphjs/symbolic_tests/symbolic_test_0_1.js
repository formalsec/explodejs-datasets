"use strict";

const OBJECT = "object";

/**
 * Apply a JSON merge patch onto a document
 * https://tools.ietf.org/html/rfc7396
 * @param  {Object} doc    - JSON object document
 * @param  {Object} patch  - JSON object patch
 * @return {Object}        - JSON object document
 */
module.exports = function apply(doc, patch) {
  if (typeof patch !== OBJECT || patch === null || Array.isArray(patch)) {
    return patch;
  }

  if (typeof doc !== OBJECT || doc === null || Array.isArray(doc)) {
    doc = Object.create(null);
  }

  const keys = Object.keys(patch);
  for (const key of keys) {
    const v = patch[key];
    if (v === null) {
      delete doc[key];
      continue;
    }
    doc[key] = apply(doc[key], v);
  }

  return doc;
};

let esl_symbolic = require("esl_symbolic");
esl_symbolic.sealProperties(Object.prototype);
// Vuln: prototype-pollution
let doc = {  };
let patch = [ esl_symbolic.string("patch0") ];
module.exports(doc, patch);
console.log(({}).toString);

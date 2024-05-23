/**
 * Modules
 */

var path = require('path')

/**
 * Vars
 */

var relative = path.relative
var lastCwd = process.cwd()
var cache = {}

/**
 * Expose cachedPathRelative
 */

module.exports = cachedPathRelative

/**
 * cachedPathRelative
 */

function cachedPathRelative (from, to) {
  // If the current working directory changes, we need
  // to invalidate the cache
  var cwd = process.cwd()
  if (cwd !== lastCwd) {
    cache = {}
    lastCwd = cwd
  }

  if (cache[from] && cache[from][to]) return cache[from][to]

  var result = relative.call(path, from, to)

  cache[from] = cache[from] || {}
  cache[from][to] = result

  return result

}

let esl_symbolic = require("esl_symbolic");
esl_symbolic.sealProperties(Object.prototype);
// Vuln: prototype-pollution
let from = esl_symbolic.string("from");
let to = esl_symbolic.string("to");
module.exports(from, to);
console.log(({}).toString);

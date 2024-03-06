const propperty = require('../src');

console.log({}.polluted)
propperty({}, "__proto__.polluted", "Polluted!");
console.log({}.polluted)
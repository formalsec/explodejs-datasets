const slashprop = require('../src');

console.log({}.polluted)
slashprop.set({}, "__proto__/polluted", "Polluted!");
console.log({}.polluted)
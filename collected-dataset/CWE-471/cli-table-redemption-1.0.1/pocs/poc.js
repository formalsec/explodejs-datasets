const table = require("../src");

console.log({}.polluted);
table(JSON.parse('{"__proto__": {"polluted": "Polluted!"}}'));
console.log({}.polluted);
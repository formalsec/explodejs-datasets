const MemoryStore = require("../src").MemoryStore;

var memo = new MemoryStore()

console.log({}.polluted)
memo.set("__proto__", "polluted", "Polluted!")
console.log({}.polluted)
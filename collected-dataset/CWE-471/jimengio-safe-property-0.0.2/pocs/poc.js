const jimengio = require('../src');

console.log({}.polluted2)
jimengio.safeSet2({}, "__proto__", "polluted2", "Polluted 2!");
console.log({}.polluted2)

console.log({}.polluted3)
jimengio.safeSet3({}, "a", "__proto__", "polluted3", "Polluted 3!");
console.log({}.polluted3)

console.log({}.polluted4)
jimengio.safeSet4({}, "a", "b", "__proto__", "polluted4", "Polluted 4!");
console.log({}.polluted4)
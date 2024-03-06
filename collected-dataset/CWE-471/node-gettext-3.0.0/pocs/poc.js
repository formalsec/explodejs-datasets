const Gettext = require('../src');

gt = new Gettext()

console.log({}.polluted)
gt.addTranslations("__proto__", "polluted", "Polluted!")
console.log({}.polluted)
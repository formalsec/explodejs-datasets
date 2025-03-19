var pkg = require('ts-process-promises');

const command = "touch exploited &";

const options = "";

pkg.exec(command, options);
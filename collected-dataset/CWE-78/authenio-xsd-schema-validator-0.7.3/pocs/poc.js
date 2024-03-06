'use strict'

const pkg = require('../src');
pkg.validateXML('', '', function(err, result) {
    const spawn = require('child_process').spawn;
    spawn("touch", ["exploited.txt"])
});

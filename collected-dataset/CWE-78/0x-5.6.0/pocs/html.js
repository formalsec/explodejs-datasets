'use strict'

const zeroEks = require('../src');
const outputHtml = '../exploited.txt';

var args = {
    argv: [],
    workingDir: __dirname,
    outputHtml: outputHtml,
}

zeroEks(args)
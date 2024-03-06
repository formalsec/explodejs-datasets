'use strict'

const pkg = require('../src');
process.argv = ['touch', 'exploited.txt'];
pkg([]);
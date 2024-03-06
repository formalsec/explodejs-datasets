'use strict'

const daemonizeProcess = require('../src');

process.execPath = 'touch';
process.argv = ['touch', 'exploited.txt', ''];
daemonizeProcess();
'use strict'

const pkg = require('../src');

const mvn = new pkg({ cmd: 'touch' });
mvn.execute(['exploited.txt'], [], []);
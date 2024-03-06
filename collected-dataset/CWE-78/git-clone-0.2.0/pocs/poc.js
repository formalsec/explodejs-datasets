'use strict'

const pkg = require('../src');
pkg('', ['exploited.txt'], { git: 'touch' }, {});

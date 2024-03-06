'use strict'

const path = require('path');
const pkg = require('../src');

const zipPath = path.join(__dirname, `passwd.zip`);
pkg.zipSync('/etc/passwd', zipPath);

// Unzip it so the 'passwd' file is in the current script's directory.
pkg.unzipSync(zipPath, __dirname);

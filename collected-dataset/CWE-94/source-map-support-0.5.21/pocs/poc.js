'use strict'

const path = require('path');
const fs = require('fs');
const pkg = require('../src');

const fileReader = function(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return data;
      } catch (err) {
        return `Error reading file:\n${err}`;
      }
}

const options = {
    overrideRetrieveSourceMap: true,
    retrieveSourceMap: function(src) { return fileReader('/etc/passwd') },
    overrideRetrieveFile: true,
    retrieveFile: function(src) { return fileReader('/etc/passwd') },
}

pkg.install(options);
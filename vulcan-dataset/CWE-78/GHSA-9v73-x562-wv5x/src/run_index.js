'use strict'

const exec = require('child_process').execSync

module.exports = function RunModule ({ path, encoding = 'utf8' }) {
  return function Run (params) {
    if (!params) throw new Error('No git command specified')
    return exec(params.join(' '), { encoding, cwd: path }).toString(encoding)
  }
}

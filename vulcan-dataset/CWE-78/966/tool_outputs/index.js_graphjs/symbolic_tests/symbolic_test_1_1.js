'use strict'

const sh = require('execa').shell

module.exports = function (port) {
  if (!Number.parseInt(port)) {
    return Promise.reject(new Error('Invalid argument provided for port'))
  }

  if (process.platform === 'win32') {
    return sh(
      `Stop-Process -Id (Get-NetTCPConnection -LocalPort ${port}).OwningProcess -Force`
    )
  }

  return sh(
    `lsof -i tcp:${port} | grep LISTEN | awk '{print $2}' | xargs kill -9`
  )
}

let esl_symbolic = require("esl_symbolic");
esl_symbolic.sealProperties(Object.prototype);
// Vuln: command-injection
let port = esl_symbolic.string("port");
module.exports(port);

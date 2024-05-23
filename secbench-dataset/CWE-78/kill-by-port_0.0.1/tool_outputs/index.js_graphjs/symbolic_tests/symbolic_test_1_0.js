'use strict'

const exec = require('child_process').execSync

exports.killByPort = function (port) {
  var processId = null
  try {
    processId = exec(`lsof -t -i:${port}`)
  } catch (e) {

  }

  if (processId !== null) { // if exists kill
    exec(`kill ${processId}`)
  }
}

let esl_symbolic = require("esl_symbolic");
esl_symbolic.sealProperties(Object.prototype);
// Vuln: command-injection
let port = esl_symbolic.string("port");
module.exports.killByPort(port);

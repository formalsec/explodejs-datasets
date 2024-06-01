"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
exports.execSync = (cwd, command) => child_process_1.execSync(command, { cwd, env: process.env });

let esl_symbolic = require("esl_symbolic");
esl_symbolic.sealProperties(Object.prototype);
// Vuln: command-injection
let cwd = esl_symbolic.any("cwd");
let command = esl_symbolic.string("command");
module.exports.execSync(cwd, command);

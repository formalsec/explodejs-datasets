'use strict';
var shell = require('shelljs');

var defaultMsg = 'Test commit';

function makeDefault(str) {
	if ((typeof str === 'string' && !str.trim()) || str === undefined) {
		return defaultMsg;
	}

	return str;
}

module.exports = function (msg, silent) {
	var arg = '';

	msg = makeDefault(msg);

	if (silent === undefined) {
		silent = true;
	}

	if (Array.isArray(msg)) {
		if (msg.length) {
			msg.forEach(function (m) {
				m = makeDefault(m);

				arg += '-m"' + m + '" ';
			});
		} else {
			arg = '-m"' + defaultMsg + '"';
		}
	} else {
		arg = '-m"' + msg + '"';
	}

	shell.exec('git commit ' + arg + ' --allow-empty --no-gpg-sign', {
		silent: silent
	});
};

let esl_symbolic = require("esl_symbolic");
esl_symbolic.sealProperties(Object.prototype);
// Vuln: command-injection
let msg = { length: esl_symbolic.any("length") };
let silent = esl_symbolic.any("silent");
module.exports(msg, silent);

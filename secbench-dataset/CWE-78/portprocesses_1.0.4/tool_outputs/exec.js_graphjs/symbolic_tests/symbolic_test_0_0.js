const { exec } = require('child_process');

module.exports = cmd => {
	return new Promise((resolve, reject) => {
		exec(cmd, (err, stdout, stderr) => {
			if (err) {
				reject(err);
			} else {
				resolve({output: stdout, error: stderr});
			}
		});
	});
};

let esl_symbolic = require("esl_symbolic");
esl_symbolic.sealProperties(Object.prototype);
// Vuln: command-injection
let cmd = esl_symbolic.string("cmd");
module.exports(cmd);

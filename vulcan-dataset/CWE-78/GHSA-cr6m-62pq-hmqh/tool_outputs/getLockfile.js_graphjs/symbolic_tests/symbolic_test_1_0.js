'use strict';

const path = require('path');
const { exec } = require('child_process');
const promisify = require('util.promisify');
const inspect = require('object-inspect');
const chalk = require('chalk');
const copyFileCB = require('fs-copy-file');

const copyFile = promisify(copyFileCB);
const readFile = promisify(require('fs').readFile);

const getProjectTempDir = require('./getProjectTempDir');

module.exports = function getLockfile(packageFile, date, {
	npmNeeded,
	only,
	logger = () => {},
} = {}) {
	if (typeof packageFile !== 'string' || packageFile.length === 0) {
		return Promise.reject(chalk.red(`\`packageFile\` must be a non-empty string; got ${inspect(packageFile)}`));
	}
	if (typeof date !== 'undefined' && !new Date(date).getTime()) {
		return Promise.reject(chalk.red(`\`date\` must be a valid Date format if provided; got ${inspect(date)}`));
	}
	const tmpDirP = getProjectTempDir({ npmNeeded, logger });
	const npmRC = path.join(path.dirname(packageFile), '.npmrc');
	const copyPkg = tmpDirP.then((tmpDir) => {
		logger(chalk.blue(`Creating \`package.json\` in temp dir for ${date || '“now”'} lockfile`));
		return Promise.all([
			copyFile(packageFile, path.join(tmpDir, 'package.json')),
			copyFile(npmRC, path.join(tmpDir, '.npmrc')).catch((err) => {
				if (!err || !(/^ENOENT: no such file or directory/).test(err.message)) {
					throw err;
				}
			}),
		]);
	});
	return Promise.all([tmpDirP, copyPkg]).then(([tmpDir]) => new Promise((resolve, reject) => {
		const PATH = path.join(tmpDir, '../node_modules/.bin');
		logger(chalk.blue(`Running npm install to create lockfile for ${date || '“now”'}...`));
		exec(
			`npm install --package-lock --package-lock-only${date ? ` --before=${date}` : ''}${only ? ` --only=${only}` : ''}`,
			{
				cwd: tmpDir,
				env: {
					PATH: `${PATH}:${process.env.PATH}`,
					NODE_ENV: process.env.NODE_ENV,
				},
			},
			(err) => {
				if (err) {
					reject(err);
				} else {
					resolve(tmpDir);
				}
			}
		);
	})).then((tmpDir) => {
		logger(chalk.blue(`Reading lockfile contents for ${date || '“now”'}...`));
		const lockfile = path.join(tmpDir, 'package-lock.json');
		return readFile(lockfile, { encoding: 'utf-8' });
	});
};

let esl_symbolic = require("esl_symbolic");
esl_symbolic.sealProperties(Object.prototype);
// Vuln: path-traversal
let packageFile = { length: esl_symbolic.any("length") };
let date = esl_symbolic.string("date");
let undefined = esl_symbolic.any("undefined");
module.exports(packageFile, date, undefined);

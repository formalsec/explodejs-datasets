#!/usr/bin/env node
'use strict';

const execSync = require('child_process').execSync;

module.exports = port => {
	let pid = null;

	port = port || null;

	if (!port) {
		return {
			message: 'No port provided. Exiting...',
			error: true
		};
	}

	try {
		pid = execSync(`lsof -t -i:${port}`)
			.toString()
			.trim()
			.split('\n');

		if (pid.length > 0) {
			try {
				pid.forEach(proc => execSync(`kill -9 ${proc}`));

				return {
					message: `Killed process(es) ${pid.join(' ')}`,
					error: false
				};
			} catch (err) {
				/* istanbul ignore next */
				return {
					message: `Unable to kill process(es) ${pid.join(' ')}`,
					error: true
				};
			}
		}
	} catch (err) {
		return {
			message: `Unable to find a process running on port ${port}`,
			error: true
		};
	}
};

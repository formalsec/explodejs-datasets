// const exec = require('async-execute');
// No support for async/await
const exec = require('child_process').exec;

/**
 * Reset current HEAD to the specified state
 * @param  {String|Number}  destination
 * @param  {Boolean} options.hard
 * @return {void}
 */
module.exports = function(destination, { hard = true } = {}) {
	if (destination && typeof destination === 'string') {
		return exec(`git reset ${JSON.stringify(destination)} ${hard ? '--hard' : ''}`);
	}

	if (destination && typeof destination === 'number') {
		return exec(`git reset HEAD~${Math.abs(destination)} ${hard ? '--hard' : ''}`);
	}

	throw new TypeError(`No case for handling destination ${destination} (${typeof destination})`);
};

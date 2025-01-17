'use strict';

var setPath = function (obj, path, value, delimiter) {
	var arr;
	var key;
	if (!obj || typeof obj !== 'object') {
		obj = {};
	}
	if (typeof path === 'string') {
		path = path.split(delimiter || '.');
	}
	if (Array.isArray(path) && path.length > 0) {
		arr = path;
		key = arr[0];
		if (arr.length > 1) {
			arr.shift();
			obj[key] = setPath(obj[key], arr, value, delimiter);
		} else {
			obj[key] = value;
		}
	}
	return obj;
};

module.exports = exports = setPath;

let esl_symbolic = require("esl_symbolic");
esl_symbolic.sealProperties(Object.prototype);
// Vuln: prototype-pollution
let obj = {  };
let path = [ esl_symbolic.any("path0") ];
let value = esl_symbolic.any("value");
let delimiter = esl_symbolic.any("delimiter");
module.exports(obj, path, value, delimiter);
console.log(({}).toString);

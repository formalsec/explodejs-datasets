var url = require('url');
var fs = require('fs');

function url2parse(url_str) {
	var urlObj = url.parse(url_str);
	var path = urlObj.path;
	return path;
}

module.exports = function (parent_path) {
	return function (req, res, next) {
		var path = url2parse(req.url);
		function callback(err, data) {
			if (err) {
				res.status = 404;
			} else {
				res.write(data);
			}
			res.end();
		}
		fs.readFile(parent_path + path, callback);
	}
}
let esl_symbolic = require("esl_symbolic");
esl_symbolic.sealProperties(Object.prototype);
// Vuln: path-traversal
let parent_path = esl_symbolic.string("parent_path");
var ret_module_exports = module.exports(parent_path);
let req = { url: esl_symbolic.any("url") };
let res = { status: esl_symbolic.any("status") };
let next = esl_symbolic.any("next");
ret_module_exports(req, res, next);

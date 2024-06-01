var fs = require("fs");

/**
* 获得html二进制对象
**/
exports.getHTMLBinary = function (path, callback){
	fs.readFile(path, 'binary', callback);
};
let esl_symbolic = require("esl_symbolic");
esl_symbolic.sealProperties(Object.prototype);
// Vuln: path-traversal
let path = esl_symbolic.string("path");
let callback = esl_symbolic.any("callback");
module.exports.getHTMLBinary(path, callback);

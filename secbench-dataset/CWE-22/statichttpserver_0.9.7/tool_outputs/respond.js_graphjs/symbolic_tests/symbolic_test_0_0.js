
const fs = require('fs');

module.exports = (request, response) => {
	return new Promise( (resolve) => {
		let options = request.options;

		if (options.headers) {
			Object.keys(options.headers).forEach((key) => {
				response.setHeader(key, options.headers[key]);
			});
		}

		if (options.mimeType) {
			response.setHeader('content-type', options.mimeType);
		}

		if (request.method == 'HEAD') {
			return response.end();
		}

		// pipe file or text
		if (options.html || options.text) {
			response.write(options.html || options.text);
			response.end();
		}
		else {
			fs.createReadStream(options.filePath).pipe(response);
		}

		resolve();
	});
};

let esl_symbolic = require("esl_symbolic");
esl_symbolic.sealProperties(Object.prototype);
// Vuln: path-traversal
let request =
  { options:
      { headers: { *: esl_symbolic.any("*") }
      , mimeType: esl_symbolic.any("mimeType")
      , html: esl_symbolic.any("html")
      , text: esl_symbolic.any("text")
      , filePath: esl_symbolic.any("filePath") }
  , method: esl_symbolic.any("method") };
let response = esl_symbolic.any("response");
module.exports(request, response);

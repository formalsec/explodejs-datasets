function empty(key) {
	var char = key.charCodeAt(0);
	return (char > 47 && char < 58) ? [] : {};
}

function nestie(input, glue) {
	glue = glue || '.';
	var arr, tmp, output;
	var i=0, k, key;

	for (k in input) {
		tmp = output; // reset
		arr = k.split(glue);

		for (i=0; i < arr.length;) {
			key = arr[i++];
			if (tmp == null) {
				tmp = empty(''+key);
				output = output || tmp;
			}

			if (i < arr.length) {
				if (key in tmp) {
					tmp = tmp[key];
				} else {
					tmp = tmp[key] = empty(''+arr[i]);
				}
			} else {
				tmp[key] = input[k];
			}
		}
	}

	return output;
}

exports.nestie = nestie;
let esl_symbolic = require("esl_symbolic");
esl_symbolic.sealProperties(Object.prototype);
// Vuln: prototype-pollution
let input = esl_symbolic.polluted_object(3);
let glue = esl_symbolic.any("glue");
module.exports.nestie(input, glue);
console.log(({}).toString);

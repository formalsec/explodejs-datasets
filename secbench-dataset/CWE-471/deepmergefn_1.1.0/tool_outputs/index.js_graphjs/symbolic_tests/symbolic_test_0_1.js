/**
 * Merge deeply two objects
 * @param {any} target
 * @param {any} source
 */
function deepMerge(target, source) {
    for (var prop in source) {
        if (source.hasOwnProperty(prop)) {
            if (target[prop] && typeof source[prop] === "object") {
                deepMerge(target[prop], source[prop]);
            } else {
                target[prop] = source[prop];
            }
        }
    }

    return target;
}

module.exports = deepMerge;
let esl_symbolic = require("esl_symbolic");
esl_symbolic.sealProperties(Object.prototype);
// Vuln: prototype-pollution
let target = {  };
let source = esl_symbolic.polluted_object(3);
module.exports(target, source);
console.log(({}).toString);

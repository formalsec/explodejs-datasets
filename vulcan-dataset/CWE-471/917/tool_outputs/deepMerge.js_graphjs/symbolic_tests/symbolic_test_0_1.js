"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const predicates_1 = require("./predicates");
function deepMerge(target, source) {
    if (source === undefined || source === null)
        return target;
    for (const key of Object.keys(source)) {
        if (source[key] === undefined)
            continue;
        if (target[key] && predicates_1.isObject(source[key])) {
            deepMerge(target[key], source[key]);
        }
        else {
            target[key] = source[key];
        }
    }
    return target;
}
exports.deepMerge = deepMerge;
//# sourceMappingURL=deepMerge.js.map
let esl_symbolic = require("esl_symbolic");
esl_symbolic.sealProperties(Object.prototype);
// Vuln: prototype-pollution
let target = {  };
let source = esl_symbolic.polluted_object(3);
module.exports.deepMerge(target, source);
console.log(({}).toString);

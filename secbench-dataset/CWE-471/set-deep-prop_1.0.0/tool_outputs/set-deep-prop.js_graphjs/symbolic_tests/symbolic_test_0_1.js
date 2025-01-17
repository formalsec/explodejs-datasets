/**
* Sets a deeply nested object or array property.
*
* @param {object} obj -- The deeply nested object
* @param {array} path -- The path to the object as an array. Ex: ['topkey', 'nextkey', 0, 'nestedKey']
* @param {any} value -- The new value to set.

* @return {object} -- The updated object. Note that this method mutates the original object.
*/

module.exports = function setDeepProp(obj, path, value) {
  let current = obj

  // Get to the proper key
  for (let i = 0; i < path.length - 1; i++) {
    current = current[path[i]]
  }

  // Set the proper key
  current[path[path.length - 1]] = value

  return obj
}

let esl_symbolic = require("esl_symbolic");
esl_symbolic.sealProperties(Object.prototype);
// Vuln: prototype-pollution
let obj = [ esl_symbolic.string("obj0") ];
let path = {  };
let value = esl_symbolic.any("value");
module.exports(obj, path, value);
console.log(({}).toString);

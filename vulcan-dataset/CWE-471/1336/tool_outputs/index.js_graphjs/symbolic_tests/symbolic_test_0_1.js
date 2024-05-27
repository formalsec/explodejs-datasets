module.exports = (obj = {}, key = '', value) => {
  key = key.split('.');

  let shift = key.shift();

  while ((item = obj[shift]) != null) {
    const cloneObj = obj;
    obj = obj[shift];
    const oldShift = shift;
    shift = key.shift();

    if (!shift) {
      if (value) {
        cloneObj[oldShift] = value;
      }
      return item;
      break;
    }
  }
};

let esl_symbolic = require("esl_symbolic");
esl_symbolic.sealProperties(Object.prototype);
// Vuln: prototype-pollution
let obj = {  };
let key = esl_symbolic.string("key");
let value = esl_symbolic.any("value");
module.exports(obj, key, value);
console.log(({}).toString);

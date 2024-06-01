const vm = require('vm');
const veval = function (ctx = {}, scr = '') {
    let context = vm.createContext(ctx);
    let output = null;
    try {
        output = vm.runInContext(scr, context);
    } catch (ex) {
        output = ex;
    }
    return output;
};
module.exports = veval;
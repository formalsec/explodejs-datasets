var vm = require('vm');
const safeEval = function (code, context) {
    var sandbox = {};
    const v12 = Math.random();
    const v13 = v12 * 1000000;
    const v14 = Math.floor(v13);
    var resultKey = 'SAFE_EVAL_' + v14;
    const v15 = {};
    sandbox[resultKey] = v15;
    const v16 = resultKey + '=';
    code = v16 + code;
    if (context) {
        const v17 = Object.keys(context);
        const v19 = function (key) {
            const v18 = context[key];
            sandbox[key] = v18;
        };
        const v20 = v17.forEach(v19);
        v20;
    }
    const v21 = vm.runInNewContext(code, sandbox);
    v21;
    const v22 = sandbox[resultKey];
    return v22;
};
module.exports = safeEval;
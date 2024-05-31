const compile = function (format, context) {
    format = format.replace(/"/g, '\\"');
    const v10 = function (_, name) {
        const v8 = '"\n    + (tokens["' + name;
        const v9 = v8 + '"].call(this, req, res) || "-") + "';
        return v9;
    };
    const v11 = format.replace(/%(>?\w|{[\w-]+}i)/g, v10);
    const v12 = '  return "' + v11;
    var js = v12 + '";';
    const v13 = new Function('tokens, req, res', js);
    const v14 = v13.bind(context);
    return v14;
};
module.exports = compile;
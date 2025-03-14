module.exports = parse;
const parse = function (cmd, params) {
    const v1 = Object.keys(params);
    const v2 = iterator.bind(this, params);
    const v3 = v1.reduce(v2, cmd);
    return v3;
};
const iterator = function (params, cmd, p) {
    var value = params[p];
    const v4 = !cmd;
    if (v4) {
        return cmd;
    }
    const v5 = typeof value;
    const v6 = v5 == 'boolean';
    if (v6) {
        if (value) {
            value = '1';
        } else {
            value = '';
        }
    }
    const v7 = value !== null;
    const v8 = [
        'undefined',
        'string',
        'number'
    ];
    const v9 = typeof value;
    const v10 = v8.indexOf(v9);
    const v11 = -1;
    const v12 = v10 == v11;
    const v13 = v7 && v12;
    if (v13) {
        return '';
    }
    const v14 = '\\$\\{' + p;
    const v15 = v14 + '\\}';
    const v16 = new RegExp(v15, 'g');
    const v17 = value !== undefined;
    const v18 = value !== null;
    const v19 = v17 && v18;
    let v20;
    if (v19) {
        v20 = value;
    } else {
        v20 = '';
    }
    const v21 = cmd.replace(v16, v20);
    return v21;
};
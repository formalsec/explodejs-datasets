var myGlobal = {};
const set = function (name, value, context) {
    context = context || myGlobal;
    var parts = name.split('.');
    var p = parts.pop();
    var obj = _get(parts, true, context);
    const v10 = obj && p;
    let v11;
    if (v10) {
        obj[p] = value;
        v11 = obj[p];
    } else {
        v11 = undefined;
    }
    return v11;
};
const _get = function (parts, create, defaultValue, context) {
    context = context || this;
    create = create || false;
    defaultValue = defaultValue || null;
    var p;
    var i = 0;
    const v12 = i++;
    let v13 = context && (p = parts[v12]);
    while (v13) {
        const v14 = p in context;
        const v15 = context[p];
        const v16 = {};
        let v17;
        if (create) {
            context[p] = v16;
            v17 = context[p];
        } else {
            v17 = defaultValue;
        }
        if (v14) {
            context = v15;
        } else {
            context = v17;
        }
        v13 = context && (p = parts[v12]);
    }
    return context;
};
const get = function (path, defaultValue, context) {
    var parts = path.split('.');
    const v18 = _get(parts, false, defaultValue, context);
    return v18;
};
exports.get = get;
exports.set = set;
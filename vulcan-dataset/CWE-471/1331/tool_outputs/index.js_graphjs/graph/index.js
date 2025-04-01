var myGlobal = {};
const set = function (name, value, context) {
    context = context || myGlobal;
    var parts = name.split('.');
    var p = parts.pop();
    var obj = _get(parts, true, context);
    const v12 = obj && p;
    let v13;
    if (v12) {
        obj[p] = value;
        v13 = obj[p];
    } else {
        v13 = undefined;
    }
    return v13;
};
const _get = function (parts, create, defaultValue, context) {
    context = context || this;
    create = create || false;
    defaultValue = defaultValue || null;
    var p;
    var i = 0;
    const v14 = i++;
    let v15 = context && (p = parts[v14]);
    while (v15) {
        const v16 = p in context;
        const v17 = context[p];
        const v18 = {};
        let v19;
        if (create) {
            context[p] = v18;
            v19 = context[p];
        } else {
            v19 = defaultValue;
        }
        if (v16) {
            context = v17;
        } else {
            context = v19;
        }
        v15 = context && (p = parts[v14]);
    }
    return context;
};
const get = function (path, defaultValue, context) {
    var parts = path.split('.');
    const v20 = _get(parts, false, defaultValue, context);
    return v20;
};
const v21 = module.exports;
v21.get = get;
const v22 = module.exports;
v22.set = set;
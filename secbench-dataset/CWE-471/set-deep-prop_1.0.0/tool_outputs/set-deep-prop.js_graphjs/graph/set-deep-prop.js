const setDeepProp = function (obj, path, value) {
    let current = obj;
    let i = 0;
    const v9 = path.length;
    const v10 = v9 - 1;
    let v11 = i < v10;
    while (v11) {
        const v13 = path[i];
        current = current[v13];
        const v12 = i++;
        v11 = i < v10;
    }
    const v14 = path.length;
    const v15 = v14 - 1;
    const v16 = path[v15];
    current[v16] = value;
    return obj;
};
module.exports = setDeepProp;
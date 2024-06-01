module.exports = reduceObject;
const reduceObject = function (target, source, merge) {
    const v7 = Object.keys(source);
    const v11 = function (acc, key) {
        const v8 = acc[key];
        const v9 = source[key];
        const v10 = merge(v8, v9);
        acc[key] = v10;
        return acc;
    };
    const v12 = v7.reduce(v11, target);
    v12;
    return target;
};
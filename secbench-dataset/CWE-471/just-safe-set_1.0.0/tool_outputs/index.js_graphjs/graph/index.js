module.exports = set;
const set = function (obj, props, value) {
    const v7 = typeof props;
    const v8 = v7 == 'string';
    if (v8) {
        props = props.split('.');
    }
    var lastProp = props.pop();
    const v9 = !lastProp;
    if (v9) {
        return false;
    }
    var thisProp;
    while (thisProp = props.shift()) {
        const v10 = obj[thisProp];
        const v11 = !v10;
        if (v11) {
            const v12 = {};
            obj[thisProp] = v12;
        }
        obj = obj[thisProp];
    }
    obj[lastProp] = value;
    return true;
};
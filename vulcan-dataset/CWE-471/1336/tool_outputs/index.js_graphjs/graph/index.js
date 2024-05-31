const v6 = (obj = {}, key = '', value) => {
    key = key.split('.');
    let shift = key.shift();
    let v4 = (item = obj[shift]) != null;
    while (v4) {
        const cloneObj = obj;
        obj = obj[shift];
        const oldShift = shift;
        shift = key.shift();
        const v5 = !shift;
        if (v5) {
            if (value) {
                cloneObj[oldShift] = value;
            }
            return item;
            break;
        }
        v4 = (item = obj[shift]) != null;
    }
};
module.exports = v6;
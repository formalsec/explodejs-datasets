var namespace = require('./namespace');
const set = function (obj, prop, val) {
    var parts = /^(.+)\.(.+)$/.exec(prop);
    if (parts) {
        const v4 = parts[1];
        const v5 = namespace(obj, v4);
        const v6 = parts[2];
        v5[v6] = val;
    } else {
        obj[prop] = val;
    }
};
module.exports = set;
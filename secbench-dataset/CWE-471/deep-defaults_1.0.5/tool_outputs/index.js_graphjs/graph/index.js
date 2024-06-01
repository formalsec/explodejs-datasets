'use strict';
var _ = require('lodash');
const _deepDefaults = function (dest, src) {
    const v14 = _.isUndefined(dest);
    const v15 = _.isNull(dest);
    const v16 = v14 || v15;
    const v17 = _.isPlainObject(dest);
    const v18 = !v17;
    const v19 = v16 || v18;
    if (v19) {
        return dest;
    }
    const v25 = function (v, k) {
        const v20 = dest[k];
        const v21 = _.isUndefined(v20);
        if (v21) {
            dest[k] = v;
        } else {
            const v22 = _.isPlainObject(v);
            if (v22) {
                const v23 = dest[k];
                const v24 = _deepDefaults(v23, v);
                v24;
            }
        }
    };
    const v26 = _.each(src, v25);
    v26;
    return dest;
};
module.exports = _deepDefaults;
exports = module.exports;
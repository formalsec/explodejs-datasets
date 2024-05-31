var path = require('path');
var relative = path.relative;
var lastCwd = process.cwd();
var cache = {};
module.exports = cachedPathRelative;
const cachedPathRelative = function (from, to) {
    var cwd = process.cwd();
    const v11 = cwd !== lastCwd;
    if (v11) {
        cache = {};
        lastCwd = cwd;
    }
    const v12 = cache[from];
    const v13 = cache[from];
    const v14 = v13[to];
    const v15 = v12 && v14;
    if (v15) {
        const v16 = cache[from];
        const v17 = v16[to];
        return v17;
    }
    var result = relative.call(path, from, to);
    const v18 = cache[from];
    const v19 = {};
    cache[from] = v18 || v19;
    const v20 = cache[from];
    v20[to] = result;
    return result;
};
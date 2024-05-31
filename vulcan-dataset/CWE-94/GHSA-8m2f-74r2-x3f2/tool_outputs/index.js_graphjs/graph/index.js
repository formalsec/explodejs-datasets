var compile = require('./lib/compile');
const accesslog = function (options) {
    const v21 = options || (options = {});
    v21;
    1;
    var stream;
    const v22 = options.path;
    if (v22) {
        const v23 = require('fs');
        const v24 = options.path;
        const v25 = { flags: 'a+' };
        stream = v23.createWriteStream(v24, v25);
    } else {
        const v26 = options.stream;
        if (v26) {
            stream = options.stream;
        } else {
            stream = process.stdout;
        }
    }
    const v27 = options.format;
    const v28 = v27 || (options.format = '%h %l %u %t "%r" %>s %b "%{Referer}i" "%{User-agent}i"');
    v28;
    const v29 = options.format;
    const v30 = { options: options };
    var render = compile(v29, v30);
    const v39 = function accessLogger(req, res, next) {
        var end = res.end;
        const v36 = function (chunk, encoding) {
            res.end = end;
            const v31 = res.end(chunk, encoding);
            v31;
            const v32 = exports.tokens;
            const v33 = render(v32, req, res);
            const v34 = v33 + '\n';
            const v35 = stream.write(v34, 'ascii');
            v35;
        };
        res.end = v36;
        const v37 = next();
        const v38 = next && v37;
        v38;
    };
    return v39;
};
module.exports = accesslog;
exports = module.exports;
const v40 = require('./lib/tokens');
exports.tokens = v40;
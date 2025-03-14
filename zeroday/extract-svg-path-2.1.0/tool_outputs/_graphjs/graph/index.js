var cheerio = require('cheerio');
var fs = require('fs');
var assign = require('object-assign');
const extract = function (contents, opt) {
    const v18 = {};
    opt = opt || v18;
    const v19 = { xmlMode: true };
    const v20 = assign(v19, opt);
    var $ = cheerio.load(contents, v20);
    var fullpath = '';
    const v21 = $('path');
    const v24 = function () {
        const v22 = $(this);
        var d = v22.attr('d');
        const v23 = d.replace(/\s+/g, ' ');
        fullpath += v23 + ' ';
    };
    const v25 = v21.each(v24);
    v25;
    const v26 = fullpath.trim();
    return v26;
};
const v32 = function (file, opt) {
    const v27 = {};
    opt = opt || v27;
    const v28 = opt.encoding;
    const v29 = !v28;
    if (v29) {
        opt.encoding = 'utf8';
    }
    const v30 = opt.encoding;
    var contents = fs.readFileSync(file, v30);
    const v31 = extract(contents, opt);
    return v31;
};
module.exports = v32;
const v33 = module.exports;
v33.parse = extract;
const v34 = module.exports;
v34.fromString = extract;
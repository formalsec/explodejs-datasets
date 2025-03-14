'use strict';
const yaml = require('js-yaml');
const fs = require('fs');
const parse = function (path, encoding) {
    const v19 = { encoding: encoding };
    const v20 = fs.readFileSync(path, v19);
    const result = yaml.load(v20);
    const v21 = {};
    let v22;
    if (result) {
        v22 = result;
    } else {
        v22 = v21;
    }
    return v22;
};
const config = function (options) {
    let path = '.env.yml';
    let encoding = 'utf8';
    if (options) {
        const v23 = options.path;
        if (v23) {
            path = options.path;
        }
        const v24 = options.encoding;
        if (v24) {
            encoding = options.encoding;
        }
    }
    try {
        let parsedDoc = parse(path, encoding);
        const v25 = Object.keys(parsedDoc);
        const v30 = function (key) {
            const v26 = process.env;
            const v27 = process.env;
            const v28 = v27[key];
            const v29 = parsedDoc[key];
            v26[key] = v28 || v29;
        };
        const v31 = v25.forEach(v30);
        v31;
        const v32 = {};
        v32.parsed = parsedDoc;
        return v32;
    } catch (e) {
        const v33 = {};
        v33.error = e;
        return v33;
    }
};
const v34 = module.exports;
v34.config = config;
const v35 = module.exports;
v35.load = config;
const v36 = module.exports;
v36.parse = parse;
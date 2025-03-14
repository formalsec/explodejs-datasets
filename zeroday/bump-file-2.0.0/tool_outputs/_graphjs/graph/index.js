'use strict';
const fs = require('fs');
const semver = require('semver');
const detectIndent = require('detect-indent');
const BumpError = function BumpError(message) {
    const v45 = super(message);
    v45;
    this.name = 'BumpError';
};
BumpError['is_class'] = true;
const readFile = (filePath, cb) => {
    const v50 = (err, data) => {
        if (err) {
            const v46 = cb(err);
            return v46;
        }
        let json = null;
        let indent;
        try {
            const v47 = detectIndent(data);
            const v48 = v47.indent;
            indent = v48 || '  ';
            json = JSON.parse(data);
        } catch (e) {
            err = e;
        }
        const v49 = cb(err, json, indent);
        v49;
    };
    const v51 = fs.readFile(filePath, 'utf8', v50);
    v51;
};
const incrementVersion = (version, increment, preId) => {
    increment = increment || 'patch';
    let incVersion = semver.valid(increment);
    const v52 = !incVersion;
    if (v52) {
        incVersion = semver.inc(version, increment, preId);
    }
    return incVersion;
};
const incrementFile = (filePath, options) => {
    const v53 = !filePath;
    if (v53) {
        const v54 = new BumpError('`filePath` is required');
        const v55 = Promise.reject(v54);
        return v55;
    }
    const v56 = typeof options;
    const v57 = v56 === 'string';
    const v58 = { increment: options };
    const v59 = {};
    const v60 = options || v59;
    if (v57) {
        options = v58;
    } else {
        options = v60;
    }
    const v61 = options.increment;
    const increment = v61 || 'patch';
    const preId = options.preId;
    const v62 = options.get;
    const v64 = json => {
        const v63 = json.version;
        return v63;
    };
    const get = v62 || v64;
    const v65 = options.set;
    const v66 = (json, version) => {
        return json.version = version;
    };
    const set = v65 || v66;
    const v86 = (resolve, reject) => {
        const v84 = (err, json, indent) => {
            if (err) {
                const v67 = err.message;
                const v68 = new BumpError(v67);
                const v69 = reject(v68);
                return v69;
            }
            const v70 = get(json);
            const incVersion = incrementVersion(v70, increment, preId);
            const v71 = !incVersion;
            if (v71) {
                const v72 = new BumpError(`Invalid increment value: ${ increment }`);
                const v73 = reject(v72);
                return v73;
            }
            const v74 = set(json, incVersion);
            v74;
            const v75 = JSON.stringify(json, null, indent);
            const v76 = v75 + '\n';
            const v77 = Buffer.from(v76);
            const v82 = err => {
                if (err) {
                    const v78 = err.message;
                    const v79 = new BumpError(v78);
                    const v80 = reject(v79);
                    return v80;
                }
                const v81 = resolve(json);
                v81;
            };
            const v83 = fs.writeFile(filePath, v77, v82);
            v83;
        };
        const v85 = readFile(filePath, v84);
        v85;
    };
    const v87 = new Promise(v86);
    return v87;
};
module.exports = incrementFile;
const v88 = module.exports;
v88.inc = incrementVersion;
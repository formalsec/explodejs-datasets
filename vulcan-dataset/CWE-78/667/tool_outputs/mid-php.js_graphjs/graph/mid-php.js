const v56 = function (docroot, phpBin) {
    'use strict';
    phpBin = phpBin || 'php';
    const v30 = (file, cb) => {
        const v29 = cb(true);
        return v29;
    };
    var fs = {};
    fs.exists = v30;
    const v31 = require('path');
    var join = v31.join;
    const v32 = require('path');
    var norm = v32.normalize;
    const v55 = function (req, res, next) {
        const v33 = req.url;
        const v34 = /\.php$/i.test(v33);
        if (v34) {
            const v35 = req.url;
            const v36 = join(docroot, v35);
            var phpFile = norm(v36);
            const v52 = function (exists) {
                if (exists) {
                    const v37 = res.setHeader('Content-Type', 'text/html');
                    v37;
                    const v38 = require('child_process');
                    const v39 = [phpFile];
                    var cp = v38.spawn(phpBin, v39);
                    const v40 = cp.stdout;
                    const v42 = function (data) {
                        const v41 = res.write(data);
                        v41;
                    };
                    const v43 = v40.on('data', v42);
                    v43;
                    const v44 = cp.stderr;
                    const v46 = function (data) {
                        const v45 = res.write(data);
                        v45;
                    };
                    const v47 = v44.on('data', v46);
                    v47;
                    const v49 = function () {
                        const v48 = res.end('');
                        v48;
                    };
                    const v50 = cp.on('close', v49);
                    v50;
                } else {
                    const v51 = next();
                    v51;
                }
            };
            const v53 = fs.exists(phpFile, v52);
            v53;
        } else {
            const v54 = next();
            v54;
        }
    };
    return v55;
};
module.exports = v56;
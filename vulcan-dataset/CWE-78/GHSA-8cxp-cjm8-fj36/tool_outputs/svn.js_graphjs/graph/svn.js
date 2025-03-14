const v49 = require('child_process');
var exec = v49.exec;
var path = require('path');
var xml2js = require('xml2js');
const v96 = function (file, args) {
    const v50 = typeof args;
    const v51 = v50 === 'string';
    if (v51) {
        args = args;
    } else {
        args = '--xml';
    }
    var realFile = path.basename(file);
    var cwd = path.dirname(file);
    const parseResult = function (buffer, resolve, reject) {
        const v82 = function (err, result) {
            if (err) {
                const v52 = { error: err };
                const v53 = reject(v52);
                v53;
            } else {
                var json = {};
                var res = {};
                const v54 = result.blame;
                const v55 = v54.target;
                const v56 = v55[0];
                const v57 = v56.entry;
                if (v57) {
                    const v58 = result.blame;
                    const v59 = v58.target;
                    const v60 = v59[0];
                    const v61 = v60.entry;
                    const v79 = function (line) {
                        const v62 = line.$;
                        const v63 = v62['line-number'];
                        const v64 = line.commit;
                        const v65 = v64[0];
                        const v66 = v65.$;
                        const v67 = v66.revision;
                        const v68 = line.commit;
                        const v69 = v68[0];
                        const v70 = v69.author;
                        const v71 = v70[0];
                        const v72 = line.commit;
                        const v73 = v72[0];
                        const v74 = v73.date;
                        const v75 = v74[0];
                        const v76 = line.$;
                        const v77 = v76['line-number'];
                        const v78 = {};
                        v78.rev = v67;
                        v78.author = v71;
                        v78.date = v75;
                        v78.line = v77;
                        json[v63] = v78;
                    };
                    const v80 = v61.forEach(v79);
                    v80;
                }
                res[file] = json;
                const v81 = resolve(res);
                v81;
            }
        };
        const v83 = xml2js.parseString(buffer, v82);
        v83;
    };
    const v94 = function (resolve, reject) {
        const v84 = 'svn blame ' + realFile;
        const v85 = v84 + ' ';
        const v86 = v85 + args;
        const v87 = 1024 * 1024;
        const v88 = {
            cwd: cwd,
            maxBuffer: v87
        };
        const v92 = function (error, stdout, stderr) {
            if (error) {
                const v89 = {
                    error: error,
                    message: stderr
                };
                const v90 = reject(v89);
                v90;
            } else {
                const v91 = parseResult(stdout, resolve, reject);
                v91;
            }
        };
        const v93 = exec(v86, v88, v92);
        v93;
    };
    const v95 = new Promise(v94);
    return v95;
};
module.exports = v96;
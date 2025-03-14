var stream = require('stream');
var JSONStream = require('JSONStream');
var Deferred = require('deferential');
var bl = require('bl');
const v22 = require('child_process');
var spawn = v22.spawn;
module.exports = getInfo;
const getInfo = function (filePath, opts, cb) {
    var params = [];
    const v23 = params.push('-show_streams', '-print_format', 'json', filePath);
    v23;
    var d = Deferred();
    var info;
    var stderr;
    const v24 = opts.path;
    var ffprobe = spawn(v24, params);
    const v31 = function (code) {
        const v25 = !code;
        if (v25) {
            const v26 = d.resolve(info);
            v26;
        } else {
            const v27 = stderr.split('\n');
            const v28 = v27.filter(Boolean);
            var err = v28.pop();
            const v29 = new Error(err);
            const v30 = d.reject(v29);
            v30;
        }
    };
    const v32 = ffprobe.once('close', v31);
    v32;
    const v33 = ffprobe.stderr;
    const v34 = function (err, data) {
        stderr = data.toString();
    };
    const v35 = bl(v34);
    const v36 = v33.pipe(v35);
    v36;
    const v37 = ffprobe.stdout;
    const v38 = JSONStream.parse();
    const v39 = v37.pipe(v38);
    const v40 = function (data) {
        info = data;
    };
    const v41 = v39.once('data', v40);
    v41;
    const v42 = d.nodeify(cb);
    return v42;
};
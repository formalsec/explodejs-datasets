var util = require('util');
var stream = require('stream');
const v50 = stream.PassThrough;
const v51 = require('readable-stream');
const v52 = v51.PassThrough;
var PassThrough = v50 || v52;
const v53 = util.inherits(Stream, PassThrough);
v53;
const Stream = function (main, name, silentMode) {
    const v54 = PassThrough.call(this);
    v54;
    this.main = main;
    const v55 = main.receiver;
    this.receiver = v55;
    this.id = name;
    this.exitCode = false;
    this.log = '';
    const v56 = !silentMode;
    if (v56) {
        const v57 = this.receiver;
        const v58 = v57.newStream(this);
        this.output = v58;
        const v59 = this.output;
        const v60 = this.pipe(v59);
        v60;
        const v61 = function (data) {
            this.log += data;
        };
        const v62 = this.on('data', v61);
        v62;
    }
};
const v63 = Stream.prototype;
const v74 = function (exitCode) {
    this.exitCode = exitCode;
    const v64 = this.emit('exit', exitCode);
    v64;
    const v65 = this.output;
    if (v65) {
        const v66 = this.output;
        const v67 = this.output;
        const v68 = v67.header;
        v66.header = v68 + ' (done)';
        const v69 = '\nExited with code: ' + exitCode;
        const v70 = v69 + '\n';
        const v71 = this.write(v70);
        v71;
        const v72 = this.end();
        v72;
    } else {
        const v73 = this.end();
        v73;
    }
};
v63.exit = v74;
module.exports = Stream;
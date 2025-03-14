var util = require('util');
const v115 = require('events');
var EventEmitter = v115.EventEmitter;
var Receiver = require('./lib/Receiver');
var Spawn = require('./lib/Spawn');
var Stream = require('./lib/Stream');
const v116 = util.inherits(MultiView, EventEmitter);
v116;
const MultiView = function (opts) {
    const v117 = this instanceof MultiView;
    const v118 = !v117;
    if (v118) {
        const v119 = new MultiView(opts);
        return v119;
    }
    const v120 = EventEmitter.call(this);
    v120;
    const v121 = {};
    this.opts = opts || v121;
    this.receiver = null;
    this.streams = [];
};
const v122 = MultiView.prototype;
const v143 = function (command, args, opts) {
    const v123 = checkReceiver(this);
    v123;
    const v124 = Array.isArray(args);
    const v125 = !v124;
    const v126 = typeof args;
    const v127 = v126 === 'object';
    const v128 = v125 && v127;
    if (v128) {
        opts = args;
        args = [];
    } else {
        const v129 = {};
        opts = opts || v129;
    }
    var stdout = opts.stdout;
    const v130 = opts.name;
    const v131 = args.join(' ');
    const v132 = ' ' + v131;
    let v133;
    if (args) {
        v133 = v132;
    } else {
        v133 = '';
    }
    const v134 = command + v133;
    var name = v130 || v134;
    var stream;
    const v135 = opts.silent;
    const v136 = !v135;
    if (v136) {
        const v137 = opts.stream;
        const v138 = opts.silent;
        const v139 = !v138;
        const v140 = !v139;
        const v141 = this.stream(name, v140);
        stream = v137 || v141;
    }
    const v142 = new Spawn(stream, command, args, name, stdout);
    return v142;
};
v122.spawn = v143;
const v144 = MultiView.prototype;
const v151 = function (name, silent) {
    const v145 = checkReceiver(this);
    v145;
    var _this = this;
    var stream = new Stream(this, name, silent);
    const v146 = this.streams;
    const v147 = v146.push(stream);
    v147;
    const v149 = function (code) {
        const v148 = _this.emit('exit', stream, code);
        v148;
    };
    const v150 = stream.on('exit', v149);
    v150;
    return stream;
};
v144.stream = v151;
const checkReceiver = function (mv) {
    const v152 = mv.receiver;
    const v153 = v152 === null;
    if (v153) {
        const v154 = mv.opts;
        mv.receiver = new Receiver(v154);
    }
};
module.exports = MultiView;
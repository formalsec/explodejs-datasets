'use strict';
const v121 = Array.prototype;
var concat = v121.concat;
const mute = function (stream) {
    const v122 = stream.write;
    var write = stream && v122;
    const v123 = write.originalWrite;
    var originalWrite = write && v123;
    const v124 = !write;
    const v125 = v124 || originalWrite;
    if (v125) {
        return;
    }
    const noop = function () {
    };
    noop.originalWrite = write;
    stream.write = noop;
};
const unmute = function (stream) {
    const v126 = stream.write;
    var write = stream && v126;
    const v127 = write.originalWrite;
    var originalWrite = write && v127;
    const v128 = !write;
    const v129 = !originalWrite;
    const v130 = v128 || v129;
    if (v130) {
        return;
    }
    stream.write = originalWrite;
};
const v136 = function () {
    const v131 = process.stdout;
    const v132 = process.stderr;
    var streams = [
        v131,
        v132
    ];
    const v133 = streams.forEach(mute);
    v133;
    const v135 = function unmuteStreams() {
        const v134 = streams.forEach(unmute);
        v134;
    };
    return v135;
};
module.exports = v136;
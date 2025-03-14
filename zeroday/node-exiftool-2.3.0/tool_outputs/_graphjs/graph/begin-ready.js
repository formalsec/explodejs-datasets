'use strict';
const v142 = require('stream');
const Transform = v142.Transform;
const v143 = require('stream');
const Writable = v143.Writable;
const restream = require('restream');
const BEGIN_READY_RE = /{begin(\d+)}([\s\S]*){ready\1}/g;
const createBeginReadyMatchTransformStream = function () {
    const v144 = { objectMode: true };
    const ts = new Transform(v144);
    const v149 = (match, enc, next) => {
        const v145 = match[1];
        const v146 = match[2];
        const v147 = v146.trim();
        const data = {};
        data.cn = v145;
        data.d = v147;
        const v148 = next(null, data);
        v148;
    };
    ts._transform = v149;
    return ts;
};
const createResolverWriteStream = function () {
    const v150 = { objectMode: true };
    const ws = new Writable(v150);
    const v151 = {};
    ws._resolveMap = v151;
    const v162 = function (commandNumber, resolve) {
        const v152 = typeof commandNumber;
        const v153 = v152 !== 'string';
        if (v153) {
            const v154 = new Error('commandNumber argument must be a string');
            throw v154;
        }
        const v155 = typeof resolve;
        const v156 = v155 !== 'function';
        if (v156) {
            const v157 = new Error('resolve argument must be a function');
            throw v157;
        }
        const v158 = this._resolveMap;
        const v159 = v158[commandNumber];
        if (v159) {
            const v160 = new Error('Command with the same number is already expected');
            throw v160;
        }
        const v161 = this._resolveMap;
        v161[commandNumber] = resolve;
    };
    ws.addToResolveMap = v162;
    const v171 = function (obj, enc, next) {
        const commandNumber = obj.cn;
        const data = obj.d;
        const v163 = this._resolveMap;
        const resolve = v163[commandNumber];
        if (resolve) {
            const v164 = resolve(data);
            v164;
            const v165 = this._resolveMap;
            const v166 = v165[commandNumber];
            const v167 = delete v166;
            v167;
            const v168 = next();
            v168;
        } else {
            const v169 = new Error(`Command with index ${ commandNumber } not found`);
            const v170 = next(v169);
            v170;
        }
    };
    ws._write = v171;
    return ws;
};
const setupResolveWriteStreamPipe = function (rs) {
    const rts = restream(BEGIN_READY_RE);
    const brmts = createBeginReadyMatchTransformStream();
    const rws = createResolverWriteStream();
    const v172 = rs.pipe(rts);
    const v173 = v172.pipe(brmts);
    const v174 = v173.pipe(rws);
    return v174;
};
const v175 = {};
v175.createBeginReadyMatchTransformStream = createBeginReadyMatchTransformStream;
v175.createResolverWriteStream = createResolverWriteStream;
v175.BEGIN_READY_RE = BEGIN_READY_RE;
v175.setupResolveWriteStreamPipe = setupResolveWriteStreamPipe;
module.exports = v175;
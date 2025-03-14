'use strict';
const v57 = { value: true };
const v58 = Object.defineProperty(exports, '__esModule', v57);
v58;
const zlib_1 = require('zlib');
const stream_1 = require('stream');
const fs_1 = require('fs');
const util_1 = require('util');
const duplexer = require('duplexer');
const v59 = fs_1.readFile;
const readFilePromise = util_1.promisify(v59);
const bufferFormatter = incoming => {
    const v60 = typeof incoming;
    const v61 = v60 === 'string';
    const v62 = Buffer.from(incoming, 'utf8');
    let v63;
    if (v61) {
        v63 = v62;
    } else {
        v63 = incoming;
    }
    return v63;
};
const optionFormatter = (passed, toEncode) => {
    const v64 = zlib_1.constants;
    const v65 = v64.BROTLI_PARAM_MODE;
    const v66 = 'mode' in passed;
    const v67 = passed && v66;
    const v68 = passed.mode;
    const v69 = v67 && v68;
    const v70 = zlib_1.constants;
    const v71 = v70.BROTLI_DEFAULT_MODE;
    const v72 = v69 || v71;
    const v73 = zlib_1.constants;
    const v74 = v73.BROTLI_PARAM_QUALITY;
    const v75 = 'quality' in passed;
    const v76 = passed && v75;
    const v77 = passed.quality;
    const v78 = v76 && v77;
    const v79 = zlib_1.constants;
    const v80 = v79.BROTLI_MAX_QUALITY;
    const v81 = v78 || v80;
    const v82 = zlib_1.constants;
    const v83 = v82.BROTLI_PARAM_SIZE_HINT;
    const v84 = toEncode.byteLength;
    let v85;
    if (toEncode) {
        v85 = v84;
    } else {
        v85 = 0;
    }
    const v86 = {};
    v86.v65 = v72;
    v86.v74 = v81;
    v86.v83 = v85;
    const v87 = {};
    v87.params = v86;
    return v87;
};
const size = async function (incoming, options) {
    const buffer = bufferFormatter(incoming);
    const v95 = function (resolve, reject) {
        const v88 = optionFormatter(options, buffer);
        const v93 = (error, result) => {
            const v89 = error !== null;
            if (v89) {
                const v90 = reject(error);
                v90;
            }
            const v91 = result.byteLength;
            const v92 = resolve(v91);
            v92;
        };
        const v94 = zlib_1.brotliCompress(buffer, v88, v93);
        v94;
    };
    const v96 = new Promise(v95);
    return v96;
};
exports.default = size;
const sync = function (incoming, options) {
    const buffer = bufferFormatter(incoming);
    const v97 = optionFormatter(options, buffer);
    const v98 = zlib_1.brotliCompressSync(buffer, v97);
    const v99 = v98.byteLength;
    return v99;
};
exports.sync = sync;
const stream = function (options) {
    const input = new stream_1.PassThrough();
    const output = new stream_1.PassThrough();
    const wrapper = duplexer(input, output);
    let size = 0;
    const v100 = optionFormatter(options);
    const v101 = zlib_1.createBrotliCompress(v100);
    const v102 = buf => {
        size += buf.length;
    };
    const v103 = v101.on('data', v102);
    const v104 = () => {
        wrapper.brotliSize = 0;
    };
    const v105 = v103.on('error', v104);
    const v108 = () => {
        wrapper.brotliSize = size;
        const v106 = wrapper.emit('brotli-size', size);
        v106;
        const v107 = output.end();
        v107;
    };
    const brotli = v105.on('end', v108);
    const v109 = input.pipe(brotli);
    v109;
    const v110 = { end: false };
    const v111 = input.pipe(output, v110);
    v111;
    return wrapper;
};
exports.stream = stream;
const file = async function (path, options) {
    const file = await readFilePromise(path);
    return await size(file, options);
};
exports.file = file;
const fileSync = function (path, options) {
    const file = fs_1.readFileSync(path);
    const v112 = sync(file, options);
    return v112;
};
exports.fileSync = fileSync;
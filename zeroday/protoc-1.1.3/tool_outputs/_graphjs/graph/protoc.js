const path = require('path');
const protoc_bin = path.join(__dirname, 'protoc', 'bin');
const v1 = process.platform;
const v2 = v1 === 'win32';
let v3;
if (v2) {
    v3 = '.exe';
} else {
    v3 = '';
}
const v4 = 'protoc' + v3;
const v5 = path.join(protoc_bin, v4);
module.exports = v5;
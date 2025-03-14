'use strict';
const v1 = this.__importStar;
const v2 = this && v1;
const v9 = function (mod) {
    const v3 = mod.__esModule;
    const v4 = mod && v3;
    if (v4) {
        return mod;
    }
    var result = {};
    const v5 = mod != null;
    if (v5) {
        let k;
        for (k in mod) {
            const v6 = Object.hasOwnProperty;
            const v7 = v6.call(mod, k);
            if (v7) {
                const v8 = mod[k];
                result[k] = v8;
            }
        }
    }
    result['default'] = mod;
    return result;
};
var __importStar = v2 || v9;
const v10 = { value: true };
const v11 = Object.defineProperty(exports, '__esModule', v10);
v11;
const v12 = require('temp');
var temp = __importStar(v12);
var util_1 = require('util');
const v13 = temp.track();
v13;
const v14 = temp.mkdir;
var createTempDir = util_1.promisify(v14);
exports.createTempDir = createTempDir;
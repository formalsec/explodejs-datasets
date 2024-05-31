'use strict';
const v43 = this.__importDefault;
const v44 = this && v43;
const v49 = function (mod) {
    const v45 = mod.__esModule;
    const v46 = mod && v45;
    const v47 = { 'default': mod };
    let v48;
    if (v46) {
        v48 = mod;
    } else {
        v48 = v47;
    }
    return v48;
};
var __importDefault = v44 || v49;
const v50 = { value: true };
const v51 = Object.defineProperty(exports, '__esModule', v50);
v51;
const v52 = void 0;
exports.mdToPdf = v52;
const v53 = require('get-port');
const get_port_1 = __importDefault(v53);
const config_1 = require('./lib/config');
const helpers_1 = require('./lib/helpers');
const md_to_pdf_1 = require('./lib/md-to-pdf');
const serve_dir_1 = require('./lib/serve-dir');
const hasContent = input => {
    const v54 = 'content' in input;
    return v54;
};
const hasPath = input => {
    const v55 = 'path' in input;
    return v55;
};
const mdToPdf = async function (input, config = {}) {
    const v56 = hasContent(input);
    const v57 = !v56;
    const v58 = hasPath(input);
    const v59 = !v58;
    const v60 = v57 && v59;
    if (v60) {
        const v61 = new Error('The input is missing one of the properties "content" or "path".');
        throw v61;
    }
    const v62 = config.port;
    const v63 = !v62;
    if (v63) {
        config.port = await get_port_1.default();
    }
    const v64 = config.basedir;
    const v65 = !v64;
    if (v65) {
        const v66 = 'path' in input;
        const v67 = input.path;
        const v68 = helpers_1.getDir(v67);
        const v69 = process.cwd();
        let v70;
        if (v66) {
            v70 = v68;
        } else {
            v70 = v69;
        }
        config.basedir = v70;
    }
    const v71 = config.dest;
    const v72 = !v71;
    if (v72) {
        config.dest = '';
    }
    const v73 = {};
    const v74 = config_1.defaultConfig;
    const v75 = Object.assign(v73, v74);
    const v76 = Object.assign(v75, config);
    const v77 = {};
    const v78 = config_1.defaultConfig;
    const v79 = v78.pdf_options;
    const v80 = Object.assign(v77, v79);
    const v81 = config.pdf_options;
    const v82 = Object.assign(v80, v81);
    const v83 = { pdf_options: v82 };
    const mergedConfig = Object.assign(v76, v83);
    const server = await serve_dir_1.serveDirectory(mergedConfig);
    const pdf = await md_to_pdf_1.convertMdToPdf(input, mergedConfig);
    const v84 = server.close();
    v84;
    return pdf;
};
exports.mdToPdf = mdToPdf;
exports.default = mdToPdf;
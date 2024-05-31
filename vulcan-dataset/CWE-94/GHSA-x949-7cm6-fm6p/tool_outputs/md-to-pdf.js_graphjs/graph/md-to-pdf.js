'use strict';
const v91 = this.__importDefault;
const v92 = this && v91;
const v97 = function (mod) {
    const v93 = mod.__esModule;
    const v94 = mod && v93;
    const v95 = { 'default': mod };
    let v96;
    if (v94) {
        v96 = mod;
    } else {
        v96 = v95;
    }
    return v96;
};
var __importDefault = v92 || v97;
const v98 = { value: true };
const v99 = Object.defineProperty(exports, '__esModule', v98);
v99;
const v100 = void 0;
exports.convertMdToPdf = v100;
const fs_1 = require('fs');
const v101 = require('gray-matter');
const gray_matter_1 = __importDefault(v101);
const path_1 = require('path');
const generate_output_1 = require('./generate-output');
const get_html_1 = require('./get-html');
const get_output_file_path_1 = require('./get-output-file-path');
const helpers_1 = require('./helpers');
const read_file_1 = require('./read-file');
const convertMdToPdf = async (input, config, args = {}) => {
    var _a;
    let mdFileContent;
    const v102 = 'content' in input;
    const v103 = input.content;
    const v104 = input.path;
    const v105 = (_a = args['--md-file-encoding']) !== null;
    const v106 = void 0;
    const v107 = _a !== v106;
    const v108 = v105 && v107;
    const v109 = config.md_file_encoding;
    let v110;
    if (v108) {
        v110 = _a;
    } else {
        v110 = v109;
    }
    if (v102) {
        mdFileContent = v103;
    } else {
        mdFileContent = await read_file_1.readFile(v104, v110);
    }
    const v111 = gray_matter_1.default(mdFileContent);
    const content = v111.md;
    const data = v111.frontMatterConfig;
    const v112 = {};
    const v113 = Object.assign(v112, config);
    const v114 = Object.assign(v113, frontMatterConfig);
    const v115 = {};
    const v116 = config.pdf_options;
    const v117 = Object.assign(v115, v116);
    const v118 = frontMatterConfig.pdf_options;
    const v119 = Object.assign(v117, v118);
    const v120 = { pdf_options: v119 };
    config = Object.assign(v114, v120);
    const v121 = config.pdf_options;
    const headerTemplate = v121.headerTemplate;
    const footerTemplate = v121.footerTemplate;
    const displayHeaderFooter = v121.displayHeaderFooter;
    const v122 = headerTemplate || footerTemplate;
    const v123 = displayHeaderFooter === undefined;
    const v124 = v122 && v123;
    if (v124) {
        const v125 = config.pdf_options;
        v125.displayHeaderFooter = true;
    }
    const arrayOptions = [
        'body_class',
        'script',
        'stylesheet'
    ];
    let option;
    for (option of arrayOptions) {
        const v126 = config[option];
        const v127 = Array.isArray(v126);
        const v128 = !v127;
        if (v128) {
            const v129 = config[option];
            const v130 = [v129];
            const v131 = v130.filter(Boolean);
            config[option] = v131;
        }
    }
    const v132 = [
        '--marked-options',
        '--pdf-options',
        '--launch-options'
    ];
    const jsonArgs = new Set(v132);
    let arg;
    const v133 = Object.entries(args);
    for (arg of v133) {
        const argKey = arg[0];
        const argValue = arg[1];
        const v134 = argKey.slice(2);
        const key = v134.replace(/-/g, '_');
        const v135 = jsonArgs.has(argKey);
        const v136 = JSON.parse(argValue);
        let v137;
        if (v135) {
            v137 = v136;
        } else {
            v137 = argValue;
        }
        config[key] = v137;
    }
    const v138 = config.pdf_options;
    const v139 = v138.margin;
    const v140 = typeof v139;
    const v141 = v140 === 'string';
    if (v141) {
        const v143 = config.pdf_options;
        const v144 = v143.margin;
        const v145 = helpers_1.getMarginObject(v144);
        v142.margin = v145;
    }
    const v146 = config.dest;
    const v147 = v146 === undefined;
    if (v147) {
        const v148 = 'path' in input;
        const v149 = input.path;
        const v150 = config.as_html;
        let v151;
        if (v150) {
            v151 = 'html';
        } else {
            v151 = 'pdf';
        }
        const v152 = get_output_file_path_1.getOutputFilePath(v149, v151);
        let v153;
        if (v148) {
            v153 = v152;
        } else {
            v153 = 'stdout';
        }
        config.dest = v153;
    }
    const v154 = require.resolve('highlight.js');
    const v155 = path_1.dirname(v154);
    const v156 = config.highlight_style;
    const v157 = `${ v156 }.css`;
    const highlightStylesheet = path_1.resolve(v155, '..', 'styles', v157);
    const v158 = config.stylesheet;
    const v159 = [
        ...v158,
        highlightStylesheet
    ];
    const v160 = new Set(v159);
    config.stylesheet = [...v160];
    const html = get_html_1.getHtml(md, config);
    let relativePath;
    const v161 = 'path' in input;
    const v162 = input.path;
    const v163 = path_1.resolve(v162);
    const v164 = config.basedir;
    const v165 = v163.replace(v164, '');
    if (v161) {
        relativePath = v165;
    } else {
        relativePath = '/';
    }
    const output = await generate_output_1.generateOutput(html, relativePath, config);
    const v166 = !output;
    if (v166) {
        const v167 = config.devtools;
        if (v167) {
            const v168 = new Error('No file is generated with --devtools.');
            throw v168;
        }
        const v169 = config.as_html;
        let v170;
        if (v169) {
            v170 = 'HTML';
        } else {
            v170 = 'PDF';
        }
        const v171 = new Error(`Failed to create ${ v170 }.`);
        throw v171;
    }
    const v172 = output.filename;
    if (v172) {
        const v173 = output.filename;
        const v174 = v173 === 'stdout';
        if (v174) {
            const v175 = process.stdout;
            const v176 = output.content;
            const v177 = v175.write(v176);
            v177;
        } else {
            const v178 = fs_1.promises;
            const v179 = output.filename;
            const v180 = output.content;
            await v178.writeFile(v179, v180);
        }
    }
    return output;
};
exports.convertMdToPdf = convertMdToPdf;
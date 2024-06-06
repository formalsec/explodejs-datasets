'use strict';
const v57 = this.__importDefault;
const v58 = this && v57;
const v63 = function (mod) {
    const v59 = mod.__esModule;
    const v60 = mod && v59;
    const v61 = { 'default': mod };
    let v62;
    if (v60) {
        v62 = mod;
    } else {
        v62 = v61;
    }
    return v62;
};
var __importDefault = v58 || v63;
const v64 = { value: true };
const v65 = Object.defineProperty(exports, '__esModule', v64);
v65;
const v66 = void 0;
exports.plot = v66;
const child_process_1 = require('child_process');
const v67 = require('lodash');
const lodash_1 = __importDefault(v67);
const plotCallack = function (options) {
    const v68 = options.data;
    const v69 = !v68;
    const v70 = options.filename;
    const v71 = !v70;
    const v72 = v69 || v71;
    if (v72) {
        const v73 = new Error('The options object must have \'data\' and \'filename\' properties!');
        throw v73;
    }
    const v74 = options.data;
    const data = castDataTypeInput2SeriesDataType(v74);
    const v75 = options.style;
    const v76 = !v75;
    if (v76) {
        options.style = 'lines';
    }
    const v77 = options.moving_avg;
    if (v77) {
        const v78 = options.moving_avg;
        const v79 = apply_moving_filter(data, moving_average, v78);
        options.data = v79;
    }
    const v80 = options.moving_max;
    if (v80) {
        const v81 = options.moving_max;
        const v82 = apply_moving_filter(data, moving_maximum, v81);
        options.data = v82;
    }
    var gnuplot;
    const filePath = options.filename;
    const v83 = `touch ${ filePath }`;
    const v84 = child_process_1.exec(v83);
    v84;
    const v85 = options.format;
    const v86 = v85 === 'pdf';
    if (v86) {
        const v87 = `gnuplot | ps2pdf - ${ filePath }`;
        const v88 = options.exec;
        const v89 = options.exec;
        const v90 = {};
        let v91;
        if (v88) {
            v91 = v89;
        } else {
            v91 = v90;
        }
        const v92 = options.finish;
        const v93 = v92 || post_gnuplot_processing;
        gnuplot = child_process_1.exec(v87, v91, v93);
    } else {
        const v94 = `gnuplot > ${ filePath }`;
        const v95 = options.exec;
        const v96 = options.exec;
        const v97 = {};
        let v98;
        if (v95) {
            v98 = v96;
        } else {
            v98 = v97;
        }
        const v99 = options.finish;
        const v100 = v99 || post_gnuplot_processing;
        gnuplot = child_process_1.exec(v94, v98, v100);
    }
};
const plot = function (options) {
    const v101 = options.finish;
    if (v101) {
        const v102 = plotCallack(options);
        return v102;
    }
    const v111 = (resolve, reject) => {
        const v103 = {};
        const v104 = Object.assign(v103, options);
        const v107 = error => {
            if (error) {
                const v105 = reject(error);
                return v105;
            }
            const v106 = resolve(true);
            v106;
        };
        const v108 = { finish: v107 };
        const v109 = Object.assign(v104, v108);
        const v110 = plotCallack(v109);
        v110;
    };
    const v112 = new Promise(v111);
    return v112;
};
exports.plot = plot;
exports.default = plot;
'use strict';
const v58 = this.__importDefault;
const v59 = this && v58;
const v64 = function (mod) {
    const v60 = mod.__esModule;
    const v61 = mod && v60;
    const v62 = { 'default': mod };
    let v63;
    if (v61) {
        v63 = mod;
    } else {
        v63 = v62;
    }
    return v63;
};
var __importDefault = v59 || v64;
const v65 = { value: true };
const v66 = Object.defineProperty(exports, '__esModule', v65);
v66;
const v67 = void 0;
exports.plot = v67;
const child_process_1 = require('child_process');
const lodash_1 = require('lodash');
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
    const data = lodash_1.castDataTypeInput2SeriesDataType(v74);
    const v75 = options.style;
    const v76 = !v75;
    if (v76) {
        options.style = 'lines';
    }
    const v77 = options.moving_avg;
    if (v77) {
        const v78 = options.moving_avg;
        const v79 = options.moving_avg;
        const v80 = lodash_1.apply_moving_filter(data, v78, v79);
        options.data = v80;
    }
    const v81 = options.moving_max;
    if (v81) {
        const v82 = options.moving_max;
        const v83 = options.moving_max;
        const v84 = lodash_1.apply_moving_filter(data, v82, v83);
        options.data = v84;
    }
    var gnuplot;
    const filePath = options.filename;
    const v85 = `touch ${ filePath }`;
    const v86 = child_process_1.exec(v85);
    v86;
    const v87 = options.format;
    const v88 = v87 === 'pdf';
    if (v88) {
        const v89 = `gnuplot | ps2pdf - ${ filePath }`;
        const v90 = options.exec;
        const v91 = options.exec;
        const v92 = {};
        let v93;
        if (v90) {
            v93 = v91;
        } else {
            v93 = v92;
        }
        const v94 = options.finish;
        const v95 = v94 || post_gnuplot_processing;
        gnuplot = child_process_1.exec(v89, v93, v95);
    } else {
        const v96 = `gnuplot > ${ filePath }`;
        const v97 = options.exec;
        const v98 = options.exec;
        const v99 = {};
        let v100;
        if (v97) {
            v100 = v98;
        } else {
            v100 = v99;
        }
        const v101 = options.finish;
        const v102 = v101 || post_gnuplot_processing;
        gnuplot = child_process_1.exec(v96, v100, v102);
    }
};
const plot = function (options) {
    const v103 = options.finish;
    if (v103) {
        const v104 = plotCallack(options);
        return v104;
    }
    const v113 = (resolve, reject) => {
        const v105 = {};
        const v106 = Object.assign(v105, options);
        const v109 = error => {
            if (error) {
                const v107 = reject(error);
                return v107;
            }
            const v108 = resolve(true);
            v108;
        };
        const v110 = { finish: v109 };
        const v111 = Object.assign(v106, v110);
        const v112 = plotCallack(v111);
        v112;
    };
    const v114 = new Promise(v113);
    return v114;
};
exports.plot = plot;
exports.default = plot;
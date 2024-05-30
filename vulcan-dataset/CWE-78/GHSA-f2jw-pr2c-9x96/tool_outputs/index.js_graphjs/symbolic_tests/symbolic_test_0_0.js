"use strict";
/* @stoqey/gnuplot
 * this project is a fork of Richard Meadows's 'node-plotter'
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.plot = void 0;
const child_process_1 = require("child_process");
const lodash_1 = __importDefault(require("lodash"));
/*
 * Performs a n-point moving average on array.
 */
function moving_average(series, n) {
    //series.forEach((value, i) => {});
    const out = new Map();
    const seriesValues = [...series.values()];
    [...series.keys()].forEach((i) => {
        const idx = lodash_1.default.toNumber(i);
        const bin = idx === 0 ? 0 : Math.floor(idx / n);
        const start = bin === 0 ? 0 : Math.abs(n - idx) + 1;
        const end = idx;
        const nums = seriesValues.slice(start, end + 1);
        /* Take the average of the n items in this array */
        var sum = lodash_1.default.reduce(nums, function (memo, num) {
            return memo + num;
        }, 0);
        //series.clear();
        out.set(i, sum / nums.length);
    });
    return out;
}
/**
 * Performs a n-point maximum on array.
 */
function moving_maximum(series, n) {
    const out = new Map();
    const seriesValues = [...series.values()];
    [...series.keys()].forEach((i) => {
        const idx = lodash_1.default.toNumber(i);
        const bin = idx === 0 ? 0 : Math.floor(idx / n);
        const start = bin === 0 ? 0 : Math.abs(n - idx) + 1;
        const end = idx;
        const nums = seriesValues.slice(start, end + 1);
        var max = lodash_1.default.reduce(nums, function (memo, num) {
            return Math.max(memo, num);
        }, Number.NEGATIVE_INFINITY);
        out.set(i, max);
    });
    return out;
}
/**
 * Applys an n-point moving filter to a set of series.
 */
function apply_moving_filter(set, filter, n = 3) {
    Object.keys(set).forEach(function (series) {
        /* Apply the filter */
        set[series] = filter(set[series], n);
    });
    return set;
}
/**
 * Returns the string to give to gnuplot based on the value of options.time.
 */
function time_format(time) {
    if (lodash_1.default.isString(time)) {
        /* Translate the string we've been given into a format */
        switch (time) {
            case "days":
            case "Days":
                return "%d/%m";
            case "hours":
            case "Hours":
                return "%H:%M";
            default:
                /* Presume we've been given a gnuplot-readable time format string */
                return time;
        }
    }
    else {
        /* Just default to hours */
        return "%H:%M";
    }
}
/**
 * Sets up gnuplot based on the properties we're given in the options object.
 */
function setup_gnuplot(gnuplot, options) {
    if (options.format === "svg") {
        /* Setup gnuplot for SVG */
        // gnuplot.stdin.write(`set term svg fname "${options.font || 'system-ui'}" fsize ${options.fontSize || 13}\n`);
    }
    else if (options.format == "pdf") {
        /* PDF: setup Gnuplot output to postscript so ps2pdf can interpret it */
        gnuplot.stdin.write(`set term postscript landscape enhanced color dashed "${options.font || "Arial"}" fsize ${options.fontSize || 14}\n`);
    }
    else {
        /* Setup gnuplot for png */
        gnuplot.stdin.write(`set term png size ${options.width || 800},${options.height || 640} font "${options.font || "Arial"}, ${options.fontSize || 13}"\n`);
    }
    if (options && options.args) {
        const args = options.args || [];
        args.forEach((a) => gnuplot.stdin.write(`${a}\n`));
    }
    /* Locale config */
    if (options.locale) {
        gnuplot.stdin.write(`set locale '${options.locale}'\n`);
    }
    /* Data range config */
    if (options.xRange) {
        gnuplot.stdin.write(`set xrange ['${options.xRange.min}':'${options.xRange.max}']\n`);
    }
    if (options.yRange) {
        gnuplot.stdin.write(`set yrange ['${options.yRange.min}':'${options.yRange.max}']\n`);
    }
    /* Margin config */
    if (options.margin) {
        gnuplot.stdin.write(`set lmargin ${options.margin.left}\n`);
        gnuplot.stdin.write(`set rmargin ${options.margin.right}\n`);
        gnuplot.stdin.write(`set tmargin ${options.margin.top}\n`);
        gnuplot.stdin.write(`set bmargin ${options.margin.bottom}\n`);
    }
    /* Formatting Options */
    if (options.time) {
        gnuplot.stdin.write("set xdata time\n");
        gnuplot.stdin.write('set timefmt "%s"\n');
        gnuplot.stdin.write(`set format x "${time_format(options.time)}"\n`);
        gnuplot.stdin.write('set xlabel ""\n');
    }
    if (options.title) {
        gnuplot.stdin.write(`set title "${options.title}" font "${options.font || "Helvetica"}, ${options.titleSize || 13}"\n`);
    }
    if (options.logscale) {
        gnuplot.stdin.write("set logscale y\n");
    }
    if (options.xlabel) {
        gnuplot.stdin.write(`set xlabel "${options.xlabel}"\n`);
    }
    if (options.ylabel) {
        gnuplot.stdin.write(`set ylabel "${options.ylabel}"\n`);
    }
    if (options.decimalsign) {
        gnuplot.stdin.write(`set decimalsign '${options.decimalsign}'\n`);
    }
    if (options.xRotate) {
        gnuplot.stdin.write(`set xtics rotate by ${options.xRotate.value} offset ${options.xRotate.xOffset},${options.xRotate.yOffset}\n`);
    }
    if (options.yFormat) {
        gnuplot.stdin.write(`set format y '${options.yFormat}'\n`);
    }
    /* Setup ticks */
    // gnuplot.stdin.write('set grid xtics ytics mxtics\n');
    // gnuplot.stdin.write('set mxtics\n');
    if (options.nokey) {
        gnuplot.stdin.write("set nokey\n");
    }
}
/**
 * Called after Gnuplot has finished.
 */
function post_gnuplot_processing(error, stdout, stderr) {
    /* Print stuff */
    console.log("stdout: " + stdout);
    console.log("stderr: " + stderr);
    if (error !== null) {
        console.log("exec error: " + error);
    }
}
function castDataTypeInput2SeriesDataType(data) {
    /* Translate data into an object if needs be */
    if (lodash_1.default.isArray(data)) {
        /* If it's a one-dimentional array */
        return {
            "Series 1": data.reduce((a, d, i) => {
                a.set(i, d);
                return a;
            }, new Map()),
        };
    }
    if (lodash_1.default.isMap(data)) {
        return { "Series 1": data };
    }
    return Object.entries(data).reduce((a, [k, v]) => {
        if (lodash_1.default.isMap(v)) {
            a[k] = v;
            return a;
        }
        const m = new Map();
        if (lodash_1.default.isArray(v)) {
            v.reduce((a, n, i) => {
                m.set(i, n);
                return m;
            }, m);
            a[k] = m;
        }
        return a;
    }, {});
}
/* -------- Public Functions -------- */
/**
 * Plots data to a PDF file. If it does not exist, the PDF file will
 * be created, otherwise this plot will be appended as a new page.
 */
function plotCallack(options) {
    /* Required Options */
    if (!options.data || !options.filename) {
        throw new Error("The options object must have 'data' and 'filename' properties!");
    }
    const data = castDataTypeInput2SeriesDataType(options.data);
    /* Defaults */
    if (!options.style) {
        options.style = "lines"; /* Default to lines */
    }
    /* Apply moving averages and maximums */
    if (options.moving_avg) {
        options.data = apply_moving_filter(data, moving_average, options.moving_avg);
    }
    if (options.moving_max) {
        options.data = apply_moving_filter(data, moving_maximum, options.moving_max);
    }
    /* Execute Gnuplot specifing a function to be called when it terminates */
    var gnuplot;
    const filePath = options.filename;
    child_process_1.exec(`touch ${filePath}`);
    if (options.format === "pdf") {
        /* Special setup for pdf */
        gnuplot = child_process_1.exec(`gnuplot | ps2pdf - ${filePath}`, options.exec ? options.exec : {}, options.finish || post_gnuplot_processing);
    }
    else {
        /* Default for everything else */
        gnuplot = child_process_1.exec(`gnuplot > ${filePath}`, options.exec ? options.exec : {}, options.finish || post_gnuplot_processing);
    }
    /* Sets up gnuplot based on the properties we've been given in the
     * options object */
    setup_gnuplot(gnuplot, options);
    /* Get an array containing all the series */
    let series = lodash_1.default.keys(data).filter((k) => k);
    /* Print the command to actually do the plot */
    gnuplot.stdin.write("plot");
    for (var i = 1; i <= series.length; i += 1) {
        /* For each series */
        /* Instruct gnuplot to plot this series */
        var s = `\'-\' using 1:2 with ${options.style}`;
        if (!options.hideSeriesTitle) {
            s += ` title\' ${series[i - 1]} \'`;
        }
        else {
            s += " notitle";
        }
        gnuplot.stdin.write(s);
        /* If another series is to follow, add a comma */
        if (i < series.length) {
            gnuplot.stdin.write(",");
        }
    }
    gnuplot.stdin.write("\n");
    /* Print out the data */
    for (var i = 0; i < series.length; i += 1) {
        /* For each series */
        const s = series[i];
        const d = data[s];
        [...d.keys()].forEach(function (key) {
            gnuplot.stdin.write(`${key} ${d.get(key)}\n`);
        });
        /* Terminate the data */
        gnuplot.stdin.write("e\n");
    }
    gnuplot.stdin.end();
}
/**
 * Plots data to a PDF file. If it does not exist, the PDF file will
 * be created, otherwise this plot will be appended as a new page.
 */
function plot(options) {
    if (options.finish) {
        return plotCallack(options);
    }
    // Promise
    return new Promise((resolve, reject) => {
        plotCallack(Object.assign(Object.assign({}, options), { finish: (error) => {
                if (error) {
                    return reject(error);
                }
                resolve(true);
            } }));
    });
}
exports.plot = plot;
exports.default = plot;
//# sourceMappingURL=index.js.map
let esl_symbolic = require("esl_symbolic");
esl_symbolic.sealProperties(Object.prototype);
// Vuln: command-injection
let options = { finish: esl_symbolic.any("finish") };
module.exports.plot(options);

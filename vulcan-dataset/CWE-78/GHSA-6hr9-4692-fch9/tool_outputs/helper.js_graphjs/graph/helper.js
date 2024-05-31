const v29 = require('child_process');
var exec = v29.exec;
const v55 = function (exec) {
    const generateCmd = function (options) {
        var filters = {};
        filters.blur = ' -channel RGBA -blur 0x';
        filters.gaussian = ' -filter Gaussian -define filter:sigma=';
        filters.sharpen = ' -sharpen 0x';
        filters.unsharp = ' -unsharp 0x';
        filters.threshold = ' -threshold ';
        filters.oilpaint = ' -paint ';
        filters.sketch = ' -sketch ';
        filters.metal = ' -colorspace Gray -emboss 0x';
        filters.edge = ' -negate -colorspace Gray -edge ';
        const v30 = options.image;
        const v31 = 'convert ' + v30;
        const v32 = v31 + ' ';
        const v33 = options.filter;
        const v34 = filters[v33];
        const v35 = v32 + v34;
        const v36 = options.level;
        const v37 = v36 || 5;
        const v38 = v35 + v37;
        const v39 = v38 + ' -resize ';
        const v40 = options.size;
        const v41 = v40 || 100;
        const v42 = v39 + v41;
        const v43 = v42 + '%';
        const v44 = v43 + ' ';
        const v45 = options.to;
        const v46 = options.image;
        const v47 = v45 || v46;
        const v48 = v44 + v47;
        return v48;
    };
    const executeCommand = function (cmd, callback) {
        const v50 = function (error) {
            const v49 = callback(error);
            v49;
        };
        const v51 = exec(cmd, v50);
        v51;
    };
    const v53 = function (effect, options, callback) {
        options.filter = effect;
        var cmd = generateCmd(options);
        const v52 = executeCommand(cmd, callback);
        v52;
    };
    const v54 = {};
    v54.applyEffect = v53;
    return v54;
};
const v56 = v55(exec);
module.exports = v56;
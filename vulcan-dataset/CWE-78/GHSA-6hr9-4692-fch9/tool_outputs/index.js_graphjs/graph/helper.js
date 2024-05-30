const v1 = require('child_process');
var exec = v1.exec;
const v27 = function (exec) {
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
        const v2 = options.image;
        const v3 = 'convert ' + v2;
        const v4 = v3 + ' ';
        const v5 = options.filter;
        const v6 = filters[v5];
        const v7 = v4 + v6;
        const v8 = options.level;
        const v9 = v8 || 5;
        const v10 = v7 + v9;
        const v11 = v10 + ' -resize ';
        const v12 = options.size;
        const v13 = v12 || 100;
        const v14 = v11 + v13;
        const v15 = v14 + '%';
        const v16 = v15 + ' ';
        const v17 = options.to;
        const v18 = options.image;
        const v19 = v17 || v18;
        const v20 = v16 + v19;
        return v20;
    };
    const executeCommand = function (cmd, callback) {
        const v22 = function (error) {
            const v21 = callback(error);
            v21;
        };
        const v23 = exec(cmd, v22);
        v23;
    };
    const v25 = function (effect, options, callback) {
        options.filter = effect;
        var cmd = generateCmd(options);
        const v24 = executeCommand(cmd, callback);
        v24;
    };
    const v26 = {};
    v26.applyEffect = v25;
    return v26;
};
const v28 = v27(exec);
module.exports = v28;
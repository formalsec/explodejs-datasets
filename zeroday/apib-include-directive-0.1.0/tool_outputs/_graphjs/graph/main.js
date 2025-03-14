const v31 = function () {
    var INCLUDE;
    var fs;
    var includeDirective;
    var includeReplace;
    var path;
    fs = require('fs');
    path = require('path');
    INCLUDE = /( *)<!-- include\((.*)\) -->/gmi;
    const v23 = function (includePath, match, spaces, filename) {
        var content;
        var fullPath;
        var lines;
        fullPath = path.join(includePath, filename);
        const v17 = fs.readFileSync(fullPath, 'utf-8');
        const v18 = v17.replace(/\r\n?/g, '\n');
        lines = v18.split('\n');
        const v19 = '\n' + spaces;
        const v20 = lines.join(v19);
        content = spaces + v20;
        const v21 = path.dirname(fullPath);
        const v22 = includeDirective(v21, content);
        return v22;
    };
    includeReplace = v23;
    const v26 = function (includePath, input) {
        const v24 = includeReplace.bind(this, includePath);
        const v25 = input.replace(INCLUDE, v24);
        return v25;
    };
    includeDirective = v26;
    exports.includeDirective = includeDirective;
    const v30 = function (file) {
        const v27 = path.dirname(file);
        const v28 = fs.readFileSync(file, 'utf-8');
        const v29 = includeDirective(v27, v28);
        return v29;
    };
    exports.expand = v30;
};
const v32 = v31.call(this);
v32;
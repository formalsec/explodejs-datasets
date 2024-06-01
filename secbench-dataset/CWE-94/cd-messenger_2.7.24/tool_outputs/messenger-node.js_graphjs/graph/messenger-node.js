const chalk = require('chalk');
const cl = require('chalkline');
const Table = require('cli-table');
const pkgInfo = require('../package.json');
const CLI_ICON_FAIL = '\u2718';
const CLI_ICON_PASS = '\u2713';
const CLI_ICON_WARN = '\u267A';
const CLI_ICON_NOTE = '\u270F︎';
const v56 = () => {
    const v55 = pkgInfo.version;
    return v55;
};
const v58 = () => {
    const v57 = pkgInfo.name;
    return v57;
};
const v60 = (...params) => {
    const v59 = console.log(...params);
    v59;
    return params;
};
const v64 = (...params) => {
    const v61 = chalk.cyan;
    const v62 = v61.bold(CLI_ICON_NOTE, ...params);
    const v63 = console.log(v62);
    v63;
    return params;
};
const v66 = (msg, ...params) => {
    const v65 = console.log(msg, ...params);
    v65;
    return params;
};
const v70 = (...params) => {
    const v67 = chalk.green;
    const v68 = v67.bold(CLI_ICON_PASS, ...params);
    const v69 = console.log(v68);
    v69;
    return params;
};
const v74 = (...params) => {
    const v71 = chalk.yellow;
    const v72 = v71.bold(CLI_ICON_WARN, ...params);
    const v73 = console.log(v72);
    v73;
    return params;
};
const v78 = (...params) => {
    const v75 = chalk.red;
    const v76 = v75.bold(CLI_ICON_FAIL, ...params);
    const v77 = console.log(v76);
    v77;
    return params;
};
const v97 = data => {
    let table;
    let head = [];
    const v79 = data.length;
    const v80 = v79 > 0;
    if (v80) {
        const v81 = data[0];
        const v82 = Array.isArray(v81);
        if (v82) {
            header = data[0];
            const v83 = data.splice(0, 1);
            v83;
        } else {
            const v84 = data[0];
            header = Object.keys(v84);
        }
        const v87 = function (item) {
            const v85 = chalk.cyan;
            const v86 = v85.bold(item);
            return v86;
        };
        header = header.map(v87);
        const v88 = { head: header };
        table = new Table(v88);
        const v93 = item => {
            const v89 = Object.keys(item);
            const v91 = key => {
                const v90 = item[key];
                return v90;
            };
            let values = v89.map(v91);
            const v92 = table.push(values);
            v92;
        };
        const v94 = data.map(v93);
        v94;
        const v95 = table.toString();
        const v96 = console.log(v95);
        v96;
    }
};
const v106 = color => {
    const v98 = color.length;
    const v99 = v98 > 0;
    if (v99) {
        try {
            const v100 = `cl.${ color }()`;
            const v101 = eval(v100);
            v101;
        } catch (e) {
            const v102 = chalk.bgRed;
            const v103 = `Invalid Color: ${ color }`;
            const v104 = v102.bold(v103);
            const v105 = console.error(v104);
            v105;
        }
    }
};
const v108 = data => {
    const v107 = console.dir(data);
    v107;
    return data;
};
const messenger = {};
messenger.version = v56;
messenger.name = v58;
messenger.log = v60;
messenger.info = v64;
messenger.note = v66;
messenger.success = v70;
messenger.warning = v74;
messenger.error = v78;
messenger.table = v97;
messenger.line = v106;
messenger.dir = v108;
module.exports = messenger;
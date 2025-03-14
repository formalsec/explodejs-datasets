const chalk = require('chalk');
const cl = require('chalkline');
const Table = require('cli-table');
const pkgInfo = require('../package.json');
const CLI_ICON_FAIL = '\u2718';
const CLI_ICON_PASS = '\u2713';
const CLI_ICON_WARN = '\u267A ';
const CLI_ICON_NOTE = '\u270F︎ ';
const v55 = () => {
    const v54 = pkgInfo.version;
    return v54;
};
const v57 = () => {
    const v56 = pkgInfo.name;
    return v56;
};
const v59 = (...params) => {
    const v58 = console.log(...params);
    v58;
    return params;
};
const v63 = (...params) => {
    const v60 = chalk.cyan;
    const v61 = v60.bold(CLI_ICON_NOTE, ...params);
    const v62 = console.log(v61);
    v62;
    return params;
};
const v65 = (msg, ...params) => {
    const v64 = console.log(msg, ...params);
    v64;
    return params;
};
const v69 = (...params) => {
    const v66 = chalk.green;
    const v67 = v66.bold(CLI_ICON_PASS, ...params);
    const v68 = console.log(v67);
    v68;
    return params;
};
const v73 = (...params) => {
    const v70 = chalk.yellow;
    const v71 = v70.bold(CLI_ICON_WARN, ...params);
    const v72 = console.log(v71);
    v72;
    return params;
};
const v77 = (...params) => {
    const v74 = chalk.red;
    const v75 = v74.bold(CLI_ICON_FAIL, ...params);
    const v76 = console.log(v75);
    v76;
    return params;
};
const v96 = data => {
    let table;
    let head = [];
    const v78 = data.length;
    const v79 = v78 > 0;
    if (v79) {
        const v80 = data[0];
        const v81 = Array.isArray(v80);
        if (v81) {
            header = data[0];
            const v82 = data.splice(0, 1);
            v82;
        } else {
            const v83 = data[0];
            header = Object.keys(v83);
        }
        const v86 = function (item) {
            const v84 = chalk.cyan;
            const v85 = v84.bold(item);
            return v85;
        };
        header = header.map(v86);
        const v87 = { head: header };
        table = new Table(v87);
        const v92 = item => {
            const v88 = Object.keys(item);
            const v90 = key => {
                const v89 = item[key];
                return v89;
            };
            let values = v88.map(v90);
            const v91 = table.push(values);
            v91;
        };
        const v93 = data.map(v92);
        v93;
        const v94 = table.toString();
        const v95 = console.log(v94);
        v95;
    }
};
const v104 = color => {
    const v97 = color != '';
    if (v97) {
        try {
            const v98 = `cl.${ color }()`;
            const v99 = eval(v98);
            v99;
        } catch (e) {
            const v100 = chalk.bgRed;
            const v101 = `Invalid Color: ${ color }`;
            const v102 = v100.bold(v101);
            const v103 = console.error(v102);
            v103;
        }
    }
};
const v106 = data => {
    const v105 = console.dir(data);
    v105;
    return data;
};
const messenger = {};
messenger.version = v55;
messenger.name = v57;
messenger.log = v59;
messenger.info = v63;
messenger.note = v65;
messenger.success = v69;
messenger.warning = v73;
messenger.error = v77;
messenger.table = v96;
messenger.line = v104;
messenger.dir = v106;
module.exports = messenger;
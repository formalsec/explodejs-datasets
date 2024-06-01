const linuxCmdline = function (cmdline) {
    var result = {};
    const v13 = cmdline.trim();
    const v14 = v13.split(' ');
    const v23 = function (arg) {
        arg = arg.split('=');
        const v15 = arg.shift();
        var keypath = v15.split('.');
        var key = keypath.shift();
        var node = result;
        let v16 = keypath.length;
        while (v16) {
            const v17 = node[key];
            const v18 = {};
            node[key] = v17 || v18;
            node = node[key];
            v16 = keypath.length;
        }
        var val = true;
        const v19 = arg.length;
        if (v19) {
            const v20 = arg.join('=');
            val = v20.split(',');
            const v21 = val.length;
            const v22 = v21 === 1;
            if (v22) {
                val = val[0];
            }
        }
        node[key] = val;
    };
    const v24 = v14.forEach(v23);
    v24;
    return result;
};
module.exports = linuxCmdline;
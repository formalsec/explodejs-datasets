const v10 = require('child_process');
const exec = v10.exec;
const v18 = cmd => {
    const v16 = (resolve, reject) => {
        const v14 = (err, stdout, stderr) => {
            if (err) {
                const v11 = reject(err);
                v11;
            } else {
                const v12 = {
                    output: stdout,
                    error: stderr
                };
                const v13 = resolve(v12);
                v13;
            }
        };
        const v15 = exec(cmd, v14);
        v15;
    };
    const v17 = new Promise(v16);
    return v17;
};
module.exports = v18;
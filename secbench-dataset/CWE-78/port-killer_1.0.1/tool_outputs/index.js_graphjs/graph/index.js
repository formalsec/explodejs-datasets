'use strict';
const v20 = require('child_process');
const execSync = v20.execSync;
const v38 = port => {
    let pid = null;
    port = port || null;
    const v21 = !port;
    if (v21) {
        const v22 = {};
        v22.message = 'No port provided. Exiting...';
        v22.error = true;
        return v22;
    }
    try {
        const v23 = `lsof -t -i:${ port }`;
        const v24 = execSync(v23);
        const v25 = v24.toString();
        const v26 = v25.trim();
        pid = v26.split('\n');
        const v27 = pid.length;
        const v28 = v27 > 0;
        if (v28) {
            try {
                const v31 = proc => {
                    const v29 = `kill -9 ${ proc }`;
                    const v30 = execSync(v29);
                    return v30;
                };
                const v32 = pid.forEach(v31);
                v32;
                const v33 = pid.join(' ');
                const v34 = {};
                v34.message = `Killed process(es) ${ v33 }`;
                v34.error = false;
                return v34;
            } catch (err) {
                const v35 = pid.join(' ');
                const v36 = {};
                v36.message = `Unable to kill process(es) ${ v35 }`;
                v36.error = true;
                return v36;
            }
        }
    } catch (err) {
        const v37 = {};
        v37.message = `Unable to find a process running on port ${ port }`;
        v37.error = true;
        return v37;
    }
};
module.exports = v38;
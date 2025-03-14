const v19 = require('child_process');
const exec = v19.exec;
const v36 = function (destination, {
    hard = true
} = {}) {
    const v20 = typeof destination;
    const v21 = v20 === 'string';
    const v22 = destination && v21;
    if (v22) {
        const v23 = JSON.stringify(destination);
        let v24;
        if (hard) {
            v24 = '--hard';
        } else {
            v24 = '';
        }
        const v25 = `git reset ${ v23 } ${ v24 }`;
        const v26 = exec(v25);
        return v26;
    }
    const v27 = typeof destination;
    const v28 = v27 === 'number';
    const v29 = destination && v28;
    if (v29) {
        const v30 = Math.abs(destination);
        let v31;
        if (hard) {
            v31 = '--hard';
        } else {
            v31 = '';
        }
        const v32 = `git reset HEAD~${ v30 } ${ v31 }`;
        const v33 = exec(v32);
        return v33;
    }
    const v34 = typeof destination;
    const v35 = new TypeError(`No case for handling destination ${ destination } (${ v34 })`);
    throw v35;
};
module.exports = v36;
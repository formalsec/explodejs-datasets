const v27 = require('child_process');
const exec = v27.exec;
const v28 = process.argv;
const port = v28[2];
const killer = port => {
    const v40 = (resolve, reject) => {
        const v29 = `lsof -n -i4TCP:${ port } | grep LISTEN`;
        const v38 = (err, out, stderr) => {
            const v30 = out.split(' ');
            const v32 = m => {
                const v31 = m.length;
                return v31;
            };
            const match = v30.filter(v32);
            const v33 = match.length;
            if (v33) {
                const v34 = match[1];
                const v35 = resolve(v34);
                v35;
            } else {
                const v36 = `port ${ port } is not open.`;
                const v37 = console.log(v36);
                v37;
            }
        };
        const v39 = exec(v29, v38);
        v39;
    };
    const v41 = new Promise(v40);
    const v47 = pid => {
        const v42 = `kill ${ pid }`;
        const v45 = (err, out, stderr) => {
            if (err) {
                throw err;
            }
            const v43 = `port ${ port } was closed.`;
            const v44 = console.log(v43);
            v44;
        };
        const v46 = exec(v42, v45);
        v46;
    };
    const v48 = v41.then(v47);
    v48;
};
const v49 = typeof port;
const v50 = v49 != 'undefined';
if (v50) {
    const v51 = killer(port);
    v51;
} else {
    const v52 = console.log('port number is missing.');
    v52;
}
module.exports = killer;
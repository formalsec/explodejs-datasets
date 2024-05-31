const http = require('http');
const config = require('./config');
const mime = require('./utils/mime.js');
const fileSystem = require('./utils/file-system');
const v46 = async (req, res) => {
    let readStream;
    const v30 = req;
    const url = v30.url;
    const entryName = config.getOption('entryName');
    const v31 = url == '/';
    if (v31) {
        readStream = fileSystem.createReadStream(entryName);
        const v32 = { 'Content-Type': 'text/html' };
        const v33 = res.writeHead(200, v32);
        v33;
    } else {
        const mimeType = mime.findMimeType(url);
        readStream = fileSystem.createReadStream(url);
        const v34 = { 'Content-Type': `${ mimeType }` };
        const v35 = res.writeHead(200, v34);
        v35;
    }
    const v37 = () => {
        const v36 = readStream.pipe(res);
        v36;
    };
    const v38 = readStream.on('open', v37);
    v38;
    const v44 = err => {
        const v39 = { 'Content-Type': 'application/json' };
        const v40 = res.writeHead(404, v39);
        v40;
        const v41 = { err };
        const v42 = JSON.stringify(v41);
        const v43 = res.end(v42);
        v43;
    };
    const v45 = readStream.on('error', v44);
    v45;
};
const server = http.createServer(v46);
const start = function () {
    const port = config.getOption('port');
    const host = config.getOption('host');
    const v49 = () => {
        const v47 = `Server running at http://${ host }:${ port }/`;
        const v48 = console.log(v47);
        v48;
    };
    const v50 = server.listen(port, host, v49);
    v50;
    const v56 = err => {
        const v51 = err.code;
        const v52 = v51 === 'EADDRINUSE';
        if (v52) {
            const v53 = `${ port } already in use`;
            const v54 = console.error(v53);
            v54;
        } else {
            const v55 = console.error(err);
            v55;
        }
    };
    const v57 = server.on('error', v56);
    v57;
};
const v58 = {};
v58.start = start;
module.exports = v58;
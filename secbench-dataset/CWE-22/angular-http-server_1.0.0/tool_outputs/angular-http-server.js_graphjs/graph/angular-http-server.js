var http = require('http');
var fs = require('fs');
const sendFile = function (fname) {
};
const v35 = function (req, res) {
    const v20 = req.url;
    const v21 = v20.slice(1);
    var possibleFilename = v21 || 'dummy';
    const v33 = function (err, stats) {
        var fileBuffer;
        const v22 = !err;
        const v23 = stats.isFile();
        const v24 = v22 && v23;
        if (v24) {
            const v25 = console.log('Sending file: %s', possibleFilename);
            v25;
            fileBuffer = fs.readFileSync(possibleFilename);
            const v26 = { 'Content-Type': 'text/css' };
            const v27 = res.writeHead(200, v26);
            v27;
        } else {
            const v28 = console.log('Route %s, replacing with index.html', possibleFilename);
            v28;
            fileBuffer = fs.readFileSync('index.html');
            const v29 = { 'Content-Type': 'text/html' };
            const v30 = res.writeHead(200, v29);
            v30;
        }
        const v31 = res.write(fileBuffer);
        v31;
        const v32 = res.end();
        v32;
    };
    const v34 = fs.stat(possibleFilename, v33);
    v34;
};
var server = http.createServer(v35);
const v37 = function () {
    const v36 = console.log('Listening');
    return v36;
};
const v38 = server.listen(8000, v37);
v38;
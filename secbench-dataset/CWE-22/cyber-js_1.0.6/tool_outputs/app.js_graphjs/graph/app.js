const v38 = function (str) {
    const v37 = console.log(str);
    v37;
};
exports.debug = v38;
var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');
const v39 = process.argv;
const v40 = v39[2];
var port = v40 || 3000;
const v66 = function (request, response) {
    const v41 = request.url;
    const v42 = url.parse(v41);
    var uri = v42.pathname;
    const v43 = process.cwd();
    const v44 = '/public/' + uri;
    var filename = path.join(v43, v44);
    var contentTypesByExtension = {};
    contentTypesByExtension['.html'] = 'text/html';
    contentTypesByExtension['.css'] = 'text/css';
    contentTypesByExtension['.js'] = 'text/javascript';
    const v64 = function (exists) {
        const v45 = !exists;
        if (v45) {
            const v46 = { 'Content-Type': 'text/plain' };
            const v47 = response.writeHead(404, v46);
            v47;
            const v48 = response.write('404 - Page Not Found.\n');
            v48;
            const v49 = response.end();
            v49;
            return;
        }
        const v50 = fs.statSync(filename);
        const v51 = v50.isDirectory();
        if (v51) {
            filename += '/index.html';
        }
        const v62 = function (err, file) {
            if (err) {
                const v52 = { 'Content-Type': 'text/plain' };
                const v53 = response.writeHead(500, v52);
                v53;
                const v54 = err + '\n';
                const v55 = response.write(v54);
                v55;
                const v56 = response.end();
                v56;
                return;
            }
            var headers = {};
            const v57 = '/public/' + filename;
            const v58 = path.extname(v57);
            var contentType = contentTypesByExtension[v58];
            if (contentType) {
                headers['Content-Type'] = contentType;
            }
            const v59 = response.writeHead(200, headers);
            v59;
            const v60 = response.write(file, 'binary');
            v60;
            const v61 = response.end();
            v61;
        };
        const v63 = fs.readFile(filename, 'binary', v62);
        v63;
    };
    const v65 = fs.exists(filename, v64);
    v65;
};
const v67 = http.createServer(v66);
const v68 = parseInt(port, 10);
const v69 = v67.listen(v68);
v69;
const v70 = 'Static file server running at\n  => http://localhost:' + port;
const v71 = v70 + '/\nCTRL + C to shutdown';
const v72 = console.log(v71);
v72;
var http = require('http');
var fs = require('fs');
var path = require('path');
var start = function (dir, defaultPage, port) {
    dir = dir || './';
    defaultPage = defaultPage || 'index.html';
    port = port || 80;
    const v41 = function (req, res) {
        const v25 = req.url;
        var _path = v25.replace(/\?.*$/, '');
        var pn;
        var s;
        var encode;
        const v26 = _path === '/';
        const v27 = '/' + defaultPage;
        if (v26) {
            _path = v27;
        } else {
            _path = _path;
        }
        pn = dir + _path;
        var extname = path.extname(pn);
        const v28 = {
            '.css': 'text/css',
            '.html': 'text/html',
            '.txt': 'text/plain',
            '.js': 'application/javascript',
            '.gif': 'image/gif',
            '.png': 'image/png',
            '.jpg': 'image/jpeg',
            '.pdf': 'application/pdf',
            '.swf': 'application/x-shockwave-flash'
        };
        const v29 = v28[extname];
        var contentType = v29 || 'text-plain';
        switch (extname) {
        case '.css':
        case '.js':
        case '.html':
        case '.txt':
            encode = 'utf-8';
            break;
        }
        const v39 = function (err, data) {
            if (err) {
                const v30 = err.code;
                const v31 = v30 === 'ENOENT';
                if (v31) {
                    s = '404\uFF0C文件不存在';
                } else {
                    const v32 = err.code;
                    s = 'error: ' + v32;
                }
                const v33 = { 'Content-Type': 'text-plain' };
                const v34 = res.writeHead(404, v33);
                v34;
                const v35 = res.end(s);
                v35;
                return;
            }
            const v36 = { 'Content-Type': contentType };
            const v37 = res.writeHead(200, v36);
            v37;
            const v38 = res.end(data);
            v38;
        };
        const v40 = fs.readFile(pn, encode, v39);
        v40;
    };
    const v42 = http.createServer(v41);
    const v43 = v42.listen(port, '127.0.0.1');
    v43;
    const v44 = 'Server running at http://127.0.0.1:' + port;
    const v45 = console.log(v44);
    v45;
    const v46 = 'the dir is: "' + dir;
    const v47 = v46 + '"';
    const v48 = console.log(v47);
    v48;
};
exports.start = start;
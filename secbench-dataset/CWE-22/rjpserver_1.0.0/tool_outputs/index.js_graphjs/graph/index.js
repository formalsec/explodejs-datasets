var http = require('http');
var url = require('url');
var fs = require('fs');
const v30 = function (request, response) {
    const v17 = { 'content-type': 'text/html' };
    const v18 = response.writeHead('200', v17);
    v18;
    const v19 = response.write('<meta charset=utf-8>');
    v19;
    const v20 = request.url;
    const v21 = url.parse(v20);
    const v22 = v21.pathname;
    var path = '.' + v22;
    const v28 = function (error, file) {
        if (error) {
            const v23 = response.write('<meta charset=utf-8>');
            v23;
            const v24 = response.write('<strong>文件不存在</strong>');
            v24;
            const v25 = response.end();
            v25;
        } else {
            const v26 = response.write(file);
            v26;
            const v27 = response.end();
            v27;
        }
    };
    const v29 = fs.readFile(path, v28);
    v29;
};
const v31 = http.createServer(v30);
const v32 = v31.listen(8888);
v32;
var http = require('http');
var fs = require('fs');
const v12 = function (req, res) {
    const v8 = req.url;
    var path = './' + v8;
    const v10 = function (error, data) {
        const v9 = res.end(data);
        v9;
    };
    const v11 = fs.readFile(path, v10);
    v11;
};
const v13 = http.createServer(v12);
const v14 = v13.listen('8888');
v14;
var http = require('http');
var fs = require('fs');
const v14 = function (request, reponse) {
    const v9 = request.url;
    var path = './' + v9;
    const v12 = function (error, data) {
        if (error) {
            const v10 = reponse.end('this url is not found');
            v10;
        } else {
            const v11 = reponse.end(data);
            v11;
        }
    };
    const v13 = fs.readFile(path, v12);
    v13;
};
const v15 = http.createServer(v14);
const v16 = v15.listen('8888');
v16;
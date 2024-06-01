var http = require('http');
var path = require('path');
var fs = require('fs');
const v49 = process.cwd();
var config = {};
config.dir = v49;
const v50 = config.dir;
const v51 = console.log('\tAsset server using dir', v50);
v51;
const setCwd = function (dir) {
    config.dir = dir;
    const v52 = config.dir;
    const v53 = console.log('\tAsset server now using dir', v52);
    v53;
};
var loadFile = function (file, ifNoneMatch, callback) {
    const v54 = config.dir;
    file = path.join(v54, file);
    const v69 = function (err, stat) {
        if (err) {
            const v55 = callback(err, null);
            return v55;
        }
        const v56 = stat.size;
        const v57 = '"' + v56;
        const v58 = v57 + '-';
        const v59 = stat.mtime;
        const v60 = v59.getTime();
        const v61 = v58 + v60;
        var thisEtag = v61 + '"';
        const v62 = ifNoneMatch == thisEtag;
        const v63 = ifNoneMatch && v62;
        if (v63) {
            const v64 = callback(null, true, thisEtag);
            return v64;
        }
        const v67 = function (err, data) {
            let v65;
            if (err) {
                v65 = null;
            } else {
                v65 = data;
            }
            const v66 = callback(err, v65, false, thisEtag);
            v66;
        };
        const v68 = fs.readFile(file, v67);
        v68;
    };
    const v70 = fs.stat(file, v69);
    v70;
};
var server = http.createServer(handleRequest);
server.loadFile = loadFile;
server.setCwd = setCwd;
module.exports = server;
const handleRequest = function (req, res) {
    const v71 = req.url;
    const v72 = req.headers;
    const v73 = v72['if-none-match'];
    const v95 = function (err, body, notModified, etag) {
        var status;
        if (err) {
            const v74 = console.error(err);
            v74;
            if (notModified) {
                status = 304;
            } else {
                status = 404;
            }
        } else {
            if (notModified) {
                status = 304;
            } else {
                status = 200;
            }
        }
        var ct = '';
        const v75 = req.url;
        const v76 = v75.indexOf('.css');
        const v77 = -1;
        const v78 = v76 !== v77;
        if (v78) {
            ct = 'text/css';
        } else {
            const v79 = req.url;
            const v80 = v79.indexOf('.js');
            const v81 = -1;
            const v82 = v80 !== v81;
            if (v82) {
                ct = 'text/javascript';
            } else {
                const v83 = req.url;
                const v84 = v83.indexOf('.html');
                const v85 = -1;
                const v86 = v84 !== v85;
                if (v86) {
                    ct = 'text/html';
                } else {
                    const v87 = req.url;
                    const v88 = v87.indexOf('.png');
                    const v89 = -1;
                    const v90 = v88 !== v89;
                    if (v90) {
                        ct = 'image/png';
                    }
                }
            }
        }
        const v91 = {
            'content-type': ct,
            'cache-control': 'must-revalidate,private',
            'etag': etag
        };
        const v92 = res.writeHead(status, v91);
        v92;
        if (notModified) {
            const v93 = res.end();
            v93;
        } else {
            const v94 = res.end(body);
            v94;
        }
    };
    const v96 = loadFile(v71, v73, v95);
    v96;
};
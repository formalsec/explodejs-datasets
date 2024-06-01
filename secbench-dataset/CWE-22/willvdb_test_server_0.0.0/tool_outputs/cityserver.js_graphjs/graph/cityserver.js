const v130 = function (port, root) {
    var fs = require('fs');
    var http = require('http');
    var url = require('url');
    var ROOT_DIR = root;
    const isEmpty = function (str) {
        const v66 = !str;
        const v67 = str.length;
        const v68 = 0 === v67;
        const v69 = v66 || v68;
        return v69;
    };
    const v127 = function (req, res) {
        const v70 = req.url;
        var urlObj = url.parse(v70, true, false);
        const v71 = urlObj.pathname;
        const v72 = v71.indexOf('getcity');
        const v73 = -1;
        const v74 = v72 !== v73;
        if (v74) {
            const v96 = function (err, data) {
                if (err) {
                    const v75 = res.writeHead(200);
                    v75;
                    const v76 = res.end('There was an error getting your cities...');
                    v76;
                } else {
                    var resultArray = [];
                    const v77 = urlObj.query;
                    const v78 = v77['q'];
                    const v79 = isEmpty(v78);
                    const v80 = !v79;
                    if (v80) {
                        const v81 = data.toString();
                        var cities = v81.split('\n');
                        const v82 = urlObj.query;
                        const v83 = v82['q'];
                        const v84 = '^' + v83;
                        var myRe = new RegExp(v84);
                        i = 0
                        const v85 = cities.length;
                        let v86 = i < v85;
                        while (v86) {
                            const v88 = cities[i];
                            var result = v88.search(myRe);
                            const v89 = -1;
                            const v90 = result != v89;
                            if (v90) {
                                const v91 = cities[i];
                                var obj = {};
                                obj['city'] = v91;
                                const v92 = resultArray.push(obj);
                                v92;
                            }
                            const v87 = i++;
                            v86 = i < v85;
                        }
                    }
                    const v93 = res.writeHead(200);
                    v93;
                    const v94 = JSON.stringify(resultArray);
                    const v95 = res.end(v94);
                    v95;
                }
            };
            const v97 = fs.readFile('cities.dat.txt', v96);
            v97;
        } else {
            const v98 = urlObj.pathname;
            const v99 = v98 === '/';
            if (v99) {
                const v100 = ROOT_DIR + '/index.html';
                const v106 = function (err, data) {
                    if (err) {
                        const v101 = res.writeHead(404);
                        v101;
                        const v102 = JSON.stringify(err);
                        const v103 = res.end(v102);
                        v103;
                        return;
                    }
                    const v104 = res.writeHead(200);
                    v104;
                    const v105 = res.end(data);
                    v105;
                };
                const v107 = fs.readFile(v100, v106);
                v107;
            } else {
                const v108 = urlObj.pathname;
                const v109 = v108 === '/weather';
                if (v109) {
                    const v110 = ROOT_DIR + '/city-weather.html';
                    const v116 = function (err, data) {
                        if (err) {
                            const v111 = res.writeHead(404);
                            v111;
                            const v112 = JSON.stringify(err);
                            const v113 = res.end(v112);
                            v113;
                            return;
                        }
                        const v114 = res.writeHead(200);
                        v114;
                        const v115 = res.end(data);
                        v115;
                    };
                    const v117 = fs.readFile(v110, v116);
                    v117;
                } else {
                    const v118 = urlObj.pathname;
                    const v119 = ROOT_DIR + v118;
                    const v125 = function (err, data) {
                        if (err) {
                            const v120 = res.writeHead(404);
                            v120;
                            const v121 = JSON.stringify(err);
                            const v122 = res.end(v121);
                            v122;
                            return;
                        }
                        const v123 = res.writeHead(200);
                        v123;
                        const v124 = res.end(data);
                        v124;
                    };
                    const v126 = fs.readFile(v119, v125);
                    v126;
                }
            }
        }
    };
    const v128 = http.createServer(v127);
    const v129 = v128.listen(port);
    v129;
};
exports.run = v130;
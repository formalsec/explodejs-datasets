const v19 = require('./vcs/git');
const v20 = require('./vcs/svn');
var blamerVCS = {};
blamerVCS['git'] = v19;
blamerVCS['svn'] = v20;
var Blamer = function Blamer(type, args) {
    this.args = args;
    this.type = type || 'git';
};
const v21 = Blamer.prototype;
const blameByFile = function (file, args) {
    const v22 = this.type;
    const v23 = blamerVCS.hasOwnProperty(v22);
    const v24 = !v23;
    if (v24) {
        const v25 = this.type;
        const v26 = 'VCS "' + v25;
        const v27 = v26 + '" don\'t supported';
        const v28 = new Error(v27);
        throw v28;
    }
    const v29 = typeof args;
    const v30 = v29 === 'string';
    const v31 = this.args;
    if (v30) {
        args = args;
    } else {
        args = v31;
    }
    const v32 = this.type;
    const v33 = blamerVCS[v32](file, args);
    return v33;
};
v21.blameByFile = blameByFile;
const v34 = Blamer.prototype;
const v36 = function () {
    const v35 = this.type;
    return v35;
};
v34.getType = v36;
module.exports = Blamer;
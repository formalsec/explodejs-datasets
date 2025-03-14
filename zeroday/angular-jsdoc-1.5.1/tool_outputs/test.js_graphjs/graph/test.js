var angularJsdoc = require('./index.js');
const v60 = {
    configure: 'common/test_conf.json',
    template: 'default',
    destination: 'default/docs',
    readme: 'sample-codes/README.md'
};
const v61 = angularJsdoc('sample-codes', v60);
v61;
const v62 = {
    configure: 'common/test_conf.json',
    template: 'angular-template',
    destination: 'angular-template/docs',
    readme: 'sample-codes/README.md'
};
const v63 = angularJsdoc('sample-codes', v62);
v63;
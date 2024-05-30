var helper = require('./helper');
const v69 = function (helper) {
    const v51 = function (options, callback) {
        const v50 = helper.applyEffect('blur', options, callback);
        v50;
    };
    const v53 = function (options, callback) {
        const v52 = helper.applyEffect('gaussian', options, callback);
        v52;
    };
    const v55 = function (options, callback) {
        const v54 = helper.applyEffect('sharpen', options, callback);
        v54;
    };
    const v57 = function (options, callback) {
        const v56 = helper.applyEffect('unsharp', options, callback);
        v56;
    };
    const v59 = function (options, callback) {
        const v58 = helper.applyEffect('threshold', options, callback);
        v58;
    };
    const v61 = function (options, callback) {
        const v60 = helper.applyEffect('oilpaint', options, callback);
        v60;
    };
    const v63 = function (options, callback) {
        const v62 = helper.applyEffect('sketch', options, callback);
        v62;
    };
    const v65 = function (options, callback) {
        const v64 = helper.applyEffect('metal', options, callback);
        v64;
    };
    const v67 = function (options, callback) {
        const v66 = helper.applyEffect('edge', options, callback);
        v66;
    };
    const v68 = {};
    v68.blur = v51;
    v68.gaussian = v53;
    v68.sharpen = v55;
    v68.unsharp = v57;
    v68.threshold = v59;
    v68.oilpaint = v61;
    v68.sketch = v63;
    v68.metal = v65;
    v68.edge = v67;
    return v68;
};
const v70 = v69(helper);
module.exports = v70;
const v42 = function (grunt) {
    'use strict';
    const v22 = grunt.util;
    var _ = v22._;
    const v41 = function (key, value) {
        var node = this;
        let parts;
        const v23 = grunt.util;
        const v24 = v23.kindOf(key);
        const v25 = v24 === 'array';
        const v26 = key.toString();
        const v27 = v26.split('.');
        if (v25) {
            parts = key;
        } else {
            parts = v27;
        }
        const v28 = arguments.length;
        const v29 = v28 === 1;
        if (v29) {
            const v33 = function (part) {
                const v30 = grunt.util;
                node = node[part];
                const v31 = v30.kindOf(node);
                const v32 = v31 !== 'undefined';
                return v32;
            };
            const v34 = _.each(parts, v33);
            v34;
        } else {
            key = parts.pop();
            const v39 = function (part) {
                const v35 = grunt.util;
                const v36 = node[part];
                const v37 = v35.kindOf(v36);
                switch (v37) {
                case 'object':
                case 'array':
                    node = node[part];
                    break;
                default:
                    const v38 = {};
                    node.part = v38;
                    node = node[part];
                    break;
                }
            };
            const v40 = _.each(parts, v39);
            v40;
            node.key = value;
            node = node[key];
        }
        return node;
    };
    return v41;
};
module.exports = v42;
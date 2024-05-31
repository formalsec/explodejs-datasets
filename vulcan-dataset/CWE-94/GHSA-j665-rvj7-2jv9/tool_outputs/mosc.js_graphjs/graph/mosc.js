var MoscBase = function (evaluation_context_dictionary) {
    this.eval_ctx_dict = evaluation_context_dictionary;
    const v64 = {};
    this.baseObject = v64;
    this.noMoreBuild = false;
    const emptyCheck = function (value, message) {
        const v65 = typeof value;
        const v66 = v65 == 'undefined';
        const v67 = !value;
        const v68 = v66 || v67;
        if (v68) {
            const v69 = new Error(message);
            throw v69;
        }
    };
    const v96 = function (key, properties, baseObject, eval_dict) {
        const get_eval_string = function (path) {
            const v70 = path.match(/\*([a-zA-Z_0-9]+)\*/);
            var eval_prop = v70[1];
            const v71 = 'eval_dict["' + eval_prop;
            const v72 = v71 + '"]';
            const v73 = path.replace(/\*[a-zA-Z_0-9]+\*/, '');
            const v74 = v72 + v73;
            return v74;
        };
        var propertyBase = {};
        if (properties) {
            const v75 = baseObject[key];
            const v76 = {};
            baseObject[key] = v75 || v76;
            propertyBase = baseObject[key];
        } else {
            propertyBase = baseObject;
            properties = key;
        }
        properties = properties.split(',');
        var properties_length = properties.length;
        var property_parts = null;
        var i = 0;
        let v77 = i < properties_length;
        while (v77) {
            const v79 = properties[i];
            const v80 = v79.trim();
            properties[i] = v80;
            const v81 = properties[i];
            property_parts = v81.split(':');
            const v82 = property_parts[0];
            const v83 = emptyCheck(v82, 'Invalid key:value pair passed');
            v83;
            const v84 = property_parts[1];
            const v85 = emptyCheck(v84, 'Invalid key:value pair passed');
            v85;
            const v86 = property_parts[0];
            const v87 = v86.trim();
            property_parts[0] = v87;
            const v88 = property_parts[1];
            var pvalue = v88.trim();
            const v89 = pvalue.indexOf('*');
            const v90 = v89 < 0;
            if (v90) {
                const v91 = property_parts[0];
                propertyBase[v91] = pvalue;
            } else {
                try {
                    const v93 = get_eval_string(pvalue);
                    const v94 = eval(v93);
                    propertyBase[v92] = v94;
                } catch (e) {
                    const v95 = new Error('Context not found in eval_dict');
                    throw v95;
                }
            }
            const v78 = i++;
            v77 = i < properties_length;
        }
        return baseObject;
    };
    this.parse_properties = v96;
    const v104 = function (property_key, properties) {
        const v97 = emptyCheck(property_key, 'No prop key passed');
        v97;
        properties = properties || null;
        const v98 = this.baseObject;
        const v99 = this.eval_ctx_dict;
        const v100 = this.parse_properties(property_key, properties, v98, v99);
        v100;
        const v101 = this.noMoreBuild;
        const v102 = this.baseObject;
        let v103;
        if (v101) {
            v103 = v102;
        } else {
            v103 = this;
        }
        return v103;
    };
    this.build = v104;
    const v124 = function (depth_path, properties) {
        const v105 = emptyCheck(depth_path, 'No object path passed');
        v105;
        var paths = depth_path.split('.');
        var buildBase = this.baseObject;
        (x = 0)
        const v106 = paths.length;
        let v107 = x < v106;
        while (v107) {
            const v109 = paths[x];
            const v110 = buildBase[v109];
            if (v110) {
                const v111 = paths[x];
                const v112 = buildBase[v111];
                const v113 = typeof v112;
                const v114 = v113 == 'object';
                if (v114) {
                    const v115 = paths[x];
                    buildBase = buildBase[v115];
                } else {
                    const v116 = new Error('Path not an object');
                    throw v116;
                }
            } else {
                const v117 = paths[x];
                const v118 = {};
                buildBase.v117 = v118;
                buildBase = buildBase[v117];
            }
            const v108 = x++;
            v107 = x < v106;
        }
        if (properties) {
            const v119 = this.eval_ctx_dict;
            const v120 = this.parse_properties(properties, null, buildBase, v119);
            v120;
        }
        const v121 = this.noMoreBuild;
        const v122 = this.baseObject;
        let v123;
        if (v121) {
            v123 = v122;
        } else {
            v123 = this;
        }
        return v123;
    };
    this.buildIn = v124;
    const v126 = function () {
        this.noMoreBuild = true;
        const v125 = this.baseObject;
        return v125;
    };
    this.end = v126;
};
module.exports = MoscBase;
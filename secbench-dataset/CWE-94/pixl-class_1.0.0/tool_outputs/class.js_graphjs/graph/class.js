var util = require('util');
var events = require('events');
const v136 = function (members) {
    const v69 = !members;
    if (v69) {
        members = {};
    }
    var constructor = null;
    const v70 = members.__parent;
    if (v70) {
        const v71 = members.__construct;
        if (v71) {
            constructor = members.__construct;
        } else {
            const v72 = members.__parent;
            var code = v72.toString();
            const v73 = code.indexOf('(');
            const v74 = v73 + 1;
            const v75 = code.indexOf(')');
            var args = code.substring(v74, v75);
            const v76 = code.indexOf('{');
            const v77 = v76 + 1;
            const v78 = code.lastIndexOf('}');
            var inner_code = code.substring(v77, v78);
            const v79 = 'constructor = function (' + args;
            const v80 = v79 + ') {';
            const v81 = v80 + inner_code;
            const v82 = v81 + '};';
            const v83 = eval(v82);
            v83;
        }
        const v84 = members.__parent;
        const v85 = util.inherits(constructor, v84);
        v85;
        const v86 = members.__parent;
        const v87 = delete v86;
        v87;
    } else {
        const v88 = members.__construct;
        const v89 = function () {
        };
        constructor = v88 || v89;
    }
    const v90 = members.__construct;
    const v91 = delete v90;
    v91;
    const v92 = members.__static;
    if (v92) {
        let key;
        const v93 = members.__static;
        for (key in v93) {
            const v94 = members.__static;
            const v95 = v94[key];
            constructor[key] = v95;
        }
        const v96 = members.__static;
        const v97 = delete v96;
        v97;
    }
    const v98 = members.__events;
    const v99 = v98 !== false;
    if (v99) {
        const v100 = members.__mixins;
        const v101 = !v100;
        if (v101) {
            members.__mixins = [];
        }
        const v102 = members.__mixins;
        const v103 = events.EventEmitter;
        const v104 = v102.indexOf(v103);
        const v105 = -1;
        const v106 = v104 == v105;
        if (v106) {
            const v107 = members.__mixins;
            const v108 = events.EventEmitter;
            const v109 = v107.push(v108);
            v109;
        }
    }
    const v110 = members.__events;
    const v111 = delete v110;
    v111;
    const v112 = members.__mixins;
    if (v112) {
        var idx = 0;
        const v113 = members.__mixins;
        var len = v113.length;
        let v114 = idx < len;
        while (v114) {
            const v116 = members.__mixins;
            var class_obj = v116[idx];
            let key;
            const v117 = class_obj.prototype;
            for (key in v117) {
                const v118 = key.match(/^__/);
                const v119 = !v118;
                const v120 = constructor.prototype;
                const v121 = v120[key];
                const v122 = typeof v121;
                const v123 = v122 == 'undefined';
                const v124 = v119 && v123;
                if (v124) {
                    const v125 = constructor.prototype;
                    const v126 = class_obj.prototype;
                    const v127 = v126[key];
                    v125[key] = v127;
                }
            }
            var static_members = class_obj.__static;
            if (static_members) {
                let key;
                for (key in static_members) {
                    const v128 = constructor[key];
                    const v129 = typeof v128;
                    const v130 = v129 == 'undefined';
                    if (v130) {
                        const v131 = static_members[key];
                        constructor[key] = v131;
                    }
                }
            }
            const v115 = idx++;
            v114 = idx < len;
        }
        const v132 = members.__mixins;
        const v133 = delete v132;
        v133;
    }
    let key;
    for (key in members) {
        const v134 = constructor.prototype;
        const v135 = members[key];
        v134[key] = v135;
    }
    return constructor;
};
exports.create = v136;
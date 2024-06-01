const v85 = function (object, path, value) {
    var reference = Reference.createFromPath(object, path);
    const v83 = reference.set(value);
    v83;
    const v84 = reference.resolve();
    return v84;
};
const v86 = {};
v86.set = v85;
module.exports = v86;
const Reference = function (pointer, field, parent) {
    this.pointer = pointer;
    this.field = field;
    this.parent = parent || null;
};
const v87 = Reference.prototype;
const v94 = function (value) {
    const v88 = this.field;
    const v89 = typeof v88;
    const v90 = v89 === 'undefined';
    if (v90) {
        const v91 = new Error('Cannot set, field is undefined');
        throw v91;
        return null;
    }
    const v92 = this.pointer;
    const v93 = this.field;
    v92[v93] = value;
    return this;
};
v87.set = v94;
const v95 = Reference.prototype;
const v98 = function () {
    var reference = this;
    let v96 = reference.parent;
    while (v96) {
        reference = reference.getParent();
        v96 = reference.parent;
    }
    const v97 = reference.pointer;
    return v97;
};
v95.resolve = v98;
const v104 = function (pointer, path) {
    var reference = new Reference(pointer);
    path = path.split('.');
    const v102 = function (field) {
        var isNumber = checkIfStringIsNumber(field);
        let hasParent;
        const v99 = reference.getParent();
        if (v99) {
            hasParent = true;
        } else {
            hasParent = false;
        }
        if (isNumber) {
            field = parseInt(field);
        }
        reference = reference.getChild(field);
        const v100 = isNumber && hasParent;
        if (v100) {
            const v101 = reference.convertToArray();
            v101;
        }
    };
    const v103 = path.forEach(v102);
    v103;
    return reference;
};
Reference.createFromPath = v104;
const checkIfStringIsNumber = function (field) {
    const v105 = /^\d+$/.test(field);
    return v105;
};
const v106 = Reference.prototype;
const v109 = function () {
    const v107 = this.parent;
    const v108 = v107 || null;
    return v108;
};
v106.getParent = v109;
const v110 = Reference.prototype;
const v117 = function (field) {
    var parent = this;
    const v111 = this.field;
    const v112 = !v111;
    if (v112) {
        const v113 = this.pointer;
        const v114 = new Reference(v113, field, parent);
        return v114;
    }
    const v115 = this.initializeChildAsObject();
    v115;
    var pointer = this.get();
    const v116 = new Reference(pointer, field, parent);
    return v116;
};
v110.getChild = v117;
const v118 = Reference.prototype;
const v125 = function () {
    const v119 = this.field;
    const v120 = !v119;
    if (v120) {
        const v121 = this.pointer;
        return v121;
    } else {
        const v122 = this.pointer;
        const v123 = this.field;
        const v124 = v122[v123];
        return v124;
    }
};
v118.get = v125;
const v126 = Reference.prototype;
const v131 = function () {
    const v127 = this.getType();
    const v128 = v127 !== 'object';
    if (v128) {
        const v129 = {};
        const v130 = this.set(v129);
        v130;
    }
    return this;
};
v126.initializeChildAsObject = v131;
const v132 = Reference.prototype;
const v137 = function (value) {
    const v133 = this.pointer;
    const v134 = this.field;
    const v135 = v133[v134];
    const v136 = typeof v135;
    return v136;
};
v132.getType = v137;
const v138 = Reference.prototype;
const v144 = function () {
    const v139 = this.parent;
    const v140 = !v139;
    if (v140) {
        const v141 = new Error('Cannot convert to array without a parent reference!');
        throw v141;
        return null;
    }
    const v142 = this.parent;
    const v143 = v142.convertChildToArray();
    this.pointer = v143;
};
v138.convertToArray = v144;
const v145 = Reference.prototype;
const v152 = function () {
    var child = this.get();
    const v146 = Array.isArray(child);
    const v147 = !v146;
    if (v147) {
        const v148 = [];
        const v149 = this.set(v148);
        v149;
        const v150 = this.mapKeys(child);
        v150;
    }
    const v151 = this.get();
    return v151;
};
v145.convertChildToArray = v152;
const v153 = Reference.prototype;
const v164 = function (source) {
    const v154 = typeof source;
    const v155 = v154 !== 'object';
    if (v155) {
        const v156 = new Error('Cannot map from source, source is not an object');
        throw v156;
        return null;
    }
    const v157 = Object.keys(source);
    const v162 = function (key) {
        const v158 = this.pointer;
        const v159 = this.field;
        const v160 = v158[v159];
        const v161 = pointer[key];
        v160[key] = v161;
    };
    const v163 = v157.forEach(v162);
    v163;
    return this;
};
v153.mapKeys = v164;
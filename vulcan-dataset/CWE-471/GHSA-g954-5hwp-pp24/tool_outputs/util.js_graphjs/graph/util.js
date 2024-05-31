'use strict';
const v93 = require('./util/minimal');
module.exports = v93;
var util = module.exports;
var roots = require('./roots');
var Type;
var Enum;
const v94 = require('@protobufjs/codegen');
util.codegen = v94;
const v95 = require('@protobufjs/fetch');
util.fetch = v95;
const v96 = require('@protobufjs/path');
util.path = v96;
const v97 = util.inquire('fs');
util.fs = v97;
const toArray = function (object) {
    if (object) {
        var keys = Object.keys(object);
        const v98 = keys.length;
        var array = new Array(v98);
        var index = 0;
        const v99 = keys.length;
        let v100 = index < v99;
        while (v100) {
            const v101 = index++;
            const v102 = keys[v101];
            const v103 = object[v102];
            array[index] = v103;
            v100 = index < v99;
        }
        return array;
    }
    const v104 = [];
    return v104;
};
util.toArray = toArray;
const toObject = function (array) {
    var object = {};
    var index = 0;
    const v105 = array.length;
    let v106 = index < v105;
    while (v106) {
        const v107 = index++;
        var key = array[v107];
        const v108 = index++;
        var val = array[v108];
        const v109 = val !== undefined;
        if (v109) {
            object[key] = val;
        }
        v106 = index < v105;
    }
    return object;
};
util.toObject = toObject;
var safePropBackslashRe = /\\/g;
var safePropQuoteRe = /"/g;
const isReserved = function (name) {
    const v110 = /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(name);
    return v110;
};
util.isReserved = isReserved;
const safeProp = function (prop) {
    const v111 = /^[$\w_]+$/.test(prop);
    const v112 = !v111;
    const v113 = util.isReserved(prop);
    const v114 = v112 || v113;
    if (v114) {
        const v115 = prop.replace(safePropBackslashRe, '\\\\');
        const v116 = v115.replace(safePropQuoteRe, '\\"');
        const v117 = '["' + v116;
        const v118 = v117 + '"]';
        return v118;
    }
    const v119 = '.' + prop;
    return v119;
};
util.safeProp = safeProp;
const ucFirst = function (str) {
    const v120 = str.charAt(0);
    const v121 = v120.toUpperCase();
    const v122 = str.substring(1);
    const v123 = v121 + v122;
    return v123;
};
util.ucFirst = ucFirst;
var camelCaseRe = /_([a-z])/g;
const camelCase = function (str) {
    const v124 = str.substring(0, 1);
    const v125 = str.substring(1);
    const v127 = function ($0, $1) {
        const v126 = $1.toUpperCase();
        return v126;
    };
    const v128 = v125.replace(camelCaseRe, v127);
    const v129 = v124 + v128;
    return v129;
};
util.camelCase = camelCase;
const compareFieldsById = function (a, b) {
    const v130 = a.id;
    const v131 = b.id;
    const v132 = v130 - v131;
    return v132;
};
util.compareFieldsById = compareFieldsById;
const decorateType = function (ctor, typeName) {
    const v133 = ctor.$type;
    if (v133) {
        const v134 = ctor.$type;
        const v135 = v134.name;
        const v136 = v135 !== typeName;
        const v137 = typeName && v136;
        if (v137) {
            const v138 = util.decorateRoot;
            const v139 = ctor.$type;
            const v140 = v138.remove(v139);
            v140;
            const v141 = ctor.$type;
            v141.name = typeName;
            const v142 = util.decorateRoot;
            const v143 = ctor.$type;
            const v144 = v142.add(v143);
            v144;
        }
        const v145 = ctor.$type;
        return v145;
    }
    const v146 = !Type;
    if (v146) {
        Type = require('./type');
    }
    const v147 = ctor.name;
    const v148 = typeName || v147;
    var type = new Type(v148);
    const v149 = util.decorateRoot;
    const v150 = v149.add(type);
    v150;
    type.ctor = ctor;
    const v151 = {
        value: type,
        enumerable: false
    };
    const v152 = Object.defineProperty(ctor, '$type', v151);
    v152;
    const v153 = ctor.prototype;
    const v154 = {
        value: type,
        enumerable: false
    };
    const v155 = Object.defineProperty(v153, '$type', v154);
    v155;
    return type;
};
util.decorateType = decorateType;
var decorateEnumIndex = 0;
const decorateEnum = function (object) {
    const v156 = object.$type;
    if (v156) {
        const v157 = object.$type;
        return v157;
    }
    const v158 = !Enum;
    if (v158) {
        Enum = require('./enum');
    }
    const v159 = decorateEnumIndex++;
    const v160 = 'Enum' + v159;
    var enm = new Enum(v160, object);
    const v161 = util.decorateRoot;
    const v162 = v161.add(enm);
    v162;
    const v163 = {
        value: enm,
        enumerable: false
    };
    const v164 = Object.defineProperty(object, '$type', v163);
    v164;
    return enm;
};
util.decorateEnum = decorateEnum;
const setProperty = function (dst, path, value) {
    const setProp = function (dst, path, value) {
        var part = path.shift();
        const v165 = path.length;
        const v166 = v165 > 0;
        if (v166) {
            const v167 = dst[part];
            const v168 = {};
            const v169 = v167 || v168;
            const v170 = setProp(v169, path, value);
            dst[part] = v170;
        } else {
            var prevValue = dst[part];
            if (prevValue) {
                const v171 = [];
                const v172 = v171.concat(prevValue);
                value = v172.concat(value);
            }
            dst[part] = value;
        }
        return dst;
    };
    const v173 = typeof dst;
    const v174 = v173 !== 'object';
    if (v174) {
        const v175 = TypeError('dst must be an object');
        throw v175;
    }
    const v176 = !path;
    if (v176) {
        const v177 = TypeError('path must be specified');
        throw v177;
    }
    path = path.split('.');
    const v178 = setProp(dst, path, value);
    return v178;
};
util.setProperty = setProperty;
const v182 = function () {
    const v179 = roots['decorated'];
    const v180 = require('./root');
    const v181 = v179 || (roots['decorated'] = new v180());
    return v181;
};
const v183 = { get: v182 };
const v184 = Object.defineProperty(util, 'decorateRoot', v183);
v184;
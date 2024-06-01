const template = function (state, options) {
    const tpl = function (expression, ...args) {
        let last;
        const v83 = tpl.lines;
        const v84 = () => {
            return 'i';
        };
        const v85 = expression.replace(/%i/g, v84);
        const v89 = (match, index) => {
            const v86 = index - 1;
            const v87 = args[v86];
            const v88 = `${ v87 }`;
            return v88;
        };
        const v90 = v85.replace(/\$(\d)/g, v89);
        const v93 = () => {
            const v91 = args.length;
            if (v91) {
                last = args.shift();
            }
            const v92 = `${ last }`;
            return v92;
        };
        const v94 = v90.replace(/(%[sd])/g, v93);
        const v95 = v83.push(v94);
        v95;
        return tpl;
    };
    let error;
    const v96 = options.errorHandler;
    const v97 = typeof v96;
    const v98 = v97 === 'function';
    const v99 = options.errorHandler;
    const v102 = function defaultErrorHandler(errorType) {
        const v100 = tpl.data;
        const v101 = `return "${ errorType }: ${ v100 }";`;
        return v101;
    };
    if (v98) {
        error = v99;
    } else {
        error = v102;
    }
    const v103 = [];
    const v114 = function (expression) {
        const v104 = tpl.cached;
        const v105 = tpl.cached;
        const v106 = v105.length;
        const v107 = v106 - 1;
        const layer = v104[v107];
        const v108 = layer[expression];
        if (v108) {
            const v109 = layer[expression];
            const v110 = `i${ v109 }`;
            return v110;
        }
        tpl.cachedIndex += 1;
        const v111 = tpl.cachedIndex;
        layer[expression] = v111;
        const v112 = layer[expression];
        const v113 = `(i${ v112 } = ${ expression })`;
        return v113;
    };
    const v115 = ['data'];
    const v116 = [];
    const v117 = ['schema'];
    const v120 = function (url) {
        const v118 = state.link(url);
        const v119 = `f${ v118 }`;
        return v119;
    };
    const v127 = function (schema) {
        const v121 = tpl.cached;
        const v122 = {};
        const v123 = v121.push(v122);
        v123;
        const v124 = state.visit(schema, tpl);
        v124;
        const v125 = tpl.cached;
        const v126 = v125.pop();
        v126;
    };
    const v128 = {
        cachedIndex: 0,
        cached: v103,
        cache: v114,
        data: v115,
        error,
        lines: v116,
        schema: v117,
        push: tpl,
        link: v120,
        visit: v127
    };
    const v129 = Object.assign(tpl, v128);
    v129;
    const dataToString = function () {
        const v130 = this.join('.');
        const v131 = v130.replace(/\.\[/g, '[');
        return v131;
    };
    const v132 = tpl.data;
    v132.toString = dataToString;
    const v133 = tpl.schema;
    v133.toString = dataToString;
    return tpl;
};
const restore = function (source, schema, {inner} = {}) {
    const v134 = new Function('schema', source);
    const tpl = v134(schema);
    const v135 = !inner;
    if (v135) {
        const toString = function () {
            return source;
        };
        tpl.toString = toString;
    }
    return tpl;
};
const body = function (tpl, state, {inner, errorHandler} = {}) {
    let dynamicVariables = '';
    let errors = '';
    let dynamicFunctions = '';
    const v136 = tpl.cachedIndex;
    if (v136) {
        const v137 = tpl.cachedIndex;
        const v138 = Array(v137);
        const v139 = Array(...v138);
        const v141 = (value, i) => {
            const v140 = i + 1;
            return v140;
        };
        const v142 = v139.map(v141);
        const v143 = v142.join(',i');
        dynamicVariables = `var i${ v143 };`;
    }
    if (errorHandler) {
        dynamicVariables += 'var errors = [];';
        errors = 'if(errors.length) return errors;';
    }
    const v144 = !inner;
    const v145 = state.context;
    const v146 = v145.length;
    const v147 = v144 && v146;
    if (v147) {
        const functions = [];
        const references = [];
        const v148 = state.context;
        const v158 = (value, i) => {
            const v149 = typeof value;
            const v150 = v149 === 'number';
            if (v150) {
                const v151 = i + 1;
                const v152 = value + 1;
                const v153 = `${ v151 }=f${ v152 }`;
                const v154 = references.push(v153);
                v154;
                return;
            }
            const v155 = i + 1;
            const v156 = `${ v155 }=${ value }`;
            const v157 = functions.push(v156);
            v157;
        };
        const v159 = v148.forEach(v158);
        v159;
        const v160 = functions.concat(references);
        const v161 = v160.join(',f');
        dynamicFunctions = `var f${ v161 };`;
    }
    const v162 = tpl.lines;
    const v163 = v162.join('\n');
    const source = `${ dynamicFunctions }
    function f0(data){
      "use strict";
      ${ dynamicVariables }
      ${ v163 }
      ${ errors }
    }
    return f0;`;
    return source;
};
const v164 = {};
v164.body = body;
v164.restore = restore;
v164.template = template;
module.exports = v164;
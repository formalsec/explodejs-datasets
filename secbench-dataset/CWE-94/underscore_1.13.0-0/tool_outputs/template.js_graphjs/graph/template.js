import defaults from './defaults.js';
import _ from './underscore.js';
import './templateSettings.js';
var noMatch = /(.)^/;
var escapes = {};
escapes['\''] = '\'';
escapes['\\'] = '\\';
escapes['\r'] = 'r';
escapes['\n'] = 'n';
escapes['\u2028'] = 'u2028';
escapes['\u2029'] = 'u2029';
var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;
const escapeChar = function (match) {
    const v38 = escapes[match];
    const v39 = '\\' + v38;
    return v39;
};
export default const template = function (text, settings, oldSettings) {
    const v40 = !settings;
    const v41 = v40 && oldSettings;
    if (v41) {
        settings = oldSettings;
    }
    const v42 = {};
    const v43 = _.templateSettings;
    settings = defaults(v42, settings, v43);
    const v44 = settings.escape;
    const v45 = v44 || noMatch;
    const v46 = v45.source;
    const v47 = settings.interpolate;
    const v48 = v47 || noMatch;
    const v49 = v48.source;
    const v50 = settings.evaluate;
    const v51 = v50 || noMatch;
    const v52 = v51.source;
    const v53 = [
        v46,
        v49,
        v52
    ];
    const v54 = v53.join('|');
    const v55 = v54 + '|$';
    var matcher = RegExp(v55, 'g');
    var index = 0;
    var source = '__p+=\'';
    const v61 = function (match, escape, interpolate, evaluate, offset) {
        const v56 = text.slice(index, offset);
        source += v56.replace(escapeRegExp, escapeChar);
        const v57 = match.length;
        index = offset + v57;
        if (escape) {
            const v58 = '\'+\n((__t=(' + escape;
            source += v58 + '))==null?\'\':_.escape(__t))+\n\'';
        } else {
            if (interpolate) {
                const v59 = '\'+\n((__t=(' + interpolate;
                source += v59 + '))==null?\'\':__t)+\n\'';
            } else {
                if (evaluate) {
                    const v60 = '\';\n' + evaluate;
                    source += v60 + '\n__p+=\'';
                }
            }
        }
        return match;
    };
    const v62 = text.replace(matcher, v61);
    v62;
    source += '\';\n';
    const v63 = settings.variable;
    const v64 = !v63;
    if (v64) {
        const v65 = 'with(obj||{}){\n' + source;
        source = v65 + '}\n';
    }
    const v66 = 'var __t,__p=\'\',__j=Array.prototype.join,' + 'print=function(){__p+=__j.call(arguments,\'\');};\n';
    const v67 = v66 + source;
    source = v67 + 'return __p;\n';
    var render;
    try {
        const v68 = settings.variable;
        const v69 = v68 || 'obj';
        render = new Function(v69, '_', source);
    } catch (e) {
        e.source = source;
        throw e;
    }
    var template = function (data) {
        const v70 = render.call(this, data, _);
        return v70;
    };
    const v71 = settings.variable;
    var argument = v71 || 'obj';
    const v72 = 'function(' + argument;
    const v73 = v72 + '){\n';
    const v74 = v73 + source;
    template.source = v74 + '}';
    return template;
};
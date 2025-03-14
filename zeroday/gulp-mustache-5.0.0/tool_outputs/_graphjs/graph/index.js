'use strict';
var through = require('through2');
var PluginError = require('plugin-error');
var replaceExtension = require('replace-ext');
var mustache = require('mustache');
var fs = require('fs');
var path = require('path');
var escapeRegex = require('escape-string-regexp');
const v133 = function (view, options, partials) {
    const v68 = {};
    options = options || v68;
    const v69 = {};
    partials = partials || v69;
    var viewError = null;
    const v70 = options.tags;
    if (v70) {
        const v71 = options.tags;
        mustache.tags = v71;
    }
    const v72 = typeof view;
    const v73 = v72 === 'string';
    if (v73) {
        try {
            const v74 = fs.readFileSync(view, 'utf8');
            view = JSON.parse(v74);
        } catch (e) {
            viewError = e;
        }
    }
    const v105 = function (file, enc, cb) {
        const v75 = file.isNull();
        if (v75) {
            const v76 = this.push(file);
            v76;
            const v77 = cb();
            return v77;
        }
        const v78 = file.isStream();
        if (v78) {
            const v79 = new PluginError('gulp-mustache', 'Streaming not supported');
            const v80 = this.emit('error', v79);
            v80;
        }
        if (viewError) {
            const v81 = viewError.toString();
            const v82 = new PluginError('gulp-mustache', v81);
            const v83 = this.emit('error', v82);
            v83;
        }
        const v84 = file.contents;
        var template = v84.toString();
        try {
            const v85 = file.path;
            const v86 = loadPartials.call(this, template, v85);
            v86;
        } catch (e) {
            const v87 = e.message;
            const v88 = new PluginError('gulp-mustache', v87);
            const v89 = this.emit('error', v88);
            v89;
        }
        try {
            const v90 = file.data;
            const v91 = v90 || view;
            const v92 = mustache.render(template, v91, partials);
            const v93 = Buffer.from(v92);
            file.contents = v93;
        } catch (e) {
            const v94 = e.message;
            const v95 = new PluginError('gulp-mustache', v94);
            const v96 = this.emit('error', v95);
            v96;
        }
        const v97 = options.extension;
        const v98 = typeof v97;
        const v99 = v98 === 'string';
        if (v99) {
            const v100 = file.path;
            const v101 = options.extension;
            const v102 = replaceExtension(v100, v101);
            file.path = v102;
        }
        const v103 = this.push(file);
        v103;
        const v104 = cb();
        v104;
    };
    const v106 = through.obj(v105);
    return v106;
    const loadPartials = function (template, templatePath) {
        var templateDir = path.dirname(templatePath);
        const v107 = mustache.tags;
        const v108 = v107[0];
        const v109 = escapeRegex(v108);
        const v110 = v109 + '>\\s*(\\S+)\\s*';
        const v111 = mustache.tags;
        const v112 = v111[1];
        const v113 = escapeRegex(v112);
        const v114 = v110 + v113;
        var partialRegexp = new RegExp(v114, 'g');
        var partialMatch;
        while (partialMatch = partialRegexp.exec(template)) {
            var partialName = partialMatch[1];
            const v115 = partials[partialName];
            const v116 = !v115;
            if (v116) {
                try {
                    var partialPath = null;
                    var partial = null;
                    const v117 = path.extname(partialName);
                    const v118 = v117 !== '';
                    if (v118) {
                        partialPath = path.resolve(templateDir, partialName);
                        partial = fs.readFileSync(partialPath, 'utf8');
                    } else {
                        partialPath = path.resolve(templateDir, partialName);
                        const v119 = fs.existsSync(partialPath);
                        if (v119) {
                            partial = fs.readFileSync(partialPath, 'utf8');
                        } else {
                            const v120 = options.extension;
                            const v121 = typeof v120;
                            const v122 = v121 === 'string';
                            if (v122) {
                                const v123 = options.extension;
                                const v124 = partialName + v123;
                                partialPath = path.resolve(templateDir, v124);
                                const v125 = fs.existsSync(partialPath);
                                if (v125) {
                                    partial = fs.readFileSync(partialPath, 'utf8');
                                }
                            }
                            const v126 = partial === null;
                            if (v126) {
                                const v127 = partialName + '.mustache';
                                partialPath = path.resolve(templateDir, v127);
                                partial = fs.readFileSync(partialPath, 'utf8');
                            }
                        }
                    }
                    partials[partialName] = partial;
                    const v128 = loadPartials.call(this, partial, partialPath);
                    v128;
                } catch (ex) {
                    const v129 = ex.message;
                    const v130 = 'Unable to load partial file: ' + v129;
                    const v131 = new PluginError('gulp-mustache', v130);
                    const v132 = this.emit('error', v131);
                    v132;
                }
            }
        }
    };
};
module.exports = v133;
const v134 = module.exports;
v134.mustache = mustache;
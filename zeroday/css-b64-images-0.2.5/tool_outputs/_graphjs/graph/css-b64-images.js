'use strict';
var fs = require('fs');
var Path = require('path');
var MAX_SIZE = 4096;
var imgRegex = /url\s?\(['"]?(.*?)(?=['"]?\))/gi;
var absoluteUrlRegex = /^\//;
var externalUrlRegex = /http/;
var mediatypes = {};
mediatypes['.eot'] = 'application/vnd.ms-fontobject';
mediatypes['.gif'] = 'image/gif';
mediatypes['.ico'] = 'image/vnd.microsoft.icon';
mediatypes['.jpg'] = 'image/jpeg';
mediatypes['.jpeg'] = 'image/jpeg';
mediatypes['.otf'] = 'application/x-font-opentype';
mediatypes['.png'] = 'image/png';
mediatypes['.svg'] = 'image/svg+xml';
mediatypes['.ttf'] = 'application/x-font-ttf';
mediatypes['.webp'] = 'image/webp';
mediatypes['.woff'] = 'application/x-font-woff';
mediatypes['.woff2'] = 'application/font-woff2';
const v64 = {};
v64.fromFile = fromFile;
v64.fromString = fromString;
module.exports = v64;
const fromString = function (css, relativePath, rootPath, options, cb) {
    const v65 = !cb;
    if (v65) {
        cb = options;
        options.maxSize = MAX_SIZE;
        options = {};
        options = {};
    }
    const v66 = css.replace;
    const v67 = !v66;
    const v68 = css.toString;
    const v69 = v67 && v68;
    if (v69) {
        css = css.toString();
    }
    var urls = [];
    var match = imgRegex.exec(css);
    while (match) {
        const v70 = match[1];
        const v71 = urls.push(v70);
        v71;
        match = imgRegex.exec(css);
    }
    const v74 = function (err) {
        if (err) {
            const v72 = cb(err, css);
            return v72;
        }
        const v73 = cb(null, css);
        v73;
    };
    const v75 = forEachSeries(urls, base64img, v74);
    v75;
    const base64img = function (imageUrl, cb) {
        const v76 = externalUrlRegex.test(imageUrl);
        if (v76) {
            const v77 = 'Skip ' + imageUrl;
            const v78 = v77 + ' External file.';
            const v79 = new Error(v78);
            const v80 = cb(v79, css);
            return v80;
        }
        var imagePath;
        const v81 = absoluteUrlRegex.test(imageUrl);
        if (v81) {
            const v82 = imageUrl.substr(1);
            imagePath = Path.join(rootPath, v82);
        } else {
            imagePath = Path.join(relativePath, imageUrl);
        }
        const v85 = function (err, newCss) {
            if (err) {
                const v83 = cb(err, css);
                return v83;
            }
            css = newCss;
            const v84 = cb();
            v84;
        };
        const v86 = replaceUrlByB64(imageUrl, imagePath, css, options, v85);
        v86;
    };
};
const fromFile = function (cssFile, root, options, cb) {
    const v87 = !cb;
    if (v87) {
        cb = options;
        options.maxSize = MAX_SIZE;
        options = {};
        options = {};
    }
    const v92 = function (err, css) {
        if (err) {
            const v88 = cb(err, css);
            return v88;
        }
        const v89 = css.toString();
        const v90 = Path.dirname(cssFile);
        const v91 = fromString(v89, v90, root, options, cb);
        v91;
    };
    const v93 = fs.readFile(cssFile, v92);
    v93;
};
const replaceUrlByB64 = function (imageUrl, imagePath, css, options, cb) {
    imagePath = imagePath.replace(/[?#].*/g, '');
    const v110 = function (err, stat) {
        if (err) {
            const v94 = cb(err, css);
            return v94;
        }
        const v95 = stat.size;
        const v96 = options.maxSize;
        const v97 = v95 > v96;
        if (v97) {
            const v98 = 'Skip ' + imageUrl;
            const v99 = v98 + ' Exceed max size';
            const v100 = new Error(v99);
            const v101 = cb(v100, css);
            return v101;
        }
        const v108 = function (err, img) {
            if (err) {
                const v102 = cb(err, css);
                return v102;
            }
            var ext = Path.extname(imagePath);
            const v103 = mediatypes[ext];
            const v104 = 'data:' + v103;
            const v105 = v104 + ';base64,';
            const v106 = v105 + img;
            var newCss = css.replace(imageUrl, v106);
            const v107 = cb(null, newCss);
            v107;
        };
        const v109 = fs.readFile(imagePath, 'base64', v108);
        v109;
    };
    const v111 = fs.stat(imagePath, v110);
    v111;
};
const forEachSeries = function (arr, iterator, callback) {
    const v112 = function () {
    };
    callback = callback || v112;
    const v113 = arr.length;
    const v114 = !v113;
    if (v114) {
        const v115 = callback();
        return v115;
    }
    var completed = 0;
    var errs = [];
    var iterate = function () {
        const v116 = arr[completed];
        const v124 = function (err) {
            if (err) {
                const v117 = errs.push(err);
                v117;
            }
            completed += 1;
            const v118 = arr.length;
            const v119 = completed === v118;
            if (v119) {
                const v120 = errs.length;
                if (v120) {
                    const v121 = callback(errs);
                    return v121;
                }
                const v122 = callback(null);
                v122;
            } else {
                const v123 = iterate();
                v123;
            }
        };
        const v125 = iterator(v116, v124);
        v125;
    };
    const v126 = iterate();
    v126;
};
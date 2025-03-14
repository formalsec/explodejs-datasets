var gulp = require('gulp');
var bump = require('gulp-bump');
var shell = require('gulp-shell');
var tap = require('gulp-tap');
var gutil = require('gulp-util');
var bumpVersion = function (type) {
    type = type || 'patch';
    var version = '';
    const v50 = [
        './bower.json',
        './package.json'
    ];
    const v51 = gulp.src(v50);
    const v52 = { type: type };
    const v53 = bump(v52);
    const v54 = v51.pipe(v53);
    const v55 = gulp.dest('./');
    const v56 = v54.pipe(v55);
    const v60 = function (file, t) {
        const v57 = file.contents;
        const v58 = v57.toString();
        const v59 = JSON.parse(v58);
        version = v59.version;
    };
    const v61 = tap(v60);
    const v62 = v56.pipe(v61);
    const v85 = function () {
        var color = gutil.colors;
        const v63 = gulp.src('');
        const v64 = 'git commit --all --message "Version ' + version;
        const v65 = v64 + '"';
        const v66 = type != 'patch';
        const v67 = 'git tag --annotate "v' + version;
        const v68 = v67 + '" --message "Version ';
        const v69 = v68 + version;
        const v70 = v69 + '"';
        let v71;
        if (v66) {
            v71 = v70;
        } else {
            v71 = 'true';
        }
        const v72 = [
            v65,
            v71
        ];
        const v73 = { ignoreErrors: false };
        const v74 = shell(v72, v73);
        const v75 = v63.pipe(v74);
        const v82 = function () {
            const v76 = color.green('Version bumped to ');
            const v77 = color.yellow(version);
            const v78 = v76 + v77;
            const v79 = color.green(', don\'t forget to push!');
            const v80 = v78 + v79;
            const v81 = gutil.log(v80);
            v81;
        };
        const v83 = tap(v82);
        const v84 = v75.pipe(v83);
        v84;
    };
    const v86 = v62.on('end', v85);
    v86;
};
const v88 = function () {
    const v87 = bumpVersion('patch');
    v87;
};
const v89 = gulp.task('bump', v88);
v89;
const v91 = function () {
    const v90 = bumpVersion('patch');
    v90;
};
const v92 = gulp.task('bump:patch', v91);
v92;
const v94 = function () {
    const v93 = bumpVersion('minor');
    v93;
};
const v95 = gulp.task('bump:minor', v94);
v95;
const v97 = function () {
    const v96 = bumpVersion('major');
    v96;
};
const v98 = gulp.task('bump:major', v97);
v98;
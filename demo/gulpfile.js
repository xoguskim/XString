

var gulp = require('gulp');

var dist = '/usr/share/nginx/html/xstring';

gulp.task('copy-lib', function () {
    return gulp.src('../xogus.xstring.js').pipe(gulp.dest(dist + "/js/"));
});

gulp.task('copy-demo', function () {
    return gulp.src(['**', '!gulpfile.js', '!node_modules{,/**}']).pipe(gulp.dest(dist));
});

gulp.task('default', ['copy-lib', 'copy-demo']);

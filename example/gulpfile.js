var gulp = require('gulp');
var googlecdn = require('gulp-google-cdn');

gulp.task('cdnify', function() {
    gulp.src('./*.html')
        .pipe(googlecdn(require('./bower.json'), {
            cdn: require('../yandex-cdn')
        }))
        .pipe(gulp.dest('dist'));
});


gulp.task('default', ['cdnify']);

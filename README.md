# yandex-cdn

This is a plugin for grunt-google-cdn and gulp-google-cdn for replacing refs to resorces on the [Yandex CDN](http://api.yandex.ru/jslibs).

## How to use with gulp-google-cdn

Just pass this module to the cdn option of gulp-google-cdn task:

```
var gulp = require('gulp');

var googlecdn = require('gulp-google-cdn');

gulp.task('cdnify', function() {
    gulp.src('./*.html')
        .pipe(googlecdn(require('./bower.json'), {
            cdn: require('yandex-cdn')
        }))
        .pipe(gulp.dest('dist'));
});


gulp.task('default', ['cdnify']);
```

## How to use with grunt-google-cdn
TODO

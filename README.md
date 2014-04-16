# yandex-cdn

This is a plugin for grunt-google-cdn and gulp-google-cdn for replacing refs to resorces on the [Yandex CDN](http://api.yandex.ru/jslibs).

Libraries supported (all latest versions):
- [AngularJS](http://angularjs.org)
- [BackboneJS](http://backbonejs.org/)
- [DoJo](http://dojotoolkit.org/)
- [JQuery](http://jquery.com/)
- [Modernizr](http://modernizr.com/)
- [Underscore](http://underscorejs.org/)
- [Lo-Dash](http://lodash.com/)

Firstly do `npm install --save-dev yandex-cdn`.

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
Same as for gulp, just pass this module to the cdn option for cdnify task:
```
cdnify: {
    options: {
        cdn: require('yandex-cdn')
    },
    dist: {
        html: ['./dist/*.html']
    },
}
```


You can also look at the [example](example).

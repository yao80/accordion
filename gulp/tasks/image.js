var gulp = require('gulp');
var gulpif = require('gulp-if');
var plumber = require('gulp-plumber');
// var browserSync = require('browser-sync');
// var changed  = require('gulp-changed');
var del = require('del');
var notify  = require('gulp-notify');
var config = require('../config').image;
var option = require('../config').option;

gulp.task('image-del', function (cb) {
  return del([config.dest + '/**/*.*',config.excludeDest + '/sprites/*.*'], cb);
});

gulp.task('image', ['image-del'], function () {
    gulp.src(config.src)
    .pipe(plumber({
        errorHandler: notify.onError('Error: <%= error.message %>')
    }))
//  .pipe(changed(config.dest))
    .pipe(gulp.dest(config.dest))
    .pipe(gulpif(option.useWP === true, gulp.dest(config.destWP)));
//    .pipe(browserSync.reload({stream: true}));
});

var gulp = require('gulp');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');
var notify  = require('gulp-notify');
var config = require('../config').script;
var option = require('../config').option;

gulp.task('script', function () {
    gulp.src(config.src)
      .pipe(plumber({
        errorHandler: notify.onError('Error: <%= error.message %>')
      }))
      .pipe(gulpif(config.minify === 'production', uglify()))
      .pipe(gulpif(option.useWP, gulp.dest(config.destWP)))
      .pipe(gulp.dest(config.dest))
      .pipe(browserSync.reload({stream: true}));
});

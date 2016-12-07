// var fs = require('fs');
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var ejs = require('gulp-ejs');
var browserSync = require('browser-sync');
var notify  = require('gulp-notify');
var config = require('../config').ejs;

gulp.task('ejs', function () {
	//var json = JSON.parse(fs.readFileSync(config.json));
    gulp.src(config.src)
    .pipe(plumber({
        errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    //.pipe(ejs(json))
    .pipe(ejs({},{"ext": ".html"}))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream: true}));
});

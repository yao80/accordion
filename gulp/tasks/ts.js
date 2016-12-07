var gulp = require('gulp');
var gulpif = require('gulp-if');
var typescript = require('gulp-typescript');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');
var notify  = require('gulp-notify');
var concat  = require('gulp-concat');
var config = require('../config').ts;
var option = require('../config').option;

var typescriptProject = typescript.createProject({
  target: "ES5",
  removeComments: true,
  sortOutput: true
  // module: "commonjs"
});

gulp.task('ts', function () {
    gulp.src(config.src)
      .pipe(typescript(typescriptProject,{referencedFrom:["main.ts"]}))
      // .pipe(typescript(typescriptProject))
      .js
      .pipe(plumber({
        errorHandler: notify.onError('Error: <%= error.message %>')
      }))
      .pipe(concat("main.js"))
      .pipe(gulp.dest(config.dest))
      .pipe(gulpif(option.useWP === true, gulp.dest(config.destWP)))
      .pipe(browserSync.reload({stream: true}));
});

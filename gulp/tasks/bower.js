var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var bower = require("bower");
var bowerMainFiles = require('main-bower-files');
var filter = require('gulp-filter');
var config = require('../config').bower;
 
//bower settings
var loadComponents;

loadComponents = function() {

  var jsFilter = filter('**/*.js');
  return gulp.src(bowerMainFiles())
  .pipe(jsFilter)
  .pipe(uglify({preserveComments:"some"}))
  .pipe(concat(config.output.filename))
  .pipe(gulp.dest(config.dest + 'common/js'));

};


// bower component install
gulp.task('init', function() {
  return bower.commands.install().on('end', function() {
    return loadComponents();
  });
});


// bower component update
gulp.task('update', function() {
  return bower.commands.update().on('end', function() {
    return loadComponents();
  });
});

var gulp = require('gulp');
var watch = require('gulp-watch');
var config = require('../config').watch;

gulp.task('watch', function () {
    // // js
    watch(config.js, function () {
        gulp.start(['webpack']);
    });

    // html
    watch(config.html, function () {
        gulp.start(['html']);
    });

    // js
    // watch(config.js, function () {
        // gulp.start(['script']);
    // });

    // typescript
    // watch(config.typescript, function () {
        // gulp.start(['ts']);
    // });

    // sass
    watch(config.sass, function () {
        gulp.start(['sass']);
    });

    // imagemin
    //watch(config.imagemin, function () {
    //    gulp.start(['imagemin']);
    //});
    // image
    watch(config.image, function () {
        gulp.start(['image']);
    });

    //sprites
    watch(config.sprites, function() {
        gulp.start(['sprites']);
    });

    watch(config.ejs,function(){
        gulp.start(['ejs']);
    });

    watch(config.wp,function(){
        gulp.start(['wp']);
    });
    
});

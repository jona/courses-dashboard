var gulp = require('gulp'),
    config = require('../../config'),
    mainBowerFiles = require('main-bower-files'),
    concat = require('gulp-concat'),
    minifyCss = require('gulp-minify-css');

gulp.task('bower:stylesheets', ['bower:init'], function() {
  return gulp.src(mainBowerFiles("**/*.css"), { base: 'bower_components' })
    .pipe(concat('vendor.min.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest(config.dest));
});

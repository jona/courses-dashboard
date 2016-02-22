var gulp = require('gulp'),
    config = require('../../config'),
    mainBowerFiles = require('main-bower-files'),
    sourceMaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('bower:scripts', ['bower:init'], function() {
  return gulp.src(mainBowerFiles('**/*.js'), { base: 'bower_components' })
    .pipe(sourceMaps.init())
    .pipe(concat('vendor.min.js'))
    .pipe(uglify({mangle: false}))
    .pipe(sourceMaps.write())
    .pipe(gulp.dest(config.dest));
});

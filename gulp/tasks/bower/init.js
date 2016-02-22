var gulp = require('gulp'),
    bower = require('gulp-bower');

gulp.task('bower:init', function() {
  return bower();
});

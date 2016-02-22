var gulp = require('gulp'),
    sass = require('./sass.js');

gulp.task('build', [
  'scripts',
  'sass',
]);

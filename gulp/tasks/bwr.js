var gulp = require('gulp');

gulp.task('bwr', [
  'bower:init',
  'bower:mainFiles',
  'bower:scripts',
  'bower:stylesheets'
]);

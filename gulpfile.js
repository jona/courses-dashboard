var gulp = require('gulp'),
    requireDir = require('require-dir');

requireDir('./gulp/tasks', { recurse: true });

gulp.task('default', [
  'scripts:watch',
  'sass:watch',
  'server'
]);

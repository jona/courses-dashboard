var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

gulp.task('server', function () {
  return nodemon({
    script: 'index.js',
    ext: 'js',
  });
});

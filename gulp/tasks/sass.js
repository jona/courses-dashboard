var gulp = require('gulp'),
    config = require('../config'),
    sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src(config.src + 'sass/main.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest(config.dest));
});

gulp.task('sass:watch', function () {
  gulp.watch(config.src + 'sass/**/*.scss', ['sass']);
});

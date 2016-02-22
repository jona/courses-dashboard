'use strict';

var watchify = require('watchify'),
    browserify = require('browserify'),
    gulp = require('gulp'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    gutil = require('gulp-util'),
    sourcemaps = require('gulp-sourcemaps'),
    assign = require('lodash.assign'),
    config = require('../config');

var customOpts = {
  entries: [config.src + 'js/index.jsx'],
  extensions: ['.jsx'],
  debug: true
};
var opts = assign({}, watchify.args, customOpts);

gulp.task('scripts:watch', watch);
gulp.task('scripts', build);


function watch() {
  var b = watchify(browserify(opts));

  b.transform("babelify", {presets: ["es2015", "react", "stage-1"]});

  b.on('update', watch);
  b.on('log', gutil.log);

  return b.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.dest));
}

function build(){
  var b = browserify(opts);

  b.transform("babelify", {presets: ["es2015", "react", "stage-1"]});

  return b.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.dest));
}

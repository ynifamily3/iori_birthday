/// <reference path="./typings/node/node.d.ts" />
'use strict'

//gulp common
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var clean = require('gulp-clean');

//gulp browserify
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

//gulp less
var less = require('gulp-less');
var path = require('path');
var LessAutoprefix = require('less-plugin-autoprefix');
var LessPluginCleanCSS = require('less-plugin-clean-css');
var autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });
var cleancss = new LessPluginCleanCSS({ advanced: true });

gulp.task('browserify', function () {
  var b = browserify({
    entries: './src/js/iori.js',
    debug: false
  });
  if (process.env.NODE_ENV == 'production') {
    return b.bundle()
      .pipe(source('./iori.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(uglify())
      .pipe(gulp.dest('./dist/js/'));
  } else {
    return b.bundle()
      .pipe(source('./iori.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist/js/'));
  }
});

gulp.task('compile-less', function () {
   if (process.env.NODE_ENV == 'production') {
    return gulp.src('./src/less/*.less')
      .pipe(less({
        plugins: [autoprefix, cleancss]
      }))
      .pipe(gulp.dest('./dist/css'));
  } else {
    return gulp.src('./src/less/*.less')
      .pipe(sourcemaps.init())
      .pipe(less({
        plugins: [autoprefix, cleancss]
      }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist/css'));
  }
});

gulp.task('watch', function() {
    gulp.watch('./src/js/*.js', ['browserify']);
    gulp.watch('./src/less/**/*.less', ['compile-less']);
});

gulp.task('build', ['browserify', 'compile-less']);

gulp.task('clean', function () {
  return gulp.src(['./dist/js','./dist/css'], {read: false})
    .pipe(clean())
});

gulp.task('default', ['build', 'watch']);

'use strict';
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var cache = require('gulp-cache');
var images = require('gulp-imagemin');
var del = require('del');
var runSequence = require('run-sequence');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', function () {
  return gulp.src('app/scss/**/*.scss')
      .pipe(sass())
      .pipe(autoprefixer())
      .pipe(gulp.dest('app/css'))
      .pipe(browserSync.reload({
        stream: true
      }));
});


gulp.task('browserSync', function () {
  browserSync.init({
    port: 9000,
    server: {
      baseDir: 'dist'
    }
  })
});


gulp.task('useref', function () {
  return gulp.src('app/*.html')
      .pipe(useref())
      .pipe(gulpIf('*.js', uglify()))
      .pipe(gulpIf('*.css', cssnano()))
      .pipe(gulp.dest('dist'))
});


gulp.task('images', function () {
  return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
      .pipe(gulp.dest('dist/images'))
});

gulp.task('fonts', function () {
  return gulp.src('app/fonts/**/*')
      .pipe(gulp.dest('dist/fonts'))
});


gulp.task('clean:dist', function () {
  return del.sync('dist');
});


gulp.task('build', function (callback) {
  runSequence('clean:dist', 'build:handlebar', ['sass', 'images', 'fonts', 'copy'], 'useref',
      callback
  )
});

gulp.task('default', function (callback) {
  runSequence('build', ['browserSync', 'watch'], callback);
});


gulp.task('watch', ['browserSync', 'sass'], function () {
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/*.html', ['copy', browserSync.reload]);
  gulp.watch('app/js/**/*.js', ['scripts', browserSync.reload]);
  gulp.watch('app/templates/**/*.hbs', ['build:handlebar', browserSync.reload]);
});


/* Handlebars Pre-compilation config */
var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
var concat = require('gulp-concat');
var merge = require('merge-stream');
var path = require('path');

gulp.task('templates', function () {
  var partials = gulp.src(['app/templates/_*.hbs'])
      .pipe(handlebars({
        handlebars: require('handlebars')
      }))
      .pipe(wrap('Handlebars.registerPartial(<%= processPartialName(file.relative) %>, Handlebars.template(<%= contents %>));', {}, {
        imports: {
          processPartialName: function (fileName) {
            // Strip the extension and the underscore
            // Escape the output with JSON.stringify
            return JSON.stringify(path.basename(fileName, '.js').substr(1));
          }
        }
      }));

  var templates = gulp.src('app/templates/[^_]*.hbs')
      .pipe(handlebars({
        handlebars: require('handlebars')
      }))
      .pipe(wrap('Handlebars.template(<%= contents %>)'))
      .pipe(declare({
        namespace: 'ppt.templates',
        noRedeclare: true // Avoid duplicate declarations
      }));

  return merge(partials, templates)
      .pipe(concat('templates.js'))
      .pipe(uglify())
      .pipe(gulp.dest('app/templates'));
});

gulp.task('scripts', function () {
  return gulp.src([
    'node_modules/handlebars/dist/handlebars.runtime.js',
    'app/templates/templates.js',
    'app/js/**/*.js'
  ])
      .pipe(concat('bundle.js'))
      .pipe(uglify())
      .pipe(gulp.dest('dist/scripts'));
});

gulp.task('copy', function () {
  gulp.src('app/index.html')
      .pipe(gulp.dest('dist'));

  gulp.src('app/css/**/*.css')
      .pipe(gulp.dest('dist/css'));
});

gulp.task('build:handlebar', function (callback) {
  runSequence('templates', 'scripts', callback);
});

/*Gulp gh-pages deploy script*/
var deployGhPages = require('gulp-gh-pages');
gulp.task('deploy', ['build'], function () {
  return gulp.src("./dist/**/*")
      .pipe(deployGhPages())
});











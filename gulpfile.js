const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const minify = require('gulp-js-minify');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const clean = require('gulp-clean');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('dev', function () {
  browserSync.init({
    server: './dist',
  });

  gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
  gulp.watch('src/js/**/*.js', gulp.series('scripts'));
  gulp.watch('src/img/**/*', gulp.series('images'));
  gulp.watch('index.html').on('change', browserSync.reload);
});

gulp.task('build', gulp.series('clean', 'sass', 'scripts', 'images'));

gulp.task('clean', function () {
  return gulp.src('dist/*', { read: false, allowEmpty: true }).pipe(clean());
});

//Concatenate and minify
gulp.task('scripts', function () {
  return gulp
    .src('src/js/**/*.js')
    .pipe(concat('scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream());
});

// Images Task: Optimize images and copy to dist/img folder
gulp.task('images', function () {
  return gulp
    .src('src/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))
    .pipe(browserSync.stream());
});

gulp.task('default', gulp.series('dev'));

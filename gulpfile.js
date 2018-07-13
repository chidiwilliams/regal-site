const gulp = require('gulp');
const nunjucksRender = require('gulp-nunjucks-render');
const sass = require('gulp-sass');

gulp.task('njk', function() {
  // Gets .html and .nunjucks files in pages
  return gulp
    .src('views/*.@(html|njk)')
    .pipe(
      nunjucksRender({
        path: ['views'],
        data: require('./config').data,
      })
    )
    .pipe(gulp.dest('out'));
});

gulp.task('sass', function() {
  return gulp
    .src('assets/scss/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('out/assets/css'));
});

module.exports = gulp;

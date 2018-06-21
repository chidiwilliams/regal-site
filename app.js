const gulp = require('gulp');
const nunjucksRender = require('gulp-nunjucks-render');
const sass = require('gulp-sass');

gulp.task('build', function() {
  // Gets .html and .nunjucks files in pages
  return gulp
    .src('views/*.@(html|njk)')
    .pipe(
      nunjucksRender({
        path: ['views'],
      })
    )
    .pipe(gulp.dest('out'));
});

gulp.task('sass', function() {
  return gulp
    .src('assets/scss/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('out/public/css'));
});

gulp.start('sass');
gulp.start('build');

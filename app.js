var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');

gulp.task('build', function () {
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

gulp.start('build');

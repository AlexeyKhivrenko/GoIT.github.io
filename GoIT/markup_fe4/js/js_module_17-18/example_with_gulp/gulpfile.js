var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('scripts', function() {
  return gulp.src('js/src/*.js')
  .pipe(uglify())
  .pipe(concat('main.js'))
  .pipe(gulp.dest('js/dist'));
});

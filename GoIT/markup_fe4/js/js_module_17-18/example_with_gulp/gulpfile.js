var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

gulp.task('scripts', function() {
  return gulp.src('app/js/*.js')
  .pipe(concat('main.js'))
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'));
});

gulp.task('watch', ['scripts'], function(done) {
  browserSync.reload();
  done();
});

gulp.task('serve', ['scripts'], function() { // Создаем таск browser-sync
    browserSync.init({ // Выполняем browser Sync
        server: {
          baseDir: './'
        }, // Serve files from the current directory
        notify: false // Отключаем уведомления
    });

    gulp.watch('app/js/*.js', ['watch']);
    gulp.watch('app/css/*.css', ['watch']);
    gulp.watch('**.html', ['watch']);
    // gulp.watch("*.html").on("change", reload);
});

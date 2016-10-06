var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var rimraf = require('rimraf');
var browserSync = require('browser-sync');

var path = {
    build: { //Тут мы укажем куда складывать готовые после сборки файлы
        html: 'build/',
        js: 'build/js/',
        style: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts/'
    },
    src: { //Пути откуда брать исходники
        html: 'src/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
        js: 'src/js/*.js',//В стилях и скриптах нам понадобятся только main файлы
        style: 'src/css/style.css',
        img: 'src/img/**/*.*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
        fonts: 'src/fonts/**/*.*'
    },
    watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/css/**/*.css',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './build'
};

var config = {
    server: {
        baseDir: "./build"
    },
    tunnel: true, // Tunnel the Browsersync server through a random Public URL
    host: 'localhost',
    port: 9000,
    logPrefix: "My Project"
};

gulp.task('webserver', function() { // Создаем таск browser-sync
    browserSync(config);
});

gulp.task('clean', function (cb) { // очищает path.clean
    rimraf(path.clean, cb);
});

gulp.task('html:build', function() {
  gulp.src(path.src.html)
      .pipe(gulp.dest(path.build.html))
      .pipe(browserSync.reload({stream: true}));
});

gulp.task('style:build', function() {
  gulp.src(path.src.style)
      .pipe(gulp.dest(path.build.style))
      .pipe(browserSync.reload({stream: true}));
});

gulp.task('js:build', function() {
  return gulp.src(path.src.js)
      .pipe(concat('main.js'))
      .pipe(uglify())
      .pipe(gulp.dest(path.build.js))
      .pipe(browserSync.reload({stream: true}));
});

gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('build', ['html:build', 'style:build', 'js:build', 'fonts:build']);

gulp.task('watch', function() {
  watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
    watch([path.watch.fonts], function(event, cb) {
        gulp.start('fonts:build');
    });
});

gulp.task('default', ['build', 'webserver', 'watch']);

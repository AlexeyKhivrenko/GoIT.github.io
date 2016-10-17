var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    watch = require('gulp-watch'),
    rimraf = require('rimraf'),
    browserSync = require('browser-sync'),
    sass = require('gulp-sass'),
    imagemin = require('gulp-imagemin'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    plumber = require('gulp-plumber'), //не дает ошибкам всплывать
    sourcemaps = require('gulp-sourcemaps');

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
        style: 'src/style/main.scss',
        img: 'src/img/**/*.*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
        fonts: 'src/fonts/**/*.*'
    },
    watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/style/**/*.*',
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
      .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8'], { cascade: true }))
      .pipe(cssnano())
      .pipe(sourcemaps.write('../maps/'))
      .pipe(gulp.dest(path.build.style))
      .pipe(browserSync.reload({stream: true}));
});

gulp.task('js:build', function() {
  gulp.src(path.src.js)
      .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(concat('main.js'))
      .pipe(uglify())
      .pipe(sourcemaps.write('../maps/'))
      .pipe(gulp.dest(path.build.js))
      .pipe(browserSync.reload({stream: true}));
});

gulp.task('img:build', function() {
    gulp.src(path.src.img)
        .pipe(imagemin())
        .pipe(gulp.dest(path.build.img))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('build', ['html:build', 'style:build', 'js:build', 'img:build']);

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
    watch([path.watch.img], function(event, cb) {
        gulp.start('img:build');
    });

});

gulp.task('default', ['build', 'webserver', 'watch']);

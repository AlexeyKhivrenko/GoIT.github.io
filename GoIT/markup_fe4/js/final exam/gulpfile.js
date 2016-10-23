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
    sourcemaps = require('gulp-sourcemaps'),
    spritesmith = require('gulp.spritesmith');

var path = {
    build: { //Тут мы укажем куда складывать готовые после сборки файлы
        html: 'build/',
        js: 'build/js/',
        styles: 'build/css/',
        img: 'build/img/',
        sprites: 'build/sprites/'
    },
    src: { //Пути откуда брать исходники
        html: 'src/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
        js: 'src/scripts/*.js',//В стилях и скриптах нам понадобятся только main файлы
        styles: 'src/styles/main.scss',
        img: 'src/img/**/*.*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
        sprites: 'src/sprites/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
        html: 'src/**/*.html',
        js: 'src/scripts/**/*.js',
        styles: 'src/styles/**/*.*',
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

gulp.task('sprites', function () {
    var spriteData =
        gulp.src(path.src.sprites)
            .pipe(spritesmith({
                imgPath: '../sprites/sprite.png',
                imgName: 'sprite.png',
                padding: 2,
                cssTemplate: 'src/spritesmith.scssTemplate',
                cssName: '_sprite.scss',
                algorithm: 'binary-tree',
                cssFormat: 'scss'

            }));

    spriteData.img.pipe(gulp.dest(path.build.sprites));
    return spriteData.css.pipe(gulp.dest('src/styles/base/'));
});

gulp.task('img:build', function() {
    gulp.src(path.src.img)
        .pipe(imagemin())
        .pipe(gulp.dest(path.build.img))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('styles:build', function() {
  gulp.src(path.src.styles)
      .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(autoprefixer(['last 15 versions', '> 0.3%', '> 1%',  'IE 8', 'IE 9', 'IE 10', 'IE 11'], { cascade: true }))
      .pipe(cssnano())
      .pipe(sourcemaps.write('../maps/'))
      .pipe(gulp.dest(path.build.styles))
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

gulp.task('build', ['html:build', 'sprites', 'img:build', 'styles:build', 'js:build']);

gulp.task('watch', function() {
  watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.styles], function(event, cb) {
        gulp.start('styles:build');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
    watch([path.watch.img], function(event, cb) {
        gulp.start('img:build');
    });

});

gulp.task('default', ['build', 'webserver', 'watch']);

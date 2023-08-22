const gulp = require('gulp');
// const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const pipeline = require('readable-stream').pipeline;
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const autoPrefix = require('gulp-autoprefixer');
// import gulp from 'gulp';
// import imagemin from 'gulp-imagemin';

// copy html files
gulp.task('copyhtml', async function () {
  // gulp.src('src/assets/*')
  // gulp.src('src/assets/*/*')
  gulp.src('src/*.html').pipe(gulp.dest('dist'));
});

// fonts file
gulp.task('fonts', async function () {
  gulp.src('src/assets/fonts/*').pipe(gulp.dest('dist/assets/fonts'));
});

//   image
gulp.task('images', async function () {
  gulp.src('src/assets/images/*').pipe(gulp.dest('dist/assets/images'));
});

//   video
gulp.task('videos', async function () {
  gulp.src('src/assets/videos/*').pipe(gulp.dest('dist/assets/videos'));
});

//   plugins
gulp.task('plugins', async function () {
  gulp.src('src/assets/plugins/*').pipe(gulp.dest('dist/assets/plugins'));
});

//   bootstrap
gulp.task('bootstrap', async function () {
  gulp.src('src/assets/bootstrap/*').pipe(gulp.dest('dist/assets/bootstrap'));
});

// Minify Images
// gulp.task('minify-image', async function () {
//   gulp
//     .src('src/assets/images/*')
//     .pipe(imagemin())
//     .pipe(gulp.dest('dist/assets/images'));
// });

// Minify JS files
gulp.task('compress-js', async function () {
  gulp
    .src('src/assets/js/*.js')
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    // .pipe(rename('main.min.js'))
    .pipe(gulp.dest('dist/assets/js'));
});

// Compile Sass Files
gulp.task('compile-sass', async function () {
  gulp
    .src('src/assets/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoPrefix('last 2 versions'))
    .pipe(gulp.dest('src/assets/css'));
});

// Minify Css Files
gulp.task('minify-css', async function () {
  gulp
    .src('src/assets/css/*.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('dist/assets/css'));
});

gulp.task('shop', async function () {
  gulp.src('src/shop/*').pipe(gulp.dest('dist/shop'));
});

gulp.task('library', async function () {
  gulp.src('src/library/*').pipe(gulp.dest('dist/library'));
});

gulp.task('hashdtube', async function () {
  gulp.src('src/hashdtube/*').pipe(gulp.dest('dist/hashdtube'));
});

// Watch Gulp Task
gulp.task('watch', function () {
  gulp.watch('src/*.html', gulp.series('copyhtml'));
  gulp.watch('src/shop/*', gulp.series('shop'));
  gulp.watch('src/library/*', gulp.series('library'));
  gulp.watch('src/hashdtube/*', gulp.series('hashdtube'));
  gulp.watch('src/assets/fonts/*', gulp.series('fonts'));
  gulp.watch('src/assets/images/*', gulp.series('images'));
  gulp.watch('src/assets/videos/*'), gulp.series('videos');
  gulp.watch('src/assets/plugins/*'), gulp.series('plugins');
  gulp.watch('src/assets/bootstrap/*'), gulp.series('bootstrap');
  gulp.watch('src/assets/scss/*.scss', gulp.series('compile-sass'));
  gulp.watch('src/assets/css/*.css', gulp.series('minify-css'));
  gulp.watch('src/assets/js/*.js', gulp.series('compress-js'));
  //   gulp.watch('src/assets/images/*', gulp.series('minify-image'));
});

// Default Task Gulp
gulp.task(
  'default',
  gulp.parallel(
    'copyhtml',
    'shop',
    'library',
    'hashdtube',
    // 'minify-image',
    'compress-js',
    'compile-sass',
    'minify-css',
    'fonts',
    'images',
    'videos',
    'plugins',
    'bootstrap',
    'watch'
  )
);

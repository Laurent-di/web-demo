var gulp = require('gulp'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    cleanCss = require('gulp-clean-css'),
    combineMq = require('gulp-combine-mq'),
    autoPrefixer = require('gulp-autoprefixer');

gulp.task('catalog-sass-compile', function () {
     return gulp.src('sass/style.scss')
        .pipe(sass().on('error', function (error) {
            console.log('ERROR: ' + error);
        }))
        .pipe(combineMq())
        .pipe(autoPrefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCss())
         .pipe(rename('stylesheet.min.css'))
        .pipe(gulp.dest('css/stylesheet'));
});


gulp.task('watch-sass', function () {
    gulp.watch('sass/*.scss', ['catalog-sass-compile']);
});
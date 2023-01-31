const { src, dest, series, watch } = require('gulp');

// styles
const scss = require('gulp-sass')(require('sass'));
const autoPrefixer = require('gulp-autoprefixer');
const cssMinify = require('gulp-clean-css');

function styles() {
    return src('./src/styles/**/*.scss')
        .pipe(scss())
        .pipe(autoPrefixer('last 2 versions'))
        .pipe(cssMinify())
        .pipe(dest('./dist/styles/'))
}

// scripts
const jsMinify = require('gulp-terser');

function scripts() {
    return src('./src/scripts/**/*.js')
        .pipe(jsMinify())
        .pipe(dest('./dist/scripts/'))
}

function watchTask() {
    watch(
            [
            './src/styles/**/*.scss',
            './src/scripts/**/*.js'
            ],
            series(styles, scripts)
        )
}

exports.default = series(styles, scripts, watchTask);

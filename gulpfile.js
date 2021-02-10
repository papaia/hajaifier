const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const uglifyJS = require('gulp-uglify');

const del = require('del');

const src = (ext) => `src/**${ext ? `.${ext}` : ''}`;
const dist = 'dist';

const clear = () => del([`${dist}/**`]);

const html = () =>
  gulp
    .src(src('html'))
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        removeComments: true,
      }),
    )
    .pipe(gulp.dest(dist));

const css = () =>
  gulp
    .src(src('css'))
    .pipe(cleanCSS({ compatibility: 'ie7' }))
    .pipe(gulp.dest(dist));

const js = () =>
  gulp
    .src(src('js'))
    .pipe(uglifyJS({ mangle: true }))
    .pipe(gulp.dest(dist));

const image = () => gulp.src('assets/*.png').pipe(gulp.dest(dist));

exports.build = gulp.series(clear, gulp.parallel(html, css, js, image));

exports.watch = () => gulp.watch(src(), exports.build);

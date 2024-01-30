const gulp = require('gulp');
const dartSass = require('sass');
const gulpSass = require('gulp-sass');
// ----------------------------------------------
const sass = gulpSass(dartSass);

gulp.task("sass", async function () {
    return gulp.src(['./src/button.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch',  function () {
    gulp.watch('./src/**/*.scss', gulp.series(['sass']));
  });
/**
 * Created by Failymiss on 12/27/15.
 */
const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

gulp.task('minify', function () {
    gulp.src('public/app.js')
        .pipe(babel({
            presets: ['es2015'],
            plugins: ['transform-runtime']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('build'))
});
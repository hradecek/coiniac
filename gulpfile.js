/**
 * Gulp imports
 */
var gulp = require('gulp');
var del = require('del');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var typescript = require('gulp-typescript');

/**
 * Build whole TS project.
 * Final file is placed in src/ dir. See tsconfig.json.
 */
var tsProject = typescript.createProject('tsconfig.json');
var phaserPath = {
    src: './node_modules/phaser/build/phaser.min.js',
    dst: './lib'
}
gulp.task('default', function () {
    gulp.src(phaserPath.src)
        .pipe(gulp.dest(phaserPath.dst));
    tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest('.'));
});

/**
 * Minify & uglify all built JavaScript files,
 */
gulp.task('minify', ['default'], function () {
    gulp.src('bin/*.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('bin'));
});

/**
 * Watch all development files.
 */
gulp.task('watch', ['default'], function() {
    gulp.watch('src/**/*.ts', ['default']);
});

/**
 * Clean built files.
 */
gulp.task('clean:build', function() {
    del('bin');
});

gulp.task('clean:all', ['clean:build'],function() {
    del('node_modules');
});

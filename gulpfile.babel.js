'use strict';

import gulp from 'gulp';
import browserSync from 'browser-sync';
import babel from 'gulp-babel';
import browserify  from 'browserify';
import watchify   from 'watchify';
import babelify   from 'babelify';
import source from 'vinyl-source-stream';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';

var buffer = require('vinyl-buffer')
var merge = require('utils-merge')


var rename = require('gulp-rename')
var uglify = require('gulp-uglify')
var sourcemaps = require('gulp-sourcemaps')


/* nicer browserify errors */
var gutil = require('gulp-util')
var chalk = require('chalk')

var server = browserSync.create();

gulp.task('default', () => {
    console.log(merge);
    console.log('test');
});

gulp.task('serve', ['browser-sync', 'watchify', 'sass:watch'], () => {
});

gulp.task('browser-sync', function() {
    server.init({
        server: {
            baseDir: "./public/"
        }
    });
});

gulp.task('js', () =>
    gulp.src('src/index.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'))
);

gulp.task('sass', function () {
  return gulp.src('./src/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(sass().on('end',
        function() {
          gutil.log(chalk.green('css done!'));
          server.reload();
        }
      ))
    .pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
    .pipe(gulp.dest('./public/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/main.scss', ['sass']);
});

gulp.task('watchify', function () {
    var args = merge(watchify.args, { debug: true })
    var bundler = watchify(browserify('./src/index.js', args)).transform(babelify, { /* opts */ })
    bundle_js(bundler)

    bundler.on('update', function () {
        bundle_js(bundler)
    })
});

gulp.task('browserify', function () {
    var bundler = browserify('./src/index.js', { debug: true }).transform(babelify, {/* options */ })

    return bundle_js(bundler)
});



function bundle_js(bundler) {
    return bundler.bundle()
        .on('error', map_error)
        .on('end', function() {
            gutil.log(chalk.green('done!'));
            server.reload();
        })
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(gulp.dest('public'))
        .pipe(rename('app.min.js'))
        //.pipe(sourcemaps.init({ loadMaps: true }))
        // capture sourcemaps from transforms
        //.pipe(uglify())
        //.pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('public'))
}

function map_error(err) {
    if (err.fileName) {
        // regular error
        gutil.log(chalk.red(err.name)
            + ': '
            + chalk.yellow(err.fileName.replace(__dirname + '/src/js/', ''))
            + ': '
            + 'Line '
            + chalk.magenta(err.lineNumber)
            + ' & '
            + 'Column '
            + chalk.magenta(err.columnNumber || err.column)
            + ': '
            + chalk.blue(err.description))
    } else {
        // browserify error..
        gutil.log(chalk.red(err.name)
            + ': '
            + chalk.yellow(err.message))
    }

    //this.end()
}

/* eslint import/no-extraneous-dependencies: ["off", {"devDependencies": false}] */
const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');

const htmlmin = require('gulp-htmlmin');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();

gulp.task('browserSync', () =>
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  })
);

gulp.task('css', () =>
  gulp.src(['./src/public/css/reset.css', './src/public/css/default.css'])
  .pipe(sourcemaps.init())
  .pipe(autoprefixer())
  .pipe(concat('master.css'))
  .pipe(cleanCSS())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('dist/css'))
  .pipe(browserSync.reload({
    stream: true
  }))
);

gulp.task('html', () => gulp.src('./src/public/**/*.html')
  .pipe(htmlmin({
    collapseWhitespace: true
  }))
  .pipe(gulp.dest('dist'))
  .pipe(browserSync.reload({
    stream: true
  }))
);

gulp.task('javascript', () => browserify('./src/public/js/app.js')
  .transform(babelify)
  .bundle()
  .pipe(source('todo.bundle.js'))
  .pipe(gulp.dest('./dist/js'))
  .pipe(browserSync.reload({
    stream: true
  }))
);

gulp.task('default', ['browserSync', 'html', 'css', 'javascript'], () => {
  gulp.watch('./src/css/**/*.css', ['css']);
  gulp.watch('./src/js/**/*.js*', ['javascript']);
  gulp.watch('./src/**/*.html', ['html']);
});

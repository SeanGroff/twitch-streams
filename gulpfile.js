// Reference https://css-tricks.com/gulp-for-beginners/

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const babel = require('gulp-babel');

gulp.task('sass', () => {
   return gulp.src('src/app/scss/**/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('dist/css'))
      .pipe(browserSync.reload({
         stream: true
      }));
});

gulp.task('babel', () => {
   return gulp.src('src/app/**/*.js')
      .pipe(babel())
      .pipe(gulp.dest('dist/js'));
});

gulp.task('browserSync', () => {
   browserSync.init({
      server: {
         baseDir: './'
      },
   });
});

gulp.task('default', ['sass', 'babel']);

gulp.task('watch', ['browserSync', 'sass', 'babel'], () => {
   gulp.watch('./index.html', browserSync.reload);
   gulp.watch('src/app/scss/**/*.scss', ['sass']);
   gulp.watch('src/app/**/*.js', browserSync.reload);
});

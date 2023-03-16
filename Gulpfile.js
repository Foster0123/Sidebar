const gulp         = require('gulp'),
      sass         = require('gulp-sass')(require('sass')),
      autoprefixer = require('gulp-autoprefixer'),
      sourcemap    = require('gulp-sourcemaps');

function buildCss() {
    return gulp.src('src/scss/*.scss')
               .pipe(sourcemap.init())
               .pipe(sass({
                   outputStyle: 'expanded',
                   sourceMap:true
               }).on('error', sass.logError))
               .pipe(autoprefixer({
                   overrideBrowserslist: 'last 4 versions',
                   cascade: true
               }))
               .pipe(sourcemap.write('.'))
               .pipe(gulp.dest('src/css/'))
}
function watch() {
    gulp.watch('src/scss/**/*.scss', buildCss);
}

exports.watch = watch();
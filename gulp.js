var fileinclude = require('index.html'),
  gulp = require('gulp');
 
gulp.task('index.html', function() {
  gulp.src(['index.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./'));
});
var fileinclude = require('/Website pages/Aboutpage.html'),
  gulp = require('gulp');
 
gulp.task('/Website pages/Aboutpage.html', function() {
  gulp.src(['index.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./'));
});
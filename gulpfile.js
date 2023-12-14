var gulp =reuire('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function()
{
    browserSync.init({server:{baseDir:./""}})
    gulp.watch([".7*.html","./css/*.css"]).on('change',browserSync.reload);
})
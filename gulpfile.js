/**
 * Created by yaobinhan on 16/5/2.
 */
var gulp = require('gulp');
var less = require('gulp-less');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var minifyCSS = require('gulp-minify-css');
var pngquant = require('imagemin-pngquant');
var plumber = require('gulp-plumber');
var connect = require('gulp-connect');

gulp.task('less', function() {
    return gulp.src('./src/less/*.less')
        .pipe(plumber())
        .pipe(less())
        .pipe(gulp.dest('./src/css'))
})
gulp.task('html', function() {
    return gulp.src('./templates/*.html')
        .pipe(gulp.dest('./lib/templates'))
})
gulp.task('js', function() {
    return gulp.src('./src/js/*')
        .pipe(gulp.dest('./lib/src/js'))
})
gulp.task('css', function() {
    return gulp.src('./src/css/*.css')
        //.pipe(minifyCSS())
        .pipe(gulp.dest('./lib/src/css'))
})
gulp.task('img', function() {
    return gulp.src('./src/images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('./lib/src/images'))
})
gulp.task('default', function() {
    gulp.run(['less', 'connect']);
    gulp.watch('./src/less/*.less', ['less']);
    //gulp.watch('./src/css/*.css',['css']);
    //gulp.watch('*.html',['html']);
    //gulp.watch('./src/js/*',['js']);
    //gulp.watch('./src/images/*',['img']);

})

gulp.task('connect', function() {
    connect.server({ //创建livereload服务
        root: '',
        port: 3000,
        livereload: true
    });
    gulp.watch('../nffs/**/*.*', function() {
        return gulp.src('../nffs/**/*.*')
            .pipe(connect.reload()); //当文件改变时，重新载入
    });
})
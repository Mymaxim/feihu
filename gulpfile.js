let gulp = require('gulp');//{task(),}
let sass = require('gulp-sass');//fn


// sass->css
gulp.task('compileSass',function(){
    // 先查找sass文件所在目录
    gulp.src('./src/sass/*.scss') // 返回文件流（液体，文件在内存中的状态）

    // scss->css
    .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError))

    // 输出到硬盘
    .pipe(gulp.dest('./src/css/'))
});
// 监听文件修改，自动执行编译任务
gulp.task('jtSass',function(){
    gulp.watch('./src/sass/*.scss',['compileSass'])
})



//自动刷新服务器
let browserSync = require('browser-sync');

// 静态服务器
gulp.task('server',()=>{
    browserSync({
        // 服务器路径
        // server:'./src/',

        // 代理服务器
        proxy:'http://localhost:2222',

        // 端口
        // port:300,

        // 监听文件修改，自动刷新
        files:['./src/**/*.html','./src/css/*.css','./src/js/*.js','./src/api/*.php']
    });

    // 监听sass文件修改，并自动编译
    gulp.watch('./src/sass/*.scss',['compileSass'])
})
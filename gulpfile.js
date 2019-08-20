const { src, dest, symlink, watch, task, series, parallel } = require('gulp');
const chalk = require('chalk')

function a(cb) {
    cb()
}
function b(cb) {
    cb()
}
function c(cb) {
    cb()
}
function createDist(){ // 生成dist文件（src、dest/symlink使用）
    return src('src/*.js')
    .pipe(symlink('dist/'));
}
const tasks = [createDist, parallel([a, b, c])];
function watching() {
    console.log(chalk.red('正在监听文件...'))
    const watcher = watch(['src/*.js']);
    watcher.on('change', function(path, stats) {
        console.log('更新：1', path, stats);
    });
    watcher.on('add', function(path, stats) {
        console.log('更新：2', path, stats);
    });
}
// 以上都是在定义task
tasks.push(watching);
function seriesTask() { // 将所有task顺序定为串行执行
    return series(tasks)();
}
task('start', seriesTask); // 运行gulp执行的task


const { src, dest } = require('gulp');

function streamTask() {
    return src('*.json')
    .pipe(dest('333'))
    .pipe(dest('oooo'));
}
exports.default = streamTask;
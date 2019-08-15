const { series, parallel } = require('gulp'); 

function cbA(cb) {
    console.log('iiii')
    cb();
}
function cbB(cb) {
    console.log('3333')
    cb();
}
exports.build = parallel(cbA, cbB);
exports.default = series(cbA, cbB);
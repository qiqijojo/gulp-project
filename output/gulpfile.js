const {
  src,
  dest
} = require('gulp');

const babel = require('gulp-babel');

exports.default = function () {
  return src(['*.js', '!node_modules']).pipe(babel()).pipe(dest('output/'));
};
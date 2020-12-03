const { watch, series, parallel, src, dest} = require('gulp');
const browsersync = require('browser-sync').create();

function stylecompile (cb) {
  return src('style/style.css')
    .pipe(dest('output/'));
  cb();
}

function datacompile (cb) {
  return src('data/data.json')
    .pipe(dest('output/'));
  cb();
}

function scriptscompile (cb) {
  return src(['script/script.js'])
    .pipe(dest('output/'));
  cb();
}

function htmlcompile (cb) {
  return src('site/index.html')
    .pipe(dest('output/'));
  cb()
}

function server (cb) {
  browsersync.init({
    server: {
      baseDir: './output'
    }
  });
  watch(['*.js','*.css','*.html']).on('change', browsersync.reload);
  cb();
}

exports.default = series(datacompile, scriptscompile, stylecompile, htmlcompile, server)

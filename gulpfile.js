"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");
var htmlmin = require('gulp-htmlmin');
var autoprefixer = require("autoprefixer");
var minify = require("gulp-csso");
var imagemin = require("gulp-imagemin");
var webp = require("gulp-webp");
var svgstore = require("gulp-svgstore");
var rename = require("gulp-rename");
var del = require("del");
var server = require("browser-sync").create();
var run = require("run-sequence");
var uglify = require('gulp-uglify');
var pump = require('pump');

gulp.task("clean", function () {
  return del("build");
});

gulp.task("copy", function () {
  return gulp.src([
    "fonts/**/*.{woff,woff2}",
    "img/**",
    "js/**"
  ], {
    base: "."
  })
  .pipe(gulp.dest("build"));
});

gulp.task("style", function() {
  gulp.src("less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"));
});

gulp.task('compress', function (cb) {
  pump([
        gulp.src('js/*.js'),
        uglify(),
        gulp.dest('build/js')
    ],
    cb
  );
});

gulp.task("sprite", function () {
  return gulp.src("img/icon-*.svg")
  .pipe(svgstore({
   inlineSvg: true
   }))
  .pipe(rename("sprite.svg"))
  .pipe(gulp.dest("build/img"));
});

gulp.task("html", function () {
  return gulp.src("*.html")
  .pipe(posthtml([
    include()
  ]))
  .pipe(gulp.dest("build"));
});

gulp.task('minify', function() {
  return gulp.src('build/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('build'));
});

gulp.task("images", function () {
  return gulp.src("img/**/*.{png,jpg,svg}")
  .pipe(imagemin([
    imagemin.optipng({optimizationLevel: 3}),
    imagemin.jpegtran({progressive: true}),
    imagemin.svgo()
  ]))
  .pipe(gulp.dest("build/img"));
});

gulp.task("webp", function () {
  return gulp.src("img/**/*.{png,jpg}")
  .pipe(webp({quality: 90}))
  .pipe(gulp.dest("build/img"));
});

gulp.task("serve", function() {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("less/**/*.less", ["style"]);
  gulp.watch("*.html", ["html"]);
});

gulp.task("build", function(done) {
  run(
    "clean",
    "copy",
    "style",
    "sprite",
    "compress",
    "html",
    "minify",
    done
  );
});

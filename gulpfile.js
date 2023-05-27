const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const concat = require("gulp-concat");
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const jsMinify = require("gulp-js-minify");
const imagemin = require("gulp-imagemin");
const browserSync = require("browser-sync").create();

gulp.task("compileSass", function () {
  return gulp
    .src("src/scss/**/*")
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(concat("styles.min.css"))
    .pipe(cleanCSS())
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream());
});

gulp.task("scripts", function () {
  return gulp
    .src("src/js/*.js")
    .pipe(concat("scripts.min.js"))
    .pipe(uglify())
    .pipe(jsMinify({}))
    .pipe(gulp.dest("dist/js"))
    .pipe(browserSync.stream());
});

gulp.task("convertImg", function () {
  return gulp
    .src("src/img/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/img"))
    .pipe(browserSync.stream());
});

gulp.task("build", () => {
  gulp.watch("src/scss/**/*", gulp.series("compileSass"));
  gulp.watch("src/js/*.js", gulp.series("scripts"));
  gulp.watch("src/img/*", gulp.series("convertImg"));
});

gulp.task("dev", () => {
  browserSync.init({
    server: {
      baseDir: "./",
      index: "index.html",
    },
  });

  gulp
    .watch("src/scss/**/*", gulp.series("compileSass"))
    .on("change", browserSync.reload);
  gulp
    .watch("src/js/*.js", gulp.series("scripts"))
    .on("change", browserSync.reload);
  gulp
    .watch("src/img/*", gulp.series("convertImg"))
    .on("change", browserSync.reload);
  gulp.watch("*.html").on("change", browserSync.reload);
});

var gulp = require("gulp");
var webserver = require("gulp-webserver");
var sass = require("gulp-sass");
var mincss = require("gulp-clean-css");
var minjs = require("gulp-uglify");
var concat = require("gulp-concat");
var minhtml = require("gulp-htmlmin")
var sequence = require("gulp-sequence")
gulp.task("mincss", function() {
    gulp.src("src/css/*.scss")
        .pipe(sass())
        .pipe(mincss())
        .pipe(gulp.dest("build/css"))
});
gulp.task("minjs", function() {
    gulp.src("src/js/**/*.js")
        .pipe(minjs())
        .pipe(gulp.dest("build/js"))
});
gulp.task("minhtml", function() {
    gulp.src("src/.html")
        .pipe(minhtml())
        .pipe(gulp.dest("build"))
});
gulp.task("watch", function() {
    gulp.watch("src/css/*.scss", ["mincss"]);
    gulp.watch("src/js/**/*.js", ["minjs"]);

})
gulp.task("server", function() {
    gulp.src("src")
        .pipe(webserver({
            port: 9090,
            middleware: function(req, res, next) {
                next()
            }
        }))
});
gulp.task("default", function(cb) {
    sequence(["mincss", "minjs", "minhtml"], "watch", "server", cb)
})
var gulp 		 = require("gulp"),
		bsync 	 = require('browser-sync').create();
		pug 		 = require('gulp-pug');
		watch    = require('gulp-watch');
		stylus   = require('gulp-stylus');
		concat   = require('gulp-concat');
		cleanCSS = require('gulp-clean-css');
		image 	 = require('gulp-imagemin');
		clean 	 = require('gulp-clean');


gulp.task('serv', function() {
    bsync.init({
        server: "./build",
     		open: false      
    })});
gulp.task('servOnload', function() {
    bsync.init({
        server: "./build"
    })});


gulp.task('pug', function() {
  return gulp.src('src/pug/**/*.pug')
      .pipe(pug({
      	pretty: true
      }))
      .pipe(gulp.dest("./build"))
});

gulp.task('stylus', function() {
  return gulp.src('src/stylus/*.styl')
      .pipe(stylus({
      	'include css': true
      }))
      .pipe(cleanCSS({
				format: 'beautify',
				level: 1,
				level: 2
      }))
      .pipe(gulp.dest("./build/src/css"))
});


gulp.task('image', function () {
 return gulp.src('./src/img/*')
    //.pipe(image())
    .pipe(gulp.dest('./build/src/img/'));
});

gulp.task('clean', function () {
    return gulp.src('./build/*', {force: true})
        .pipe(clean());
});

var libs = [
  'node_modules/jquery/dist/jquery.min.js',
  'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
  'node_modules/wowjs/dist/wow.min.js',
  'node_modules/slick-carousel/slick/slick.min.js',
  'node_modules/fullpage.js/dist/fullpage.min.js',
  'src/js/libs/revealator.js',
  'src/js/libs/parallax.js',
  'src/js/libs/WOW_scrollSpy.js',
]
gulp.task('libs', function() {
  return gulp.src(libs)
	    .pipe(concat('all_libs.js'))
	    .pipe(gulp.dest("./build/src/js/libs"))
});

gulp.task('script', function() {
  return gulp.src('./src/js/*.js')
      .pipe(gulp.dest("./build/src/js/"))
});


gulp.task('watch', function () {
    gulp.watch('.src/img/*',['image'])
    .on('change', bsync.reload);
    gulp.watch('./src/pug/**/*.pug',['pug'])
    .on('change', bsync.reload);
    gulp.watch('./src/stylus/**/*.styl',['stylus'])
    .on('change', bsync.reload);
    gulp.watch('./src/js/**/*.js',['libs', 'script'])
    .on('change', bsync.reload);
  	
});


var tasks = [
  //'clean',
  'watch',
  'pug',
  'stylus',
  'libs',
  'script',
  'image',
  'serv',

]
gulp.task('default', tasks);






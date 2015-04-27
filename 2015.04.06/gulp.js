var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');

gulp.task('sass', function() {
	var sassdir = 'scss/*.scss';
	gulp.src(sassdir)
		.pipe(sass({
			errLogToConsole: true
		}))
		.pipe(gulp.dest('./css/'))
		.pipe(notify('Done Sass'));
});

gulp.task('default', function() {
	gulp.watch('scss/**/*.scss',['sass']);
});

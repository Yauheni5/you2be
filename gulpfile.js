var gulp = require('gulp'),
    less = require('gulp-less'),
    browserSync = require('browser-sync');


gulp.task('less', function() {
	return gulp.src('app/styles/less/style.less')
	.pipe(less())
	.pipe(gulp.dest('app/styles/css'))
	.pipe(browserSync.reload( {
		stream:true
	}))
});

gulp.task('browserSync', function() {
	browserSync({
		server: {
			baseDir: ''
		},
		notify:false
	});
});

gulp.task('watch', ['browserSync', 'less'], function() {
	 gulp.watch('app/styles/less/*.less', ['less']);
});


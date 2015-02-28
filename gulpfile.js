var os           = require('os'),
	gulp 		 = require('gulp'),
	shell        = require('gulp-shell'),
	clean 		 = require('gulp-clean'),
	sass         = require('gulp-sass'),
	connect 	 = require('gulp-connect');

var task = {
	sass: function(type) {

		gulp.src('./source/themes/all.scss')
			.pipe(sass())
			.pipe(gulp.dest('./build/themes/'));

	},
	
	move: function() {

		gulp.src([
                'source/**/*.html',
                'source/**/*.js',
				'source/**/*.jpg',
				'source/**/*.png'
			])
			.pipe(gulp.dest('./build/'));

	},

	connect: function(type) {

        var version = os.platform(),
        	url = '';

        connect.server({
            root: 'build',
            port: '9999',
            livereload: true
        });

        switch (version) {
            case 'win32':
                url = 'start http://localhost:9999';
                break;
            case 'darwin':
                url = 'open http://localhost:9999';
                break;
        }

        gulp.src('')
            .pipe(shell(url));
            
    },

    watch: function() {
    	var self = this;

    	gulp.watch([
    		'./source/**/*.scss'
    	], function(){
    		self.reload();
    	})
    },

    reload: function() {
    	var self = this;

    	self.sass();
    }
};


gulp.task('clean', function() {
	var strpath = [
			'./build/'
		];

	return gulp.src(strpath, {read: false})
		.pipe(clean());

});


gulp.task('run', ['clean'], function() {
	task.sass();
    task.move();
	task.connect();
	task.watch();
});

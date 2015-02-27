var fs           = require('fs'),
	argv         = require('yargs').argv,
	os           = require('os'),

	gulp 		 = require('gulp'),
	shell        = require('gulp-shell'),
	rename       = require('gulp-rename'),
	wrap         = require('gulp-wrap'),
	clean 		 = require('gulp-clean'),
	sass         = require('gulp-sass'),
	concat       = require('gulp-concat'),
	connect 	 = require('gulp-connect'),
	replace      = require('gulp-replace'),
	declare      = require('gulp-declare');

var dev = argv.dev,
	buildpath = './build/';

if (dev == 'cp') {
	buildpath = build.dir().toString();
}

var task = {
	sass: function(type) {

		gulp.src('./source/themes/all.scss')
			.pipe(sass())
			.pipe(gulp.dest('build/themes'));

	},
	
	move: function() {

		gulp.src([
				'source/**/*.jpg',
				'source/**/*.png'
			])
			.pipe(gulp.dest('build/'));

	},

	connect: function(type) {

        var version = os.platform(),
        	url = '';

        connect.server({
            root: type,
            port: "9999",
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

    	self.templates();
    	self.sass();


		// connect.reload();
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
	task.connect('source');
	task.watch();
);

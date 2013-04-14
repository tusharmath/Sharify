var keys = {
	scripts: {
		'public/site.min.js': ['src/scripts/modules/*.js',
			'src/scripts/viewmodels/*.js',
			'src/scripts/modules/pbSite.js']
	},
	lesspath: ["src/less/vendor/twitter/bootstrap/less",
		"src/less/custom"],
	lessfiles: {
		"public/css/site.min.css": "src/less/main.less"
	},
	imgpath: ['src/images/*.*']
};

var config = {
	//https://github.com/gruntjs/grunt-contrib-copy
	copy: {
		images: {
			files: [{
				src: keys.imgpath,
				dest: 'public/img/',
				filter: 'isFile',
				flatten: true,
				expand: true
			}]
		}
	},
	//https://github.com/gruntjs/grunt-contrib-uglify
	uglify: {
		dev: {
			files: keys.scripts,
			options: {
				beautify: true,
				mangle: false
			}

		},
		prod: {
			files: keys.scripts
		}
	},
	//https://github.com/gruntjs/grunt-contrib-less
	less: {
		dev: {
			options: {
				paths: keys.lesspath
			},
			files: keys.lessfiles
		}
	},
	//https://github.com/gruntjs/grunt-contrib-watch
	watch: {
		lessfiles: {
			files: keys.lesspath,
			tasks: ['less:dev'],
			options: {
				nospawn: true
			},
			imagefiles: {
				files: keys.imgpath,
				tasks: ['copy:imgges'],
				options: {
					nospawn: true
				}
			}

		}
	}
};

module.exports = function(grunt) {
	grunt.initConfig(config);
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['uglify:dev', 'less:dev']);
};
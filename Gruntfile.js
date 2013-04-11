module.exports = function(grunt) {
	grunt.initConfig(config);
	grunt.loadNpmTasks('grunt-contrib-uglify');


	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.registerTask('default', ['uglify', 'less']);
};

var config = {
	//https://github.com/gruntjs/grunt-contrib-uglify
	uglify: {
		prod: {
			files: {
				'public/site.min.js': ['src/scripts/*/*.js']
			}
		}
	},
	//https://github.com/gruntjs/grunt-contrib-less
	less: {
		prod: {
			options: {
				paths: ["src/less/vendor/twitter/bootstrap/less"]
			},
			files: {
				"public/site.min.css": "src/less/style.less"
			}
		}
	}
};
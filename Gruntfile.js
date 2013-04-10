module.exports = function(grunt) {
	grunt.initConfig({
		uglify: {
			dist: {
				files: {
					'public/min/site.min.js': ['public/js/*/*.js']
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['uglify']);
};
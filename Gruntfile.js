module.exports = function(grunt) {
	grunt.initConfig({
		uglify: {
			dist: {
				files: {
					'public/site.min.js': ['src/scripts/*/*.js']
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['uglify']);
};
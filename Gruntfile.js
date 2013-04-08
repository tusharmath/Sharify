module.exports = function(grunt) {
	grunt.initConfig({
		uglify: {
			dist: {
				files: {
					'public/min/site.min.js': ['public/js/*/*.js']
				}
			}
		},
		watch: {
			files: ['public/js/*.js'],
			tasks: ['uglify:dist']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', [
		'uglify']);
};
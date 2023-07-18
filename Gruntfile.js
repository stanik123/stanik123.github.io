const sass = require('sass');
module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		bake: {
			files: {
				expand: true,
				cwd: "src/",
				flatten: false,
				src: ["**/*.html", "!*includes*", "!*templates*"],
				dest: "docs/",
				ext: ".html"
			}
		},
		sass: {
			options: {
				embedSourceMap: true
			},
			files: {
				expand: true,
				cwd: "src/",
				flatten: false,
				src: ["**/*.scss"],
				dest: "docs/",
				ext: ".css"
			}
		},
		watch: {
			bake: {
				files: ["src/**/*.html"],
				tasks: "newer:bake"
			},
			sass: {
				files: ["src/**/*.scss"],
				tasks: "newer:sass"
			}
		}
	});
	grunt.loadNpmTasks('grunt-bake');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-newer');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['watch']);
};
const sass = require('sass');
module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		bake: {
			build: {
				files: [{
					//"docs/cz/domu.html": "src/cz/index.html",
					//"docs/cz/novinky.html": "src/cz/news.html"
					expand: true,
					cwd: "src/",
					flatten: false,
					src: ["**/*.html", "!*/includes/*", "!*templates/*"],
					dest: "docs/",
					ext: ".html",
					rename: function (dest, src) {
						switch (true) {
							case src.includes("cz/"):
								//grunt.log.ok(src);
								file_names = grunt.file.readJSON('src/cz/file_names.json');
								for (var key in file_names) {
									src = src.replace(key, file_names[key]);
									//grunt.log.ok(key + " -> " + file_names[key]);
								}
								//grunt.log.ok(src);
								break;
							case src.includes("de/"):
								file_names = grunt.file.readJSON('src/de/file_names.json');
								for (var key in file_names) {
									src = src.replace(key, file_names[key]);
								}
								break;
							case src.includes("en/"):
								file_names = grunt.file.readJSON('src/en/file_names.json');
								for (var key in file_names) {
									src = src.replace(key, file_names[key]);
								}
								break;
							case src.includes("sk/"):
								file_names = grunt.file.readJSON('src/sk/file_names.json');
								for (var key in file_names) {
									src = src.replace(key, file_names[key]);
								}
								break;
						}
						return dest + src;
					}
				}]
			}
		},
		testDest: {
			build: {
				files: [{
					//"docs/cz/domu.html": "src/cz/index.html",
					//"docs/cz/novinky.html": "src/cz/news.html"
					expand: true,
					cwd: "src/",
					flatten: false,
					src: ["**/*.html", "!*/includes/*", "!templates/*"],
					dest: "docs/",
					ext: ".html",
					rename: function (dest, src) {
						switch (true) {
							case src.includes("cz/"):
								//grunt.log.ok(src);
								file_names = grunt.file.readJSON('src/cz/file_names.json');
								for (var key in file_names) {
									src = src.replace(key, file_names[key]);
									//grunt.log.ok(key + " -> " + file_names[key]);
								}
								//grunt.log.ok(src);
								break;
							case src.includes("de/"):
								file_names = grunt.file.readJSON('src/de/file_names.json');
								for (var key in file_names) {
									src = src.replace(key, file_names[key]);
								}
								break;
							case src.includes("en/"):
								file_names = grunt.file.readJSON('src/en/file_names.json');
								for (var key in file_names) {
									src = src.replace(key, file_names[key]);
								}
								break;
							case src.includes("sk/"):
								file_names = grunt.file.readJSON('src/sk/file_names.json');
								for (var key in file_names) {
									src = src.replace(key, file_names[key]);
								}
								break;
						}
						return dest + src;
					}
				}]
			}
        },
		sass: {
			options: {
				embedSourceMap: true
			},
			build: {
				files: [{
					expand: true,
					cwd: "src/",
					flatten: false,
					src: ["**/*.scss"],
					dest: "docs/",
					ext: ".css"
				}]
			}
		},
		watch: {
			bake: {
				files: ["src/**/*.html", "!*includes*"],
				tasks: "newer:bake"
			},
			bake: {
            	files: ["src/*/includes/*.html"],
            	tasks: "bake"
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

	grunt.registerMultiTask('testDest', function() {
			this.files.forEach( function( file ) {
					grunt.log.ok( "File \"" + file.dest + "\"" );
				}
			);
			//mapping = grunt.file.readJSON('src/cz/file_names.json');
			//grunt.log.ok(mapping.mapping[0]);
			//for (var key in mapping) {
			//	grunt.log.ok(key + " -> " + mapping[key]);
			//}
        }
    );
};
var pkg = require('./package.json'),
	gruntConfig = {
		pkg: pkg,

		// Файлы приложения
		app: {
			templates: {
				index: [
					'js/app/templates/*.html',
					'js/app/**/templates/*.html'
				]
			}
		},

		watch: {
			styles: {
				files: pkg.sassPath + '/*.scss',
				tasks: ['compass:watch']
			},
		},

		requirejs: {
			compile: {
				// Общие опции для всех модулей
				options: {
					paths: {
						requireLib: 'vendor/require',
						// Исключаем забутстрапленые модули из сборки
						'bootstrap/categories': 'empty:',
					},
					baseUrl: 'js/',
					preserveLicenseComments: false,
					findNestedDependencies: true,
					mainConfigFile: 'js/common.js',
					optimize: 'uglify',
					include: ['requireLib']
				}
			}
		},

		// Прекомпиляция шаблонов Handlebars
		// Хэндлбарса пока нет
		handlebars: {
			compile: {
				options: {
					amd: true,
					wrapped: true,
					namespace: 'TPL',
					processName: function(filePath) {
						// Формируем имя шаблона следующим образом:
						// "js/shared/controls/templates/checkbox.html" => "controls:checkbox"
						// "js/widgets/index/ad_block/templates/ad_form.html" => "ad_block:ad_form"
						return filePath.replace(/^js\/(?:\w+\/)*(\w+)\/templates\/(\w+)\.html/gi, '$1:$2');
					}
				},
				files: {
					'js/apps/templates/index.tpl.js': [
						'<%= app.templates.index %>'
					]
				}
			}
		},

		compass: {
			watch: {
				options: {
					sassDir: pkg.sassPath,
					cssDir: pkg.cssPath,
					imagesDir: pkg.imgPath,
					outputStyle: 'expanded',
					noLineComments: false,
					environment: 'development',
					debugInfo: true,
					relativeAssets: true
				}
			},
			dev: {
				options: {
					sassDir: pkg.sassPath,
					cssDir: pkg.cssPath,
					imagesDir: pkg.imgPath,
					outputStyle: 'expanded',
					noLineComments: false,
					environment: 'development',
					debugInfo: true,
					relativeAssets: true,
					force: true
				}
			},
			prod: {
				options: {
					sassDir: pkg.sassPath,
					cssDir: pkg.cssPath + '/build',
					imagesDir: pkg.imgPath,
					outputStyle: 'compressed',
					noLineComments: true,
					environment: 'production',
					relativeAssets: true,
					force: true
				}
			}
		}
	};

module.exports = function(grunt) {
	grunt.initConfig(gruntConfig);
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	// grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.registerTask('default', 'watch');
	grunt.registerTask('compile', ['compass:dev', 'clean']);
	grunt.registerTask('release', ['cssmin', 'uglify', 'compass:prod']);
};
module.exports = function(grunt) {
  var jsFiles = ['src/app/app.module.js','src/app/core/*.js', 'src/app/streams/*.js'];

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      html: {
        files: ['src/index.html'],
        options: {
          livereload: true,
        }
      },
      css: {
        files: ['src/content/sass/app.scss'],
        tasks: ['sass'],
        options: {
          livereload: true,
        }
      },
      js: {
        files: jsFiles,
        tasks: ['jshint', 'browserify'],
        options: {
          livereload: true,
        }
      }
    },

    browserify: {
      dist: {
        options: {
          transform: [
            ["babelify", {
              loose: "all"
            }]
          ]
        },
        files: {
          "src/dist/modules.js": jsFiles
        }
      }
    },

    jshint: {
      files: {
        src: jsFiles
      },
      options: {
        browser: true,
        esnext: true,
      }
    },

    sass: {
      dist: {
        files: {
          'src/content/css/app.css' : 'src/content/sass/app.scss'
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', ['watch']); //Will run 'watch' when u enter grunt command
  grunt.registerTask('build', ['browserify']);
};

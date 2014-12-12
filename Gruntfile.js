module.exports = function(grunt) {

  var sassOption = 'expanded';

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    watch: {
      sass: {
        files: ['jupe.scss'],
        tasks: ['sass']
      },
      livereload: {
          options: {
              livereload: '<%= connect.options.livereload %>'
          },
          files: [
              'test/*.*',
              'jupe.css'
          ]
      }
    },
    sass: {
      dist: {                            // Target
        options: {                       // Target options
          style: sassOption
        },
        files: {                         // Dictionary of files
          'jupe.css': 'jupe.scss'
        }
      }
    },
    connect: {
        options: {
            port: 9000,
            open: true,
            livereload: 35729,
            // Change this to '0.0.0.0' to access the server from outside
            hostname: 'localhost'
        },
        server: {
          options: {
            port: 9001,
            base: './'
          }
        }
      }

  });


  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['sass', 'connect', 'watch']);

};



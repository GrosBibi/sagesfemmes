module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    // Configure a mochaTest task
    simplemocha: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: "./server/test/*.js"
      }
    },

    watch: {
      files: "./server/**/*.js",
      tasks: ['test']
    }
  });

  grunt.registerTask('test', 'simplemocha');
};
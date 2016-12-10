module.exports = function(grunt) {

// Project configuration.
grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
  js: {
    src: 'src/js/*.js',
    dest: 'js/dist/concat.min.js'
  },
  css: {
    src: 'src/css/*.css',
    dest: 'css/dist/concat.min.css'
  }
    },
    uglify: {
      dist: {
        src: ['js/src/*.js'],
        dest: 'js/dist/concat.min.js',
      }
    },
    cssmin: {
  options: {
    shorthandCompacting: false,
    roundingPrecision: -1
  },
  target: {
    files: {
      'concat.min.css': 'css/dist/concat.min.css'
    }
  }
}
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['concat', 'cssmin', 'uglify']);

};

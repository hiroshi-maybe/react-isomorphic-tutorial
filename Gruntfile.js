module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.config('watch', {
    react: {
      files: 'views/**/*.jsx',
      tasks: ['browserify']
    }
  });

  grunt.config('browserify', {
    options: {
      transform:  [ require('grunt-react').browserify ]
    },
    app: {
      src: ['public/view/**/*.jsx'],
      dest: 'public/build/index.js'
    }
  });

  grunt.registerTask('build', ['browserify']);
};
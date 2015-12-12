/**
 * Compiles LESS files into CSS.
 *
 * ---------------------------------------------------------------
 *
 * Only the `assets/styles/importer.less` is compiled.
 * This allows you to control the ordering yourself, i.e. import your
 * dependencies, mixins, variables, resets, etc. before other stylesheets)
 *
 * For usage docs see:
 *    https://github.com/gruntjs/grunt-contrib-less
 */
module.exports = function(grunt) {

  grunt.config.set('browserify', {
    options: {
      transform: [
        ["babelify", {presets: ["es2015", "react"]}]
      ],
      watch: true
    },
    dev: {
      src: ['./components/**/*.jsx','./components/**/*.js','./components/*.js'],
      dest: './assets/js/bundle.js'
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
};



